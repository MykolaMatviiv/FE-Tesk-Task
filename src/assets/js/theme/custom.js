$ = jQuery;

$(function(){
	burgerMenu();

	bunerCourses();

	/*-------- Resize --------*/
	$(window).resize(function() {
		trianglePosition();
	});
});

function burgerMenu(){
	$(window).on('scroll', function(){
		let currentScroll = $(this).scrollTop();
		if(currentScroll >= 150){
			$('#header').addClass("scrolled");
		}else{
			$('#header').removeClass("scrolled");
		}
	});
	$('#header .burger').on('click', function(e){
		$('#header .burger').toggleClass('open-menu');
		$('#menu-popup').fadeToggle().toggleClass('active');
		$('body').toggleClass('disabled-scroll');
	});
	$(document).mouseup(function (e) {
		let selector = $('.menu-popup-wrap, .menu-popup-contact, #header .burger');
		if (!selector.is(e.target) && selector.has(e.target).length == 0) {
			$('#header .burger').removeClass('open-menu');
			$('#menu-popup').fadeOut().removeClass('active');
			$('body').removeClass('disabled-scroll');
		}
	});
}

function bunerCourses(){
	trianglePosition();
	$(".buner-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// fade: true,
		draggable: 'false',
		swipe: 'false',
		swipeToSlide: 'false',
		touchMove: 'false',
		draggable: 'false',
		accesibility: false,
		draggable: false,
		swipe: false,
		touchMove: false,
	});
	$('.buner-courses').on('click', '.courses-tab:not(.active)', function(e){
		let slideno = $(this).data('tab');
		$('.buner-slider').slick('slickGoTo', slideno - 1);
		$('.buner-courses .courses-tab').removeClass('active');
		$(this).addClass('active');
		$('.buner-courses .courses-info-block').fadeOut();
		$('.buner-courses .courses-info-block[data-tab='+slideno+']').fadeIn();
		trianglePosition();
	});
}

function trianglePosition(){
	let activeTab = $('.buner-courses .courses-tab.active');
	let offsetTab = activeTab.offset();
	let widthTab = activeTab.width();
	let triangleWidth = offsetTab.left + widthTab / 2;
	$('.buner-courses .triangle-left').width(triangleWidth);
}