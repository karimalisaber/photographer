(function($) {  
  "use strict";
  $(window).on("load", function() { // makes sure the whole site is loaded
    //preloader
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.   
  });






// smooth scroll 


$('.view .navbar li a').click(function(){
	$('html , body').animate(
	{
		scrollTop: $('#' + $(this).data('val')).offset().top   
		
	} , 1000	);
});

// add class and remove


	$('.menu-list a').on('click' , function() {	
		$(this).addClass('active').siblings().removeClass('active');
	});



$('.menu-list a').click(function(){
	$('html , body').animate(
	{
		scrollTop: $('#' + $(this).data('val')).offset().top   
		
	} , 1000	);
});



// code 


/*
	var par = $('.wrap-hero-content .code p' ) ; 
	par.eq(0).text('<ul>') ;
	par.eq(1).text('<li> <a> home </a> </li>') ;
	par.eq(2).text('<li> <a> about </a> </li>') ;
	par.eq(3).text('<li> <a> work </a> </li>') ;
	par.eq(4).text('<li> <a> skills </a> </li>') ;
	par.eq(5).text('<li> <a> education </a> </li>') ;
	par.eq(6).text('<li> <a> certifications </a> </li>') ;
	par.eq(7).text('<li> <a> contact </a> </li>') ;
	par.eq(8).text('</ul>') ;
	par.eq(9).text('</ul>') ;
	*/
	
	
	
	
	var par = $('.wrap-hero-content .code p' ) ;
	
	par.eq(0).typed(
	{
			strings: [ '&lt;' + "ul" + '&gt;	' ] ,
			typeSpeed: 100,
		    startDelay: 200,
			loop: false	
	}) ;
	


	par.eq(1).typed(
	{
			strings: [ '&lt;' + "li" + '&gt;	' + '&lt;' + "a" + '&gt;	' + " home " +  '&lt;' + '\\a' + '&gt;	'  + '&lt;' + "\\li" + '&gt;	'  ] ,
			typeSpeed: 60,
			startDelay: 1000,
			loop: false	
	}) ;
	par.eq(2).typed(
	{
			strings: [ '&lt;' + "li" + '&gt;	' + '&lt;' + "a" + '&gt;	' + " about " +  '&lt;' + '\\a' + '&gt;	'  + '&lt;' + "\\li" + '&gt;	'  ] ,
			typeSpeed: 60,
			startDelay: 2900,
			loop: false	
	}) ;
	par.eq(3).typed(
	{
			strings: [ '&lt;' + "li" + '&gt;	' + '&lt;' + "a" + '&gt;	' + " work " +  '&lt;' + '\\a' + '&gt;	'  + '&lt;' + "\\li" + '&gt;	'  ] ,
			typeSpeed: 60,
			startDelay: 4700,
			loop: false	
	}) ;
	par.eq(4).typed(
	{
			strings: [ '&lt;' + "li" + '&gt;	' + '&lt;' + "a" + '&gt;	' + " skills " +  '&lt;' + '\\a' + '&gt;	'  + '&lt;' + "\\li" + '&gt;	'  ] ,
			typeSpeed: 60,
			startDelay: 6000,
			loop: false	
	}) ;
	par.eq(5).typed(
	{
			strings: [ '&lt;' + "li" + '&gt;	' + '&lt;' + "a" + '&gt;	' + " education " +  '&lt;' + '\\a' + '&gt;	'  + '&lt;' + "\\li" + '&gt;	'  ] ,
			typeSpeed: 60,
			startDelay: 8000,
			loop: false	
	}) ;
	par.eq(6).typed(
	{
			strings: [ '&lt;' + "li" + '&gt;	' + '&lt;' + "a" + '&gt;	' + " certifications " +  '&lt;' + '\\a' + '&gt;	'  + '&lt;' + "\\li" + '&gt;	'  ] ,
			typeSpeed: 60,
			startDelay: 10000,
			loop: false	
	}) ;
	par.eq(7).typed(
	{
			strings: [ '&lt;' + "li" + '&gt;	' + '&lt;' + "a" + '&gt;	' + " contact " +  '&lt;' + '\\a' + '&gt;	'  + '&lt;' + "\\li" + '&gt;	'  ] ,
			typeSpeed: 60,
			startDelay: 13000,
			loop: false	
	}) ;
	par.eq(8).delay(5000).typed(
	{
			strings: [ '&lt;' + "\\ul" + '&gt;	' ] ,
			typeSpeed: 60,
			startDelay: 15000,
			loop: false	,
			
	}) ;
		
		
	
	for ( var i =0 ; i<9 ; i++ ){
  $('.view .content ul li').eq(i).delay(2000 * (i+1)).fadeTo(2200  , 1) ; 	
	}
		
	

  $(document).ready(function(){
	
/*	
		par.eq(0).delay(700).slideDown(1000) ;	
		par.eq(1).delay(1400).slideDown(1000) ;	
		
		for (var i = 2 ; i<9 ; i++){
			
				
			par.eq(i).delay(900 * (i+1)).slideDown(1000) ;		// .delay(700).next().slideDown(1000).delay(700) ;
		
		}
		
	*/	
		
		 
//	window.onload = code () ;


// add winsods location still	
	
	
	/*
	
	  //typed js
    $(".wrap-hero-content .code p:first-of-type").typed({
        strings: ["My Name is Karim", "I'm a Web Designer", "I love coding" , "I want to be" , "the best programmer" ,  "ever"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });
	*/
/*
	var par = $('.wrap-hero-content .code p' ) ;
	par.eq(0).typed(
	{
			string: ["karim" , "ali"] ,
			typeSpeed: 100,
			backDelay: 900,
			loop: true	
	}) ;

*/
	
	

	// a 
	$('a').attr("target","_BLANK") ; 
    $('.view .content ul li a').attr("target","_SELF") ;

/*
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

	
	*/
	
	
	
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
  





    /*
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
  
  */
  
  
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