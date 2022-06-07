mapboxgl.accessToken="pk.eyJ1IjoieWFtdW5hMTIzIiwiYSI6ImNsMWRhcHY3ejA4ZGoza24zazdrNmNmaGwifQ.t-kPX15gsZG7azvrzyHfZA";
var latitude = 18.518453974339742
var longitude = 73.92819148274732


// creating the map
var googleMap = new mapboxgl.Map({
    container:"map",
    style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 15

})



googleMap.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
);

googleMap.addControl(
	new MapboxDirections({
		accessToken: mapboxgl.accessToken
	}),
	'top-left'
);