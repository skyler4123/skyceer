// @editorjs/attaches@1.3.0 downloaded from https://ga.jspm.io/npm:@editorjs/attaches@1.3.0/dist/bundle.js

var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var o={};!function(t,w){o=w()}(window,(function(){return function(t){var o={};function n(w){if(o[w])return o[w].exports;var x=o[w]={i:w,l:!1,exports:{}};return t[w].call(x.exports,x,x.exports,n),x.l=!0,x.exports}return n.m=t,n.c=o,n.d=function(t,o,w){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:w})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var w=Object.create(null);if(n.r(w),Object.defineProperty(w,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var x in t)n.d(w,x,function(o){return t[o]}.bind(null,x));return w},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="/",n(n.s=6)}([function(o,w,x){window,o.exports=function(t){var o={};function n(w){if(o[w])return o[w].exports;var x=o[w]={i:w,l:!1,exports:{}};return t[w].call(x.exports,x,x.exports,n),x.l=!0,x.exports}return n.m=t,n.c=o,n.d=function(t,o,w){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:w})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var w=Object.create(null);if(n.r(w),Object.defineProperty(w,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var x in t)n.d(w,x,function(o){return t[o]}.bind(null,x));return w},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=3)}([function(o,w){var x;x=function(){return this||t}();try{x=x||new Function("return this")()}catch(o){"object"==typeof window&&(x=window)}o.exports=x},function(o,w,x){(function(o){var C=x(2),T=setTimeout;function i(){}function a(o){if(!((this||t)instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof o)throw new TypeError("not a function");(this||t)._state=0,(this||t)._handled=!1,(this||t)._value=void 0,(this||t)._deferreds=[],d(o,this||t)}function s(t,o){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,a._immediateFn((function(){var w=1===t._state?o.onFulfilled:o.onRejected;if(null!==w){var x;try{x=w(t._value)}catch(t){return void l(o.promise,t)}c(o.promise,x)}else(1===t._state?c:l)(o.promise,t._value)}))):t._deferreds.push(o)}function c(t,o){try{if(o===t)throw new TypeError("A promise cannot be resolved with itself.");if(o&&("object"==typeof o||"function"==typeof o)){var w=o.then;if(o instanceof a)return t._state=3,t._value=o,void u(t);if("function"==typeof w)return void d((x=w,C=o,function(){x.apply(C,arguments)}),t)}t._state=1,t._value=o,u(t)}catch(o){l(t,o)}var x,C}function l(t,o){t._state=2,t._value=o,u(t)}function u(t){2===t._state&&0===t._deferreds.length&&a._immediateFn((function(){t._handled||a._unhandledRejectionFn(t._value)}));for(var o=0,w=t._deferreds.length;o<w;o++)s(t,t._deferreds[o]);t._deferreds=null}function f(o,w,x){(this||t).onFulfilled="function"==typeof o?o:null,(this||t).onRejected="function"==typeof w?w:null,(this||t).promise=x}function d(t,o){var w=!1;try{t((function(t){w||(w=!0,c(o,t))}),(function(t){w||(w=!0,l(o,t))}))}catch(t){if(w)return;w=!0,l(o,t)}}a.prototype.catch=function(t){return this.then(null,t)},a.prototype.then=function(o,w){var x=new(this||t).constructor(i);return s(this||t,new f(o,w,x)),x},a.prototype.finally=C.a,a.all=function(t){return new a((function(o,w){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var x=Array.prototype.slice.call(t);if(0===x.length)return o([]);var C=x.length;function i(t,T){try{if(T&&("object"==typeof T||"function"==typeof T)){var k=T.then;if("function"==typeof k)return void k.call(T,(function(o){i(t,o)}),w)}x[t]=T,0==--C&&o(x)}catch(t){w(t)}}for(var T=0;T<x.length;T++)i(T,x[T])}))},a.resolve=function(t){return t&&"object"==typeof t&&t.constructor===a?t:new a((function(o){o(t)}))},a.reject=function(t){return new a((function(o,w){w(t)}))},a.race=function(t){return new a((function(o,w){for(var x=0,C=t.length;x<C;x++)t[x].then(o,w)}))},a._immediateFn="function"==typeof o&&function(t){o(t)}||function(t){T(t,0)},a._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},w.a=a}).call(this||t,x(5).setImmediate)},function(o,w,x){w.a=function(o){var w=(this||t).constructor;return this.then((function(t){return w.resolve(o()).then((function(){return t}))}),(function(t){return w.resolve(o()).then((function(){return w.reject(t)}))}))}},function(t,o,w){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}w(4);var x,C,T,k,j,F,O,M=w(8),L=(C=function(t){return new Promise((function(o,w){t=k(t),(t=j(t)).beforeSend&&t.beforeSend();var x=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");x.open(t.method,t.url),x.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(t.headers).forEach((function(o){var w=t.headers[o];x.setRequestHeader(o,w)}));var C=t.ratio;x.upload.addEventListener("progress",(function(o){var w=Math.round(o.loaded/o.total*100),x=Math.ceil(w*C/100);t.progress(Math.min(x,100))}),!1),x.addEventListener("progress",(function(o){var w=Math.round(o.loaded/o.total*100),x=Math.ceil(w*(100-C)/100)+C;t.progress(Math.min(x,100))}),!1),x.onreadystatechange=function(){if(4===x.readyState){var t=x.response;try{t=JSON.parse(t)}catch(t){}var C=M.parseHeaders(x.getAllResponseHeaders()),T={body:t,code:x.status,headers:C};O(x.status)?o(T):w(T)}},x.send(t.data)}))},T=function(t){return t.method="POST",C(t)},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.url&&"string"!=typeof t.url)throw new Error("Url must be a string");if(t.url=t.url||"",t.method&&"string"!=typeof t.method)throw new Error("`method` must be a string or null");if(t.method=t.method?t.method.toUpperCase():"GET",t.headers&&"object"!==r(t.headers))throw new Error("`headers` must be an object or null");if(t.headers=t.headers||{},t.type&&("string"!=typeof t.type||!Object.values(x).includes(t.type)))throw new Error("`type` must be taken from module's «contentType» library");if(t.progress&&"function"!=typeof t.progress)throw new Error("`progress` must be a function or null");if(t.progress=t.progress||function(t){},t.beforeSend=t.beforeSend||function(t){},t.ratio&&"number"!=typeof t.ratio)throw new Error("`ratio` must be a number");if(t.ratio<0||t.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(t.ratio=t.ratio||90,t.accept&&"string"!=typeof t.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(t.accept=t.accept||"*/*",t.multiple&&"boolean"!=typeof t.multiple)throw new Error("`multiple` must be a true or false");if(t.multiple=t.multiple||!1,t.fieldName&&"string"!=typeof t.fieldName)throw new Error("`fieldName` must be a string");return t.fieldName=t.fieldName||"files",t},j=function(t){switch(t.method){case"GET":var o=F(t.data,x.URLENCODED);delete t.data,t.url=/\?/.test(t.url)?t.url+"&"+o:t.url+"?"+o;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var w=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||x.JSON}(t);(M.isFormData(t.data)||M.isFormElement(t.data))&&(w=x.FORM),t.data=F(t.data,w),w!==L.contentType.FORM&&(t.headers["content-type"]=w)}return t},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case x.URLENCODED:return M.urlEncode(t);case x.JSON:return M.jsonEncode(t);case x.FORM:return M.formEncode(t);default:return t}},O=function(t){return t>=200&&t<300},{contentType:x={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:C,get:function(t){return t.method="GET",C(t)},post:T,transport:function(t){return t=k(t),M.selectFiles(t).then((function(o){for(var w=new FormData,x=0;x<o.length;x++)w.append(t.fieldName,o[x],o[x].name);M.isObject(t.data)&&Object.keys(t.data).forEach((function(o){var x=t.data[o];w.append(o,x)}));var C=t.beforeSend;return t.beforeSend=function(){return C(o)},t.data=w,T(t)}))},selectFiles:function(t){return delete(t=k(t)).beforeSend,M.selectFiles(t)}});t.exports=L},function(t,o,w){w.r(o);var x=w(1);window.Promise=window.Promise||x.a},function(o,w,x){(function(o){var C=void 0!==o&&o||"undefined"!=typeof self&&self||window,T=Function.prototype.apply;function i(o,w){(this||t)._id=o,(this||t)._clearFn=w}w.setTimeout=function(){return new i(T.call(setTimeout,C,arguments),clearTimeout)},w.setInterval=function(){return new i(T.call(setInterval,C,arguments),clearInterval)},w.clearTimeout=w.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){(this||t)._clearFn.call(C,(this||t)._id)},w.enroll=function(t,o){clearTimeout(t._idleTimeoutId),t._idleTimeout=o},w.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},w._unrefActive=w.active=function(t){clearTimeout(t._idleTimeoutId);var o=t._idleTimeout;o>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),o))},x(6),w.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==o&&o.setImmediate||(this||t)&&(this||t).setImmediate,w.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==o&&o.clearImmediate||(this||t)&&(this||t).clearImmediate}).call(this||t,x(0))},function(o,w,x){(function(o,w){!function(t,o){if(!t.setImmediate){var x,C,T,k,j,F=1,O={},M=!1,L=t.document,I=Object.getPrototypeOf&&Object.getPrototypeOf(t);I=I&&I.setTimeout?I:t,"[object process]"==={}.toString.call(t.process)?x=function(t){w.nextTick((function(){h(t)}))}:function(){if(t.postMessage&&!t.importScripts){var o=!0,w=t.onmessage;return t.onmessage=function(){o=!1},t.postMessage("","*"),t.onmessage=w,o}}()?(k="setImmediate$"+Math.random()+"$",j=function(o){o.source===t&&"string"==typeof o.data&&0===o.data.indexOf(k)&&h(+o.data.slice(k.length))},t.addEventListener?t.addEventListener("message",j,!1):t.attachEvent("onmessage",j),x=function(o){t.postMessage(k+o,"*")}):t.MessageChannel?((T=new MessageChannel).port1.onmessage=function(t){h(t.data)},x=function(t){T.port2.postMessage(t)}):L&&"onreadystatechange"in L.createElement("script")?(C=L.documentElement,x=function(t){var o=L.createElement("script");o.onreadystatechange=function(){h(t),o.onreadystatechange=null,C.removeChild(o),o=null},C.appendChild(o)}):x=function(t){setTimeout(h,0,t)},I.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var o=new Array(arguments.length-1),w=0;w<o.length;w++)o[w]=arguments[w+1];var C={callback:t,args:o};return O[F]=C,x(F),F++},I.clearImmediate=p}function p(t){delete O[t]}function h(t){if(M)setTimeout(h,0,t);else{var o=O[t];if(o){M=!0;try{!function(t){var o=t.callback,w=t.args;switch(w.length){case 0:o();break;case 1:o(w[0]);break;case 2:o(w[0],w[1]);break;case 3:o(w[0],w[1],w[2]);break;default:o.apply(void 0,w)}}(o)}finally{p(t),M=!1}}}}}("undefined"==typeof self?void 0===o?this||t:o:self)}).call(this||t,x(0),x(7))},function(o,w){var x,C,T=o.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(o){if(x===setTimeout)return setTimeout(o,0);if((x===i||!x)&&setTimeout)return x=setTimeout,setTimeout(o,0);try{return x(o,0)}catch(w){try{return x.call(null,o,0)}catch(w){return x.call(this||t,o,0)}}}!function(){try{x="function"==typeof setTimeout?setTimeout:i}catch(t){x=i}try{C="function"==typeof clearTimeout?clearTimeout:a}catch(t){C=a}}();var k,j=[],F=!1,O=-1;function d(){F&&k&&(F=!1,k.length?j=k.concat(j):O=-1,j.length&&p())}function p(){if(!F){var o=s(d);F=!0;for(var w=j.length;w;){for(k=j,j=[];++O<w;)k&&k[O].run();O=-1,w=j.length}k=null,F=!1,function(o){if(C===clearTimeout)return clearTimeout(o);if((C===a||!C)&&clearTimeout)return C=clearTimeout,clearTimeout(o);try{C(o)}catch(w){try{return C.call(null,o)}catch(w){return C.call(this||t,o)}}}(o)}}function h(o,w){(this||t).fun=o,(this||t).array=w}function m(){}T.nextTick=function(t){var o=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)o[w-1]=arguments[w];j.push(new h(t,o)),1!==j.length||F||s(p)},h.prototype.run=function(){(this||t).fun.apply(null,(this||t).array)},T.title="browser",T.browser=!0,T.env={},T.argv=[],T.version="",T.versions={},T.on=m,T.addListener=m,T.once=m,T.off=m,T.removeListener=m,T.removeAllListeners=m,T.emit=m,T.prependListener=m,T.prependOnceListener=m,T.listeners=function(t){return[]},T.binding=function(t){throw new Error("process.binding is not supported")},T.cwd=function(){return"/"},T.chdir=function(t){throw new Error("process.chdir is not supported")},T.umask=function(){return 0}},function(o,w,x){function r(t,o){for(var w=0;w<o.length;w++){var x=o[w];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(t,x.key,x)}}var C=x(9);o.exports=function(){function e(){!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this||t,e)}var o,w;return o=e,(w=[{key:"urlEncode",value:function(t){return C(t)}},{key:"jsonEncode",value:function(t){return JSON.stringify(t)}},{key:"formEncode",value:function(t){if(this.isFormData(t))return t;if(this.isFormElement(t))return new FormData(t);if(this.isObject(t)){var o=new FormData;return Object.keys(t).forEach((function(w){var x=t[w];o.append(w,x)})),o}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(t){return"[object Object]"===Object.prototype.toString.call(t)}},{key:"isFormData",value:function(t){return t instanceof FormData}},{key:"isFormElement",value:function(t){return t instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(o,w){var x=document.createElement("INPUT");x.type="file",t.multiple&&x.setAttribute("multiple","multiple"),t.accept&&x.setAttribute("accept",t.accept),x.style.display="none",document.body.appendChild(x),x.addEventListener("change",(function(t){var w=t.target.files;o(w),document.body.removeChild(x)}),!1),x.click()}))}},{key:"parseHeaders",value:function(t){var o=t.trim().split(/[\r\n]+/),w={};return o.forEach((function(t){var o=t.split(": "),x=o.shift(),C=o.join(": ");x&&(w[x]=C)})),w}}])&&r(o,w),e}()},function(t,o){var n=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},r=function(t,o,w,x){return o=o||null,w=w||"&",x=x||null,t?function(t){for(var o=new Array,w=0;w<t.length;w++)t[w]&&o.push(t[w]);return o}(Object.keys(t).map((function(C){var T,k,j=C;if(x&&(j=x+"["+j+"]"),"object"==typeof t[C]&&null!==t[C])T=r(t[C],null,w,j);else{o&&(k=j,j=!isNaN(parseFloat(k))&&isFinite(k)?o+Number(j):j);var F=t[C];F=(F=0===(F=!1===(F=!0===F?"1":F)?"0":F)?"0":F)||"",T=n(j)+"="+n(F)}return T}))).join(w).replace(/[!'()*]/g,""):""};t.exports=r}])},function(t,o,w){var x=w(2);"string"==typeof x&&(x=[[t.i,x,""]]);var C={hmr:!0,transform:void 0,insertInto:void 0};w(4)(x,C);x.locals&&(t.exports=x.locals)},function(t,o,w){(t.exports=w(3)(!1)).push([t.i,".cdx-attaches {\n  --color-line: #EFF0F1;\n  --color-bg: #fff;\n  --color-bg-secondary: #F8F8F8;\n  --color-bg-secondary--hover: #f2f2f2;\n  --color-text-secondary: #707684;\n}\n\n  .cdx-attaches--with-file {\n    display: flex;\n    align-items: center;\n    padding: 10px 12px;\n    border: 1px solid var(--color-line);\n    border-radius: 7px;\n    background: var(--color-bg);\n  }\n\n  .cdx-attaches--with-file .cdx-attaches__file-info {\n      display: grid;\n      grid-gap: 4px;\n      max-width: calc(100% - 80px);\n      margin: auto 0;\n      flex-grow: 2;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__download-button {\n      display: flex;\n      align-items: center;\n      background: var(--color-bg-secondary);\n      padding: 6px;\n      border-radius: 6px;\n      margin: auto 0 auto auto;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__download-button:hover {\n        background: var(--color-bg-secondary--hover);\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__download-button svg {\n        width: 20px;\n        height: 20px;\n        fill: none;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon {\n      position: relative;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon-background {\n        background-color: #333;\n\n        width: 27px;\n        height: 30px;\n        margin-right: 12px;\n        border-radius: 8px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n  @supports(-webkit-mask-box-image: url('')){\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon-background {\n          border-radius: 0;\n          -webkit-mask-box-image: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10.3872C0 1.83334 1.83334 0 10.3872 0H13.6128C22.1667 0 24 1.83334 24 10.3872V13.6128C24 22.1667 22.1667 24 13.6128 24H10.3872C1.83334 24 0 22.1667 0 13.6128V10.3872Z' fill='black'/%3E%3C/svg%3E%0A\") 48% 41% 37.9% 53.3%\n      };\n        }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon-label {\n        position: absolute;\n        left: 3px;\n        top: 11px;\n        background: inherit;\n        text-transform: uppercase;\n        line-height: 1em;\n        color: #fff;\n        padding: 1px 2px;\n        border-radius: 3px;\n        font-size: 10px;\n        font-weight: bold;\n        /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.22); */\n        font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;\n        letter-spacing: 0.02em;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon svg {\n        width: 20px;\n        height: 20px;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon path {\n        stroke: #fff;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__size {\n      color: var(--color-text-secondary);\n      font-size: 12px;\n      line-height: 1em;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__size::after {\n        content: attr(data-size);\n        margin-left: 0.2em;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__title {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      outline: none;\n      max-width: 90%;\n      font-size: 14px;\n      font-weight: 500;\n      line-height: 1em;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__title:empty::before {\n      content: attr(data-placeholder);\n      color: #7b7e89;\n    }\n\n  .cdx-attaches--loading .cdx-attaches__title,\n    .cdx-attaches--loading .cdx-attaches__file-icon,\n    .cdx-attaches--loading .cdx-attaches__size,\n    .cdx-attaches--loading .cdx-attaches__download-button,\n    .cdx-attaches--loading .cdx-attaches__button {\n      opacity: 0;\n      font-size: 0;\n    }\n\n  .cdx-attaches__button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #000;\n    border-radius: 7px;\n    font-weight: 500;\n  }\n\n  .cdx-attaches__button svg {\n      margin-top: 0;\n    }\n",""])},function(o,w){o.exports=function(o){var w=[];return w.toString=function(){return this.map((function(t){var w=function(t,o){var w=t[1]||"",x=t[3];if(!x)return w;if(o&&"function"==typeof btoa){var C=(k=x,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(k))))+" */"),T=x.sources.map((function(t){return"/*# sourceURL="+x.sourceRoot+t+" */"}));return[w].concat(T).concat([C]).join("\n")}var k;return[w].join("\n")}(t,o);return t[2]?"@media "+t[2]+"{"+w+"}":w})).join("")},w.i=function(o,x){"string"==typeof o&&(o=[[null,o,""]]);for(var C={},T=0;T<(this||t).length;T++){var k=(this||t)[T][0];"number"==typeof k&&(C[k]=!0)}for(T=0;T<o.length;T++){var j=o[T];"number"==typeof j[0]&&C[j[0]]||(x&&!j[2]?j[2]=x:x&&(j[2]="("+j[2]+") and ("+x+")"),w.push(j))}},w}},function(o,w,x){var C,T,k={},j=(C=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===T&&(T=C.apply(this||t,arguments)),T}),s=function(t){return document.querySelector(t)},F=function(o){var w={};return function(o){if("function"==typeof o)return o();if(void 0===w[o]){var x=s.call(this||t,o);if(window.HTMLIFrameElement&&x instanceof window.HTMLIFrameElement)try{x=x.contentDocument.head}catch(o){x=null}w[o]=x}return w[o]}}(),O=null,M=0,L=[],I=x(5);function p(t,o){for(var w=0;w<t.length;w++){var x=t[w],C=k[x.id];if(C){C.refs++;for(var T=0;T<C.parts.length;T++)C.parts[T](x.parts[T]);for(;T<x.parts.length;T++)C.parts.push(b(x.parts[T],o))}else{var j=[];for(T=0;T<x.parts.length;T++)j.push(b(x.parts[T],o));k[x.id]={id:x.id,refs:1,parts:j}}}}function h(t,o){for(var w=[],x={},C=0;C<t.length;C++){var T=t[C],k=o.base?T[0]+o.base:T[0],j={css:T[1],media:T[2],sourceMap:T[3]};x[k]?x[k].parts.push(j):w.push(x[k]={id:k,parts:[j]})}return w}function m(t,o){var w=F(t.insertInto);if(!w)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var x=L[L.length-1];if("top"===t.insertAt)x?x.nextSibling?w.insertBefore(o,x.nextSibling):w.appendChild(o):w.insertBefore(o,w.firstChild),L.push(o);else if("bottom"===t.insertAt)w.appendChild(o);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var C=F(t.insertInto+" "+t.insertAt.before);w.insertBefore(o,C)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var o=L.indexOf(t);o>=0&&L.splice(o,1)}function y(t){var o=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),g(o,t.attrs),m(t,o),o}function g(t,o){Object.keys(o).forEach((function(w){t.setAttribute(w,o[w])}))}function b(t,o){var w,x,C,T;if(o.transform&&t.css){if(!(T=o.transform(t.css)))return function(){};t.css=T}if(o.singleton){var k=M++;w=O||(O=y(o)),x=_.bind(null,w,k,!1),C=_.bind(null,w,k,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(w=function(t){var o=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(o,t.attrs),m(t,o),o}(o),x=E.bind(null,w,o),C=function(){v(w),w.href&&URL.revokeObjectURL(w.href)}):(w=y(o),x=S.bind(null,w),C=function(){v(w)});return x(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;x(t=o)}else C()}}o.exports=function(t,o){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(o=o||{}).attrs="object"==typeof o.attrs?o.attrs:{},o.singleton||"boolean"==typeof o.singleton||(o.singleton=j()),o.insertInto||(o.insertInto="head"),o.insertAt||(o.insertAt="bottom");var w=h(t,o);return p(w,o),function(t){for(var x=[],C=0;C<w.length;C++){var T=w[C];(j=k[T.id]).refs--,x.push(j)}t&&p(h(t,o),o);for(C=0;C<x.length;C++){var j;if(0===(j=x[C]).refs){for(var F=0;F<j.parts.length;F++)j.parts[F]();delete k[j.id]}}}};var R,A=(R=[],function(t,o){return R[t]=o,R.filter(Boolean).join("\n")});function _(t,o,w,x){var C=w?"":x.css;if(t.styleSheet)t.styleSheet.cssText=A(o,C);else{var T=document.createTextNode(C),k=t.childNodes;k[o]&&t.removeChild(k[o]),k.length?t.insertBefore(T,k[o]):t.appendChild(T)}}function S(t,o){var w=o.css,x=o.media;if(x&&t.setAttribute("media",x),t.styleSheet)t.styleSheet.cssText=w;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(w))}}function E(t,o,w){var x=w.css,C=w.sourceMap,T=void 0===o.convertToAbsoluteUrls&&C;(o.convertToAbsoluteUrls||T)&&(x=I(x)),C&&(x+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(C))))+" */");var k=new Blob([x],{type:"text/css"}),j=t.href;t.href=URL.createObjectURL(k),j&&URL.revokeObjectURL(j)}},function(t,o){t.exports=function(t){var o="undefined"!=typeof window&&window.location;if(!o)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var w=o.protocol+"//"+o.host,x=w+o.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,o){var C,T=o.trim().replace(/^"(.*)"$/,(function(t,o){return o})).replace(/^'(.*)'$/,(function(t,o){return o}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(T)?t:(C=0===T.indexOf("//")?T:0===T.indexOf("/")?w+T:x+T.replace(/^\.\//,""),"url("+JSON.stringify(C)+")")}))}},function(o,w,x){x.r(w),x.d(w,"default",(function(){return F}));x(1);var C=x(0),T=x.n(C);function i(t,o){for(var w=0;w<o.length;w++){var x=o[w];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(t,x.key,x)}}var k=function(){function e(o){var w=o.config,x=o.onUpload,C=o.onError;!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this||t,e),(this||t).config=w,(this||t).onUpload=x,(this||t).onError=C}var o,w,x;return o=e,(w=[{key:"uploadSelectedFile",value:function(o){var w=this||t,x=o.onPreview;((this||t).config.uploader&&"function"==typeof(this||t).config.uploader.uploadByFile?T.a.selectFiles({accept:(this||t).config.types}).then((function(t){x();var o,C=w.config.uploader.uploadByFile(t[0]);return(o=C)&&"function"==typeof o.then||console.warn("Custom uploader method uploadByFile should return a Promise"),C})):T.a.transport({url:(this||t).config.endpoint,accept:(this||t).config.types,beforeSend:function(){return x()},fieldName:(this||t).config.field,headers:(this||t).config.additionalRequestHeaders||{}}).then((function(t){return t.body}))).then((function(t){w.onUpload(t)})).catch((function(t){var o=t.body,x=o&&o.message?o.message:w.config.errorMessage;w.onError(x)}))}}])&&i(o.prototype,w),x&&i(o,x),e}();function s(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,o){if(t){if("string"==typeof t)return c(t,o);var w=Object.prototype.toString.call(t).slice(8,-1);"Object"===w&&t.constructor&&(w=t.constructor.name);return"Map"===w||"Set"===w?Array.from(t):"Arguments"===w||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)?c(t,o):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,o){(null==o||o>t.length)&&(o=t.length);for(var w=0,x=new Array(o);w<o;w++)x[w]=t[w];return x}function l(t){var o,w=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,x=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},C=document.createElement(t);Array.isArray(w)?(o=C.classList).add.apply(o,s(w)):w&&C.classList.add(w);for(var T in x)C[T]=x[T];return C}function u(t){return 0===Object.keys(t).length}const j='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.3236 8.43554L9.49533 12.1908C9.13119 12.5505 8.93118 13.043 8.9393 13.5598C8.94741 14.0767 9.163 14.5757 9.53862 14.947C9.91424 15.3182 10.4191 15.5314 10.9422 15.5397C11.4653 15.5479 11.9637 15.3504 12.3279 14.9908L16.1562 11.2355C16.8845 10.5161 17.2845 9.53123 17.2682 8.4975C17.252 7.46376 16.8208 6.46583 16.0696 5.72324C15.3184 4.98066 14.3086 4.55425 13.2624 4.53782C12.2162 4.52138 11.2193 4.91627 10.4911 5.63562L6.66277 9.39093C5.57035 10.4699 4.97032 11.9473 4.99467 13.4979C5.01903 15.0485 5.66578 16.5454 6.79264 17.6592C7.9195 18.7731 9.43417 19.4127 11.0034 19.4374C12.5727 19.462 14.068 18.8697 15.1604 17.7907L18.9887 14.0354"/></svg>';function d(t,o){for(var w=0;w<o.length;w++){var x=o[w];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(t,x.key,x)}}var F=function(){function e(o){var w=this||t,x=o.data,C=o.config,T=o.api,j=o.readOnly;!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this||t,e),(this||t).api=T,(this||t).readOnly=j,(this||t).nodes={wrapper:null,button:null,title:null},(this||t)._data={file:{},title:""},(this||t).config={endpoint:C.endpoint||"",field:C.field||"file",types:C.types||"*",buttonText:C.buttonText||"Select file to upload",errorMessage:C.errorMessage||"File upload failed",uploader:C.uploader||void 0,additionalRequestHeaders:C.additionalRequestHeaders||{}},void 0===x||u(x)||((this||t).data=x),(this||t).uploader=new k({config:(this||t).config,onUpload:function(t){return w.onUpload(t)},onError:function(t){return w.uploadingFailed(t)}}),(this||t).enableFileUpload=(this||t).enableFileUpload.bind(this||t)}var o,w,x;return o=e,x=[{key:"toolbox",get:function(){return{icon:j,title:"Attachment"}}},{key:"isReadOnlySupported",get:function(){return!0}}],(w=[{key:"CSS",get:function(){return{baseClass:(this||t).api.styles.block,apiButton:(this||t).api.styles.button,loader:(this||t).api.styles.loader,wrapper:"cdx-attaches",wrapperWithFile:"cdx-attaches--with-file",wrapperLoading:"cdx-attaches--loading",button:"cdx-attaches__button",title:"cdx-attaches__title",size:"cdx-attaches__size",downloadButton:"cdx-attaches__download-button",fileInfo:"cdx-attaches__file-info",fileIcon:"cdx-attaches__file-icon",fileIconBackground:"cdx-attaches__file-icon-background",fileIconLabel:"cdx-attaches__file-icon-label"}}},{key:"EXTENSIONS",get:function(){return{doc:"#1483E9",docx:"#1483E9",odt:"#1483E9",pdf:"#DB2F2F",rtf:"#744FDC",tex:"#5a5a5b",txt:"#5a5a5b",pptx:"#E35200",ppt:"#E35200",mp3:"#eab456",mp4:"#f676a6",xls:"#11AE3D",html:"#2988f0",htm:"#2988f0",png:"#AA2284",jpg:"#D13359",jpeg:"#D13359",gif:"#f6af76",zip:"#4f566f",rar:"#4f566f",exe:"#e26f6f",svg:"#bf5252",key:"#00B2FF",sketch:"#FFC700",ai:"#FB601D",psd:"#388ae5",dmg:"#e26f6f",json:"#2988f0",csv:"#11AE3D"}}},{key:"validate",value:function(t){return!u(t.file)}},{key:"save",value:function(o){if(this.pluginHasData()){var w=o.querySelector(".".concat((this||t).CSS.title));w&&Object.assign((this||t).data,{title:w.innerHTML})}return(this||t).data}},{key:"render",value:function(){var o=l("div",(this||t).CSS.baseClass);return(this||t).nodes.wrapper=l("div",(this||t).CSS.wrapper),this.pluginHasData()?this.showFileData():this.prepareUploadButton(),o.appendChild((this||t).nodes.wrapper),o}},{key:"prepareUploadButton",value:function(){(this||t).nodes.button=l("div",[(this||t).CSS.apiButton,(this||t).CSS.button]),(this||t).nodes.button.innerHTML="".concat(j," ").concat((this||t).config.buttonText),(this||t).readOnly||(this||t).nodes.button.addEventListener("click",(this||t).enableFileUpload),(this||t).nodes.wrapper.appendChild((this||t).nodes.button)}},{key:"appendCallback",value:function(){(this||t).nodes.button.click()}},{key:"pluginHasData",value:function(){return""!==(this||t).data.title||Object.values((this||t).data.file).some((function(t){return void 0!==t}))}},{key:"enableFileUpload",value:function(){var o=this||t;(this||t).uploader.uploadSelectedFile({onPreview:function(){o.nodes.wrapper.classList.add(o.CSS.wrapperLoading,o.CSS.loader)}})}},{key:"onUpload",value:function(o){var w,x,C,T=o;try{T.success&&void 0!==T.file&&!u(T.file)?((this||t).data={file:T.file,title:T.file.title||""},(this||t).nodes.button.remove(),this.showFileData(),w=(this||t).nodes.title,x=document.createRange(),C=window.getSelection(),x.selectNodeContents(w),x.collapse(!1),C.removeAllRanges(),C.addRange(x),this.removeLoader()):this.uploadingFailed((this||t).config.errorMessage)}catch(o){console.error("Attaches tool error:",o),this.uploadingFailed((this||t).config.errorMessage)}(this||t).api.blocks.getBlockByIndex((this||t).api.blocks.getCurrentBlockIndex()).dispatchChange()}},{key:"appendFileIcon",value:function(o){var w,x=o.extension||(void 0===(w=o.name)?"":w.split(".").pop()),C=(this||t).EXTENSIONS[x],T=l("div",(this||t).CSS.fileIcon),k=l("div",(this||t).CSS.fileIconBackground);if(C&&(k.style.backgroundColor=C),T.appendChild(k),x){var F=x;x.length>4&&(F=x.substring(0,4)+"…");var O=l("div",(this||t).CSS.fileIconLabel,{textContent:F,title:x});C&&(O.style.backgroundColor=C),T.appendChild(O)}else k.innerHTML=j;(this||t).nodes.wrapper.appendChild(T)}},{key:"removeLoader",value:function(){var o=this||t;setTimeout((function(){return o.nodes.wrapper.classList.remove(o.CSS.wrapperLoading,o.CSS.loader)}),500)}},{key:"showFileData",value:function(){(this||t).nodes.wrapper.classList.add((this||t).CSS.wrapperWithFile);var o=(this||t).data,w=o.file,x=o.title;this.appendFileIcon(w);var C=l("div",(this||t).CSS.fileInfo);if((this||t).nodes.title=l("div",(this||t).CSS.title,{contentEditable:!1===(this||t).readOnly}),(this||t).nodes.title.dataset.placeholder=(this||t).api.i18n.t("File title"),(this||t).nodes.title.textContent=x||"",C.appendChild((this||t).nodes.title),w.size){var T,k,j=l("div",(this||t).CSS.size);Math.log10(+w.size)>=6?(T="MiB",k=w.size/Math.pow(2,20)):(T="KiB",k=w.size/Math.pow(2,10)),j.textContent=k.toFixed(1),j.setAttribute("data-size",T),C.appendChild(j)}if((this||t).nodes.wrapper.appendChild(C),void 0!==w.url){var F=l("a",(this||t).CSS.downloadButton,{innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>',href:w.url,target:"_blank",rel:"nofollow noindex noreferrer"});(this||t).nodes.wrapper.appendChild(F)}}},{key:"uploadingFailed",value:function(o){(this||t).api.notifier.show({message:o,style:"error"}),this.removeLoader()}},{key:"data",get:function(){return(this||t)._data},set:function(o){var w=o.file,x=o.title;(this||t)._data={file:w,title:x}}}])&&d(o.prototype,w),x&&d(o,x),e}()}]).default}));var w=o;const x=o.AttachesTool;export{x as AttachesTool,w as default};

