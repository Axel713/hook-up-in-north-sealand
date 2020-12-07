/**
 * The initMap() function that allows the user to display markers on a Google Map (API sourced)
 * to find some lake, sea and forbidden locations for fishing.
 */
function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 6,
		center: {
			lat: 56.09839,
			lng: 11.060209
		}
	});

	const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	let locations = [
		{ lat: 56.00389, lng: 12.37755 },
		{ lat: 55.9759, lng: 12.11008 }
	];
	// Lake initial
	if (document.getElementById("lake").checked) {
		locations.splice(0, locations.length);
		locations.push(
			{ lat: 56.00389, lng: 12.37755 },
			{ lat: 55.9759, lng: 12.11008 }
		);
		// Lake select
	} else if (document.getElementById("sea").checked) {
		locations.splice(0, locations.length);
		locations.push(
			{ lat: 56.03519, lng: 12.619449 },
			{ lat: 55.992499, lng: 12.561722 },
			{ lat: 56.093426, lng: 12.467988 },
			{ lat: 56.0558, lng: 12.056413 },
			{ lat: 55.965391, lng: 11.842141 }
		);
		// Sea select
	} else if (document.getElementById("forbidden").checked) {
		locations.splice(0, locations.length);
		locations.push(
			{ lat: 55.929741, lng: 12.522639 },
			{ lat: 56.09983, lng: 12.402078 },
			{ lat: 56.103266, lng: 12.380269 },
			{ lat: 56.126424, lng: 12.308342 },
			{ lat: 56.106938, lng: 12.177238 },
			{ lat: 56.099063, lng: 12.160142 }
		);
		// Forbidden select
	}

	const markers = locations.map(function (location, i) {
		return new google.maps.Marker({
			position: location,
			label: labels[i % labels.length]
		});
	});

	new MarkerClusterer(map, markers, {
		imagePath:
			"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
	});
}
