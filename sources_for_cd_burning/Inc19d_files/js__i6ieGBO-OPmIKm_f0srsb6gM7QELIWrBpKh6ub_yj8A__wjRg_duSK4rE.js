/* Source and licensing information for the line(s) below can be found at https://access.redhat.com/sites/all/modules/custom/rh_doc_fetcher/js/prism.js. */

chrometwo_require(['jquery','prism'],function($,Prism){$(function(){$('pre[class*="language-"]').each(function(i,ele){Prism.highlightElement(ele);});});});;;
/* Source and licensing information for the above line(s) can be found at https://access.redhat.com/sites/all/modules/custom/rh_doc_fetcher/js/prism.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://access.redhat.com/sites/all/modules/custom/rh_doc_fetcher/js/underscore.js. */

chrometwo_require(['jquery','underscore','chrome_lib','bootstrap'],function($,_,lib){var breadcrumbsLoaded=false,$tocMain=$('#toc-main'),$tocMenu=$('.toc-menu'),$tocShow=$('.toc-show'),$tocToggle=$('.toc-toggle'),$docWrapper=$('.doc-wrapper'),$docOptions=$('.doc-options'),$olMenu=$('ol.menu'),offsetBuffer=15;(function($){$.fn.rhAffix=function(options){var settings=$.extend(true,{offset:{top:0,bottom:$(document).height()}},options);$(window).on('scroll',_.throttle(scrollHandler.bind(this),20));function scrollHandler(){var top=(typeof settings.offset.top==='function')?settings.offset.top():settings.offset.top,bottom=(typeof settings.offset.bottom==='function')?settings.offset.bottom():settings.offset.bottom;if(bottom>window.scrollY&&window.scrollY>top){this.css({'top':''});this.addClass('affix').removeClass('affix-top affix-bottom');}
else if(window.scrollY>=bottom){this.css({'top':bottom-top});this.addClass('affix-bottom').removeClass('affix-top affix');}
else{this.addClass('affix-top').removeClass('affix affix-bottom');}
$olMenu.first().css('height',parseInt($tocMenu.height()-($docOptions.height()+$docOptions.css('margin-bottom'))),10);}
scrollHandler.call(this);return this;};}(jQuery));function getTop(){return $docWrapper.offset().top-offsetBuffer;}
function getBottom(){return $docWrapper.height()+$docWrapper.offset().top-$tocMenu.height()-parseInt($tocMenu.css('padding-top'),10)-parseInt($tocMenu.css('padding-bottom'),10);}
function breadcrumbsReadyHandler(){if(breadcrumbsLoaded){return;}
breadcrumbsLoaded=true;if($tocMenu.outerHeight(true)>=$(window).height()-offsetBuffer*2){$tocMenu.height($(window).height()-offsetBuffer*2);}
$olMenu.first().css('height',parseInt($tocMenu.height()-(parseInt($docOptions.css('margin-bottom'),10)+$docOptions.height())),10);if($tocMenu.outerHeight(true)<$docWrapper.height()){$tocMenu.rhAffix({offset:{top:getTop,bottom:getBottom}});$tocShow.rhAffix({offset:{top:getTop,bottom:getBottom}});}}
$tocMain.on('hidden.bs.collapse',function(){$tocToggle.addClass('collapsed');});$tocMain.on('shown.bs.collapse',function(){$tocToggle.removeClass('collapsed');});lib.whenBreadcrumbsReady(breadcrumbsReadyHandler);});;;
/* Source and licensing information for the above line(s) can be found at https://access.redhat.com/sites/all/modules/custom/rh_doc_fetcher/js/underscore.js. */
;/*})'"*/
