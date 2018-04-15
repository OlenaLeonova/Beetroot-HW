function initMap() {
	let uluru = { lat: 47.81591996, lng: 35.17058551 };
	let map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: uluru,
		disableDefaultUI: true
	});

	let marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: ''
	});

	infowindow.open(map, marker);
}
