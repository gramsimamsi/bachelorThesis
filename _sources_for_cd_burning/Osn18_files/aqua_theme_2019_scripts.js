$(function() {


	$('#menu-icon').on('click', function(){
		$('.navbar').toggleClass('expand');
		return false;
	});
  
  
  	jQuery(".search_box").click(function() {
			jQuery('.search_box_wrap').slideToggle();

			
			//focusout / blur
			
			jQuery('.search_box_wrap .bcs-searchbox').focusout(function() {
				jQuery('.search_box_wrap').slideUp();
			});
			
			
		});
		
		
		
		jQuery(".search_box_close").click(function() {
			jQuery('.search_box_wrap').slideToggle();
		});

  
     /** 
      * Mobile Nav
 	 *
 	 * Toggle Side Menu - Left or Right
 	 */

  /*
	// Prepend a mobile icon to the header
	$(".custom-menu-primary").after('<a class="mobile-icon"><span></span></a>');
	 
	// Prepend a close icon to the menu
	$(".custom-menu-primary .hs-menu-flow-horizontal>ul").before('<a class="close-icon"><span></span></a>');
	$('.custom-menu-primary .flyouts .hs-item-has-children > a').after('<div class="child-trigger"><span></span></div>');
	// Add body class on mobile icon click
	$(".mobile-icon, .close-icon,").click(function(){
        $('body,html').animate({scrollTop:0},0);
	$("body").toggleClass("show-mobile-nav ");
	});
	 
	// Set the menu height to 100% of the document
	function setMenuHeight(){
	   var height = $(document).outerHeight(true);
	   $(".custom-menu-primary").height(height);
	}
	setMenuHeight();
	$(window).resize(setMenuHeight);
	
	// Wrap body contents with a div so the transforms will work
     $('body> div').find('script:not(script[type="IN/Share"])').remove().end().wrapAll('<div id="site-wrapper"></div>');

$('div.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('div.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
          $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
          $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('div.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
});

  
$('#site-wrapper').after('<div id="page-overlay"></div>');

$("#page-overlay").click(function(){
    $("body").removeClass("show-mobile-nav ");
});

 
$('.custom-menu-primary .hs-menu-wrapper>ul>li:last-child>a, .custom-close-icon a').click(function(){
    $('.custom-request-demo').toggleClass('open');
});

  
});

/*
$(window).scroll(function(){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 300,
    body = document.querySelector(".custom-header-bg");
    if ($(this).scrollTop() > 10){
    $('.custom-header-bg').addClass("smaller");
    }
    else{
    $('.custom-header-bg').removeClass("smaller");
    }
});


$(".custom-back-to-top a").click(function(){
    $('body,html').animate({scrollTop:0},500);
    return false;
});




$(window).scroll(function(){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 300,
    body = document.querySelector(".custom-header-bg");
    if ($(this).scrollTop() > 527){
    $('.custom-header-bg').addClass("fixed");
    }
    else{
    $('.custom-header-bg').removeClass("fixed");
    }
});
*/

$(".custom-back-to-top a").click(function(){
    $('body,html').animate({scrollTop:0},500);
    return false;
});



$('.footer-container-wrapper').after('<a id="back-to-top" href="#top"><span></span></a>');
    $("#back-to-top").hide();
    
    $(window).scroll(function(){
    if ($(window).scrollTop()>100){
        $("#back-to-top").fadeIn(500);
    }
    else
    {
        $("#back-to-top").fadeOut(500);
    }
    });
    //back to top
    $("#back-to-top").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
});

});
