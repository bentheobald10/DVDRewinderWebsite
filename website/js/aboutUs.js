google.maps.event.addDomListener(window, 'load', initialise);

function initialise()
{
	var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
    	center: new google.maps.LatLng(-37.6733, 144.8433),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    
    var map = new google.maps.Map(mapCanvas, mapOptions)
}