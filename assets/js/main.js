/*------------------------------------------------------------- navbar*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navbar() {
    var x = document.getElementById("myNavmenu");
    if (x.className === "navmenu") {
      x.className += "responsive";
    } else {
      x.className = "navmenu";
    }
  }