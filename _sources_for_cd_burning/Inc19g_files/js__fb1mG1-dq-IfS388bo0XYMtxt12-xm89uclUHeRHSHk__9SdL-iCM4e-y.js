/* Source and licensing information for the line(s) below can be found at https://access.redhat.com/sites/all/themes/cirrus/js/case_links.js. */

ajq(document).ready(function(){try{if(Drupal.portal.currentUser.isInternal){do_it();}}catch(err){}});function do_it(){if(document.location.href.indexOf("edit")!=-1){return;}
var URL='/rs/cases?linked=https://api.'+window.location.host+'/rs/solutions/';var nid=null;var viewAllCasesText='Show More',hideAllCasesText='Show Less';var explode=document.URL.split('/');if(isInteger(explode[4])===true&&explode[3]==='solutions'){var nid=explode[4];}
if(nid!==null){ajq.getJSON(URL+nid,function(data){var content="";var cnt=0;var sideBar=ajq('#case-links-target');if(typeof data==='object'&&typeof data.case!=='undefined'){var caseLength=Object.keys(data.case).length;if(caseLength>10){var moreCaseLength=10;}
var casePerCol=Math.floor(moreCaseLength/2);var newCasePerCol=Math.floor((caseLength-10)/2);ajq.each(data.case,function(key,val){if(isInteger(val.case_number)===true&&cnt<=9){if(cnt===0){content+='<div class="col-md-6">';}
if(cnt===casePerCol){content+='</div><div class="col-md-6">';}
content+="<p>"+"<a href='"+"/support/cases/#/case/"+val.case_number+"'>"+val.case_number+"</a>";if(typeof val.linked_by!=='undefined'){content+=" <span class='separator'>-</span> "+val.linked_by+" </p>";}
else{content+="</p>";}
cnt++;}
else{if(cnt===10){content+='</div><div class="collapse" id="more-cases"><div class="col-md-6">';}
if(cnt===newCasePerCol){content+='</div><div class="col-md-6">';}
content+="<p>"+"<a href='"+"/support/cases/#/case/"+val.case_number+"'>"+val.case_number+"</a>";if(typeof val.linked_by!=='undefined'){content+=" <span class='separator'>-</span> "+val.linked_by+" </p>";}
else{content+="</p>";}
cnt++;}});var bandOpen='<div class="container"><h2>Case Links (Red Hat Internal)</h2><div class="row push-top">';if(caseLength>10){var bandClose='</div></div><div class="text-center push-top col-md-12"><a role="button" data-toggle="collapse" href="#more-cases" aria-expanded="false" aria-controls="more-cases" class="toggle-cases">'+viewAllCasesText+'</a></div>';}
else{var bandClose='</div></div>';}
if(content!==''){sideBar.show();}
sideBar.append(bandOpen+content+bandClose);}});}
ajq('#case-links-target').on('click','.toggle-cases',function(e){var viewLink=ajq(this);if(viewLink.hasClass('open')){viewLink.removeClass('open');viewLink.html(viewAllCasesText);}else{viewLink.addClass('open');viewLink.html(hideAllCasesText);}});}
function isInteger(x){return x%1===0;};;
/* Source and licensing information for the above line(s) can be found at https://access.redhat.com/sites/all/themes/cirrus/js/case_links.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://access.redhat.com/sites/all/themes/cirrus/js/angular.js. */

chrometwo_require(['jquery','angular128','bootstrap'],function($,angular){setTimeout(function(){var $optinToast=$('#optinToast'),$close=$optinToast.find('.close'),$optinForm=$optinToast.find('form'),$optinButtons=$optinToast.find('form input[type="submit"]'),$optinSpinner=$optinToast.find('.spinner');$close.on('click',function(){$optinToast.removeClass('show');});$optinButtons.on('click',function(){$(this).siblings('input[type="submit"]').attr('disabled',true);$optinSpinner.removeClass('hide');});},1000);$(function(){$('[data-toggle="tooltip"]').tooltip();angular.module('helpfulApp',[]).directive('helpfulBand',helpfulBand).directive('followBand',followBand).directive('rhActionSheet',actionSheet).directive('rhActionSheetToggler',actionSheetToggler).directive('rhActionSheetBand',actionSheetBand).factory('$rhActionSheet',ActionSheetService).factory('$rhComponentRegistry',ComponentRegistry);function helpfulBand(){var directive={restrict:'AE',controller:HelpfulBandController,controllerAs:'helpfulBandController'};return directive;function HelpfulBandController(){var vm=this;vm.submit=function(event,response){event.target.blur();if(response===vm.response){vm.response=null;return;}
vm.response=response;};}}
function followBand(){var directive={restrict:'AE',controller:FollowBandController,controllerAs:'followBandController'};return directive;function FollowBandController(){var vm=this;vm.follow=function(event){event.target.blur()
vm.following=!vm.following;};}}
function actionSheetBand(){var directive={restrict:'AE',link:link};return directive;function link(scope,element,attrs){$(window).on('scroll',scrollHandler);function scrollHandler(){if(typeof $.fn.addBack!='undefined'&&$.isFunction($.fn.addBack)){var previousElement=$(element).prevUntil('.band, .container').addBack().prev('.band, .container').addBack().first();}
else{var previousElement=$(element).prevUntil('.band, .container').andSelf().prev('.band, .container').andSelf().first();}
if(previousElement.outerHeight(true)+previousElement.offset().top-$(window).scrollTop()-$(window).height()<0){element.addClass('override');}else{element.removeClass('override');}}
scrollHandler();}}
actionSheetToggler.$inject=['$rhActionSheet'];function actionSheetToggler($rhActionSheet){var directive={restrict:'AE',link:link};return directive;function link(scope,element,attrs){var componentId=attrs.rhActionSheetToggler;element.on('click',clickHandler);function clickHandler(event){event.preventDefault();$rhActionSheet(componentId).toggle();}}}
actionSheet.$inject=['$q','$timeout'];function actionSheet($q,$timeout){var directive={restrict:'AE',link:link,controller:ActionSheetController,scope:{isOpen:'=?rhIsOpen'}};return directive;function link(scope,element,attr,actionSheetController){var promise=$q.when(true);element.addClass('rh-actionsheet');scope.$watch('isOpen',updateIsOpen);actionSheetController.$toggleOpen=toggleOpen;element.on('$destroy',actionSheetController.destroy);function updateIsOpen(isOpen){var deferred=$q.defer();if(isOpen!==undefined){element.addClass('rh-actionsheet-animate');}
element[isOpen?'addClass':'removeClass']('rh-actionsheet-open');$timeout(function(){deferred.resolve();element.removeClass('rh-actionsheet-animate');},200);return promise=$q.all([deferred]);}
function toggleOpen(isOpen){if(scope.isOpen===isOpen){return $q.when(true);}else{var deferred=$q.defer();scope.isOpen=isOpen;$timeout(function(){promise.then(function(result){if(!scope.isOpen){}
deferred.resolve(result);});},0,false);return deferred.promise;}}}
function ActionSheetController($scope,$element,$attrs,$rhComponentRegistry,$q){var self=this;self.isOpen=function(){return!!$scope.isOpen;};self.open=function(){return self.$toggleOpen(true);};self.close=function(){return self.$toggleOpen(false);};self.toggle=function(){return self.$toggleOpen(!$scope.isOpen);};self.$toggleOpen=function(){return $q.when($scope.isOpen);};self.$element=$element;self.destroy=$rhComponentRegistry.register(self,$attrs.rhComponentId);}}
ActionSheetService.$inject=['$rhComponentRegistry','$q'];function ActionSheetService($rhComponentRegistry,$q){var openInstance;return function(handle){var instance=$rhComponentRegistry.get(handle);var service={isOpen:isOpen,toggle:toggle,open:open,close:close,then:then,instance:instance};return service;function isOpen(){return instance&&instance.isOpen();}
function toggle(){if(openInstance&&openInstance.$$rhHandle!==handle){openInstance.close();}
if(!isOpen()){openInstance=instance;}else{openInstance=null;}
return instance?instance.toggle():$q.reject();}
function open(){return instance?instance.open():$q.reject();}
function close(){return instance?instance.close():$q.reject();}
function then(callbackFn){var promise=$q.when(instance);return promise.then(callbackFn||angular.noop);}};}
ComponentRegistry.$inject=['$q'];function ComponentRegistry($q){var instances=[],service={get:get,register:register};return service;function get(handle){var instance;for(var i=0;i<instances.length;i+=1){instance=instances[i];if(instance.$$rhHandle===handle){return instance;}}
return null;}
function register(instance,handle){if(!handle){return angular.noop;}
instance.$$rhHandle=handle;instances.push(instance);return deregister;function deregister(){var index=instances.indexOf(instance);if(index!==-1){instances.splice(index,1);}}}}
angular.bootstrap(document,['helpfulApp']);var actionNav=$('#action-nav'),contentWrap=$('.content-wrapper');if(contentWrap.height()>actionNav.height()){$('#action-nav').affix({offset:{top:function(){var band=$('.band-first');return band.offset().top;},bottom:function(){var band=$('.band-first');return $(document).height()-(band.offset().top+band.outerHeight(true));}}});}
$('#main-content > .pubstatus').affix({offset:{top:function(){var mainArea=$('#cp-main');return mainArea.offset().top;},bottom:function(){var mainArea=$('#cp-main');return $(document).height()-(mainArea.offset().top+mainArea.outerHeight(true));}}});$('[data-toggle="popover"]').popover();});});;;
/* Source and licensing information for the above line(s) can be found at https://access.redhat.com/sites/all/themes/cirrus/js/angular.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://access.redhat.com/sites/all/themes/cirrus/js/code_raw_btn.js. */

chrometwo_require(['jquery'],function($){function escapeHTML(unsafe_str){return unsafe_str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;').replace(/\'/g,'&#39;');}
$(document).ready(function(){$("code").each(function(){if($(this).parent().is('pre')){$(this).parent().wrap('<div class="code-raw" />');var rawcode=$(this).text();var link=$('<a />',{text:'Raw',href:'#',class:'code-raw-btn',click:function(){var x=window.open();x.document.open();x.document.write('<pre>'+escapeHTML(rawcode)+'</pre>');x.document.close();return false;}});$(this).parent().parent().prepend(link);$(this).parent().parent().find('a').wrap('<div class="code-raw-toolbar" />');}});});});;;
/* Source and licensing information for the above line(s) can be found at https://access.redhat.com/sites/all/themes/cirrus/js/code_raw_btn.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://access.redhat.com/sites/all/modules/custom/rate/rate.js. */

(function($){Drupal.behaviors.rate={attach:function(context){$('.rate-widget:not(.rate-processed)',context).addClass('rate-processed').each(function(){var widget=$(this);var ids=widget.attr('id').split('--');ids=ids[0].match(/^rate\-([a-z]+)\-([0-9]+)\-([0-9]+)\-([0-9])$/);var data={content_type:ids[1],content_id:ids[2],widget_id:ids[3],widget_mode:ids[4]};$('a.rate-button',widget).click(function(){var token=this.getAttribute('href').match(/rate\=([a-zA-Z0-9\-_]{32,64})/)[1];return Drupal.rateVote(widget,data,token);});});}};Drupal.rateVote=function(widget,data,token){widget.trigger('eventBeforeRate',[data]);$(".rate-info",widget).text(Drupal.t('Saving vote...'));var random=Math.floor(Math.random()*99999);var q=(Drupal.settings.rate.basePath.match(/\?/)?'&':'?')+'widget_id='+data.widget_id+'&content_type='+data.content_type+'&content_id='+data.content_id+'&widget_mode='+data.widget_mode+'&token='+token+'&destination='+encodeURIComponent(Drupal.settings.rate.destination)+'&r='+random;if(data.value){q=q+'&value='+data.value;}
widget=$('.'+widget.attr('id'));$.get(Drupal.settings.rate.basePath+q,function(response){if(response.match(/^https?\:\/\/[^\/]+\/(.*)$/)){document.location=response;}
else{var p=widget.parent();widget.trigger('eventAfterRate',[data]);widget.before(response);widget.remove();widget=undefined;Drupal.attachBehaviors(p);}});return false;}})(jQuery);;;
/* Source and licensing information for the above line(s) can be found at https://access.redhat.com/sites/all/modules/custom/rate/rate.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://access.redhat.com/sites/all/themes/cirrus/js/append_modals.js. */

chrometwo_require(['jquery'],function($){$(function(){$('.modal').appendTo('body');});});;;
/* Source and licensing information for the above line(s) can be found at https://access.redhat.com/sites/all/themes/cirrus/js/append_modals.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://access.redhat.com/sites/all/modules/custom/redhat_translations/templates/translations.js. */

chrometwo_require(['jquery'],function($){$(function(){$('.modal').appendTo('body');});$(document).ajaxComplete(function(){if($('.modal-footer a').hasClass('view-translation-modal')){window.location.replace($('.view-translation-modal').attr("href"));}
if($('.modal-body .alert').hasClass('alert-success')){$('.modal-footer .btn-default').click();}});if($(".header .title").length){var machine_translated_title=$('.header .title').text();document.title=machine_translated_title+' - Red Hat Customer Portal';}});;;
/* Source and licensing information for the above line(s) can be found at https://access.redhat.com/sites/all/modules/custom/redhat_translations/templates/translations.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://access.redhat.com/sites/all/themes/cirrus/js/solutionengine.js. */

chrometwo_require(['solution-engine-banner'],function(sebanner){sebanner.init();});;;
/* Source and licensing information for the above line(s) can be found at https://access.redhat.com/sites/all/themes/cirrus/js/solutionengine.js. */
;/*})'"*/
