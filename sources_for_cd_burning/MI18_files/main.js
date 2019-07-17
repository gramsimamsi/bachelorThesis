var app = {
    init: function() {
      this.setupMenuDropdown();
      this.setupMobileHeader();
      this.setupActiveLinks();
      this.setupSearch();
    },
    
    setupMenuDropdown: function() {

    //Adding utilty for touch devices.
    window.addEventListener('touchstart', function onFirstTouch() {
      document.body.classList.add('touch-device');
      window.removeEventListener('touchstart', onFirstTouch, false);
    }, false);

    //Windows 10 responds to this one.
    if(navigator.maxTouchPoints > 0){
      document.body.classList.add('touch-device');
    }


  if(jQuery(window).width() > 1024 && !(jQuery('body').hasClass('touch-device'))){
      //override click for hub page once menu is expanded
      jQuery('.hub-link').click(function(){
          
          jQuerythis = jQuery(this); 
          if(jQuerythis.attr('aria-expanded') == 'true'){
            window.location = jQuerythis.attr('href');
          }

      });
      
      var timer;
      // when the button and button menu are hovered
      jQuery('.dropdown-wrap').hover(function() {
        jQuerythis = jQuery(this);
        
        var siblings = jQuerythis.siblings('.dropdown-wrap');
        siblings.removeClass('show');
        siblings.find('.dropdown-menu').removeClass('show');
        siblings.find('.nav-link').attr('aria-expanded', false);

        // Clears the time on hover to prevent a que or waiting for the delay to finish from a previous hover event
        clearTimeout(timer);
        // Add the class .open and show the menu
        jQuery(this).addClass('show');
        jQuery(this).find('.dropdown-menu').addClass('show');
        jQuery(this).find('.nav-link').attr('aria-expanded', true);
        // jQuery(this).find('.submenu-head').matchHeight();
        // jQuery(this).find('.submenu').matchHeight();

      }, function() {
        jQuerythis = jQuery(this);
        // Sets the timer variable to run the timeout delay
        timer = setTimeout(function() {
          // remove the class .open and hide the submenu
          jQuerythis.removeClass('show');
          jQuerythis.find('.dropdown-menu').removeClass('show');
          jQuerythis.find('.nav-link').attr('aria-expanded', false);
        }, 1000);

      });
  
  }

    if(jQuery( window ).width() < 1025){//check for touch device
      jQuery('.dropdown-wrap').off('mouseenter mouseleave');
      // when the button and button menu are hovered
      jQuery('.dropdown-wrap > .nav-link').on('tap', function() {
        jQuerythis = jQuery(this);
        var parent = jQuery(this).closest('.dropdown-wrap');

        var siblings = parent.siblings('.dropdown-wrap');
        siblings.removeClass('show');
        siblings.find('.dropdown-menu').removeClass('show');
        siblings.find('.nav-link').attr('aria-expanded', false);

        // Add the class .open and show the menu
        if (parent.hasClass('show')) {
          parent.removeClass('show');
          parent.find('.dropdown-menu').removeClass('show');
          jQuery(this).attr('aria-expanded', false);
        } else {
          parent.addClass('show');
          parent.find('.dropdown-menu').addClass('show');
          jQuery(this).attr('aria-expanded', true);
        }

      })
    }
  },

  setupMobileHeader: function() {
    const toggler = jQuery('.navbar-toggler');
    const header = jQuery('header');
    const navbar = jQuery('#navbar');
    jQuery('#navbar').on('hidden.bs.collapse', function () {
      header.removeClass('header-expanded');
    });
    jQuery('#navbar').on('show.bs.collapse', function () {
      header.addClass('header-expanded');
    });
  },

  setupActiveLinks: function() {
    jQuery('nav a[href="' + location.pathname + '"]').addClass('active');
  },

  setupSearch: function() {
    jQuery("#searchToggle").on("click", function(){
      var searchForm = jQuery(".header-search-form");
      if(searchForm.hasClass("search-opened")) {
          if(jQuery('#searchText').val() != ''){
              app.doSearch();
          } else {
              jQuery('.navbar-nav .nav-item').show();
              searchForm.removeClass("search-opened");
          }
      } else {
        jQuery('.navbar-nav .nav-item').hide();
        searchForm.addClass("search-opened");
        jQuery("#searchForm input[type='text']").focus();
      }
    });
    jQuery(document).mouseup(function(e)    {
      var subject = jQuery("#searchForm");
      if(e.target.id !== subject.attr('id') && !subject.has(e.target).length && jQuery(".search-form").hasClass("search-opened") && e.target.id !== "searchToggle")
      {
        jQuery(".header-search-form").removeClass("search-opened");
      }
    });
    jQuery('#searchForm').submit(function(event){

        app.doSearch('#searchText');
        event.preventDefault();
    });
    jQuery('#mobileSearchForm').submit(function(event){

      app.doSearch('#mobileSearchText');
      event.preventDefault();
  });
  },

  doSearch: function(id) {
      var searchText = jQuery(id).val();
      window.location.assign('/search/' + encodeURI(searchText));
  },
}

jQuery('document').ready(function(){

    app.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5zZXR1cE1lbnVEcm9wZG93bigpO1xyXG4gICAgICB0aGlzLnNldHVwTW9iaWxlSGVhZGVyKCk7XHJcbiAgICAgIHRoaXMuc2V0dXBBY3RpdmVMaW5rcygpO1xyXG4gICAgICB0aGlzLnNldHVwU2VhcmNoKCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzZXR1cE1lbnVEcm9wZG93bjogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy9BZGRpbmcgdXRpbHR5IGZvciB0b3VjaCBkZXZpY2VzLlxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiBvbkZpcnN0VG91Y2goKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgndG91Y2gtZGV2aWNlJyk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25GaXJzdFRvdWNoLCBmYWxzZSk7XHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgLy9XaW5kb3dzIDEwIHJlc3BvbmRzIHRvIHRoaXMgb25lLlxyXG4gICAgaWYobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCl7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgndG91Y2gtZGV2aWNlJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICBpZihqUXVlcnkod2luZG93KS53aWR0aCgpID4gMTAyNCAmJiAhKGpRdWVyeSgnYm9keScpLmhhc0NsYXNzKCd0b3VjaC1kZXZpY2UnKSkpe1xyXG4gICAgICAvL292ZXJyaWRlIGNsaWNrIGZvciBodWIgcGFnZSBvbmNlIG1lbnUgaXMgZXhwYW5kZWRcclxuICAgICAgalF1ZXJ5KCcuaHViLWxpbmsnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBqUXVlcnl0aGlzID0galF1ZXJ5KHRoaXMpOyBcclxuICAgICAgICAgIGlmKGpRdWVyeXRoaXMuYXR0cignYXJpYS1leHBhbmRlZCcpID09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGpRdWVyeXRoaXMuYXR0cignaHJlZicpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgdGltZXI7XHJcbiAgICAgIC8vIHdoZW4gdGhlIGJ1dHRvbiBhbmQgYnV0dG9uIG1lbnUgYXJlIGhvdmVyZWRcclxuICAgICAgalF1ZXJ5KCcuZHJvcGRvd24td3JhcCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeXRoaXMgPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNpYmxpbmdzID0galF1ZXJ5dGhpcy5zaWJsaW5ncygnLmRyb3Bkb3duLXdyYXAnKTtcclxuICAgICAgICBzaWJsaW5ncy5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIHNpYmxpbmdzLmZpbmQoJy5kcm9wZG93bi1tZW51JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICBzaWJsaW5ncy5maW5kKCcubmF2LWxpbmsnKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBDbGVhcnMgdGhlIHRpbWUgb24gaG92ZXIgdG8gcHJldmVudCBhIHF1ZSBvciB3YWl0aW5nIGZvciB0aGUgZGVsYXkgdG8gZmluaXNoIGZyb20gYSBwcmV2aW91cyBob3ZlciBldmVudFxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgLy8gQWRkIHRoZSBjbGFzcyAub3BlbiBhbmQgc2hvdyB0aGUgbWVudVxyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudScpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMpLmZpbmQoJy5uYXYtbGluaycpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcclxuICAgICAgICAvLyBqUXVlcnkodGhpcykuZmluZCgnLnN1Ym1lbnUtaGVhZCcpLm1hdGNoSGVpZ2h0KCk7XHJcbiAgICAgICAgLy8galF1ZXJ5KHRoaXMpLmZpbmQoJy5zdWJtZW51JykubWF0Y2hIZWlnaHQoKTtcclxuXHJcbiAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeXRoaXMgPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgICAgLy8gU2V0cyB0aGUgdGltZXIgdmFyaWFibGUgdG8gcnVuIHRoZSB0aW1lb3V0IGRlbGF5XHJcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgLy8gcmVtb3ZlIHRoZSBjbGFzcyAub3BlbiBhbmQgaGlkZSB0aGUgc3VibWVudVxyXG4gICAgICAgICAgalF1ZXJ5dGhpcy5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgalF1ZXJ5dGhpcy5maW5kKCcuZHJvcGRvd24tbWVudScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICBqUXVlcnl0aGlzLmZpbmQoJy5uYXYtbGluaycpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICB9KTtcclxuICBcclxuICB9XHJcblxyXG4gICAgaWYoalF1ZXJ5KCB3aW5kb3cgKS53aWR0aCgpIDwgMTAyNSl7Ly9jaGVjayBmb3IgdG91Y2ggZGV2aWNlXHJcbiAgICAgIGpRdWVyeSgnLmRyb3Bkb3duLXdyYXAnKS5vZmYoJ21vdXNlZW50ZXIgbW91c2VsZWF2ZScpO1xyXG4gICAgICAvLyB3aGVuIHRoZSBidXR0b24gYW5kIGJ1dHRvbiBtZW51IGFyZSBob3ZlcmVkXHJcbiAgICAgIGpRdWVyeSgnLmRyb3Bkb3duLXdyYXAgPiAubmF2LWxpbmsnKS5vbigndGFwJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5dGhpcyA9IGpRdWVyeSh0aGlzKTtcclxuICAgICAgICB2YXIgcGFyZW50ID0galF1ZXJ5KHRoaXMpLmNsb3Nlc3QoJy5kcm9wZG93bi13cmFwJyk7XHJcblxyXG4gICAgICAgIHZhciBzaWJsaW5ncyA9IHBhcmVudC5zaWJsaW5ncygnLmRyb3Bkb3duLXdyYXAnKTtcclxuICAgICAgICBzaWJsaW5ncy5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIHNpYmxpbmdzLmZpbmQoJy5kcm9wZG93bi1tZW51JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICBzaWJsaW5ncy5maW5kKCcubmF2LWxpbmsnKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBBZGQgdGhlIGNsYXNzIC5vcGVuIGFuZCBzaG93IHRoZSBtZW51XHJcbiAgICAgICAgaWYgKHBhcmVudC5oYXNDbGFzcygnc2hvdycpKSB7XHJcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgIHBhcmVudC5maW5kKCcuZHJvcGRvd24tbWVudScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICBqUXVlcnkodGhpcykuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGFyZW50LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICBwYXJlbnQuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgalF1ZXJ5KHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNldHVwTW9iaWxlSGVhZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHRvZ2dsZXIgPSBqUXVlcnkoJy5uYXZiYXItdG9nZ2xlcicpO1xyXG4gICAgY29uc3QgaGVhZGVyID0galF1ZXJ5KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IG5hdmJhciA9IGpRdWVyeSgnI25hdmJhcicpO1xyXG4gICAgalF1ZXJ5KCcjbmF2YmFyJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdoZWFkZXItZXhwYW5kZWQnKTtcclxuICAgIH0pO1xyXG4gICAgalF1ZXJ5KCcjbmF2YmFyJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGhlYWRlci5hZGRDbGFzcygnaGVhZGVyLWV4cGFuZGVkJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBzZXR1cEFjdGl2ZUxpbmtzOiBmdW5jdGlvbigpIHtcclxuICAgIGpRdWVyeSgnbmF2IGFbaHJlZj1cIicgKyBsb2NhdGlvbi5wYXRobmFtZSArICdcIl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSxcclxuXHJcbiAgc2V0dXBTZWFyY2g6IGZ1bmN0aW9uKCkge1xyXG4gICAgalF1ZXJ5KFwiI3NlYXJjaFRvZ2dsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciBzZWFyY2hGb3JtID0galF1ZXJ5KFwiLmhlYWRlci1zZWFyY2gtZm9ybVwiKTtcclxuICAgICAgaWYoc2VhcmNoRm9ybS5oYXNDbGFzcyhcInNlYXJjaC1vcGVuZWRcIikpIHtcclxuICAgICAgICAgIGlmKGpRdWVyeSgnI3NlYXJjaFRleHQnKS52YWwoKSAhPSAnJyl7XHJcbiAgICAgICAgICAgICAgYXBwLmRvU2VhcmNoKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGpRdWVyeSgnLm5hdmJhci1uYXYgLm5hdi1pdGVtJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgIHNlYXJjaEZvcm0ucmVtb3ZlQ2xhc3MoXCJzZWFyY2gtb3BlbmVkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGpRdWVyeSgnLm5hdmJhci1uYXYgLm5hdi1pdGVtJykuaGlkZSgpO1xyXG4gICAgICAgIHNlYXJjaEZvcm0uYWRkQ2xhc3MoXCJzZWFyY2gtb3BlbmVkXCIpO1xyXG4gICAgICAgIGpRdWVyeShcIiNzZWFyY2hGb3JtIGlucHV0W3R5cGU9J3RleHQnXVwiKS5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGpRdWVyeShkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbihlKSAgICB7XHJcbiAgICAgIHZhciBzdWJqZWN0ID0galF1ZXJ5KFwiI3NlYXJjaEZvcm1cIik7XHJcbiAgICAgIGlmKGUudGFyZ2V0LmlkICE9PSBzdWJqZWN0LmF0dHIoJ2lkJykgJiYgIXN1YmplY3QuaGFzKGUudGFyZ2V0KS5sZW5ndGggJiYgalF1ZXJ5KFwiLnNlYXJjaC1mb3JtXCIpLmhhc0NsYXNzKFwic2VhcmNoLW9wZW5lZFwiKSAmJiBlLnRhcmdldC5pZCAhPT0gXCJzZWFyY2hUb2dnbGVcIilcclxuICAgICAge1xyXG4gICAgICAgIGpRdWVyeShcIi5oZWFkZXItc2VhcmNoLWZvcm1cIikucmVtb3ZlQ2xhc3MoXCJzZWFyY2gtb3BlbmVkXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGpRdWVyeSgnI3NlYXJjaEZvcm0nKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xyXG5cclxuICAgICAgICBhcHAuZG9TZWFyY2goJyNzZWFyY2hUZXh0Jyk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgalF1ZXJ5KCcjbW9iaWxlU2VhcmNoRm9ybScpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XHJcblxyXG4gICAgICBhcHAuZG9TZWFyY2goJyNtb2JpbGVTZWFyY2hUZXh0Jyk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbiAgfSxcclxuXHJcbiAgZG9TZWFyY2g6IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgIHZhciBzZWFyY2hUZXh0ID0galF1ZXJ5KGlkKS52YWwoKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbignL3NlYXJjaC8nICsgZW5jb2RlVVJJKHNlYXJjaFRleHQpKTtcclxuICB9LFxyXG59XHJcblxyXG5qUXVlcnkoJ2RvY3VtZW50JykucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICBhcHAuaW5pdCgpO1xyXG59KTsiXX0=
