function initMap() {
	let uluru = { lat: 47.81591996, lng: 35.17058551 };
	let map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: uluru
	});

	let marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: 'favikonMap.png',
		title: 'Beetroot Academy'
	});

	let content = "<p style='color: #202224'>Beetroot Academy</p>";
	let infowindow = new google.maps.InfoWindow({
		content: content
	});

	infowindow.open(map, marker);
}
