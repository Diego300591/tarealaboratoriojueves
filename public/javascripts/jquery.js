$(function(){
	console.log("cargando Jquery");
	$(".form-control").keydown(function(event) {
		if($(this).val()!=""&&event.keyCode==13)
		{
			console.log("ingresa");
			$("#mensajes").append("<li>"+$(this).val()+"</li>");
		}
	});
})
