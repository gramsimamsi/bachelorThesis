!function(i,t,e){"use strict";i.CatSlider=function(t,e){this.$el=i(e),this._init(t)},i.CatSlider.prototype={_init:function(i){this.$categories=this.$el.children("ul"),this.$navcategories=this.$el.find("nav > a");var t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"};this.animEndEventName=t[Modernizr.prefixed("animation")],this.support=Modernizr.csstransforms&&Modernizr.cssanimations,this.isAnimating=!1,this.current=0;var e=this.$categories.eq(0);this.support?e.addClass("mi-current"):(this.$categories.hide(),e.show()),this.$navcategories.eq(0).addClass("mi-selected"),this._initEvents()},_initEvents:function(){var e=this;this.$navcategories.on("click.catslider",function(){return e.showCategory(i(this).index()),!1}),i(t).on("resize",function(){e.$categories.removeClass().eq(0).addClass("mi-current"),e.$navcategories.eq(e.current).removeClass("mi-selected").end().eq(0).addClass("mi-selected"),e.current=0})},showCategory:function(t){if(t===this.current||this.isAnimating)return!1;this.isAnimating=!0,this.$navcategories.eq(this.current).removeClass("mi-selected").end().eq(t).addClass("mi-selected");var e=t>this.current?"right":"left",n="right"===e?"mi-moveToLeft":"mi-moveToRight",s="right"===e?"mi-moveFromRight":"mi-moveFromLeft",r=this.$categories.eq(this.current),a=this.$categories.eq(t),o=a.children(),c="right"===e?o.length-1:0,d=this;this.support?(r.removeClass().addClass(n),setTimeout(function(){a.removeClass().addClass(s),o.eq(c).on(d.animEndEventName,function(){i(this).off(d.animEndEventName),a.addClass("mi-current"),d.current=t;var e=i(this);d.forceRedraw(e.get(0)),d.isAnimating=!1})},90*o.length)):(r.hide(),a.show(),this.current=t,this.isAnimating=!1)},forceRedraw:function(i){if(i){var t=document.createTextNode(" "),e=i.style.position;i.appendChild(t),i.style.position="relative",setTimeout(function(){i.style.position=e,t.parentNode.removeChild(t)},25)}}},i.fn.catslider=function(t){var e=i.data(this,"catslider");if("string"==typeof t){var n=Array.prototype.slice.call(arguments,1);this.each(function(){e[t].apply(e,n)})}else this.each(function(){e?e._init():e=i.data(this,"catslider",new i.CatSlider(t,this))});return e}}(jQuery,window);