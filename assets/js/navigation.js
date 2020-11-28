/*--------------------------------------------------------------------------- navbar*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navbar() {
	var x = document.getElementById("myNavmenu");
	if (x.className === "navmenu") {
		x.className += "responsive";
	} else {
		x.className = "navmenu";
	}
}
/*-------------------------------------------------------------------------- /navbar*/

/*------------------------------------------------------------- collapsible sections*/
var coll = document.getElementsByClassName("colla-sect");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

/*------------------------------------------------------------ /collapsible sections*/
