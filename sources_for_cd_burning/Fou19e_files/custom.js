(function($) {

	$(window).scroll(function () {
		if ($(window).scrollTop() < 90 && $(window).width() > 768) {
			$('#lf-header').fadeIn();
			$('#header-outer').removeClass('small-nav');
		} else {
			$('#lf-header').fadeOut();
			$('#header-outer').addClass('small-nav');
		}
	});

	$(window).load(function(){
		$('.at4-follow-container a').each(function(){
			$(this).attr('href', $(this).attr('href').replace('sub_confirmation=1', ''));
		});
	});

  $container = $('#vendor-parent');
  $filterSelect = $('#filter-select, #filter-select-level');

	// var mixer = mixitup('#vendor-parent');	
	if($container.length){
	  var containerEl = $('#vendor-parent');
	  var mixer = mixitup(containerEl, {
	    multifilter: {
	        enable: true // enable the multifilter extension for the mixer
	    }
	  });
		
		$filterSelect.on('change', function(){
			$container.mixItUp('filter', this.value);
		});
	}

	$('#mobile-menu ul li a').click(function(ev){
		if($(this).attr('href') == '#'){
			ev.preventDefault();
			if($(this).parent().hasClass('open')){
				$(this).parent().removeClass('open');
				$(this).siblings('.sub-menu').css('display','none');				
			} else {
				$(this).parent().addClass('open');
				$(this).siblings('.sub-menu').css('display','block');				
			}
		}
	});

	$('.magnific-popup-image').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		image: {
			cursor: 'pointer'
		}
	});

	$('.highlight pre').wrapInner('<code></code');

	//Header accordion menu
	if ($(window).width() > 991) {
		$('header .navbar-nav li ul.sub-menu li.menu-item-has-children > a').click(function(event) {
			event.preventDefault()
			$('header .navbar-nav>li>ul.sub-menu>li.menu-item-has-children.active > a').not(this).parent().removeClass('active')
			$(this).parent().toggleClass('active')
		}); 
	}
	
})(jQuery);
