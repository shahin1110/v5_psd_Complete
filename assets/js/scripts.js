$(document).ready(function(){

	//Banner - Carousel
	$('.banners').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true
	});
//Works - Carousel
	$('.works-item').owlCarousel({
		items:3,
		loop:true,
		nav:true,
		dots:false,
		margin:30
	});

// Work Popup 
	$('.work-popup').magnificPopup({
		type: 'image',
	  	gallery:{
	   		enabled:true
	  	}
	});

	// Testimonials - Carousel
	$('.testimonials').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true
	});
	// asPieProgress
	$('.pie_progress').asPieProgress({
        namespace: 'pie_progress',
        speed: 80
     });
	$('.pie_progress').asPieProgress('start');

// Back TO Top
	$('.back-to-top').click(function(){
		$('html,body').animate({
			scrollTop:0
		},1000);

 
		return false;
	});



});