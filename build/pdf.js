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
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pdfjs-dist/pdf",[],t):"object"==typeof exports?exports["pdfjs-dist/pdf"]=t():e["pdfjs-dist/pdf"]=e.pdfjsDistBuildPdf=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports
var i=r[n]={i:n,l:!1,exports:{}}
return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={}
return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e}
return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=86)}([function(e,t,r){"use strict"
function n(e){se=e}function i(){return se}function a(e){se>=ie.infos&&console.log("Info: "+e)}function o(e){se>=ie.warnings&&console.log("Warning: "+e)}function s(e){console.log("Deprecated API usage: "+e)}function l(e){throw new Error(e)}function u(e,t){e||l(t)}function c(e,t){try{var r=new URL(e)
if(!r.origin||"null"===r.origin)return!1}catch(e){return!1}var n=new URL(t,r)
return r.origin===n.origin}function h(e){if(!e)return!1
switch(e.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0
default:return!1}}function d(e,t){if(!e)return null
try{var r=t?new URL(e,t):new URL(e)
if(h(r))return r}catch(e){}return null}function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!1}),r}function p(e){var t
return function(){return e&&(t=Object.create(null),e(t),e=null),t}}function m(e){return"string"!=typeof e?(o("The argument for removeNullCharacters must be a string."),e):e.replace(ye,"")}function g(e){u(null!==e&&"object"===(void 0===e?"undefined":X(e))&&void 0!==e.length,"Invalid argument for bytesToString")
var t=e.length
if(t<8192)return String.fromCharCode.apply(null,e)
for(var r=[],n=0;n<t;n+=8192){var i=Math.min(n+8192,t),a=e.subarray(n,i)
r.push(String.fromCharCode.apply(null,a))}return r.join("")}function v(e){u("string"==typeof e,"Invalid argument for stringToBytes")
for(var t=e.length,r=new Uint8Array(t),n=0;n<t;++n)r[n]=255&e.charCodeAt(n)
return r}function b(e){return void 0!==e.length?e.length:(u(void 0!==e.byteLength),e.byteLength)}function _(e){if(1===e.length&&e[0]instanceof Uint8Array)return e[0]
var t,r,n,i=0,a=e.length
for(t=0;t<a;t++)r=e[t],n=b(r),i+=n
var o=0,s=new Uint8Array(i)
for(t=0;t<a;t++)r=e[t],r instanceof Uint8Array||(r="string"==typeof r?v(r):new Uint8Array(r)),n=r.byteLength,s.set(r,o),o+=n
return s}function y(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)}function A(e){for(var t=1,r=0;e>t;)t<<=1,r++
return r}function S(e,t){return e[t]<<24>>24}function w(e,t){return e[t]<<8|e[t+1]}function P(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function R(){var e=new Uint8Array(4)
return e[0]=1,1===new Uint32Array(e.buffer,0,1)[0]}function C(){try{return new Function(""),!0}catch(e){return!1}}function x(e){var t,r=e.length,n=[]
if("þ"===e[0]&&"ÿ"===e[1])for(t=2;t<r;t+=2)n.push(String.fromCharCode(e.charCodeAt(t)<<8|e.charCodeAt(t+1)))
else for(t=0;t<r;++t){var i=Pe[e.charCodeAt(t)]
n.push(i?String.fromCharCode(i):e.charAt(t))}return n.join("")}function k(e){return decodeURIComponent(escape(e))}function T(e){return unescape(encodeURIComponent(e))}function E(e){for(var t in e)return!1
return!0}function O(e){return"boolean"==typeof e}function I(e){return"number"==typeof e&&(0|e)===e}function L(e){return"number"==typeof e}function j(e){return"string"==typeof e}function D(e){return e instanceof Array}function F(e){return"object"===(void 0===e?"undefined":X(e))&&null!==e&&void 0!==e.byteLength}function N(e){return 32===e||9===e||13===e||10===e}function M(){return"object"===("undefined"==typeof process?"undefined":X(process))&&process+""=="[object process]"}function q(){var e={}
return e.promise=new Promise(function(t,r){e.resolve=t,e.reject=r}),e}function U(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
return e?new Promise(function(n,i){n(e.apply(r,t))}):Promise.resolve(void 0)}function W(e){if("object"!==(void 0===e?"undefined":X(e)))return e
switch(e.name){case"AbortException":return new _e(e.message)
case"MissingPDFException":return new fe(e.message)
case"UnexpectedResponseException":return new pe(e.message,e.status)
default:return new he(e.message,e.details)}}function B(e,t,r){t?e.resolve():e.reject(r)}function z(e){return Promise.resolve(e).catch(function(){})}function G(e,t,r){var n=this
this.sourceName=e,this.targetName=t,this.comObj=r,this.callbackId=1,this.streamId=1,this.postMessageTransfers=!0,this.streamSinks=Object.create(null),this.streamControllers=Object.create(null)
var i=this.callbacksCapabilities=Object.create(null),a=this.actionHandler=Object.create(null)
this._onComObjOnMessage=function(e){var t=e.data
if(t.targetName===n.sourceName)if(t.stream)n._processStreamMessage(t)
else if(t.isReply){var o=t.callbackId
if(!(t.callbackId in i))throw new Error("Cannot resolve callback "+o)
var s=i[o]
delete i[o],"error"in t?s.reject(W(t.error)):s.resolve(t.data)}else{if(!(t.action in a))throw new Error("Unknown action from worker: "+t.action)
var l=a[t.action]
if(t.callbackId){var u=n.sourceName,c=t.sourceName
Promise.resolve().then(function(){return l[0].call(l[1],t.data)}).then(function(e){r.postMessage({sourceName:u,targetName:c,isReply:!0,callbackId:t.callbackId,data:e})},function(e){e instanceof Error&&(e+=""),r.postMessage({sourceName:u,targetName:c,isReply:!0,callbackId:t.callbackId,error:e})})}else t.streamId?n._createStreamSink(t):l[0].call(l[1],t.data)}},r.addEventListener("message",this._onComObjOnMessage)}function H(e,t,r){var n=new Image
n.onload=function(){r.resolve(e,n)},n.onerror=function(){r.resolve(e,null),o("Error during JPEG image loading")},n.src=t}Object.defineProperty(t,"__esModule",{value:!0}),t.unreachable=t.warn=t.utf8StringToString=t.stringToUTF8String=t.stringToPDFString=t.stringToBytes=t.string32=t.shadow=t.setVerbosityLevel=t.ReadableStream=t.removeNullCharacters=t.readUint32=t.readUint16=t.readInt8=t.log2=t.loadJpegStream=t.isEvalSupported=t.isLittleEndian=t.createValidAbsoluteUrl=t.isSameOrigin=t.isNodeJS=t.isSpace=t.isString=t.isNum=t.isInt=t.isEmptyObj=t.isBool=t.isArrayBuffer=t.isArray=t.info=t.getVerbosityLevel=t.getLookupTableFactory=t.deprecated=t.createObjectURL=t.createPromiseCapability=t.createBlob=t.bytesToString=t.assert=t.arraysToBytes=t.arrayByteLength=t.FormatError=t.XRefParseException=t.Util=t.UnknownErrorException=t.UnexpectedResponseException=t.TextRenderingMode=t.StreamType=t.StatTimer=t.PasswordResponses=t.PasswordException=t.PageViewport=t.NotImplementedException=t.NativeImageDecoding=t.MissingPDFException=t.MissingDataException=t.MessageHandler=t.InvalidPDFException=t.AbortException=t.CMapCompressionType=t.ImageKind=t.FontType=t.AnnotationType=t.AnnotationFlag=t.AnnotationFieldFlag=t.AnnotationBorderStyleType=t.UNSUPPORTED_FEATURES=t.VERBOSITY_LEVELS=t.OPS=t.IDENTITY_MATRIX=t.FONT_IDENTITY_MATRIX=void 0
var X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
r(87)
var Y=r(88),V=[.001,0,0,.001,0,0],J={NONE:"none",DECODE:"decode",DISPLAY:"display"},Q={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4},K={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3},Z={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26},$={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512},ee={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864},te={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5},re={UNKNOWN:0,FLATE:1,LZW:2,DCT:3,JPX:4,JBIG:5,A85:6,AHX:7,CCF:8,RL:9},ne={UNKNOWN:0,TYPE1:1,TYPE1C:2,CIDFONTTYPE0:3,CIDFONTTYPE0C:4,TRUETYPE:5,CIDFONTTYPE2:6,TYPE3:7,OPENTYPE:8,TYPE0:9,MMTYPE1:10},ie={errors:0,warnings:1,infos:5},ae={NONE:0,BINARY:1,STREAM:2},oe={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91},se=ie.warnings,le={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font"},ue={NEED_PASSWORD:1,INCORRECT_PASSWORD:2},ce=function(){function e(e,t){this.name="PasswordException",this.message=e,this.code=t}return e.prototype=new Error,e.constructor=e,e}(),he=function(){function e(e,t){this.name="UnknownErrorException",this.message=e,this.details=t}return e.prototype=new Error,e.constructor=e,e}(),de=function(){function e(e){this.name="InvalidPDFException",this.message=e}return e.prototype=new Error,e.constructor=e,e}(),fe=function(){function e(e){this.name="MissingPDFException",this.message=e}return e.prototype=new Error,e.constructor=e,e}(),pe=function(){function e(e,t){this.name="UnexpectedResponseException",this.message=e,this.status=t}return e.prototype=new Error,e.constructor=e,e}(),me=function(){function e(e){this.message=e}return e.prototype=new Error,e.prototype.name="NotImplementedException",e.constructor=e,e}(),ge=function(){function e(e,t){this.begin=e,this.end=t,this.message="Missing data ["+e+", "+t+")"}return e.prototype=new Error,e.prototype.name="MissingDataException",e.constructor=e,e}(),ve=function(){function e(e){this.message=e}return e.prototype=new Error,e.prototype.name="XRefParseException",e.constructor=e,e}(),be=function(){function e(e){this.message=e}return e.prototype=new Error,e.prototype.name="FormatError",e.constructor=e,e}(),_e=function(){function e(e){this.name="AbortException",this.message=e}return e.prototype=new Error,e.constructor=e,e}(),ye=/\x00/g,Ae=[1,0,0,1,0,0],Se=function(){function e(){}var t=["rgb(",0,",",0,",",0,")"]
e.makeCssRgb=function(e,r,n){return t[1]=e,t[3]=r,t[5]=n,t.join("")},e.transform=function(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]},e.applyTransform=function(e,t){return[e[0]*t[0]+e[1]*t[2]+t[4],e[0]*t[1]+e[1]*t[3]+t[5]]},e.applyInverseTransform=function(e,t){var r=t[0]*t[3]-t[1]*t[2]
return[(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/r,(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/r]},e.getAxialAlignedBoundingBox=function(t,r){var n=e.applyTransform(t,r),i=e.applyTransform(t.slice(2,4),r),a=e.applyTransform([t[0],t[3]],r),o=e.applyTransform([t[2],t[1]],r)
return[Math.min(n[0],i[0],a[0],o[0]),Math.min(n[1],i[1],a[1],o[1]),Math.max(n[0],i[0],a[0],o[0]),Math.max(n[1],i[1],a[1],o[1])]},e.inverseTransform=function(e){var t=e[0]*e[3]-e[1]*e[2]
return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]},e.apply3dTransform=function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]},e.singularValueDecompose2dScale=function(e){var t=[e[0],e[2],e[1],e[3]],r=e[0]*t[0]+e[1]*t[2],n=e[0]*t[1]+e[1]*t[3],i=e[2]*t[0]+e[3]*t[2],a=e[2]*t[1]+e[3]*t[3],o=(r+a)/2,s=Math.sqrt((r+a)*(r+a)-4*(r*a-i*n))/2,l=o+s||1,u=o-s||1
return[Math.sqrt(l),Math.sqrt(u)]},e.normalizeRect=function(e){var t=e.slice(0)
return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t},e.intersect=function(t,r){function n(e,t){return e-t}var i=[t[0],t[2],r[0],r[2]].sort(n),a=[t[1],t[3],r[1],r[3]].sort(n),o=[]
return t=e.normalizeRect(t),r=e.normalizeRect(r),(i[0]===t[0]&&i[1]===r[0]||i[0]===r[0]&&i[1]===t[0])&&(o[0]=i[1],o[2]=i[2],(a[0]===t[1]&&a[1]===r[1]||a[0]===r[1]&&a[1]===t[1])&&(o[1]=a[1],o[3]=a[2],o))},e.sign=function(e){return e<0?-1:1}
var r=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"]
return e.toRoman=function(e,t){u(I(e)&&e>0,"The number should be a positive integer.")
for(var n,i=[];e>=1e3;)e-=1e3,i.push("M")
n=e/100|0,e%=100,i.push(r[n]),n=e/10|0,e%=10,i.push(r[10+n]),i.push(r[20+e])
var a=i.join("")
return t?a.toLowerCase():a},e.appendToArray=function(e,t){Array.prototype.push.apply(e,t)},e.prependToArray=function(e,t){Array.prototype.unshift.apply(e,t)},e.extendObj=function(e,t){for(var r in t)e[r]=t[r]},e.getInheritableProperty=function(e,t,r){for(;e&&!e.has(t);)e=e.get("Parent")
return e?r?e.getArray(t):e.get(t):null},e.inherit=function(e,t,r){e.prototype=Object.create(t.prototype),e.prototype.constructor=e
for(var n in r)e.prototype[n]=r[n]},e.loadScript=function(e,t){var r=document.createElement("script"),n=!1
r.setAttribute("src",e),t&&(r.onload=function(){n||t(),n=!0}),document.getElementsByTagName("head")[0].appendChild(r)},e}(),we=function(){function e(e,t,r,n,i,a){this.viewBox=e,this.scale=t,this.rotation=r,this.offsetX=n,this.offsetY=i
var o,s,l,u,c=(e[2]+e[0])/2,h=(e[3]+e[1])/2
switch(r%=360,r=r<0?r+360:r){case 180:o=-1,s=0,l=0,u=1
break
case 90:o=0,s=1,l=1,u=0
break
case 270:o=0,s=-1,l=-1,u=0
break
default:o=1,s=0,l=0,u=-1}a&&(l=-l,u=-u)
var d,f,p,m
0===o?(d=Math.abs(h-e[1])*t+n,f=Math.abs(c-e[0])*t+i,p=Math.abs(e[3]-e[1])*t,m=Math.abs(e[2]-e[0])*t):(d=Math.abs(c-e[0])*t+n,f=Math.abs(h-e[1])*t+i,p=Math.abs(e[2]-e[0])*t,m=Math.abs(e[3]-e[1])*t),this.transform=[o*t,s*t,l*t,u*t,d-o*t*c-l*t*h,f-s*t*c-u*t*h],this.width=p,this.height=m,this.fontScale=t}return e.prototype={clone:function(t){t=t||{}
var r="scale"in t?t.scale:this.scale,n="rotation"in t?t.rotation:this.rotation
return new e(this.viewBox.slice(),r,n,this.offsetX,this.offsetY,t.dontFlip)},convertToViewportPoint:function(e,t){return Se.applyTransform([e,t],this.transform)},convertToViewportRectangle:function(e){var t=Se.applyTransform([e[0],e[1]],this.transform),r=Se.applyTransform([e[2],e[3]],this.transform)
return[t[0],t[1],r[0],r[1]]},convertToPdfPoint:function(e,t){return Se.applyInverseTransform([e,t],this.transform)}},e}(),Pe=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364],Re=function(){function e(e,t,r){for(;e.length<r;)e+=t
return e}function t(){this.started=Object.create(null),this.times=[],this.enabled=!0}return t.prototype={time:function(e){this.enabled&&(e in this.started&&o("Timer is already running for "+e),this.started[e]=Date.now())},timeEnd:function(e){this.enabled&&(e in this.started||o("Timer has not been started for "+e),this.times.push({name:e,start:this.started[e],end:Date.now()}),delete this.started[e])},toString:function(){var t,r,n=this.times,i="",a=0
for(t=0,r=n.length;t<r;++t){var o=n[t].name
o.length>a&&(a=o.length)}for(t=0,r=n.length;t<r;++t){var s=n[t],l=s.end-s.start
i+=e(s.name," ",a)+" "+l+"ms\n"}return i}},t}(),Ce=function(e,t){if("undefined"!=typeof Blob)return new Blob([e],{type:t})
throw new Error('The "Blob" constructor is not supported.')},xe=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
return function(t,r){if(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&URL.createObjectURL){var n=Ce(t,r)
return URL.createObjectURL(n)}for(var i="data:"+r+";base64,",a=0,o=t.length;a<o;a+=3){var s=255&t[a],l=255&t[a+1],u=255&t[a+2]
i+=e[s>>2]+e[(3&s)<<4|l>>4]+e[a+1<o?(15&l)<<2|u>>6:64]+e[a+2<o?63&u:64]}return i}}()
G.prototype={on:function(e,t,r){var n=this.actionHandler
if(n[e])throw new Error('There is already an actionName called "'+e+'"')
n[e]=[t,r]},send:function(e,t,r){var n={sourceName:this.sourceName,targetName:this.targetName,action:e,data:t}
this.postMessage(n,r)},sendWithPromise:function(e,t,r){var n=this.callbackId++,i={sourceName:this.sourceName,targetName:this.targetName,action:e,data:t,callbackId:n},a=q()
this.callbacksCapabilities[n]=a
try{this.postMessage(i,r)}catch(e){a.reject(e)}return a.promise},sendWithStream:function(e,t,r,n){var i=this,a=this.streamId++,o=this.sourceName,s=this.targetName
return new Y.ReadableStream({start:function(r){var n=q()
return i.streamControllers[a]={controller:r,startCall:n,isClosed:!1},i.postMessage({sourceName:o,targetName:s,action:e,streamId:a,data:t,desiredSize:r.desiredSize}),n.promise},pull:function(e){var t=q()
return i.streamControllers[a].pullCall=t,i.postMessage({sourceName:o,targetName:s,stream:"pull",streamId:a,desiredSize:e.desiredSize}),t.promise},cancel:function(e){var t=q()
return i.streamControllers[a].cancelCall=t,i.streamControllers[a].isClosed=!0,i.postMessage({sourceName:o,targetName:s,stream:"cancel",reason:e,streamId:a}),t.promise}},r)},_createStreamSink:function(e){var t=this,r=this,n=this.actionHandler[e.action],i=e.streamId,a=e.desiredSize,o=this.sourceName,s=e.sourceName,l=q(),u=function(e){var r=e.stream,n=e.chunk,a=e.transfers,l=e.success,u=e.reason
t.postMessage({sourceName:o,targetName:s,stream:r,streamId:i,chunk:n,success:l,reason:u},a)},c={enqueue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments[2]
if(!this.isCancelled){var n=this.desiredSize
this.desiredSize-=t,n>0&&this.desiredSize<=0&&(this.sinkCapability=q(),this.ready=this.sinkCapability.promise),u({stream:"enqueue",chunk:e,transfers:r})}},close:function(){this.isCancelled||(this.isCancelled=!0,u({stream:"close"}),delete r.streamSinks[i])},error:function(e){this.isCancelled||(this.isCancelled=!0,u({stream:"error",reason:e}))},sinkCapability:l,onPull:null,onCancel:null,isCancelled:!1,desiredSize:a,ready:null}
c.sinkCapability.resolve(),c.ready=c.sinkCapability.promise,this.streamSinks[i]=c,U(n[0],[e.data,c],n[1]).then(function(){u({stream:"start_complete",success:!0})},function(e){u({stream:"start_complete",success:!1,reason:e})})},_processStreamMessage:function(e){var t=this,r=this.sourceName,n=e.sourceName,i=e.streamId,a=function(e){var a=e.stream,o=e.success,s=e.reason
t.comObj.postMessage({sourceName:r,targetName:n,stream:a,success:o,streamId:i,reason:s})},o=function(){Promise.all([t.streamControllers[e.streamId].startCall,t.streamControllers[e.streamId].pullCall,t.streamControllers[e.streamId].cancelCall].map(function(e){return e&&z(e.promise)})).then(function(){delete t.streamControllers[e.streamId]})}
switch(e.stream){case"start_complete":B(this.streamControllers[e.streamId].startCall,e.success,W(e.reason))
break
case"pull_complete":B(this.streamControllers[e.streamId].pullCall,e.success,W(e.reason))
break
case"pull":if(!this.streamSinks[e.streamId]){a({stream:"pull_complete",success:!0})
break}this.streamSinks[e.streamId].desiredSize<=0&&e.desiredSize>0&&this.streamSinks[e.streamId].sinkCapability.resolve(),this.streamSinks[e.streamId].desiredSize=e.desiredSize,U(this.streamSinks[e.streamId].onPull).then(function(){a({stream:"pull_complete",success:!0})},function(e){a({stream:"pull_complete",success:!1,reason:e})})
break
case"enqueue":u(this.streamControllers[e.streamId],"enqueue should have stream controller"),this.streamControllers[e.streamId].isClosed||this.streamControllers[e.streamId].controller.enqueue(e.chunk)
break
case"close":if(u(this.streamControllers[e.streamId],"close should have stream controller"),this.streamControllers[e.streamId].isClosed)break
this.streamControllers[e.streamId].isClosed=!0,this.streamControllers[e.streamId].controller.close(),o()
break
case"error":u(this.streamControllers[e.streamId],"error should have stream controller"),this.streamControllers[e.streamId].controller.error(W(e.reason)),o()
break
case"cancel_complete":B(this.streamControllers[e.streamId].cancelCall,e.success,W(e.reason)),o()
break
case"cancel":if(!this.streamSinks[e.streamId])break
U(this.streamSinks[e.streamId].onCancel,[W(e.reason)]).then(function(){a({stream:"cancel_complete",success:!0})},function(e){a({stream:"cancel_complete",success:!1,reason:e})}),this.streamSinks[e.streamId].sinkCapability.reject(W(e.reason)),this.streamSinks[e.streamId].isCancelled=!0,delete this.streamSinks[e.streamId]
break
default:throw new Error("Unexpected stream case")}},postMessage:function(e,t){t&&this.postMessageTransfers?this.comObj.postMessage(e,t):this.comObj.postMessage(e)},destroy:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}},t.FONT_IDENTITY_MATRIX=V,t.IDENTITY_MATRIX=Ae,t.OPS=oe,t.VERBOSITY_LEVELS=ie,t.UNSUPPORTED_FEATURES=le,t.AnnotationBorderStyleType=te,t.AnnotationFieldFlag=ee,t.AnnotationFlag=$,t.AnnotationType=Z,t.FontType=ne,t.ImageKind=K,t.CMapCompressionType=ae,t.AbortException=_e,t.InvalidPDFException=de,t.MessageHandler=G,t.MissingDataException=ge,t.MissingPDFException=fe,t.NativeImageDecoding=J,t.NotImplementedException=me,t.PageViewport=we,t.PasswordException=ce,t.PasswordResponses=ue,t.StatTimer=Re,t.StreamType=re,t.TextRenderingMode=Q,t.UnexpectedResponseException=pe,t.UnknownErrorException=he,t.Util=Se,t.XRefParseException=ve,t.FormatError=be,t.arrayByteLength=b,t.arraysToBytes=_,t.assert=u,t.bytesToString=g,t.createBlob=Ce,t.createPromiseCapability=q,t.createObjectURL=xe,t.deprecated=s,t.getLookupTableFactory=p,t.getVerbosityLevel=i,t.info=a,t.isArray=D,t.isArrayBuffer=F,t.isBool=O,t.isEmptyObj=E,t.isInt=I,t.isNum=L,t.isString=j,t.isSpace=N,t.isNodeJS=M,t.isSameOrigin=c,t.createValidAbsoluteUrl=d,t.isLittleEndian=R,t.isEvalSupported=C,t.loadJpegStream=H,t.log2=A,t.readInt8=S,t.readUint16=w,t.readUint32=P,t.removeNullCharacters=m,t.ReadableStream=Y.ReadableStream,t.setVerbosityLevel=n,t.shadow=f,t.string32=y,t.stringToBytes=v,t.stringToPDFString=x,t.stringToUTF8String=k,t.utf8StringToString=T,t.warn=o,t.unreachable=l},function(e,t,r){"use strict"
var n=r(48)("wks"),i=r(13),a=r(2).Symbol,o="function"==typeof a;(e.exports=function(e){return n[e]||(n[e]=o&&a[e]||(o?a:i)("Symbol."+e))}).store=n},function(e,t,r){"use strict"
var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")()
"number"==typeof __g&&(__g=n)},function(e,t,r){"use strict"
e.exports=!r(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,r){"use strict"
var n=r(8),i=r(18)
e.exports=r(3)?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){"use strict"
var n={}.hasOwnProperty
e.exports=function(e,t){return n.call(e,t)}},function(e,t,r){"use strict"
var n=r(11),i=Math.min
e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},function(e,t,r){"use strict"
function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){var r=t&&t.url
if(e.href=e.title=r?(0,c.removeNullCharacters)(r):"",r){var n=t.target
void 0===n&&(n=o("externalLinkTarget")),e.target=_[n]
var i=t.rel
void 0===i&&(i=o("externalLinkRel")),e.rel=i}}function a(e){var t=e.indexOf("#"),r=e.indexOf("?"),n=Math.min(t>0?t:e.length,r>0?r:e.length)
return e.substring(e.lastIndexOf("/",n)+1,n)}function o(e){var t=d.default.PDFJS
switch(e){case"pdfBug":return!!t&&t.pdfBug
case"disableAutoFetch":return!!t&&t.disableAutoFetch
case"disableStream":return!!t&&t.disableStream
case"disableRange":return!!t&&t.disableRange
case"disableFontFace":return!!t&&t.disableFontFace
case"disableCreateObjectURL":return!!t&&t.disableCreateObjectURL
case"disableWebGL":return!t||t.disableWebGL
case"cMapUrl":return t?t.cMapUrl:null
case"cMapPacked":return!!t&&t.cMapPacked
case"postMessageTransfers":return!t||t.postMessageTransfers
case"workerPort":return t?t.workerPort:null
case"workerSrc":return t?t.workerSrc:null
case"disableWorker":return!!t&&t.disableWorker
case"maxImageSize":return t?t.maxImageSize:-1
case"imageResourcesPath":return t?t.imageResourcesPath:""
case"isEvalSupported":return!t||t.isEvalSupported
case"externalLinkTarget":if(!t)return b.NONE
switch(t.externalLinkTarget){case b.NONE:case b.SELF:case b.BLANK:case b.PARENT:case b.TOP:return t.externalLinkTarget}return(0,c.warn)("PDFJS.externalLinkTarget is invalid: "+t.externalLinkTarget),t.externalLinkTarget=b.NONE,b.NONE
case"externalLinkRel":return t?t.externalLinkRel:f
case"enableStats":return!(!t||!t.enableStats)
case"pdfjsNext":return!(!t||!t.pdfjsNext)
default:throw new Error("Unknown default setting: "+e)}}function s(){switch(o("externalLinkTarget")){case b.NONE:return!1
case b.SELF:case b.BLANK:case b.PARENT:case b.TOP:return!0}}function l(e,t){(0,c.deprecated)("isValidUrl(), please use createValidAbsoluteUrl() instead.")
var r=t?"http://example.com":null
return null!==(0,c.createValidAbsoluteUrl)(e,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.DOMCMapReaderFactory=t.DOMCanvasFactory=t.DEFAULT_LINK_REL=t.getDefaultSetting=t.LinkTarget=t.getFilenameFromUrl=t.isValidUrl=t.isExternalLinkTargetSet=t.addLinkAttributes=t.RenderingCancelledException=t.CustomStyle=void 0
var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),h=r(14),d=function(e){return e&&e.__esModule?e:{default:e}}(h),f="noopener noreferrer nofollow",p=function(){function e(){n(this,e)}return u(e,[{key:"create",value:function(e,t){if(e<=0||t<=0)throw new Error("invalid canvas size")
var r=document.createElement("canvas"),n=r.getContext("2d")
return r.width=e,r.height=t,{canvas:r,context:n}}},{key:"reset",value:function(e,t,r){if(!e.canvas)throw new Error("canvas is not specified")
if(t<=0||r<=0)throw new Error("invalid canvas size")
e.canvas.width=t,e.canvas.height=r}},{key:"destroy",value:function(e){if(!e.canvas)throw new Error("canvas is not specified")
e.canvas.width=0,e.canvas.height=0,e.canvas=null,e.context=null}}]),e}(),m=function(){function e(t){var r=t.baseUrl,i=void 0===r?null:r,a=t.isCompressed,o=void 0!==a&&a
n(this,e),this.baseUrl=i,this.isCompressed=o}return u(e,[{key:"fetch",value:function(e){var t=this,r=e.name
return r?new Promise(function(e,n){var i=t.baseUrl+r+(t.isCompressed?".bcmap":""),a=new XMLHttpRequest
a.open("GET",i,!0),t.isCompressed&&(a.responseType="arraybuffer"),a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(200===a.status||0===a.status){var r=void 0
if(t.isCompressed&&a.response?r=new Uint8Array(a.response):!t.isCompressed&&a.responseText&&(r=(0,c.stringToBytes)(a.responseText)),r)return void e({cMapData:r,compressionType:t.isCompressed?c.CMapCompressionType.BINARY:c.CMapCompressionType.NONE})}n(new Error("Unable to load "+(t.isCompressed?"binary ":"")+"CMap at: "+i))}},a.send(null)}):Promise.reject(new Error("CMap name must be specified."))}}]),e}(),g=function(){function e(){}var t=["ms","Moz","Webkit","O"],r=Object.create(null)
return e.getProp=function(e,n){if(1===arguments.length&&"string"==typeof r[e])return r[e]
n=n||document.documentElement
var i,a,o=n.style
if("string"==typeof o[e])return r[e]=e
a=e.charAt(0).toUpperCase()+e.slice(1)
for(var s=0,l=t.length;s<l;s++)if(i=t[s]+a,"string"==typeof o[i])return r[e]=i
return r[e]="undefined"},e.setProp=function(e,t,r){var n=this.getProp(e)
"undefined"!==n&&(t.style[n]=r)},e}(),v=function(){function e(e,t){this.message=e,this.type=t}return e.prototype=new Error,e.prototype.name="RenderingCancelledException",e.constructor=e,e}(),b={NONE:0,SELF:1,BLANK:2,PARENT:3,TOP:4},_=["","_self","_blank","_parent","_top"]
t.CustomStyle=g,t.RenderingCancelledException=v,t.addLinkAttributes=i,t.isExternalLinkTargetSet=s,t.isValidUrl=l,t.getFilenameFromUrl=a,t.LinkTarget=b,t.getDefaultSetting=o,t.DEFAULT_LINK_REL=f,t.DOMCanvasFactory=p,t.DOMCMapReaderFactory=m},function(e,t,r){"use strict"
var n=r(15),i=r(41),a=r(28),o=Object.defineProperty
t.f=r(3)?Object.defineProperty:function(e,t,r){if(n(e),t=a(t,!0),n(r),i)try{return o(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!")
return"value"in r&&(e[t]=r.value),e}},function(e,t,r){"use strict"
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
e.exports=function(e){return"object"===(void 0===e?"undefined":n(e))?null!==e:"function"==typeof e}},function(e,t,r){"use strict"
e.exports={}},function(e,t,r){"use strict"
var n=Math.ceil,i=Math.floor
e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}},function(e,t,r){"use strict"
var n=r(38)
e.exports=function(e){return Object(n(e))}},function(e,t,r){"use strict"
var n=0,i=Math.random()
e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}},function(e,t,r){"use strict"
e.exports="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:{}},function(e,t,r){"use strict"
var n=r(9)
e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!")
return e}},function(e,t,r){"use strict"
var n=e.exports={version:"2.5.0"}
"number"==typeof __e&&(__e=n)},function(e,t,r){"use strict"
e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){"use strict"
e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){"use strict"
var n=r(11),i=Math.max,a=Math.min
e.exports=function(e,t){return e=n(e),e<0?i(e+t,0):a(e,t)}},function(e,t,r){"use strict"
var n=r(42),i=r(38)
e.exports=function(e){return n(i(e))}},function(e,t,r){"use strict"
var n={}.toString
e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,r){"use strict"
var n=r(33)
e.exports=function(e,t,r){if(n(e),void 0===t)return e
switch(r){case 1:return function(r){return e.call(t,r)}
case 2:return function(r,n){return e.call(t,r,n)}
case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){"use strict"
e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,r){"use strict"
e.exports=!1},function(e,t,r){"use strict"
var n=r(2),i=r(4),a=r(5),o=r(13)("src"),s=Function.toString,l=(""+s).split("toString")
r(16).inspectSource=function(e){return s.call(e)},(e.exports=function(e,t,r,s){var u="function"==typeof r
u&&(a(r,"name")||i(r,"name",t)),e[t]!==r&&(u&&(a(r,o)||i(r,o,e[t]?""+e[t]:l.join(String(t)))),e===n?e[t]=r:s?e[t]?e[t]=r:i(e,t,r):(delete e[t],i(e,t,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[o]||s.call(this)})},function(e,t,r){"use strict"
var n=r(8).f,i=r(5),a=r(1)("toStringTag")
e.exports=function(e,t,r){e&&!i(e=r?e:e.prototype,a)&&n(e,a,{configurable:!0,value:t})}},function(e,t,r){"use strict"
var n=r(48)("keys"),i=r(13)
e.exports=function(e){return n[e]||(n[e]=i(e))}},function(e,t,r){"use strict"
var n=r(9)
e.exports=function(e,t){if(!n(e))return e
var r,i
if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i
if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i
if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i
throw TypeError("Can't convert object to primitive value")}},function(e,t,r){"use strict"
function n(){}Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationLayer=void 0
var i=r(7),a=r(0)
n.prototype={create:function(e){switch(e.data.annotationType){case a.AnnotationType.LINK:return new s(e)
case a.AnnotationType.TEXT:return new l(e)
case a.AnnotationType.WIDGET:switch(e.data.fieldType){case"Tx":return new c(e)
case"Btn":if(e.data.radioButton)return new d(e)
if(e.data.checkBox)return new h(e);(0,a.warn)("Unimplemented button widget annotation: pushbutton")
break
case"Ch":return new f(e)}return new u(e)
case a.AnnotationType.POPUP:return new p(e)
case a.AnnotationType.LINE:return new g(e)
case a.AnnotationType.HIGHLIGHT:return new v(e)
case a.AnnotationType.UNDERLINE:return new b(e)
case a.AnnotationType.SQUIGGLY:return new _(e)
case a.AnnotationType.STRIKEOUT:return new y(e)
case a.AnnotationType.FILEATTACHMENT:return new A(e)
default:return new o(e)}}}
var o=function(){function e(e,t,r){this.isRenderable=t||!1,this.data=e.data,this.layer=e.layer,this.page=e.page,this.viewport=e.viewport,this.linkService=e.linkService,this.downloadManager=e.downloadManager,this.imageResourcesPath=e.imageResourcesPath,this.renderInteractiveForms=e.renderInteractiveForms,t&&(this.container=this._createContainer(r))}return e.prototype={_createContainer:function(e){var t=this.data,r=this.page,n=this.viewport,o=document.createElement("section"),s=t.rect[2]-t.rect[0],l=t.rect[3]-t.rect[1]
o.setAttribute("data-annotation-id",t.id)
var u=a.Util.normalizeRect([t.rect[0],r.view[3]-t.rect[1]+r.view[1],t.rect[2],r.view[3]-t.rect[3]+r.view[1]])
if(i.CustomStyle.setProp("transform",o,"matrix("+n.transform.join(",")+")"),i.CustomStyle.setProp("transformOrigin",o,-u[0]+"px "+-u[1]+"px"),!e&&t.borderStyle.width>0){o.style.borderWidth=t.borderStyle.width+"px",t.borderStyle.style!==a.AnnotationBorderStyleType.UNDERLINE&&(s-=2*t.borderStyle.width,l-=2*t.borderStyle.width)
var c=t.borderStyle.horizontalCornerRadius,h=t.borderStyle.verticalCornerRadius
if(c>0||h>0){var d=c+"px / "+h+"px"
i.CustomStyle.setProp("borderRadius",o,d)}switch(t.borderStyle.style){case a.AnnotationBorderStyleType.SOLID:o.style.borderStyle="solid"
break
case a.AnnotationBorderStyleType.DASHED:o.style.borderStyle="dashed"
break
case a.AnnotationBorderStyleType.BEVELED:(0,a.warn)("Unimplemented border style: beveled")
break
case a.AnnotationBorderStyleType.INSET:(0,a.warn)("Unimplemented border style: inset")
break
case a.AnnotationBorderStyleType.UNDERLINE:o.style.borderBottomStyle="solid"}t.color?o.style.borderColor=a.Util.makeCssRgb(0|t.color[0],0|t.color[1],0|t.color[2]):o.style.borderWidth=0}return o.style.left=u[0]+"px",o.style.top=u[1]+"px",o.style.width=s+"px",o.style.height=l+"px",o},_createPopup:function(e,t,r){t||(t=document.createElement("div"),t.style.height=e.style.height,t.style.width=e.style.width,e.appendChild(t))
var n=new m({container:e,trigger:t,color:r.color,title:r.title,contents:r.contents,hideWrapper:!0}),i=n.render()
i.style.left=e.style.width,e.appendChild(i)},render:function(){throw new Error("Abstract method AnnotationElement.render called")}},e}(),s=function(){function e(e){o.call(this,e,!0)}return a.Util.inherit(e,o,{render:function(){this.container.className="linkAnnotation"
var e=document.createElement("a")
return(0,i.addLinkAttributes)(e,{url:this.data.url,target:this.data.newWindow?i.LinkTarget.BLANK:void 0}),this.data.url||(this.data.action?this._bindNamedAction(e,this.data.action):this._bindLink(e,this.data.dest)),this.container.appendChild(e),this.container},_bindLink:function(e,t){var r=this
e.href=this.linkService.getDestinationHash(t),e.onclick=function(){return t&&r.linkService.navigateTo(t),!1},t&&(e.className="internalLink")},_bindNamedAction:function(e,t){var r=this
e.href=this.linkService.getAnchorUrl(""),e.onclick=function(){return r.linkService.executeNamedAction(t),!1},e.className="internalLink"}}),e}(),l=function(){function e(e){var t=!!(e.data.hasPopup||e.data.title||e.data.contents)
o.call(this,e,t)}return a.Util.inherit(e,o,{render:function(){this.container.className="textAnnotation"
var e=document.createElement("img")
return e.style.height=this.container.style.height,e.style.width=this.container.style.width,e.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg",e.alt="[{{type}} Annotation]",e.dataset.l10nId="text_annotation_type",e.dataset.l10nArgs=JSON.stringify({type:this.data.name}),this.data.hasPopup||this._createPopup(this.container,e,this.data),this.container.appendChild(e),this.container}}),e}(),u=function(){function e(e,t){o.call(this,e,t)}return a.Util.inherit(e,o,{render:function(){return this.container}}),e}(),c=function(){function e(e){var t=e.renderInteractiveForms||!e.data.hasAppearance&&!!e.data.fieldValue
u.call(this,e,t)}var t=["left","center","right"]
return a.Util.inherit(e,u,{render:function(){this.container.className="textWidgetAnnotation"
var e=null
if(this.renderInteractiveForms){if(this.data.multiLine?(e=document.createElement("textarea"),e.textContent=this.data.fieldValue):(e=document.createElement("input"),e.type="text",e.setAttribute("value",this.data.fieldValue)),e.disabled=this.data.readOnly,null!==this.data.maxLen&&(e.maxLength=this.data.maxLen),this.data.comb){var r=this.data.rect[2]-this.data.rect[0],n=r/this.data.maxLen
e.classList.add("comb"),e.style.letterSpacing="calc("+n+"px - 1ch)"}}else{e=document.createElement("div"),e.textContent=this.data.fieldValue,e.style.verticalAlign="middle",e.style.display="table-cell"
var i=null
this.data.fontRefName&&(i=this.page.commonObjs.getData(this.data.fontRefName)),this._setTextStyle(e,i)}return null!==this.data.textAlignment&&(e.style.textAlign=t[this.data.textAlignment]),this.container.appendChild(e),this.container},_setTextStyle:function(e,t){var r=e.style
if(r.fontSize=this.data.fontSize+"px",r.direction=this.data.fontDirection<0?"rtl":"ltr",t){r.fontWeight=t.black?t.bold?"900":"bold":t.bold?"bold":"normal",r.fontStyle=t.italic?"italic":"normal"
var n=t.loadedName?'"'+t.loadedName+'", ':"",i=t.fallbackName||"Helvetica, sans-serif"
r.fontFamily=n+i}}}),e}(),h=function(){function e(e){u.call(this,e,e.renderInteractiveForms)}return a.Util.inherit(e,u,{render:function(){this.container.className="buttonWidgetAnnotation checkBox"
var e=document.createElement("input")
return e.disabled=this.data.readOnly,e.type="checkbox",this.data.fieldValue&&"Off"!==this.data.fieldValue&&e.setAttribute("checked",!0),this.container.appendChild(e),this.container}}),e}(),d=function(){function e(e){u.call(this,e,e.renderInteractiveForms)}return a.Util.inherit(e,u,{render:function(){this.container.className="buttonWidgetAnnotation radioButton"
var e=document.createElement("input")
return e.disabled=this.data.readOnly,e.type="radio",e.name=this.data.fieldName,this.data.fieldValue===this.data.buttonValue&&e.setAttribute("checked",!0),this.container.appendChild(e),this.container}}),e}(),f=function(){function e(e){u.call(this,e,e.renderInteractiveForms)}return a.Util.inherit(e,u,{render:function(){this.container.className="choiceWidgetAnnotation"
var e=document.createElement("select")
e.disabled=this.data.readOnly,this.data.combo||(e.size=this.data.options.length,this.data.multiSelect&&(e.multiple=!0))
for(var t=0,r=this.data.options.length;t<r;t++){var n=this.data.options[t],i=document.createElement("option")
i.textContent=n.displayValue,i.value=n.exportValue,this.data.fieldValue.indexOf(n.displayValue)>=0&&i.setAttribute("selected",!0),e.appendChild(i)}return this.container.appendChild(e),this.container}}),e}(),p=function(){function e(e){var t=!(!e.data.title&&!e.data.contents)
o.call(this,e,t)}var t=["Line"]
return a.Util.inherit(e,o,{render:function(){if(this.container.className="popupAnnotation",t.indexOf(this.data.parentType)>=0)return this.container
var e='[data-annotation-id="'+this.data.parentId+'"]',r=this.layer.querySelector(e)
if(!r)return this.container
var n=new m({container:this.container,trigger:r,color:this.data.color,title:this.data.title,contents:this.data.contents}),a=parseFloat(r.style.left),o=parseFloat(r.style.width)
return i.CustomStyle.setProp("transformOrigin",this.container,-(a+o)+"px -"+r.style.top),this.container.style.left=a+o+"px",this.container.appendChild(n.render()),this.container}}),e}(),m=function(){function e(e){this.container=e.container,this.trigger=e.trigger,this.color=e.color,this.title=e.title,this.contents=e.contents,this.hideWrapper=e.hideWrapper||!1,this.pinned=!1}return e.prototype={render:function(){var e=document.createElement("div")
e.className="popupWrapper",this.hideElement=this.hideWrapper?e:this.container,this.hideElement.setAttribute("hidden",!0)
var t=document.createElement("div")
t.className="popup"
var r=this.color
if(r){var n=.7*(255-r[0])+r[0],i=.7*(255-r[1])+r[1],o=.7*(255-r[2])+r[2]
t.style.backgroundColor=a.Util.makeCssRgb(0|n,0|i,0|o)}var s=this._formatContents(this.contents),l=document.createElement("h1")
return l.textContent=this.title,this.trigger.addEventListener("click",this._toggle.bind(this)),this.trigger.addEventListener("mouseover",this._show.bind(this,!1)),this.trigger.addEventListener("mouseout",this._hide.bind(this,!1)),t.addEventListener("click",this._hide.bind(this,!0)),t.appendChild(l),t.appendChild(s),e.appendChild(t),e},_formatContents:function(e){for(var t=document.createElement("p"),r=e.split(/(?:\r\n?|\n)/),n=0,i=r.length;n<i;++n){var a=r[n]
t.appendChild(document.createTextNode(a)),n<i-1&&t.appendChild(document.createElement("br"))}return t},_toggle:function(){this.pinned?this._hide(!0):this._show(!0)},_show:function(e){e&&(this.pinned=!0),this.hideElement.hasAttribute("hidden")&&(this.hideElement.removeAttribute("hidden"),this.container.style.zIndex+=1)},_hide:function(e){e&&(this.pinned=!1),this.hideElement.hasAttribute("hidden")||this.pinned||(this.hideElement.setAttribute("hidden",!0),this.container.style.zIndex-=1)}},e}(),g=function(){function e(e){var t=!!(e.data.hasPopup||e.data.title||e.data.contents)
o.call(this,e,t,!0)}var t="http://www.w3.org/2000/svg"
return a.Util.inherit(e,o,{render:function(){this.container.className="lineAnnotation"
var e=this.data,r=e.rect[2]-e.rect[0],n=e.rect[3]-e.rect[1],i=document.createElementNS(t,"svg:svg")
i.setAttributeNS(null,"version","1.1"),i.setAttributeNS(null,"width",r+"px"),i.setAttributeNS(null,"height",n+"px"),i.setAttributeNS(null,"preserveAspectRatio","none"),i.setAttributeNS(null,"viewBox","0 0 "+r+" "+n)
var a=document.createElementNS(t,"svg:line")
return a.setAttributeNS(null,"x1",e.rect[2]-e.lineCoordinates[0]),a.setAttributeNS(null,"y1",e.rect[3]-e.lineCoordinates[1]),a.setAttributeNS(null,"x2",e.rect[2]-e.lineCoordinates[2]),a.setAttributeNS(null,"y2",e.rect[3]-e.lineCoordinates[3]),a.setAttributeNS(null,"stroke-width",e.borderStyle.width),a.setAttributeNS(null,"stroke","transparent"),i.appendChild(a),this.container.append(i),this._createPopup(this.container,a,this.data),this.container}}),e}(),v=function(){function e(e){var t=!!(e.data.hasPopup||e.data.title||e.data.contents)
o.call(this,e,t,!0)}return a.Util.inherit(e,o,{render:function(){return this.container.className="highlightAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}),e}(),b=function(){function e(e){var t=!!(e.data.hasPopup||e.data.title||e.data.contents)
o.call(this,e,t,!0)}return a.Util.inherit(e,o,{render:function(){return this.container.className="underlineAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}),e}(),_=function(){function e(e){var t=!!(e.data.hasPopup||e.data.title||e.data.contents)
o.call(this,e,t,!0)}return a.Util.inherit(e,o,{render:function(){return this.container.className="squigglyAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}),e}(),y=function(){function e(e){var t=!!(e.data.hasPopup||e.data.title||e.data.contents)
o.call(this,e,t,!0)}return a.Util.inherit(e,o,{render:function(){return this.container.className="strikeoutAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}),e}(),A=function(){function e(e){o.call(this,e,!0)
var t=this.data.file
this.filename=(0,i.getFilenameFromUrl)(t.filename),this.content=t.content,this.linkService.onFileAttachmentAnnotation({id:(0,a.stringToPDFString)(t.filename),filename:t.filename,content:t.content})}return a.Util.inherit(e,o,{render:function(){this.container.className="fileAttachmentAnnotation"
var e=document.createElement("div")
return e.style.height=this.container.style.height,e.style.width=this.container.style.width,e.addEventListener("dblclick",this._download.bind(this)),this.data.hasPopup||!this.data.title&&!this.data.contents||this._createPopup(this.container,e,this.data),this.container.appendChild(e),this.container},_download:function(){if(!this.downloadManager)return void(0,a.warn)("Download cannot be started due to unavailable download manager")
this.downloadManager.downloadData(this.content,this.filename,"")}}),e}(),S=function(){return{render:function(e){for(var t=new n,r=0,a=e.annotations.length;r<a;r++){var o=e.annotations[r]
if(o){var s=t.create({data:o,layer:e.div,page:e.page,viewport:e.viewport,linkService:e.linkService,downloadManager:e.downloadManager,imageResourcesPath:e.imageResourcesPath||(0,i.getDefaultSetting)("imageResourcesPath"),renderInteractiveForms:e.renderInteractiveForms||!1})
s.isRenderable&&e.div.appendChild(s.render())}}},update:function(e){for(var t=0,r=e.annotations.length;t<r;t++){var n=e.annotations[t],a=e.div.querySelector('[data-annotation-id="'+n.id+'"]')
a&&i.CustomStyle.setProp("transform",a,"matrix("+e.viewport.transform.join(",")+")")}e.div.removeAttribute("hidden")}}}()
t.AnnotationLayer=S},function(e,t,r){"use strict"
function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){R=e}function a(e,t,r,n){var i=new k
arguments.length>1&&(0,c.deprecated)("getDocument is called with pdfDataRangeTransport, passwordCallback or progressCallback argument"),t&&(t instanceof T||(t=Object.create(t),t.length=e.length,t.initialData=e.initialData,t.abort||(t.abort=function(){})),e=Object.create(e),e.range=t),i.onPassword=r||null,i.onProgress=n||null
var a
if("string"==typeof e)a={url:e}
else if((0,c.isArrayBuffer)(e))a={data:e}
else if(e instanceof T)a={range:e}
else{if("object"!==(void 0===e?"undefined":u(e)))throw new Error("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object")
if(!e.url&&!e.data&&!e.range)throw new Error("Invalid parameter object: need either .data, .range or .url")
a=e}var s={},l=null,d=null,f=h.DOMCMapReaderFactory
for(var p in a)if("url"!==p||"undefined"==typeof window)if("range"!==p)if("worker"!==p)if("data"!==p||a[p]instanceof Uint8Array)"CMapReaderFactory"!==p?s[p]=a[p]:f=a[p]
else{var m=a[p]
if("string"==typeof m)s[p]=(0,c.stringToBytes)(m)
else if("object"!==(void 0===m?"undefined":u(m))||null===m||isNaN(m.length)){if(!(0,c.isArrayBuffer)(m))throw new Error("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.")
s[p]=new Uint8Array(m)}else s[p]=new Uint8Array(m)}else d=a[p]
else l=a[p]
else s[p]=new URL(a[p],window.location).href
if(s.rangeChunkSize=s.rangeChunkSize||b,s.ignoreErrors=!0!==s.stopAtErrors,void 0!==s.disableNativeImageDecoder&&(0,c.deprecated)("parameter disableNativeImageDecoder, use nativeImageDecoderSupport instead"),s.nativeImageDecoderSupport=s.nativeImageDecoderSupport||(!0===s.disableNativeImageDecoder?c.NativeImageDecoding.NONE:c.NativeImageDecoding.DECODE),s.nativeImageDecoderSupport!==c.NativeImageDecoding.DECODE&&s.nativeImageDecoderSupport!==c.NativeImageDecoding.NONE&&s.nativeImageDecoderSupport!==c.NativeImageDecoding.DISPLAY&&((0,c.warn)("Invalid parameter nativeImageDecoderSupport: need a state of enum {NativeImageDecoding}"),s.nativeImageDecoderSupport=c.NativeImageDecoding.DECODE),!d){var g=(0,h.getDefaultSetting)("workerPort")
d=g?L.fromPort(g):new L,i._worker=d}var _=i.docId
return d.promise.then(function(){if(i.destroyed)throw new Error("Loading aborted")
return o(d,s,l,_).then(function(e){if(i.destroyed)throw new Error("Loading aborted")
var t=void 0
l?t=new v.PDFDataTransportStream(s,l):s.data||(t=new R({source:s,disableRange:(0,h.getDefaultSetting)("disableRange")}))
var r=new c.MessageHandler(_,e,d.port)
r.postMessageTransfers=d.postMessageTransfers
var n=new j(r,i,t,f)
i._transport=n,r.send("Ready",null)})}).catch(i._capability.reject),i}function o(e,t,r,n){return e.destroyed?Promise.reject(new Error("Worker was destroyed")):(t.disableAutoFetch=(0,h.getDefaultSetting)("disableAutoFetch"),t.disableStream=(0,h.getDefaultSetting)("disableStream"),t.chunkedViewerLoading=!!r,r&&(t.length=r.length,t.initialData=r.initialData),e.messageHandler.sendWithPromise("GetDocRequest",{docId:n,source:{data:t.data,url:t.url,password:t.password,disableAutoFetch:t.disableAutoFetch,rangeChunkSize:t.rangeChunkSize,length:t.length},maxImageSize:(0,h.getDefaultSetting)("maxImageSize"),disableFontFace:(0,h.getDefaultSetting)("disableFontFace"),disableCreateObjectURL:(0,h.getDefaultSetting)("disableCreateObjectURL"),postMessageTransfers:(0,h.getDefaultSetting)("postMessageTransfers")&&!y,docBaseUrl:t.docBaseUrl,nativeImageDecoderSupport:t.nativeImageDecoderSupport,ignoreErrors:t.ignoreErrors}).then(function(t){if(e.destroyed)throw new Error("Worker was destroyed")
return t}))}Object.defineProperty(t,"__esModule",{value:!0}),t.build=t.version=t._UnsupportedManager=t.setPDFNetworkStreamClass=t.PDFPageProxy=t.PDFDocumentProxy=t.PDFWorker=t.PDFDataRangeTransport=t.LoopbackPort=t.getDocument=void 0
var s,l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=r(0),h=r(7),d=r(83),f=r(82),p=r(14),m=function(e){return e&&e.__esModule?e:{default:e}}(p),g=r(51),v=r(85),b=65536,_=!1,y=!1,A="undefined"!=typeof document&&document.currentScript?document.currentScript.src:null,S=null,w=!1
"undefined"==typeof window?(_=!0,void 0===require.ensure&&(require.ensure=require("node-ensure")),w=!0):"undefined"!=typeof require&&"function"==typeof require.ensure&&(w=!0),"undefined"!=typeof requirejs&&requirejs.toUrl&&(s=requirejs.toUrl("pdfjs-dist/pdf.worker.js"))
var P="undefined"!=typeof requirejs&&requirejs.load
S=w?function(e){require.ensure([],function(){var t
t=require("./pdf.worker.js"),e(t.WorkerMessageHandler)})}:P?function(e){requirejs(["pdfjs-dist/pdf.worker"],function(t){e(t.WorkerMessageHandler)})}:null
var R,C,x,k=function(){function e(){this._capability=(0,c.createPromiseCapability)(),this._transport=null,this._worker=null,this.docId="d"+t++,this.destroyed=!1,this.onPassword=null,this.onProgress=null,this.onUnsupportedFeature=null}var t=0
return e.prototype={get promise(){return this._capability.promise},destroy:function(){var e=this
return this.destroyed=!0,(this._transport?this._transport.destroy():Promise.resolve()).then(function(){e._transport=null,e._worker&&(e._worker.destroy(),e._worker=null)})},then:function(e,t){return this.promise.then.apply(this.promise,arguments)}},e}(),T=function(){function e(e,t){this.length=e,this.initialData=t,this._rangeListeners=[],this._progressListeners=[],this._progressiveReadListeners=[],this._readyCapability=(0,c.createPromiseCapability)()}return e.prototype={addRangeListener:function(e){this._rangeListeners.push(e)},addProgressListener:function(e){this._progressListeners.push(e)},addProgressiveReadListener:function(e){this._progressiveReadListeners.push(e)},onDataRange:function(e,t){for(var r=this._rangeListeners,n=0,i=r.length;n<i;++n)r[n](e,t)},onDataProgress:function(e){var t=this
this._readyCapability.promise.then(function(){for(var r=t._progressListeners,n=0,i=r.length;n<i;++n)r[n](e)})},onDataProgressiveRead:function(e){var t=this
this._readyCapability.promise.then(function(){for(var r=t._progressiveReadListeners,n=0,i=r.length;n<i;++n)r[n](e)})},transportReady:function(){this._readyCapability.resolve()},requestDataRange:function(e,t){throw new Error("Abstract method PDFDataRangeTransport.requestDataRange")},abort:function(){}},e}(),E=function(){function e(e,t,r){this.pdfInfo=e,this.transport=t,this.loadingTask=r}return e.prototype={get numPages(){return this.pdfInfo.numPages},get fingerprint(){return this.pdfInfo.fingerprint},getPage:function(e){return this.transport.getPage(e)},getPageIndex:function(e){return this.transport.getPageIndex(e)},getDestinations:function(){return this.transport.getDestinations()},getDestination:function(e){return this.transport.getDestination(e)},getPageLabels:function(){return this.transport.getPageLabels()},getPageMode:function(){return this.transport.getPageMode()},getAttachments:function(){return this.transport.getAttachments()},getJavaScript:function(){return this.transport.getJavaScript()},getOutline:function(){return this.transport.getOutline()},getMetadata:function(){return this.transport.getMetadata()},getData:function(){return this.transport.getData()},getDownloadInfo:function(){return this.transport.downloadInfoCapability.promise},getStats:function(){return this.transport.getStats()},cleanup:function(){this.transport.startCleanup()},destroy:function(){return this.loadingTask.destroy()}},e}(),O=function(){function e(e,t,r){this.pageIndex=e,this.pageInfo=t,this.transport=r,this.stats=new c.StatTimer,this.stats.enabled=(0,h.getDefaultSetting)("enableStats"),this.commonObjs=r.commonObjs,this.objs=new D,this.cleanupAfterRender=!1,this.pendingCleanup=!1,this.intentStates=Object.create(null),this.destroyed=!1}return e.prototype={get pageNumber(){return this.pageIndex+1},get rotate(){return this.pageInfo.rotate},get ref(){return this.pageInfo.ref},get userUnit(){return this.pageInfo.userUnit},get view(){return this.pageInfo.view},getViewport:function(e,t){return arguments.length<2&&(t=this.rotate),new c.PageViewport(this.view,e,t,0,0)},getAnnotations:function(e){var t=e&&e.intent||null
return this.annotationsPromise&&this.annotationsIntent===t||(this.annotationsPromise=this.transport.getAnnotations(this.pageIndex,t),this.annotationsIntent=t),this.annotationsPromise},render:function(e){var t=this,r=this.stats
r.time("Overall"),this.pendingCleanup=!1
var n="print"===e.intent?"print":"display",i=e.canvasFactory||new h.DOMCanvasFactory
this.intentStates[n]||(this.intentStates[n]=Object.create(null))
var a=this.intentStates[n]
a.displayReadyCapability||(a.receivingOperatorList=!0,a.displayReadyCapability=(0,c.createPromiseCapability)(),a.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this.stats.time("Page Request"),this.transport.messageHandler.send("RenderPageRequest",{pageIndex:this.pageNumber-1,intent:n,renderInteractiveForms:!0===e.renderInteractiveForms}))
var o=function(e){var n=a.renderTasks.indexOf(s)
n>=0&&a.renderTasks.splice(n,1),t.cleanupAfterRender&&(t.pendingCleanup=!0),t._tryCleanup(),e?s.capability.reject(e):s.capability.resolve(),r.timeEnd("Rendering"),r.timeEnd("Overall")},s=new N(o,e,this.objs,this.commonObjs,a.operatorList,this.pageNumber,i)
s.useRequestAnimationFrame="print"!==n,a.renderTasks||(a.renderTasks=[]),a.renderTasks.push(s)
var l=s.task
return e.continueCallback&&((0,c.deprecated)("render is used with continueCallback parameter"),l.onContinue=e.continueCallback),a.displayReadyCapability.promise.then(function(e){if(t.pendingCleanup)return void o()
r.time("Rendering"),s.initializeGraphics(e),s.operatorListChanged()}).catch(o),l},getOperatorList:function(){function e(){if(r.operatorList.lastChunk){r.opListReadCapability.resolve(r.operatorList)
var e=r.renderTasks.indexOf(t)
e>=0&&r.renderTasks.splice(e,1)}}this.intentStates.oplist||(this.intentStates.oplist=Object.create(null))
var t,r=this.intentStates.oplist
return r.opListReadCapability||(t={},t.operatorListChanged=e,r.receivingOperatorList=!0,r.opListReadCapability=(0,c.createPromiseCapability)(),r.renderTasks=[],r.renderTasks.push(t),r.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this.transport.messageHandler.send("RenderPageRequest",{pageIndex:this.pageIndex,intent:"oplist"})),r.opListReadCapability.promise},streamTextContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this.pageNumber-1,normalizeWhitespace:!0===e.normalizeWhitespace,combineTextItems:!0!==e.disableCombineTextItems},{highWaterMark:100,size:function(e){return e.items.length}})},getTextContent:function(e){e=e||{}
var t=this.streamTextContent(e)
return new Promise(function(e,r){function n(){i.read().then(function(t){var r=t.value
if(t.done)return void e(a)
c.Util.extendObj(a.styles,r.styles),c.Util.appendToArray(a.items,r.items),n()},r)}var i=t.getReader(),a={items:[],styles:Object.create(null)}
n()})},_destroy:function(){this.destroyed=!0,this.transport.pageCache[this.pageIndex]=null
var e=[]
return Object.keys(this.intentStates).forEach(function(t){if("oplist"!==t){this.intentStates[t].renderTasks.forEach(function(t){var r=t.capability.promise.catch(function(){})
e.push(r),t.cancel()})}},this),this.objs.clear(),this.annotationsPromise=null,this.pendingCleanup=!1,Promise.all(e)},destroy:function(){(0,c.deprecated)("page destroy method, use cleanup() instead"),this.cleanup()},cleanup:function(){this.pendingCleanup=!0,this._tryCleanup()},_tryCleanup:function(){this.pendingCleanup&&!Object.keys(this.intentStates).some(function(e){var t=this.intentStates[e]
return 0!==t.renderTasks.length||t.receivingOperatorList},this)&&(Object.keys(this.intentStates).forEach(function(e){delete this.intentStates[e]},this),this.objs.clear(),this.annotationsPromise=null,this.pendingCleanup=!1)},_startRenderPage:function(e,t){var r=this.intentStates[t]
r.displayReadyCapability&&r.displayReadyCapability.resolve(e)},_renderPageChunk:function(e,t){var r,n,i=this.intentStates[t]
for(r=0,n=e.length;r<n;r++)i.operatorList.fnArray.push(e.fnArray[r]),i.operatorList.argsArray.push(e.argsArray[r])
for(i.operatorList.lastChunk=e.lastChunk,r=0;r<i.renderTasks.length;r++)i.renderTasks[r].operatorListChanged()
e.lastChunk&&(i.receivingOperatorList=!1,this._tryCleanup())}},e}(),I=function(){function e(t){n(this,e),this._listeners=[],this._defer=t,this._deferred=Promise.resolve(void 0)}return l(e,[{key:"postMessage",value:function(e,t){function r(e){if("object"!==(void 0===e?"undefined":u(e))||null===e)return e
if(i.has(e))return i.get(e)
var n,a
if((a=e.buffer)&&(0,c.isArrayBuffer)(a)){var o=t&&t.indexOf(a)>=0
return n=e===a?e:o?new e.constructor(a,e.byteOffset,e.byteLength):new e.constructor(e),i.set(e,n),n}n=Array.isArray(e)?[]:{},i.set(e,n)
for(var s in e){for(var l,h=e;!(l=Object.getOwnPropertyDescriptor(h,s));)h=Object.getPrototypeOf(h)
void 0!==l.value&&"function"!=typeof l.value&&(n[s]=r(l.value))}return n}var n=this
if(!this._defer)return void this._listeners.forEach(function(t){t.call(this,{data:e})},this)
var i=new WeakMap,a={data:r(e)}
this._deferred.then(function(){n._listeners.forEach(function(e){e.call(this,a)},n)})}},{key:"addEventListener",value:function(e,t){this._listeners.push(t)}},{key:"removeEventListener",value:function(e,t){var r=this._listeners.indexOf(t)
this._listeners.splice(r,1)}},{key:"terminate",value:function(){this._listeners=[]}}]),e}(),L=function(){function e(){if(void 0!==s)return s
if((0,h.getDefaultSetting)("workerSrc"))return(0,h.getDefaultSetting)("workerSrc")
if(A)return A.replace(/(\.(?:min\.)?js)(\?.*)?$/i,".worker$1$2")
throw new Error("No PDFJS.workerSrc specified")}function t(){return a?a.promise:(a=(0,c.createPromiseCapability)(),(S||function(t){c.Util.loadScript(e(),function(){t(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler)})})(a.resolve),a.promise)}function r(e){var t="importScripts('"+e+"');"
return URL.createObjectURL(new Blob([t]))}function n(e,t){if(t&&o.has(t))throw new Error("Cannot use more than one PDFWorker per port")
if(this.name=e,this.destroyed=!1,this.postMessageTransfers=!0,this._readyCapability=(0,c.createPromiseCapability)(),this._port=null,this._webWorker=null,this._messageHandler=null,t)return o.set(t,this),void this._initializeFromPort(t)
this._initialize()}var i=0,a=void 0,o=new WeakMap
return n.prototype={get promise(){return this._readyCapability.promise},get port(){return this._port},get messageHandler(){return this._messageHandler},_initializeFromPort:function(e){this._port=e,this._messageHandler=new c.MessageHandler("main","worker",e),this._messageHandler.on("ready",function(){}),this._readyCapability.resolve()},_initialize:function(){var t=this
if(!_&&!(0,h.getDefaultSetting)("disableWorker")&&"undefined"!=typeof Worker){var n=e()
try{(0,c.isSameOrigin)(window.location.href,n)||(n=r(new URL(n,window.location).href))
var i=new Worker(n),a=new c.MessageHandler("main","worker",i),o=function(){i.removeEventListener("error",s),a.destroy(),i.terminate(),t.destroyed?t._readyCapability.reject(new Error("Worker was destroyed")):t._setupFakeWorker()},s=function(){t._webWorker||o()}
i.addEventListener("error",s),a.on("test",function(e){if(i.removeEventListener("error",s),t.destroyed)return void o()
e&&e.supportTypedArray?(t._messageHandler=a,t._port=i,t._webWorker=i,e.supportTransfers||(t.postMessageTransfers=!1,y=!0),t._readyCapability.resolve(),a.send("configure",{verbosity:(0,c.getVerbosityLevel)()})):(t._setupFakeWorker(),a.destroy(),i.terminate())}),a.on("console_log",function(e){console.log.apply(console,e)}),a.on("console_error",function(e){console.error.apply(console,e)}),a.on("ready",function(e){if(i.removeEventListener("error",s),t.destroyed)return void o()
try{l()}catch(e){t._setupFakeWorker()}})
var l=function(){var e=(0,h.getDefaultSetting)("postMessageTransfers")&&!y,t=new Uint8Array([e?255:0])
try{a.send("test",t,[t.buffer])}catch(e){(0,c.info)("Cannot use postMessage transfers"),t[0]=0,a.send("test",t)}}
return void l()}catch(e){(0,c.info)("The worker has been disabled.")}}this._setupFakeWorker()},_setupFakeWorker:function(){var e=this
_||(0,h.getDefaultSetting)("disableWorker")||((0,c.warn)("Setting up fake worker."),_=!0),t().then(function(t){if(e.destroyed)return void e._readyCapability.reject(new Error("Worker was destroyed"))
var r=Uint8Array!==Float32Array,n=new I(r)
e._port=n
var a="fake"+i++,o=new c.MessageHandler(a+"_worker",a,n)
t.setup(o,n)
var s=new c.MessageHandler(a,a+"_worker",n)
e._messageHandler=s,e._readyCapability.resolve()})},destroy:function(){this.destroyed=!0,this._webWorker&&(this._webWorker.terminate(),this._webWorker=null),o.delete(this._port),this._port=null,this._messageHandler&&(this._messageHandler.destroy(),this._messageHandler=null)}},n.fromPort=function(e){return o.has(e)?o.get(e):new n(null,e)},n}(),j=function(){function e(e,t,r,n){this.messageHandler=e,this.loadingTask=t,this.commonObjs=new D,this.fontLoader=new d.FontLoader(t.docId),this.CMapReaderFactory=new n({baseUrl:(0,h.getDefaultSetting)("cMapUrl"),isCompressed:(0,h.getDefaultSetting)("cMapPacked")}),this.destroyed=!1,this.destroyCapability=null,this._passwordCapability=null,this._networkStream=r,this._fullReader=null,this._lastProgress=null,this.pageCache=[],this.pagePromises=[],this.downloadInfoCapability=(0,c.createPromiseCapability)(),this.setupMessageHandler()}return e.prototype={destroy:function(){var e=this
if(this.destroyCapability)return this.destroyCapability.promise
this.destroyed=!0,this.destroyCapability=(0,c.createPromiseCapability)(),this._passwordCapability&&this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"))
var t=[]
this.pageCache.forEach(function(e){e&&t.push(e._destroy())}),this.pageCache=[],this.pagePromises=[]
var r=this.messageHandler.sendWithPromise("Terminate",null)
return t.push(r),Promise.all(t).then(function(){e.fontLoader.clear(),e._networkStream&&e._networkStream.cancelAllRequests(),e.messageHandler&&(e.messageHandler.destroy(),e.messageHandler=null),e.destroyCapability.resolve()},this.destroyCapability.reject),this.destroyCapability.promise},setupMessageHandler:function(){var e=this.messageHandler,t=this.loadingTask
e.on("GetReader",function(e,t){var r=this;(0,c.assert)(this._networkStream),this._fullReader=this._networkStream.getFullReader(),this._fullReader.onProgress=function(e){r._lastProgress={loaded:e.loaded,total:e.total}},t.onPull=function(){r._fullReader.read().then(function(e){var r=e.value
if(e.done)return void t.close();(0,c.assert)((0,c.isArrayBuffer)(r)),t.enqueue(new Uint8Array(r),1,[r])}).catch(function(e){t.error(e)})},t.onCancel=function(e){r._fullReader.cancel(e)}},this),e.on("ReaderHeadersReady",function(e){var t=this,r=(0,c.createPromiseCapability)(),n=this._fullReader
return n.headersReady.then(function(){if(!n.isStreamingSupported||!n.isRangeSupported){if(t._lastProgress){var e=t.loadingTask
e.onProgress&&e.onProgress(t._lastProgress)}n.onProgress=function(e){var r=t.loadingTask
r.onProgress&&r.onProgress({loaded:e.loaded,total:e.total})}}r.resolve({isStreamingSupported:n.isStreamingSupported,isRangeSupported:n.isRangeSupported,contentLength:n.contentLength})},r.reject),r.promise},this),e.on("GetRangeReader",function(e,t){(0,c.assert)(this._networkStream)
var r=this._networkStream.getRangeReader(e.begin,e.end)
t.onPull=function(){r.read().then(function(e){var r=e.value
if(e.done)return void t.close();(0,c.assert)((0,c.isArrayBuffer)(r)),t.enqueue(new Uint8Array(r),1,[r])}).catch(function(e){t.error(e)})},t.onCancel=function(e){r.cancel(e)}},this),e.on("GetDoc",function(e){var t=e.pdfInfo
this.numPages=e.pdfInfo.numPages
var r=this.loadingTask,n=new E(t,this,r)
this.pdfDocument=n,r._capability.resolve(n)},this),e.on("PasswordRequest",function(e){var r=this
if(this._passwordCapability=(0,c.createPromiseCapability)(),t.onPassword){var n=function(e){r._passwordCapability.resolve({password:e})}
t.onPassword(n,e.code)}else this._passwordCapability.reject(new c.PasswordException(e.message,e.code))
return this._passwordCapability.promise},this),e.on("PasswordException",function(e){t._capability.reject(new c.PasswordException(e.message,e.code))},this),e.on("InvalidPDF",function(e){this.loadingTask._capability.reject(new c.InvalidPDFException(e.message))},this),e.on("MissingPDF",function(e){this.loadingTask._capability.reject(new c.MissingPDFException(e.message))},this),e.on("UnexpectedResponse",function(e){this.loadingTask._capability.reject(new c.UnexpectedResponseException(e.message,e.status))},this),e.on("UnknownError",function(e){this.loadingTask._capability.reject(new c.UnknownErrorException(e.message,e.details))},this),e.on("DataLoaded",function(e){this.downloadInfoCapability.resolve(e)},this),e.on("PDFManagerReady",function(e){},this),e.on("StartRenderPage",function(e){if(!this.destroyed){var t=this.pageCache[e.pageIndex]
t.stats.timeEnd("Page Request"),t._startRenderPage(e.transparency,e.intent)}},this),e.on("RenderPageChunk",function(e){if(!this.destroyed){this.pageCache[e.pageIndex]._renderPageChunk(e.operatorList,e.intent)}},this),e.on("commonobj",function(e){var t=this
if(!this.destroyed){var r=e[0],n=e[1]
if(!this.commonObjs.hasData(r))switch(n){case"Font":var i=e[2]
if("error"in i){var a=i.error;(0,c.warn)("Error during font loading: "+a),this.commonObjs.resolve(r,a)
break}var o=null;(0,h.getDefaultSetting)("pdfBug")&&m.default.FontInspector&&m.default.FontInspector.enabled&&(o={registerFont:function(e,t){m.default.FontInspector.fontAdded(e,t)}})
var s=new d.FontFaceObject(i,{isEvalSuported:(0,h.getDefaultSetting)("isEvalSupported"),disableFontFace:(0,h.getDefaultSetting)("disableFontFace"),fontRegistry:o}),l=function(e){t.commonObjs.resolve(r,s)}
this.fontLoader.bind([s],l)
break
case"FontPath":this.commonObjs.resolve(r,e[2])
break
default:throw new Error("Got unknown common object type "+n)}}},this),e.on("obj",function(e){if(!this.destroyed){var t,r=e[0],n=e[1],i=e[2],a=this.pageCache[n]
if(!a.objs.hasData(r))switch(i){case"JpegStream":t=e[3],(0,c.loadJpegStream)(r,t,a.objs)
break
case"Image":t=e[3],a.objs.resolve(r,t)
t&&"data"in t&&t.data.length>8e6&&(a.cleanupAfterRender=!0)
break
default:throw new Error("Got unknown object type "+i)}}},this),e.on("DocProgress",function(e){if(!this.destroyed){var t=this.loadingTask
t.onProgress&&t.onProgress({loaded:e.loaded,total:e.total})}},this),e.on("PageError",function(e){if(!this.destroyed){var t=this.pageCache[e.pageNum-1],r=t.intentStates[e.intent]
if(!r.displayReadyCapability)throw new Error(e.error)
if(r.displayReadyCapability.reject(e.error),r.operatorList){r.operatorList.lastChunk=!0
for(var n=0;n<r.renderTasks.length;n++)r.renderTasks[n].operatorListChanged()}}},this),e.on("UnsupportedFeature",function(e){if(!this.destroyed){var t=e.featureId,r=this.loadingTask
r.onUnsupportedFeature&&r.onUnsupportedFeature(t),M.notify(t)}},this),e.on("JpegDecode",function(e){if(this.destroyed)return Promise.reject(new Error("Worker was destroyed"))
if("undefined"==typeof document)return Promise.reject(new Error('"document" is not defined.'))
var t=e[0],r=e[1]
return 3!==r&&1!==r?Promise.reject(new Error("Only 3 components or 1 component can be returned")):new Promise(function(e,n){var i=new Image
i.onload=function(){var t=i.width,n=i.height,a=t*n,o=4*a,s=new Uint8Array(a*r),l=document.createElement("canvas")
l.width=t,l.height=n
var u=l.getContext("2d")
u.drawImage(i,0,0)
var c,h,d=u.getImageData(0,0,t,n).data
if(3===r)for(c=0,h=0;c<o;c+=4,h+=3)s[h]=d[c],s[h+1]=d[c+1],s[h+2]=d[c+2]
else if(1===r)for(c=0,h=0;c<o;c+=4,h++)s[h]=d[c]
e({data:s,width:t,height:n})},i.onerror=function(){n(new Error("JpegDecode failed to load image"))},i.src=t})},this),e.on("FetchBuiltInCMap",function(e){return this.destroyed?Promise.reject(new Error("Worker was destroyed")):this.CMapReaderFactory.fetch({name:e.name})},this)},getData:function(){return this.messageHandler.sendWithPromise("GetData",null)},getPage:function(e,t){var r=this
if(!(0,c.isInt)(e)||e<=0||e>this.numPages)return Promise.reject(new Error("Invalid page request"))
var n=e-1
if(n in this.pagePromises)return this.pagePromises[n]
var i=this.messageHandler.sendWithPromise("GetPage",{pageIndex:n}).then(function(e){if(r.destroyed)throw new Error("Transport destroyed")
var t=new O(n,e,r)
return r.pageCache[n]=t,t})
return this.pagePromises[n]=i,i},getPageIndex:function(e){return this.messageHandler.sendWithPromise("GetPageIndex",{ref:e}).catch(function(e){return Promise.reject(new Error(e))})},getAnnotations:function(e,t){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:e,intent:t})},getDestinations:function(){return this.messageHandler.sendWithPromise("GetDestinations",null)},getDestination:function(e){return this.messageHandler.sendWithPromise("GetDestination",{id:e})},getPageLabels:function(){return this.messageHandler.sendWithPromise("GetPageLabels",null)},getPageMode:function(){return this.messageHandler.sendWithPromise("GetPageMode",null)},getAttachments:function(){return this.messageHandler.sendWithPromise("GetAttachments",null)},getJavaScript:function(){return this.messageHandler.sendWithPromise("GetJavaScript",null)},getOutline:function(){return this.messageHandler.sendWithPromise("GetOutline",null)},getMetadata:function(){return this.messageHandler.sendWithPromise("GetMetadata",null).then(function(e){return{info:e[0],metadata:e[1]?new g.Metadata(e[1]):null}})},getStats:function(){return this.messageHandler.sendWithPromise("GetStats",null)},startCleanup:function(){var e=this
this.messageHandler.sendWithPromise("Cleanup",null).then(function(){for(var t=0,r=e.pageCache.length;t<r;t++){var n=e.pageCache[t]
n&&n.cleanup()}e.commonObjs.clear(),e.fontLoader.clear()})}},e}(),D=function(){function e(){this.objs=Object.create(null)}return e.prototype={ensureObj:function(e){if(this.objs[e])return this.objs[e]
var t={capability:(0,c.createPromiseCapability)(),data:null,resolved:!1}
return this.objs[e]=t,t},get:function(e,t){if(t)return this.ensureObj(e).capability.promise.then(t),null
var r=this.objs[e]
if(!r||!r.resolved)throw new Error("Requesting object that isn't resolved yet "+e)
return r.data},resolve:function(e,t){var r=this.ensureObj(e)
r.resolved=!0,r.data=t,r.capability.resolve(t)},isResolved:function(e){var t=this.objs
return!!t[e]&&t[e].resolved},hasData:function(e){return this.isResolved(e)},getData:function(e){var t=this.objs
return t[e]&&t[e].resolved?t[e].data:null},clear:function(){this.objs=Object.create(null)}},e}(),F=function(){function e(e){this._internalRenderTask=e,this.onContinue=null}return e.prototype={get promise(){return this._internalRenderTask.capability.promise},cancel:function(){this._internalRenderTask.cancel()},then:function(e,t){return this.promise.then.apply(this.promise,arguments)}},e}(),N=function(){function e(e,t,r,n,i,a,o){this.callback=e,this.params=t,this.objs=r,this.commonObjs=n,this.operatorListIdx=null,this.operatorList=i,this.pageNumber=a,this.canvasFactory=o,this.running=!1,this.graphicsReadyCallback=null,this.graphicsReady=!1,this.useRequestAnimationFrame=!1,this.cancelled=!1,this.capability=(0,c.createPromiseCapability)(),this.task=new F(this),this._continueBound=this._continue.bind(this),this._scheduleNextBound=this._scheduleNext.bind(this),this._nextBound=this._next.bind(this),this._canvas=t.canvasContext.canvas}var t=new WeakMap
return e.prototype={initializeGraphics:function(e){if(this._canvas){if(t.has(this._canvas))throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.")
t.set(this._canvas,this)}if(!this.cancelled){(0,h.getDefaultSetting)("pdfBug")&&m.default.StepperManager&&m.default.StepperManager.enabled&&(this.stepper=m.default.StepperManager.create(this.pageNumber-1),this.stepper.init(this.operatorList),this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint())
var r=this.params
this.gfx=new f.CanvasGraphics(r.canvasContext,this.commonObjs,this.objs,this.canvasFactory,r.imageLayer),this.gfx.beginDrawing({transform:r.transform,viewport:r.viewport,transparency:e,background:r.background}),this.operatorListIdx=0,this.graphicsReady=!0,this.graphicsReadyCallback&&this.graphicsReadyCallback()}},cancel:function(){this.running=!1,this.cancelled=!0,this._canvas&&t.delete(this._canvas),(0,h.getDefaultSetting)("pdfjsNext")?this.callback(new h.RenderingCancelledException("Rendering cancelled, page "+this.pageNumber,"canvas")):this.callback("cancelled")},operatorListChanged:function(){if(!this.graphicsReady)return void(this.graphicsReadyCallback||(this.graphicsReadyCallback=this._continueBound))
this.stepper&&this.stepper.updateOperatorList(this.operatorList),this.running||this._continue()},_continue:function(){this.running=!0,this.cancelled||(this.task.onContinue?this.task.onContinue(this._scheduleNextBound):this._scheduleNext())},_scheduleNext:function(){this.useRequestAnimationFrame&&"undefined"!=typeof window?window.requestAnimationFrame(this._nextBound):Promise.resolve(void 0).then(this._nextBound)},_next:function(){this.cancelled||(this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper),this.operatorListIdx===this.operatorList.argsArray.length&&(this.running=!1,this.operatorList.lastChunk&&(this.gfx.endDrawing(),this._canvas&&t.delete(this._canvas),this.callback())))}},e}(),M=function(){var e=[]
return{listen:function(t){(0,c.deprecated)("Global UnsupportedManager.listen is used:  use PDFDocumentLoadingTask.onUnsupportedFeature instead"),e.push(t)},notify:function(t){for(var r=0,n=e.length;r<n;r++)e[r](t)}}}()
t.version=C="1.9.0",t.build=x="",t.getDocument=a,t.LoopbackPort=I,t.PDFDataRangeTransport=T,t.PDFWorker=L,t.PDFDocumentProxy=E,t.PDFPageProxy=O,t.setPDFNetworkStreamClass=i,t._UnsupportedManager=M,t.version=C,t.build=x},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.SVGGraphics=void 0
var n=r(0),i=function(){throw new Error("Not implemented: SVGGraphics")},a={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"},o=function(){function e(e,t,r){for(var n=-1,i=t;i<r;i++){var a=255&(n^e[i])
n=n>>>8^u[a]}return-1^n}function t(t,r,n,i){var a=i,o=r.length
n[a]=o>>24&255,n[a+1]=o>>16&255,n[a+2]=o>>8&255,n[a+3]=255&o,a+=4,n[a]=255&t.charCodeAt(0),n[a+1]=255&t.charCodeAt(1),n[a+2]=255&t.charCodeAt(2),n[a+3]=255&t.charCodeAt(3),a+=4,n.set(r,a),a+=r.length
var s=e(n,i+4,a)
n[a]=s>>24&255,n[a+1]=s>>16&255,n[a+2]=s>>8&255,n[a+3]=255&s}function r(e,t,r){for(var n=1,i=0,a=t;a<r;++a)n=(n+(255&e[a]))%65521,i=(i+n)%65521
return i<<16|n}function i(e){if(!(0,n.isNodeJS)())return a(e)
try{var t
t=parseInt(process.versions.node)>=8?e:new Buffer(e)
var r=require("zlib").deflateSync(t,{level:9})
return r instanceof Uint8Array?r:new Uint8Array(r)}catch(e){(0,n.warn)("Not compressing PNG because zlib.deflateSync is unavailable: "+e)}return a(e)}function a(e){var t=e.length,n=Math.ceil(t/65535),i=new Uint8Array(2+t+5*n+4),a=0
i[a++]=120,i[a++]=156
for(var o=0;t>65535;)i[a++]=0,i[a++]=255,i[a++]=255,i[a++]=0,i[a++]=0,i.set(e.subarray(o,o+65535),a),a+=65535,o+=65535,t-=65535
i[a++]=1,i[a++]=255&t,i[a++]=t>>8&255,i[a++]=255&~t,i[a++]=(65535&~t)>>8&255,i.set(e.subarray(o),a),a+=e.length-o
var s=r(e,0,e.length)
return i[a++]=s>>24&255,i[a++]=s>>16&255,i[a++]=s>>8&255,i[a++]=255&s,i}function o(e,r,a){var o,u,c,h=e.width,d=e.height,f=e.data
switch(r){case n.ImageKind.GRAYSCALE_1BPP:u=0,o=1,c=h+7>>3
break
case n.ImageKind.RGB_24BPP:u=2,o=8,c=3*h
break
case n.ImageKind.RGBA_32BPP:u=6,o=8,c=4*h
break
default:throw new Error("invalid format")}var p,m,g=new Uint8Array((1+c)*d),v=0,b=0
for(p=0;p<d;++p)g[v++]=0,g.set(f.subarray(b,b+c),v),b+=c,v+=c
if(r===n.ImageKind.GRAYSCALE_1BPP)for(v=0,p=0;p<d;p++)for(v++,m=0;m<c;m++)g[v++]^=255
var _=new Uint8Array([h>>24&255,h>>16&255,h>>8&255,255&h,d>>24&255,d>>16&255,d>>8&255,255&d,o,u,0,0,0]),y=i(g),A=s.length+3*l+_.length+y.length,S=new Uint8Array(A),w=0
return S.set(s,w),w+=s.length,t("IHDR",_,S,w),w+=l+_.length,t("IDATA",y,S,w),w+=l+y.length,t("IEND",new Uint8Array(0),S,w),(0,n.createObjectURL)(S,"image/png",a)}for(var s=new Uint8Array([137,80,78,71,13,10,26,10]),l=12,u=new Int32Array(256),c=0;c<256;c++){for(var h=c,d=0;d<8;d++)h=1&h?3988292384^h>>1&2147483647:h>>1&2147483647
u[c]=h}return function(e,t){return o(e,void 0===e.kind?n.ImageKind.GRAYSCALE_1BPP:e.kind,t)}}(),s=function(){function e(){this.fontSizeScale=1,this.fontWeight=a.fontWeight,this.fontSize=0,this.textMatrix=n.IDENTITY_MATRIX,this.fontMatrix=n.FONT_IDENTITY_MATRIX,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRise=0,this.fillColor=a.fillColor,this.strokeColor="#000000",this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.lineJoin="",this.lineCap="",this.miterLimit=0,this.dashArray=[],this.dashPhase=0,this.dependencies=[],this.activeClipUrl=null,this.clipGroup=null,this.maskId=""}return e.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(e,t){this.x=e,this.y=t}},e}()
t.SVGGraphics=i=function(){function e(e){for(var t=[],r=[],n=e.length,i=0;i<n;i++)"save"!==e[i].fn?"restore"===e[i].fn?t=r.pop():t.push(e[i]):(t.push({fnId:92,fn:"group",items:[]}),r.push(t),t=t[t.length-1].items)
return t}function t(e){if(e===(0|e))return e.toString()
var t=e.toFixed(10),r=t.length-1
if("0"!==t[r])return t
do{r--}while("0"===t[r])
return t.substr(0,"."===t[r]?r:r+1)}function r(e){if(0===e[4]&&0===e[5]){if(0===e[1]&&0===e[2])return 1===e[0]&&1===e[3]?"":"scale("+t(e[0])+" "+t(e[3])+")"
if(e[0]===e[3]&&e[1]===-e[2]){return"rotate("+t(180*Math.acos(e[0])/Math.PI)+")"}}else if(1===e[0]&&0===e[1]&&0===e[2]&&1===e[3])return"translate("+t(e[4])+" "+t(e[5])+")"
return"matrix("+t(e[0])+" "+t(e[1])+" "+t(e[2])+" "+t(e[3])+" "+t(e[4])+" "+t(e[5])+")"}function i(e,t,r){this.current=new s,this.transformMatrix=n.IDENTITY_MATRIX,this.transformStack=[],this.extraStack=[],this.commonObjs=e,this.objs=t,this.pendingClip=null,this.pendingEOFill=!1,this.embedFonts=!1,this.embeddedFonts=Object.create(null),this.cssStyle=null,this.forceDataSchema=!!r}var l="http://www.w3.org/2000/svg",u="http://www.w3.org/1999/xlink",c=["butt","round","square"],h=["miter","round","bevel"],d=0,f=0
return i.prototype={save:function(){this.transformStack.push(this.transformMatrix)
var e=this.current
this.extraStack.push(e),this.current=e.clone()},restore:function(){this.transformMatrix=this.transformStack.pop(),this.current=this.extraStack.pop(),this.pendingClip=null,this.tgrp=null},group:function(e){this.save(),this.executeOpTree(e),this.restore()},loadDependencies:function(e){for(var t=this,r=e.fnArray,i=r.length,a=e.argsArray,o=0;o<i;o++)if(n.OPS.dependency===r[o])for(var s=a[o],l=0,u=s.length;l<u;l++){var c,h=s[l],d="g_"===h.substring(0,2)
c=d?new Promise(function(e){t.commonObjs.get(h,e)}):new Promise(function(e){t.objs.get(h,e)}),this.current.dependencies.push(c)}return Promise.all(this.current.dependencies)},transform:function(e,t,r,i,a,o){var s=[e,t,r,i,a,o]
this.transformMatrix=n.Util.transform(this.transformMatrix,s),this.tgrp=null},getSVG:function(e,t){var r=this
this.viewport=t
var i=this._initialize(t)
return this.loadDependencies(e).then(function(){r.transformMatrix=n.IDENTITY_MATRIX
var t=r.convertOpList(e)
return r.executeOpTree(t),i})},convertOpList:function(t){var r=t.argsArray,i=t.fnArray,a=i.length,o=[],s=[]
for(var l in n.OPS)o[n.OPS[l]]=l
for(var u=0;u<a;u++){var c=i[u]
s.push({fnId:c,fn:o[c],args:r[u]})}return e(s)},executeOpTree:function(e){for(var t=e.length,r=0;r<t;r++){var i=e[r].fn,a=e[r].fnId,o=e[r].args
switch(0|a){case n.OPS.beginText:this.beginText()
break
case n.OPS.setLeading:this.setLeading(o)
break
case n.OPS.setLeadingMoveText:this.setLeadingMoveText(o[0],o[1])
break
case n.OPS.setFont:this.setFont(o)
break
case n.OPS.showText:case n.OPS.showSpacedText:this.showText(o[0])
break
case n.OPS.endText:this.endText()
break
case n.OPS.moveText:this.moveText(o[0],o[1])
break
case n.OPS.setCharSpacing:this.setCharSpacing(o[0])
break
case n.OPS.setWordSpacing:this.setWordSpacing(o[0])
break
case n.OPS.setHScale:this.setHScale(o[0])
break
case n.OPS.setTextMatrix:this.setTextMatrix(o[0],o[1],o[2],o[3],o[4],o[5])
break
case n.OPS.setTextRise:this.setTextRise(o[0])
break
case n.OPS.setLineWidth:this.setLineWidth(o[0])
break
case n.OPS.setLineJoin:this.setLineJoin(o[0])
break
case n.OPS.setLineCap:this.setLineCap(o[0])
break
case n.OPS.setMiterLimit:this.setMiterLimit(o[0])
break
case n.OPS.setFillRGBColor:this.setFillRGBColor(o[0],o[1],o[2])
break
case n.OPS.setStrokeRGBColor:this.setStrokeRGBColor(o[0],o[1],o[2])
break
case n.OPS.setDash:this.setDash(o[0],o[1])
break
case n.OPS.setGState:this.setGState(o[0])
break
case n.OPS.fill:this.fill()
break
case n.OPS.eoFill:this.eoFill()
break
case n.OPS.stroke:this.stroke()
break
case n.OPS.fillStroke:this.fillStroke()
break
case n.OPS.eoFillStroke:this.eoFillStroke()
break
case n.OPS.clip:this.clip("nonzero")
break
case n.OPS.eoClip:this.clip("evenodd")
break
case n.OPS.paintSolidColorImageMask:this.paintSolidColorImageMask()
break
case n.OPS.paintJpegXObject:this.paintJpegXObject(o[0],o[1],o[2])
break
case n.OPS.paintImageXObject:this.paintImageXObject(o[0])
break
case n.OPS.paintInlineImageXObject:this.paintInlineImageXObject(o[0])
break
case n.OPS.paintImageMaskXObject:this.paintImageMaskXObject(o[0])
break
case n.OPS.paintFormXObjectBegin:this.paintFormXObjectBegin(o[0],o[1])
break
case n.OPS.paintFormXObjectEnd:this.paintFormXObjectEnd()
break
case n.OPS.closePath:this.closePath()
break
case n.OPS.closeStroke:this.closeStroke()
break
case n.OPS.closeFillStroke:this.closeFillStroke()
break
case n.OPS.nextLine:this.nextLine()
break
case n.OPS.transform:this.transform(o[0],o[1],o[2],o[3],o[4],o[5])
break
case n.OPS.constructPath:this.constructPath(o[0],o[1])
break
case n.OPS.endPath:this.endPath()
break
case 92:this.group(e[r].items)
break
default:(0,n.warn)("Unimplemented operator "+i)}}},setWordSpacing:function(e){this.current.wordSpacing=e},setCharSpacing:function(e){this.current.charSpacing=e},nextLine:function(){this.moveText(0,this.current.leading)},setTextMatrix:function(e,r,n,i,a,o){var s=this.current
this.current.textMatrix=this.current.lineMatrix=[e,r,n,i,a,o],this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0,s.xcoords=[],s.tspan=document.createElementNS(l,"svg:tspan"),s.tspan.setAttributeNS(null,"font-family",s.fontFamily),s.tspan.setAttributeNS(null,"font-size",t(s.fontSize)+"px"),s.tspan.setAttributeNS(null,"y",t(-s.y)),s.txtElement=document.createElementNS(l,"svg:text"),s.txtElement.appendChild(s.tspan)},beginText:function(){this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0,this.current.textMatrix=n.IDENTITY_MATRIX,this.current.lineMatrix=n.IDENTITY_MATRIX,this.current.tspan=document.createElementNS(l,"svg:tspan"),this.current.txtElement=document.createElementNS(l,"svg:text"),this.current.txtgrp=document.createElementNS(l,"svg:g"),this.current.xcoords=[]},moveText:function(e,r){var n=this.current
this.current.x=this.current.lineX+=e,this.current.y=this.current.lineY+=r,n.xcoords=[],n.tspan=document.createElementNS(l,"svg:tspan"),n.tspan.setAttributeNS(null,"font-family",n.fontFamily),n.tspan.setAttributeNS(null,"font-size",t(n.fontSize)+"px"),n.tspan.setAttributeNS(null,"y",t(-n.y))},showText:function(e){var i=this.current,o=i.font,s=i.fontSize
if(0!==s){var l,u=i.charSpacing,c=i.wordSpacing,h=i.fontDirection,d=i.textHScale*h,f=e.length,p=o.vertical,m=s*i.fontMatrix[0],g=0
for(l=0;l<f;++l){var v=e[l]
if(null!==v)if((0,n.isNum)(v))g+=-v*s*.001
else{var b=v.width,_=v.fontChar,y=(v.isSpace?c:0)+u,A=b*m+y*h
v.isInFont||o.missingFile?(i.xcoords.push(i.x+g*d),i.tspan.textContent+=_,g+=A):g+=A}else g+=h*c}p?i.y-=g*d:i.x+=g*d,i.tspan.setAttributeNS(null,"x",i.xcoords.map(t).join(" ")),i.tspan.setAttributeNS(null,"y",t(-i.y)),i.tspan.setAttributeNS(null,"font-family",i.fontFamily),i.tspan.setAttributeNS(null,"font-size",t(i.fontSize)+"px"),i.fontStyle!==a.fontStyle&&i.tspan.setAttributeNS(null,"font-style",i.fontStyle),i.fontWeight!==a.fontWeight&&i.tspan.setAttributeNS(null,"font-weight",i.fontWeight),i.fillColor!==a.fillColor&&i.tspan.setAttributeNS(null,"fill",i.fillColor)
var S=i.textMatrix
0!==i.textRise&&(S=S.slice(),S[5]+=i.textRise),i.txtElement.setAttributeNS(null,"transform",r(S)+" scale(1, -1)"),i.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),i.txtElement.appendChild(i.tspan),i.txtgrp.appendChild(i.txtElement),this._ensureTransformGroup().appendChild(i.txtElement)}},setLeadingMoveText:function(e,t){this.setLeading(-t),this.moveText(e,t)},addFontStyle:function(e){this.cssStyle||(this.cssStyle=document.createElementNS(l,"svg:style"),this.cssStyle.setAttributeNS(null,"type","text/css"),this.defs.appendChild(this.cssStyle))
var t=(0,n.createObjectURL)(e.data,e.mimetype,this.forceDataSchema)
this.cssStyle.textContent+='@font-face { font-family: "'+e.loadedName+'"; src: url('+t+"); }\n"},setFont:function(e){var r=this.current,i=this.commonObjs.get(e[0]),a=e[1]
this.current.font=i,this.embedFonts&&i.data&&!this.embeddedFonts[i.loadedName]&&(this.addFontStyle(i),this.embeddedFonts[i.loadedName]=i),r.fontMatrix=i.fontMatrix?i.fontMatrix:n.FONT_IDENTITY_MATRIX
var o=i.black?i.bold?"bolder":"bold":i.bold?"bold":"normal",s=i.italic?"italic":"normal"
a<0?(a=-a,r.fontDirection=-1):r.fontDirection=1,r.fontSize=a,r.fontFamily=i.loadedName,r.fontWeight=o,r.fontStyle=s,r.tspan=document.createElementNS(l,"svg:tspan"),r.tspan.setAttributeNS(null,"y",t(-r.y)),r.xcoords=[]},endText:function(){},setLineWidth:function(e){this.current.lineWidth=e},setLineCap:function(e){this.current.lineCap=c[e]},setLineJoin:function(e){this.current.lineJoin=h[e]},setMiterLimit:function(e){this.current.miterLimit=e},setStrokeAlpha:function(e){this.current.strokeAlpha=e},setStrokeRGBColor:function(e,t,r){var i=n.Util.makeCssRgb(e,t,r)
this.current.strokeColor=i},setFillAlpha:function(e){this.current.fillAlpha=e},setFillRGBColor:function(e,t,r){var i=n.Util.makeCssRgb(e,t,r)
this.current.fillColor=i,this.current.tspan=document.createElementNS(l,"svg:tspan"),this.current.xcoords=[]},setDash:function(e,t){this.current.dashArray=e,this.current.dashPhase=t},constructPath:function(e,r){var i=this.current,a=i.x,o=i.y
i.path=document.createElementNS(l,"svg:path")
for(var s=[],u=e.length,c=0,h=0;c<u;c++)switch(0|e[c]){case n.OPS.rectangle:a=r[h++],o=r[h++]
var d=r[h++],f=r[h++],p=a+d,m=o+f
s.push("M",t(a),t(o),"L",t(p),t(o),"L",t(p),t(m),"L",t(a),t(m),"Z")
break
case n.OPS.moveTo:a=r[h++],o=r[h++],s.push("M",t(a),t(o))
break
case n.OPS.lineTo:a=r[h++],o=r[h++],s.push("L",t(a),t(o))
break
case n.OPS.curveTo:a=r[h+4],o=r[h+5],s.push("C",t(r[h]),t(r[h+1]),t(r[h+2]),t(r[h+3]),t(a),t(o)),h+=6
break
case n.OPS.curveTo2:a=r[h+2],o=r[h+3],s.push("C",t(a),t(o),t(r[h]),t(r[h+1]),t(r[h+2]),t(r[h+3])),h+=4
break
case n.OPS.curveTo3:a=r[h+2],o=r[h+3],s.push("C",t(r[h]),t(r[h+1]),t(a),t(o),t(a),t(o)),h+=4
break
case n.OPS.closePath:s.push("Z")}i.path.setAttributeNS(null,"d",s.join(" ")),i.path.setAttributeNS(null,"fill","none"),this._ensureTransformGroup().appendChild(i.path),i.element=i.path,i.setCurrentPoint(a,o)},endPath:function(){if(this.pendingClip){var e=this.current,t="clippath"+d
d++
var n=document.createElementNS(l,"svg:clipPath")
n.setAttributeNS(null,"id",t),n.setAttributeNS(null,"transform",r(this.transformMatrix))
var i=e.element.cloneNode()
"evenodd"===this.pendingClip?i.setAttributeNS(null,"clip-rule","evenodd"):i.setAttributeNS(null,"clip-rule","nonzero"),this.pendingClip=null,n.appendChild(i),this.defs.appendChild(n),e.activeClipUrl&&(e.clipGroup=null,this.extraStack.forEach(function(e){e.clipGroup=null})),e.activeClipUrl="url(#"+t+")",this.tgrp=null}},clip:function(e){this.pendingClip=e},closePath:function(){var e=this.current,t=e.path.getAttributeNS(null,"d")
t+="Z",e.path.setAttributeNS(null,"d",t)},setLeading:function(e){this.current.leading=-e},setTextRise:function(e){this.current.textRise=e},setHScale:function(e){this.current.textHScale=e/100},setGState:function(e){for(var t=0,r=e.length;t<r;t++){var i=e[t],a=i[0],o=i[1]
switch(a){case"LW":this.setLineWidth(o)
break
case"LC":this.setLineCap(o)
break
case"LJ":this.setLineJoin(o)
break
case"ML":this.setMiterLimit(o)
break
case"D":this.setDash(o[0],o[1])
break
case"Font":this.setFont(o)
break
case"CA":this.setStrokeAlpha(o)
break
case"ca":this.setFillAlpha(o)
break
default:(0,n.warn)("Unimplemented graphic state "+a)}}},fill:function(){var e=this.current
e.element.setAttributeNS(null,"fill",e.fillColor),e.element.setAttributeNS(null,"fill-opacity",e.fillAlpha)},stroke:function(){var e=this.current
e.element.setAttributeNS(null,"stroke",e.strokeColor),e.element.setAttributeNS(null,"stroke-opacity",e.strokeAlpha),e.element.setAttributeNS(null,"stroke-miterlimit",t(e.miterLimit)),e.element.setAttributeNS(null,"stroke-linecap",e.lineCap),e.element.setAttributeNS(null,"stroke-linejoin",e.lineJoin),e.element.setAttributeNS(null,"stroke-width",t(e.lineWidth)+"px"),e.element.setAttributeNS(null,"stroke-dasharray",e.dashArray.map(t).join(" ")),e.element.setAttributeNS(null,"stroke-dashoffset",t(e.dashPhase)+"px"),e.element.setAttributeNS(null,"fill","none")},eoFill:function(){this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fill()},fillStroke:function(){this.stroke(),this.fill()},eoFillStroke:function(){this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fillStroke()},closeStroke:function(){this.closePath(),this.stroke()},closeFillStroke:function(){this.closePath(),this.fillStroke()},paintSolidColorImageMask:function(){var e=this.current,t=document.createElementNS(l,"svg:rect")
t.setAttributeNS(null,"x","0"),t.setAttributeNS(null,"y","0"),t.setAttributeNS(null,"width","1px"),t.setAttributeNS(null,"height","1px"),t.setAttributeNS(null,"fill",e.fillColor),this._ensureTransformGroup().appendChild(t)},paintJpegXObject:function(e,r,n){var i=this.objs.get(e),a=document.createElementNS(l,"svg:image")
a.setAttributeNS(u,"xlink:href",i.src),a.setAttributeNS(null,"width",t(r)),a.setAttributeNS(null,"height",t(n)),a.setAttributeNS(null,"x","0"),a.setAttributeNS(null,"y",t(-n)),a.setAttributeNS(null,"transform","scale("+t(1/r)+" "+t(-1/n)+")"),this._ensureTransformGroup().appendChild(a)},paintImageXObject:function(e){var t=this.objs.get(e)
if(!t)return void(0,n.warn)("Dependent image isn't ready yet")
this.paintInlineImageXObject(t)},paintInlineImageXObject:function(e,r){var n=e.width,i=e.height,a=o(e,this.forceDataSchema),s=document.createElementNS(l,"svg:rect")
s.setAttributeNS(null,"x","0"),s.setAttributeNS(null,"y","0"),s.setAttributeNS(null,"width",t(n)),s.setAttributeNS(null,"height",t(i)),this.current.element=s,this.clip("nonzero")
var c=document.createElementNS(l,"svg:image")
c.setAttributeNS(u,"xlink:href",a),c.setAttributeNS(null,"x","0"),c.setAttributeNS(null,"y",t(-i)),c.setAttributeNS(null,"width",t(n)+"px"),c.setAttributeNS(null,"height",t(i)+"px"),c.setAttributeNS(null,"transform","scale("+t(1/n)+" "+t(-1/i)+")"),r?r.appendChild(c):this._ensureTransformGroup().appendChild(c)},paintImageMaskXObject:function(e){var r=this.current,n=e.width,i=e.height,a=r.fillColor
r.maskId="mask"+f++
var o=document.createElementNS(l,"svg:mask")
o.setAttributeNS(null,"id",r.maskId)
var s=document.createElementNS(l,"svg:rect")
s.setAttributeNS(null,"x","0"),s.setAttributeNS(null,"y","0"),s.setAttributeNS(null,"width",t(n)),s.setAttributeNS(null,"height",t(i)),s.setAttributeNS(null,"fill",a),s.setAttributeNS(null,"mask","url(#"+r.maskId+")"),this.defs.appendChild(o),this._ensureTransformGroup().appendChild(s),this.paintInlineImageXObject(e,o)},paintFormXObjectBegin:function(e,r){if((0,n.isArray)(e)&&6===e.length&&this.transform(e[0],e[1],e[2],e[3],e[4],e[5]),(0,n.isArray)(r)&&4===r.length){var i=r[2]-r[0],a=r[3]-r[1],o=document.createElementNS(l,"svg:rect")
o.setAttributeNS(null,"x",r[0]),o.setAttributeNS(null,"y",r[1]),o.setAttributeNS(null,"width",t(i)),o.setAttributeNS(null,"height",t(a)),this.current.element=o,this.clip("nonzero"),this.endPath()}},paintFormXObjectEnd:function(){},_initialize:function(e){var t=document.createElementNS(l,"svg:svg")
t.setAttributeNS(null,"version","1.1"),t.setAttributeNS(null,"width",e.width+"px"),t.setAttributeNS(null,"height",e.height+"px"),t.setAttributeNS(null,"preserveAspectRatio","none"),t.setAttributeNS(null,"viewBox","0 0 "+e.width+" "+e.height)
var n=document.createElementNS(l,"svg:defs")
t.appendChild(n),this.defs=n
var i=document.createElementNS(l,"svg:g")
return i.setAttributeNS(null,"transform",r(e.transform)),t.appendChild(i),this.svg=i,t},_ensureClipGroup:function(){if(!this.current.clipGroup){var e=document.createElementNS(l,"svg:g")
e.setAttributeNS(null,"clip-path",this.current.activeClipUrl),this.svg.appendChild(e),this.current.clipGroup=e}return this.current.clipGroup},_ensureTransformGroup:function(){return this.tgrp||(this.tgrp=document.createElementNS(l,"svg:g"),this.tgrp.setAttributeNS(null,"transform",r(this.transformMatrix)),this.current.activeClipUrl?this._ensureClipGroup().appendChild(this.tgrp):this.svg.appendChild(this.tgrp)),this.tgrp}},i}(),t.SVGGraphics=i},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.renderTextLayer=void 0
var n=r(0),i=r(7),a=function(){function e(e){return!h.test(e)}function t(t,r,a){var o=document.createElement("div"),s={style:null,angle:0,canvasWidth:0,isWhitespace:!1,originalTransform:null,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,scale:1}
if(t._textDivs.push(o),e(r.str))return s.isWhitespace=!0,void t._textDivProperties.set(o,s)
var l=n.Util.transform(t._viewport.transform,r.transform),u=Math.atan2(l[1],l[0]),c=a[r.fontName]
c.vertical&&(u+=Math.PI/2)
var h=Math.sqrt(l[2]*l[2]+l[3]*l[3]),f=h
c.ascent?f=c.ascent*f:c.descent&&(f=(1+c.descent)*f)
var p,m
if(0===u?(p=l[4],m=l[5]-f):(p=l[4]+f*Math.sin(u),m=l[5]-f*Math.cos(u)),d[1]=p,d[3]=m,d[5]=h,d[7]=c.fontFamily,s.style=d.join(""),o.setAttribute("style",s.style),o.textContent=r.str,(0,i.getDefaultSetting)("pdfBug")&&(o.dataset.fontName=r.fontName),0!==u&&(s.angle=u*(180/Math.PI)),r.str.length>1&&(c.vertical?s.canvasWidth=r.height*t._viewport.scale:s.canvasWidth=r.width*t._viewport.scale),t._textDivProperties.set(o,s),t._textContentStream&&t._layoutText(o),t._enhanceTextSelection){var g=1,v=0
0!==u&&(g=Math.cos(u),v=Math.sin(u))
var b,_,y=(c.vertical?r.height:r.width)*t._viewport.scale,A=h
0!==u?(b=[g,v,-v,g,p,m],_=n.Util.getAxialAlignedBoundingBox([0,0,y,A],b)):_=[p,m,p+y,m+A],t._bounds.push({left:_[0],top:_[1],right:_[2],bottom:_[3],div:o,size:[y,A],m:b})}}function r(e){if(!e._canceled){var t=e._textDivs,r=e._capability,n=t.length
if(n>c)return e._renderingDone=!0,void r.resolve()
if(!e._textContentStream)for(var i=0;i<n;i++)e._layoutText(t[i])
e._renderingDone=!0,r.resolve()}}function a(e){for(var t=e._bounds,r=e._viewport,i=o(r.width,r.height,t),a=0;a<i.length;a++){var s=t[a].div,l=e._textDivProperties.get(s)
if(0!==l.angle){var u=i[a],c=t[a],h=c.m,d=h[0],f=h[1],p=[[0,0],[0,c.size[1]],[c.size[0],0],c.size],m=new Float64Array(64)
p.forEach(function(e,t){var r=n.Util.applyTransform(e,h)
m[t+0]=d&&(u.left-r[0])/d,m[t+4]=f&&(u.top-r[1])/f,m[t+8]=d&&(u.right-r[0])/d,m[t+12]=f&&(u.bottom-r[1])/f,m[t+16]=f&&(u.left-r[0])/-f,m[t+20]=d&&(u.top-r[1])/d,m[t+24]=f&&(u.right-r[0])/-f,m[t+28]=d&&(u.bottom-r[1])/d,m[t+32]=d&&(u.left-r[0])/-d,m[t+36]=f&&(u.top-r[1])/-f,m[t+40]=d&&(u.right-r[0])/-d,m[t+44]=f&&(u.bottom-r[1])/-f,m[t+48]=f&&(u.left-r[0])/f,m[t+52]=d&&(u.top-r[1])/-d,m[t+56]=f&&(u.right-r[0])/f,m[t+60]=d&&(u.bottom-r[1])/-d})
var g=function(e,t,r){for(var n=0,i=0;i<r;i++){var a=e[t++]
a>0&&(n=n?Math.min(a,n):a)}return n},v=1+Math.min(Math.abs(d),Math.abs(f))
l.paddingLeft=g(m,32,16)/v,l.paddingTop=g(m,48,16)/v,l.paddingRight=g(m,0,16)/v,l.paddingBottom=g(m,16,16)/v,e._textDivProperties.set(s,l)}else l.paddingLeft=t[a].left-i[a].left,l.paddingTop=t[a].top-i[a].top,l.paddingRight=i[a].right-t[a].right,l.paddingBottom=i[a].bottom-t[a].bottom,e._textDivProperties.set(s,l)}}function o(e,t,r){var n=r.map(function(e,t){return{x1:e.left,y1:e.top,x2:e.right,y2:e.bottom,index:t,x1New:void 0,x2New:void 0}})
s(e,n)
var i=new Array(r.length)
return n.forEach(function(e){var t=e.index
i[t]={left:e.x1New,top:0,right:e.x2New,bottom:0}}),r.map(function(t,r){var a=i[r],o=n[r]
o.x1=t.top,o.y1=e-a.right,o.x2=t.bottom,o.y2=e-a.left,o.index=r,o.x1New=void 0,o.x2New=void 0}),s(t,n),n.forEach(function(e){var t=e.index
i[t].top=e.x1New,i[t].bottom=e.x2New}),i}function s(e,t){t.sort(function(e,t){return e.x1-t.x1||e.index-t.index})
var r={x1:-1/0,y1:-1/0,x2:0,y2:1/0,index:-1,x1New:0,x2New:0},n=[{start:-1/0,end:1/0,boundary:r}]
t.forEach(function(e){for(var t=0;t<n.length&&n[t].end<=e.y1;)t++
for(var r=n.length-1;r>=0&&n[r].start>=e.y2;)r--
var i,a,o,s,l=-1/0
for(o=t;o<=r;o++){i=n[o],a=i.boundary
var u
u=a.x2>e.x1?a.index>e.index?a.x1New:e.x1:void 0===a.x2New?(a.x2+e.x1)/2:a.x2New,u>l&&(l=u)}for(e.x1New=l,o=t;o<=r;o++)i=n[o],a=i.boundary,void 0===a.x2New?a.x2>e.x1?a.index>e.index&&(a.x2New=a.x2):a.x2New=l:a.x2New>l&&(a.x2New=Math.max(l,a.x2))
var c=[],h=null
for(o=t;o<=r;o++){i=n[o],a=i.boundary
var d=a.x2>e.x2?a:e
h===d?c[c.length-1].end=i.end:(c.push({start:i.start,end:i.end,boundary:d}),h=d)}for(n[t].start<e.y1&&(c[0].start=e.y1,c.unshift({start:n[t].start,end:e.y1,boundary:n[t].boundary})),e.y2<n[r].end&&(c[c.length-1].end=e.y2,c.push({start:e.y2,end:n[r].end,boundary:n[r].boundary})),o=t;o<=r;o++)if(i=n[o],a=i.boundary,void 0===a.x2New){var f=!1
for(s=t-1;!f&&s>=0&&n[s].start>=a.y1;s--)f=n[s].boundary===a
for(s=r+1;!f&&s<n.length&&n[s].end<=a.y2;s++)f=n[s].boundary===a
for(s=0;!f&&s<c.length;s++)f=c[s].boundary===a
f||(a.x2New=l)}Array.prototype.splice.apply(n,[t,r-t+1].concat(c))}),n.forEach(function(t){var r=t.boundary
void 0===r.x2New&&(r.x2New=Math.max(e,r.x2))})}function l(e){var t=e.textContent,r=e.textContentStream,i=e.container,a=e.viewport,o=e.textDivs,s=e.textContentItemsStr,l=e.enhanceTextSelection
this._textContent=t,this._textContentStream=r,this._container=i,this._viewport=a,this._textDivs=o||[],this._textContentItemsStr=s||[],this._enhanceTextSelection=!!l,this._reader=null,this._layoutTextLastFontSize=null,this._layoutTextLastFontFamily=null,this._layoutTextCtx=null,this._textDivProperties=new WeakMap,this._renderingDone=!1,this._canceled=!1,this._capability=(0,n.createPromiseCapability)(),this._renderTimer=null,this._bounds=[]}function u(e){var t=new l({textContent:e.textContent,textContentStream:e.textContentStream,container:e.container,viewport:e.viewport,textDivs:e.textDivs,textContentItemsStr:e.textContentItemsStr,enhanceTextSelection:e.enhanceTextSelection})
return t._render(e.timeout),t}var c=1e5,h=/\S/,d=["left: ",0,"px; top: ",0,"px; font-size: ",0,"px; font-family: ","",";"]
return l.prototype={get promise(){return this._capability.promise},cancel:function(){this._reader&&(this._reader.cancel(new n.AbortException("text layer task cancelled")),this._reader=null),this._canceled=!0,null!==this._renderTimer&&(clearTimeout(this._renderTimer),this._renderTimer=null),this._capability.reject("canceled")},_processItems:function(e,r){for(var n=0,i=e.length;n<i;n++)this._textContentItemsStr.push(e[n].str),t(this,e[n],r)},_layoutText:function(e){var t=this._container,r=this._textDivProperties.get(e)
if(!r.isWhitespace){var n=e.style.fontSize,a=e.style.fontFamily
n===this._layoutTextLastFontSize&&a===this._layoutTextLastFontFamily||(this._layoutTextCtx.font=n+" "+a,this._lastFontSize=n,this._lastFontFamily=a)
var o=this._layoutTextCtx.measureText(e.textContent).width,s=""
0!==r.canvasWidth&&o>0&&(r.scale=r.canvasWidth/o,s="scaleX("+r.scale+")"),0!==r.angle&&(s="rotate("+r.angle+"deg) "+s),""!==s&&(r.originalTransform=s,i.CustomStyle.setProp("transform",e,s)),this._textDivProperties.set(e,r),t.appendChild(e)}},_render:function(e){var t=this,i=(0,n.createPromiseCapability)(),a=Object.create(null),o=document.createElement("canvas")
if(o.mozOpaque=!0,this._layoutTextCtx=o.getContext("2d",{alpha:!1}),this._textContent){var s=this._textContent.items,l=this._textContent.styles
this._processItems(s,l),i.resolve()}else{if(!this._textContentStream)throw new Error('Neither "textContent" nor "textContentStream" parameters specified.')
this._reader=this._textContentStream.getReader(),function e(){t._reader.read().then(function(r){var o=r.value
if(r.done)return void i.resolve()
n.Util.extendObj(a,o.styles),t._processItems(o.items,a),e()},i.reject)}()}i.promise.then(function(){a=null,e?t._renderTimer=setTimeout(function(){r(t),t._renderTimer=null},e):r(t)},this._capability.reject)},expandTextDivs:function(e){if(this._enhanceTextSelection&&this._renderingDone){null!==this._bounds&&(a(this),this._bounds=null)
for(var t=0,r=this._textDivs.length;t<r;t++){var n=this._textDivs[t],o=this._textDivProperties.get(n)
if(!o.isWhitespace)if(e){var s="",l=""
1!==o.scale&&(s="scaleX("+o.scale+")"),0!==o.angle&&(s="rotate("+o.angle+"deg) "+s),0!==o.paddingLeft&&(l+=" padding-left: "+o.paddingLeft/o.scale+"px;",s+=" translateX("+-o.paddingLeft/o.scale+"px)"),0!==o.paddingTop&&(l+=" padding-top: "+o.paddingTop+"px;",s+=" translateY("+-o.paddingTop+"px)"),0!==o.paddingRight&&(l+=" padding-right: "+o.paddingRight/o.scale+"px;"),0!==o.paddingBottom&&(l+=" padding-bottom: "+o.paddingBottom+"px;"),""!==l&&n.setAttribute("style",o.style+l),""!==s&&i.CustomStyle.setProp("transform",n,s)}else n.style.padding=0,i.CustomStyle.setProp("transform",n,o.originalTransform||"")}}}},u}()
t.renderTextLayer=a},function(e,t,r){"use strict"
e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!")
return e}},function(e,t,r){"use strict"
e.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!")
return e}},function(e,t,r){"use strict"
var n=r(12),i=r(19),a=r(6)
e.exports=function(e){for(var t=n(this),r=a(t.length),o=arguments.length,s=i(o>1?arguments[1]:void 0,r),l=o>2?arguments[2]:void 0,u=void 0===l?r:i(l,r);u>s;)t[s++]=e
return t}},function(e,t,r){"use strict"
var n=r(20),i=r(6),a=r(19)
e.exports=function(e){return function(t,r,o){var s,l=n(t),u=i(l.length),c=a(o,u)
if(e&&r!=r){for(;u>c;)if((s=l[c++])!=s)return!0}else for(;u>c;c++)if((e||c in l)&&l[c]===r)return e||c||0
return!e&&-1}}},function(e,t,r){"use strict"
var n=r(21),i=r(1)("toStringTag"),a="Arguments"==n(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(e){}}
e.exports=function(e){var t,r,s
return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=o(t=Object(e),i))?r:a?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},function(e,t,r){"use strict"
e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e)
return e}},function(e,t,r){"use strict"
var n=r(9),i=r(2).document,a=n(i)&&n(i.createElement)
e.exports=function(e){return a?i.createElement(e):{}}},function(e,t,r){"use strict"
var n=r(2),i=r(16),a=r(4),o=r(25),s=r(22),l=function e(t,r,l){var u,c,h,d,f=t&e.F,p=t&e.G,m=t&e.S,g=t&e.P,v=t&e.B,b=p?n:m?n[r]||(n[r]={}):(n[r]||{}).prototype,_=p?i:i[r]||(i[r]={}),y=_.prototype||(_.prototype={})
p&&(l=r)
for(u in l)c=!f&&b&&void 0!==b[u],h=(c?b:l)[u],d=v&&c?s(h,n):g&&"function"==typeof h?s(Function.call,h):h,b&&o(b,u,h,t&e.U),_[u]!=h&&a(_,u,d),g&&y[u]!=h&&(y[u]=h)}
n.core=i,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},function(e,t,r){"use strict"
e.exports=!r(3)&&!r(17)(function(){return 7!=Object.defineProperty(r(39)("div"),"a",{get:function(){return 7}}).a})},function(e,t,r){"use strict"
var n=r(21)
e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,r){"use strict"
var n=r(15),i=r(71),a=r(23),o=r(27)("IE_PROTO"),s=function(){},l=function(){var e,t=r(39)("iframe"),n=a.length
for(t.style.display="none",r(64).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),l=e.F;n--;)delete l.prototype[a[n]]
return l()}
e.exports=Object.create||function(e,t){var r
return null!==e?(s.prototype=n(e),r=new s,s.prototype=null,r[o]=e):r=l(),void 0===t?r:i(r,t)}},function(e,t,r){"use strict"
var n=r(46),i=r(23).concat("length","prototype")
t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},function(e,t,r){"use strict"
var n=r(5),i=r(12),a=r(27)("IE_PROTO"),o=Object.prototype
e.exports=Object.getPrototypeOf||function(e){return e=i(e),n(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},function(e,t,r){"use strict"
var n=r(5),i=r(20),a=r(36)(!1),o=r(27)("IE_PROTO")
e.exports=function(e,t){var r,s=i(e),l=0,u=[]
for(r in s)r!=o&&n(s,r)&&u.push(r)
for(;t.length>l;)n(s,r=t[l++])&&(~a(u,r)||u.push(r))
return u}},function(e,t,r){"use strict"
var n=r(25)
e.exports=function(e,t,r){for(var i in t)n(e,i,t[i],r)
return e}},function(e,t,r){"use strict"
var n=r(2),i=n["__core-js_shared__"]||(n["__core-js_shared__"]={})
e.exports=function(e){return i[e]||(i[e]={})}},function(e,t,r){"use strict"
var n=r(11),i=r(6)
e.exports=function(e){if(void 0===e)return 0
var t=n(e),r=i(t)
if(t!==r)throw RangeError("Wrong length!")
return r}},function(e,t,r){"use strict"
for(var n,i=r(2),a=r(4),o=r(13),s=o("typed_array"),l=o("view"),u=!(!i.ArrayBuffer||!i.DataView),c=u,h=0,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");h<9;)(n=i[d[h++]])?(a(n.prototype,s,!0),a(n.prototype,l,!0)):c=!1
e.exports={ABV:u,CONSTR:c,TYPED:s,VIEW:l}},function(e,t,r){"use strict"
function n(e){return e.replace(/>\\376\\377([^<]+)/g,function(e,t){for(var r=t.replace(/\\([0-3])([0-7])([0-7])/g,function(e,t,r,n){return String.fromCharCode(64*t+8*r+1*n)}),n="",i=0;i<r.length;i+=2){var a=256*r.charCodeAt(i)+r.charCodeAt(i+1)
n+=a>=32&&a<127&&60!==a&&62!==a&&38!==a?String.fromCharCode(a):"&#x"+(65536+a).toString(16).substring(1)+";"}return">"+n})}function i(e){if("string"==typeof e){e=n(e)
e=(new DOMParser).parseFromString(e,"application/xml")}else if(!(e instanceof Document))throw new Error("Metadata: Invalid metadata object")
this.metaDocument=e,this.metadata=Object.create(null),this.parse()}Object.defineProperty(t,"__esModule",{value:!0}),i.prototype={parse:function(){var e=this.metaDocument,t=e.documentElement
if("rdf:rdf"!==t.nodeName.toLowerCase())for(t=t.firstChild;t&&"rdf:rdf"!==t.nodeName.toLowerCase();)t=t.nextSibling
var r=t?t.nodeName.toLowerCase():null
if(t&&"rdf:rdf"===r&&t.hasChildNodes()){var n,i,a,o,s,l,u,c=t.childNodes
for(o=0,l=c.length;o<l;o++)if(n=c[o],"rdf:description"===n.nodeName.toLowerCase())for(s=0,u=n.childNodes.length;s<u;s++)"#text"!==n.childNodes[s].nodeName.toLowerCase()&&(i=n.childNodes[s],a=i.nodeName.toLowerCase(),this.metadata[a]=i.textContent.trim())}},get:function(e){return this.metadata[e]||null},has:function(e){return void 0!==this.metadata[e]}},t.Metadata=i},function(e,t,r){"use strict"
function n(e){var t=e.getResponseHeader,r=e.isHttp,n=e.rangeChunkSize,a=e.disableRange;(0,i.assert)(n>0)
var o={allowRangeRequests:!1,suggestedLength:void 0}
if(a||!r)return o
if("bytes"!==t("Accept-Ranges"))return o
if("identity"!==(t("Content-Encoding")||"identity"))return o
var s=t("Content-Length")
return s=parseInt(s,10),(0,i.isInt)(s)?(o.suggestedLength=s,s<=2*n?o:(o.allowRangeRequests=!0,o)):o}Object.defineProperty(t,"__esModule",{value:!0}),t.validateRangeRequestCapabilities=void 0
var i=r(0)
t.validateRangeRequestCapabilities=n},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.WebGLUtils=void 0
var n=r(7),i=r(0),a=function(){function e(e,t,r){var n=e.createShader(r)
if(e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){var i=e.getShaderInfoLog(n)
throw new Error("Error during shader compilation: "+i)}return n}function t(t,r){return e(t,r,t.VERTEX_SHADER)}function r(t,r){return e(t,r,t.FRAGMENT_SHADER)}function a(e,t){for(var r=e.createProgram(),n=0,i=t.length;n<i;++n)e.attachShader(r,t[n])
if(e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){var a=e.getProgramInfoLog(r)
throw new Error("Error during program linking: "+a)}return r}function o(e,t,r){e.activeTexture(r)
var n=e.createTexture()
return e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),n}function s(){f||(p=document.createElement("canvas"),f=p.getContext("webgl",{premultipliedalpha:!1}))}function l(){var e,n
s(),e=p,p=null,n=f,f=null
var i=t(n,m),o=r(n,g),l=a(n,[i,o])
n.useProgram(l)
var u={}
u.gl=n,u.canvas=e,u.resolutionLocation=n.getUniformLocation(l,"u_resolution"),u.positionLocation=n.getAttribLocation(l,"a_position"),u.backdropLocation=n.getUniformLocation(l,"u_backdrop"),u.subtypeLocation=n.getUniformLocation(l,"u_subtype")
var c=n.getAttribLocation(l,"a_texCoord"),h=n.getUniformLocation(l,"u_image"),d=n.getUniformLocation(l,"u_mask"),b=n.createBuffer()
n.bindBuffer(n.ARRAY_BUFFER,b),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),n.STATIC_DRAW),n.enableVertexAttribArray(c),n.vertexAttribPointer(c,2,n.FLOAT,!1,0,0),n.uniform1i(h,0),n.uniform1i(d,1),v=u}function u(e,t,r){var n=e.width,i=e.height
v||l()
var a=v,s=a.canvas,u=a.gl
s.width=n,s.height=i,u.viewport(0,0,u.drawingBufferWidth,u.drawingBufferHeight),u.uniform2f(a.resolutionLocation,n,i),r.backdrop?u.uniform4f(a.resolutionLocation,r.backdrop[0],r.backdrop[1],r.backdrop[2],1):u.uniform4f(a.resolutionLocation,0,0,0,0),u.uniform1i(a.subtypeLocation,"Luminosity"===r.subtype?1:0)
var c=o(u,e,u.TEXTURE0),h=o(u,t,u.TEXTURE1),d=u.createBuffer()
return u.bindBuffer(u.ARRAY_BUFFER,d),u.bufferData(u.ARRAY_BUFFER,new Float32Array([0,0,n,0,0,i,0,i,n,0,n,i]),u.STATIC_DRAW),u.enableVertexAttribArray(a.positionLocation),u.vertexAttribPointer(a.positionLocation,2,u.FLOAT,!1,0,0),u.clearColor(0,0,0,0),u.enable(u.BLEND),u.blendFunc(u.ONE,u.ONE_MINUS_SRC_ALPHA),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,6),u.flush(),u.deleteTexture(c),u.deleteTexture(h),u.deleteBuffer(d),s}function c(){var e,n
s(),e=p,p=null,n=f,f=null
var i=t(n,b),o=r(n,_),l=a(n,[i,o])
n.useProgram(l)
var u={}
u.gl=n,u.canvas=e,u.resolutionLocation=n.getUniformLocation(l,"u_resolution"),u.scaleLocation=n.getUniformLocation(l,"u_scale"),u.offsetLocation=n.getUniformLocation(l,"u_offset"),u.positionLocation=n.getAttribLocation(l,"a_position"),u.colorLocation=n.getAttribLocation(l,"a_color"),y=u}function h(e,t,r,n,i){y||c()
var a=y,o=a.canvas,s=a.gl
o.width=e,o.height=t,s.viewport(0,0,s.drawingBufferWidth,s.drawingBufferHeight),s.uniform2f(a.resolutionLocation,e,t)
var l,u,h,d=0
for(l=0,u=n.length;l<u;l++)switch(n[l].type){case"lattice":h=n[l].coords.length/n[l].verticesPerRow|0,d+=(h-1)*(n[l].verticesPerRow-1)*6
break
case"triangles":d+=n[l].coords.length}var f=new Float32Array(2*d),p=new Uint8Array(3*d),m=i.coords,g=i.colors,v=0,b=0
for(l=0,u=n.length;l<u;l++){var _=n[l],A=_.coords,S=_.colors
switch(_.type){case"lattice":var w=_.verticesPerRow
h=A.length/w|0
for(var P=1;P<h;P++)for(var R=P*w+1,C=1;C<w;C++,R++)f[v]=m[A[R-w-1]],f[v+1]=m[A[R-w-1]+1],f[v+2]=m[A[R-w]],f[v+3]=m[A[R-w]+1],f[v+4]=m[A[R-1]],f[v+5]=m[A[R-1]+1],p[b]=g[S[R-w-1]],p[b+1]=g[S[R-w-1]+1],p[b+2]=g[S[R-w-1]+2],p[b+3]=g[S[R-w]],p[b+4]=g[S[R-w]+1],p[b+5]=g[S[R-w]+2],p[b+6]=g[S[R-1]],p[b+7]=g[S[R-1]+1],p[b+8]=g[S[R-1]+2],f[v+6]=f[v+2],f[v+7]=f[v+3],f[v+8]=f[v+4],f[v+9]=f[v+5],f[v+10]=m[A[R]],f[v+11]=m[A[R]+1],p[b+9]=p[b+3],p[b+10]=p[b+4],p[b+11]=p[b+5],p[b+12]=p[b+6],p[b+13]=p[b+7],p[b+14]=p[b+8],p[b+15]=g[S[R]],p[b+16]=g[S[R]+1],p[b+17]=g[S[R]+2],v+=12,b+=18
break
case"triangles":for(var x=0,k=A.length;x<k;x++)f[v]=m[A[x]],f[v+1]=m[A[x]+1],p[b]=g[S[x]],p[b+1]=g[S[x]+1],p[b+2]=g[S[x]+2],v+=2,b+=3}}r?s.clearColor(r[0]/255,r[1]/255,r[2]/255,1):s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT)
var T=s.createBuffer()
s.bindBuffer(s.ARRAY_BUFFER,T),s.bufferData(s.ARRAY_BUFFER,f,s.STATIC_DRAW),s.enableVertexAttribArray(a.positionLocation),s.vertexAttribPointer(a.positionLocation,2,s.FLOAT,!1,0,0)
var E=s.createBuffer()
return s.bindBuffer(s.ARRAY_BUFFER,E),s.bufferData(s.ARRAY_BUFFER,p,s.STATIC_DRAW),s.enableVertexAttribArray(a.colorLocation),s.vertexAttribPointer(a.colorLocation,3,s.UNSIGNED_BYTE,!1,0,0),s.uniform2f(a.scaleLocation,i.scaleX,i.scaleY),s.uniform2f(a.offsetLocation,i.offsetX,i.offsetY),s.drawArrays(s.TRIANGLES,0,d),s.flush(),s.deleteBuffer(T),s.deleteBuffer(E),o}function d(){v&&v.canvas&&(v.canvas.width=0,v.canvas.height=0),y&&y.canvas&&(y.canvas.width=0,y.canvas.height=0),v=null,y=null}var f,p,m="  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ",g="  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ",v=null,b="  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ",_="  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ",y=null
return{get isEnabled(){if((0,n.getDefaultSetting)("disableWebGL"))return!1
var e=!1
try{s(),e=!!f}catch(e){}return(0,i.shadow)(this,"isEnabled",e)},composeSMask:u,drawFigures:h,clear:d}}()
t.WebGLUtils=a},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFJS=t.isWorker=t.globalScope=void 0
var n=r(30),i=r(7),a=r(0),o=r(29),s=r(14),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=r(51),c=r(32),h=r(31),d="undefined"==typeof window
l.default.PDFJS||(l.default.PDFJS={})
var f=l.default.PDFJS
f.version="1.9.0",f.build="",f.pdfBug=!1,void 0!==f.verbosity&&(0,a.setVerbosityLevel)(f.verbosity),delete f.verbosity,Object.defineProperty(f,"verbosity",{get:function(){return(0,a.getVerbosityLevel)()},set:function(e){(0,a.setVerbosityLevel)(e)},enumerable:!0,configurable:!0}),f.VERBOSITY_LEVELS=a.VERBOSITY_LEVELS,f.OPS=a.OPS,f.UNSUPPORTED_FEATURES=a.UNSUPPORTED_FEATURES,f.isValidUrl=i.isValidUrl,f.shadow=a.shadow,f.createBlob=a.createBlob,f.createObjectURL=function(e,t){return(0,a.createObjectURL)(e,t,f.disableCreateObjectURL)},Object.defineProperty(f,"isLittleEndian",{configurable:!0,get:function(){return(0,a.shadow)(f,"isLittleEndian",(0,a.isLittleEndian)())}}),f.removeNullCharacters=a.removeNullCharacters,f.PasswordResponses=a.PasswordResponses,f.PasswordException=a.PasswordException,f.UnknownErrorException=a.UnknownErrorException,f.InvalidPDFException=a.InvalidPDFException,f.MissingPDFException=a.MissingPDFException,f.UnexpectedResponseException=a.UnexpectedResponseException,f.Util=a.Util,f.PageViewport=a.PageViewport,f.createPromiseCapability=a.createPromiseCapability,f.maxImageSize=void 0===f.maxImageSize?-1:f.maxImageSize,f.cMapUrl=void 0===f.cMapUrl?null:f.cMapUrl,f.cMapPacked=void 0!==f.cMapPacked&&f.cMapPacked,f.disableFontFace=void 0!==f.disableFontFace&&f.disableFontFace,f.imageResourcesPath=void 0===f.imageResourcesPath?"":f.imageResourcesPath,f.disableWorker=void 0!==f.disableWorker&&f.disableWorker,f.workerSrc=void 0===f.workerSrc?null:f.workerSrc,f.workerPort=void 0===f.workerPort?null:f.workerPort,f.disableRange=void 0!==f.disableRange&&f.disableRange,f.disableStream=void 0!==f.disableStream&&f.disableStream,f.disableAutoFetch=void 0!==f.disableAutoFetch&&f.disableAutoFetch,f.pdfBug=void 0!==f.pdfBug&&f.pdfBug,f.postMessageTransfers=void 0===f.postMessageTransfers||f.postMessageTransfers,f.disableCreateObjectURL=void 0!==f.disableCreateObjectURL&&f.disableCreateObjectURL,f.disableWebGL=void 0===f.disableWebGL||f.disableWebGL,f.externalLinkTarget=void 0===f.externalLinkTarget?i.LinkTarget.NONE:f.externalLinkTarget,f.externalLinkRel=void 0===f.externalLinkRel?i.DEFAULT_LINK_REL:f.externalLinkRel,f.isEvalSupported=void 0===f.isEvalSupported||f.isEvalSupported,f.pdfjsNext=void 0!==f.pdfjsNext&&f.pdfjsNext
var p=f.openExternalLinksInNewWindow
delete f.openExternalLinksInNewWindow,Object.defineProperty(f,"openExternalLinksInNewWindow",{get:function(){return f.externalLinkTarget===i.LinkTarget.BLANK},set:function(e){if(e&&(0,a.deprecated)('PDFJS.openExternalLinksInNewWindow, please use "PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.'),f.externalLinkTarget!==i.LinkTarget.NONE)return void(0,a.warn)("PDFJS.externalLinkTarget is already initialized")
f.externalLinkTarget=e?i.LinkTarget.BLANK:i.LinkTarget.NONE},enumerable:!0,configurable:!0}),p&&(f.openExternalLinksInNewWindow=p),f.getDocument=n.getDocument,f.LoopbackPort=n.LoopbackPort,f.PDFDataRangeTransport=n.PDFDataRangeTransport,f.PDFWorker=n.PDFWorker,f.hasCanvasTypedArrays=!0,f.CustomStyle=i.CustomStyle,f.LinkTarget=i.LinkTarget,f.addLinkAttributes=i.addLinkAttributes,f.getFilenameFromUrl=i.getFilenameFromUrl,f.isExternalLinkTargetSet=i.isExternalLinkTargetSet,f.AnnotationLayer=o.AnnotationLayer,f.renderTextLayer=c.renderTextLayer,f.Metadata=u.Metadata,f.SVGGraphics=h.SVGGraphics,f.UnsupportedManager=n._UnsupportedManager,t.globalScope=l.default,t.isWorker=d,t.PDFJS=f},function(e,t,r){"use strict"
function n(e,t){this.url=e,t=t||{},this.isHttp=/^https?:/i.test(e),this.httpHeaders=this.isHttp&&t.httpHeaders||{},this.withCredentials=t.withCredentials||!1,this.getXhr=t.getXhr||function(){return new XMLHttpRequest},this.currXhrId=0,this.pendingRequests=Object.create(null),this.loadedRequests=Object.create(null)}function i(e){var t=e.response
if("string"!=typeof t)return t
for(var r=t.length,n=new Uint8Array(r),i=0;i<r;i++)n[i]=255&t.charCodeAt(i)
return n.buffer}function a(e){this._options=e
var t=e.source
this._manager=new n(t.url,{httpHeaders:t.httpHeaders,withCredentials:t.withCredentials}),this._rangeChunkSize=t.rangeChunkSize,this._fullRequestReader=null,this._rangeRequestReaders=[]}function o(e,t){this._manager=e
var r=t.source,n={onHeadersReceived:this._onHeadersReceived.bind(this),onProgressiveData:r.disableStream?null:this._onProgressiveData.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)}
this._url=r.url,this._fullRequestId=e.requestFull(n),this._headersReceivedCapability=(0,l.createPromiseCapability)(),this._disableRange=t.disableRange||!1,this._contentLength=r.length,this._rangeChunkSize=r.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!1,this._isRangeSupported=!1,this._cachedChunks=[],this._requests=[],this._done=!1,this._storedError=void 0,this.onProgress=null}function s(e,t,r){this._manager=e
var n={onDone:this._onDone.bind(this),onProgress:this._onProgress.bind(this)}
this._requestId=e.requestRange(t,r,n),this._requests=[],this._queuedChunk=null,this._done=!1,this.onProgress=null,this.onClosed=null}Object.defineProperty(t,"__esModule",{value:!0}),t.NetworkManager=t.PDFNetworkStream=void 0
var l=r(0),u=r(14),c=function(e){return e&&e.__esModule?e:{default:e}}(u),h=r(52),d=function(){try{var e=new XMLHttpRequest
return e.open("GET",c.default.location.href),e.responseType="moz-chunked-arraybuffer","moz-chunked-arraybuffer"===e.responseType}catch(e){return!1}}()
n.prototype={requestRange:function(e,t,r){var n={begin:e,end:t}
for(var i in r)n[i]=r[i]
return this.request(n)},requestFull:function(e){return this.request(e)},request:function(e){var t=this.getXhr(),r=this.currXhrId++,n=this.pendingRequests[r]={xhr:t}
t.open("GET",this.url),t.withCredentials=this.withCredentials
for(var i in this.httpHeaders){var a=this.httpHeaders[i]
void 0!==a&&t.setRequestHeader(i,a)}if(this.isHttp&&"begin"in e&&"end"in e){var o=e.begin+"-"+(e.end-1)
t.setRequestHeader("Range","bytes="+o),n.expectedStatus=206}else n.expectedStatus=200
return d&&!!e.onProgressiveData?(t.responseType="moz-chunked-arraybuffer",n.onProgressiveData=e.onProgressiveData,n.mozChunked=!0):t.responseType="arraybuffer",e.onError&&(t.onerror=function(r){e.onError(t.status)}),t.onreadystatechange=this.onStateChange.bind(this,r),t.onprogress=this.onProgress.bind(this,r),n.onHeadersReceived=e.onHeadersReceived,n.onDone=e.onDone,n.onError=e.onError,n.onProgress=e.onProgress,t.send(null),r},onProgress:function(e,t){var r=this.pendingRequests[e]
if(r){if(r.mozChunked){var n=i(r.xhr)
r.onProgressiveData(n)}var a=r.onProgress
a&&a(t)}},onStateChange:function(e,t){var r=this.pendingRequests[e]
if(r){var n=r.xhr
if(n.readyState>=2&&r.onHeadersReceived&&(r.onHeadersReceived(),delete r.onHeadersReceived),4===n.readyState&&e in this.pendingRequests){if(delete this.pendingRequests[e],0===n.status&&this.isHttp)return void(r.onError&&r.onError(n.status))
var a=n.status||200
if(!(200===a&&206===r.expectedStatus)&&a!==r.expectedStatus)return void(r.onError&&r.onError(n.status))
this.loadedRequests[e]=!0
var o=i(n)
if(206===a){var s=n.getResponseHeader("Content-Range"),l=/bytes (\d+)-(\d+)\/(\d+)/.exec(s),u=parseInt(l[1],10)
r.onDone({begin:u,chunk:o})}else r.onProgressiveData?r.onDone(null):o?r.onDone({begin:0,chunk:o}):r.onError&&r.onError(n.status)}}},hasPendingRequests:function(){for(var e in this.pendingRequests)return!0
return!1},getRequestXhr:function(e){return this.pendingRequests[e].xhr},isStreamingRequest:function(e){return!!this.pendingRequests[e].onProgressiveData},isPendingRequest:function(e){return e in this.pendingRequests},isLoadedRequest:function(e){return e in this.loadedRequests},abortAllRequests:function(){for(var e in this.pendingRequests)this.abortRequest(0|e)},abortRequest:function(e){var t=this.pendingRequests[e].xhr
delete this.pendingRequests[e],t.abort()}},a.prototype={_onRangeRequestReaderClosed:function(e){var t=this._rangeRequestReaders.indexOf(e)
t>=0&&this._rangeRequestReaders.splice(t,1)},getFullReader:function(){return(0,l.assert)(!this._fullRequestReader),this._fullRequestReader=new o(this._manager,this._options),this._fullRequestReader},getRangeReader:function(e,t){var r=new s(this._manager,e,t)
return r.onClosed=this._onRangeRequestReaderClosed.bind(this),this._rangeRequestReaders.push(r),r},cancelAllRequests:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach(function(t){t.cancel(e)})}},o.prototype={_onHeadersReceived:function(){var e=this._fullRequestId,t=this._manager.getRequestXhr(e),r=(0,h.validateRangeRequestCapabilities)({getResponseHeader:function(e){return t.getResponseHeader(e)},isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange}),n=r.allowRangeRequests,i=r.suggestedLength
this._contentLength=i||this._contentLength,n&&(this._isRangeSupported=!0)
var a=this._manager
a.isStreamingRequest(e)?this._isStreamingSupported=!0:this._isRangeSupported&&a.abortRequest(e),this._headersReceivedCapability.resolve()},_onProgressiveData:function(e){if(this._requests.length>0){this._requests.shift().resolve({value:e,done:!1})}else this._cachedChunks.push(e)},_onDone:function(e){e&&this._onProgressiveData(e.chunk),this._done=!0,this._cachedChunks.length>0||(this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[])},_onError:function(e){var t,r=this._url
t=404===e||0===e&&/^file:/.test(r)?new l.MissingPDFException('Missing PDF "'+r+'".'):new l.UnexpectedResponseException("Unexpected server response ("+e+') while retrieving PDF "'+r+'".',e),this._storedError=t,this._headersReceivedCapability.reject(t),this._requests.forEach(function(e){e.reject(t)}),this._requests=[],this._cachedChunks=[]},_onProgress:function(e){this.onProgress&&this.onProgress({loaded:e.loaded,total:e.lengthComputable?e.total:this._contentLength})},get isRangeSupported(){return this._isRangeSupported},get isStreamingSupported(){return this._isStreamingSupported},get contentLength(){return this._contentLength},get headersReady(){return this._headersReceivedCapability.promise},read:function(){if(this._storedError)return Promise.reject(this._storedError)
if(this._cachedChunks.length>0){var e=this._cachedChunks.shift()
return Promise.resolve({value:e,done:!1})}if(this._done)return Promise.resolve({value:void 0,done:!0})
var t=(0,l.createPromiseCapability)()
return this._requests.push(t),t.promise},cancel:function(e){this._done=!0,this._headersReceivedCapability.reject(e),this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[],this._manager.isPendingRequest(this._fullRequestId)&&this._manager.abortRequest(this._fullRequestId),this._fullRequestReader=null}},s.prototype={_close:function(){this.onClosed&&this.onClosed(this)},_onDone:function(e){var t=e.chunk
if(this._requests.length>0){this._requests.shift().resolve({value:t,done:!1})}else this._queuedChunk=t
this._done=!0,this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[],this._close()},_onProgress:function(e){!this.isStreamingSupported&&this.onProgress&&this.onProgress({loaded:e.loaded})},get isStreamingSupported(){return!1},read:function(){if(null!==this._queuedChunk){var e=this._queuedChunk
return this._queuedChunk=null,Promise.resolve({value:e,done:!1})}if(this._done)return Promise.resolve({value:void 0,done:!0})
var t=(0,l.createPromiseCapability)()
return this._requests.push(t),t.promise},cancel:function(e){this._done=!0,this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[],this._manager.isPendingRequest(this._requestId)&&this._manager.abortRequest(this._requestId),this._close()}},t.PDFNetworkStream=a,t.NetworkManager=n},function(e,t,r){"use strict"
function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return{protocol:e.protocol,auth:e.auth,host:e.hostname,port:e.port,path:e.path,method:"GET",headers:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNodeStream=void 0
var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(0),u=r(52),c=require("fs"),h=require("http"),d=require("https"),f=require("url"),p=function(){function e(t){a(this,e),this.options=t,this.source=t.source,this.url=f.parse(this.source.url),this.isHttp="http:"===this.url.protocol||"https:"===this.url.protocol,this.isFsUrl="file:"===this.url.protocol||!this.url.host,this.httpHeaders=this.isHttp&&this.source.httpHeaders||{},this._fullRequest=null,this._rangeRequestReaders=[]}return s(e,[{key:"getFullReader",value:function(){return(0,l.assert)(!this._fullRequest),this._fullRequest=this.isFsUrl?new _(this):new v(this),this._fullRequest}},{key:"getRangeReader",value:function(e,t){var r=this.isFsUrl?new y(this,e,t):new b(this,e,t)
return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequest&&this._fullRequest.cancel(e),this._rangeRequestReaders.slice(0).forEach(function(t){t.cancel(e)})}}]),e}(),m=function(){function e(t){a(this,e),this._url=t.url,this._done=!1,this._errored=!1,this._reason=null,this.onProgress=null,this._contentLength=t.source.length,this._loaded=0,this._disableRange=t.options.disableRange||!1,this._rangeChunkSize=t.source.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!t.source.disableStream,this._isRangeSupported=!t.options.disableRange,this._readableStream=null,this._readCapability=(0,l.createPromiseCapability)(),this._headersCapability=(0,l.createPromiseCapability)()}return s(e,[{key:"read",value:function(){var e=this
return this._readCapability.promise.then(function(){if(e._done)return Promise.resolve({value:void 0,done:!0})
if(e._errored)return Promise.reject(e._reason)
var t=e._readableStream.read()
if(null===t)return e._readCapability=(0,l.createPromiseCapability)(),e.read()
e._loaded+=t.length,e.onProgress&&e.onProgress({loaded:e._loaded,total:e._contentLength})
var r=new Uint8Array(t).buffer
return Promise.resolve({value:r,done:!1})})}},{key:"cancel",value:function(e){if(!this._readableStream)return void this._error(e)
this._readableStream.destroy(e)}},{key:"_error",value:function(e){this._errored=!0,this._reason=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this
this._readableStream=e,e.on("readable",function(){t._readCapability.resolve()}),e.on("end",function(){e.destroy(),t._done=!0,t._readCapability.resolve()}),e.on("error",function(e){t._error(e)}),this._errored&&this._readableStream.destroy(this._reason)}},{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}(),g=function(){function e(t){a(this,e),this._url=t.url,this._done=!1,this._errored=!1,this._reason=null,this.onProgress=null,this._loaded=0,this._readableStream=null,this._readCapability=(0,l.createPromiseCapability)(),this._isStreamingSupported=!t.source.disableStream}return s(e,[{key:"read",value:function(){var e=this
return this._readCapability.promise.then(function(){if(e._done)return Promise.resolve({value:void 0,done:!0})
if(e._errored)return Promise.reject(e._reason)
var t=e._readableStream.read()
if(null===t)return e._readCapability=(0,l.createPromiseCapability)(),e.read()
e._loaded+=t.length,e.onProgress&&e.onProgress({loaded:e._loaded})
var r=new Uint8Array(t).buffer
return Promise.resolve({value:r,done:!1})})}},{key:"cancel",value:function(e){if(!this._readableStream)return void this._error(e)
this._readableStream.destroy(e)}},{key:"_error",value:function(e){this._errored=!0,this._reason=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this
this._readableStream=e,e.on("readable",function(){t._readCapability.resolve()}),e.on("end",function(){e.destroy(),t._done=!0,t._readCapability.resolve()}),e.on("error",function(e){t._error(e)}),this._errored&&this._readableStream.destroy(this._reason)}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}(),v=function(e){function t(e){a(this,t)
var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=function(t){r._headersCapability.resolve(),r._setReadableStream(t)
var n=(0,u.validateRangeRequestCapabilities)({getResponseHeader:function(e){return r._readableStream.headers[e.toLowerCase()]},isHttp:e.isHttp,rangeChunkSize:r._rangeChunkSize,disableRange:r._disableRange}),i=n.allowRangeRequests,a=n.suggestedLength
i&&(r._isRangeSupported=!0),r._contentLength=a}
return r._request=null,"http:"===r._url.protocol?r._request=h.request(o(r._url,e.httpHeaders),i):r._request=d.request(o(r._url,e.httpHeaders),i),r._request.on("error",function(e){r._errored=!0,r._reason=e,r._headersCapability.reject(e)}),r._request.end(),r}return i(t,e),t}(m),b=function(e){function t(e,r,i){a(this,t)
var s=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
s._httpHeaders={}
for(var l in e.httpHeaders){var u=e.httpHeaders[l]
void 0!==u&&(s._httpHeaders[l]=u)}return s._httpHeaders.Range="bytes="+r+"-"+(i-1),s._request=null,"http:"===s._url.protocol?s._request=h.request(o(s._url,s._httpHeaders),function(e){s._setReadableStream(e)}):s._request=d.request(o(s._url,s._httpHeaders),function(e){s._setReadableStream(e)}),s._request.on("error",function(e){s._errored=!0,s._reason=e}),s._request.end(),s}return i(t,e),t}(g),_=function(e){function t(e){a(this,t)
var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return r._setReadableStream(c.createReadStream(r._url.path)),c.lstat(r._url.path,function(e,t){if(e)return r._errored=!0,r._reason=e,void r._headersCapability.reject(e)
r._contentLength=t.size,r._headersCapability.resolve()}),r}return i(t,e),t}(m),y=function(e){function t(e,r,i){a(this,t)
var o=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return o._setReadableStream(c.createReadStream(o._url.path,{start:r,end:i-1})),o}return i(t,e),t}(g)
t.PDFNodeStream=p},function(e,t,r){"use strict"
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){function t(n){if(r[n])return r[n].exports
var i=r[n]={i:n,l:!1,exports:{}}
return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={}
return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e}
return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,r){function i(e){return"string"==typeof e||"symbol"===(void 0===e?"undefined":o(e))}function a(e,t,r){if("function"!=typeof e)throw new TypeError("Argument is not a function")
return Function.prototype.apply.call(e,t,r)}var o="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)},s=r(1),l=s.assert
t.typeIsObject=function(e){return"object"===(void 0===e?"undefined":o(e))&&null!==e||"function"==typeof e},t.createDataProperty=function(e,r,n){l(t.typeIsObject(e)),Object.defineProperty(e,r,{value:n,writable:!0,enumerable:!0,configurable:!0})},t.createArrayFromList=function(e){return e.slice()},t.ArrayBufferCopy=function(e,t,r,n,i){new Uint8Array(e).set(new Uint8Array(r,n,i),t)},t.CreateIterResultObject=function(e,t){l("boolean"==typeof t)
var r={}
return Object.defineProperty(r,"value",{value:e,enumerable:!0,writable:!0,configurable:!0}),Object.defineProperty(r,"done",{value:t,enumerable:!0,writable:!0,configurable:!0}),r},t.IsFiniteNonNegativeNumber=function(e){return!Number.isNaN(e)&&(e!==1/0&&!(e<0))},t.InvokeOrNoop=function(e,t,r){l(void 0!==e),l(i(t)),l(Array.isArray(r))
var n=e[t]
if(void 0!==n)return a(n,e,r)},t.PromiseInvokeOrNoop=function(e,r,n){l(void 0!==e),l(i(r)),l(Array.isArray(n))
try{return Promise.resolve(t.InvokeOrNoop(e,r,n))}catch(e){return Promise.reject(e)}},t.PromiseInvokeOrPerformFallback=function(e,t,r,n,o){l(void 0!==e),l(i(t)),l(Array.isArray(r)),l(Array.isArray(o))
var s=void 0
try{s=e[t]}catch(e){return Promise.reject(e)}if(void 0===s)return n.apply(null,o)
try{return Promise.resolve(a(s,e,r))}catch(e){return Promise.reject(e)}},t.TransferArrayBuffer=function(e){return e.slice()},t.ValidateAndNormalizeHighWaterMark=function(e){if(e=Number(e),Number.isNaN(e)||e<0)throw new RangeError("highWaterMark property of a queuing strategy must be non-negative and non-NaN")
return e},t.ValidateAndNormalizeQueuingStrategy=function(e,r){if(void 0!==e&&"function"!=typeof e)throw new TypeError("size property of a queuing strategy must be a function")
return r=t.ValidateAndNormalizeHighWaterMark(r),{size:e,highWaterMark:r}}},function(e,t,r){function n(e){e&&e.constructor===i&&setTimeout(function(){throw e},0)}function i(e){this.name="AssertionError",this.message=e||"",this.stack=(new Error).stack}function a(e,t){if(!e)throw new i(t)}i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,e.exports={rethrowAssertionErrorRejection:n,AssertionError:i,assert:a}},function(e,t,r){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return new _e(e)}function a(e){return!!ue(e)&&!!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")}function o(e){return he(!0===a(e),"IsWritableStreamLocked should only be used on known writable streams"),void 0!==e._writer}function s(e,t){var r=e._state
if("closed"===r)return Promise.resolve(void 0)
if("errored"===r)return Promise.reject(e._storedError)
var n=new TypeError("Requested to abort")
if(void 0!==e._pendingAbortRequest)return Promise.reject(n)
he("writable"===r||"erroring"===r,"state must be writable or erroring")
var i=!1
"erroring"===r&&(i=!0,t=void 0)
var a=new Promise(function(r,n){e._pendingAbortRequest={_resolve:r,_reject:n,_reason:t,_wasAlreadyErroring:i}})
return!1===i&&c(e,n),a}function l(e){return he(!0===o(e)),he("writable"===e._state),new Promise(function(t,r){var n={_resolve:t,_reject:r}
e._writeRequests.push(n)})}function u(e,t){var r=e._state
if("writable"===r)return void c(e,t)
he("erroring"===r),h(e)}function c(e,t){he(void 0===e._storedError,"stream._storedError === undefined"),he("writable"===e._state,"state must be writable")
var r=e._writableStreamController
he(void 0!==r,"controller must not be undefined"),e._state="erroring",e._storedError=t
var n=e._writer
void 0!==n&&x(n,t),!1===v(e)&&!0===r._started&&h(e)}function h(e){he("erroring"===e._state,"stream._state === erroring"),he(!1===v(e),"WritableStreamHasOperationMarkedInFlight(stream) === false"),e._state="errored",e._writableStreamController.__errorSteps()
for(var t=e._storedError,r=0;r<e._writeRequests.length;r++){e._writeRequests[r]._reject(t)}if(e._writeRequests=[],void 0===e._pendingAbortRequest)return void y(e)
var n=e._pendingAbortRequest
if(e._pendingAbortRequest=void 0,!0===n._wasAlreadyErroring)return n._reject(t),void y(e)
e._writableStreamController.__abortSteps(n._reason).then(function(){n._resolve(),y(e)},function(t){n._reject(t),y(e)})}function d(e){he(void 0!==e._inFlightWriteRequest),e._inFlightWriteRequest._resolve(void 0),e._inFlightWriteRequest=void 0}function f(e,t){he(void 0!==e._inFlightWriteRequest),e._inFlightWriteRequest._reject(t),e._inFlightWriteRequest=void 0,he("writable"===e._state||"erroring"===e._state),u(e,t)}function p(e){he(void 0!==e._inFlightCloseRequest),e._inFlightCloseRequest._resolve(void 0),e._inFlightCloseRequest=void 0
var t=e._state
he("writable"===t||"erroring"===t),"erroring"===t&&(e._storedError=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._resolve(),e._pendingAbortRequest=void 0)),e._state="closed"
var r=e._writer
void 0!==r&&Q(r),he(void 0===e._pendingAbortRequest,"stream._pendingAbortRequest === undefined"),he(void 0===e._storedError,"stream._storedError === undefined")}function m(e,t){he(void 0!==e._inFlightCloseRequest),e._inFlightCloseRequest._reject(t),e._inFlightCloseRequest=void 0,he("writable"===e._state||"erroring"===e._state),void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._reject(t),e._pendingAbortRequest=void 0),u(e,t)}function g(e){return void 0!==e._closeRequest||void 0!==e._inFlightCloseRequest}function v(e){return void 0!==e._inFlightWriteRequest||void 0!==e._inFlightCloseRequest}function b(e){he(void 0===e._inFlightCloseRequest),he(void 0!==e._closeRequest),e._inFlightCloseRequest=e._closeRequest,e._closeRequest=void 0}function _(e){he(void 0===e._inFlightWriteRequest,"there must be no pending write request"),he(0!==e._writeRequests.length,"writeRequests must not be empty"),e._inFlightWriteRequest=e._writeRequests.shift()}function y(e){he("errored"===e._state,'_stream_.[[state]] is `"errored"`'),void 0!==e._closeRequest&&(he(void 0===e._inFlightCloseRequest),e._closeRequest._reject(e._storedError),e._closeRequest=void 0)
var t=e._writer
void 0!==t&&(V(t,e._storedError),t._closedPromise.catch(function(){}))}function A(e,t){he("writable"===e._state),he(!1===g(e))
var r=e._writer
void 0!==r&&t!==e._backpressure&&(!0===t?te(r):(he(!1===t),ne(r))),e._backpressure=t}function S(e){return!!ue(e)&&!!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")}function w(e,t){var r=e._ownerWritableStream
return he(void 0!==r),s(r,t)}function P(e){var t=e._ownerWritableStream
he(void 0!==t)
var r=t._state
if("closed"===r||"errored"===r)return Promise.reject(new TypeError("The stream (in "+r+" state) is not in the writable state and cannot be closed"))
he("writable"===r||"erroring"===r),he(!1===g(t))
var n=new Promise(function(e,r){var n={_resolve:e,_reject:r}
t._closeRequest=n})
return!0===t._backpressure&&"writable"===r&&ne(e),O(t._writableStreamController),n}function R(e){var t=e._ownerWritableStream
he(void 0!==t)
var r=t._state
return!0===g(t)||"closed"===r?Promise.resolve():"errored"===r?Promise.reject(t._storedError):(he("writable"===r||"erroring"===r),P(e))}function C(e,t){"pending"===e._closedPromiseState?V(e,t):J(e,t),e._closedPromise.catch(function(){})}function x(e,t){"pending"===e._readyPromiseState?ee(e,t):re(e,t),e._readyPromise.catch(function(){})}function k(e){var t=e._ownerWritableStream,r=t._state
return"errored"===r||"erroring"===r?null:"closed"===r?0:L(t._writableStreamController)}function T(e){var t=e._ownerWritableStream
he(void 0!==t),he(t._writer===e)
var r=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness")
x(e,r),C(e,r),t._writer=void 0,e._ownerWritableStream=void 0}function E(e,t){var r=e._ownerWritableStream
he(void 0!==r)
var n=r._writableStreamController,i=I(n,t)
if(r!==e._ownerWritableStream)return Promise.reject(G("write to"))
var a=r._state
if("errored"===a)return Promise.reject(r._storedError)
if(!0===g(r)||"closed"===a)return Promise.reject(new TypeError("The stream is closing or closed and cannot be written to"))
if("erroring"===a)return Promise.reject(r._storedError)
he("writable"===a)
var o=l(r)
return j(n,t,i),o}function O(e){me(e,"close",0),F(e)}function I(e,t){var r=e._strategySize
if(void 0===r)return 1
try{return r(t)}catch(t){return N(e,t),1}}function L(e){return e._strategyHWM-e._queueTotalSize}function j(e,t,r){var n={chunk:t}
try{me(e,n,r)}catch(t){return void N(e,t)}var i=e._controlledWritableStream
if(!1===g(i)&&"writable"===i._state){A(i,U(e))}F(e)}function D(e){return!!ue(e)&&!!Object.prototype.hasOwnProperty.call(e,"_underlyingSink")}function F(e){var t=e._controlledWritableStream
if(!1!==e._started&&void 0===t._inFlightWriteRequest){var r=t._state
if("closed"!==r&&"errored"!==r){if("erroring"===r)return void h(t)
if(0!==e._queue.length){var n=ge(e)
"close"===n?M(e):q(e,n.chunk)}}}}function N(e,t){"writable"===e._controlledWritableStream._state&&W(e,t)}function M(e){var t=e._controlledWritableStream
b(t),pe(e),he(0===e._queue.length,"queue must be empty once the final write record is dequeued"),se(e._underlyingSink,"close",[]).then(function(){p(t)},function(e){m(t,e)}).catch(de)}function q(e,t){var r=e._controlledWritableStream
_(r),se(e._underlyingSink,"write",[t,e]).then(function(){d(r)
var t=r._state
if(he("writable"===t||"erroring"===t),pe(e),!1===g(r)&&"writable"===t){var n=U(e)
A(r,n)}F(e)},function(e){f(r,e)}).catch(de)}function U(e){return L(e)<=0}function W(e,t){var r=e._controlledWritableStream
he("writable"===r._state),c(r,t)}function B(e){return new TypeError("WritableStream.prototype."+e+" can only be used on a WritableStream")}function z(e){return new TypeError("WritableStreamDefaultWriter.prototype."+e+" can only be used on a WritableStreamDefaultWriter")}function G(e){return new TypeError("Cannot "+e+" a stream using a released writer")}function H(e){e._closedPromise=new Promise(function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending"})}function X(e,t){e._closedPromise=Promise.reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected"}function Y(e){e._closedPromise=Promise.resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved"}function V(e,t){he(void 0!==e._closedPromise_resolve,"writer._closedPromise_resolve !== undefined"),he(void 0!==e._closedPromise_reject,"writer._closedPromise_reject !== undefined"),he("pending"===e._closedPromiseState,"writer._closedPromiseState is pending"),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected"}function J(e,t){he(void 0===e._closedPromise_resolve,"writer._closedPromise_resolve === undefined"),he(void 0===e._closedPromise_reject,"writer._closedPromise_reject === undefined"),he("pending"!==e._closedPromiseState,"writer._closedPromiseState is not pending"),e._closedPromise=Promise.reject(t),e._closedPromiseState="rejected"}function Q(e){he(void 0!==e._closedPromise_resolve,"writer._closedPromise_resolve !== undefined"),he(void 0!==e._closedPromise_reject,"writer._closedPromise_reject !== undefined"),he("pending"===e._closedPromiseState,"writer._closedPromiseState is pending"),e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved"}function K(e){e._readyPromise=new Promise(function(t,r){e._readyPromise_resolve=t,e._readyPromise_reject=r}),e._readyPromiseState="pending"}function Z(e,t){e._readyPromise=Promise.reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected"}function $(e){e._readyPromise=Promise.resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled"}function ee(e,t){he(void 0!==e._readyPromise_resolve,"writer._readyPromise_resolve !== undefined"),he(void 0!==e._readyPromise_reject,"writer._readyPromise_reject !== undefined"),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected"}function te(e){he(void 0===e._readyPromise_resolve,"writer._readyPromise_resolve === undefined"),he(void 0===e._readyPromise_reject,"writer._readyPromise_reject === undefined"),e._readyPromise=new Promise(function(t,r){e._readyPromise_resolve=t,e._readyPromise_reject=r}),e._readyPromiseState="pending"}function re(e,t){he(void 0===e._readyPromise_resolve,"writer._readyPromise_resolve === undefined"),he(void 0===e._readyPromise_reject,"writer._readyPromise_reject === undefined"),e._readyPromise=Promise.reject(t),e._readyPromiseState="rejected"}function ne(e){he(void 0!==e._readyPromise_resolve,"writer._readyPromise_resolve !== undefined"),he(void 0!==e._readyPromise_reject,"writer._readyPromise_reject !== undefined"),e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled"}var ie=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ae=r(0),oe=ae.InvokeOrNoop,se=ae.PromiseInvokeOrNoop,le=ae.ValidateAndNormalizeQueuingStrategy,ue=ae.typeIsObject,ce=r(1),he=ce.assert,de=ce.rethrowAssertionErrorRejection,fe=r(3),pe=fe.DequeueValue,me=fe.EnqueueValueWithSize,ge=fe.PeekQueueValue,ve=fe.ResetQueue,be=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.size,a=r.highWaterMark,o=void 0===a?1:a
if(n(this,e),this._state="writable",this._storedError=void 0,this._writer=void 0,this._writableStreamController=void 0,this._writeRequests=[],this._inFlightWriteRequest=void 0,this._closeRequest=void 0,this._inFlightCloseRequest=void 0,this._pendingAbortRequest=void 0,this._backpressure=!1,void 0!==t.type)throw new RangeError("Invalid type is specified")
this._writableStreamController=new ye(this,t,i,o),this._writableStreamController.__startSteps()}return ie(e,[{key:"abort",value:function(e){return!1===a(this)?Promise.reject(B("abort")):!0===o(this)?Promise.reject(new TypeError("Cannot abort a stream that already has a writer")):s(this,e)}},{key:"getWriter",value:function(){if(!1===a(this))throw B("getWriter")
return i(this)}},{key:"locked",get:function(){if(!1===a(this))throw B("locked")
return o(this)}}]),e}()
e.exports={AcquireWritableStreamDefaultWriter:i,IsWritableStream:a,IsWritableStreamLocked:o,WritableStream:be,WritableStreamAbort:s,WritableStreamDefaultControllerError:W,WritableStreamDefaultWriterCloseWithErrorPropagation:R,WritableStreamDefaultWriterRelease:T,WritableStreamDefaultWriterWrite:E,WritableStreamCloseQueuedOrInFlight:g}
var _e=function(){function e(t){if(n(this,e),!1===a(t))throw new TypeError("WritableStreamDefaultWriter can only be constructed with a WritableStream instance")
if(!0===o(t))throw new TypeError("This stream has already been locked for exclusive writing by another writer")
this._ownerWritableStream=t,t._writer=this
var r=t._state
if("writable"===r)!1===g(t)&&!0===t._backpressure?K(this):$(this),H(this)
else if("erroring"===r)Z(this,t._storedError),this._readyPromise.catch(function(){}),H(this)
else if("closed"===r)$(this),Y(this)
else{he("errored"===r,"state must be errored")
var i=t._storedError
Z(this,i),this._readyPromise.catch(function(){}),X(this,i),this._closedPromise.catch(function(){})}}return ie(e,[{key:"abort",value:function(e){return!1===S(this)?Promise.reject(z("abort")):void 0===this._ownerWritableStream?Promise.reject(G("abort")):w(this,e)}},{key:"close",value:function(){if(!1===S(this))return Promise.reject(z("close"))
var e=this._ownerWritableStream
return void 0===e?Promise.reject(G("close")):!0===g(e)?Promise.reject(new TypeError("cannot close an already-closing stream")):P(this)}},{key:"releaseLock",value:function(){if(!1===S(this))throw z("releaseLock")
var e=this._ownerWritableStream
void 0!==e&&(he(void 0!==e._writer),T(this))}},{key:"write",value:function(e){return!1===S(this)?Promise.reject(z("write")):void 0===this._ownerWritableStream?Promise.reject(G("write to")):E(this,e)}},{key:"closed",get:function(){return!1===S(this)?Promise.reject(z("closed")):this._closedPromise}},{key:"desiredSize",get:function(){if(!1===S(this))throw z("desiredSize")
if(void 0===this._ownerWritableStream)throw G("desiredSize")
return k(this)}},{key:"ready",get:function(){return!1===S(this)?Promise.reject(z("ready")):this._readyPromise}}]),e}(),ye=function(){function e(t,r,i,o){if(n(this,e),!1===a(t))throw new TypeError("WritableStreamDefaultController can only be constructed with a WritableStream instance")
if(void 0!==t._writableStreamController)throw new TypeError("WritableStreamDefaultController instances can only be created by the WritableStream constructor")
this._controlledWritableStream=t,this._underlyingSink=r,this._queue=void 0,this._queueTotalSize=void 0,ve(this),this._started=!1
var s=le(i,o)
this._strategySize=s.size,this._strategyHWM=s.highWaterMark,A(t,U(this))}return ie(e,[{key:"error",value:function(e){if(!1===D(this))throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController")
"writable"===this._controlledWritableStream._state&&W(this,e)}},{key:"__abortSteps",value:function(e){return se(this._underlyingSink,"abort",[e])}},{key:"__errorSteps",value:function(){ve(this)}},{key:"__startSteps",value:function(){var e=this,t=oe(this._underlyingSink,"start",[this]),r=this._controlledWritableStream
Promise.resolve(t).then(function(){he("writable"===r._state||"erroring"===r._state),e._started=!0,F(e)},function(t){he("writable"===r._state||"erroring"===r._state),e._started=!0,u(r,t)}).catch(de)}}]),e}()},function(e,t,r){var n=r(0),i=n.IsFiniteNonNegativeNumber,a=r(1),o=a.assert
t.DequeueValue=function(e){o("_queue"in e&&"_queueTotalSize"in e,"Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."),o(e._queue.length>0,"Spec-level failure: should never dequeue from an empty queue.")
var t=e._queue.shift()
return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value},t.EnqueueValueWithSize=function(e,t,r){if(o("_queue"in e&&"_queueTotalSize"in e,"Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and [[queueTotalSize]]."),r=Number(r),!i(r))throw new RangeError("Size must be a finite, non-NaN, non-negative number.")
e._queue.push({value:t,size:r}),e._queueTotalSize+=r},t.PeekQueueValue=function(e){return o("_queue"in e&&"_queueTotalSize"in e,"Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."),o(e._queue.length>0,"Spec-level failure: should never peek at an empty queue."),e._queue[0].value},t.ResetQueue=function(e){o("_queue"in e&&"_queueTotalSize"in e,"Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]]."),e._queue=[],e._queueTotalSize=0}},function(e,t,r){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return new tt(e)}function a(e){return new et(e)}function o(e){return!!Fe(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")}function s(e){return Me(!0===o(e),"IsReadableStreamDisturbed should only be used on known readable streams"),e._disturbed}function l(e){return Me(!0===o(e),"IsReadableStreamLocked should only be used on known readable streams"),void 0!==e._reader}function u(e,t){Me(!0===o(e)),Me("boolean"==typeof t)
var r=a(e),n={closedOrErrored:!1,canceled1:!1,canceled2:!1,reason1:void 0,reason2:void 0}
n.promise=new Promise(function(e){n._resolve=e})
var i=c()
i._reader=r,i._teeState=n,i._cloneForBranch2=t
var s=h()
s._stream=e,s._teeState=n
var l=d()
l._stream=e,l._teeState=n
var u=Object.create(Object.prototype)
De(u,"pull",i),De(u,"cancel",s)
var f=new $e(u),p=Object.create(Object.prototype)
De(p,"pull",i),De(p,"cancel",l)
var m=new $e(p)
return i._branch1=f._readableStreamController,i._branch2=m._readableStreamController,r._closedPromise.catch(function(e){!0!==n.closedOrErrored&&(F(i._branch1,e),F(i._branch2,e),n.closedOrErrored=!0)}),[f,m]}function c(){function e(){var t=e._reader,r=e._branch1,n=e._branch2,i=e._teeState
return E(t).then(function(e){Me(Fe(e))
var t=e.value,a=e.done
if(Me("boolean"==typeof a),!0===a&&!1===i.closedOrErrored&&(!1===i.canceled1&&j(r),!1===i.canceled2&&j(n),i.closedOrErrored=!0),!0!==i.closedOrErrored){var o=t,s=t
!1===i.canceled1&&D(r,o),!1===i.canceled2&&D(n,s)}})}return e}function h(){function e(t){var r=e._stream,n=e._teeState
if(n.canceled1=!0,n.reason1=t,!0===n.canceled2){var i=je([n.reason1,n.reason2]),a=m(r,i)
n._resolve(a)}return n.promise}return e}function d(){function e(t){var r=e._stream,n=e._teeState
if(n.canceled2=!0,n.reason2=t,!0===n.canceled1){var i=je([n.reason1,n.reason2]),a=m(r,i)
n._resolve(a)}return n.promise}return e}function f(e){return Me(!0===P(e._reader)),Me("readable"===e._state||"closed"===e._state),new Promise(function(t,r){var n={_resolve:t,_reject:r}
e._reader._readIntoRequests.push(n)})}function p(e){return Me(!0===R(e._reader)),Me("readable"===e._state),new Promise(function(t,r){var n={_resolve:t,_reject:r}
e._reader._readRequests.push(n)})}function m(e,t){return e._disturbed=!0,"closed"===e._state?Promise.resolve(void 0):"errored"===e._state?Promise.reject(e._storedError):(g(e),e._readableStreamController.__cancelSteps(t).then(function(){}))}function g(e){Me("readable"===e._state),e._state="closed"
var t=e._reader
if(void 0!==t){if(!0===R(t)){for(var r=0;r<t._readRequests.length;r++){(0,t._readRequests[r]._resolve)(Ce(void 0,!0))}t._readRequests=[]}ve(t)}}function v(e,t){Me(!0===o(e),"stream must be ReadableStream"),Me("readable"===e._state,"state must be readable"),e._state="errored",e._storedError=t
var r=e._reader
if(void 0!==r){if(!0===R(r)){for(var n=0;n<r._readRequests.length;n++){r._readRequests[n]._reject(t)}r._readRequests=[]}else{Me(P(r),"reader must be ReadableStreamBYOBReader")
for(var i=0;i<r._readIntoRequests.length;i++){r._readIntoRequests[i]._reject(t)}r._readIntoRequests=[]}me(r,t),r._closedPromise.catch(function(){})}}function b(e,t,r){var n=e._reader
Me(n._readIntoRequests.length>0),n._readIntoRequests.shift()._resolve(Ce(t,r))}function _(e,t,r){var n=e._reader
Me(n._readRequests.length>0),n._readRequests.shift()._resolve(Ce(t,r))}function y(e){return e._reader._readIntoRequests.length}function A(e){return e._reader._readRequests.length}function S(e){var t=e._reader
return void 0!==t&&!1!==P(t)}function w(e){var t=e._reader
return void 0!==t&&!1!==R(t)}function P(e){return!!Fe(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")}function R(e){return!!Fe(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readRequests")}function C(e,t){e._ownerReadableStream=t,t._reader=e,"readable"===t._state?de(e):"closed"===t._state?pe(e):(Me("errored"===t._state,"state must be errored"),fe(e,t._storedError),e._closedPromise.catch(function(){}))}function x(e,t){var r=e._ownerReadableStream
return Me(void 0!==r),m(r,t)}function k(e){Me(void 0!==e._ownerReadableStream),Me(e._ownerReadableStream._reader===e),"readable"===e._ownerReadableStream._state?me(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):ge(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),e._closedPromise.catch(function(){}),e._ownerReadableStream._reader=void 0,e._ownerReadableStream=void 0}function T(e,t){var r=e._ownerReadableStream
return Me(void 0!==r),r._disturbed=!0,"errored"===r._state?Promise.reject(r._storedError):K(r._readableStreamController,t)}function E(e){var t=e._ownerReadableStream
return Me(void 0!==t),t._disturbed=!0,"closed"===t._state?Promise.resolve(Ce(void 0,!0)):"errored"===t._state?Promise.reject(t._storedError):(Me("readable"===t._state),t._readableStreamController.__pullSteps())}function O(e){return!!Fe(e)&&!!Object.prototype.hasOwnProperty.call(e,"_underlyingSource")}function I(e){if(!1!==L(e)){if(!0===e._pulling)return void(e._pullAgain=!0)
Me(!1===e._pullAgain),e._pulling=!0,Te(e._underlyingSource,"pull",[e]).then(function(){if(e._pulling=!1,!0===e._pullAgain)return e._pullAgain=!1,I(e)},function(t){N(e,t)}).catch(qe)}}function L(e){var t=e._controlledReadableStream
return"closed"!==t._state&&"errored"!==t._state&&(!0!==e._closeRequested&&(!1!==e._started&&(!0===l(t)&&A(t)>0||M(e)>0)))}function j(e){var t=e._controlledReadableStream
Me(!1===e._closeRequested),Me("readable"===t._state),e._closeRequested=!0,0===e._queue.length&&g(t)}function D(e,t){var r=e._controlledReadableStream
if(Me(!1===e._closeRequested),Me("readable"===r._state),!0===l(r)&&A(r)>0)_(r,t,!1)
else{var n=1
if(void 0!==e._strategySize){var i=e._strategySize
try{n=i(t)}catch(t){throw N(e,t),t}}try{Be(e,t,n)}catch(t){throw N(e,t),t}}I(e)}function F(e,t){var r=e._controlledReadableStream
Me("readable"===r._state),ze(e),v(r,t)}function N(e,t){"readable"===e._controlledReadableStream._state&&F(e,t)}function M(e){var t=e._controlledReadableStream,r=t._state
return"errored"===r?null:"closed"===r?0:e._strategyHWM-e._queueTotalSize}function q(e){return!!Fe(e)&&!!Object.prototype.hasOwnProperty.call(e,"_underlyingByteSource")}function U(e){return!!Fe(e)&&!!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")}function W(e){if(!1!==re(e)){if(!0===e._pulling)return void(e._pullAgain=!0)
Me(!1===e._pullAgain),e._pulling=!0,Te(e._underlyingByteSource,"pull",[e]).then(function(){e._pulling=!1,!0===e._pullAgain&&(e._pullAgain=!1,W(e))},function(t){"readable"===e._controlledReadableStream._state&&ae(e,t)}).catch(qe)}}function B(e){J(e),e._pendingPullIntos=[]}function z(e,t){Me("errored"!==e._state,"state must not be errored")
var r=!1
"closed"===e._state&&(Me(0===t.bytesFilled),r=!0)
var n=G(t)
"default"===t.readerType?_(e,n,r):(Me("byob"===t.readerType),b(e,n,r))}function G(e){var t=e.bytesFilled,r=e.elementSize
return Me(t<=e.byteLength),Me(t%r==0),new e.ctor(e.buffer,e.byteOffset,t/r)}function H(e,t,r,n){e._queue.push({buffer:t,byteOffset:r,byteLength:n}),e._queueTotalSize+=n}function X(e,t){var r=t.elementSize,n=t.bytesFilled-t.bytesFilled%r,i=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),a=t.bytesFilled+i,o=a-a%r,s=i,l=!1
o>n&&(s=o-t.bytesFilled,l=!0)
for(var u=e._queue;s>0;){var c=u[0],h=Math.min(s,c.byteLength),d=t.byteOffset+t.bytesFilled
Re(t.buffer,d,c.buffer,c.byteOffset,h),c.byteLength===h?u.shift():(c.byteOffset+=h,c.byteLength-=h),e._queueTotalSize-=h,Y(e,h,t),s-=h}return!1===l&&(Me(0===e._queueTotalSize,"queue must be empty"),Me(t.bytesFilled>0),Me(t.bytesFilled<t.elementSize)),l}function Y(e,t,r){Me(0===e._pendingPullIntos.length||e._pendingPullIntos[0]===r),J(e),r.bytesFilled+=t}function V(e){Me("readable"===e._controlledReadableStream._state),0===e._queueTotalSize&&!0===e._closeRequested?g(e._controlledReadableStream):W(e)}function J(e){void 0!==e._byobRequest&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=void 0,e._byobRequest=void 0)}function Q(e){for(Me(!1===e._closeRequested);e._pendingPullIntos.length>0;){if(0===e._queueTotalSize)return
var t=e._pendingPullIntos[0]
!0===X(e,t)&&(te(e),z(e._controlledReadableStream,t))}}function K(e,t){var r=e._controlledReadableStream,n=1
t.constructor!==DataView&&(n=t.constructor.BYTES_PER_ELEMENT)
var i=t.constructor,a={buffer:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength,bytesFilled:0,elementSize:n,ctor:i,readerType:"byob"}
if(e._pendingPullIntos.length>0)return a.buffer=Ee(a.buffer),e._pendingPullIntos.push(a),f(r)
if("closed"===r._state){var o=new t.constructor(a.buffer,a.byteOffset,0)
return Promise.resolve(Ce(o,!0))}if(e._queueTotalSize>0){if(!0===X(e,a)){var s=G(a)
return V(e),Promise.resolve(Ce(s,!1))}if(!0===e._closeRequested){var l=new TypeError("Insufficient bytes to fill elements in the given buffer")
return ae(e,l),Promise.reject(l)}}a.buffer=Ee(a.buffer),e._pendingPullIntos.push(a)
var u=f(r)
return W(e),u}function Z(e,t){t.buffer=Ee(t.buffer),Me(0===t.bytesFilled,"bytesFilled must be 0")
var r=e._controlledReadableStream
if(!0===S(r))for(;y(r)>0;){var n=te(e)
z(r,n)}}function $(e,t,r){if(r.bytesFilled+t>r.byteLength)throw new RangeError("bytesWritten out of range")
if(Y(e,t,r),!(r.bytesFilled<r.elementSize)){te(e)
var n=r.bytesFilled%r.elementSize
if(n>0){var i=r.byteOffset+r.bytesFilled,a=r.buffer.slice(i-n,i)
H(e,a,0,a.byteLength)}r.buffer=Ee(r.buffer),r.bytesFilled-=n,z(e._controlledReadableStream,r),Q(e)}}function ee(e,t){var r=e._pendingPullIntos[0],n=e._controlledReadableStream
if("closed"===n._state){if(0!==t)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")
Z(e,r)}else Me("readable"===n._state),$(e,t,r)}function te(e){var t=e._pendingPullIntos.shift()
return J(e),t}function re(e){var t=e._controlledReadableStream
return"readable"===t._state&&(!0!==e._closeRequested&&(!1!==e._started&&(!0===w(t)&&A(t)>0||(!0===S(t)&&y(t)>0||oe(e)>0))))}function ne(e){var t=e._controlledReadableStream
if(Me(!1===e._closeRequested),Me("readable"===t._state),e._queueTotalSize>0)return void(e._closeRequested=!0)
if(e._pendingPullIntos.length>0){if(e._pendingPullIntos[0].bytesFilled>0){var r=new TypeError("Insufficient bytes to fill elements in the given buffer")
throw ae(e,r),r}}g(t)}function ie(e,t){var r=e._controlledReadableStream
Me(!1===e._closeRequested),Me("readable"===r._state)
var n=t.buffer,i=t.byteOffset,a=t.byteLength,o=Ee(n)
if(!0===w(r))if(0===A(r))H(e,o,i,a)
else{Me(0===e._queue.length)
var s=new Uint8Array(o,i,a)
_(r,s,!1)}else!0===S(r)?(H(e,o,i,a),Q(e)):(Me(!1===l(r),"stream must not be locked"),H(e,o,i,a))}function ae(e,t){var r=e._controlledReadableStream
Me("readable"===r._state),B(e),ze(e),v(r,t)}function oe(e){var t=e._controlledReadableStream,r=t._state
return"errored"===r?null:"closed"===r?0:e._strategyHWM-e._queueTotalSize}function se(e,t){if(t=Number(t),!1===xe(t))throw new RangeError("bytesWritten must be a finite")
Me(e._pendingPullIntos.length>0),ee(e,t)}function le(e,t){Me(e._pendingPullIntos.length>0)
var r=e._pendingPullIntos[0]
if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw new RangeError("The region specified by view does not match byobRequest")
if(r.byteLength!==t.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest")
r.buffer=t.buffer,ee(e,t.byteLength)}function ue(e){return new TypeError("ReadableStream.prototype."+e+" can only be used on a ReadableStream")}function ce(e){return new TypeError("Cannot "+e+" a stream using a released reader")}function he(e){return new TypeError("ReadableStreamDefaultReader.prototype."+e+" can only be used on a ReadableStreamDefaultReader")}function de(e){e._closedPromise=new Promise(function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r})}function fe(e,t){e._closedPromise=Promise.reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function pe(e){e._closedPromise=Promise.resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function me(e,t){Me(void 0!==e._closedPromise_resolve),Me(void 0!==e._closedPromise_reject),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function ge(e,t){Me(void 0===e._closedPromise_resolve),Me(void 0===e._closedPromise_reject),e._closedPromise=Promise.reject(t)}function ve(e){Me(void 0!==e._closedPromise_resolve),Me(void 0!==e._closedPromise_reject),e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function be(e){return new TypeError("ReadableStreamBYOBReader.prototype."+e+" can only be used on a ReadableStreamBYOBReader")}function _e(e){return new TypeError("ReadableStreamDefaultController.prototype."+e+" can only be used on a ReadableStreamDefaultController")}function ye(e){return new TypeError("ReadableStreamBYOBRequest.prototype."+e+" can only be used on a ReadableStreamBYOBRequest")}function Ae(e){return new TypeError("ReadableByteStreamController.prototype."+e+" can only be used on a ReadableByteStreamController")}function Se(e){try{Promise.prototype.then.call(e,void 0,function(){})}catch(e){}}var we=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Pe=r(0),Re=Pe.ArrayBufferCopy,Ce=Pe.CreateIterResultObject,xe=Pe.IsFiniteNonNegativeNumber,ke=Pe.InvokeOrNoop,Te=Pe.PromiseInvokeOrNoop,Ee=Pe.TransferArrayBuffer,Oe=Pe.ValidateAndNormalizeQueuingStrategy,Ie=Pe.ValidateAndNormalizeHighWaterMark,Le=r(0),je=Le.createArrayFromList,De=Le.createDataProperty,Fe=Le.typeIsObject,Ne=r(1),Me=Ne.assert,qe=Ne.rethrowAssertionErrorRejection,Ue=r(3),We=Ue.DequeueValue,Be=Ue.EnqueueValueWithSize,ze=Ue.ResetQueue,Ge=r(2),He=Ge.AcquireWritableStreamDefaultWriter,Xe=Ge.IsWritableStream,Ye=Ge.IsWritableStreamLocked,Ve=Ge.WritableStreamAbort,Je=Ge.WritableStreamDefaultWriterCloseWithErrorPropagation,Qe=Ge.WritableStreamDefaultWriterRelease,Ke=Ge.WritableStreamDefaultWriterWrite,Ze=Ge.WritableStreamCloseQueuedOrInFlight,$e=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.size,a=r.highWaterMark
n(this,e),this._state="readable",this._reader=void 0,this._storedError=void 0,this._disturbed=!1,this._readableStreamController=void 0
var o=t.type
if("bytes"===String(o))void 0===a&&(a=0),this._readableStreamController=new it(this,t,a)
else{if(void 0!==o)throw new RangeError("Invalid type is specified")
void 0===a&&(a=1),this._readableStreamController=new rt(this,t,i,a)}}return we(e,[{key:"cancel",value:function(e){return!1===o(this)?Promise.reject(ue("cancel")):!0===l(this)?Promise.reject(new TypeError("Cannot cancel a stream that already has a reader")):m(this,e)}},{key:"getReader",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mode
if(!1===o(this))throw ue("getReader")
if(void 0===t)return a(this)
if("byob"===(t=String(t)))return i(this)
throw new RangeError("Invalid mode is specified")}},{key:"pipeThrough",value:function(e,t){var r=e.writable,n=e.readable
return Se(this.pipeTo(r,t)),n}},{key:"pipeTo",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.preventClose,i=r.preventAbort,s=r.preventCancel
if(!1===o(this))return Promise.reject(ue("pipeTo"))
if(!1===Xe(e))return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"))
if(n=Boolean(n),i=Boolean(i),s=Boolean(s),!0===l(this))return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"))
if(!0===Ye(e))return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"))
var u=a(this),c=He(e),h=!1,d=Promise.resolve()
return new Promise(function(r,a){function o(){return d=Promise.resolve(),!0===h?Promise.resolve():c._readyPromise.then(function(){return E(u).then(function(e){var t=e.value
!0!==e.done&&(d=Ke(c,t).catch(function(){}))})}).then(o)}function l(){var e=d
return d.then(function(){return e!==d?l():void 0})}function f(e,t,r){"errored"===e._state?r(e._storedError):t.catch(r).catch(qe)}function p(t,r,n){function i(){t().then(function(){return v(r,n)},function(e){return v(!0,e)}).catch(qe)}!0!==h&&(h=!0,"writable"===e._state&&!1===Ze(e)?l().then(i):i())}function g(t,r){!0!==h&&(h=!0,"writable"===e._state&&!1===Ze(e)?l().then(function(){return v(t,r)}).catch(qe):v(t,r))}function v(e,t){Qe(c),k(u),e?a(t):r(void 0)}if(f(t,u._closedPromise,function(t){!1===i?p(function(){return Ve(e,t)},!0,t):g(!0,t)}),f(e,c._closedPromise,function(e){!1===s?p(function(){return m(t,e)},!0,e):g(!0,e)}),function(e,t,r){"closed"===e._state?r():t.then(r).catch(qe)}(t,u._closedPromise,function(){!1===n?p(function(){return Je(c)}):g()}),!0===Ze(e)||"closed"===e._state){var b=new TypeError("the destination writable stream closed before all data could be piped to it")
!1===s?p(function(){return m(t,b)},!0,b):g(!0,b)}o().catch(function(e){d=Promise.resolve(),qe(e)})})}},{key:"tee",value:function(){if(!1===o(this))throw ue("tee")
var e=u(this,!1)
return je(e)}},{key:"locked",get:function(){if(!1===o(this))throw ue("locked")
return l(this)}}]),e}()
e.exports={ReadableStream:$e,IsReadableStreamDisturbed:s,ReadableStreamDefaultControllerClose:j,ReadableStreamDefaultControllerEnqueue:D,ReadableStreamDefaultControllerError:F,ReadableStreamDefaultControllerGetDesiredSize:M}
var et=function(){function e(t){if(n(this,e),!1===o(t))throw new TypeError("ReadableStreamDefaultReader can only be constructed with a ReadableStream instance")
if(!0===l(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
C(this,t),this._readRequests=[]}return we(e,[{key:"cancel",value:function(e){return!1===R(this)?Promise.reject(he("cancel")):void 0===this._ownerReadableStream?Promise.reject(ce("cancel")):x(this,e)}},{key:"read",value:function(){return!1===R(this)?Promise.reject(he("read")):void 0===this._ownerReadableStream?Promise.reject(ce("read from")):E(this)}},{key:"releaseLock",value:function(){if(!1===R(this))throw he("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
k(this)}}},{key:"closed",get:function(){return!1===R(this)?Promise.reject(he("closed")):this._closedPromise}}]),e}(),tt=function(){function e(t){if(n(this,e),!o(t))throw new TypeError("ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source")
if(!1===q(t._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source")
if(l(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
C(this,t),this._readIntoRequests=[]}return we(e,[{key:"cancel",value:function(e){return P(this)?void 0===this._ownerReadableStream?Promise.reject(ce("cancel")):x(this,e):Promise.reject(be("cancel"))}},{key:"read",value:function(e){return P(this)?void 0===this._ownerReadableStream?Promise.reject(ce("read from")):ArrayBuffer.isView(e)?0===e.byteLength?Promise.reject(new TypeError("view must have non-zero byteLength")):T(this,e):Promise.reject(new TypeError("view must be an array buffer view")):Promise.reject(be("read"))}},{key:"releaseLock",value:function(){if(!P(this))throw be("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readIntoRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
k(this)}}},{key:"closed",get:function(){return P(this)?this._closedPromise:Promise.reject(be("closed"))}}]),e}(),rt=function(){function e(t,r,i,a){if(n(this,e),!1===o(t))throw new TypeError("ReadableStreamDefaultController can only be constructed with a ReadableStream instance")
if(void 0!==t._readableStreamController)throw new TypeError("ReadableStreamDefaultController instances can only be created by the ReadableStream constructor")
this._controlledReadableStream=t,this._underlyingSource=r,this._queue=void 0,this._queueTotalSize=void 0,ze(this),this._started=!1,this._closeRequested=!1,this._pullAgain=!1,this._pulling=!1
var s=Oe(i,a)
this._strategySize=s.size,this._strategyHWM=s.highWaterMark
var l=this,u=ke(r,"start",[this])
Promise.resolve(u).then(function(){l._started=!0,Me(!1===l._pulling),Me(!1===l._pullAgain),I(l)},function(e){N(l,e)}).catch(qe)}return we(e,[{key:"close",value:function(){if(!1===O(this))throw _e("close")
if(!0===this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!")
var e=this._controlledReadableStream._state
if("readable"!==e)throw new TypeError("The stream (in "+e+" state) is not in the readable state and cannot be closed")
j(this)}},{key:"enqueue",value:function(e){if(!1===O(this))throw _e("enqueue")
if(!0===this._closeRequested)throw new TypeError("stream is closed or draining")
var t=this._controlledReadableStream._state
if("readable"!==t)throw new TypeError("The stream (in "+t+" state) is not in the readable state and cannot be enqueued to")
return D(this,e)}},{key:"error",value:function(e){if(!1===O(this))throw _e("error")
var t=this._controlledReadableStream
if("readable"!==t._state)throw new TypeError("The stream is "+t._state+" and so cannot be errored")
F(this,e)}},{key:"__cancelSteps",value:function(e){return ze(this),Te(this._underlyingSource,"cancel",[e])}},{key:"__pullSteps",value:function(){var e=this._controlledReadableStream
if(this._queue.length>0){var t=We(this)
return!0===this._closeRequested&&0===this._queue.length?g(e):I(this),Promise.resolve(Ce(t,!1))}var r=p(e)
return I(this),r}},{key:"desiredSize",get:function(){if(!1===O(this))throw _e("desiredSize")
return M(this)}}]),e}(),nt=function(){function e(t,r){n(this,e),this._associatedReadableByteStreamController=t,this._view=r}return we(e,[{key:"respond",value:function(e){if(!1===U(this))throw ye("respond")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
se(this._associatedReadableByteStreamController,e)}},{key:"respondWithNewView",value:function(e){if(!1===U(this))throw ye("respond")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
if(!ArrayBuffer.isView(e))throw new TypeError("You can only respond with array buffer views")
le(this._associatedReadableByteStreamController,e)}},{key:"view",get:function(){return this._view}}]),e}(),it=function(){function e(t,r,i){if(n(this,e),!1===o(t))throw new TypeError("ReadableByteStreamController can only be constructed with a ReadableStream instance given a byte source")
if(void 0!==t._readableStreamController)throw new TypeError("ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte source")
this._controlledReadableStream=t,this._underlyingByteSource=r,this._pullAgain=!1,this._pulling=!1,B(this),this._queue=this._queueTotalSize=void 0,ze(this),this._closeRequested=!1,this._started=!1,this._strategyHWM=Ie(i)
var a=r.autoAllocateChunkSize
if(void 0!==a&&(!1===Number.isInteger(a)||a<=0))throw new RangeError("autoAllocateChunkSize must be a positive integer")
this._autoAllocateChunkSize=a,this._pendingPullIntos=[]
var s=this,l=ke(r,"start",[this])
Promise.resolve(l).then(function(){s._started=!0,Me(!1===s._pulling),Me(!1===s._pullAgain),W(s)},function(e){"readable"===t._state&&ae(s,e)}).catch(qe)}return we(e,[{key:"close",value:function(){if(!1===q(this))throw Ae("close")
if(!0===this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!")
var e=this._controlledReadableStream._state
if("readable"!==e)throw new TypeError("The stream (in "+e+" state) is not in the readable state and cannot be closed")
ne(this)}},{key:"enqueue",value:function(e){if(!1===q(this))throw Ae("enqueue")
if(!0===this._closeRequested)throw new TypeError("stream is closed or draining")
var t=this._controlledReadableStream._state
if("readable"!==t)throw new TypeError("The stream (in "+t+" state) is not in the readable state and cannot be enqueued to")
if(!ArrayBuffer.isView(e))throw new TypeError("You can only enqueue array buffer views when using a ReadableByteStreamController")
ie(this,e)}},{key:"error",value:function(e){if(!1===q(this))throw Ae("error")
var t=this._controlledReadableStream
if("readable"!==t._state)throw new TypeError("The stream is "+t._state+" and so cannot be errored")
ae(this,e)}},{key:"__cancelSteps",value:function(e){if(this._pendingPullIntos.length>0){this._pendingPullIntos[0].bytesFilled=0}return ze(this),Te(this._underlyingByteSource,"cancel",[e])}},{key:"__pullSteps",value:function(){var e=this._controlledReadableStream
if(Me(!0===w(e)),this._queueTotalSize>0){Me(0===A(e))
var t=this._queue.shift()
this._queueTotalSize-=t.byteLength,V(this)
var r=void 0
try{r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}catch(e){return Promise.reject(e)}return Promise.resolve(Ce(r,!1))}var n=this._autoAllocateChunkSize
if(void 0!==n){var i=void 0
try{i=new ArrayBuffer(n)}catch(e){return Promise.reject(e)}var a={buffer:i,byteOffset:0,byteLength:n,bytesFilled:0,elementSize:1,ctor:Uint8Array,readerType:"default"}
this._pendingPullIntos.push(a)}var o=p(e)
return W(this),o}},{key:"byobRequest",get:function(){if(!1===q(this))throw Ae("byobRequest")
if(void 0===this._byobRequest&&this._pendingPullIntos.length>0){var e=this._pendingPullIntos[0],t=new Uint8Array(e.buffer,e.byteOffset+e.bytesFilled,e.byteLength-e.bytesFilled)
this._byobRequest=new nt(this,t)}return this._byobRequest}},{key:"desiredSize",get:function(){if(!1===q(this))throw Ae("desiredSize")
return oe(this)}}]),e}()},function(e,t,r){var n=r(6),i=r(4),a=r(2)
t.TransformStream=n.TransformStream,t.ReadableStream=i.ReadableStream,t.IsReadableStreamDisturbed=i.IsReadableStreamDisturbed,t.ReadableStreamDefaultControllerClose=i.ReadableStreamDefaultControllerClose,t.ReadableStreamDefaultControllerEnqueue=i.ReadableStreamDefaultControllerEnqueue,t.ReadableStreamDefaultControllerError=i.ReadableStreamDefaultControllerError,t.ReadableStreamDefaultControllerGetDesiredSize=i.ReadableStreamDefaultControllerGetDesiredSize,t.AcquireWritableStreamDefaultWriter=a.AcquireWritableStreamDefaultWriter,t.IsWritableStream=a.IsWritableStream,t.IsWritableStreamLocked=a.IsWritableStreamLocked,t.WritableStream=a.WritableStream,t.WritableStreamAbort=a.WritableStreamAbort,t.WritableStreamDefaultControllerError=a.WritableStreamDefaultControllerError,t.WritableStreamDefaultWriterCloseWithErrorPropagation=a.WritableStreamDefaultWriterCloseWithErrorPropagation,t.WritableStreamDefaultWriterRelease=a.WritableStreamDefaultWriterRelease,t.WritableStreamDefaultWriterWrite=a.WritableStreamDefaultWriterWrite},function(e,t,r){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){if(!0===e._errored)throw new TypeError("TransformStream is already errored")
if(!0===e._readableClosed)throw new TypeError("Readable side is already closed")
s(e)}function a(e,t){if(!0===e._errored)throw new TypeError("TransformStream is already errored")
if(!0===e._readableClosed)throw new TypeError("Readable side is already closed")
var r=e._readableController
try{T(r,t)}catch(t){throw e._readableClosed=!0,l(e,t),e._storedError}!0==O(r)<=0&&!1===e._backpressure&&h(e,!0)}function o(e,t){if(!0===e._errored)throw new TypeError("TransformStream is already errored")
u(e,t)}function s(e){y(!1===e._errored),y(!1===e._readableClosed)
try{k(e._readableController)}catch(e){y(!1)}e._readableClosed=!0}function l(e,t){!1===e._errored&&u(e,t)}function u(e,t){y(!1===e._errored),e._errored=!0,e._storedError=t,!1===e._writableDone&&j(e._writableController,t),!1===e._readableClosed&&E(e._readableController,t)}function c(e){return y(void 0!==e._backpressureChangePromise,"_backpressureChangePromise should have been initialized"),!1===e._backpressure?Promise.resolve():(y(!0===e._backpressure,"_backpressure should have been initialized"),e._backpressureChangePromise)}function h(e,t){y(e._backpressure!==t,"TransformStreamSetBackpressure() should be called only when backpressure is changed"),void 0!==e._backpressureChangePromise&&e._backpressureChangePromise_resolve(t),e._backpressureChangePromise=new Promise(function(t){e._backpressureChangePromise_resolve=t}),e._backpressureChangePromise.then(function(e){y(e!==t,"_backpressureChangePromise should be fulfilled only when backpressure is changed")}),e._backpressure=t}function d(e,t){return a(t._controlledTransformStream,e),Promise.resolve()}function f(e,t){y(!1===e._errored),y(!1===e._transforming),y(!1===e._backpressure),e._transforming=!0
var r=e._transformer,n=e._transformStreamController
return w(r,"transform",[t,n],d,[t,n]).then(function(){return e._transforming=!1,c(e)},function(t){return l(e,t),Promise.reject(t)})}function p(e){return!!R(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")}function m(e){return!!R(e)&&!!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")}function g(e){return new TypeError("TransformStreamDefaultController.prototype."+e+" can only be used on a TransformStreamDefaultController")}function v(e){return new TypeError("TransformStream.prototype."+e+" can only be used on a TransformStream")}var b=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_=r(1),y=_.assert,A=r(0),S=A.InvokeOrNoop,w=A.PromiseInvokeOrPerformFallback,P=A.PromiseInvokeOrNoop,R=A.typeIsObject,C=r(4),x=C.ReadableStream,k=C.ReadableStreamDefaultControllerClose,T=C.ReadableStreamDefaultControllerEnqueue,E=C.ReadableStreamDefaultControllerError,O=C.ReadableStreamDefaultControllerGetDesiredSize,I=r(2),L=I.WritableStream,j=I.WritableStreamDefaultControllerError,D=function(){function e(t,r){n(this,e),this._transformStream=t,this._startPromise=r}return b(e,[{key:"start",value:function(e){var t=this._transformStream
return t._writableController=e,this._startPromise.then(function(){return c(t)})}},{key:"write",value:function(e){return f(this._transformStream,e)}},{key:"abort",value:function(){var e=this._transformStream
e._writableDone=!0,u(e,new TypeError("Writable side aborted"))}},{key:"close",value:function(){var e=this._transformStream
return y(!1===e._transforming),e._writableDone=!0,P(e._transformer,"flush",[e._transformStreamController]).then(function(){return!0===e._errored?Promise.reject(e._storedError):(!1===e._readableClosed&&s(e),Promise.resolve())}).catch(function(t){return l(e,t),Promise.reject(e._storedError)})}}]),e}(),F=function(){function e(t,r){n(this,e),this._transformStream=t,this._startPromise=r}return b(e,[{key:"start",value:function(e){var t=this._transformStream
return t._readableController=e,this._startPromise.then(function(){return y(void 0!==t._backpressureChangePromise,"_backpressureChangePromise should have been initialized"),!0===t._backpressure?Promise.resolve():(y(!1===t._backpressure,"_backpressure should have been initialized"),t._backpressureChangePromise)})}},{key:"pull",value:function(){var e=this._transformStream
return y(!0===e._backpressure,"pull() should be never called while _backpressure is false"),y(void 0!==e._backpressureChangePromise,"_backpressureChangePromise should have been initialized"),h(e,!1),e._backpressureChangePromise}},{key:"cancel",value:function(){var e=this._transformStream
e._readableClosed=!0,u(e,new TypeError("Readable side canceled"))}}]),e}(),N=function(){function e(t){if(n(this,e),!1===m(t))throw new TypeError("TransformStreamDefaultController can only be constructed with a TransformStream instance")
if(void 0!==t._transformStreamController)throw new TypeError("TransformStreamDefaultController instances can only be created by the TransformStream constructor")
this._controlledTransformStream=t}return b(e,[{key:"enqueue",value:function(e){if(!1===p(this))throw g("enqueue")
a(this._controlledTransformStream,e)}},{key:"close",value:function(){if(!1===p(this))throw g("close")
i(this._controlledTransformStream)}},{key:"error",value:function(e){if(!1===p(this))throw g("error")
o(this._controlledTransformStream,e)}},{key:"desiredSize",get:function(){if(!1===p(this))throw g("desiredSize")
var e=this._controlledTransformStream,t=e._readableController
return O(t)}}]),e}(),M=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
n(this,e),this._transformer=t
var r=t.readableStrategy,i=t.writableStrategy
this._transforming=!1,this._errored=!1,this._storedError=void 0,this._writableController=void 0,this._readableController=void 0,this._transformStreamController=void 0,this._writableDone=!1,this._readableClosed=!1,this._backpressure=void 0,this._backpressureChangePromise=void 0,this._backpressureChangePromise_resolve=void 0,this._transformStreamController=new N(this)
var a=void 0,o=new Promise(function(e){a=e}),s=new F(this,o)
this._readable=new x(s,r)
var l=new D(this,o)
this._writable=new L(l,i),y(void 0!==this._writableController),y(void 0!==this._readableController),h(this,O(this._readableController)<=0)
var u=this,c=S(t,"start",[u._transformStreamController])
a(c),o.catch(function(e){!1===u._errored&&(u._errored=!0,u._storedError=e)})}return b(e,[{key:"readable",get:function(){if(!1===m(this))throw v("readable")
return this._readable}},{key:"writable",get:function(){if(!1===m(this))throw v("writable")
return this._writable}}]),e}()
e.exports={TransformStream:M}},function(e,t,r){e.exports=r(5)}]))},function(e,t,r){"use strict"
r(81),e.exports=r(16).Uint8ClampedArray},function(e,t,r){"use strict"
var n=r(1)("unscopables"),i=Array.prototype
void 0==i[n]&&r(4)(i,n,{}),e.exports=function(e){i[n][e]=!0}},function(e,t,r){"use strict"
var n=r(12),i=r(19),a=r(6)
e.exports=[].copyWithin||function(e,t){var r=n(this),o=a(r.length),s=i(e,o),l=i(t,o),u=arguments.length>2?arguments[2]:void 0,c=Math.min((void 0===u?o:i(u,o))-l,o-s),h=1
for(l<s&&s<l+c&&(h=-1,l+=c-1,s+=c-1);c-- >0;)l in r?r[s]=r[l]:delete r[s],s+=h,l+=h
return r}},function(e,t,r){"use strict"
var n=r(22),i=r(42),a=r(12),o=r(6),s=r(63)
e.exports=function(e,t){var r=1==e,l=2==e,u=3==e,c=4==e,h=6==e,d=5==e||h,f=t||s
return function(t,s,p){for(var m,g,v=a(t),b=i(v),_=n(s,p,3),y=o(b.length),A=0,S=r?f(t,y):l?f(t,0):void 0;y>A;A++)if((d||A in b)&&(m=b[A],g=_(m,A,v),e))if(r)S[A]=g
else if(g)switch(e){case 3:return!0
case 5:return m
case 6:return A
case 2:S.push(m)}else if(c)return!1
return h?-1:u||c?c:S}}},function(e,t,r){"use strict"
var n=r(9),i=r(66),a=r(1)("species")
e.exports=function(e){var t
return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),n(t)&&null===(t=t[a])&&(t=void 0)),void 0===t?Array:t}},function(e,t,r){"use strict"
var n=r(62)
e.exports=function(e,t){return new(n(e))(t)}},function(e,t,r){"use strict"
var n=r(2).document
e.exports=n&&n.documentElement},function(e,t,r){"use strict"
var n=r(10),i=r(1)("iterator"),a=Array.prototype
e.exports=function(e){return void 0!==e&&(n.Array===e||a[i]===e)}},function(e,t,r){"use strict"
var n=r(21)
e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){"use strict"
var n=r(43),i=r(18),a=r(26),o={}
r(4)(o,r(1)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n(o,{next:i(1,r)}),a(e,t+" Iterator")}},function(e,t,r){"use strict"
var n=r(24),i=r(40),a=r(25),o=r(4),s=r(5),l=r(10),u=r(67),c=r(26),h=r(45),d=r(1)("iterator"),f=!([].keys&&"next"in[].keys()),p=function(){return this}
e.exports=function(e,t,r,m,g,v,b){u(r,t,m)
var _,y,A,S=function(e){if(!f&&e in C)return C[e]
switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},w=t+" Iterator",P="values"==g,R=!1,C=e.prototype,x=C[d]||C["@@iterator"]||g&&C[g],k=x||S(g),T=g?P?S("entries"):k:void 0,E="Array"==t?C.entries||x:x
if(E&&(A=h(E.call(new e)))!==Object.prototype&&A.next&&(c(A,w,!0),n||s(A,d)||o(A,d,p)),P&&x&&"values"!==x.name&&(R=!0,k=function(){return x.call(this)}),n&&!b||!f&&!R&&C[d]||o(C,d,k),l[t]=k,l[w]=p,g)if(_={values:P?k:S("values"),keys:v?k:S("keys"),entries:T},b)for(y in _)y in C||a(C,y,_[y])
else i(i.P+i.F*(f||R),t,_)
return _}},function(e,t,r){"use strict"
var n=r(1)("iterator"),i=!1
try{var a=[7][n]()
a.return=function(){i=!0},Array.from(a,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1
var r=!1
try{var a=[7],o=a[n]()
o.next=function(){return{done:r=!0}},a[n]=function(){return o},e(a)}catch(e){}return r}},function(e,t,r){"use strict"
e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,r){"use strict"
var n=r(8),i=r(15),a=r(73)
e.exports=r(3)?Object.defineProperties:function(e,t){i(e)
for(var r,o=a(t),s=o.length,l=0;s>l;)n.f(e,r=o[l++],t[r])
return e}},function(e,t,r){"use strict"
var n=r(74),i=r(18),a=r(20),o=r(28),s=r(5),l=r(41),u=Object.getOwnPropertyDescriptor
t.f=r(3)?u:function(e,t){if(e=a(e),t=o(t,!0),l)try{return u(e,t)}catch(e){}if(s(e,t))return i(!n.f.call(e,t),e[t])}},function(e,t,r){"use strict"
var n=r(46),i=r(23)
e.exports=Object.keys||function(e){return n(e,i)}},function(e,t,r){"use strict"
t.f={}.propertyIsEnumerable},function(e,t,r){"use strict"
var n=r(2),i=r(8),a=r(3),o=r(1)("species")
e.exports=function(e){var t=n[e]
a&&t&&!t[o]&&i.f(t,o,{configurable:!0,get:function(){return this}})}},function(e,t,r){"use strict"
var n=r(15),i=r(33),a=r(1)("species")
e.exports=function(e,t){var r,o=n(e).constructor
return void 0===o||void 0==(r=n(o)[a])?t:i(r)}},function(e,t,r){"use strict"
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
if(r(3)){var i=r(24),a=r(2),o=r(17),s=r(40),l=r(50),u=r(78),c=r(22),h=r(34),d=r(18),f=r(4),p=r(47),m=r(11),g=r(6),v=r(49),b=r(19),_=r(28),y=r(5),A=r(37),S=r(9),w=r(12),P=r(65),R=r(43),C=r(45),x=r(44).f,k=r(79),T=r(13),E=r(1),O=r(61),I=r(36),L=r(76),j=r(80),D=r(10),F=r(69),N=r(75),M=r(35),q=r(60),U=r(8),W=r(72),B=U.f,z=W.f,G=a.RangeError,H=a.TypeError,X=a.Uint8Array,Y=Array.prototype,V=u.ArrayBuffer,J=u.DataView,Q=O(0),K=O(2),Z=O(3),$=O(4),ee=O(5),te=O(6),re=I(!0),ne=I(!1),ie=j.values,ae=j.keys,oe=j.entries,se=Y.lastIndexOf,le=Y.reduce,ue=Y.reduceRight,ce=Y.join,he=Y.sort,de=Y.slice,fe=Y.toString,pe=Y.toLocaleString,me=E("iterator"),ge=E("toStringTag"),ve=T("typed_constructor"),be=T("def_constructor"),_e=l.CONSTR,ye=l.TYPED,Ae=l.VIEW,Se=O(1,function(e,t){return xe(L(e,e[be]),t)}),we=o(function(){return 1===new X(new Uint16Array([1]).buffer)[0]}),Pe=!!X&&!!X.prototype.set&&o(function(){new X(1).set({})}),Re=function(e,t){var r=m(e)
if(r<0||r%t)throw G("Wrong offset!")
return r},Ce=function(e){if(S(e)&&ye in e)return e
throw H(e+" is not a typed array!")},xe=function(e,t){if(!(S(e)&&ve in e))throw H("It is not a typed array constructor!")
return new e(t)},ke=function(e,t){return Te(L(e,e[be]),t)},Te=function(e,t){for(var r=0,n=t.length,i=xe(e,n);n>r;)i[r]=t[r++]
return i},Ee=function(e,t,r){B(e,t,{get:function(){return this._d[r]}})},Oe=function(e){var t,r,n,i,a,o,s=w(e),l=arguments.length,u=l>1?arguments[1]:void 0,h=void 0!==u,d=k(s)
if(void 0!=d&&!P(d)){for(o=d.call(s),n=[],t=0;!(a=o.next()).done;t++)n.push(a.value)
s=n}for(h&&l>2&&(u=c(u,arguments[2],2)),t=0,r=g(s.length),i=xe(this,r);r>t;t++)i[t]=h?u(s[t],t):s[t]
return i},Ie=function(){for(var e=0,t=arguments.length,r=xe(this,t);t>e;)r[e]=arguments[e++]
return r},Le=!!X&&o(function(){pe.call(new X(1))}),je=function(){return pe.apply(Le?de.call(Ce(this)):Ce(this),arguments)},De={copyWithin:function(e,t){return q.call(Ce(this),e,t,arguments.length>2?arguments[2]:void 0)},every:function(e){return $(Ce(this),e,arguments.length>1?arguments[1]:void 0)},fill:function(e){return M.apply(Ce(this),arguments)},filter:function(e){return ke(this,K(Ce(this),e,arguments.length>1?arguments[1]:void 0))},find:function(e){return ee(Ce(this),e,arguments.length>1?arguments[1]:void 0)},findIndex:function(e){return te(Ce(this),e,arguments.length>1?arguments[1]:void 0)},forEach:function(e){Q(Ce(this),e,arguments.length>1?arguments[1]:void 0)},indexOf:function(e){return ne(Ce(this),e,arguments.length>1?arguments[1]:void 0)},includes:function(e){return re(Ce(this),e,arguments.length>1?arguments[1]:void 0)},join:function(e){return ce.apply(Ce(this),arguments)},lastIndexOf:function(e){return se.apply(Ce(this),arguments)},map:function(e){return Se(Ce(this),e,arguments.length>1?arguments[1]:void 0)},reduce:function(e){return le.apply(Ce(this),arguments)},reduceRight:function(e){return ue.apply(Ce(this),arguments)},reverse:function(){for(var e,t=this,r=Ce(t).length,n=Math.floor(r/2),i=0;i<n;)e=t[i],t[i++]=t[--r],t[r]=e
return t},some:function(e){return Z(Ce(this),e,arguments.length>1?arguments[1]:void 0)},sort:function(e){return he.call(Ce(this),e)},subarray:function(e,t){var r=Ce(this),n=r.length,i=b(e,n)
return new(L(r,r[be]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,g((void 0===t?n:b(t,n))-i))}},Fe=function(e,t){return ke(this,de.call(Ce(this),e,t))},Ne=function(e){Ce(this)
var t=Re(arguments[1],1),r=this.length,n=w(e),i=g(n.length),a=0
if(i+t>r)throw G("Wrong length!")
for(;a<i;)this[t+a]=n[a++]},Me={entries:function(){return oe.call(Ce(this))},keys:function(){return ae.call(Ce(this))},values:function(){return ie.call(Ce(this))}},qe=function(e,t){return S(e)&&e[ye]&&"symbol"!=(void 0===t?"undefined":n(t))&&t in e&&String(+t)==String(t)},Ue=function(e,t){return qe(e,t=_(t,!0))?d(2,e[t]):z(e,t)},We=function(e,t,r){return!(qe(e,t=_(t,!0))&&S(r)&&y(r,"value"))||y(r,"get")||y(r,"set")||r.configurable||y(r,"writable")&&!r.writable||y(r,"enumerable")&&!r.enumerable?B(e,t,r):(e[t]=r.value,e)}
_e||(W.f=Ue,U.f=We),s(s.S+s.F*!_e,"Object",{getOwnPropertyDescriptor:Ue,defineProperty:We}),o(function(){fe.call({})})&&(fe=pe=function(){return ce.call(this)})
var Be=p({},De)
p(Be,Me),f(Be,me,Me.values),p(Be,{slice:Fe,set:Ne,constructor:function(){},toString:fe,toLocaleString:je}),Ee(Be,"buffer","b"),Ee(Be,"byteOffset","o"),Ee(Be,"byteLength","l"),Ee(Be,"length","e"),B(Be,ge,{get:function(){return this[ye]}}),e.exports=function(e,t,r,n){n=!!n
var u=e+(n?"Clamped":"")+"Array",c="get"+e,d="set"+e,p=a[u],m=p||{},b=p&&C(p),_=!p||!l.ABV,y={},w=p&&p.prototype,P=function(e,r){var n=e._d
return n.v[c](r*t+n.o,we)},k=function(e,r,i){var a=e._d
n&&(i=(i=Math.round(i))<0?0:i>255?255:255&i),a.v[d](r*t+a.o,i,we)},T=function(e,t){B(e,t,{get:function(){return P(this,t)},set:function(e){return k(this,t,e)},enumerable:!0})}
_?(p=r(function(e,r,n,i){h(e,p,u,"_d")
var a,o,s,l,c=0,d=0
if(S(r)){if(!(r instanceof V||"ArrayBuffer"==(l=A(r))||"SharedArrayBuffer"==l))return ye in r?Te(p,r):Oe.call(p,r)
a=r,d=Re(n,t)
var m=r.byteLength
if(void 0===i){if(m%t)throw G("Wrong length!")
if((o=m-d)<0)throw G("Wrong length!")}else if((o=g(i)*t)+d>m)throw G("Wrong length!")
s=o/t}else s=v(r),o=s*t,a=new V(o)
for(f(e,"_d",{b:a,o:d,l:o,e:s,v:new J(a)});c<s;)T(e,c++)}),w=p.prototype=R(Be),f(w,"constructor",p)):o(function(){p(1)})&&o(function(){new p(-1)})&&F(function(e){new p,new p(null),new p(1.5),new p(e)},!0)||(p=r(function(e,r,n,i){h(e,p,u)
var a
return S(r)?r instanceof V||"ArrayBuffer"==(a=A(r))||"SharedArrayBuffer"==a?void 0!==i?new m(r,Re(n,t),i):void 0!==n?new m(r,Re(n,t)):new m(r):ye in r?Te(p,r):Oe.call(p,r):new m(v(r))}),Q(b!==Function.prototype?x(m).concat(x(b)):x(m),function(e){e in p||f(p,e,m[e])}),p.prototype=w,i||(w.constructor=p))
var E=w[me],O=!!E&&("values"==E.name||void 0==E.name),I=Me.values
f(p,ve,!0),f(w,ye,u),f(w,Ae,!0),f(w,be,p),(n?new p(1)[ge]==u:ge in w)||B(w,ge,{get:function(){return u}}),y[u]=p,s(s.G+s.W+s.F*(p!=m),y),s(s.S,u,{BYTES_PER_ELEMENT:t}),s(s.S+s.F*o(function(){m.of.call(p,1)}),u,{from:Oe,of:Ie}),"BYTES_PER_ELEMENT"in w||f(w,"BYTES_PER_ELEMENT",t),s(s.P,u,De),N(u),s(s.P+s.F*Pe,u,{set:Ne}),s(s.P+s.F*!O,u,Me),i||w.toString==fe||(w.toString=fe),s(s.P+s.F*o(function(){new p(1).slice()}),u,{slice:Fe}),s(s.P+s.F*(o(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!o(function(){w.toLocaleString.call([1,2])})),u,{toLocaleString:je}),D[u]=O?E:I,i||O||f(w,me,I)}}else e.exports=function(){}},function(e,t,r){"use strict"
function n(e,t,r){var n,i,a,o=Array(r),s=8*r-t-1,l=(1<<s)-1,u=l>>1,c=23===t?M(2,-24)-M(2,-77):0,h=0,d=e<0||0===e&&1/e<0?1:0
for(e=N(e),e!=e||e===D?(i=e!=e?1:0,n=l):(n=q(U(e)/W),e*(a=M(2,-n))<1&&(n--,a*=2),e+=n+u>=1?c/a:c*M(2,1-u),e*a>=2&&(n++,a/=2),n+u>=l?(i=0,n=l):n+u>=1?(i=(e*a-1)*M(2,t),n+=u):(i=e*M(2,u-1)*M(2,t),n=0));t>=8;o[h++]=255&i,i/=256,t-=8);for(n=n<<t|i,s+=t;s>0;o[h++]=255&n,n/=256,s-=8);return o[--h]|=128*d,o}function i(e,t,r){var n,i=8*r-t-1,a=(1<<i)-1,o=a>>1,s=i-7,l=r-1,u=e[l--],c=127&u
for(u>>=7;s>0;c=256*c+e[l],l--,s-=8);for(n=c&(1<<-s)-1,c>>=-s,s+=t;s>0;n=256*n+e[l],l--,s-=8);if(0===c)c=1-o
else{if(c===a)return n?NaN:u?-D:D
n+=M(2,t),c-=o}return(u?-1:1)*n*M(2,c-t)}function a(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function o(e){return[255&e]}function s(e){return[255&e,e>>8&255]}function l(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]}function u(e){return n(e,52,8)}function c(e){return n(e,23,4)}function h(e,t,r){C(e[T],t,{get:function(){return this[r]}})}function d(e,t,r,n){var i=+r,a=P(i)
if(a+t>e[z])throw j(E)
var o=e[B]._b,s=a+e[G],l=o.slice(s,s+t)
return n?l:l.reverse()}function f(e,t,r,n,i,a){var o=+r,s=P(o)
if(s+t>e[z])throw j(E)
for(var l=e[B]._b,u=s+e[G],c=n(+i),h=0;h<t;h++)l[u+h]=c[a?h:t-h-1]}var p=r(2),m=r(3),g=r(24),v=r(50),b=r(4),_=r(47),y=r(17),A=r(34),S=r(11),w=r(6),P=r(49),R=r(44).f,C=r(8).f,x=r(35),k=r(26),T="prototype",E="Wrong index!",O=p.ArrayBuffer,I=p.DataView,L=p.Math,j=p.RangeError,D=p.Infinity,F=O,N=L.abs,M=L.pow,q=L.floor,U=L.log,W=L.LN2,B=m?"_b":"buffer",z=m?"_l":"byteLength",G=m?"_o":"byteOffset"
if(v.ABV){if(!y(function(){O(1)})||!y(function(){new O(-1)})||y(function(){return new O,new O(1.5),new O(NaN),"ArrayBuffer"!=O.name})){O=function(e){return A(this,O),new F(P(e))}
for(var H,X=O[T]=F[T],Y=R(F),V=0;Y.length>V;)(H=Y[V++])in O||b(O,H,F[H])
g||(X.constructor=O)}var J=new I(new O(2)),Q=I[T].setInt8
J.setInt8(0,2147483648),J.setInt8(1,2147483649),!J.getInt8(0)&&J.getInt8(1)||_(I[T],{setInt8:function(e,t){Q.call(this,e,t<<24>>24)},setUint8:function(e,t){Q.call(this,e,t<<24>>24)}},!0)}else O=function(e){A(this,O,"ArrayBuffer")
var t=P(e)
this._b=x.call(Array(t),0),this[z]=t},I=function(e,t,r){A(this,I,"DataView"),A(e,O,"DataView")
var n=e[z],i=S(t)
if(i<0||i>n)throw j("Wrong offset!")
if(r=void 0===r?n-i:w(r),i+r>n)throw j("Wrong length!")
this[B]=e,this[G]=i,this[z]=r},m&&(h(O,"byteLength","_l"),h(I,"buffer","_b"),h(I,"byteLength","_l"),h(I,"byteOffset","_o")),_(I[T],{getInt8:function(e){return d(this,1,e)[0]<<24>>24},getUint8:function(e){return d(this,1,e)[0]},getInt16:function(e){var t=d(this,2,e,arguments[1])
return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=d(this,2,e,arguments[1])
return t[1]<<8|t[0]},getInt32:function(e){return a(d(this,4,e,arguments[1]))},getUint32:function(e){return a(d(this,4,e,arguments[1]))>>>0},getFloat32:function(e){return i(d(this,4,e,arguments[1]),23,4)},getFloat64:function(e){return i(d(this,8,e,arguments[1]),52,8)},setInt8:function(e,t){f(this,1,e,o,t)},setUint8:function(e,t){f(this,1,e,o,t)},setInt16:function(e,t){f(this,2,e,s,t,arguments[2])},setUint16:function(e,t){f(this,2,e,s,t,arguments[2])},setInt32:function(e,t){f(this,4,e,l,t,arguments[2])},setUint32:function(e,t){f(this,4,e,l,t,arguments[2])},setFloat32:function(e,t){f(this,4,e,c,t,arguments[2])},setFloat64:function(e,t){f(this,8,e,u,t,arguments[2])}})
k(O,"ArrayBuffer"),k(I,"DataView"),b(I[T],v.VIEW,!0),t.ArrayBuffer=O,t.DataView=I},function(e,t,r){"use strict"
var n=r(37),i=r(1)("iterator"),a=r(10)
e.exports=r(16).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||a[n(e)]}},function(e,t,r){"use strict"
var n=r(59),i=r(70),a=r(10),o=r(20)
e.exports=r(68)(Array,"Array",function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++
return!e||r>=e.length?(this._t=void 0,i(1)):"keys"==t?i(0,r):"values"==t?i(0,e[r]):i(0,[r,e[r]])},"values"),a.Arguments=a.Array,n("keys"),n("values"),n("entries")},function(e,t,r){"use strict"
r(77)("Uint8",1,function(e){return function(t,r,n){return e(this,t,r,n)}},!0)},function(e,t,r){"use strict"
function n(e){e.mozCurrentTransform||(e._originalSave=e.save,e._originalRestore=e.restore,e._originalRotate=e.rotate,e._originalScale=e.scale,e._originalTranslate=e.translate,e._originalTransform=e.transform,e._originalSetTransform=e.setTransform,e._transformMatrix=e._transformMatrix||[1,0,0,1,0,0],e._transformStack=[],Object.defineProperty(e,"mozCurrentTransform",{get:function(){return this._transformMatrix}}),Object.defineProperty(e,"mozCurrentTransformInverse",{get:function(){var e=this._transformMatrix,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],s=t*i-r*n,l=r*n-t*i
return[i/s,r/l,n/l,t/s,(i*a-n*o)/l,(r*a-t*o)/s]}}),e.save=function(){var e=this._transformMatrix
this._transformStack.push(e),this._transformMatrix=e.slice(0,6),this._originalSave()},e.restore=function(){var e=this._transformStack.pop()
e&&(this._transformMatrix=e,this._originalRestore())},e.translate=function(e,t){var r=this._transformMatrix
r[4]=r[0]*e+r[2]*t+r[4],r[5]=r[1]*e+r[3]*t+r[5],this._originalTranslate(e,t)},e.scale=function(e,t){var r=this._transformMatrix
r[0]=r[0]*e,r[1]=r[1]*e,r[2]=r[2]*t,r[3]=r[3]*t,this._originalScale(e,t)},e.transform=function(t,r,n,i,a,o){var s=this._transformMatrix
this._transformMatrix=[s[0]*t+s[2]*r,s[1]*t+s[3]*r,s[0]*n+s[2]*i,s[1]*n+s[3]*i,s[0]*a+s[2]*o+s[4],s[1]*a+s[3]*o+s[5]],e._originalTransform(t,r,n,i,a,o)},e.setTransform=function(t,r,n,i,a,o){this._transformMatrix=[t,r,n,i,a,o],e._originalSetTransform(t,r,n,i,a,o)},e.rotate=function(e){var t=Math.cos(e),r=Math.sin(e),n=this._transformMatrix
this._transformMatrix=[n[0]*t+n[2]*r,n[1]*t+n[3]*r,n[0]*-r+n[2]*t,n[1]*-r+n[3]*t,n[4],n[5]],this._originalRotate(e)})}function i(e){var t,r,n,i,a=e.width,o=e.height,s=a+1,l=new Uint8Array(s*(o+1)),u=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]),c=a+7&-8,h=e.data,d=new Uint8Array(c*o),f=0
for(t=0,i=h.length;t<i;t++)for(var p=128,m=h[t];p>0;)d[f++]=m&p?0:255,p>>=1
var g=0
for(f=0,0!==d[f]&&(l[0]=1,++g),r=1;r<a;r++)d[f]!==d[f+1]&&(l[r]=d[f]?2:1,++g),f++
for(0!==d[f]&&(l[r]=2,++g),t=1;t<o;t++){f=t*c,n=t*s,d[f-c]!==d[f]&&(l[n]=d[f]?1:8,++g)
var v=(d[f]?4:0)+(d[f-c]?8:0)
for(r=1;r<a;r++)v=(v>>2)+(d[f+1]?4:0)+(d[f-c+1]?8:0),u[v]&&(l[n+r]=u[v],++g),f++
if(d[f-c]!==d[f]&&(l[n+r]=d[f]?2:4,++g),g>1e3)return null}for(f=c*(o-1),n=t*s,0!==d[f]&&(l[n]=8,++g),r=1;r<a;r++)d[f]!==d[f+1]&&(l[n+r]=d[f]?4:8,++g),f++
if(0!==d[f]&&(l[n+r]=4,++g),g>1e3)return null
var b=new Int32Array([0,s,-1,0,-s,0,0,0,1]),_=[]
for(t=0;g&&t<=o;t++){for(var y=t*s,A=y+a;y<A&&!l[y];)y++
if(y!==A){var S,w=[y%s,t],P=l[y],R=y
do{var C=b[P]
do{y+=C}while(!l[y])
S=l[y],5!==S&&10!==S?(P=S,l[y]=0):(P=S&51*P>>4,l[y]&=P>>2|P<<2),w.push(y%s),w.push(y/s|0),--g}while(R!==y)
_.push(w),--t}}return function(e){e.save(),e.scale(1/a,-1/o),e.translate(0,-o),e.beginPath()
for(var t=0,r=_.length;t<r;t++){var n=_[t]
e.moveTo(n[0],n[1])
for(var i=2,s=n.length;i<s;i+=2)e.lineTo(n[i],n[i+1])}e.fill(),e.beginPath(),e.restore()}}Object.defineProperty(t,"__esModule",{value:!0}),t.CanvasGraphics=void 0
var a=r(0),o=r(84),s=r(53),l=16,u={get value(){return(0,a.shadow)(u,"value",(0,a.isLittleEndian)())}},c=function(){function e(e){this.canvasFactory=e,this.cache=Object.create(null)}return e.prototype={getCanvas:function(e,t,r,i){var a
return void 0!==this.cache[e]?(a=this.cache[e],this.canvasFactory.reset(a,t,r),a.context.setTransform(1,0,0,1,0,0)):(a=this.canvasFactory.create(t,r),this.cache[e]=a),i&&n(a.context),a},clear:function(){for(var e in this.cache){var t=this.cache[e]
this.canvasFactory.destroy(t),delete this.cache[e]}}},e}(),h=function(){function e(){this.alphaIsShape=!1,this.fontSize=0,this.fontSizeScale=1,this.textMatrix=a.IDENTITY_MATRIX,this.textMatrixScale=1,this.fontMatrix=a.FONT_IDENTITY_MATRIX,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRenderingMode=a.TextRenderingMode.FILL,this.textRise=0,this.fillColor="#000000",this.strokeColor="#000000",this.patternFill=!1,this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.activeSMask=null,this.resumeSMaskCtx=null}return e.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(e,t){this.x=e,this.y=t}},e}(),d=function(){function e(e,t,r,i,a){this.ctx=e,this.current=new h,this.stateStack=[],this.pendingClip=null,this.pendingEOFill=!1,this.res=null,this.xobjs=null,this.commonObjs=t,this.objs=r,this.canvasFactory=i,this.imageLayer=a,this.groupStack=[],this.processingType3=null,this.baseTransform=null,this.baseTransformStack=[],this.groupLevel=0,this.smaskStack=[],this.smaskCounter=0,this.tempSMask=null,this.cachedCanvases=new c(this.canvasFactory),e&&n(e),this.cachedGetSinglePixelWidth=null}function t(e,t){if("undefined"!=typeof ImageData&&t instanceof ImageData)return void e.putImageData(t,0,0)
var r,n,i,o,s,c=t.height,h=t.width,d=c%l,f=(c-d)/l,p=0===d?f:f+1,m=e.createImageData(h,l),g=0,v=t.data,b=m.data
if(t.kind===a.ImageKind.GRAYSCALE_1BPP){var _=v.byteLength,y=new Uint32Array(b.buffer,0,b.byteLength>>2),A=y.length,S=h+7>>3,w=4294967295,P=u.value?4278190080:255
for(n=0;n<p;n++){for(o=n<f?l:d,r=0,i=0;i<o;i++){for(var R=_-g,C=0,x=R>S?h:8*R-7,k=-8&x,T=0,E=0;C<k;C+=8)E=v[g++],y[r++]=128&E?w:P,y[r++]=64&E?w:P,y[r++]=32&E?w:P,y[r++]=16&E?w:P,y[r++]=8&E?w:P,y[r++]=4&E?w:P,y[r++]=2&E?w:P,y[r++]=1&E?w:P
for(;C<x;C++)0===T&&(E=v[g++],T=128),y[r++]=E&T?w:P,T>>=1}for(;r<A;)y[r++]=0
e.putImageData(m,0,n*l)}}else if(t.kind===a.ImageKind.RGBA_32BPP){for(i=0,s=h*l*4,n=0;n<f;n++)b.set(v.subarray(g,g+s)),g+=s,e.putImageData(m,0,i),i+=l
n<p&&(s=h*d*4,b.set(v.subarray(g,g+s)),e.putImageData(m,0,i))}else{if(t.kind!==a.ImageKind.RGB_24BPP)throw new Error("bad image kind: "+t.kind)
for(o=l,s=h*o,n=0;n<p;n++){for(n>=f&&(o=d,s=h*o),r=0,i=s;i--;)b[r++]=v[g++],b[r++]=v[g++],b[r++]=v[g++],b[r++]=255
e.putImageData(m,0,n*l)}}}function r(e,t){for(var r=t.height,n=t.width,i=r%l,a=(r-i)/l,o=0===i?a:a+1,s=e.createImageData(n,l),u=0,c=t.data,h=s.data,d=0;d<o;d++){for(var f=d<a?l:i,p=3,m=0;m<f;m++)for(var g=0,v=0;v<n;v++){if(!g){var b=c[u++]
g=128}h[p]=b&g?0:255,p+=4,g>>=1}e.putImageData(s,0,d*l)}}function d(e,t){for(var r=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font"],n=0,i=r.length;n<i;n++){var a=r[n]
void 0!==e[a]&&(t[a]=e[a])}void 0!==e.setLineDash&&(t.setLineDash(e.getLineDash()),t.lineDashOffset=e.lineDashOffset)}function f(e){e.strokeStyle="#000000",e.fillStyle="#000000",e.fillRule="nonzero",e.globalAlpha=1,e.lineWidth=1,e.lineCap="butt",e.lineJoin="miter",e.miterLimit=10,e.globalCompositeOperation="source-over",e.font="10px sans-serif",void 0!==e.setLineDash&&(e.setLineDash([]),e.lineDashOffset=0)}function p(e,t,r,n){for(var i=e.length,a=3;a<i;a+=4){var o=e[a]
if(0===o)e[a-3]=t,e[a-2]=r,e[a-1]=n
else if(o<255){var s=255-o
e[a-3]=e[a-3]*o+t*s>>8,e[a-2]=e[a-2]*o+r*s>>8,e[a-1]=e[a-1]*o+n*s>>8}}}function m(e,t,r){for(var n=e.length,i=3;i<n;i+=4){var a=r?r[e[i]]:e[i]
t[i]=t[i]*a*(1/255)|0}}function g(e,t,r){for(var n=e.length,i=3;i<n;i+=4){var a=77*e[i-3]+152*e[i-2]+28*e[i-1]
t[i]=r?t[i]*r[a>>8]>>8:t[i]*a>>16}}function v(e,t,r,n,i,a,o){var s,l=!!a,u=l?a[0]:0,c=l?a[1]:0,h=l?a[2]:0
s="Luminosity"===i?g:m
for(var d=Math.min(n,Math.ceil(1048576/r)),f=0;f<n;f+=d){var v=Math.min(d,n-f),b=e.getImageData(0,f,r,v),_=t.getImageData(0,f,r,v)
l&&p(b.data,u,c,h),s(b.data,_.data,o),e.putImageData(_,0,f)}}function b(e,t,r){var n=t.canvas,i=t.context
e.setTransform(t.scaleX,0,0,t.scaleY,t.offsetX,t.offsetY)
var a=t.backdrop||null
if(!t.transferMap&&s.WebGLUtils.isEnabled){var o=s.WebGLUtils.composeSMask(r.canvas,n,{subtype:t.subtype,backdrop:a})
return e.setTransform(1,0,0,1,0,0),void e.drawImage(o,t.offsetX,t.offsetY)}v(i,r,n.width,n.height,t.subtype,a,t.transferMap),e.drawImage(n,0,0)}var _=["butt","round","square"],y=["miter","round","bevel"],A={},S={}
e.prototype={beginDrawing:function(e){var t=e.transform,r=e.viewport,n=e.transparency,i=e.background,a=void 0===i?null:i,o=this.ctx.canvas.width,s=this.ctx.canvas.height
if(this.ctx.save(),this.ctx.fillStyle=a||"rgb(255, 255, 255)",this.ctx.fillRect(0,0,o,s),this.ctx.restore(),n){var l=this.cachedCanvases.getCanvas("transparent",o,s,!0)
this.compositeCtx=this.ctx,this.transparentCanvas=l.canvas,this.ctx=l.context,this.ctx.save(),this.ctx.transform.apply(this.ctx,this.compositeCtx.mozCurrentTransform)}this.ctx.save(),f(this.ctx),t&&this.ctx.transform.apply(this.ctx,t),this.ctx.transform.apply(this.ctx,r.transform),this.baseTransform=this.ctx.mozCurrentTransform.slice(),this.imageLayer&&this.imageLayer.beginLayout()},executeOperatorList:function(e,t,r,n){var i=e.argsArray,o=e.fnArray,s=t||0,l=i.length
if(l===s)return s
for(var u,c=l-s>10&&"function"==typeof r,h=c?Date.now()+15:0,d=0,f=this.commonObjs,p=this.objs;;){if(void 0!==n&&s===n.nextBreakPoint)return n.breakIt(s,r),s
if((u=o[s])!==a.OPS.dependency)this[u].apply(this,i[s])
else for(var m=i[s],g=0,v=m.length;g<v;g++){var b=m[g],_="g"===b[0]&&"_"===b[1],y=_?f:p
if(!y.isResolved(b))return y.get(b,r),s}if(++s===l)return s
if(c&&++d>10){if(Date.now()>h)return r(),s
d=0}}},endDrawing:function(){null!==this.current.activeSMask&&this.endSMaskGroup(),this.ctx.restore(),this.transparentCanvas&&(this.ctx=this.compositeCtx,this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.drawImage(this.transparentCanvas,0,0),this.ctx.restore(),this.transparentCanvas=null),this.cachedCanvases.clear(),s.WebGLUtils.clear(),this.imageLayer&&this.imageLayer.endLayout()},setLineWidth:function(e){this.current.lineWidth=e,this.ctx.lineWidth=e},setLineCap:function(e){this.ctx.lineCap=_[e]},setLineJoin:function(e){this.ctx.lineJoin=y[e]},setMiterLimit:function(e){this.ctx.miterLimit=e},setDash:function(e,t){var r=this.ctx
void 0!==r.setLineDash&&(r.setLineDash(e),r.lineDashOffset=t)},setRenderingIntent:function(e){},setFlatness:function(e){},setGState:function(e){for(var t=0,r=e.length;t<r;t++){var n=e[t],i=n[0],a=n[1]
switch(i){case"LW":this.setLineWidth(a)
break
case"LC":this.setLineCap(a)
break
case"LJ":this.setLineJoin(a)
break
case"ML":this.setMiterLimit(a)
break
case"D":this.setDash(a[0],a[1])
break
case"RI":this.setRenderingIntent(a)
break
case"FL":this.setFlatness(a)
break
case"Font":this.setFont(a[0],a[1])
break
case"CA":this.current.strokeAlpha=n[1]
break
case"ca":this.current.fillAlpha=n[1],this.ctx.globalAlpha=n[1]
break
case"BM":this.ctx.globalCompositeOperation=a
break
case"SMask":this.current.activeSMask&&(this.stateStack.length>0&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask?this.suspendSMaskGroup():this.endSMaskGroup()),this.current.activeSMask=a?this.tempSMask:null,this.current.activeSMask&&this.beginSMaskGroup(),this.tempSMask=null}}},beginSMaskGroup:function(){var e=this.current.activeSMask,t=e.canvas.width,r=e.canvas.height,n="smaskGroupAt"+this.groupLevel,i=this.cachedCanvases.getCanvas(n,t,r,!0),a=this.ctx,o=a.mozCurrentTransform
this.ctx.save()
var s=i.context
s.scale(1/e.scaleX,1/e.scaleY),s.translate(-e.offsetX,-e.offsetY),s.transform.apply(s,o),e.startTransformInverse=s.mozCurrentTransformInverse,d(a,s),this.ctx=s,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(a),this.groupLevel++},suspendSMaskGroup:function(){var e=this.ctx
this.groupLevel--,this.ctx=this.groupStack.pop(),b(this.ctx,this.current.activeSMask,e),this.ctx.restore(),this.ctx.save(),d(e,this.ctx),this.current.resumeSMaskCtx=e
var t=a.Util.transform(this.current.activeSMask.startTransformInverse,e.mozCurrentTransform)
this.ctx.transform.apply(this.ctx,t),e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,e.canvas.width,e.canvas.height),e.restore()},resumeSMaskGroup:function(){var e=this.current.resumeSMaskCtx,t=this.ctx
this.ctx=e,this.groupStack.push(t),this.groupLevel++},endSMaskGroup:function(){var e=this.ctx
this.groupLevel--,this.ctx=this.groupStack.pop(),b(this.ctx,this.current.activeSMask,e),this.ctx.restore(),d(e,this.ctx)
var t=a.Util.transform(this.current.activeSMask.startTransformInverse,e.mozCurrentTransform)
this.ctx.transform.apply(this.ctx,t)},save:function(){this.ctx.save()
var e=this.current
this.stateStack.push(e),this.current=e.clone(),this.current.resumeSMaskCtx=null},restore:function(){this.current.resumeSMaskCtx&&this.resumeSMaskGroup(),null===this.current.activeSMask||0!==this.stateStack.length&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask||this.endSMaskGroup(),0!==this.stateStack.length&&(this.current=this.stateStack.pop(),this.ctx.restore(),this.pendingClip=null,this.cachedGetSinglePixelWidth=null)},transform:function(e,t,r,n,i,a){this.ctx.transform(e,t,r,n,i,a),this.cachedGetSinglePixelWidth=null},constructPath:function(e,t){for(var r=this.ctx,n=this.current,i=n.x,o=n.y,s=0,l=0,u=e.length;s<u;s++)switch(0|e[s]){case a.OPS.rectangle:i=t[l++],o=t[l++]
var c=t[l++],h=t[l++]
0===c&&(c=this.getSinglePixelWidth()),0===h&&(h=this.getSinglePixelWidth())
var d=i+c,f=o+h
this.ctx.moveTo(i,o),this.ctx.lineTo(d,o),this.ctx.lineTo(d,f),this.ctx.lineTo(i,f),this.ctx.lineTo(i,o),this.ctx.closePath()
break
case a.OPS.moveTo:i=t[l++],o=t[l++],r.moveTo(i,o)
break
case a.OPS.lineTo:i=t[l++],o=t[l++],r.lineTo(i,o)
break
case a.OPS.curveTo:i=t[l+4],o=t[l+5],r.bezierCurveTo(t[l],t[l+1],t[l+2],t[l+3],i,o),l+=6
break
case a.OPS.curveTo2:r.bezierCurveTo(i,o,t[l],t[l+1],t[l+2],t[l+3]),i=t[l+2],o=t[l+3],l+=4
break
case a.OPS.curveTo3:i=t[l+2],o=t[l+3],r.bezierCurveTo(t[l],t[l+1],i,o,i,o),l+=4
break
case a.OPS.closePath:r.closePath()}n.setCurrentPoint(i,o)},closePath:function(){this.ctx.closePath()},stroke:function(e){e=void 0===e||e
var t=this.ctx,r=this.current.strokeColor
t.lineWidth=Math.max(.65*this.getSinglePixelWidth(),this.current.lineWidth),t.globalAlpha=this.current.strokeAlpha,r&&r.hasOwnProperty("type")&&"Pattern"===r.type?(t.save(),t.strokeStyle=r.getPattern(t,this),t.stroke(),t.restore()):t.stroke(),e&&this.consumePath(),t.globalAlpha=this.current.fillAlpha},closeStroke:function(){this.closePath(),this.stroke()},fill:function(e){e=void 0===e||e
var t=this.ctx,r=this.current.fillColor,n=this.current.patternFill,i=!1
n&&(t.save(),this.baseTransform&&t.setTransform.apply(t,this.baseTransform),t.fillStyle=r.getPattern(t,this),i=!0),this.pendingEOFill?(t.fill("evenodd"),this.pendingEOFill=!1):t.fill(),i&&t.restore(),e&&this.consumePath()},eoFill:function(){this.pendingEOFill=!0,this.fill()},fillStroke:function(){this.fill(!1),this.stroke(!1),this.consumePath()},eoFillStroke:function(){this.pendingEOFill=!0,this.fillStroke()},closeFillStroke:function(){this.closePath(),this.fillStroke()},closeEOFillStroke:function(){this.pendingEOFill=!0,this.closePath(),this.fillStroke()},endPath:function(){this.consumePath()},clip:function(){this.pendingClip=A},eoClip:function(){this.pendingClip=S},beginText:function(){this.current.textMatrix=a.IDENTITY_MATRIX,this.current.textMatrixScale=1,this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},endText:function(){var e=this.pendingTextPaths,t=this.ctx
if(void 0===e)return void t.beginPath()
t.save(),t.beginPath()
for(var r=0;r<e.length;r++){var n=e[r]
t.setTransform.apply(t,n.transform),t.translate(n.x,n.y),n.addToPath(t,n.fontSize)}t.restore(),t.clip(),t.beginPath(),delete this.pendingTextPaths},setCharSpacing:function(e){this.current.charSpacing=e},setWordSpacing:function(e){this.current.wordSpacing=e},setHScale:function(e){this.current.textHScale=e/100},setLeading:function(e){this.current.leading=-e},setFont:function(e,t){var r=this.commonObjs.get(e),n=this.current
if(!r)throw new Error("Can't find font for "+e)
if(n.fontMatrix=r.fontMatrix?r.fontMatrix:a.FONT_IDENTITY_MATRIX,0!==n.fontMatrix[0]&&0!==n.fontMatrix[3]||(0,a.warn)("Invalid font matrix for font "+e),t<0?(t=-t,n.fontDirection=-1):n.fontDirection=1,this.current.font=r,this.current.fontSize=t,!r.isType3Font){var i=r.loadedName||"sans-serif",o=r.black?"900":r.bold?"bold":"normal",s=r.italic?"italic":"normal",l='"'+i+'", '+r.fallbackName,u=t<16?16:t>100?100:t
this.current.fontSizeScale=t/u
var c=s+" "+o+" "+u+"px "+l
this.ctx.font=c}},setTextRenderingMode:function(e){this.current.textRenderingMode=e},setTextRise:function(e){this.current.textRise=e},moveText:function(e,t){this.current.x=this.current.lineX+=e,this.current.y=this.current.lineY+=t},setLeadingMoveText:function(e,t){this.setLeading(-t),this.moveText(e,t)},setTextMatrix:function(e,t,r,n,i,a){this.current.textMatrix=[e,t,r,n,i,a],this.current.textMatrixScale=Math.sqrt(e*e+t*t),this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},nextLine:function(){this.moveText(0,this.current.leading)},paintChar:function(e,t,r){var n,i=this.ctx,o=this.current,s=o.font,l=o.textRenderingMode,u=o.fontSize/o.fontSizeScale,c=l&a.TextRenderingMode.FILL_STROKE_MASK,h=!!(l&a.TextRenderingMode.ADD_TO_PATH_FLAG)
if((s.disableFontFace||h)&&(n=s.getPathGenerator(this.commonObjs,e)),s.disableFontFace?(i.save(),i.translate(t,r),i.beginPath(),n(i,u),c!==a.TextRenderingMode.FILL&&c!==a.TextRenderingMode.FILL_STROKE||i.fill(),c!==a.TextRenderingMode.STROKE&&c!==a.TextRenderingMode.FILL_STROKE||i.stroke(),i.restore()):(c!==a.TextRenderingMode.FILL&&c!==a.TextRenderingMode.FILL_STROKE||i.fillText(e,t,r),c!==a.TextRenderingMode.STROKE&&c!==a.TextRenderingMode.FILL_STROKE||i.strokeText(e,t,r)),h){(this.pendingTextPaths||(this.pendingTextPaths=[])).push({transform:i.mozCurrentTransform,x:t,y:r,fontSize:u,addToPath:n})}},get isFontSubpixelAAEnabled(){var e=this.canvasFactory.create(10,10).context
e.scale(1.5,1),e.fillText("I",0,10)
for(var t=e.getImageData(0,0,10,10).data,r=!1,n=3;n<t.length;n+=4)if(t[n]>0&&t[n]<255){r=!0
break}return(0,a.shadow)(this,"isFontSubpixelAAEnabled",r)},showText:function(e){var t=this.current,r=t.font
if(r.isType3Font)return this.showType3Text(e)
var n=t.fontSize
if(0!==n){var i=this.ctx,o=t.fontSizeScale,s=t.charSpacing,l=t.wordSpacing,u=t.fontDirection,c=t.textHScale*u,h=e.length,d=r.vertical,f=d?1:-1,p=r.defaultVMetrics,m=n*t.fontMatrix[0],g=t.textRenderingMode===a.TextRenderingMode.FILL&&!r.disableFontFace
i.save(),i.transform.apply(i,t.textMatrix),i.translate(t.x,t.y+t.textRise),t.patternFill&&(i.fillStyle=t.fillColor.getPattern(i,this)),u>0?i.scale(c,-1):i.scale(c,1)
var v=t.lineWidth,b=t.textMatrixScale
if(0===b||0===v){var _=t.textRenderingMode&a.TextRenderingMode.FILL_STROKE_MASK
_!==a.TextRenderingMode.STROKE&&_!==a.TextRenderingMode.FILL_STROKE||(this.cachedGetSinglePixelWidth=null,v=.65*this.getSinglePixelWidth())}else v/=b
1!==o&&(i.scale(o,o),v/=o),i.lineWidth=v
var y,A=0
for(y=0;y<h;++y){var S=e[y]
if((0,a.isNum)(S))A+=f*S*n/1e3
else{var w,P,R,C,x=!1,k=(S.isSpace?l:0)+s,T=S.fontChar,E=S.accent,O=S.width
if(d){var I,L,j
I=S.vmetric||p,L=S.vmetric?I[1]:.5*O,L=-L*m,j=I[2]*m,O=I?-I[0]:O,w=L/o,P=(A+j)/o}else w=A/o,P=0
if(r.remeasure&&O>0){var D=1e3*i.measureText(T).width/n*o
if(O<D&&this.isFontSubpixelAAEnabled){var F=O/D
x=!0,i.save(),i.scale(F,1),w/=F}else O!==D&&(w+=(O-D)/2e3*n/o)}(S.isInFont||r.missingFile)&&(g&&!E?i.fillText(T,w,P):(this.paintChar(T,w,P),E&&(R=w+E.offset.x/o,C=P-E.offset.y/o,this.paintChar(E.fontChar,R,C))))
A+=O*m+k*u,x&&i.restore()}}d?t.y-=A*c:t.x+=A*c,i.restore()}},showType3Text:function(e){var t,r,n,i,o=this.ctx,s=this.current,l=s.font,u=s.fontSize,c=s.fontDirection,h=l.vertical?1:-1,d=s.charSpacing,f=s.wordSpacing,p=s.textHScale*c,m=s.fontMatrix||a.FONT_IDENTITY_MATRIX,g=e.length,v=s.textRenderingMode===a.TextRenderingMode.INVISIBLE
if(!v&&0!==u){for(this.cachedGetSinglePixelWidth=null,o.save(),o.transform.apply(o,s.textMatrix),o.translate(s.x,s.y),o.scale(p,c),t=0;t<g;++t)if(r=e[t],(0,a.isNum)(r))i=h*r*u/1e3,this.ctx.translate(i,0),s.x+=i*p
else{var b=(r.isSpace?f:0)+d,_=l.charProcOperatorList[r.operatorListId]
if(_){this.processingType3=r,this.save(),o.scale(u,u),o.transform.apply(o,m),this.executeOperatorList(_),this.restore()
var y=a.Util.applyTransform([r.width,0],m)
n=y[0]*u+b,o.translate(n,0),s.x+=n*p}else(0,a.warn)('Type3 character "'+r.operatorListId+'" is not available.')}o.restore(),this.processingType3=null}},setCharWidth:function(e,t){},setCharWidthAndBounds:function(e,t,r,n,i,a){this.ctx.rect(r,n,i-r,a-n),this.clip(),this.endPath()},getColorN_Pattern:function(t){var r,n=this
if("TilingPattern"===t[0]){var i=t[1],a=this.baseTransform||this.ctx.mozCurrentTransform.slice(),s={createCanvasGraphics:function(t){return new e(t,n.commonObjs,n.objs,n.canvasFactory)}}
r=new o.TilingPattern(t,i,this.ctx,s,a)}else r=(0,o.getShadingPatternFromIR)(t)
return r},setStrokeColorN:function(){this.current.strokeColor=this.getColorN_Pattern(arguments)},setFillColorN:function(){this.current.fillColor=this.getColorN_Pattern(arguments),this.current.patternFill=!0},setStrokeRGBColor:function(e,t,r){var n=a.Util.makeCssRgb(e,t,r)
this.ctx.strokeStyle=n,this.current.strokeColor=n},setFillRGBColor:function(e,t,r){var n=a.Util.makeCssRgb(e,t,r)
this.ctx.fillStyle=n,this.current.fillColor=n,this.current.patternFill=!1},shadingFill:function(e){var t=this.ctx
this.save()
var r=(0,o.getShadingPatternFromIR)(e)
t.fillStyle=r.getPattern(t,this,!0)
var n=t.mozCurrentTransformInverse
if(n){var i=t.canvas,s=i.width,l=i.height,u=a.Util.applyTransform([0,0],n),c=a.Util.applyTransform([0,l],n),h=a.Util.applyTransform([s,0],n),d=a.Util.applyTransform([s,l],n),f=Math.min(u[0],c[0],h[0],d[0]),p=Math.min(u[1],c[1],h[1],d[1]),m=Math.max(u[0],c[0],h[0],d[0]),g=Math.max(u[1],c[1],h[1],d[1])
this.ctx.fillRect(f,p,m-f,g-p)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10)
this.restore()},beginInlineImage:function(){throw new Error("Should not call beginInlineImage")},beginImageData:function(){throw new Error("Should not call beginImageData")},paintFormXObjectBegin:function(e,t){if(this.save(),this.baseTransformStack.push(this.baseTransform),(0,a.isArray)(e)&&6===e.length&&this.transform.apply(this,e),this.baseTransform=this.ctx.mozCurrentTransform,(0,a.isArray)(t)&&4===t.length){var r=t[2]-t[0],n=t[3]-t[1]
this.ctx.rect(t[0],t[1],r,n),this.clip(),this.endPath()}},paintFormXObjectEnd:function(){this.restore(),this.baseTransform=this.baseTransformStack.pop()},beginGroup:function(e){this.save()
var t=this.ctx
e.isolated||(0,a.info)("TODO: Support non-isolated groups."),e.knockout&&(0,a.warn)("Knockout groups not supported.")
var r=t.mozCurrentTransform
if(e.matrix&&t.transform.apply(t,e.matrix),!e.bbox)throw new Error("Bounding box is required.")
var n=a.Util.getAxialAlignedBoundingBox(e.bbox,t.mozCurrentTransform),i=[0,0,t.canvas.width,t.canvas.height]
n=a.Util.intersect(n,i)||[0,0,0,0]
var o=Math.floor(n[0]),s=Math.floor(n[1]),l=Math.max(Math.ceil(n[2])-o,1),u=Math.max(Math.ceil(n[3])-s,1),c=1,h=1
l>4096&&(c=l/4096,l=4096),u>4096&&(h=u/4096,u=4096)
var f="groupAt"+this.groupLevel
e.smask&&(f+="_smask_"+this.smaskCounter++%2)
var p=this.cachedCanvases.getCanvas(f,l,u,!0),m=p.context
m.scale(1/c,1/h),m.translate(-o,-s),m.transform.apply(m,r),e.smask?this.smaskStack.push({canvas:p.canvas,context:m,offsetX:o,offsetY:s,scaleX:c,scaleY:h,subtype:e.smask.subtype,backdrop:e.smask.backdrop,transferMap:e.smask.transferMap||null,startTransformInverse:null}):(t.setTransform(1,0,0,1,0,0),t.translate(o,s),t.scale(c,h)),d(t,m),this.ctx=m,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(t),this.groupLevel++,this.current.activeSMask=null},endGroup:function(e){this.groupLevel--
var t=this.ctx
this.ctx=this.groupStack.pop(),void 0!==this.ctx.imageSmoothingEnabled?this.ctx.imageSmoothingEnabled=!1:this.ctx.mozImageSmoothingEnabled=!1,e.smask?this.tempSMask=this.smaskStack.pop():this.ctx.drawImage(t.canvas,0,0),this.restore()},beginAnnotations:function(){this.save(),this.baseTransform&&this.ctx.setTransform.apply(this.ctx,this.baseTransform)},endAnnotations:function(){this.restore()},beginAnnotation:function(e,t,r){if(this.save(),f(this.ctx),this.current=new h,(0,a.isArray)(e)&&4===e.length){var n=e[2]-e[0],i=e[3]-e[1]
this.ctx.rect(e[0],e[1],n,i),this.clip(),this.endPath()}this.transform.apply(this,t),this.transform.apply(this,r)},endAnnotation:function(){this.restore()},paintJpegXObject:function(e,t,r){var n=this.objs.get(e)
if(!n)return void(0,a.warn)("Dependent image isn't ready yet")
this.save()
var i=this.ctx
if(i.scale(1/t,-1/r),i.drawImage(n,0,0,n.width,n.height,0,-r,t,r),this.imageLayer){var o=i.mozCurrentTransformInverse,s=this.getCanvasPosition(0,0)
this.imageLayer.appendImage({objId:e,left:s[0],top:s[1],width:t/o[0],height:r/o[3]})}this.restore()},paintImageMaskXObject:function(e){var t=this.ctx,n=e.width,a=e.height,o=this.current.fillColor,s=this.current.patternFill,l=this.processingType3
if(l&&void 0===l.compiled&&(l.compiled=n<=1e3&&a<=1e3?i({data:e.data,width:n,height:a}):null),l&&l.compiled)return void l.compiled(t)
var u=this.cachedCanvases.getCanvas("maskCanvas",n,a),c=u.context
c.save(),r(c,e),c.globalCompositeOperation="source-in",c.fillStyle=s?o.getPattern(c,this):o,c.fillRect(0,0,n,a),c.restore(),this.paintInlineImageXObject(u.canvas)},paintImageMaskXObjectRepeat:function(e,t,n,i){var a=e.width,o=e.height,s=this.current.fillColor,l=this.current.patternFill,u=this.cachedCanvases.getCanvas("maskCanvas",a,o),c=u.context
c.save(),r(c,e),c.globalCompositeOperation="source-in",c.fillStyle=l?s.getPattern(c,this):s,c.fillRect(0,0,a,o),c.restore()
for(var h=this.ctx,d=0,f=i.length;d<f;d+=2)h.save(),h.transform(t,0,0,n,i[d],i[d+1]),h.scale(1,-1),h.drawImage(u.canvas,0,0,a,o,0,-1,1,1),h.restore()},paintImageMaskXObjectGroup:function(e){for(var t=this.ctx,n=this.current.fillColor,i=this.current.patternFill,a=0,o=e.length;a<o;a++){var s=e[a],l=s.width,u=s.height,c=this.cachedCanvases.getCanvas("maskCanvas",l,u),h=c.context
h.save(),r(h,s),h.globalCompositeOperation="source-in",h.fillStyle=i?n.getPattern(h,this):n,h.fillRect(0,0,l,u),h.restore(),t.save(),t.transform.apply(t,s.transform),t.scale(1,-1),t.drawImage(c.canvas,0,0,l,u,0,-1,1,1),t.restore()}},paintImageXObject:function(e){var t=this.objs.get(e)
if(!t)return void(0,a.warn)("Dependent image isn't ready yet")
this.paintInlineImageXObject(t)},paintImageXObjectRepeat:function(e,t,r,n){var i=this.objs.get(e)
if(!i)return void(0,a.warn)("Dependent image isn't ready yet")
for(var o=i.width,s=i.height,l=[],u=0,c=n.length;u<c;u+=2)l.push({transform:[t,0,0,r,n[u],n[u+1]],x:0,y:0,w:o,h:s})
this.paintInlineImageXObjectGroup(i,l)},paintInlineImageXObject:function(e){var r=e.width,n=e.height,i=this.ctx
this.save(),i.scale(1/r,-1/n)
var a,o,s=i.mozCurrentTransformInverse,l=s[0],u=s[1],c=Math.max(Math.sqrt(l*l+u*u),1),h=s[2],d=s[3],f=Math.max(Math.sqrt(h*h+d*d),1)
if(e instanceof HTMLElement||!e.data)a=e
else{o=this.cachedCanvases.getCanvas("inlineImage",r,n)
var p=o.context
t(p,e),a=o.canvas}for(var m=r,g=n,v="prescale1";c>2&&m>1||f>2&&g>1;){var b=m,_=g
c>2&&m>1&&(b=Math.ceil(m/2),c/=m/b),f>2&&g>1&&(_=Math.ceil(g/2),f/=g/_),o=this.cachedCanvases.getCanvas(v,b,_),p=o.context,p.clearRect(0,0,b,_),p.drawImage(a,0,0,m,g,0,0,b,_),a=o.canvas,m=b,g=_,v="prescale1"===v?"prescale2":"prescale1"}if(i.drawImage(a,0,0,m,g,0,-n,r,n),this.imageLayer){var y=this.getCanvasPosition(0,-n)
this.imageLayer.appendImage({imgData:e,left:y[0],top:y[1],width:r/s[0],height:n/s[3]})}this.restore()},paintInlineImageXObjectGroup:function(e,r){var n=this.ctx,i=e.width,a=e.height,o=this.cachedCanvases.getCanvas("inlineImage",i,a)
t(o.context,e)
for(var s=0,l=r.length;s<l;s++){var u=r[s]
if(n.save(),n.transform.apply(n,u.transform),n.scale(1,-1),n.drawImage(o.canvas,u.x,u.y,u.w,u.h,0,-1,1,1),this.imageLayer){var c=this.getCanvasPosition(u.x,u.y)
this.imageLayer.appendImage({imgData:e,left:c[0],top:c[1],width:i,height:a})}n.restore()}},paintSolidColorImageMask:function(){this.ctx.fillRect(0,0,1,1)},paintXObject:function(){(0,a.warn)("Unsupported 'paintXObject' command.")},markPoint:function(e){},markPointProps:function(e,t){},beginMarkedContent:function(e){},beginMarkedContentProps:function(e,t){},endMarkedContent:function(){},beginCompat:function(){},endCompat:function(){},consumePath:function(){var e=this.ctx
this.pendingClip&&(this.pendingClip===S?e.clip("evenodd"):e.clip(),this.pendingClip=null),e.beginPath()},getSinglePixelWidth:function(e){if(null===this.cachedGetSinglePixelWidth){this.ctx.save()
var t=this.ctx.mozCurrentTransformInverse
this.ctx.restore(),this.cachedGetSinglePixelWidth=Math.sqrt(Math.max(t[0]*t[0]+t[1]*t[1],t[2]*t[2]+t[3]*t[3]))}return this.cachedGetSinglePixelWidth},getCanvasPosition:function(e,t){var r=this.ctx.mozCurrentTransform
return[r[0]*e+r[2]*t+r[4],r[1]*e+r[3]*t+r[5]]}}
for(var w in a.OPS)e.prototype[a.OPS[w]]=e.prototype[w]
return e}()
t.CanvasGraphics=d},function(e,t,r){"use strict"
function n(e){this.docId=e,this.styleElement=null,this.nativeFontFaces=[],this.loadTestFontId=0,this.loadingContext={requests:[],nextRequestId:0}}Object.defineProperty(t,"__esModule",{value:!0}),t.FontLoader=t.FontFaceObject=void 0
var i=r(0)
n.prototype={insertRule:function(e){var t=this.styleElement
t||(t=this.styleElement=document.createElement("style"),t.id="PDFJS_FONT_STYLE_TAG_"+this.docId,document.documentElement.getElementsByTagName("head")[0].appendChild(t))
var r=t.sheet
r.insertRule(e,r.cssRules.length)},clear:function(){this.styleElement&&(this.styleElement.remove(),this.styleElement=null),this.nativeFontFaces.forEach(function(e){document.fonts.delete(e)}),this.nativeFontFaces.length=0}}
var a=function(){return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==")}
Object.defineProperty(n.prototype,"loadTestFont",{get:function(){return(0,i.shadow)(this,"loadTestFont",a())},configurable:!0}),n.prototype.addNativeFontFace=function(e){this.nativeFontFaces.push(e),document.fonts.add(e)},n.prototype.bind=function(e,t){for(var r=[],a=[],o=[],s=n.isFontLoadingAPISupported&&!n.isSyncFontLoadingSupported,l=0,u=e.length;l<u;l++){var c=e[l]
if(!c.attached&&!1!==c.loading)if(c.attached=!0,s){var h=c.createNativeFontFace()
h&&(this.addNativeFontFace(h),o.push(function(e){return e.loaded.catch(function(t){(0,i.warn)('Failed to load font "'+e.family+'": '+t)})}(h)))}else{var d=c.createFontFaceRule()
d&&(this.insertRule(d),r.push(d),a.push(c))}}var f=this.queueLoadingCallback(t)
s?Promise.all(o).then(function(){f.complete()}):r.length>0&&!n.isSyncFontLoadingSupported?this.prepareFontLoadEvent(r,a,f):f.complete()},n.prototype.queueLoadingCallback=function(e){function t(){for((0,i.assert)(!a.end,"completeRequest() cannot be called twice"),a.end=Date.now();r.requests.length>0&&r.requests[0].end;){var e=r.requests.shift()
setTimeout(e.callback,0)}}var r=this.loadingContext,n="pdfjs-font-loading-"+r.nextRequestId++,a={id:n,complete:t,callback:e,started:Date.now()}
return r.requests.push(a),a},n.prototype.prepareFontLoadEvent=function(e,t,r){function n(e,t){return e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|255&e.charCodeAt(t+3)}function a(e,t,r,n){return e.substr(0,t)+n+e.substr(t+r)}function o(e,t){return++h>30?((0,i.warn)("Load test font never loaded."),void t()):(c.font="30px "+e,c.fillText(".",0,20),c.getImageData(0,0,1,1).data[3]>0?void t():void setTimeout(o.bind(null,e,t)))}var s,l,u=document.createElement("canvas")
u.width=1,u.height=1
var c=u.getContext("2d"),h=0,d="lt"+Date.now()+this.loadTestFontId++,f=this.loadTestFont
f=a(f,976,d.length,d)
var p=n(f,16)
for(s=0,l=d.length-3;s<l;s+=4)p=p-1482184792+n(d,s)|0
s<d.length&&(p=p-1482184792+n(d+"XXX",s)|0),f=a(f,16,4,(0,i.string32)(p))
var m="url(data:font/opentype;base64,"+btoa(f)+");",g='@font-face { font-family:"'+d+'";src:'+m+"}"
this.insertRule(g)
var v=[]
for(s=0,l=t.length;s<l;s++)v.push(t[s].loadedName)
v.push(d)
var b=document.createElement("div")
for(b.setAttribute("style","visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"),s=0,l=v.length;s<l;++s){var _=document.createElement("span")
_.textContent="Hi",_.style.fontFamily=v[s],b.appendChild(_)}document.body.appendChild(b),o(d,function(){document.body.removeChild(b),r.complete()})},n.isFontLoadingAPISupported="undefined"!=typeof document&&!!document.fonts
var o=function(){if("undefined"==typeof navigator)return!0
var e=!1,t=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent)
return t&&t[1]>=14&&(e=!0),e}
Object.defineProperty(n,"isSyncFontLoadingSupported",{get:function(){return(0,i.shadow)(n,"isSyncFontLoadingSupported",o())},enumerable:!0,configurable:!0})
var s={get value(){return(0,i.shadow)(this,"value",(0,i.isEvalSupported)())}},l=function(){function e(e,t){this.compiledGlyphs=Object.create(null)
for(var r in e)this[r]=e[r]
this.options=t}return e.prototype={createNativeFontFace:function(){if(!this.data)return null
if(this.options.disableFontFace)return this.disableFontFace=!0,null
var e=new FontFace(this.loadedName,this.data,{})
return this.options.fontRegistry&&this.options.fontRegistry.registerFont(this),e},createFontFaceRule:function(){if(!this.data)return null
if(this.options.disableFontFace)return this.disableFontFace=!0,null
var e=(0,i.bytesToString)(new Uint8Array(this.data)),t=this.loadedName,r="url(data:"+this.mimetype+";base64,"+btoa(e)+");",n='@font-face { font-family:"'+t+'";src:'+r+"}"
return this.options.fontRegistry&&this.options.fontRegistry.registerFont(this,r),n},getPathGenerator:function(e,t){if(!(t in this.compiledGlyphs)){var r,n,i,a=e.get(this.loadedName+"_path_"+t)
if(this.options.isEvalSupported&&s.value){var o,l=""
for(n=0,i=a.length;n<i;n++)r=a[n],o=void 0!==r.args?r.args.join(","):"",l+="c."+r.cmd+"("+o+");\n"
this.compiledGlyphs[t]=new Function("c","size",l)}else this.compiledGlyphs[t]=function(e,t){for(n=0,i=a.length;n<i;n++)r=a[n],"scale"===r.cmd&&(r.args=[t,-t]),e[r.cmd].apply(e,r.args)}}return this.compiledGlyphs[t]}},e}()
t.FontFaceObject=l,t.FontLoader=n},function(e,t,r){"use strict"
function n(e){var t=o[e[0]]
if(!t)throw new Error("Unknown IR type: "+e[0])
return t.fromIR(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.TilingPattern=t.getShadingPatternFromIR=void 0
var i=r(0),a=r(53),o={}
o.RadialAxial={fromIR:function(e){var t=e[1],r=e[2],n=e[3],i=e[4],a=e[5],o=e[6]
return{type:"Pattern",getPattern:function(e){var s
"axial"===t?s=e.createLinearGradient(n[0],n[1],i[0],i[1]):"radial"===t&&(s=e.createRadialGradient(n[0],n[1],a,i[0],i[1],o))
for(var l=0,u=r.length;l<u;++l){var c=r[l]
s.addColorStop(c[0],c[1])}return s}}}}
var s=function(){function e(e,t,r,n,i,a,o,s){var l,u=t.coords,c=t.colors,h=e.data,d=4*e.width
u[r+1]>u[n+1]&&(l=r,r=n,n=l,l=a,a=o,o=l),u[n+1]>u[i+1]&&(l=n,n=i,i=l,l=o,o=s,s=l),u[r+1]>u[n+1]&&(l=r,r=n,n=l,l=a,a=o,o=l)
var f=(u[r]+t.offsetX)*t.scaleX,p=(u[r+1]+t.offsetY)*t.scaleY,m=(u[n]+t.offsetX)*t.scaleX,g=(u[n+1]+t.offsetY)*t.scaleY,v=(u[i]+t.offsetX)*t.scaleX,b=(u[i+1]+t.offsetY)*t.scaleY
if(!(p>=b))for(var _,y,A,S,w,P,R,C,x,k=c[a],T=c[a+1],E=c[a+2],O=c[o],I=c[o+1],L=c[o+2],j=c[s],D=c[s+1],F=c[s+2],N=Math.round(p),M=Math.round(b),q=N;q<=M;q++){q<g?(x=q<p?0:p===g?1:(p-q)/(p-g),_=f-(f-m)*x,y=k-(k-O)*x,A=T-(T-I)*x,S=E-(E-L)*x):(x=q>b?1:g===b?0:(g-q)/(g-b),_=m-(m-v)*x,y=O-(O-j)*x,A=I-(I-D)*x,S=L-(L-F)*x),x=q<p?0:q>b?1:(p-q)/(p-b),w=f-(f-v)*x,P=k-(k-j)*x,R=T-(T-D)*x,C=E-(E-F)*x
for(var U=Math.round(Math.min(_,w)),W=Math.round(Math.max(_,w)),B=d*q+4*U,z=U;z<=W;z++)x=(_-z)/(_-w),x=x<0?0:x>1?1:x,h[B++]=y-(y-P)*x|0,h[B++]=A-(A-R)*x|0,h[B++]=S-(S-C)*x|0,h[B++]=255}}function t(t,r,n){var i,a,o=r.coords,s=r.colors
switch(r.type){case"lattice":var l=r.verticesPerRow,u=Math.floor(o.length/l)-1,c=l-1
for(i=0;i<u;i++)for(var h=i*l,d=0;d<c;d++,h++)e(t,n,o[h],o[h+1],o[h+l],s[h],s[h+1],s[h+l]),e(t,n,o[h+l+1],o[h+1],o[h+l],s[h+l+1],s[h+1],s[h+l])
break
case"triangles":for(i=0,a=o.length;i<a;i+=3)e(t,n,o[i],o[i+1],o[i+2],s[i],s[i+1],s[i+2])
break
default:throw new Error("illegal figure")}}function r(e,r,n,i,o,s,l){var u,c,h,d,f=Math.floor(e[0]),p=Math.floor(e[1]),m=Math.ceil(e[2])-f,g=Math.ceil(e[3])-p,v=Math.min(Math.ceil(Math.abs(m*r[0]*1.1)),3e3),b=Math.min(Math.ceil(Math.abs(g*r[1]*1.1)),3e3),_=m/v,y=g/b,A={coords:n,colors:i,offsetX:-f,offsetY:-p,scaleX:1/_,scaleY:1/y},S=v+4,w=b+4
if(a.WebGLUtils.isEnabled)u=a.WebGLUtils.drawFigures(v,b,s,o,A),c=l.getCanvas("mesh",S,w,!1),c.context.drawImage(u,2,2),u=c.canvas
else{c=l.getCanvas("mesh",S,w,!1)
var P=c.context,R=P.createImageData(v,b)
if(s){var C=R.data
for(h=0,d=C.length;h<d;h+=4)C[h]=s[0],C[h+1]=s[1],C[h+2]=s[2],C[h+3]=255}for(h=0;h<o.length;h++)t(R,o[h],A)
P.putImageData(R,2,2),u=c.canvas}return{canvas:u,offsetX:f-2*_,offsetY:p-2*y,scaleX:_,scaleY:y}}return r}()
o.Mesh={fromIR:function(e){var t=e[2],r=e[3],n=e[4],a=e[5],o=e[6],l=e[8]
return{type:"Pattern",getPattern:function(e,u,c){var h
if(c)h=i.Util.singularValueDecompose2dScale(e.mozCurrentTransform)
else if(h=i.Util.singularValueDecompose2dScale(u.baseTransform),o){var d=i.Util.singularValueDecompose2dScale(o)
h=[h[0]*d[0],h[1]*d[1]]}var f=s(a,h,t,r,n,c?null:l,u.cachedCanvases)
return c||(e.setTransform.apply(e,u.baseTransform),o&&e.transform.apply(e,o)),e.translate(f.offsetX,f.offsetY),e.scale(f.scaleX,f.scaleY),e.createPattern(f.canvas,"no-repeat")}}}},o.Dummy={fromIR:function(){return{type:"Pattern",getPattern:function(){return"hotpink"}}}}
var l=function(){function e(e,t,r,n,i){this.operatorList=e[2],this.matrix=e[3]||[1,0,0,1,0,0],this.bbox=e[4],this.xstep=e[5],this.ystep=e[6],this.paintType=e[7],this.tilingType=e[8],this.color=t,this.canvasGraphicsFactory=n,this.baseTransform=i,this.type="Pattern",this.ctx=r}var t={COLORED:1,UNCOLORED:2}
return e.prototype={createPatternCanvas:function(e){var t=this.operatorList,r=this.bbox,n=this.xstep,a=this.ystep,o=this.paintType,s=this.tilingType,l=this.color,u=this.canvasGraphicsFactory;(0,i.info)("TilingType: "+s)
var c=r[0],h=r[1],d=r[2],f=r[3],p=[c,h],m=[c+n,h+a],g=m[0]-p[0],v=m[1]-p[1],b=i.Util.singularValueDecompose2dScale(this.matrix),_=i.Util.singularValueDecompose2dScale(this.baseTransform),y=[b[0]*_[0],b[1]*_[1]]
g=Math.min(Math.ceil(Math.abs(g*y[0])),3e3),v=Math.min(Math.ceil(Math.abs(v*y[1])),3e3)
var A=e.cachedCanvases.getCanvas("pattern",g,v,!0),S=A.context,w=u.createCanvasGraphics(S)
w.groupLevel=e.groupLevel,this.setFillAndStrokeStyleToContext(S,o,l),this.setScale(g,v,n,a),this.transformToScale(w)
var P=[1,0,0,1,-p[0],-p[1]]
return w.transform.apply(w,P),this.clipBbox(w,r,c,h,d,f),w.executeOperatorList(t),A.canvas},setScale:function(e,t,r,n){this.scale=[e/r,t/n]},transformToScale:function(e){var t=this.scale,r=[t[0],0,0,t[1],0,0]
e.transform.apply(e,r)},scaleToContext:function(){var e=this.scale
this.ctx.scale(1/e[0],1/e[1])},clipBbox:function(e,t,r,n,a,o){if((0,i.isArray)(t)&&4===t.length){var s=a-r,l=o-n
e.ctx.rect(r,n,s,l),e.clip(),e.endPath()}},setFillAndStrokeStyleToContext:function(e,r,n){switch(r){case t.COLORED:var a=this.ctx
e.fillStyle=a.fillStyle,e.strokeStyle=a.strokeStyle
break
case t.UNCOLORED:var o=i.Util.makeCssRgb(n[0],n[1],n[2])
e.fillStyle=o,e.strokeStyle=o
break
default:throw new i.FormatError("Unsupported paint type: "+r)}},getPattern:function(e,t){var r=this.createPatternCanvas(t)
return e=this.ctx,e.setTransform.apply(e,this.baseTransform),e.transform.apply(e,this.matrix),this.scaleToContext(),e.createPattern(r,"repeat")}},e}()
t.getShadingPatternFromIR=n,t.TilingPattern=l},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFDataTransportStream=void 0
var n=r(0),i=function(){function e(e,t){var r=this;(0,n.assert)(t),this._queuedChunks=[]
var i=e.initialData
if(i&&i.length>0){var a=new Uint8Array(i).buffer
this._queuedChunks.push(a)}this._pdfDataRangeTransport=t,this._isRangeSupported=!e.disableRange,this._isStreamingSupported=!e.disableStream,this._contentLength=e.length,this._fullRequestReader=null,this._rangeReaders=[],this._pdfDataRangeTransport.addRangeListener(function(e,t){r._onReceiveData({begin:e,chunk:t})}),this._pdfDataRangeTransport.addProgressListener(function(e){r._onProgress({loaded:e})}),this._pdfDataRangeTransport.addProgressiveReadListener(function(e){r._onReceiveData({chunk:e})}),this._pdfDataRangeTransport.transportReady()}function t(e,t){this._stream=e,this._done=!1,this._queuedChunks=t||[],this._requests=[],this._headersReady=Promise.resolve(),e._fullRequestReader=this,this.onProgress=null}function r(e,t,r){this._stream=e,this._begin=t,this._end=r,this._queuedChunk=null,this._requests=[],this._done=!1,this.onProgress=null}return e.prototype={_onReceiveData:function(e){var t=new Uint8Array(e.chunk).buffer
if(void 0===e.begin)this._fullRequestReader?this._fullRequestReader._enqueue(t):this._queuedChunks.push(t)
else{var r=this._rangeReaders.some(function(r){return r._begin===e.begin&&(r._enqueue(t),!0)});(0,n.assert)(r)}},_onProgress:function(e){if(this._rangeReaders.length>0){var t=this._rangeReaders[0]
t.onProgress&&t.onProgress({loaded:e.loaded})}},_removeRangeReader:function(e){var t=this._rangeReaders.indexOf(e)
t>=0&&this._rangeReaders.splice(t,1)},getFullReader:function(){(0,n.assert)(!this._fullRequestReader)
var e=this._queuedChunks
return this._queuedChunks=null,new t(this,e)},getRangeReader:function(e,t){var n=new r(this,e,t)
return this._pdfDataRangeTransport.requestDataRange(e,t),this._rangeReaders.push(n),n},cancelAllRequests:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeReaders.slice(0).forEach(function(t){t.cancel(e)}),this._pdfDataRangeTransport.abort()}},t.prototype={_enqueue:function(e){if(!this._done){if(this._requests.length>0){return void this._requests.shift().resolve({value:e,done:!1})}this._queuedChunks.push(e)}},get headersReady(){return this._headersReady},get isRangeSupported(){return this._stream._isRangeSupported},get isStreamingSupported(){return this._stream._isStreamingSupported},get contentLength(){return this._stream._contentLength},read:function(){if(this._queuedChunks.length>0){var e=this._queuedChunks.shift()
return Promise.resolve({value:e,done:!1})}if(this._done)return Promise.resolve({value:void 0,done:!0})
var t=(0,n.createPromiseCapability)()
return this._requests.push(t),t.promise},cancel:function(e){this._done=!0,this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[]}},r.prototype={_enqueue:function(e){if(!this._done){if(0===this._requests.length)this._queuedChunk=e
else{this._requests.shift().resolve({value:e,done:!1}),this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[]}this._done=!0,this._stream._removeRangeReader(this)}},get isStreamingSupported(){return!1},read:function(){if(this._queuedChunk){var e=this._queuedChunk
return this._queuedChunk=null,Promise.resolve({value:e,done:!1})}if(this._done)return Promise.resolve({value:void 0,done:!0})
var t=(0,n.createPromiseCapability)()
return this._requests.push(t),t.promise},cancel:function(e){this._done=!0,this._requests.forEach(function(e){e.resolve({value:void 0,done:!0})}),this._requests=[],this._stream._removeRangeReader(this)}},e}()
t.PDFDataTransportStream=i},function(e,t,r){"use strict"
var n=r(0),i=r(54),a=r(30),o=r(32),s=r(29),l=r(7),u=r(31)
if(n.isNodeJS()){var c=r(56).PDFNodeStream
a.setPDFNetworkStreamClass(c)}else{var h=r(55).PDFNetworkStream
a.setPDFNetworkStreamClass(h)}t.PDFJS=i.PDFJS,t.build=a.build,t.version=a.version,t.getDocument=a.getDocument,t.LoopbackPort=a.LoopbackPort,t.PDFDataRangeTransport=a.PDFDataRangeTransport,t.PDFWorker=a.PDFWorker,t.renderTextLayer=o.renderTextLayer,t.AnnotationLayer=s.AnnotationLayer,t.CustomStyle=l.CustomStyle,t.createPromiseCapability=n.createPromiseCapability,t.PasswordResponses=n.PasswordResponses,t.InvalidPDFException=n.InvalidPDFException,t.MissingPDFException=n.MissingPDFException,t.SVGGraphics=u.SVGGraphics,t.NativeImageDecoding=n.NativeImageDecoding,t.UnexpectedResponseException=n.UnexpectedResponseException,t.OPS=n.OPS,t.UNSUPPORTED_FEATURES=n.UNSUPPORTED_FEATURES,t.isValidUrl=l.isValidUrl,t.createValidAbsoluteUrl=n.createValidAbsoluteUrl,t.createObjectURL=n.createObjectURL,t.removeNullCharacters=n.removeNullCharacters,t.shadow=n.shadow,t.createBlob=n.createBlob,t.RenderingCancelledException=l.RenderingCancelledException,t.getFilenameFromUrl=l.getFilenameFromUrl,t.addLinkAttributes=l.addLinkAttributes,t.StatTimer=n.StatTimer},function(e,t,r){"use strict"
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
if("undefined"==typeof PDFJS||!PDFJS.compatibilityChecked){var i=r(14),a="undefined"!=typeof navigator&&navigator.userAgent||"",o=/Android/.test(a),s=/Android\s[0-2][^\d]/.test(a),l=/Android\s[0-4][^\d]/.test(a),u=a.indexOf("Chrom")>=0,c=/Chrome\/(39|40)\./.test(a),h=a.indexOf("CriOS")>=0,d=a.indexOf("Trident")>=0,f=/\b(iPad|iPhone|iPod)(?=;)/.test(a),p=a.indexOf("Opera")>=0,m=/Safari\//.test(a)&&!/(Chrome\/|Android\s)/.test(a),g="object"===("undefined"==typeof window?"undefined":n(window))&&"object"===("undefined"==typeof document?"undefined":n(document))
"undefined"==typeof PDFJS&&(i.PDFJS={}),PDFJS.compatibilityChecked=!0,function(){function e(e,t){return new l(this.slice(e,t))}function t(e,t){arguments.length<2&&(t=0)
for(var r=0,n=e.length;r<n;++r,++t)this[t]=255&e[r]}function a(e,t){this.buffer=e,this.byteLength=e.length,this.length=t,s(this.length)}function o(e){return{get:function(){var t=this.buffer,r=e<<2
return(t[r]|t[r+1]<<8|t[r+2]<<16|t[r+3]<<24)>>>0},set:function(t){var r=this.buffer,n=e<<2
r[n]=255&t,r[n+1]=t>>8&255,r[n+2]=t>>16&255,r[n+3]=t>>>24&255}}}function s(e){for(;u<e;)Object.defineProperty(a.prototype,u,o(u)),u++}function l(r){var i,a,o
if("number"==typeof r)for(i=[],a=0;a<r;++a)i[a]=0
else if("slice"in r)i=r.slice(0)
else for(i=[],a=0,o=r.length;a<o;++a)i[a]=r[a]
return i.subarray=e,i.buffer=i,i.byteLength=i.length,i.set=t,"object"===(void 0===r?"undefined":n(r))&&r.buffer&&(i.buffer=r.buffer),i}if("undefined"==typeof Uint8ClampedArray&&(i.Uint8ClampedArray=r(58)),"undefined"!=typeof Uint8Array)return void 0===Uint8Array.prototype.subarray&&(Uint8Array.prototype.subarray=function(e,t){return new Uint8Array(this.slice(e,t))},Float32Array.prototype.subarray=function(e,t){return new Float32Array(this.slice(e,t))}),void("undefined"==typeof Float64Array&&(i.Float64Array=Float32Array))
a.prototype=Object.create(null)
var u=0
i.Uint8Array=l,i.Int8Array=l,i.Int32Array=l,i.Uint16Array=l,i.Float32Array=l,i.Float64Array=l,i.Uint32Array=function(){if(3===arguments.length){if(0!==arguments[1])throw new Error("offset !== 0 is not supported")
return new a(arguments[0],arguments[2])}return l.apply(this,arguments)}}(),function(){if(g&&window.CanvasPixelArray){var e=window.CanvasPixelArray.prototype
"buffer"in e||(Object.defineProperty(e,"buffer",{get:function(){return this},enumerable:!1,configurable:!0}),Object.defineProperty(e,"byteLength",{get:function(){return this.length},enumerable:!1,configurable:!0}))}}(),function(){i.URL||(i.URL=i.webkitURL)}(),function(){if(void 0!==Object.defineProperty){var e=!0
try{g&&Object.defineProperty(new Image,"id",{value:"test"})
var t=function(){}
t.prototype={get id(){}},Object.defineProperty(new t,"id",{value:"",configurable:!0,enumerable:!0,writable:!1})}catch(t){e=!1}if(e)return}Object.defineProperty=function(e,t,r){delete e[t],"get"in r&&e.__defineGetter__(t,r.get),"set"in r&&e.__defineSetter__(t,r.set),"value"in r&&(e.__defineSetter__(t,function(e){return this.__defineGetter__(t,function(){return e}),e}),e[t]=r.value)}}(),function(){if("undefined"!=typeof XMLHttpRequest){var e=XMLHttpRequest.prototype,t=new XMLHttpRequest
if("overrideMimeType"in t||Object.defineProperty(e,"overrideMimeType",{value:function(e){}}),!("responseType"in t)){if(Object.defineProperty(e,"responseType",{get:function(){return this._responseType||"text"},set:function(e){"text"!==e&&"arraybuffer"!==e||(this._responseType=e,"arraybuffer"===e&&"function"==typeof this.overrideMimeType&&this.overrideMimeType("text/plain; charset=x-user-defined"))}}),"undefined"!=typeof VBArray)return void Object.defineProperty(e,"response",{get:function(){return"arraybuffer"===this.responseType?new Uint8Array(new VBArray(this.responseBody).toArray()):this.responseText}})
Object.defineProperty(e,"response",{get:function(){if("arraybuffer"!==this.responseType)return this.responseText
var e,t=this.responseText,r=t.length,n=new Uint8Array(r)
for(e=0;e<r;++e)n[e]=255&t.charCodeAt(e)
return n.buffer}})}}}(),function(){if(!("btoa"in i)){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
i.btoa=function(t){var r,n,i=""
for(r=0,n=t.length;r<n;r+=3){var a=255&t.charCodeAt(r),o=255&t.charCodeAt(r+1),s=255&t.charCodeAt(r+2),l=a>>2,u=(3&a)<<4|o>>4,c=r+1<n?(15&o)<<2|s>>6:64,h=r+2<n?63&s:64
i+=e.charAt(l)+e.charAt(u)+e.charAt(c)+e.charAt(h)}return i}}}(),function(){if(!("atob"in i)){i.atob=function(e){if(e=e.replace(/=+$/,""),e.length%4==1)throw new Error("bad atob input")
for(var t,r,n=0,i=0,a="";r=e.charAt(i++);~r&&(t=n%4?64*t+r:r,n++%4)?a+=String.fromCharCode(255&t>>(-2*n&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r)
return a}}}(),function(){void 0===Function.prototype.bind&&(Function.prototype.bind=function(e){var t=this,r=Array.prototype.slice.call(arguments,1)
return function(){var n=r.concat(Array.prototype.slice.call(arguments))
return t.apply(e,n)}})}(),function(){if(g){"dataset"in document.createElement("div")||Object.defineProperty(HTMLElement.prototype,"dataset",{get:function(){if(this._dataset)return this._dataset
for(var e={},t=0,r=this.attributes.length;t<r;t++){var n=this.attributes[t]
if("data-"===n.name.substring(0,5)){e[n.name.substring(5).replace(/\-([a-z])/g,function(e,t){return t.toUpperCase()})]=n.value}}return Object.defineProperty(this,"_dataset",{value:e,writable:!1,enumerable:!1}),e},enumerable:!0})}}(),function(){function e(e,t,r,n){var i=e.className||"",a=i.split(/\s+/g)
""===a[0]&&a.shift()
var o=a.indexOf(t)
return o<0&&r&&a.push(t),o>=0&&n&&a.splice(o,1),e.className=a.join(" "),o>=0}if(g){if(!("classList"in document.createElement("div"))){var t={add:function(t){e(this.element,t,!0,!1)},contains:function(t){return e(this.element,t,!1,!1)},remove:function(t){e(this.element,t,!1,!0)},toggle:function(t){e(this.element,t,!0,!0)}}
Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){if(this._classList)return this._classList
var e=Object.create(t,{element:{value:this,writable:!1,enumerable:!0}})
return Object.defineProperty(this,"_classList",{value:e,writable:!1,enumerable:!1}),e},enumerable:!0})}}}(),function(){if(!("undefined"==typeof importScripts||"console"in i)){var e={},t={log:function(){var e=Array.prototype.slice.call(arguments)
i.postMessage({targetName:"main",action:"console_log",data:e})},error:function(){var e=Array.prototype.slice.call(arguments)
i.postMessage({targetName:"main",action:"console_error",data:e})},time:function(t){e[t]=Date.now()},timeEnd:function(t){var r=e[t]
if(!r)throw new Error("Unknown timer name "+t)
this.log("Timer:",t,Date.now()-r)}}
i.console=t}}(),function(){if(g)"console"in window?"bind"in console.log||(console.log=function(e){return function(t){return e(t)}}(console.log),console.error=function(e){return function(t){return e(t)}}(console.error),console.warn=function(e){return function(t){return e(t)}}(console.warn)):window.console={log:function(){},error:function(){},warn:function(){}}}(),function(){function e(e){t(e.target)&&e.stopPropagation()}function t(e){return e.disabled||e.parentNode&&t(e.parentNode)}p&&document.addEventListener("click",e,!0)}(),function(){(d||h)&&(PDFJS.disableCreateObjectURL=!0)}(),function(){"undefined"!=typeof navigator&&("language"in navigator||(PDFJS.locale=navigator.userLanguage||"en-US"))}(),function(){(m||s||c||f)&&(PDFJS.disableRange=!0,PDFJS.disableStream=!0)}(),function(){g&&(history.pushState&&!s||(PDFJS.disableHistory=!0))}(),function(){if(g)if(window.CanvasPixelArray)"function"!=typeof window.CanvasPixelArray.prototype.set&&(window.CanvasPixelArray.prototype.set=function(e){for(var t=0,r=this.length;t<r;t++)this[t]=e[t]})
else{var e,t=!1
if(u?(e=a.match(/Chrom(e|ium)\/([0-9]+)\./),t=e&&parseInt(e[2])<21):o?t=l:m&&(e=a.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//),t=e&&parseInt(e[1])<6),t){var r=window.CanvasRenderingContext2D.prototype,n=r.createImageData
r.createImageData=function(e,t){var r=n.call(this,e,t)
return r.data.set=function(e){for(var t=0,r=this.length;t<r;t++)this[t]=e[t]},r},r=null}}}(),function(){function e(){window.requestAnimationFrame=function(e){return window.setTimeout(e,20)},window.cancelAnimationFrame=function(e){window.clearTimeout(e)}}if(g)f?e():"requestAnimationFrame"in window||(window.requestAnimationFrame=window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame,window.requestAnimationFrame||e())}(),function(){(f||o)&&(PDFJS.maxCanvasPixels=5242880)}(),function(){g&&d&&window.parent!==window&&(PDFJS.disableFullscreen=!0)}(),function(){g&&("currentScript"in document||Object.defineProperty(document,"currentScript",{get:function(){var e=document.getElementsByTagName("script")
return e[e.length-1]},enumerable:!0,configurable:!0}))}(),function(){if(g){var e=document.createElement("input")
try{e.type="number"}catch(n){var t=e.constructor.prototype,r=Object.getOwnPropertyDescriptor(t,"type")
Object.defineProperty(t,"type",{get:function(){return r.get.call(this)},set:function(e){r.set.call(this,"number"===e?"text":e)},enumerable:!0,configurable:!0})}}}(),function(){if(g&&document.attachEvent){var e=document.constructor.prototype,t=Object.getOwnPropertyDescriptor(e,"readyState")
Object.defineProperty(e,"readyState",{get:function(){var e=t.get.call(this)
return"interactive"===e?"loading":e},set:function(e){t.set.call(this,e)},enumerable:!0,configurable:!0})}}(),function(){g&&void 0===Element.prototype.remove&&(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),function(){Number.isNaN||(Number.isNaN=function(e){return"number"==typeof e&&isNaN(e)})}(),function(){Number.isInteger||(Number.isInteger=function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e})}(),function(){if(i.Promise)return"function"!=typeof i.Promise.all&&(i.Promise.all=function(e){var t,r,n=0,a=[],o=new i.Promise(function(e,n){t=e,r=n})
return e.forEach(function(e,i){n++,e.then(function(e){a[i]=e,0===--n&&t(a)},r)}),0===n&&t(a),o}),"function"!=typeof i.Promise.resolve&&(i.Promise.resolve=function(e){return new i.Promise(function(t){t(e)})}),"function"!=typeof i.Promise.reject&&(i.Promise.reject=function(e){return new i.Promise(function(t,r){r(e)})}),void("function"!=typeof i.Promise.prototype.catch&&(i.Promise.prototype.catch=function(e){return i.Promise.prototype.then(void 0,e)}))
var e=2,t={handlers:[],running:!1,unhandledRejections:[],pendingRejectionCheck:!1,scheduleHandlers:function(e){0!==e._status&&(this.handlers=this.handlers.concat(e._handlers),e._handlers=[],this.running||(this.running=!0,setTimeout(this.runHandlers.bind(this),0)))},runHandlers:function(){for(var t=Date.now()+1;this.handlers.length>0;){var r=this.handlers.shift(),n=r.thisPromise._status,i=r.thisPromise._value
try{1===n?"function"==typeof r.onResolve&&(i=r.onResolve(i)):"function"==typeof r.onReject&&(i=r.onReject(i),n=1,r.thisPromise._unhandledRejection&&this.removeUnhandeledRejection(r.thisPromise))}catch(t){n=e,i=t}if(r.nextPromise._updateStatus(n,i),Date.now()>=t)break}if(this.handlers.length>0)return void setTimeout(this.runHandlers.bind(this),0)
this.running=!1},addUnhandledRejection:function(e){this.unhandledRejections.push({promise:e,time:Date.now()}),this.scheduleRejectionCheck()},removeUnhandeledRejection:function(e){e._unhandledRejection=!1
for(var t=0;t<this.unhandledRejections.length;t++)this.unhandledRejections[t].promise===e&&(this.unhandledRejections.splice(t),t--)},scheduleRejectionCheck:function(){var e=this
this.pendingRejectionCheck||(this.pendingRejectionCheck=!0,setTimeout(function(){e.pendingRejectionCheck=!1
for(var t=Date.now(),r=0;r<e.unhandledRejections.length;r++)if(t-e.unhandledRejections[r].time>500){var n=e.unhandledRejections[r].promise._value,i="Unhandled rejection: "+n
n.stack&&(i+="\n"+n.stack)
try{throw new Error(i)}catch(e){console.warn(i)}e.unhandledRejections.splice(r),r--}e.unhandledRejections.length&&e.scheduleRejectionCheck()},500))}},r=function(e){this._status=0,this._handlers=[]
try{e.call(this,this._resolve.bind(this),this._reject.bind(this))}catch(e){this._reject(e)}}
r.all=function(t){function n(t){o._status!==e&&(l=[],a(t))}var i,a,o=new r(function(e,t){i=e,a=t}),s=t.length,l=[]
if(0===s)return i(l),o
for(var u=0,c=t.length;u<c;++u){var h=t[u],d=function(t){return function(r){o._status!==e&&(l[t]=r,0===--s&&i(l))}}(u)
r.isPromise(h)?h.then(d,n):d(h)}return o},r.isPromise=function(e){return e&&"function"==typeof e.then},r.resolve=function(e){return new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,r){r(e)})},r.prototype={_status:null,_value:null,_handlers:null,_unhandledRejection:null,_updateStatus:function(n,i){if(1!==this._status&&this._status!==e){if(1===n&&r.isPromise(i))return void i.then(this._updateStatus.bind(this,1),this._updateStatus.bind(this,e))
this._status=n,this._value=i,n===e&&0===this._handlers.length&&(this._unhandledRejection=!0,t.addUnhandledRejection(this)),t.scheduleHandlers(this)}},_resolve:function(e){this._updateStatus(1,e)},_reject:function(t){this._updateStatus(e,t)},then:function(e,n){var i=new r(function(e,t){this.resolve=e,this.reject=t})
return this._handlers.push({thisPromise:this,onResolve:e,onReject:n,nextPromise:i}),t.scheduleHandlers(this),i},catch:function(e){return this.then(void 0,e)}},i.Promise=r}(),function(){function e(){this.id="$weakmap"+t++}if(!i.WeakMap){var t=0
e.prototype={has:function(e){return("object"===(void 0===e?"undefined":n(e))||"function"==typeof e)&&null!==e&&!!Object.getOwnPropertyDescriptor(e,this.id)},get:function(e){return this.has(e)?e[this.id]:void 0},set:function(e,t){Object.defineProperty(e,this.id,{value:t,enumerable:!1,configurable:!0})},delete:function(e){delete e[this.id]}},i.WeakMap=e}}(),function(){function e(e){return void 0!==d[e]}function t(){l.call(this),this._isInvalid=!0}function r(e){return""===e&&t.call(this),e.toLowerCase()}function a(e){var t=e.charCodeAt(0)
return t>32&&t<127&&-1===[34,35,60,62,63,96].indexOf(t)?e:encodeURIComponent(e)}function o(e){var t=e.charCodeAt(0)
return t>32&&t<127&&-1===[34,35,60,62,96].indexOf(t)?e:encodeURIComponent(e)}function s(n,i,s){function l(e){_.push(e)}var u=i||"scheme start",c=0,h="",v=!1,b=!1,_=[]
e:for(;(n[c-1]!==p||0===c)&&!this._isInvalid;){var y=n[c]
switch(u){case"scheme start":if(!y||!m.test(y)){if(i){l("Invalid scheme.")
break e}h="",u="no scheme"
continue}h+=y.toLowerCase(),u="scheme"
break
case"scheme":if(y&&g.test(y))h+=y.toLowerCase()
else{if(":"!==y){if(i){if(y===p)break e
l("Code point not allowed in scheme: "+y)
break e}h="",c=0,u="no scheme"
continue}if(this._scheme=h,h="",i)break e
e(this._scheme)&&(this._isRelative=!0),u="file"===this._scheme?"relative":this._isRelative&&s&&s._scheme===this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break
case"scheme data":"?"===y?(this._query="?",u="query"):"#"===y?(this._fragment="#",u="fragment"):y!==p&&"\t"!==y&&"\n"!==y&&"\r"!==y&&(this._schemeData+=a(y))
break
case"no scheme":if(s&&e(s._scheme)){u="relative"
continue}l("Missing scheme."),t.call(this)
break
case"relative or authority":if("/"!==y||"/"!==n[c+1]){l("Expected /, got: "+y),u="relative"
continue}u="authority ignore slashes"
break
case"relative":if(this._isRelative=!0,"file"!==this._scheme&&(this._scheme=s._scheme),y===p){this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._username=s._username,this._password=s._password
break e}if("/"===y||"\\"===y)"\\"===y&&l("\\ is an invalid code point."),u="relative slash"
else if("?"===y)this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query="?",this._username=s._username,this._password=s._password,u="query"
else{if("#"!==y){var A=n[c+1],S=n[c+2];("file"!==this._scheme||!m.test(y)||":"!==A&&"|"!==A||S!==p&&"/"!==S&&"\\"!==S&&"?"!==S&&"#"!==S)&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password,this._path=s._path.slice(),this._path.pop()),u="relative path"
continue}this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._fragment="#",this._username=s._username,this._password=s._password,u="fragment"}break
case"relative slash":if("/"!==y&&"\\"!==y){"file"!==this._scheme&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password),u="relative path"
continue}"\\"===y&&l("\\ is an invalid code point."),u="file"===this._scheme?"file host":"authority ignore slashes"
break
case"authority first slash":if("/"!==y){l("Expected '/', got: "+y),u="authority ignore slashes"
continue}u="authority second slash"
break
case"authority second slash":if(u="authority ignore slashes","/"!==y){l("Expected '/', got: "+y)
continue}break
case"authority ignore slashes":if("/"!==y&&"\\"!==y){u="authority"
continue}l("Expected authority, got: "+y)
break
case"authority":if("@"===y){v&&(l("@ already seen."),h+="%40"),v=!0
for(var w=0;w<h.length;w++){var P=h[w]
if("\t"!==P&&"\n"!==P&&"\r"!==P)if(":"!==P||null!==this._password){var R=a(P)
null!==this._password?this._password+=R:this._username+=R}else this._password=""
else l("Invalid whitespace in authority.")}h=""}else{if(y===p||"/"===y||"\\"===y||"?"===y||"#"===y){c-=h.length,h="",u="host"
continue}h+=y}break
case"file host":if(y===p||"/"===y||"\\"===y||"?"===y||"#"===y){2!==h.length||!m.test(h[0])||":"!==h[1]&&"|"!==h[1]?0===h.length?u="relative path start":(this._host=r.call(this,h),h="",u="relative path start"):u="relative path"
continue}"\t"===y||"\n"===y||"\r"===y?l("Invalid whitespace in file host."):h+=y
break
case"host":case"hostname":if(":"!==y||b){if(y===p||"/"===y||"\\"===y||"?"===y||"#"===y){if(this._host=r.call(this,h),h="",u="relative path start",i)break e
continue}"\t"!==y&&"\n"!==y&&"\r"!==y?("["===y?b=!0:"]"===y&&(b=!1),h+=y):l("Invalid code point in host/hostname: "+y)}else if(this._host=r.call(this,h),h="",u="port","hostname"===i)break e
break
case"port":if(/[0-9]/.test(y))h+=y
else{if(y===p||"/"===y||"\\"===y||"?"===y||"#"===y||i){if(""!==h){var C=parseInt(h,10)
C!==d[this._scheme]&&(this._port=C+""),h=""}if(i)break e
u="relative path start"
continue}"\t"===y||"\n"===y||"\r"===y?l("Invalid code point in port: "+y):t.call(this)}break
case"relative path start":if("\\"===y&&l("'\\' not allowed in path."),u="relative path","/"!==y&&"\\"!==y)continue
break
case"relative path":if(y!==p&&"/"!==y&&"\\"!==y&&(i||"?"!==y&&"#"!==y))"\t"!==y&&"\n"!==y&&"\r"!==y&&(h+=a(y))
else{"\\"===y&&l("\\ not allowed in relative path.")
var x;(x=f[h.toLowerCase()])&&(h=x),".."===h?(this._path.pop(),"/"!==y&&"\\"!==y&&this._path.push("")):"."===h&&"/"!==y&&"\\"!==y?this._path.push(""):"."!==h&&("file"===this._scheme&&0===this._path.length&&2===h.length&&m.test(h[0])&&"|"===h[1]&&(h=h[0]+":"),this._path.push(h)),h="","?"===y?(this._query="?",u="query"):"#"===y&&(this._fragment="#",u="fragment")}break
case"query":i||"#"!==y?y!==p&&"\t"!==y&&"\n"!==y&&"\r"!==y&&(this._query+=o(y)):(this._fragment="#",u="fragment")
break
case"fragment":y!==p&&"\t"!==y&&"\n"!==y&&"\r"!==y&&(this._fragment+=y)}c++}}function l(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function u(e,t){void 0===t||t instanceof u||(t=new u(String(t))),this._url=e,l.call(this)
var r=e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"")
s.call(this,r,null,t)}var c=!1
try{if("function"==typeof URL&&"object"===n(URL.prototype)&&"origin"in URL.prototype){var h=new URL("b","http://a")
h.pathname="c%20d",c="http://a/c%20d"===h.href}}catch(e){}if(!c){var d=Object.create(null)
d.ftp=21,d.file=0,d.gopher=70,d.http=80,d.https=443,d.ws=80,d.wss=443
var f=Object.create(null)
f["%2e"]=".",f[".%2e"]="..",f["%2e."]="..",f["%2e%2e"]=".."
var p,m=/[a-zA-Z]/,g=/[a-zA-Z0-9\+\-\.]/
u.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url
var e=""
return""===this._username&&null===this._password||(e=this._username+(null!==this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+e+this.host:"")+this.pathname+this._query+this._fragment},set href(e){l.call(this),s.call(this,e)},get protocol(){return this._scheme+":"},set protocol(e){this._isInvalid||s.call(this,e+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(e){!this._isInvalid&&this._isRelative&&s.call(this,e,"host")},get hostname(){return this._host},set hostname(e){!this._isInvalid&&this._isRelative&&s.call(this,e,"hostname")},get port(){return this._port},set port(e){!this._isInvalid&&this._isRelative&&s.call(this,e,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(e){!this._isInvalid&&this._isRelative&&(this._path=[],s.call(this,e,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"===this._query?"":this._query},set search(e){!this._isInvalid&&this._isRelative&&(this._query="?","?"===e[0]&&(e=e.slice(1)),s.call(this,e,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"===this._fragment?"":this._fragment},set hash(e){this._isInvalid||(this._fragment="#","#"===e[0]&&(e=e.slice(1)),s.call(this,e,"fragment"))},get origin(){var e
if(this._isInvalid||!this._scheme)return""
switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"
case"blob":try{return new u(this._schemeData).origin||"null"}catch(e){}return"null"}return e=this.host,e?this._scheme+"://"+e:""}}
var v=i.URL
v&&(u.createObjectURL=function(e){return v.createObjectURL.apply(v,arguments)},u.revokeObjectURL=function(e){v.revokeObjectURL(e)}),i.URL=u}}()}},function(e,t,r){"use strict"
var n=!1
if("undefined"!=typeof ReadableStream)try{new ReadableStream({start:function(e){e.close()}}),n=!0}catch(e){}t.ReadableStream=n?ReadableStream:r(57).ReadableStream}])})
