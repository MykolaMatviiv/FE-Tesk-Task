$ = jQuery;

$(function(){
	burgerMenu();
});

function burgerMenu(){
	$('#header .burger').on('click', function(e){
		$('#header .burger').toggleClass('open-menu');
		$('#menu-popup').fadeToggle().toggleClass('active');
		$('body').toggleClass('disabled-scroll');
	});
	$(document).mouseup(function (e) {
		var selector = $('.menu-popup-wrap, .menu-popup-contact, #header .burger');
		if (!selector.is(e.target) && selector.has(e.target).length == 0) {
			$('#header .burger').toggleClass('open-menu');
			$('#menu-popup').fadeToggle().toggleClass('active');
			$('body').toggleClass('disabled-scroll');
		}
	});
}