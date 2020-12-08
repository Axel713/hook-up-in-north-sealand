/**
 * The fishTest() function is used by the Can I take my Catch Home section of the project.
 * It allows the user to verify if today's catch date is ok according to various species of fish.
 * It also allows to verify if the length of the caught fish is enough for the user to keep it or
 * if he must release it.
 */
function fishTest() {
	// Declare fish data object
	const fishData = {
		fishCat: [
			{
				name: "lavaret",
				seasonStart: "11/01/2020",
				seasonEnd: "01/31/2021",
				size: 36
			},
			{
				name: "mackerel",
				seasonStart: false,
				seasonEnd: false,
				size: 20
			},
			{
				name: "perch",
				seasonStart: false,
				seasonEnd: false,
				size: 20
			},
			{
				name: "pike",
				seasonStart: "04/01/2021",
				seasonEnd: "04/30/2021",
				size: 60
			},
			{
				name: "plaice",
				seasonStart: "01/15/2021",
				seasonEnd: "01/30/2021",
				size: 27
			}
		]
	};

	// Obtain value from "fishList" dropdown list
	const selectedFish = document.getElementById("fishList");
	const selFishValue = selectedFish.options[selectedFish.selectedIndex].value;

	// Access and store fishCat array of objects content in a variable
	const fishCatVar = fishData.fishCat;

	// For loop based on fishCat array
	for (let i = 0; i < fishCatVar.length; i++) {
		// Match selected value from dropdownlist to object data in fishData object.
		if (selFishValue === fishCatVar[i].name) {
			// Store matching fish in variable
			const filtFish = fishCatVar[i];

			// ----------------------------------------------------------------------------- DATE TEST -----------------------------------------------------------------------------
			// Process fish without restriced period.
			if (
				filtFish.seasonStart === false &&
				filtFish.seasonEnd === false
			) {
				document.getElementById("verdict-date").innerHTML =
					"No restricted period. Test your fish size below!";
			} else {
				// To process fish with restricted period.
				// Today's date.
				const myToday = new Date();
				// Store myToday in a variable and converts it to the number of milliseconds since the Unix Epoch.
				const msMyToday = myToday.getTime();

				// Store seasonStart and seasonEnd dates in discreet variables and convert them to the number of milliseconds since the Unix Epoch.
				const startSeas = Date.parse(filtFish.seasonStart);
				const endSeas = Date.parse(filtFish.seasonEnd);

				// Process and give verdict from restriced period dates.
				if (msMyToday < startSeas || msMyToday > endSeas) {
					document.getElementById("verdict-date").innerHTML =
						"Within allowed period. Test your fish size below!";
				} else {
					document.getElementById("verdict-date").innerHTML =
						"Outside allowed period. Release your fish.";
				}
			}

			// ----------------------------------------------------------------------------- SIZE TEST -----------------------------------------------------------------------------
			// Access and store filtered fish control size in a variable.
			const setFishSize = filtFish.size;

			// Access and store button in a variable.
			const sizeTestButton = document.getElementById("sizeTestBtn");

			// Button's script to process entered size versus control size (stored in fishData)
			sizeTestButton.onclick = function () {
				// Access and record value entered in input field in a variable
				const fishSize = document.getElementById("fishSize").value;

				// Output size test verdict verdict
				if (fishSize >= setFishSize) {
					document.getElementById("verdict-size").innerHTML =
						"You can keep your fish!";
				} else {
					document.getElementById("verdict-size").innerHTML =
						"You must release the fish!";
				}
			};
		}
	}
}
