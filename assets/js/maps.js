function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 6,
		center: {
			lat: 56.09839,
			lng: 11.060209
		}
	});

	const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	const locations = [
		{ lat: 56.00389, lng: 12.37755 },
		{ lat: 55.9759, lng: 12.11008 }
	];
	// Esrum sø, Arresø

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

/* Locations to introduce

Sea
{ lat: 56.035190, lng: 12.619449 }, ok
{ lat: 55.992499, lng: 12.561722 }, ok
{ lat: 56.093426, lng: 12.467988 }, ok
{ lat: 56.055800, lng: 12.056413 }, ok
{ lat: 55.965391, lng: 11.842141 } ok


Forbidden:
{ lat: 55.929741, lng: 12.522639 }, ok
{ lat: 56.099830, lng: 12.402078 }, ok
{ lat: 56.103266, lng: 12.380269 }, ok
{ lat: 56.126424, lng: 12.308342 }, ok
{ lat: 56.106938, lng: 12.177238 }, ok 
{ lat: 56.099063, lng: 12.160142 } ok*/
