// @editorjs/simple-image@1.6.0 downloaded from https://ga.jspm.io/npm:@editorjs/simple-image@1.6.0/dist/simple-image.mjs

(function(){try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".cdx-simple-image .cdx-loader{min-height:200px}.cdx-simple-image .cdx-input{margin-top:10px}.cdx-simple-image img{max-width:100%;vertical-align:bottom}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-simple-image__picture--with-background{background:#eff2f5;padding:10px}.cdx-simple-image__picture--with-background img{display:block;max-width:60%;margin:0 auto}.cdx-simple-image__picture--with-border{border:1px solid #e8e8eb;padding:1px}.cdx-simple-image__picture--stretched img{max-width:none;width:100%}")),document.head.appendChild(t)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();const t='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>',e='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>',r='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';class h{
/**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: SimpleImageData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read-only mode flag
   */
constructor({data:i,config:o,api:a,readOnly:n}){this.api=a,this.readOnly=n,this.blockIndex=this.api.blocks.getCurrentBlockIndex()+1,this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,wrapper:"cdx-simple-image",imageHolder:"cdx-simple-image__picture",caption:"cdx-simple-image__caption"},this.nodes={wrapper:null,imageHolder:null,image:null,caption:null},this.data={url:i.url||"",caption:i.caption||"",withBorder:i.withBorder!==void 0&&i.withBorder,withBackground:i.withBackground!==void 0&&i.withBackground,stretched:i.stretched!==void 0&&i.stretched},this.tunes=[{name:"withBorder",label:"Add Border",icon:e},{name:"stretched",label:"Stretch Image",icon:r},{name:"withBackground",label:"Add Background",icon:t}]}render(){const t=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),e=this._make("div",this.CSS.loading),r=this._make("div",this.CSS.imageHolder),i=this._make("img"),o=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly,innerHTML:this.data.caption||""});return o.dataset.placeholder="Enter a caption",t.appendChild(e),this.data.url&&(i.src=this.data.url),i.onload=()=>{t.classList.remove(this.CSS.loading),r.appendChild(i),t.appendChild(r),t.appendChild(o),e.remove(),this._acceptTuneView()},i.onerror=t=>{console.log("Failed to load an image",t)},this.nodes.imageHolder=r,this.nodes.wrapper=t,this.nodes.image=i,this.nodes.caption=o,t
/**
   * @public
   * @param {Element} blockContent - Tool's wrapper
   * @returns {SimpleImageData}
   */}save(t){const e=t.querySelector("img"),r=t.querySelector("."+this.CSS.input);return e?Object.assign(this.data,{url:e.src,caption:r.innerHTML}):this.data}static get sanitize(){return{url:{},withBorder:{},withBackground:{},stretched:{},caption:{br:!0}}}
/**
   * Notify core that read-only mode is suppoorted
   *
   * @returns {boolean}
   */static get isReadOnlySupported(){return!0}
/**
   * Read pasted image and convert it to base64
   *
   * @static
   * @param {File} file
   * @returns {Promise<SimpleImageData>}
   */onDropHandler(t){const e=new FileReader;return e.readAsDataURL(t),new Promise((r=>{e.onload=e=>{r({url:e.target.result,caption:t.name})}}))
/**
   * On paste callback that is fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted config
   */}onPaste(t){switch(t.type){case"tag":{const e=t.detail.data;this.data={url:e.src};break}case"pattern":{const{data:e}=t.detail;this.data={url:e};break}case"file":{const{file:e}=t.detail;this.onDropHandler(e).then((t=>{this.data=t}));break}}}
/**
   * Returns image data
   *
   * @returns {SimpleImageData}
   */get data(){return this._data}
/**
   * Set image data and update the view
   *
   * @param {SimpleImageData} data
   */set data(t){this._data=Object.assign({},this.data,t),this.nodes.image&&(this.nodes.image.src=this.data.url),this.nodes.caption&&(this.nodes.caption.innerHTML=this.data.caption)}static get pasteConfig(){return{patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png|webp)$/i},tags:[{img:{src:!0}}],files:{mimeTypes:["image/*"]}}}
/**
   * Returns image tunes config
   *
   * @returns {Array}
   */renderSettings(){return this.tunes.map((t=>({...t,label:this.api.i18n.t(t.label),toggle:!0,onActivate:()=>this._toggleTune(t.name),isActive:!!this.data[t.name]})))}
/**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {Array|string} classNames  - list or name of CSS classname(s)
   * @param  {object} attributes        - any attributes
   * @returns {Element}
   */_make(t,e=null,r={}){const i=document.createElement(t);Array.isArray(e)?i.classList.add(...e):e&&i.classList.add(e);for(const t in r)i[t]=r[t];return i}
/**
   * Click on the Settings Button
   *
   * @private
   * @param tune
   */_toggleTune(t){this.data[t]=!this.data[t],this._acceptTuneView()}_acceptTuneView(){this.tunes.forEach((t=>{this.nodes.imageHolder.classList.toggle(this.CSS.imageHolder+"--"+t.name.replace(/([A-Z])/g,(t=>`-${t[0].toLowerCase()}`)),!!this.data[t.name]),t.name==="stretched"&&this.api.blocks.stretchBlock(this.blockIndex,!!this.data.stretched)}))}}export{h as default};

