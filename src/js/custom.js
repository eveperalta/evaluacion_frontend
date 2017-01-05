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

//funcion validar formularios
function validarCampos(){
if(validarSelect($(".form-control"))==false){
	return false
}
return true
};
//funcion para el mensja de validacion
function mostrarMsj(mensaje, input){
	var mensaje = "";
	if(mensaje == ""){
		return;
	}
	var span_msj = $("<span>" + mensaje + "<span>");
	$(input).parent().append(span_msj);
};
function validarSelect(input){
	var mensaje = "";
	var bool=true;
	if($("select").val()== ""){
		var span_nombre = $("<span>" + "Selecciona una ruta" + "</span>");
		$('select').parent().append(span_nombre);
		return false
	}
	$(input).siblings().filter("span").remove();

	mostrarMsj(mensaje, input);
	return bool
};








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