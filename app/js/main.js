	//prevent # links from moving to top
	$('a[href="#"][data-top!=true]').click(function(e){
		e.preventDefault();
	});

	smoothScroll.init({
		offset: 0
	});

		if($('.popup-link').length > 0){
		$('.popup-link').magnificPopup({
		  type: 'image',
		  gallery:{
			enabled:true
		  }
			// other options
		});
	}


	//  toggle menu
	$( ".menu-block" ).hide();

	$( ".toggle-nav" ).click(function() {
	  $( ".menu-block" ).slideToggle( "slow");
	});

	$( ".menu li a" ).click(function() {
	  $( ".menu-block" ).slideToggle( "slow");
	});

	//	SCROLL

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 100) {
			$(".navbar-inverse").addClass("navbar-scroll");
		} else {
			$(".navbar-inverse").removeClass("navbar-scroll");
		}

	});

	//	MENU-TOGGLE
	jQuery(document).ready(function () {
		$( ".menu-toggle" ).click(function() {
			 $( ".menu" ).slideToggle( "slow", function() {
				// Animation complete.
			  });

		});
	});

	//	SCROLL TO TOP

	$(document).ready(function(){

		//Check to see if the window is top if not then display button
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});

		//Click event to scroll to top
		$('.scrollToTop').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});

	});


	//	PRELOADER

	//<![CDATA[
		$(window).load(function() { // makes sure the whole site is loaded
			$('#status').fadeOut(); // will first fade out the loading animation
			$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(350).css({'overflow':'visible'});
		})
	//]]>

	//	WOW
	var wow = new WOW(
	  {
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       100,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,       // trigger animations on mobile devices (default is true)
		live:         true,       // act on asynchronously loaded content (default is true)
		callback:     function(box) {
		  // the callback is fired every time an animation is started
		  // the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	);
	wow.init();