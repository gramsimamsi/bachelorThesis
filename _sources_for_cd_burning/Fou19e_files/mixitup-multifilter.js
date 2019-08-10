/**!
 * MixItUp MultiFilter v3.3.0
 * A UI-builder for powerful multidimensional filtering
 * Build 80e5e308-3902-4e4f-8c8c-4e9b732f7132
 *
 * Requires mixitup.js >= v^3.1.2
 *
 * @copyright Copyright 2014-2017 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup-multifilter/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup-multifilter/licenses/
 *
 *            Non-commercial use permitted under same terms as  license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
!function(e){"use strict";var t=function(e){var i=e.h;if(!e.CORE_VERSION||!i.compareVersions(t.REQUIRE_CORE_VERSION,e.CORE_VERSION))throw new Error("[MixItUp Multifilter] MixItUp Multifilter v"+t.EXTENSION_VERSION+" requires at least MixItUp v"+t.REQUIRE_CORE_VERSION);e.ConfigCallbacks.registerAction("afterConstruct","multifilter",function(){this.onParseFilterGroups=null}),e.ConfigMultifilter=function(){this.enable=!1,this.logicWithinGroup="or",this.logicBetweenGroups="and",this.minSearchLength=3,this.parseOn="change",this.keyupThrottleDuration=350,i.seal(this)},e.Config.registerAction("beforeConstruct","multifilter",function(){this.multifilter=new e.ConfigMultifilter}),e.MultifilterFormEventTracker=function(){this.form=null,this.totalBound=0,this.totalHandled=0,i.seal(this)},e.FilterGroupDom=function(){this.el=null,this.form=null,i.seal(this)},e.FilterGroup=function(){this.name="",this.dom=new e.FilterGroupDom,this.activeSelectors=[],this.activeToggles=[],this.handler=null,this.mixer=null,this.logic="or",this.parseOn="change",this.keyupTimeout=-1,i.seal(this)},i.extend(e.FilterGroup.prototype,{init:function(e,t){var i=this,r=e.getAttribute("data-logic");i.dom.el=e,this.name=i.dom.el.getAttribute("data-filter-group")||"",i.cacheDom(),i.dom.form&&i.enableButtons(),i.mixer=t,(r&&"and"===r.toLowerCase()||"and"===t.config.multifilter.logicWithinGroup)&&(i.logic="and"),i.bindEvents()},cacheDom:function(){var e=this;e.dom.form=i.closestParent(e.dom.el,"form",!0)},enableButtons:function(){var e=this,t=e.dom.form.querySelectorAll('button[type="submit"]:disabled'),i=null,r=-1;for(r=0;i=t[r];r++)i.disabled&&(i.disabled=!1)},bindEvents:function(){var e=this;e.handler=function(t){switch(t.type){case"reset":case"submit":e.handleFormEvent(t);break;default:e["handle"+i.pascalCase(t.type)](t)}},i.on(e.dom.el,"click",e.handler),i.on(e.dom.el,"change",e.handler),i.on(e.dom.el,"keyup",e.handler),e.dom.form&&(i.on(e.dom.form,"reset",e.handler),i.on(e.dom.form,"submit",e.handler))},unbindEvents:function(){var e=this;i.off(e.dom.el,"click",e.handler),i.off(e.dom.el,"change",e.handler),i.off(e.dom.el,"keyup",e.handler),e.dom.form&&(i.off(e.dom.form,"reset",e.handler),i.off(e.dom.form,"submit",e.handler)),e.handler=null},handleClick:function(e){var t=this,r=i.closestParent(e.target,"[data-filter], [data-toggle]",!0),o="",l=-1,n="";r&&((o=t.mixer.config.selectors.control)&&!r.matches(o)||(e.stopPropagation(),r.matches("[data-filter]")?(n=r.getAttribute("data-filter"),t.activeSelectors=t.activeToggles=[n]):r.matches("[data-toggle]")&&(n=r.getAttribute("data-toggle"),(l=t.activeToggles.indexOf(n))>-1?t.activeToggles.splice(l,1):t.activeToggles.push(n),"and"===t.logic?t.activeSelectors=[t.activeToggles]:t.activeSelectors=t.activeToggles),t.updateControls(),"change"===t.mixer.config.multifilter.parseOn&&t.mixer.parseFilterGroups()))},handleChange:function(e){var t=this,i=e.target;switch(e.stopPropagation(),i.type){case"text":case"search":case"email":case"select-one":case"radio":t.getSingleValue(i);break;case"checkbox":case"select-multiple":t.getMultipleValues(i)}"change"===t.mixer.config.multifilter.parseOn&&t.mixer.parseFilterGroups()},handleKeyup:function(e){var t=this,i=e.target;if(!(["text","search","email"].indexOf(i.type)<0)){if("change"!==t.mixer.config.multifilter.parseOn)return void t.mixer.getSingleValue(i);clearTimeout(t.keyupTimeout),t.keyupTimeout=setTimeout(function(){t.getSingleValue(i),t.mixer.parseFilterGroups()},t.mixer.config.multifilter.keyupThrottleDuration)}},handleFormEvent:function(t){var i=this,r=null,o=null,l=-1;if("submit"===t.type&&t.preventDefault(),"reset"===t.type&&(i.activeToggles=[],i.activeSelectors=[],i.updateControls()),i.mixer.multifilterFormEventTracker)r=i.mixer.multifilterFormEventTracker;else for(r=i.mixer.multifilterFormEventTracker=new e.MultifilterFormEventTracker,r.form=t.target,l=0;o=i.mixer.filterGroups[l];l++)o.dom.form===t.target&&r.totalBound++;t.target===r.form&&(r.totalHandled++,r.totalHandled===r.totalBound&&(i.mixer.multifilterFormEventTracker=null,"submit"!==t.type&&"change"!==i.mixer.config.multifilter.parseOn||i.mixer.parseFilterGroups()))},getSingleValue:function(e){var t=this,i="",r="",o="";if(e.type.match(/text|search|email/g)){if(i=e.getAttribute("data-search-attribute"),!i)throw new Error("[MixItUp MultiFilter] A valid `data-search-attribute` must be present on text inputs");if(e.value.length<t.mixer.config.multifilter.minSearchLength)return void(t.activeSelectors=t.activeToggles=[""]);o=e.value.replace(/\W+/g," ").toLowerCase().trim(),r="["+i+'*="'+o+'"]'}else r=e.value;"string"==typeof e.value&&(t.activeSelectors=t.activeToggles=[r])},getMultipleValues:function(e){var t=this,i=[],r="",o=null,l=null,n=-1;switch(e.type){case"checkbox":r='input[type="checkbox"]';break;case"select-multiple":r="option"}for(l=t.dom.el.querySelectorAll(r),n=0;o=l[n];n++)(o.checked||o.selected)&&o.value&&i.push(o.value);t.activeToggles=i,"and"===t.logic?t.activeSelectors=[i]:t.activeSelectors=i},updateControls:function(e){var t=this,i=null,r="filter",o=-1;for(e=e||t.dom.el.querySelectorAll("[data-filter], [data-toggle]"),o=0;i=e[o];o++)i.getAttribute("data-toggle")&&(r="toggle"),t.updateControl(i,r)},updateControl:function(e,t){var r=this,o=e.getAttribute("data-"+t),l="";l=i.getClassname(r.mixer.config.classNames,t,r.mixer.config.classNames.modifierActive),r.activeToggles.indexOf(o)>-1?i.addClass(e,l):i.removeClass(e,l)},updateUi:function(){var e=this,t=e.dom.el.querySelectorAll("[data-filter], [data-toggle]"),i=e.dom.el.querySelectorAll('input[type="radio"], input[type="checkbox"], option'),r=!1,o=null,l=-1;for(t.length&&e.updateControls(t,!0),l=0;o=i[l];l++)switch(r=e.activeToggles.indexOf(o.value)>-1,o.tagName.toLowerCase()){case"option":o.selected=r;break;case"input":o.checked=r}}}),e.MixerDom.registerAction("afterConstruct","multifilter",function(){this.filterGroups=[]}),e.Mixer.registerAction("afterConstruct","multifilter",function(){this.filterGroups=[],this.filterGroupsHash={},this.multifilterFormEventTracker=null}),e.Mixer.registerAction("afterCacheDom","multifilter",function(){var t=this,i=null;if(t.config.multifilter.enable){switch(t.config.controls.scope){case"local":i=t.dom.container;break;case"global":i=t.dom.document;break;default:throw new Error(e.messages.ERROR_CONFIG_INVALID_CONTROLS_SCOPE)}t.dom.filterGroups=i.querySelectorAll("[data-filter-group]")}}),e.Mixer.registerAction("beforeInitControls","multifilter",function(){var e=this;e.config.multifilter.enable&&(e.config.controls.live=!0)}),e.Mixer.registerAction("afterSanitizeConfig","multifilter",function(){var e=this;e.config.multifilter.logicBetweenGroups=e.config.multifilter.logicBetweenGroups.toLowerCase().trim(),e.config.multifilter.logicWithinGroup=e.config.multifilter.logicWithinGroup.toLowerCase().trim()}),e.Mixer.registerAction("afterAttach","multifilter",function(){var e=this;e.dom.filterGroups.length&&e.indexFilterGroups()}),e.Mixer.registerAction("afterUpdateControls","multifilter",function(){var e=this,t=null,i=-1;for(i=0;t=e.filterGroups[i];i++)t.updateControls()}),e.Mixer.registerAction("beforeDestroy","multifilter",function(){var e=this,t=null,i=-1;for(i=0;t=e.filterGroups[i];i++)t.unbindEvents()}),e.Mixer.extend({indexFilterGroups:function(){var t=this,i=null,r=null,o=-1;for(o=0;r=t.dom.filterGroups[o];o++)if(i=new e.FilterGroup,i.init(r,t),t.filterGroups.push(i),i.name){if("undefined"!=typeof t.filterGroupsHash[i.name])throw new Error('[MixItUp MultiFilter] A filter group with name "'+i.name+'" already exists');t.filterGroupsHash[i.name]=i}},parseParseFilterGroupsArgs:function(t){var r=this,o=new e.UserInstruction,l=null,n=-1;for(o.animate=r.config.animation.enable,o.command=new e.CommandFilter,n=0;n<t.length;n++)l=t[n],"boolean"==typeof l?o.animate=l:"function"==typeof l&&(o.callback=l);return i.freeze(o),o},getFilterGroupPaths:function(){var e=this,t=null,r=null,o=null,l=[],n=[],a=[],s=-1;for(s=0;s<e.filterGroups.length;s++)(o=e.filterGroups[s].activeSelectors).length&&(l.push(o),a.push(0));return t=function(){var e=null,t=[],r=-1;for(r=0;r<l.length;r++)e=l[r][a[r]],Array.isArray(e)&&(e=e.join("")),t.push(e);t=i.clean(t),n.push(t)},r=function(e){e=e||0;for(var i=l[e];a[e]<i.length;)e<l.length-1?r(e+1):t(),a[e]++;a[e]=0},l.length?(r(),n):""},buildSelectorFromPaths:function(e){var t=this,i=null,r=[],o="",l="",n=-1;if(!e.length)return"";if("or"===t.config.multifilter.logicBetweenGroups&&(l=", "),e.length>1){for(n=0;n<e.length;n++)i=e[n],o=i.join(l),r.indexOf(o)<0&&r.push(o);return r.join(", ")}return e[0].join(l)},parseFilterGroups:function(){var e=this,t=e.parseFilterArgs(arguments),i=e.getFilterGroupPaths(),r=e.buildSelectorFromPaths(i),o=null,l={};return""===r&&(r=e.config.controls.toggleDefault),t.command.selector=r,l.filter=t.command,"function"==typeof(o=e.config.callbacks.onParseFilterGroups)&&(l=o(l)),e.multimix(l,t.animate,t.callback)},setFilterGroupSelectors:function(e,t){var i=this,r=null;if(t=Array.isArray(t)?t:[t],"undefined"==typeof(r=i.filterGroupsHash[e]))throw new Error('[MixItUp MultiFilter] No filter group could be found with the name "'+e+'"');r.activeToggles=t.slice(),"and"===r.logic?r.activeSelectors=[r.activeToggles]:r.activeSelectors=r.activeToggles,r.updateUi(r.activeToggles)},getFilterGroupSelectors:function(e){var t=this,i=null;if("undefined"==typeof(i=t.filterGroupsHash[e]))throw new Error('[MixItUp MultiFilter] No filter group could be found with the name "'+e+'"');return i.activeToggles.slice()}}),e.Facade.registerAction("afterConstruct","multifilter",function(e){this.parseFilterGroups=e.parseFilterGroups.bind(e),this.setFilterGroupSelectors=e.setFilterGroupSelectors.bind(e),this.getFilterGroupSelectors=e.getFilterGroupSelectors.bind(e)})};if(t.TYPE="mixitup-extension",t.NAME="mixitup-multifilter",t.EXTENSION_VERSION="3.3.0",t.REQUIRE_CORE_VERSION="^3.1.2","object"==typeof exports&&"object"==typeof module)module.exports=t;else if("function"==typeof define&&define.amd)define(function(){return t});else{if(!e.mixitup||"function"!=typeof e.mixitup)throw new Error("[MixItUp MultiFilter] MixItUp core not found");t(e.mixitup)}}(window);