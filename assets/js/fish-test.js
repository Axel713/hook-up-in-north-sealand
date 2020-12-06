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
	// Console log selected value
	//console.log("Selected value drom dropdown list: ", selFishValue);

	// Access and store fishCat array of objects content in a variable
	const fishCatVar = fishData.fishCat;
	// console.log(fishCatVar);

	// For loop based on fishCat array
	for (let i = 0; i < fishCatVar.length; i++) {
		//console.log(fishCatVar[i]);
		//console.log(fishCatVar[i].name);
		//console.log(fishCatVar[i]["seasonStart"]);

		// If conditional statement to match selected value from dropdownlist to object data in fishData object.
		if (selFishValue === fishCatVar[i].name) {
			// Store matching fish in variable
			const filtFish = fishCatVar[i];
			//console.log(filtFish);
			//console.log(filtFish.seasonStart, filtFish.seasonEnd);

			// ----------------------------------------------------------------------------- DATE TEST -----------------------------------------------------------------------------
			// If conditional statement to process fish without restriced period.
			if (filtFish.seasonStart == false && filtFish.seasonEnd == false) {
				//console.log("Passed false test");
				document.getElementById("verdict-date").innerHTML =
					"No restricted period. Test your fish size below!";
			} else {
				// else statement to process fish with restricted period.
				// Today's date.
				const myToday = new Date();
				// Store myToday in a variable and converts it to the number of milliseconds since the Unix Epoch.
				const msMyToday = myToday.getTime();

				// Store seasonStart and seasonEnd dates in discreet variables and convert them to the number of milliseconds since the Unix Epoch.
				const startSeas = Date.parse(filtFish.seasonStart);
				const endSeas = Date.parse(filtFish.seasonEnd);
				//console.log(startSeas, endSeas);

				// If-else statement to process and give verdict from restriced period dates.
				if (msMyToday < startSeas || msMyToday > endSeas) {
					document.getElementById("verdict-date").innerHTML =
						"Within allowed period. Test your fish size below!";
					//console.log("OK");
				} else {
					document.getElementById("verdict-date").innerHTML =
						"Outside allowed period. Release your fish.";
					//console.log("NOT OK");
				}
			}

			// ----------------------------------------------------------------------------- SIZE TEST -----------------------------------------------------------------------------
			// Access and store filtered fish control size in a variable.
			const setFishSize = filtFish.size;
			//console.log(setFishSize);

			// Access and store button in a variable.
			const sizeTestButton = document.getElementById("sizeTestBtn");

			// Button's script to process entered size versus control size (stored in fishData)
			sizeTestButton.onclick = function () {
				// Access and record value entered in input field in a variable
				const fishSize = document.getElementById("fishSize").value;

				// If-else statement to produce verdict
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
