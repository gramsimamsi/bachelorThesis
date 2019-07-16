/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/misc/jquery-extend-3.4.0.js. */
(function(jQuery){var versionParts=jQuery.fn.jquery.split('.'),majorVersion=parseInt(versionParts[0]),minorVersion=parseInt(versionParts[1]),patchVersion=parseInt(versionParts[2]),isPreReleaseVersion=(patchVersion.toString()!==versionParts[2]);if((majorVersion>3)||(majorVersion===3&&minorVersion>4)||(majorVersion===3&&minorVersion===4&&patchVersion>0)||(majorVersion===3&&minorVersion===4&&patchVersion===0&&!isPreReleaseVersion))return;jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++};if(typeof target!=="object"&&!jQuery.isFunction(target))target={};if(i===length){target=this;i--};for(;i<length;i++)if((options=arguments[i])!=null)for(name in options){copy=options[name];if(name==="__proto__"||target===copy)continue;if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){src=target[name];if(copyIsArray&&!jQuery.isArray(src)){clone=[]}else if(!copyIsArray&&!jQuery.isPlainObject(src)){clone={}}else clone=src;copyIsArray=false;target[name]=jQuery.extend(deep,clone,copy)}else if(copy!==undefined)target[name]=copy};return target}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/misc/jquery-extend-3.4.0.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/misc/jquery.once.js. */
(function($){var cache={},uuid=0;$.fn.once=function(id,fn){if(typeof id!='string'){if(!(id in cache))cache[id]=++uuid;if(!fn)fn=id;id='jquery-once-'+cache[id]};var name=id+'-processed',elements=this.not('.'+name).addClass(name);return $.isFunction(fn)?elements.each(fn):elements};$.fn.removeOnce=function(id,fn){var name=id+'-processed',elements=this.filter('.'+name).removeClass(name);return $.isFunction(fn)?elements.each(fn):elements}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/misc/jquery.once.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/misc/drupal.js. */
var Drupal=Drupal||{settings:{},behaviors:{},locale:{}};jQuery.noConflict();(function($){var jquery_init=$.fn.init;$.fn.init=function(selector,context,rootjQuery){if(selector&&typeof selector==='string'){var hash_position=selector.indexOf('#');if(hash_position>=0){var bracket_position=selector.indexOf('<');if(bracket_position>hash_position)throw'Syntax error, unrecognized expression: '+selector}};return jquery_init.call(this,selector,context,rootjQuery)};$.fn.init.prototype=jquery_init.prototype;if($.ajaxPrefilter){$.ajaxPrefilter(function(s){if(s.crossDomain)s.contents.script=false})}else if($.httpData){var jquery_httpData=$.httpData;$.httpData=function(xhr,type,s){if(!type&&!Drupal.urlIsLocal(s.url)){var content_type=xhr.getResponseHeader('content-type')||'';if(content_type.indexOf('javascript')>=0)type='text'};return jquery_httpData.call(this,xhr,type,s)};$.httpData.prototype=jquery_httpData.prototype};Drupal.attachBehaviors=function(context,settings){context=context||document;settings=settings||Drupal.settings;$.each(Drupal.behaviors,function(){if($.isFunction(this.attach))this.attach(context,settings)})};Drupal.detachBehaviors=function(context,settings,trigger){context=context||document;settings=settings||Drupal.settings;trigger=trigger||'unload';$.each(Drupal.behaviors,function(){if($.isFunction(this.detach))this.detach(context,settings,trigger)})};Drupal.checkPlain=function(str){var character,regex,replace={'&':'&amp;',"'":'&#39;','"':'&quot;','<':'&lt;','>':'&gt;'};str=String(str);for(character in replace)if(replace.hasOwnProperty(character)){regex=new RegExp(character,'g');str=str.replace(regex,replace[character])};return str};Drupal.formatString=function(str,args){for(var key in args)if(args.hasOwnProperty(key))switch(key.charAt(0)){case'@':args[key]=Drupal.checkPlain(args[key]);break;case'!':break;default:args[key]=Drupal.theme('placeholder',args[key]);break};return Drupal.stringReplace(str,args,null)};Drupal.stringReplace=function(str,args,keys){if(str.length===0)return str;if(!$.isArray(keys)){keys=[];for(var k in args)if(args.hasOwnProperty(k))keys.push(k);keys.sort(function(a,b){return a.length-b.length})};if(keys.length===0)return str;var key=keys.pop(),fragments=str.split(key);if(keys.length)for(var i=0;i<fragments.length;i++)fragments[i]=Drupal.stringReplace(fragments[i],args,keys.slice(0));return fragments.join(args[key])};Drupal.t=function(str,args,options){options=options||{};options.context=options.context||'';if(Drupal.locale.strings&&Drupal.locale.strings[options.context]&&Drupal.locale.strings[options.context][str])str=Drupal.locale.strings[options.context][str];if(args)str=Drupal.formatString(str,args);return str};Drupal.formatPlural=function(count,singular,plural,args,options){args=args||{};args['@count']=count;var index=Drupal.locale.pluralFormula?Drupal.locale.pluralFormula(args['@count']):((args['@count']==1)?0:1);if(index==0){return Drupal.t(singular,args,options)}else if(index==1){return Drupal.t(plural,args,options)}else{args['@count['+index+']']=args['@count'];delete args['@count'];return Drupal.t(plural.replace('@count','@count['+index+']'),args,options)}};Drupal.absoluteUrl=function(url){var urlParsingNode=document.createElement('a');try{url=decodeURIComponent(url)}catch(e){};urlParsingNode.setAttribute('href',url);return urlParsingNode.cloneNode(false).href};Drupal.urlIsLocal=function(url){var absoluteUrl=Drupal.absoluteUrl(url),protocol=location.protocol;if(protocol==='http:'&&absoluteUrl.indexOf('https:')===0)protocol='https:';var baseUrl=protocol+'//'+location.host+Drupal.settings.basePath.slice(0,-1);try{absoluteUrl=decodeURIComponent(absoluteUrl)}catch(e){};try{baseUrl=decodeURIComponent(baseUrl)}catch(e){};return absoluteUrl===baseUrl||absoluteUrl.indexOf(baseUrl+'/')===0};Drupal.theme=function(func){var args=Array.prototype.slice.apply(arguments,[1]);return(Drupal.theme[func]||Drupal.theme.prototype[func]).apply(this,args)};Drupal.freezeHeight=function(){Drupal.unfreezeHeight();$('<div id="freeze-height"></div>').css({position:'absolute',top:'0px',left:'0px',width:'1px',height:$('body').css('height')}).appendTo('body')};Drupal.unfreezeHeight=function(){$('#freeze-height').remove()};Drupal.encodePath=function(item,uri){uri=uri||location.href;return encodeURIComponent(item).replace(/%2F/g,'/')};Drupal.getSelection=function(element){if(typeof element.selectionStart!='number'&&document.selection){var range1=document.selection.createRange(),range2=range1.duplicate();range2.moveToElementText(element);range2.setEndPoint('EndToEnd',range1);var start=range2.text.length-range1.text.length,end=start+range1.text.length;return{start:start,end:end}};return{start:element.selectionStart,end:element.selectionEnd}};Drupal.beforeUnloadCalled=false;$(window).bind('beforeunload pagehide',function(){Drupal.beforeUnloadCalled=true});Drupal.displayAjaxError=function(message){if(!Drupal.beforeUnloadCalled)alert(message)};Drupal.ajaxError=function(xmlhttp,uri,customMessage){var statusCode,statusText,pathText,responseText,readyStateText,message;if(xmlhttp.status){statusCode="\n"+Drupal.t("An AJAX HTTP error occurred.")+"\n"+Drupal.t("HTTP Result Code: !status",{'!status':xmlhttp.status})}else statusCode="\n"+Drupal.t("An AJAX HTTP request terminated abnormally.");statusCode+="\n"+Drupal.t("Debugging information follows.");pathText="\n"+Drupal.t("Path: !uri",{'!uri':uri});statusText='';try{statusText="\n"+Drupal.t("StatusText: !statusText",{'!statusText':$.trim(xmlhttp.statusText)})}catch(e){};responseText='';try{responseText="\n"+Drupal.t("ResponseText: !responseText",{'!responseText':$.trim(xmlhttp.responseText)})}catch(e){};responseText=responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,"");responseText=responseText.replace(/[\n]+\s+/g,"\n");readyStateText=xmlhttp.status==0?("\n"+Drupal.t("ReadyState: !readyState",{'!readyState':xmlhttp.readyState})):"";customMessage=customMessage?("\n"+Drupal.t("CustomMessage: !customMessage",{'!customMessage':customMessage})):"";message=statusCode+pathText+statusText+customMessage+responseText+readyStateText;return message};$('html').addClass('js');document.cookie='has_js=1; path=/';$(function(){if(jQuery.support.positionFixed===undefined){var el=$('<div style="position:fixed; top:10px" />').appendTo(document.body);jQuery.support.positionFixed=el[0].offsetTop===10;el.remove()}});$(function(){Drupal.attachBehaviors(document,Drupal.settings)});Drupal.theme.prototype={placeholder:function(str){return'<em class="placeholder">'+Drupal.checkPlain(str)+'</em>'}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/misc/drupal.js. */
;/*})'"*/
!function(a,b,c){"use strict";a.digitalData=a.digitalData||{},c.isArray(a.digitalData.event)||(a.digitalData.event=[]),a.redhat=a.redhat||{},a.redhat.ddo={dispatchEvent:function(a){if(!a)return this;if(!b.body||!c.isFunction(b.body.dispatchEvent))return this;var d;return c.isFunction(b.createEvent)?(d=b.createEvent("Event"),d.initEvent(a,!0,!0)):CustomEvent&&(d=new CustomEvent(a,{buddles:!0,cancellable:!0})),d&&b.body.dispatchEvent(d),this},addEvent:function(b){if(!c.isPlainObject(b))return this;var d={eventInfo:c.extend(!0,{eventName:"",eventAction:"",timestamp:new Date,processed:{adobeAnalytics:!1}},b)};return a.digitalData.event.push(d),this},get:function(b){return b?a.digitalData:c.extend(!0,{},a.digitalData)},set:function(b){return a.digitalData=b,this},extend:function(b){return c.extend(!0,a.digitalData,b),this}}}(window,document,jQuery);
;/*})'"*/
;/*})'"*/
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);
;/*})'"*/
;/*})'"*/
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);
;/*})'"*/
;/*})'"*/
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[c[l].cache]=o[c[l].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,o,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,h],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),a=c[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],l=s[a],c=u[n.type]||{};null!==l&&(null===o?h[a]=l:(c.mod&&(l-o>c.mod/2?o+=c.mod:o-l>c.mod/2&&(o-=c.mod)),h[a]=i((l-o)*e+o,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[o]=d,n):l(d)},f(a,function(e,i){l.fn[e]||(l.fn[e]=function(n){var a,o=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=l(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var h=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.2",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);
;/*})'"*/
;/*})'"*/
/*! eq.js (with polyfills) v1.9.0 (c) 2013-2016 Sam Richard with thanks to the Financial Times, MIT license */
!function(){"getPrototypeOf"in Object||(Object.getPrototypeOf=function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");return t.constructor?t.constructor.prototype:null}),"requestAnimationFrame"in this||!function(t){"use strict";var e=Date.now();t.requestAnimationFrame=function(t){if("function"!=typeof t)throw new TypeError(t+"is not a function");var n=Date.now(),o=16+e-n;return 0>o&&(o=0),e=n,setTimeout(function(){e=Date.now(),t(performance.now())},o)},t.cancelAnimationFrame=function(t){clearTimeout(t)}}(this),function(t){if(!("Event"in t))return!1;if("function"==typeof t.Event)return!0;try{return new Event("click"),!0}catch(e){return!1}}(this)||(this.Event=function(t,e){if(!t)throw new Error("Not enough arguments");var n=document.createEvent("Event"),o=e&&void 0!==e.bubbles?e.bubbles:!1,r=e&&void 0!==e.cancelable?e.cancelable:!1;return n.initEvent(t,o,r),n}),"CustomEvent"in this&&("function"==typeof this.CustomEvent||this.CustomEvent.toString().indexOf("CustomEventConstructor")>-1)||(this.CustomEvent=function(t,e){if(!t)throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');var n;e=e||{bubbles:!1,cancelable:!1,detail:null};try{n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail)}catch(o){n=document.createEvent("Event"),n.initEvent(t,e.bubbles,e.cancelable),n.detail=e.detail}return n},CustomEvent.prototype=Event.prototype),"addEventListener"in this||document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))}),"getComputedStyle"in this||!function(t){function e(t,n,o){var r,i=t.document&&t.currentStyle[n].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],u=i[1],c=i[2];return o=o?/%|em/.test(c)&&t.parentElement?e(t.parentElement,"fontSize",null):16:o,r="fontSize"==n?o:/width/i.test(n)?t.clientWidth:t.clientHeight,"%"==c?u/100*r:"cm"==c?.3937*u*96:"em"==c?u*o:"in"==c?96*u:"mm"==c?.3937*u*96/10:"pc"==c?12*u*96/72:"pt"==c?96*u/72:u}function n(t,e){var n="border"==e?"Width":"",o=e+"Top"+n,r=e+"Right"+n,i=e+"Bottom"+n,u=e+"Left"+n;t[e]=(t[o]==t[r]&&t[o]==t[i]&&t[o]==t[u]?[t[o]]:t[o]==t[i]&&t[u]==t[r]?[t[o],t[r]]:t[u]==t[r]?[t[o],t[r],t[i]]:[t[o],t[r],t[i],t[u]]).join(" ")}function o(t){var o,r=this,i=t.currentStyle,u=e(t,"fontSize"),c=function(t){return"-"+t.toLowerCase()};for(o in i)if(Array.prototype.push.call(r,"styleFloat"==o?"float":o.replace(/[A-Z]/,c)),"width"==o)r[o]=t.offsetWidth+"px";else if("height"==o)r[o]=t.offsetHeight+"px";else if("styleFloat"==o)r["float"]=i[o];else if(/margin.|padding.|border.+W/.test(o)&&"auto"!=r[o])r[o]=Math.round(e(t,o,u))+"px";else if(/^outline/.test(o))try{r[o]=i[o]}catch(a){r.outlineColor=i.color,r.outlineStyle=r.outlineStyle||"none",r.outlineWidth=r.outlineWidth||"0px",r.outline=[r.outlineColor,r.outlineWidth,r.outlineStyle].join(" ")}else r[o]=i[o];n(r,"margin"),n(r,"padding"),n(r,"border"),r.fontSize=Math.round(u)+"px"}o.prototype={constructor:o,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")},getPropertyValue:function(t){return this[t.replace(/-\w/g,function(t){return t[1].toUpperCase()})]},item:function(t){return this[t]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")}},t.getComputedStyle=function(t){return new o(t)}}(this),"forEach"in Array.prototype||(Array.prototype.forEach=function(t){if(void 0===this||null===this)throw new TypeError(this+"is not an object");if(!(t instanceof Function))throw new TypeError(t+" is not a function");for(var e=Object(this),n=arguments[1],o=e instanceof String?e.split(""):e,r=Math.max(Math.min(o.length,9007199254740991),0)||0,i=-1;++i<r;)i in o&&t.call(n,o[i],i,e)})}(),function(t){"use strict";function e(){this.nodes=[],this.eqsLength=0,this.widths=[],this.points=[],this.callback=void 0}function n(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,function(){return n.call(t,window.event)})}function o(t){return window.getComputedStyle(t,":before").getPropertyValue("content").slice(1,-1)}var r=function(t,e){return[].slice.call(t).concat([].slice.call(e))};e.prototype.query=function(e,n){var r,i=Object.getPrototypeOf(t);n&&"function"==typeof n&&(i.callback=n),e&&"number"!=typeof e?r=e.length:(e=i.nodes,r=i.nodesLength);var u,c=[],a=[];for(u=0;r>u;u++){var l=e[u].getBoundingClientRect(),s=l.width;void 0===s&&(s=l.right-l.left),c.push(s);try{a.push(i.sortObj(e[u].getAttribute("data-eq-pts")))}catch(f){try{a.push(i.sortObj(o(e[u])))}catch(d){a.push([{key:"",value:0}])}}}i.widths=c,i.points=a,e&&"number"!=typeof e?i.nodeWrites(e,c,a):n&&"function"!=typeof n?i.nodeWrites():window.requestAnimationFrame(i.nodeWrites)},e.prototype.nodeWrites=function(e){var n,o,r,i,u,c,a,l=Object.getPrototypeOf(t),s=l.widths,f=l.points;for(e&&"number"!=typeof e?i=e.length:(e=l.nodes,i=l.nodesLength),n=0;i>n;n++){var d=s[n],p=e[n],h=f[n],y=[],v=h.length;if(d<h[0].value)a=null;else if(d>=h[v-1].value){for(r=0;v>r;r++)y.push(h[r].key);a=y.join(" ")}else for(o=0;v>o;o++){var m=h[o],b=h[o+1];if(y.push(m.key),0===o&&d<m.value){a=null;break}if(void 0!==b&&void 0===b.value){y.push(b.key),a=y.join(" ");break}if(d>=m.value&&d<b.value){a=y.join(" ");break}}null===a?p.removeAttribute("data-eq-state"):p.setAttribute("data-eq-state",a),c=new CustomEvent("eqResize",{detail:a,bubbles:!0}),p.dispatchEvent(c)}l.callback&&(u=l.callback,l.callback=void 0,u(e))},e.prototype.refreshNodes=function(){var e=Object.getPrototypeOf(t),n=[];e.nodes=document.querySelectorAll("[data-eq-pts]"),n=o(document.querySelector("html")).split(", "),n.forEach(function(t){""!==t&&(e.nodes=r(e.nodes,document.querySelectorAll(t)))}),e.nodesLength=e.nodes.length},e.prototype.sortObj=function(t){for(var e=[],n=t.split(","),o=0;o<n.length;o++){var r=n[o].split(":");e.push({key:r[0].replace(/^\s+|\s+$/g,""),value:parseFloat(r[1])})}return e.sort(function(t,e){return t.value-e.value})},e.prototype.definePts=function(t,e){return e=e?e:{},e=JSON.stringify(e),e=e.substring(1,e.length-1),e=e.replace(/:/g,": "),e=e.replace(/,/g,", "),e=e.replace(/"/g,""),t.setAttribute("data-eq-pts",e),e},e.prototype.all=function(e){var n=Object.getPrototypeOf(t),o=e?!0:!1;n.refreshNodes(),o?n.query(void 0,e):window.requestAnimationFrame(n.query)},t=t||new e,n(window,"DOMContentLoaded",function(){t.all(!1)}),n(window,"load",function(){t.all(!0)}),n(window,"resize",function(){t.all(!0)}),"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define("eqjs",function(){return t}):window.eqjs=t}(window.eqjs);
//# sourceMappingURL=eq.polyfilled.min.js.map

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
;/*})'"*/
;/*})'"*/
/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
  'use strict';

  (function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.polyfillWrapFlushCallback)return;const a=HTMLElement;window.HTMLElement=function HTMLElement(){return Reflect.construct(a,[],this.constructor)},HTMLElement.prototype=a.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,a);})();

}());

/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var r,t="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function da(){da=function(){};t.Symbol||(t.Symbol=ea)}var ea=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function fa(){da();var a=t.Symbol.iterator;a||(a=t.Symbol.iterator=t.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ca(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(this)}});fa=function(){}}function ha(a){var b=0;return ia(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ia(a){fa();a={next:a};a[t.Symbol.iterator]=function(){return this};return a}function ja(a){fa();var b=a[Symbol.iterator];return b?b.call(a):ha(a)}
function ka(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var la;if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={Ga:!0},oa={};try{oa.__proto__=na;ma=oa.Ga;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;function qa(){this.f=!1;this.b=null;this.aa=void 0;this.a=1;this.F=0;this.c=null}
function ra(a){if(a.f)throw new TypeError("Generator is already running");a.f=!0}qa.prototype.u=function(a){this.aa=a};function sa(a,b){a.c={Ja:b,Na:!0};a.a=a.F}qa.prototype.return=function(a){this.c={return:a};this.a=this.F};function ta(a,b){a.a=3;return{value:b}}function ua(a){this.a=new qa;this.b=a}function va(a,b){ra(a.a);var c=a.a.b;if(c)return wa(a,"return"in c?c["return"]:function(a){return{value:a,done:!0}},b,a.a.return);a.a.return(b);return xa(a)}
function wa(a,b,c,d){try{var e=b.call(a.a.b,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.f=!1,e;var f=e.value}catch(g){return a.a.b=null,sa(a.a,g),xa(a)}a.a.b=null;d.call(a.a,f);return xa(a)}function xa(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.f=!1,{value:b.value,done:!1}}catch(c){a.a.aa=void 0,sa(a.a,c)}a.a.f=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.Na)throw b.Ja;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ya(a){this.next=function(b){ra(a.a);a.a.b?b=wa(a,a.a.b.next,b,a.a.u):(a.a.u(b),b=xa(a));return b};this.throw=function(b){ra(a.a);a.a.b?b=wa(a,a.a.b["throw"],b,a.a.u):(sa(a.a,b),b=xa(a));return b};this.return=function(b){return va(a,b)};fa();this[Symbol.iterator]=function(){return this}}function Ba(a,b){b=new ya(new ua(b));pa&&pa(b,a.prototype);return b}
(function(){if(!function(){var a=document.createEvent("Event");a.initEvent("foo",!0,!0);a.preventDefault();return a.defaultPrevented}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var b=/Trident/.test(navigator.userAgent);if(!window.Event||b&&"function"!==typeof window.Event){var c=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");
c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};if(c){for(var d in c)window.Event[d]=c[d];window.Event.prototype=c.prototype}}if(!window.CustomEvent||b&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c},window.CustomEvent.prototype=window.Event.prototype;if(!window.MouseEvent||b&&"function"!==typeof window.MouseEvent){b=window.MouseEvent;window.MouseEvent=
function(a,b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c};if(b)for(d in b)window.MouseEvent[d]=b[d];window.MouseEvent.prototype=b.prototype}Array.from||(Array.from=function(a){return[].slice.call(a)});Object.assign||(Object.assign=function(a,b){for(var c=[].slice.call(arguments,1),d=0,e;d<c.length;d++)if(e=c[d])for(var f=
a,n=e,q=Object.getOwnPropertyNames(n),I=0;I<q.length;I++)e=q[I],f[e]=n[e];return a})})();(function(){function a(){}function b(a,b){if(!a.childNodes.length)return[];switch(a.nodeType){case Node.DOCUMENT_NODE:return Q.call(a,b);case Node.DOCUMENT_FRAGMENT_NODE:return Eb.call(a,b);default:return x.call(a,b)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function a(a,b){if(a instanceof DocumentFragment)for(var d;d=a.firstChild;)c.call(this,d,b);else c.call(this,
a,b);return a}e=!0;var b=Node.prototype.cloneNode;Node.prototype.cloneNode=function(a){a=b.call(this,a);this instanceof DocumentFragment&&(a.__proto__=DocumentFragment.prototype);return a};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
configurable:!0},nodeName:{get:function(){return"#document-fragment"},configurable:!0}});var c=Node.prototype.insertBefore;Node.prototype.insertBefore=a;var d=Node.prototype.appendChild;Node.prototype.appendChild=function(b){b instanceof DocumentFragment?a.call(this,b,null):d.call(this,b);return b};var f=Node.prototype.removeChild,g=Node.prototype.replaceChild;Node.prototype.replaceChild=function(b,c){b instanceof DocumentFragment?(a.call(this,b,c),f.call(this,c)):g.call(this,b,c);return c};Document.prototype.createDocumentFragment=
function(){var a=this.createElement("df");a.__proto__=DocumentFragment.prototype;return a};var h=Document.prototype.importNode;Document.prototype.importNode=function(a,b){b=h.call(this,a,b||!1);a instanceof DocumentFragment&&(b.__proto__=DocumentFragment.prototype);return b}}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,n=Node.prototype.replaceChild,q=DOMParser.prototype.parseFromString,
I=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(a){this.innerHTML=a}},v=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},x=Element.prototype.querySelectorAll,Q=Document.prototype.querySelectorAll,Eb=DocumentFragment.prototype.querySelectorAll,Fb=function(){if(!c){var a=document.createElement("template"),b=document.createElement("template");b.content.appendChild(document.createElement("div"));
a.content.appendChild(b);a=a.cloneNode(!0);return 0===a.content.childNodes.length||0===a.content.firstChild.content.childNodes.length||d}}();if(c){var T=document.implementation.createHTMLDocument("template"),Ja=!0,p=document.createElement("style");p.textContent="template{display:none;}";var za=document.head;za.insertBefore(p,za.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var aa=!document.createElement("div").hasOwnProperty("innerHTML");a.S=function(b){if(!b.content&&b.namespaceURI===
document.documentElement.namespaceURI){b.content=T.createDocumentFragment();for(var c;c=b.firstChild;)l.call(b.content,c);if(aa)b.__proto__=a.prototype;else if(b.cloneNode=function(b){return a.b(this,b)},Ja)try{m(b),y(b)}catch(vh){Ja=!1}a.a(b.content)}};var X={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},m=function(b){Object.defineProperty(b,"innerHTML",{get:function(){return ba(this)},set:function(b){var c=X[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(b)||
["",""])[1].toLowerCase()];if(c)for(var d=0;d<c.length;d++)b="<"+c[d]+">"+b+"</"+c[d]+">";T.body.innerHTML=b;for(a.a(T);this.content.firstChild;)k.call(this.content,this.content.firstChild);b=T.body;if(c)for(d=0;d<c.length;d++)b=b.lastChild;for(;b.firstChild;)l.call(this.content,b.firstChild)},configurable:!0})},y=function(a){Object.defineProperty(a,"outerHTML",{get:function(){return"<template>"+this.innerHTML+"</template>"},set:function(a){if(this.parentNode){T.body.innerHTML=a;for(a=this.ownerDocument.createDocumentFragment();T.body.firstChild;)l.call(a,
T.body.firstChild);n.call(this.parentNode,a,this)}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0})};m(a.prototype);y(a.prototype);a.a=function(c){c=b(c,"template");for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)a.S(f)};document.addEventListener("DOMContentLoaded",function(){a.a(document)});Document.prototype.createElement=function(){var b=g.apply(this,arguments);"template"===b.localName&&a.S(b);return b};DOMParser.prototype.parseFromString=
function(){var b=q.apply(this,arguments);a.a(b);return b};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return ba(this)},set:function(b){I.set.call(this,b);a.a(this)},configurable:!0,enumerable:!0});var Y=/[&\u00A0"]/g,Gb=/[&\u00A0<>]/g,Ka=function(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}};p=function(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b};var Aa=p("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
La=p("style script xmp iframe noembed noframes plaintext noscript".split(" ")),ba=function(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):v.get.call(a),e=0,f=d.length,g;e<f&&(g=d[e]);e++){a:{var h=g;var k=a;var l=b;switch(h.nodeType){case Node.ELEMENT_NODE:for(var n=h.localName,m="<"+n,q=h.attributes,x=0;k=q[x];x++)m+=" "+k.name+'="'+k.value.replace(Y,Ka)+'"';m+=">";h=Aa[n]?m:m+ba(h,l)+"</"+n+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&La[k.localName]?h:h.replace(Gb,Ka);break a;
case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),Error("not implemented");}}c+=h}return c}}if(c||Fb){a.b=function(a,b){var c=f.call(a,!1);this.S&&this.S(c);b&&(l.call(c.content,f.call(a.content,!0)),Ma(c.content,a.content));return c};var Ma=function(c,d){if(d.querySelectorAll&&(d=b(d,"template"),0!==d.length)){c=b(c,"template");for(var e=0,f=c.length,g,h;e<f;e++)h=d[e],g=c[e],a&&a.S&&a.S(h),n.call(g.parentNode,sf.call(h,!0),g)}},sf=Node.prototype.cloneNode=
function(b){if(!e&&d&&this instanceof DocumentFragment)if(b)var c=tf.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?c=a.b(this,b):c=f.call(this,b);b&&Ma(c,this);return c},tf=Document.prototype.importNode=function(c,d){d=d||!1;if("template"===c.localName)return a.b(c,d);var e=h.call(this,c,d);if(d){Ma(e,c);c=b(e,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
for(var f,k=0;k<c.length;k++){f=c[k];d=g.call(document,"script");d.textContent=f.textContent;for(var l=f.attributes,m=0,q;m<l.length;m++)q=l[m],d.setAttribute(q.name,q.value);n.call(f.parentNode,d,f)}}return e}}c&&(window.HTMLTemplateElement=a)})();var Ca=setTimeout;function Da(){}function Ea(a,b){return function(){a.apply(b,arguments)}}function u(a){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.I=0;this.oa=!1;this.w=void 0;this.U=[];Fa(a,this)}
function Ga(a,b){for(;3===a.I;)a=a.w;0===a.I?a.U.push(b):(a.oa=!0,Ha(function(){var c=1===a.I?b.Pa:b.Qa;if(null===c)(1===a.I?Ia:Na)(b.ma,a.w);else{try{var d=c(a.w)}catch(e){Na(b.ma,e);return}Ia(b.ma,d)}}))}function Ia(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof u){a.I=3;a.w=b;Oa(a);return}if("function"===typeof c){Fa(Ea(c,b),a);return}}a.I=1;a.w=b;Oa(a)}catch(d){Na(a,d)}}
function Na(a,b){a.I=2;a.w=b;Oa(a)}function Oa(a){2===a.I&&0===a.U.length&&Ha(function(){a.oa||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.w)});for(var b=0,c=a.U.length;b<c;b++)Ga(a,a.U[b]);a.U=null}function Pa(a,b,c){this.Pa="function"===typeof a?a:null;this.Qa="function"===typeof b?b:null;this.ma=c}function Fa(a,b){var c=!1;try{a(function(a){c||(c=!0,Ia(b,a))},function(a){c||(c=!0,Na(b,a))})}catch(d){c||(c=!0,Na(b,d))}}
u.prototype["catch"]=function(a){return this.then(null,a)};u.prototype.then=function(a,b){var c=new this.constructor(Da);Ga(this,new Pa(a,b,c));return c};u.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
function Qa(a){return new u(function(b,c){function d(a,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var h=g.then;if("function"===typeof h){h.call(g,function(b){d(a,b)},c);return}}e[a]=g;0===--f&&b(e)}catch(n){c(n)}}if(!a||"undefined"===typeof a.length)throw new TypeError("Promise.all accepts an array");var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g])})}
function Ra(a){return a&&"object"===typeof a&&a.constructor===u?a:new u(function(b){b(a)})}function Sa(a){return new u(function(b,c){c(a)})}function Ta(a){return new u(function(b,c){for(var d=0,e=a.length;d<e;d++)a[d].then(b,c)})}var Ha="function"===typeof setImmediate&&function(a){setImmediate(a)}||function(a){Ca(a,0)};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
if(!window.Promise){window.Promise=u;u.prototype.then=u.prototype.then;u.all=Qa;u.race=Ta;u.resolve=Ra;u.reject=Sa;var Ua=document.createTextNode(""),Va=[];(new MutationObserver(function(){for(var a=Va.length,b=0;b<a;b++)Va[b]();Va.splice(0,a)})).observe(Ua,{characterData:!0});Ha=function(a){Va.push(a);Ua.textContent=0<Ua.textContent.length?"":"a"}};/*
 Copyright (C) 2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(a,b){if(!(b in a)){var c=typeof global===typeof c?window:global,d=0,e=""+Math.random(),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,l=a.keys,n=a.freeze||a,q=a.defineProperty,I=a.defineProperties,v=h(a,"getOwnPropertyNames"),x=a.prototype,Q=x.hasOwnProperty,Eb=x.propertyIsEnumerable,Fb=x.toString,T=function(a,b,c){Q.call(a,f)||q(a,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});a[f]["@@"+b]=c},Ja=function(a,b){var c=k(a);g(b).forEach(function(a){X.call(b,
a)&&Aa(c,a,b[a])});return c},p=function(){},za=function(a){return a!=f&&!Q.call(Y,a)},aa=function(a){return a!=f&&Q.call(Y,a)},X=function(a){var b=""+a;return aa(b)?Q.call(this,b)&&this[f]["@@"+b]:Eb.call(this,a)},m=function(b){q(x,b,{enumerable:!1,configurable:!0,get:p,set:function(a){ba(this,b,{enumerable:!1,configurable:!0,writable:!0,value:a});T(this,b,!0)}});return n(Y[b]=q(a(b),"constructor",Gb))},y=function(a){if(this&&this!==c)throw new TypeError("Symbol is not a constructor");return m("__\u0001symbol:".concat(a||
"",e,++d))},Y=k(null),Gb={value:y},Ka=function(a){return Y[a]},Aa=function(a,b,c){var d=""+b;if(aa(d)){b=ba;if(c.enumerable){var e=k(c);e.enumerable=!1}else e=c;b(a,d,e);T(a,d,!!c.enumerable)}else q(a,b,c);return a},La=function(a){return g(a).filter(aa).map(Ka)};v.value=Aa;q(a,"defineProperty",v);v.value=La;q(a,b,v);v.value=function(a){return g(a).filter(za)};q(a,"getOwnPropertyNames",v);v.value=function(a,b){var c=La(b);c.length?l(b).concat(c).forEach(function(c){X.call(b,c)&&Aa(a,c,b[c])}):I(a,
b);return a};q(a,"defineProperties",v);v.value=X;q(x,"propertyIsEnumerable",v);v.value=y;q(c,"Symbol",v);v.value=function(a){a="__\u0001symbol:".concat("__\u0001symbol:",a,e);return a in x?Y[a]:m(a)};q(y,"for",v);v.value=function(a){if(za(a))throw new TypeError(a+" is not a symbol");return Q.call(Y,a)?a.slice(20,-e.length):void 0};q(y,"keyFor",v);v.value=function(a,b){var c=h(a,b);c&&aa(b)&&(c.enumerable=X.call(a,b));return c};q(a,"getOwnPropertyDescriptor",v);v.value=function(a,b){return 1===arguments.length?
k(a):Ja(a,b)};q(a,"create",v);v.value=function(){var a=Fb.call(this);return"[object String]"===a&&aa(this)?"[object Symbol]":a};q(x,"toString",v);try{var ba=k(q({},"__\u0001symbol:",{get:function(){return q(this,"__\u0001symbol:",{value:!1})["__\u0001symbol:"]}}))["__\u0001symbol:"]||q}catch(Ma){ba=function(a,b,c){var d=h(x,b);delete x[b];q(a,b,c);q(x,b,d)}}}})(Object,"getOwnPropertySymbols");
(function(a){var b=a.defineProperty,c=a.prototype,d=c.toString,e;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(f){if(!(f in Symbol))switch(b(Symbol,f,{value:Symbol(f)}),f){case "toStringTag":e=a.getOwnPropertyDescriptor(c,"toString"),e.value=function(){var a=d.call(this),b=this[Symbol.toStringTag];return"undefined"===typeof b?a:"[object "+b+"]"},b(c,"toString",e)}})})(Object,Symbol);
(function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var b=0,c=this,g={next:function(){var a=c.length<=b;return a?{done:a}:{done:a,value:c[b++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var b=String.fromCodePoint,c=this,g=0,h=c.length,k={next:function(){var a=h<=g,d=a?"":b(c.codePointAt(g));g+=d.length;return a?{done:a}:{done:a,value:d}}};k[a]=d;return k})})(Symbol.iterator,Array.prototype,String.prototype);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Wa=Object.prototype.toString;Object.prototype.toString=function(){return void 0===this?"[object Undefined]":null===this?"[object Null]":Wa.call(this)};Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return(b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};var Xa=window.Symbol.iterator;
String.prototype[Xa]&&String.prototype.codePointAt||(String.prototype[Xa]=function Ya(){var b,c=this;return Ba(Ya,function(d){1==d.a&&(b=0);if(3!=d.a)return b<c.length?d=ta(d,c[b]):(d.a=0,d=void 0),d;b++;d.a=2})});Set.prototype[Xa]||(Set.prototype[Xa]=function Za(){var b,c=this,d;return Ba(Za,function(e){1==e.a&&(b=[],c.forEach(function(c){b.push(c)}),d=0);if(3!=e.a)return d<b.length?e=ta(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});
Map.prototype[Xa]||(Map.prototype[Xa]=function $a(){var b,c=this,d;return Ba($a,function(e){1==e.a&&(b=[],c.forEach(function(c,d){b.push([d,c])}),d=0);if(3!=e.a)return d<b.length?e=ta(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.WebComponents=window.WebComponents||{flags:{}};var ab=document.querySelector('script[src*="webcomponents-bundle"]'),bb=/wc-(.+)/,w={};if(!w.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(bb))&&(w[b[1]]=a[1]||!0)});if(ab)for(var cb=0,db=void 0;db=ab.attributes[cb];cb++)"src"!==db.name&&(w[db.name]=db.value||!0);if(w.log&&w.log.split){var eb=w.log.split(",");w.log={};eb.forEach(function(a){w.log[a]=!0})}else w.log={}}
window.WebComponents.flags=w;var fb=w.shadydom;fb&&(window.ShadyDOM=window.ShadyDOM||{},window.ShadyDOM.force=fb);var gb=w.register||w.ce;gb&&window.customElements&&(window.customElements.forcePolyfill=gb);/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function hb(){}hb.prototype.toJSON=function(){return{}};function z(a){a.__shady||(a.__shady=new hb);return a.__shady}function A(a){return a&&a.__shady};var B=window.ShadyDOM||{};B.La=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var ib=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");B.D=!!(ib&&ib.configurable&&ib.get);B.ka=B.force||!B.La;B.M=B.noPatch||!1;B.ta=B.preferPerformance;var jb=navigator.userAgent.match("Trident");B.ya=jb;function kb(a){return(a=A(a))&&void 0!==a.firstChild}function C(a){return"ShadyRoot"===a.Da}function lb(a){return(a=(a=A(a))&&a.root)&&mb(a)}
var nb=Element.prototype,ob=nb.matches||nb.matchesSelector||nb.mozMatchesSelector||nb.msMatchesSelector||nb.oMatchesSelector||nb.webkitMatchesSelector,pb=document.createTextNode(""),qb=0,rb=[];(new MutationObserver(function(){for(;rb.length;)try{rb.shift()()}catch(a){throw pb.textContent=qb++,a;}})).observe(pb,{characterData:!0});function sb(a){rb.push(a);pb.textContent=qb++}var tb=!!document.contains;function ub(a,b){for(;b;){if(b==a)return!0;b=b.__shady_parentNode}return!1}
function vb(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c)}a.item=function(b){return a[b]};a.namedItem=function(b){if("length"!==b&&isNaN(b)&&a[b])return a[b];for(var c=ja(a),d=c.next();!d.done;d=c.next())if(d=d.value,(d.getAttribute("id")||d.getAttribute("name"))==b)return d;return null};return a}function wb(a){var b=[];for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)b.push(a);return b}
function xb(a){var b=[];for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b.push(a);return b}function D(a,b,c,d){c=void 0===c?"":c;for(var e in b){var f=b[e];if(!(d&&0<=d.indexOf(e))){f.configurable=!0;var g=c+e;if(f.value)a[g]=f.value;else try{Object.defineProperty(a,g,f)}catch(h){}}}}function E(a){var b={};Object.getOwnPropertyNames(a).forEach(function(c){b[c]=Object.getOwnPropertyDescriptor(a,c)});return b};var yb=[],zb;function Ab(a){zb||(zb=!0,sb(Bb));yb.push(a)}function Bb(){zb=!1;for(var a=!!yb.length;yb.length;)yb.shift()();return a}Bb.list=yb;function Cb(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.$=new Set}function Db(a){a.a||(a.a=!0,sb(function(){a.flush()}))}Cb.prototype.flush=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.$.forEach(function(b){b(a)})}};Cb.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function Hb(a,b){var c=z(a);c.V||(c.V=new Cb);c.V.$.add(b);var d=c.V;return{Ca:b,P:d,Ea:a,takeRecords:function(){return d.takeRecords()}}}function Ib(a){var b=a&&a.P;b&&(b.$.delete(a.Ca),b.$.size||(z(a.Ea).V=null))}
function Jb(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})};var Kb=/[&\u00A0"]/g,Lb=/[&\u00A0<>]/g;function Mb(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function Nb(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var Ob=Nb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),Pb=Nb("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function Qb(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,l=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var n="<"+k,q=h.attributes,I=0,v;v=q[I];I++)n+=" "+v.name+'="'+v.value.replace(Kb,Mb)+'"';n+=">";h=Ob[k]?n:n+Qb(h,l)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&Pb[k.localName]?h:h.replace(Lb,Mb);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
Error("not implemented");}}c+=h}return c};var Rb=B.D,Sb={querySelector:function(a){return this.__shady_native_querySelector(a)},querySelectorAll:function(a){return this.__shady_native_querySelectorAll(a)}},Tb={};function Ub(a){Tb[a]=function(b){return b["__shady_native_"+a]}}function Vb(a,b){D(a,b,"__shady_native_");for(var c in b)Ub(c)}function F(a,b){b=void 0===b?[]:b;for(var c=0;c<b.length;c++){var d=b[c],e=Object.getOwnPropertyDescriptor(a,d);e&&(Object.defineProperty(a,"__shady_native_"+d,e),e.value?Sb[d]||(Sb[d]=e.value):Ub(d))}}
var G=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),H=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),Wb=document.implementation.createHTMLDocument("inert");function Xb(a){for(var b;b=a.__shady_native_firstChild;)a.__shady_native_removeChild(b)}var Yb=["firstElementChild","lastElementChild","children","childElementCount"],Zb=["querySelector","querySelectorAll"];
function $b(){var a=["dispatchEvent","addEventListener","removeEventListener"];window.EventTarget?F(window.EventTarget.prototype,a):(F(Node.prototype,a),F(Window.prototype,a));Rb?F(Node.prototype,"parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")):Vb(Node.prototype,{parentNode:{get:function(){G.currentNode=this;return G.parentNode()}},firstChild:{get:function(){G.currentNode=this;return G.firstChild()}},lastChild:{get:function(){G.currentNode=
this;return G.lastChild()}},previousSibling:{get:function(){G.currentNode=this;return G.previousSibling()}},nextSibling:{get:function(){G.currentNode=this;return G.nextSibling()}},childNodes:{get:function(){var a=[];G.currentNode=this;for(var c=G.firstChild();c;)a.push(c),c=G.nextSibling();return a}},parentElement:{get:function(){H.currentNode=this;return H.parentNode()}},textContent:{get:function(){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(var a=document.createTreeWalker(this,
NodeFilter.SHOW_TEXT,null,!1),c="",d;d=a.nextNode();)c+=d.nodeValue;return c;default:return this.nodeValue}},set:function(a){if("undefined"===typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:Xb(this);(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_native_insertBefore(document.createTextNode(a),void 0);break;default:this.nodeValue=a}}}});F(Node.prototype,"appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
F(HTMLElement.prototype,["parentElement","contains"]);a={firstElementChild:{get:function(){H.currentNode=this;return H.firstChild()}},lastElementChild:{get:function(){H.currentNode=this;return H.lastChild()}},children:{get:function(){var a=[];H.currentNode=this;for(var c=H.firstChild();c;)a.push(c),c=H.nextSibling();return vb(a)}},childElementCount:{get:function(){return this.children?this.children.length:0}}};Rb?(F(Element.prototype,Yb),F(Element.prototype,["previousElementSibling","nextElementSibling",
"innerHTML","className"]),F(HTMLElement.prototype,["children","innerHTML","className"])):(Vb(Element.prototype,a),Vb(Element.prototype,{previousElementSibling:{get:function(){H.currentNode=this;return H.previousSibling()}},nextElementSibling:{get:function(){H.currentNode=this;return H.nextSibling()}},innerHTML:{get:function(){return Qb(this,wb)},set:function(a){var b="template"===this.localName?this.content:this;Xb(b);var d=this.localName||"div";d=this.namespaceURI&&this.namespaceURI!==Wb.namespaceURI?
Wb.createElementNS(this.namespaceURI,d):Wb.createElement(d);d.innerHTML=a;for(a="template"===this.localName?d.content:d;d=a.__shady_native_firstChild;)b.__shady_native_insertBefore(d,void 0)}},className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)}}}));F(Element.prototype,"setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));F(Element.prototype,Zb);F(HTMLElement.prototype,["focus","blur"]);window.HTMLTemplateElement&&
F(window.HTMLTemplateElement.prototype,["innerHTML"]);Rb?F(DocumentFragment.prototype,Yb):Vb(DocumentFragment.prototype,a);F(DocumentFragment.prototype,Zb);Rb?(F(Document.prototype,Yb),F(Document.prototype,["activeElement"])):Vb(Document.prototype,a);F(Document.prototype,["importNode","getElementById"]);F(Document.prototype,Zb)};var ac=E({get childNodes(){return this.__shady_childNodes},get firstChild(){return this.__shady_firstChild},get lastChild(){return this.__shady_lastChild},get childElementCount(){return this.__shady_childElementCount},get children(){return this.__shady_children},get firstElementChild(){return this.__shady_firstElementChild},get lastElementChild(){return this.__shady_lastElementChild},get shadowRoot(){return this.__shady_shadowRoot}}),bc=E({get textContent(){return this.__shady_textContent},set textContent(a){this.__shady_textContent=
a},get innerHTML(){return this.__shady_innerHTML},set innerHTML(a){return this.__shady_innerHTML=a}}),cc=E({get parentElement(){return this.__shady_parentElement},get parentNode(){return this.__shady_parentNode},get nextSibling(){return this.__shady_nextSibling},get previousSibling(){return this.__shady_previousSibling},get nextElementSibling(){return this.__shady_nextElementSibling},get previousElementSibling(){return this.__shady_previousElementSibling},get className(){return this.__shady_className},
set className(a){return this.__shady_className=a}}),dc;for(dc in ac)ac[dc].enumerable=!1;for(var ec in bc)bc[ec].enumerable=!1;for(var fc in cc)cc[fc].enumerable=!1;var gc=B.D||B.M,hc=gc?function(){}:function(a){var b=z(a);b.Aa||(b.Aa=!0,D(a,cc))},ic=gc?function(){}:function(a){var b=z(a);b.za||(b.za=!0,D(a,ac),window.customElements&&!B.M||D(a,bc))};var jc="__eventWrappers"+Date.now(),kc=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),lc=function(){function a(){}var b=!1,c={get capture(){b=!0}};window.addEventListener("test",a,c);window.removeEventListener("test",a,c);return b}();function mc(a){if(a&&"object"===typeof a){var b=!!a.capture;var c=!!a.once;var d=!!a.passive;var e=a.O}else b=!!a,d=c=!1;return{ua:e,capture:b,once:c,passive:d,sa:lc?a:b}}
var nc={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,
drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},oc={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};function pc(a){return a instanceof Node?a.__shady_getRootNode():a}
function qc(a,b){var c=[],d=a;for(a=pc(a);d;)c.push(d),d.__shady_assignedSlot?d=d.__shady_assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d=d.host:d=d.__shady_parentNode;c[c.length-1]===document&&c.push(window);return c}function rc(a){a.__composedPath||(a.__composedPath=qc(a.target,!0));return a.__composedPath}function sc(a,b){if(!C)return a;a=qc(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=pc(d),f!==e&&(g=a.indexOf(f),e=f),!C(f)||-1<g)return d}
function tc(a){function b(b,d){b=new a(b,d);b.__composed=d&&!!d.composed;return b}b.__proto__=a;b.prototype=a.prototype;return b}var uc={focus:!0,blur:!0};function vc(a){return a.__target!==a.target||a.__relatedTarget!==a.relatedTarget}function wc(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!vc(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.__immediatePropagationStopped);d++);}
function xc(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];wc(a,d,"capture");if(a.ga)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=A(d);f=f&&f.root;if(0===c||f&&f===e)if(wc(a,d,"bubble"),d!==window&&(e=d.__shady_getRootNode()),a.ga)break}}
function yc(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],k=h.type,l=h.capture,n=h.once,q=h.passive;if(b===h.node&&c===k&&d===l&&e===n&&f===q)return g}return-1}
function zc(a,b,c){var d=mc(c),e=d.capture,f=d.once,g=d.passive,h=d.ua;d=d.sa;if(b){var k=typeof b;if("function"===k||"object"===k)if("object"!==k||b.handleEvent&&"function"===typeof b.handleEvent){if(oc[a])return this.__shady_native_addEventListener(a,b,d);var l=h||this;if(h=b[jc]){if(-1<yc(h,l,a,e,f,g))return}else b[jc]=[];h=function(d){f&&this.__shady_removeEventListener(a,b,c);d.__target||Ac(d);if(l!==this){var e=Object.getOwnPropertyDescriptor(d,"currentTarget");Object.defineProperty(d,"currentTarget",
{get:function(){return l},configurable:!0})}d.__previousCurrentTarget=d.currentTarget;if(!C(l)&&"slot"!==l.localName||-1!=d.composedPath().indexOf(l))if(d.composed||-1<d.composedPath().indexOf(l))if(vc(d)&&d.target===d.relatedTarget)d.eventPhase===Event.BUBBLING_PHASE&&d.stopImmediatePropagation();else if(d.eventPhase===Event.CAPTURING_PHASE||d.bubbles||d.target===l||l instanceof Window){var g="function"===k?b.call(l,d):b.handleEvent&&b.handleEvent(d);l!==this&&(e?(Object.defineProperty(d,"currentTarget",
e),e=null):delete d.currentTarget);return g}};b[jc].push({node:l,type:a,capture:e,once:f,passive:g,ab:h});uc[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][e?"capture":"bubble"].push(h)):this.__shady_native_addEventListener(a,h,d)}}}
function Bc(a,b,c){if(b){var d=mc(c);c=d.capture;var e=d.once,f=d.passive,g=d.ua;d=d.sa;if(oc[a])return this.__shady_native_removeEventListener(a,b,d);var h=g||this;g=void 0;var k=null;try{k=b[jc]}catch(l){}k&&(e=yc(k,h,a,c,e,f),-1<e&&(g=k.splice(e,1)[0].ab,k.length||(b[jc]=void 0)));this.__shady_native_removeEventListener(a,g||b,d);g&&uc[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][c?"capture":"bubble"],b=a.indexOf(g),-1<b&&a.splice(b,1))}}
function Cc(){for(var a in uc)window.__shady_native_addEventListener(a,function(a){a.__target||(Ac(a),xc(a))},!0)}
var Dc=E({get composed(){void 0===this.__composed&&(kc?this.__composed="focusin"===this.type||"focusout"===this.type||kc(this):!1!==this.isTrusted&&(this.__composed=nc[this.type]));return this.__composed||!1},composedPath:function(){this.__composedPath||(this.__composedPath=qc(this.__target,this.composed));return this.__composedPath},get target(){return sc(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.__relatedTarget)return null;this.__relatedTargetComposedPath||
(this.__relatedTargetComposedPath=qc(this.__relatedTarget,!0));return sc(this.currentTarget||this.__previousCurrentTarget,this.__relatedTargetComposedPath)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ga=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ga=this.__immediatePropagationStopped=!0}});
function Ac(a){a.__target=a.target;a.__relatedTarget=a.relatedTarget;if(B.D){var b=Object.getPrototypeOf(a);if(!Object.hasOwnProperty(b,"__shady_patchedProto")){var c=Object.create(b);c.__shady_sourceProto=b;D(c,Dc);b.__shady_patchedProto=c}a.__proto__=b.__shady_patchedProto}else D(a,Dc)}var Ec=tc(Event),Fc=tc(CustomEvent),Gc=tc(MouseEvent);
function Hc(){if(!kc&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var a=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.__shady_dispatchEvent(a)};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a)}}var Ic=Object.getOwnPropertyNames(Document.prototype).filter(function(a){return"on"===a.substring(0,2)});function Jc(a,b){return{index:a,W:[],Z:b}}
function Kc(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,n=0;n<k-g&&Lc(a[--h],c[--l]);)n++;h=n}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return[];if(e==b){for(b=Jc(e,0);f<d;)b.W.push(c[f++]);return[b]}if(f==d)return[Jc(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(n=1;n<h;n++)if(a[k+n-1]===c[g+l-1])b[l][n]=
b[l-1][n-1];else{var q=b[l-1][n]+1,I=b[l][n-1]+1;b[l][n]=q<I?q:I}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],n=b[k][g-1],q=l<n?l<h?l:h:n<h?n:h,q==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):q==l?(a.push(3),k--,d=l):(a.push(2),g--,d=n));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Jc(e,0));b.Z++;e++;b.W.push(c[f]);f++;break;case 2:b||(b=Jc(e,0));
b.Z++;e++;break;case 3:b||(b=Jc(e,0)),b.W.push(c[f]),f++}b&&k.push(b);return k}function Lc(a,b){return a===b};function Mc(a,b,c,d){hc(a);d=d||null;var e=z(a),f=d?z(d):null;e.previousSibling=d?f.previousSibling:b.__shady_lastChild;if(f=A(e.previousSibling))f.nextSibling=a;if(f=A(e.nextSibling=d))f.previousSibling=a;e.parentNode=b;d?d===c.firstChild&&(c.firstChild=a):(c.lastChild=a,c.firstChild||(c.firstChild=a));c.childNodes=null}
function Nc(a,b,c){ic(b);var d=z(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)Mc(a,b,d,c);else Mc(a,b,d,c)}
function Oc(a,b){var c=z(a);b=z(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(z(a).nextSibling=d);d&&(z(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null)}
function Pc(a,b){var c=z(a);if(b||void 0===c.firstChild){c.childNodes=null;var d=c.firstChild=a.__shady_native_firstChild;c.lastChild=a.__shady_native_lastChild;ic(a);c=d;for(d=void 0;c;c=c.__shady_native_nextSibling){var e=z(c);e.parentNode=b||a;e.nextSibling=c.__shady_native_nextSibling;e.previousSibling=d||null;d=c;hc(c)}}};var Qc=null;function Rc(){Qc||(Qc=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return Qc||null}function Sc(a,b){var c=Rc();c&&c.unscopeNode(a,b)}function Tc(a,b){var c=Rc();if(!c)return!0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)c=c&&Tc(a,b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}function Uc(a){if(a.nodeType!==Node.ELEMENT_NODE)return"";var b=Rc();return b?b.currentScopeForNode(a):""}
function Vc(a,b){if(a)for(a.nodeType===Node.ELEMENT_NODE&&b(a),a=a.__shady_firstChild;a;a=a.__shady_nextSibling)a.nodeType===Node.ELEMENT_NODE&&Vc(a,b)};var Wc=window.document,Xc=B.ta,Yc=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),Zc=Yc&&Yc.get;function $c(a){for(var b;b=a.__shady_firstChild;)a.__shady_removeChild(b)}function ad(a){var b=A(a);if(b&&void 0!==b.ca)for(b=a.__shady_firstChild;b;b=b.__shady_nextSibling)ad(b);if(a=A(a))a.ca=void 0}function bd(a){var b=a;a&&"slot"===a.localName&&(b=(b=(b=A(a))&&b.T)&&b.length?b[0]:bd(a.__shady_nextSibling));return b}
function cd(a,b,c){if(a=(a=A(a))&&a.V)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Db(a)}
var gd=E({get parentNode(){var a=A(this);a=a&&a.parentNode;return void 0!==a?a:this.__shady_native_parentNode},get firstChild(){var a=A(this);a=a&&a.firstChild;return void 0!==a?a:this.__shady_native_firstChild},get lastChild(){var a=A(this);a=a&&a.lastChild;return void 0!==a?a:this.__shady_native_lastChild},get nextSibling(){var a=A(this);a=a&&a.nextSibling;return void 0!==a?a:this.__shady_native_nextSibling},get previousSibling(){var a=A(this);a=a&&a.previousSibling;return void 0!==a?a:this.__shady_native_previousSibling},
get childNodes(){if(kb(this)){var a=A(this);if(!a.childNodes){a.childNodes=[];for(var b=this.__shady_firstChild;b;b=b.__shady_nextSibling)a.childNodes.push(b)}var c=a.childNodes}else c=this.__shady_native_childNodes;c.item=function(a){return c[a]};return c},get parentElement(){var a=A(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:this.__shady_native_parentElement},get isConnected(){if(Zc&&Zc.call(this))return!0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return!1;
var a=this.ownerDocument;if(tb){if(a.__shady_native_contains(this))return!0}else if(a.documentElement&&a.documentElement.__shady_native_contains(this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.__shady_parentNode||(C(a)?a.host:void 0);return!!(a&&a instanceof Document)},get textContent(){if(kb(this)){for(var a=[],b=this.__shady_firstChild;b;b=b.__shady_nextSibling)b.nodeType!==Node.COMMENT_NODE&&a.push(b.__shady_textContent);return a.join("")}return this.__shady_native_textContent},set textContent(a){if("undefined"===
typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!kb(this)&&B.D){var b=this.__shady_firstChild;(b!=this.__shady_lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&$c(this);this.__shady_native_textContent=a}else $c(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_insertBefore(document.createTextNode(a));break;default:this.nodeValue=a}},insertBefore:function(a,b){if(this.ownerDocument!==Wc&&a.ownerDocument!==Wc)return this.__shady_native_insertBefore(a,
b),a;if(a===this)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(b){var c=A(b);c=c&&c.parentNode;if(void 0!==c&&c!==this||void 0===c&&b.__shady_native_parentNode!==this)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(b===a)return a;var d=[],e=(c=dd(this))?c.host.localName:Uc(this),f=a.__shady_parentNode;if(f){var g=Uc(a);var h=!!c||!dd(a)||Xc&&void 0!==
this.__noInsertionPoint;f.__shady_removeChild(a,h)}f=!0;var k=(!Xc||void 0===a.__noInsertionPoint&&void 0===this.__noInsertionPoint)&&!Tc(a,e),l=c&&!a.__noInsertionPoint&&(!Xc||a.nodeType===Node.DOCUMENT_FRAGMENT_NODE);if(l||k)k&&(g=g||Uc(a)),Vc(a,function(a){l&&"slot"===a.localName&&d.push(a);if(k){var b=g;Rc()&&(b&&Sc(a,b),(b=Rc())&&b.scopeNode(a,e))}});d.length&&(ed(c),c.c.push.apply(c.c,d instanceof Array?d:ka(ja(d))),J(c));kb(this)&&(Nc(a,this,b),c=A(this),lb(this)?(J(c.root),f=!1):c.root&&(f=
!1));f?(c=C(this)?this.host:this,b?(b=bd(b),c.__shady_native_insertBefore(a,b)):c.__shady_native_appendChild(a)):a.ownerDocument!==this.ownerDocument&&this.ownerDocument.adoptNode(a);cd(this,a);return a},appendChild:function(a){if(this!=a||!C(a))return this.__shady_insertBefore(a)},removeChild:function(a,b){b=void 0===b?!1:b;if(this.ownerDocument!==Wc)return this.__shady_native_removeChild(a);if(a.__shady_parentNode!==this)throw Error("The node to be removed is not a child of this node: "+a);var c=
dd(a),d=c&&fd(c,a),e=A(this);if(kb(this)&&(Oc(a,this),lb(this))){J(e.root);var f=!0}if(Rc()&&!b&&c&&a.nodeType!==Node.TEXT_NODE){var g=Uc(a);Vc(a,function(a){Sc(a,g)})}ad(a);c&&((b=this&&"slot"===this.localName)&&(f=!0),(d||b)&&J(c));f||(f=C(this)?this.host:this,(!e.root&&"slot"!==a.localName||f===a.__shady_native_parentNode)&&f.__shady_native_removeChild(a));cd(this,null,a);return a},replaceChild:function(a,b){this.__shady_insertBefore(a,b);this.__shady_removeChild(b);return a},cloneNode:function(a){if("template"==
this.localName)return this.__shady_native_cloneNode(a);var b=this.__shady_native_cloneNode(!1);if(a&&b.nodeType!==Node.ATTRIBUTE_NODE){a=this.__shady_firstChild;for(var c;a;a=a.__shady_nextSibling)c=a.__shady_cloneNode(!0),b.__shady_appendChild(c)}return b},getRootNode:function(a){if(this&&this.nodeType){var b=z(this),c=b.ca;void 0===c&&(C(this)?(c=this,b.ca=c):(c=(c=this.__shady_parentNode)?c.__shady_getRootNode(a):this,document.documentElement.__shady_native_contains(this)&&(b.ca=c)));return c}},
contains:function(a){return ub(this,a)}});function hd(a,b,c){var d=[];id(a,b,c,d);return d}function id(a,b,c,d){for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling){var e;if(e=a.nodeType===Node.ELEMENT_NODE){e=a;var f=b,g=c,h=d,k=f(e);k&&h.push(e);g&&g(k)?e=k:(id(e,f,g,h),e=void 0)}if(e)break}}
var jd=E({get firstElementChild(){var a=A(this);if(a&&void 0!==a.firstChild){for(a=this.__shady_firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_firstElementChild},get lastElementChild(){var a=A(this);if(a&&void 0!==a.lastChild){for(a=this.__shady_lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_lastElementChild},get children(){return kb(this)?vb(Array.prototype.filter.call(xb(this),
function(a){return a.nodeType===Node.ELEMENT_NODE})):this.__shady_native_children},get childElementCount(){var a=this.__shady_children;return a?a.length:0}}),kd=E({querySelector:function(a){return hd(this,function(b){return ob.call(b,a)},function(a){return!!a})[0]||null},querySelectorAll:function(a,b){if(b){b=Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c=this.__shady_getRootNode();return b.filter(function(a){return a.__shady_getRootNode()==c})}return hd(this,function(b){return ob.call(b,
a)})}}),ld=B.ta&&!B.M?Object.assign({},jd):jd;Object.assign(jd,kd);var md=E({getElementById:function(a){return""===a?null:hd(this,function(b){return b.id==a},function(a){return!!a})[0]||null}});var nd=E({get activeElement(){var a=B.D?document.__shady_native_activeElement:document.activeElement;if(!a||!a.nodeType)return null;var b=!!C(this);if(!(this===document||b&&this.host!==a&&this.host.__shady_native_contains(a)))return null;for(b=dd(a);b&&b!==this;)a=b.host,b=dd(a);return this===document?b?null:a:b===this?a:null}});var od=document.implementation.createHTMLDocument("inert"),pd=E({get innerHTML(){return kb(this)?Qb("template"===this.localName?this.content:this,xb):this.__shady_native_innerHTML},set innerHTML(a){if("template"===this.localName)this.__shady_native_innerHTML=a;else{$c(this);var b=this.localName||"div";b=this.namespaceURI&&this.namespaceURI!==od.namespaceURI?od.createElementNS(this.namespaceURI,b):od.createElement(b);for(B.D?b.__shady_native_innerHTML=a:b.innerHTML=a;a=b.__shady_firstChild;)this.__shady_insertBefore(a)}}});var qd=E({addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_addEventListener(a,b,c)},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_removeEventListener(a,b,c)}});function rd(a,b){D(a,qd,b);D(a,nd,b);D(a,pd,b);D(a,jd,b);B.M&&!b?(D(a,gd,b),D(a,md,b)):B.D||(D(a,cc),D(a,ac),D(a,bc))};var sd={},td=B.deferConnectionCallbacks&&"loading"===document.readyState,ud;function vd(a){var b=[];do b.unshift(a);while(a=a.__shady_parentNode);return b}function wd(a,b,c){if(a!==sd)throw new TypeError("Illegal constructor");this.a=null;xd(this,b,c)}
function xd(a,b,c){a.Da="ShadyRoot";a.host=b;a.mode=c&&c.mode;Pc(a.host);b=z(a.host);b.root=a;b.Ta="closed"!==a.mode?a:null;b=z(a);b.firstChild=b.lastChild=b.parentNode=b.nextSibling=b.previousSibling=null;if(B.preferPerformance)for(;b=a.host.__shady_native_firstChild;)a.host.__shady_native_removeChild(b);else J(a)}function J(a){a.R||(a.R=!0,Ab(function(){return yd(a)}))}
function yd(a){var b;if(b=a.R){for(var c;a;)a:{a.R&&(c=a),b=a;a=b.host.__shady_getRootNode();if(C(a)&&(b=A(b.host))&&0<b.Y)break a;a=void 0}b=c}(c=b)&&c._renderSelf()}
wd.prototype._renderSelf=function(){var a=td;td=!0;this.R=!1;if(this.a){zd(this);for(var b=0,c;b<this.a.length;b++){c=this.a[b];var d=A(c),e=d.assignedNodes;d.assignedNodes=[];d.T=[];if(d.qa=e)for(d=0;d<e.length;d++){var f=A(e[d]);f.ha=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null)}}for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)Ad(this,b);for(b=0;b<this.a.length;b++){c=this.a[b];e=A(c);if(!e.assignedNodes.length)for(d=c.__shady_firstChild;d;d=d.__shady_nextSibling)Ad(this,
d,c);(d=(d=A(c.__shady_parentNode))&&d.root)&&(mb(d)||d.R)&&d._renderSelf();Bd(this,e.T,e.assignedNodes);if(d=e.qa){for(f=0;f<d.length;f++)A(d[f]).ha=null;e.qa=null;d.length>e.assignedNodes.length&&(e.ja=!0)}e.ja&&(e.ja=!1,Cd(this,c))}c=this.a;b=[];for(e=0;e<c.length;e++)d=c[e].__shady_parentNode,(f=A(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];for(f=f.__shady_firstChild;f;f=f.__shady_nextSibling)if("slot"==f.localName)for(var g=A(f).T,h=0;h<
g.length;h++)d.push(g[h]);else d.push(f);f=wb(e);g=Kc(d,d.length,f,f.length);for(var k=h=0,l=void 0;h<g.length&&(l=g[h]);h++){for(var n=0,q=void 0;n<l.W.length&&(q=l.W[n]);n++)q.__shady_native_parentNode===e&&e.__shady_native_removeChild(q),f.splice(l.index+k,1);k-=l.Z}k=0;for(l=void 0;k<g.length&&(l=g[k]);k++)for(h=f[l.index],n=l.index;n<l.index+l.Z;n++)q=d[n],e.__shady_native_insertBefore(q,h),f.splice(n,0,q)}}if(!B.preferPerformance&&!this.pa)for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)c=
A(b),b.__shady_native_parentNode!==this.host||"slot"!==b.localName&&c.assignedSlot||this.host.__shady_native_removeChild(b);this.pa=!0;td=a;ud&&ud()};function Ad(a,b,c){var d=z(b),e=d.ha;d.ha=null;c||(c=(a=a.b[b.__shady_slot||"__catchall"])&&a[0]);c?(z(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(z(d.assignedSlot).ja=!0)}
function Bd(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=A(e).assignedNodes;f&&f.length&&Bd(a,b,f)}else b.push(c[d])}function Cd(a,b){b.__shady_native_dispatchEvent(new Event("slotchange"));b=A(b);b.assignedSlot&&Cd(a,b.assignedSlot)}function ed(a){a.c=a.c||[];a.a=a.a||[];a.b=a.b||{}}
function zd(a){if(a.c&&a.c.length){for(var b=a.c,c,d=0;d<b.length;d++){var e=b[d];Pc(e);var f=e.__shady_parentNode;Pc(f);f=A(f);f.Y=(f.Y||0)+1;f=Dd(e);a.b[f]?(c=c||{},c[f]=!0,a.b[f].push(e)):a.b[f]=[e];a.a.push(e)}if(c)for(var g in c)a.b[g]=Ed(a.b[g]);a.c=[]}}function Dd(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Ba=b}
function Ed(a){return a.sort(function(a,c){a=vd(a);for(var b=vd(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=xb(c.__shady_parentNode),a.indexOf(c)-a.indexOf(f)}})}
function fd(a,b){if(a.a){zd(a);var c=a.b,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(ub(b,g)){e.splice(f,1);var h=a.a.indexOf(g);0<=h&&(a.a.splice(h,1),(h=A(g.__shady_parentNode))&&h.Y&&h.Y--);f--;g=A(g);if(h=g.T)for(var k=0;k<h.length;k++){var l=h[k],n=l.__shady_native_parentNode;n&&n.__shady_native_removeChild(l)}g.T=[];g.assignedNodes=[];h=!0}}return h}}function mb(a){zd(a);return!(!a.a||!a.a.length)}
(function(a){a.__proto__=DocumentFragment.prototype;rd(a,"__shady_");rd(a);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0})});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
configurable:!0})})})(wd.prototype);
if(window.customElements&&B.ka&&!B.preferPerformance){var Fd=new Map;ud=function(){var a=[];Fd.forEach(function(b,c){a.push([c,b])});Fd.clear();for(var b=0;b<a.length;b++){var c=a[b][0];a[b][1]?c.__shadydom_connectedCallback():c.__shadydom_disconnectedCallback()}};td&&document.addEventListener("readystatechange",function(){td=!1;ud()},{once:!0});var Gd=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.__shadydom_connectedCallback=function(){td?Fd.set(this,
!0):this[e]||(this[e]=!0,b&&b.call(this))},a.prototype.disconnectedCallback=a.prototype.__shadydom_disconnectedCallback=function(){td?this.isConnected||Fd.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this))};return a},Hd=window.customElements.define,define=function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;Hd.call(window.customElements,a,Gd(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d};window.customElements.define=define;Object.defineProperty(window.CustomElementRegistry.prototype,
"define",{value:define,configurable:!0})}function dd(a){a=a.__shady_getRootNode();if(C(a))return a};function Id(a){this.node=a}r=Id.prototype;r.addEventListener=function(a,b,c){return this.node.__shady_addEventListener(a,b,c)};r.removeEventListener=function(a,b,c){return this.node.__shady_removeEventListener(a,b,c)};r.appendChild=function(a){return this.node.__shady_appendChild(a)};r.insertBefore=function(a,b){return this.node.__shady_insertBefore(a,b)};r.removeChild=function(a){return this.node.__shady_removeChild(a)};r.replaceChild=function(a,b){return this.node.__shady_replaceChild(a,b)};
r.cloneNode=function(a){return this.node.__shady_cloneNode(a)};r.getRootNode=function(a){return this.node.__shady_getRootNode(a)};r.contains=function(a){return this.node.__shady_contains(a)};r.dispatchEvent=function(a){return this.node.__shady_dispatchEvent(a)};r.setAttribute=function(a,b){this.node.__shady_setAttribute(a,b)};r.getAttribute=function(a){return this.node.__shady_native_getAttribute(a)};r.hasAttribute=function(a){return this.node.__shady_native_hasAttribute(a)};r.removeAttribute=function(a){this.node.__shady_removeAttribute(a)};
r.attachShadow=function(a){return this.node.__shady_attachShadow(a)};r.focus=function(){this.node.__shady_native_focus()};r.blur=function(){this.node.__shady_blur()};r.importNode=function(a,b){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_importNode(a,b)};r.getElementById=function(a){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_getElementById(a)};r.querySelector=function(a){return this.node.__shady_querySelector(a)};
r.querySelectorAll=function(a,b){return this.node.__shady_querySelectorAll(a,b)};r.assignedNodes=function(a){if("slot"===this.node.localName)return this.node.__shady_assignedNodes(a)};
t.Object.defineProperties(Id.prototype,{activeElement:{configurable:!0,enumerable:!0,get:function(){if(C(this.node)||this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_activeElement}},_activeElement:{configurable:!0,enumerable:!0,get:function(){return this.activeElement}},host:{configurable:!0,enumerable:!0,get:function(){if(C(this.node))return this.node.host}},parentNode:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentNode}},firstChild:{configurable:!0,
enumerable:!0,get:function(){return this.node.__shady_firstChild}},lastChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastChild}},nextSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextSibling}},previousSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousSibling}},childNodes:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childNodes}},parentElement:{configurable:!0,enumerable:!0,
get:function(){return this.node.__shady_parentElement}},firstElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstElementChild}},lastElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastElementChild}},nextElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextElementSibling}},previousElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousElementSibling}},
children:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_children}},childElementCount:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childElementCount}},shadowRoot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_shadowRoot}},assignedSlot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_assignedSlot}},isConnected:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_isConnected}},innerHTML:{configurable:!0,
enumerable:!0,get:function(){return this.node.__shady_innerHTML},set:function(a){this.node.__shady_innerHTML=a}},textContent:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_textContent},set:function(a){this.node.__shady_textContent=a}},slot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_slot},set:function(a){this.node.__shady_slot=a}},className:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_className},set:function(a){return this.node.__shady_className=
a}}});Ic.forEach(function(a){Object.defineProperty(Id.prototype,a,{get:function(){return this.node["__shady_"+a]},set:function(b){this.node["__shady_"+a]=b},configurable:!0})});var Jd=new WeakMap;function Kd(a){if(C(a)||a instanceof Id)return a;var b=Jd.get(a);b||(b=new Id(a),Jd.set(a,b));return b};var Ld=E({dispatchEvent:function(a){Bb();return this.__shady_native_dispatchEvent(a)},addEventListener:zc,removeEventListener:Bc});var Md=E({get assignedSlot(){var a=this.__shady_parentNode;(a=a&&a.__shady_shadowRoot)&&yd(a);return(a=A(this))&&a.assignedSlot||null}});var Nd=window.document;function Od(a,b){if("slot"===b)a=a.__shady_parentNode,lb(a)&&J(A(a).root);else if("slot"===a.localName&&"name"===b&&(b=dd(a))){if(b.a){zd(b);var c=a.Ba,d=Dd(a);if(d!==c){c=b.b[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.b[d]||(b.b[d]=[]);c.push(a);1<c.length&&(b.b[d]=Ed(c))}}J(b)}}
var Pd=E({get previousElementSibling(){var a=A(this);if(a&&void 0!==a.previousSibling){for(a=this.__shady_previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_previousElementSibling},get nextElementSibling(){var a=A(this);if(a&&void 0!==a.nextSibling){for(a=this.__shady_nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_nextElementSibling},get slot(){return this.getAttribute("slot")},
set slot(a){this.__shady_setAttribute("slot",a)},get shadowRoot(){var a=A(this);return a&&a.Ta||null},get className(){return this.getAttribute("class")||""},set className(a){this.__shady_setAttribute("class",a)},setAttribute:function(a,b){if(this.ownerDocument!==Nd)this.__shady_native_setAttribute(a,b);else{var c;(c=Rc())&&"class"===a?(c.setElementClass(this,b),c=!0):c=!1;c||(this.__shady_native_setAttribute(a,b),Od(this,a))}},removeAttribute:function(a){this.__shady_native_removeAttribute(a);Od(this,
a)},attachShadow:function(a){if(!this)throw Error("Must provide a host.");if(!a)throw Error("Not enough arguments.");if(a.shadyUpgradeFragment&&!B.ya){var b=a.shadyUpgradeFragment;b.__proto__=ShadowRoot.prototype;xd(b,this,a);Pc(b,b);a=b.__noInsertionPoint?null:b.querySelectorAll("slot");b.__noInsertionPoint=void 0;if(a&&a.length){var c=b;ed(c);c.c.push.apply(c.c,a instanceof Array?a:ka(ja(a)));J(b)}b.host.__shady_native_appendChild(b)}else b=new wd(sd,this,a);return b}});var Qd=E({blur:function(){var a=A(this);(a=(a=a&&a.root)&&a.activeElement)?a.__shady_blur():this.__shady_native_blur()}});Ic.forEach(function(a){Qd[a]={set:function(b){var c=z(this),d=a.substring(2);c.N||(c.N={});c.N[a]&&this.removeEventListener(d,c.N[a]);this.__shady_addEventListener(d,b);c.N[a]=b},get:function(){var b=A(this);return b&&b.N&&b.N[a]},configurable:!0}});var Rd=E({assignedNodes:function(a){if("slot"===this.localName){var b=this.__shady_getRootNode();b&&C(b)&&yd(b);return(b=A(this))?(a&&a.flatten?b.T:b.assignedNodes)||[]:[]}},addEventListener:function(a,b,c){if("slot"!==this.localName||"slotchange"===a)zc.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_addEventListener(a,b,c)}},removeEventListener:function(a,
b,c){if("slot"!==this.localName||"slotchange"===a)Bc.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_removeEventListener(a,b,c)}}});var Sd=window.document,Td=E({importNode:function(a,b){if(a.ownerDocument!==Sd||"template"===a.localName)return this.__shady_native_importNode(a,b);var c=this.__shady_native_importNode(a,!1);if(b)for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b=this.__shady_importNode(a,!0),c.__shady_appendChild(b);return c}});var Ud=E({addEventListener:zc.bind(window),removeEventListener:Bc.bind(window)});var Vd={};Object.getOwnPropertyDescriptor(HTMLElement.prototype,"parentElement")&&(Vd.parentElement=gd.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"contains")&&(Vd.contains=gd.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"children")&&(Vd.children=jd.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML")&&(Vd.innerHTML=pd.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"className")&&(Vd.className=Pd.className);
var Wd={EventTarget:[Ld],Node:[gd,window.EventTarget?null:Ld],Text:[Md],Element:[Pd,jd,Md,!B.D||"innerHTML"in Element.prototype?pd:null,window.HTMLSlotElement?null:Rd],HTMLElement:[Qd,Vd],HTMLSlotElement:[Rd],DocumentFragment:[ld,md],Document:[Td,ld,md,nd],Window:[Ud]},Xd=B.D?null:["innerHTML","textContent"];function Yd(a){var b=a?null:Xd,c={},d;for(d in Wd)c.ea=window[d]&&window[d].prototype,Wd[d].forEach(function(c){return function(d){return c.ea&&d&&D(c.ea,d,a,b)}}(c)),c={ea:c.ea}};if(B.ka){var ShadyDOM={inUse:B.ka,patch:function(a){ic(a);hc(a);return a},isShadyRoot:C,enqueue:Ab,flush:Bb,flushInitial:function(a){!a.pa&&a.R&&yd(a)},settings:B,filterMutations:Jb,observeChildren:Hb,unobserveChildren:Ib,deferConnectionCallbacks:B.deferConnectionCallbacks,preferPerformance:B.preferPerformance,handlesDynamicScoping:!0,wrap:B.M?Kd:function(a){return a},Wrapper:Id,composedPath:rc,noPatch:B.M,nativeMethods:Sb,nativeTree:Tb};window.ShadyDOM=ShadyDOM;$b();Yd("__shady_");Object.defineProperty(document,
"_activeElement",nd.activeElement);D(Window.prototype,Ud,"__shady_");B.M||(Yd(),Hc());Cc();window.Event=Ec;window.CustomEvent=Fc;window.MouseEvent=Gc;window.ShadowRoot=wd};var Zd=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function $d(a){var b=Zd.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function K(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}
function ae(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function be(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)be(d,b,c);d=ae(a,e);continue}else if("template"===f){d=ae(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)be(e,b,c)}d=d.firstChild?d.firstChild:ae(a,d)}}function L(a,b,c){a[b]=c};function ce(){this.a=new Map;this.u=new Map;this.c=[];this.f=[];this.b=!1}function de(a,b,c){a.a.set(b,c);a.u.set(c.constructorFunction,c)}function ee(a,b){a.b=!0;a.c.push(b)}function fe(a,b){a.b=!0;a.f.push(b)}function ge(a,b){a.b&&be(b,function(b){return he(a,b)})}function he(a,b){if(a.b&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.c.length;c++)a.c[c](b);for(c=0;c<a.f.length;c++)a.f[c](b)}}
function M(a,b){var c=[];be(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):ie(a,d)}}function N(a,b){var c=[];be(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function O(a,b,c){c=void 0===c?{}:c;var d=c.$a||new Set,e=c.fa||function(b){return ie(a,b)},f=[];be(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);O(a,c,{$a:f,fa:e})}})}else f.push(b)},d);
if(a.b)for(b=0;b<f.length;b++)he(a,f[b]);for(b=0;b<f.length;b++)e(f[b])}
function ie(a,b){if(void 0===b.__CE_state){var c=b.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=a.a.get(b.localName)){c.constructionStack.push(b);var d=c.constructorFunction;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(g){throw b.__CE_state=2,g;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=
c[d],f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null)}K(b)&&a.connectedCallback(b)}}}ce.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};ce.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a)};
ce.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e)};function je(a){var b=document;this.b=a;this.a=b;this.P=void 0;O(this.b,this.a);"loading"===this.a.readyState&&(this.P=new MutationObserver(this.c.bind(this)),this.P.observe(this.a,{childList:!0,subtree:!0}))}function ke(a){a.P&&a.P.disconnect()}je.prototype.c=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||ke(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)O(this.b,c[d])};function le(){var a=this;this.a=this.w=void 0;this.b=new Promise(function(b){a.a=b;a.w&&b(a.w)})}le.prototype.resolve=function(a){if(this.w)throw Error("Already resolved.");this.w=a;this.a&&this.a(a)};function P(a){this.c=!1;this.a=a;this.F=new Map;this.f=function(a){return a()};this.b=!1;this.u=[];this.aa=new je(a)}r=P.prototype;
r.wa=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!$d(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var g=d("disconnectedCallback");var h=d("adoptedCallback");var k=d("attributeChangedCallback");var l=b.observedAttributes||[]}catch(n){return}finally{this.c=!1}b={localName:a,constructorFunction:b,connectedCallback:f,disconnectedCallback:g,adoptedCallback:h,attributeChangedCallback:k,observedAttributes:l,constructionStack:[]};de(this.a,
a,b);this.u.push(b);this.b||(this.b=!0,this.f(function(){return me(c)}))};r.fa=function(a){O(this.a,a)};
function me(a){if(!1!==a.b){a.b=!1;for(var b=a.u,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);O(a.a,document,{fa:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.a.a.get(e)&&c.push(b)}}});for(e=0;e<c.length;e++)ie(a.a,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var g=0;g<f.length;g++)ie(a.a,f[g]);(e=a.F.get(e))&&e.resolve(void 0)}}}r.get=function(a){if(a=this.a.a.get(a))return a.constructorFunction};
r.xa=function(a){if(!$d(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.F.get(a);if(b)return b.b;b=new le;this.F.set(a,b);this.a.a.get(a)&&!this.u.some(function(b){return b.localName===a})&&b.resolve(void 0);return b.b};r.Ra=function(a){ke(this.aa);var b=this.f;this.f=function(c){return a(function(){return b(c)})}};window.CustomElementRegistry=P;P.prototype.define=P.prototype.wa;P.prototype.upgrade=P.prototype.fa;P.prototype.get=P.prototype.get;
P.prototype.whenDefined=P.prototype.xa;P.prototype.polyfillWrapFlushCallback=P.prototype.Ra;var ne=window.Document.prototype.createElement,oe=window.Document.prototype.createElementNS,pe=window.Document.prototype.importNode,qe=window.Document.prototype.prepend,re=window.Document.prototype.append,se=window.DocumentFragment.prototype.prepend,te=window.DocumentFragment.prototype.append,ue=window.Node.prototype.cloneNode,ve=window.Node.prototype.appendChild,we=window.Node.prototype.insertBefore,xe=window.Node.prototype.removeChild,ye=window.Node.prototype.replaceChild,ze=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),Ae=window.Element.prototype.attachShadow,Be=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Ce=window.Element.prototype.getAttribute,De=window.Element.prototype.setAttribute,Ee=window.Element.prototype.removeAttribute,Fe=window.Element.prototype.getAttributeNS,Ge=window.Element.prototype.setAttributeNS,He=window.Element.prototype.removeAttributeNS,Ie=window.Element.prototype.insertAdjacentElement,Je=window.Element.prototype.insertAdjacentHTML,Ke=window.Element.prototype.prepend,
Le=window.Element.prototype.append,Me=window.Element.prototype.before,Ne=window.Element.prototype.after,Oe=window.Element.prototype.replaceWith,Pe=window.Element.prototype.remove,Qe=window.HTMLElement,Re=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Se=window.HTMLElement.prototype.insertAdjacentElement,Te=window.HTMLElement.prototype.insertAdjacentHTML;var Ue=new function(){};function Ve(){var a=We;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.u.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=ne.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,he(a,e),e;d=e.length-1;var f=e[d];if(f===Ue)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=Ue;Object.setPrototypeOf(f,b.prototype);he(a,f);return f}b.prototype=Qe.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}()};function Xe(a,b,c){function d(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var f=[],l=0;l<d.length;l++){var n=d[l];n instanceof Element&&K(n)&&f.push(n);if(n instanceof DocumentFragment)for(n=n.firstChild;n;n=n.nextSibling)e.push(n);else e.push(n)}b.apply(this,d);for(d=0;d<f.length;d++)N(a,f[d]);if(K(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&M(a,f)}}void 0!==c.da&&(b.prepend=d(c.da));void 0!==c.append&&(b.append=d(c.append))};function Ye(){var a=We;L(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructorFunction}b=ne.call(this,b);he(a,b);return b});L(Document.prototype,"importNode",function(b,c){b=pe.call(this,b,!!c);this.__CE_hasRegistry?O(a,b):ge(a,b);return b});L(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructorFunction}b=oe.call(this,
b,c);he(a,b);return b});Xe(a,Document.prototype,{da:qe,append:re})};function Ze(){function a(a,d){Object.defineProperty(a,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,a);else{var c=void 0;if(this.firstChild){var e=this.childNodes,h=e.length;if(0<h&&K(this)){c=Array(h);for(var k=0;k<h;k++)c[k]=e[k]}}d.set.call(this,a);if(c)for(a=0;a<c.length;a++)N(b,c[a])}}})}var b=We;L(Node.prototype,"insertBefore",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);
a=we.call(this,a,d);if(K(this))for(d=0;d<c.length;d++)M(b,c[d]);return a}c=K(a);d=we.call(this,a,d);c&&N(b,a);K(this)&&M(b,a);return d});L(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=ve.call(this,a);if(K(this))for(var e=0;e<c.length;e++)M(b,c[e]);return a}c=K(a);e=ve.call(this,a);c&&N(b,a);K(this)&&M(b,a);return e});L(Node.prototype,"cloneNode",function(a){a=ue.call(this,!!a);this.ownerDocument.__CE_hasRegistry?O(b,a):
ge(b,a);return a});L(Node.prototype,"removeChild",function(a){var c=K(a),e=xe.call(this,a);c&&N(b,a);return e});L(Node.prototype,"replaceChild",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=ye.call(this,a,d);if(K(this))for(N(b,d),d=0;d<c.length;d++)M(b,c[d]);return a}c=K(a);var f=ye.call(this,a,d),g=K(this);g&&N(b,d);c&&N(b,a);g&&M(b,a);return f});ze&&ze.get?a(Node.prototype,ze):ee(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=
[],b=0;b<this.childNodes.length;b++){var c=this.childNodes[b];c.nodeType!==Node.COMMENT_NODE&&a.push(c.textContent)}return a.join("")},set:function(a){for(;this.firstChild;)xe.call(this,this.firstChild);null!=a&&""!==a&&ve.call(this,document.createTextNode(a))}})})};function $e(a){function b(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var h=[],k=0;k<d.length;k++){var l=d[k];l instanceof Element&&K(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)e.push(l);else e.push(l)}b.apply(this,d);for(d=0;d<h.length;d++)N(a,h[d]);if(K(this))for(d=0;d<e.length;d++)h=e[d],h instanceof Element&&M(a,h)}}var c=Element.prototype;void 0!==Me&&(c.before=b(Me));void 0!==Me&&(c.after=b(Ne));void 0!==Oe&&
L(c,"replaceWith",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var g=[],h=0;h<c.length;h++){var k=c[h];k instanceof Element&&K(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)d.push(k);else d.push(k)}h=K(this);Oe.apply(this,c);for(c=0;c<g.length;c++)N(a,g[c]);if(h)for(N(a,this),c=0;c<d.length;c++)g=d[c],g instanceof Element&&M(a,g)});void 0!==Pe&&L(c,"remove",function(){var b=K(this);Pe.call(this);b&&N(a,this)})};function af(){function a(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var c=this,e=void 0;K(this)&&(e=[],be(this,function(a){a!==c&&e.push(a)}));b.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var g=e[f];1===g.__CE_state&&d.disconnectedCallback(g)}this.ownerDocument.__CE_hasRegistry?O(d,this):ge(d,this);return a}})}function b(a,b){L(a,"insertAdjacentElement",function(a,c){var e=K(c);a=b.call(this,a,c);e&&N(d,c);K(a)&&M(d,c);return a})}
function c(a,b){function c(a,b){for(var c=[];a!==b;a=a.nextSibling)c.push(a);for(b=0;b<c.length;b++)O(d,c[b])}L(a,"insertAdjacentHTML",function(a,d){a=a.toLowerCase();if("beforebegin"===a){var e=this.previousSibling;b.call(this,a,d);c(e||this.parentNode.firstChild,this)}else if("afterbegin"===a)e=this.firstChild,b.call(this,a,d),c(this.firstChild,e);else if("beforeend"===a)e=this.lastChild,b.call(this,a,d),c(e||this.firstChild,null);else if("afterend"===a)e=this.nextSibling,b.call(this,a,d),c(this.nextSibling,
e);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}var d=We;Ae&&L(Element.prototype,"attachShadow",function(a){a=Ae.call(this,a);var b=d;if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var c=0;c<b.c.length;c++)b.c[c](a)}return this.__CE_shadowRoot=a});Be&&Be.get?a(Element.prototype,Be):Re&&Re.get?a(HTMLElement.prototype,Re):fe(d,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return ue.call(this,
!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=oe.call(document,this.namespaceURI,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)xe.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)ve.call(c,a.childNodes[0])}})});L(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return De.call(this,a,b);var c=Ce.call(this,a);De.call(this,a,b);b=Ce.call(this,a);d.attributeChangedCallback(this,a,c,b,null)});L(Element.prototype,
"setAttributeNS",function(a,b,c){if(1!==this.__CE_state)return Ge.call(this,a,b,c);var e=Fe.call(this,a,b);Ge.call(this,a,b,c);c=Fe.call(this,a,b);d.attributeChangedCallback(this,b,e,c,a)});L(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return Ee.call(this,a);var b=Ce.call(this,a);Ee.call(this,a);null!==b&&d.attributeChangedCallback(this,a,b,null,null)});L(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return He.call(this,a,b);var c=Fe.call(this,
a,b);He.call(this,a,b);var e=Fe.call(this,a,b);c!==e&&d.attributeChangedCallback(this,b,c,e,a)});Se?b(HTMLElement.prototype,Se):Ie?b(Element.prototype,Ie):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");Te?c(HTMLElement.prototype,Te):Je?c(Element.prototype,Je):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");Xe(d,Element.prototype,{da:Ke,append:Le});$e(d)};var bf=window.customElements;if(!bf||bf.forcePolyfill||"function"!=typeof bf.define||"function"!=typeof bf.get){var We=new ce;Ve();Ye();Xe(We,DocumentFragment.prototype,{da:se,append:te});Ze();af();document.__CE_hasRegistry=!0;var customElements=new P(We);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};function cf(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function df(a){a=a.replace(ef,"").replace(ff,"");var b=gf,c=a,d=new cf;d.start=0;d.end=c.length;for(var e=d,f=0,g=c.length;f<g;f++)if("{"===c[f]){e.rules||(e.rules=[]);var h=e,k=h.rules[h.rules.length-1]||null;e=new cf;e.start=f+1;e.parent=h;e.previous=k;h.rules.push(e)}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);return b(d,a)}
function gf(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=hf(c),c=c.replace(jf," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=kf:c.match(lf)&&(a.type=mf,a.keyframesName=a.selector.split(jf).pop()):a.type=0===c.indexOf("--")?nf:of);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)gf(f,
b);return a}function hf(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return"\\"+a})}
function pf(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=pf(h,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(qf,"").replace(rf,""),b=b.replace(uf,"").replace(vf,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
var of=1,mf=7,kf=4,nf=1E3,ef=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,ff=/@import[^;]*;/gim,qf=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,rf=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,uf=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,vf=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,lf=/^@[^\s]*keyframes/,jf=/\s+/g;var R=!(window.ShadyDOM&&window.ShadyDOM.inUse),wf;function xf(a){wf=a&&a.shimcssproperties?!1:R||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}var yf;window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(yf=window.ShadyCSS.cssBuild);var zf=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);
window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?wf=window.ShadyCSS.nativeCss:window.ShadyCSS?(xf(window.ShadyCSS),window.ShadyCSS=void 0):xf(window.WebComponents&&window.WebComponents.flags);var S=wf,Af=yf;var Bf=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Cf=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Df=/(--[\w-]+)\s*([:,;)]|$)/gi,Ef=/(animation\s*:)|(animation-name\s*:)/,Ff=/@media\s(.*)/,Gf=/\{[^}]*\}/g;var Hf=new Set;function If(a,b){if(!a)return"";"string"===typeof a&&(a=df(a));b&&Jf(a,b);return pf(a,S)}function Kf(a){!a.__cssRules&&a.textContent&&(a.__cssRules=df(a.textContent));return a.__cssRules||null}function Lf(a){return!!a.parent&&a.parent.type===mf}function Jf(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===kf){var g=a.selector.match(Ff);g&&(window.matchMedia(g[1]).matches||(e=!0))}f===of?b(a):c&&f===mf?c(a):f===nf&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)Jf(g,b,c,d)}}
function Mf(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;Nf(e,c,d);return e}var Of=null;function Pf(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(Of?Of.nextSibling:null)||b.firstChild);return Of=a}function Nf(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);Of?a.compareDocumentPosition(Of)===Node.DOCUMENT_POSITION_PRECEDING&&(Of=a):Of=a}
function Qf(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return-1}function Rf(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=Qf(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=Rf(a.substring(d+1),b);d=e.indexOf(",");return-1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function Sf(a,b){R?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
var Tf=window.ShadyDOM&&window.ShadyDOM.wrap||function(a){return a};function Uf(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,X:c}}function Vf(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=Qf(a,d);c+=a.slice(d,e+1);d=e}else","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
function Wf(a){if(void 0!==Af)return Af;if(void 0===a.__cssBuild){var b=a.getAttribute("css-build");if(b)a.__cssBuild=b;else{a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b=""}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c)}a.__cssBuild=b}}return a.__cssBuild||""}
function Xf(a){a=void 0===a?"":a;return""!==a&&S?R?"shadow"===a:"shady"===a:!1};function Yf(){}function Zf(a,b){$f(U,a,function(a){ag(a,b||"")})}function $f(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);var d;"template"===b.localName?d=(b.content||b._content||b).childNodes:d=b.children||b.childNodes;if(d)for(b=0;b<d.length;b++)$f(a,d[b],c)}
function ag(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute("class");c?d&&(b=d.replace("style-scope","").replace(b,""),Sf(a,b)):Sf(a,(d?d+" ":"")+"style-scope "+b)}}function bg(a,b,c){$f(U,a,function(a){ag(a,b,!0);ag(a,c)})}function cg(a,b){$f(U,a,function(a){ag(a,b||"",!0)})}
function dg(a,b,c,d,e){var f=U;e=void 0===e?"":e;""===e&&(R||"shady"===(void 0===d?"":d)?e=If(b,c):(a=Uf(a),e=eg(f,b,a.is,a.X,c)+"\n\n"));return e.trim()}function eg(a,b,c,d,e){var f=fg(c,d);c=c?"."+c:"";return If(b,function(b){b.c||(b.selector=b.C=gg(a,b,a.b,c,f),b.c=!0);e&&e(b,c,f)})}function fg(a,b){return b?"[is="+a+"]":a}
function gg(a,b,c,d,e){var f=Vf(b.selector);if(!Lf(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e)}return f.filter(function(a){return!!a}).join(",")}function hg(a){return a.replace(ig,function(a,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+d+")"})}
function jg(a){for(var b=[],c;c=a.match(kg);){var d=c.index,e=Qf(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c)}return{na:a,matches:b}}function lg(a,b){var c=a.split("\ue000");return b.reduce(function(a,b,f){return a+b+c[f+1]},c[0])}
Yf.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=ig.test(a);e&&(a=a.replace(ig,function(a,b,c){return":"+b+"("+c.replace(/\s/g,"")+")"}),a=hg(a));var f=kg.test(a);if(f){var g=jg(a);a=g.na;g=g.matches}a=a.replace(mg,":host $1");a=a.replace(ng,function(a,e,f){d||(a=og(f,e,b,c),d=d||a.stop,e=a.Ha,f=a.value);return e+f});f&&(a=lg(a,g));e&&(a=hg(a));return a=a.replace(pg,function(a,b,c,d){return'[dir="'+c+'"] '+b+d+", "+b+'[dir="'+c+'"]'+d})};
function og(a,b,c,d){var e=a.indexOf("::slotted");0<=a.indexOf(":host")?a=qg(a,d):0!==e&&(a=c?rg(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(sg,function(a,b){return" > "+b}))}return{value:a,Ha:b,stop:f}}function rg(a,b){a=a.split(/(\[.+?\])/);for(var c=[],d=0;d<a.length;d++)if(1===d%2)c.push(a[d]);else{var e=a[d];if(""!==e||d!==a.length-1)e=e.split(":"),e[0]+=b,c.push(e.join(":"))}return c.join("")}
function qg(a,b){var c=a.match(tg);return(c=c&&c[2].trim()||"")?c[0].match(ug)?a.replace(tg,function(a,c,f){return b+f}):c.split(ug)[0]===b?c:"should_not_match":a.replace(":host",b)}function vg(a){":root"===a.selector&&(a.selector="html")}Yf.prototype.c=function(a){return a.match(":host")?"":a.match("::slotted")?this.b(a,":not(.style-scope)"):rg(a.trim(),":not(.style-scope)")};t.Object.defineProperties(Yf.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var ig=/:(nth[-\w]+)\(([^)]+)\)/,ng=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,ug=/[[.:#*]/,mg=/^(::slotted)/,tg=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,sg=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,pg=/(.*):dir\((?:(ltr|rtl))\)(.*)/,kg=/:(?:matches|any|-(?:webkit|moz)-any)/,U=new Yf;function wg(a,b,c,d,e){this.L=a||null;this.b=b||null;this.la=c||[];this.G=null;this.cssBuild=e||"";this.X=d||"";this.a=this.H=this.K=null}function V(a){return a?a.__styleInfo:null}function xg(a,b){return a.__styleInfo=b}wg.prototype.c=function(){return this.L};wg.prototype._getStyleRules=wg.prototype.c;function yg(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var zg=navigator.userAgent.match("Trident");function Ag(){}function Bg(a){var b={},c=[],d=0;Jf(a,function(a){Cg(a);a.index=d++;a=a.A.cssText;for(var c;c=Df.exec(a);){var e=c[1];":"!==c[2]&&(b[e]=!0)}},function(a){c.push(a)});a.b=c;a=[];for(var e in b)a.push(e);return a}
function Cg(a){if(!a.A){var b={},c={};Dg(a,c)&&(b.J=c,a.rules=null);b.cssText=a.parsedCssText.replace(Gf,"").replace(Bf,"");a.A=b}}function Dg(a,b){var c=a.A;if(c){if(c.J)return Object.assign(b,c.J),!0}else{c=a.parsedCssText;for(var d;a=Bf.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}}
function Eg(a,b,c){b&&(b=0<=b.indexOf(";")?Fg(a,b,c):Rf(b,function(b,e,f,g){if(!e)return b+g;(e=Eg(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=Eg(a,c[f]||f,c)||f;return b+(e||"")+g}));return b&&b.trim()||""}
function Fg(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){Cf.lastIndex=0;if(f=Cf.exec(e))e=Eg(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=Eg(a,g,c)||g;e=e.substring(0,f)+g}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||""}return b.join(";")}
function Gg(a,b){var c={},d=[];Jf(a,function(a){a.A||Cg(a);var e=a.C||a.parsedSelector;b&&a.A.J&&e&&yg.call(b,e)&&(Dg(a,c),a=a.index,e=parseInt(a/32,10),d[e]=(d[e]||0)|1<<a%32)},null,!0);return{J:c,key:d}}
function Hg(a,b,c,d){b.A||Cg(b);if(b.A.J){var e=Uf(a);a=e.is;e=e.X;e=a?fg(a,e):"html";var f=b.parsedSelector,g=":host > *"===f||"html"===f,h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.C||(b.C=gg(U,b,U.b,a?"."+a:"",e)),c=b.C||e),d({na:c,Oa:h,bb:g})}}function Ig(a,b,c){var d={},e={};Jf(b,function(b){Hg(a,b,c,function(c){yg.call(a._element||a,c.na)&&(c.Oa?Dg(b,d):Dg(b,e))})},null,!0);return{Ua:e,Ma:d}}
function Jg(a,b,c,d){var e=Uf(b),f=fg(e.is,e.X),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=V(b);e=h.L;h=h.cssBuild;var k=Kg(e,d);return dg(b,e,function(b){var e="";b.A||Cg(b);b.A.cssText&&(e=Fg(a,b.A.cssText,c));b.cssText=e;if(!R&&!Lf(b)&&b.cssText){var h=e=b.cssText;null==b.ra&&(b.ra=Ef.test(e));if(b.ra)if(null==b.ba){b.ba=[];for(var l in k)h=k[l],h=h(e),e!==h&&(e=h,b.ba.push(l))}else{for(l=0;l<b.ba.length;++l)h=k[b.ba[l]],e=h(e);h=e}b.cssText=h;b.C=
b.C||b.selector;e="."+d;l=Vf(b.C);h=0;for(var v=l.length,x=void 0;h<v&&(x=l[h]);h++)l[h]=x.match(g)?x.replace(f,e):e+" "+x;b.selector=l.join(",")}},h)}function Kg(a,b){a=a.b;var c={};if(!R&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.f=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.a=f.keyframesName+"-"+g;f.C=f.C||f.selector;f.selector=f.C.replace(f.keyframesName,f.a);c[e.keyframesName]=Lg(e)}return c}function Lg(a){return function(b){return b.replace(a.f,a.a)}}
function Mg(a,b){var c=Ng,d=Kf(a);a.textContent=If(d,function(a){var d=a.cssText=a.parsedCssText;a.A&&a.A.cssText&&(d=d.replace(qf,"").replace(rf,""),a.cssText=Fg(c,d,b))})}t.Object.defineProperties(Ag.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var Ng=new Ag;var Og={},Pg=window.customElements;if(Pg&&!R&&!zf){var Qg=Pg.define;Pg.define=function(a,b,c){Og[a]||(Og[a]=Pf(a));Qg.call(Pg,a,b,c)}};function Rg(){this.cache={}}Rg.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({J:b,styleElement:c,H:d});100<e.length&&e.shift();this.cache[a]=e};function Sg(){}var Tg=new RegExp(U.a+"\\s*([^\\s]*)");function Ug(a){return(a=(a.classList&&a.classList.value?a.classList.value:a.getAttribute("class")||"").match(Tg))?a[1]:""}function Vg(a){var b=Tf(a).getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?Uf(a).is:""}
function Wg(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=Ug(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===Wf(e)))cg(e,g);else if(f instanceof ShadowRoot)for(f=Vg(e),f!==g&&bg(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+U.a+")"),g=0;g<e.length;g++){f=e[g];
var h=Vg(f);h&&ag(f,h)}}}}}
if(!(R||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var Xg=new MutationObserver(Wg),Yg=function(a){Xg.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)Yg(document);else{var Zg=function(){Yg(document.body)};window.HTMLImports?window.HTMLImports.whenReady(Zg):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){Zg();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",
a)}else Zg()})}Sg=function(){Wg(Xg.takeRecords())}}var $g=Sg;var ah={};var bh=Promise.resolve();function ch(a){if(a=ah[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function dh(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function eh(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a._validating||(a._validating=!0,bh.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a._validating=!1}))};var fh={},gh=new Rg;function W(){this.F={};this.c=document.documentElement;var a=new cf;a.rules=[];this.f=xg(this.c,new wg(a));this.u=!1;this.b=this.a=null}r=W.prototype;r.flush=function(){$g()};r.Ka=function(a){return Kf(a)};r.Ya=function(a){return If(a)};r.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c)};
r.prepareTemplateStyles=function(a,b,c){if(!a._prepared&&!zf){R||Og[b]||(Og[b]=Pf(b));a._prepared=!0;a.name=b;a.extends=c;ah[b]=a;var d=Wf(a),e=Xf(d);c={is:b,extends:c};for(var f=[],g=a.content.querySelectorAll("style"),h=0;h<g.length;h++){var k=g[h];if(k.hasAttribute("shady-unscoped")){if(!R){var l=k.textContent;Hf.has(l)||(Hf.add(l),l=k.cloneNode(!0),document.head.appendChild(l));k.parentNode.removeChild(k)}}else f.push(k.textContent),k.parentNode.removeChild(k)}f=f.join("").trim()+(fh[b]||"");
hh(this);if(!e){if(g=!d)g=Cf.test(f)||Bf.test(f),Cf.lastIndex=0,Bf.lastIndex=0;h=df(f);g&&S&&this.a&&this.a.transformRules(h,b);a._styleAst=h}g=[];S||(g=Bg(a._styleAst));if(!g.length||S)h=R?a.content:null,b=Og[b]||null,d=dg(c,a._styleAst,null,d,e?f:""),d=d.length?Mf(d,c.is,h,b):null,a._style=d;a.a=g}};r.Sa=function(a,b){fh[b]=a.join(" ")};r.prepareTemplateDom=function(a,b){if(!zf){var c=Wf(a);R||"shady"===c||a._domPrepared||(a._domPrepared=!0,Zf(a.content,b))}};
function ih(a){var b=Uf(a),c=b.is;b=b.X;var d=Og[c]||null,e=ah[c];if(e){c=e._styleAst;var f=e.a;e=Wf(e);b=new wg(c,d,f,b,e);xg(a,b);return b}}function jh(a){!a.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.b=window.ShadyCSS.CustomStyleInterface,a.b.transformCallback=function(b){a.va(b)},a.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.u)&&a.flushCustomStyles()})})}
function hh(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(a.a=window.ShadyCSS.ApplyShim,a.a.invalidCallback=ch);jh(a)}
r.flushCustomStyles=function(){if(!zf&&(hh(this),this.b)){var a=this.b.processStyles();if(this.b.enqueued&&!Xf(this.f.cssBuild)){if(S){if(!this.f.cssBuild)for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);if(c&&S&&this.a){var d=Kf(c);hh(this);this.a.transformRules(d);c.textContent=If(d)}}}else{kh(this,this.c,this.f);for(b=0;b<a.length;b++)(c=this.b.getStyleForCustomStyle(a[b]))&&Mg(c,this.f.K);this.u&&this.styleDocument()}this.b.enqueued=!1}}};
r.styleElement=function(a,b){if(zf){if(b){V(a)||xg(a,new wg(null));var c=V(a);c.G=c.G||{};Object.assign(c.G,b);lh(this,a,c)}}else if(c=V(a)||ih(a))if(a!==this.c&&(this.u=!0),b&&(c.G=c.G||{},Object.assign(c.G,b)),S)lh(this,a,c);else if(this.flush(),kh(this,a,c),c.la&&c.la.length){b=Uf(a).is;var d;a:{if(d=gh.cache[b])for(var e=d.length-1;0<=e;e--){var f=d[e];b:{var g=c.la;for(var h=0;h<g.length;h++){var k=g[h];if(f.J[k]!==c.K[k]){g=!1;break b}}g=!0}if(g){d=f;break a}}d=void 0}g=d?d.styleElement:null;
e=c.H;(f=d&&d.H)||(f=this.F[b]=(this.F[b]||0)+1,f=b+"-"+f);c.H=f;f=c.H;h=Ng;h=g?g.textContent||"":Jg(h,a,c.K,f);k=V(a);var l=k.a;l&&!R&&l!==g&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));R?k.a?(k.a.textContent=h,g=k.a):h&&(g=Mf(h,f,a.shadowRoot,k.b)):g?g.parentNode||(zg&&-1<h.indexOf("@media")&&(g.textContent=h),Nf(g,null,k.b)):h&&(g=Mf(h,f,null,k.b));g&&(g._useCount=g._useCount||0,k.a!=g&&g._useCount++,k.a=g);f=g;R||(g=c.H,k=h=a.getAttribute("class")||"",e&&(k=h.replace(new RegExp("\\s*x-scope\\s*"+
e+"\\s*","g")," ")),k+=(k?" ":"")+"x-scope "+g,h!==k&&Sf(a,k));d||gh.store(b,c.K,f,c.H)}};
function lh(a,b,c){var d=Uf(b).is;if(c.G){var e=c.G,f;for(f in e)null===f?b.style.removeProperty(f):b.style.setProperty(f,e[f])}e=ah[d];if(!(!e&&b!==a.c||e&&""!==Wf(e))&&e&&e._style&&!dh(e)){if(dh(e)||e._applyShimValidatingVersion!==e._applyShimNextVersion)hh(a),a.a&&a.a.transformRules(e._styleAst,d),e._style.textContent=dg(b,c.L),eh(e);R&&(a=b.shadowRoot)&&(a=a.querySelector("style"))&&(a.textContent=dg(b,c.L));c.L=e._styleAst}}
function mh(a,b){return(b=Tf(b).getRootNode().host)?V(b)||ih(b)?b:mh(a,b):a.c}function kh(a,b,c){var d=mh(a,b),e=V(d),f=e.K;d===a.c||f||(kh(a,d,e),f=e.K);a=Object.create(f||null);d=Ig(b,c.L,c.cssBuild);b=Gg(e.L,b).J;Object.assign(a,d.Ma,b,d.Ua);b=c.G;for(var g in b)if((e=b[g])||0===e)a[g]=e;g=Ng;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=Eg(g,a[d],a);c.K=a}r.styleDocument=function(a){this.styleSubtree(this.c,a)};
r.styleSubtree=function(a,b){var c=Tf(a),d=c.shadowRoot;(d||a===this.c)&&this.styleElement(a,b);if(a=d&&(d.children||d.childNodes))for(c=0;c<a.length;c++)this.styleSubtree(a[c]);else if(c=c.children||c.childNodes)for(a=0;a<c.length;a++)this.styleSubtree(c[a])};
r.va=function(a){var b=this,c=Wf(a);c!==this.f.cssBuild&&(this.f.cssBuild=c);if(!Xf(c)){var d=Kf(a);Jf(d,function(a){if(R)vg(a);else{var d=U;a.selector=a.parsedSelector;vg(a);a.selector=a.C=gg(d,a,d.c,void 0,void 0)}S&&""===c&&(hh(b),b.a&&b.a.transformRule(a))});S?a.textContent=If(d):this.f.L.rules.push(d)}};r.getComputedStyleValue=function(a,b){var c;S||(c=(V(a)||V(mh(this,a))).K[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
r.Xa=function(a,b){var c=Tf(a).getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===U.a){c=d[e+1];break}}}c&&b.push(U.a,c);S||(c=V(a))&&c.H&&b.push(Ng.a,c.H);Sf(a,b.join(" "))};r.Fa=function(a){return V(a)};r.Wa=function(a,b){ag(a,b)};r.Za=function(a,b){ag(a,b,!0)};r.Va=function(a){return Vg(a)};r.Ia=function(a){return Ug(a)};W.prototype.flush=W.prototype.flush;W.prototype.prepareTemplate=W.prototype.prepareTemplate;
W.prototype.styleElement=W.prototype.styleElement;W.prototype.styleDocument=W.prototype.styleDocument;W.prototype.styleSubtree=W.prototype.styleSubtree;W.prototype.getComputedStyleValue=W.prototype.getComputedStyleValue;W.prototype.setElementClass=W.prototype.Xa;W.prototype._styleInfoForNode=W.prototype.Fa;W.prototype.transformCustomStyleForDocument=W.prototype.va;W.prototype.getStyleAst=W.prototype.Ka;W.prototype.styleAstToString=W.prototype.Ya;W.prototype.flushCustomStyles=W.prototype.flushCustomStyles;
W.prototype.scopeNode=W.prototype.Wa;W.prototype.unscopeNode=W.prototype.Za;W.prototype.scopeForNode=W.prototype.Va;W.prototype.currentScopeForNode=W.prototype.Ia;W.prototype.prepareAdoptedCssText=W.prototype.Sa;Object.defineProperties(W.prototype,{nativeShadow:{get:function(){return R}},nativeCss:{get:function(){return S}}});var Z=new W,nh,oh;window.ShadyCSS&&(nh=window.ShadyCSS.ApplyShim,oh=window.ShadyCSS.CustomStyleInterface);
window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplate(a,b,c)},prepareTemplateDom:function(a,b){Z.prepareTemplateDom(a,b)},prepareTemplateStyles:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplateStyles(a,b,c)},styleSubtree:function(a,b){Z.flushCustomStyles();Z.styleSubtree(a,b)},styleElement:function(a){Z.flushCustomStyles();Z.styleElement(a)},styleDocument:function(a){Z.flushCustomStyles();Z.styleDocument(a)},flushCustomStyles:function(){Z.flushCustomStyles()},
getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:S,nativeShadow:R,cssBuild:Af,disableRuntime:zf};nh&&(window.ShadyCSS.ApplyShim=nh);oh&&(window.ShadyCSS.CustomStyleInterface=oh);(function(a){function b(a){""==a&&(f.call(this),this.i=!0);return a.toLowerCase()}function c(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,63,96].indexOf(b)?a:encodeURIComponent(a)}function d(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,96].indexOf(b)?a:encodeURIComponent(a)}function e(a,e,g){function h(a){X.push(a)}var k=e||"scheme start",x=0,p="",v=!1,Q=!1,X=[];a:for(;(void 0!=a[x-1]||0==x)&&!this.i;){var m=a[x];switch(k){case "scheme start":if(m&&q.test(m))p+=m.toLowerCase(),
k="scheme";else if(e){h("Invalid scheme.");break a}else{p="";k="no scheme";continue}break;case "scheme":if(m&&I.test(m))p+=m.toLowerCase();else if(":"==m){this.h=p;p="";if(e)break a;void 0!==l[this.h]&&(this.B=!0);k="file"==this.h?"relative":this.B&&g&&g.h==this.h?"relative or authority":this.B?"authority first slash":"scheme data"}else if(e){void 0!=m&&h("Code point not allowed in scheme: "+m);break a}else{p="";x=0;k="no scheme";continue}break;case "scheme data":"?"==m?(this.o="?",k="query"):"#"==
m?(this.v="#",k="fragment"):void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.ia+=c(m));break;case "no scheme":if(g&&void 0!==l[g.h]){k="relative";continue}else h("Missing scheme."),f.call(this),this.i=!0;break;case "relative or authority":if("/"==m&&"/"==a[x+1])k="authority ignore slashes";else{h("Expected /, got: "+m);k="relative";continue}break;case "relative":this.B=!0;"file"!=this.h&&(this.h=g.h);if(void 0==m){this.j=g.j;this.m=g.m;this.l=g.l.slice();this.o=g.o;this.s=g.s;this.g=g.g;break a}else if("/"==
m||"\\"==m)"\\"==m&&h("\\ is an invalid code point."),k="relative slash";else if("?"==m)this.j=g.j,this.m=g.m,this.l=g.l.slice(),this.o="?",this.s=g.s,this.g=g.g,k="query";else if("#"==m)this.j=g.j,this.m=g.m,this.l=g.l.slice(),this.o=g.o,this.v="#",this.s=g.s,this.g=g.g,k="fragment";else{k=a[x+1];var y=a[x+2];if("file"!=this.h||!q.test(m)||":"!=k&&"|"!=k||void 0!=y&&"/"!=y&&"\\"!=y&&"?"!=y&&"#"!=y)this.j=g.j,this.m=g.m,this.s=g.s,this.g=g.g,this.l=g.l.slice(),this.l.pop();k="relative path";continue}break;
case "relative slash":if("/"==m||"\\"==m)"\\"==m&&h("\\ is an invalid code point."),k="file"==this.h?"file host":"authority ignore slashes";else{"file"!=this.h&&(this.j=g.j,this.m=g.m,this.s=g.s,this.g=g.g);k="relative path";continue}break;case "authority first slash":if("/"==m)k="authority second slash";else{h("Expected '/', got: "+m);k="authority ignore slashes";continue}break;case "authority second slash":k="authority ignore slashes";if("/"!=m){h("Expected '/', got: "+m);continue}break;case "authority ignore slashes":if("/"!=
m&&"\\"!=m){k="authority";continue}else h("Expected authority, got: "+m);break;case "authority":if("@"==m){v&&(h("@ already seen."),p+="%40");v=!0;for(m=0;m<p.length;m++)y=p[m],"\t"==y||"\n"==y||"\r"==y?h("Invalid whitespace in authority."):":"==y&&null===this.g?this.g="":(y=c(y),null!==this.g?this.g+=y:this.s+=y);p=""}else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){x-=p.length;p="";k="host";continue}else p+=m;break;case "file host":if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){2!=p.length||
!q.test(p[0])||":"!=p[1]&&"|"!=p[1]?(0!=p.length&&(this.j=b.call(this,p),p=""),k="relative path start"):k="relative path";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid whitespace in file host."):p+=m;break;case "host":case "hostname":if(":"!=m||Q)if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){this.j=b.call(this,p);p="";k="relative path start";if(e)break a;continue}else"\t"!=m&&"\n"!=m&&"\r"!=m?("["==m?Q=!0:"]"==m&&(Q=!1),p+=m):h("Invalid code point in host/hostname: "+m);else if(this.j=b.call(this,
p),p="",k="port","hostname"==e)break a;break;case "port":if(/[0-9]/.test(m))p+=m;else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m||e){""!=p&&(p=parseInt(p,10),p!=l[this.h]&&(this.m=p+""),p="");if(e)break a;k="relative path start";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid code point in port: "+m):(f.call(this),this.i=!0);break;case "relative path start":"\\"==m&&h("'\\' not allowed in path.");k="relative path";if("/"!=m&&"\\"!=m)continue;break;case "relative path":if(void 0!=m&&"/"!=m&&"\\"!=
m&&(e||"?"!=m&&"#"!=m))"\t"!=m&&"\n"!=m&&"\r"!=m&&(p+=c(m));else{"\\"==m&&h("\\ not allowed in relative path.");if(y=n[p.toLowerCase()])p=y;".."==p?(this.l.pop(),"/"!=m&&"\\"!=m&&this.l.push("")):"."==p&&"/"!=m&&"\\"!=m?this.l.push(""):"."!=p&&("file"==this.h&&0==this.l.length&&2==p.length&&q.test(p[0])&&"|"==p[1]&&(p=p[0]+":"),this.l.push(p));p="";"?"==m?(this.o="?",k="query"):"#"==m&&(this.v="#",k="fragment")}break;case "query":e||"#"!=m?void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.o+=d(m)):(this.v=
"#",k="fragment");break;case "fragment":void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.v+=m)}x++}}function f(){this.s=this.ia=this.h="";this.g=null;this.m=this.j="";this.l=[];this.v=this.o="";this.B=this.i=!1}function g(a,b){void 0===b||b instanceof g||(b=new g(String(b)));this.a=a;f.call(this);a=this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");e.call(this,a,null,b)}var h=!1;try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href}catch(x){}if(!h){var l=Object.create(null);l.ftp=
21;l.file=0;l.gopher=70;l.http=80;l.https=443;l.ws=80;l.wss=443;var n=Object.create(null);n["%2e"]=".";n[".%2e"]="..";n["%2e."]="..";n["%2e%2e"]="..";var q=/[a-zA-Z]/,I=/[a-zA-Z0-9\+\-\.]/;g.prototype={toString:function(){return this.href},get href(){if(this.i)return this.a;var a="";if(""!=this.s||null!=this.g)a=this.s+(null!=this.g?":"+this.g:"")+"@";return this.protocol+(this.B?"//"+a+this.host:"")+this.pathname+this.o+this.v},set href(a){f.call(this);e.call(this,a)},get protocol(){return this.h+
":"},set protocol(a){this.i||e.call(this,a+":","scheme start")},get host(){return this.i?"":this.m?this.j+":"+this.m:this.j},set host(a){!this.i&&this.B&&e.call(this,a,"host")},get hostname(){return this.j},set hostname(a){!this.i&&this.B&&e.call(this,a,"hostname")},get port(){return this.m},set port(a){!this.i&&this.B&&e.call(this,a,"port")},get pathname(){return this.i?"":this.B?"/"+this.l.join("/"):this.ia},set pathname(a){!this.i&&this.B&&(this.l=[],e.call(this,a,"relative path start"))},get search(){return this.i||
!this.o||"?"==this.o?"":this.o},set search(a){!this.i&&this.B&&(this.o="?","?"==a[0]&&(a=a.slice(1)),e.call(this,a,"query"))},get hash(){return this.i||!this.v||"#"==this.v?"":this.v},set hash(a){this.i||(a?(this.v="#","#"==a[0]&&(a=a.slice(1)),e.call(this,a,"fragment")):this.v="")},get origin(){var a;if(this.i||!this.h)return"";switch(this.h){case "data":case "file":case "javascript":case "mailto":return"null"}return(a=this.host)?this.h+"://"+a:""}};var v=a.URL;v&&(g.createObjectURL=function(a){return v.createObjectURL.apply(v,
arguments)},g.revokeObjectURL=function(a){v.revokeObjectURL(a)});a.URL=g}})(window);Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});var ph=document.createElement("style");ph.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var qh=document.querySelector("head");qh.insertBefore(ph,qh.firstChild);var rh=window.customElements,sh=!1,th=null;rh.polyfillWrapFlushCallback&&rh.polyfillWrapFlushCallback(function(a){th=a;sh&&a()});function uh(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);th&&th();sh=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}
"complete"!==document.readyState?(window.addEventListener("load",uh),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",uh);uh()})):uh();}).call(this);

//# sourceMappingURL=webcomponents-bundle.js.map

window.addEventListener("DOMContentLoaded", function() {
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.PFElement = factory());
}(this, (function () { 'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /*
   * Copyright 2019 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  var logger = function logger() {
    return null;
  };

  function reveal() {
    logger("[reveal] elements ready, revealing the body");
    window.document.body.removeAttribute("unresolved");
  }

  function autoReveal(logFunction) {
    logger = logFunction;
    // If Web Components are already ready, run the handler right away.  If they
    // are not yet ready, wait.
    //
    // see https://github.com/github/webcomponentsjs#webcomponents-loaderjs for
    // info about web component readiness events
    var polyfillPresent = window.WebComponents;
    var polyfillReady = polyfillPresent && window.WebComponents.ready;

    if (!polyfillPresent || polyfillReady) {
      handleWebComponentsReady();
    } else {
      window.addEventListener("WebComponentsReady", handleWebComponentsReady);
    }
  }

  function handleWebComponentsReady() {
    logger("[reveal] web components ready");
    reveal();
  }

  /*
   * Copyright 2019 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */
  var prefix = "pfe-";

  var PFElement = function (_HTMLElement) {
    inherits(PFElement, _HTMLElement);
    createClass(PFElement, [{
      key: "has_slot",
      value: function has_slot(name) {
        return this.querySelector("[slot='" + name + "']");
      }
    }, {
      key: "has_slot",
      value: function has_slot(name) {
        return this.querySelector("[slot='" + name + "']");
      }
    }, {
      key: "pfeType",
      get: function get$$1() {
        return this.getAttribute(prefix + "type");
      },
      set: function set$$1(value) {
        this.setAttribute(prefix + "type", value);
      }
    }], [{
      key: "create",
      value: function create(pfe) {
        window.customElements.define(pfe.tag, pfe);
      }
    }, {
      key: "debugLog",
      value: function debugLog() {
        var preference = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (preference !== null) {
          PFElement._debugLog = !!preference;
        }
        return PFElement._debugLog;
      }
    }, {
      key: "log",
      value: function log() {
        if (PFElement.debugLog()) {
          var _console;

          (_console = console).log.apply(_console, arguments);
        }
      }
    }, {
      key: "PfeTypes",
      get: function get$$1() {
        return {
          Container: "container",
          Content: "content",
          Combo: "combo"
        };
      }
    }]);

    function PFElement(pfeClass) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$type = _ref.type,
          type = _ref$type === undefined ? null : _ref$type,
          _ref$delayRender = _ref.delayRender,
          delayRender = _ref$delayRender === undefined ? false : _ref$delayRender;

      classCallCheck(this, PFElement);

      var _this = possibleConstructorReturn(this, (PFElement.__proto__ || Object.getPrototypeOf(PFElement)).call(this));

      _this.connected = false;
      _this._pfeClass = pfeClass;
      _this.tag = pfeClass.tag;
      _this.props = pfeClass.properties;
      _this._queue = [];
      _this.template = document.createElement("template");

      _this.attachShadow({ mode: "open" });

      if (type) {
        _this._queueAction({
          type: "setProperty",
          data: {
            name: "pfeType",
            value: type
          }
        });
      }

      if (!delayRender) {
        _this.render();
      }
      return _this;
    }

    createClass(PFElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.connected = true;

        if (window.ShadyCSS) {
          window.ShadyCSS.styleElement(this);
        }

        this.classList.add("PFElement");

        if (_typeof(this.props) === "object") {
          this._mapSchemaToProperties(this.tag, this.props);
        }

        if (this._queue.length) {
          this._processQueue();
        }
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.connected = false;
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldVal, newVal) {
        if (!this._pfeClass.cascadingAttributes) {
          return;
        }

        var cascadeTo = this._pfeClass.cascadingAttributes[attr];
        if (cascadeTo) {
          this._copyAttribute(attr, cascadeTo);
        }
      }
    }, {
      key: "_copyAttribute",
      value: function _copyAttribute(name, to) {
        var recipients = [].concat(toConsumableArray(this.querySelectorAll(to)), toConsumableArray(this.shadowRoot.querySelectorAll(to)));
        var value = this.getAttribute(name);
        var fname = value == null ? "removeAttribute" : "setAttribute";
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = recipients[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var node = _step.value;

            node[fname](name, value);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      // Map the imported properties json to real props on the element
      // @notice static getter of properties is built via tooling
      // to edit modify src/element.json

    }, {
      key: "_mapSchemaToProperties",
      value: function _mapSchemaToProperties(tag, properties) {
        var _this2 = this;

        // Loop over the properties provided by the schema
        Object.keys(properties).forEach(function (attr) {
          var data = properties[attr];
          // Set the attribute's property equal to the schema input
          _this2[attr] = data;
          // Initialize the value to null
          _this2[attr].value = null;

          // If the attribute exists on the host
          if (_this2.hasAttribute("" + prefix + attr)) {
            // Set property value based on the existing attribute
            _this2[attr].value = _this2.getAttribute("" + prefix + attr);
          }
          // Otherwise, look for a default and use that instead
          else if (data.default) {
              var dependency_exists = _this2._hasDependency(tag, data.options);
              var no_dependencies = !data.options || data.options && !data.options.dependencies.length;
              // If the dependency exists or there are no dependencies, set the default
              if (dependency_exists || no_dependencies) {
                _this2.setAttribute("" + prefix + attr, data.default);
                _this2[attr].value = data.default;
              }
            }
        });
      }

      // Test whether expected dependencies exist

    }, {
      key: "_hasDependency",
      value: function _hasDependency(tag, opts) {
        // Get any possible dependencies for this attribute to exist
        var dependencies = opts ? opts.dependencies : [];
        // Initialize the dependency return value
        var hasDependency = false;
        // Check that dependent item exists
        // Loop through the dependencies defined
        for (var i = 0; i < dependencies.length; i += 1) {
          var slot_exists = dependencies[i].type === "slot" && this.has_slot(tag + "--" + dependencies[i].id);
          var attribute_exists = dependencies[i].type === "attribute" && this.getAttribute("" + prefix + dependencies[i].id);
          // If the type is slot, check that it exists OR
          // if the type is an attribute, check if the attribute is defined
          if (slot_exists || attribute_exists) {
            // If the slot does exist, add the attribute with the default value
            hasDependency = true;
            // Exit the loop
            break;
          }
        }
        // Return a boolean if the dependency exists
        return hasDependency;
      }
    }, {
      key: "_queueAction",
      value: function _queueAction(action) {
        this._queue.push(action);
      }
    }, {
      key: "_processQueue",
      value: function _processQueue() {
        var _this3 = this;

        this._queue.forEach(function (action) {
          _this3["_" + action.type](action.data);
        });

        this._queue = [];
      }
    }, {
      key: "_setProperty",
      value: function _setProperty(_ref2) {
        var name = _ref2.name,
            value = _ref2.value;

        this[name] = value;
      }
    }, {
      key: "var",
      value: function _var(name) {
        return PFElement.var(name, this);
      }
    }, {
      key: "render",
      value: function render() {
        this.shadowRoot.innerHTML = "";
        this.template.innerHTML = this.html;

        if (window.ShadyCSS) {
          window.ShadyCSS.prepareTemplate(this.template, this.tag);
        }

        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
      }
    }, {
      key: "log",
      value: function log() {
        for (var _len = arguments.length, msgs = Array(_len), _key = 0; _key < _len; _key++) {
          msgs[_key] = arguments[_key];
        }

        PFElement.log.apply(PFElement, ["[" + this.tag + "]"].concat(msgs));
      }
    }], [{
      key: "var",
      value: function _var(name) {
        var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

        return window.getComputedStyle(element).getPropertyValue(name).trim();
      }
    }]);
    return PFElement;
  }(HTMLElement);

  autoReveal(PFElement.log);

  return PFElement;

})));
//# sourceMappingURL=pfelement.umd.js.map

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../pfelement/pfelement.umd')) :
  typeof define === 'function' && define.amd ? define(['../pfelement/pfelement.umd'], factory) :
  (global.PfeAccordion = factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /*
   * Copyright 2019 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, "findIndex", {
      value: function value(predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== "function") {
          throw new TypeError("predicate must be a function");
        }

        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];

        // 5. Let k be 0.
        var k = 0;

        // 6. Repeat, while k < len
        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return k.
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return k;
          }
          // e. Increase k by 1.
          k++;
        }

        // 7. Return -1.
        return -1;
      }
    });
  }

  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  var PfeAccordion = function (_PFElement) {
    inherits(PfeAccordion, _PFElement);
    createClass(PfeAccordion, [{
      key: 'html',
      get: function get$$1() {
        return '<style>:host {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  color: var(--pfe-broadcasted--color--text); }\n\n:host([on="dark"]) {\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--text--on-dark, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--ui-link--on-dark, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--ui-link--on-dark--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--ui-link--on-dark--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--ui-link--on-dark--focus, #cce6ff); }\n\n:host([on="light"]) {\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--text, #333);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--ui-link, #06c);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--ui-link--visited, rebeccapurple);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--ui-link--hover, #003366);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--ui-link--focus, #003366); }</style>\n<slot></slot>';
      }
    }, {
      key: 'styleUrl',
      get: function get$$1() {
        return "pfe-accordion.scss";
      }
    }, {
      key: 'templateUrl',
      get: function get$$1() {
        return "pfe-accordion.html";
      }
    }], [{
      key: 'tag',
      get: function get$$1() {
        return "pfe-accordion";
      }
    }, {
      key: 'observedAttributes',
      get: function get$$1() {
        return ["theme", "color", "on"];
      }
    }, {
      key: 'cascadingAttributes',
      get: function get$$1() {
        return {
          color: "pfe-accordion-header, pfe-accordion-panel",
          on: "pfe-accordion-header, pfe-accordion-panel"
        };
      }
    }]);

    function PfeAccordion() {
      classCallCheck(this, PfeAccordion);
      return possibleConstructorReturn(this, (PfeAccordion.__proto__ || Object.getPrototypeOf(PfeAccordion)).call(this, PfeAccordion));
    }

    createClass(PfeAccordion, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(PfeAccordion.prototype.__proto__ || Object.getPrototypeOf(PfeAccordion.prototype), 'connectedCallback', this).call(this);

        this.setAttribute("role", "presentation");
        this.setAttribute("defined", "");

        this.addEventListener(PfeAccordion.tag + ':change', this._changeHandler);
        this.addEventListener("keydown", this._keydownHandler);

        Promise.all([customElements.whenDefined(PfeAccordionHeader.tag), customElements.whenDefined(PfeAccordionPanel.tag)]).then(this._linkPanels());
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.removeEventListener(PfeAccordion.tag + ':change', this._changeHandler);
        this.removeEventListener("keydown", this._keydownHandler);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldVal, newVal) {
        get(PfeAccordion.prototype.__proto__ || Object.getPrototypeOf(PfeAccordion.prototype), 'attributeChangedCallback', this).call(this, attr, oldVal, newVal);

        if (attr === "color") {
          var headers = this.querySelectorAll(PfeAccordionHeader.tag);

          if (newVal === "striped") {
            [].concat(toConsumableArray(headers)).forEach(function (header, index) {
              var headerClass = index % 2 ? "even" : "odd";
              header.classList.add(headerClass);
            });
          } else {
            [].concat(toConsumableArray(headers)).forEach(function (header, index) {
              header.classList.remove("even", "odd");
            });
          }
        }
      }
    }, {
      key: 'toggle',
      value: function toggle(index) {
        var headers = this._allHeaders();
        var panels = this._allPanels();
        var header = headers[index];
        var panel = panels[index];

        if (!header || !panel) {
          return;
        }

        if (!header.expanded) {
          this._expandHeader(header);
          this._expandPanel(panel);
        } else {
          this._collapseHeader(header);
          this._collapsePanel(panel);
        }
      }
    }, {
      key: 'expand',
      value: function expand(index) {
        var headers = this._allHeaders();
        var panels = this._allPanels();
        var header = headers[index];
        var panel = panels[index];

        if (!header || !panel) {
          return;
        }

        this._expandHeader(header);
        this._expandPanel(panel);
      }
    }, {
      key: 'expandAll',
      value: function expandAll() {
        var _this2 = this;

        var headers = this._allHeaders();
        var panels = this._allPanels();

        headers.forEach(function (header) {
          return _this2._expandHeader(header);
        });
        panels.forEach(function (panel) {
          return _this2._expandPanel(panel);
        });
      }
    }, {
      key: 'collapse',
      value: function collapse(index) {
        var headers = this._allHeaders();
        var panels = this._allPanels();
        var header = headers[index];
        var panel = panels[index];

        if (!header || !panel) {
          return;
        }

        this._collapseHeader(header);
        this._collapsePanel(panel);
      }
    }, {
      key: 'collapseAll',
      value: function collapseAll() {
        var _this3 = this;

        var headers = this._allHeaders();
        var panels = this._allPanels();

        headers.forEach(function (header) {
          return _this3._collapseHeader(header);
        });
        panels.forEach(function (panel) {
          return _this3._collapsePanel(panel);
        });
      }
    }, {
      key: '_linkPanels',
      value: function _linkPanels() {
        var _this4 = this;

        var headers = this._allHeaders();
        headers.forEach(function (header) {
          var panel = _this4._panelForHeader(header);

          header.setAttribute("aria-controls", panel.pfeId);
          panel.setAttribute("aria-labelledby", header.pfeId);
        });
      }
    }, {
      key: '_changeHandler',
      value: function _changeHandler(evt) {
        if (this.classList.contains("animating")) {
          return;
        }

        var header = evt.target;
        var panel = evt.target.nextElementSibling;

        if (evt.detail.expanded) {
          this._expandHeader(header);
          this._expandPanel(panel);
        } else {
          this._collapseHeader(header);
          this._collapsePanel(panel);
        }
      }
    }, {
      key: '_toggle',
      value: function _toggle(header, panel) {}
    }, {
      key: '_expandHeader',
      value: function _expandHeader(header) {
        header.expanded = true;
      }
    }, {
      key: '_expandPanel',
      value: function _expandPanel(panel) {
        if (panel.expanded) {
          return;
        }

        panel.expanded = true;

        var height = panel.getBoundingClientRect().height;
        this._animate(panel, 0, height);
      }
    }, {
      key: '_collapseHeader',
      value: function _collapseHeader(header) {
        header.expanded = false;
      }
    }, {
      key: '_collapsePanel',
      value: function _collapsePanel(panel) {
        if (!panel.expanded) {
          return;
        }

        var height = panel.getBoundingClientRect().height;
        panel.expanded = false;

        this._animate(panel, height, 0);
      }
    }, {
      key: '_animate',
      value: function _animate(panel, start, end) {
        var _this5 = this;

        panel.classList.add("animating");
        panel.style.height = start + 'px';

        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            panel.style.height = end + 'px';
            panel.classList.add("animating");
            panel.addEventListener("transitionend", _this5._transitionEndHandler);
          });
        });
      }
    }, {
      key: '_keydownHandler',
      value: function _keydownHandler(evt) {
        var currentHeader = evt.target;

        if (!this._isHeader(currentHeader)) {
          return;
        }

        var newHeader = void 0;

        switch (evt.key) {
          case "ArrowDown":
          case "Down":
          case "ArrowRight":
          case "Right":
            newHeader = this._nextHeader();
            break;
          case "ArrowUp":
          case "Up":
          case "ArrowLeft":
          case "Left":
            newHeader = this._previousHeader();
            break;
          case "Home":
            newHeader = this._firstHeader();
            break;
          case "End":
            newHeader = this._lastHeader();
            break;
          default:
            return;
        }

        newHeader.shadowRoot.querySelector("button").focus();
      }
    }, {
      key: '_transitionEndHandler',
      value: function _transitionEndHandler(evt) {
        evt.target.style.height = "";
        evt.target.classList.remove("animating");
        evt.target.removeEventListener("transitionend", this._transitionEndHandler);
      }
    }, {
      key: '_allHeaders',
      value: function _allHeaders() {
        return [].concat(toConsumableArray(this.querySelectorAll(PfeAccordionHeader.tag)));
      }
    }, {
      key: '_allPanels',
      value: function _allPanels() {
        return [].concat(toConsumableArray(this.querySelectorAll(PfeAccordionPanel.tag)));
      }
    }, {
      key: '_panelForHeader',
      value: function _panelForHeader(header) {
        var next = header.nextElementSibling;

        if (next.tagName.toLowerCase() !== PfeAccordionPanel.tag) {
          console.error(PfeAccordion.tag + ': Sibling element to a header needs to be a panel');
          return;
        }

        return next;
      }
    }, {
      key: '_previousHeader',
      value: function _previousHeader() {
        var headers = this._allHeaders();
        var newIndex = headers.findIndex(function (header) {
          return header === document.activeElement;
        }) - 1;
        return headers[(newIndex + headers.length) % headers.length];
      }
    }, {
      key: '_nextHeader',
      value: function _nextHeader() {
        var headers = this._allHeaders();
        var newIndex = headers.findIndex(function (header) {
          return header === document.activeElement;
        }) + 1;
        return headers[newIndex % headers.length];
      }
    }, {
      key: '_firstHeader',
      value: function _firstHeader() {
        var headers = this._allHeaders();
        return headers[0];
      }
    }, {
      key: '_lastHeader',
      value: function _lastHeader() {
        var headers = this._allHeaders();
        return headers[headers.length - 1];
      }
    }, {
      key: '_isHeader',
      value: function _isHeader(element) {
        return element.tagName.toLowerCase() === PfeAccordionHeader.tag;
      }
    }]);
    return PfeAccordion;
  }(PFElement);

  var PfeAccordionHeader = function (_PFElement2) {
    inherits(PfeAccordionHeader, _PFElement2);
    createClass(PfeAccordionHeader, [{
      key: 'html',
      get: function get$$1() {
        return '<style>:host {\n  display: block; }\n  :host > * {\n    margin: 0; }\n  :host button {\n    --pfe-accordion--main:         transparent;\n    --pfe-accordion--aux:          var(--pfe-theme--color--surface--lightest--text, #333);\n    --pfe-accordion--BorderLeft:  var(--pfe-theme--surface--border-width-heavy, ) var(--pfe-theme--surface--border-style, solid) transparent;\n    --pfe-accordion--BorderRight: var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) transparent;\n    --pfe-accordion--BorderBottom: var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border--lightest, #ececec);\n    --pfe-accordion--BorderLeftColor--focus: var(--pfe-theme--color--surface--lightest--link, #06c);\n    -webkit-appearance: button;\n    margin: 0;\n    width: 100%;\n    height: auto;\n    font-family: inherit;\n    font-weight: var(--pfe-theme--font-weight--bold, 700);\n    text-align: left;\n    cursor: pointer;\n    z-index: 1;\n    position: relative;\n    font-size: calc(var(--pfe-theme--font-size, 16px) * 1.1);\n    line-height: var(--pfe-theme--line-height, 1.5);\n    color: var(--pfe-accordion--aux);\n    background-color: var(--pfe-accordion--main);\n    border-left: var(--pfe-accordion--BorderLeft);\n    border-right: var(--pfe-accordion--BorderRight);\n    border-bottom: var(--pfe-accordion--BorderBottom);\n    border-top: 0;\n    padding: var(--pfe-theme--container-spacer, 1rem) 50px var(--pfe-theme--container-spacer, 1rem) calc(var(--pfe-theme--container-spacer, 1rem) * 1.5); }\n    :host button:hover {\n      outline: none;\n      border-left-color: var(--pfe-accordion--BorderLeftColor--focus);\n      z-index: 2; }\n    :host button:focus {\n      outline: none;\n      z-index: 2;\n      text-decoration: underline;\n      text-decoration-color: var(--pfe-theme--color--surface--border--darker, #c6c6c6); }\n    :host button::-moz-focus-inner {\n      border: 0; }\n    :host button[aria-expanded="true"] {\n      --pfe-accordion--main:              var(--pfe-theme--color--surface--lightest, #fff);\n      --pfe-accordion--aux:               var(--pfe-theme--color--surface--lightest--text, #333);\n      --pfe-accordion--focus:             var(--pfe-theme--color--surface--lightest--link, #06c);\n      --pfe-accordion--BorderLeft:        var(--pfe-theme--surface--border-width-heavy, ) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--lightest--link, #06c);\n      --pfe-accordion--BorderRight:       var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border--lightest, #ececec);\n      position: relative;\n      display: block;\n      border-bottom: 0; }\n      :host button[aria-expanded="true"]::after {\n        content: "";\n        position: absolute;\n        top: calc((var(--pfe-theme--container-spacer, 1rem) * 0.75) + 0.55em);\n        display: block;\n        border-style: var(--pfe-theme--surface--border-style, solid);\n        height: 0.4em;\n        width: 0.4em;\n        text-align: center;\n        transition: transform 0.15s;\n        border-width: 0.1em 0.1em 0 0;\n        border-bottom: 0;\n        transform: rotate(-45deg);\n        right: calc(var(--pfe-theme--container-spacer, 1rem) * 1.5); }\n    :host button[aria-expanded="false"]::after {\n      content: "";\n      position: absolute;\n      top: calc((var(--pfe-theme--container-spacer, 1rem) * 0.75) + 0.55em);\n      display: block;\n      border-style: var(--pfe-theme--surface--border-style, solid);\n      height: 0.4em;\n      width: 0.4em;\n      text-align: center;\n      transition: transform 0.15s;\n      border-width: 0 0.1em 0.1em 0;\n      transform: rotate(45deg);\n      right: calc(var(--pfe-theme--container-spacer, 1rem) * 1.5); }\n\n:host(:first-child) button {\n  border-top: var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border--lightest, #ececec); }\n\n:host(:last-of-type) button[aria-expanded="false"] {\n  border-bottom: var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border--lightest, #ececec); }\n\n:host(.animating) {\n  transition: transform 0.3s var(--pfe-theme--animation-timing, cubic-bezier(0.465, 0.183, 0.153, 0.946)); }\n\n:host([on="dark"]) button {\n  --pfe-accordion--main:         transparent;\n  --pfe-accordion--aux:          var(--pfe-theme--color--surface--darkest--text, #fff);\n  --pfe-accordion--BorderLeftColor--focus: var(--pfe-theme--color--surface--lightest, #fff); }\n  :host([on="dark"]) button[aria-expanded="true"] {\n    --pfe-accordion--main:         var(--pfe-theme--color--surface--darker, #464646);\n    --pfe-accordion--aux:          var(--pfe-theme--color--surface--darkest--text, #fff);\n    --pfe-accordion--BorderLeft:   var(--pfe-theme--surface--border-width-heavy, ) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border-darkest, );\n    --pfe-accordion--BorderRight:  var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border-darkest, );\n    --pfe-accordion--BorderLeftColor--focus: var(--pfe-theme--color--surface--lightest, #fff); }</style>\n<button aria-expanded="false" role="tab"></button>';
      }
    }, {
      key: 'styleUrl',
      get: function get$$1() {
        return "pfe-accordion-header.scss";
      }
    }, {
      key: 'templateUrl',
      get: function get$$1() {
        return "pfe-accordion-header.html";
      }
    }, {
      key: 'pfeId',
      get: function get$$1() {
        return this.getAttribute("pfe-id");
      },
      set: function set$$1(id) {
        if (!id) {
          return;
        }

        this.setAttribute("pfe-id", id);
      }
    }], [{
      key: 'tag',
      get: function get$$1() {
        return "pfe-accordion-header";
      }
    }, {
      key: 'observedAttributes',
      get: function get$$1() {
        return ["aria-expanded"];
      }
    }]);

    function PfeAccordionHeader() {
      classCallCheck(this, PfeAccordionHeader);

      var _this6 = possibleConstructorReturn(this, (PfeAccordionHeader.__proto__ || Object.getPrototypeOf(PfeAccordionHeader)).call(this, PfeAccordionHeader));

      _this6._clickHandler = _this6._clickHandler.bind(_this6);
      return _this6;
    }

    createClass(PfeAccordionHeader, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(PfeAccordionHeader.prototype.__proto__ || Object.getPrototypeOf(PfeAccordionHeader.prototype), 'connectedCallback', this).call(this);

        if (!this.hasAttribute("role")) {
          this.setAttribute("role", "header");
        }

        if (!this.pfeId) {
          this.pfeId = PfeAccordionHeader.tag + '-' + generateId();
        }

        this.button = this.shadowRoot.querySelector("button");

        var child = this.children[0];
        var isHeaderTag = false;

        if (child) {
          switch (child.tagName) {
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
              isHeaderTag = true;
              break;
          }

          var wrapperTag = document.createElement(child.tagName);
          this.button.innerText = child.innerText;

          wrapperTag.appendChild(this.button);
          this.shadowRoot.appendChild(wrapperTag);
        } else {
          this.button.innerText = this.textContent.trim();
        }

        if (!isHeaderTag) {
          console.warn(PfeAccordionHeader.tag + ': The first child in the light DOM must be a Header level tag (h1, h2, h3, h4, h5, or h6)');
        }

        this.addEventListener("click", this._clickHandler);
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.removeEventListener("click", this._clickHandler);
      }
    }, {
      key: '_clickHandler',
      value: function _clickHandler(event) {
        this.dispatchEvent(new CustomEvent(PfeAccordion.tag + ':change', {
          detail: { expanded: !this.expanded },
          bubbles: true
        }));
      }
    }, {
      key: 'expanded',
      get: function get$$1() {
        return this.hasAttribute("aria-expanded");
      },
      set: function set$$1(val) {
        val = Boolean(val);

        if (val) {
          this.setAttribute("aria-expanded", true);
          this.button.setAttribute("aria-expanded", true);
        } else {
          this.removeAttribute("aria-expanded");
          this.button.setAttribute("aria-expanded", false);
        }
      }
    }]);
    return PfeAccordionHeader;
  }(PFElement);

  var PfeAccordionPanel = function (_PFElement3) {
    inherits(PfeAccordionPanel, _PFElement3);
    createClass(PfeAccordionPanel, [{
      key: 'html',
      get: function get$$1() {
        return '<style>:host {\n  display: none;\n  overflow: hidden;\n  will-change: height;\n  border-color: transparent; }\n\n:host([expanded]) {\n  display: block;\n  position: relative;\n  border-right: var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) transparent;\n  border-left: var(--pfe-theme--surface--border-width--heavy, 3px) var(--pfe-theme--surface--border-style, solid) transparent;\n  box-shadow: 0 5px var(--pfe-theme--surface--border-width--heavy, 3px) rgba(140, 140, 140, 0.35);\n  border-left-color: var(--pfe-theme--color--surface--lightest--link, #06c);\n  background-color: var(--pfe-theme--color--surface--lightest, #fff);\n  border-right-color: var(--pfe-theme--color--surface--border--lightest, #ececec);\n  border-bottom: var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) var(--pfe-theme--color--surface--border--lightest, #ececec); }\n\n:host([on="dark"][expanded]) {\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--text--on-dark, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--ui-link--on-dark, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--ui-link--on-dark--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--ui-link--on-dark--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--ui-link--on-dark--focus, #cce6ff);\n  border-right: var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) transparent;\n  border-left: var(--pfe-theme--surface--border-width--heavy, 3px) var(--pfe-theme--surface--border-style, solid) transparent;\n  box-shadow: none;\n  background-color: var(--pfe-theme--color--surface--darker, #464646);\n  border-left-color: var(--pfe-theme--color--surface--darkest--text, #fff);\n  border-right-color: var(--pfe-theme--color--surface--darkest--text, #fff); }\n\n:host(.animating) {\n  display: block;\n  transition: height 0.3s ease-in-out; }\n\n.container {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 3em var(--pfe-theme--container-spacer, 1rem) calc(var(--pfe-theme--container-spacer, 1rem) * 1.5); }\n\n:host(:last-of-type[expanded]) {\n  margin-bottom: 0; }</style>\n<div tabindex="-1" role="tabpanel">\n  <div class="container">\n    <slot></slot>\n  </div>\n</div>';
      }
    }, {
      key: 'styleUrl',
      get: function get$$1() {
        return "pfe-accordion-panel.scss";
      }
    }, {
      key: 'templateUrl',
      get: function get$$1() {
        return "pfe-accordion-panel.html";
      }
    }, {
      key: 'pfeId',
      get: function get$$1() {
        return this.getAttribute("pfe-id");
      },
      set: function set$$1(id) {
        if (!id) {
          return;
        }

        this.setAttribute("pfe-id", id);
      }
    }], [{
      key: 'tag',
      get: function get$$1() {
        return "pfe-accordion-panel";
      }
    }]);

    function PfeAccordionPanel() {
      classCallCheck(this, PfeAccordionPanel);
      return possibleConstructorReturn(this, (PfeAccordionPanel.__proto__ || Object.getPrototypeOf(PfeAccordionPanel)).call(this, PfeAccordionPanel));
    }

    createClass(PfeAccordionPanel, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(PfeAccordionPanel.prototype.__proto__ || Object.getPrototypeOf(PfeAccordionPanel.prototype), 'connectedCallback', this).call(this);

        if (!this.hasAttribute("role")) {
          this.setAttribute("role", "region");
        }

        if (!this.pfeId) {
          this.pfeId = PfeAccordionPanel.tag + '-' + generateId();
        }
      }
    }, {
      key: 'expanded',
      get: function get$$1() {
        return this.hasAttribute("expanded");
      },
      set: function set$$1(val) {
        var value = Boolean(val);

        if (value) {
          this.setAttribute("expanded", "");
        } else {
          this.removeAttribute("expanded");
        }
      }
    }]);
    return PfeAccordionPanel;
  }(PFElement);

  PFElement.create(PfeAccordionHeader);
  PFElement.create(PfeAccordionPanel);
  PFElement.create(PfeAccordion);

  return PfeAccordion;

})));
//# sourceMappingURL=pfe-accordion.umd.js.map

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../pfelement/pfelement.umd')) :
  typeof define === 'function' && define.amd ? define(['../pfelement/pfelement.umd'], factory) :
  (global.PfeAutocomplete = factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /*
   * Copyright 2019 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  var KEYCODE = {
    ENTER: 13,
    DOWN: 40,
    UP: 38,
    ESC: 27
  };

  // use this variable to debounce api call when user types very fast
  var throttle = false;

  var PfeAutocomplete = function (_PFElement) {
    inherits(PfeAutocomplete, _PFElement);
    createClass(PfeAutocomplete, [{
      key: "html",
      get: function get$$1() {
        return "<style>:host {\n  display: block;\n  position: relative; }\n\n.input-box-wrapper {\n  position: relative;\n  display: flex; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n#input-box-wrapper ::slotted(input) {\n  width: 100%;\n  flex: 1;\n  box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.075) !important;\n  padding-left: 10px;\n  padding-right: 30px;\n  border-radius: 0;\n  background-color: #fff;\n  border: 1px solid var(--pfe-theme--color--surface--border, #dfdfdf);\n  font-size: 16px;\n  \n  height: 40px;\n  transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;\n  opacity: 1;\n  outline: 0; }\n\n#input-box-wrapper ::slotted(input:disabled),\nbutton:disabled {\n  cursor: not-allowed;\n  background-color: transparent;\n  color: #ccc;\n  opacity: 0.5; }\n\n#input-box-wrapper button:focus,\n#input-box-wrapper ::slotted(input:focus) {\n  border-color: #66afe9;\n  outline: 0; }\n\n#input-box-wrapper ::slotted(input),\nbutton {\n  -webkit-appearance: none; }\n\n#input-box-wrapper ::slotted([type=\"search\"]::-ms-clear) {\n  display: none; }\n\n#input-box-wrapper ::slotted(input[type=\"search\"]::-webkit-search-cancel-button),\n#input-box-wrapper ::slotted(input[type=\"search\"]::-webkit-search-decoration) {\n  -webkit-appearance: none; }\n\nbutton {\n  color: #cccccc;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  padding: 0px;\n  margin: 0px;\n  cursor: pointer; }\n\nbutton.clear-search {\n  right: 30px;\n  width: 20px;\n  margin: 2px 1px;\n  background-color: #fff; }\n\nbutton.clear-search svg {\n  width: 12px;\n  stroke: #ccc; }\n\nbutton.clear-search:hover svg,\nbutton.clear-search:focus svg {\n  opacity: 1;\n  stroke: #06c; }\n\nbutton[disabled].clear-search:hover svg,\nbutton[disabled].clear-search:focus svg {\n  stroke: #ccc; }\n\nbutton.search-button {\n  right: 1px;\n  width: 30px; }\n\nbutton.search-button svg {\n  fill: #06c;\n  width: 16px; }\n\nbutton.search-button:hover svg,\nbutton.search-button:focus svg {\n  fill: #004080; }\n\nbutton.clear-search:hover {\n  color: #ccc; }\n\nbutton.search-button:disabled svg {\n  fill: #ccc; }\n\n.loading {\n  position: absolute;\n  width: 30px;\n  right: 52px;\n  top: 0px;\n  bottom: 0px; }\n\n.loading svg {\n  width: 26px;\n  padding-top: 7px; }</style>\n<div id=\"input-box-wrapper\">\n    <slot></slot>\n\n    <span class=\"loading\" aria-hidden=\"true\" hidden>\n        <svg viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\">\n          <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\n          <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n          C22.32,8.481,24.301,9.057,26.013,10.047z\">\n          <animateTransform attributeType=\"xml\"\n            attributeName=\"transform\"\n            type=\"rotate\"\n            from=\"0 20 20\"\n            to=\"360 20 20\"\n            dur=\"0.5s\"\n            repeatCount=\"indefinite\"/>\n          </path>\n        </svg>\n    </span>\n\n    <button class=\"clear-search\" type=\"button\" aria-label=\"clear search query\" hidden>\n      <svg viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\">\n        <line x1=\"5\" y1=\"5\" x2=\"35\" y2=\"35\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"></line>\n        <line x1=\"35\" y1=\"5\" x2=\"5\" y2=\"35\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"></line>\n      </svg>\n    </button>\n\n    <button class=\"search-button\" type=\"button\" aria-label=\"Search\" disabled>\n      <svg viewBox=\"0 0 512 512\">\n        <path d=\"M256.233,5.756c-71.07,15.793-141.44,87.863-155.834,159.233c-11.495,57.076,0.3,111.153,27.688,154.335L6.339,441.172\n      c-8.596,8.596-8.596,22.391,0,30.987l33.286,33.286c8.596,8.596,22.391,8.596,30.987,0L192.26,383.796\n      c43.282,27.688,97.559,39.683,154.734,28.188c79.167-15.893,142.04-77.067,159.632-155.934\n      C540.212,104.314,407.968-27.93,256.233,5.756z M435.857,208.37c0,72.869-59.075,131.944-131.944,131.944\n      S171.969,281.239,171.969,208.37S231.043,76.426,303.913,76.426S435.857,135.501,435.857,208.37z\"/>\n      </svg>\n    </button>\n</div>\n<pfe-search-droplist id=\"dropdown\"></pfe-search-droplist>";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "pfe-autocomplete.html";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "pfe-autocomplete.scss";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "pfe-autocomplete";
      }
    }]);

    function PfeAutocomplete() {
      classCallCheck(this, PfeAutocomplete);
      return possibleConstructorReturn(this, (PfeAutocomplete.__proto__ || Object.getPrototypeOf(PfeAutocomplete)).call(this, PfeAutocomplete));
    }

    createClass(PfeAutocomplete, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        get(PfeAutocomplete.prototype.__proto__ || Object.getPrototypeOf(PfeAutocomplete.prototype), "connectedCallback", this).call(this);

        this.loading = false;
        this.debounce = this.debounce || 300;

        // input box
        var slotNodes = this.shadowRoot.querySelector("slot").assignedNodes();
        var slotElems = slotNodes.filter(function (n) {
          return n.nodeType === Node.ELEMENT_NODE;
        });
        this._input = slotElems[0];
        this._input.addEventListener("input", this._inputChanged.bind(this));
        this._input.addEventListener("blur", this._closeDroplist.bind(this));
        this._input.setAttribute("role", "combobox");
        this._input.setAttribute("aria-label", "Search");
        this._input.setAttribute("aria-autocomplete", "both");
        this._input.setAttribute("aria-haspopup", "true");
        this._input.setAttribute("type", "search");
        this._input.setAttribute("autocomplete", "off");
        this._input.setAttribute("autocorrect", "off");
        this._input.setAttribute("autocapitalize", "off");
        this._input.setAttribute("spellcheck", "false");

        // clear button
        this._clearBtn = this.shadowRoot.querySelector(".clear-search");
        this._clearBtn.addEventListener("click", this._clear.bind(this));

        // search button
        this._searchBtn = this.shadowRoot.querySelector(".search-button");
        this._searchBtn.addEventListener("click", this._search.bind(this));

        this._dropdown = this.shadowRoot.querySelector("#dropdown");
        this._dropdown.data = [];

        this.activeIndex = null;

        this.addEventListener("keyup", this._inputKeyUp.bind(this));

        // these two events, fire search
        this.addEventListener("pfe-search-event", this._closeDroplist.bind(this));
        this.addEventListener("pfe-option-selected", this._optionSelected.bind(this));
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.removeEventListener("keyup", this._inputKeyUp);
        this.removeEventListener("pfe-search-event", this._closeDroplist);
        this.removeEventListener("pfe-option-selected", this._optionSelected);
        this._input.removeEventListener("input", this._inputChanged);
        this._input.removeEventListener("blur", this._closeDroplist);
        this._clearBtn.removeEventListener("click", this._clear);
        this._searchBtn.removeEventListener("click", this._search);
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldVal, newVal) {
        get(PfeAutocomplete.prototype.__proto__ || Object.getPrototypeOf(PfeAutocomplete.prototype), "attributeChangedCallback", this).call(this);

        var slotNodes = this.shadowRoot.querySelector("slot").assignedNodes();
        var slotElems = slotNodes.filter(function (n) {
          return n.nodeType === Node.ELEMENT_NODE;
        });
        var _input = slotElems[0];

        var _clearBtn = this.shadowRoot.querySelector(".clear-search");
        var _searchBtn = this.shadowRoot.querySelector(".search-button");

        switch (attr) {
          case "loading":
            if (!this.loading || _input.value === "") {
              this.shadowRoot.querySelector(".loading").setAttribute("hidden", "");
            } else {
              this.shadowRoot.querySelector(".loading").removeAttribute("hidden");
            }
            break;

          case "init-value":
            if (this["init-value"] !== newVal) {
              // set inputbox and buttons in the inner component
              _input.value = newVal;
              if (newVal !== "" && !this.isDisabled) {
                _searchBtn.removeAttribute("disabled");
                _clearBtn.removeAttribute("hidden");
              } else {
                _searchBtn.setAttribute("disabled", "");
                _clearBtn.setAttribute("hidden", "");
              }
            }
            break;

          case "is-disabled":
            if (this.isDisabled) {
              _clearBtn.setAttribute("disabled", "");
              _searchBtn.setAttribute("disabled", "");
              _input.setAttribute("disabled", "");
            } else {
              _clearBtn.removeAttribute("disabled");
              _searchBtn.removeAttribute("disabled");
              _input.removeAttribute("disabled");
            }
            break;
        }
      }
    }, {
      key: "_inputChanged",
      value: function _inputChanged() {
        var _this2 = this;

        if (this._input.value === "") {
          this._searchBtn.setAttribute("disabled", "");
          this._clearBtn.setAttribute("hidden", "");

          this._reset();
          return;
        } else {
          if (!this._input.hasAttribute("disabled")) {
            this._searchBtn.removeAttribute("disabled");
          }
          this._clearBtn.removeAttribute("hidden");
        }

        if (throttle === false) {
          throttle = true;

          window.setTimeout(function () {
            _this2._sendAutocompleteRequest(_this2._input.value);
            throttle = false;
          }, this.debounce);
        }
      }
    }, {
      key: "_clear",
      value: function _clear() {
        this._input.value = "";
        this._clearBtn.setAttribute("hidden", "");
        this._searchBtn.setAttribute("disabled", "");
        this._input.focus();
      }
    }, {
      key: "_search",
      value: function _search() {
        this._doSearch(this._input.value);
      }
    }, {
      key: "_closeDroplist",
      value: function _closeDroplist() {
        this._dropdown.open = null;
        this._dropdown.removeAttribute("active-index");
      }
    }, {
      key: "_openDroplist",
      value: function _openDroplist() {
        this.activeIndex = null;
        this._dropdown.setAttribute("open", true);
        this._dropdown.setAttribute("active-index", null);
      }
    }, {
      key: "_optionSelected",
      value: function _optionSelected(e) {
        var selectedValue = e.detail.optionValue;

        // update input box with selected value from options list
        this._input.value = selectedValue;

        // send search request
        this._doSearch(selectedValue);
      }
    }, {
      key: "_doSearch",
      value: function _doSearch(searchQuery) {
        this.dispatchEvent(new CustomEvent("pfe-search-event", {
          detail: { searchValue: searchQuery },
          bubbles: true,
          composed: true
        }));
        this._reset();
        this.selectedValue = searchQuery;
      }
    }, {
      key: "_sendAutocompleteRequest",
      value: function _sendAutocompleteRequest(input) {
        if (!this.autocompleteRequest) return;

        this.autocompleteRequest({ query: input }, this._autocompleteCallback.bind(this));
      }
    }, {
      key: "_autocompleteCallback",
      value: function _autocompleteCallback(response) {
        this._dropdown.data = response;
        this._dropdown.reflow = true;
        response.length !== 0 ? this._openDroplist() : this._closeDroplist();
      }
    }, {
      key: "_reset",
      value: function _reset() {
        debugger;
        this._dropdown.activeIndex = null;
        this._input.setAttribute("aria-activedescendant", "");
        this._dropdown.data = [];
        this._closeDroplist();
      }
    }, {
      key: "_activeOption",
      value: function _activeOption(activeIndex) {
        if (activeIndex === null || activeIndex === "null") return;
        return this._dropdown.shadowRoot.querySelector("li:nth-child(" + (parseInt(activeIndex, 10) + 1) + ")").innerHTML;
      }
    }, {
      key: "_inputKeyUp",
      value: function _inputKeyUp(e) {
        var key = e.keyCode;

        if (this._dropdown.data.length === 0 && key !== KEYCODE.DOWN && key !== KEYCODE.UP && key !== KEYCODE.ENTER && key !== KEYCODE.ESC) return;

        var activeIndex = this._dropdown.activeIndex;
        var optionsLength = this._dropdown.data.length;

        if (key == KEYCODE.ESC) {
          this._closeDroplist();
        } else if (key === KEYCODE.UP) {
          if (!this._dropdown.open) {
            return;
          }

          activeIndex = activeIndex === null || activeIndex === "null" ? optionsLength : parseInt(activeIndex, 10);

          activeIndex -= 1;

          if (activeIndex < 0) {
            activeIndex = optionsLength - 1;
          }

          this._input.value = this._activeOption(activeIndex);
        } else if (key === KEYCODE.DOWN) {
          if (!this._dropdown.open) {
            return;
          }

          activeIndex = activeIndex === null || activeIndex === "null" ? -1 : parseInt(activeIndex, 10);
          activeIndex += 1;

          if (activeIndex > optionsLength - 1) {
            activeIndex = 0;
          }

          this._input.value = this._activeOption(activeIndex);
        } else if (key === KEYCODE.ENTER) {
          var selectedValue = this._input.value;
          this._doSearch(selectedValue);
          return;
        }

        if (activeIndex !== null && activeIndex !== "null") {
          this._input.setAttribute("aria-activedescendant", "option-" + activeIndex);
        } else {
          this._input.setAttribute("aria-activedescendant", "");
        }

        this.activeIndex = activeIndex;
        this._dropdown.activeIndex = activeIndex;
      }
    }, {
      key: "selectedValue",
      get: function get$$1() {
        return this.getAttribute("selected-value");
      },
      set: function set$$1(val) {
        this.setAttribute("selected-value", val);
      }
    }, {
      key: "isDisabled",
      set: function set$$1(value) {
        if (value) {
          this.setAttribute("is-disabled", "");
        } else {
          this.removeAttribute("is-disabled");
        }
      },
      get: function get$$1() {
        return this.hasAttribute("is-disabled");
      }
    }, {
      key: "loading",
      set: function set$$1(value) {
        var loading = Boolean(value);
        if (loading) {
          this.setAttribute("loading", "");
        } else {
          this.removeAttribute("loading");
        }
      },
      get: function get$$1() {
        return this.hasAttribute("loading");
      }
    }, {
      key: "initValue",
      get: function get$$1() {
        return this.getAttribute("init-value");
      },
      set: function set$$1(val) {
        this.setAttribute("init-value", val);
      }
    }, {
      key: "debounce",
      get: function get$$1() {
        return this.getAttribute("debounce");
      },
      set: function set$$1(val) {
        this.setAttribute("debounce", val);
      }
    }], [{
      key: "observedAttributes",
      get: function get$$1() {
        return ["init-value", "loading", "is-disabled"];
      }
    }]);
    return PfeAutocomplete;
  }(PFElement);

  /*
  * - Attributes ------------------------------------
  * open               | Set when the combo box dropdown is open
  * active-index       | Set selected option
  * reflow             | Re-renders the dropdown

  * - Events ----------------------------------------
  * pfe-option-selected | Fires when an option is selected.
    event.detailes.selectedValue contains the selected value.
  */


  var PfeSearchDroplist = function (_PFElement2) {
    inherits(PfeSearchDroplist, _PFElement2);
    createClass(PfeSearchDroplist, [{
      key: "html",
      get: function get$$1() {
        return "<style>:host {\n  position: relative;\n  display: none;\n  font-family: var(--pfe-theme--font-family);\n  font-size: var(--pfe-theme--font-size);\n  line-height: var(--pfe-theme--line-height); }\n\n:host([open]) {\n  display: block; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.droplist {\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  right: 0px;\n  max-height: 250px;\n  z-index: 9999;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  border: 1px solid #ccc;\n  background-color: #fff; }\n\nul {\n  font-family: var(--pfe-theme--font-family);\n  font-size: var(--pfe-theme--font-size);\n  line-height: var(--pfe-theme--line-height);\n  border-top: none;\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  cursor: pointer; }\n  ul li {\n    display: list-item;\n    cursor: pointer;\n    padding: 10px;\n    margin: 0px;\n     }\n    ul li.active {\n      background-color: var(--pfe-theme--color--surface--lighter, #ececec); }</style>\n<div class=\"suggestions-aria-help sr-only\" aria-hidden=\"false\" role=\"status\"></div>\n<div class=\"droplist\">\n  <ul role=\"listbox\" tabindex=\"-1\">\n  </ul>\n</div>";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "pfe-search-droplist.html";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "pfe-search-droplist.scss";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "pfe-search-droplist";
      }
    }]);

    function PfeSearchDroplist() {
      classCallCheck(this, PfeSearchDroplist);
      return possibleConstructorReturn(this, (PfeSearchDroplist.__proto__ || Object.getPrototypeOf(PfeSearchDroplist)).call(this, PfeSearchDroplist));
    }

    createClass(PfeSearchDroplist, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        get(PfeSearchDroplist.prototype.__proto__ || Object.getPrototypeOf(PfeSearchDroplist.prototype), "connectedCallback", this).call(this);

        this._ariaAnnounce = this.shadowRoot.querySelector(".suggestions-aria-help");

        this.activeIndex = null;
        this._ul = this.shadowRoot.querySelector("ul");
        this._ul.addEventListener("mousedown", this._optionSelected.bind(this));
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._ul.removeEventListener("mousedown", this._optionSelected);
      }
    }, {
      key: "_optionSelected",
      value: function _optionSelected(e) {
        if (e.target.tagName === "LI") {
          this.dispatchEvent(new CustomEvent("pfe-option-selected", {
            detail: { optionValue: e.target.innerText },
            bubbles: true,
            composed: true
          }));
        }
      }
    }, {
      key: "_renderOptions",
      value: function _renderOptions() {
        this.reflow = "";

        var options = this.data;

        this._ariaAnnounce.innerHTML = "There are " + options.length + " suggestions. Use the up and down arrows to browse.";
        this._ariaAnnounce.setAttribute("aria-live", "polite");

        this._ul.innerHTML = "" + options.map(function (item, index) {
          return "<li id=\"option-" + index + "\" role=\"option\" tabindex=\"-1\" value=\"" + item + "\">" + item + "</li>";
        }).join("");
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldVal, newVal) {
        get(PfeSearchDroplist.prototype.__proto__ || Object.getPrototypeOf(PfeSearchDroplist.prototype), "attributeChangedCallback", this).call(this);

        if (this[name] !== newVal) {
          this[name] = newVal;
        }

        if (attr === "active-index" && oldVal !== newVal) {
          this._activeIndexChanged();
        }

        if (attr === "reflow") {
          this._renderOptions();
        }
      }
    }, {
      key: "_activeIndexChanged",
      value: function _activeIndexChanged() {
        if (!this.data || this.data.length === 0 || this.activeIndex === null || this.activeIndex === "null") return;

        // remove active class
        if (this._ul.querySelector(".active")) {
          this._ul.querySelector(".active").classList.remove("active");
        }

        // add active class to selected option
        var activeOption = this._ul.querySelector("li:nth-child(" + (parseInt(this.activeIndex, 10) + 1) + ")");

        activeOption.classList.add("active");

        // scroll to selected element when selected item with keyboard is out of view
        var ulWrapper = this.shadowRoot.querySelector(".droplist");
        var activeOptionHeight = activeOption.offsetHeight;
        activeOptionHeight += parseInt(window.getComputedStyle(activeOption).getPropertyValue("margin-bottom"), 10);
        ulWrapper.scrollTop = activeOption.offsetTop - ulWrapper.offsetHeight + activeOptionHeight;
      }
    }, {
      key: "open",
      get: function get$$1() {
        return this.hasAttribute("open");
      },
      set: function set$$1(val) {
        val = Boolean(val);

        if (val) {
          this.setAttribute("open", "");
        } else {
          this.removeAttribute("open");
        }
      }
    }, {
      key: "activeIndex",
      get: function get$$1() {
        return this.getAttribute("active-index");
      },
      set: function set$$1(val) {
        this.setAttribute("active-index", val);
      }
    }, {
      key: "reflow",
      get: function get$$1() {
        return this.hasAttribute("reflow");
      },
      set: function set$$1(val) {
        val = Boolean(val);

        if (val) {
          this.setAttribute("reflow", "");
        } else {
          this.removeAttribute("reflow");
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get$$1() {
        return ["open", "reflow", "active-index"];
      }
    }]);
    return PfeSearchDroplist;
  }(PFElement);

  PFElement.create(PfeSearchDroplist);
  PFElement.create(PfeAutocomplete);

  return PfeAutocomplete;

})));
//# sourceMappingURL=pfe-autocomplete.umd.js.map

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../pfelement/pfelement.umd')) :
  typeof define === 'function' && define.amd ? define(['../pfelement/pfelement.umd'], factory) :
  (global.PfeBand = factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /*
   * Copyright 2019 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  // -- Polyfill for supporting Element.closest
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

  // -- Polyfill for supporting Array.includes
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
      value: function value(valueToFind, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        // 1. Let O be ? ToObject(this value).
        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If len is 0, return false.
        if (len === 0) {
          return false;
        }

        // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)
        var n = fromIndex | 0;

        // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
        }

        // 7. Repeat, while k < len
        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(valueToFind, elementK) is true, return true.
          if (sameValueZero(o[k], valueToFind)) {
            return true;
          }
          // c. Increase k by 1.
          k++;
        }

        // 8. Return false
        return false;
      }
    });
  }

  var PfeBand = function (_PFElement) {
    inherits(PfeBand, _PFElement);
    createClass(PfeBand, [{
      key: 'html',
      get: function get$$1() {
        var _this2 = this;

        return '<style>:host, .pfe-band__container, .pfe-band__header, .pfe-band__body, .pfe-band__aside, .pfe-band__footer {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  margin-bottom: var(--pfe-band--gutter--vertical); }\n\n.pfe-band__container, .pfe-band__header, .pfe-band__body, .pfe-band__aside, .pfe-band__footer {\n  display: grid;\n  grid-row-gap: var(--pfe-band--gutter--vertical);\n  grid-column-gap: var(--pfe-band--gutter--horizontal);\n  margin-bottom: 0; }\n\n:host {\n  display: block;\n  --pfe-band--Padding--vertical:               calc( var(--pfe-theme--container-spacer, 1rem) * 4);\n  --pfe-band--Padding--horizontal:             calc( var(--pfe-theme--container-spacer, 1rem) * 1);\n  --pfe-band--Padding:                         var(--pfe-band--Padding--vertical)  var(--pfe-band--Padding--horizontal);\n  --pfe-band--BackgroundColor:                 var(--pfe-theme--color--surface--base, #dfdfdf);\n  --pfe-band--BackgroundPosition:              center center;\n  --pfe-band--Border:                          var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) transparent;\n  --pfe-band--layout:                           1fr;\n  --pfe-band__header--layout:                   1fr;\n  --pfe-band__body--layout:                     1fr;\n  --pfe-band__footer--layout:                   1fr;\n  --pfe-band__aside--layout:                    1fr;\n  --pfe-band--gutter--vertical:                 var(--pfe-theme--container-spacer, 1rem);\n  --pfe-band--gutter--horizontal:               calc(var(--pfe-theme--container-spacer, 1rem) * 3);\n  --pfe-broadcasted--color--text:              var(--pfe-theme--color--surface--base--text, #333);\n  --pfe-broadcasted--color--ui-link:           var(--pfe-theme--color--surface--base--link, #00538c);\n  --pfe-broadcasted--color--ui-link--visited:  var(--pfe-theme--color--surface--base--link--visited, #7551a6);\n  --pfe-broadcasted--color--ui-link--hover:    var(--pfe-theme--color--surface--base--link--hover, #00305b);\n  --pfe-broadcasted--color--ui-link--focus:    var(--pfe-theme--color--surface--base--link--focus, #00305b);\n  --pfe-band--Width: auto;\n  --pfe-band--Width__aside--sm: 240px;\n  --pfe-band--Width__aside--lg: 300px;\n  position: relative;\n  padding: calc(var(--pfe-band--Padding--vertical) / 2) var(--pfe-band--Padding--horizontal);\n  border: var(--pfe-band--Border);\n  background-color: var(--pfe-band--BackgroundColor);\n  background-position: var(--pfe-band--BackgroundPosition);\n  color: var(--pfe-broadcasted--color--text); }\n  @media screen and (min-width: 768px) {\n    :host {\n      --pfe-band--Width: calc( 768px - calc(var(--pfe-band--Padding--horizontal) * 4) ); } }\n  @media screen and (min-width: 992px) {\n    :host {\n      --pfe-band--Width: calc( 992px - calc(var(--pfe-band--Padding--horizontal) * 4) ); } }\n  @media screen and (min-width: 1200px) {\n    :host {\n      --pfe-band--Width: calc( 1200px - calc(var(--pfe-band--Padding--horizontal) * 4) ); } }\n  @media print {\n    :host {\n      --pfe-band--Padding: calc(var(--pfe-band--Padding--vertical) / 2) var(--pfe-band--Padding--horizontal); } }\n  @media (min-width: 576px) {\n    :host {\n      padding: var(--pfe-band--Padding); } }\n  @media print {\n    :host {\n      background-color: white !important;\n      background-image: none !important;\n      box-shadow: none !important; } }\n  :host *, :host *::before, :host *::after {\n    box-sizing: border-box; }\n\n:host([pfe-color="darker"]) {\n  --pfe-band--BackgroundColor:                  var(--pfe-theme--color--surface--darker, #464646);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--darker--text, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--darker--link, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--darker--link--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--darker--link--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--darker--link--focus, #cce6ff); }\n\n:host([pfe-color="darkest"]) {\n  --pfe-band--BackgroundColor:                  var(--pfe-theme--color--surface--darkest, #131313);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--darkest--text, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--darkest--link, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--darkest--link--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--darkest--link--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--darkest--link--focus, #cce6ff); }\n\n:host([pfe-color="accent"]) {\n  --pfe-band--BackgroundColor:                  var(--pfe-theme--color--surface--accent, #fe460d);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--accent--text, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--accent--link, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--accent--link--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--accent--link--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--accent--link--focus, #cce6ff); }\n\n:host([pfe-color="complement"]) {\n  --pfe-band--BackgroundColor:                  var(--pfe-theme--color--surface--complement, #0477a4);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--complement--text, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--complement--link, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--complement--link--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--complement--link--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--complement--link--focus, #cce6ff); }\n\n:host([pfe-color="lighter"]) {\n  --pfe-band--BackgroundColor:                  var(--pfe-theme--color--surface--lighter, #ececec);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--lighter--text, #333);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--lighter--link, #06c);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--lighter--link--visited, rebeccapurple);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--lighter--link--hover, #003366);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--lighter--link--focus, #003366); }\n\n:host([pfe-color="lightest"]) {\n  --pfe-band--BackgroundColor:                  var(--pfe-theme--color--surface--lightest, #fff);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--lightest--text, #333);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--lightest--link, #06c);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--lightest--link--visited, rebeccapurple);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--lightest--link--hover, #003366);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--lightest--link--focus, #003366); }\n\n:host([pfe-size="small"]) {\n  --pfe-band--Padding:   calc(var(--pfe-band--Padding--vertical) / 4)  var(--pfe-band--Padding--horizontal); }\n\n.pfe-band__container {\n  --pfe-band_region--width: calc(calc(1fr - var(--pfe-band--Width__aside--sm)) - var(--pfe-band--gutter--horizontal));\n  --pfe-band--gridTemplateArea_mobile: "body";\n  position: relative;\n  margin: 0 auto;\n  width: 100%;\n  max-width: var(--pfe-band--Width); }\n  .pfe-band__container[pfe-has-aside] {\n    --pfe-band--gridTemplateArea_mobile:\n        "body" "aside";\n    --pfe-band--gridTemplateArea_desktop:\n        "body aside"; }\n    @media (min-width: 768px) {\n      .pfe-band__container[pfe-has-aside] {\n        --pfe-band--layout: 1fr var(--pfe-band--Width__aside--sm); } }\n    @media (min-width: 992px) {\n      .pfe-band__container[pfe-has-aside] {\n        --pfe-band--layout: 1fr var(--pfe-band--Width__aside--lg); } }\n    .pfe-band__container[pfe-has-aside][pfe-aside-mobile="top"] {\n      --pfe-band--gridTemplateArea_mobile:\n          "aside" "body"; }\n    .pfe-band__container[pfe-has-aside][pfe-aside-desktop="left"] {\n      --pfe-band--gridTemplateArea_desktop:\n          "aside body"; }\n      @media (min-width: 768px) {\n        .pfe-band__container[pfe-has-aside][pfe-aside-desktop="left"] {\n          --pfe-band--layout: var(--pfe-band--Width__aside--sm) 1fr; } }\n      @media (min-width: 992px) {\n        .pfe-band__container[pfe-has-aside][pfe-aside-desktop="left"] {\n          --pfe-band--layout: var(--pfe-band--Width__aside--lg) 1fr; } }\n  .pfe-band__container[pfe-has-header] {\n    --pfe-band--gridTemplateArea_mobile:\n        "header" "body"; }\n    .pfe-band__container[pfe-has-header][pfe-has-aside] {\n      --pfe-band--gridTemplateArea_mobile:  \n          "header" \n          "body" "aside";\n      --pfe-band--gridTemplateArea_desktop: \n          "header header" \n          "body aside"; }\n    .pfe-band__container[pfe-has-header][pfe-aside-mobile="top"] {\n      --pfe-band--gridTemplateArea_mobile:  \n          "aside" \n          "header" \n          "body"; }\n    .pfe-band__container[pfe-has-header][pfe-aside-height="full"] {\n      --pfe-band--gridTemplateArea_desktop:\n          "header aside"\n          "body aside"; }\n    .pfe-band__container[pfe-has-header][pfe-aside-desktop="left"] {\n      --pfe-band--gridTemplateArea_desktop:\n          "header header"\n          "aside body"; }\n      .pfe-band__container[pfe-has-header][pfe-aside-desktop="left"][pfe-aside-height="full"] {\n        --pfe-band--gridTemplateArea_desktop:\n            "aside header"\n            "aside body"; }\n  .pfe-band__container[pfe-has-footer] {\n    --pfe-band--gridTemplateArea_mobile:\n        "body"\n        "footer"; }\n    .pfe-band__container[pfe-has-footer][pfe-has-aside] {\n      --pfe-band--gridTemplateArea_mobile:\n          "body"\n          "aside"\n          "footer";\n      --pfe-band--gridTemplateArea_desktop:\n          "body aside"\n          "footer footer"; }\n    .pfe-band__container[pfe-has-footer][pfe-aside-mobile="top"] {\n      --pfe-band--gridTemplateArea_mobile:\n          "aside"\n          "body"\n          "footer"; }\n    .pfe-band__container[pfe-has-footer][pfe-aside-height="full"] {\n      --pfe-band--gridTemplateArea_desktop:\n          "body aside"\n          "footer aside" ; }\n    .pfe-band__container[pfe-has-footer][pfe-aside-desktop="left"] {\n      --pfe-band--gridTemplateArea_desktop:\n          "aside body"\n          "footer footer"; }\n      .pfe-band__container[pfe-has-footer][pfe-aside-desktop="left"][pfe-aside-height="full"] {\n        --pfe-band--gridTemplateArea_desktop:\n            "aside body"\n            "aside footer"; }\n  .pfe-band__container[pfe-has-header][pfe-has-footer] {\n    --pfe-band--gridTemplateArea_mobile:\n        "header"\n        "body"\n        "footer"; }\n    .pfe-band__container[pfe-has-header][pfe-has-footer][pfe-has-aside] {\n      --pfe-band--gridTemplateArea_mobile:\n          "header"\n          "body"\n          "footer"\n          "aside";\n      --pfe-band--gridTemplateArea_desktop:\n          "header header"\n          "body aside"\n          "footer footer"; }\n    .pfe-band__container[pfe-has-header][pfe-has-footer][pfe-aside-mobile="top"] {\n      --pfe-band--gridTemplateArea_mobile:\n          "aside"\n          "header"\n          "body"\n          "footer"; }\n    .pfe-band__container[pfe-has-header][pfe-has-footer][pfe-aside-height="full"] {\n      --pfe-band--gridTemplateArea_desktop:\n          "header aside"\n          "body aside"\n          "footer aside" ; }\n    .pfe-band__container[pfe-has-header][pfe-has-footer][pfe-aside-desktop="left"] {\n      --pfe-band--gridTemplateArea_desktop:\n          "header header"\n          "aside body"\n          "footer footer"; }\n      .pfe-band__container[pfe-has-header][pfe-has-footer][pfe-aside-desktop="left"][pfe-aside-height="full"] {\n        --pfe-band--gridTemplateArea_desktop:\n            "aside header"\n            "aside body"\n            "aside footer"; }\n  @supports (display: grid) {\n    .pfe-band__container {\n      grid-template-columns: var(--pfe-band--layout);\n      grid-template-rows: max-content;\n      grid-template-areas: var(--pfe-band--gridTemplateArea_mobile); }\n      @media (min-width: 768px) {\n        .pfe-band__container {\n          grid-template-areas: var(--pfe-band--gridTemplateArea_desktop); } } }\n\n@supports (display: grid) {\n  .pfe-band__header {\n    grid-area: header;\n    grid-template-columns: var(--pfe-band__header--layout); } }\n\n@supports (display: grid) {\n  .pfe-band__body {\n    grid-area: body;\n    grid-template-columns: var(--pfe-band__body--layout); } }\n\n@supports (display: grid) {\n  .pfe-band__aside {\n    grid-area: aside;\n    grid-template-columns: var(--pfe-band__aside--layout); } }\n\n@supports (display: grid) {\n  .pfe-band__footer {\n    grid-area: footer;\n    grid-template-columns: var(--pfe-band__footer--layout); } }</style>\n<section class="pfe-band__container"' + ["header", "footer", "aside"].map(function (slot) {
          return _this2.has_slot('pfe-band--' + slot) ? 'pfe-has-' + slot : "";
        }).join(" ") + '>\n  ' + (this.has_slot("pfe-band--aside") && this.asidePosition.mobile === "top" ? '<slot class="pfe-band__aside" name="pfe-band--aside"></slot>' : "") + '\n  ' + (this.has_slot("pfe-band--header") ? '<slot class="pfe-band__header" name="pfe-band--header"></slot>' : "") + '\n  <slot class="pfe-band__body"></slot>\n  ' + (this.has_slot("pfe-band--aside") && this.asidePosition.mobile !== "top" ? '<slot class="pfe-band__aside" name="pfe-band--aside"></slot>' : "") + '\n  ' + (this.has_slot("pfe-band--footer") ? '<slot class="pfe-band__footer" name="pfe-band--footer"></slot>' : "") + '\n</section>';
      }
    }, {
      key: 'schemaUrl',
      get: function get$$1() {
        return "pfe-band.json";
      }
    }, {
      key: 'templateUrl',
      get: function get$$1() {
        return "pfe-band.html";
      }
    }, {
      key: 'styleUrl',
      get: function get$$1() {
        return "pfe-band.scss";
      }
    }, {
      key: 'imageSrc',
      get: function get$$1() {
        return this.getAttribute("pfe-img-src");
      }
    }, {
      key: 'backgroundColor',
      get: function get$$1() {
        return this.getAttribute("pfe-color");
      }
    }, {
      key: 'asidePosition',
      get: function get$$1() {
        return {
          desktop: this.getAttribute("pfe-aside-desktop"),
          mobile: this.getAttribute("pfe-aside-mobile"),
          height: this.getAttribute("pfe-aside-height")
        };
      }
    }], [{
      key: 'properties',
      get: function get$$1() {
        return { "color": { "title": "Background color", "type": "string", "enum": ["lightest", "lighter", "base", "darker", "darkest", "complement", "accent"], "default": "base", "observer": "_colorChanged" }, "img-src": { "title": "Background image", "type": "string", "observer": "_imgSrcChanged" }, "aside-desktop": { "title": "Aside positioning (desktop)", "type": "string", "default": "right", "enum": ["right", "left"], "observer": "_basicAttributeChanged", "options": { "dependencies": [{ "type": "slot", "id": "aside" }] } }, "aside-mobile": { "title": "Aside positioning (mobile)", "type": "string", "default": "bottom", "enum": ["top", "bottom"], "observer": "_basicAttributeChanged", "options": { "dependencies": [{ "type": "slot", "id": "aside" }] } }, "aside-height": { "title": "Aside height", "type": "string", "default": "body", "enum": ["full", "body"], "observer": "_basicAttributeChanged", "options": { "dependencies": [{ "type": "slot", "id": "aside" }] } } };
      }
    }, {
      key: 'slots',
      get: function get$$1() {
        return { "header": { "title": "Header", "type": "array", "namedSlot": true, "maxItems": 3, "items": { "title": "Body item", "oneOf": [{ "$ref": "raw" }] } }, "body": { "title": "Body", "type": "array", "namedSlot": false, "items": { "oneOf": [{ "$ref": "pfe-card" }, { "$ref": "raw" }] } }, "footer": { "title": "Footer", "type": "array", "namedSlot": true, "maxItems": 3, "items": { "oneOf": [{ "$ref": "pfe-cta" }, { "$ref": "raw" }] } }, "aside": { "title": "Aside", "type": "array", "namedSlot": true, "maxItems": 5, "items": { "oneOf": [{ "$ref": "pfe-card" }, { "$ref": "raw" }] } } };
      }
    }, {
      key: 'tag',
      get: function get$$1() {
        return "pfe-band";
      }
    }, {
      key: 'observedAttributes',
      get: function get$$1() {
        return ["pfe-aside-desktop", "pfe-aside-mobile", "pfe-aside-height", "pfe-color", "pfe-img-src"];
      }
    }, {
      key: 'cascadingAttributes',
      get: function get$$1() {
        return {
          "pfe-aside-desktop": ".pfe-band__container",
          "pfe-aside-mobile": ".pfe-band__container",
          "pfe-aside-height": ".pfe-band__container"
        };
      }

      // Declare the type of this component

    }, {
      key: 'PfeType',
      get: function get$$1() {
        return PFElement.PfeTypes.Container;
      }
    }]);

    function PfeBand() {
      classCallCheck(this, PfeBand);
      return possibleConstructorReturn(this, (PfeBand.__proto__ || Object.getPrototypeOf(PfeBand)).call(this, PfeBand, { type: PfeBand.PfeType }));
    }

    createClass(PfeBand, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(PfeBand.prototype.__proto__ || Object.getPrototypeOf(PfeBand.prototype), 'connectedCallback', this).call(this);
        // Initialize the background image attachment
        if (this.imageSrc) {
          this._imgSrcChanged("pfe-img-src", "", this.imageSrc);
        }
        // Initialize the context setting for the children elements
        if (this.backgroundColor) {
          this._updateContext(this.backgroundColor);
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        get(PfeBand.prototype.__proto__ || Object.getPrototypeOf(PfeBand.prototype), 'attributeChangedCallback', this).call(this, attr, oldValue, newValue);
        // Strip the prefix form the attribute
        attr = attr.replace("pfe-", "");
        // If the observer is defined in the attribute properties
        if (this[attr] && this[attr].observer) {
          // Get the observer function
          var observer = this[this[attr].observer].bind(this);
          // If it's a function, allow it to run
          if (typeof observer === "function") observer(attr, oldValue, newValue);
        }
      }
    }, {
      key: '_basicAttributeChanged',
      value: function _basicAttributeChanged(attr, oldValue, newValue) {
        this[attr].value = newValue;
      }

      // Update the color attribute and contexts

    }, {
      key: '_colorChanged',
      value: function _colorChanged(attr, oldValue, newValue) {
        this[attr].value = newValue;
        // If the new value has a dark background, update children elements
        this._updateContext(newValue);
      }

      // Update the background image

    }, {
      key: '_imgSrcChanged',
      value: function _imgSrcChanged(attr, oldValue, newValue) {
        // Set the image as the background image
        this.style.backgroundImage = newValue ? 'url(\'' + newValue + '\')' : '';
      }

      // Set the children's context if parent background is dark

    }, {
      key: '_updateContext',
      value: function _updateContext(context) {
        var _this3 = this;

        if (["darkest", "darker", "complement", "accent"].includes(context)) {
          ["pfe-cta"].forEach(function (elementName) {
            var els = [].concat(toConsumableArray(_this3.querySelectorAll('' + elementName)));
            els.forEach(function (el) {
              var myContainer = el.closest("[pfe-type=container]");
              if (myContainer === _this3 || myContainer === null) {
                el.setAttribute("on", "dark");
              }
            });
          });
        }
      }
    }]);
    return PfeBand;
  }(PFElement);

  PFElement.create(PfeBand);

  return PfeBand;

})));
//# sourceMappingURL=pfe-band.umd.js.map

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../pfelement/pfelement.umd')) :
  typeof define === 'function' && define.amd ? define(['../pfelement/pfelement.umd'], factory) :
  (global.PfeCard = factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /*
   * Copyright 2019 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  // -- Polyfill for supporting Element.closest
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

  // -- Polyfill for supporting Array.includes
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
      value: function value(valueToFind, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        // 1. Let O be ? ToObject(this value).
        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If len is 0, return false.
        if (len === 0) {
          return false;
        }

        // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)
        var n = fromIndex | 0;

        // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
        }

        // 7. Repeat, while k < len
        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(valueToFind, elementK) is true, return true.
          if (sameValueZero(o[k], valueToFind)) {
            return true;
          }
          // c. Increase k by 1.
          k++;
        }

        // 8. Return false
        return false;
      }
    });
  }

  var PfeCard = function (_PFElement) {
    inherits(PfeCard, _PFElement);
    createClass(PfeCard, [{
      key: 'html',
      get: function get$$1() {
        return '<style>:host {\n  --pfe-card--padding:                          calc(var(--pfe-theme--container-spacer, 1rem) * 2);\n  --pfe-card_header--size:                      var(--pfe-theme--font-size--heading--gamma, 21px);\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--base, #dfdfdf);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--base--text, #333);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--base--link, #00538c);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--base--link--visited, #7551a6);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--base--link--hover, #00305b);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--base--link--focus, #00305b);\n  display: flex;\n  flex-direction: column;\n  justify-items: flex-start;\n  padding: var(--pfe-card--padding);\n  border: var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) transparent;\n  border-radius: var(--pfe-theme--surface--border-radius, 0);\n  background: var(--pfe-card--bg);\n  color: var(--pfe-broadcasted--color--text); }\n\na {\n  color: var(--pfe-broadcasted--color--ui-link); }\n\na:visited {\n  color: var(--pfe-broadcasted--color--ui-link--visited); }\n\na:hover {\n  color: var(--pfe-broadcasted--color--ui-link--hover); }\n\na:focus {\n  color: var(--pfe-broadcasted--color--ui-link--focus); }\n\n:host([color="dark"]) {\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--darker, #464646);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--darker--text, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--darker--link, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--darker--link--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--darker--link--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--darker--link--focus, #cce6ff); }\n\n:host([color="darkest"]) {\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--darkest, #131313);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--darkest--text, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--darkest--link, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--darkest--link--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--darkest--link--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--darkest--link--focus, #cce6ff); }\n\n:host([color="light"]) {\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--lighter, #ececec);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--lighter--text, #333);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--lighter--link, #06c);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--lighter--link--visited, rebeccapurple);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--lighter--link--hover, #003366);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--lighter--link--focus, #003366); }\n\n:host([color="lightest"]) {\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--lightest, #fff);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--lightest--text, #333);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--lightest--link, #06c);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--lightest--link--visited, rebeccapurple);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--lightest--link--hover, #003366);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--lightest--link--focus, #003366); }\n\n:host([color="complement"]) {\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--complement, #0477a4);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--complement--text, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--complement--link, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--complement--link--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--complement--link--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--complement--link--focus, #cce6ff); }\n\n:host([color="accent"]) {\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--accent, #fe460d);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--accent--text, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--accent--link, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--accent--link--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--accent--link--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--accent--link--focus, #cce6ff); }\n\n:host([size="small"]) {\n  --pfe-card--padding:        var(--pfe-theme--container-spacer, 1rem); }\n\n.pfe-card__header,\n.pfe-card__body,\n.pfe-card__footer {\n  display: block;\n  margin: 0; }\n\n.pfe-card__header::slotted(h1:first-child),\n.pfe-card__header::slotted(h2:first-child),\n.pfe-card__header::slotted(h3:first-child),\n.pfe-card__header::slotted(h4:first-child),\n.pfe-card__header::slotted(h5:first-child),\n.pfe-card__header::slotted(h6:first-child) {\n  margin-top: 0 !important;\n  font-size: var(--pfe-card_header--size); }\n\n.pfe-card__body::slotted(*:nth-child(2)) {\n  margin-top: 0 !important; }\n\n.pfe-card__footer {\n  margin-top: auto;\n  justify-self: flex-end; }</style>\n<slot class="pfe-card__header" name="header"></slot>\n<slot class="pfe-card__body"></slot>\n<slot class="pfe-card__footer" name="footer"></slot>';
      }
    }, {
      key: 'styleUrl',
      get: function get$$1() {
        return "pfe-card.scss";
      }
    }, {
      key: 'templateUrl',
      get: function get$$1() {
        return "pfe-card.html";
      }
    }, {
      key: 'backgroundColor',
      get: function get$$1() {
        return this.getAttribute("color") || "base";
      }
    }], [{
      key: 'tag',
      get: function get$$1() {
        return "pfe-card";
      }
    }, {
      key: 'observedAttributes',
      get: function get$$1() {
        return ["color"];
      }

      // Declare the type of this component

    }, {
      key: 'PfeType',
      get: function get$$1() {
        return PFElement.PfeTypes.Container;
      }
    }]);

    function PfeCard() {
      classCallCheck(this, PfeCard);
      return possibleConstructorReturn(this, (PfeCard.__proto__ || Object.getPrototypeOf(PfeCard)).call(this, PfeCard, { type: PfeCard.PfeType }));
    }

    createClass(PfeCard, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(PfeCard.prototype.__proto__ || Object.getPrototypeOf(PfeCard.prototype), 'connectedCallback', this).call(this);
        // Initialize the context setting for the children elements
        if (this.backgroundColor) {
          this._updateContext(this.backgroundColor);
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        get(PfeCard.prototype.__proto__ || Object.getPrototypeOf(PfeCard.prototype), 'attributeChangedCallback', this).call(this, attr, oldValue, newValue);
        if (attr === "color") {
          this._colorChanged(attr, oldValue, newValue);
        }
      }

      // Update the color attribute and contexts

    }, {
      key: '_colorChanged',
      value: function _colorChanged(attr, oldValue, newValue) {
        // If the new value has a dark background, update children elements
        this._updateContext(newValue);
      }

      // Set the children's context if parent background is dark

    }, {
      key: '_updateContext',
      value: function _updateContext(context) {
        var _this2 = this;

        if (["darkest", "dark", "complement", "accent"].includes(context)) {
          ["pfe-cta"].forEach(function (elementName) {
            var els = [].concat(toConsumableArray(_this2.querySelectorAll('' + elementName)));
            els.forEach(function (el) {
              var myContainer = el.closest("[pfe-type=container]");
              if (myContainer === _this2 || myContainer === null) {
                el.setAttribute("on", "dark");
              }
            });
          });
        }
      }
    }]);
    return PfeCard;
  }(PFElement);

  PFElement.create(PfeCard);

  return PfeCard;

})));
//# sourceMappingURL=pfe-card.umd.js.map

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../pfelement/pfelement.umd'), require('../pfe-accordion/pfe-accordion.umd'), require('../pfe-tabs/pfe-tabs.umd')) :
  typeof define === 'function' && define.amd ? define(['../pfelement/pfelement.umd', '../pfe-accordion/pfe-accordion.umd', '../pfe-tabs/pfe-tabs.umd'], factory) :
  (global.PfeContentSet = factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /*
   * Copyright 2019 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  var PfeContentSet = function (_PFElement) {
    inherits(PfeContentSet, _PFElement);
    createClass(PfeContentSet, [{
      key: 'html',
      get: function get$$1() {
        return '<style>:host {\n  display: block; }\n\n:host([hidden]) {\n  display: none; }</style>\n<slot></slot>';
      }
    }, {
      key: 'templateUrl',
      get: function get$$1() {
        return "pfe-content-set.html";
      }
    }, {
      key: 'styleUrl',
      get: function get$$1() {
        return "pfe-content-set.scss";
      }
    }, {
      key: 'isTab',
      get: function get$$1() {
        return this.parentNode ? this.parentNode.offsetWidth > 768 : window.outerWidth > 768;
      }
    }, {
      key: 'orientation',
      get: function get$$1() {
        return this.hasAttribute("vertical") ? "vertical" : "horizontal";
      }
    }, {
      key: 'settings',
      get: function get$$1() {
        var settings = {};
        var variant = this.getAttribute("pfe-variant");

        if (variant === "primary") {
          settings.variant = variant;
          settings.color = "striped";
        } else if (variant === "secondary") {
          settings.variant = variant;
          settings.color = "dark";
        } else {
          settings.color = "lightest";
        }

        return settings;
      }
    }], [{
      key: 'tag',
      get: function get$$1() {
        return "pfe-content-set";
      }
    }, {
      key: 'pfeType',
      get: function get$$1() {
        return PFElement.pfeType.combo;
      }
    }]);

    function PfeContentSet() {
      classCallCheck(this, PfeContentSet);
      return possibleConstructorReturn(this, (PfeContentSet.__proto__ || Object.getPrototypeOf(PfeContentSet)).call(this, PfeContentSet, { delayRender: true }));
    }

    createClass(PfeContentSet, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(PfeContentSet.prototype.__proto__ || Object.getPrototypeOf(PfeContentSet.prototype), 'connectedCallback', this).call(this);

        if (this.isTab) {
          this._buildTabs();
        } else {
          this._buildAccordion();
        }

        this.render();
      }
    }, {
      key: '_buildAccordion',
      value: function _buildAccordion() {
        // Use a document fragment for efficiency
        var fragment = document.createDocumentFragment();
        // Create the accordion wrapper component
        var accordion = document.createElement("pfe-accordion");

        // Iterate over each element in the light DOM
        [].concat(toConsumableArray(this.children)).forEach(function (child) {
          // If one of them has the attribute indicating they belong in the header region
          if (child.hasAttribute("pfe-content-set--header")) {
            // Create a header component
            var header = document.createElement("pfe-accordion-header");
            // Append the light DOM element to that component
            header.appendChild(child);
            // Append the component to the accordion parent
            accordion.appendChild(header);
          }
          // If one of them has the attribute indicating they belong in the panel region
          if (child.hasAttribute("pfe-content-set--panel")) {
            // Create a panel component
            var panel = document.createElement("pfe-accordion-panel");
            // Append the light DOM element to that component
            panel.appendChild(child);
            // Append the component to the accordion parent
            accordion.appendChild(panel);
          }
        });

        // Append the accordion to the document fragment
        fragment.appendChild(accordion);

        // Pass the color property down to the accordion component
        if (this.settings.color) {
          accordion.setAttribute("color", this.settings.color);
        }

        // Append the fragment to the component
        this.appendChild(fragment);
      }
    }, {
      key: '_buildTabs',
      value: function _buildTabs() {
        // Use a document fragment for efficiency
        var fragment = document.createDocumentFragment();
        // Create the tabs wrapper component
        var tabs = document.createElement("pfe-tabs");

        // Iterate over each element in the light DOM
        [].concat(toConsumableArray(this.children)).forEach(function (child) {
          // If one of them has the attribute indicating they belong in the header region
          if (child.hasAttribute("pfe-content-set--header")) {
            // Create a tab component
            var header = document.createElement("pfe-tab");
            // Set the attribute indicating its slot
            header.setAttribute("slot", "tab");
            // Append the light DOM element to that component
            header.appendChild(child);
            // Append the component to the tabs parent
            tabs.appendChild(header);
          }
          // If one of them has the attribute indicating they belong in the panel region
          if (child.hasAttribute("pfe-content-set--panel")) {
            // Create the panel component
            var panel = document.createElement("pfe-tab-panel");
            // Set the attribute indicating its slot
            panel.setAttribute("slot", "panel");
            // Append the light DOM element to that component
            panel.appendChild(child);
            // Append the component to the tabs parent
            tabs.appendChild(panel);
          }
        });

        // Append the tabs to the document fragment
        fragment.appendChild(tabs);

        // If the orientation is set to vertical, add that attribute to the tabs
        if (this.orientation === "vertical") {
          tabs.setAttribute("vertical", true);
        }

        // Pass the variant attribute down to the tabs component
        if (this.settings.variant) {
          tabs.setAttribute("pfe-variant", this.settings.variant);
        }

        // Append the fragment to the component
        this.appendChild(fragment);
      }
    }]);
    return PfeContentSet;
  }(PFElement);

  PFElement.create(PfeContentSet);

  return PfeContentSet;

})));
//# sourceMappingURL=pfe-content-set.umd.js.map

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../pfelement/pfelement.umd')) :
  typeof define === 'function' && define.amd ? define(['../pfelement/pfelement.umd'], factory) :
  (global.PfeCta = factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /*
   * Copyright 2019 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  var PfeCta = function (_PFElement) {
    inherits(PfeCta, _PFElement);
    createClass(PfeCta, [{
      key: "html",
      get: function get$$1() {
        return "<style>:host {\n  --pfe-cta--main:                     var(--pfe-theme--color--ui-link, #06c);\n  --pfe-cta--main--hover:              var(--pfe-theme--color--ui-link--hover, #003366);\n  --pfe-cta--main--focus:              var(--pfe-theme--color--ui-link--focus, #003366);\n  --pfe-cta--main--visited:            var(--pfe-theme--color--ui-link--visited, rebeccapurple);\n  --pfe-cta--aux:                      transparent;\n  --pfe-cta--aux--hover:               transparent;\n  display: inline-block;\n  font-weight: bold; }\n  :host ::slotted(a) {\n    line-height: inherit;\n    color: var(--pfe-cta--main) !important;\n    transition: all var(--pfe-theme--animation-timing, cubic-bezier(0.465, 0.183, 0.153, 0.946)); }\n    :host ::slotted(a)::after {\n      display: block;\n      margin-left: calc(var(--pfe-theme--content-spacer, 1rem) * 0.25);\n      vertical-align: middle;\n      border-style: var(--pfe-theme--surface--border-style, solid);\n      border-width: 0.313em 0.313em 0;\n      border-color: transparent;\n      border-top-color: var(--pfe-cta--main);\n      transform: rotate(-90deg);\n      display: inline-block;\n      content: \"\"; }\n  :host ::slotted(a:hover) {\n    color: var(--pfe-cta--main--hover) !important; }\n    :host ::slotted(a:hover)::after {\n      border-top-color: var(--pfe-cta--main--hover); }\n  :host ::slotted(a:focus) {\n    color: var(--pfe-cta--main--focus) !important; }\n    :host ::slotted(a:focus)::after {\n      border-top-color: var(--pfe-cta--main--focus); }\n\n:host([priority=\"primary\"]) {\n  --pfe-cta--main:          var(--pfe-theme--color--ui-accent, #fe460d);\n  --pfe-cta--main--hover:   var(--pfe-theme--color--ui-accent--hover, #a42701);\n  --pfe-cta--aux:           var(--pfe-theme--color--ui-accent--text, #fff);\n  --pfe-cta--aux--hover:    var(--pfe-theme--color--ui-accent--text--hover, #fff); }\n  :host([priority=\"primary\"]) ::slotted(a) {\n    display: inline-block;\n    padding: calc(var(--pfe-theme--container-padding, 1rem) * 0.5) calc(var(--pfe-theme--container-padding, 1rem) * 2);\n    border-radius: calc(var(--pfe-theme--ui--border-radius, 2px) * 20);\n    border: var(--pfe-theme--ui--border-width, 1px) var(--pfe-theme--ui--border-style, solid) transparent;\n    text-decoration: none;\n    line-height: 1.2;\n    border-color: var(--pfe-cta--main) !important;\n    background: var(--pfe-cta--main) !important;\n    color: var(--pfe-cta--aux) !important; }\n    :host([priority=\"primary\"]) ::slotted(a)::after {\n      display: none; }\n  :host([priority=\"primary\"]) ::slotted(a:hover),\n  :host([priority=\"primary\"]) ::slotted(a:focus) {\n    border-color: var(--pfe-cta--main--hover) !important;\n    background: var(--pfe-cta--main--hover) !important;\n    color: var(--pfe-cta--aux--hover) !important; }\n\n:host([priority=\"secondary\"]) {\n  --pfe-cta--main:          var(--pfe-theme--color--ui-base, #0477a4);\n  --pfe-cta--main--hover:   var(--pfe-theme--color--ui-base--hover, #022f40);\n  --pfe-cta--aux:           var(--pfe-theme--color--ui-base--text, #fff);\n  --pfe-cta--aux--hover:    var(--pfe-theme--color--ui-base--text--hover, #fff); }\n  :host([priority=\"secondary\"]) ::slotted(a) {\n    display: inline-block;\n    padding: calc(var(--pfe-theme--container-padding, 1rem) * 0.5) calc(var(--pfe-theme--container-padding, 1rem) * 2);\n    border-radius: calc(var(--pfe-theme--ui--border-radius, 2px) * 20);\n    border: var(--pfe-theme--ui--border-width, 1px) var(--pfe-theme--ui--border-style, solid) var(--pfe-cta--main);\n    text-decoration: none;\n    line-height: 1.2;\n    border-color: var(--pfe-cta--main) !important;\n    background: var(--pfe-cta--aux) !important;\n    color: var(--pfe-cta--main) !important; }\n    :host([priority=\"secondary\"]) ::slotted(a)::after {\n      display: none; }\n  :host([priority=\"secondary\"]) ::slotted(a:hover),\n  :host([priority=\"secondary\"]) ::slotted(a:focus) {\n    border-color: var(--pfe-cta--main--hover) !important;\n    background: var(--pfe-cta--main--hover) !important;\n    color: var(--pfe-cta--aux--hover) !important; }\n\n:host([on=\"dark\"]) {\n  --pfe-cta--main:        var(--pfe-theme--color--text--on-dark, #fff);\n  --pfe-cta--main--hover: var(--pfe-theme--color--ui-link--on-dark--hover, #cce6ff);\n  --pfe-cta--aux:         transparent;\n  --pfe-cta--aux--hover:  transparent; }\n\n:host([on=\"dark\"][priority=\"primary\"]) {\n  --pfe-cta--main:        var(--pfe-theme--color--ui-accent--text, #fff);\n  --pfe-cta--main--hover: var(--pfe-theme--color--ui-accent--text--hover, #fff);\n  --pfe-cta--aux:         var(--pfe-theme--color--ui-accent, #fe460d);\n  --pfe-cta--aux--hover:  var(--pfe-theme--color--ui-accent--hover, #a42701); }\n\n:host([on=\"dark\"][priority=\"secondary\"]) {\n  --pfe-cta--main:        var(--pfe-theme--color--ui-base--text, #fff);\n  --pfe-cta--main--hover: var(--pfe-theme--color--ui-base--text--hover, #fff);\n  --pfe-cta--aux:         transparent;\n  --pfe-cta--aux--hover:  var(--pfe-theme--color--ui-base--hover, #022f40); }\n\n:host([color=\"base\"]) {\n  --pfe-cta--main:        var(--pfe-theme--color--ui-base, #0477a4) !important;\n  --pfe-cta--main--hover: var(--pfe-theme--color--ui-base--hover, #022f40) !important;\n  --pfe-cta--aux:         var(--pfe-theme--color--ui-base--text, #fff) !important;\n  --pfe-cta--aux--hover:  var(--pfe-theme--color--ui-base--text--hover, #fff) !important; }\n\n:host([color=\"complement\"]) {\n  --pfe-cta--main:        var(--pfe-theme--color--ui-complement, #464646) !important;\n  --pfe-cta--main--hover: var(--pfe-theme--color--ui-complement--hover, #131313) !important;\n  --pfe-cta--aux:         var(--pfe-theme--color--ui-complement--text, #fff) !important;\n  --pfe-cta--aux--hover:  var(--pfe-theme--color--ui-complement--text--hover, #fff) !important; }\n\n:host([color=\"accent\"]) {\n  --pfe-cta--main:        var(--pfe-theme--color--ui-accent, #fe460d) !important;\n  --pfe-cta--main--hover: var(--pfe-theme--color--ui-accent--hover, #a42701) !important;\n  --pfe-cta--aux:         var(--pfe-theme--color--ui-accent--text, #fff) !important;\n  --pfe-cta--aux--hover:  var(--pfe-theme--color--ui-accent--text--hover, #fff) !important; }</style>\n<slot></slot>";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "pfe-cta.scss";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "pfe-cta.html";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "pfe-cta";
      }
    }]);

    function PfeCta() {
      classCallCheck(this, PfeCta);
      return possibleConstructorReturn(this, (PfeCta.__proto__ || Object.getPrototypeOf(PfeCta)).call(this, PfeCta));
    }

    createClass(PfeCta, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        get(PfeCta.prototype.__proto__ || Object.getPrototypeOf(PfeCta.prototype), "connectedCallback", this).call(this);

        var firstChild = this.children[0];

        if (!firstChild) {
          console.warn("The first child in the light DOM must be an anchor tag (<a>)");
        } else if (firstChild && firstChild.tagName.toLowerCase() !== "a") {
          console.warn("The first child in the light DOM must be an anchor tag (<a>)");
        } else {
          this.link = this.querySelector("a");
        }
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {}
    }]);
    return PfeCta;
  }(PFElement);

  PFElement.create(PfeCta);

  return PfeCta;

})));
//# sourceMappingURL=pfe-cta.umd.js.map

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../pfelement/pfelement.umd')) :
  typeof define === 'function' && define.amd ? define(['../pfelement/pfelement.umd'], factory) :
  (global.PfeDatetime = factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /*
   * Copyright 2019 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  var PfeDatetime = function (_PFElement) {
    inherits(PfeDatetime, _PFElement);
    createClass(PfeDatetime, [{
      key: "html",
      get: function get$$1() {
        return "<style>:host {\n  display: inline; }</style>\n<span></span>";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "pfe-datetime.scss";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "pfe-datetime.html";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "pfe-datetime";
      }
    }]);

    function PfeDatetime() {
      classCallCheck(this, PfeDatetime);

      var _this = possibleConstructorReturn(this, (PfeDatetime.__proto__ || Object.getPrototypeOf(PfeDatetime)).call(this, PfeDatetime));

      _this.type = _this.getAttribute("type") || "local";
      return _this;
    }

    createClass(PfeDatetime, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldVal, newVal) {
        this[attr] = newVal;
      }
    }, {
      key: "setDate",
      value: function setDate(date) {
        this._datetime = date;
        this.shadowRoot.querySelector("span").innerText = window.Intl ? this._getTypeString() : date.toLocaleString();
      }
    }, {
      key: "_getOptions",
      value: function _getOptions() {
        var props = {
          weekday: {
            short: "short",
            long: "long"
          },
          day: {
            numeric: "numeric",
            "2-digit": "2-digit"
          },
          month: {
            short: "short",
            long: "long"
          },
          year: {
            numeric: "numeric",
            "2-digit": "2-digit"
          },
          hour: {
            numeric: "numeric",
            "2-digit": "2-digit"
          },
          minute: {
            numeric: "numeric",
            "2-digit": "2-digit"
          },
          second: {
            numeric: "numeric",
            "2-digit": "2-digit"
          },
          timeZoneName: {
            short: "short",
            long: "long"
          }
        };

        var options = {};

        for (var prop in props) {
          var value = props[prop][this.getAttribute(prop)];
          if (value) {
            options[prop] = value;
          }
        }

        return options;
      }
    }, {
      key: "_getTypeString",
      value: function _getTypeString() {
        var options = this._getOptions();
        var locale = this.getAttribute("locale") || navigator.language;
        var dt = "";
        switch (this.type) {
          case "local":
            dt = new Intl.DateTimeFormat(locale, options).format(this._datetime);
            break;
          case "relative":
            dt = this._getTimeRelative(this._datetime - Date.now());
            break;
          default:
            dt = this._datetime;
        }
        return dt;
      }
    }, {
      key: "_getTimeRelative",
      value: function _getTimeRelative(ms) {
        var tense = ms > 0 ? "until" : "ago";
        var str = "just now";
        // Based off of Github Relative Time
        // https://github.com/github/time-elements/blob/master/src/relative-time.js
        var s = Math.round(Math.abs(ms) / 1000);
        var min = Math.round(s / 60);
        var h = Math.round(min / 60);
        var d = Math.round(h / 24);
        var m = Math.round(d / 30);
        var y = Math.round(m / 12);
        if (m >= 18) {
          str = y + " years";
        } else if (m >= 12) {
          str = "a year";
        } else if (d >= 45) {
          str = m + " months";
        } else if (d >= 30) {
          str = "a month";
        } else if (h >= 36) {
          str = d + " days";
        } else if (h >= 24) {
          str = "a day";
        } else if (min >= 90) {
          str = h + " hours";
        } else if (min >= 45) {
          str = "an hour";
        } else if (s >= 90) {
          str = min + " minutes";
        } else if (s >= 45) {
          str = "a minute";
        } else if (s >= 10) {
          str = s + " seconds";
        }
        return str !== "just now" ? str + " " + tense : str;
      }
    }, {
      key: "type",
      get: function get$$1() {
        return this._type;
      },
      set: function set$$1(val) {
        if (this._type === val) {
          return;
        }

        this._type = val;
      }
    }, {
      key: "timestamp",
      get: function get$$1() {
        return this._timestamp;
      },
      set: function set$$1(val) {
        if (this._timestamp === val) {
          return;
        }

        this._timestamp = val;
        this.setDate(new Date(val * 1000));
      }
    }, {
      key: "datetime",
      get: function get$$1() {
        return this._datetime;
      },
      set: function set$$1(val) {
        if (!Date.parse(val)) {
          return;
        }

        if (Date.parse(val) && this._datetime === Date.parse(val)) {
          return;
        }

        this.setDate(Date.parse(val));
      }
    }], [{
      key: "observedAttributes",
      get: function get$$1() {
        return ["datetime", "type", "timestamp"];
      }
    }]);
    return PfeDatetime;
  }(PFElement);

  PFElement.create(PfeDatetime);

  return PfeDatetime;

})));
//# sourceMappingURL=pfe-datetime.umd.js.map

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../pfelement/pfelement.umd'), require('../pfe-icon/pfe-icon.umd')) :
  typeof define === 'function' && define.amd ? define(['../pfelement/pfelement.umd', '../pfe-icon/pfe-icon.umd'], factory) :
  (factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /*
   * Copyright 2019 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  var PfeIconPanel = function (_PFElement) {
    inherits(PfeIconPanel, _PFElement);
    createClass(PfeIconPanel, [{
      key: 'html',
      get: function get$$1() {
        return '<style>:host {\n  display: flex;\n  align-content: flex-start;\n  flex-direction: column; }\n  @media (min-width: 576px) {\n    :host {\n      flex-direction: row; } }\n\n:host pfe-icon {\n  --pfe-icon--spacing:                 var(--pfe-theme--container-spacer, 1rem);\n  --pfe-icon--size:                    var(--pfe-theme--icon-size, 64px);\n  margin-right: var(--pfe-icon--spacing);\n  font-size: var(--pfe-icon--size);\n  line-height: var(--pfe-icon--size);\n  padding: 0.05em;\n  min-width: var(--pfe-icon--size);\n  max-width: var(--pfe-icon--size); }\n\n:host ::slotted([slot="header"]),\n:host ::slotted([slot="footer"]) {\n  display: block; }\n\n:host ::slotted([slot="footer"]) {\n  margin-top: 1em; }\n\n:host([stacked]) {\n  flex-direction: column !important; }\n\n:host([stacked][centered]) {\n  align-items: center;\n  text-align: center; }</style>\n<pfe-icon></pfe-icon>\n<div class="content">\n  <slot class="header" name="header"></slot>\n  <slot class="body"></slot>\n  <slot class="footer" name="footer"></slot>\n</div>';
      }
    }, {
      key: 'styleUrl',
      get: function get$$1() {
        return "pfe-icon-panel.scss";
      }
    }, {
      key: 'templateUrl',
      get: function get$$1() {
        return "pfe-icon-panel.html";
      }
    }], [{
      key: 'tag',
      get: function get$$1() {
        return "pfe-icon-panel";
      }
    }, {
      key: 'observedAttributes',
      get: function get$$1() {
        return ["icon", "circled"];
      }
    }, {
      key: 'cascadingAttributes',
      get: function get$$1() {
        return {
          icon: "pfe-icon",
          circled: "pfe-icon"
        };
      }
    }]);

    function PfeIconPanel() {
      classCallCheck(this, PfeIconPanel);
      return possibleConstructorReturn(this, (PfeIconPanel.__proto__ || Object.getPrototypeOf(PfeIconPanel)).call(this, PfeIconPanel));
    }

    return PfeIconPanel;
  }(PFElement);

  PFElement.create(PfeIconPanel);

})));
//# sourceMappingURL=pfe-icon-panel.umd.js.map

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../pfelement/pfelement.umd')) :
  typeof define === 'function' && define.amd ? define(['../pfelement/pfelement.umd'], factory) :
  (factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /*
   * Copyright 2019 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  var templateId = "pfe-icon-head";
  if (!document.getElementById(templateId)) {
    var cpRHIconTemplate = document.createElement("div");

    cpRHIconTemplate.setAttribute("style", "display: none;");
    cpRHIconTemplate.setAttribute("id", templateId);

    cpRHIconTemplate.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><symbol viewBox=\"0 0 32 32\" id=\"pfe-icon-server\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25.11 14.11a.288.288 0 0 0-.16-.35l-2.82-1.38a.308.308 0 0 0-.13-.03H10.43c-.04 0-.08.01-.12.02l-3.24 1.38c-.14.06-.21.22-.17.36-.01.03-.02.05-.02.08v5.15c0 .17.14.31.31.31h17.63c.17 0 .31-.14.31-.31v-5.15c-.01-.03-.02-.05-.02-.08zm-14.62-1.15h11.44l1.89.92H8.32l2.17-.92zm14.02 6.08H7.49v-4.46h17.02v4.46zM8.62 16.79c0 .24.19.43.42.43s.42-.19.42-.42v-.01c0-.23-.19-.42-.42-.42s-.42.18-.42.42zm1.49 0v.01c0 .23.19.42.42.42s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.42v.01zm13.57 1.2c0 .08-.07.15-.15.15h-.92c-.08 0-.15-.07-.15-.15v-2.45c0-.08.07-.15.15-.15h.92c.08 0 .15.07.15.15v2.45zm-.92-.16h.61v-2.15h-.61v2.15zm-.92.16c0 .08-.07.15-.15.15h-.92c-.08 0-.15-.07-.15-.15v-2.45c0-.08.07-.15.15-.15h.92c.08 0 .15.07.15.15v2.45zm-.92-.16h.61v-2.15h-.61v2.15z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"pfe-icon-server-alt1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M26.92 13.81c0-.02 0-.03-.01-.05s-.02-.03-.03-.05c-.01-.01-.01-.03-.03-.04-.01-.02-.03-.03-.05-.04-.01-.01-.02-.02-.03-.02l-3.62-1.82a.266.266 0 0 0-.12-.03H8.95c-.04 0-.08.01-.12.03l-3.62 1.82c-.01.01-.02.02-.03.02-.02.01-.03.02-.05.04-.01.01-.02.03-.03.04-.01.01-.02.03-.02.04-.01.02-.01.04-.01.06 0 .01-.01.02-.01.03v6.11c0 .15.12.26.26.26h21.35c.15 0 .26-.12.26-.26v-6.11s0-.01-.01-.03zm-.51 3.75H24.1c-.35 0-.65-.29-.65-.65s.29-.65.65-.65h2.31v1.3zm-17.4-5.27h13.98l2.58 1.3H6.43l2.58-1.3zM5.59 19.7v-5.59h20.82V16H24.1c-.5 0-.91.41-.91.91s.41.91.91.91h2.31v1.89L5.59 19.7zm1.03-3.04c-.07.07-.11.16-.11.25s.04.19.11.25c.07.07.16.11.26.11.09 0 .19-.04.25-.11.07-.07.11-.16.11-.25a.34.34 0 0 0-.11-.25.362.362 0 0 0-.51 0zm6.27-.11c-.2 0-.36.16-.36.36s.16.36.36.36c.2 0 .36-.16.36-.36s-.16-.36-.36-.36zm4.52 0c-.2 0-.36.16-.36.36s.16.36.36.36c.2 0 .36-.16.36-.36s-.16-.36-.36-.36zm-6.02 0c-.2 0-.36.16-.36.36s.16.36.36.36c.2 0 .36-.16.36-.36s-.17-.36-.36-.36zm-1.51 0c-.2 0-.36.16-.36.36s.16.36.36.36c.2 0 .36-.16.36-.36s-.16-.36-.36-.36zm4.52 0c-.2 0-.36.16-.36.36s.16.36.36.36.36-.16.36-.36-.16-.36-.36-.36zm1.5 0c-.2 0-.36.16-.36.36s.16.36.36.36.36-.16.36-.36-.16-.36-.36-.36zm-7.52 0c-.2 0-.36.16-.36.36s.16.36.36.36c.2 0 .36-.16.36-.36s-.17-.36-.36-.36zm12.04 0c-.2 0-.36.16-.36.36s.16.36.36.36c.2 0 .36-.16.36-.36s-.16-.36-.36-.36zm-1.51 0c-.2 0-.36.16-.36.36s.16.36.36.36.36-.16.36-.36-.16-.36-.36-.36zm2.76.11c-.07.07-.1.16-.1.25a.358.358 0 0 0 .35.36.4.4 0 0 0 .26-.1c.07-.07.1-.16.1-.26 0-.09-.04-.19-.1-.25a.362.362 0 0 0-.51 0zM6.62 15.2a.34.34 0 0 0 0 .5c.07.07.16.11.26.11.09 0 .18-.04.25-.11a.34.34 0 0 0 0-.5.362.362 0 0 0-.51 0zm3.26-.11c-.2 0-.36.16-.36.36 0 .2.16.36.36.36.2 0 .36-.16.36-.36s-.16-.36-.36-.36zm1.51 0c-.2 0-.36.16-.36.36 0 .2.16.36.36.36.2 0 .36-.16.36-.36s-.17-.36-.36-.36zm1.5 0c-.2 0-.36.16-.36.36 0 .2.16.36.36.36.2 0 .36-.16.36-.36s-.16-.36-.36-.36zm-4.51 0c-.2 0-.36.16-.36.36 0 .2.16.36.36.36.2 0 .36-.16.36-.36s-.17-.36-.36-.36zm9.03 0c-.2 0-.36.16-.36.36 0 .2.16.36.36.36.2 0 .36-.16.36-.36s-.16-.36-.36-.36zm3.01 0c-.2 0-.36.16-.36.36 0 .2.16.36.36.36.2 0 .36-.16.36-.36s-.16-.36-.36-.36zm-6.02 0c-.2 0-.36.16-.36.36 0 .2.16.36.36.36s.36-.16.36-.36-.16-.36-.36-.36zm4.51 0c-.2 0-.36.16-.36.36 0 .2.16.36.36.36s.36-.16.36-.36-.16-.36-.36-.36zm-3.01 0c-.2 0-.36.16-.36.36 0 .2.16.36.36.36s.36-.16.36-.36-.16-.36-.36-.36zm5.77.11c-.07.07-.1.16-.1.25s.04.19.1.25c.07.07.16.11.25.11.1 0 .19-.04.26-.11.07-.06.1-.16.1-.25s-.04-.19-.1-.25a.362.362 0 0 0-.51 0zM6.62 18.11c-.07.07-.11.16-.11.26 0 .09.04.19.11.25.07.07.16.1.26.1.09 0 .18-.04.25-.1.07-.07.11-.16.11-.25 0-.1-.04-.19-.11-.26-.14-.13-.38-.13-.51 0zm1.76-.1c-.2 0-.36.16-.36.36s.16.36.36.36c.2 0 .36-.16.36-.36s-.17-.36-.36-.36zm9.03 0c-.2 0-.36.16-.36.36s.16.36.36.36c.2 0 .36-.16.36-.36s-.16-.36-.36-.36zm-1.51 0c-.2 0-.36.16-.36.36s.16.36.36.36.36-.16.36-.36-.16-.36-.36-.36zm3.01 0c-.2 0-.36.16-.36.36s.16.36.36.36.36-.16.36-.36-.16-.36-.36-.36zm1.51 0c-.2 0-.36.16-.36.36s.16.36.36.36c.2 0 .36-.16.36-.36s-.16-.36-.36-.36zm-6.02 0c-.2 0-.36.16-.36.36s.16.36.36.36.36-.16.36-.36-.16-.36-.36-.36zm-3.01 0c-.2 0-.36.16-.36.36s.16.36.36.36c.2 0 .36-.16.36-.36s-.17-.36-.36-.36zm1.5 0c-.2 0-.36.16-.36.36s.16.36.36.36c.2 0 .36-.16.36-.36s-.16-.36-.36-.36zm-3.01 0c-.2 0-.36.16-.36.36s.16.36.36.36c.2 0 .36-.16.36-.36s-.16-.36-.36-.36zm11.79.1c-.07.07-.1.16-.1.26 0 .09.04.19.1.25.07.07.16.1.25.1a.4.4 0 0 0 .26-.1c.07-.07.1-.16.1-.25 0-.1-.04-.19-.1-.25-.14-.14-.38-.14-.51-.01z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"pfe-icon-server-alt2\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25.11 14.11a.288.288 0 0 0-.16-.35l-2.82-1.38a.308.308 0 0 0-.13-.03H10.43c-.04 0-.08.01-.12.02l-3.24 1.38c-.14.06-.21.22-.17.36-.01.03-.02.05-.02.08v5.15c0 .17.14.31.31.31h17.63c.17 0 .31-.14.31-.31v-5.15c-.01-.03-.02-.05-.02-.08zm-14.62-1.15h11.44l1.89.92H8.32c0 .01 2.17-.92 2.17-.92zm14.02 6.08H7.49v-4.46h17.02v4.46zM8.6 16.14c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm0 1.5c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm14.73-1.71H10.46c-.08 0-.15-.07-.15-.15s.07-.15.15-.15h12.87c.08 0 .15.07.15.15s-.07.15-.15.15zm0 1.84H10.46c-.08 0-.15-.07-.15-.15 0-.08.07-.15.15-.15h12.87c.08 0 .15.07.15.15 0 .09-.07.15-.15.15zm0-.92H10.46c-.08 0-.15-.07-.15-.15 0-.08.07-.15.15-.15h12.87c.08 0 .15.07.15.15 0 .09-.07.15-.15.15z\"/></symbol><symbol id=\"pfe-icon-server-deploy\" viewBox=\"0 0 32 32\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><style>.st0{fill:#010101}</style><path class=\"st0\" d=\"M15.77 17.45c.06.07.14.11.23.11s.17-.04.23-.11l5-6.01c.16-.19.19-.46.06-.69a.599.599 0 0 0-.62-.3l-2.05.3V3.88a.3.3 0 0 0-.3-.3h-4.67a.3.3 0 0 0-.3.3v6.88l-2.05-.3a.606.606 0 0 0-.62.3c-.12.22-.1.49.06.69l5.03 6zm-2.15-6.06a.3.3 0 0 0 .24-.07c.06-.06.1-.14.1-.22V4.17h4.07v6.92c0 .09.04.17.1.22a.3.3 0 0 0 .24.07l2.4-.33L16 16.79l-4.76-5.76 2.38.36zM25.69 20.22l-3.04-1.53c-.03-.02-.07-.02-.1-.02H9.96c-.03 0-.06.01-.09.02l-3.55 1.53c-.08.03-.13.11-.13.2v5.78c0 .12.1.22.22.22h19.18c.12 0 .22-.1.22-.22v-5.78a.24.24 0 0 0-.12-.2zM10 19.12h12.5l2.49 1.25H7.1l2.9-1.25zm15.37 6.86H6.63v-5.16h18.73c.01-.01.01 5.16.01 5.16z\"/><path class=\"st0\" d=\"M21.15 24.74h1.02c.08 0 .15-.07.15-.15v-2.64c0-.08-.07-.15-.15-.15h-1.02c-.08 0-.15.07-.15.15v2.64c0 .09.07.15.15.15zm.15-2.64h.72v2.35h-.72V22.1zM23.15 24.74h1.02c.08 0 .15-.07.15-.15v-2.64c0-.08-.07-.15-.15-.15h-1.02c-.08 0-.15.07-.15.15v2.64c0 .09.07.15.15.15zm.15-2.64h.72v2.35h-.72V22.1z\"/><circle class=\"st0\" cx=\"8.43\" cy=\"23.37\" r=\".48\"/><circle class=\"st0\" cx=\"10.05\" cy=\"23.37\" r=\".48\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"pfe-icon-server-stack\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25.11 6.52a.288.288 0 0 0-.16-.35l-2.82-1.38a.201.201 0 0 0-.13-.04H10.43c-.04 0-.08.01-.12.02L7.06 6.16a.3.3 0 0 0-.17.36c0 .02-.01.05-.01.08v20.34c0 .17.14.31.31.31h17.63c.17 0 .31-.14.31-.31V16.78v-.02V6.6c-.01-.03-.02-.06-.02-.08zM10.49 5.37h11.44l1.89.92H8.32l2.17-.92zm14.02 21.26H7.49v-4.46h17.02v4.46zm0-5.07H7.49V17.1h17.02v4.46zm0-5.12H7.49v-4.46h17.02v4.46zm0-7.65v.91-.91zm0 2.58H7.49V6.9h17.02v4.47zM8.62 9.06c0 .24.19.43.42.43s.42-.19.42-.42v-.01c0-.23-.19-.42-.42-.42s-.42.18-.42.42zm1.49 0v.01c0 .23.19.42.42.42s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.42v.01zm-1.49 5.21c0 .24.19.43.42.43s.42-.19.42-.42v-.01c0-.23-.19-.42-.42-.42s-.42.18-.42.42zm1.49 0v.01c0 .23.19.42.42.42s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.42v.01zm-1.49 4.91c0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.17-.42.41c0-.01 0-.01 0 0zm1.49 0v.01c0 .23.19.42.42.42s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.42v.01zm-1.49 5.21c0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.17-.42.41c0-.01 0 0 0 0zm1.49 0v.01c0 .23.19.42.42.42s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.42v.01zm13.57-14c0 .08-.07.15-.15.15h-.92c-.08 0-.15-.07-.15-.15V7.94c0-.09.07-.15.15-.15h.92c.08 0 .15.07.15.15v2.45zm-.92-.15h.61V8.09h-.61v2.15zm-.91.15c0 .08-.07.15-.15.15h-.92c-.08 0-.15-.07-.15-.15V7.94c0-.09.07-.15.15-.15h.92c.08 0 .15.07.15.15v2.45zm-.92-.15h.61V8.09h-.61v2.15zm2.75 5.36c0 .09-.07.15-.15.15h-.92c-.08 0-.15-.07-.15-.15v-2.45c0-.08.07-.15.15-.15h.92c.08 0 .15.07.15.15v2.45zm-.92-.15h.61V13.3h-.61v2.15zm-.91.15c0 .09-.07.15-.15.15h-.92c-.08 0-.15-.07-.15-.15v-2.45c0-.08.07-.15.15-.15h.92c.08 0 .15.07.15.15v2.45zm-.92-.15h.61V13.3h-.61v2.15zm2.75 5.06c0 .08-.07.15-.15.15h-.92c-.08 0-.15-.07-.15-.15v-2.45c0-.08.07-.15.15-.15h.92c.08 0 .15.07.15.15v2.45zm-.92-.15h.61v-2.15h-.61v2.15zm-.91.15c0 .08-.07.15-.15.15h-.92c-.08 0-.15-.07-.15-.15v-2.45c0-.08.07-.15.15-.15h.92c.08 0 .15.07.15.15v2.45zm-.92-.15h.61v-2.15h-.61v2.15zm2.75 5.36c0 .08-.07.15-.15.15h-.92c-.08 0-.15-.07-.15-.15v-2.45c0-.08.07-.15.15-.15h.92c.08 0 .15.07.15.15v2.45zm-.92-.15h.61v-2.15h-.61v2.15zm-.91.15c0 .08-.07.15-.15.15h-.92c-.08 0-.15-.07-.15-.15v-2.45c0-.08.07-.15.15-.15h.92c.08 0 .15.07.15.15v2.45zm-.92-.15h.61v-2.15h-.61v2.15z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"pfe-icon-server-stack-alt1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.66 9.86c0 .24.19.43.42.43s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.43zm1.49 5.12c0 .23.19.42.42.42s.43-.19.43-.42-.19-.42-.42-.42-.43.18-.43.42zm-1.49 0c0 .24.19.43.42.43s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.43c0-.01 0-.01 0 0zm0-1.53c0 .24.19.43.42.43s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.43zm1.49 0c0 .23.19.42.42.42s.43-.19.43-.42-.19-.42-.42-.42-.43.19-.43.42zm7.56-5.12v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zM8.62 13.45c0 .24.19.43.42.43s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.43zm1.49 0c0 .24.19.43.42.43s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.43zm-1.49 1.53c0 .24.19.43.42.43s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.43c0-.01 0-.01 0 0zm1.49 0c0 .24.19.43.42.43s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.43c0-.01 0-.01 0 0zm4.58 0c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.18-.42.42zm3.04-1.53c0 .23.19.42.42.42s.42-.19.42-.42-.19-.42-.42-.42c-.24 0-.42.19-.42.42zm1.49 1.53v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm0-1.53v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm-4.53 0c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm6.02 1.53v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm-2.98 0c0 .23.19.42.42.42s.42-.19.42-.42-.19-.42-.42-.42c-.24-.01-.42.18-.42.42zm-1.55 0v.01c0 .23.19.42.42.42s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm0-1.53v.01c0 .23.19.42.42.42s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm-1.49-5.12c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm6.02 15.33v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zM11.66 8.33s0 .01 0 0c0 .24.19.43.42.43s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.43zm-1.55 1.53c0 .24.19.43.42.43s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.43zm3.04 0c0 .23.19.42.42.42s.43-.19.43-.42-.19-.42-.42-.42-.43.19-.43.42zm11.96-3.34a.288.288 0 0 0-.16-.35l-2.82-1.38a.284.284 0 0 0-.13-.04H10.43c-.04 0-.08.01-.12.02L7.06 6.16a.3.3 0 0 0-.17.36c0 .02-.01.05-.01.08v20.35c0 .17.14.31.31.31h17.63c.17 0 .31-.14.31-.31V16.79v-.02V6.6c-.01-.03-.02-.06-.02-.08zM10.49 5.37h11.44l1.89.92H8.32l2.17-.92zm14.02 19.49h-1.54c-.25 0-.46-.2-.46-.46s.2-.46.46-.46h1.54v.92zm0-1.22h-1.54a.76.76 0 1 0 0 1.52h1.54v1.47H7.49v-4.46h17.02v1.47zm0-3.74h-1.54c-.25 0-.46-.2-.46-.46s.2-.46.46-.46h1.54v.92zm0-1.22h-1.54a.76.76 0 1 0 0 1.52h1.54v1.36H7.49V17.1h17.02v1.58zm0-4.01h-1.54c-.25 0-.46-.2-.46-.46s.2-.46.46-.46h1.54v.92zm0-1.22h-1.54a.76.76 0 1 0 0 1.52h1.54v1.47H7.49v-4.46h17.02v1.47zm0-3.74h-1.54c-.25 0-.46-.2-.46-.46s.2-.46.46-.46h1.54v.92zm0-1.22h-1.54a.76.76 0 1 0 0 1.52h1.54v1.36H7.49V6.9h17.02v1.59zM8.62 8.33s0 .01 0 0c0 .24.19.43.42.43s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.43zm4.53 0a.425.425 0 1 0 .85 0c0-.24-.19-.42-.42-.42s-.43.19-.43.42zM8.62 9.86c0 .24.19.43.42.43s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.43zm7.56-1.53v.01c0 .23.19.42.42.42s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm1.55 0c0 .23.19.42.42.42s.42-.19.42-.42-.19-.42-.42-.42c-.24 0-.42.19-.42.42zm0 1.53c0 .23.19.42.42.42s.42-.19.42-.42-.19-.42-.42-.42c-.24 0-.42.19-.42.42zm1.49 0v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm0-1.53v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm-4.53 1.53c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm6.02 3.59v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm-4.53-3.59v.01c0 .23.19.42.42.42s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm4.53 0v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm-10.6-1.53s0 .01 0 0c0 .24.19.43.42.43s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42s-.42.19-.42.43zm4.58 16.86c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm-3.03 0c0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.17-.42.41zm-3.04 0c0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.17-.42.41zm4.53-1.53a.425.425 0 1 0 .85 0c0-.23-.19-.42-.42-.42s-.43.19-.43.42zm-1.49 0c0 .01 0 .01 0 0 0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.18-.42.41zm-3.04 0c0 .01 0 .01 0 0 0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.18-.42.41zm1.49 0c0 .01 0 .01 0 0 0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.18-.42.41zm0 1.53c0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.17-.42.41zm3.04 0c0 .23.19.42.42.42s.43-.19.43-.42c0-.23-.19-.42-.42-.42s-.43.19-.43.42zm6.07 0v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm0-1.53v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm1.49 1.53v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm-2.98-1.53c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42-.24 0-.42.19-.42.42zm0 1.53c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42-.24 0-.42.19-.42.42zm-1.55 0v.01c0 .23.19.42.42.42s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm-1.49-1.53c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm1.49 0v.01c0 .23.19.42.42.42s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm-3.03-5.1a.425.425 0 1 0 .85 0c0-.23-.19-.42-.42-.42s-.43.19-.43.42zm1.54 1.53c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm-1.54 0c0 .23.19.42.42.42s.43-.19.43-.42c0-.23-.19-.42-.42-.42s-.43.19-.43.42zm-4.53 0c0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.17-.42.41zm3.04 0c0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.17-.42.41zm0-1.53c0 .01 0 .01 0 0 0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.18-.42.41zm-3.04 0c0 .01 0 .01 0 0 0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.18-.42.41zm1.49 1.53c0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.17-.42.41zm0-1.53c0 .01 0 .01 0 0 0 .24.19.43.42.43s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.18-.42.41zm7.62 1.53c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42-.24 0-.42.19-.42.42zm1.49 0v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm0-1.53v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm-1.49 0c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42-.24 0-.42.19-.42.42zm-3.04 0c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm6.02 1.53v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm0-1.53v.01c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm-4.53 1.53v.01c0 .23.19.42.42.42s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01zm0-1.53v.01c0 .23.19.42.42.42s.42-.19.42-.42v-.01-.01c0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42v.01z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"pfe-icon-server-stack-alt2\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25.11 6.52a.288.288 0 0 0-.16-.35l-2.82-1.38a.201.201 0 0 0-.13-.04H10.43c-.04 0-.08.01-.12.02L7.06 6.16a.3.3 0 0 0-.17.36c0 .02-.01.05-.01.08v20.34c0 .17.14.31.31.31h17.63c.17 0 .31-.14.31-.31V16.78v-.02V6.6c-.01-.03-.02-.06-.02-.08zM10.49 5.36h11.44l1.89.92H8.32c0 .01 2.17-.92 2.17-.92zm14.02 21.27H7.49v-4.46h17.02v4.46zm0-5.07H7.49V17.1h17.02v4.46zm0-5.12H7.49v-4.46h17.02v4.46zm0-7.65v.91-.91zm0 2.57H7.49V6.9h17.02v4.46zM8.6 8.41c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm0 1.5c0 .23.19.42.42.42s.42-.19.42-.42-.18-.42-.42-.42-.42.19-.42.42zm14.73-1.57H10.45c-.08 0-.15-.07-.15-.15 0-.08.07-.15.15-.15h12.87c.08 0 .15.07.15.15.01.08-.06.15-.14.15zm0 .92H10.45c-.08 0-.15-.07-.15-.15s.07-.15.15-.15h12.87c.08 0 .15.07.15.15.01.08-.06.15-.14.15zm0 .92H10.45c-.08 0-.15-.07-.15-.15s.07-.15.15-.15h12.87c.08 0 .15.07.15.15s-.06.15-.14.15zm0 3.37H10.45c-.08 0-.15-.07-.15-.15s.07-.15.15-.15h12.87c.08 0 .15.07.15.15s-.06.15-.14.15zm0 .92H10.45c-.08 0-.15-.07-.15-.15s.07-.15.15-.15h12.87c.08 0 .15.07.15.15s-.06.15-.14.15zm0 .92H10.45c-.08 0-.15-.07-.15-.15s.07-.15.15-.15h12.87c.08 0 .15.07.15.15s-.06.15-.14.15zm0 3.06H10.45c-.08 0-.15-.07-.15-.15s.07-.15.15-.15h12.87c.08 0 .15.07.15.15s-.06.15-.14.15zm0 .92H10.45c-.08 0-.15-.07-.15-.15s.07-.15.15-.15h12.87c.08 0 .15.07.15.15s-.06.15-.14.15zm0 .92H10.45c-.08 0-.15-.07-.15-.15s.07-.15.15-.15h12.87c.08 0 .15.07.15.15s-.06.15-.14.15zm0 3.37H10.45c-.08 0-.15-.07-.15-.15s.07-.15.15-.15h12.87c.08 0 .15.07.15.15s-.06.15-.14.15zm0 .92H10.45c-.08 0-.15-.07-.15-.15s.07-.15.15-.15h12.87c.08 0 .15.07.15.15s-.06.15-.14.15zm0 .92H10.45c-.08 0-.15-.07-.15-.15s.07-.15.15-.15h12.87c.08 0 .15.07.15.15s-.06.15-.14.15zM8.6 13.62c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm0 1.5c0 .23.19.42.42.42s.42-.19.42-.42-.18-.42-.42-.42-.42.19-.42.42zm0 3.41c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm0 1.49c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm0 3.72c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42zm0 1.49c0 .23.19.42.42.42s.42-.19.42-.42c0-.23-.19-.42-.42-.42s-.42.19-.42.42z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"pfe-icon-server-vintage\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24.8 5.94a.285.285 0 0 0-.15-.34l-2.72-1.33a.308.308 0 0 0-.13-.03H10.62c-.04 0-.08.01-.12.02L7.36 5.59c-.13.06-.2.21-.16.35-.01.02-.02.05-.02.07v21.46c0 .16.13.3.3.3h17.04a.3.3 0 0 0 .3-.3v-9.81-.02V6.01c0-.03-.01-.05-.02-.07zM10.68 4.82h11.05l1.82.89H8.58l2.1-.89zm-2.9 7.6V6.31h16.45v9.3H7.78v-3.19zm16.45 14.76H7.78V15.91h16.45v11.27zm-9.05-3.57H9.21c-.08 0-.15.07-.15.15s.07.15.15.15h5.97c.08 0 .15-.07.15-.15s-.07-.15-.15-.15zm0-1.56H9.21c-.08 0-.15.07-.15.15 0 .08.07.15.15.15h5.97c.08 0 .15-.07.15-.15 0-.08-.07-.15-.15-.15zm0-1.56H9.21c-.08 0-.15.07-.15.15 0 .08.07.15.15.15h5.97c.08 0 .15-.07.15-.15 0-.08-.07-.15-.15-.15zm0-1.56H9.21c-.08 0-.15.07-.15.15 0 .08.07.15.15.15h5.97c.08 0 .15-.07.15-.15 0-.08-.07-.15-.15-.15zm-5.97-6.52h6.04c.17 0 .3-.13.3-.3a.3.3 0 0 0-.3-.3H9.21a.3.3 0 0 0-.3.3c0 .17.13.3.3.3zm0-3.51h6.04c.17 0 .3-.13.3-.3a.3.3 0 0 0-.3-.3H9.21a.3.3 0 0 0-.3.3c0 .16.13.3.3.3zm5.97 9.25H9.21c-.08 0-.15.07-.15.15 0 .08.07.15.15.15h5.97c.08 0 .15-.07.15-.15 0-.08-.07-.15-.15-.15zm7.4 5.46h-5.97c-.08 0-.15.07-.15.15s.07.15.15.15h5.97c.08 0 .15-.07.15-.15s-.07-.15-.15-.15zm0-1.56h-5.97c-.08 0-.15.07-.15.15 0 .08.07.15.15.15h5.97c.08 0 .15-.07.15-.15 0-.08-.07-.15-.15-.15zm0-1.56h-5.97c-.08 0-.15.07-.15.15 0 .08.07.15.15.15h5.97c.08 0 .15-.07.15-.15 0-.08-.07-.15-.15-.15zm0-1.56h-5.97c-.08 0-.15.07-.15.15 0 .08.07.15.15.15h5.97c.08 0 .15-.07.15-.15 0-.08-.07-.15-.15-.15zm0-.78h-5.97c-.08 0-.15.07-.15.15 0 .08.07.15.15.15h5.97c.08 0 .15-.07.15-.15 0-.08-.07-.15-.15-.15zm-7.4 6.25H9.21c-.08 0-.15.07-.15.15s.07.15.15.15h5.97c.08 0 .15-.07.15-.15s-.07-.15-.15-.15zm0-1.57H9.21c-.08 0-.15.07-.15.15 0 .08.07.15.15.15h5.97c.08 0 .15-.07.15-.15 0-.08-.07-.15-.15-.15zm0-1.56H9.21c-.08 0-.15.07-.15.15s.07.15.15.15h5.97c.08 0 .15-.07.15-.15s-.07-.15-.15-.15zm0-1.56H9.21c-.08 0-.15.07-.15.15s.07.15.15.15h5.97c.08 0 .15-.07.15-.15s-.07-.15-.15-.15zm0-2.34H9.21c-.08 0-.15.07-.15.15s.07.15.15.15h5.97c.08 0 .15-.07.15-.15s-.07-.15-.15-.15zm7.4 7.03h-5.97c-.08 0-.15.07-.15.15s.07.15.15.15h5.97c.08 0 .15-.07.15-.15s-.07-.15-.15-.15zm0-1.57h-5.97c-.08 0-.15.07-.15.15 0 .08.07.15.15.15h5.97c.08 0 .15-.07.15-.15 0-.08-.07-.15-.15-.15zm0-1.56h-5.97c-.08 0-.15.07-.15.15s.07.15.15.15h5.97c.08 0 .15-.07.15-.15s-.07-.15-.15-.15zm0-1.56h-5.97c-.08 0-.15.07-.15.15s.07.15.15.15h5.97c.08 0 .15-.07.15-.15s-.07-.15-.15-.15zm0-2.34h-5.97c-.08 0-.15.07-.15.15s.07.15.15.15h5.97c.08 0 .15-.07.15-.15s-.07-.15-.15-.15zm-13.37-3.2h6.04c.17 0 .3-.13.3-.3a.3.3 0 0 0-.3-.3H9.21a.3.3 0 0 0-.3.3c0 .16.13.3.3.3zm0-3.52h6.04c.17 0 .3-.13.3-.3a.3.3 0 0 0-.3-.3H9.21c-.16 0-.3.13-.3.3s.13.3.3.3zm7.34-2.03c0 .23.18.41.41.41s.41-.18.41-.41c0-.23-.18-.41-.41-.41a.4.4 0 0 0-.41.41c0-.01 0-.01 0 0zm1.16 0c0 .23.18.41.41.41s.41-.18.41-.41c0-.23-.18-.41-.41-.41a.4.4 0 0 0-.41.41c0-.01 0-.01 0 0zm1.15 0c0 .23.18.41.41.41.23 0 .41-.18.41-.41s-.18-.41-.41-.41c-.23 0-.41.18-.41.41zm-2.31 1.15v4.43c0 .08.07.15.15.15h5.82c.08 0 .15-.07.15-.15V9.77c0-.08-.07-.15-.15-.15H16.7c-.08.01-.15.07-.15.15zm5.82 2.42h-5.52v-.48h5.52v.48zm-5.52.3h5.52v.48h-5.52v-.48zm5.52-1.08h-5.52v-.48h5.52v.48zm-5.52 2.64v-.78h5.52v.78h-5.52zm5.52-4.13v.7h-5.52v-.7h5.52z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"pfe-icon-server-vintage-alt1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25.11 6.52a.288.288 0 0 0-.16-.35l-2.82-1.38a.22.22 0 0 0-.13-.04H10.43c-.04 0-.08.01-.12.03L7.06 6.16a.3.3 0 0 0-.17.36c0 .02-.01.05-.01.08v20.34c0 .17.14.31.31.31h17.63c.17 0 .31-.14.31-.31V16.79v-.02V6.6c-.01-.03-.02-.06-.02-.08zM10.49 5.37h11.44l1.89.92H8.32l2.17-.92zm14.02 3.11v18.15H7.49V6.9h17.02v1.58zm-7.85 16.37h7c.08 0 .15-.07.15-.15V7.96c0-.09-.07-.15-.15-.15h-7c-.08 0-.15.07-.15.15V24.7c0 .08.07.15.15.15zm6.85-9.33h-6.69v-3.6h6.69v3.6zm-6.69 9.02v-8.72h6.69v8.72h-6.69zm6.69-16.43v3.5h-6.69v-3.5h6.69zm-5.88 1.41h5.11c.17 0 .31-.14.31-.31 0-.17-.14-.31-.31-.31h-5.11c-.17 0-.31.14-.31.31 0 .17.14.31.31.31zm0 1.35h5.11c.17 0 .31-.14.31-.31s-.14-.31-.31-.31h-5.11c-.17 0-.31.14-.31.31 0 .17.14.31.31.31zM8.98 9.41h5.76c.09 0 .15-.07.15-.15 0-.09-.07-.15-.15-.15H8.98c-.09 0-.15.07-.15.15 0 .08.07.15.15.15zm0 .76h5.76c.09 0 .15-.07.15-.15 0-.09-.07-.15-.15-.15H8.98c-.09 0-.15.07-.15.15 0 .08.07.15.15.15zm0 .75h5.76c.09 0 .15-.07.15-.15 0-.08-.07-.15-.15-.15H8.98c-.09 0-.15.07-.15.15 0 .08.07.15.15.15zm0 1.45h5.76c.09 0 .15-.07.15-.15 0-.09-.07-.15-.15-.15H8.98c-.09 0-.15.07-.15.15 0 .08.07.15.15.15zm0 .75h5.76c.09 0 .15-.07.15-.15 0-.08-.07-.15-.15-.15H8.98c-.09 0-.15.07-.15.15 0 .08.07.15.15.15zm0 .76h5.76c.09 0 .15-.07.15-.15 0-.08-.07-.15-.15-.15H8.98c-.09 0-.15.07-.15.15 0 .08.07.15.15.15zm0 1.44h5.76c.09 0 .15-.07.15-.15 0-.09-.07-.15-.15-.15H8.98c-.09 0-.15.07-.15.15 0 .08.07.15.15.15zm0 .76h5.76c.09 0 .15-.07.15-.15 0-.09-.07-.15-.15-.15H8.98c-.09 0-.15.07-.15.15 0 .08.07.15.15.15zm0 .75h5.76c.09 0 .15-.07.15-.15s-.07-.15-.15-.15H8.98c-.09 0-.15.07-.15.15 0 .09.07.15.15.15zm8.65-3.4h5.11c.17 0 .31-.14.31-.31 0-.17-.14-.31-.31-.31h-5.11c-.17 0-.31.14-.31.31 0 .17.14.31.31.31zm5.11.73h-5.11c-.17 0-.31.14-.31.31 0 .17.14.31.31.31h5.11c.17 0 .31-.14.31-.31s-.13-.31-.31-.31zm-5.35 2.8c0 .24.19.43.42.43.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42-.23-.02-.42.17-.42.41zm1.19 0c0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42zm1.2 0c0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42-.23 0-.42.19-.42.42z\"/></symbol></svg>";
    document.head.appendChild(cpRHIconTemplate);
  }

  var PfeIcon = function (_PFElement) {
    inherits(PfeIcon, _PFElement);
    createClass(PfeIcon, [{
      key: "html",
      get: function get$$1() {
        return "<style>:host {\n  --pfe-icon--spacing:                 var(--pfe-theme--container-spacer, 1rem);\n  --pfe-icon--size:                    var(--pfe-theme--icon-size, 1em);\n  --pfe-icon--color--bg:               transparent;\n  --pfe-icon--color--border:           transparent;\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 50%;\n  background: var(--pfe-icon--color--bg);\n  border: var(--pfe-icon--color--border); }\n  :host,\n  :host svg {\n    width: 1em;\n    height: 1em; }\n  :host svg {\n    fill: var(--pfe-broadcasted--color--text); }\n  :host([data-block]) {\n    display: block;\n    margin-bottom: var(--pfe-icon--spacing);\n    margin-top: var(--pfe-icon--spacing); }\n    :host([data-block]):first-child {\n      margin-top: 0; }\n\n:host([size=\"2x\"]),\n:host([size=\"2x\"]) svg {\n  width: 2em;\n  height: 2em; }\n\n:host([size=\"3x\"]),\n:host([size=\"3x\"]) svg {\n  width: 3em;\n  height: 3em; }\n\n:host([size=\"4x\"]),\n:host([size=\"4x\"]) svg {\n  width: 4em;\n  height: 4em; }\n\n:host([size=\"xl\"]),\n:host([size=\"xl\"]) svg {\n  width: 100px;\n  height: 100px; }\n\n:host([size=\"lg\"]),\n:host([size=\"lg\"]) svg {\n  width: 64px;\n  height: 64px; }\n\n:host([size=\"md\"]),\n:host([size=\"md\"]) svg {\n  width: 32px;\n  height: 32px; }\n\n:host([size=\"sm\"]),\n:host([size=\"sm\"]) svg {\n  width: 14px;\n  height: 14px; }\n\n:host([color=\"base\"]) {\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--ui-base, #0477a4); }\n\n:host([color=\"complement\"]) {\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--ui-complement, #464646); }\n\n:host([color=\"accent\"]) {\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--ui-accent, #fe460d); }\n\n:host([color=\"critical\"]) {\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--feedback--critical, #990000); }\n\n:host([color=\"important\"]) {\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--feedback--important, #d73401); }\n\n:host([color=\"moderate\"]) {\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--feedback--moderate, #ffc024); }\n\n:host([color=\"success\"]) {\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--feedback--success, #2e7d32); }\n\n:host([color=\"info\"]) {\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--feedback--info, #0277bd); }\n\n:host([color=\"default\"]) {\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--feedback--default, #606060); }\n\n:host([circled]) {\n  --pfe-icon--color--bg:               transparent;\n  --pfe-icon--color--border:           var(--pfe-theme--color--surface--border, #dfdfdf);\n  padding: 0.05em; }\n\n:host([circled=\"base\"]) {\n  --pfe-icon--color--bg:               var(--pfe-theme--color--surface--base, #dfdfdf);\n  --pfe-icon--color--border:           transparent;\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--surface--base--text, #333); }\n\n:host([circled=\"lightest\"]) {\n  --pfe-icon--color--bg:               var(--pfe-theme--color--surface--lightest, #fff);\n  --pfe-icon--color--border:           transparent;\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--surface--lightest--text, #333); }\n\n:host([circled=\"light\"]) {\n  --pfe-icon--color--bg:               var(--pfe-theme--color--surface--lighter, #ececec);\n  --pfe-icon--color--border:           transparent;\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--surface--lighter--text, #333); }\n\n:host([circled=\"dark\"]) {\n  --pfe-icon--color--bg:               var(--pfe-theme--color--surface--darker, #464646);\n  --pfe-icon--color--border:           transparent;\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--surface--darker--text, #fff); }\n\n:host([circled=\"darkest\"]) {\n  --pfe-icon--color--bg:               var(--pfe-theme--color--surface--darkest, #131313);\n  --pfe-icon--color--border:           transparent;\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--surface--darkest--text, #fff); }\n\n:host([circled=\"complement\"]) {\n  --pfe-icon--color--bg:               var(--pfe-theme--color--surface--complement, #0477a4);\n  --pfe-icon--color--border:           transparent;\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--surface--complement--text, #fff); }\n\n:host([circled=\"accent\"]) {\n  --pfe-icon--color--bg:               var(--pfe-theme--color--surface--accent, #fe460d);\n  --pfe-icon--color--border:           transparent;\n  --pfe-broadcasted--color--text:      var(--pfe-theme--color--surface--accent--text, #fff); }</style>\n<svg viewBox=\"0 0 32 32\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" style=\"pointer-events: none; display: block; width: 100%; height: 100%\">\n  <g>\n    <path d=\"\"></path>\n  </g>\n</svg>";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "pfe-icon.scss";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "pfe-icon.html";
      }
    }], [{
      key: "tag",
      get: function get$$1() {
        return "pfe-icon";
      }
    }, {
      key: "observedAttributes",
      get: function get$$1() {
        return ["icon"];
      }
    }]);

    function PfeIcon() {
      classCallCheck(this, PfeIcon);
      return possibleConstructorReturn(this, (PfeIcon.__proto__ || Object.getPrototypeOf(PfeIcon)).call(this, PfeIcon));
    }

    createClass(PfeIcon, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "icon") {
          if (!newVal) {
            console.warn("pfe-icon: no icon name provided");
            return;
          }

          var svgPath = this.ownerDocument.head.querySelector("#" + newVal + " path");

          if (!svgPath) {
            console.warn("pfe-icon: unable to find svg path for " + newVal);
            return;
          }

          this.shadowRoot.querySelector("svg g path").setAttribute("d", svgPath.getAttribute("d"));
        }
      }
    }]);
    return PfeIcon;
  }(PFElement);

  PFElement.create(PfeIcon);

})));
//# sourceMappingURL=pfe-icon.umd.js.map

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../pfelement/pfelement.umd')) :
  typeof define === 'function' && define.amd ? define(['../pfelement/pfelement.umd'], factory) :
  (global.PfeTabs = factory(global.PFElement));
}(this, (function (PFElement) { 'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /*
   * Copyright 2019 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, "find", {
      value: function value(predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== "function") {
          throw new TypeError("predicate must be a function");
        }

        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];

        // 5. Let k be 0.
        var k = 0;

        // 6. Repeat, while k < len
        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return kValue.
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          // e. Increase k by 1.
          k++;
        }

        // 7. Return undefined.
        return undefined;
      },
      configurable: true,
      writable: true
    });
  }

  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, "findIndex", {
      value: function value(predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== "function") {
          throw new TypeError("predicate must be a function");
        }

        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];

        // 5. Let k be 0.
        var k = 0;

        // 6. Repeat, while k < len
        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return k.
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return k;
          }
          // e. Increase k by 1.
          k++;
        }

        // 7. Return -1.
        return -1;
      },
      configurable: true,
      writable: true
    });
  }

  var KEYCODE = {
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    HOME: 36,
    END: 35
  };

  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  var PfeTabs = function (_PFElement) {
    inherits(PfeTabs, _PFElement);
    createClass(PfeTabs, [{
      key: 'html',
      get: function get$$1() {
        return '<style>:host {\n  display: block; }\n\n.tabs {\n  --pfe-tabs--BorderColor: var(--pfe-theme--color--surface--border, #dfdfdf);\n  display: flex;\n  border: 0;\n  border-bottom: var(--pfe-theme--ui--border-width, 1px) var(--pfe-theme--ui--border-style, solid) var(--pfe-tabs--BorderColor); }\n\n.panels {\n  padding: 0;\n  padding-top: var(--pfe-theme--container-padding, 1rem); }\n\n:host([vertical]) {\n  display: flex; }\n\n:host([vertical]) .tabs {\n  flex-direction: column;\n  width: 25%;\n  border: 0;\n  border-right: var(--pfe-theme--ui--border-width, 1px) var(--pfe-theme--ui--border-style, solid) var(--pfe-tabs--BorderColor); }\n\n:host([vertical]) .tabs ::slotted(pfe-tab) {\n  margin: 0 -1px 0 0;\n  border: var(--pfe-theme--ui--border-width, 1px) var(--pfe-theme--ui--border-style, solid) transparent;\n  border-right: 0;\n  position: relative; }\n\n:host([vertical]) .tabs ::slotted(pfe-tab[aria-selected="true"]) {\n  border-color: var(--pfe-tabs--BorderColor);\n  border-right: 0; }\n\n:host([vertical]) .panels {\n  padding: 0;\n  padding-right: var(--pfe-theme--container-padding, 1rem);\n  padding-left: calc(var(--pfe-theme--container-padding, 1rem) * 2); }\n\n:host([pfe-variant="primary"]) .tabs {\n  border-bottom: transparent;\n  border-right: transparent; }\n\n:host([vertical][pfe-variant="primary"]) {\n  align-items: flex-start; }\n\n:host([pfe-variant="secondary"]) .tabs {\n  border-bottom: transparent; }\n\n:host([vertical][pfe-variant="secondary"]) .tabs {\n  justify-content: flex-start; }</style>\n<div class="tabs">\n  <slot name="tab"></slot>\n</div>\n<div class="panels">\n  <slot name="panel"></slot>\n</div>';
      }
    }, {
      key: 'styleUrl',
      get: function get$$1() {
        return "pfe-tabs.scss";
      }
    }, {
      key: 'templateUrl',
      get: function get$$1() {
        return "pfe-tabs.html";
      }
    }, {
      key: 'selectedIndex',
      get: function get$$1() {
        return this.getAttribute("selected-index");
      },
      set: function set$$1(value) {
        this.setAttribute("selected-index", value);
      }
    }], [{
      key: 'tag',
      get: function get$$1() {
        return "pfe-tabs";
      }
    }, {
      key: 'observedAttributes',
      get: function get$$1() {
        return ["vertical", "selected-index", "pfe-variant"];
      }
    }]);

    function PfeTabs() {
      classCallCheck(this, PfeTabs);

      var _this = possibleConstructorReturn(this, (PfeTabs.__proto__ || Object.getPrototypeOf(PfeTabs)).call(this, PfeTabs));

      _this._linked = false;

      _this._onSlotChange = _this._onSlotChange.bind(_this);
      _this._onClick = _this._onClick.bind(_this);

      _this._tabSlot = _this.shadowRoot.querySelector('slot[name="tab"]');
      _this._panelSlot = _this.shadowRoot.querySelector('slot[name="panel"]');

      _this._tabSlot.addEventListener("slotchange", _this._onSlotChange);
      _this._panelSlot.addEventListener("slotchange", _this._onSlotChange);
      return _this;
    }

    createClass(PfeTabs, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        get(PfeTabs.prototype.__proto__ || Object.getPrototypeOf(PfeTabs.prototype), 'connectedCallback', this).call(this);

        this.addEventListener("keydown", this._onKeyDown);
        this.addEventListener("click", this._onClick);

        if (!this.hasAttribute("role")) {
          this.setAttribute("role", "tablist");
        }

        if (!this.hasAttribute("selected-index")) {
          this.selectedIndex = 0;
        }

        Promise.all([customElements.whenDefined(PfeTab.tag), customElements.whenDefined(PfeTabPanel.tag)]).then(function () {
          return _this2._linkPanels();
        });
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        var _this3 = this;

        this.removeEventListener("keydown", this._onKeyDown);
        this._allTabs().forEach(function (tab) {
          return tab.removeEventListener("click", _this3._onClick);
        });
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        var _this4 = this;

        switch (attr) {
          case "pfe-variant":
            if (this.getAttribute("pfe-variant") === "primary") {
              this._allTabs().forEach(function (tab) {
                return tab.setAttribute("pfe-variant", "primary");
              });
            } else if (this.getAttribute("pfe-variant") === "secondary") {
              this._allTabs().forEach(function (tab) {
                return tab.setAttribute("pfe-variant", "secondary");
              });
            }
            break;

          case "vertical":
            if (this.hasAttribute("vertical")) {
              this.setAttribute("aria-orientation", "vertical");
              this._allPanels().forEach(function (panel) {
                return panel.setAttribute("vertical", "");
              });
              this._allTabs().forEach(function (tab) {
                return tab.setAttribute("vertical", "");
              });
            } else {
              this.removeAttribute("aria-orientation");
              this._allPanels().forEach(function (panel) {
                return panel.removeAttribute("vertical");
              });
              this._allTabs().forEach(function (tab) {
                return tab.removeAttribute("vertical");
              });
            }
            break;

          case "selected-index":
            Promise.all([customElements.whenDefined(PfeTab.tag), customElements.whenDefined(PfeTabPanel.tag)]).then(function () {
              _this4._linkPanels();
              _this4.selectIndex(newValue);
            });
        }
      }
    }, {
      key: 'select',
      value: function select(newTab) {
        if (!newTab) {
          return;
        }

        if (newTab.tagName.toLowerCase() !== "pfe-tab") {
          console.warn(PfeTabs.tag + ': the tab must be a pfe-tab element');
          return;
        }

        this.selectedIndex = this._getTabIndex(newTab);
      }
    }, {
      key: 'selectIndex',
      value: function selectIndex(_index) {
        if (_index === undefined) {
          return;
        }

        var index = parseInt(_index, 10);
        var tabs = this._allTabs();
        var tab = tabs[index];

        if (!tab) {
          console.warn(PfeTabs.tag + ': tab ' + _index + ' does not exist');
          return;
        }

        this._selectTab(tab);
      }
    }, {
      key: '_onSlotChange',
      value: function _onSlotChange() {
        this._linked = false;
        this._linkPanels();
      }
    }, {
      key: '_linkPanels',
      value: function _linkPanels() {
        var _this5 = this;

        if (this._linked) {
          return;
        }

        var tabs = this._allTabs();

        tabs.forEach(function (tab) {
          var panel = tab.nextElementSibling;
          if (panel.tagName.toLowerCase() !== "pfe-tab-panel") {
            console.warn(PfeTabs.tag + ': tab #' + tab.pfeId + ' is not a sibling of a <pfe-tab-panel>');
            return;
          }

          tab.setAttribute("aria-controls", panel.pfeId);
          panel.setAttribute("aria-labelledby", tab.pfeId);

          tab.addEventListener("click", _this5._onClick);
        });

        this._linked = true;
      }
    }, {
      key: '_allPanels',
      value: function _allPanels() {
        return [].concat(toConsumableArray(this.querySelectorAll("pfe-tab-panel")));
      }
    }, {
      key: '_allTabs',
      value: function _allTabs() {
        return [].concat(toConsumableArray(this.querySelectorAll("pfe-tab")));
      }
    }, {
      key: '_panelForTab',
      value: function _panelForTab(tab) {
        var panelId = tab.getAttribute("aria-controls");
        return this.querySelector('[pfe-id="' + panelId + '"]');
      }
    }, {
      key: '_prevTab',
      value: function _prevTab() {
        var tabs = this._allTabs();
        var newIdx = tabs.findIndex(function (tab) {
          return tab.selected;
        }) - 1;
        return tabs[(newIdx + tabs.length) % tabs.length];
      }
    }, {
      key: '_firstTab',
      value: function _firstTab() {
        var tabs = this._allTabs();
        return tabs[0];
      }
    }, {
      key: '_lastTab',
      value: function _lastTab() {
        var tabs = this._allTabs();
        return tabs[tabs.length - 1];
      }
    }, {
      key: '_nextTab',
      value: function _nextTab() {
        var tabs = this._allTabs();
        var newIdx = tabs.findIndex(function (tab) {
          return tab.selected;
        }) + 1;
        return tabs[newIdx % tabs.length];
      }
    }, {
      key: '_getTabIndex',
      value: function _getTabIndex(_tab) {
        var tabs = this._allTabs();
        var index = tabs.findIndex(function (tab) {
          return tab.pfeId === _tab.pfeId;
        });
        return index;
      }
    }, {
      key: 'reset',
      value: function reset() {
        var tabs = this._allTabs();
        var panels = this._allPanels();

        tabs.forEach(function (tab) {
          return tab.selected = false;
        });
        panels.forEach(function (panel) {
          return panel.hidden = true;
        });
      }
    }, {
      key: '_selectTab',
      value: function _selectTab(newTab) {
        this.reset();

        var newPanel = this._panelForTab(newTab);
        var newTabSelected = false;

        if (!newPanel) {
          throw new Error('No panel with pfeId ' + newPanel.pfeId);
        }

        if (this.selected && this.selected !== newTab) {
          newTabSelected = true;

          this.dispatchEvent(new CustomEvent(PfeTabs.tag + ':hidden-tab', {
            bubbles: true,
            detail: {
              tab: this.selected
            }
          }));
        }

        newTab.selected = true;
        newPanel.hidden = false;

        if (this._setFocus) {
          newTab.focus();
          this._setFocus = false;
        }

        var tabs = this._allTabs();
        var newIdx = tabs.findIndex(function (tab) {
          return tab.selected;
        });

        this.selected = newTab;

        if (newTabSelected) {
          this.dispatchEvent(new CustomEvent(PfeTabs.tag + ':shown-tab', {
            bubbles: true,
            detail: {
              tab: this.selected
            }
          }));
        }
      }
    }, {
      key: '_onKeyDown',
      value: function _onKeyDown(event) {
        if (event.target.getAttribute("role") !== "tab") {
          return;
        }

        if (event.altKey) {
          return;
        }

        var newTab = void 0;

        switch (event.keyCode) {
          case KEYCODE.LEFT:
          case KEYCODE.UP:
            newTab = this._prevTab();
            break;

          case KEYCODE.RIGHT:
          case KEYCODE.DOWN:
            newTab = this._nextTab();
            break;

          case KEYCODE.HOME:
            newTab = this._firstTab();
            break;

          case KEYCODE.END:
            newTab = this._lastTab();
            break;

          default:
            return;
        }

        event.preventDefault();

        this.selectedIndex = this._getTabIndex(newTab);
        this._setFocus = true;
      }
    }, {
      key: '_onClick',
      value: function _onClick(event) {
        if (event.currentTarget.getAttribute("role") !== "tab") {
          return;
        }

        this.selectedIndex = this._getTabIndex(event.currentTarget);
      }
    }]);
    return PfeTabs;
  }(PFElement);

  var PfeTab = function (_PFElement2) {
    inherits(PfeTab, _PFElement2);
    createClass(PfeTab, [{
      key: 'html',
      get: function get$$1() {
        return '<style>:host {\n  --pfe-tabs--main:         transparent;\n  --pfe-tabs--aux:          var(--pfe-theme--color--surface--lightest--text, #333);\n  --pfe-tabs--link:         var(--pfe-theme--color--surface--lightest--link, #06c);\n  --pfe-tabs--focus:        var(--pfe-theme--color--surface--lightest--link--focus, #003366);\n  position: relative;\n  display: block;\n  margin: 0 0 -1px;\n  padding-top: var(--pfe-theme--container-padding, 1rem);\n  padding-right: calc(var(--pfe-theme--container-padding, 1rem) * 3.375);\n  padding-bottom: calc(var(--pfe-theme--container-padding, 1rem) * 1.5);\n  padding-left: var(--pfe-theme--container-padding, 1rem);\n  border: var(--pfe-theme--ui--border-width, 1px) var(--pfe-theme--ui--border-style, solid) transparent;\n  border-bottom: 0;\n  background-color: var(--pfe-tabs--main);\n  color: var(--pfe-tabs--aux);\n  text-transform: var(--pfe-tabs__tab--TextTransform, none);\n  font-weight: var(--pfe-theme--font-weight--normal, 500);\n  white-space: nowrap;\n  cursor: pointer; }\n\n:host([aria-selected="true"]) {\n  --pfe-tabs--main: var(--pfe-theme--color--surface--lightest, #fff);\n  border-color: var(--pfe-theme--color--surface--border, #dfdfdf);\n  border-bottom: 0; }\n\n.indicator {\n  position: absolute;\n  bottom: 12px;\n  left: auto;\n  display: var(--pfe-tabs__indicator--Display, block);\n  height: var(--pfe-tabs__indicator--Height, 4px);\n  width: var(--pfe-tabs__indicator--Width, 22px);\n  background-color: var(--pfe-theme--color--surface--border--darkest, #464646); }\n\n:host(:hover) .indicator {\n  background-color: var(--pfe-tabs--link); }\n\n:host([aria-selected="true"]) .indicator,\n:host([aria-selected="true"]:hover) .indicator {\n  background-color: var(--pfe-tabs--link); }\n\n:host(:focus),\n:host(:focus-visible) {\n  outline: var(--pfe-theme--ui--focus-outline-width, 1px) var(--pfe-theme--ui--focus-outline-style, solid) var(--pfe-tabs--focus); }\n\n:host([pfe-variant="primary"]) {\n  text-align: center;\n  padding: 0 calc(var(--pfe-theme--container-padding, 1rem) / 3) var(--pfe-theme--container-padding, 1rem);\n  margin-right: 2%; }\n  :host([pfe-variant="primary"]) .indicator {\n    width: 100%;\n    left: 0; }\n\n:host([pfe-variant="primary"][aria-selected="true"]) {\n  border: transparent; }\n\n:host([pfe-variant="primary"][aria-selected="false"]) {\n  border: transparent; }\n  :host([pfe-variant="primary"][aria-selected="false"]) .indicator {\n    display: none; }\n\n:host([pfe-variant="secondary"]) {\n  text-align: center;\n  padding: calc(var(--pfe-theme--container-padding, 1rem) * .666) calc(var(--pfe-theme--container-padding, 1rem) * 2.75);\n  border: 1px solid var(--pfe-theme--color--surface--border--darkest, #464646);\n  margin-right: 2%; }\n  :host([pfe-variant="secondary"]) .indicator {\n    display: none; }\n\n:host([pfe-variant="secondary"][aria-selected="true"]) {\n  background-color: var(--pfe-theme--color--surface--darkest, #131313);\n  color: var(--pfe-theme--color--surface--darkest--text, #fff); }\n  :host([pfe-variant="secondary"][aria-selected="true"]) .indicator {\n    display: block;\n    bottom: -33%;\n    width: 0;\n    height: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    border-left: var(--pfe-theme--container-spacer, 1rem) solid transparent;\n    border-right: var(--pfe-theme--container-spacer, 1rem) solid transparent;\n    border-top: var(--pfe-theme--container-spacer, 1rem) solid #252527;\n    background-color: transparent; }\n\n:host([pfe-variant="secondary"][aria-selected="false"]) {\n  color: var(--pfe-theme--color--ui-base, #0477a4); }\n\n:host([pfe-variant="secondary"]:hover) {\n  background-color: var(--pfe-theme--color--surface--darkest, #131313);\n  color: var(--pfe-theme--color--surface--darkest--text, #fff); }\n\n:host([vertical][pfe-variant="primary"]) {\n  text-align: right;\n  padding-right: var(--pfe-theme--container-padding, 1rem); }\n  :host([vertical][pfe-variant="primary"]) .indicator {\n    left: auto;\n    right: 0;\n    top: 0;\n    display: var(--pfe-tabs__indicator--Display, block);\n    height: var(--pfe-tabs__indicator--Height, 22px);\n    width: var(--pfe-tabs__indicator--Width, 4px); }\n\n:host([vertical][pfe-variant="primary"][aria-selected="true"]) {\n  border: transparent !important; }\n\n:host([vertical][pfe-variant="secondary"][aria-selected="true"]) .indicator {\n  left: 99%;\n  top: 50%;\n  transform: translateY(-50%);\n  border-top: var(--pfe-theme--container-spacer, 1rem) solid transparent;\n  border-left: var(--pfe-theme--container-spacer, 1rem) solid #252527;\n  border-bottom: var(--pfe-theme--container-spacer, 1rem) solid transparent;\n  background-color: transparent; }\n\n::slotted(h1),\n::slotted(h2),\n::slotted(h3),\n::slotted(h4),\n::slotted(h5),\n::slotted(h6) {\n  font-size: var(--pfe-theme--font-size, 16px);\n  font-weight: var(--pfe-theme--font-weight--normal, 500);\n  margin: 0;\n  user-select: none; }</style>\n<slot></slot>\n<div class="indicator"></div>';
      }
    }, {
      key: 'styleUrl',
      get: function get$$1() {
        return "pfe-tab.scss";
      }
    }, {
      key: 'templateUrl',
      get: function get$$1() {
        return "pfe-tab.html";
      }
    }], [{
      key: 'tag',
      get: function get$$1() {
        return "pfe-tab";
      }
    }, {
      key: 'observedAttributes',
      get: function get$$1() {
        return ["aria-selected"];
      }
    }]);

    function PfeTab() {
      classCallCheck(this, PfeTab);
      return possibleConstructorReturn(this, (PfeTab.__proto__ || Object.getPrototypeOf(PfeTab)).call(this, PfeTab));
    }

    createClass(PfeTab, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(PfeTab.prototype.__proto__ || Object.getPrototypeOf(PfeTab.prototype), 'connectedCallback', this).call(this);

        if (!this.pfeId) {
          this.pfeId = PfeTab.tag + '-' + generateId();
        }

        this.setAttribute("role", "tab");
        this.setAttribute("aria-selected", "false");
        this.setAttribute("tabindex", -1);

        if (this.parentNode.hasAttribute("vertical")) {
          this.setAttribute("vertical", "");
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback() {
        var value = Boolean(this.selected);
        this.setAttribute("tabindex", value ? 0 : -1);
      }
    }, {
      key: 'pfeId',
      get: function get$$1() {
        return this.getAttribute("pfe-id");
      },
      set: function set$$1(id) {
        if (!id) {
          return;
        }

        this.setAttribute("pfe-id", id);
      }
    }, {
      key: 'selected',
      set: function set$$1(value) {
        value = Boolean(value);
        this.setAttribute("aria-selected", value);
      },
      get: function get$$1() {
        return this.getAttribute("aria-selected") === "true" ? true : false;
      }
    }]);
    return PfeTab;
  }(PFElement);

  var PfeTabPanel = function (_PFElement3) {
    inherits(PfeTabPanel, _PFElement3);
    createClass(PfeTabPanel, [{
      key: 'html',
      get: function get$$1() {
        return '<style>:host {\n  display: block; }\n\n:host([hidden]) {\n  display: none; }</style>\n<slot></slot>';
      }
    }, {
      key: 'styleUrl',
      get: function get$$1() {
        return "pfe-tab-panel.scss";
      }
    }, {
      key: 'templateUrl',
      get: function get$$1() {
        return "pfe-tab-panel.html";
      }
    }, {
      key: 'pfeId',
      get: function get$$1() {
        return this.getAttribute("pfe-id");
      },
      set: function set$$1(id) {
        if (!id) {
          return;
        }

        this.setAttribute("pfe-id", id);
      }
    }], [{
      key: 'tag',
      get: function get$$1() {
        return "pfe-tab-panel";
      }
    }]);

    function PfeTabPanel() {
      classCallCheck(this, PfeTabPanel);
      return possibleConstructorReturn(this, (PfeTabPanel.__proto__ || Object.getPrototypeOf(PfeTabPanel)).call(this, PfeTabPanel));
    }

    createClass(PfeTabPanel, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(PfeTabPanel.prototype.__proto__ || Object.getPrototypeOf(PfeTabPanel.prototype), 'connectedCallback', this).call(this);

        if (!this.pfeId) {
          this.pfeId = PfeTabPanel.tag + '-' + generateId();
        }

        this.setAttribute("role", "tabpanel");
        this.setAttribute("tabindex", 0);
      }
    }]);
    return PfeTabPanel;
  }(PFElement);

  PFElement.create(PfeTab);
  PFElement.create(PfeTabPanel);
  PFElement.create(PfeTabs);

  return PfeTabs;

})));
//# sourceMappingURL=pfe-tabs.umd.js.map

});
;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/sites/all/libraries/webrh/dist/js/webrh.js. */
var rh=rh||{};rh.webrh=rh.webrh||{};(function($){rh.webrh.load=function(context){rh.webrh.utils={lg:function(){return $(window).width()>=1200},md:function(){return $(window).width()>=992&&$(window).width()<1200},sm:function(){return $(window).width()>=768&&$(window).width()<992},xs:function(){return $(window).width()>=480&&$(window).width()<768},xxs:function(){return $(window).width()<480},getHeight:function(){return $(window).height()},getWidth:function(){return $(window).width()},getElHeight:function(element){var height=0;if($(element).length>0)height=$(element).outerHeight();return height},breakpoints:["xxs","xs","sm","md","lg"],url:{root:window.location.hostname,path:window.location.pathname.split("/")}};rh.webrh.scrollToTop=function($el,afterFunction){$("html, body").animate({scrollTop:$("body").position().top+"px"},1200,"linear",afterFunction)};rh.webrh.menu={attr:{toggleID:"data-rh-toggle-id",state:"data-rh-state",expanded:"aria-expanded",hidden:"aria-hidden",selected:"aria-selected",toggleOpen:"data-rh-toggle-open",scroll:"data-rh-scroll-to",stickyState:"data-rh-sticky-state",menu:"data-rh-menu",menuContext:"data-rh-menu-context",menuType:"data-rh-menu-main-type",navLabel:"data-rh-navigation-label",navType:"data-rh-navigation-type",navLink:"data-rh-navigation-link-for",subType:"data-rh-nav-subtype",menuID:"data-rh-menu-id",hasDynamic:"data-rh-dynamic"},classes:{hashValue:"rh-band-header-hash",bandLayout:"rh-band--layout"},nav:{$static:$("[data-rh-menu]",context),$fixed:$("[data-rh-menu=\"fixed\"]",context),$dynamic:$("[data-rh-menu=\"dynamic\"]",context),$drupalNav:$("#main-nav-wrap",context)},fireNavHeight:function($nav){var offset=0,bpCheck=true,height=0,isSecondary;if(typeof $nav!=="undefined"&&$nav.length>0){isSecondary=$nav.has("["+this.attr.menuType+"=\"secondary\"]").length>0;if(typeof rh.webrh.utils!=="undefined"){bpCheck=rh.webrh.utils.sm()||rh.webrh.utils.md()||rh.webrh.utils.lg();height=rh.webrh.utils.getElHeight("#main-nav-wrap")}else height=$("#main-nav-wrap").outerHeight();if(isSecondary&&bpCheck){offset=$nav.offset().top-height}else offset=$nav.outerHeight()+$nav.offset().top};return offset},isFixed:function($static){var state=false,id=$static.attr(this.attr.menuID),hidden=$static.prev("["+this.attr.menuID+"=\""+id+"\"]").attr(this.attr.hidden);if(typeof hidden!=="undefined")state=hidden!=="true";return state},closeDropdown:function($context){var $button,$buttons=$context.find("["+this.attr.toggleOpen+"]");$buttons.each(function(idx,button){$button=$(button);if(typeof rh.webrh.toggle!=="undefined")if(rh.webrh.toggle.checkState($button)==="open")rh.webrh.toggle.element({trigger:$button,target:$("#"+$button.attr(this.attr.toggleID),$context)},true)}.bind(this))},toggleFixed:function($staticNav,$fixed,state){this.closeDropdown(state?$staticNav:$fixed);$fixed.slideToggle().attr(this.attr.hidden,!state);return state},buildDynamic:function($dynamic){var done=false,hasLinks=false,hasFeaturedLink=false,$mainLinks=$("["+this.attr.menuContext+"=\"main-links\"]",$dynamic),$template=$("[aria-template=\"true\"]",$mainLinks),$parent=$template.parent(),$trigger,$listItem,$link,$externalLink,$lastChild;$("["+this.attr.navLabel+"]",context).each(function(idx,trigger){var link={};link.isFeatured=false;$trigger=$(trigger);link.label=$trigger.attr(this.attr.navLabel);link.hash=$trigger.find("."+this.classes.hashValue).attr("id");if(typeof link.hash!=="undefined")link.hash="#"+link.hash;if($trigger.attr(this.attr.navType)==="featured"){link.isFeatured=true;hasFeaturedLink=true;$externalLink=$trigger.find("[ "+this.attr.navLink+"=\"featured\"] a");if($externalLink.length>0)link.href=$externalLink[0].href};if(typeof link.label!=="undefined"){$trigger.waypoint({handler:function(direction){if(direction==="down")rh.webrh.menu.waypointEvent(link.label)},offset:function(){return rh.webrh.menu.determineScrollOffset()}});$trigger.waypoint({handler:function(direction){if(direction==="up")rh.webrh.menu.waypointEvent(link.label)},offset:function(){return(Waypoint.viewportHeight()/2)-rh.webrh.menu.determineScrollOffset()-this.clientHeight}});$listItem=$template.clone().removeAttr("aria-template");$link=$listItem.find("a").attr("href",(typeof link.href==="undefined")?link.hash:link.href).attr("title",link.label).text(link.label);if(link.isFeatured){$link.attr(this.attr.subType,"ghost")}else $link.attr(this.attr.subType,"standard");if(hasFeaturedLink&&!link.isFeatured){$lastChild=$parent.find("li:last-child");$listItem.insertBefore($lastChild);hasLinks=true}else{$parent.append($listItem);hasLinks=true}}}.bind(this));if(hasLinks){$parent.attr("aria-label","navigation").removeAttr("aria-hidden");$template.remove();$dynamic.attr(this.attr.menu,"initial").removeAttr("aria-hidden");done=true};return done},buildMobile:function($menu){var status=false,$mobileContainer=$("["+this.attr.menuContext+"=\"dropdown-mobile\"]",$menu),mainContent=$("["+this.attr.menuContext+"=\"main-links\"]",$menu).html(),utilityContent=$("["+this.attr.menuContext+"=\"utility-links\"]",$menu).html(),fullLinkSet="";if(typeof $mobileContainer!=="undefined"){fullLinkSet+=typeof mainContent!=="undefined"?mainContent:"";fullLinkSet+=typeof utilityContent!=="undefined"?utilityContent:"";$mobileContainer.html(fullLinkSet);status=true};return status},buildSticky:function($fixed){var status=false,$target,oldID,newID;$fixed.find("["+this.attr.toggleID+"]").each(function(idx,target){$target=$(target);oldID=$target.attr(this.attr.toggleID);newID=oldID+(oldID?"-":"")+"fixed";$target.attr(this.attr.toggleID,newID);$fixed.find("#"+oldID).attr("id",newID);status=true}.bind(this));$("["+this.attr.scroll+"=\"top\"]",$fixed).click(function(event){event.preventDefault();if(typeof rh.webrh.scrollToTop!=="undefined")rh.webrh.scrollToTop($fixed)});return status},waypointEvent:function(title){var $link;$.each(this.nav,function(idx,menu){$link=$(menu).find("[title=\""+title+"\"]");$link.parent().siblings().children("a").each(function(idx,el){$(el).attr(this.attr.selected,false)}.bind(this));$link.attr(this.attr.selected,true)}.bind(this))},scrollEvent:function($window){this.nav.$static.each(function(idx,el){var $el=$(el),id=$el.attr(this.attr.menuID),$fixed=$el.prev("["+this.attr.menuID+"=\""+id+"\"]");if(typeof $el!=="undefined")if($window.scrollTop()>this.fireNavHeight($el)){if(!this.isFixed($el))this.toggleFixed($el,$fixed,true)}else if(this.isFixed($el))this.toggleFixed($el,$fixed,false)}.bind(this))},setNavPosition:function($main,$secondary){var bpCheck=true,pos=0;if(typeof rh.webrh.utils!=="undefined")bpCheck=rh.webrh.utils.sm()||rh.webrh.utils.md()||rh.webrh.utils.lg();if(bpCheck)pos=rh.webrh.utils.getElHeight($main);$secondary.css({top:pos+"px"})},removeEmptyMenu:function($menu){$menu.remove()},checkFold:function($menu,$window){var cssObj,zindex=1e3+this.nav.$static.length,isSecondary=$menu.has("["+this.attr.menuType+"=\"secondary\"]"),id=$menu.attr(this.attr.menuID),$fixed=$menu.prev("["+this.attr.menuID+"=\""+id+"\"]"),$toTop=$fixed.find("["+this.attr.scroll+"=\"top\"]"),printToTop=$toTop.length>0,bpCheck=(typeof rh.webrh.utils!=="undefined")?rh.webrh.utils.sm()||rh.webrh.utils.md()||rh.webrh.utils.lg():$window.outerWidth()>768,height=(typeof rh.webrh.utils!=="undefined"&&isSecondary)?rh.webrh.utils.getElHeight("#main-nav-wrap"):0;if(isSecondary&&bpCheck)zindex=99;cssObj={top:height+"px","z-index":zindex};zindex=zindex-1;if(this.nav.$static.length>1&&this.nav.$static.last()!==$menu)cssObj.boxShadow="none";$fixed.css(cssObj);height=$fixed.height();if(printToTop)$toTop.hide();if($window.scrollTop()>this.fireNavHeight($menu)&&!this.isFixed($menu))this.toggleFixed($menu,$fixed,true)},determineScrollOffset:function(){var offset,isSecondary=false,bpCheck=false,navHeight=65,menuHeight=85;if(typeof this.nav.$fixed!=="undefined"&&this.nav.$fixed.length>0){isSecondary=this.nav.$fixed.has("["+this.attr.menuType+"=\"secondary\"]").length>0;navHeight=this.nav.$fixed.outerHeight()};if(typeof rh.webrh.utils!=="undefined"&&typeof this.nav.$drupalNav!=="undefined"&&this.nav.$drupalNav.length>0){bpCheck=rh.webrh.utils.sm()||rh.webrh.utils.md()||rh.webrh.utils.lg();menuHeight=rh.webrh.utils.getElHeight(this.nav.$drupalNav)}else menuHeight=this.nav.$drupalNav.outerHeight();if(isSecondary&&bpCheck){offset=navHeight+menuHeight}else offset=menuHeight;return offset}};var $window=$(window),menuObj=rh.webrh.menu;if(typeof menuObj.nav.$dynamic!=="undefined"&&menuObj.nav.$dynamic.length>0){menuObj.nav.$dynamic.each(function(idx,menu){menuObj.buildDynamic($(menu))});menuObj.nav.$static=$("[data-rh-menu=\"initial\"]",context)};var reset=false;if(typeof menuObj.nav.$static!=="undefined"&&menuObj.nav.$static.length>0){menuObj.nav.$static.each(function(idx,menu){reset=menuObj.buildMobile($(menu))});if(reset){menuObj.nav.$static=$("[data-rh-menu]",context);reset=false};menuObj.nav.$static.each(function(idx,menu){$(menu).before($(menu).clone().attr(menuObj.attr.menu,"fixed").attr(menuObj.attr.hidden,true))});menuObj.nav.$fixed=$("["+menuObj.attr.menu+"=\"fixed\"]",context);if(typeof menuObj.nav.$fixed!=="undefined"&&menuObj.nav.$fixed.length>0){menuObj.nav.$fixed.each(function(idx,menu){reset=menuObj.buildSticky($(menu))});if(reset){menuObj.nav.$fixed=$("["+menuObj.attr.menu+"=\"fixed\"]",context);reset=false}};menuObj.nav.$static.each(function(idx,el){menuObj.checkFold($(el),$window)});$window.click(function(){$.each(menuObj.nav,function(idx,menu){var $menu=$(menu);if(typeof $menu!=="undefined")menuObj.closeDropdown($menu)})});$.each(menuObj.nav,function(idx,menu){var $menu=$(menu);if(typeof $menu!=="undefined"){menuObj.setNavPosition(menuObj.nav.$drupalNav,$(menu),100);$menu.click(function(event){event.stopPropagation()})}});var scrollTimer=null;$window.scroll(function(){if(scrollTimer)clearTimeout(scrollTimer);scrollTimer=setTimeout(menuObj.scrollEvent($window),500)});var resizeTimer=null;$window.on("resize",function(){if(resizeTimer)clearTimeout(resizeTimer);var $main;$.each(menuObj.nav,function(idx,menu){if(menuObj.nav.$drupalNav!=="undefined"){$main=menuObj.nav.$drupalNav}else if($("["+menuObj.attr.navType+"='primary']",context)!=="undefined")$main=$("["+menuObj.attr.navType+"='primary']",context);if(typeof $(menu)!=="undefined")resizeTimer=setTimeout(menuObj.setNavPosition($main,$(menu),100))})})};var hasLinks=$("["+menuObj.attr.navLabel+"]").length>0,isDynamic=menuObj.nav.$dynamic.length>0;if(!hasLinks&&isDynamic)menuObj.nav.$dynamic.each(function(idx,menu){menuObj.removeEmptyMenu($(menu))});rh.webrh.skipNav=function(skipTo){$(skipTo).attr("tabindex",-1).on("blur focusout",function(){$(this).removeAttr("tabindex")}).focus()};rh.webrh.current=function(link){$(link).attr("aria-current","page")};$("[data-rh-skip-nav]",context).click(function(){rh.webrh.skipNav($(this).attr("href"))});$("a[href$=\""+location.pathname.replace(/(en|fr|de|es|pt-br|ja|zh)\//i,"")+"\"]",context).each(function(idx,link){rh.webrh.current(link)});rh.webrh.alignElement={attr:{trigger:"data-rh-align-element",target:"data-rh-align-target",fill:"data-rh-align-fill",focalPoint:"data-rh-align-focal-point"},setDefault:function(number,fallback){return isNaN(number)?fallback:number},setPosition:function($trigger,$target){var relation=$trigger.attr(this.attr.fill),$focalPoint=$target.find("["+this.attr.focalPoint+"]").first(),triggerMarginLeft=$trigger.css("marginLeft"),$relative,triggerWidth,focalWidth,relativeLeft,triggerLeft,targetLeft,focalLeft,marginTop;if(relation==="grandparent"){$relative=$trigger.parent().parent()}else if(relation==="parent"){$relative=$trigger.parent()}else if(relation==="self"){$relative=$trigger}else $relative=$target;triggerWidth=parseInt($trigger.outerWidth());triggerLeft=parseInt($trigger.position().left);relativeLeft=parseInt($relative.position().left);focalWidth=$focalPoint.outerWidth();marginTop=parseInt($trigger.parent().css("marginBottom"))*-1+5;targetLeft=triggerLeft-relativeLeft;if(relation){focalLeft=targetLeft+(triggerWidth/2-focalWidth/2);this.positionEl($target,"width",parseInt($relative.outerWidth()));this.positionEl($target,"marginLeft",targetLeft*-1)}else{focalLeft=targetLeft-(triggerWidth/2);this.positionEl($target,"marginLeft",triggerWidth/2)};$focalPoint.css("left","calc("+focalLeft+"px + "+triggerMarginLeft+")");this.positionEl($target,"marginTop",marginTop);$trigger.attr(this.attr.trigger,$trigger.attr(this.attr.trigger)+" done")},positionEl:function(el,cssProp,measurement){$(el).css(cssProp,(measurement+"px"))},init:function($eventEl){var $triggers=$("["+this.attr.trigger+"]",$eventEl),id,$trigger,$target;if(typeof $triggers!=="undefined"&&$triggers.length<1)$triggers=$eventEl;$.each($triggers,function(idx,val){$trigger=$(val);if(($trigger.attr(this.attr.trigger).indexOf("done")!==1)){id=$trigger.attr(this.attr.trigger);$target=$("["+this.attr.target+"=\""+id+"\"]",context).first();if($trigger.length>0&&$target.length>0)this.setPosition($trigger,$target)}}.bind(this))}};rh.webrh.bq=function(target){var width=$(window).width();$(target).each(function(){var $this=$(this),backgrounds=$this.attr('data-rh-bq').split(',');if(width>768){background=backgrounds[0]}else if(backgrounds.length===2){background=backgrounds[1]}else return false;$this.css('background-image','url('+background+')')})};rh.webrh.bq('[data-rh-bq]');rh.webrh.carousel={parent:".rh-carousel--layout",switcher:{body:".rh-carousel-body",slide:".rh-carousel-slide--layout"},nav:{wrapper:".rh-carousel-navigation",previous:".rh-carousel-previous",next:".rh-carousel-next"},attr:{state:"data-rh-state",background:"data-rh-background",theme:"data-rh-theme"},animation:{easing:"swing",speed:"2s"},getCurrentSlide:function($parent){var $current=$(this.switcher.slide+"["+this.attr.state+"=\"current\"]",$parent);if(typeof $current==="undefined"||$current.length<1)$current=$(this.switcher.slide,$parent).first();return $current},setHeight:function($parent){var $slide,$copy,height=0,$slides=$(this.switcher.slide,$parent),max=0;$slides.each(function(idx,slide){$slide=$(slide);$copy=$slide.clone().attr("id",false);$copy.css({visibility:"hidden",position:"absolute",display:"block",minHeight:"0"});$("body").append($copy);height=$copy.height();$copy.remove();max=(height>max)?height:max});if(max>0){$slides.css("min-height",max+"px");$parent.css("min-height",max+"px")}},setTheme:function(theme,$el,$fallback){if(typeof theme==="undefined"||!theme)theme=$fallback.attr(this.attr.theme);if(typeof theme==="undefined"||!theme)theme="light";$el.attr(this.attr.theme,theme)},slide:function($current,direction){var $newCurrent,$parent=$current.closest(this.parent),$nav=$parent.find(this.nav.wrapper),travel,distance="100%",stateAttr=this.attr.state,easing=this.animation.easing,duration=this.animation.speed;$current.css({left:"0"});if(direction==="next"){travel="-=";$newCurrent=$current.next();if(typeof $newCurrent==="undefined"||$newCurrent.length<1)$newCurrent=$current.siblings().first();$newCurrent.css({left:distance})}else{travel="+=";$newCurrent=$current.prev();if(typeof $newCurrent==="undefined"||$newCurrent.length<1)$newCurrent=$current.siblings().last();$newCurrent.css({left:"-"+distance})};if($newCurrent.length>0){$current.animate({left:travel+distance},{queue:false,easing:easing,duration:duration,complete:function(){$newCurrent.nextAll().attr(stateAttr,"next").attr("aria-hidden","true");$newCurrent.prevAll().attr(stateAttr,"previous").attr("aria-hidden","true")}});this.setTheme($newCurrent.attr(this.attr.theme),$nav,$parent);$newCurrent.animate({left:travel+distance},{queue:false,easing:easing,duration:duration,complete:function(){$(this).attr(stateAttr,"current").attr("aria-hidden","false")}})}},init:function($parent){var $slides=$(this.switcher.slide,$parent),slideCount=$slides.length,$current,$nav;if(typeof slideCount!=="undefined"&&slideCount>1){$(this.nav.wrapper,$parent).show();this.setHeight($parent);$slides.attr(this.attr.state,"next").attr("aria-hidden","true");$current=$slides.first().attr(this.attr.state,"current").attr("aria-hidden","false");$nav=$current.closest(this.parent).find(this.nav.wrapper);this.setTheme($current.attr(this.attr.theme),$nav,$parent)}},onclick:function($button){var carouselID=$button.closest(this.parent).attr("id"),$current=this.getCurrentSlide($("#"+carouselID)),direction=$button.attr("aria-label");if(typeof $current!=="undefined"&&$current.length>0)this.slide($current,direction)}};$(rh.webrh.carousel.parent,context).each(function(idx,el){rh.webrh.carousel.init($(el))});var resizeTimer=null;window.addEventListener("resize",function(){if(resizeTimer)clearTimeout(resizeTimer);$(rh.webrh.carousel.parent,context).each(function(idx,el){resizeTimer=setTimeout(rh.webrh.carousel.setHeight($(el)),500)})});window.addEventListener("orientationchange",function(){$(rh.webrh.carousel.parent,context).each(function(idx,el){rh.webrh.carousel.setHeight($(el))})},false);$(rh.webrh.carousel.nav.previous+", "+rh.webrh.carousel.nav.next,context).click(function(){rh.webrh.carousel.onclick($(this))});rh.webrh.emphasize={attr:{trigger:"data-rh-emphasis"},set:function($el){var state=$el.attr(this.attr.trigger);this.reset();if(state==="inactive"||state==="background"){$el.attr(this.attr.trigger,"primary").siblings().attr(this.attr.trigger,"background")}else this.reset()},reset:function(){$("["+this.attr.trigger+"]",context).attr(this.attr.trigger,"inactive")}};$("["+rh.webrh.emphasize.attr.trigger+"]",context).each(function(idx,val){var $val=$(val);$val.attr(rh.webrh.emphasize.attr.trigger,"inactive");$val.click(function(){rh.webrh.emphasize.set($val)})});$(document).click(function(evt){if(!$(evt.target).closest("["+rh.webrh.emphasize.attr.trigger+"]").length)rh.webrh.emphasize.reset()});rh.webrh.reveal={attr:{trigger:"data-rh-reveal",count:"data-rh-reveal-by",state:"data-rh-state",container:"data-rh-reveal-container"},countHidden:function(items){var myself=this,count=0;if(Array.isArray(items))$.each(items,function(key,value){if($(value).attr(myself.attr.state)==="hidden")count+=1});return count},onclick:function(id,count,$trigger){var child,$parent=$("["+this.attr.container+"="+id+"]",context),hiddenChildren=$("["+this.attr.state+"=hidden]",$parent);if(typeof count==="number"){if(hiddenChildren.length>0)for(var i=0;i<count;i+=1){child=hiddenChildren[i];if(typeof child!=="undefined")$(child).attr(this.attr.state,"visible")}}else $("["+this.attr.state+"=hidden]",$parent).show().attr(this.attr.state,"visible");if(this.countHidden(hiddenChildren)===0)$trigger.hide()}};$("["+rh.webrh.reveal.attr.trigger+"]",context).click(function(){rh.webrh.reveal.onclick($(this).attr(rh.webrh.reveal.attr.trigger),$(this).attr(rh.webrh.reveal.attr.count),$(this))});rh.webrh.setYear=function($el,when){if(when==="now")$el.text(new Date().getFullYear())};$("[data-rh-year]").each(function(index,value){rh.webrh.setYear($(value),$(value).attr("data-rh-year"))});rh.webrh.smoothScroll={meta:{attrUniqueID:"data-rh-unique-id",classMenu:".rh-menu"},ifEmpty:function(el,propName,hash){return el.length>0?el:$("["+propName+"=\""+hash.slice(1)+"\"]",context)},toggleActiveState:function($siblings,$target){$siblings.attr("aria-selected",false);$target.attr("aria-selected",true)},scroll:function($target,offsetTop){if(typeof $target!=="undefined"&&$target.length>0)$("html, body").stop().animate({scrollTop:$target.offset().top-offsetTop},500,"swing",function(){$target.focus();if($target.is(":focus")){return false}else{$target.attr("tabindex","-1");$target.focus()}})},isValidHash:function(hash){var regex=new RegExp("[a-zA-Z0-9_]"),anchorLoc=hash.lastIndexOf("#")<0?0:hash.lastIndexOf("#");return regex.test(hash.slice(anchorLoc,anchorLoc+1))&&(document.getElementById(hash)!==null||document.getElementsByName(hash).length>0)},trigger:function(evt){var hash,$trigger;if(typeof evt==="undefined"||typeof evt.target==="undefined"||typeof evt.target.hash==="undefined"){hash=decodeURIComponent(window.location.hash.substr(1))}else{hash=decodeURIComponent(evt.target.hash.substr(1));$trigger=$(evt);evt.preventDefault()};if(hash&&this.getTarget(hash)&&!hash.endsWith("-tray"))this.fire($trigger,hash)},getTarget:function(hash){if(this.isValidHash(hash)){var $target=$("#"+hash,context);$target=this.ifEmpty($target,"name",hash);return this.ifEmpty($target,this.meta.attrUniqueID,hash)}},fire:function($trigger,hash){var $target=this.getTarget(hash),offset=0;this.toggleActiveState($(this.anchors,context),$target);if(!(typeof $trigger!=="undefined"&&$trigger.attr("toggle")==="tabs")){offset=100;if(typeof rh.webrh.menu!=="undefined")offset=rh.webrh.menu.determineScrollOffset()+20;this.scroll($target,offset)};window.location.hash=hash}};$("a[class^=rh][href^='#']:not([data-toggle='tab'])",context).on("click",$.proxy(rh.webrh.smoothScroll.trigger,rh.webrh.smoothScroll));var smoothScrollTimer=null;if(window.location.hash){if(smoothScrollTimer)clearTimeout(smoothScrollTimer);smoothScrollTimer=setTimeout(function(){rh.webrh.smoothScroll.trigger()},800)};rh.webrh.hash=function(location){var newHash=location.hash.replace(/^#/,""),hashSplit=newHash.split("."),hashFunction=hashSplit[0];if(hashFunction==="tab")rh.webrh.switchTab(hashSplit[1],hashSplit[2])};rh.webrh.switchTab=function(id,index){$("[data-rh-tab-id='"+id+"']").each(function(i,v){var $children=$(v).children();$children.attr("data-rh-active","false");$children.eq(index).attr("data-rh-active","true")})};if(window.location.hash)rh.webrh.hash(window.location);$(window).bind("hashchange",function(){rh.webrh.hash(location)});rh.webrh.themeToggle=function($target,evt,type){var currentValue=$target.attr("data-rh-"+type),newValue=$target.attr("data-rh-"+type+"-"+evt);$target.attr("data-rh-"+type+"-"+evt,currentValue);$target.attr("data-rh-"+type,newValue)};$("[data-rh-theme-hover], [data-rh-theme-click], [data-rh-background-hover], [data-rh-background-click]").each(function(idx,val){var $target=$(val);$.each($target.data(),function(key){var evt=key.match("Hover$")?"hover":key.match("Click$")?"click":"",array=key.split(/[A-Z]+/),typeKey=array[1],type=typeKey==="ackground"?"b"+typeKey:typeKey==="heme"?"t"+typeKey:"";if(evt==="hover"){$target.hover(function(){rh.webrh.themeToggle($target,evt,type)})}else if(evt==="click")$target.click(function(){rh.webrh.themeToggle($target,evt,type)})})});rh.webrh.toggle={attr:{openEvent:"data-rh-toggle-open",closeEvent:"data-rh-toggle-close",toggleID:"data-rh-toggle-id",toggleTarget:"data-rh-toggle-target",state:"data-rh-state",expanded:"aria-expanded",align:"data-rh-align-element",toggle:"data-rh-toggle"},isAtBreakpoint:function(bpString){var atBreakpoint=true;if(typeof bpString!=="undefined"&&bpString!==""){var bps=bpString.split(" ");atBreakpoint=false;$.each(bps,function(idx,bp){if($.inArray(bp,rh.webrh.utils.breakpoints)>=0)if(rh.webrh.utils[bp]())atBreakpoint=true})};return atBreakpoint},changeState:function($el,to){return $el.attr(this.attr.state,to).attr(this.attr.expanded,to==="open")},checkState:function($el){var status=$el.attr(this.attr.state);if(status==="")status=$el.attr(this.attr.expanded)?"open":"closed";return status},scroll:function($el){$("html, body").animate({scrollTop:$el.offset().top-100},600)},reveal:function(props){var alignAttr=props.trigger.attr(this.attr.align),hasAlignAttr=props.trigger.has("["+this.attr.align+"]");props.target.attr(this.attr.toggle,"reveal");this.setState([props.target,props.trigger],"open");if((typeof alignAttr!=="undefined"&&alignAttr!=="")||hasAlignAttr.length>0)rh.webrh.alignElement.init(props.trigger)},hide:function(props){props.target.attr(this.attr.toggle,"hide");this.setState([props.target,props.trigger],"closed")},element:function(props,change){var state=this.getState(props.target),bpTargets=props.target.attr(this.attr.toggleTarget);if(this.isAtBreakpoint(bpTargets)){if(state==="closed"){change?this.reveal(props):this.hide(props)}else if(state==="open"){change?this.hide(props):this.reveal(props)}else this.reveal(props)}else this.reveal(props)},getState:function($el){var state=$el.attr(this.attr.state);if(typeof state==="undefined")state=$el.attr("aria-expanded")?"open":"closed";return state},setState:function($els,state){$.each($els,function(idx,$el){if(state==="open"){$el.attr(this.attr.state,"open").attr("aria-expanded",true)}else $el.attr(this.attr.state,"closed").attr("aria-expanded",false)}.bind(this))},reset:function($trigger,$target){var targetBps=$target.attr(this.attr.toggleTarget);if(this.isAtBreakpoint(targetBps)){this.element({trigger:$trigger,target:$target},false)}else if(this.checkState($target)==="closed")$target.attr(this.attr.toggle,"reveal");$.each($("["+this.attr.align+"]"),function(idx,val){$(val).attr(this.attr.align,$(val).attr(this.attr.align).replace(" done",""))}.bind(this))},getTargets:function($trigger){var $target,eventType=$trigger.attr(this.attr.openEvent).split(" "),toggleID=$trigger.attr(this.attr.toggleID);if(typeof toggleID!=="undefined"&&toggleID!==""){$target=$("#"+toggleID,context);if($target.length<1)$target=undefined};if(typeof $target==="undefined"){$target=$trigger.siblings("["+this.attr.toggleTarget+"]");if($target.length<1)$target=undefined};if(typeof $target==="undefined"){$target=$trigger.children("["+this.attr.toggleTarget+"]");if($target.length<1)$target=undefined};return{trigger:$trigger,target:$target,eventType:eventType}}};$("["+rh.webrh.toggle.attr.openEvent+"]",context).each(function(idx,val){var props=rh.webrh.toggle.getTargets($(val));if(typeof props.target!=="undefined"){rh.webrh.toggle.element(props,false);if(props.eventType.indexOf("click")!==-1){if(props.eventType.indexOf("single")!==-1){$(document).click(function(evt){if($(evt.target).closest(props.trigger).length){if(!($(evt.target).closest(props.target).length&&rh.webrh.toggle.getState(props.target)==="open")||$(evt.target).is($("["+rh.webrh.toggle.attr.closeEvent+"]"))){rh.webrh.toggle.element(props,true);if(props.eventType.indexOf("scroll")!==-1)rh.webrh.toggle.scroll(props.trigger)}}else rh.webrh.toggle.hide(rh.webrh.toggle.getTargets(props.trigger))})}else{props.trigger.click(function(){rh.webrh.toggle.element(props,true)});props.trigger.keydown(function(e){if(e.keyCode===13||e.keyCode===32){e.preventDefault();rh.webrh.toggle.element(props,true)}})}}else if(props.eventType.indexOf("hover")!==-1)props.trigger.hover(function(){rh.webrh.toggle.element(props,true)})}});var resizeTimer;$(window).on("resize",function(){clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){$("["+rh.webrh.toggle.attr.openEvent+"]",context).each(function(idx,val){var $trigger=$(val),toggleID=$trigger.attr(rh.webrh.toggle.attr.toggleID);if(typeof toggleID!=="undefined"&&toggleID!==""){rh.webrh.toggle.reset($trigger,$("#"+toggleID,context))}else rh.webrh.toggle.reset($trigger,$trigger.siblings("["+rh.webrh.toggle.attr.toggleTarget+"]"))})},250)});rh.webrh.urlReplace={attr:{trigger:"data-rh-url-replace"},objToParams:function(obj){var param=[];for(var key in obj)if(obj.hasOwnProperty(key))param.push(key+"="+encodeURIComponent(obj[key]));return param.join("&")},queryObj:function(url){var sets={},search;if(url.indexOf("?")>-1){search=url.slice(url.indexOf("?")+1);var array=(typeof search!=="undefined")?search.split("&"):[""];$.each(array.filter(function(n){return n!==""}),function(idx,val){var group=val.split("=");sets[group[0]]=decodeURIComponent(group[1]||"")})};return JSON.parse(JSON.stringify(sets))},getSummary:function(){var string="",heading=$("h1");if(typeof heading!=="undefined"){string=heading.first().text()}else string=$("title").first().text();return string},onLoad:function($el,attrs){var summary,update=false,states=attrs.trim().split(" "),url=$el.attr("href"),query=this.queryObj(url),pseudo=document.createElement("a");pseudo.href=url;if(states.indexOf("summary")!==-1){summary=this.getSummary();if(summary.trim()){if(pseudo.host==="twitter.com"){query.text=summary.replace(/%20/g,"+")}else if(pseudo.host==="www.linkedin.com"||pseudo.host==="www.reddit.com"){query.summary=summary.replace(/%20/g,"+")}else if(url.slice(0,6)==="mailto")query.subject+=" "+summary;update=true}};if(states.indexOf("link")!==-1){if(query.hasOwnProperty("url")||query.hasOwnProperty("p[url]")||url.slice(0,6)==="mailto")if(query.hasOwnProperty("url")){query.url=window.location.href}else if(query.hasOwnProperty("p[url]")){query["p[url]"]=window.location.href}else if(url.slice(0,6)==="mailto")query.body+=" "+window.location.href;update=true};if(update&&pseudo.origin)if(pseudo.origin.slice(0,6)==="mailto"){$el.attr("href",pseudo.origin.replace("//","")+pseudo.pathname+"?"+this.objToParams(query).replace(/\+/g," "))}else $el.attr("href",pseudo.origin+pseudo.pathname+"?"+this.objToParams(query))}};var trigger=rh.webrh.urlReplace.attr.trigger;$("["+trigger+"]").each(function(index,value){rh.webrh.urlReplace.onLoad($(value),$(value).attr(trigger))})};if(typeof Drupal!=='undefined'&&Drupal.behaviors){Drupal.behaviors.webrh={attach:function(context,settings){rh.webrh.load(context)}}}else $(document).ready(function(){rh.webrh.load(document)})})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/sites/all/libraries/webrh/dist/js/webrh.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.redhat.com/sites/all/modules/jquery_update/replace/ui/ui/minified/jquery.ui.effect-slide.min.js. */
(function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","width","height"],o=t.effects.setMode(n,e.mode||"show"),r="show"===o,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u={};t.effects.save(n,a),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,c?isNaN(s)?"-"+s:-s:s),u[l]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.redhat.com/sites/all/modules/jquery_update/replace/ui/ui/minified/jquery.ui.effect-slide.min.js. */
;/*})'"*/
