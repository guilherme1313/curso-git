$(document).ready(function()
{

	var botao=$('.bt1'); //classe no a ue vai ser clicado
	var dropDown = $ ('.ul-noticias');//classe do submenu que vai abrir os links do submenu
	botao.on('click', function(event)
	{
		dropDown.stop(true,true).slideToggle();
		event.stopPropagation();
	});
});