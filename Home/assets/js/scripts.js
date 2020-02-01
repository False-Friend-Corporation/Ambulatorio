/************************************************
Template Name: Medical-Care Boostrap Template
Author: BoostrapMart
Develop By: BoostrapMart
Developer URL: http://info@bootstrapmart.com
************************************************/

(function($) {

    'use strict';

    /**
     * Table Of Content
     * 
     *  1. [SLIDER SWIPER] 	- SLIDER 1
     *  2. [OWL CAROUSEL]  	- MEET OUR DOCTORS STYLE 2
     *  3. [OWL CAROUSEL]  	- LATEST NEWS
     *  4. [OWL CAROUSEL]  	- LATEST TWEET (FOOTER)
     *  5. [OWL CAROUSEL]  	- TESTIMONIAL 2
     *  6. [OWL CAROUSEL]  	- SHOP HOME
     *  7. [OWL CAROUSEL]  	- TIME TABLE
     *  8. [ACCORDION]  	- CHANGE ICON TOGGLE ACCORDION SECTION OUR DEPARTMENTS 3 [ABOUT US PAGE]
     *  9. [OWL CAROUSEL]  	- POST IMAGES
     *  10. NAVIGATION MENU / NAVBAR HOVER
     *
     */

     	// 1. SLIDER SWIPER
	    var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        paginationClickable: true,
	        spaceBetween: 30,
	        centeredSlides: true,
	        autoplay: 4000,
	        effect: 'fade',
	        autoplayDisableOnInteraction: false
	    });

	    // 2. OWL CAROUSEL MEET OUR DOCTORS STYLE 2
	    $('#section-meetourdoctors .owl-carousel').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:false,
		    autoplay:true,
    		autoplayTimeout:2000,
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:2
		        },
		        1000:{
		            items:4
		        }
		    }
		});

	    // 3. OWL CAROUSEL MEET OUR DOCTORS
	    $('#section-latestnews .owl-carousel').owlCarousel({
		    loop:true,
		    margin:32,
		    nav:false,
		    autoplay:true,
    		autoplayTimeout:2000,
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		});

		// 4. OWL CAROUSEL LATEST TWEET (FOOTER)
	    $('#section-footer .owl-carousel').owlCarousel({
		    loop:true,
		    margin:32,
		    nav:false,
		    autoplay:true,
    		autoplayTimeout:2000,
		    responsive:{
		        0:{
		            items:1
		        }
		    }
		});

		// 5. OWL CAROUSEL TESTIMONIAL 2
	    $('#section-testimonial-2 .owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:false,
		    autoplay:true,
    		autoplayTimeout:2000,
		    responsive:{
		        0:{
		            items:1
		        }
		    }
		});

		// 6. OWL CAROUSEL SHOP HOME
	    $('#section-shop-home .owl-carousel').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    autoplay:true,
    		autoplayTimeout:2000,
    		dots:false,
    		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:2
		        },
		        1000:{
		            items:4
		        }
		    }
		});

	    // 7. OWL CAROUSEL TIME TABLE
	    $('#section-timetable .owl-carousel').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    autoplay:true,
    		autoplayTimeout:2000,
    		dots:false,
    		navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:2
		        },
		        992:{
		            items:6
		        },
		        1200:{
		            items:7
		        }
		    }
		});

	    // 8. CHANGE ICON TOGGLE ACCORDION SECTION OUR DEPARTMENTS 3 [ABOUT US PAGE]
	    function toggleIcon(e) {
	        $(e.target)
	            .prev('.panel-heading')
	            .find(".more-less")
	            .toggleClass('glyphicon-plus glyphicon-minus');
	    }
	    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
	    $('.panel-group').on('shown.bs.collapse', toggleIcon);

	    //  9. OWL CAROUSEL POST IMAGES
	    $('.list-blogs .owl-carousel').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:false,
		    autoplay:true,
    		autoplayTimeout:2000,
		    responsive:{
		        0:{
		            items:1
		        }
		    }
		});

        // 10. NAVIGATION MENU / NAVBAR HOVER
        $('ul.nav li.dropdown').on( 'mouseenter', function() {
            if ( $(window).width() > 991 ) {

                $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(300);

            }
        }).on( 'mouseleave', function() {
            if ( $(window).width() > 991 ) {

                $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
                $(this).find('.dropdown-menu').hide().css('display','');

            }
        });

})(jQuery);
        