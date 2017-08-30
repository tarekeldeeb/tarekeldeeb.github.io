/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(e){function t(i){if(n[i])return n[i].exports
var r=n[i]={i:i,l:!1,exports:{}}
return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={}
t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e}
return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=33)}([function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return t?e.replace(/\{\{\s*(\w+)\s*\}\}/g,function(e,n){return n in t?t[n]:"{{"+n+"}}"}):e}function a(e){var t=window.devicePixelRatio||1,n=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1,i=t/n
return{sx:i,sy:i,scaled:1!==i}}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e.offsetParent
if(!i)return void console.error("offsetParent is not set -- cannot scroll")
for(var r=e.offsetTop+e.clientTop,a=e.offsetLeft+e.clientLeft;i.clientHeight===i.scrollHeight||n&&"hidden"===getComputedStyle(i).overflow;)if(i.dataset._scaleY&&(r/=i.dataset._scaleY,a/=i.dataset._scaleX),r+=i.offsetTop,a+=i.offsetLeft,!(i=i.offsetParent))return
t&&(void 0!==t.top&&(r+=t.top),void 0!==t.left&&(a+=t.left,i.scrollLeft=a)),i.scrollTop=r}function s(e,t){var n=function(n){r||(r=window.requestAnimationFrame(function(){r=null
var n=e.scrollTop,a=i.lastY
n!==a&&(i.down=n>a),i.lastY=n,t(i)}))},i={down:!0,lastY:e.scrollTop,_eventHandler:n},r=null
return e.addEventListener("scroll",n,!0),i}function u(e){for(var t=e.split("&"),n=Object.create(null),i=0,r=t.length;i<r;++i){var a=t[i].split("="),o=a[0].toLowerCase(),s=a.length>1?a[1]:null
n[decodeURIComponent(o)]=decodeURIComponent(s)}return n}function l(e,t){var n=0,i=e.length-1
if(0===e.length||!t(e[i]))return e.length
if(t(e[n]))return n
for(;n<i;){var r=n+i>>1
t(e[r])?i=r:n=r+1}return n}function c(e){if(Math.floor(e)===e)return[e,1]
var t=1/e
if(t>8)return[1,8]
if(Math.floor(t)===t)return[1,t]
for(var n=e>1?t:e,i=0,r=1,a=1,o=1;;){var s=i+a,u=r+o
if(u>8)break
n<=s/u?(a=s,o=u):(i=s,r=u)}return n-i/r<a/o-n?n===e?[i,r]:[r,i]:n===e?[a,o]:[o,a]}function d(e,t){var n=e%t
return 0===n?e:Math.round(e-n+t)}function h(e,t){function n(e){var t=e.div
return t.offsetTop+t.clientTop+t.clientHeight>r}for(var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.scrollTop,a=r+e.clientHeight,o=e.scrollLeft,s=o+e.clientWidth,u=[],c=void 0,d=void 0,h=void 0,f=void 0,v=void 0,g=void 0,p=void 0,m=void 0,w=0===t.length?0:l(t,n),b=w,y=t.length;b<y&&(c=t[b],d=c.div,h=d.offsetTop+d.clientTop,f=d.clientHeight,!(h>a));b++)p=d.offsetLeft+d.clientLeft,m=d.clientWidth,p+m<o||p>s||(v=Math.max(0,r-h)+Math.max(0,h+f-a),g=100*(f-v)/f|0,u.push({id:c.id,x:p,y:h,view:c,percent:g}))
var P=u[0],S=u[u.length-1]
return i&&u.sort(function(e,t){var n=e.percent-t.percent
return Math.abs(n)>.001?-n:e.id-t.id}),{first:P,last:S,views:u}}function f(e){e.preventDefault()}function v(e){for(var t=0,n=e.length;t<n&&""===e[t].trim();)t++
return"data:"===e.substr(t,5).toLowerCase()}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"document.pdf"
if(v(e))return console.warn('getPDFFileNameFromURL: ignoring "data:" URL for performance reasons.'),t
var n=/^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/,i=/[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i,r=n.exec(e),a=i.exec(r[1])||i.exec(r[2])||i.exec(r[3])
if(a&&(a=a[0],-1!==a.indexOf("%")))try{a=i.exec(decodeURIComponent(a))[0]}catch(e){}return a||t}function p(e){var t=Math.sqrt(e.deltaX*e.deltaX+e.deltaY*e.deltaY),n=Math.atan2(e.deltaY,e.deltaX);-.25*Math.PI<n&&n<.75*Math.PI&&(t=-t)
return 0===e.deltaMode?t/=900:1===e.deltaMode&&(t/=30),t}function m(e){var t=Object.create(null)
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t}function w(e,t,n){return Math.min(Math.max(e,t),n)}Object.defineProperty(t,"__esModule",{value:!0}),t.localized=t.animationStarted=t.normalizeWheelEventDelta=t.binarySearchFirstItem=t.watchScroll=t.scrollIntoView=t.getOutputScale=t.approximateFraction=t.roundToDivide=t.getVisibleElements=t.parseQueryString=t.noContextMenuHandler=t.getPDFFileNameFromURL=t.ProgressBar=t.EventBus=t.NullL10n=t.mozL10n=t.RendererType=t.cloneObj=t.VERTICAL_PADDING=t.SCROLLBAR_PADDING=t.MAX_AUTO_SCALE=t.UNKNOWN_SCALE=t.MAX_SCALE=t.MIN_SCALE=t.DEFAULT_SCALE=t.DEFAULT_SCALE_VALUE=t.CSS_UNITS=void 0
var b=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),y=n(1),P={CANVAS:"canvas",SVG:"svg"},S={get:function(e,t,n){return Promise.resolve(r(n,t))},translate:function(e){return Promise.resolve()}}
y.PDFJS.disableFullscreen=void 0!==y.PDFJS.disableFullscreen&&y.PDFJS.disableFullscreen,y.PDFJS.useOnlyCssZoom=void 0!==y.PDFJS.useOnlyCssZoom&&y.PDFJS.useOnlyCssZoom,y.PDFJS.maxCanvasPixels=void 0===y.PDFJS.maxCanvasPixels?16777216:y.PDFJS.maxCanvasPixels,y.PDFJS.disableHistory=void 0!==y.PDFJS.disableHistory&&y.PDFJS.disableHistory,y.PDFJS.disableTextLayer=void 0!==y.PDFJS.disableTextLayer&&y.PDFJS.disableTextLayer,y.PDFJS.ignoreCurrentPositionOnZoom=void 0!==y.PDFJS.ignoreCurrentPositionOnZoom&&y.PDFJS.ignoreCurrentPositionOnZoom,y.PDFJS.locale=void 0===y.PDFJS.locale&&"undefined"!=typeof navigator?navigator.language:y.PDFJS.locale
var k=new Promise(function(e){window.requestAnimationFrame(e)}),C=Promise.resolve(),_=function(){function e(){i(this,e),this._listeners=Object.create(null)}return b(e,[{key:"on",value:function(e,t){var n=this._listeners[e]
n||(n=[],this._listeners[e]=n),n.push(t)}},{key:"off",value:function(e,t){var n=this._listeners[e],i=void 0
!n||(i=n.indexOf(t))<0||n.splice(i,1)}},{key:"dispatch",value:function(e){var t=this._listeners[e]
if(t&&0!==t.length){var n=Array.prototype.slice.call(arguments,1)
t.slice(0).forEach(function(e){e.apply(null,n)})}}}]),e}(),L=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.height,a=n.width,o=n.units
i(this,e),this.visible=!0,this.div=document.querySelector(t+" .progress"),this.bar=this.div.parentNode,this.height=r||100,this.width=a||100,this.units=o||"%",this.div.style.height=this.height+this.units,this.percent=0}return b(e,[{key:"_updateBar",value:function(){if(this._indeterminate)return this.div.classList.add("indeterminate"),void(this.div.style.width=this.width+this.units)
this.div.classList.remove("indeterminate")
var e=this.width*this._percent/100
this.div.style.width=e+this.units}},{key:"setWidth",value:function(e){if(e){var t=e.parentNode,n=t.offsetWidth-e.offsetWidth
n>0&&this.bar.setAttribute("style","width: calc(100% - "+n+"px);")}}},{key:"hide",value:function(){this.visible&&(this.visible=!1,this.bar.classList.add("hidden"),document.body.classList.remove("loadingInProgress"))}},{key:"show",value:function(){this.visible||(this.visible=!0,document.body.classList.add("loadingInProgress"),this.bar.classList.remove("hidden"))}},{key:"percent",get:function(){return this._percent},set:function(e){this._indeterminate=isNaN(e),this._percent=w(e,0,100),this._updateBar()}}]),e}()
t.CSS_UNITS=96/72,t.DEFAULT_SCALE_VALUE="auto",t.DEFAULT_SCALE=1,t.MIN_SCALE=.25,t.MAX_SCALE=10,t.UNKNOWN_SCALE=0,t.MAX_AUTO_SCALE=1.25,t.SCROLLBAR_PADDING=40,t.VERTICAL_PADDING=5,t.cloneObj=m,t.RendererType=P,t.mozL10n=void 0,t.NullL10n=S,t.EventBus=_,t.ProgressBar=L,t.getPDFFileNameFromURL=g,t.noContextMenuHandler=f,t.parseQueryString=u,t.getVisibleElements=h,t.roundToDivide=d,t.approximateFraction=c,t.getOutputScale=a,t.scrollIntoView=o,t.watchScroll=s,t.binarySearchFirstItem=l,t.normalizeWheelEventDelta=p,t.animationStarted=k,t.localized=C},function(e,t,n){"use strict"
var i
i="undefined"!=typeof window&&window["pdfjs-dist/build/pdf"]?window["pdfjs-dist/build/pdf"]:require("pdf.js"),e.exports=i},function(e,t,n){"use strict"
function i(e){e.on("documentload",function(){var e=document.createEvent("CustomEvent")
e.initCustomEvent("documentload",!0,!0,{}),window.dispatchEvent(e)}),e.on("pagerendered",function(e){var t=document.createEvent("CustomEvent")
t.initCustomEvent("pagerendered",!0,!0,{pageNumber:e.pageNumber,cssTransform:e.cssTransform}),e.source.div.dispatchEvent(t)}),e.on("textlayerrendered",function(e){var t=document.createEvent("CustomEvent")
t.initCustomEvent("textlayerrendered",!0,!0,{pageNumber:e.pageNumber}),e.source.textLayerDiv.dispatchEvent(t)}),e.on("pagechange",function(e){var t=document.createEvent("UIEvents")
t.initUIEvent("pagechange",!0,!0,window,0),t.pageNumber=e.pageNumber,e.source.container.dispatchEvent(t)}),e.on("pagesinit",function(e){var t=document.createEvent("CustomEvent")
t.initCustomEvent("pagesinit",!0,!0,null),e.source.container.dispatchEvent(t)}),e.on("pagesloaded",function(e){var t=document.createEvent("CustomEvent")
t.initCustomEvent("pagesloaded",!0,!0,{pagesCount:e.pagesCount}),e.source.container.dispatchEvent(t)}),e.on("scalechange",function(e){var t=document.createEvent("UIEvents")
t.initUIEvent("scalechange",!0,!0,window,0),t.scale=e.scale,t.presetValue=e.presetValue,e.source.container.dispatchEvent(t)}),e.on("updateviewarea",function(e){var t=document.createEvent("UIEvents")
t.initUIEvent("updateviewarea",!0,!0,window,0),t.location=e.location,e.source.container.dispatchEvent(t)}),e.on("find",function(e){if(e.source!==window){var t=document.createEvent("CustomEvent")
t.initCustomEvent("find"+e.type,!0,!0,{query:e.query,phraseSearch:e.phraseSearch,caseSensitive:e.caseSensitive,highlightAll:e.highlightAll,findPrevious:e.findPrevious}),window.dispatchEvent(t)}}),e.on("attachmentsloaded",function(e){var t=document.createEvent("CustomEvent")
t.initCustomEvent("attachmentsloaded",!0,!0,{attachmentsCount:e.attachmentsCount}),e.source.container.dispatchEvent(t)}),e.on("sidebarviewchanged",function(e){var t=document.createEvent("CustomEvent")
t.initCustomEvent("sidebarviewchanged",!0,!0,{view:e.view}),e.source.outerContainer.dispatchEvent(t)}),e.on("pagemode",function(e){var t=document.createEvent("CustomEvent")
t.initCustomEvent("pagemode",!0,!0,{mode:e.mode}),e.source.pdfViewer.container.dispatchEvent(t)}),e.on("namedaction",function(e){var t=document.createEvent("CustomEvent")
t.initCustomEvent("namedaction",!0,!0,{action:e.action}),e.source.pdfViewer.container.dispatchEvent(t)}),e.on("presentationmodechanged",function(e){var t=document.createEvent("CustomEvent")
t.initCustomEvent("presentationmodechanged",!0,!0,{active:e.active,switchInProgress:e.switchInProgress}),window.dispatchEvent(t)}),e.on("outlineloaded",function(e){var t=document.createEvent("CustomEvent")
t.initCustomEvent("outlineloaded",!0,!0,{outlineCount:e.outlineCount}),e.source.container.dispatchEvent(t)})}function r(){return o||(o=new a.EventBus,i(o),o)}Object.defineProperty(t,"__esModule",{value:!0}),t.getGlobalEventBus=t.attachDOMEventsToEventBus=void 0
var a=n(0),o=null
t.attachDOMEventsToEventBus=i,t.getGlobalEventBus=r},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a={INITIAL:0,RUNNING:1,PAUSED:2,FINISHED:3},o=function(){function e(){i(this,e),this.pdfViewer=null,this.pdfThumbnailViewer=null,this.onIdle=null,this.highestPriorityPage=null,this.idleTimeout=null,this.printing=!1,this.isThumbnailViewEnabled=!1}return r(e,[{key:"setViewer",value:function(e){this.pdfViewer=e}},{key:"setThumbnailViewer",value:function(e){this.pdfThumbnailViewer=e}},{key:"isHighestPriority",value:function(e){return this.highestPriorityPage===e.renderingId}},{key:"renderHighestPriority",value:function(e){this.idleTimeout&&(clearTimeout(this.idleTimeout),this.idleTimeout=null),this.pdfViewer.forceRendering(e)||this.pdfThumbnailViewer&&this.isThumbnailViewEnabled&&this.pdfThumbnailViewer.forceRendering()||this.printing||this.onIdle&&(this.idleTimeout=setTimeout(this.onIdle.bind(this),3e4))}},{key:"getHighestPriority",value:function(e,t,n){var i=e.views,r=i.length
if(0===r)return!1
for(var a=0;a<r;++a){var o=i[a].view
if(!this.isViewFinished(o))return o}if(n){var s=e.last.id
if(t[s]&&!this.isViewFinished(t[s]))return t[s]}else{var u=e.first.id-2
if(t[u]&&!this.isViewFinished(t[u]))return t[u]}return null}},{key:"isViewFinished",value:function(e){return e.renderingState===a.FINISHED}},{key:"renderView",value:function(e){var t=this
switch(e.renderingState){case a.FINISHED:return!1
case a.PAUSED:this.highestPriorityPage=e.renderingId,e.resume()
break
case a.RUNNING:this.highestPriorityPage=e.renderingId
break
case a.INITIAL:this.highestPriorityPage=e.renderingId
var n=function(){t.renderHighestPriority()}
e.draw().then(n,n)}return!0}}]),e}()
t.RenderingStates=a,t.PDFRenderingQueue=o},function(e,t,n){"use strict"
function i(e){e.imageResourcesPath="./images/",e.workerSrc="pdf.worker.js",e.cMapUrl="web/cmaps/",e.cMapPacked=!0}function r(e){return new Promise(function(t,n){var i=se.appConfig,r=document.createElement("script")
r.src=i.debuggerScriptPath,r.onload=function(){PDFBug.enable(e),PDFBug.init({PDFJS:U.PDFJS,OPS:U.OPS},i.mainContainer),t()},r.onerror=function(){n(new Error("Cannot load debugger at "+r.src))},(document.getElementsByTagName("head")[0]||document.body).appendChild(r)})}function a(){var e=se.appConfig,t=void 0,n=document.location.search.substring(1),i=(0,R.parseQueryString)(n)
t="file"in i?i.file:e.defaultUrl,ue(t)
var a=[],o=document.createElement("input")
if(o.id=e.openFileInputName,o.className="fileInput",o.setAttribute("type","file"),o.oncontextmenu=R.noContextMenuHandler,document.body.appendChild(o),window.File&&window.FileReader&&window.FileList&&window.Blob?o.value=null:(e.toolbar.openFile.setAttribute("hidden","true"),e.secondaryToolbar.openFileButton.setAttribute("hidden","true")),se.viewerPrefs.pdfBugEnabled){var s=document.location.hash.substring(1),u=(0,R.parseQueryString)(s)
if("disableworker"in u&&(U.PDFJS.disableWorker="true"===u.disableworker),"disablerange"in u&&(U.PDFJS.disableRange="true"===u.disablerange),"disablestream"in u&&(U.PDFJS.disableStream="true"===u.disablestream),"disableautofetch"in u&&(U.PDFJS.disableAutoFetch="true"===u.disableautofetch),"disablefontface"in u&&(U.PDFJS.disableFontFace="true"===u.disablefontface),"disablehistory"in u&&(U.PDFJS.disableHistory="true"===u.disablehistory),"webgl"in u&&(U.PDFJS.disableWebGL="true"!==u.webgl),"useonlycsszoom"in u&&(U.PDFJS.useOnlyCssZoom="true"===u.useonlycsszoom),"verbosity"in u&&(U.PDFJS.verbosity=0|u.verbosity),"ignorecurrentpositiononzoom"in u&&(U.PDFJS.ignoreCurrentPositionOnZoom="true"===u.ignorecurrentpositiononzoom),"textlayer"in u)switch(u.textlayer){case"off":U.PDFJS.disableTextLayer=!0
break
case"visible":case"shadow":case"hover":e.viewerContainer.classList.add("textLayer-"+u.textlayer)}if("pdfbug"in u){U.PDFJS.pdfBug=!0
var l=u.pdfbug,c=l.split(",")
a.push(r(c))}}se.supportsPrinting||(e.toolbar.print.classList.add("hidden"),e.secondaryToolbar.printButton.classList.add("hidden")),se.supportsFullscreen||(e.toolbar.presentationModeButton.classList.add("hidden"),e.secondaryToolbar.presentationModeButton.classList.add("hidden")),se.supportsIntegratedFind&&e.toolbar.viewFind.classList.add("hidden"),e.sidebar.mainContainer.addEventListener("transitionend",function(e){e.target===this&&se.eventBus.dispatch("resize")},!0),e.sidebar.toggleButton.addEventListener("click",function(){se.pdfSidebar.toggle()}),Promise.all(a).then(function(){ce(t)}).catch(function(e){se.l10n.get("loading_error",null,"An error occurred while opening.").then(function(t){se.error(t,e)})})}function o(e){var t=e.pageNumber,n=t-1,i=se.pdfViewer.getPageView(n)
if(t===se.page&&se.toolbar.updateLoadingIndicatorState(!1),i){if(se.pdfSidebar.isThumbnailViewVisible){se.pdfThumbnailViewer.getThumbnail(n).setImage(i)}U.PDFJS.pdfBug&&Stats.enabled&&i.stats&&Stats.add(t,i.stats),i.error&&se.l10n.get("rendering_error",null,"An error occurred while rendering the page.").then(function(e){se.error(e,i.error)})}}function s(e){}function u(e){var t=e.mode,n=void 0
switch(t){case"thumbs":n=j.SidebarView.THUMBS
break
case"bookmarks":case"outline":n=j.SidebarView.OUTLINE
break
case"attachments":n=j.SidebarView.ATTACHMENTS
break
case"none":n=j.SidebarView.NONE
break
default:return void console.error('Invalid "pagemode" hash parameter: '+t)}se.pdfSidebar.switchView(n,!0)}function l(e){switch(e.action){case"GoToPage":se.appConfig.toolbar.pageNumber.select()
break
case"Find":se.supportsIntegratedFind||se.findBar.toggle()}}function c(e){var t=e.active,n=e.switchInProgress
se.pdfViewer.presentationModeState=n?W.PresentationModeState.CHANGING:t?W.PresentationModeState.FULLSCREEN:W.PresentationModeState.NORMAL}function d(e){se.pdfRenderingQueue.isThumbnailViewEnabled=se.pdfSidebar.isThumbnailViewVisible
var t=se.store
t&&se.isInitialViewSet&&t.set("sidebarView",e.view).catch(function(){})}function h(e){var t=e.location,n=se.store
n&&se.isInitialViewSet&&n.setMultiple({exists:!0,page:t.pageNumber,zoom:t.scale,scrollLeft:t.left,scrollTop:t.top}).catch(function(){})
var i=se.pdfLinkService.getAnchorUrl(t.pdfOpenParams)
se.appConfig.toolbar.viewBookmark.href=i,se.appConfig.secondaryToolbar.viewBookmarkButton.href=i,se.pdfHistory.updateCurrentBookmark(t.pdfOpenParams,t.pageNumber)
var r=se.pdfViewer.getPageView(se.page-1),a=r.renderingState!==z.RenderingStates.FINISHED
se.toolbar.updateLoadingIndicatorState(a)}function f(){var e=se.pdfDocument,t=se.pdfViewer
if(e){var n=t.currentScaleValue
"auto"!==n&&"page-fit"!==n&&"page-width"!==n||(t.currentScaleValue=n),t.update()}}function v(e){if(se.pdfHistory.isHashChangeUnlocked){var t=e.hash
if(!t)return
se.isInitialViewSet?se.pdfLinkService.setHash(t):se.initialBookmark=t}}function g(){se.requestPresentationMode()}function p(){var e=se.appConfig.openFileInputName
document.getElementById(e).click()}function m(){window.print()}function w(){se.download()}function b(){se.pdfDocument&&(se.page=1)}function y(){se.pdfDocument&&(se.page=se.pagesCount)}function P(){se.page++}function S(){se.page--}function k(){se.zoomIn()}function C(){se.zoomOut()}function _(e){var t=se.pdfViewer
t.currentPageLabel=e.value,e.value!==t.currentPageNumber.toString()&&e.value!==t.currentPageLabel&&se.toolbar.setPageNumber(t.currentPageNumber,t.currentPageLabel)}function L(e){se.pdfViewer.currentScaleValue=e.value}function E(){se.rotatePages(90)}function T(){se.rotatePages(-90)}function I(){se.pdfDocumentProperties.open()}function B(e){se.findController.executeCommand("find"+e.type,{query:e.query,phraseSearch:e.phraseSearch,caseSensitive:e.caseSensitive,highlightAll:e.highlightAll,findPrevious:e.findPrevious})}function x(e){se.findController.executeCommand("find",{query:e.query,phraseSearch:e.phraseSearch,caseSensitive:!1,highlightAll:!0,findPrevious:!1})}function D(e){se.toolbar.setPageScale(e.presetValue,e.scale),se.pdfViewer.update()}function F(e){var t=e.pageNumber
if(se.toolbar.setPageNumber(t,e.pageLabel||null),se.secondaryToolbar.setPageNumber(t),se.pdfSidebar.isThumbnailViewVisible&&se.pdfThumbnailViewer.scrollThumbnailIntoView(t),U.PDFJS.pdfBug&&Stats.enabled){var n=se.pdfViewer.getPageView(t-1)
n.stats&&Stats.add(t,n.stats)}}function N(e){var t=se.pdfViewer
if(!t.isInPresentationMode)if(e.ctrlKey||e.metaKey){var n=se.supportedMouseWheelZoomModifierKeys
if(e.ctrlKey&&!n.ctrlKey||e.metaKey&&!n.metaKey)return
if(e.preventDefault(),he)return
var i=t.currentScale,r=(0,R.normalizeWheelEventDelta)(e),a=3*r
a<0?se.zoomOut(-a):se.zoomIn(a)
var o=t.currentScale
if(i!==o){var s=o/i-1,u=t.container.getBoundingClientRect(),l=e.clientX-u.left,c=e.clientY-u.top
t.container.scrollLeft+=l*s,t.container.scrollTop+=c*s}}else he=!0,clearTimeout(fe),fe=setTimeout(function(){he=!1},1e3)}function V(e){if(se.secondaryToolbar.isOpen){var t=se.appConfig;(se.pdfViewer.containsElement(e.target)||t.toolbar.container.contains(e.target)&&e.target!==t.secondaryToolbar.toggleButton)&&se.secondaryToolbar.close()}}function M(e){if(!se.overlayManager.active){var t=!1,n=!1,i=(e.ctrlKey?1:0)|(e.altKey?2:0)|(e.shiftKey?4:0)|(e.metaKey?8:0),r=se.pdfViewer,a=r&&r.isInPresentationMode
if(1===i||8===i||5===i||12===i)switch(e.keyCode){case 70:se.supportsIntegratedFind||(se.findBar.open(),t=!0)
break
case 71:if(!se.supportsIntegratedFind){var o=se.findController.state
o&&se.findController.executeCommand("findagain",{query:o.query,phraseSearch:o.phraseSearch,caseSensitive:o.caseSensitive,highlightAll:o.highlightAll,findPrevious:5===i||12===i}),t=!0}break
case 61:case 107:case 187:case 171:a||se.zoomIn(),t=!0
break
case 173:case 109:case 189:a||se.zoomOut(),t=!0
break
case 48:case 96:a||(setTimeout(function(){r.currentScaleValue=R.DEFAULT_SCALE_VALUE}),t=!1)
break
case 38:(a||se.page>1)&&(se.page=1,t=!0,n=!0)
break
case 40:(a||se.page<se.pagesCount)&&(se.page=se.pagesCount,t=!0,n=!0)}if(1===i||8===i)switch(e.keyCode){case 83:se.download(),t=!0}if(3===i||10===i)switch(e.keyCode){case 80:se.requestPresentationMode(),t=!0
break
case 71:se.appConfig.toolbar.pageNumber.select(),t=!0}if(t)return n&&!a&&r.focus(),void e.preventDefault()
var s=document.activeElement||document.querySelector(":focus"),u=s&&s.tagName.toUpperCase()
if("INPUT"!==u&&"TEXTAREA"!==u&&"SELECT"!==u||27===e.keyCode){if(0===i)switch(e.keyCode){case 38:case 33:case 8:if(!a&&"page-fit"!==r.currentScaleValue)break
case 37:if(r.isHorizontalScrollbarEnabled)break
case 75:case 80:se.page>1&&se.page--,t=!0
break
case 27:se.secondaryToolbar.isOpen&&(se.secondaryToolbar.close(),t=!0),!se.supportsIntegratedFind&&se.findBar.opened&&(se.findBar.close(),t=!0)
break
case 40:case 34:case 32:if(!a&&"page-fit"!==r.currentScaleValue)break
case 39:if(r.isHorizontalScrollbarEnabled)break
case 74:case 78:se.page<se.pagesCount&&se.page++,t=!0
break
case 36:(a||se.page>1)&&(se.page=1,t=!0,n=!0)
break
case 35:(a||se.page<se.pagesCount)&&(se.page=se.pagesCount,t=!0,n=!0)
break
case 83:se.pdfCursorTools.switchTool(H.CursorTool.SELECT)
break
case 72:se.pdfCursorTools.switchTool(H.CursorTool.HAND)
break
case 82:se.rotatePages(90)}if(4===i)switch(e.keyCode){case 32:if(!a&&"page-fit"!==r.currentScaleValue)break
se.page>1&&se.page--,t=!0
break
case 82:se.rotatePages(-90)}if(t||a||(e.keyCode>=33&&e.keyCode<=40||32===e.keyCode&&"BUTTON"!==u)&&(n=!0),2===i)switch(e.keyCode){case 37:a&&(se.pdfHistory.back(),t=!0)
break
case 39:a&&(se.pdfHistory.forward(),t=!0)}n&&!r.containsElement(s)&&r.focus(),t&&e.preventDefault()}}}function O(e){switch(e){case"UseNone":return j.SidebarView.NONE
case"UseThumbs":return j.SidebarView.THUMBS
case"UseOutlines":return j.SidebarView.OUTLINE
case"UseAttachments":return j.SidebarView.ATTACHMENTS}return j.SidebarView.NONE}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFPrintServiceFactory=t.DefaultExternalServices=t.PDFViewerApplication=void 0
var A=function(){function e(e,t){var n=[],i=!0,r=!1,a=void 0
try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),R=n(0),U=n(1),H=n(6),z=n(3),j=n(24),W=n(27),J=n(2),q=n(15),G=n(16),Q=n(17),Z=n(18),K=n(19),X=n(7),Y=n(20),$=n(5),ee=n(21),te=n(23),ne=n(26),ie=n(29),re=n(31),ae=n(32),oe={updateFindControlState:function(e){},initPassiveLoading:function(e){},fallback:function(e,t){},reportTelemetry:function(e){},createDownloadManager:function(){throw new Error("Not implemented: createDownloadManager")},createPreferences:function(){throw new Error("Not implemented: createPreferences")},createL10n:function(){throw new Error("Not implemented: createL10n")},supportsIntegratedFind:!1,supportsDocumentFonts:!0,supportsDocumentColors:!0,supportedMouseWheelZoomModifierKeys:{ctrlKey:!0,metaKey:!0}},se={initialBookmark:document.location.hash.substring(1),initialDestination:null,initialized:!1,fellback:!1,appConfig:null,pdfDocument:null,pdfLoadingTask:null,printService:null,pdfViewer:null,pdfThumbnailViewer:null,pdfRenderingQueue:null,pdfPresentationMode:null,pdfDocumentProperties:null,pdfLinkService:null,pdfHistory:null,pdfSidebar:null,pdfOutlineViewer:null,pdfAttachmentViewer:null,pdfCursorTools:null,store:null,downloadManager:null,overlayManager:null,preferences:null,toolbar:null,secondaryToolbar:null,eventBus:null,l10n:null,isInitialViewSet:!1,downloadComplete:!1,viewerPrefs:{sidebarViewOnLoad:j.SidebarView.NONE,pdfBugEnabled:!1,showPreviousViewOnLoad:!0,defaultZoomValue:"",disablePageMode:!1,disablePageLabels:!1,renderer:"canvas",enhanceTextSelection:!1,renderInteractiveForms:!1,enablePrintAutoRotate:!1},isViewerEmbedded:window.parent!==window,url:"",baseUrl:"",externalServices:oe,_boundEvents:{},initialize:function(e){var t=this
return this.preferences=this.externalServices.createPreferences(),i(U.PDFJS),this.appConfig=e,this._readPreferences().then(function(){return t._initializeL10n()}).then(function(){return t._initializeViewerComponents()}).then(function(){t.bindEvents(),t.bindWindowEvents()
var n=e.appContainer||document.documentElement
t.l10n.translate(n).then(function(){t.eventBus.dispatch("localized")}),t.isViewerEmbedded&&!U.PDFJS.isExternalLinkTargetSet()&&(U.PDFJS.externalLinkTarget=U.PDFJS.LinkTarget.TOP),t.initialized=!0})},_readPreferences:function(){var e=this.preferences,t=this.viewerPrefs
return Promise.all([e.get("enableWebGL").then(function(e){U.PDFJS.disableWebGL=!e}),e.get("sidebarViewOnLoad").then(function(e){t.sidebarViewOnLoad=e}),e.get("pdfBugEnabled").then(function(e){t.pdfBugEnabled=e}),e.get("showPreviousViewOnLoad").then(function(e){t.showPreviousViewOnLoad=e}),e.get("defaultZoomValue").then(function(e){t.defaultZoomValue=e}),e.get("enhanceTextSelection").then(function(e){t.enhanceTextSelection=e}),e.get("disableTextLayer").then(function(e){!0!==U.PDFJS.disableTextLayer&&(U.PDFJS.disableTextLayer=e)}),e.get("disableRange").then(function(e){!0!==U.PDFJS.disableRange&&(U.PDFJS.disableRange=e)}),e.get("disableStream").then(function(e){!0!==U.PDFJS.disableStream&&(U.PDFJS.disableStream=e)}),e.get("disableAutoFetch").then(function(e){U.PDFJS.disableAutoFetch=e}),e.get("disableFontFace").then(function(e){!0!==U.PDFJS.disableFontFace&&(U.PDFJS.disableFontFace=e)}),e.get("useOnlyCssZoom").then(function(e){U.PDFJS.useOnlyCssZoom=e}),e.get("externalLinkTarget").then(function(e){U.PDFJS.isExternalLinkTargetSet()||(U.PDFJS.externalLinkTarget=e)}),e.get("renderer").then(function(e){t.renderer=e}),e.get("renderInteractiveForms").then(function(e){t.renderInteractiveForms=e}),e.get("disablePageMode").then(function(e){t.disablePageMode=e}),e.get("disablePageLabels").then(function(e){t.disablePageLabels=e}),e.get("enablePrintAutoRotate").then(function(e){t.enablePrintAutoRotate=e})]).catch(function(e){})},_initializeL10n:function(){if(this.viewerPrefs.pdfBugEnabled){var e=document.location.hash.substring(1),t=(0,R.parseQueryString)(e)
"locale"in t&&(U.PDFJS.locale=t.locale)}return this.l10n=this.externalServices.createL10n(),this.l10n.getDirection().then(function(e){document.getElementsByTagName("html")[0].dir=e})},_initializeViewerComponents:function(){var e=this,t=this.appConfig
return new Promise(function(n,i){e.overlayManager=new q.OverlayManager
var r=t.eventBus||(0,J.getGlobalEventBus)()
e.eventBus=r
var a=new z.PDFRenderingQueue
a.onIdle=e.cleanup.bind(e),e.pdfRenderingQueue=a
var o=new $.PDFLinkService({eventBus:r})
e.pdfLinkService=o
var s=e.externalServices.createDownloadManager()
e.downloadManager=s
var u=t.mainContainer,l=t.viewerContainer
e.pdfViewer=new W.PDFViewer({container:u,viewer:l,eventBus:r,renderingQueue:a,linkService:o,downloadManager:s,renderer:e.viewerPrefs.renderer,l10n:e.l10n,enhanceTextSelection:e.viewerPrefs.enhanceTextSelection,renderInteractiveForms:e.viewerPrefs.renderInteractiveForms,enablePrintAutoRotate:e.viewerPrefs.enablePrintAutoRotate}),a.setViewer(e.pdfViewer),o.setViewer(e.pdfViewer)
var c=t.sidebar.thumbnailView
e.pdfThumbnailViewer=new ne.PDFThumbnailViewer({container:c,renderingQueue:a,linkService:o,l10n:e.l10n}),a.setThumbnailViewer(e.pdfThumbnailViewer),e.pdfHistory=new Y.PDFHistory({linkService:o,eventBus:r}),o.setHistory(e.pdfHistory),e.findController=new X.PDFFindController({pdfViewer:e.pdfViewer}),e.findController.onUpdateResultsCount=function(t){e.supportsIntegratedFind||e.findBar.updateResultsCount(t)},e.findController.onUpdateState=function(t,n,i){e.supportsIntegratedFind?e.externalServices.updateFindControlState({result:t,findPrevious:n}):e.findBar.updateUIState(t,n,i)},e.pdfViewer.setFindController(e.findController)
var d=Object.create(t.findBar)
d.findController=e.findController,d.eventBus=r,e.findBar=new K.PDFFindBar(d,e.l10n),e.pdfDocumentProperties=new Z.PDFDocumentProperties(t.documentProperties,e.overlayManager,e.l10n),e.pdfCursorTools=new H.PDFCursorTools({container:u,eventBus:r,preferences:e.preferences}),e.toolbar=new re.Toolbar(t.toolbar,u,r,e.l10n),e.secondaryToolbar=new ie.SecondaryToolbar(t.secondaryToolbar,u,r),e.supportsFullscreen&&(e.pdfPresentationMode=new te.PDFPresentationMode({container:u,viewer:l,pdfViewer:e.pdfViewer,eventBus:r,contextMenuItems:t.fullscreen})),e.passwordPrompt=new G.PasswordPrompt(t.passwordOverlay,e.overlayManager,e.l10n),e.pdfOutlineViewer=new ee.PDFOutlineViewer({container:t.sidebar.outlineView,eventBus:r,linkService:o}),e.pdfAttachmentViewer=new Q.PDFAttachmentViewer({container:t.sidebar.attachmentsView,eventBus:r,downloadManager:s})
var h=Object.create(t.sidebar)
h.pdfViewer=e.pdfViewer,h.pdfThumbnailViewer=e.pdfThumbnailViewer,h.pdfOutlineViewer=e.pdfOutlineViewer,h.eventBus=r,e.pdfSidebar=new j.PDFSidebar(h,e.l10n),e.pdfSidebar.onToggled=e.forceRendering.bind(e),n(void 0)})},run:function(e){this.initialize(e).then(a)},zoomIn:function(e){var t=this.pdfViewer.currentScale
do{t=(1.1*t).toFixed(2),t=Math.ceil(10*t)/10,t=Math.min(R.MAX_SCALE,t)}while(--e>0&&t<R.MAX_SCALE)
this.pdfViewer.currentScaleValue=t},zoomOut:function(e){var t=this.pdfViewer.currentScale
do{t=(t/1.1).toFixed(2),t=Math.floor(10*t)/10,t=Math.max(R.MIN_SCALE,t)}while(--e>0&&t>R.MIN_SCALE)
this.pdfViewer.currentScaleValue=t},get pagesCount(){return this.pdfDocument?this.pdfDocument.numPages:0},get pageRotation(){return this.pdfViewer.pagesRotation},set page(e){this.pdfViewer.currentPageNumber=e},get page(){return this.pdfViewer.currentPageNumber},get printing(){return!!this.printService},get supportsPrinting(){return ve.instance.supportsPrinting},get supportsFullscreen(){var e=void 0,t=document.documentElement
return e=!!(t.requestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullScreen||t.msRequestFullscreen),!1!==document.fullscreenEnabled&&!1!==document.mozFullScreenEnabled&&!1!==document.webkitFullscreenEnabled&&!1!==document.msFullscreenEnabled||(e=!1),e&&!0===U.PDFJS.disableFullscreen&&(e=!1),(0,U.shadow)(this,"supportsFullscreen",e)},get supportsIntegratedFind(){return this.externalServices.supportsIntegratedFind},get supportsDocumentFonts(){return this.externalServices.supportsDocumentFonts},get supportsDocumentColors(){return this.externalServices.supportsDocumentColors},get loadingBar(){var e=new R.ProgressBar("#loadingBar")
return(0,U.shadow)(this,"loadingBar",e)},get supportedMouseWheelZoomModifierKeys(){return this.externalServices.supportedMouseWheelZoomModifierKeys},initPassiveLoading:function(){throw new Error("Not implemented: initPassiveLoading")},setTitleUsingUrl:function(e){this.url=e,this.baseUrl=e.split("#")[0]
var t=(0,R.getPDFFileNameFromURL)(e,"")
if(!t)try{t=decodeURIComponent((0,U.getFilenameFromUrl)(e))||e}catch(n){t=e}this.setTitle(t)},setTitle:function(e){this.isViewerEmbedded||(document.title=e)},close:function(){if(this.appConfig.errorWrapper.container.setAttribute("hidden","true"),!this.pdfLoadingTask)return Promise.resolve()
var e=this.pdfLoadingTask.destroy()
return this.pdfLoadingTask=null,this.pdfDocument&&(this.pdfDocument=null,this.pdfThumbnailViewer.setDocument(null),this.pdfViewer.setDocument(null),this.pdfLinkService.setDocument(null,null),this.pdfDocumentProperties.setDocument(null,null)),this.store=null,this.isInitialViewSet=!1,this.downloadComplete=!1,this.pdfSidebar.reset(),this.pdfOutlineViewer.reset(),this.pdfAttachmentViewer.reset(),this.findController.reset(),this.findBar.reset(),this.toolbar.reset(),this.secondaryToolbar.reset(),"undefined"!=typeof PDFBug&&PDFBug.cleanup(),e},open:function(e,t){var n=this
if(arguments.length>2||"number"==typeof t)return Promise.reject(new Error("Call of open() with obsolete signature."))
if(this.pdfLoadingTask)return this.close().then(function(){return n.preferences.reload(),n.open(e,t)})
var i=Object.create(null)
if("string"==typeof e?(this.setTitleUsingUrl(e),i.url=e):e&&"byteLength"in e?i.data=e:e.url&&e.originalUrl&&(this.setTitleUsingUrl(e.originalUrl),i.url=e.url),t)for(var r in t)U.PDFJS.pdfjsNext||"scale"!==r?("length"===r&&this.pdfDocumentProperties.setFileSize(t[r]),i[r]=t[r]):console.error('Call of open() with obsolete "scale" argument, please use the "defaultZoomValue" preference instead.')
var a=(0,U.getDocument)(i)
return this.pdfLoadingTask=a,a.onPassword=function(e,t){n.passwordPrompt.setUpdateCallback(e,t),n.passwordPrompt.open()},a.onProgress=function(e){var t=e.loaded,i=e.total
n.progress(t/i)},a.onUnsupportedFeature=this.fallback.bind(this),a.promise.then(function(e){n.load(e)},function(e){var t=e&&e.message,i=void 0
return i=e instanceof U.InvalidPDFException?n.l10n.get("invalid_file_error",null,"Invalid or corrupted PDF file."):e instanceof U.MissingPDFException?n.l10n.get("missing_file_error",null,"Missing PDF file."):e instanceof U.UnexpectedResponseException?n.l10n.get("unexpected_response_error",null,"Unexpected server response."):n.l10n.get("loading_error",null,"An error occurred while loading the PDF."),i.then(function(e){throw n.error(e,{message:t}),new Error(e)})})},download:function(){function e(){r.downloadUrl(n,i)}var t=this,n=this.baseUrl,i=(0,R.getPDFFileNameFromURL)(this.url),r=this.downloadManager
if(r.onerror=function(e){t.error("PDF failed to download: "+e)},!this.pdfDocument||!this.downloadComplete)return void e()
this.pdfDocument.getData().then(function(e){var t=(0,U.createBlob)(e,"application/pdf")
r.download(t,n,i)}).catch(e)},fallback:function(e){},error:function(e,t){var n=[this.l10n.get("error_version_info",{version:U.version||"?",build:U.build||"?"},"PDF.js v{{version}} (build: {{build}})")]
t&&(n.push(this.l10n.get("error_message",{message:t.message},"Message: {{message}}")),t.stack?n.push(this.l10n.get("error_stack",{stack:t.stack},"Stack: {{stack}}")):(t.filename&&n.push(this.l10n.get("error_file",{file:t.filename},"File: {{file}}")),t.lineNumber&&n.push(this.l10n.get("error_line",{line:t.lineNumber},"Line: {{line}}"))))
var i=this.appConfig.errorWrapper,r=i.container
r.removeAttribute("hidden"),i.errorMessage.textContent=e
var a=i.closeButton
a.onclick=function(){r.setAttribute("hidden","true")}
var o=i.errorMoreInfo,s=i.moreInfoButton,u=i.lessInfoButton
s.onclick=function(){o.removeAttribute("hidden"),s.setAttribute("hidden","true"),u.removeAttribute("hidden"),o.style.height=o.scrollHeight+"px"},u.onclick=function(){o.setAttribute("hidden","true"),s.removeAttribute("hidden"),u.setAttribute("hidden","true")},s.oncontextmenu=R.noContextMenuHandler,u.oncontextmenu=R.noContextMenuHandler,a.oncontextmenu=R.noContextMenuHandler,s.removeAttribute("hidden"),u.setAttribute("hidden","true"),Promise.all(n).then(function(e){o.value=e.join("\n")})},progress:function(e){var t=this
if(!this.downloadComplete){var n=Math.round(100*e);(n>this.loadingBar.percent||isNaN(n))&&(this.loadingBar.percent=n,U.PDFJS.disableAutoFetch&&n&&(this.disableAutoFetchLoadingBarTimeout&&(clearTimeout(this.disableAutoFetchLoadingBarTimeout),this.disableAutoFetchLoadingBarTimeout=null),this.loadingBar.show(),this.disableAutoFetchLoadingBarTimeout=setTimeout(function(){t.loadingBar.hide(),t.disableAutoFetchLoadingBarTimeout=null},5e3)))}},load:function(e){var t=this
this.pdfDocument=e,e.getDownloadInfo().then(function(){t.downloadComplete=!0,t.loadingBar.hide(),s.then(function(){t.eventBus.dispatch("documentload",{source:t})})})
var n=e.getPageMode().catch(function(){})
this.toolbar.setPagesCount(e.numPages,!1),this.secondaryToolbar.setPagesCount(e.numPages)
var i=this.documentFingerprint=e.fingerprint,r=this.store=new ae.ViewHistory(i),a=void 0
a=null,this.pdfLinkService.setDocument(e,a),this.pdfDocumentProperties.setDocument(e,this.url)
var o=this.pdfViewer
o.setDocument(e)
var s=o.firstPagePromise,u=o.pagesPromise,l=o.onePageRendered,c=this.pdfThumbnailViewer
c.setDocument(e),s.then(function(e){t.loadingBar.setWidth(t.appConfig.viewerContainer),U.PDFJS.disableHistory||t.isViewerEmbedded||(t.viewerPrefs.showPreviousViewOnLoad||t.pdfHistory.clearHistoryState(),t.pdfHistory.initialize(t.documentFingerprint),t.pdfHistory.initialDestination?t.initialDestination=t.pdfHistory.initialDestination:t.pdfHistory.initialBookmark&&(t.initialBookmark=t.pdfHistory.initialBookmark))
var i={destination:t.initialDestination,bookmark:t.initialBookmark,hash:null},a=r.getMultiple({exists:!1,page:"1",zoom:R.DEFAULT_SCALE_VALUE,scrollLeft:"0",scrollTop:"0",sidebarView:j.SidebarView.NONE}).catch(function(){})
Promise.all([a,n]).then(function(e){var n=A(e,2),i=n[0],r=void 0===i?{}:i,a=n[1],o=t.viewerPrefs.defaultZoomValue?"zoom="+t.viewerPrefs.defaultZoomValue:null,s=t.viewerPrefs.sidebarViewOnLoad
return r.exists&&t.viewerPrefs.showPreviousViewOnLoad&&(o="page="+r.page+"&zoom="+(t.viewerPrefs.defaultZoomValue||r.zoom)+","+r.scrollLeft+","+r.scrollTop,s=s||0|r.sidebarView),a&&!t.viewerPrefs.disablePageMode&&(s=s||O(a)),{hash:o,sidebarView:s}}).then(function(e){var n=e.hash,r=e.sidebarView
return t.setInitialView(n,{sidebarView:r}),i.hash=n,t.isViewerEmbedded||o.focus(),u}).then(function(){(i.destination||i.bookmark||i.hash)&&(o.hasEqualPageSizes||(t.initialDestination=i.destination,t.initialBookmark=i.bookmark,o.currentScaleValue=o.currentScaleValue,t.setInitialView(i.hash)))}).then(function(){o.update()})}),e.getPageLabels().then(function(n){if(n&&!t.viewerPrefs.disablePageLabels){var i=0,r=n.length
if(r!==t.pagesCount)return void console.error("The number of Page Labels does not match the number of pages in the document.")
for(;i<r&&n[i]===(i+1).toString();)i++
i!==r&&(o.setPageLabels(n),c.setPageLabels(n),t.toolbar.setPagesCount(e.numPages,!0),t.toolbar.setPageNumber(o.currentPageNumber,o.currentPageLabel))}}),u.then(function(){t.supportsPrinting&&e.getJavaScript().then(function(e){e.length&&(console.warn("Warning: JavaScript is not supported"),t.fallback(U.UNSUPPORTED_FEATURES.javaScript))
for(var n=/\bprint\s*\(/,i=0,r=e.length;i<r;i++){var a=e[i]
if(a&&n.test(a))return void setTimeout(function(){window.print()})}})}),Promise.all([l,R.animationStarted]).then(function(){e.getOutline().then(function(e){t.pdfOutlineViewer.render({outline:e})}),e.getAttachments().then(function(e){t.pdfAttachmentViewer.render({attachments:e})})}),e.getMetadata().then(function(n){var i=n.info,r=n.metadata
t.documentInfo=i,t.metadata=r,console.log("PDF "+e.fingerprint+" ["+i.PDFFormatVersion+" "+(i.Producer||"-").trim()+" / "+(i.Creator||"-").trim()+"] (PDF.js: "+(U.version||"-")+(U.PDFJS.disableWebGL?"":" [WebGL]")+")")
var a=void 0
if(r&&r.has("dc:title")){var o=r.get("dc:title")
"Untitled"!==o&&(a=o)}!a&&i&&i.Title&&(a=i.Title),a&&t.setTitle(a+" - "+document.title),i.IsAcroFormPresent&&(console.warn("Warning: AcroForm/XFA is not supported"),t.fallback(U.UNSUPPORTED_FEATURES.forms))})},setInitialView:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.sidebarView
this.isInitialViewSet=!0,this.pdfSidebar.setInitialView(n),this.initialDestination?(this.pdfLinkService.navigateTo(this.initialDestination),this.initialDestination=null):this.initialBookmark?(this.pdfLinkService.setHash(this.initialBookmark),this.pdfHistory.push({hash:this.initialBookmark},!0),this.initialBookmark=null):e&&this.pdfLinkService.setHash(e),this.toolbar.setPageNumber(this.pdfViewer.currentPageNumber,this.pdfViewer.currentPageLabel),this.secondaryToolbar.setPageNumber(this.pdfViewer.currentPageNumber),this.pdfViewer.currentScaleValue||(this.pdfViewer.currentScaleValue=R.DEFAULT_SCALE_VALUE)},cleanup:function(){this.pdfDocument&&(this.pdfViewer.cleanup(),this.pdfThumbnailViewer.cleanup(),this.pdfViewer.renderer!==R.RendererType.SVG&&this.pdfDocument.cleanup())},forceRendering:function(){this.pdfRenderingQueue.printing=this.printing,this.pdfRenderingQueue.isThumbnailViewEnabled=this.pdfSidebar.isThumbnailViewVisible,this.pdfRenderingQueue.renderHighestPriority()},beforePrint:function(){var e=this
if(!this.printService){if(!this.supportsPrinting)return void this.l10n.get("printing_not_supported",null,"Warning: Printing is not fully supported by this browser.").then(function(t){e.error(t)})
if(!this.pdfViewer.pageViewsReady)return void this.l10n.get("printing_not_ready",null,"Warning: The PDF is not fully loaded for printing.").then(function(e){window.alert(e)})
var t=this.pdfViewer.getPagesOverview(),n=this.appConfig.printContainer,i=ve.instance.createPrintService(this.pdfDocument,t,n,this.l10n)
this.printService=i,this.forceRendering(),i.layout()}},afterPrint:function(){this.printService&&(this.printService.destroy(),this.printService=null),this.forceRendering()},rotatePages:function(e){if(this.pdfDocument){var t=this.pdfViewer,n=this.pdfThumbnailViewer,i=t.currentPageNumber,r=(t.pagesRotation+360+e)%360
t.pagesRotation=r,n.pagesRotation=r,this.forceRendering(),t.currentPageNumber=i}},requestPresentationMode:function(){this.pdfPresentationMode&&this.pdfPresentationMode.request()},bindEvents:function(){var e=this.eventBus,t=this._boundEvents
t.beforePrint=this.beforePrint.bind(this),t.afterPrint=this.afterPrint.bind(this),e.on("resize",f),e.on("hashchange",v),e.on("beforeprint",t.beforePrint),e.on("afterprint",t.afterPrint),e.on("pagerendered",o),e.on("textlayerrendered",s),e.on("updateviewarea",h),e.on("pagechanging",F),e.on("scalechanging",D),e.on("sidebarviewchanged",d),e.on("pagemode",u),e.on("namedaction",l),e.on("presentationmodechanged",c),e.on("presentationmode",g),e.on("openfile",p),e.on("print",m),e.on("download",w),e.on("firstpage",b),e.on("lastpage",y),e.on("nextpage",P),e.on("previouspage",S),e.on("zoomin",k),e.on("zoomout",C),e.on("pagenumberchanged",_),e.on("scalechanged",L),e.on("rotatecw",E),e.on("rotateccw",T),e.on("documentproperties",I),e.on("find",B),e.on("findfromurlhash",x),e.on("fileinputchange",de)},bindWindowEvents:function(){var e=this.eventBus,t=this._boundEvents
t.windowResize=function(){e.dispatch("resize")},t.windowHashChange=function(){e.dispatch("hashchange",{hash:document.location.hash.substring(1)})},t.windowBeforePrint=function(){e.dispatch("beforeprint")},t.windowAfterPrint=function(){e.dispatch("afterprint")},window.addEventListener("wheel",N),window.addEventListener("click",V),window.addEventListener("keydown",M),window.addEventListener("resize",t.windowResize),window.addEventListener("hashchange",t.windowHashChange),window.addEventListener("beforeprint",t.windowBeforePrint),window.addEventListener("afterprint",t.windowAfterPrint),t.windowChange=function(t){var n=t.target.files
n&&0!==n.length&&e.dispatch("fileinputchange",{fileInput:t.target})},window.addEventListener("change",t.windowChange)},unbindEvents:function(){var e=this.eventBus,t=this._boundEvents
e.off("resize",f),e.off("hashchange",v),e.off("beforeprint",t.beforePrint),e.off("afterprint",t.afterPrint),e.off("pagerendered",o),e.off("textlayerrendered",s),e.off("updateviewarea",h),e.off("pagechanging",F),e.off("scalechanging",D),e.off("sidebarviewchanged",d),e.off("pagemode",u),e.off("namedaction",l),e.off("presentationmodechanged",c),e.off("presentationmode",g),e.off("openfile",p),e.off("print",m),e.off("download",w),e.off("firstpage",b),e.off("lastpage",y),e.off("nextpage",P),e.off("previouspage",S),e.off("zoomin",k),e.off("zoomout",C),e.off("pagenumberchanged",_),e.off("scalechanged",L),e.off("rotatecw",E),e.off("rotateccw",T),e.off("documentproperties",I),e.off("find",B),e.off("findfromurlhash",x),e.off("fileinputchange",de),t.beforePrint=null,t.afterPrint=null},unbindWindowEvents:function(){var e=this._boundEvents
window.removeEventListener("wheel",N),window.removeEventListener("click",V),window.removeEventListener("keydown",M),window.removeEventListener("resize",e.windowResize),window.removeEventListener("hashchange",e.windowHashChange),window.removeEventListener("beforeprint",e.windowBeforePrint),window.removeEventListener("afterprint",e.windowAfterPrint),window.removeEventListener("change",e.windowChange),e.windowChange=null,e.windowResize=null,e.windowHashChange=null,e.windowBeforePrint=null,e.windowAfterPrint=null}},ue=void 0,le=["null","http://mozilla.github.io","https://mozilla.github.io"]
ue=function(e){if(void 0!==e)try{var t=new URL(window.location.href).origin||"null"
if(le.indexOf(t)>=0)return
if(new URL(e,window.location.href).origin!==t)throw new Error("file origin does not match viewer's")}catch(e){var n=e&&e.message
throw se.l10n.get("loading_error",null,"An error occurred while loading the PDF.").then(function(e){se.error(e,{message:n})}),e}}
var ce=void 0
ce=function(e){if(e&&0===e.lastIndexOf("file:",0)){se.setTitleUsingUrl(e)
var t=new XMLHttpRequest
t.onload=function(){se.open(new Uint8Array(t.response))}
try{t.open("GET",e),t.responseType="arraybuffer",t.send()}catch(e){se.l10n.get("loading_error",null,"An error occurred while loading the PDF.").then(function(t){se.error(t,e)})}}else e&&se.open(e)}
var de=void 0
de=function(e){var t=e.fileInput.files[0]
if(!U.PDFJS.disableCreateObjectURL&&URL.createObjectURL)se.open(URL.createObjectURL(t))
else{var n=new FileReader
n.onload=function(e){var t=e.target.result
se.open(new Uint8Array(t))},n.readAsArrayBuffer(t)}se.setTitleUsingUrl(t.name)
var i=se.appConfig
i.toolbar.viewBookmark.setAttribute("hidden","true"),i.secondaryToolbar.viewBookmarkButton.setAttribute("hidden","true"),i.toolbar.download.setAttribute("hidden","true"),i.secondaryToolbar.downloadButton.setAttribute("hidden","true")}
var he=!1,fe=void 0,ve={instance:{supportsPrinting:!1,createPrintService:function(){throw new Error("Not implemented: createPrintService")}}}
t.PDFViewerApplication=se,t.DefaultExternalServices=oe,t.PDFPrintServiceFactory=ve},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){if(!(e instanceof Array))return!1
var t=e.length,n=!0
if(t<2)return!1
var i=e[0]
if(!("object"===(void 0===i?"undefined":a(i))&&"number"==typeof i.num&&(0|i.num)===i.num&&"number"==typeof i.gen&&(0|i.gen)===i.gen||"number"==typeof i&&(0|i)===i&&i>=0))return!1
var r=e[1]
if("object"!==(void 0===r?"undefined":a(r))||"string"!=typeof r.name)return!1
switch(r.name){case"XYZ":if(5!==t)return!1
break
case"Fit":case"FitB":return 2===t
case"FitH":case"FitBH":case"FitV":case"FitBV":if(3!==t)return!1
break
case"FitR":if(6!==t)return!1
n=!1
break
default:return!1}for(var o=2;o<t;o++){var s=e[o]
if(!("number"==typeof s||n&&null===s))return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleLinkService=t.PDFLinkService=void 0
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(2),u=n(0),l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.eventBus
i(this,e),this.eventBus=n||(0,s.getGlobalEventBus)(),this.baseUrl=null,this.pdfDocument=null,this.pdfViewer=null,this.pdfHistory=null,this._pagesRefCache=null}return o(e,[{key:"setDocument",value:function(e,t){this.baseUrl=t,this.pdfDocument=e,this._pagesRefCache=Object.create(null)}},{key:"setViewer",value:function(e){this.pdfViewer=e}},{key:"setHistory",value:function(e){this.pdfHistory=e}},{key:"navigateTo",value:function(e){var t=this,n=function n(i){var r=i.namedDest,a=i.explicitDest,o=a[0],s=void 0
if(o instanceof Object){if(null===(s=t._cachedPageNumber(o)))return void t.pdfDocument.getPageIndex(o).then(function(e){t.cachePageRef(e+1,o),n({namedDest:r,explicitDest:a})}).catch(function(){console.error('PDFLinkService.navigateTo: "'+o+'" is not a valid page reference, for dest="'+e+'".')})}else{if((0|o)!==o)return void console.error('PDFLinkService.navigateTo: "'+o+'" is not a valid destination reference, for dest="'+e+'".')
s=o+1}if(!s||s<1||s>t.pagesCount)return void console.error('PDFLinkService.navigateTo: "'+s+'" is not a valid page number, for dest="'+e+'".')
t.pdfViewer.scrollPageIntoView({pageNumber:s,destArray:a}),t.pdfHistory&&t.pdfHistory.push({dest:a,hash:r,page:s})}
new Promise(function(n,i){if("string"==typeof e)return void t.pdfDocument.getDestination(e).then(function(t){n({namedDest:e,explicitDest:t})})
n({namedDest:"",explicitDest:e})}).then(function(t){if(!(t.explicitDest instanceof Array))return void console.error('PDFLinkService.navigateTo: "'+t.explicitDest+'" is not a valid destination array, for dest="'+e+'".')
n(t)})}},{key:"getDestinationHash",value:function(e){if("string"==typeof e)return this.getAnchorUrl("#"+escape(e))
if(e instanceof Array){var t=JSON.stringify(e)
return this.getAnchorUrl("#"+escape(t))}return this.getAnchorUrl("")}},{key:"getAnchorUrl",value:function(e){return(this.baseUrl||"")+e}},{key:"setHash",value:function(e){var t=void 0,n=void 0
if(e.indexOf("=")>=0){var i=(0,u.parseQueryString)(e)
if("search"in i&&this.eventBus.dispatch("findfromurlhash",{source:this,query:i.search.replace(/"/g,""),phraseSearch:"true"===i.phrase}),"nameddest"in i)return this.pdfHistory&&this.pdfHistory.updateNextHashParam(i.nameddest),void this.navigateTo(i.nameddest)
if("page"in i&&(t=0|i.page||1),"zoom"in i){var a=i.zoom.split(","),o=a[0],s=parseFloat(o);-1===o.indexOf("Fit")?n=[null,{name:"XYZ"},a.length>1?0|a[1]:null,a.length>2?0|a[2]:null,s?s/100:o]:"Fit"===o||"FitB"===o?n=[null,{name:o}]:"FitH"===o||"FitBH"===o||"FitV"===o||"FitBV"===o?n=[null,{name:o},a.length>1?0|a[1]:null]:"FitR"===o?5!==a.length?console.error('PDFLinkService.setHash: Not enough parameters for "FitR".'):n=[null,{name:o},0|a[1],0|a[2],0|a[3],0|a[4]]:console.error('PDFLinkService.setHash: "'+o+'" is not a valid zoom value.')}n?this.pdfViewer.scrollPageIntoView({pageNumber:t||this.page,destArray:n,allowNegativeOffset:!0}):t&&(this.page=t),"pagemode"in i&&this.eventBus.dispatch("pagemode",{source:this,mode:i.pagemode})}else{/^\d+$/.test(e)&&e<=this.pagesCount&&(console.warn('PDFLinkService_setHash: specifying a page number directly after the hash symbol (#) is deprecated, please use the "#page='+e+'" form instead.'),this.page=0|e),n=unescape(e)
try{n=JSON.parse(n),n instanceof Array||(n=n.toString())}catch(e){}if("string"==typeof n||r(n))return this.pdfHistory&&this.pdfHistory.updateNextHashParam(n),void this.navigateTo(n)
console.error('PDFLinkService.setHash: "'+unescape(e)+'" is not a valid destination.')}}},{key:"executeNamedAction",value:function(e){switch(e){case"GoBack":this.pdfHistory&&this.pdfHistory.back()
break
case"GoForward":this.pdfHistory&&this.pdfHistory.forward()
break
case"NextPage":this.page<this.pagesCount&&this.page++
break
case"PrevPage":this.page>1&&this.page--
break
case"LastPage":this.page=this.pagesCount
break
case"FirstPage":this.page=1}this.eventBus.dispatch("namedaction",{source:this,action:e})}},{key:"onFileAttachmentAnnotation",value:function(e){var t=e.id,n=e.filename,i=e.content
this.eventBus.dispatch("fileattachmentannotation",{source:this,id:t,filename:n,content:i})}},{key:"cachePageRef",value:function(e,t){var n=t.num+" "+t.gen+" R"
this._pagesRefCache[n]=e}},{key:"_cachedPageNumber",value:function(e){var t=e.num+" "+e.gen+" R"
return this._pagesRefCache&&this._pagesRefCache[t]||null}},{key:"pagesCount",get:function(){return this.pdfDocument?this.pdfDocument.numPages:0}},{key:"page",get:function(){return this.pdfViewer.currentPageNumber},set:function(e){this.pdfViewer.currentPageNumber=e}}]),e}(),c=function(){function e(){i(this,e)}return o(e,[{key:"navigateTo",value:function(e){}},{key:"getDestinationHash",value:function(e){return"#"}},{key:"getAnchorUrl",value:function(e){return"#"}},{key:"setHash",value:function(e){}},{key:"executeNamedAction",value:function(e){}},{key:"onFileAttachmentAnnotation",value:function(e){e.id,e.filename,e.content}},{key:"cachePageRef",value:function(e,t){}},{key:"page",get:function(){return 0},set:function(e){}}]),e}()
t.PDFLinkService=l,t.SimpleLinkService=c},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFCursorTools=t.CursorTool=void 0
var r=function(){function e(e,t){var n=[],i=!0,r=!1,a=void 0
try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(14),s={SELECT:0,HAND:1,ZOOM:2},u=function(){function e(t){var n=this,a=t.container,u=t.eventBus,l=t.preferences
i(this,e),this.container=a,this.eventBus=u,this.active=s.SELECT,this.activeBeforePresentationMode=null,this.handTool=new o.GrabToPan({element:this.container}),this._addEventListeners(),Promise.all([l.get("cursorToolOnLoad"),l.get("enableHandToolOnLoad")]).then(function(e){var t=r(e,2),i=t[0]
!0===t[1]&&(l.set("enableHandToolOnLoad",!1),i===s.SELECT&&(i=s.HAND,l.set("cursorToolOnLoad",i).catch(function(){}))),n.switchTool(i)}).catch(function(){})}return a(e,[{key:"switchTool",value:function(e){var t=this
if(null===this.activeBeforePresentationMode&&e!==this.active){var n=function(){switch(t.active){case s.SELECT:break
case s.HAND:t.handTool.deactivate()
break
case s.ZOOM:}}
switch(e){case s.SELECT:n()
break
case s.HAND:n(),this.handTool.activate()
break
case s.ZOOM:default:return void console.error('switchTool: "'+e+'" is an unsupported value.')}this.active=e,this._dispatchEvent()}}},{key:"_dispatchEvent",value:function(){this.eventBus.dispatch("cursortoolchanged",{source:this,tool:this.active})}},{key:"_addEventListeners",value:function(){var e=this
this.eventBus.on("switchcursortool",function(t){e.switchTool(t.tool)}),this.eventBus.on("presentationmodechanged",function(t){if(!t.switchInProgress){var n=void 0
t.active?(n=e.active,e.switchTool(s.SELECT),e.activeBeforePresentationMode=n):(n=e.activeBeforePresentationMode,e.activeBeforePresentationMode=null,e.switchTool(n))}})}},{key:"activeTool",get:function(){return this.active}}]),e}()
t.CursorTool=s,t.PDFCursorTools=u},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFFindController=t.FindState=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(1),o=n(0),s={FOUND:0,NOT_FOUND:1,WRAPPED:2,PENDING:3},u={"‘":"'","’":"'","‚":"'","‛":"'","“":'"',"”":'"',"„":'"',"‟":'"',"¼":"1/4","½":"1/2","¾":"3/4"},l=function(){function e(t){var n=t.pdfViewer
i(this,e),this.pdfViewer=n,this.onUpdateResultsCount=null,this.onUpdateState=null,this.reset()
var r=Object.keys(u).join("")
this.normalizationRegex=new RegExp("["+r+"]","g")}return r(e,[{key:"reset",value:function(){var e=this
this.startedTextExtraction=!1,this.extractTextPromises=[],this.pendingFindMatches=Object.create(null),this.active=!1,this.pageContents=[],this.pageMatches=[],this.pageMatchesLength=null,this.matchCount=0,this.selected={pageIdx:-1,matchIdx:-1},this.offset={pageIdx:null,matchIdx:null},this.pagesToSearch=null,this.resumePageIdx=null,this.state=null,this.dirtyMatch=!1,this.findTimeout=null,this._firstPagePromise=new Promise(function(t){e.resolveFirstPage=t})}},{key:"normalize",value:function(e){return e.replace(this.normalizationRegex,function(e){return u[e]})}},{key:"_prepareMatches",value:function(e,t,n){e.sort(function(e,t){return e.match===t.match?e.matchLength-t.matchLength:e.match-t.match})
for(var i=0,r=e.length;i<r;i++)(function(e,t){var n=e[t],i=e[t+1]
if(t<e.length-1&&n.match===i.match)return n.skipped=!0,!0
for(var r=t-1;r>=0;r--){var a=e[r]
if(!a.skipped){if(a.match+a.matchLength<n.match)break
if(a.match+a.matchLength>=n.match+n.matchLength)return n.skipped=!0,!0}}return!1})(e,i)||(t.push(e[i].match),n.push(e[i].matchLength))}},{key:"calcFindPhraseMatch",value:function(e,t,n){for(var i=[],r=e.length,a=-r;;){if(-1===(a=n.indexOf(e,a+r)))break
i.push(a)}this.pageMatches[t]=i}},{key:"calcFindWordMatch",value:function(e,t,n){for(var i=[],r=e.match(/\S+/g),a=0,o=r.length;a<o;a++)for(var s=r[a],u=s.length,l=-u;;){if(-1===(l=n.indexOf(s,l+u)))break
i.push({match:l,matchLength:u,skipped:!1})}this.pageMatchesLength||(this.pageMatchesLength=[]),this.pageMatchesLength[t]=[],this.pageMatches[t]=[],this._prepareMatches(i,this.pageMatches[t],this.pageMatchesLength[t])}},{key:"calcFindMatch",value:function(e){var t=this.normalize(this.pageContents[e]),n=this.normalize(this.state.query),i=this.state.caseSensitive,r=this.state.phraseSearch
0!==n.length&&(i||(t=t.toLowerCase(),n=n.toLowerCase()),r?this.calcFindPhraseMatch(n,e,t):this.calcFindWordMatch(n,e,t),this.updatePage(e),this.resumePageIdx===e&&(this.resumePageIdx=null,this.nextPageMatch()),this.pageMatches[e].length>0&&(this.matchCount+=this.pageMatches[e].length,this.updateUIResultsCount()))}},{key:"extractText",value:function(){var e=this
if(!this.startedTextExtraction){this.startedTextExtraction=!0,this.pageContents.length=0
for(var t=Promise.resolve(),n=0,i=this.pdfViewer.pagesCount;n<i;n++)!function(n,i){var r=(0,a.createPromiseCapability)()
e.extractTextPromises[n]=r.promise,t=t.then(function(){return e.pdfViewer.getPageTextContent(n).then(function(t){for(var i=t.items,a=[],o=0,s=i.length;o<s;o++)a.push(i[o].str)
e.pageContents[n]=a.join(""),r.resolve(n)},function(t){console.error("Unable to get page "+(n+1)+" text content",t),e.pageContents[n]="",r.resolve(n)})})}(n)}}},{key:"executeCommand",value:function(e,t){var n=this
null!==this.state&&"findagain"===e||(this.dirtyMatch=!0),this.state=t,this.updateUIState(s.PENDING),this._firstPagePromise.then(function(){n.extractText(),clearTimeout(n.findTimeout),"find"===e?n.findTimeout=setTimeout(n.nextMatch.bind(n),250):n.nextMatch()})}},{key:"updatePage",value:function(e){this.selected.pageIdx===e&&(this.pdfViewer.currentPageNumber=e+1)
var t=this.pdfViewer.getPageView(e)
t.textLayer&&t.textLayer.updateMatches()}},{key:"nextMatch",value:function(){var e=this,t=this.state.findPrevious,n=this.pdfViewer.currentPageNumber-1,i=this.pdfViewer.pagesCount
if(this.active=!0,this.dirtyMatch){this.dirtyMatch=!1,this.selected.pageIdx=this.selected.matchIdx=-1,this.offset.pageIdx=n,this.offset.matchIdx=null,this.hadMatch=!1,this.resumePageIdx=null,this.pageMatches=[],this.matchCount=0,this.pageMatchesLength=null
for(var r=0;r<i;r++)this.updatePage(r),r in this.pendingFindMatches||(this.pendingFindMatches[r]=!0,this.extractTextPromises[r].then(function(t){delete e.pendingFindMatches[t],e.calcFindMatch(t)}))}if(""===this.state.query)return void this.updateUIState(s.FOUND)
if(!this.resumePageIdx){var a=this.offset
if(this.pagesToSearch=i,null!==a.matchIdx){var o=this.pageMatches[a.pageIdx].length
if(!t&&a.matchIdx+1<o||t&&a.matchIdx>0)return this.hadMatch=!0,a.matchIdx=t?a.matchIdx-1:a.matchIdx+1,void this.updateMatch(!0)
this.advanceOffsetPage(t)}this.nextPageMatch()}}},{key:"matchesReady",value:function(e){var t=this.offset,n=e.length,i=this.state.findPrevious
return n?(this.hadMatch=!0,t.matchIdx=i?n-1:0,this.updateMatch(!0),!0):(this.advanceOffsetPage(i),!!(t.wrapped&&(t.matchIdx=null,this.pagesToSearch<0))&&(this.updateMatch(!1),!0))}},{key:"updateMatchPosition",value:function(e,t,n,i){if(this.selected.matchIdx===t&&this.selected.pageIdx===e){var r={top:-50,left:-400};(0,o.scrollIntoView)(n[i],r,!0)}}},{key:"nextPageMatch",value:function(){null!==this.resumePageIdx&&console.error("There can only be one pending page.")
var e=null
do{var t=this.offset.pageIdx
if(!(e=this.pageMatches[t])){this.resumePageIdx=t
break}}while(!this.matchesReady(e))}},{key:"advanceOffsetPage",value:function(e){var t=this.offset,n=this.extractTextPromises.length
t.pageIdx=e?t.pageIdx-1:t.pageIdx+1,t.matchIdx=null,this.pagesToSearch--,(t.pageIdx>=n||t.pageIdx<0)&&(t.pageIdx=e?n-1:0,t.wrapped=!0)}},{key:"updateMatch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=s.NOT_FOUND,n=this.offset.wrapped
if(this.offset.wrapped=!1,e){var i=this.selected.pageIdx
this.selected.pageIdx=this.offset.pageIdx,this.selected.matchIdx=this.offset.matchIdx,t=n?s.WRAPPED:s.FOUND,-1!==i&&i!==this.selected.pageIdx&&this.updatePage(i)}this.updateUIState(t,this.state.findPrevious),-1!==this.selected.pageIdx&&this.updatePage(this.selected.pageIdx)}},{key:"updateUIResultsCount",value:function(){this.onUpdateResultsCount&&this.onUpdateResultsCount(this.matchCount)}},{key:"updateUIState",value:function(e,t){this.onUpdateState&&this.onUpdateState(e,t,this.matchCount)}}]),e}()
t.FindState=s,t.PDFFindController=l},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.GenericCom=void 0
var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(4),u=n(28),l=n(12),c=n(13),d=n(1),h={},f=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),o(t,[{key:"_writeToStorage",value:function(e){return new Promise(function(t){localStorage.setItem("pdfjs.preferences",JSON.stringify(e)),t()})}},{key:"_readFromStorage",value:function(e){return new Promise(function(e){e(JSON.parse(localStorage.getItem("pdfjs.preferences")))})}}]),t}(u.BasePreferences),v=Object.create(s.DefaultExternalServices)
v.createDownloadManager=function(){return new l.DownloadManager},v.createPreferences=function(){return new f},v.createL10n=function(){return new c.GenericL10n(d.PDFJS.locale)},s.PDFViewerApplication.externalServices=v,t.GenericCom=h},function(e,t,n){"use strict"
function i(e,t,n,i){var r=h.scratchCanvas
r.width=Math.floor(i.width*(150/72)),r.height=Math.floor(i.height*(150/72))
var a=Math.floor(i.width*l.CSS_UNITS)+"px",o=Math.floor(i.height*l.CSS_UNITS)+"px",s=r.getContext("2d")
return s.save(),s.fillStyle="rgb(255, 255, 255)",s.fillRect(0,0,r.width,r.height),s.restore(),t.getPage(n).then(function(e){var t={canvasContext:s,transform:[150/72,0,0,150/72,0,0],viewport:e.getViewport(1,i.rotation),intent:"print"}
return e.render(t).promise}).then(function(){return{width:a,height:o}})}function r(e,t,n,i){this.pdfDocument=e,this.pagesOverview=t,this.printContainer=n,this.l10n=i||l.NullL10n,this.currentPage=-1,this.scratchCanvas=document.createElement("canvas")}function a(e){var t=document.createEvent("CustomEvent")
t.initCustomEvent(e,!1,!1,"custom"),window.dispatchEvent(t)}function o(){h&&(h.destroy(),a("afterprint"))}function s(e,t,n){var i=document.getElementById("printServiceOverlay"),r=Math.round(100*e/t),a=i.querySelector("progress"),o=i.querySelector(".relative-progress")
a.value=r,n.get("print_progress_percent",{progress:r},r+"%").then(function(e){o.textContent=e})}function u(){if(!m){if(!(f=c.PDFViewerApplication.overlayManager))throw new Error("The overlay manager has not yet been initialized.")
m=f.register("printServiceOverlay",document.getElementById("printServiceOverlay"),o,!0),document.getElementById("printCancel").onclick=o}return m}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFPrintService=void 0
var l=n(0),c=n(4),d=n(1),h=null,f=null
r.prototype={layout:function(){this.throwIfInactive()
var e=document.querySelector("body")
e.setAttribute("data-pdfjsprinting",!0),this.pagesOverview.every(function(e){return e.width===this.pagesOverview[0].width&&e.height===this.pagesOverview[0].height},this)||console.warn("Not all pages have the same size. The printed result may be incorrect!"),this.pageStyleSheet=document.createElement("style")
var t=this.pagesOverview[0]
this.pageStyleSheet.textContent="@supports ((size:A4) and (size:1pt 1pt)) {@page { size: "+t.width+"pt "+t.height+"pt;}}",e.appendChild(this.pageStyleSheet)},destroy:function(){h===this&&(this.printContainer.textContent="",this.pageStyleSheet&&this.pageStyleSheet.parentNode&&(this.pageStyleSheet.parentNode.removeChild(this.pageStyleSheet),this.pageStyleSheet=null),this.scratchCanvas.width=this.scratchCanvas.height=0,this.scratchCanvas=null,h=null,u().then(function(){"printServiceOverlay"===f.active&&f.close("printServiceOverlay")}))},renderPages:function(){var e=this,t=this.pagesOverview.length,n=function n(r,a){if(e.throwIfInactive(),++e.currentPage>=t)return s(t,t,e.l10n),void r()
var o=e.currentPage
s(o,t,e.l10n),i(e,e.pdfDocument,o+1,e.pagesOverview[o]).then(e.useRenderedPage.bind(e)).then(function(){n(r,a)},a)}
return new Promise(n)},useRenderedPage:function(e){this.throwIfInactive()
var t=document.createElement("img")
t.style.width=e.width,t.style.height=e.height
var n=this.scratchCanvas
"toBlob"in n&&!d.PDFJS.disableCreateObjectURL?n.toBlob(function(e){t.src=URL.createObjectURL(e)}):t.src=n.toDataURL()
var i=document.createElement("div")
return i.appendChild(t),this.printContainer.appendChild(i),new Promise(function(e,n){t.onload=e,t.onerror=n})},performPrint:function(){var e=this
return this.throwIfInactive(),new Promise(function(t){setTimeout(function(){if(!e.active)return void t()
v.call(window),setTimeout(t,20)},0)})},get active(){return this===h},throwIfInactive:function(){if(!this.active)throw new Error("This print request was cancelled or completed.")}}
var v=window.print
window.print=function(){if(h)return void console.warn("Ignored window.print() because of a pending print job.")
u().then(function(){h&&f.open("printServiceOverlay")})
try{a("beforeprint")}finally{if(!h)return console.error("Expected print service to be initialized."),void u().then(function(){"printServiceOverlay"===f.active&&f.close("printServiceOverlay")})
var e=h
h.renderPages().then(function(){return e.performPrint()}).catch(function(){}).then(function(){e.active&&o()})}}
var g=!!document.attachEvent
if(window.addEventListener("keydown",function(e){if(80===e.keyCode&&(e.ctrlKey||e.metaKey)&&!e.altKey&&(!e.shiftKey||window.chrome||window.opera)){if(window.print(),g)return
return e.preventDefault(),void(e.stopImmediatePropagation?e.stopImmediatePropagation():e.stopPropagation())}},!0),g&&document.attachEvent("onkeydown",function(e){if(e=e||window.event,80===e.keyCode&&e.ctrlKey)return e.keyCode=0,!1}),"onbeforeprint"in window){var p=function(e){"custom"!==e.detail&&e.stopImmediatePropagation&&e.stopImmediatePropagation()}
window.addEventListener("beforeprint",p),window.addEventListener("afterprint",p)}var m
c.PDFPrintServiceFactory.instance={supportsPrinting:!0,createPrintService:function(e,t,n,i){if(h)throw new Error("The print service is created and active.")
return h=new r(e,t,n,i)}},t.PDFPrintService=r},function(e,t,n){"use strict"
document.webL10n=function(e,t,n){function i(){return t.querySelectorAll('link[type="application/l10n"]')}function r(){var e=t.querySelector('script[type="application/l10n"]')
return e?JSON.parse(e.innerHTML):null}function a(e){return e?e.querySelectorAll("*[data-l10n-id]"):[]}function o(e){if(!e)return{}
var t=e.getAttribute("data-l10n-id"),n=e.getAttribute("data-l10n-args"),i={}
if(n)try{i=JSON.parse(n)}catch(e){console.warn("could not parse arguments for #"+t)}return{id:t,args:i}}function s(e){var n=t.createEvent("Event")
n.initEvent("localized",!0,!1),n.language=e,t.dispatchEvent(n)}function u(e,t,n){t=t||function(e){},n=n||function(){}
var i=new XMLHttpRequest
i.open("GET",e,_),i.overrideMimeType&&i.overrideMimeType("text/plain; charset=utf-8"),i.onreadystatechange=function(){4==i.readyState&&(200==i.status||0===i.status?t(i.responseText):n())},i.onerror=n,i.ontimeout=n
try{i.send(null)}catch(e){n()}}function l(e,t,n,i){function r(e){return e.lastIndexOf("\\")<0?e:e.replace(/\\\\/g,"\\").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\t/g,"\t").replace(/\\b/g,"\b").replace(/\\f/g,"\f").replace(/\\{/g,"{").replace(/\\}/g,"}").replace(/\\"/g,'"').replace(/\\'/g,"'")}function a(e,n){function i(e,n,i){function u(){for(;;){if(!v.length)return void i()
var e=v.shift()
if(!c.test(e)){if(n){if(w=d.exec(e)){g=w[1].toLowerCase(),m="*"!==g&&g!==t&&g!==p
continue}if(m)continue
if(w=h.exec(e))return void a(o+w[1],u)}var l=e.match(f)
l&&3==l.length&&(s[l[1]]=r(l[2]))}}}var v=e.replace(l,"").split(/[\r\n]+/),g="*",p=t.split("-",1)[0],m=!1,w=""
u()}function a(e,t){u(e,function(e){i(e,!1,t)},function(){console.warn(e+" not found."),t()})}var s={},l=/^\s*|\s*$/,c=/^\s*#|^\s*$/,d=/^\s*\[(.*)\]\s*$/,h=/^\s*@import\s+url\((.*)\)\s*$/i,f=/^([^=\s]*)\s*=\s*(.+)$/
i(e,!0,function(){n(s)})}var o=e.replace(/[^\/]*$/,"")||"./"
u(e,function(e){y+=e,a(e,function(e){for(var t in e){var i,r,a=t.lastIndexOf(".")
a>0?(i=t.substring(0,a),r=t.substr(a+1)):(i=t,r=P),b[i]||(b[i]={}),b[i][r]=e[t]}n&&n()})},i)}function c(e,t){function n(e){var t=e.href
this.load=function(e,n){l(t,e,n,function(){console.warn(t+" not found."),console.warn('"'+e+'" resource not found'),S="",n()})}}e&&(e=e.toLowerCase()),t=t||function(){},d(),S=e
var a=i(),o=a.length
if(0===o){var u=r()
if(u&&u.locales&&u.default_locale){if(console.log("using the embedded JSON directory, early way out"),!(b=u.locales[e])){var c=u.default_locale.toLowerCase()
for(var h in u.locales){if((h=h.toLowerCase())===e){b=u.locales[e]
break}h===c&&(b=u.locales[c])}}t()}else console.log("no resource to load, early way out")
return s(e),void(C="complete")}var f=null,v=0
f=function(){++v>=o&&(t(),s(e),C="complete")}
for(var g=0;g<o;g++){new n(a[g]).load(e,f)}}function d(){b={},y="",S=""}function h(e){function t(e,t){return-1!==t.indexOf(e)}function n(e,t,n){return t<=e&&e<=n}var i={af:3,ak:4,am:4,ar:1,asa:3,az:0,be:11,bem:3,bez:3,bg:3,bh:4,bm:0,bn:3,bo:0,br:20,brx:3,bs:11,ca:3,cgg:3,chr:3,cs:12,cy:17,da:3,de:3,dv:3,dz:0,ee:3,el:3,en:3,eo:3,es:3,et:3,eu:3,fa:0,ff:5,fi:3,fil:4,fo:3,fr:5,fur:3,fy:3,ga:8,gd:24,gl:3,gsw:3,gu:3,guw:4,gv:23,ha:3,haw:3,he:2,hi:4,hr:11,hu:0,id:0,ig:0,ii:0,is:3,it:3,iu:7,ja:0,jmc:3,jv:0,ka:0,kab:5,kaj:3,kcg:3,kde:0,kea:0,kk:3,kl:3,km:0,kn:0,ko:0,ksb:3,ksh:21,ku:3,kw:7,lag:18,lb:3,lg:3,ln:4,lo:0,lt:10,lv:6,mas:3,mg:4,mk:16,ml:3,mn:3,mo:9,mr:3,ms:0,mt:15,my:0,nah:3,naq:7,nb:3,nd:3,ne:3,nl:3,nn:3,no:3,nr:3,nso:4,ny:3,nyn:3,om:3,or:3,pa:3,pap:3,pl:13,ps:3,pt:3,rm:3,ro:9,rof:3,ru:11,rwk:3,sah:0,saq:3,se:7,seh:3,ses:0,sg:0,sh:11,shi:19,sk:12,sl:14,sma:7,smi:7,smj:7,smn:7,sms:7,sn:3,so:3,sq:3,sr:11,ss:3,ssy:3,st:3,sv:3,sw:3,syr:3,ta:3,te:3,teo:3,th:0,ti:4,tig:3,tk:3,tl:4,tn:3,to:0,tr:0,ts:3,tzm:22,uk:11,ur:3,ve:3,vi:0,vun:3,wa:4,wae:3,wo:0,xh:3,xog:3,yo:0,zh:0,zu:3},r={0:function(e){return"other"},1:function(e){return n(e%100,3,10)?"few":0===e?"zero":n(e%100,11,99)?"many":2==e?"two":1==e?"one":"other"},2:function(e){return 0!==e&&e%10==0?"many":2==e?"two":1==e?"one":"other"},3:function(e){return 1==e?"one":"other"},4:function(e){return n(e,0,1)?"one":"other"},5:function(e){return n(e,0,2)&&2!=e?"one":"other"},6:function(e){return 0===e?"zero":e%10==1&&e%100!=11?"one":"other"},7:function(e){return 2==e?"two":1==e?"one":"other"},8:function(e){return n(e,3,6)?"few":n(e,7,10)?"many":2==e?"two":1==e?"one":"other"},9:function(e){return 0===e||1!=e&&n(e%100,1,19)?"few":1==e?"one":"other"},10:function(e){return n(e%10,2,9)&&!n(e%100,11,19)?"few":e%10!=1||n(e%100,11,19)?"other":"one"},11:function(e){return n(e%10,2,4)&&!n(e%100,12,14)?"few":e%10==0||n(e%10,5,9)||n(e%100,11,14)?"many":e%10==1&&e%100!=11?"one":"other"},12:function(e){return n(e,2,4)?"few":1==e?"one":"other"},13:function(e){return n(e%10,2,4)&&!n(e%100,12,14)?"few":1!=e&&n(e%10,0,1)||n(e%10,5,9)||n(e%100,12,14)?"many":1==e?"one":"other"},14:function(e){return n(e%100,3,4)?"few":e%100==2?"two":e%100==1?"one":"other"},15:function(e){return 0===e||n(e%100,2,10)?"few":n(e%100,11,19)?"many":1==e?"one":"other"},16:function(e){return e%10==1&&11!=e?"one":"other"},17:function(e){return 3==e?"few":0===e?"zero":6==e?"many":2==e?"two":1==e?"one":"other"},18:function(e){return 0===e?"zero":n(e,0,2)&&0!==e&&2!=e?"one":"other"},19:function(e){return n(e,2,10)?"few":n(e,0,1)?"one":"other"},20:function(e){return!n(e%10,3,4)&&e%10!=9||n(e%100,10,19)||n(e%100,70,79)||n(e%100,90,99)?e%1e6==0&&0!==e?"many":e%10!=2||t(e%100,[12,72,92])?e%10!=1||t(e%100,[11,71,91])?"other":"one":"two":"few"},21:function(e){return 0===e?"zero":1==e?"one":"other"},22:function(e){return n(e,0,1)||n(e,11,99)?"one":"other"},23:function(e){return n(e%10,1,2)||e%20==0?"one":"other"},24:function(e){return n(e,3,10)||n(e,13,19)?"few":t(e,[2,12])?"two":t(e,[1,11])?"one":"other"}},a=i[e.replace(/-.*$/,"")]
return a in r?r[a]:(console.warn("plural form unknown for ["+e+"]"),function(){return"other"})}function f(e,t,n){var i=b[e]
if(!i){if(console.warn("#"+e+" is undefined."),!n)return null
i=n}var r={}
for(var a in i){var o=i[a]
o=v(o,t,e,a),o=g(o,t,e),r[a]=o}return r}function v(e,t,n,i){var r=/\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/,a=r.exec(e)
if(!a||!a.length)return e
var o,s=a[1],u=a[2]
if(t&&u in t?o=t[u]:u in b&&(o=b[u]),s in k){e=(0,k[s])(e,o,n,i)}return e}function g(e,t,n){var i=/\{\{\s*(.+?)\s*\}\}/g
return e.replace(i,function(e,i){return t&&i in t?t[i]:i in b?b[i]:(console.log("argument {{"+i+"}} for #"+n+" is undefined."),e)})}function p(e){var n=o(e)
if(n.id){var i=f(n.id,n.args)
if(!i)return void console.warn("#"+n.id+" is undefined.")
if(i[P]){if(0===m(e))e[P]=i[P]
else{for(var r=e.childNodes,a=!1,s=0,u=r.length;s<u;s++)3===r[s].nodeType&&/\S/.test(r[s].nodeValue)&&(a?r[s].nodeValue="":(r[s].nodeValue=i[P],a=!0))
if(!a){var l=t.createTextNode(i[P])
e.insertBefore(l,e.firstChild)}}delete i[P]}for(var c in i)e[c]=i[c]}}function m(e){if(e.children)return e.children.length
if(void 0!==e.childElementCount)return e.childElementCount
for(var t=0,n=0;n<e.childNodes.length;n++)t+=1===e.nodeType?1:0
return t}function w(e){e=e||t.documentElement
for(var n=a(e),i=n.length,r=0;r<i;r++)p(n[r])
p(e)}var b={},y="",P="textContent",S="",k={},C="loading",_=!0
return k.plural=function(e,t,n,i){var r=parseFloat(t)
if(isNaN(r))return e
if(i!=P)return e
k._pluralRules||(k._pluralRules=h(S))
var a="["+k._pluralRules(r)+"]"
return 0===r&&n+"[zero]"in b?e=b[n+"[zero]"][i]:1==r&&n+"[one]"in b?e=b[n+"[one]"][i]:2==r&&n+"[two]"in b?e=b[n+"[two]"][i]:n+a in b?e=b[n+a][i]:n+"[other]"in b&&(e=b[n+"[other]"][i]),e},{get:function(e,t,n){var i=e.lastIndexOf("."),r=P
i>0&&(r=e.substr(i+1),e=e.substring(0,i))
var a
n&&(a={},a[r]=n)
var o=f(e,t,a)
return o&&r in o?o[r]:"{{"+e+"}}"},getData:function(){return b},getText:function(){return y},getLanguage:function(){return S},setLanguage:function(e,t){c(e,function(){t&&t()})},getDirection:function(){var e=["ar","he","fa","ps","ur"],t=S.split("-",1)[0]
return e.indexOf(t)>=0?"rtl":"ltr"},translate:w,getReadyState:function(){return C},ready:function(n){n&&("complete"==C||"interactive"==C?e.setTimeout(function(){n()}):t.addEventListener&&t.addEventListener("localized",function e(){t.removeEventListener("localized",e),n()}))}}}(window,document)},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultAnnotationLayerFactory=t.AnnotationLayerBuilder=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(1),o=n(0),s=n(5),u=function(){function e(t){var n=t.pageDiv,r=t.pdfPage,a=t.linkService,s=t.downloadManager,u=t.renderInteractiveForms,l=void 0!==u&&u,c=t.l10n,d=void 0===c?o.NullL10n:c
i(this,e),this.pageDiv=n,this.pdfPage=r,this.linkService=a,this.downloadManager=s,this.renderInteractiveForms=l,this.l10n=d,this.div=null}return r(e,[{key:"render",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"display"
this.pdfPage.getAnnotations({intent:n}).then(function(n){var i={viewport:e.clone({dontFlip:!0}),div:t.div,annotations:n,page:t.pdfPage,renderInteractiveForms:t.renderInteractiveForms,linkService:t.linkService,downloadManager:t.downloadManager}
if(t.div)a.AnnotationLayer.update(i)
else{if(0===n.length)return
t.div=document.createElement("div"),t.div.className="annotationLayer",t.pageDiv.appendChild(t.div),i.div=t.div,a.AnnotationLayer.render(i),t.l10n.translate(t.div)}})}},{key:"hide",value:function(){this.div&&this.div.setAttribute("hidden","true")}}]),e}(),l=function(){function e(){i(this,e)}return r(e,[{key:"createAnnotationLayerBuilder",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.NullL10n
return new u({pageDiv:e,pdfPage:t,renderInteractiveForms:n,linkService:new s.SimpleLinkService,l10n:i})}}]),e}()
t.AnnotationLayerBuilder=u,t.DefaultAnnotationLayerFactory=l},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){var n=document.createElement("a")
if(n.click)n.href=e,n.target="_parent","download"in n&&(n.download=t),(document.body||document.documentElement).appendChild(n),n.click(),n.parentNode.removeChild(n)
else{if(window.top===window&&e.split("#")[0]===window.location.href.split("#")[0]){var i=-1===e.indexOf("?")?"?":"&"
e=e.replace(/#|$/,i+"$&")}window.open(e,"_parent")}}Object.defineProperty(t,"__esModule",{value:!0}),t.DownloadManager=void 0
var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(1),s=function(){function e(){i(this,e)}return a(e,[{key:"downloadUrl",value:function(e,t){(0,o.createValidAbsoluteUrl)(e,"http://example.com")&&r(e+"#pdfjs.action=download",t)}},{key:"downloadData",value:function(e,t,n){if(navigator.msSaveBlob)return navigator.msSaveBlob(new Blob([e],{type:n}),t)
r((0,o.createObjectURL)(e,n,o.PDFJS.disableCreateObjectURL),t)}},{key:"download",value:function(e,t,n){return navigator.msSaveBlob?void(navigator.msSaveBlob(e,n)||this.downloadUrl(t,n)):o.PDFJS.disableCreateObjectURL?void this.downloadUrl(t,n):void r(URL.createObjectURL(e),n)}}]),e}()
t.DownloadManager=s},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.GenericL10n=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()
n(10)
var a=document.webL10n,o=function(){function e(t){i(this,e),this._lang=t,this._ready=new Promise(function(e,n){a.setLanguage(t,function(){e(a)})})}return r(e,[{key:"getDirection",value:function(){return this._ready.then(function(e){return e.getDirection()})}},{key:"get",value:function(e,t,n){return this._ready.then(function(i){return i.get(e,t,n)})}},{key:"translate",value:function(e){return this._ready.then(function(t){return t.translate(e)})}}]),e}()
t.GenericL10n=o},function(e,t,n){"use strict"
function i(e){this.element=e.element,this.document=e.element.ownerDocument,"function"==typeof e.ignoreTarget&&(this.ignoreTarget=e.ignoreTarget),this.onActiveChanged=e.onActiveChanged,this.activate=this.activate.bind(this),this.deactivate=this.deactivate.bind(this),this.toggle=this.toggle.bind(this),this._onmousedown=this._onmousedown.bind(this),this._onmousemove=this._onmousemove.bind(this),this._endPan=this._endPan.bind(this),(this.overlay=document.createElement("div")).className="grab-to-pan-grabbing"}function r(e){return"buttons"in e&&o?!(1&e.buttons):u||l?0===e.which:void 0}Object.defineProperty(t,"__esModule",{value:!0}),i.prototype={CSS_CLASS_GRAB:"grab-to-pan-grab",activate:function(){this.active||(this.active=!0,this.element.addEventListener("mousedown",this._onmousedown,!0),this.element.classList.add(this.CSS_CLASS_GRAB),this.onActiveChanged&&this.onActiveChanged(!0))},deactivate:function(){this.active&&(this.active=!1,this.element.removeEventListener("mousedown",this._onmousedown,!0),this._endPan(),this.element.classList.remove(this.CSS_CLASS_GRAB),this.onActiveChanged&&this.onActiveChanged(!1))},toggle:function(){this.active?this.deactivate():this.activate()},ignoreTarget:function(e){return e[a]("a[href], a[href] *, input, textarea, button, button *, select, option")},_onmousedown:function(e){if(0===e.button&&!this.ignoreTarget(e.target)){if(e.originalTarget)try{e.originalTarget.tagName}catch(e){return}this.scrollLeftStart=this.element.scrollLeft,this.scrollTopStart=this.element.scrollTop,this.clientXStart=e.clientX,this.clientYStart=e.clientY,this.document.addEventListener("mousemove",this._onmousemove,!0),this.document.addEventListener("mouseup",this._endPan,!0),this.element.addEventListener("scroll",this._endPan,!0),e.preventDefault(),e.stopPropagation()
var t=document.activeElement
t&&!t.contains(e.target)&&t.blur()}},_onmousemove:function(e){if(this.element.removeEventListener("scroll",this._endPan,!0),r(e))return void this._endPan()
var t=e.clientX-this.clientXStart,n=e.clientY-this.clientYStart,i=this.scrollTopStart-n,a=this.scrollLeftStart-t
this.element.scrollTo?this.element.scrollTo({top:i,left:a,behavior:"instant"}):(this.element.scrollTop=i,this.element.scrollLeft=a),this.overlay.parentNode||document.body.appendChild(this.overlay)},_endPan:function(){this.element.removeEventListener("scroll",this._endPan,!0),this.document.removeEventListener("mousemove",this._onmousemove,!0),this.document.removeEventListener("mouseup",this._endPan,!0),this.overlay.remove()}}
var a;["webkitM","mozM","msM","oM","m"].some(function(e){var t=e+"atches"
return t in document.documentElement&&(a=t),t+="Selector",t in document.documentElement&&(a=t),a})
var o=!document.documentMode||document.documentMode>9,s=window.chrome,u=s&&(s.webstore||s.app),l=/Apple/.test(navigator.vendor)&&/Version\/([6-9]\d*|[1-5]\d+)/.test(navigator.userAgent)
t.GrabToPan=i},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(){function e(){i(this,e),this._overlays={},this._active=null,this._keyDownBound=this._keyDown.bind(this)}return r(e,[{key:"register",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return new Promise(function(a){var o=void 0
if(!(e&&t&&(o=t.parentNode)))throw new Error("Not enough parameters.")
if(n._overlays[e])throw new Error("The overlay is already registered.")
n._overlays[e]={element:t,container:o,callerCloseMethod:i,canForceClose:r},a()})}},{key:"unregister",value:function(e){var t=this
return new Promise(function(n){if(!t._overlays[e])throw new Error("The overlay does not exist.")
if(t._active===e)throw new Error("The overlay cannot be removed while it is active.")
delete t._overlays[e],n()})}},{key:"open",value:function(e){var t=this
return new Promise(function(n){if(!t._overlays[e])throw new Error("The overlay does not exist.")
if(t._active){if(!t._overlays[e].canForceClose)throw t._active===e?new Error("The overlay is already active."):new Error("Another overlay is currently active.")
t._closeThroughCaller()}t._active=e,t._overlays[t._active].element.classList.remove("hidden"),t._overlays[t._active].container.classList.remove("hidden"),window.addEventListener("keydown",t._keyDownBound),n()})}},{key:"close",value:function(e){var t=this
return new Promise(function(n){if(!t._overlays[e])throw new Error("The overlay does not exist.")
if(!t._active)throw new Error("The overlay is currently not active.")
if(t._active!==e)throw new Error("Another overlay is currently active.")
t._overlays[t._active].container.classList.add("hidden"),t._overlays[t._active].element.classList.add("hidden"),t._active=null,window.removeEventListener("keydown",t._keyDownBound),n()})}},{key:"_keyDown",value:function(e){this._active&&27===e.keyCode&&(this._closeThroughCaller(),e.preventDefault())}},{key:"_closeThroughCaller",value:function(){this._overlays[this._active].callerCloseMethod&&this._overlays[this._active].callerCloseMethod(),this._active&&this.close(this._active)}},{key:"active",get:function(){return this._active}}]),e}()
t.OverlayManager=a},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PasswordPrompt=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(0),o=n(1),s=function(){function e(t,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.NullL10n
i(this,e),this.overlayName=t.overlayName,this.container=t.container,this.label=t.label,this.input=t.input,this.submitButton=t.submitButton,this.cancelButton=t.cancelButton,this.overlayManager=n,this.l10n=o,this.updateCallback=null,this.reason=null,this.submitButton.addEventListener("click",this.verify.bind(this)),this.cancelButton.addEventListener("click",this.close.bind(this)),this.input.addEventListener("keydown",function(e){13===e.keyCode&&r.verify()}),this.overlayManager.register(this.overlayName,this.container,this.close.bind(this),!0)}return r(e,[{key:"open",value:function(){var e=this
this.overlayManager.open(this.overlayName).then(function(){e.input.focus()
var t=void 0
t=e.reason===o.PasswordResponses.INCORRECT_PASSWORD?e.l10n.get("password_invalid",null,"Invalid password. Please try again."):e.l10n.get("password_label",null,"Enter the password to open this PDF file."),t.then(function(t){e.label.textContent=t})})}},{key:"close",value:function(){var e=this
this.overlayManager.close(this.overlayName).then(function(){e.input.value=""})}},{key:"verify",value:function(){var e=this.input.value
if(e&&e.length>0)return this.close(),this.updateCallback(e)}},{key:"setUpdateCallback",value:function(e,t){this.updateCallback=e,this.reason=t}}]),e}()
t.PasswordPrompt=s},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFAttachmentViewer=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(1),o=function(){function e(t){var n=t.container,r=t.eventBus,a=t.downloadManager
i(this,e),this.container=n,this.eventBus=r,this.downloadManager=a,this.reset(),this.eventBus.on("fileattachmentannotation",this._appendAttachment.bind(this))}return r(e,[{key:"reset",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
this.attachments=null,this.container.textContent="",e||(this._renderedCapability=(0,a.createPromiseCapability)())}},{key:"_dispatchEvent",value:function(e){this._renderedCapability.resolve(),this.eventBus.dispatch("attachmentsloaded",{source:this,attachmentsCount:e})}},{key:"_bindPdfLink",value:function(e,t,n){if(a.PDFJS.disableCreateObjectURL)throw new Error('bindPdfLink: Unsupported "PDFJS.disableCreateObjectURL" value.')
var i=void 0
e.onclick=function(){i||(i=(0,a.createObjectURL)(t,"application/pdf"))
var e=void 0
return e="?file="+encodeURIComponent(i+"#"+n),window.open(e),!1}}},{key:"_bindLink",value:function(e,t,n){var i=this
e.onclick=function(){return i.downloadManager.downloadData(t,n,""),!1}}},{key:"render",value:function(e){var t=e.attachments,n=e.keepRenderedCapability,i=void 0!==n&&n,r=0
if(this.attachments&&this.reset(!0===i),this.attachments=t||null,!t)return void this._dispatchEvent(r)
var o=Object.keys(t).sort(function(e,t){return e.toLowerCase().localeCompare(t.toLowerCase())})
r=o.length
for(var s=0;s<r;s++){var u=t[o[s]],l=(0,a.removeNullCharacters)((0,a.getFilenameFromUrl)(u.filename)),c=document.createElement("div")
c.className="attachmentsItem"
var d=document.createElement("button")
d.textContent=l,/\.pdf$/i.test(l)&&!a.PDFJS.disableCreateObjectURL?this._bindPdfLink(d,u.content,l):this._bindLink(d,u.content,l),c.appendChild(d),this.container.appendChild(c)}this._dispatchEvent(r)}},{key:"_appendAttachment",value:function(e){var t=this,n=e.id,i=e.filename,r=e.content
this._renderedCapability.promise.then(function(){var e=t.attachments
if(e){for(var a in e)if(n===a)return}else e=Object.create(null)
e[n]={filename:i,content:r},t.render({attachments:e,keepRenderedCapability:!0})})}}]),e}()
t.PDFAttachmentViewer=o},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFDocumentProperties=void 0
var r=function(){function e(e,t){var n=[],i=!0,r=!1,a=void 0
try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(0),s=n(1),u=function(){function e(t,n){var r=t.overlayName,a=t.fields,s=t.container,u=t.closeButton,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.NullL10n
i(this,e),this.overlayName=r,this.fields=a,this.container=s,this.overlayManager=n,this.l10n=l,this._reset(),u&&u.addEventListener("click",this.close.bind(this)),this.overlayManager.register(this.overlayName,this.container,this.close.bind(this))}return a(e,[{key:"open",value:function(){var e=this,t=function(t){Object.defineProperty(e,"fieldData",{value:Object.freeze(t),writable:!1,enumerable:!0,configurable:!0})}
Promise.all([this.overlayManager.open(this.overlayName),this._dataAvailableCapability.promise]).then(function(){if(e.fieldData)return void e._updateUI()
e.pdfDocument.getMetadata().then(function(t){var n=t.info,i=t.metadata
return Promise.all([n,i,e._parseFileSize(e.maybeFileSize),e._parseDate(n.CreationDate),e._parseDate(n.ModDate)])}).then(function(n){var i=r(n,5),a=i[0],s=(i[1],i[2]),u=i[3],l=i[4]
return t({fileName:(0,o.getPDFFileNameFromURL)(e.url),fileSize:s,title:a.Title,author:a.Author,subject:a.Subject,keywords:a.Keywords,creationDate:u,modificationDate:l,creator:a.Creator,producer:a.Producer,version:a.PDFFormatVersion,pageCount:e.pdfDocument.numPages}),e._updateUI(),e.pdfDocument.getDownloadInfo()}).then(function(t){var n=t.length
return e._parseFileSize(n)}).then(function(n){var i=(0,o.cloneObj)(e.fieldData)
i.fileSize=n,t(i),e._updateUI()})})}},{key:"close",value:function(){this.overlayManager.close(this.overlayName)}},{key:"setDocument",value:function(e,t){this.pdfDocument&&(this._reset(),this._updateUI(!0)),e&&(this.pdfDocument=e,this.url=t,this._dataAvailableCapability.resolve())}},{key:"setFileSize",value:function(e){"number"==typeof e&&e>0&&(this.maybeFileSize=e)}},{key:"_reset",value:function(){this.pdfDocument=null,this.url=null,this.maybeFileSize=0,delete this.fieldData,this._dataAvailableCapability=(0,s.createPromiseCapability)()}},{key:"_updateUI",value:function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]||!this.fieldData)for(var e in this.fields)this.fields[e].textContent="-"
else if(this.overlayManager.active===this.overlayName)for(var t in this.fields){var n=this.fieldData[t]
this.fields[t].textContent=n||0===n?n:"-"}}},{key:"_parseFileSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=e/1024
return t?t<1024?this.l10n.get("document_properties_kb",{size_kb:(+t.toPrecision(3)).toLocaleString(),size_b:e.toLocaleString()},"{{size_kb}} KB ({{size_b}} bytes)"):this.l10n.get("document_properties_mb",{size_mb:(+(t/1024).toPrecision(3)).toLocaleString(),size_b:e.toLocaleString()},"{{size_mb}} MB ({{size_b}} bytes)"):Promise.resolve(void 0)}},{key:"_parseDate",value:function(e){if(e){var t=e
"D:"===t.substring(0,2)&&(t=t.substring(2))
var n=parseInt(t.substring(0,4),10),i=parseInt(t.substring(4,6),10)-1,r=parseInt(t.substring(6,8),10),a=parseInt(t.substring(8,10),10),o=parseInt(t.substring(10,12),10),s=parseInt(t.substring(12,14),10),u=t.substring(14,15),l=parseInt(t.substring(15,17),10),c=parseInt(t.substring(18,20),10)
"-"===u?(a+=l,o+=c):"+"===u&&(a-=l,o-=c)
var d=new Date(Date.UTC(n,i,r,a,o,s)),h=d.toLocaleDateString(),f=d.toLocaleTimeString()
return this.l10n.get("document_properties_date_string",{date:h,time:f},"{{date}}, {{time}}")}}}]),e}()
t.PDFDocumentProperties=u},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFFindBar=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(7),o=n(0),s=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.NullL10n
if(i(this,e),this.opened=!1,this.bar=t.bar||null,this.toggleButton=t.toggleButton||null,this.findField=t.findField||null,this.highlightAll=t.highlightAllCheckbox||null,this.caseSensitive=t.caseSensitiveCheckbox||null,this.findMsg=t.findMsg||null,this.findResultsCount=t.findResultsCount||null,this.findStatusIcon=t.findStatusIcon||null,this.findPreviousButton=t.findPreviousButton||null,this.findNextButton=t.findNextButton||null,this.findController=t.findController||null,this.eventBus=t.eventBus,this.l10n=r,null===this.findController)throw new Error("PDFFindBar cannot be used without a PDFFindController instance.")
this.toggleButton.addEventListener("click",function(){n.toggle()}),this.findField.addEventListener("input",function(){n.dispatchEvent("")}),this.bar.addEventListener("keydown",function(e){switch(e.keyCode){case 13:e.target===n.findField&&n.dispatchEvent("again",e.shiftKey)
break
case 27:n.close()}}),this.findPreviousButton.addEventListener("click",function(){n.dispatchEvent("again",!0)}),this.findNextButton.addEventListener("click",function(){n.dispatchEvent("again",!1)}),this.highlightAll.addEventListener("click",function(){n.dispatchEvent("highlightallchange")}),this.caseSensitive.addEventListener("click",function(){n.dispatchEvent("casesensitivitychange")}),this.eventBus.on("resize",this._adjustWidth.bind(this))}return r(e,[{key:"reset",value:function(){this.updateUIState()}},{key:"dispatchEvent",value:function(e,t){this.eventBus.dispatch("find",{source:this,type:e,query:this.findField.value,caseSensitive:this.caseSensitive.checked,phraseSearch:!0,highlightAll:this.highlightAll.checked,findPrevious:t})}},{key:"updateUIState",value:function(e,t,n){var i=this,r=!1,o="",s=""
switch(e){case a.FindState.FOUND:break
case a.FindState.PENDING:s="pending"
break
case a.FindState.NOT_FOUND:o=this.l10n.get("find_not_found",null,"Phrase not found"),r=!0
break
case a.FindState.WRAPPED:o=t?this.l10n.get("find_reached_top",null,"Reached top of document, continued from bottom"):this.l10n.get("find_reached_bottom",null,"Reached end of document, continued from top")}r?this.findField.classList.add("notFound"):this.findField.classList.remove("notFound"),this.findField.setAttribute("data-status",s),Promise.resolve(o).then(function(e){i.findMsg.textContent=e,i._adjustWidth()}),this.updateResultsCount(n)}},{key:"updateResultsCount",value:function(e){this.findResultsCount&&(e?(this.findResultsCount.textContent=e.toLocaleString(),this.findResultsCount.classList.remove("hidden")):(this.findResultsCount.classList.add("hidden"),this.findResultsCount.textContent=""),this._adjustWidth())}},{key:"open",value:function(){this.opened||(this.opened=!0,this.toggleButton.classList.add("toggled"),this.bar.classList.remove("hidden")),this.findField.select(),this.findField.focus(),this._adjustWidth()}},{key:"close",value:function(){this.opened&&(this.opened=!1,this.toggleButton.classList.remove("toggled"),this.bar.classList.add("hidden"),this.findController.active=!1)}},{key:"toggle",value:function(){this.opened?this.close():this.open()}},{key:"_adjustWidth",value:function(){if(this.opened){this.bar.classList.remove("wrapContainers")
this.bar.clientHeight>this.bar.firstElementChild.clientHeight&&this.bar.classList.add("wrapContainers")}}}]),e}()
t.PDFFindBar=s},function(e,t,n){"use strict"
function i(e){this.linkService=e.linkService,this.eventBus=e.eventBus||(0,r.getGlobalEventBus)(),this.initialized=!1,this.initialDestination=null,this.initialBookmark=null}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFHistory=void 0
var r=n(2)
i.prototype={initialize:function(e){function t(){a.previousHash=window.location.hash.slice(1),a._pushToHistory({hash:a.previousHash},!1,!0),a._updatePreviousBookmark()}function n(e,t){function n(){window.removeEventListener("popstate",n),window.addEventListener("popstate",i),a._pushToHistory(e,!1,!0),history.forward()}function i(){window.removeEventListener("popstate",i),a.allowHashChange=!0,a.historyUnlocked=!0,t()}a.historyUnlocked=!1,a.allowHashChange=!1,window.addEventListener("popstate",n),history.back()}function i(){var e=a._getPreviousParams(null,!0)
if(e){var t=!a.current.dest&&a.current.hash!==a.previousHash
a._pushToHistory(e,!1,t),a._updatePreviousBookmark()}window.removeEventListener("beforeunload",i)}this.initialized=!0,this.reInitialized=!1,this.allowHashChange=!0,this.historyUnlocked=!0,this.isViewerInPresentationMode=!1,this.previousHash=window.location.hash.substring(1),this.currentBookmark="",this.currentPage=0,this.updatePreviousBookmark=!1,this.previousBookmark="",this.previousPage=0,this.nextHashParam="",this.fingerprint=e,this.currentUid=this.uid=0,this.current={}
var r=window.history.state
this._isStateObjectDefined(r)?(r.target.dest?this.initialDestination=r.target.dest:this.initialBookmark=r.target.hash,this.currentUid=r.uid,this.uid=r.uid+1,this.current=r.target):(r&&r.fingerprint&&this.fingerprint!==r.fingerprint&&(this.reInitialized=!0),this._pushOrReplaceState({fingerprint:this.fingerprint},!0))
var a=this
window.addEventListener("popstate",function(e){if(a.historyUnlocked){if(e.state)return void a._goTo(e.state)
if(0===a.uid){n(a.previousHash&&a.currentBookmark&&a.previousHash!==a.currentBookmark?{hash:a.currentBookmark,page:a.currentPage}:{page:1},function(){t()})}else t()}}),window.addEventListener("beforeunload",i),window.addEventListener("pageshow",function(e){window.addEventListener("beforeunload",i)}),a.eventBus.on("presentationmodechanged",function(e){a.isViewerInPresentationMode=e.active})},clearHistoryState:function(){this._pushOrReplaceState(null,!0)},_isStateObjectDefined:function(e){return!!(e&&e.uid>=0&&e.fingerprint&&this.fingerprint===e.fingerprint&&e.target&&e.target.hash)},_pushOrReplaceState:function(e,t){t?window.history.replaceState(e,"",document.URL):window.history.pushState(e,"",document.URL)},get isHashChangeUnlocked(){return!this.initialized||this.allowHashChange},_updatePreviousBookmark:function(){this.updatePreviousBookmark&&this.currentBookmark&&this.currentPage&&(this.previousBookmark=this.currentBookmark,this.previousPage=this.currentPage,this.updatePreviousBookmark=!1)},updateCurrentBookmark:function(e,t){this.initialized&&(this.currentBookmark=e.substring(1),this.currentPage=0|t,this._updatePreviousBookmark())},updateNextHashParam:function(e){this.initialized&&(this.nextHashParam=e)},push:function(e,t){if(this.initialized&&this.historyUnlocked){if(e.dest&&!e.hash&&(e.hash=this.current.hash&&this.current.dest&&this.current.dest===e.dest?this.current.hash:this.linkService.getDestinationHash(e.dest).split("#")[1]),e.page&&(e.page|=0),t){var n=window.history.state.target
return n||(this._pushToHistory(e,!1),this.previousHash=window.location.hash.substring(1)),this.updatePreviousBookmark=!this.nextHashParam,void(n&&this._updatePreviousBookmark())}if(this.nextHashParam){if(this.nextHashParam===e.hash)return this.nextHashParam=null,void(this.updatePreviousBookmark=!0)
this.nextHashParam=null}e.hash?this.current.hash?this.current.hash!==e.hash?this._pushToHistory(e,!0):(!this.current.page&&e.page&&this._pushToHistory(e,!1,!0),this.updatePreviousBookmark=!0):this._pushToHistory(e,!0):this.current.page&&e.page&&this.current.page!==e.page&&this._pushToHistory(e,!0)}},_getPreviousParams:function(e,t){if(!this.currentBookmark||!this.currentPage)return null
if(this.updatePreviousBookmark&&(this.updatePreviousBookmark=!1),this.uid>0&&(!this.previousBookmark||!this.previousPage))return null
if(!this.current.dest&&!e||t){if(this.previousBookmark===this.currentBookmark)return null}else{if(!this.current.page&&!e)return null
if(this.previousPage===this.currentPage)return null}var n={hash:this.currentBookmark,page:this.currentPage}
return this.isViewerInPresentationMode&&(n.hash=null),n},_stateObj:function(e){return{fingerprint:this.fingerprint,uid:this.uid,target:e}},_pushToHistory:function(e,t,n){if(this.initialized){if(!e.hash&&e.page&&(e.hash="page="+e.page),t&&!n){var i=this._getPreviousParams()
if(i){var r=!this.current.dest&&this.current.hash!==this.previousHash
this._pushToHistory(i,!1,r)}}this._pushOrReplaceState(this._stateObj(e),n||0===this.uid),this.currentUid=this.uid++,this.current=e,this.updatePreviousBookmark=!0}},_goTo:function(e){if(this.initialized&&this.historyUnlocked&&this._isStateObjectDefined(e)){if(!this.reInitialized&&e.uid<this.currentUid){var t=this._getPreviousParams(!0)
if(t)return this._pushToHistory(this.current,!1),this._pushToHistory(t,!1),this.currentUid=e.uid,void window.history.back()}this.historyUnlocked=!1,e.target.dest?this.linkService.navigateTo(e.target.dest):this.linkService.setHash(e.target.hash),this.currentUid=e.uid,e.uid>this.uid&&(this.uid=e.uid),this.current=e.target,this.updatePreviousBookmark=!0
var n=window.location.hash.substring(1)
this.previousHash!==n&&(this.allowHashChange=!1),this.previousHash=n,this.historyUnlocked=!0}},back:function(){this.go(-1)},forward:function(){this.go(1)},go:function(e){if(this.initialized&&this.historyUnlocked){var t=window.history.state;-1===e&&t&&t.uid>0?window.history.back():1===e&&t&&t.uid<this.uid-1&&window.history.forward()}}},t.PDFHistory=i},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFOutlineViewer=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(1),o=function(){function e(t){var n=t.container,r=t.linkService,a=t.eventBus
i(this,e),this.container=n,this.linkService=r,this.eventBus=a,this.reset()}return r(e,[{key:"reset",value:function(){this.outline=null,this.lastToggleIsShow=!0,this.container.textContent="",this.container.classList.remove("outlineWithDeepNesting")}},{key:"_dispatchEvent",value:function(e){this.eventBus.dispatch("outlineloaded",{source:this,outlineCount:e})}},{key:"_bindLink",value:function(e,t){var n=this
if(t.url)return void(0,a.addLinkAttributes)(e,{url:t.url,target:t.newWindow?a.PDFJS.LinkTarget.BLANK:void 0})
var i=t.dest
e.href=this.linkService.getDestinationHash(i),e.onclick=function(){return i&&n.linkService.navigateTo(i),!1}}},{key:"_setStyles",value:function(e,t){var n=""
t.bold&&(n+="font-weight: bold;"),t.italic&&(n+="font-style: italic;"),n&&e.setAttribute("style",n)}},{key:"_addToggleButton",value:function(e){var t=this,n=document.createElement("div")
n.className="outlineItemToggler",n.onclick=function(i){if(i.stopPropagation(),n.classList.toggle("outlineItemsHidden"),i.shiftKey){var r=!n.classList.contains("outlineItemsHidden")
t._toggleOutlineItem(e,r)}},e.insertBefore(n,e.firstChild)}},{key:"_toggleOutlineItem",value:function(e,t){this.lastToggleIsShow=t
for(var n=e.querySelectorAll(".outlineItemToggler"),i=0,r=n.length;i<r;++i)n[i].classList[t?"remove":"add"]("outlineItemsHidden")}},{key:"toggleOutlineTree",value:function(){this.outline&&this._toggleOutlineItem(this.container,!this.lastToggleIsShow)}},{key:"render",value:function(e){var t=e.outline,n=0
if(this.outline&&this.reset(),this.outline=t||null,!t)return void this._dispatchEvent(n)
for(var i=document.createDocumentFragment(),r=[{parent:i,items:this.outline}],o=!1;r.length>0;)for(var s=r.shift(),u=0,l=s.items.length;u<l;u++){var c=s.items[u],d=document.createElement("div")
d.className="outlineItem"
var h=document.createElement("a")
if(this._bindLink(h,c),this._setStyles(h,c),h.textContent=(0,a.removeNullCharacters)(c.title)||"–",d.appendChild(h),c.items.length>0){o=!0,this._addToggleButton(d)
var f=document.createElement("div")
f.className="outlineItems",d.appendChild(f),r.push({parent:f,items:c.items})}s.parent.appendChild(d),n++}o&&this.container.classList.add("outlineWithDeepNesting"),this.container.appendChild(i),this._dispatchEvent(n)}}]),e}()
t.PDFOutlineViewer=o},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFPageView=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(0),o=n(1),s=n(2),u=n(3),l=function(){function e(t){i(this,e)
var n=t.container,r=t.defaultViewport
this.id=t.id,this.renderingId="page"+this.id,this.pdfPage=null,this.pageLabel=null,this.rotation=0,this.scale=t.scale||a.DEFAULT_SCALE,this.viewport=r,this.pdfPageRotate=r.rotation,this.hasRestrictedScaling=!1,this.enhanceTextSelection=t.enhanceTextSelection||!1,this.renderInteractiveForms=t.renderInteractiveForms||!1,this.eventBus=t.eventBus||(0,s.getGlobalEventBus)(),this.renderingQueue=t.renderingQueue,this.textLayerFactory=t.textLayerFactory,this.annotationLayerFactory=t.annotationLayerFactory,this.renderer=t.renderer||a.RendererType.CANVAS,this.l10n=t.l10n||a.NullL10n,this.paintTask=null,this.paintedViewportMap=new WeakMap,this.renderingState=u.RenderingStates.INITIAL,this.resume=null,this.error=null,this.onBeforeDraw=null,this.onAfterDraw=null,this.annotationLayer=null,this.textLayer=null,this.zoomLayer=null
var o=document.createElement("div")
o.className="page",o.style.width=Math.floor(this.viewport.width)+"px",o.style.height=Math.floor(this.viewport.height)+"px",o.setAttribute("data-page-number",this.id),this.div=o,n.appendChild(o)}return r(e,[{key:"setPdfPage",value:function(e){this.pdfPage=e,this.pdfPageRotate=e.rotate
var t=(this.rotation+this.pdfPageRotate)%360
this.viewport=e.getViewport(this.scale*a.CSS_UNITS,t),this.stats=e.stats,this.reset()}},{key:"destroy",value:function(){this.reset(),this.pdfPage&&(this.pdfPage.cleanup(),this.pdfPage=null)}},{key:"_resetZoomLayer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(this.zoomLayer){var t=this.zoomLayer.firstChild
this.paintedViewportMap.delete(t),t.width=0,t.height=0,e&&this.zoomLayer.remove(),this.zoomLayer=null}}},{key:"reset",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.cancelRendering()
var n=this.div
n.style.width=Math.floor(this.viewport.width)+"px",n.style.height=Math.floor(this.viewport.height)+"px"
for(var i=n.childNodes,r=e&&this.zoomLayer||null,a=t&&this.annotationLayer&&this.annotationLayer.div||null,o=i.length-1;o>=0;o--){var s=i[o]
r!==s&&a!==s&&n.removeChild(s)}n.removeAttribute("data-loaded"),a?this.annotationLayer.hide():this.annotationLayer=null,r||(this.canvas&&(this.paintedViewportMap.delete(this.canvas),this.canvas.width=0,this.canvas.height=0,delete this.canvas),this._resetZoomLayer()),this.svg&&(this.paintedViewportMap.delete(this.svg),delete this.svg),this.loadingIconDiv=document.createElement("div"),this.loadingIconDiv.className="loadingIcon",n.appendChild(this.loadingIconDiv)}},{key:"update",value:function(e,t){this.scale=e||this.scale,void 0!==t&&(this.rotation=t)
var n=(this.rotation+this.pdfPageRotate)%360
if(this.viewport=this.viewport.clone({scale:this.scale*a.CSS_UNITS,rotation:n}),this.svg)return this.cssTransform(this.svg,!0),void this.eventBus.dispatch("pagerendered",{source:this,pageNumber:this.id,cssTransform:!0})
var i=!1
if(this.canvas&&o.PDFJS.maxCanvasPixels>0){var r=this.outputScale;(Math.floor(this.viewport.width)*r.sx|0)*(Math.floor(this.viewport.height)*r.sy|0)>o.PDFJS.maxCanvasPixels&&(i=!0)}if(this.canvas){if(o.PDFJS.useOnlyCssZoom||this.hasRestrictedScaling&&i)return this.cssTransform(this.canvas,!0),void this.eventBus.dispatch("pagerendered",{source:this,pageNumber:this.id,cssTransform:!0})
this.zoomLayer||this.canvas.hasAttribute("hidden")||(this.zoomLayer=this.canvas.parentNode,this.zoomLayer.style.position="absolute")}this.zoomLayer&&this.cssTransform(this.zoomLayer.firstChild),this.reset(!0,!0)}},{key:"cancelRendering",value:function(){this.paintTask&&(this.paintTask.cancel(),this.paintTask=null),this.renderingState=u.RenderingStates.INITIAL,this.resume=null,this.textLayer&&(this.textLayer.cancel(),this.textLayer=null)}},{key:"cssTransform",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.viewport.width,i=this.viewport.height,r=this.div
e.style.width=e.parentNode.style.width=r.style.width=Math.floor(n)+"px",e.style.height=e.parentNode.style.height=r.style.height=Math.floor(i)+"px"
var a=this.viewport.rotation-this.paintedViewportMap.get(e).rotation,s=Math.abs(a),u=1,l=1
90!==s&&270!==s||(u=i/n,l=n/i)
var c="rotate("+a+"deg) scale("+u+","+l+")"
if(o.CustomStyle.setProp("transform",e,c),this.textLayer){var d=this.textLayer.viewport,h=this.viewport.rotation-d.rotation,f=Math.abs(h),v=n/d.width
90!==f&&270!==f||(v=n/d.height)
var g=this.textLayer.textLayerDiv,p=void 0,m=void 0
switch(f){case 0:p=m=0
break
case 90:p=0,m="-"+g.style.height
break
case 180:p="-"+g.style.width,m="-"+g.style.height
break
case 270:p="-"+g.style.width,m=0
break
default:console.error("Bad rotation value.")}o.CustomStyle.setProp("transform",g,"rotate("+f+"deg) scale("+v+", "+v+") translate("+p+", "+m+")"),o.CustomStyle.setProp("transformOrigin",g,"0% 0%")}t&&this.annotationLayer&&this.annotationLayer.render(this.viewport,"display")}},{key:"getPagePoint",value:function(e,t){return this.viewport.convertToPdfPoint(e,t)}},{key:"draw",value:function(){var e=this
if(this.renderingState!==u.RenderingStates.INITIAL&&(console.error("Must be in new state before drawing"),this.reset()),!this.pdfPage)return this.renderingState=u.RenderingStates.FINISHED,Promise.reject(new Error("Page is not loaded"))
this.renderingState=u.RenderingStates.RUNNING
var t=this.pdfPage,n=this.div,i=document.createElement("div")
i.style.width=n.style.width,i.style.height=n.style.height,i.classList.add("canvasWrapper"),this.annotationLayer&&this.annotationLayer.div?n.insertBefore(i,this.annotationLayer.div):n.appendChild(i)
var r=null
if(this.textLayerFactory){var s=document.createElement("div")
s.className="textLayer",s.style.width=i.style.width,s.style.height=i.style.height,this.annotationLayer&&this.annotationLayer.div?n.insertBefore(s,this.annotationLayer.div):n.appendChild(s),r=this.textLayerFactory.createTextLayerBuilder(s,this.id-1,this.viewport,this.enhanceTextSelection)}this.textLayer=r
var l=null
this.renderingQueue&&(l=function(t){if(!e.renderingQueue.isHighestPriority(e))return e.renderingState=u.RenderingStates.PAUSED,void(e.resume=function(){e.renderingState=u.RenderingStates.RUNNING,t()})
t()})
var c=function(i){return d===e.paintTask&&(e.paintTask=null),"cancelled"===i||i instanceof o.RenderingCancelledException?(e.error=null,Promise.resolve(void 0)):(e.renderingState=u.RenderingStates.FINISHED,e.loadingIconDiv&&(n.removeChild(e.loadingIconDiv),delete e.loadingIconDiv),e._resetZoomLayer(!0),e.error=i,e.stats=t.stats,e.onAfterDraw&&e.onAfterDraw(),e.eventBus.dispatch("pagerendered",{source:e,pageNumber:e.id,cssTransform:!1}),i?Promise.reject(i):Promise.resolve(void 0))},d=this.renderer===a.RendererType.SVG?this.paintOnSvg(i):this.paintOnCanvas(i)
d.onRenderContinue=l,this.paintTask=d
var h=d.promise.then(function(){return c(null).then(function(){if(r){var e=t.streamTextContent({normalizeWhitespace:!0})
r.setTextContentStream(e),r.render()}})},function(e){return c(e)})
return this.annotationLayerFactory&&(this.annotationLayer||(this.annotationLayer=this.annotationLayerFactory.createAnnotationLayerBuilder(n,t,this.renderInteractiveForms,this.l10n)),this.annotationLayer.render(this.viewport,"display")),n.setAttribute("data-loaded",!0),this.onBeforeDraw&&this.onBeforeDraw(),h}},{key:"paintOnCanvas",value:function(e){var t=(0,o.createPromiseCapability)(),n={promise:t.promise,onRenderContinue:function(e){e()},cancel:function(){w.cancel()}},i=this.viewport,r=document.createElement("canvas")
r.id=this.renderingId,r.setAttribute("hidden","hidden")
var s=!0,u=function(){s&&(r.removeAttribute("hidden"),s=!1)}
e.appendChild(r),this.canvas=r,r.mozOpaque=!0
var l=r.getContext("2d",{alpha:!1}),c=(0,a.getOutputScale)(l)
if(this.outputScale=c,o.PDFJS.useOnlyCssZoom){var d=i.clone({scale:a.CSS_UNITS})
c.sx*=d.width/i.width,c.sy*=d.height/i.height,c.scaled=!0}if(o.PDFJS.maxCanvasPixels>0){var h=i.width*i.height,f=Math.sqrt(o.PDFJS.maxCanvasPixels/h)
c.sx>f||c.sy>f?(c.sx=f,c.sy=f,c.scaled=!0,this.hasRestrictedScaling=!0):this.hasRestrictedScaling=!1}var v=(0,a.approximateFraction)(c.sx),g=(0,a.approximateFraction)(c.sy)
r.width=(0,a.roundToDivide)(i.width*c.sx,v[0]),r.height=(0,a.roundToDivide)(i.height*c.sy,g[0]),r.style.width=(0,a.roundToDivide)(i.width,v[1])+"px",r.style.height=(0,a.roundToDivide)(i.height,g[1])+"px",this.paintedViewportMap.set(r,i)
var p=c.scaled?[c.sx,0,0,c.sy,0,0]:null,m={canvasContext:l,transform:p,viewport:this.viewport,renderInteractiveForms:this.renderInteractiveForms},w=this.pdfPage.render(m)
return w.onContinue=function(e){u(),n.onRenderContinue?n.onRenderContinue(e):e()},w.promise.then(function(){u(),t.resolve(void 0)},function(e){u(),t.reject(e)}),n}},{key:"paintOnSvg",value:function(e){var t=this,n=!1,i=function(){if(n)throw o.PDFJS.pdfjsNext?new o.RenderingCancelledException("Rendering cancelled, page "+t.id,"svg"):"cancelled"},r=this.pdfPage,s=this.viewport.clone({scale:a.CSS_UNITS})
return{promise:r.getOperatorList().then(function(n){return i(),new o.SVGGraphics(r.commonObjs,r.objs).getSVG(n,s).then(function(n){i(),t.svg=n,t.paintedViewportMap.set(n,s),n.style.width=e.style.width,n.style.height=e.style.height,t.renderingState=u.RenderingStates.FINISHED,e.appendChild(n)})}),onRenderContinue:function(e){e()},cancel:function(){n=!0}}}},{key:"setPageLabel",value:function(e){this.pageLabel="string"==typeof e?e:null,null!==this.pageLabel?this.div.setAttribute("data-page-label",this.pageLabel):this.div.removeAttribute("data-page-label")}},{key:"width",get:function(){return this.viewport.width}},{key:"height",get:function(){return this.viewport.height}}]),e}()
t.PDFPageView=l},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFPresentationMode=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(0),o=Math.PI/6,s=function(){function e(t){var n=this,r=t.container,a=t.viewer,o=void 0===a?null:a,s=t.pdfViewer,u=t.eventBus,l=t.contextMenuItems,c=void 0===l?null:l
i(this,e),this.container=r,this.viewer=o||r.firstElementChild,this.pdfViewer=s,this.eventBus=u,this.active=!1,this.args=null,this.contextMenuOpen=!1,this.mouseScrollTimeStamp=0,this.mouseScrollDelta=0,this.touchSwipeState=null,c&&(c.contextFirstPage.addEventListener("click",function(){n.contextMenuOpen=!1,n.eventBus.dispatch("firstpage")}),c.contextLastPage.addEventListener("click",function(){n.contextMenuOpen=!1,n.eventBus.dispatch("lastpage")}),c.contextPageRotateCw.addEventListener("click",function(){n.contextMenuOpen=!1,n.eventBus.dispatch("rotatecw")}),c.contextPageRotateCcw.addEventListener("click",function(){n.contextMenuOpen=!1,n.eventBus.dispatch("rotateccw")}))}return r(e,[{key:"request",value:function(){if(this.switchInProgress||this.active||!this.viewer.hasChildNodes())return!1
if(this._addFullscreenChangeListeners(),this._setSwitchInProgress(),this._notifyStateChange(),this.container.requestFullscreen)this.container.requestFullscreen()
else if(this.container.mozRequestFullScreen)this.container.mozRequestFullScreen()
else if(this.container.webkitRequestFullscreen)this.container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
else{if(!this.container.msRequestFullscreen)return!1
this.container.msRequestFullscreen()}return this.args={page:this.pdfViewer.currentPageNumber,previousScale:this.pdfViewer.currentScaleValue},!0}},{key:"_mouseWheel",value:function(e){if(this.active){e.preventDefault()
var t=(0,a.normalizeWheelEventDelta)(e),n=(new Date).getTime(),i=this.mouseScrollTimeStamp
if(!(n>i&&n-i<50)&&((this.mouseScrollDelta>0&&t<0||this.mouseScrollDelta<0&&t>0)&&this._resetMouseScrollState(),this.mouseScrollDelta+=t,Math.abs(this.mouseScrollDelta)>=.1)){var r=this.mouseScrollDelta
this._resetMouseScrollState();(r>0?this._goToPreviousPage():this._goToNextPage())&&(this.mouseScrollTimeStamp=n)}}}},{key:"_goToPreviousPage",value:function(){var e=this.pdfViewer.currentPageNumber
return!(e<=1)&&(this.pdfViewer.currentPageNumber=e-1,!0)}},{key:"_goToNextPage",value:function(){var e=this.pdfViewer.currentPageNumber
return!(e>=this.pdfViewer.pagesCount)&&(this.pdfViewer.currentPageNumber=e+1,!0)}},{key:"_notifyStateChange",value:function(){this.eventBus.dispatch("presentationmodechanged",{source:this,active:this.active,switchInProgress:!!this.switchInProgress})}},{key:"_setSwitchInProgress",value:function(){var e=this
this.switchInProgress&&clearTimeout(this.switchInProgress),this.switchInProgress=setTimeout(function(){e._removeFullscreenChangeListeners(),delete e.switchInProgress,e._notifyStateChange()},1500)}},{key:"_resetSwitchInProgress",value:function(){this.switchInProgress&&(clearTimeout(this.switchInProgress),delete this.switchInProgress)}},{key:"_enter",value:function(){var e=this
this.active=!0,this._resetSwitchInProgress(),this._notifyStateChange(),this.container.classList.add("pdfPresentationMode"),setTimeout(function(){e.pdfViewer.currentPageNumber=e.args.page,e.pdfViewer.currentScaleValue="page-fit"},0),this._addWindowListeners(),this._showControls(),this.contextMenuOpen=!1,this.container.setAttribute("contextmenu","viewerContextMenu"),window.getSelection().removeAllRanges()}},{key:"_exit",value:function(){var e=this,t=this.pdfViewer.currentPageNumber
this.container.classList.remove("pdfPresentationMode"),setTimeout(function(){e.active=!1,e._removeFullscreenChangeListeners(),e._notifyStateChange(),e.pdfViewer.currentScaleValue=e.args.previousScale,e.pdfViewer.currentPageNumber=t,e.args=null},0),this._removeWindowListeners(),this._hideControls(),this._resetMouseScrollState(),this.container.removeAttribute("contextmenu"),this.contextMenuOpen=!1}},{key:"_mouseDown",value:function(e){if(this.contextMenuOpen)return this.contextMenuOpen=!1,void e.preventDefault()
if(0===e.button){e.target.href&&e.target.classList.contains("internalLink")||(e.preventDefault(),e.shiftKey?this._goToPreviousPage():this._goToNextPage())}}},{key:"_contextMenu",value:function(){this.contextMenuOpen=!0}},{key:"_showControls",value:function(){var e=this
this.controlsTimeout?clearTimeout(this.controlsTimeout):this.container.classList.add("pdfPresentationModeControls"),this.controlsTimeout=setTimeout(function(){e.container.classList.remove("pdfPresentationModeControls"),delete e.controlsTimeout},3e3)}},{key:"_hideControls",value:function(){this.controlsTimeout&&(clearTimeout(this.controlsTimeout),this.container.classList.remove("pdfPresentationModeControls"),delete this.controlsTimeout)}},{key:"_resetMouseScrollState",value:function(){this.mouseScrollTimeStamp=0,this.mouseScrollDelta=0}},{key:"_touchSwipe",value:function(e){if(this.active){if(e.touches.length>1)return void(this.touchSwipeState=null)
switch(e.type){case"touchstart":this.touchSwipeState={startX:e.touches[0].pageX,startY:e.touches[0].pageY,endX:e.touches[0].pageX,endY:e.touches[0].pageY}
break
case"touchmove":if(null===this.touchSwipeState)return
this.touchSwipeState.endX=e.touches[0].pageX,this.touchSwipeState.endY=e.touches[0].pageY,e.preventDefault()
break
case"touchend":if(null===this.touchSwipeState)return
var t=0,n=this.touchSwipeState.endX-this.touchSwipeState.startX,i=this.touchSwipeState.endY-this.touchSwipeState.startY,r=Math.abs(Math.atan2(i,n))
Math.abs(n)>50&&(r<=o||r>=Math.PI-o)?t=n:Math.abs(i)>50&&Math.abs(r-Math.PI/2)<=o&&(t=i),t>0?this._goToPreviousPage():t<0&&this._goToNextPage()}}}},{key:"_addWindowListeners",value:function(){this.showControlsBind=this._showControls.bind(this),this.mouseDownBind=this._mouseDown.bind(this),this.mouseWheelBind=this._mouseWheel.bind(this),this.resetMouseScrollStateBind=this._resetMouseScrollState.bind(this),this.contextMenuBind=this._contextMenu.bind(this),this.touchSwipeBind=this._touchSwipe.bind(this),window.addEventListener("mousemove",this.showControlsBind),window.addEventListener("mousedown",this.mouseDownBind),window.addEventListener("wheel",this.mouseWheelBind),window.addEventListener("keydown",this.resetMouseScrollStateBind),window.addEventListener("contextmenu",this.contextMenuBind),window.addEventListener("touchstart",this.touchSwipeBind),window.addEventListener("touchmove",this.touchSwipeBind),window.addEventListener("touchend",this.touchSwipeBind)}},{key:"_removeWindowListeners",value:function(){window.removeEventListener("mousemove",this.showControlsBind),window.removeEventListener("mousedown",this.mouseDownBind),window.removeEventListener("wheel",this.mouseWheelBind),window.removeEventListener("keydown",this.resetMouseScrollStateBind),window.removeEventListener("contextmenu",this.contextMenuBind),window.removeEventListener("touchstart",this.touchSwipeBind),window.removeEventListener("touchmove",this.touchSwipeBind),window.removeEventListener("touchend",this.touchSwipeBind),delete this.showControlsBind,delete this.mouseDownBind,delete this.mouseWheelBind,delete this.resetMouseScrollStateBind,delete this.contextMenuBind,delete this.touchSwipeBind}},{key:"_fullscreenChange",value:function(){this.isFullscreen?this._enter():this._exit()}},{key:"_addFullscreenChangeListeners",value:function(){this.fullscreenChangeBind=this._fullscreenChange.bind(this),window.addEventListener("fullscreenchange",this.fullscreenChangeBind),window.addEventListener("mozfullscreenchange",this.fullscreenChangeBind),window.addEventListener("webkitfullscreenchange",this.fullscreenChangeBind),window.addEventListener("MSFullscreenChange",this.fullscreenChangeBind)}},{key:"_removeFullscreenChangeListeners",value:function(){window.removeEventListener("fullscreenchange",this.fullscreenChangeBind),window.removeEventListener("mozfullscreenchange",this.fullscreenChangeBind),window.removeEventListener("webkitfullscreenchange",this.fullscreenChangeBind),window.removeEventListener("MSFullscreenChange",this.fullscreenChangeBind),delete this.fullscreenChangeBind}},{key:"isFullscreen",get:function(){return!!(document.fullscreenElement||document.mozFullScreen||document.webkitIsFullScreen||document.msFullscreenElement)}}]),e}()
t.PDFPresentationMode=s},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFSidebar=t.SidebarView=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(0),o=n(3),s={NONE:0,THUMBS:1,OUTLINE:2,ATTACHMENTS:3},u=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.NullL10n
i(this,e),this.isOpen=!1,this.active=s.THUMBS,this.isInitialViewSet=!1,this.onToggled=null,this.pdfViewer=t.pdfViewer,this.pdfThumbnailViewer=t.pdfThumbnailViewer,this.pdfOutlineViewer=t.pdfOutlineViewer,this.mainContainer=t.mainContainer,this.outerContainer=t.outerContainer,this.eventBus=t.eventBus,this.toggleButton=t.toggleButton,this.thumbnailButton=t.thumbnailButton,this.outlineButton=t.outlineButton,this.attachmentsButton=t.attachmentsButton,this.thumbnailView=t.thumbnailView,this.outlineView=t.outlineView,this.attachmentsView=t.attachmentsView,this.disableNotification=t.disableNotification||!1,this.l10n=n,this._addEventListeners()}return r(e,[{key:"reset",value:function(){this.isInitialViewSet=!1,this._hideUINotification(null),this.switchView(s.THUMBS),this.outlineButton.disabled=!1,this.attachmentsButton.disabled=!1}},{key:"setInitialView",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.NONE
if(!this.isInitialViewSet){if(this.isInitialViewSet=!0,this.isOpen&&e===s.NONE)return void this._dispatchEvent()
var t=e===this.visibleView
this.switchView(e,!0),t&&this._dispatchEvent()}}},{key:"switchView",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(e===s.NONE)return void this.close()
var n=e!==this.active,i=!1
switch(e){case s.THUMBS:this.thumbnailButton.classList.add("toggled"),this.outlineButton.classList.remove("toggled"),this.attachmentsButton.classList.remove("toggled"),this.thumbnailView.classList.remove("hidden"),this.outlineView.classList.add("hidden"),this.attachmentsView.classList.add("hidden"),this.isOpen&&n&&(this._updateThumbnailViewer(),i=!0)
break
case s.OUTLINE:if(this.outlineButton.disabled)return
this.thumbnailButton.classList.remove("toggled"),this.outlineButton.classList.add("toggled"),this.attachmentsButton.classList.remove("toggled"),this.thumbnailView.classList.add("hidden"),this.outlineView.classList.remove("hidden"),this.attachmentsView.classList.add("hidden")
break
case s.ATTACHMENTS:if(this.attachmentsButton.disabled)return
this.thumbnailButton.classList.remove("toggled"),this.outlineButton.classList.remove("toggled"),this.attachmentsButton.classList.add("toggled"),this.thumbnailView.classList.add("hidden"),this.outlineView.classList.add("hidden"),this.attachmentsView.classList.remove("hidden")
break
default:return void console.error('PDFSidebar_switchView: "'+e+'" is an unsupported value.')}if(this.active=0|e,t&&!this.isOpen)return void this.open()
i&&this._forceRendering(),n&&this._dispatchEvent(),this._hideUINotification(this.active)}},{key:"open",value:function(){this.isOpen||(this.isOpen=!0,this.toggleButton.classList.add("toggled"),this.outerContainer.classList.add("sidebarMoving"),this.outerContainer.classList.add("sidebarOpen"),this.active===s.THUMBS&&this._updateThumbnailViewer(),this._forceRendering(),this._dispatchEvent(),this._hideUINotification(this.active))}},{key:"close",value:function(){this.isOpen&&(this.isOpen=!1,this.toggleButton.classList.remove("toggled"),this.outerContainer.classList.add("sidebarMoving"),this.outerContainer.classList.remove("sidebarOpen"),this._forceRendering(),this._dispatchEvent())}},{key:"toggle",value:function(){this.isOpen?this.close():this.open()}},{key:"_dispatchEvent",value:function(){this.eventBus.dispatch("sidebarviewchanged",{source:this,view:this.visibleView})}},{key:"_forceRendering",value:function(){this.onToggled?this.onToggled():(this.pdfViewer.forceRendering(),this.pdfThumbnailViewer.forceRendering())}},{key:"_updateThumbnailViewer",value:function(){for(var e=this.pdfViewer,t=this.pdfThumbnailViewer,n=e.pagesCount,i=0;i<n;i++){var r=e.getPageView(i)
if(r&&r.renderingState===o.RenderingStates.FINISHED){t.getThumbnail(i).setImage(r)}}t.scrollThumbnailIntoView(e.currentPageNumber)}},{key:"_showUINotification",value:function(e){var t=this
if(!this.disableNotification){if(this.l10n.get("toggle_sidebar_notification.title",null,"Toggle Sidebar (document contains outline/attachments)").then(function(e){t.toggleButton.title=e}),this.isOpen){if(e===this.active)return}else this.toggleButton.classList.add("pdfSidebarNotification")
switch(e){case s.OUTLINE:this.outlineButton.classList.add("pdfSidebarNotification")
break
case s.ATTACHMENTS:this.attachmentsButton.classList.add("pdfSidebarNotification")}}}},{key:"_hideUINotification",value:function(e){var t=this
if(!this.disableNotification){var n=function(e){switch(e){case s.OUTLINE:t.outlineButton.classList.remove("pdfSidebarNotification")
break
case s.ATTACHMENTS:t.attachmentsButton.classList.remove("pdfSidebarNotification")}}
if(this.isOpen||null===e){if(this.toggleButton.classList.remove("pdfSidebarNotification"),null!==e)return void n(e)
for(e in s)n(s[e])
this.l10n.get("toggle_sidebar.title",null,"Toggle Sidebar").then(function(e){t.toggleButton.title=e})}}}},{key:"_addEventListeners",value:function(){var e=this
this.mainContainer.addEventListener("transitionend",function(t){t.target===e.mainContainer&&e.outerContainer.classList.remove("sidebarMoving")}),this.thumbnailButton.addEventListener("click",function(){e.switchView(s.THUMBS)}),this.outlineButton.addEventListener("click",function(){e.switchView(s.OUTLINE)}),this.outlineButton.addEventListener("dblclick",function(){e.pdfOutlineViewer.toggleOutlineTree()}),this.attachmentsButton.addEventListener("click",function(){e.switchView(s.ATTACHMENTS)}),this.eventBus.on("outlineloaded",function(t){var n=t.outlineCount
e.outlineButton.disabled=!n,n?e._showUINotification(s.OUTLINE):e.active===s.OUTLINE&&e.switchView(s.THUMBS)}),this.eventBus.on("attachmentsloaded",function(t){if(t.attachmentsCount)return e.attachmentsButton.disabled=!1,void e._showUINotification(s.ATTACHMENTS)
Promise.resolve().then(function(){e.attachmentsView.hasChildNodes()||(e.attachmentsButton.disabled=!0,e.active===s.ATTACHMENTS&&e.switchView(s.THUMBS))})}),this.eventBus.on("presentationmodechanged",function(t){t.active||t.switchInProgress||!e.isThumbnailViewVisible||e._updateThumbnailViewer()})}},{key:"visibleView",get:function(){return this.isOpen?this.active:s.NONE}},{key:"isThumbnailViewVisible",get:function(){return this.isOpen&&this.active===s.THUMBS}},{key:"isOutlineViewVisible",get:function(){return this.isOpen&&this.active===s.OUTLINE}},{key:"isAttachmentsViewVisible",get:function(){return this.isOpen&&this.active===s.ATTACHMENTS}}]),e}()
t.SidebarView=s,t.PDFSidebar=u},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFThumbnailView=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(1),o=n(0),s=n(3),u=1,l=98,c=function(){var e=null
return{getCanvas:function(t,n){var i=e
i||(i=document.createElement("canvas"),e=i),i.width=t,i.height=n,i.mozOpaque=!0
var r=i.getContext("2d",{alpha:!1})
return r.save(),r.fillStyle="rgb(255, 255, 255)",r.fillRect(0,0,t,n),r.restore(),i},destroyCanvas:function(){var t=e
t&&(t.width=0,t.height=0),e=null}}}(),d=function(){function e(t){var n=t.container,r=t.id,a=t.defaultViewport,c=t.linkService,d=t.renderingQueue,h=t.disableCanvasToImageConversion,f=void 0!==h&&h,v=t.l10n,g=void 0===v?o.NullL10n:v
i(this,e),this.id=r,this.renderingId="thumbnail"+r,this.pageLabel=null,this.pdfPage=null,this.rotation=0,this.viewport=a,this.pdfPageRotate=a.rotation,this.linkService=c,this.renderingQueue=d,this.renderTask=null,this.renderingState=s.RenderingStates.INITIAL,this.resume=null,this.disableCanvasToImageConversion=f,this.pageWidth=this.viewport.width,this.pageHeight=this.viewport.height,this.pageRatio=this.pageWidth/this.pageHeight,this.canvasWidth=l,this.canvasHeight=this.canvasWidth/this.pageRatio|0,this.scale=this.canvasWidth/this.pageWidth,this.l10n=g
var p=document.createElement("a")
p.href=c.getAnchorUrl("#page="+r),this.l10n.get("thumb_page_title",{page:r},"Page {{page}}").then(function(e){p.title=e}),p.onclick=function(){return c.page=r,!1},this.anchor=p
var m=document.createElement("div")
m.className="thumbnail",m.setAttribute("data-page-number",this.id),this.div=m,1===r&&m.classList.add("selected")
var w=document.createElement("div")
w.className="thumbnailSelectionRing"
var b=2*u
w.style.width=this.canvasWidth+b+"px",w.style.height=this.canvasHeight+b+"px",this.ring=w,m.appendChild(w),p.appendChild(m),n.appendChild(p)}return r(e,[{key:"setPdfPage",value:function(e){this.pdfPage=e,this.pdfPageRotate=e.rotate
var t=(this.rotation+this.pdfPageRotate)%360
this.viewport=e.getViewport(1,t),this.reset()}},{key:"reset",value:function(){this.cancelRendering(),this.pageWidth=this.viewport.width,this.pageHeight=this.viewport.height,this.pageRatio=this.pageWidth/this.pageHeight,this.canvasHeight=this.canvasWidth/this.pageRatio|0,this.scale=this.canvasWidth/this.pageWidth,this.div.removeAttribute("data-loaded")
for(var e=this.ring,t=e.childNodes,n=t.length-1;n>=0;n--)e.removeChild(t[n])
var i=2*u
e.style.width=this.canvasWidth+i+"px",e.style.height=this.canvasHeight+i+"px",this.canvas&&(this.canvas.width=0,this.canvas.height=0,delete this.canvas),this.image&&(this.image.removeAttribute("src"),delete this.image)}},{key:"update",value:function(e){void 0!==e&&(this.rotation=e)
var t=(this.rotation+this.pdfPageRotate)%360
this.viewport=this.viewport.clone({scale:1,rotation:t}),this.reset()}},{key:"cancelRendering",value:function(){this.renderTask&&(this.renderTask.cancel(),this.renderTask=null),this.renderingState=s.RenderingStates.INITIAL,this.resume=null}},{key:"_getPageDrawContext",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=document.createElement("canvas")
this.canvas=t,t.mozOpaque=!0
var n=t.getContext("2d",{alpha:!1}),i=(0,o.getOutputScale)(n)
return t.width=this.canvasWidth*i.sx|0,t.height=this.canvasHeight*i.sy|0,t.style.width=this.canvasWidth+"px",t.style.height=this.canvasHeight+"px",!e&&i.scaled&&n.scale(i.sx,i.sy),n}},{key:"_convertCanvasToImage",value:function(){var e=this
if(this.canvas&&this.renderingState===s.RenderingStates.FINISHED){var t=this.renderingId
if(this.disableCanvasToImageConversion)return this.canvas.id=t,this.canvas.className="thumbnailImage",this.l10n.get("thumb_page_canvas",{page:this.pageId},"Thumbnail of Page {{page}}").then(function(t){e.canvas.setAttribute("aria-label",t)}),this.div.setAttribute("data-loaded",!0),void this.ring.appendChild(this.canvas)
var n=document.createElement("img")
n.id=t,n.className="thumbnailImage",this.l10n.get("thumb_page_canvas",{page:this.pageId},"Thumbnail of Page {{page}}").then(function(e){n.setAttribute("aria-label",e)}),n.style.width=this.canvasWidth+"px",n.style.height=this.canvasHeight+"px",n.src=this.canvas.toDataURL(),this.image=n,this.div.setAttribute("data-loaded",!0),this.ring.appendChild(n),this.canvas.width=0,this.canvas.height=0,delete this.canvas}}},{key:"draw",value:function(){var e=this
if(this.renderingState!==s.RenderingStates.INITIAL)return console.error("Must be in new state before drawing"),Promise.resolve(void 0)
this.renderingState=s.RenderingStates.RUNNING
var t=(0,a.createPromiseCapability)(),n=function(n){if(l===e.renderTask&&(e.renderTask=null),"cancelled"===n||n instanceof a.RenderingCancelledException)return void t.resolve(void 0)
e.renderingState=s.RenderingStates.FINISHED,e._convertCanvasToImage(),n?t.reject(n):t.resolve(void 0)},i=this._getPageDrawContext(),r=this.viewport.clone({scale:this.scale}),o=function(t){if(!e.renderingQueue.isHighestPriority(e))return e.renderingState=s.RenderingStates.PAUSED,void(e.resume=function(){e.renderingState=s.RenderingStates.RUNNING,t()})
t()},u={canvasContext:i,viewport:r},l=this.renderTask=this.pdfPage.render(u)
return l.onContinue=o,l.promise.then(function(){n(null)},function(e){n(e)}),t.promise}},{key:"setImage",value:function(e){if(this.renderingState===s.RenderingStates.INITIAL){var t=e.canvas
if(t){this.pdfPage||this.setPdfPage(e.pdfPage),this.renderingState=s.RenderingStates.FINISHED
var n=this._getPageDrawContext(!0),i=n.canvas
if(t.width<=2*i.width)return n.drawImage(t,0,0,t.width,t.height,0,0,i.width,i.height),void this._convertCanvasToImage()
for(var r=i.width<<3,a=i.height<<3,o=c.getCanvas(r,a),u=o.getContext("2d");r>t.width||a>t.height;)r>>=1,a>>=1
for(u.drawImage(t,0,0,t.width,t.height,0,0,r,a);r>2*i.width;)u.drawImage(o,0,0,r,a,0,0,r>>1,a>>1),r>>=1,a>>=1
n.drawImage(o,0,0,r,a,0,0,i.width,i.height),this._convertCanvasToImage()}}}},{key:"setPageLabel",value:function(e){var t=this
this.pageLabel="string"==typeof e?e:null,this.l10n.get("thumb_page_title",{page:this.pageId},"Page {{page}}").then(function(e){t.anchor.title=e}),this.renderingState===s.RenderingStates.FINISHED&&this.l10n.get("thumb_page_canvas",{page:this.pageId},"Thumbnail of Page {{page}}").then(function(e){t.image?t.image.setAttribute("aria-label",e):t.disableCanvasToImageConversion&&t.canvas&&t.canvas.setAttribute("aria-label",e)})}},{key:"pageId",get:function(){return null!==this.pageLabel?this.pageLabel:this.id}}],[{key:"cleanup",value:function(){c.destroyCanvas()}}]),e}()
t.PDFThumbnailView=d},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFThumbnailViewer=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(0),o=n(25),s=function(){function e(t){var n=t.container,r=t.linkService,o=t.renderingQueue,s=t.l10n,u=void 0===s?a.NullL10n:s
i(this,e),this.container=n,this.linkService=r,this.renderingQueue=o,this.l10n=u,this.scroll=(0,a.watchScroll)(this.container,this._scrollUpdated.bind(this)),this._resetView()}return r(e,[{key:"_scrollUpdated",value:function(){this.renderingQueue.renderHighestPriority()}},{key:"getThumbnail",value:function(e){return this._thumbnails[e]}},{key:"_getVisibleThumbs",value:function(){return(0,a.getVisibleElements)(this.container,this._thumbnails)}},{key:"scrollThumbnailIntoView",value:function(e){var t=document.querySelector(".thumbnail.selected")
t&&t.classList.remove("selected")
var n=document.querySelector('div.thumbnail[data-page-number="'+e+'"]')
n&&n.classList.add("selected")
var i=this._getVisibleThumbs(),r=i.views.length
if(r>0){var o=i.first.id,s=r>1?i.last.id:o;(e<=o||e>=s)&&(0,a.scrollIntoView)(n,{top:-19})}}},{key:"cleanup",value:function(){o.PDFThumbnailView.cleanup()}},{key:"_resetView",value:function(){this._thumbnails=[],this._pageLabels=null,this._pagesRotation=0,this._pagesRequests=[],this.container.textContent=""}},{key:"setDocument",value:function(e){var t=this
this.pdfDocument&&(this._cancelRendering(),this._resetView()),this.pdfDocument=e,e&&e.getPage(1).then(function(n){for(var i=e.numPages,r=n.getViewport(1),a=1;a<=i;++a){var s=new o.PDFThumbnailView({container:t.container,id:a,defaultViewport:r.clone(),linkService:t.linkService,renderingQueue:t.renderingQueue,disableCanvasToImageConversion:!1,l10n:t.l10n})
t._thumbnails.push(s)}}).catch(function(e){console.error("Unable to initialize thumbnail viewer",e)})}},{key:"_cancelRendering",value:function(){for(var e=0,t=this._thumbnails.length;e<t;e++)this._thumbnails[e]&&this._thumbnails[e].cancelRendering()}},{key:"setPageLabels",value:function(e){if(this.pdfDocument){e?e instanceof Array&&this.pdfDocument.numPages===e.length?this._pageLabels=e:(this._pageLabels=null,console.error("PDFThumbnailViewer_setPageLabels: Invalid page labels.")):this._pageLabels=null
for(var t=0,n=this._thumbnails.length;t<n;t++){var i=this._pageLabels&&this._pageLabels[t]
this._thumbnails[t].setPageLabel(i)}}}},{key:"_ensurePdfPageLoaded",value:function(e){var t=this
if(e.pdfPage)return Promise.resolve(e.pdfPage)
var n=e.id
if(this._pagesRequests[n])return this._pagesRequests[n]
var i=this.pdfDocument.getPage(n).then(function(i){return e.setPdfPage(i),t._pagesRequests[n]=null,i}).catch(function(e){console.error("Unable to get page for thumb view",e),t._pagesRequests[n]=null})
return this._pagesRequests[n]=i,i}},{key:"forceRendering",value:function(){var e=this,t=this._getVisibleThumbs(),n=this.renderingQueue.getHighestPriority(t,this._thumbnails,this.scroll.down)
return!!n&&(this._ensurePdfPageLoaded(n).then(function(){e.renderingQueue.renderView(n)}),!0)}},{key:"pagesRotation",get:function(){return this._pagesRotation},set:function(e){if("number"!=typeof e||e%90!=0)throw new Error("Invalid thumbnails rotation angle.")
if(this.pdfDocument){this._pagesRotation=e
for(var t=0,n=this._thumbnails.length;t<n;t++)this._thumbnails[t].update(e)}}}]),e}()
t.PDFThumbnailViewer=s},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){var t=[]
this.push=function(n){var i=t.indexOf(n)
i>=0&&t.splice(i,1),t.push(n),t.length>e&&t.shift().destroy()},this.resize=function(n){for(e=n;t.length>e;)t.shift().destroy()}}function a(e,t){return t===e||Math.abs(t-e)<1e-15}function o(e){return e.width<=e.height}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFViewer=t.PresentationModeState=void 0
var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(1),l=n(0),c=n(3),d=n(11),h=n(2),f=n(22),v=n(5),g=n(30),p={UNKNOWN:0,NORMAL:1,CHANGING:2,FULLSCREEN:3},m=function(){function e(t){i(this,e),this.container=t.container,this.viewer=t.viewer||t.container.firstElementChild,this.eventBus=t.eventBus||(0,h.getGlobalEventBus)(),this.linkService=t.linkService||new v.SimpleLinkService,this.downloadManager=t.downloadManager||null,this.removePageBorders=t.removePageBorders||!1,this.enhanceTextSelection=t.enhanceTextSelection||!1,this.renderInteractiveForms=t.renderInteractiveForms||!1,this.enablePrintAutoRotate=t.enablePrintAutoRotate||!1,this.renderer=t.renderer||l.RendererType.CANVAS,this.l10n=t.l10n||l.NullL10n,this.defaultRenderingQueue=!t.renderingQueue,this.defaultRenderingQueue?(this.renderingQueue=new c.PDFRenderingQueue,this.renderingQueue.setViewer(this)):this.renderingQueue=t.renderingQueue,this.scroll=(0,l.watchScroll)(this.container,this._scrollUpdate.bind(this)),this.presentationModeState=p.UNKNOWN,this._resetView(),this.removePageBorders&&this.viewer.classList.add("removePageBorders")}return s(e,[{key:"getPageView",value:function(e){return this._pages[e]}},{key:"_setCurrentPageNumber",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(this._currentPageNumber===e)return void(t&&this._resetCurrentPageView())
if(!(0<e&&e<=this.pagesCount))return void console.error('PDFViewer._setCurrentPageNumber: "'+e+'" is out of bounds.')
var n={source:this,pageNumber:e,pageLabel:this._pageLabels&&this._pageLabels[e-1]}
this._currentPageNumber=e,this.eventBus.dispatch("pagechanging",n),this.eventBus.dispatch("pagechange",n),t&&this._resetCurrentPageView()}},{key:"setDocument",value:function(e){var t=this
if(this.pdfDocument&&(this._cancelRendering(),this._resetView()),this.pdfDocument=e,e){var n=e.numPages,i=(0,u.createPromiseCapability)()
this.pagesPromise=i.promise,i.promise.then(function(){t._pageViewsReady=!0,t.eventBus.dispatch("pagesloaded",{source:t,pagesCount:n})})
var r=!1,a=(0,u.createPromiseCapability)()
this.onePageRendered=a.promise
var o=function(e){e.onBeforeDraw=function(){t._buffer.push(e)},e.onAfterDraw=function(){r||(r=!0,a.resolve())}},s=e.getPage(1)
this.firstPagePromise=s,s.then(function(r){for(var s=t.currentScale,c=r.getViewport(s*l.CSS_UNITS),d=1;d<=n;++d){var h=null
u.PDFJS.disableTextLayer||(h=t)
var v=new f.PDFPageView({container:t.viewer,eventBus:t.eventBus,id:d,scale:s,defaultViewport:c.clone(),renderingQueue:t.renderingQueue,textLayerFactory:h,annotationLayerFactory:t,enhanceTextSelection:t.enhanceTextSelection,renderInteractiveForms:t.renderInteractiveForms,renderer:t.renderer,l10n:t.l10n})
o(v),t._pages.push(v)}a.promise.then(function(){if(u.PDFJS.disableAutoFetch)return void i.resolve()
for(var r=n,a=1;a<=n;++a)!function(n){e.getPage(n).then(function(e){var a=t._pages[n-1]
a.pdfPage||a.setPdfPage(e),t.linkService.cachePageRef(n,e.ref),0==--r&&i.resolve()},function(e){console.error("Unable to get page "+n+" to initialize viewer",e),0==--r&&i.resolve()})}(a)}),t.eventBus.dispatch("pagesinit",{source:t}),t.defaultRenderingQueue&&t.update(),t.findController&&t.findController.resolveFirstPage()}).catch(function(e){console.error("Unable to initialize viewer",e)})}}},{key:"setPageLabels",value:function(e){if(this.pdfDocument){e?e instanceof Array&&this.pdfDocument.numPages===e.length?this._pageLabels=e:(this._pageLabels=null,console.error("PDFViewer.setPageLabels: Invalid page labels.")):this._pageLabels=null
for(var t=0,n=this._pages.length;t<n;t++){var i=this._pages[t],r=this._pageLabels&&this._pageLabels[t]
i.setPageLabel(r)}}}},{key:"_resetView",value:function(){this._pages=[],this._currentPageNumber=1,this._currentScale=l.UNKNOWN_SCALE,this._currentScaleValue=null,this._pageLabels=null,this._buffer=new r(10),this._location=null,this._pagesRotation=0,this._pagesRequests=[],this._pageViewsReady=!1,this.viewer.textContent=""}},{key:"_scrollUpdate",value:function(){0!==this.pagesCount&&this.update()}},{key:"_setScaleDispatchEvent",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i={source:this,scale:e,presetValue:n?t:void 0}
this.eventBus.dispatch("scalechanging",i),this.eventBus.dispatch("scalechange",i)}},{key:"_setScaleUpdatePages",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
if(this._currentScaleValue=t.toString(),a(this._currentScale,e))return void(i&&this._setScaleDispatchEvent(e,t,!0))
for(var r=0,o=this._pages.length;r<o;r++)this._pages[r].update(e)
if(this._currentScale=e,!n){var s=this._currentPageNumber,l=void 0
!this._location||u.PDFJS.ignoreCurrentPositionOnZoom||this.isInPresentationMode||this.isChangingPresentationMode||(s=this._location.pageNumber,l=[null,{name:"XYZ"},this._location.left,this._location.top,null]),this.scrollPageIntoView({pageNumber:s,destArray:l,allowNegativeOffset:!0})}this._setScaleDispatchEvent(e,t,i),this.defaultRenderingQueue&&this.update()}},{key:"_setScale",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=parseFloat(e)
if(n>0)this._setScaleUpdatePages(n,e,t,!1)
else{var i=this._pages[this._currentPageNumber-1]
if(!i)return
var r=this.isInPresentationMode||this.removePageBorders?0:l.SCROLLBAR_PADDING,a=this.isInPresentationMode||this.removePageBorders?0:l.VERTICAL_PADDING,o=(this.container.clientWidth-r)/i.width*i.scale,s=(this.container.clientHeight-a)/i.height*i.scale
switch(e){case"page-actual":n=1
break
case"page-width":n=o
break
case"page-height":n=s
break
case"page-fit":n=Math.min(o,s)
break
case"auto":var u=i.width>i.height,c=u?Math.min(s,o):o
n=Math.min(l.MAX_AUTO_SCALE,c)
break
default:return void console.error('PDFViewer._setScale: "'+e+'" is an unknown zoom value.')}this._setScaleUpdatePages(n,e,t,!0)}}},{key:"_resetCurrentPageView",value:function(){this.isInPresentationMode&&this._setScale(this._currentScaleValue,!0)
var e=this._pages[this._currentPageNumber-1];(0,l.scrollIntoView)(e.div)}},{key:"scrollPageIntoView",value:function(e){if(arguments.length>1||"number"==typeof e)return void console.error("Call of scrollPageIntoView() with obsolete signature.")
if(this.pdfDocument){var t=e.pageNumber||0,n=e.destArray||null,i=e.allowNegativeOffset||!1
if(this.isInPresentationMode||!n)return void this._setCurrentPageNumber(t,!0)
var r=this._pages[t-1]
if(!r)return void console.error('PDFViewer.scrollPageIntoView: Invalid "pageNumber" parameter.')
var a=0,o=0,s=0,u=0,c=void 0,d=void 0,h=r.rotation%180!=0,f=(h?r.height:r.width)/r.scale/l.CSS_UNITS,v=(h?r.width:r.height)/r.scale/l.CSS_UNITS,g=0
switch(n[1].name){case"XYZ":a=n[2],o=n[3],g=n[4],a=null!==a?a:0,o=null!==o?o:v
break
case"Fit":case"FitB":g="page-fit"
break
case"FitH":case"FitBH":o=n[2],g="page-width",null===o&&this._location&&(a=this._location.left,o=this._location.top)
break
case"FitV":case"FitBV":a=n[2],s=f,u=v,g="page-height"
break
case"FitR":a=n[2],o=n[3],s=n[4]-a,u=n[5]-o
var p=this.removePageBorders?0:l.SCROLLBAR_PADDING,m=this.removePageBorders?0:l.VERTICAL_PADDING
c=(this.container.clientWidth-p)/s/l.CSS_UNITS,d=(this.container.clientHeight-m)/u/l.CSS_UNITS,g=Math.min(Math.abs(c),Math.abs(d))
break
default:return void console.error('PDFViewer.scrollPageIntoView: "'+n[1].name+'" is not a valid destination type.')}if(g&&g!==this._currentScale?this.currentScaleValue=g:this._currentScale===l.UNKNOWN_SCALE&&(this.currentScaleValue=l.DEFAULT_SCALE_VALUE),"page-fit"===g&&!n[4])return void(0,l.scrollIntoView)(r.div)
var w=[r.viewport.convertToViewportPoint(a,o),r.viewport.convertToViewportPoint(a+s,o+u)],b=Math.min(w[0][0],w[1][0]),y=Math.min(w[0][1],w[1][1])
i||(b=Math.max(b,0),y=Math.max(y,0)),(0,l.scrollIntoView)(r.div,{left:b,top:y})}}},{key:"_updateLocation",value:function(e){var t=this._currentScale,n=this._currentScaleValue,i=parseFloat(n)===t?Math.round(1e4*t)/100:n,r=e.id,a="#page="+r
a+="&zoom="+i
var o=this._pages[r-1],s=this.container,u=o.getPagePoint(s.scrollLeft-e.x,s.scrollTop-e.y),l=Math.round(u[0]),c=Math.round(u[1])
a+=","+l+","+c,this._location={pageNumber:r,scale:i,top:c,left:l,pdfOpenParams:a}}},{key:"update",value:function(){var e=this._getVisiblePages(),t=e.views
if(0!==t.length){var n=Math.max(10,2*t.length+1)
this._buffer.resize(n),this.renderingQueue.renderHighestPriority(e)
for(var i=this._currentPageNumber,r=e.first,a=!1,o=0,s=t.length;o<s;++o){var u=t[o]
if(u.percent<100)break
if(u.id===i){a=!0
break}}a||(i=t[0].id),this.isInPresentationMode||this._setCurrentPageNumber(i),this._updateLocation(r),this.eventBus.dispatch("updateviewarea",{source:this,location:this._location})}}},{key:"containsElement",value:function(e){return this.container.contains(e)}},{key:"focus",value:function(){this.container.focus()}},{key:"_getVisiblePages",value:function(){if(!this.isInPresentationMode)return(0,l.getVisibleElements)(this.container,this._pages,!0)
var e=[],t=this._pages[this._currentPageNumber-1]
return e.push({id:t.id,view:t}),{first:t,last:t,views:e}}},{key:"cleanup",value:function(){for(var e=0,t=this._pages.length;e<t;e++)this._pages[e]&&this._pages[e].renderingState!==c.RenderingStates.FINISHED&&this._pages[e].reset()}},{key:"_cancelRendering",value:function(){for(var e=0,t=this._pages.length;e<t;e++)this._pages[e]&&this._pages[e].cancelRendering()}},{key:"_ensurePdfPageLoaded",value:function(e){var t=this
if(e.pdfPage)return Promise.resolve(e.pdfPage)
var n=e.id
if(this._pagesRequests[n])return this._pagesRequests[n]
var i=this.pdfDocument.getPage(n).then(function(i){return e.pdfPage||e.setPdfPage(i),t._pagesRequests[n]=null,i}).catch(function(e){console.error("Unable to get page for page view",e),t._pagesRequests[n]=null})
return this._pagesRequests[n]=i,i}},{key:"forceRendering",value:function(e){var t=this,n=e||this._getVisiblePages(),i=this.renderingQueue.getHighestPriority(n,this._pages,this.scroll.down)
return!!i&&(this._ensurePdfPageLoaded(i).then(function(){t.renderingQueue.renderView(i)}),!0)}},{key:"getPageTextContent",value:function(e){return this.pdfDocument.getPage(e+1).then(function(e){return e.getTextContent({normalizeWhitespace:!0})})}},{key:"createTextLayerBuilder",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return new g.TextLayerBuilder({textLayerDiv:e,eventBus:this.eventBus,pageIndex:t,viewport:n,findController:this.isInPresentationMode?null:this.findController,enhanceTextSelection:!this.isInPresentationMode&&i})}},{key:"createAnnotationLayerBuilder",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l.NullL10n
return new d.AnnotationLayerBuilder({pageDiv:e,pdfPage:t,renderInteractiveForms:n,linkService:this.linkService,downloadManager:this.downloadManager,l10n:i})}},{key:"setFindController",value:function(e){this.findController=e}},{key:"getPagesOverview",value:function(){var e=this._pages.map(function(e){var t=e.pdfPage.getViewport(1)
return{width:t.width,height:t.height,rotation:t.rotation}})
if(!this.enablePrintAutoRotate)return e
var t=o(e[0])
return e.map(function(e){return t===o(e)?e:{width:e.height,height:e.width,rotation:(e.rotation+90)%360}})}},{key:"pagesCount",get:function(){return this._pages.length}},{key:"pageViewsReady",get:function(){return this._pageViewsReady}},{key:"currentPageNumber",get:function(){return this._currentPageNumber},set:function(e){if((0|e)!==e)throw new Error("Invalid page number.")
this.pdfDocument&&this._setCurrentPageNumber(e,!0)}},{key:"currentPageLabel",get:function(){return this._pageLabels&&this._pageLabels[this._currentPageNumber-1]},set:function(e){var t=0|e
if(this._pageLabels){var n=this._pageLabels.indexOf(e)
n>=0&&(t=n+1)}this.currentPageNumber=t}},{key:"currentScale",get:function(){return this._currentScale!==l.UNKNOWN_SCALE?this._currentScale:l.DEFAULT_SCALE},set:function(e){if(isNaN(e))throw new Error("Invalid numeric scale")
this.pdfDocument&&this._setScale(e,!1)}},{key:"currentScaleValue",get:function(){return this._currentScaleValue},set:function(e){this.pdfDocument&&this._setScale(e,!1)}},{key:"pagesRotation",get:function(){return this._pagesRotation},set:function(e){if("number"!=typeof e||e%90!=0)throw new Error("Invalid pages rotation angle.")
if(this.pdfDocument){this._pagesRotation=e
for(var t=0,n=this._pages.length;t<n;t++){var i=this._pages[t]
i.update(i.scale,e)}this._setScale(this._currentScaleValue,!0),this.defaultRenderingQueue&&this.update()}}},{key:"isInPresentationMode",get:function(){return this.presentationModeState===p.FULLSCREEN}},{key:"isChangingPresentationMode",get:function(){return this.presentationModeState===p.CHANGING}},{key:"isHorizontalScrollbarEnabled",get:function(){return!this.isInPresentationMode&&this.container.scrollWidth>this.container.clientWidth}},{key:"hasEqualPageSizes",get:function(){for(var e=this._pages[0],t=1,n=this._pages.length;t<n;++t){var i=this._pages[t]
if(i.width!==e.width||i.height!==e.height)return!1}return!0}}]),e}()
t.PresentationModeState=p,t.PDFViewer=m},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){return u||(u=Promise.resolve({showPreviousViewOnLoad:!0,defaultZoomValue:"",sidebarViewOnLoad:0,enableHandToolOnLoad:!1,cursorToolOnLoad:0,enableWebGL:!1,pdfBugEnabled:!1,disableRange:!1,disableStream:!1,disableAutoFetch:!1,disableFontFace:!1,disableTextLayer:!1,useOnlyCssZoom:!1,externalLinkTarget:0,enhanceTextSelection:!1,renderer:"canvas",renderInteractiveForms:!1,enablePrintAutoRotate:!1,disablePageMode:!1,disablePageLabels:!1})),u}Object.defineProperty(t,"__esModule",{value:!0}),t.BasePreferences=void 0
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),u=null,l=function(){function e(){var t=this
if(i(this,e),this.constructor===e)throw new Error("Cannot initialize BasePreferences.")
this.prefs=null,this._initializedPromise=r().then(function(e){return Object.defineProperty(t,"defaults",{value:Object.freeze(e),writable:!1,enumerable:!0,configurable:!1}),t.prefs=(0,s.cloneObj)(e),t._readFromStorage(e)}).then(function(e){e&&(t.prefs=e)})}return o(e,[{key:"_writeToStorage",value:function(e){return Promise.reject(new Error("Not implemented: _writeToStorage"))}},{key:"_readFromStorage",value:function(e){return Promise.reject(new Error("Not implemented: _readFromStorage"))}},{key:"reset",value:function(){var e=this
return this._initializedPromise.then(function(){return e.prefs=(0,s.cloneObj)(e.defaults),e._writeToStorage(e.defaults)})}},{key:"reload",value:function(){var e=this
return this._initializedPromise.then(function(){return e._readFromStorage(e.defaults)}).then(function(t){t&&(e.prefs=t)})}},{key:"set",value:function(e,t){var n=this
return this._initializedPromise.then(function(){if(void 0===n.defaults[e])throw new Error('Set preference: "'+e+'" is undefined.')
if(void 0===t)throw new Error("Set preference: no value is specified.")
var i=void 0===t?"undefined":a(t),r=a(n.defaults[e])
if(i!==r){if("number"!==i||"string"!==r)throw new Error('Set preference: "'+t+'" is a '+i+", expected a "+r+".")
t=t.toString()}else if("number"===i&&(0|t)!==t)throw new Error('Set preference: "'+t+'" must be an integer.')
return n.prefs[e]=t,n._writeToStorage(n.prefs)})}},{key:"get",value:function(e){var t=this
return this._initializedPromise.then(function(){var n=t.defaults[e]
if(void 0===n)throw new Error('Get preference: "'+e+'" is undefined.')
var i=t.prefs[e]
return void 0!==i?i:n})}}]),e}()
t.BasePreferences=l},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.SecondaryToolbar=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(6),o=n(0),s=function(){function e(t,n,r){i(this,e),this.toolbar=t.toolbar,this.toggleButton=t.toggleButton,this.toolbarButtonContainer=t.toolbarButtonContainer,this.buttons=[{element:t.presentationModeButton,eventName:"presentationmode",close:!0},{element:t.openFileButton,eventName:"openfile",close:!0},{element:t.printButton,eventName:"print",close:!0},{element:t.downloadButton,eventName:"download",close:!0},{element:t.viewBookmarkButton,eventName:null,close:!0},{element:t.firstPageButton,eventName:"firstpage",close:!0},{element:t.lastPageButton,eventName:"lastpage",close:!0},{element:t.pageRotateCwButton,eventName:"rotatecw",close:!1},{element:t.pageRotateCcwButton,eventName:"rotateccw",close:!1},{element:t.cursorSelectToolButton,eventName:"switchcursortool",eventDetails:{tool:a.CursorTool.SELECT},close:!0},{element:t.cursorHandToolButton,eventName:"switchcursortool",eventDetails:{tool:a.CursorTool.HAND},close:!0},{element:t.documentPropertiesButton,eventName:"documentproperties",close:!0}],this.items={firstPage:t.firstPageButton,lastPage:t.lastPageButton,pageRotateCw:t.pageRotateCwButton,pageRotateCcw:t.pageRotateCcwButton},this.mainContainer=n,this.eventBus=r,this.opened=!1,this.containerHeight=null,this.previousContainerHeight=null,this.reset(),this._bindClickListeners(),this._bindCursorToolsListener(t),this.eventBus.on("resize",this._setMaxHeight.bind(this))}return r(e,[{key:"setPageNumber",value:function(e){this.pageNumber=e,this._updateUIState()}},{key:"setPagesCount",value:function(e){this.pagesCount=e,this._updateUIState()}},{key:"reset",value:function(){this.pageNumber=0,this.pagesCount=0,this._updateUIState()}},{key:"_updateUIState",value:function(){this.items.firstPage.disabled=this.pageNumber<=1,this.items.lastPage.disabled=this.pageNumber>=this.pagesCount,this.items.pageRotateCw.disabled=0===this.pagesCount,this.items.pageRotateCcw.disabled=0===this.pagesCount}},{key:"_bindClickListeners",value:function(){var e=this
this.toggleButton.addEventListener("click",this.toggle.bind(this))
for(var t in this.buttons)!function(t){var n=e.buttons[t],i=n.element,r=n.eventName,a=n.close,o=n.eventDetails
i.addEventListener("click",function(t){if(null!==r){var n={source:e}
for(var i in o)n[i]=o[i]
e.eventBus.dispatch(r,n)}a&&e.close()})}(t)}},{key:"_bindCursorToolsListener",value:function(e){this.eventBus.on("cursortoolchanged",function(t){switch(e.cursorSelectToolButton.classList.remove("toggled"),e.cursorHandToolButton.classList.remove("toggled"),t.tool){case a.CursorTool.SELECT:e.cursorSelectToolButton.classList.add("toggled")
break
case a.CursorTool.HAND:e.cursorHandToolButton.classList.add("toggled")}})}},{key:"open",value:function(){this.opened||(this.opened=!0,this._setMaxHeight(),this.toggleButton.classList.add("toggled"),this.toolbar.classList.remove("hidden"))}},{key:"close",value:function(){this.opened&&(this.opened=!1,this.toolbar.classList.add("hidden"),this.toggleButton.classList.remove("toggled"))}},{key:"toggle",value:function(){this.opened?this.close():this.open()}},{key:"_setMaxHeight",value:function(){this.opened&&(this.containerHeight=this.mainContainer.clientHeight,this.containerHeight!==this.previousContainerHeight&&(this.toolbarButtonContainer.setAttribute("style","max-height: "+(this.containerHeight-o.SCROLLBAR_PADDING)+"px;"),this.previousContainerHeight=this.containerHeight))}},{key:"isOpen",get:function(){return this.opened}}]),e}()
t.SecondaryToolbar=s},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultTextLayerFactory=t.TextLayerBuilder=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(2),o=n(1),s=function(){function e(t){var n=t.textLayerDiv,r=t.eventBus,o=t.pageIndex,s=t.viewport,u=t.findController,l=void 0===u?null:u,c=t.enhanceTextSelection,d=void 0!==c&&c
i(this,e),this.textLayerDiv=n,this.eventBus=r||(0,a.getGlobalEventBus)(),this.textContent=null,this.textContentItemsStr=[],this.textContentStream=null,this.renderingDone=!1,this.pageIdx=o,this.pageNumber=this.pageIdx+1,this.matches=[],this.viewport=s,this.textDivs=[],this.findController=l,this.textLayerRenderTask=null,this.enhanceTextSelection=d,this._bindMouse()}return r(e,[{key:"_finishRendering",value:function(){if(this.renderingDone=!0,!this.enhanceTextSelection){var e=document.createElement("div")
e.className="endOfContent",this.textLayerDiv.appendChild(e)}this.eventBus.dispatch("textlayerrendered",{source:this,pageNumber:this.pageNumber,numTextDivs:this.textDivs.length})}},{key:"render",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
if((this.textContent||this.textContentStream)&&!this.renderingDone){this.cancel(),this.textDivs=[]
var n=document.createDocumentFragment()
this.textLayerRenderTask=(0,o.renderTextLayer)({textContent:this.textContent,textContentStream:this.textContentStream,container:n,viewport:this.viewport,textDivs:this.textDivs,textContentItemsStr:this.textContentItemsStr,timeout:t,enhanceTextSelection:this.enhanceTextSelection}),this.textLayerRenderTask.promise.then(function(){e.textLayerDiv.appendChild(n),e._finishRendering(),e.updateMatches()},function(e){})}}},{key:"cancel",value:function(){this.textLayerRenderTask&&(this.textLayerRenderTask.cancel(),this.textLayerRenderTask=null)}},{key:"setTextContentStream",value:function(e){this.cancel(),this.textContentStream=e}},{key:"setTextContent",value:function(e){this.cancel(),this.textContent=e}},{key:"convertMatches",value:function(e,t){var n=0,i=0,r=this.textContentItemsStr,a=r.length-1,o=null===this.findController?0:this.findController.state.query.length,s=[]
if(!e)return s
for(var u=0,l=e.length;u<l;u++){for(var c=e[u];n!==a&&c>=i+r[n].length;)i+=r[n].length,n++
n===r.length&&console.error("Could not find a matching mapping")
var d={begin:{divIdx:n,offset:c-i}}
for(c+=t?t[u]:o;n!==a&&c>i+r[n].length;)i+=r[n].length,n++
d.end={divIdx:n,offset:c-i},s.push(d)}return s}},{key:"renderMatches",value:function(e){function t(e,t){var i=e.divIdx
r[i].textContent="",n(i,0,e.offset,t)}function n(e,t,n,a){var o=r[e],s=i[e].substring(t,n),u=document.createTextNode(s)
if(a){var l=document.createElement("span")
return l.className=a,l.appendChild(u),void o.appendChild(l)}o.appendChild(u)}if(0!==e.length){var i=this.textContentItemsStr,r=this.textDivs,a=null,o=this.pageIdx,s=null!==this.findController&&o===this.findController.selected.pageIdx,u=null===this.findController?-1:this.findController.selected.matchIdx,l=null!==this.findController&&this.findController.state.highlightAll,c={divIdx:-1,offset:void 0},d=u,h=d+1
if(l)d=0,h=e.length
else if(!s)return
for(var f=d;f<h;f++){var v=e[f],g=v.begin,p=v.end,m=s&&f===u,w=m?" selected":""
if(this.findController&&this.findController.updateMatchPosition(o,f,r,g.divIdx),a&&g.divIdx===a.divIdx?n(a.divIdx,a.offset,g.offset):(null!==a&&n(a.divIdx,a.offset,c.offset),t(g)),g.divIdx===p.divIdx)n(g.divIdx,g.offset,p.offset,"highlight"+w)
else{n(g.divIdx,g.offset,c.offset,"highlight begin"+w)
for(var b=g.divIdx+1,y=p.divIdx;b<y;b++)r[b].className="highlight middle"+w
t(p,"highlight end"+w)}a=p}a&&n(a.divIdx,a.offset,c.offset)}}},{key:"updateMatches",value:function(){if(this.renderingDone){for(var e=this.matches,t=this.textDivs,n=this.textContentItemsStr,i=-1,r=0,a=e.length;r<a;r++){for(var o=e[r],s=Math.max(i,o.begin.divIdx),u=s,l=o.end.divIdx;u<=l;u++){var c=t[u]
c.textContent=n[u],c.className=""}i=o.end.divIdx+1}if(null!==this.findController&&this.findController.active){var d=void 0,h=void 0
null!==this.findController&&(d=this.findController.pageMatches[this.pageIdx]||null,h=this.findController.pageMatchesLength?this.findController.pageMatchesLength[this.pageIdx]||null:null),this.matches=this.convertMatches(d,h),this.renderMatches(this.matches)}}}},{key:"_bindMouse",value:function(){var e=this,t=this.textLayerDiv,n=null
t.addEventListener("mousedown",function(i){if(e.enhanceTextSelection&&e.textLayerRenderTask)return e.textLayerRenderTask.expandTextDivs(!0),void(n&&(clearTimeout(n),n=null))
var r=t.querySelector(".endOfContent")
if(r){var a=i.target!==t
if(a=a&&"none"!==window.getComputedStyle(r).getPropertyValue("-moz-user-select")){var o=t.getBoundingClientRect(),s=Math.max(0,(i.pageY-o.top)/o.height)
r.style.top=(100*s).toFixed(2)+"%"}r.classList.add("active")}}),t.addEventListener("mouseup",function(){if(e.enhanceTextSelection&&e.textLayerRenderTask)return void(n=setTimeout(function(){e.textLayerRenderTask&&e.textLayerRenderTask.expandTextDivs(!1),n=null},300))
var i=t.querySelector(".endOfContent")
i&&(i.style.top="",i.classList.remove("active"))})}}]),e}(),u=function(){function e(){i(this,e)}return r(e,[{key:"createTextLayerBuilder",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return new s({textLayerDiv:e,pageIndex:t,viewport:n,enhanceTextSelection:i})}}]),e}()
t.TextLayerBuilder=s,t.DefaultTextLayerFactory=u},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Toolbar=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(0),o=function(){function e(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a.NullL10n
i(this,e),this.toolbar=t.container,this.mainContainer=n,this.eventBus=r,this.l10n=o,this.items=t,this._wasLocalized=!1,this.reset(),this._bindListeners()}return r(e,[{key:"setPageNumber",value:function(e,t){this.pageNumber=e,this.pageLabel=t,this._updateUIState(!1)}},{key:"setPagesCount",value:function(e,t){this.pagesCount=e,this.hasPageLabels=t,this._updateUIState(!0)}},{key:"setPageScale",value:function(e,t){this.pageScaleValue=e,this.pageScale=t,this._updateUIState(!1)}},{key:"reset",value:function(){this.pageNumber=0,this.pageLabel=null,this.hasPageLabels=!1,this.pagesCount=0,this.pageScaleValue=a.DEFAULT_SCALE_VALUE,this.pageScale=a.DEFAULT_SCALE,this._updateUIState(!0)}},{key:"_bindListeners",value:function(){var e=this,t=this.eventBus,n=this.items,i=this
n.previous.addEventListener("click",function(){t.dispatch("previouspage")}),n.next.addEventListener("click",function(){t.dispatch("nextpage")}),n.zoomIn.addEventListener("click",function(){t.dispatch("zoomin")}),n.zoomOut.addEventListener("click",function(){t.dispatch("zoomout")}),n.pageNumber.addEventListener("click",function(){this.select()}),n.pageNumber.addEventListener("change",function(){t.dispatch("pagenumberchanged",{source:i,value:this.value})}),n.scaleSelect.addEventListener("change",function(){"custom"!==this.value&&t.dispatch("scalechanged",{source:i,value:this.value})}),n.presentationModeButton.addEventListener("click",function(){t.dispatch("presentationmode")}),n.openFile.addEventListener("click",function(){t.dispatch("openfile")}),n.print.addEventListener("click",function(){t.dispatch("print")}),n.download.addEventListener("click",function(){t.dispatch("download")}),n.scaleSelect.oncontextmenu=a.noContextMenuHandler,t.on("localized",function(){e._localized()})}},{key:"_localized",value:function(){this._wasLocalized=!0,this._adjustScaleWidth(),this._updateUIState(!0)}},{key:"_updateUIState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(this._wasLocalized){var t=this.pageNumber,n=this.pagesCount,i=this.items,r=(this.pageScaleValue||this.pageScale).toString(),o=this.pageScale
e&&(this.hasPageLabels?i.pageNumber.type="text":(i.pageNumber.type="number",this.l10n.get("of_pages",{pagesCount:n},"of {{pagesCount}}").then(function(e){i.numPages.textContent=e})),i.pageNumber.max=n),this.hasPageLabels?(i.pageNumber.value=this.pageLabel,this.l10n.get("page_of_pages",{pageNumber:t,pagesCount:n},"({{pageNumber}} of {{pagesCount}})").then(function(e){i.numPages.textContent=e})):i.pageNumber.value=t,i.previous.disabled=t<=1,i.next.disabled=t>=n,i.zoomOut.disabled=o<=a.MIN_SCALE,i.zoomIn.disabled=o>=a.MAX_SCALE
var s=Math.round(1e4*o)/100
this.l10n.get("page_scale_percent",{scale:s},"{{scale}}%").then(function(e){for(var t=i.scaleSelect.options,n=!1,a=0,o=t.length;a<o;a++){var s=t[a]
s.value===r?(s.selected=!0,n=!0):s.selected=!1}n||(i.customScaleOption.textContent=e,i.customScaleOption.selected=!0)})}}},{key:"updateLoadingIndicatorState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.items.pageNumber
e?t.classList.add("visiblePageIsLoading"):t.classList.remove("visiblePageIsLoading")}},{key:"_adjustScaleWidth",value:function(){var e=this.items.scaleSelectContainer,t=this.items.scaleSelect
a.animationStarted.then(function(){if(0===e.clientWidth&&e.setAttribute("style","display: inherit;"),e.clientWidth>0){t.setAttribute("style","min-width: inherit;")
var n=t.clientWidth+8
t.setAttribute("style","min-width: "+(n+22)+"px;"),e.setAttribute("style","min-width: "+n+"px; max-width: "+n+"px;")}})}}]),e}()
t.Toolbar=o},function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=20,o=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a
i(this,e),this.fingerprint=t,this.cacheSize=r,this._initializedPromise=this._readFromStorage().then(function(e){var t=JSON.parse(e||"{}")
"files"in t||(t.files=[]),t.files.length>=n.cacheSize&&t.files.shift()
for(var i=void 0,r=0,a=t.files.length;r<a;r++){if(t.files[r].fingerprint===n.fingerprint){i=r
break}}"number"!=typeof i&&(i=t.files.push({fingerprint:n.fingerprint})-1),n.file=t.files[i],n.database=t})}return r(e,[{key:"_writeToStorage",value:function(){var e=this
return new Promise(function(t){var n=JSON.stringify(e.database)
localStorage.setItem("pdfjs.history",n),t()})}},{key:"_readFromStorage",value:function(){return new Promise(function(e){e(localStorage.getItem("pdfjs.history"))})}},{key:"set",value:function(e,t){var n=this
return this._initializedPromise.then(function(){return n.file[e]=t,n._writeToStorage()})}},{key:"setMultiple",value:function(e){var t=this
return this._initializedPromise.then(function(){for(var n in e)t.file[n]=e[n]
return t._writeToStorage()})}},{key:"get",value:function(e,t){var n=this
return this._initializedPromise.then(function(){var i=n.file[e]
return void 0!==i?i:t})}},{key:"getMultiple",value:function(e){var t=this
return this._initializedPromise.then(function(){var n=Object.create(null)
for(var i in e){var r=t.file[i]
n[i]=void 0!==r?r:e[i]}return n})}}]),e}()
t.ViewHistory=o},function(e,t,n){"use strict"
function i(){return{appContainer:document.body,mainContainer:document.getElementById("viewerContainer"),viewerContainer:document.getElementById("viewer"),eventBus:null,toolbar:{container:document.getElementById("toolbarViewer"),numPages:document.getElementById("numPages"),pageNumber:document.getElementById("pageNumber"),scaleSelectContainer:document.getElementById("scaleSelectContainer"),scaleSelect:document.getElementById("scaleSelect"),customScaleOption:document.getElementById("customScaleOption"),previous:document.getElementById("previous"),next:document.getElementById("next"),zoomIn:document.getElementById("zoomIn"),zoomOut:document.getElementById("zoomOut"),viewFind:document.getElementById("viewFind"),openFile:document.getElementById("openFile"),print:document.getElementById("print"),presentationModeButton:document.getElementById("presentationMode"),download:document.getElementById("download"),viewBookmark:document.getElementById("viewBookmark")},secondaryToolbar:{toolbar:document.getElementById("secondaryToolbar"),toggleButton:document.getElementById("secondaryToolbarToggle"),toolbarButtonContainer:document.getElementById("secondaryToolbarButtonContainer"),presentationModeButton:document.getElementById("secondaryPresentationMode"),openFileButton:document.getElementById("secondaryOpenFile"),printButton:document.getElementById("secondaryPrint"),downloadButton:document.getElementById("secondaryDownload"),viewBookmarkButton:document.getElementById("secondaryViewBookmark"),firstPageButton:document.getElementById("firstPage"),lastPageButton:document.getElementById("lastPage"),pageRotateCwButton:document.getElementById("pageRotateCw"),pageRotateCcwButton:document.getElementById("pageRotateCcw"),cursorSelectToolButton:document.getElementById("cursorSelectTool"),cursorHandToolButton:document.getElementById("cursorHandTool"),documentPropertiesButton:document.getElementById("documentProperties")},fullscreen:{contextFirstPage:document.getElementById("contextFirstPage"),contextLastPage:document.getElementById("contextLastPage"),contextPageRotateCw:document.getElementById("contextPageRotateCw"),contextPageRotateCcw:document.getElementById("contextPageRotateCcw")},sidebar:{mainContainer:document.getElementById("mainContainer"),outerContainer:document.getElementById("outerContainer"),toggleButton:document.getElementById("sidebarToggle"),thumbnailButton:document.getElementById("viewThumbnail"),outlineButton:document.getElementById("viewOutline"),attachmentsButton:document.getElementById("viewAttachments"),thumbnailView:document.getElementById("thumbnailView"),outlineView:document.getElementById("outlineView"),attachmentsView:document.getElementById("attachmentsView")},findBar:{bar:document.getElementById("findbar"),toggleButton:document.getElementById("viewFind"),findField:document.getElementById("findInput"),highlightAllCheckbox:document.getElementById("findHighlightAll"),caseSensitiveCheckbox:document.getElementById("findMatchCase"),findMsg:document.getElementById("findMsg"),findResultsCount:document.getElementById("findResultsCount"),findStatusIcon:document.getElementById("findStatusIcon"),findPreviousButton:document.getElementById("findPrevious"),findNextButton:document.getElementById("findNext")},passwordOverlay:{overlayName:"passwordOverlay",container:document.getElementById("passwordOverlay"),label:document.getElementById("passwordText"),input:document.getElementById("password"),submitButton:document.getElementById("passwordSubmit"),cancelButton:document.getElementById("passwordCancel")},documentProperties:{overlayName:"documentPropertiesOverlay",container:document.getElementById("documentPropertiesOverlay"),closeButton:document.getElementById("documentPropertiesClose"),fields:{fileName:document.getElementById("fileNameField"),fileSize:document.getElementById("fileSizeField"),title:document.getElementById("titleField"),author:document.getElementById("authorField"),subject:document.getElementById("subjectField"),keywords:document.getElementById("keywordsField"),creationDate:document.getElementById("creationDateField"),modificationDate:document.getElementById("modificationDateField"),creator:document.getElementById("creatorField"),producer:document.getElementById("producerField"),version:document.getElementById("versionField"),pageCount:document.getElementById("pageCountField")}},errorWrapper:{container:document.getElementById("errorWrapper"),errorMessage:document.getElementById("errorMessage"),closeButton:document.getElementById("errorClose"),errorMoreInfo:document.getElementById("errorMoreInfo"),moreInfoButton:document.getElementById("errorShowMore"),lessInfoButton:document.getElementById("errorShowLess")},printContainer:document.getElementById("printContainer"),openFileInputName:"fileInput",debuggerScriptPath:"./debugger.js",defaultUrl:a}}function r(){var e=i()
window.PDFViewerApplication=o.PDFViewerApplication,o.PDFViewerApplication.run(e)}var a="Tarek_Eldeeb_Resume.pdf",o=void 0
o=n(4),n(8),n(9),"interactive"===document.readyState||"complete"===document.readyState?r():document.addEventListener("DOMContentLoaded",r,!0)}])
