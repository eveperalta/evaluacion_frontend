$(document).ready(function(){
	// tu codigo va acá
	 $('[data-toggle="tooltip"]').tooltip(); 
	//  $("#myModal").modal(); aparece al cargar la pagina
	var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(-33.437411, -70.650146),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  		}
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

   //funcion validar formularios

//FUNCION PARA VALIDAR ORIGEN Y DESTINO OK
function validarSelect(input){
	var mensaje = "";
	var bool = true;
	if($("select").val()== ""){
		mensaje += "Selecciona una ruta" 
		bool = false
	}
	$(input).siblings().filter("span").remove();// NO FUNCIONA
		mostrarMsj1(mensaje,input);
		return bool
};
//funcion para el mensaje
function mostrarMsj1(mensaje, input){
	if(mensaje == ""){
		return;
	}
	var span_ruta = $("<span>" + mensaje + "</span>");
	$('select').parent().append(span_ruta);
}
//funcion del boton busqueda OK
$("#search").on("click",function(e){
	e.preventDefault()
	if(validarSelect() == true){
		$("#carro").removeClass("hidden");
		$("#search2").removeClass("hidden");
	var directionsDisplay = new google.maps.DirectionsRenderer();
	var directionsService = new google.maps.DirectionsService();
		console.log(google.maps)
//escribir la ruta en el mapa ok
var request = {
 origin: $('#origen').val(),
 destination: $('#destino').val(),
 travelMode: google.maps.DirectionsTravelMode.DRIVING,
 unitSystem: google.maps.DirectionsUnitSystem.METRIC,
 provideRouteAlternatives: true
 };
directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setMap(map);
        //directionsDisplay.setPanel($("#panel_ruta").get(0));
        directionsDisplay.setDirections(response);
        console.log(response.routes[0].legs[0].distance.text)

//calcular valor del viaje
        var km = response.routes[0].legs[0].distance.text;
        var valor = parseInt(km.substring(0, km.indexOf(' ')));

        	console.log(km, valor)
        $('.precioMoto').html('')
        $('.precioMoto').html(parseInt(valor/21*673))
        $('.precioAuto').html('')
        $('.precioAuto').html(parseInt(valor/12*673))
        $('.precioVan').html('')
        $('.precioVan').html(parseInt(valor/7*673))
        $('.precioCamion').html('')
        $('.precioCamion').html(parseInt(valor/6*673))

    } else {
            console.log(response);
    }
});		
	}
});


});//end document.ready


/*-------------------------------------------------------------------
--------------------------------------------------------------------*/
function validarTransporte(){
	if(validarMoto($(".moto"))== false){
		return false
	}
	if(validarAutmovil($(".automovil"))== false){
		return false
	}
	if(validarVan($(".van"))== false){
		return false
	}
	if(validarCamion($(".camion"))== false){
		return false
	}
	return true
};
//funcion para el mensaje
function mostrarMsj(mensaje, input){
	if(mensaje == ""){
		return;
	}
	var span_mensaje = $("<span>" + mensaje + "</span>");
	$('.radio').parent().append(span_mensaje);
}

//funciones para validar los input radio
function validarMoto(input){
	var mensaje = "";
	var bool = true;
	if($(".moto").is(":checked")){
	   	alert($('precioMoto'))
	}else{
		mensaje += "Selecciona un Vehiculo" 
			bool = false
		};
	$(".radio").siblings().filter("span").remove();// NO FUNCIONA
		mostrarMsj(mensaje, input);
		return bool
	};
function validarAutmovil(input){
	var mensaje = "";
	var bool = true;
	if($(".automovil").is(":checked")){
	   alert($('precioAuto'))
	}else{
		mensaje += "Selecciona un Vehiculo"
			bool = false
		};
	$(".radio").siblings().filter("span").remove();// NO FUNCIONA
		mostrarMsj(mensaje, input);
		return bool
	};	
function validarVan(input){
	var mensaje = "";
	var bool = true;
	if($(".van").is(":checked")){
	   alert($('precioVan'))
	}else{
		mensaje += "Selecciona un Vehiculo" 
			bool = false
		};
	$(".radio").siblings().filter("span").remove();// NO FUNCIONA
		mostrarMsj(mensaje, input);
		return bool
	};	
function validarCamion(input){
	var mensaje = "";
	var bool = true;
	if($(".camion").is(":checked")){
	   alert($('precioCamion'))
	}else{
		mensaje += "Selecciona un Vehiculo" 
			bool = false
		};
	$(".radio").siblings().filter("span").remove();// NO FUNCIONA
		mostrarMsj(mensaje, input);
		return bool
	};

$("#search2").on("click",function(e){
	if(validarMoto()== true){
		
	}else{
		if(validarAutmovil()==true){
			document.getElementById("#myModal")
		}
		if(validarVan()== true){
			document.getElementById("#myModal")
		}
		if(validarCamion()== true){
			document.getElementById("#myModal")
		}
	}
});


















