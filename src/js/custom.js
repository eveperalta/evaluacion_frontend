$(document).ready(function(){
	// tu codigo va acá
	 $('[data-toggle="tooltip"]').tooltip(); 
});

$(document).ready(function() {
 var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(-33.4375545, -70.65049),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
});