(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{9:function(e,t,n){}}]),function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);f.length;)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;c.push([15,2]),n()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.React}()},function(e,t,n){"use strict";function r(e){e.toString().indexOf(":")&&(e=a(e.toString()));var t=(e=parseInt(e))%60,n=parseInt(e/60);return"".concat(n,":").concat(("00"+t.toString()).slice(-2))}function a(e){if(-1==e.indexOf(":"))return parseInt(e);var t=e.split(":"),n=parseInt(t[1]),r=parseInt(t[0]);return isNaN(r)?n:isNaN(n)?60*r:60*r+n}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,n){var r=n(10),a=n(11),c=n(12),o=n(13);e.exports=function(e){return r(e)||a(e)||c(e)||o()}},,,function(e,t,n){var r=n(5);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t,n){var r=n(5);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(4),c=(n(9),n(7)),o=n.n(c),i=n(0),l=(n(14),n(3)),u=n(2);var s=n(1),p=n.n(s);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=s.createElement("path",{d:"M413.974 71.026C368.171 25.225 307.274 0 242.5 0S116.829 25.225 71.026 71.026C25.225 116.829 0 177.726 0 242.5s25.225 125.671 71.026 171.474C116.829 459.775 177.726 485 242.5 485s125.671-25.225 171.474-71.026C459.775 368.171 485 307.274 485 242.5s-25.225-125.671-71.026-171.474zM242.5 455C125.327 455 30 359.673 30 242.5S125.327 30 242.5 30 455 125.327 455 242.5 359.673 455 242.5 455z"}),m=s.createElement("path",{d:"M181.062 336.575L343.938 242.5l-162.876-94.075z"});function y(e){return s.createElement("svg",f({viewBox:"0 0 485 485"},e),d,m)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=s.createElement("path",{d:"M413.974 71.026C368.171 25.225 307.274 0 242.5 0S116.829 25.225 71.026 71.026C25.225 116.829 0 177.726 0 242.5s25.225 125.671 71.026 171.474C116.829 459.775 177.726 485 242.5 485s125.671-25.225 171.474-71.026C459.775 368.171 485 307.274 485 242.5s-25.225-125.671-71.026-171.474zM242.5 455C125.327 455 30 359.673 30 242.5S125.327 30 242.5 30 455 125.327 455 242.5 359.673 455 242.5 455z"}),b=s.createElement("path",{d:"M172.5 140h55v205h-55zM257.5 140h55v205h-55z"});function v(e){return s.createElement("svg",g({viewBox:"0 0 485 485"},e),h,b)}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O=s.createElement("path",{d:"M185.492 211.636v109.588l209.449-123.747L185.492 73.718v109.611L0 73.718v247.506l185.492-109.588z",fill:"#010002"});function j(e){return s.createElement("svg",k({viewBox:"0 0 394.941 394.941"},e),O)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=/[\'\"]/,C={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},M={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},I=["style","script"],A=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,H=/mailto:/i,T=/\n{2,}$/,P=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,_=/^ *> ?/gm,L=/^ {2,}\n/,z=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,$=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,G=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,N=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,B=/^(?:\n *)*\n/,D=/\r\n?/g,R=/^\[\^([^\]]+)](:.*)\n/,U=/^\[\^([^\]]+)]/,X=/\f/g,W=/^\s*?\[(x|\s)\]/,Z=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,q=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,F=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,J=/&([a-z]+);/g,V=/^<!--.*?-->/,K=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,Q=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,Y=/^\{.*\}$/,ee=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,te=/^<([^ >]+@[^ >]+)>/,ne=/^<([^ >]+:\/[^ >]+)>/,re=/ *\n+$/,ae=/(?:^|\n)( *)$/,ce=/-([a-z])?/gi,oe=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,ie=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,le=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,ue=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,se=/^\[([^\]]*)\] ?\[([^\]]*)\]/,pe=/(\[|\])/g,fe=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,de=/\t/g,me=/^ *\| */,ye=/(^ *\||\| *$)/g,ge=/ *$/,he=/^ *:-+: *$/,be=/^ *:-+ *$/,ve=/^ *-+: *$/,ke=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,Oe=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,je=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,xe=/^\\([^0-9A-Za-z\s])/,we=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,Ee=/(^\n+|\n+$|\s+$)/g,Se=/^([ \t]*)/,Ce=/\\([^0-9A-Z\s])/gi,Me=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),Ie=new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),Ae=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),He=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),Te=new RegExp("^!\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),Pe=[P,G,$,Z,q,F,V,Q,Ie,Ae,oe,ie];function _e(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Le(e){return ve.test(e)?"right":he.test(e)?"center":be.test(e)?"left":null}function ze(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var c=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&c.push([]):("text"!==e.type||null!=a[t+1]&&"tableSeparator"!==a[t+1].type||(e.content=e.content.replace(ge,"")),c[c.length-1].push(e))})),c}function $e(e,t,n){n.inline=!0;var r=ze(e[1],t,n),a=e[2].replace(ye,"").split("|").map(Le),c=function(e,t,n){return e.trim().split("\n").map((function(e){return ze(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:c,header:r,type:"table"}}function Ge(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Ne(e){return function(t,n){return n.inline?e.exec(t):null}}function Be(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function De(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Re(e){return function(t){return e.exec(t)}}function Ue(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function Xe(e){return e.replace(Ce,"$1")}function We(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var c=e(t,n);return n.inline=r,n.simple=a,c}function Ze(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var c=e(t,n);return n.inline=r,n.simple=a,c}function qe(e,t,n){return n.inline=!1,e(t+"\n\n",n)}var Fe,Je,Ve=function(e,t,n){return{content:We(t,e[1],n)}};function Ke(){return{}}function Qe(){return null}function Ye(){return[].slice.call(arguments).filter(Boolean).join(" ")}function et(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function tt(e,t){var n=et(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:et(t,e+".component",e):e}(Je=Fe||(Fe={}))[Je.MAX=0]="MAX",Je[Je.HIGH=1]="HIGH",Je[Je.MED=2]="MED",Je[Je.LOW=3]="LOW",Je[Je.MIN=4]="MIN";var nt=function(e){var t=e.children,n=e.options,r=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t.indexOf(n=c[r])>=0||(a[n]=e[n]);return a}(e,["children","options"]);return p.a.cloneElement(function(e,t){void 0===t&&(t={}),t.overrides=t.overrides||{},t.slugify=t.slugify||_e,t.namedCodesToUnicode=t.namedCodesToUnicode?E(E({},M),t.namedCodesToUnicode):M;var n=t.createElement||p.a.createElement;function r(e,r){var a=et(t.overrides,e+".props",{});return n.apply(void 0,[tt(e,t.overrides),E(E(E({},r),a),{},{className:Ye(null==r?void 0:r.className,a.className)||void 0})].concat([].slice.call(arguments,2)))}function a(e){var n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===fe.test(e));var a,c=d(f(n?e:e.replace(Ee,"")+"\n\n",{inline:n}));return c.length>1?a=r(n?"span":"div",{key:"outer"},c):1===c.length?"string"==typeof(a=c[0])&&(a=r("span",{key:"outer"},a)):a=r("span",{key:"outer"}),a}function c(e){var t=e.match(A);return t?t.reduce((function(e,t,n){var r,c=t.indexOf("=");if(-1!==c){var o=(r=t.slice(0,c),-1!==r.indexOf("-")&&null===r.match(K)&&(r=r.replace(ce,(function(e,t){return t.toUpperCase()}))),r).trim(),i=function(e){return e?(S.test(e.charAt(0))&&(e=e.substr(1)),S.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}(t.slice(c+1).trim()),l=C[o]||o,u=e[l]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}))]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Ue(t):(t.match(Y)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(o,i);"string"==typeof u&&(F.test(u)||Q.test(u))&&(e[l]=p.a.cloneElement(a(u.trim()),{key:n}))}else"style"!==t&&(e[C[t]||t]=!0);return e}),{}):void 0}var o=[],i={},l={blockQuote:{match:De(P),order:Fe.HIGH,parse:function(e,t,n){return{content:t(e[0].replace(_,""),n)}},react:function(e,t,n){return r("blockquote",{key:n.key},t(e.content,n))}},breakLine:{match:Re(L),order:Fe.HIGH,parse:Ke,react:function(e,t,n){return r("br",{key:n.key})}},breakThematic:{match:De(z),order:Fe.HIGH,parse:Ke,react:function(e,t,n){return r("hr",{key:n.key})}},codeBlock:{match:De(G),order:Fe.MAX,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,n){return r("pre",{key:n.key},r("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:De($),order:Fe.MAX,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:Be(N),order:Fe.LOW,parse:function(e){return{content:e[2]}},react:function(e,t,n){return r("code",{key:n.key},e.content)}},footnote:{match:De(R),order:Fe.MAX,parse:function(e){return o.push({footnote:e[2],identifier:e[1]}),{}},react:Qe},footnoteReference:{match:Ne(U),order:Fe.HIGH,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,n){return r("a",{key:n.key,href:Ue(e.target)},r("sup",{key:n.key},e.content))}},gfmTask:{match:Ne(W),order:Fe.HIGH,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,n){return r("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})}},heading:{match:De(Z),order:Fe.HIGH,parse:function(e,n,r){return{content:We(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,n){return e.tag="h"+e.level,r(e.tag,{id:e.id,key:n.key},t(e.content,n))}},headingSetext:{match:De(q),order:Fe.MAX,parse:function(e,t,n){return{content:We(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Re(V),order:Fe.HIGH,parse:function(){return{}},react:Qe},image:{match:Be(Te),order:Fe.HIGH,parse:function(e){return{alt:e[1],target:Xe(e[2]),title:e[3]}},react:function(e,t,n){return r("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:Ue(e.target)})}},link:{match:Ne(He),order:Fe.LOW,parse:function(e,t,n){return{content:Ze(t,e[1],n),target:Xe(e[2]),title:e[3]}},react:function(e,t,n){return r("a",{key:n.key,href:Ue(e.target),title:e.title},t(e.content,n))}},linkAngleBraceStyleDetector:{match:Ne(ne),order:Fe.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:Ne(ee),order:Fe.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:Ne(te),order:Fe.MAX,parse:function(e){var t=e[1],n=e[1];return H.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=ae.exec(n);return!r||!t._list&&t.inline?null:Ae.exec(e=r[1]+e)},order:Fe.HIGH,parse:function(e,t,n){var r=e[2],a=r.length>1,c=a?+r:void 0,o=e[0].replace(T,"\n").match(Ie),i=!1;return{items:o.map((function(e,r){var a=Me.exec(e)[0].length,c=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(c,"").replace(Me,""),u=r===o.length-1,s=-1!==l.indexOf("\n\n")||u&&i;i=s;var p,f=n.inline,d=n._list;n._list=!0,s?(n.inline=!1,p=l.replace(re,"\n\n")):(n.inline=!0,p=l.replace(re,""));var m=t(p,n);return n.inline=f,n._list=d,m})),ordered:a,start:c}},react:function(e,t,n){return r(e.ordered?"ol":"ul",{key:n.key,start:e.start},e.items.map((function(e,a){return r("li",{key:a},t(e,n))})))}},newlineCoalescer:{match:De(B),order:Fe.LOW,parse:Ke,react:function(){return"\n"}},paragraph:{match:De(ie),order:Fe.LOW,parse:Ve,react:function(e,t,n){return r("p",{key:n.key},t(e.content,n))}},ref:{match:Ne(le),order:Fe.MAX,parse:function(e){return i[e[1]]={target:e[2],title:e[4]},{}},react:Qe},refImage:{match:Be(ue),order:Fe.MAX,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,n){return r("img",{key:n.key,alt:e.alt,src:Ue(i[e.ref].target),title:i[e.ref].title})}},refLink:{match:Ne(se),order:Fe.MAX,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(pe,"\\$1"),n),ref:e[2]}},react:function(e,t,n){return i[e.ref]?r("a",{key:n.key,href:Ue(i[e.ref].target),title:i[e.ref].title},t(e.content,n)):r("span",{key:n.key},t(e.fallbackContent,n))}},table:{match:De(oe),order:Fe.HIGH,parse:$e,react:function(e,t,n){return r("table",{key:n.key},r("thead",null,r("tr",null,e.header.map((function(a,c){return r("th",{key:c,style:Ge(e,c)},t(a,n))})))),r("tbody",null,e.cells.map((function(a,c){return r("tr",{key:c},a.map((function(a,c){return r("td",{key:c,style:Ge(e,c)},t(a,n))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?me.exec(e):null},order:Fe.HIGH,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Re(we),order:Fe.MIN,parse:function(e){return{content:e[0].replace(J,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:Be(ke),order:Fe.MED,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,n){return r("strong",{key:n.key},t(e.content,n))}},textEmphasized:{match:Be(Oe),order:Fe.LOW,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,n){return r("em",{key:n.key},t(e.content,n))}},textEscaped:{match:Be(xe),order:Fe.HIGH,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:Be(je),order:Fe.LOW,parse:Ve,react:function(e,t,n){return r("del",{key:n.key},t(e.content,n))}}};!0!==t.disableParsingRawHTML&&(l.htmlBlock={match:Re(F),order:Fe.HIGH,parse:function(e,t,n){var r,a=e[3].match(Se),o=new RegExp("^"+a[1],"gm"),i=e[3].replace(o,""),l=(r=i,Pe.some((function(e){return e.test(r)}))?qe:We),u=e[1].toLowerCase(),s=-1!==I.indexOf(u);return{attrs:c(e[2]),content:s?e[3]:l(t,i,n),noInnerParse:s,tag:s?u:e[1]}},react:function(e,t,n){return r(e.tag,Object.assign({key:n.key},e.attrs),e.noInnerParse?e.content:t(e.content,n))}},l.htmlSelfClosing={match:Re(Q),order:Fe.HIGH,parse:function(e){return{attrs:c(e[2]||""),tag:e[1]}},react:function(e,t,n){return r(e.tag,Object.assign({},e.attrs,{key:n.key}))}});var u,s,f=function(e){var t=Object.keys(e);function n(r,a){for(var c=[],o="";r;)for(var i=0;i<t.length;){var l=t[i],u=e[l],s=u.match(r,a,o);if(s){var p=s[0];r=r.substring(p.length);var f=u.parse(s,n,a);null==f.type&&(f.type=l),c.push(f),o=p;break}i++}return c}return t.sort((function(t,n){var r=e[t].order,a=e[n].order;return r!==a?r-a:t<n?-1:1})),function(e,t){return n(function(e){return e.replace(D,"\n").replace(X,"").replace(de,"    ")}(e),t)}}(l),d=(s=l,u=function(e,t,n){return s[e.type].react(e,t,n)},function e(t,n){if(void 0===n&&(n={}),Array.isArray(t)){for(var r=n.key,a=[],c=!1,o=0;o<t.length;o++){n.key=o;var i=e(t[o],n),l="string"==typeof i;l&&c?a[a.length-1]+=i:a.push(i),c=l}return n.key=r,a}return u(t,e,n)}),m=a(e.replace(/<!--[\s\S]*?(?:-->)/g,""));return o.length&&m.props.children.push(r("footer",{key:"footer"},o.map((function(e){return r("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,d(f(e.footnote,{inline:!0})))})))),m}(t,n),r)};Object(r.registerBlockType)("create-block/playlist",{title:Object(a.__)("Playlist","playlist"),description:Object(a.__)("Use this plugin to annotate and play clips from an audio file.","playlist"),category:"widgets",icon:"smiley",supports:{html:!1},attributes:{audio_url:{type:"string",source:"attribute",attribute:"src",selector:"audio"},clips:{type:"array",source:"query",selector:"div.playlist-clip",query:{start:{type:"string",source:"attribute",attribute:"data-playlist-clip-start"},end:{type:"string",source:"attribute",attribute:"data-playlist-clip-end"},description:{type:"string",source:"text",selector:"div.playlist-clip-description"}}}},edit:function(e){var t=e.attributes,n=e.className,r=e.setAttributes,a=t.audio_url,c=t.clips;c||(c=[]);var s=0,p=function(e,t,n){["start","end"].includes(e)&&n.indexOf(" ")>-1&&(n=Object(u.b)(parseInt(s.currentTime)));var a=[];c[t][e]=n,c.forEach((function(e){a.push(e)})),r({clips:a})};return Object(i.createElement)("p",{className:n},Object(i.createElement)(l.TextControl,{label:"Audio URL",value:a,onChange:function(e){a=e,r({audio_url:e})}}),Object(i.createElement)("div",{class:"audio_controls"},Object(i.createElement)("audio",{controls:!0,src:t.audio_url,ref:function(e){s=e}}),Object(i.createElement)("a",{class:"back-5",onClick:function(){s.currentTime=s.currentTime-5}},"<< 5"),"  ",Object(i.createElement)("a",{class:"forward-5",onClick:function(){s.currentTime=s.currentTime+5}},">> 5"),Object(i.createElement)("button",{onClick:function(){r({clips:[].concat(o()(c),[{start:"0:00",end:"0:00",description:""}])})}},"Add Clip")),c.map((function(e,t){return Object(i.createElement)("div",{class:"playlist-clip"},Object(i.createElement)("div",{class:"start-field"},Object(i.createElement)(l.TextControl,{label:"Clip Start (".concat(Object(u.b)(e.start),")"),value:e.start,onChange:function(e){p("start",t,e)}})),Object(i.createElement)("div",{class:"end-field"},Object(i.createElement)(l.TextControl,{label:"Clip End (".concat(Object(u.b)(e.end),")"),value:e.end,onChange:function(e){p("end",t,e)}})),Object(i.createElement)("div",{class:"end-field"},"Press space bar to enter current time."),Object(i.createElement)(l.TextareaControl,{label:"Clip Description (markdown compatible)",value:e.description,onChange:function(e){p("description",t,e)}}))})))},save:function(e){var t=e.attributes,n=t.audio_url,r=t.clips;return Object(i.createElement)("div",null,Object(i.createElement)("div",{class:"audio_controls"},Object(i.createElement)("audio",{controls:!0,src:n}),Object(i.createElement)("span",{class:"back-5",title:"rewind 5 seconds"},Object(i.createElement)(j,{class:"rewind-button"})),Object(i.createElement)("span",{class:"forward-5",title:"fforward 5 seconds"},Object(i.createElement)(j,null))),r.map((function(e,t){return Object(i.createElement)("div",{class:"playlist-clip","data-playlist-clip-start":e.start,"data-playlist-clip-end":e.end},Object(i.createElement)("span",{class:"play-clip-button"},Object(i.createElement)(y,{class:"play-button"}),Object(i.createElement)(v,{class:"pause-button"}),"Start play: ",e.start," to ",e.end),Object(i.createElement)("div",{class:"playlist-clip-description",hidden:!0},e.description),Object(i.createElement)("div",{class:"playlist-clip-description-visible"},Object(i.createElement)(nt,null,e.description)))})))}})}]);