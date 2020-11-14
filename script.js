  mapboxgl.accessToken = 'pk.eyJ1IjoiaWhhdmVub25hbWUiLCJhIjoiY2toZzR5cnp3MDRpczJ0bzF4eTVjdTJveCJ9.FDIPnfgxFjtvfC32PvvAZg';

  navigator.geolocation.getCurrentPosition(success, error, {
  		enableHighAccuracy : true
  })

  function success(position) {
  	console.log(position);
  	setupMap([position.coords.longitude, position.coords.latitude])
  }

  function error(){
  	setupMap([-2.25, 53.48])
  }


  function setupMap(center){
  	var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center : center,
    zoom : 15
 	 })

  	var nav = new mapboxgl.NavigationControl();
	map.addControl(nav);

	var directions = new MapboxDirections({
  		accessToken: mapboxgl.accessToken
	});
	map.addControl(directions, 'top-left');

  }


  