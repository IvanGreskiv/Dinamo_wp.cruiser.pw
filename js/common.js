$(document).ready(function() {

	 var container_height = $('.wrapper').innerHeight();
	 $('.sidebar').height(container_height);


	 $(".owl-carousel").owlCarousel({
	 	items:1,
	 	navText: false,
	 	loop: true,	  
	 	autoplay: true,
	 	nav:true,
	 	dots:true,
	 	responsive: false,
	 	autoWidth: false,
		autoplaySpeed: 1500, //скорость прокрутки при автоматической перемотке
		autoplayTimeout: 1500,  // сколько показывает слайд 
		navSpeed: 1500, // скорость прокрутки при ручной перемотке
		dotsSpeed: 1500, // скорость прокрутки при ручной перемотке 
		autoplayHoverPause: true // остановка прокрутки при наведении на слайд
	});

	 $(".owl-carousel-gallery").owlCarousel({
	 	items:1,
	 	navText: false,
	 	loop: true,	  
	 	autoplay: true,
	 	nav:true,
	 	responsive: false,
	 	autoWidth: false,
		autoplaySpeed: 1500, //скорость прокрутки при автоматической перемотке
		autoplayTimeout: 1500,  // сколько показывает слайд 
		navSpeed: 1500, // скорость прокрутки при ручной перемотке
		dotsSpeed: 1500, // скорость прокрутки при ручной перемотке 
		autoplayHoverPause: true // остановка прокрутки при наведении на слайд
	});

	 

	//  $('.gallery-item').click(function(e){
	//  	e.preventDefault();
	//  	$('.gallery-item.active-gallery-item').removeClass('active-gallery-item');
	//   	$(this).toggleClass('active-gallery-item');
	// });
	 YAHOO.namespace("example.calendar");

	 YAHOO.example.calendar.init = function() {
	 	YAHOO.example.calendar.cal1 = new YAHOO.widget.Calendar("cal1","cal1Container");
	 	YAHOO.example.calendar.cal1.render();
	 }

	 YAHOO.util.Event.onDOMReady(YAHOO.example.calendar.init);

	});