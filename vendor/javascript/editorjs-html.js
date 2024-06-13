var e={};var t=["left","right","center","justify"],i={delimiter:function(){return"<br/>"},header:function(e){var t=e.data;return"<h"+t.level+">"+t.text+"</h"+t.level+">"},paragraph:function(e){var i=e.data,o=i.alignment||i.align;return void 0!==o&&t.includes(o)?'<p style="text-align:'+o+';">'+i.text+"</p>":"<p>"+i.text+"</p>"},list:function(e){var t=e.data,i="unordered"===t.style?"ul":"ol",n=function(e,t){var i=e.map((function(e){if(!e.content&&!e.items)return"<li>"+e+"</li>";var i="";return e.items&&(i=n(e.items,t)),e.content?"<li> "+e.content+" </li>"+i:void 0}));return"<"+t+">"+i.join("")+"</"+t+">"};return n(t.items,i)},image:function(e){var t=e.data,i=t.caption?t.caption:"Image";return'<img src="'+(t.file&&t.file.url?t.file.url:t.url)+'" alt="'+i+'" />'},quote:function(e){var t=e.data;return"<blockquote>"+t.text+"</blockquote> - "+t.caption},code:function(e){return"<pre><code>"+e.data.code+"</code></pre>"},embed:function(e){var t=e.data;switch(t.service){case"vimeo":return'<iframe src="'+t.embed+'" height="'+t.height+'" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';case"youtube":return'<iframe width="'+t.width+'" height="'+t.height+'" src="'+t.embed+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';default:throw new Error("Only Youtube and Vime Embeds are supported right now.")}}};function r(e){return new Error('[31m The Parser function of type "'+e+'" is not defined. \n\n  Define your custom parser functions as: [34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks [0m')}var n=function(e){void 0===e&&(e={});var t=Object.assign({},i,e);return{parse:function(e){return e.blocks.map((function(e){return t[e.type]?t[e.type](e):r(e.type)}))},parseBlock:function(e){return t[e.type]?t[e.type](e):r(e.type)},parseStrict:function(e){var i=e.blocks,o=n(t).validate({blocks:i});if(o.length)throw new Error("Parser Functions missing for blocks: "+o.toString());for(var a=[],u=0;u<i.length;u++){if(!t[i[u].type])throw r(i[u].type);a.push(t[i[u].type](i[u]))}return a},validate:function(e){var i=e.blocks.map((function(e){return e.type})).filter((function(e,t,i){return i.indexOf(e)===t})),o=Object.keys(t);return i.filter((function(e){return!o.includes(e)}))}}};e=n;var o=e;export{o as default};
