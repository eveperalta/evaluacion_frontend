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