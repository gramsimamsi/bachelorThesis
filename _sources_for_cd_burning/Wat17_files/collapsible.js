jQuery(function ($) {
	//$("html, body").animate({ scrollTop: 0 }, 200);
	/*** Polyfill Patch For IE 11 SL Start***/
	if (!Math.trunc) {
		Math.trunc = function(v) {
			v = +v;
			return (v - v % 1)   ||   (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
		};
	}
	/*** Polyfill Patch For IE 11 SL End***/
	if ($("aside.guide").length) {
	var headerDistance = $('aside.guide').offset().top;
	}
	$window = $(window);
	$window.load(function(){
		if (!window.matchMedia('(max-width: 1023px)').matches) {
			this.lastScrollTop = 0; 
			var contentHeight = $('#primary').height();
			if (!window.matchMedia('(max-width: 1023px)').matches) {
				$("#sidebar").css('min-height',contentHeight-450+'px');
			}
			//this.headerDistance = $('aside.guide').offset().top;
			//$(".right_ral_sidebar_cta").addClass('show').removeClass('hide');
			expand();
		}
		setHeight();
		if($(window).width() >= 1200){
			//alert('Test');
			$(".vce-single-guide .entry-content").css('padding', '2.5em');
			$(".bannerContent .layout-inner-wrap .flex-item").css('margin-left', '65px');
			//console.log($(window).width()); 
		}
		else if($(window).width() >= 768 && $(window).width() < 1023){
			//alert('Test');
			$(".vce-single-guide .entry-content").css('padding', '2.5em');
			$(".bannerContent .layout-inner-wrap .flex-item").css('margin-left', '75px');
			//console.log($(window).width()); 
		}
		else if($(window).width() >= 1024 && $(window).width() <= 1040){
			//alert('Test');
			$(".vce-single-guide .entry-content").css('padding', '2.5em');
			$(".bannerContent .layout-inner-wrap .flex-item").css('margin-left', '40px');
			//console.log($(window).width()); 
		}
		else if($(window).width() < 768){
			$(".vce-single-guide .entry-content").css('padding', '2.5em');
			$(".bannerContent .layout-inner-wrap .flex-item").css('margin', '0 auto');
		}
		else {
				$(".vce-single-guide .entry-content").css('padding', '3.5em');
				$(".bannerContent .layout-inner-wrap .flex-item").css('margin-left', '65px');
		}		
	});
	
	$(window).on("resize", function () {
		setHeight();
		if (window.matchMedia('(max-width: 1023px)').matches){ 
		//if($(window).width() <= 768){
			$(".stickyComponent").removeClass('is_stuck');
			console.log($(window).width()); 
		} 
		
		if($(window).width() >= 1200){
			//alert('Test');
			$(".vce-single-guide .entry-content").css('padding', '2.5em');
			$(".bannerContent .layout-inner-wrap .flex-item").css('margin-left', '65px');
			//console.log($(window).width()); 
		}
		else if($(window).width() >= 1024 && $(window).width() <= 1040){
			//alert('Test');
			$(".vce-single-guide .entry-content").css('padding', '2.5em');
			$(".bannerContent .layout-inner-wrap .flex-item").css('margin-left', '40px');
			//console.log($(window).width()); 
		}
		else if($(window).width() >= 768 && $(window).width() < 1023){
			//alert('Test');
			$(".vce-single-guide .entry-content").css('padding', '2.5em');
			$(".bannerContent .layout-inner-wrap .flex-item").css('margin-left', '75px');
			//console.log($(window).width()); 
		}
		else if($(window).width() < 768){
			$(".vce-single-guide .entry-content").css('padding', '2.5em');
			$(".bannerContent .layout-inner-wrap .flex-item").css('margin', '0 auto');
		} 
		else {
				$(".vce-single-guide .entry-content").css('padding', '3.5em');
				$(".bannerContent .layout-inner-wrap .flex-item").css('margin-left', '65px');
		}	
		
	});

	
	$window.scroll(function(event){
		if (!window.matchMedia('(max-width: 1023px)').matches) {
			var st = $(this).scrollTop();
			if (st > this.lastScrollTop){
			   scrollUp(event);
			} else {
			   scrollDown(event);
			}
			lastScrollTop = st; 
		}
	});
	
	scrollUp =  function(evt){
		 $('body').addClass('scrolled-down').removeClass('scrolled-up');
		 detectTopOrFooterStickPosition();
	}
	
	scrollDown =  function(evt){
		 $('body').addClass('scrolled-up').removeClass('scrolled-down');
		 detectTopOrFooterStickPosition();
	}
	
	
	detectTopOrFooterStickPosition =  function(){
		if (!window.matchMedia('(max-width: 1023px)').matches) {
			if ($window.scrollTop() >= headerDistance - 100) {
				 $(".stickyComponent").addClass('is_stuck'); 
				 if(footerDetect())
				 {
					 $(".collapsibleComponent").addClass('collapsibleScroll');
					 $(".right_ral_sidebar_cta").addClass('hide').removeClass('show'); 
					 $(".collapsibleScroll .guide-list").css({
						   'overflow-x' : 'auto',
						   'height' : '240px'
						});
					 expand();
					 //console.log("if -> "+$window.scrollTop()+" "+headerDistance);
				 }
				 else{
					 $(".collapsibleScroll .guide-list").css({
						   'overflow-x' : 'hidden',
						   'height' : '300px'
						});
					 $(".collapsibleComponent").removeClass('collapsibleScroll');
					 $(".right_ral_sidebar_cta").addClass('show').removeClass('hide'); 
					 collapse();
					 //console.log("else -> "+$window.scrollTop()+" "+headerDistance);
				 }
			}
			else{
				 $(".stickyComponent").removeClass('is_stuck');	
				 expand();
			}
		}
	}
	
	
	/*
	setSideBarPosition = new function(){
		if($(window).width() > 768){
			
			if ($window.scrollTop() >= headerDistance - 100) {
				if ($('body').hasClass('scrolled-down') && $(".stickyComponent").hasClass('bottom_stick')) {
					console.log('if');
					expand();
				}else if ($('body').hasClass('scrolled-down')) {
					console.log('else if first');
					$(".stickyComponent").addClass('is_stuck'); 
					collapse();
				}else if ($('body').hasClass('scrolled-up')){
					console.log('else if');
					collapse();
				}
				else{
					console.log('else else'); 
				}
			}else{
				console.log('else');
				$(".stickyComponent").removeClass('is_stuck'); 
				expand();
			}
			if(footerDetect()) {
				console.log('footer if');
				$(".stickyComponent").addClass('bottom_stick'); 
				$(".right_ral_sidebar_cta").addClass('hide').removeClass('show'); 
				$(".stickyComponent .collapsibleBody").slideDown('slow');
				//$(".stickyComponent .collapsibleBody").css('display','block');
			}else{
			   console.log('footer else');
			   $(".stickyComponent").removeClass('bottom_stick'); 
			}
		}
		else{
			$(".stickyComponent").removeClass('is_stuck');
		}
		
	}
	*/
	
	
	
	$('.stickyComponent .collapsibleComponent').click(function() {
		if($(this).hasClass('collapsibleScroll')){
			$(this).removeClass('collapsibleScroll');
		}
		$('.stickyComponent .collapsibleBody').slideToggle('slow');
		$(this).toggleClass('visited');

	});

	
	function collapse(){
		$(".stickyComponent .collapsibleBody").slideUp('slow');
	}
	function expand(){
		$(".stickyComponent .collapsibleBody").slideDown('slow');
	}
	function footerDetect(){
		//alert($(document).height() - $(".site-footer").height());
		if(Math.trunc($(window).scrollTop() + $(window).height()) >= $(document).height() - $(".site-footer").height()- 20 === true){
		console.log(Math.trunc($(window).scrollTop() + $(window).height()));
		console.log($(document).height() - $(".site-footer").height());
		 return true;
		}
	}

	function setHeight() {
		windowHeight = $(window).innerHeight();
        //$('.section-wrap-header').css('height', windowHeight - 1);
        
        if($(".js-content-center") && $(".js-content-center-item")){
			var compHeight = $(".js-content-center").innerHeight();
			var contentHeight = $(".js-content-center-item").innerHeight();
			//$('.js-content-center-item').css('margin-top', (compHeight-contentHeight)/2);
			$('.js-content-center-item').css('margin-top', '-1.5rem');
			$('.js-content-center-item').css('margin-bottom', (compHeight-contentHeight)/2);
			
		}
        
		
		$('.section-wrap-header').css('min-height', 500);
        $('.section-wrap').css('min-height', windowHeight-50);

        if($(".ub-emb-bar-frame").length == 1){
            $('.arrow.bounce').css('bottom', '5.5rem');
        }else{
            $('.arrow.bounce').css('bottom', '1rem');
        }
	};

	//setHeight();

});

