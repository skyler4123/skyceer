// colors@0.6.2 downloaded from https://ga.jspm.io/npm:colors@0.6.2/colors.js

var e="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;function _nullRequire(e){var r=new Error("Cannot find module '"+e+"'");r.code="MODULE_NOT_FOUND";throw r}var r=false;"undefined"!==typeof o&&(r=true);if(r)n.mode="console";else{var n={};var o={};var t=n;n.mode="browser"}var addProperty=function(e,r){n[e]=function(e){return r.apply(e)};String.prototype.__defineGetter__(e,r)};function stylize(e,r){var o;if("console"===n.mode)o={bold:["[1m","[22m"],italic:["[3m","[23m"],underline:["[4m","[24m"],inverse:["[7m","[27m"],strikethrough:["[9m","[29m"],white:["[37m","[39m"],grey:["[90m","[39m"],black:["[30m","[39m"],blue:["[34m","[39m"],cyan:["[36m","[39m"],green:["[32m","[39m"],magenta:["[35m","[39m"],red:["[31m","[39m"],yellow:["[33m","[39m"],whiteBG:["[47m","[49m"],greyBG:["[49;5;8m","[49m"],blackBG:["[40m","[49m"],blueBG:["[44m","[49m"],cyanBG:["[46m","[49m"],greenBG:["[42m","[49m"],magentaBG:["[45m","[49m"],redBG:["[41m","[49m"],yellowBG:["[43m","[49m"]};else if("browser"===n.mode)o={bold:["<b>","</b>"],italic:["<i>","</i>"],underline:["<u>","</u>"],inverse:['<span style="background-color:black;color:white;">',"</span>"],strikethrough:["<del>","</del>"],white:['<span style="color:white;">',"</span>"],grey:['<span style="color:gray;">',"</span>"],black:['<span style="color:black;">',"</span>"],blue:['<span style="color:blue;">',"</span>"],cyan:['<span style="color:cyan;">',"</span>"],green:['<span style="color:green;">',"</span>"],magenta:['<span style="color:magenta;">',"</span>"],red:['<span style="color:red;">',"</span>"],yellow:['<span style="color:yellow;">',"</span>"],whiteBG:['<span style="background-color:white;">',"</span>"],greyBG:['<span style="background-color:gray;">',"</span>"],blackBG:['<span style="background-color:black;">',"</span>"],blueBG:['<span style="background-color:blue;">',"</span>"],cyanBG:['<span style="background-color:cyan;">',"</span>"],greenBG:['<span style="background-color:green;">',"</span>"],magentaBG:['<span style="background-color:magenta;">',"</span>"],redBG:['<span style="background-color:red;">',"</span>"],yellowBG:['<span style="background-color:yellow;">',"</span>"]};else{if("none"===n.mode)return e+"";console.log('unsupported mode, try "browser", "console" or "none"')}return o[r][0]+e+o[r][1]}function applyTheme(r){var o=["__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__","charAt","constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf","charCodeAt","indexOf","lastIndexof","length","localeCompare","match","replace","search","slice","split","substring","toLocaleLowerCase","toLocaleUpperCase","toLowerCase","toUpperCase","trim","trimLeft","trimRight"];Object.keys(r).forEach((function(t){-1!==o.indexOf(t)?console.log("warn: ".red+("String.prototype"+t).magenta+" is probably something you don't want to override. Ignoring style name"):"string"===typeof r[t]?addProperty(t,(function(){return n[r[t]](this||e)})):addProperty(t,(function(){var o=this||e;for(var a=0;a<r[t].length;a++)o=n[r[t][a]](o);return o}))}))}var a=["bold","underline","strikethrough","italic","inverse","grey","black","yellow","red","green","blue","white","cyan","magenta","greyBG","blackBG","yellowBG","redBG","greenBG","blueBG","whiteBG","cyanBG","magentaBG"];a.forEach((function(r){addProperty(r,(function(){return stylize(this||e,r)}))}));function sequencer(e){return function(){if(!r)return this.replace(/( )/,"$1");var n=this.split(""),o=0;n=n.map(e);return n.join("")}}var l=function(){var e=["red","yellow","green","blue","magenta"];return function(r,n,o){return" "===r?r:stylize(r,e[n++%e.length])}}();n.themes={};n.addSequencer=function(e,r){addProperty(e,sequencer(r))};n.addSequencer("rainbow",l);n.addSequencer("zebra",(function(e,r,n){return r%2===0?e:e.inverse}));n.setTheme=function(e){if("string"===typeof e)try{n.themes[e]=_nullRequire(e);applyTheme(n.themes[e]);return n.themes[e]}catch(e){console.log(e);return e}else applyTheme(e)};addProperty("stripColors",(function(){return(""+(this||e)).replace(/\x1B\[\d+m/g,"")}));function zalgo(e,r){var n={up:["̍","̎","̄","̅","̿","̑","̆","̐","͒","͗","͑","̇","̈","̊","͂","̓","̈","͊","͋","͌","̃","̂","̌","͐","̀","́","̋","̏","̒","̓","̔","̽","̉","ͣ","ͤ","ͥ","ͦ","ͧ","ͨ","ͩ","ͪ","ͫ","ͬ","ͭ","ͮ","ͯ","̾","͛","͆","̚"],down:["̖","̗","̘","̙","̜","̝","̞","̟","̠","̤","̥","̦","̩","̪","̫","̬","̭","̮","̯","̰","̱","̲","̳","̹","̺","̻","̼","ͅ","͇","͈","͉","͍","͎","͓","͔","͕","͖","͙","͚","̣"],mid:["̕","̛","̀","́","͘","̡","̢","̧","̨","̴","̵","̶","͜","͝","͞","͟","͠","͢","̸","̷","͡"," ҉"]},o=[].concat(n.up,n.down,n.mid),t={};function randomNumber(e){var r=Math.floor(Math.random()*e);return r}function is_char(e){var r=false;o.filter((function(n){r=n===e}));return r}function heComes(e,r){var o="",t,a;r=r||{};r["up"]=r["up"]||true;r["mid"]=r["mid"]||true;r["down"]=r["down"]||true;r["size"]=r["size"]||"maxi";e=e.split("");for(a in e)if(!is_char(a)){o+=e[a];t={up:0,down:0,mid:0};switch(r.size){case"mini":t.up=randomNumber(8);t.min=randomNumber(2);t.down=randomNumber(8);break;case"maxi":t.up=randomNumber(16)+3;t.min=randomNumber(4)+1;t.down=randomNumber(64)+3;break;default:t.up=randomNumber(8)+1;t.mid=randomNumber(6)/2;t.down=randomNumber(8)+1;break}var l=["up","mid","down"];for(var s in l){var i=l[s];for(var m=0;m<=t[i];m++)r[i]&&(o+=n[i][randomNumber(n[i].length)])}}return o}return heComes(e)}addProperty("zalgo",(function(){return zalgo(this||e)}));var s={};const i=n.mode,m=n.themes,u=n.addSequencer,c=n.setTheme;export default s;export{u as addSequencer,i as mode,c as setTheme,m as themes};
