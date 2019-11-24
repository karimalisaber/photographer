(function($) {  
  "use strict";
  $(window).on("load", function() { // makes sure the whole site is loaded
    //preloader
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.   
  });



  $(document).ready(function(){
	// a 
	$('a').attr("target","_BLANK") ; 
    //active menu
    $(document).on("scroll", onScroll); 
	
    $('a[href^="#"]').on('click', function (e)
	{
      e.preventDefault();
      $(document).off("scroll");
      $('a').each(function () {
        $(this).removeClass('active');
      }); 
      $(this).addClass('active');
      var target = this.hash;
      $('html, body').animate({
        'scrollTop': $(target).offset().top
      }, 500, 'swing' ,  function () {
        window.location.hash = target;
         $(document).on("scroll", onScroll);
      });  
	});

	
	
	openMenu() ; // for the dropdown menu 


	  
	  
	  
	  
	
	
    inits();



    //typed js
    $(".typed").typed({
        strings: ["My Name is Karim", "I'm a Web Designer", "I love coding" , "I want to be" , "the best programmer" ,  "ever"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });
	

    //pop up porfolio
    $('.portfolio-image li a').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
      // other options
    });
    
	
	
    //Skill
    jQuery('.skillbar').each(function() {
      jQuery(this).appear(function() {
        jQuery(this).find('.count-bar').animate({
          width:jQuery(this).attr('data-percent')
        },3000);
		
        var percent = jQuery(this).attr('data-percent');
        jQuery(this).find('.count').html('<span>' + percent + '</span>');
      });
    });
  });



	

  //header
  function inits() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector(".for-sticky");
        if (distanceY > shrinkOn) {
            classie.add(header,"opacity-nav");
        } else {
            if (classie.has(header,"opacity-nav")) {
                classie.remove(header,"opacity-nav");
            }
          }
      });
    }





  window.onload = inits();
  














    
  //nav-active , add active class to the menu bar  
  function onScroll(event){  
    var scrollPosition = $(document).scrollTop();
    $('.menu-list a').each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr("href"));
      if (refElement.position().top   <=  scrollPosition  && refElement.position().top + refElement.height() > scrollPosition) {
        $('.menu-list a').removeClass("active");
        currentLink.addClass("active");
      }        
    });
  }
  // the menu functions, openmenu and toggleMenu 
function openMenu () {
var isOpen = false;	
$("#open-button").on( "click" , toggleMenu   );
$("#close-button").on( "click" , toggleMenu   );
function toggleMenu ()
 {
	 if( isOpen ) {
        $("body").removeClass('show-menu');
      }
      else {
       $("body").addClass('show-menu');
      }
         isOpen = !isOpen; //toggle
 }
 
$('.content-wrap').on("click" , function(ev) {
        
		var target = ev.target;
        if( isOpen && (target !== $("#open-button")) ) {
          toggleMenu();
}  } );
}
// toggleMenu
    function togglemenu()
	{
      if( isOpen ) {
        classie.remove( bodyEl, 'show-menu' );
      }
      else {
        classie.add( bodyEl, 'show-menu' );
      }
         isOpen = !isOpen; //toggle
    }
})(jQuery);