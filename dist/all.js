function Auto(){
	this.litrosGastados = function(distancia){
		// retorna la cantidad de litros que gasta en una distancia
	}
}

function Camion(){
	this.litrosGastados = function(distancia){
		// retorna la cantidad de litros que gasta en una distancia
	}
}

function Camioneta(){
	this.litrosGastados = function(distancia){
		// retorna la cantidad de litros que gasta en una distancia
	}
}

function get_regiones(){
	return [
		{
			name: "arica",
			distance: 0
		},
		{
			name: "iquique",
			distance: 0
		},
		{
			name: "antofagasta",
			distance: 0
		},
		{
			name: "copiapo",
			distance: 0
		},
		{
			name: "la_serena",
			distance: 0
		},
		{
			name: "valparaiso",
			distance: 0
		},
		{
			name: "rancagua",
			distance: 0
		},
		{
			name: "talca",
			distance: 0
		},
		{
			name: "concepcion",
			distance: 0
		},
		{
			name: "temuco",
			distance: 0
		},
		{
			name: "valdivia",
			distance: 0
		},
		{
			name: "puerto_montt",
			distance: 0
		},
		{
			name: "coyhaique",
			distance: 0
		},
		{
			name: "punta_arenas",
			distance: 0
		},
		{
			name: "santiago",
			distance: 0
		}
	]
}
$(document).ready(function(){
	// tu codigo va acá
	 $('[data-toggle="tooltip"]').tooltip(); 
});

/*-------------------------------------------------------------------
--------------------------------------------------------------------*/

//funcion validar formularios
function validarCampos(){
if(validarSelect($(".form-control"))==false){
	return false
}
return true
};


function validarSelect(input){
	var mensaje = "";
	var bool = true;
	if($("select").val()== ""){
		var span_msj = $("<span>" + "Selecciona una ruta" + "</span>");
		$("select").parent().append(span_msj);
		bool = false
	}
	$(input).siblings().filter("span").remove();// NO FUNCIONA
		return bool
};
$("#search").on("click",function(e){
	e.preventDefault()
	if(validarSelect() == true){
	$("#carro").removeClass("hidden");	
	}
});








/*validar cantidad de pasajeros

function myFunction() {
    var x, text;
    var bool = true;
    // obtener el valor del input field pasajeros
    x = document.getElementById("psj").value;
    // si el valor no es un numero, o es menor o mayor q 0
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Indique cantidad";
        bool = false
    } 
    document.getElementById("txt").innerHTML = text;
}*/
var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();


$(document).ready(function() {
 var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(-33.437411, -70.650146),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

});


function Moto(){
	this.litrosGastados = function(distancia){
		// retorna la cantidad de litros que gasta en una distancia
	}
}

  /*CUSTOM LINKS SCROLLING FUNCTION */
$(document).ready(function(){
  $('.navbar a[href*="#"]').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({ scrollTop: targetOffset }, 800); //set scroll speed here
        return false;
      }
    }
  });
});