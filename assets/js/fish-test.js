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
    console.log("Selected value drom dropdown list: ", selFishValue);

    // Access and store fishCat array of objects content in a variable
    const fishCatVar = fishData.fishCat;
    // console.log(fishCatVar);