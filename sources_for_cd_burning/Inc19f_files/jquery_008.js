/*!
 * jQuery Cookie Plugin v1.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t){function n(e){return e}function o(e){return decodeURIComponent(e.replace(r," "))}var r=/\+/g;e.cookie=function(r,i,u){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(i))||null==i)){if(u=e.extend({},e.cookie.defaults,u),null==i&&(u.expires=-1),"number"==typeof u.expires){var a=u.expires,c=u.expires=new Date;c.setDate(c.getDate()+a)}return i=String(i),t.cookie=[encodeURIComponent(r),"=",u.raw?i:encodeURIComponent(i),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}u=i||e.cookie.defaults||{};for(var p,s=u.raw?n:o,l=t.cookie.split("; "),f=0;p=l[f]&&l[f].split("=");f++)if(s(p.shift())===r)return s(p.join("="));return null},e.cookie.defaults={}}(jQuery,document);