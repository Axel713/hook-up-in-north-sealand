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
