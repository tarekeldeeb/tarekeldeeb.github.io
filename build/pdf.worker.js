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
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pdfjs-dist/build/pdf.worker",[],t):"object"==typeof exports?exports["pdfjs-dist/build/pdf.worker"]=t():e["pdfjs-dist/build/pdf.worker"]=e.pdfjsDistBuildPdfWorker=t()}(this,function(){return function(e){function t(a){if(r[a])return r[a].exports
var i=r[a]={i:a,l:!1,exports:{}}
return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={}
return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e}
return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=103)}([function(e,t,r){"use strict"
function a(e){se=e}function i(){return se}function n(e){se>=ie.infos&&console.log("Info: "+e)}function o(e){se>=ie.warnings&&console.log("Warning: "+e)}function s(e){console.log("Deprecated API usage: "+e)}function c(e){throw new Error(e)}function l(e,t){e||c(t)}function u(e,t){try{var r=new URL(e)
if(!r.origin||"null"===r.origin)return!1}catch(e){return!1}var a=new URL(t,r)
return r.origin===a.origin}function h(e){if(!e)return!1
switch(e.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0
default:return!1}}function f(e,t){if(!e)return null
try{var r=t?new URL(e,t):new URL(e)
if(h(r))return r}catch(e){}return null}function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!1}),r}function g(e){var t
return function(){return e&&(t=Object.create(null),e(t),e=null),t}}function m(e){return"string"!=typeof e?(o("The argument for removeNullCharacters must be a string."),e):e.replace(we,"")}function p(e){l(null!==e&&"object"===(void 0===e?"undefined":X(e))&&void 0!==e.length,"Invalid argument for bytesToString")
var t=e.length
if(t<8192)return String.fromCharCode.apply(null,e)
for(var r=[],a=0;a<t;a+=8192){var i=Math.min(a+8192,t),n=e.subarray(a,i)
r.push(String.fromCharCode.apply(null,n))}return r.join("")}function b(e){l("string"==typeof e,"Invalid argument for stringToBytes")
for(var t=e.length,r=new Uint8Array(t),a=0;a<t;++a)r[a]=255&e.charCodeAt(a)
return r}function v(e){return void 0!==e.length?e.length:(l(void 0!==e.byteLength),e.byteLength)}function y(e){if(1===e.length&&e[0]instanceof Uint8Array)return e[0]
var t,r,a,i=0,n=e.length
for(t=0;t<n;t++)r=e[t],a=v(r),i+=a
var o=0,s=new Uint8Array(i)
for(t=0;t<n;t++)r=e[t],r instanceof Uint8Array||(r="string"==typeof r?b(r):new Uint8Array(r)),a=r.byteLength,s.set(r,o),o+=a
return s}function w(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)}function k(e){for(var t=1,r=0;e>t;)t<<=1,r++
return r}function S(e,t){return e[t]<<24>>24}function C(e,t){return e[t]<<8|e[t+1]}function x(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function A(){var e=new Uint8Array(4)
return e[0]=1,1===new Uint32Array(e.buffer,0,1)[0]}function P(){try{return new Function(""),!0}catch(e){return!1}}function I(e){var t,r=e.length,a=[]
if("þ"===e[0]&&"ÿ"===e[1])for(t=2;t<r;t+=2)a.push(String.fromCharCode(e.charCodeAt(t)<<8|e.charCodeAt(t+1)))
else for(t=0;t<r;++t){var i=xe[e.charCodeAt(t)]
a.push(i?String.fromCharCode(i):e.charAt(t))}return a.join("")}function _(e){return decodeURIComponent(escape(e))}function O(e){return unescape(encodeURIComponent(e))}function T(e){for(var t in e)return!1
return!0}function E(e){return"boolean"==typeof e}function R(e){return"number"==typeof e&&(0|e)===e}function F(e){return"number"==typeof e}function B(e){return"string"==typeof e}function M(e){return e instanceof Array}function D(e){return"object"===(void 0===e?"undefined":X(e))&&null!==e&&void 0!==e.byteLength}function L(e){return 32===e||9===e||13===e||10===e}function N(){return"object"===("undefined"==typeof process?"undefined":X(process))&&process+""=="[object process]"}function U(){var e={}
return e.promise=new Promise(function(t,r){e.resolve=t,e.reject=r}),e}function j(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
return e?new Promise(function(a,i){a(e.apply(r,t))}):Promise.resolve(void 0)}function q(e){if("object"!==(void 0===e?"undefined":X(e)))return e
switch(e.name){case"AbortException":return new ye(e.message)
case"MissingPDFException":return new de(e.message)
case"UnexpectedResponseException":return new ge(e.message,e.status)
default:return new he(e.message,e.details)}}function z(e,t,r){t?e.resolve():e.reject(r)}function H(e){return Promise.resolve(e).catch(function(){})}function W(e,t,r){var a=this
this.sourceName=e,this.targetName=t,this.comObj=r,this.callbackId=1,this.streamId=1,this.postMessageTransfers=!0,this.streamSinks=Object.create(null),this.streamControllers=Object.create(null)
var i=this.callbacksCapabilities=Object.create(null),n=this.actionHandler=Object.create(null)
this._onComObjOnMessage=function(e){var t=e.data
if(t.targetName===a.sourceName)if(t.stream)a._processStreamMessage(t)
else if(t.isReply){var o=t.callbackId
if(!(t.callbackId in i))throw new Error("Cannot resolve callback "+o)
var s=i[o]
delete i[o],"error"in t?s.reject(q(t.error)):s.resolve(t.data)}else{if(!(t.action in n))throw new Error("Unknown action from worker: "+t.action)
var c=n[t.action]
if(t.callbackId){var l=a.sourceName,u=t.sourceName
Promise.resolve().then(function(){return c[0].call(c[1],t.data)}).then(function(e){r.postMessage({sourceName:l,targetName:u,isReply:!0,callbackId:t.callbackId,data:e})},function(e){e instanceof Error&&(e+=""),r.postMessage({sourceName:l,targetName:u,isReply:!0,callbackId:t.callbackId,error:e})})}else t.streamId?a._createStreamSink(t):c[0].call(c[1],t.data)}},r.addEventListener("message",this._onComObjOnMessage)}function G(e,t,r){var a=new Image
a.onload=function(){r.resolve(e,a)},a.onerror=function(){r.resolve(e,null),o("Error during JPEG image loading")},a.src=t}Object.defineProperty(t,"__esModule",{value:!0}),t.unreachable=t.warn=t.utf8StringToString=t.stringToUTF8String=t.stringToPDFString=t.stringToBytes=t.string32=t.shadow=t.setVerbosityLevel=t.ReadableStream=t.removeNullCharacters=t.readUint32=t.readUint16=t.readInt8=t.log2=t.loadJpegStream=t.isEvalSupported=t.isLittleEndian=t.createValidAbsoluteUrl=t.isSameOrigin=t.isNodeJS=t.isSpace=t.isString=t.isNum=t.isInt=t.isEmptyObj=t.isBool=t.isArrayBuffer=t.isArray=t.info=t.getVerbosityLevel=t.getLookupTableFactory=t.deprecated=t.createObjectURL=t.createPromiseCapability=t.createBlob=t.bytesToString=t.assert=t.arraysToBytes=t.arrayByteLength=t.FormatError=t.XRefParseException=t.Util=t.UnknownErrorException=t.UnexpectedResponseException=t.TextRenderingMode=t.StreamType=t.StatTimer=t.PasswordResponses=t.PasswordException=t.PageViewport=t.NotImplementedException=t.NativeImageDecoding=t.MissingPDFException=t.MissingDataException=t.MessageHandler=t.InvalidPDFException=t.AbortException=t.CMapCompressionType=t.ImageKind=t.FontType=t.AnnotationType=t.AnnotationFlag=t.AnnotationFieldFlag=t.AnnotationBorderStyleType=t.UNSUPPORTED_FEATURES=t.VERBOSITY_LEVELS=t.OPS=t.IDENTITY_MATRIX=t.FONT_IDENTITY_MATRIX=void 0
var X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
r(104)
var V=r(106),Y=[.001,0,0,.001,0,0],K={NONE:"none",DECODE:"decode",DISPLAY:"display"},J={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4},Z={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3},Q={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26},$={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512},ee={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864},te={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5},re={UNKNOWN:0,FLATE:1,LZW:2,DCT:3,JPX:4,JBIG:5,A85:6,AHX:7,CCF:8,RL:9},ae={UNKNOWN:0,TYPE1:1,TYPE1C:2,CIDFONTTYPE0:3,CIDFONTTYPE0C:4,TRUETYPE:5,CIDFONTTYPE2:6,TYPE3:7,OPENTYPE:8,TYPE0:9,MMTYPE1:10},ie={errors:0,warnings:1,infos:5},ne={NONE:0,BINARY:1,STREAM:2},oe={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91},se=ie.warnings,ce={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font"},le={NEED_PASSWORD:1,INCORRECT_PASSWORD:2},ue=function(){function e(e,t){this.name="PasswordException",this.message=e,this.code=t}return e.prototype=new Error,e.constructor=e,e}(),he=function(){function e(e,t){this.name="UnknownErrorException",this.message=e,this.details=t}return e.prototype=new Error,e.constructor=e,e}(),fe=function(){function e(e){this.name="InvalidPDFException",this.message=e}return e.prototype=new Error,e.constructor=e,e}(),de=function(){function e(e){this.name="MissingPDFException",this.message=e}return e.prototype=new Error,e.constructor=e,e}(),ge=function(){function e(e,t){this.name="UnexpectedResponseException",this.message=e,this.status=t}return e.prototype=new Error,e.constructor=e,e}(),me=function(){function e(e){this.message=e}return e.prototype=new Error,e.prototype.name="NotImplementedException",e.constructor=e,e}(),pe=function(){function e(e,t){this.begin=e,this.end=t,this.message="Missing data ["+e+", "+t+")"}return e.prototype=new Error,e.prototype.name="MissingDataException",e.constructor=e,e}(),be=function(){function e(e){this.message=e}return e.prototype=new Error,e.prototype.name="XRefParseException",e.constructor=e,e}(),ve=function(){function e(e){this.message=e}return e.prototype=new Error,e.prototype.name="FormatError",e.constructor=e,e}(),ye=function(){function e(e){this.name="AbortException",this.message=e}return e.prototype=new Error,e.constructor=e,e}(),we=/\x00/g,ke=[1,0,0,1,0,0],Se=function(){function e(){}var t=["rgb(",0,",",0,",",0,")"]
e.makeCssRgb=function(e,r,a){return t[1]=e,t[3]=r,t[5]=a,t.join("")},e.transform=function(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]},e.applyTransform=function(e,t){return[e[0]*t[0]+e[1]*t[2]+t[4],e[0]*t[1]+e[1]*t[3]+t[5]]},e.applyInverseTransform=function(e,t){var r=t[0]*t[3]-t[1]*t[2]
return[(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/r,(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/r]},e.getAxialAlignedBoundingBox=function(t,r){var a=e.applyTransform(t,r),i=e.applyTransform(t.slice(2,4),r),n=e.applyTransform([t[0],t[3]],r),o=e.applyTransform([t[2],t[1]],r)
return[Math.min(a[0],i[0],n[0],o[0]),Math.min(a[1],i[1],n[1],o[1]),Math.max(a[0],i[0],n[0],o[0]),Math.max(a[1],i[1],n[1],o[1])]},e.inverseTransform=function(e){var t=e[0]*e[3]-e[1]*e[2]
return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]},e.apply3dTransform=function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]},e.singularValueDecompose2dScale=function(e){var t=[e[0],e[2],e[1],e[3]],r=e[0]*t[0]+e[1]*t[2],a=e[0]*t[1]+e[1]*t[3],i=e[2]*t[0]+e[3]*t[2],n=e[2]*t[1]+e[3]*t[3],o=(r+n)/2,s=Math.sqrt((r+n)*(r+n)-4*(r*n-i*a))/2,c=o+s||1,l=o-s||1
return[Math.sqrt(c),Math.sqrt(l)]},e.normalizeRect=function(e){var t=e.slice(0)
return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t},e.intersect=function(t,r){function a(e,t){return e-t}var i=[t[0],t[2],r[0],r[2]].sort(a),n=[t[1],t[3],r[1],r[3]].sort(a),o=[]
return t=e.normalizeRect(t),r=e.normalizeRect(r),(i[0]===t[0]&&i[1]===r[0]||i[0]===r[0]&&i[1]===t[0])&&(o[0]=i[1],o[2]=i[2],(n[0]===t[1]&&n[1]===r[1]||n[0]===r[1]&&n[1]===t[1])&&(o[1]=n[1],o[3]=n[2],o))},e.sign=function(e){return e<0?-1:1}
var r=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"]
return e.toRoman=function(e,t){l(R(e)&&e>0,"The number should be a positive integer.")
for(var a,i=[];e>=1e3;)e-=1e3,i.push("M")
a=e/100|0,e%=100,i.push(r[a]),a=e/10|0,e%=10,i.push(r[10+a]),i.push(r[20+e])
var n=i.join("")
return t?n.toLowerCase():n},e.appendToArray=function(e,t){Array.prototype.push.apply(e,t)},e.prependToArray=function(e,t){Array.prototype.unshift.apply(e,t)},e.extendObj=function(e,t){for(var r in t)e[r]=t[r]},e.getInheritableProperty=function(e,t,r){for(;e&&!e.has(t);)e=e.get("Parent")
return e?r?e.getArray(t):e.get(t):null},e.inherit=function(e,t,r){e.prototype=Object.create(t.prototype),e.prototype.constructor=e
for(var a in r)e.prototype[a]=r[a]},e.loadScript=function(e,t){var r=document.createElement("script"),a=!1
r.setAttribute("src",e),t&&(r.onload=function(){a||t(),a=!0}),document.getElementsByTagName("head")[0].appendChild(r)},e}(),Ce=function(){function e(e,t,r,a,i,n){this.viewBox=e,this.scale=t,this.rotation=r,this.offsetX=a,this.offsetY=i
var o,s,c,l,u=(e[2]+e[0])/2,h=(e[3]+e[1])/2
switch(r%=360,r=r<0?r+360:r){case 180:o=-1,s=0,c=0,l=1
break
case 90:o=0,s=1,c=1,l=0
break
case 270:o=0,s=-1,c=-1,l=0
break
default:o=1,s=0,c=0,l=-1}n&&(c=-c,l=-l)
var f,d,g,m
0===o?(f=Math.abs(h-e[1])*t+a,d=Math.abs(u-e[0])*t+i,g=Math.abs(e[3]-e[1])*t,m=Math.abs(e[2]-e[0])*t):(f=Math.abs(u-e[0])*t+a,d=Math.abs(h-e[1])*t+i,g=Math.abs(e[2]-e[0])*t,m=Math.abs(e[3]-e[1])*t),this.transform=[o*t,s*t,c*t,l*t,f-o*t*u-c*t*h,d-s*t*u-l*t*h],this.width=g,this.height=m,this.fontScale=t}return e.prototype={clone:function(t){t=t||{}
var r="scale"in t?t.scale:this.scale,a="rotation"in t?t.rotation:this.rotation
return new e(this.viewBox.slice(),r,a,this.offsetX,this.offsetY,t.dontFlip)},convertToViewportPoint:function(e,t){return Se.applyTransform([e,t],this.transform)},convertToViewportRectangle:function(e){var t=Se.applyTransform([e[0],e[1]],this.transform),r=Se.applyTransform([e[2],e[3]],this.transform)
return[t[0],t[1],r[0],r[1]]},convertToPdfPoint:function(e,t){return Se.applyInverseTransform([e,t],this.transform)}},e}(),xe=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364],Ae=function(){function e(e,t,r){for(;e.length<r;)e+=t
return e}function t(){this.started=Object.create(null),this.times=[],this.enabled=!0}return t.prototype={time:function(e){this.enabled&&(e in this.started&&o("Timer is already running for "+e),this.started[e]=Date.now())},timeEnd:function(e){this.enabled&&(e in this.started||o("Timer has not been started for "+e),this.times.push({name:e,start:this.started[e],end:Date.now()}),delete this.started[e])},toString:function(){var t,r,a=this.times,i="",n=0
for(t=0,r=a.length;t<r;++t){var o=a[t].name
o.length>n&&(n=o.length)}for(t=0,r=a.length;t<r;++t){var s=a[t],c=s.end-s.start
i+=e(s.name," ",n)+" "+c+"ms\n"}return i}},t}(),Pe=function(e,t){if("undefined"!=typeof Blob)return new Blob([e],{type:t})
throw new Error('The "Blob" constructor is not supported.')},Ie=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
return function(t,r){if(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&URL.createObjectURL){var a=Pe(t,r)
return URL.createObjectURL(a)}for(var i="data:"+r+";base64,",n=0,o=t.length;n<o;n+=3){var s=255&t[n],c=255&t[n+1],l=255&t[n+2]
i+=e[s>>2]+e[(3&s)<<4|c>>4]+e[n+1<o?(15&c)<<2|l>>6:64]+e[n+2<o?63&l:64]}return i}}()
W.prototype={on:function(e,t,r){var a=this.actionHandler
if(a[e])throw new Error('There is already an actionName called "'+e+'"')
a[e]=[t,r]},send:function(e,t,r){var a={sourceName:this.sourceName,targetName:this.targetName,action:e,data:t}
this.postMessage(a,r)},sendWithPromise:function(e,t,r){var a=this.callbackId++,i={sourceName:this.sourceName,targetName:this.targetName,action:e,data:t,callbackId:a},n=U()
this.callbacksCapabilities[a]=n
try{this.postMessage(i,r)}catch(e){n.reject(e)}return n.promise},sendWithStream:function(e,t,r,a){var i=this,n=this.streamId++,o=this.sourceName,s=this.targetName
return new V.ReadableStream({start:function(r){var a=U()
return i.streamControllers[n]={controller:r,startCall:a,isClosed:!1},i.postMessage({sourceName:o,targetName:s,action:e,streamId:n,data:t,desiredSize:r.desiredSize}),a.promise},pull:function(e){var t=U()
return i.streamControllers[n].pullCall=t,i.postMessage({sourceName:o,targetName:s,stream:"pull",streamId:n,desiredSize:e.desiredSize}),t.promise},cancel:function(e){var t=U()
return i.streamControllers[n].cancelCall=t,i.streamControllers[n].isClosed=!0,i.postMessage({sourceName:o,targetName:s,stream:"cancel",reason:e,streamId:n}),t.promise}},r)},_createStreamSink:function(e){var t=this,r=this,a=this.actionHandler[e.action],i=e.streamId,n=e.desiredSize,o=this.sourceName,s=e.sourceName,c=U(),l=function(e){var r=e.stream,a=e.chunk,n=e.transfers,c=e.success,l=e.reason
t.postMessage({sourceName:o,targetName:s,stream:r,streamId:i,chunk:a,success:c,reason:l},n)},u={enqueue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments[2]
if(!this.isCancelled){var a=this.desiredSize
this.desiredSize-=t,a>0&&this.desiredSize<=0&&(this.sinkCapability=U(),this.ready=this.sinkCapability.promise),l({stream:"enqueue",chunk:e,transfers:r})}},close:function(){this.isCancelled||(this.isCancelled=!0,l({stream:"close"}),delete r.streamSinks[i])},error:function(e){this.isCancelled||(this.isCancelled=!0,l({stream:"error",reason:e}))},sinkCapability:c,onPull:null,onCancel:null,isCancelled:!1,desiredSize:n,ready:null}
u.sinkCapability.resolve(),u.ready=u.sinkCapability.promise,this.streamSinks[i]=u,j(a[0],[e.data,u],a[1]).then(function(){l({stream:"start_complete",success:!0})},function(e){l({stream:"start_complete",success:!1,reason:e})})},_processStreamMessage:function(e){var t=this,r=this.sourceName,a=e.sourceName,i=e.streamId,n=function(e){var n=e.stream,o=e.success,s=e.reason
t.comObj.postMessage({sourceName:r,targetName:a,stream:n,success:o,streamId:i,reason:s})},o=function(){Promise.all([t.streamControllers[e.streamId].startCall,t.streamControllers[e.streamId].pullCall,t.streamControllers[e.streamId].cancelCall].map(function(e){return e&&H(e.promise)})).then(function(){delete t.streamControllers[e.streamId]})}
switch(e.stream){case"start_complete":z(this.streamControllers[e.streamId].startCall,e.success,q(e.reason))
break
case"pull_complete":z(this.streamControllers[e.streamId].pullCall,e.success,q(e.reason))
break
case"pull":if(!this.streamSinks[e.streamId]){n({stream:"pull_complete",success:!0})
break}this.streamSinks[e.streamId].desiredSize<=0&&e.desiredSize>0&&this.streamSinks[e.streamId].sinkCapability.resolve(),this.streamSinks[e.streamId].desiredSize=e.desiredSize,j(this.streamSinks[e.streamId].onPull).then(function(){n({stream:"pull_complete",success:!0})},function(e){n({stream:"pull_complete",success:!1,reason:e})})
break
case"enqueue":l(this.streamControllers[e.streamId],"enqueue should have stream controller"),this.streamControllers[e.streamId].isClosed||this.streamControllers[e.streamId].controller.enqueue(e.chunk)
break
case"close":if(l(this.streamControllers[e.streamId],"close should have stream controller"),this.streamControllers[e.streamId].isClosed)break
this.streamControllers[e.streamId].isClosed=!0,this.streamControllers[e.streamId].controller.close(),o()
break
case"error":l(this.streamControllers[e.streamId],"error should have stream controller"),this.streamControllers[e.streamId].controller.error(q(e.reason)),o()
break
case"cancel_complete":z(this.streamControllers[e.streamId].cancelCall,e.success,q(e.reason)),o()
break
case"cancel":if(!this.streamSinks[e.streamId])break
j(this.streamSinks[e.streamId].onCancel,[q(e.reason)]).then(function(){n({stream:"cancel_complete",success:!0})},function(e){n({stream:"cancel_complete",success:!1,reason:e})}),this.streamSinks[e.streamId].sinkCapability.reject(q(e.reason)),this.streamSinks[e.streamId].isCancelled=!0,delete this.streamSinks[e.streamId]
break
default:throw new Error("Unexpected stream case")}},postMessage:function(e,t){t&&this.postMessageTransfers?this.comObj.postMessage(e,t):this.comObj.postMessage(e)},destroy:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}},t.FONT_IDENTITY_MATRIX=Y,t.IDENTITY_MATRIX=ke,t.OPS=oe,t.VERBOSITY_LEVELS=ie,t.UNSUPPORTED_FEATURES=ce,t.AnnotationBorderStyleType=te,t.AnnotationFieldFlag=ee,t.AnnotationFlag=$,t.AnnotationType=Q,t.FontType=ae,t.ImageKind=Z,t.CMapCompressionType=ne,t.AbortException=ye,t.InvalidPDFException=fe,t.MessageHandler=W,t.MissingDataException=pe,t.MissingPDFException=de,t.NativeImageDecoding=K,t.NotImplementedException=me,t.PageViewport=Ce,t.PasswordException=ue,t.PasswordResponses=le,t.StatTimer=Ae,t.StreamType=re,t.TextRenderingMode=J,t.UnexpectedResponseException=ge,t.UnknownErrorException=he,t.Util=Se,t.XRefParseException=be,t.FormatError=ve,t.arrayByteLength=v,t.arraysToBytes=y,t.assert=l,t.bytesToString=p,t.createBlob=Pe,t.createPromiseCapability=U,t.createObjectURL=Ie,t.deprecated=s,t.getLookupTableFactory=g,t.getVerbosityLevel=i,t.info=n,t.isArray=M,t.isArrayBuffer=D,t.isBool=E,t.isEmptyObj=T,t.isInt=R,t.isNum=F,t.isString=B,t.isSpace=L,t.isNodeJS=N,t.isSameOrigin=u,t.createValidAbsoluteUrl=f,t.isLittleEndian=A,t.isEvalSupported=P,t.loadJpegStream=G,t.log2=k,t.readInt8=S,t.readUint16=C,t.readUint32=x,t.removeNullCharacters=m,t.ReadableStream=V.ReadableStream,t.setVerbosityLevel=a,t.shadow=d,t.string32=w,t.stringToBytes=b,t.stringToPDFString=I,t.stringToUTF8String=_,t.utf8StringToString=O,t.warn=o,t.unreachable=c},function(e,t,r){"use strict"
function a(e){return e===f}function i(e,t){return e instanceof d&&(void 0===t||e.name===t)}function n(e,t){return e instanceof g&&(void 0===t||e.cmd===t)}function o(e,t){return e instanceof m&&(void 0===t||i(e.get("Type"),t))}function s(e){return e instanceof p}function c(e,t){return e.num===t.num&&e.gen===t.gen}function l(e){return"object"===(void 0===e?"undefined":u(e))&&null!==e&&void 0!==e.getBytes}Object.defineProperty(t,"__esModule",{value:!0}),t.isStream=t.isRefsEqual=t.isRef=t.isName=t.isDict=t.isCmd=t.isEOF=t.RefSetCache=t.RefSet=t.Ref=t.Name=t.Dict=t.Cmd=t.EOF=void 0
var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=r(0),f={},d=function(){function e(e){this.name=e}e.prototype={}
var t=Object.create(null)
return e.get=function(r){var a=t[r]
return a||(t[r]=new e(r))},e}(),g=function(){function e(e){this.cmd=e}e.prototype={}
var t=Object.create(null)
return e.get=function(r){var a=t[r]
return a||(t[r]=new e(r))},e}(),m=function(){function e(e){this._map=Object.create(null),this.xref=e,this.objId=null,this.suppressEncryption=!1,this.__nonSerializable__=t}var t=function(){return t}
return e.prototype={assignXref:function(e){this.xref=e},get:function(e,t,r){var a,i=this.xref,n=this.suppressEncryption
return void 0!==(a=this._map[e])||e in this._map||void 0===t?i?i.fetchIfRef(a,n):a:void 0!==(a=this._map[t])||t in this._map||void 0===r?i?i.fetchIfRef(a,n):a:(a=this._map[r]||null,i?i.fetchIfRef(a,n):a)},getAsync:function(e,t,r){var a,i=this.xref,n=this.suppressEncryption
return void 0!==(a=this._map[e])||e in this._map||void 0===t?i?i.fetchIfRefAsync(a,n):Promise.resolve(a):void 0!==(a=this._map[t])||t in this._map||void 0===r?i?i.fetchIfRefAsync(a,n):Promise.resolve(a):(a=this._map[r]||null,i?i.fetchIfRefAsync(a,n):Promise.resolve(a))},getArray:function(e,t,r){var a=this.get(e,t,r),i=this.xref,n=this.suppressEncryption
if(!(0,h.isArray)(a)||!i)return a
a=a.slice()
for(var o=0,c=a.length;o<c;o++)s(a[o])&&(a[o]=i.fetch(a[o],n))
return a},getRaw:function(e){return this._map[e]},getKeys:function(){return Object.keys(this._map)},set:function(e,t){this._map[e]=t},has:function(e){return e in this._map},forEach:function(e){for(var t in this._map)e(t,this.get(t))}},e.empty=new e(null),e.merge=function(t,r){for(var a=new e(t),i=0,n=r.length;i<n;i++){var s=r[i]
if(o(s))for(var c in s._map)void 0===a._map[c]&&(a._map[c]=s._map[c])}return a},e}(),p=function(){function e(e,t){this.num=e,this.gen=t}return e.prototype={toString:function(){var e=this.num+"R"
return 0!==this.gen&&(e+=this.gen),e}},e}(),b=function(){function e(){this.dict=Object.create(null)}return e.prototype={has:function(e){return e.toString()in this.dict},put:function(e){this.dict[e.toString()]=!0},remove:function(e){delete this.dict[e.toString()]}},e}(),v=function(){function e(){this.dict=Object.create(null)}return e.prototype={get:function(e){return this.dict[e.toString()]},has:function(e){return e.toString()in this.dict},put:function(e,t){this.dict[e.toString()]=t},putAlias:function(e,t){this.dict[e.toString()]=this.get(t)},forEach:function(e,t){for(var r in this.dict)e.call(t,this.dict[r])},clear:function(){this.dict=Object.create(null)}},e}()
t.EOF=f,t.Cmd=g,t.Dict=m,t.Name=d,t.Ref=p,t.RefSet=b,t.RefSetCache=v,t.isEOF=a,t.isCmd=n,t.isDict=o,t.isName=i,t.isRef=s,t.isRefsEqual=c,t.isStream=l},function(e,t,r){"use strict"
var a=r(49)("wks"),i=r(14),n=r(4).Symbol,o="function"==typeof n;(e.exports=function(e){return a[e]||(a[e]=o&&n[e]||(o?n:i)("Symbol."+e))}).store=a},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.LZWStream=t.StringStream=t.StreamsSequenceStream=t.Stream=t.RunLengthStream=t.PredictorStream=t.NullStream=t.JpxStream=t.JpegStream=t.Jbig2Stream=t.FlateStream=t.DecodeStream=t.DecryptStream=t.CCITTFaxStream=t.AsciiHexStream=t.Ascii85Stream=void 0
var a=r(0),i=r(1),n=r(95),o=r(96),s=r(57),c=function(){function e(e,t,r,a){this.bytes=e instanceof Uint8Array?e:new Uint8Array(e),this.start=t||0,this.pos=this.start,this.end=t+r||this.bytes.length,this.dict=a}return e.prototype={get length(){return this.end-this.start},get isEmpty(){return 0===this.length},getByte:function(){return this.pos>=this.end?-1:this.bytes[this.pos++]},getUint16:function(){var e=this.getByte(),t=this.getByte()
return-1===e||-1===t?-1:(e<<8)+t},getInt32:function(){return(this.getByte()<<24)+(this.getByte()<<16)+(this.getByte()<<8)+this.getByte()},getBytes:function(e){var t=this.bytes,r=this.pos,a=this.end
if(!e)return t.subarray(r,a)
var i=r+e
return i>a&&(i=a),this.pos=i,t.subarray(r,i)},peekByte:function(){var e=this.getByte()
return this.pos--,e},peekBytes:function(e){var t=this.getBytes(e)
return this.pos-=t.length,t},skip:function(e){e||(e=1),this.pos+=e},reset:function(){this.pos=this.start},moveStart:function(){this.start=this.pos},makeSubStream:function(t,r,a){return new e(this.bytes.buffer,t,r,a)}},e}(),l=function(){function e(e){for(var t=e.length,r=new Uint8Array(t),a=0;a<t;++a)r[a]=e.charCodeAt(a)
c.call(this,r)}return e.prototype=c.prototype,e}(),u=function(){function e(e){if(this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=t,this.minBufferLength=512,e)for(;this.minBufferLength<e;)this.minBufferLength*=2}var t=new Uint8Array(0)
return e.prototype={get isEmpty(){for(;!this.eof&&0===this.bufferLength;)this.readBlock()
return 0===this.bufferLength},ensureBuffer:function(e){var t=this.buffer
if(e<=t.byteLength)return t
for(var r=this.minBufferLength;r<e;)r*=2
var a=new Uint8Array(r)
return a.set(t),this.buffer=a},getByte:function(){for(var e=this.pos;this.bufferLength<=e;){if(this.eof)return-1
this.readBlock()}return this.buffer[this.pos++]},getUint16:function(){var e=this.getByte(),t=this.getByte()
return-1===e||-1===t?-1:(e<<8)+t},getInt32:function(){return(this.getByte()<<24)+(this.getByte()<<16)+(this.getByte()<<8)+this.getByte()},getBytes:function(e){var t,r=this.pos
if(e){for(this.ensureBuffer(r+e),t=r+e;!this.eof&&this.bufferLength<t;)this.readBlock()
var a=this.bufferLength
t>a&&(t=a)}else{for(;!this.eof;)this.readBlock()
t=this.bufferLength}return this.pos=t,this.buffer.subarray(r,t)},peekByte:function(){var e=this.getByte()
return this.pos--,e},peekBytes:function(e){var t=this.getBytes(e)
return this.pos-=t.length,t},makeSubStream:function(e,t,r){for(var a=e+t;this.bufferLength<=a&&!this.eof;)this.readBlock()
return new c(this.buffer,e,t,r)},skip:function(e){e||(e=1),this.pos+=e},reset:function(){this.pos=0},getBaseStreams:function(){return this.str&&this.str.getBaseStreams?this.str.getBaseStreams():[]}},e}(),h=function(){function e(e){this.streams=e,u.call(this,null)}return e.prototype=Object.create(u.prototype),e.prototype.readBlock=function(){var e=this.streams
if(0===e.length)return void(this.eof=!0)
var t=e.shift(),r=t.getBytes(),a=this.bufferLength,i=a+r.length
this.ensureBuffer(i).set(r,a),this.bufferLength=i},e.prototype.getBaseStreams=function(){for(var e=[],t=0,r=this.streams.length;t<r;t++){var i=this.streams[t]
i.getBaseStreams&&a.Util.appendToArray(e,i.getBaseStreams())}return e},e}(),f=function(){function e(e,t){this.str=e,this.dict=e.dict
var r=e.getByte(),i=e.getByte()
if(-1===r||-1===i)throw new a.FormatError("Invalid header in flate stream: "+r+", "+i)
if(8!=(15&r))throw new a.FormatError("Unknown compression method in flate stream: "+r+", "+i)
if(((r<<8)+i)%31!=0)throw new a.FormatError("Bad FCHECK in flate stream: "+r+", "+i)
if(32&i)throw new a.FormatError("FDICT bit set in flate stream: "+r+", "+i)
this.codeSize=0,this.codeBuf=0,u.call(this,t)}var t=new Int32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),r=new Int32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),i=new Int32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),n=[new Int32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],o=[new Int32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5]
return e.prototype=Object.create(u.prototype),e.prototype.getBits=function(e){for(var t,r=this.str,i=this.codeSize,n=this.codeBuf;i<e;){if(-1===(t=r.getByte()))throw new a.FormatError("Bad encoding in flate stream")
n|=t<<i,i+=8}return t=n&(1<<e)-1,this.codeBuf=n>>e,this.codeSize=i-=e,t},e.prototype.getCode=function(e){for(var t,r=this.str,i=e[0],n=e[1],o=this.codeSize,s=this.codeBuf;o<n&&-1!==(t=r.getByte());)s|=t<<o,o+=8
var c=i[s&(1<<n)-1],l=c>>16,u=65535&c
if(l<1||o<l)throw new a.FormatError("Bad encoding in flate stream")
return this.codeBuf=s>>l,this.codeSize=o-l,u},e.prototype.generateHuffmanTable=function(e){var t,r=e.length,a=0
for(t=0;t<r;++t)e[t]>a&&(a=e[t])
for(var i=1<<a,n=new Int32Array(i),o=1,s=0,c=2;o<=a;++o,s<<=1,c<<=1)for(var l=0;l<r;++l)if(e[l]===o){var u=0,h=s
for(t=0;t<o;++t)u=u<<1|1&h,h>>=1
for(t=u;t<i;t+=c)n[t]=o<<16|l;++s}return[n,a]},e.prototype.readBlock=function(){var e,s,c=this.str,l=this.getBits(3)
if(1&l&&(this.eof=!0),0!==(l>>=1)){var u,h
if(1===l)u=n,h=o
else{if(2!==l)throw new a.FormatError("Unknown block type in flate stream")
var f,d=this.getBits(5)+257,g=this.getBits(5)+1,m=this.getBits(4)+4,p=new Uint8Array(t.length)
for(f=0;f<m;++f)p[t[f]]=this.getBits(3)
var b=this.generateHuffmanTable(p)
s=0,f=0
for(var v,y,w,k=d+g,S=new Uint8Array(k);f<k;){var C=this.getCode(b)
if(16===C)v=2,y=3,w=s
else if(17===C)v=3,y=3,w=s=0
else{if(18!==C){S[f++]=s=C
continue}v=7,y=11,w=s=0}for(var x=this.getBits(v)+y;x-- >0;)S[f++]=w}u=this.generateHuffmanTable(S.subarray(0,d)),h=this.generateHuffmanTable(S.subarray(d,k))}e=this.buffer
for(var A=e?e.length:0,P=this.bufferLength;;){var I=this.getCode(u)
if(I<256)P+1>=A&&(e=this.ensureBuffer(P+1),A=e.length),e[P++]=I
else{if(256===I)return void(this.bufferLength=P)
I-=257,I=r[I]
var _=I>>16
_>0&&(_=this.getBits(_)),s=(65535&I)+_,I=this.getCode(h),I=i[I],_=I>>16,_>0&&(_=this.getBits(_))
var O=(65535&I)+_
P+s>=A&&(e=this.ensureBuffer(P+s),A=e.length)
for(var T=0;T<s;++T,++P)e[P]=e[P-O]}}}else{var E
if(-1===(E=c.getByte()))throw new a.FormatError("Bad block header in flate stream")
var R=E
if(-1===(E=c.getByte()))throw new a.FormatError("Bad block header in flate stream")
if(R|=E<<8,-1===(E=c.getByte()))throw new a.FormatError("Bad block header in flate stream")
var F=E
if(-1===(E=c.getByte()))throw new a.FormatError("Bad block header in flate stream")
if((F|=E<<8)!==(65535&~R)&&(0!==R||0!==F))throw new a.FormatError("Bad uncompressed block length in flate stream")
this.codeBuf=0,this.codeSize=0
var B=this.bufferLength
e=this.ensureBuffer(B+R)
var M=B+R
if(this.bufferLength=M,0===R)-1===c.peekByte()&&(this.eof=!0)
else for(var D=B;D<M;++D){if(-1===(E=c.getByte())){this.eof=!0
break}e[D]=E}}},e}(),d=function(){function e(e,t,r){if(!(0,i.isDict)(r))return e
var n=this.predictor=r.get("Predictor")||1
if(n<=1)return e
if(2!==n&&(n<10||n>15))throw new a.FormatError("Unsupported predictor: "+n)
this.readBlock=2===n?this.readBlockTiff:this.readBlockPng,this.str=e,this.dict=e.dict
var o=this.colors=r.get("Colors")||1,s=this.bits=r.get("BitsPerComponent")||8,c=this.columns=r.get("Columns")||1
return this.pixBytes=o*s+7>>3,this.rowBytes=c*o*s+7>>3,u.call(this,t),this}return e.prototype=Object.create(u.prototype),e.prototype.readBlockTiff=function(){var e=this.rowBytes,t=this.bufferLength,r=this.ensureBuffer(t+e),a=this.bits,i=this.colors,n=this.str.getBytes(e)
if(this.eof=!n.length,!this.eof){var o,s=0,c=0,l=0,u=0,h=t
if(1===a&&1===i)for(o=0;o<e;++o){var f=n[o]^s
f^=f>>1,f^=f>>2,f^=f>>4,s=(1&f)<<7,r[h++]=f}else if(8===a){for(o=0;o<i;++o)r[h++]=n[o]
for(;o<e;++o)r[h]=r[h-i]+n[o],h++}else{var d=new Uint8Array(i+1),g=(1<<a)-1,m=0,p=t,b=this.columns
for(o=0;o<b;++o)for(var v=0;v<i;++v)l<a&&(s=s<<8|255&n[m++],l+=8),d[v]=d[v]+(s>>l-a)&g,l-=a,c=c<<a|d[v],(u+=a)>=8&&(r[p++]=c>>u-8&255,u-=8)
u>0&&(r[p++]=(c<<8-u)+(s&(1<<8-u)-1))}this.bufferLength+=e}},e.prototype.readBlockPng=function(){var e=this.rowBytes,t=this.pixBytes,r=this.str.getByte(),i=this.str.getBytes(e)
if(this.eof=!i.length,!this.eof){var n=this.bufferLength,o=this.ensureBuffer(n+e),s=o.subarray(n-e,n)
0===s.length&&(s=new Uint8Array(e))
var c,l,u,h=n
switch(r){case 0:for(c=0;c<e;++c)o[h++]=i[c]
break
case 1:for(c=0;c<t;++c)o[h++]=i[c]
for(;c<e;++c)o[h]=o[h-t]+i[c]&255,h++
break
case 2:for(c=0;c<e;++c)o[h++]=s[c]+i[c]&255
break
case 3:for(c=0;c<t;++c)o[h++]=(s[c]>>1)+i[c]
for(;c<e;++c)o[h]=(s[c]+o[h-t]>>1)+i[c]&255,h++
break
case 4:for(c=0;c<t;++c)l=s[c],u=i[c],o[h++]=l+u
for(;c<e;++c){l=s[c]
var f=s[c-t],d=o[h-t],g=d+l-f,m=g-d
m<0&&(m=-m)
var p=g-l
p<0&&(p=-p)
var b=g-f
b<0&&(b=-b),u=i[c],o[h++]=m<=p&&m<=b?d+u:p<=b?l+u:f+u}break
default:throw new a.FormatError("Unsupported predictor: "+r)}this.bufferLength+=e}},e}(),g=function(){function e(e,t,r,a){for(var i;-1!==(i=e.getByte());)if(255===i){e.skip(-1)
break}this.stream=e,this.maybeLength=t,this.dict=r,this.params=a,u.call(this,t)}return e.prototype=Object.create(u.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return(0,a.shadow)(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){if(!this.bufferLength){var t=new o.JpegImage,r=this.dict.getArray("Decode","D")
if(this.forceRGB&&(0,a.isArray)(r)){for(var n=this.dict.get("BitsPerComponent")||8,s=r.length,c=new Int32Array(s),l=!1,u=(1<<n)-1,h=0;h<s;h+=2)c[h]=256*(r[h+1]-r[h])|0,c[h+1]=r[h]*u|0,256===c[h]&&0===c[h+1]||(l=!0)
l&&(t.decodeTransform=c)}if((0,i.isDict)(this.params)){var f=this.params.get("ColorTransform");(0,a.isInt)(f)&&(t.colorTransform=f)}t.parse(this.bytes)
var d=t.getData(this.drawWidth,this.drawHeight,this.forceRGB)
this.buffer=d,this.bufferLength=d.length,this.eof=!0}},e.prototype.getBytes=function(e){return this.ensureBuffer(),this.buffer},e.prototype.getIR=function(e){return(0,a.createObjectURL)(this.bytes,"image/jpeg",e)},e}(),m=function(){function e(e,t,r,a){this.stream=e,this.maybeLength=t,this.dict=r,this.params=a,u.call(this,t)}return e.prototype=Object.create(u.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return(0,a.shadow)(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){if(!this.bufferLength){var t=new s.JpxImage
t.parse(this.bytes)
var r=t.width,a=t.height,i=t.componentsCount,n=t.tiles.length
if(1===n)this.buffer=t.tiles[0].items
else{for(var o=new Uint8ClampedArray(r*a*i),c=0;c<n;c++)for(var l=t.tiles[c],u=l.width,h=l.height,f=l.left,d=l.top,g=l.items,m=0,p=(r*d+f)*i,b=r*i,v=u*i,y=0;y<h;y++){var w=g.subarray(m,m+v)
o.set(w,p),m+=v,p+=b}this.buffer=o}this.bufferLength=this.buffer.length,this.eof=!0}},e}(),p=function(){function e(e,t,r,a){this.stream=e,this.maybeLength=t,this.dict=r,this.params=a,u.call(this,t)}return e.prototype=Object.create(u.prototype),Object.defineProperty(e.prototype,"bytes",{get:function(){return(0,a.shadow)(this,"bytes",this.stream.getBytes(this.maybeLength))},configurable:!0}),e.prototype.ensureBuffer=function(e){if(!this.bufferLength){var t=new n.Jbig2Image,r=[]
if((0,i.isDict)(this.params)){var a=this.params.get("JBIG2Globals")
if((0,i.isStream)(a)){var o=a.getBytes()
r.push({data:o,start:0,end:o.length})}}r.push({data:this.bytes,start:0,end:this.bytes.length})
for(var s=t.parseChunks(r),c=s.length,l=0;l<c;l++)s[l]^=255
this.buffer=s,this.bufferLength=c,this.eof=!0}},e}(),b=function(){function e(e,t,r){this.str=e,this.dict=e.dict,this.decrypt=r,this.nextChunk=null,this.initialized=!1,u.call(this,t)}return e.prototype=Object.create(u.prototype),e.prototype.readBlock=function(){var e
if(this.initialized?e=this.nextChunk:(e=this.str.getBytes(512),this.initialized=!0),!e||0===e.length)return void(this.eof=!0)
this.nextChunk=this.str.getBytes(512)
var t=this.nextChunk&&this.nextChunk.length>0
e=(0,this.decrypt)(e,!t)
var r,a=this.bufferLength,i=e.length,n=this.ensureBuffer(a+i)
for(r=0;r<i;r++)n[a++]=e[r]
this.bufferLength=a},e}(),v=function(){function e(e,t){this.str=e,this.dict=e.dict,this.input=new Uint8Array(5),t&&(t*=.8),u.call(this,t)}return e.prototype=Object.create(u.prototype),e.prototype.readBlock=function(){for(var e=this.str,t=e.getByte();(0,a.isSpace)(t);)t=e.getByte()
if(-1===t||126===t)return void(this.eof=!0)
var r,i,n=this.bufferLength
if(122===t){for(r=this.ensureBuffer(n+4),i=0;i<4;++i)r[n+i]=0
this.bufferLength+=4}else{var o=this.input
for(o[0]=t,i=1;i<5;++i){for(t=e.getByte();(0,a.isSpace)(t);)t=e.getByte()
if(o[i]=t,-1===t||126===t)break}if(r=this.ensureBuffer(n+i-1),this.bufferLength+=i-1,i<5){for(;i<5;++i)o[i]=117
this.eof=!0}var s=0
for(i=0;i<5;++i)s=85*s+(o[i]-33)
for(i=3;i>=0;--i)r[n+i]=255&s,s>>=8}},e}(),y=function(){function e(e,t){this.str=e,this.dict=e.dict,this.firstDigit=-1,t&&(t*=.5),u.call(this,t)}return e.prototype=Object.create(u.prototype),e.prototype.readBlock=function(){var e=this.str.getBytes(8e3)
if(!e.length)return void(this.eof=!0)
for(var t=e.length+1>>1,r=this.ensureBuffer(this.bufferLength+t),a=this.bufferLength,i=this.firstDigit,n=0,o=e.length;n<o;n++){var s,c=e[n]
if(c>=48&&c<=57)s=15&c
else{if(!(c>=65&&c<=70||c>=97&&c<=102)){if(62===c){this.eof=!0
break}continue}s=9+(15&c)}i<0?i=s:(r[a++]=i<<4|s,i=-1)}i>=0&&this.eof&&(r[a++]=i<<4,i=-1),this.firstDigit=i,this.bufferLength=a},e}(),w=function(){function e(e,t){this.str=e,this.dict=e.dict,u.call(this,t)}return e.prototype=Object.create(u.prototype),e.prototype.readBlock=function(){var e=this.str.getBytes(2)
if(!e||e.length<2||128===e[0])return void(this.eof=!0)
var t,r=this.bufferLength,a=e[0]
if(a<128){if(t=this.ensureBuffer(r+a+1),t[r++]=e[1],a>0){var i=this.str.getBytes(a)
t.set(i,r),r+=a}}else{a=257-a
var n=e[1]
t=this.ensureBuffer(r+a+1)
for(var o=0;o<a;o++)t[r++]=n}this.bufferLength=r},e}(),k=function(){function e(e,t,r){this.str=e,this.dict=e.dict,r=r||i.Dict.empty,this.encoding=r.get("K")||0,this.eoline=r.get("EndOfLine")||!1,this.byteAlign=r.get("EncodedByteAlign")||!1,this.columns=r.get("Columns")||1728,this.rows=r.get("Rows")||0
var a=r.get("EndOfBlock")
null!==a&&void 0!==a||(a=!0),this.eoblock=a,this.black=r.get("BlackIs1")||!1,this.codingLine=new Uint32Array(this.columns+1),this.refLine=new Uint32Array(this.columns+2),this.codingLine[0]=this.columns,this.codingPos=0,this.row=0,this.nextLine2D=this.encoding<0,this.inputBits=0,this.inputBuf=0,this.outputBits=0
for(var n;0===(n=this.lookBits(12));)this.eatBits(1)
1===n&&this.eatBits(12),this.encoding>0&&(this.nextLine2D=!this.lookBits(1),this.eatBits(1)),u.call(this,t)}var t=[[-1,-1],[-1,-1],[7,8],[7,7],[6,6],[6,6],[6,5],[6,5],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2]],r=[[-1,-1],[12,-2],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[11,1792],[11,1792],[12,1984],[12,2048],[12,2112],[12,2176],[12,2240],[12,2304],[11,1856],[11,1856],[11,1920],[11,1920],[12,2368],[12,2432],[12,2496],[12,2560]],n=[[-1,-1],[-1,-1],[-1,-1],[-1,-1],[8,29],[8,29],[8,30],[8,30],[8,45],[8,45],[8,46],[8,46],[7,22],[7,22],[7,22],[7,22],[7,23],[7,23],[7,23],[7,23],[8,47],[8,47],[8,48],[8,48],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[7,20],[7,20],[7,20],[7,20],[8,33],[8,33],[8,34],[8,34],[8,35],[8,35],[8,36],[8,36],[8,37],[8,37],[8,38],[8,38],[7,19],[7,19],[7,19],[7,19],[8,31],[8,31],[8,32],[8,32],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[8,53],[8,53],[8,54],[8,54],[7,26],[7,26],[7,26],[7,26],[8,39],[8,39],[8,40],[8,40],[8,41],[8,41],[8,42],[8,42],[8,43],[8,43],[8,44],[8,44],[7,21],[7,21],[7,21],[7,21],[7,28],[7,28],[7,28],[7,28],[8,61],[8,61],[8,62],[8,62],[8,63],[8,63],[8,0],[8,0],[8,320],[8,320],[8,384],[8,384],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[7,27],[7,27],[7,27],[7,27],[8,59],[8,59],[8,60],[8,60],[9,1472],[9,1536],[9,1600],[9,1728],[7,18],[7,18],[7,18],[7,18],[7,24],[7,24],[7,24],[7,24],[8,49],[8,49],[8,50],[8,50],[8,51],[8,51],[8,52],[8,52],[7,25],[7,25],[7,25],[7,25],[8,55],[8,55],[8,56],[8,56],[8,57],[8,57],[8,58],[8,58],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[8,448],[8,448],[8,512],[8,512],[9,704],[9,768],[8,640],[8,640],[8,576],[8,576],[9,832],[9,896],[9,960],[9,1024],[9,1088],[9,1152],[9,1216],[9,1280],[9,1344],[9,1408],[7,256],[7,256],[7,256],[7,256],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7]],o=[[-1,-1],[-1,-1],[12,-2],[12,-2],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[11,1792],[11,1792],[11,1792],[11,1792],[12,1984],[12,1984],[12,2048],[12,2048],[12,2112],[12,2112],[12,2176],[12,2176],[12,2240],[12,2240],[12,2304],[12,2304],[11,1856],[11,1856],[11,1856],[11,1856],[11,1920],[11,1920],[11,1920],[11,1920],[12,2368],[12,2368],[12,2432],[12,2432],[12,2496],[12,2496],[12,2560],[12,2560],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[12,52],[12,52],[13,640],[13,704],[13,768],[13,832],[12,55],[12,55],[12,56],[12,56],[13,1280],[13,1344],[13,1408],[13,1472],[12,59],[12,59],[12,60],[12,60],[13,1536],[13,1600],[11,24],[11,24],[11,24],[11,24],[11,25],[11,25],[11,25],[11,25],[13,1664],[13,1728],[12,320],[12,320],[12,384],[12,384],[12,448],[12,448],[13,512],[13,576],[12,53],[12,53],[12,54],[12,54],[13,896],[13,960],[13,1024],[13,1088],[13,1152],[13,1216],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64]],s=[[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[11,23],[11,23],[12,50],[12,51],[12,44],[12,45],[12,46],[12,47],[12,57],[12,58],[12,61],[12,256],[10,16],[10,16],[10,16],[10,16],[10,17],[10,17],[10,17],[10,17],[12,48],[12,49],[12,62],[12,63],[12,30],[12,31],[12,32],[12,33],[12,40],[12,41],[11,22],[11,22],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[12,128],[12,192],[12,26],[12,27],[12,28],[12,29],[11,19],[11,19],[11,20],[11,20],[12,34],[12,35],[12,36],[12,37],[12,38],[12,39],[11,21],[11,21],[12,42],[12,43],[10,0],[10,0],[10,0],[10,0],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12]],c=[[-1,-1],[-1,-1],[-1,-1],[-1,-1],[6,9],[6,8],[5,7],[5,7],[4,6],[4,6],[4,6],[4,6],[4,5],[4,5],[4,5],[4,5],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2]]
return e.prototype=Object.create(u.prototype),e.prototype.readBlock=function(){for(;!this.eof;){var e=this.lookChar()
this.ensureBuffer(this.bufferLength+1),this.buffer[this.bufferLength++]=e}},e.prototype.addPixels=function(e,t){var r=this.codingLine,i=this.codingPos
e>r[i]&&(e>this.columns&&((0,a.info)("row is wrong length"),this.err=!0,e=this.columns),1&i^t&&++i,r[i]=e),this.codingPos=i},e.prototype.addPixelsNeg=function(e,t){var r=this.codingLine,i=this.codingPos
if(e>r[i])e>this.columns&&((0,a.info)("row is wrong length"),this.err=!0,e=this.columns),1&i^t&&++i,r[i]=e
else if(e<r[i]){for(e<0&&((0,a.info)("invalid code"),this.err=!0,e=0);i>0&&e<r[i-1];)--i
r[i]=e}this.codingPos=i},e.prototype.lookChar=function(){var e,t,r,i,n=this.refLine,o=this.codingLine,s=this.columns
if(0===this.outputBits){if(this.eof)return null
this.err=!1
var c,l,u
if(this.nextLine2D){for(i=0;o[i]<s;++i)n[i]=o[i]
for(n[i++]=s,n[i]=s,o[0]=0,this.codingPos=0,e=0,t=0;o[this.codingPos]<s;)switch(c=this.getTwoDimCode()){case 0:this.addPixels(n[e+1],t),n[e+1]<s&&(e+=2)
break
case 1:if(c=l=0,t){do{c+=u=this.getBlackCode()}while(u>=64)
do{l+=u=this.getWhiteCode()}while(u>=64)}else{do{c+=u=this.getWhiteCode()}while(u>=64)
do{l+=u=this.getBlackCode()}while(u>=64)}for(this.addPixels(o[this.codingPos]+c,t),o[this.codingPos]<s&&this.addPixels(o[this.codingPos]+l,1^t);n[e]<=o[this.codingPos]&&n[e]<s;)e+=2
break
case 7:if(this.addPixels(n[e]+3,t),t^=1,o[this.codingPos]<s)for(++e;n[e]<=o[this.codingPos]&&n[e]<s;)e+=2
break
case 5:if(this.addPixels(n[e]+2,t),t^=1,o[this.codingPos]<s)for(++e;n[e]<=o[this.codingPos]&&n[e]<s;)e+=2
break
case 3:if(this.addPixels(n[e]+1,t),t^=1,o[this.codingPos]<s)for(++e;n[e]<=o[this.codingPos]&&n[e]<s;)e+=2
break
case 2:if(this.addPixels(n[e],t),t^=1,o[this.codingPos]<s)for(++e;n[e]<=o[this.codingPos]&&n[e]<s;)e+=2
break
case 8:if(this.addPixelsNeg(n[e]-3,t),t^=1,o[this.codingPos]<s)for(e>0?--e:++e;n[e]<=o[this.codingPos]&&n[e]<s;)e+=2
break
case 6:if(this.addPixelsNeg(n[e]-2,t),t^=1,o[this.codingPos]<s)for(e>0?--e:++e;n[e]<=o[this.codingPos]&&n[e]<s;)e+=2
break
case 4:if(this.addPixelsNeg(n[e]-1,t),t^=1,o[this.codingPos]<s)for(e>0?--e:++e;n[e]<=o[this.codingPos]&&n[e]<s;)e+=2
break
case-1:this.addPixels(s,0),this.eof=!0
break
default:(0,a.info)("bad 2d code"),this.addPixels(s,0),this.err=!0}}else for(o[0]=0,this.codingPos=0,t=0;o[this.codingPos]<s;){if(c=0,t)do{c+=u=this.getBlackCode()}while(u>=64)
else do{c+=u=this.getWhiteCode()}while(u>=64)
this.addPixels(o[this.codingPos]+c,t),t^=1}var h=!1
if(this.byteAlign&&(this.inputBits&=-8),this.eoblock||this.row!==this.rows-1){if(c=this.lookBits(12),this.eoline)for(;-1!==c&&1!==c;)this.eatBits(1),c=this.lookBits(12)
else for(;0===c;)this.eatBits(1),c=this.lookBits(12)
1===c?(this.eatBits(12),h=!0):-1===c&&(this.eof=!0)}else this.eof=!0
if(!this.eof&&this.encoding>0&&(this.nextLine2D=!this.lookBits(1),this.eatBits(1)),this.eoblock&&h&&this.byteAlign){if(1===(c=this.lookBits(12))){if(this.eatBits(12),this.encoding>0&&(this.lookBits(1),this.eatBits(1)),this.encoding>=0)for(i=0;i<4;++i)c=this.lookBits(12),1!==c&&(0,a.info)("bad rtc code: "+c),this.eatBits(12),this.encoding>0&&(this.lookBits(1),this.eatBits(1))
this.eof=!0}}else if(this.err&&this.eoline){for(;;){if(-1===(c=this.lookBits(13)))return this.eof=!0,null
if(c>>1==1)break
this.eatBits(1)}this.eatBits(12),this.encoding>0&&(this.eatBits(1),this.nextLine2D=!(1&c))}o[0]>0?this.outputBits=o[this.codingPos=0]:this.outputBits=o[this.codingPos=1],this.row++}var f
if(this.outputBits>=8)f=1&this.codingPos?0:255,this.outputBits-=8,0===this.outputBits&&o[this.codingPos]<s&&(this.codingPos++,this.outputBits=o[this.codingPos]-o[this.codingPos-1])
else{r=8,f=0
do{this.outputBits>r?(f<<=r,1&this.codingPos||(f|=255>>8-r),this.outputBits-=r,r=0):(f<<=this.outputBits,1&this.codingPos||(f|=255>>8-this.outputBits),r-=this.outputBits,this.outputBits=0,o[this.codingPos]<s?(this.codingPos++,this.outputBits=o[this.codingPos]-o[this.codingPos-1]):r>0&&(f<<=r,r=0))}while(r)}return this.black&&(f^=255),f},e.prototype.findTableCode=function(e,t,r,a){for(var i=a||0,n=e;n<=t;++n){var o=this.lookBits(n)
if(-1===o)return[!0,1,!1]
if(n<t&&(o<<=t-n),!i||o>=i){var s=r[o-i]
if(s[0]===n)return this.eatBits(n),[!0,s[1],!0]}}return[!1,0,!1]},e.prototype.getTwoDimCode=function(){var e,r=0
if(this.eoblock){if(r=this.lookBits(7),(e=t[r])&&e[0]>0)return this.eatBits(e[0]),e[1]}else{var i=this.findTableCode(1,7,t)
if(i[0]&&i[2])return i[1]}return(0,a.info)("Bad two dim code"),-1},e.prototype.getWhiteCode=function(){var e,t=0
if(this.eoblock){if(-1===(t=this.lookBits(12)))return 1
if(e=t>>5==0?r[t]:n[t>>3],e[0]>0)return this.eatBits(e[0]),e[1]}else{var i=this.findTableCode(1,9,n)
if(i[0])return i[1]
if(i=this.findTableCode(11,12,r),i[0])return i[1]}return(0,a.info)("bad white code"),this.eatBits(1),1},e.prototype.getBlackCode=function(){var e,t
if(this.eoblock){if(-1===(e=this.lookBits(13)))return 1
if(t=e>>7==0?o[e]:e>>9==0&&e>>7!=0?s[(e>>1)-64]:c[e>>7],t[0]>0)return this.eatBits(t[0]),t[1]}else{var r=this.findTableCode(2,6,c)
if(r[0])return r[1]
if(r=this.findTableCode(7,12,s,64),r[0])return r[1]
if(r=this.findTableCode(10,13,o),r[0])return r[1]}return(0,a.info)("bad black code"),this.eatBits(1),1},e.prototype.lookBits=function(e){for(var t;this.inputBits<e;){if(-1===(t=this.str.getByte()))return 0===this.inputBits?-1:this.inputBuf<<e-this.inputBits&65535>>16-e
this.inputBuf=this.inputBuf<<8|t,this.inputBits+=8}return this.inputBuf>>this.inputBits-e&65535>>16-e},e.prototype.eatBits=function(e){(this.inputBits-=e)<0&&(this.inputBits=0)},e}(),S=function(){function e(e,t,r){this.str=e,this.dict=e.dict,this.cachedData=0,this.bitsCached=0
for(var a={earlyChange:r,codeLength:9,nextCode:258,dictionaryValues:new Uint8Array(4096),dictionaryLengths:new Uint16Array(4096),dictionaryPrevCodes:new Uint16Array(4096),currentSequence:new Uint8Array(4096),currentSequenceLength:0},i=0;i<256;++i)a.dictionaryValues[i]=i,a.dictionaryLengths[i]=1
this.lzwState=a,u.call(this,t)}return e.prototype=Object.create(u.prototype),e.prototype.readBits=function(e){for(var t=this.bitsCached,r=this.cachedData;t<e;){var a=this.str.getByte()
if(-1===a)return this.eof=!0,null
r=r<<8|a,t+=8}return this.bitsCached=t-=e,this.cachedData=r,this.lastCode=null,r>>>t&(1<<e)-1},e.prototype.readBlock=function(){var e,t,r,a=1024,i=this.lzwState
if(i){var n=i.earlyChange,o=i.nextCode,s=i.dictionaryValues,c=i.dictionaryLengths,l=i.dictionaryPrevCodes,u=i.codeLength,h=i.prevCode,f=i.currentSequence,d=i.currentSequenceLength,g=0,m=this.bufferLength,p=this.ensureBuffer(this.bufferLength+a)
for(e=0;e<512;e++){var b=this.readBits(u),v=d>0
if(b<256)f[0]=b,d=1
else{if(!(b>=258)){if(256===b){u=9,o=258,d=0
continue}this.eof=!0,delete this.lzwState
break}if(b<o)for(d=c[b],t=d-1,r=b;t>=0;t--)f[t]=s[r],r=l[r]
else f[d++]=f[0]}if(v&&(l[o]=h,c[o]=c[h]+1,s[o]=f[0],o++,u=o+n&o+n-1?u:0|Math.min(Math.log(o+n)/.6931471805599453+1,12)),h=b,g+=d,a<g){do{a+=512}while(a<g)
p=this.ensureBuffer(this.bufferLength+a)}for(t=0;t<d;t++)p[m++]=f[t]}i.nextCode=o,i.codeLength=u,i.prevCode=h,i.currentSequenceLength=d,this.bufferLength=m}},e}(),C=function(){function e(){c.call(this,new Uint8Array(0))}return e.prototype=c.prototype,e}()
t.Ascii85Stream=v,t.AsciiHexStream=y,t.CCITTFaxStream=k,t.DecryptStream=b,t.DecodeStream=u,t.FlateStream=f,t.Jbig2Stream=p,t.JpegStream=g,t.JpxStream=m,t.NullStream=C,t.PredictorStream=d,t.RunLengthStream=w,t.Stream=c,t.StreamsSequenceStream=h,t.StringStream=l,t.LZWStream=S},function(e,t,r){"use strict"
var a=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")()
"number"==typeof __g&&(__g=a)},function(e,t,r){"use strict"
e.exports=!r(19)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,r){"use strict"
var a=r(9),i=r(20)
e.exports=r(5)?function(e,t,r){return a.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){"use strict"
var a={}.hasOwnProperty
e.exports=function(e,t){return a.call(e,t)}},function(e,t,r){"use strict"
var a=r(12),i=Math.min
e.exports=function(e){return e>0?i(a(e),9007199254740991):0}},function(e,t,r){"use strict"
var a=r(17),i=r(42),n=r(31),o=Object.defineProperty
t.f=r(5)?Object.defineProperty:function(e,t,r){if(a(e),t=n(t,!0),a(r),i)try{return o(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!")
return"value"in r&&(e[t]=r.value),e}},function(e,t,r){"use strict"
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
e.exports=function(e){return"object"===(void 0===e?"undefined":a(e))?null!==e:"function"==typeof e}},function(e,t,r){"use strict"
e.exports={}},function(e,t,r){"use strict"
var a=Math.ceil,i=Math.floor
e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:a)(e)}},function(e,t,r){"use strict"
var a=r(39)
e.exports=function(e){return Object(a(e))}},function(e,t,r){"use strict"
var a=0,i=Math.random()
e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++a+i).toString(36))}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ColorSpace=void 0
var a=r(0),i=r(1),n=r(32),o=function(){function e(e,t,r,a,i,n,o,s){o=1!==o?0:o
var c,l,u,h,f=r/i,d=a/n,g=0,m=new Uint16Array(i),p=3*r
for(c=0;c<i;c++)m[c]=3*Math.floor(c*f)
for(c=0;c<n;c++)for(u=Math.floor(c*d)*p,l=0;l<i;l++)h=u+m[l],s[g++]=e[h++],s[g++]=e[h++],s[g++]=e[h++],g+=o}function t(){throw new Error("should not call ColorSpace constructor")}return t.prototype={getRgb:function(e,t){var r=new Uint8Array(3)
return this.getRgbItem(e,t,r,0),r},getRgbItem:function(e,t,r,a){throw new Error("Should not call ColorSpace.getRgbItem")},getRgbBuffer:function(e,t,r,a,i,n,o){throw new Error("Should not call ColorSpace.getRgbBuffer")},getOutputLength:function(e,t){throw new Error("Should not call ColorSpace.getOutputLength")},isPassthrough:function(e){return!1},fillRgb:function(t,r,a,i,n,o,s,c,l){var u,h,f=r*a,d=null,g=1<<s,m=a!==n||r!==i
if(this.isPassthrough(s))d=c
else if(1===this.numComps&&f>g&&"DeviceGray"!==this.name&&"DeviceRGB"!==this.name){var p,b=s<=8?new Uint8Array(g):new Uint16Array(g)
for(u=0;u<g;u++)b[u]=u
var v=new Uint8Array(3*g)
this.getRgbBuffer(b,0,g,v,0,s,0)
var y,w
if(m)for(d=new Uint8Array(3*f),w=0,u=0;u<f;++u)p=3*c[u],d[w++]=v[p],d[w++]=v[p+1],d[w++]=v[p+2]
else for(y=0,u=0;u<f;++u)p=3*c[u],t[y++]=v[p],t[y++]=v[p+1],t[y++]=v[p+2],y+=l}else m?(d=new Uint8Array(3*f),this.getRgbBuffer(c,0,f,d,0,s,0)):this.getRgbBuffer(c,0,i*o,t,0,s,l)
if(d)if(m)e(d,s,r,a,i,n,l,t)
else for(w=0,y=0,u=0,h=i*o;u<h;u++)t[y++]=d[w++],t[y++]=d[w++],t[y++]=d[w++],y+=l},usesZeroToOneRange:!0},t.parse=function(e,r,a){var i=t.parseToIR(e,r,a)
return i instanceof s?i:t.fromIR(i)},t.fromIR=function(e){var r,i,o,u=(0,a.isArray)(e)?e[0]:e
switch(u){case"DeviceGrayCS":return this.singletons.gray
case"DeviceRgbCS":return this.singletons.rgb
case"DeviceCmykCS":return this.singletons.cmyk
case"CalGrayCS":return r=e[1],i=e[2],o=e[3],new d(r,i,o)
case"CalRGBCS":r=e[1],i=e[2],o=e[3]
var h=e[4]
return new g(r,i,o,h)
case"PatternCS":var f=e[1]
return f&&(f=t.fromIR(f)),new c(f)
case"IndexedCS":var p=e[1],b=e[2],v=e[3]
return new l(t.fromIR(p),b,v)
case"AlternateCS":var y=e[1],w=e[2],k=e[3]
return new s(y,t.fromIR(w),n.PDFFunction.fromIR(k))
case"LabCS":r=e[1],i=e[2]
var S=e[3]
return new m(r,i,S)
default:throw new a.FormatError("Unknown colorspace name: "+u)}},t.parseToIR=function(e,r,o){if((0,i.isName)(e)){var s=o.get("ColorSpace")
if((0,i.isDict)(s)){var c=s.get(e.name)
c&&(e=c)}}if(e=r.fetchIfRef(e),(0,i.isName)(e))switch(e.name){case"DeviceGray":case"G":return"DeviceGrayCS"
case"DeviceRGB":case"RGB":return"DeviceRgbCS"
case"DeviceCMYK":case"CMYK":return"DeviceCmykCS"
case"Pattern":return["PatternCS",null]
default:throw new a.FormatError("unrecognized colorspace "+e.name)}if((0,a.isArray)(e)){var l,u,h,f,d,g,m=r.fetchIfRef(e[0]).name
switch(m){case"DeviceGray":case"G":return"DeviceGrayCS"
case"DeviceRGB":case"RGB":return"DeviceRgbCS"
case"DeviceCMYK":case"CMYK":return"DeviceCmykCS"
case"CalGray":return u=r.fetchIfRef(e[1]),f=u.getArray("WhitePoint"),d=u.getArray("BlackPoint"),g=u.get("Gamma"),["CalGrayCS",f,d,g]
case"CalRGB":u=r.fetchIfRef(e[1]),f=u.getArray("WhitePoint"),d=u.getArray("BlackPoint"),g=u.getArray("Gamma")
return["CalRGBCS",f,d,g,u.getArray("Matrix")]
case"ICCBased":var p=r.fetchIfRef(e[1]),b=p.dict
if(l=b.get("N"),h=b.get("Alternate")){var v=t.parseToIR(h,r,o)
if(t.fromIR(v).numComps===l)return v;(0,a.warn)("ICCBased color space: Ignoring incorrect /Alternate entry.")}if(1===l)return"DeviceGrayCS"
if(3===l)return"DeviceRgbCS"
if(4===l)return"DeviceCmykCS"
break
case"Pattern":var y=e[1]||null
return y&&(y=t.parseToIR(y,r,o)),["PatternCS",y]
case"Indexed":case"I":var w=t.parseToIR(e[1],r,o),k=r.fetchIfRef(e[2])+1,S=r.fetchIfRef(e[3])
return(0,i.isStream)(S)&&(S=S.getBytes()),["IndexedCS",w,k,S]
case"Separation":case"DeviceN":var C=r.fetchIfRef(e[1])
l=(0,a.isArray)(C)?C.length:1,h=t.parseToIR(e[2],r,o)
return["AlternateCS",l,h,n.PDFFunction.getIR(r,r.fetchIfRef(e[3]))]
case"Lab":u=r.fetchIfRef(e[1]),f=u.getArray("WhitePoint"),d=u.getArray("BlackPoint")
return["LabCS",f,d,u.getArray("Range")]
default:throw new a.FormatError('unimplemented color space object "'+m+'"')}}throw new a.FormatError('unrecognized color space object: "'+e+'"')},t.isDefaultDecode=function(e,t){if(!(0,a.isArray)(e))return!0
if(2*t!==e.length)return(0,a.warn)("The decode map is not the correct length"),!0
for(var r=0,i=e.length;r<i;r+=2)if(0!==e[r]||1!==e[r+1])return!1
return!0},t.singletons={get gray(){return(0,a.shadow)(this,"gray",new u)},get rgb(){return(0,a.shadow)(this,"rgb",new h)},get cmyk(){return(0,a.shadow)(this,"cmyk",new f)}},t}(),s=function(){function e(e,t,r){this.name="Alternate",this.numComps=e,this.defaultColor=new Float32Array(e)
for(var a=0;a<e;++a)this.defaultColor[a]=1
this.base=t,this.tintFn=r,this.tmpBuf=new Float32Array(t.numComps)}return e.prototype={getRgb:o.prototype.getRgb,getRgbItem:function(e,t,r,a){var i=this.tmpBuf
this.tintFn(e,t,i,0),this.base.getRgbItem(i,0,r,a)},getRgbBuffer:function(e,t,r,a,i,n,o){var s,c,l=this.tintFn,u=this.base,h=1/((1<<n)-1),f=u.numComps,d=u.usesZeroToOneRange,g=(u.isPassthrough(8)||!d)&&0===o,m=g?i:0,p=g?a:new Uint8Array(f*r),b=this.numComps,v=new Float32Array(b),y=new Float32Array(f)
for(s=0;s<r;s++){for(c=0;c<b;c++)v[c]=e[t++]*h
if(l(v,0,y,0),d)for(c=0;c<f;c++)p[m++]=255*y[c]
else u.getRgbItem(y,0,p,m),m+=f}g||u.getRgbBuffer(p,0,r,a,i,8,o)},getOutputLength:function(e,t){return this.base.getOutputLength(e*this.base.numComps/this.numComps,t)},isPassthrough:o.prototype.isPassthrough,fillRgb:o.prototype.fillRgb,isDefaultDecode:function(e){return o.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},e}(),c=function(){function e(e){this.name="Pattern",this.base=e}return e.prototype={},e}(),l=function(){function e(e,t,r){this.name="Indexed",this.numComps=1,this.defaultColor=new Uint8Array(this.numComps),this.base=e,this.highVal=t
var n=e.numComps,o=n*t
if((0,i.isStream)(r)){this.lookup=new Uint8Array(o)
var s=r.getBytes(o)
this.lookup.set(s)}else if((0,a.isString)(r)){this.lookup=new Uint8Array(o)
for(var c=0;c<o;++c)this.lookup[c]=r.charCodeAt(c)}else{if(!(r instanceof Uint8Array||r instanceof Array))throw new a.FormatError("Unrecognized lookup table: "+r)
this.lookup=r}}return e.prototype={getRgb:o.prototype.getRgb,getRgbItem:function(e,t,r,a){var i=this.base.numComps,n=e[t]*i
this.base.getRgbBuffer(this.lookup,n,1,r,a,8,0)},getRgbBuffer:function(e,t,r,a,i,n,o){for(var s=this.base,c=s.numComps,l=s.getOutputLength(c,o),u=this.lookup,h=0;h<r;++h){var f=e[t++]*c
s.getRgbBuffer(u,f,1,a,i,8,o),i+=l}},getOutputLength:function(e,t){return this.base.getOutputLength(e*this.base.numComps,t)},isPassthrough:o.prototype.isPassthrough,fillRgb:o.prototype.fillRgb,isDefaultDecode:function(e){return!0},usesZeroToOneRange:!0},e}(),u=function(){function e(){this.name="DeviceGray",this.numComps=1,this.defaultColor=new Float32Array(this.numComps)}return e.prototype={getRgb:o.prototype.getRgb,getRgbItem:function(e,t,r,a){var i=255*e[t]|0
i=i<0?0:i>255?255:i,r[a]=r[a+1]=r[a+2]=i},getRgbBuffer:function(e,t,r,a,i,n,o){for(var s=255/((1<<n)-1),c=t,l=i,u=0;u<r;++u){var h=s*e[c++]|0
a[l++]=h,a[l++]=h,a[l++]=h,l+=o}},getOutputLength:function(e,t){return e*(3+t)},isPassthrough:o.prototype.isPassthrough,fillRgb:o.prototype.fillRgb,isDefaultDecode:function(e){return o.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},e}(),h=function(){function e(){this.name="DeviceRGB",this.numComps=3,this.defaultColor=new Float32Array(this.numComps)}return e.prototype={getRgb:o.prototype.getRgb,getRgbItem:function(e,t,r,a){var i=255*e[t]|0,n=255*e[t+1]|0,o=255*e[t+2]|0
r[a]=i<0?0:i>255?255:i,r[a+1]=n<0?0:n>255?255:n,r[a+2]=o<0?0:o>255?255:o},getRgbBuffer:function(e,t,r,a,i,n,o){if(8===n&&0===o)return void a.set(e.subarray(t,t+3*r),i)
for(var s=255/((1<<n)-1),c=t,l=i,u=0;u<r;++u)a[l++]=s*e[c++]|0,a[l++]=s*e[c++]|0,a[l++]=s*e[c++]|0,l+=o},getOutputLength:function(e,t){return e*(3+t)/3|0},isPassthrough:function(e){return 8===e},fillRgb:o.prototype.fillRgb,isDefaultDecode:function(e){return o.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},e}(),f=function(){function e(e,t,r,a,i){var n=e[t+0]*r,o=e[t+1]*r,s=e[t+2]*r,c=e[t+3]*r,l=n*(-4.387332384609988*n+54.48615194189176*o+18.82290502165302*s+212.25662451639585*c-285.2331026137004)+o*(1.7149763477362134*o-5.6096736904047315*s+-17.873870861415444*c-5.497006427196366)+s*(-2.5217340131683033*s-21.248923337353073*c+17.5119270841813)+c*(-21.86122147463605*c-189.48180835922747)+255|0,u=n*(8.841041422036149*n+60.118027045597366*o+6.871425592049007*s+31.159100130055922*c-79.2970844816548)+o*(-15.310361306967817*o+17.575251261109482*s+131.35250912493976*c-190.9453302588951)+s*(4.444339102852739*s+9.8632861493405*c-24.86741582555878)+c*(-20.737325471181034*c-187.80453709719578)+255|0,h=n*(.8842522430003296*n+8.078677503112928*o+30.89978309703729*s-.23883238689178934*c-14.183576799673286)+o*(10.49593273432072*o+63.02378494754052*s+50.606957656360734*c-112.23884253719248)+s*(.03296041114873217*s+115.60384449646641*c-193.58209356861505)+c*(-22.33816807309886*c-180.12613974708367)+255|0
a[i]=l>255?255:l<0?0:l,a[i+1]=u>255?255:u<0?0:u,a[i+2]=h>255?255:h<0?0:h}function t(){this.name="DeviceCMYK",this.numComps=4,this.defaultColor=new Float32Array(this.numComps),this.defaultColor[3]=1}return t.prototype={getRgb:o.prototype.getRgb,getRgbItem:function(t,r,a,i){e(t,r,1,a,i)},getRgbBuffer:function(t,r,a,i,n,o,s){for(var c=1/((1<<o)-1),l=0;l<a;l++)e(t,r,c,i,n),r+=4,n+=3+s},getOutputLength:function(e,t){return e/4*(3+t)|0},isPassthrough:o.prototype.isPassthrough,fillRgb:o.prototype.fillRgb,isDefaultDecode:function(e){return o.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},t}(),d=function(){function e(e,t,r){if(this.name="CalGray",this.numComps=1,this.defaultColor=new Float32Array(this.numComps),!e)throw new a.FormatError("WhitePoint missing - required for color space CalGray")
if(t=t||[0,0,0],r=r||1,this.XW=e[0],this.YW=e[1],this.ZW=e[2],this.XB=t[0],this.YB=t[1],this.ZB=t[2],this.G=r,this.XW<0||this.ZW<0||1!==this.YW)throw new a.FormatError("Invalid WhitePoint components for "+this.name+", no fallback available");(this.XB<0||this.YB<0||this.ZB<0)&&((0,a.info)("Invalid BlackPoint for "+this.name+", falling back to default"),this.XB=this.YB=this.ZB=0),0===this.XB&&0===this.YB&&0===this.ZB||(0,a.warn)(this.name+", BlackPoint: XB: "+this.XB+", YB: "+this.YB+", ZB: "+this.ZB+", only default values are supported."),this.G<1&&((0,a.info)("Invalid Gamma: "+this.G+" for "+this.name+", falling back to default"),this.G=1)}function t(e,t,r,a,i,n){var o=t[r]*n,s=Math.pow(o,e.G),c=e.YW*s,l=0|Math.max(295.8*Math.pow(c,.3333333333333333)-40.8,0)
a[i]=l,a[i+1]=l,a[i+2]=l}return e.prototype={getRgb:o.prototype.getRgb,getRgbItem:function(e,r,a,i){t(this,e,r,a,i,1)},getRgbBuffer:function(e,r,a,i,n,o,s){for(var c=1/((1<<o)-1),l=0;l<a;++l)t(this,e,r,i,n,c),r+=1,n+=3+s},getOutputLength:function(e,t){return e*(3+t)},isPassthrough:o.prototype.isPassthrough,fillRgb:o.prototype.fillRgb,isDefaultDecode:function(e){return o.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},e}(),g=function(){function e(e,t,r,i){if(this.name="CalRGB",this.numComps=3,this.defaultColor=new Float32Array(this.numComps),!e)throw new a.FormatError("WhitePoint missing - required for color space CalRGB")
t=t||new Float32Array(3),r=r||new Float32Array([1,1,1]),i=i||new Float32Array([1,0,0,0,1,0,0,0,1])
var n=e[0],o=e[1],s=e[2]
this.whitePoint=e
var c=t[0],l=t[1],u=t[2]
if(this.blackPoint=t,this.GR=r[0],this.GG=r[1],this.GB=r[2],this.MXA=i[0],this.MYA=i[1],this.MZA=i[2],this.MXB=i[3],this.MYB=i[4],this.MZB=i[5],this.MXC=i[6],this.MYC=i[7],this.MZC=i[8],n<0||s<0||1!==o)throw new a.FormatError("Invalid WhitePoint components for "+this.name+", no fallback available");(c<0||l<0||u<0)&&((0,a.info)("Invalid BlackPoint for "+this.name+" ["+c+", "+l+", "+u+"], falling back to default"),this.blackPoint=new Float32Array(3)),(this.GR<0||this.GG<0||this.GB<0)&&((0,a.info)("Invalid Gamma ["+this.GR+", "+this.GG+", "+this.GB+"] for "+this.name+", falling back to default"),this.GR=this.GG=this.GB=1),(this.MXA<0||this.MYA<0||this.MZA<0||this.MXB<0||this.MYB<0||this.MZB<0||this.MXC<0||this.MYC<0||this.MZC<0)&&((0,a.info)("Invalid Matrix for "+this.name+" ["+this.MXA+", "+this.MYA+", "+this.MZA+this.MXB+", "+this.MYB+", "+this.MZB+this.MXC+", "+this.MYC+", "+this.MZC+"], falling back to default"),this.MXA=this.MYB=this.MZC=1,this.MXB=this.MYA=this.MZA=this.MXC=this.MYC=this.MZB=0)}function t(e,t,r){r[0]=e[0]*t[0]+e[1]*t[1]+e[2]*t[2],r[1]=e[3]*t[0]+e[4]*t[1]+e[5]*t[2],r[2]=e[6]*t[0]+e[7]*t[1]+e[8]*t[2]}function r(e,t,r){r[0]=1*t[0]/e[0],r[1]=1*t[1]/e[1],r[2]=1*t[2]/e[2]}function i(e,t,r){r[0]=.95047*t[0]/e[0],r[1]=1*t[1]/e[1],r[2]=1.08883*t[2]/e[2]}function n(e){return e<=.0031308?s(0,1,12.92*e):s(0,1,1.055*Math.pow(e,1/2.4)-.055)}function s(e,t,r){return Math.max(e,Math.min(t,r))}function c(e){return e<0?-c(-e):e>8?Math.pow((e+16)/116,3):e*w}function l(e,t,r){if(0===e[0]&&0===e[1]&&0===e[2])return r[0]=t[0],r[1]=t[1],void(r[2]=t[2])
var a=c(0),i=a,n=c(e[0]),o=a,s=c(e[1]),l=a,u=c(e[2]),h=(1-i)/(1-n),f=1-h,d=(1-o)/(1-s),g=1-d,m=(1-l)/(1-u),p=1-m
r[0]=t[0]*h+f,r[1]=t[1]*d+g,r[2]=t[2]*m+p}function u(e,a,i){if(1===e[0]&&1===e[2])return i[0]=a[0],i[1]=a[1],void(i[2]=a[2])
var n=i
t(d,a,n)
var o=b
r(e,n,o),t(g,o,i)}function h(e,r,a){var n=a
t(d,r,n)
var o=b
i(e,n,o),t(g,o,a)}function f(e,r,a,i,o,c){var f=s(0,1,r[a]*c),d=s(0,1,r[a+1]*c),g=s(0,1,r[a+2]*c),b=Math.pow(f,e.GR),w=Math.pow(d,e.GG),k=Math.pow(g,e.GB),S=e.MXA*b+e.MXB*w+e.MXC*k,C=e.MYA*b+e.MYB*w+e.MYC*k,x=e.MZA*b+e.MZB*w+e.MZC*k,A=v
A[0]=S,A[1]=C,A[2]=x
var P=y
u(e.whitePoint,A,P)
var I=v
l(e.blackPoint,P,I)
var _=y
h(p,I,_)
var O=v
t(m,_,O)
var T=n(O[0]),E=n(O[1]),R=n(O[2])
i[o]=Math.round(255*T),i[o+1]=Math.round(255*E),i[o+2]=Math.round(255*R)}var d=new Float32Array([.8951,.2664,-.1614,-.7502,1.7135,.0367,.0389,-.0685,1.0296]),g=new Float32Array([.9869929,-.1470543,.1599627,.4323053,.5183603,.0492912,-.0085287,.0400428,.9684867]),m=new Float32Array([3.2404542,-1.5371385,-.4985314,-.969266,1.8760108,.041556,.0556434,-.2040259,1.0572252]),p=new Float32Array([1,1,1]),b=new Float32Array(3),v=new Float32Array(3),y=new Float32Array(3),w=Math.pow(24/116,3)/8
return e.prototype={getRgb:o.prototype.getRgb,getRgbItem:function(e,t,r,a){f(this,e,t,r,a,1)},getRgbBuffer:function(e,t,r,a,i,n,o){for(var s=1/((1<<n)-1),c=0;c<r;++c)f(this,e,t,a,i,s),t+=3,i+=3+o},getOutputLength:function(e,t){return e*(3+t)/3|0},isPassthrough:o.prototype.isPassthrough,fillRgb:o.prototype.fillRgb,isDefaultDecode:function(e){return o.isDefaultDecode(e,this.numComps)},usesZeroToOneRange:!0},e}(),m=function(){function e(e,t,r){if(this.name="Lab",this.numComps=3,this.defaultColor=new Float32Array(this.numComps),!e)throw new a.FormatError("WhitePoint missing - required for color space Lab")
if(t=t||[0,0,0],r=r||[-100,100,-100,100],this.XW=e[0],this.YW=e[1],this.ZW=e[2],this.amin=r[0],this.amax=r[1],this.bmin=r[2],this.bmax=r[3],this.XB=t[0],this.YB=t[1],this.ZB=t[2],this.XW<0||this.ZW<0||1!==this.YW)throw new a.FormatError("Invalid WhitePoint components, no fallback available");(this.XB<0||this.YB<0||this.ZB<0)&&((0,a.info)("Invalid BlackPoint, falling back to default"),this.XB=this.YB=this.ZB=0),(this.amin>this.amax||this.bmin>this.bmax)&&((0,a.info)("Invalid Range, falling back to defaults"),this.amin=-100,this.amax=100,this.bmin=-100,this.bmax=100)}function t(e){return e>=6/29?e*e*e:108/841*(e-4/29)}function r(e,t,r,a){return r+e*(a-r)/t}function i(e,a,i,n,o,s){var c=a[i],l=a[i+1],u=a[i+2]
!1!==n&&(c=r(c,n,0,100),l=r(l,n,e.amin,e.amax),u=r(u,n,e.bmin,e.bmax)),l=l>e.amax?e.amax:l<e.amin?e.amin:l,u=u>e.bmax?e.bmax:u<e.bmin?e.bmin:u
var h,f,d,g=(c+16)/116,m=g+l/500,p=g-u/200,b=e.XW*t(m),v=e.YW*t(g),y=e.ZW*t(p)
e.ZW<1?(h=3.1339*b+-1.617*v+-.4906*y,f=-.9785*b+1.916*v+.0333*y,d=.072*b+-.229*v+1.4057*y):(h=3.2406*b+-1.5372*v+-.4986*y,f=-.9689*b+1.8758*v+.0415*y,d=.0557*b+-.204*v+1.057*y),o[s]=h<=0?0:h>=1?255:255*Math.sqrt(h)|0,o[s+1]=f<=0?0:f>=1?255:255*Math.sqrt(f)|0,o[s+2]=d<=0?0:d>=1?255:255*Math.sqrt(d)|0}return e.prototype={getRgb:o.prototype.getRgb,getRgbItem:function(e,t,r,a){i(this,e,t,!1,r,a)},getRgbBuffer:function(e,t,r,a,n,o,s){for(var c=(1<<o)-1,l=0;l<r;l++)i(this,e,t,c,a,n),t+=3,n+=3+s},getOutputLength:function(e,t){return e*(3+t)/3|0},isPassthrough:o.prototype.isPassthrough,fillRgb:o.prototype.fillRgb,isDefaultDecode:function(e){return!0},usesZeroToOneRange:!1},e}()
t.ColorSpace=o},function(e,t,r){"use strict"
function a(e){switch(e){case"WinAnsiEncoding":return c
case"StandardEncoding":return s
case"MacRomanEncoding":return o
case"SymbolSetEncoding":return l
case"ZapfDingbatsEncoding":return u
case"ExpertEncoding":return i
case"MacExpertEncoding":return n
default:return null}}Object.defineProperty(t,"__esModule",{value:!0})
var i=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],n=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","centoldstyle","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","","threequartersemdash","","questionsmall","","","","","Ethsmall","","","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","","","","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hypheninferior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","asuperior","centsuperior","","","","","Aacutesmall","Agravesmall","Acircumflexsmall","Adieresissmall","Atildesmall","Aringsmall","Ccedillasmall","Eacutesmall","Egravesmall","Ecircumflexsmall","Edieresissmall","Iacutesmall","Igravesmall","Icircumflexsmall","Idieresissmall","Ntildesmall","Oacutesmall","Ogravesmall","Ocircumflexsmall","Odieresissmall","Otildesmall","Uacutesmall","Ugravesmall","Ucircumflexsmall","Udieresissmall","","eightsuperior","fourinferior","threeinferior","sixinferior","eightinferior","seveninferior","Scaronsmall","","centinferior","twoinferior","","Dieresissmall","","Caronsmall","osuperior","fiveinferior","","commainferior","periodinferior","Yacutesmall","","dollarinferior","","Thornsmall","","nineinferior","zeroinferior","Zcaronsmall","AEsmall","Oslashsmall","questiondownsmall","oneinferior","Lslashsmall","","","","","","","Cedillasmall","","","","","","OEsmall","figuredash","hyphensuperior","","","","","exclamdownsmall","","Ydieresissmall","","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","ninesuperior","zerosuperior","","esuperior","rsuperior","tsuperior","","","isuperior","ssuperior","dsuperior","","","","","","lsuperior","Ogoneksmall","Brevesmall","Macronsmall","bsuperior","nsuperior","msuperior","commasuperior","periodsuperior","Dotaccentsmall","Ringsmall"],o=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","space","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron"],s=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],c=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","bullet","Euro","bullet","quotesinglbase","florin","quotedblbase","ellipsis","dagger","daggerdbl","circumflex","perthousand","Scaron","guilsinglleft","OE","bullet","Zcaron","bullet","bullet","quoteleft","quoteright","quotedblleft","quotedblright","bullet","endash","emdash","tilde","trademark","scaron","guilsinglright","oe","bullet","zcaron","Ydieresis","space","exclamdown","cent","sterling","currency","yen","brokenbar","section","dieresis","copyright","ordfeminine","guillemotleft","logicalnot","hyphen","registered","macron","degree","plusminus","twosuperior","threesuperior","acute","mu","paragraph","periodcentered","cedilla","onesuperior","ordmasculine","guillemotright","onequarter","onehalf","threequarters","questiondown","Agrave","Aacute","Acircumflex","Atilde","Adieresis","Aring","AE","Ccedilla","Egrave","Eacute","Ecircumflex","Edieresis","Igrave","Iacute","Icircumflex","Idieresis","Eth","Ntilde","Ograve","Oacute","Ocircumflex","Otilde","Odieresis","multiply","Oslash","Ugrave","Uacute","Ucircumflex","Udieresis","Yacute","Thorn","germandbls","agrave","aacute","acircumflex","atilde","adieresis","aring","ae","ccedilla","egrave","eacute","ecircumflex","edieresis","igrave","iacute","icircumflex","idieresis","eth","ntilde","ograve","oacute","ocircumflex","otilde","odieresis","divide","oslash","ugrave","uacute","ucircumflex","udieresis","yacute","thorn","ydieresis"],l=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","universal","numbersign","existential","percent","ampersand","suchthat","parenleft","parenright","asteriskmath","plus","comma","minus","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","congruent","Alpha","Beta","Chi","Delta","Epsilon","Phi","Gamma","Eta","Iota","theta1","Kappa","Lambda","Mu","Nu","Omicron","Pi","Theta","Rho","Sigma","Tau","Upsilon","sigma1","Omega","Xi","Psi","Zeta","bracketleft","therefore","bracketright","perpendicular","underscore","radicalex","alpha","beta","chi","delta","epsilon","phi","gamma","eta","iota","phi1","kappa","lambda","mu","nu","omicron","pi","theta","rho","sigma","tau","upsilon","omega1","omega","xi","psi","zeta","braceleft","bar","braceright","similar","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Euro","Upsilon1","minute","lessequal","fraction","infinity","florin","club","diamond","heart","spade","arrowboth","arrowleft","arrowup","arrowright","arrowdown","degree","plusminus","second","greaterequal","multiply","proportional","partialdiff","bullet","divide","notequal","equivalence","approxequal","ellipsis","arrowvertex","arrowhorizex","carriagereturn","aleph","Ifraktur","Rfraktur","weierstrass","circlemultiply","circleplus","emptyset","intersection","union","propersuperset","reflexsuperset","notsubset","propersubset","reflexsubset","element","notelement","angle","gradient","registerserif","copyrightserif","trademarkserif","product","radical","dotmath","logicalnot","logicaland","logicalor","arrowdblboth","arrowdblleft","arrowdblup","arrowdblright","arrowdbldown","lozenge","angleleft","registersans","copyrightsans","trademarksans","summation","parenlefttp","parenleftex","parenleftbt","bracketlefttp","bracketleftex","bracketleftbt","bracelefttp","braceleftmid","braceleftbt","braceex","","angleright","integral","integraltp","integralex","integralbt","parenrighttp","parenrightex","parenrightbt","bracketrighttp","bracketrightex","bracketrightbt","bracerighttp","bracerightmid","bracerightbt"],u=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","a1","a2","a202","a3","a4","a5","a119","a118","a117","a11","a12","a13","a14","a15","a16","a105","a17","a18","a19","a20","a21","a22","a23","a24","a25","a26","a27","a28","a6","a7","a8","a9","a10","a29","a30","a31","a32","a33","a34","a35","a36","a37","a38","a39","a40","a41","a42","a43","a44","a45","a46","a47","a48","a49","a50","a51","a52","a53","a54","a55","a56","a57","a58","a59","a60","a61","a62","a63","a64","a65","a66","a67","a68","a69","a70","a71","a72","a73","a74","a203","a75","a204","a76","a77","a78","a79","a81","a82","a83","a84","a97","a98","a99","a100","","a89","a90","a93","a94","a91","a92","a205","a85","a206","a86","a87","a88","a95","a96","","","","","","","","","","","","","","","","","","","","a101","a102","a103","a104","a106","a107","a108","a112","a111","a110","a109","a120","a121","a122","a123","a124","a125","a126","a127","a128","a129","a130","a131","a132","a133","a134","a135","a136","a137","a138","a139","a140","a141","a142","a143","a144","a145","a146","a147","a148","a149","a150","a151","a152","a153","a154","a155","a156","a157","a158","a159","a160","a161","a163","a164","a196","a165","a192","a166","a167","a168","a169","a170","a171","a172","a173","a162","a174","a175","a176","a177","a178","a179","a193","a180","a199","a181","a200","a182","","a201","a183","a184","a197","a185","a194","a198","a186","a195","a187","a188","a189","a190","a191"]
t.WinAnsiEncoding=c,t.StandardEncoding=s,t.MacRomanEncoding=o,t.SymbolSetEncoding=l,t.ZapfDingbatsEncoding=u,t.ExpertEncoding=i,t.getEncoding=a},function(e,t,r){"use strict"
var a=r(10)
e.exports=function(e){if(!a(e))throw TypeError(e+" is not an object!")
return e}},function(e,t,r){"use strict"
var a=e.exports={version:"2.5.0"}
"number"==typeof __e&&(__e=a)},function(e,t,r){"use strict"
e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){"use strict"
e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){"use strict"
var a=r(12),i=Math.max,n=Math.min
e.exports=function(e,t){return e=a(e),e<0?i(e+t,0):n(e,t)}},function(e,t,r){"use strict"
var a=r(43),i=r(39)
e.exports=function(e){return a(i(e))}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Parser=t.Linearization=t.Lexer=void 0
var a=r(3),i=r(0),n=r(1),o=function(){function e(e,t,r,a){this.lexer=e,this.allowStreams=t,this.xref=r,this.recoveryMode=a||!1,this.imageCache=Object.create(null),this.refill()}return e.prototype={refill:function(){this.buf1=this.lexer.getObj(),this.buf2=this.lexer.getObj()},shift:function(){(0,n.isCmd)(this.buf2,"ID")?(this.buf1=this.buf2,this.buf2=null):(this.buf1=this.buf2,this.buf2=this.lexer.getObj())},tryShift:function(){try{return this.shift(),!0}catch(e){if(e instanceof i.MissingDataException)throw e
return!1}},getObj:function(e){var t=this.buf1
if(this.shift(),t instanceof n.Cmd)switch(t.cmd){case"BI":return this.makeInlineImage(e)
case"[":for(var r=[];!(0,n.isCmd)(this.buf1,"]")&&!(0,n.isEOF)(this.buf1);)r.push(this.getObj(e))
if((0,n.isEOF)(this.buf1)){if(!this.recoveryMode)throw new i.FormatError("End of file inside array")
return r}return this.shift(),r
case"<<":for(var a=new n.Dict(this.xref);!(0,n.isCmd)(this.buf1,">>")&&!(0,n.isEOF)(this.buf1);)if((0,n.isName)(this.buf1)){var o=this.buf1.name
if(this.shift(),(0,n.isEOF)(this.buf1))break
a.set(o,this.getObj(e))}else(0,i.info)("Malformed dictionary: key must be a name object"),this.shift()
if((0,n.isEOF)(this.buf1)){if(!this.recoveryMode)throw new i.FormatError("End of file inside dictionary")
return a}return(0,n.isCmd)(this.buf2,"stream")?this.allowStreams?this.makeStream(a,e):a:(this.shift(),a)
default:return t}if((0,i.isInt)(t)){var s=t
if((0,i.isInt)(this.buf1)&&(0,n.isCmd)(this.buf2,"R")){var c=new n.Ref(s,this.buf1)
return this.shift(),this.shift(),c}return s}if((0,i.isString)(t)){var l=t
return e&&(l=e.decryptString(l)),l}return t},findDefaultInlineStreamEnd:function(e){for(var t=e.pos,r=0,a=void 0,n=void 0;-1!==(a=e.getByte());)if(0===r)r=69===a?1:0
else if(1===r)r=73===a?2:0
else if((0,i.assert)(2===r),32===a||10===a||13===a){n=e.pos
for(var o=e.peekBytes(10),s=0,c=o.length;s<c;s++)if((0!==(a=o[s])||0===o[s+1])&&10!==a&&13!==a&&(a<32||a>127)){r=0
break}if(2===r)break}else r=0
return-1===a&&((0,i.warn)("findDefaultInlineStreamEnd: Reached the end of the stream without finding a valid EI marker"),n&&((0,i.warn)('... trying to recover by using the last "EI" occurrence.'),e.skip(-(e.pos-n)))),e.pos-4-t},findDCTDecodeInlineStreamEnd:function(e){for(var t,r,a,n=e.pos,o=!1;-1!==(t=e.getByte());)if(255===t){switch(e.getByte()){case 0:break
case 255:e.skip(-1)
break
case 217:o=!0
break
case 192:case 193:case 194:case 195:case 197:case 198:case 199:case 201:case 202:case 203:case 205:case 206:case 207:case 196:case 204:case 218:case 219:case 220:case 221:case 222:case 223:case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:r=e.getUint16(),r>2?e.skip(r-2):e.skip(-2)}if(o)break}return a=e.pos-n,-1===t?((0,i.warn)("Inline DCTDecode image stream: EOI marker not found, searching for /EI/ instead."),e.skip(-a),this.findDefaultInlineStreamEnd(e)):(this.inlineStreamSkipEI(e),a)},findASCII85DecodeInlineStreamEnd:function(e){for(var t,r,a=e.pos;-1!==(t=e.getByte());)if(126===t&&62===e.peekByte()){e.skip()
break}return r=e.pos-a,-1===t?((0,i.warn)("Inline ASCII85Decode image stream: EOD marker not found, searching for /EI/ instead."),e.skip(-r),this.findDefaultInlineStreamEnd(e)):(this.inlineStreamSkipEI(e),r)},findASCIIHexDecodeInlineStreamEnd:function(e){for(var t,r,a=e.pos;-1!==(t=e.getByte())&&62!==t;);return r=e.pos-a,-1===t?((0,i.warn)("Inline ASCIIHexDecode image stream: EOD marker not found, searching for /EI/ instead."),e.skip(-r),this.findDefaultInlineStreamEnd(e)):(this.inlineStreamSkipEI(e),r)},inlineStreamSkipEI:function(e){for(var t,r=0;-1!==(t=e.getByte());)if(0===r)r=69===t?1:0
else if(1===r)r=73===t?2:0
else if(2===r)break},makeInlineImage:function(e){for(var t=this.lexer,r=t.stream,a=new n.Dict(this.xref);!(0,n.isCmd)(this.buf1,"ID")&&!(0,n.isEOF)(this.buf1);){if(!(0,n.isName)(this.buf1))throw new i.FormatError("Dictionary key must be a name object")
var o=this.buf1.name
if(this.shift(),(0,n.isEOF)(this.buf1))break
a.set(o,this.getObj(e))}var s,c=a.get("Filter","F")
if((0,n.isName)(c))s=c.name
else if((0,i.isArray)(c)){var l=this.xref.fetchIfRef(c[0]);(0,n.isName)(l)&&(s=l.name)}var u,h,f,d=r.pos
u="DCTDecode"===s||"DCT"===s?this.findDCTDecodeInlineStreamEnd(r):"ASCII85Decode"===s||"A85"===s?this.findASCII85DecodeInlineStreamEnd(r):"ASCIIHexDecode"===s||"AHx"===s?this.findASCIIHexDecodeInlineStreamEnd(r):this.findDefaultInlineStreamEnd(r)
var g,m=r.makeSubStream(d,u,a)
if(u<1e3){var p=m.getBytes()
m.reset()
var b=1,v=0
for(h=0,f=p.length;h<f;++h)b+=255&p[h],v+=b
g=v%65521<<16|b%65521
var y=this.imageCache[g]
if(void 0!==y)return this.buf2=n.Cmd.get("EI"),this.shift(),y.reset(),y}return e&&(m=e.createStream(m,u)),m=this.filter(m,a,u),m.dict=a,void 0!==g&&(m.cacheKey="inline_"+u+"_"+g,this.imageCache[g]=m),this.buf2=n.Cmd.get("EI"),this.shift(),m},makeStream:function(e,t){var r=this.lexer,a=r.stream
r.skipToNextLine()
var o=a.pos-1,s=e.get("Length")
if((0,i.isInt)(s)||((0,i.info)("Bad "+s+" attribute in stream"),s=0),a.pos=o+s,r.nextChar(),this.tryShift()&&(0,n.isCmd)(this.buf2,"endstream"))this.shift()
else{a.pos=o
for(var c,l,u=[101,110,100,115,116,114,101,97,109],h=0,f=!1;a.pos<a.end;){var d=a.peekBytes(2048),g=d.length-9
if(g<=0)break
for(f=!1,c=0;c<g;){for(l=0;l<9&&d[c+l]===u[l];)l++
if(l>=9){f=!0
break}c++}if(f){h+=c,a.pos+=c
break}h+=g,a.pos+=g}if(!f)throw new i.FormatError("Missing endstream")
s=h,r.nextChar(),this.shift(),this.shift()}return this.shift(),a=a.makeSubStream(o,s,e),t&&(a=t.createStream(a,s)),a=this.filter(a,e,s),a.dict=e,a},filter:function(e,t,r){var a=t.get("Filter","F"),o=t.get("DecodeParms","DP")
if((0,n.isName)(a))return(0,i.isArray)(o)&&(o=this.xref.fetchIfRef(o[0])),this.makeFilter(e,a.name,r,o)
var s=r
if((0,i.isArray)(a))for(var c=a,l=o,u=0,h=c.length;u<h;++u){if(a=this.xref.fetchIfRef(c[u]),!(0,n.isName)(a))throw new i.FormatError("Bad filter name: "+a)
o=null,(0,i.isArray)(l)&&u in l&&(o=this.xref.fetchIfRef(l[u])),e=this.makeFilter(e,a.name,s,o),s=null}return e},makeFilter:function(e,t,r,n){if(0===r)return(0,i.warn)('Empty "'+t+'" stream.'),new a.NullStream(e)
try{var o=this.xref.stats.streamTypes
if("FlateDecode"===t||"Fl"===t)return o[i.StreamType.FLATE]=!0,n?new a.PredictorStream(new a.FlateStream(e,r),r,n):new a.FlateStream(e,r)
if("LZWDecode"===t||"LZW"===t){o[i.StreamType.LZW]=!0
var s=1
return n?(n.has("EarlyChange")&&(s=n.get("EarlyChange")),new a.PredictorStream(new a.LZWStream(e,r,s),r,n)):new a.LZWStream(e,r,s)}return"DCTDecode"===t||"DCT"===t?(o[i.StreamType.DCT]=!0,new a.JpegStream(e,r,e.dict,n)):"JPXDecode"===t||"JPX"===t?(o[i.StreamType.JPX]=!0,new a.JpxStream(e,r,e.dict,n)):"ASCII85Decode"===t||"A85"===t?(o[i.StreamType.A85]=!0,new a.Ascii85Stream(e,r)):"ASCIIHexDecode"===t||"AHx"===t?(o[i.StreamType.AHX]=!0,new a.AsciiHexStream(e,r)):"CCITTFaxDecode"===t||"CCF"===t?(o[i.StreamType.CCF]=!0,new a.CCITTFaxStream(e,r,n)):"RunLengthDecode"===t||"RL"===t?(o[i.StreamType.RL]=!0,new a.RunLengthStream(e,r)):"JBIG2Decode"===t?(o[i.StreamType.JBIG]=!0,new a.Jbig2Stream(e,r,e.dict,n)):((0,i.warn)('filter "'+t+'" not supported yet'),e)}catch(t){if(t instanceof i.MissingDataException)throw t
return(0,i.warn)('Invalid stream: "'+t+'"'),new a.NullStream(e)}}},e}(),s=function(){function e(e,t){this.stream=e,this.nextChar(),this.strBuf=[],this.knownCommands=t}function t(e){return e>=48&&e<=57?15&e:e>=65&&e<=70||e>=97&&e<=102?9+(15&e):-1}var r=[1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,0,0,2,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
return e.prototype={nextChar:function(){return this.currentChar=this.stream.getByte()},peekChar:function(){return this.stream.peekByte()},getNumber:function(){var e=this.currentChar,t=!1,r=0,a=1
if(45===e?(a=-1,45===(e=this.nextChar())&&(e=this.nextChar())):43===e&&(e=this.nextChar()),46===e&&(r=10,e=this.nextChar()),10===e||13===e)do{e=this.nextChar()}while(10===e||13===e)
if(e<48||e>57)throw new i.FormatError("Invalid number: "+String.fromCharCode(e)+" (charCode "+e+")")
for(var n=e-48,o=0,s=1;(e=this.nextChar())>=0;)if(48<=e&&e<=57){var c=e-48
t?o=10*o+c:(0!==r&&(r*=10),n=10*n+c)}else if(46===e){if(0!==r)break
r=1}else if(45===e)(0,i.warn)("Badly formatted number")
else{if(69!==e&&101!==e)break
if(43===(e=this.peekChar())||45===e)s=45===e?-1:1,this.nextChar()
else if(e<48||e>57)break
t=!0}return 0!==r&&(n/=r),t&&(n*=Math.pow(10,s*o)),a*n},getString:function(){var e=1,t=!1,r=this.strBuf
r.length=0
for(var a=this.nextChar();;){var n=!1
switch(0|a){case-1:(0,i.warn)("Unterminated string"),t=!0
break
case 40:++e,r.push("(")
break
case 41:0==--e?(this.nextChar(),t=!0):r.push(")")
break
case 92:switch(a=this.nextChar()){case-1:(0,i.warn)("Unterminated string"),t=!0
break
case 110:r.push("\n")
break
case 114:r.push("\r")
break
case 116:r.push("\t")
break
case 98:r.push("\b")
break
case 102:r.push("\f")
break
case 92:case 40:case 41:r.push(String.fromCharCode(a))
break
case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:var o=15&a
a=this.nextChar(),n=!0,a>=48&&a<=55&&(o=(o<<3)+(15&a),(a=this.nextChar())>=48&&a<=55&&(n=!1,o=(o<<3)+(15&a))),r.push(String.fromCharCode(o))
break
case 13:10===this.peekChar()&&this.nextChar()
break
case 10:break
default:r.push(String.fromCharCode(a))}break
default:r.push(String.fromCharCode(a))}if(t)break
n||(a=this.nextChar())}return r.join("")},getName:function(){var e,a,o=this.strBuf
for(o.length=0;(e=this.nextChar())>=0&&!r[e];)if(35===e){if(e=this.nextChar(),r[e]){(0,i.warn)("Lexer_getName: NUMBER SIGN (#) should be followed by a hexadecimal number."),o.push("#")
break}var s=t(e)
if(-1!==s){a=e,e=this.nextChar()
var c=t(e)
if(-1===c){if((0,i.warn)("Lexer_getName: Illegal digit ("+String.fromCharCode(e)+") in hexadecimal number."),o.push("#",String.fromCharCode(a)),r[e])break
o.push(String.fromCharCode(e))
continue}o.push(String.fromCharCode(s<<4|c))}else o.push("#",String.fromCharCode(e))}else o.push(String.fromCharCode(e))
return o.length>127&&(0,i.warn)("name token is longer than allowed by the spec: "+o.length),n.Name.get(o.join(""))},getHexString:function(){var e=this.strBuf
e.length=0
for(var a,n,o=this.currentChar,s=!0;;){if(o<0){(0,i.warn)("Unterminated hex string")
break}if(62===o){this.nextChar()
break}if(1!==r[o]){if(s){if(-1===(a=t(o))){(0,i.warn)('Ignoring invalid character "'+o+'" in hex string'),o=this.nextChar()
continue}}else{if(-1===(n=t(o))){(0,i.warn)('Ignoring invalid character "'+o+'" in hex string'),o=this.nextChar()
continue}e.push(String.fromCharCode(a<<4|n))}s=!s,o=this.nextChar()}else o=this.nextChar()}return e.join("")},getObj:function(){for(var e=!1,t=this.currentChar;;){if(t<0)return n.EOF
if(e)10!==t&&13!==t||(e=!1)
else if(37===t)e=!0
else if(1!==r[t])break
t=this.nextChar()}switch(0|t){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 43:case 45:case 46:return this.getNumber()
case 40:return this.getString()
case 47:return this.getName()
case 91:return this.nextChar(),n.Cmd.get("[")
case 93:return this.nextChar(),n.Cmd.get("]")
case 60:return t=this.nextChar(),60===t?(this.nextChar(),n.Cmd.get("<<")):this.getHexString()
case 62:return t=this.nextChar(),62===t?(this.nextChar(),n.Cmd.get(">>")):n.Cmd.get(">")
case 123:return this.nextChar(),n.Cmd.get("{")
case 125:return this.nextChar(),n.Cmd.get("}")
case 41:throw this.nextChar(),new i.FormatError("Illegal character: "+t)}for(var a=String.fromCharCode(t),o=this.knownCommands,s=o&&void 0!==o[a];(t=this.nextChar())>=0&&!r[t];){var c=a+String.fromCharCode(t)
if(s&&void 0===o[c])break
if(128===a.length)throw new i.FormatError("Command token too long: "+a.length)
a=c,s=o&&void 0!==o[a]}return"true"===a||"false"!==a&&("null"===a?null:n.Cmd.get(a))},skipToNextLine:function(){for(var e=this.currentChar;e>=0;){if(13===e){e=this.nextChar(),10===e&&this.nextChar()
break}if(10===e){this.nextChar()
break}e=this.nextChar()}}},e}(),c={create:function(e){function t(e,t){var r=f.get(e)
if((0,i.isInt)(r)&&(t?r>=0:r>0))return r
throw new Error('The "'+e+'" parameter in the linearization dictionary is invalid.')}var r,a,c=new o(new s(e),!1,null),l=c.getObj(),u=c.getObj(),h=c.getObj(),f=c.getObj()
if(!((0,i.isInt)(l)&&(0,i.isInt)(u)&&(0,n.isCmd)(h,"obj")&&(0,n.isDict)(f)&&(0,i.isNum)(r=f.get("Linearized"))&&r>0))return null
if((a=t("L"))!==e.length)throw new Error('The "L" parameter in the linearization dictionary does not equal the stream length.')
return{length:a,hints:function(){var e,t,r=f.get("H")
if((0,i.isArray)(r)&&(2===(e=r.length)||4===e)){for(var a=0;a<e;a++)if(!((0,i.isInt)(t=r[a])&&t>0))throw new Error("Hint ("+a+") in the linearization dictionary is invalid.")
return r}throw new Error("Hint array in the linearization dictionary is invalid.")}(),objectNumberFirst:t("O"),endFirst:t("E"),numPages:t("N"),mainXRefEntriesOffset:t("T"),pageFirst:f.has("P")?t("P",!0):0}}}
t.Lexer=s,t.Linearization=c,t.Parser=o},function(e,t,r){"use strict"
var a={}.toString
e.exports=function(e){return a.call(e).slice(8,-1)}},function(e,t,r){"use strict"
var a=r(34)
e.exports=function(e,t,r){if(a(e),void 0===t)return e
switch(r){case 1:return function(r){return e.call(t,r)}
case 2:return function(r,a){return e.call(t,r,a)}
case 3:return function(r,a,i){return e.call(t,r,a,i)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){"use strict"
e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,r){"use strict"
e.exports=!1},function(e,t,r){"use strict"
var a=r(4),i=r(6),n=r(7),o=r(14)("src"),s=Function.toString,c=(""+s).split("toString")
r(18).inspectSource=function(e){return s.call(e)},(e.exports=function(e,t,r,s){var l="function"==typeof r
l&&(n(r,"name")||i(r,"name",t)),e[t]!==r&&(l&&(n(r,o)||i(r,o,e[t]?""+e[t]:c.join(String(t)))),e===a?e[t]=r:s?e[t]?e[t]=r:i(e,t,r):(delete e[t],i(e,t,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[o]||s.call(this)})},function(e,t,r){"use strict"
var a=r(9).f,i=r(7),n=r(2)("toStringTag")
e.exports=function(e,t,r){e&&!i(e=r?e:e.prototype,n)&&a(e,n,{configurable:!0,value:t})}},function(e,t,r){"use strict"
var a=r(49)("keys"),i=r(14)
e.exports=function(e){return a[e]||(a[e]=i(e))}},function(e,t,r){"use strict"
var a=r(10)
e.exports=function(e,t){if(!a(e))return e
var r,i
if(t&&"function"==typeof(r=e.toString)&&!a(i=r.call(e)))return i
if("function"==typeof(r=e.valueOf)&&!a(i=r.call(e)))return i
if(!t&&"function"==typeof(r=e.toString)&&!a(i=r.call(e)))return i
throw TypeError("Can't convert object to primitive value")}},function(e,t,r){"use strict"
function a(e){var t
if("object"!==(void 0===e?"undefined":i(e)))return!1
if((0,o.isDict)(e))t=e
else{if(!(0,o.isStream)(e))return!1
t=e.dict}return t.has("FunctionType")}Object.defineProperty(t,"__esModule",{value:!0}),t.PostScriptCompiler=t.PostScriptEvaluator=t.PDFFunction=t.isPDFFunction=void 0
var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=r(0),o=r(1),s=r(101),c=function(){return{getSampleArray:function(e,t,r,a){var i,n,o=1
for(i=0,n=e.length;i<n;i++)o*=e[i]
o*=t
var s=new Array(o),c=0,l=0,u=1/(Math.pow(2,r)-1),h=a.getBytes((o*r+7)/8),f=0
for(i=0;i<o;i++){for(;c<r;)l<<=8,l|=h[f++],c+=8
c-=r,s[i]=(l>>c)*u,l&=(1<<c)-1}return s},getIR:function(e,t){var r=t.dict
r||(r=t)
var a=[this.constructSampled,null,this.constructInterpolated,this.constructStiched,this.constructPostScript],i=r.get("FunctionType"),o=a[i]
if(!o)throw new n.FormatError("Unknown type of function")
return o.call(this,t,r,e)},fromIR:function(e){switch(e[0]){case 0:return this.constructSampledFromIR(e)
case 2:return this.constructInterpolatedFromIR(e)
case 3:return this.constructStichedFromIR(e)
default:return this.constructPostScriptFromIR(e)}},parse:function(e,t){var r=this.getIR(e,t)
return this.fromIR(r)},parseArray:function(e,t){if(!(0,n.isArray)(t))return this.parse(e,t)
for(var r=[],a=0,i=t.length;a<i;a++){var o=e.fetchIfRef(t[a])
r.push(c.parse(e,o))}return function(e,t,a,i){for(var n=0,o=r.length;n<o;n++)r[n](e,t,a,i+n)}},constructSampled:function(e,t){function r(e){for(var t=e.length,r=[],a=0,i=0;i<t;i+=2)r[a]=[e[i],e[i+1]],++a
return r}var a=t.getArray("Domain"),i=t.getArray("Range")
if(!a||!i)throw new n.FormatError("No domain or range")
var o=a.length/2,s=i.length/2
a=r(a),i=r(i)
var c=t.get("Size"),l=t.get("BitsPerSample"),u=t.get("Order")||1
1!==u&&(0,n.info)("No support for cubic spline interpolation: "+u)
var h=t.getArray("Encode")
if(!h){h=[]
for(var f=0;f<o;++f)h.push(0),h.push(c[f]-1)}h=r(h)
var d=t.getArray("Decode")
return d=d?r(d):i,[0,o,a,h,d,this.getSampleArray(c,s,l,e),c,s,Math.pow(2,l)-1,i]},constructSampledFromIR:function(e){function t(e,t,r,a,i){return a+(i-a)/(r-t)*(e-t)}return function(r,a,i,n){var o,s,c=e[1],l=e[2],u=e[3],h=e[4],f=e[5],d=e[6],g=e[7],m=e[9],p=1<<c,b=new Float64Array(p),v=new Uint32Array(p)
for(s=0;s<p;s++)b[s]=1
var y=g,w=1
for(o=0;o<c;++o){var k=l[o][0],S=l[o][1],C=Math.min(Math.max(r[a+o],k),S),x=t(C,k,S,u[o][0],u[o][1]),A=d[o]
x=Math.min(Math.max(x,0),A-1)
var P=x<A-1?Math.floor(x):x-1,I=P+1-x,_=x-P,O=P*y,T=O+y
for(s=0;s<p;s++)s&w?(b[s]*=_,v[s]+=T):(b[s]*=I,v[s]+=O)
y*=A,w<<=1}for(s=0;s<g;++s){var E=0
for(o=0;o<p;o++)E+=f[v[o]+s]*b[o]
E=t(E,0,1,h[s][0],h[s][1]),i[n+s]=Math.min(Math.max(E,m[s][0]),m[s][1])}}},constructInterpolated:function(e,t){var r=t.getArray("C0")||[0],a=t.getArray("C1")||[1],i=t.get("N")
if(!(0,n.isArray)(r)||!(0,n.isArray)(a))throw new n.FormatError("Illegal dictionary for interpolated function")
for(var o=r.length,s=[],c=0;c<o;++c)s.push(a[c]-r[c])
return[2,r,s,i]},constructInterpolatedFromIR:function(e){var t=e[1],r=e[2],a=e[3],i=r.length
return function(e,n,o,s){for(var c=1===a?e[n]:Math.pow(e[n],a),l=0;l<i;++l)o[s+l]=t[l]+c*r[l]}},constructStiched:function(e,t,r){var a=t.getArray("Domain")
if(!a)throw new n.FormatError("No domain")
if(1!=a.length/2)throw new n.FormatError("Bad domain for stiched function")
for(var i=t.get("Functions"),o=[],s=0,l=i.length;s<l;++s)o.push(c.getIR(r,r.fetchIfRef(i[s])))
return[3,a,t.getArray("Bounds"),t.getArray("Encode"),o]},constructStichedFromIR:function(e){for(var t=e[1],r=e[2],a=e[3],i=e[4],n=[],o=new Float32Array(1),s=0,l=i.length;s<l;s++)n.push(c.fromIR(i[s]))
return function(e,i,s,c){for(var l=function(e,t,r){return e>r?e=r:e<t&&(e=t),e}(e[i],t[0],t[1]),u=0,h=r.length;u<h&&!(l<r[u]);++u);var f=t[0]
u>0&&(f=r[u-1])
var d=t[1]
u<r.length&&(d=r[u])
var g=a[2*u],m=a[2*u+1]
o[0]=f===d?g:g+(l-f)*(m-g)/(d-f),n[u](o,0,s,c)}},constructPostScript:function(e,t,r){var a=t.getArray("Domain"),i=t.getArray("Range")
if(!a)throw new n.FormatError("No domain.")
if(!i)throw new n.FormatError("No range.")
var o=new s.PostScriptLexer(e)
return[4,a,i,new s.PostScriptParser(o).parse()]},constructPostScriptFromIR:function(e){var t=e[1],r=e[2],a=e[3],i=(new h).compile(a,t,r)
if(i)return new Function("src","srcOffset","dest","destOffset",i);(0,n.info)("Unable to compile PS function")
var o=r.length>>1,s=t.length>>1,c=new u(a),l=Object.create(null),f=8192,d=new Float32Array(s)
return function(e,t,a,i){var n,u,h="",g=d
for(n=0;n<s;n++)u=e[t+n],g[n]=u,h+=u+"_"
var m=l[h]
if(void 0!==m)return void a.set(m,i)
var p=new Float32Array(o),b=c.execute(g),v=b.length-o
for(n=0;n<o;n++){u=b[v+n]
var y=r[2*n]
u<y?u=y:(y=r[2*n+1],u>y&&(u=y)),p[n]=u}f>0&&(f--,l[h]=p),a.set(p,i)}}}}(),l=function(){function e(e){this.stack=e?Array.prototype.slice.call(e,0):[]}return e.prototype={push:function(e){if(this.stack.length>=100)throw new Error("PostScript function stack overflow.")
this.stack.push(e)},pop:function(){if(this.stack.length<=0)throw new Error("PostScript function stack underflow.")
return this.stack.pop()},copy:function(e){if(this.stack.length+e>=100)throw new Error("PostScript function stack overflow.")
for(var t=this.stack,r=t.length-e,a=e-1;a>=0;a--,r++)t.push(t[r])},index:function(e){this.push(this.stack[this.stack.length-e-1])},roll:function(e,t){var r,a,i,n=this.stack,o=n.length-e,s=n.length-1,c=o+(t-Math.floor(t/e)*e)
for(r=o,a=s;r<a;r++,a--)i=n[r],n[r]=n[a],n[a]=i
for(r=o,a=c-1;r<a;r++,a--)i=n[r],n[r]=n[a],n[a]=i
for(r=c,a=s;r<a;r++,a--)i=n[r],n[r]=n[a],n[a]=i}},e}(),u=function(){function e(e){this.operators=e}return e.prototype={execute:function(e){for(var t,r,a,i=new l(e),o=0,s=this.operators,c=s.length;o<c;)if("number"!=typeof(t=s[o++]))switch(t){case"jz":a=i.pop(),r=i.pop(),r||(o=a)
break
case"j":r=i.pop(),o=r
break
case"abs":r=i.pop(),i.push(Math.abs(r))
break
case"add":a=i.pop(),r=i.pop(),i.push(r+a)
break
case"and":a=i.pop(),r=i.pop(),(0,n.isBool)(r)&&(0,n.isBool)(a)?i.push(r&&a):i.push(r&a)
break
case"atan":r=i.pop(),i.push(Math.atan(r))
break
case"bitshift":a=i.pop(),r=i.pop(),r>0?i.push(r<<a):i.push(r>>a)
break
case"ceiling":r=i.pop(),i.push(Math.ceil(r))
break
case"copy":r=i.pop(),i.copy(r)
break
case"cos":r=i.pop(),i.push(Math.cos(r))
break
case"cvi":r=0|i.pop(),i.push(r)
break
case"cvr":break
case"div":a=i.pop(),r=i.pop(),i.push(r/a)
break
case"dup":i.copy(1)
break
case"eq":a=i.pop(),r=i.pop(),i.push(r===a)
break
case"exch":i.roll(2,1)
break
case"exp":a=i.pop(),r=i.pop(),i.push(Math.pow(r,a))
break
case"false":i.push(!1)
break
case"floor":r=i.pop(),i.push(Math.floor(r))
break
case"ge":a=i.pop(),r=i.pop(),i.push(r>=a)
break
case"gt":a=i.pop(),r=i.pop(),i.push(r>a)
break
case"idiv":a=i.pop(),r=i.pop(),i.push(r/a|0)
break
case"index":r=i.pop(),i.index(r)
break
case"le":a=i.pop(),r=i.pop(),i.push(r<=a)
break
case"ln":r=i.pop(),i.push(Math.log(r))
break
case"log":r=i.pop(),i.push(Math.log(r)/Math.LN10)
break
case"lt":a=i.pop(),r=i.pop(),i.push(r<a)
break
case"mod":a=i.pop(),r=i.pop(),i.push(r%a)
break
case"mul":a=i.pop(),r=i.pop(),i.push(r*a)
break
case"ne":a=i.pop(),r=i.pop(),i.push(r!==a)
break
case"neg":r=i.pop(),i.push(-r)
break
case"not":r=i.pop(),(0,n.isBool)(r)?i.push(!r):i.push(~r)
break
case"or":a=i.pop(),r=i.pop(),(0,n.isBool)(r)&&(0,n.isBool)(a)?i.push(r||a):i.push(r|a)
break
case"pop":i.pop()
break
case"roll":a=i.pop(),r=i.pop(),i.roll(r,a)
break
case"round":r=i.pop(),i.push(Math.round(r))
break
case"sin":r=i.pop(),i.push(Math.sin(r))
break
case"sqrt":r=i.pop(),i.push(Math.sqrt(r))
break
case"sub":a=i.pop(),r=i.pop(),i.push(r-a)
break
case"true":i.push(!0)
break
case"truncate":r=i.pop(),r=r<0?Math.ceil(r):Math.floor(r),i.push(r)
break
case"xor":a=i.pop(),r=i.pop(),(0,n.isBool)(r)&&(0,n.isBool)(a)?i.push(r!==a):i.push(r^a)
break
default:throw new n.FormatError("Unknown operator "+t)}else i.push(t)
return i.stack}},e}(),h=function(){function e(e){this.type=e}function t(t,r,a){e.call(this,"args"),this.index=t,this.min=r,this.max=a}function r(t){e.call(this,"literal"),this.number=t,this.min=t,this.max=t}function a(t,r,a,i,n){e.call(this,"binary"),this.op=t,this.arg1=r,this.arg2=a,this.min=i,this.max=n}function i(t,r){e.call(this,"max"),this.arg=t,this.min=t.min,this.max=r}function n(t,r,a){e.call(this,"var"),this.index=t,this.min=r,this.max=a}function o(t,r){e.call(this,"definition"),this.variable=t,this.arg=r}function s(){this.parts=[]}function c(e,t){return"literal"===t.type&&0===t.number?e:"literal"===e.type&&0===e.number?t:"literal"===t.type&&"literal"===e.type?new r(e.number+t.number):new a("+",e,t,e.min+t.min,e.max+t.max)}function l(e,t){if("literal"===t.type){if(0===t.number)return new r(0)
if(1===t.number)return e
if("literal"===e.type)return new r(e.number*t.number)}if("literal"===e.type){if(0===e.number)return new r(0)
if(1===e.number)return t}return new a("*",e,t,Math.min(e.min*t.min,e.min*t.max,e.max*t.min,e.max*t.max),Math.max(e.min*t.min,e.min*t.max,e.max*t.min,e.max*t.max))}function u(e,t){if("literal"===t.type){if(0===t.number)return e
if("literal"===e.type)return new r(e.number-t.number)}return"binary"===t.type&&"-"===t.op&&"literal"===e.type&&1===e.number&&"literal"===t.arg1.type&&1===t.arg1.number?t.arg2:new a("-",e,t,e.min-t.max,e.max-t.min)}function h(e,t){return e.min>=t?new r(t):e.max<=t?e:new i(e,t)}function f(){}return e.prototype.visit=function(e){throw new Error("abstract method")},t.prototype=Object.create(e.prototype),t.prototype.visit=function(e){e.visitArgument(this)},r.prototype=Object.create(e.prototype),r.prototype.visit=function(e){e.visitLiteral(this)},a.prototype=Object.create(e.prototype),a.prototype.visit=function(e){e.visitBinaryOperation(this)},i.prototype=Object.create(e.prototype),i.prototype.visit=function(e){e.visitMin(this)},n.prototype=Object.create(e.prototype),n.prototype.visit=function(e){e.visitVariable(this)},o.prototype=Object.create(e.prototype),o.prototype.visit=function(e){e.visitVariableDefinition(this)},s.prototype={visitArgument:function(e){this.parts.push("Math.max(",e.min,", Math.min(",e.max,", src[srcOffset + ",e.index,"]))")},visitVariable:function(e){this.parts.push("v",e.index)},visitLiteral:function(e){this.parts.push(e.number)},visitBinaryOperation:function(e){this.parts.push("("),e.arg1.visit(this),this.parts.push(" ",e.op," "),e.arg2.visit(this),this.parts.push(")")},visitVariableDefinition:function(e){this.parts.push("var "),e.variable.visit(this),this.parts.push(" = "),e.arg.visit(this),this.parts.push(";")},visitMin:function(e){this.parts.push("Math.min("),e.arg.visit(this),this.parts.push(", ",e.max,")")},toString:function(){return this.parts.join("")}},f.prototype={compile:function(e,a,i){var f,d,g,m,p,b,v,y,w,k,S=[],C=[],x=a.length>>1,A=i.length>>1,P=0
for(f=0;f<x;f++)S.push(new t(f,a[2*f],a[2*f+1]))
for(f=0,d=e.length;f<d;f++)if("number"!=typeof(k=e[f]))switch(k){case"add":if(S.length<2)return null
b=S.pop(),p=S.pop(),S.push(c(p,b))
break
case"cvr":if(S.length<1)return null
break
case"mul":if(S.length<2)return null
b=S.pop(),p=S.pop(),S.push(l(p,b))
break
case"sub":if(S.length<2)return null
b=S.pop(),p=S.pop(),S.push(u(p,b))
break
case"exch":if(S.length<2)return null
v=S.pop(),y=S.pop(),S.push(v,y)
break
case"pop":if(S.length<1)return null
S.pop()
break
case"index":if(S.length<1)return null
if(p=S.pop(),"literal"!==p.type)return null
if((g=p.number)<0||(0|g)!==g||S.length<g)return null
if(v=S[S.length-g-1],"literal"===v.type||"var"===v.type){S.push(v)
break}w=new n(P++,v.min,v.max),S[S.length-g-1]=w,S.push(w),C.push(new o(w,v))
break
case"dup":if(S.length<1)return null
if("number"==typeof e[f+1]&&"gt"===e[f+2]&&e[f+3]===f+7&&"jz"===e[f+4]&&"pop"===e[f+5]&&e[f+6]===e[f+1]){p=S.pop(),S.push(h(p,e[f+1])),f+=6
break}if(v=S[S.length-1],"literal"===v.type||"var"===v.type){S.push(v)
break}w=new n(P++,v.min,v.max),S[S.length-1]=w,S.push(w),C.push(new o(w,v))
break
case"roll":if(S.length<2)return null
if(b=S.pop(),p=S.pop(),"literal"!==b.type||"literal"!==p.type)return null
if(m=b.number,(g=p.number)<=0||(0|g)!==g||(0|m)!==m||S.length<g)return null
if(0===(m=(m%g+g)%g))break
Array.prototype.push.apply(S,S.splice(S.length-g,g-m))
break
default:return null}else S.push(new r(k))
if(S.length!==A)return null
var I=[]
return C.forEach(function(e){var t=new s
e.visit(t),I.push(t.toString())}),S.forEach(function(e,t){var r=new s
e.visit(r)
var a=i[2*t],n=i[2*t+1],o=[r.toString()]
a>e.min&&(o.unshift("Math.max(",a,", "),o.push(")")),n<e.max&&(o.unshift("Math.min(",n,", "),o.push(")")),o.unshift("dest[destOffset + ",t,"] = "),o.push(";"),I.push(o.join(""))}),I.join("\n")}},f}()
t.isPDFFunction=a,t.PDFFunction=c,t.PostScriptEvaluator=u,t.PostScriptCompiler=h},function(e,t,r){"use strict"
var a=r(0).getLookupTableFactory,i=a(function(e){e.A=65,e.AE=198,e.AEacute=508,e.AEmacron=482,e.AEsmall=63462,e.Aacute=193,e.Aacutesmall=63457,e.Abreve=258,e.Abreveacute=7854,e.Abrevecyrillic=1232,e.Abrevedotbelow=7862,e.Abrevegrave=7856,e.Abrevehookabove=7858,e.Abrevetilde=7860,e.Acaron=461,e.Acircle=9398,e.Acircumflex=194,e.Acircumflexacute=7844,e.Acircumflexdotbelow=7852,e.Acircumflexgrave=7846,e.Acircumflexhookabove=7848,e.Acircumflexsmall=63458,e.Acircumflextilde=7850,e.Acute=63177,e.Acutesmall=63412,e.Acyrillic=1040,e.Adblgrave=512,e.Adieresis=196,e.Adieresiscyrillic=1234,e.Adieresismacron=478,e.Adieresissmall=63460,e.Adotbelow=7840,e.Adotmacron=480,e.Agrave=192,e.Agravesmall=63456,e.Ahookabove=7842,e.Aiecyrillic=1236,e.Ainvertedbreve=514,e.Alpha=913,e.Alphatonos=902,e.Amacron=256,e.Amonospace=65313,e.Aogonek=260,e.Aring=197,e.Aringacute=506,e.Aringbelow=7680,e.Aringsmall=63461,e.Asmall=63329,e.Atilde=195,e.Atildesmall=63459,e.Aybarmenian=1329,e.B=66,e.Bcircle=9399,e.Bdotaccent=7682,e.Bdotbelow=7684,e.Becyrillic=1041,e.Benarmenian=1330,e.Beta=914,e.Bhook=385,e.Blinebelow=7686,e.Bmonospace=65314,e.Brevesmall=63220,e.Bsmall=63330,e.Btopbar=386,e.C=67,e.Caarmenian=1342,e.Cacute=262,e.Caron=63178,e.Caronsmall=63221,e.Ccaron=268,e.Ccedilla=199,e.Ccedillaacute=7688,e.Ccedillasmall=63463,e.Ccircle=9400,e.Ccircumflex=264,e.Cdot=266,e.Cdotaccent=266,e.Cedillasmall=63416,e.Chaarmenian=1353,e.Cheabkhasiancyrillic=1212,e.Checyrillic=1063,e.Chedescenderabkhasiancyrillic=1214,e.Chedescendercyrillic=1206,e.Chedieresiscyrillic=1268,e.Cheharmenian=1347,e.Chekhakassiancyrillic=1227,e.Cheverticalstrokecyrillic=1208,e.Chi=935,e.Chook=391,e.Circumflexsmall=63222,e.Cmonospace=65315,e.Coarmenian=1361,e.Csmall=63331,e.D=68,e.DZ=497,e.DZcaron=452,e.Daarmenian=1332,e.Dafrican=393,e.Dcaron=270,e.Dcedilla=7696,e.Dcircle=9401,e.Dcircumflexbelow=7698,e.Dcroat=272,e.Ddotaccent=7690,e.Ddotbelow=7692,e.Decyrillic=1044,e.Deicoptic=1006,e.Delta=8710,e.Deltagreek=916,e.Dhook=394,e.Dieresis=63179,e.DieresisAcute=63180,e.DieresisGrave=63181,e.Dieresissmall=63400,e.Digammagreek=988,e.Djecyrillic=1026,e.Dlinebelow=7694,e.Dmonospace=65316,e.Dotaccentsmall=63223,e.Dslash=272,e.Dsmall=63332,e.Dtopbar=395,e.Dz=498,e.Dzcaron=453,e.Dzeabkhasiancyrillic=1248,e.Dzecyrillic=1029,e.Dzhecyrillic=1039,e.E=69,e.Eacute=201,e.Eacutesmall=63465,e.Ebreve=276,e.Ecaron=282,e.Ecedillabreve=7708,e.Echarmenian=1333,e.Ecircle=9402,e.Ecircumflex=202,e.Ecircumflexacute=7870,e.Ecircumflexbelow=7704,e.Ecircumflexdotbelow=7878,e.Ecircumflexgrave=7872,e.Ecircumflexhookabove=7874,e.Ecircumflexsmall=63466,e.Ecircumflextilde=7876,e.Ecyrillic=1028,e.Edblgrave=516,e.Edieresis=203,e.Edieresissmall=63467,e.Edot=278,e.Edotaccent=278,e.Edotbelow=7864,e.Efcyrillic=1060,e.Egrave=200,e.Egravesmall=63464,e.Eharmenian=1335,e.Ehookabove=7866,e.Eightroman=8551,e.Einvertedbreve=518,e.Eiotifiedcyrillic=1124,e.Elcyrillic=1051,e.Elevenroman=8554,e.Emacron=274,e.Emacronacute=7702,e.Emacrongrave=7700,e.Emcyrillic=1052,e.Emonospace=65317,e.Encyrillic=1053,e.Endescendercyrillic=1186,e.Eng=330,e.Enghecyrillic=1188,e.Enhookcyrillic=1223,e.Eogonek=280,e.Eopen=400,e.Epsilon=917,e.Epsilontonos=904,e.Ercyrillic=1056,e.Ereversed=398,e.Ereversedcyrillic=1069,e.Escyrillic=1057,e.Esdescendercyrillic=1194,e.Esh=425,e.Esmall=63333,e.Eta=919,e.Etarmenian=1336,e.Etatonos=905,e.Eth=208,e.Ethsmall=63472,e.Etilde=7868,e.Etildebelow=7706,e.Euro=8364,e.Ezh=439,e.Ezhcaron=494,e.Ezhreversed=440,e.F=70,e.Fcircle=9403,e.Fdotaccent=7710,e.Feharmenian=1366,e.Feicoptic=996,e.Fhook=401,e.Fitacyrillic=1138,e.Fiveroman=8548
e.Fmonospace=65318,e.Fourroman=8547,e.Fsmall=63334,e.G=71,e.GBsquare=13191,e.Gacute=500,e.Gamma=915,e.Gammaafrican=404,e.Gangiacoptic=1002,e.Gbreve=286,e.Gcaron=486,e.Gcedilla=290,e.Gcircle=9404,e.Gcircumflex=284,e.Gcommaaccent=290,e.Gdot=288,e.Gdotaccent=288,e.Gecyrillic=1043,e.Ghadarmenian=1346,e.Ghemiddlehookcyrillic=1172,e.Ghestrokecyrillic=1170,e.Gheupturncyrillic=1168,e.Ghook=403,e.Gimarmenian=1331,e.Gjecyrillic=1027,e.Gmacron=7712,e.Gmonospace=65319,e.Grave=63182,e.Gravesmall=63328,e.Gsmall=63335,e.Gsmallhook=667,e.Gstroke=484,e.H=72,e.H18533=9679,e.H18543=9642,e.H18551=9643,e.H22073=9633,e.HPsquare=13259,e.Haabkhasiancyrillic=1192,e.Hadescendercyrillic=1202,e.Hardsigncyrillic=1066,e.Hbar=294,e.Hbrevebelow=7722,e.Hcedilla=7720,e.Hcircle=9405,e.Hcircumflex=292,e.Hdieresis=7718,e.Hdotaccent=7714,e.Hdotbelow=7716,e.Hmonospace=65320,e.Hoarmenian=1344,e.Horicoptic=1e3,e.Hsmall=63336,e.Hungarumlaut=63183,e.Hungarumlautsmall=63224,e.Hzsquare=13200,e.I=73,e.IAcyrillic=1071,e.IJ=306,e.IUcyrillic=1070,e.Iacute=205,e.Iacutesmall=63469,e.Ibreve=300,e.Icaron=463,e.Icircle=9406,e.Icircumflex=206,e.Icircumflexsmall=63470,e.Icyrillic=1030,e.Idblgrave=520,e.Idieresis=207,e.Idieresisacute=7726,e.Idieresiscyrillic=1252,e.Idieresissmall=63471,e.Idot=304,e.Idotaccent=304,e.Idotbelow=7882,e.Iebrevecyrillic=1238,e.Iecyrillic=1045,e.Ifraktur=8465,e.Igrave=204,e.Igravesmall=63468,e.Ihookabove=7880,e.Iicyrillic=1048,e.Iinvertedbreve=522,e.Iishortcyrillic=1049,e.Imacron=298,e.Imacroncyrillic=1250,e.Imonospace=65321,e.Iniarmenian=1339,e.Iocyrillic=1025,e.Iogonek=302,e.Iota=921,e.Iotaafrican=406,e.Iotadieresis=938,e.Iotatonos=906,e.Ismall=63337,e.Istroke=407,e.Itilde=296,e.Itildebelow=7724,e.Izhitsacyrillic=1140,e.Izhitsadblgravecyrillic=1142,e.J=74,e.Jaarmenian=1345,e.Jcircle=9407,e.Jcircumflex=308,e.Jecyrillic=1032,e.Jheharmenian=1355,e.Jmonospace=65322,e.Jsmall=63338,e.K=75,e.KBsquare=13189,e.KKsquare=13261,e.Kabashkircyrillic=1184,e.Kacute=7728,e.Kacyrillic=1050,e.Kadescendercyrillic=1178,e.Kahookcyrillic=1219,e.Kappa=922,e.Kastrokecyrillic=1182,e.Kaverticalstrokecyrillic=1180,e.Kcaron=488,e.Kcedilla=310,e.Kcircle=9408,e.Kcommaaccent=310,e.Kdotbelow=7730,e.Keharmenian=1364,e.Kenarmenian=1343,e.Khacyrillic=1061,e.Kheicoptic=998,e.Khook=408,e.Kjecyrillic=1036,e.Klinebelow=7732,e.Kmonospace=65323,e.Koppacyrillic=1152,e.Koppagreek=990,e.Ksicyrillic=1134,e.Ksmall=63339,e.L=76,e.LJ=455,e.LL=63167,e.Lacute=313,e.Lambda=923,e.Lcaron=317,e.Lcedilla=315,e.Lcircle=9409,e.Lcircumflexbelow=7740,e.Lcommaaccent=315,e.Ldot=319,e.Ldotaccent=319,e.Ldotbelow=7734,e.Ldotbelowmacron=7736,e.Liwnarmenian=1340,e.Lj=456,e.Ljecyrillic=1033,e.Llinebelow=7738,e.Lmonospace=65324,e.Lslash=321,e.Lslashsmall=63225,e.Lsmall=63340,e.M=77,e.MBsquare=13190,e.Macron=63184,e.Macronsmall=63407,e.Macute=7742,e.Mcircle=9410,e.Mdotaccent=7744,e.Mdotbelow=7746,e.Menarmenian=1348,e.Mmonospace=65325,e.Msmall=63341,e.Mturned=412,e.Mu=924,e.N=78,e.NJ=458,e.Nacute=323,e.Ncaron=327,e.Ncedilla=325,e.Ncircle=9411,e.Ncircumflexbelow=7754,e.Ncommaaccent=325,e.Ndotaccent=7748,e.Ndotbelow=7750,e.Nhookleft=413,e.Nineroman=8552,e.Nj=459,e.Njecyrillic=1034,e.Nlinebelow=7752,e.Nmonospace=65326,e.Nowarmenian=1350,e.Nsmall=63342,e.Ntilde=209,e.Ntildesmall=63473,e.Nu=925,e.O=79,e.OE=338,e.OEsmall=63226,e.Oacute=211,e.Oacutesmall=63475,e.Obarredcyrillic=1256,e.Obarreddieresiscyrillic=1258
e.Obreve=334,e.Ocaron=465,e.Ocenteredtilde=415,e.Ocircle=9412,e.Ocircumflex=212,e.Ocircumflexacute=7888,e.Ocircumflexdotbelow=7896,e.Ocircumflexgrave=7890,e.Ocircumflexhookabove=7892,e.Ocircumflexsmall=63476,e.Ocircumflextilde=7894,e.Ocyrillic=1054,e.Odblacute=336,e.Odblgrave=524,e.Odieresis=214,e.Odieresiscyrillic=1254,e.Odieresissmall=63478,e.Odotbelow=7884,e.Ogoneksmall=63227,e.Ograve=210,e.Ogravesmall=63474,e.Oharmenian=1365,e.Ohm=8486,e.Ohookabove=7886,e.Ohorn=416,e.Ohornacute=7898,e.Ohorndotbelow=7906,e.Ohorngrave=7900,e.Ohornhookabove=7902,e.Ohorntilde=7904,e.Ohungarumlaut=336,e.Oi=418,e.Oinvertedbreve=526,e.Omacron=332,e.Omacronacute=7762,e.Omacrongrave=7760,e.Omega=8486,e.Omegacyrillic=1120,e.Omegagreek=937,e.Omegaroundcyrillic=1146,e.Omegatitlocyrillic=1148,e.Omegatonos=911,e.Omicron=927,e.Omicrontonos=908,e.Omonospace=65327,e.Oneroman=8544,e.Oogonek=490,e.Oogonekmacron=492,e.Oopen=390,e.Oslash=216,e.Oslashacute=510,e.Oslashsmall=63480,e.Osmall=63343,e.Ostrokeacute=510,e.Otcyrillic=1150,e.Otilde=213,e.Otildeacute=7756,e.Otildedieresis=7758,e.Otildesmall=63477,e.P=80,e.Pacute=7764,e.Pcircle=9413,e.Pdotaccent=7766,e.Pecyrillic=1055,e.Peharmenian=1354,e.Pemiddlehookcyrillic=1190,e.Phi=934,e.Phook=420,e.Pi=928,e.Piwrarmenian=1363,e.Pmonospace=65328,e.Psi=936,e.Psicyrillic=1136,e.Psmall=63344,e.Q=81,e.Qcircle=9414,e.Qmonospace=65329,e.Qsmall=63345,e.R=82,e.Raarmenian=1356,e.Racute=340,e.Rcaron=344,e.Rcedilla=342,e.Rcircle=9415,e.Rcommaaccent=342,e.Rdblgrave=528,e.Rdotaccent=7768,e.Rdotbelow=7770,e.Rdotbelowmacron=7772,e.Reharmenian=1360,e.Rfraktur=8476,e.Rho=929,e.Ringsmall=63228,e.Rinvertedbreve=530,e.Rlinebelow=7774,e.Rmonospace=65330,e.Rsmall=63346,e.Rsmallinverted=641,e.Rsmallinvertedsuperior=694,e.S=83,e.SF010000=9484,e.SF020000=9492,e.SF030000=9488,e.SF040000=9496,e.SF050000=9532,e.SF060000=9516,e.SF070000=9524,e.SF080000=9500,e.SF090000=9508,e.SF100000=9472,e.SF110000=9474,e.SF190000=9569,e.SF200000=9570,e.SF210000=9558,e.SF220000=9557,e.SF230000=9571,e.SF240000=9553,e.SF250000=9559,e.SF260000=9565,e.SF270000=9564,e.SF280000=9563,e.SF360000=9566,e.SF370000=9567,e.SF380000=9562,e.SF390000=9556,e.SF400000=9577,e.SF410000=9574,e.SF420000=9568,e.SF430000=9552,e.SF440000=9580,e.SF450000=9575,e.SF460000=9576,e.SF470000=9572,e.SF480000=9573,e.SF490000=9561,e.SF500000=9560,e.SF510000=9554,e.SF520000=9555,e.SF530000=9579,e.SF540000=9578,e.Sacute=346,e.Sacutedotaccent=7780,e.Sampigreek=992,e.Scaron=352,e.Scarondotaccent=7782,e.Scaronsmall=63229,e.Scedilla=350,e.Schwa=399,e.Schwacyrillic=1240,e.Schwadieresiscyrillic=1242,e.Scircle=9416,e.Scircumflex=348,e.Scommaaccent=536,e.Sdotaccent=7776,e.Sdotbelow=7778,e.Sdotbelowdotaccent=7784,e.Seharmenian=1357,e.Sevenroman=8550,e.Shaarmenian=1351,e.Shacyrillic=1064,e.Shchacyrillic=1065,e.Sheicoptic=994,e.Shhacyrillic=1210,e.Shimacoptic=1004,e.Sigma=931,e.Sixroman=8549,e.Smonospace=65331,e.Softsigncyrillic=1068,e.Ssmall=63347,e.Stigmagreek=986,e.T=84,e.Tau=932,e.Tbar=358,e.Tcaron=356,e.Tcedilla=354,e.Tcircle=9417,e.Tcircumflexbelow=7792,e.Tcommaaccent=354,e.Tdotaccent=7786,e.Tdotbelow=7788,e.Tecyrillic=1058,e.Tedescendercyrillic=1196,e.Tenroman=8553,e.Tetsecyrillic=1204,e.Theta=920,e.Thook=428,e.Thorn=222,e.Thornsmall=63486,e.Threeroman=8546,e.Tildesmall=63230,e.Tiwnarmenian=1359,e.Tlinebelow=7790,e.Tmonospace=65332,e.Toarmenian=1337,e.Tonefive=444,e.Tonesix=388,e.Tonetwo=423,e.Tretroflexhook=430,e.Tsecyrillic=1062,e.Tshecyrillic=1035
e.Tsmall=63348,e.Twelveroman=8555,e.Tworoman=8545,e.U=85,e.Uacute=218,e.Uacutesmall=63482,e.Ubreve=364,e.Ucaron=467,e.Ucircle=9418,e.Ucircumflex=219,e.Ucircumflexbelow=7798,e.Ucircumflexsmall=63483,e.Ucyrillic=1059,e.Udblacute=368,e.Udblgrave=532,e.Udieresis=220,e.Udieresisacute=471,e.Udieresisbelow=7794,e.Udieresiscaron=473,e.Udieresiscyrillic=1264,e.Udieresisgrave=475,e.Udieresismacron=469,e.Udieresissmall=63484,e.Udotbelow=7908,e.Ugrave=217,e.Ugravesmall=63481,e.Uhookabove=7910,e.Uhorn=431,e.Uhornacute=7912,e.Uhorndotbelow=7920,e.Uhorngrave=7914,e.Uhornhookabove=7916,e.Uhorntilde=7918,e.Uhungarumlaut=368,e.Uhungarumlautcyrillic=1266,e.Uinvertedbreve=534,e.Ukcyrillic=1144,e.Umacron=362,e.Umacroncyrillic=1262,e.Umacrondieresis=7802,e.Umonospace=65333,e.Uogonek=370,e.Upsilon=933,e.Upsilon1=978,e.Upsilonacutehooksymbolgreek=979,e.Upsilonafrican=433,e.Upsilondieresis=939,e.Upsilondieresishooksymbolgreek=980,e.Upsilonhooksymbol=978,e.Upsilontonos=910,e.Uring=366,e.Ushortcyrillic=1038,e.Usmall=63349,e.Ustraightcyrillic=1198,e.Ustraightstrokecyrillic=1200,e.Utilde=360,e.Utildeacute=7800,e.Utildebelow=7796,e.V=86,e.Vcircle=9419,e.Vdotbelow=7806,e.Vecyrillic=1042,e.Vewarmenian=1358,e.Vhook=434,e.Vmonospace=65334,e.Voarmenian=1352,e.Vsmall=63350,e.Vtilde=7804,e.W=87,e.Wacute=7810,e.Wcircle=9420,e.Wcircumflex=372,e.Wdieresis=7812,e.Wdotaccent=7814,e.Wdotbelow=7816,e.Wgrave=7808,e.Wmonospace=65335,e.Wsmall=63351,e.X=88,e.Xcircle=9421,e.Xdieresis=7820,e.Xdotaccent=7818,e.Xeharmenian=1341,e.Xi=926,e.Xmonospace=65336,e.Xsmall=63352,e.Y=89,e.Yacute=221,e.Yacutesmall=63485,e.Yatcyrillic=1122,e.Ycircle=9422,e.Ycircumflex=374,e.Ydieresis=376,e.Ydieresissmall=63487,e.Ydotaccent=7822,e.Ydotbelow=7924,e.Yericyrillic=1067,e.Yerudieresiscyrillic=1272,e.Ygrave=7922,e.Yhook=435,e.Yhookabove=7926,e.Yiarmenian=1349,e.Yicyrillic=1031,e.Yiwnarmenian=1362,e.Ymonospace=65337,e.Ysmall=63353,e.Ytilde=7928,e.Yusbigcyrillic=1130,e.Yusbigiotifiedcyrillic=1132,e.Yuslittlecyrillic=1126,e.Yuslittleiotifiedcyrillic=1128,e.Z=90,e.Zaarmenian=1334,e.Zacute=377,e.Zcaron=381,e.Zcaronsmall=63231,e.Zcircle=9423,e.Zcircumflex=7824,e.Zdot=379,e.Zdotaccent=379,e.Zdotbelow=7826,e.Zecyrillic=1047,e.Zedescendercyrillic=1176,e.Zedieresiscyrillic=1246,e.Zeta=918,e.Zhearmenian=1338,e.Zhebrevecyrillic=1217,e.Zhecyrillic=1046,e.Zhedescendercyrillic=1174,e.Zhedieresiscyrillic=1244,e.Zlinebelow=7828,e.Zmonospace=65338,e.Zsmall=63354,e.Zstroke=437,e.a=97,e.aabengali=2438,e.aacute=225,e.aadeva=2310,e.aagujarati=2694,e.aagurmukhi=2566,e.aamatragurmukhi=2622,e.aarusquare=13059,e.aavowelsignbengali=2494,e.aavowelsigndeva=2366,e.aavowelsigngujarati=2750,e.abbreviationmarkarmenian=1375,e.abbreviationsigndeva=2416,e.abengali=2437,e.abopomofo=12570,e.abreve=259,e.abreveacute=7855,e.abrevecyrillic=1233,e.abrevedotbelow=7863,e.abrevegrave=7857,e.abrevehookabove=7859,e.abrevetilde=7861,e.acaron=462,e.acircle=9424,e.acircumflex=226,e.acircumflexacute=7845,e.acircumflexdotbelow=7853,e.acircumflexgrave=7847,e.acircumflexhookabove=7849,e.acircumflextilde=7851,e.acute=180,e.acutebelowcmb=791,e.acutecmb=769,e.acutecomb=769,e.acutedeva=2388,e.acutelowmod=719,e.acutetonecmb=833,e.acyrillic=1072,e.adblgrave=513,e.addakgurmukhi=2673,e.adeva=2309,e.adieresis=228,e.adieresiscyrillic=1235,e.adieresismacron=479,e.adotbelow=7841,e.adotmacron=481,e.ae=230,e.aeacute=509,e.aekorean=12624,e.aemacron=483,e.afii00208=8213,e.afii08941=8356,e.afii10017=1040,e.afii10018=1041,e.afii10019=1042,e.afii10020=1043,e.afii10021=1044,e.afii10022=1045,e.afii10023=1025,e.afii10024=1046,e.afii10025=1047,e.afii10026=1048,e.afii10027=1049,e.afii10028=1050,e.afii10029=1051,e.afii10030=1052
e.afii10031=1053,e.afii10032=1054,e.afii10033=1055,e.afii10034=1056,e.afii10035=1057,e.afii10036=1058,e.afii10037=1059,e.afii10038=1060,e.afii10039=1061,e.afii10040=1062,e.afii10041=1063,e.afii10042=1064,e.afii10043=1065,e.afii10044=1066,e.afii10045=1067,e.afii10046=1068,e.afii10047=1069,e.afii10048=1070,e.afii10049=1071,e.afii10050=1168,e.afii10051=1026,e.afii10052=1027,e.afii10053=1028,e.afii10054=1029,e.afii10055=1030,e.afii10056=1031,e.afii10057=1032,e.afii10058=1033,e.afii10059=1034,e.afii10060=1035,e.afii10061=1036,e.afii10062=1038,e.afii10063=63172,e.afii10064=63173,e.afii10065=1072,e.afii10066=1073,e.afii10067=1074,e.afii10068=1075,e.afii10069=1076,e.afii10070=1077,e.afii10071=1105,e.afii10072=1078,e.afii10073=1079,e.afii10074=1080,e.afii10075=1081,e.afii10076=1082,e.afii10077=1083,e.afii10078=1084,e.afii10079=1085,e.afii10080=1086,e.afii10081=1087,e.afii10082=1088,e.afii10083=1089,e.afii10084=1090,e.afii10085=1091,e.afii10086=1092,e.afii10087=1093,e.afii10088=1094,e.afii10089=1095,e.afii10090=1096,e.afii10091=1097,e.afii10092=1098,e.afii10093=1099,e.afii10094=1100,e.afii10095=1101,e.afii10096=1102,e.afii10097=1103,e.afii10098=1169,e.afii10099=1106,e.afii10100=1107,e.afii10101=1108,e.afii10102=1109,e.afii10103=1110,e.afii10104=1111,e.afii10105=1112,e.afii10106=1113,e.afii10107=1114,e.afii10108=1115,e.afii10109=1116,e.afii10110=1118,e.afii10145=1039,e.afii10146=1122,e.afii10147=1138,e.afii10148=1140,e.afii10192=63174,e.afii10193=1119,e.afii10194=1123,e.afii10195=1139,e.afii10196=1141,e.afii10831=63175,e.afii10832=63176,e.afii10846=1241,e.afii299=8206,e.afii300=8207,e.afii301=8205,e.afii57381=1642,e.afii57388=1548,e.afii57392=1632,e.afii57393=1633,e.afii57394=1634,e.afii57395=1635,e.afii57396=1636,e.afii57397=1637,e.afii57398=1638,e.afii57399=1639,e.afii57400=1640,e.afii57401=1641,e.afii57403=1563,e.afii57407=1567,e.afii57409=1569,e.afii57410=1570,e.afii57411=1571,e.afii57412=1572,e.afii57413=1573,e.afii57414=1574,e.afii57415=1575,e.afii57416=1576,e.afii57417=1577,e.afii57418=1578,e.afii57419=1579,e.afii57420=1580,e.afii57421=1581,e.afii57422=1582,e.afii57423=1583,e.afii57424=1584,e.afii57425=1585,e.afii57426=1586,e.afii57427=1587,e.afii57428=1588,e.afii57429=1589,e.afii57430=1590,e.afii57431=1591,e.afii57432=1592,e.afii57433=1593,e.afii57434=1594,e.afii57440=1600,e.afii57441=1601,e.afii57442=1602,e.afii57443=1603,e.afii57444=1604,e.afii57445=1605,e.afii57446=1606,e.afii57448=1608,e.afii57449=1609,e.afii57450=1610,e.afii57451=1611,e.afii57452=1612,e.afii57453=1613,e.afii57454=1614,e.afii57455=1615,e.afii57456=1616,e.afii57457=1617,e.afii57458=1618,e.afii57470=1607,e.afii57505=1700,e.afii57506=1662,e.afii57507=1670,e.afii57508=1688,e.afii57509=1711,e.afii57511=1657,e.afii57512=1672,e.afii57513=1681,e.afii57514=1722,e.afii57519=1746,e.afii57534=1749,e.afii57636=8362,e.afii57645=1470,e.afii57658=1475,e.afii57664=1488,e.afii57665=1489,e.afii57666=1490,e.afii57667=1491,e.afii57668=1492,e.afii57669=1493,e.afii57670=1494,e.afii57671=1495,e.afii57672=1496,e.afii57673=1497,e.afii57674=1498,e.afii57675=1499,e.afii57676=1500,e.afii57677=1501,e.afii57678=1502,e.afii57679=1503,e.afii57680=1504,e.afii57681=1505,e.afii57682=1506,e.afii57683=1507,e.afii57684=1508,e.afii57685=1509,e.afii57686=1510,e.afii57687=1511,e.afii57688=1512,e.afii57689=1513,e.afii57690=1514,e.afii57694=64298,e.afii57695=64299,e.afii57700=64331,e.afii57705=64287,e.afii57716=1520
e.afii57717=1521,e.afii57718=1522,e.afii57723=64309,e.afii57793=1460,e.afii57794=1461,e.afii57795=1462,e.afii57796=1467,e.afii57797=1464,e.afii57798=1463,e.afii57799=1456,e.afii57800=1458,e.afii57801=1457,e.afii57802=1459,e.afii57803=1474,e.afii57804=1473,e.afii57806=1465,e.afii57807=1468,e.afii57839=1469,e.afii57841=1471,e.afii57842=1472,e.afii57929=700,e.afii61248=8453,e.afii61289=8467,e.afii61352=8470,e.afii61573=8236,e.afii61574=8237,e.afii61575=8238,e.afii61664=8204,e.afii63167=1645,e.afii64937=701,e.agrave=224,e.agujarati=2693,e.agurmukhi=2565,e.ahiragana=12354,e.ahookabove=7843,e.aibengali=2448,e.aibopomofo=12574,e.aideva=2320,e.aiecyrillic=1237,e.aigujarati=2704,e.aigurmukhi=2576,e.aimatragurmukhi=2632,e.ainarabic=1593,e.ainfinalarabic=65226,e.aininitialarabic=65227,e.ainmedialarabic=65228,e.ainvertedbreve=515,e.aivowelsignbengali=2504,e.aivowelsigndeva=2376,e.aivowelsigngujarati=2760,e.akatakana=12450,e.akatakanahalfwidth=65393,e.akorean=12623,e.alef=1488,e.alefarabic=1575,e.alefdageshhebrew=64304,e.aleffinalarabic=65166,e.alefhamzaabovearabic=1571,e.alefhamzaabovefinalarabic=65156,e.alefhamzabelowarabic=1573,e.alefhamzabelowfinalarabic=65160,e.alefhebrew=1488,e.aleflamedhebrew=64335,e.alefmaddaabovearabic=1570,e.alefmaddaabovefinalarabic=65154,e.alefmaksuraarabic=1609,e.alefmaksurafinalarabic=65264,e.alefmaksurainitialarabic=65267,e.alefmaksuramedialarabic=65268,e.alefpatahhebrew=64302,e.alefqamatshebrew=64303,e.aleph=8501,e.allequal=8780,e.alpha=945,e.alphatonos=940,e.amacron=257,e.amonospace=65345,e.ampersand=38,e.ampersandmonospace=65286,e.ampersandsmall=63270,e.amsquare=13250,e.anbopomofo=12578,e.angbopomofo=12580,e.angbracketleft=12296,e.angbracketright=12297,e.angkhankhuthai=3674,e.angle=8736,e.anglebracketleft=12296,e.anglebracketleftvertical=65087,e.anglebracketright=12297,e.anglebracketrightvertical=65088,e.angleleft=9001,e.angleright=9002,e.angstrom=8491,e.anoteleia=903,e.anudattadeva=2386,e.anusvarabengali=2434,e.anusvaradeva=2306,e.anusvaragujarati=2690,e.aogonek=261,e.apaatosquare=13056,e.aparen=9372,e.apostrophearmenian=1370,e.apostrophemod=700,e.apple=63743,e.approaches=8784,e.approxequal=8776,e.approxequalorimage=8786,e.approximatelyequal=8773,e.araeaekorean=12686,e.araeakorean=12685,e.arc=8978,e.arighthalfring=7834,e.aring=229,e.aringacute=507,e.aringbelow=7681,e.arrowboth=8596,e.arrowdashdown=8675,e.arrowdashleft=8672,e.arrowdashright=8674,e.arrowdashup=8673,e.arrowdblboth=8660,e.arrowdbldown=8659,e.arrowdblleft=8656,e.arrowdblright=8658,e.arrowdblup=8657,e.arrowdown=8595,e.arrowdownleft=8601,e.arrowdownright=8600,e.arrowdownwhite=8681,e.arrowheaddownmod=709,e.arrowheadleftmod=706,e.arrowheadrightmod=707,e.arrowheadupmod=708,e.arrowhorizex=63719,e.arrowleft=8592,e.arrowleftdbl=8656,e.arrowleftdblstroke=8653,e.arrowleftoverright=8646,e.arrowleftwhite=8678,e.arrowright=8594,e.arrowrightdblstroke=8655,e.arrowrightheavy=10142,e.arrowrightoverleft=8644,e.arrowrightwhite=8680,e.arrowtableft=8676,e.arrowtabright=8677,e.arrowup=8593,e.arrowupdn=8597,e.arrowupdnbse=8616,e.arrowupdownbase=8616,e.arrowupleft=8598,e.arrowupleftofdown=8645,e.arrowupright=8599,e.arrowupwhite=8679,e.arrowvertex=63718,e.asciicircum=94,e.asciicircummonospace=65342,e.asciitilde=126,e.asciitildemonospace=65374,e.ascript=593,e.ascriptturned=594,e.asmallhiragana=12353,e.asmallkatakana=12449,e.asmallkatakanahalfwidth=65383,e.asterisk=42,e.asteriskaltonearabic=1645,e.asteriskarabic=1645,e.asteriskmath=8727,e.asteriskmonospace=65290,e.asterisksmall=65121,e.asterism=8258,e.asuperior=63209,e.asymptoticallyequal=8771,e.at=64,e.atilde=227,e.atmonospace=65312,e.atsmall=65131,e.aturned=592,e.aubengali=2452,e.aubopomofo=12576,e.audeva=2324,e.augujarati=2708,e.augurmukhi=2580,e.aulengthmarkbengali=2519,e.aumatragurmukhi=2636,e.auvowelsignbengali=2508,e.auvowelsigndeva=2380,e.auvowelsigngujarati=2764,e.avagrahadeva=2365,e.aybarmenian=1377,e.ayin=1506,e.ayinaltonehebrew=64288,e.ayinhebrew=1506,e.b=98,e.babengali=2476,e.backslash=92,e.backslashmonospace=65340,e.badeva=2348,e.bagujarati=2732
e.bagurmukhi=2604,e.bahiragana=12400,e.bahtthai=3647,e.bakatakana=12496,e.bar=124,e.barmonospace=65372,e.bbopomofo=12549,e.bcircle=9425,e.bdotaccent=7683,e.bdotbelow=7685,e.beamedsixteenthnotes=9836,e.because=8757,e.becyrillic=1073,e.beharabic=1576,e.behfinalarabic=65168,e.behinitialarabic=65169,e.behiragana=12409,e.behmedialarabic=65170,e.behmeeminitialarabic=64671,e.behmeemisolatedarabic=64520,e.behnoonfinalarabic=64621,e.bekatakana=12505,e.benarmenian=1378,e.bet=1489,e.beta=946,e.betasymbolgreek=976,e.betdagesh=64305,e.betdageshhebrew=64305,e.bethebrew=1489,e.betrafehebrew=64332,e.bhabengali=2477,e.bhadeva=2349,e.bhagujarati=2733,e.bhagurmukhi=2605,e.bhook=595,e.bihiragana=12403,e.bikatakana=12499,e.bilabialclick=664,e.bindigurmukhi=2562,e.birusquare=13105,e.blackcircle=9679,e.blackdiamond=9670,e.blackdownpointingtriangle=9660,e.blackleftpointingpointer=9668,e.blackleftpointingtriangle=9664,e.blacklenticularbracketleft=12304,e.blacklenticularbracketleftvertical=65083,e.blacklenticularbracketright=12305,e.blacklenticularbracketrightvertical=65084,e.blacklowerlefttriangle=9699,e.blacklowerrighttriangle=9698,e.blackrectangle=9644,e.blackrightpointingpointer=9658,e.blackrightpointingtriangle=9654,e.blacksmallsquare=9642,e.blacksmilingface=9787,e.blacksquare=9632,e.blackstar=9733,e.blackupperlefttriangle=9700,e.blackupperrighttriangle=9701,e.blackuppointingsmalltriangle=9652,e.blackuppointingtriangle=9650,e.blank=9251,e.blinebelow=7687,e.block=9608,e.bmonospace=65346,e.bobaimaithai=3610,e.bohiragana=12412,e.bokatakana=12508,e.bparen=9373,e.bqsquare=13251,e.braceex=63732,e.braceleft=123,e.braceleftbt=63731,e.braceleftmid=63730,e.braceleftmonospace=65371,e.braceleftsmall=65115,e.bracelefttp=63729,e.braceleftvertical=65079,e.braceright=125,e.bracerightbt=63742,e.bracerightmid=63741,e.bracerightmonospace=65373,e.bracerightsmall=65116,e.bracerighttp=63740,e.bracerightvertical=65080,e.bracketleft=91,e.bracketleftbt=63728,e.bracketleftex=63727,e.bracketleftmonospace=65339,e.bracketlefttp=63726,e.bracketright=93,e.bracketrightbt=63739,e.bracketrightex=63738,e.bracketrightmonospace=65341,e.bracketrighttp=63737,e.breve=728,e.brevebelowcmb=814,e.brevecmb=774,e.breveinvertedbelowcmb=815,e.breveinvertedcmb=785,e.breveinverteddoublecmb=865,e.bridgebelowcmb=810,e.bridgeinvertedbelowcmb=826,e.brokenbar=166,e.bstroke=384,e.bsuperior=63210,e.btopbar=387,e.buhiragana=12406,e.bukatakana=12502,e.bullet=8226,e.bulletinverse=9688,e.bulletoperator=8729,e.bullseye=9678,e.c=99,e.caarmenian=1390,e.cabengali=2458,e.cacute=263,e.cadeva=2330,e.cagujarati=2714,e.cagurmukhi=2586,e.calsquare=13192,e.candrabindubengali=2433,e.candrabinducmb=784,e.candrabindudeva=2305,e.candrabindugujarati=2689,e.capslock=8682,e.careof=8453,e.caron=711,e.caronbelowcmb=812,e.caroncmb=780,e.carriagereturn=8629,e.cbopomofo=12568,e.ccaron=269,e.ccedilla=231,e.ccedillaacute=7689,e.ccircle=9426,e.ccircumflex=265,e.ccurl=597,e.cdot=267,e.cdotaccent=267,e.cdsquare=13253,e.cedilla=184,e.cedillacmb=807,e.cent=162,e.centigrade=8451,e.centinferior=63199,e.centmonospace=65504,e.centoldstyle=63394,e.centsuperior=63200,e.chaarmenian=1401,e.chabengali=2459,e.chadeva=2331,e.chagujarati=2715,e.chagurmukhi=2587,e.chbopomofo=12564,e.cheabkhasiancyrillic=1213,e.checkmark=10003,e.checyrillic=1095,e.chedescenderabkhasiancyrillic=1215,e.chedescendercyrillic=1207,e.chedieresiscyrillic=1269,e.cheharmenian=1395,e.chekhakassiancyrillic=1228,e.cheverticalstrokecyrillic=1209,e.chi=967,e.chieuchacirclekorean=12919,e.chieuchaparenkorean=12823,e.chieuchcirclekorean=12905,e.chieuchkorean=12618,e.chieuchparenkorean=12809,e.chochangthai=3594,e.chochanthai=3592,e.chochingthai=3593,e.chochoethai=3596,e.chook=392,e.cieucacirclekorean=12918,e.cieucaparenkorean=12822,e.cieuccirclekorean=12904,e.cieuckorean=12616,e.cieucparenkorean=12808,e.cieucuparenkorean=12828,e.circle=9675,e.circlecopyrt=169,e.circlemultiply=8855,e.circleot=8857,e.circleplus=8853,e.circlepostalmark=12342,e.circlewithlefthalfblack=9680,e.circlewithrighthalfblack=9681,e.circumflex=710,e.circumflexbelowcmb=813,e.circumflexcmb=770,e.clear=8999,e.clickalveolar=450,e.clickdental=448,e.clicklateral=449,e.clickretroflex=451,e.club=9827,e.clubsuitblack=9827
e.clubsuitwhite=9831,e.cmcubedsquare=13220,e.cmonospace=65347,e.cmsquaredsquare=13216,e.coarmenian=1409,e.colon=58,e.colonmonetary=8353,e.colonmonospace=65306,e.colonsign=8353,e.colonsmall=65109,e.colontriangularhalfmod=721,e.colontriangularmod=720,e.comma=44,e.commaabovecmb=787,e.commaaboverightcmb=789,e.commaaccent=63171,e.commaarabic=1548,e.commaarmenian=1373,e.commainferior=63201,e.commamonospace=65292,e.commareversedabovecmb=788,e.commareversedmod=701,e.commasmall=65104,e.commasuperior=63202,e.commaturnedabovecmb=786,e.commaturnedmod=699,e.compass=9788,e.congruent=8773,e.contourintegral=8750,e.control=8963,e.controlACK=6,e.controlBEL=7,e.controlBS=8,e.controlCAN=24,e.controlCR=13,e.controlDC1=17,e.controlDC2=18,e.controlDC3=19,e.controlDC4=20,e.controlDEL=127,e.controlDLE=16,e.controlEM=25,e.controlENQ=5,e.controlEOT=4,e.controlESC=27,e.controlETB=23,e.controlETX=3,e.controlFF=12,e.controlFS=28,e.controlGS=29,e.controlHT=9,e.controlLF=10,e.controlNAK=21,e.controlNULL=0,e.controlRS=30,e.controlSI=15,e.controlSO=14,e.controlSOT=2,e.controlSTX=1,e.controlSUB=26,e.controlSYN=22,e.controlUS=31,e.controlVT=11,e.copyright=169,e.copyrightsans=63721,e.copyrightserif=63193,e.cornerbracketleft=12300,e.cornerbracketlefthalfwidth=65378,e.cornerbracketleftvertical=65089,e.cornerbracketright=12301,e.cornerbracketrighthalfwidth=65379,e.cornerbracketrightvertical=65090,e.corporationsquare=13183,e.cosquare=13255,e.coverkgsquare=13254,e.cparen=9374,e.cruzeiro=8354,e.cstretched=663,e.curlyand=8911,e.curlyor=8910,e.currency=164,e.cyrBreve=63185,e.cyrFlex=63186,e.cyrbreve=63188,e.cyrflex=63189,e.d=100,e.daarmenian=1380,e.dabengali=2470,e.dadarabic=1590,e.dadeva=2342,e.dadfinalarabic=65214,e.dadinitialarabic=65215,e.dadmedialarabic=65216,e.dagesh=1468,e.dageshhebrew=1468,e.dagger=8224,e.daggerdbl=8225,e.dagujarati=2726,e.dagurmukhi=2598,e.dahiragana=12384,e.dakatakana=12480,e.dalarabic=1583,e.dalet=1491,e.daletdagesh=64307,e.daletdageshhebrew=64307,e.dalethebrew=1491,e.dalfinalarabic=65194,e.dammaarabic=1615,e.dammalowarabic=1615,e.dammatanaltonearabic=1612,e.dammatanarabic=1612,e.danda=2404,e.dargahebrew=1447,e.dargalefthebrew=1447,e.dasiapneumatacyrilliccmb=1157,e.dblGrave=63187,e.dblanglebracketleft=12298,e.dblanglebracketleftvertical=65085,e.dblanglebracketright=12299,e.dblanglebracketrightvertical=65086,e.dblarchinvertedbelowcmb=811,e.dblarrowleft=8660,e.dblarrowright=8658,e.dbldanda=2405,e.dblgrave=63190,e.dblgravecmb=783,e.dblintegral=8748,e.dbllowline=8215,e.dbllowlinecmb=819,e.dbloverlinecmb=831,e.dblprimemod=698,e.dblverticalbar=8214,e.dblverticallineabovecmb=782,e.dbopomofo=12553,e.dbsquare=13256,e.dcaron=271,e.dcedilla=7697,e.dcircle=9427,e.dcircumflexbelow=7699,e.dcroat=273,e.ddabengali=2465,e.ddadeva=2337,e.ddagujarati=2721,e.ddagurmukhi=2593,e.ddalarabic=1672,e.ddalfinalarabic=64393,e.dddhadeva=2396,e.ddhabengali=2466,e.ddhadeva=2338,e.ddhagujarati=2722,e.ddhagurmukhi=2594,e.ddotaccent=7691,e.ddotbelow=7693,e.decimalseparatorarabic=1643,e.decimalseparatorpersian=1643,e.decyrillic=1076,e.degree=176,e.dehihebrew=1453,e.dehiragana=12391,e.deicoptic=1007,e.dekatakana=12487,e.deleteleft=9003,e.deleteright=8998,e.delta=948,e.deltaturned=397,e.denominatorminusonenumeratorbengali=2552,e.dezh=676,e.dhabengali=2471,e.dhadeva=2343,e.dhagujarati=2727,e.dhagurmukhi=2599,e.dhook=599,e.dialytikatonos=901,e.dialytikatonoscmb=836,e.diamond=9830,e.diamondsuitwhite=9826,e.dieresis=168,e.dieresisacute=63191,e.dieresisbelowcmb=804,e.dieresiscmb=776,e.dieresisgrave=63192,e.dieresistonos=901,e.dihiragana=12386,e.dikatakana=12482,e.dittomark=12291,e.divide=247,e.divides=8739,e.divisionslash=8725,e.djecyrillic=1106,e.dkshade=9619,e.dlinebelow=7695,e.dlsquare=13207,e.dmacron=273,e.dmonospace=65348,e.dnblock=9604,e.dochadathai=3598,e.dodekthai=3604,e.dohiragana=12393,e.dokatakana=12489,e.dollar=36
e.dollarinferior=63203,e.dollarmonospace=65284,e.dollaroldstyle=63268,e.dollarsmall=65129,e.dollarsuperior=63204,e.dong=8363,e.dorusquare=13094,e.dotaccent=729,e.dotaccentcmb=775,e.dotbelowcmb=803,e.dotbelowcomb=803,e.dotkatakana=12539,e.dotlessi=305,e.dotlessj=63166,e.dotlessjstrokehook=644,e.dotmath=8901,e.dottedcircle=9676,e.doubleyodpatah=64287,e.doubleyodpatahhebrew=64287,e.downtackbelowcmb=798,e.downtackmod=725,e.dparen=9375,e.dsuperior=63211,e.dtail=598,e.dtopbar=396,e.duhiragana=12389,e.dukatakana=12485,e.dz=499,e.dzaltone=675,e.dzcaron=454,e.dzcurl=677,e.dzeabkhasiancyrillic=1249,e.dzecyrillic=1109,e.dzhecyrillic=1119,e.e=101,e.eacute=233,e.earth=9793,e.ebengali=2447,e.ebopomofo=12572,e.ebreve=277,e.ecandradeva=2317,e.ecandragujarati=2701,e.ecandravowelsigndeva=2373,e.ecandravowelsigngujarati=2757,e.ecaron=283,e.ecedillabreve=7709,e.echarmenian=1381,e.echyiwnarmenian=1415,e.ecircle=9428,e.ecircumflex=234,e.ecircumflexacute=7871,e.ecircumflexbelow=7705,e.ecircumflexdotbelow=7879,e.ecircumflexgrave=7873,e.ecircumflexhookabove=7875,e.ecircumflextilde=7877,e.ecyrillic=1108,e.edblgrave=517,e.edeva=2319,e.edieresis=235,e.edot=279,e.edotaccent=279,e.edotbelow=7865,e.eegurmukhi=2575,e.eematragurmukhi=2631,e.efcyrillic=1092,e.egrave=232,e.egujarati=2703,e.eharmenian=1383,e.ehbopomofo=12573,e.ehiragana=12360,e.ehookabove=7867,e.eibopomofo=12575,e.eight=56,e.eightarabic=1640,e.eightbengali=2542,e.eightcircle=9319,e.eightcircleinversesansserif=10129,e.eightdeva=2414,e.eighteencircle=9329,e.eighteenparen=9349,e.eighteenperiod=9369,e.eightgujarati=2798,e.eightgurmukhi=2670,e.eighthackarabic=1640,e.eighthangzhou=12328,e.eighthnotebeamed=9835,e.eightideographicparen=12839,e.eightinferior=8328,e.eightmonospace=65304,e.eightoldstyle=63288,e.eightparen=9339,e.eightperiod=9359,e.eightpersian=1784,e.eightroman=8567,e.eightsuperior=8312,e.eightthai=3672,e.einvertedbreve=519,e.eiotifiedcyrillic=1125,e.ekatakana=12456,e.ekatakanahalfwidth=65396,e.ekonkargurmukhi=2676,e.ekorean=12628,e.elcyrillic=1083,e.element=8712,e.elevencircle=9322,e.elevenparen=9342,e.elevenperiod=9362,e.elevenroman=8570,e.ellipsis=8230,e.ellipsisvertical=8942,e.emacron=275,e.emacronacute=7703,e.emacrongrave=7701,e.emcyrillic=1084,e.emdash=8212,e.emdashvertical=65073,e.emonospace=65349,e.emphasismarkarmenian=1371,e.emptyset=8709,e.enbopomofo=12579,e.encyrillic=1085,e.endash=8211,e.endashvertical=65074,e.endescendercyrillic=1187,e.eng=331,e.engbopomofo=12581,e.enghecyrillic=1189,e.enhookcyrillic=1224,e.enspace=8194,e.eogonek=281,e.eokorean=12627,e.eopen=603,e.eopenclosed=666,e.eopenreversed=604,e.eopenreversedclosed=606,e.eopenreversedhook=605,e.eparen=9376,e.epsilon=949,e.epsilontonos=941,e.equal=61,e.equalmonospace=65309,e.equalsmall=65126,e.equalsuperior=8316,e.equivalence=8801,e.erbopomofo=12582,e.ercyrillic=1088,e.ereversed=600,e.ereversedcyrillic=1101,e.escyrillic=1089,e.esdescendercyrillic=1195,e.esh=643,e.eshcurl=646,e.eshortdeva=2318,e.eshortvowelsigndeva=2374,e.eshreversedloop=426,e.eshsquatreversed=645,e.esmallhiragana=12359,e.esmallkatakana=12455,e.esmallkatakanahalfwidth=65386,e.estimated=8494,e.esuperior=63212,e.eta=951,e.etarmenian=1384,e.etatonos=942,e.eth=240,e.etilde=7869,e.etildebelow=7707,e.etnahtafoukhhebrew=1425,e.etnahtafoukhlefthebrew=1425,e.etnahtahebrew=1425,e.etnahtalefthebrew=1425,e.eturned=477,e.eukorean=12641,e.euro=8364,e.evowelsignbengali=2503,e.evowelsigndeva=2375,e.evowelsigngujarati=2759,e.exclam=33,e.exclamarmenian=1372,e.exclamdbl=8252,e.exclamdown=161,e.exclamdownsmall=63393,e.exclammonospace=65281,e.exclamsmall=63265,e.existential=8707,e.ezh=658,e.ezhcaron=495,e.ezhcurl=659,e.ezhreversed=441,e.ezhtail=442,e.f=102,e.fadeva=2398,e.fagurmukhi=2654,e.fahrenheit=8457,e.fathaarabic=1614,e.fathalowarabic=1614,e.fathatanarabic=1611,e.fbopomofo=12552,e.fcircle=9429
e.fdotaccent=7711,e.feharabic=1601,e.feharmenian=1414,e.fehfinalarabic=65234,e.fehinitialarabic=65235,e.fehmedialarabic=65236,e.feicoptic=997,e.female=9792,e.ff=64256,e.ffi=64259,e.ffl=64260,e.fi=64257,e.fifteencircle=9326,e.fifteenparen=9346,e.fifteenperiod=9366,e.figuredash=8210,e.filledbox=9632,e.filledrect=9644,e.finalkaf=1498,e.finalkafdagesh=64314,e.finalkafdageshhebrew=64314,e.finalkafhebrew=1498,e.finalmem=1501,e.finalmemhebrew=1501,e.finalnun=1503,e.finalnunhebrew=1503,e.finalpe=1507,e.finalpehebrew=1507,e.finaltsadi=1509,e.finaltsadihebrew=1509,e.firsttonechinese=713,e.fisheye=9673,e.fitacyrillic=1139,e.five=53,e.fivearabic=1637,e.fivebengali=2539,e.fivecircle=9316,e.fivecircleinversesansserif=10126,e.fivedeva=2411,e.fiveeighths=8541,e.fivegujarati=2795,e.fivegurmukhi=2667,e.fivehackarabic=1637,e.fivehangzhou=12325,e.fiveideographicparen=12836,e.fiveinferior=8325,e.fivemonospace=65301,e.fiveoldstyle=63285,e.fiveparen=9336,e.fiveperiod=9356,e.fivepersian=1781,e.fiveroman=8564,e.fivesuperior=8309,e.fivethai=3669,e.fl=64258,e.florin=402,e.fmonospace=65350,e.fmsquare=13209,e.fofanthai=3615,e.fofathai=3613,e.fongmanthai=3663,e.forall=8704,e.four=52,e.fourarabic=1636,e.fourbengali=2538,e.fourcircle=9315,e.fourcircleinversesansserif=10125,e.fourdeva=2410,e.fourgujarati=2794,e.fourgurmukhi=2666,e.fourhackarabic=1636,e.fourhangzhou=12324,e.fourideographicparen=12835,e.fourinferior=8324,e.fourmonospace=65300,e.fournumeratorbengali=2551,e.fouroldstyle=63284,e.fourparen=9335,e.fourperiod=9355,e.fourpersian=1780,e.fourroman=8563,e.foursuperior=8308,e.fourteencircle=9325,e.fourteenparen=9345,e.fourteenperiod=9365,e.fourthai=3668,e.fourthtonechinese=715,e.fparen=9377,e.fraction=8260,e.franc=8355,e.g=103,e.gabengali=2455,e.gacute=501,e.gadeva=2327,e.gafarabic=1711,e.gaffinalarabic=64403,e.gafinitialarabic=64404,e.gafmedialarabic=64405,e.gagujarati=2711,e.gagurmukhi=2583,e.gahiragana=12364,e.gakatakana=12460,e.gamma=947,e.gammalatinsmall=611,e.gammasuperior=736,e.gangiacoptic=1003,e.gbopomofo=12557,e.gbreve=287,e.gcaron=487,e.gcedilla=291,e.gcircle=9430,e.gcircumflex=285,e.gcommaaccent=291,e.gdot=289,e.gdotaccent=289,e.gecyrillic=1075,e.gehiragana=12370,e.gekatakana=12466,e.geometricallyequal=8785,e.gereshaccenthebrew=1436,e.gereshhebrew=1523,e.gereshmuqdamhebrew=1437,e.germandbls=223,e.gershayimaccenthebrew=1438,e.gershayimhebrew=1524,e.getamark=12307,e.ghabengali=2456,e.ghadarmenian=1394,e.ghadeva=2328,e.ghagujarati=2712,e.ghagurmukhi=2584,e.ghainarabic=1594,e.ghainfinalarabic=65230,e.ghaininitialarabic=65231,e.ghainmedialarabic=65232,e.ghemiddlehookcyrillic=1173,e.ghestrokecyrillic=1171,e.gheupturncyrillic=1169,e.ghhadeva=2394,e.ghhagurmukhi=2650,e.ghook=608,e.ghzsquare=13203,e.gihiragana=12366,e.gikatakana=12462,e.gimarmenian=1379,e.gimel=1490,e.gimeldagesh=64306,e.gimeldageshhebrew=64306,e.gimelhebrew=1490,e.gjecyrillic=1107,e.glottalinvertedstroke=446,e.glottalstop=660,e.glottalstopinverted=662,e.glottalstopmod=704,e.glottalstopreversed=661,e.glottalstopreversedmod=705,e.glottalstopreversedsuperior=740,e.glottalstopstroke=673,e.glottalstopstrokereversed=674,e.gmacron=7713,e.gmonospace=65351,e.gohiragana=12372,e.gokatakana=12468,e.gparen=9378,e.gpasquare=13228,e.gradient=8711,e.grave=96,e.gravebelowcmb=790,e.gravecmb=768,e.gravecomb=768,e.gravedeva=2387,e.gravelowmod=718,e.gravemonospace=65344,e.gravetonecmb=832,e.greater=62,e.greaterequal=8805,e.greaterequalorless=8923,e.greatermonospace=65310,e.greaterorequivalent=8819,e.greaterorless=8823,e.greateroverequal=8807,e.greatersmall=65125,e.gscript=609,e.gstroke=485,e.guhiragana=12368,e.guillemotleft=171,e.guillemotright=187,e.guilsinglleft=8249,e.guilsinglright=8250,e.gukatakana=12464,e.guramusquare=13080,e.gysquare=13257,e.h=104,e.haabkhasiancyrillic=1193,e.haaltonearabic=1729,e.habengali=2489,e.hadescendercyrillic=1203,e.hadeva=2361,e.hagujarati=2745,e.hagurmukhi=2617
e.haharabic=1581,e.hahfinalarabic=65186,e.hahinitialarabic=65187,e.hahiragana=12399,e.hahmedialarabic=65188,e.haitusquare=13098,e.hakatakana=12495,e.hakatakanahalfwidth=65418,e.halantgurmukhi=2637,e.hamzaarabic=1569,e.hamzalowarabic=1569,e.hangulfiller=12644,e.hardsigncyrillic=1098,e.harpoonleftbarbup=8636,e.harpoonrightbarbup=8640,e.hasquare=13258,e.hatafpatah=1458,e.hatafpatah16=1458,e.hatafpatah23=1458,e.hatafpatah2f=1458,e.hatafpatahhebrew=1458,e.hatafpatahnarrowhebrew=1458,e.hatafpatahquarterhebrew=1458,e.hatafpatahwidehebrew=1458,e.hatafqamats=1459,e.hatafqamats1b=1459,e.hatafqamats28=1459,e.hatafqamats34=1459,e.hatafqamatshebrew=1459,e.hatafqamatsnarrowhebrew=1459,e.hatafqamatsquarterhebrew=1459,e.hatafqamatswidehebrew=1459,e.hatafsegol=1457,e.hatafsegol17=1457,e.hatafsegol24=1457,e.hatafsegol30=1457,e.hatafsegolhebrew=1457,e.hatafsegolnarrowhebrew=1457,e.hatafsegolquarterhebrew=1457,e.hatafsegolwidehebrew=1457,e.hbar=295,e.hbopomofo=12559,e.hbrevebelow=7723,e.hcedilla=7721,e.hcircle=9431,e.hcircumflex=293,e.hdieresis=7719,e.hdotaccent=7715,e.hdotbelow=7717,e.he=1492,e.heart=9829,e.heartsuitblack=9829,e.heartsuitwhite=9825,e.hedagesh=64308,e.hedageshhebrew=64308,e.hehaltonearabic=1729,e.heharabic=1607,e.hehebrew=1492,e.hehfinalaltonearabic=64423,e.hehfinalalttwoarabic=65258,e.hehfinalarabic=65258,e.hehhamzaabovefinalarabic=64421,e.hehhamzaaboveisolatedarabic=64420,e.hehinitialaltonearabic=64424,e.hehinitialarabic=65259,e.hehiragana=12408,e.hehmedialaltonearabic=64425,e.hehmedialarabic=65260,e.heiseierasquare=13179,e.hekatakana=12504,e.hekatakanahalfwidth=65421,e.hekutaarusquare=13110,e.henghook=615,e.herutusquare=13113,e.het=1495,e.hethebrew=1495,e.hhook=614,e.hhooksuperior=689,e.hieuhacirclekorean=12923,e.hieuhaparenkorean=12827,e.hieuhcirclekorean=12909,e.hieuhkorean=12622,e.hieuhparenkorean=12813,e.hihiragana=12402,e.hikatakana=12498,e.hikatakanahalfwidth=65419,e.hiriq=1460,e.hiriq14=1460,e.hiriq21=1460,e.hiriq2d=1460,e.hiriqhebrew=1460,e.hiriqnarrowhebrew=1460,e.hiriqquarterhebrew=1460,e.hiriqwidehebrew=1460,e.hlinebelow=7830,e.hmonospace=65352,e.hoarmenian=1392,e.hohipthai=3627,e.hohiragana=12411,e.hokatakana=12507,e.hokatakanahalfwidth=65422,e.holam=1465,e.holam19=1465,e.holam26=1465,e.holam32=1465,e.holamhebrew=1465,e.holamnarrowhebrew=1465,e.holamquarterhebrew=1465,e.holamwidehebrew=1465,e.honokhukthai=3630,e.hookabovecomb=777,e.hookcmb=777,e.hookpalatalizedbelowcmb=801,e.hookretroflexbelowcmb=802,e.hoonsquare=13122,e.horicoptic=1001,e.horizontalbar=8213,e.horncmb=795,e.hotsprings=9832,e.house=8962,e.hparen=9379,e.hsuperior=688,e.hturned=613,e.huhiragana=12405,e.huiitosquare=13107,e.hukatakana=12501,e.hukatakanahalfwidth=65420,e.hungarumlaut=733,e.hungarumlautcmb=779,e.hv=405,e.hyphen=45,e.hypheninferior=63205,e.hyphenmonospace=65293,e.hyphensmall=65123,e.hyphensuperior=63206,e.hyphentwo=8208,e.i=105,e.iacute=237,e.iacyrillic=1103,e.ibengali=2439,e.ibopomofo=12583,e.ibreve=301,e.icaron=464,e.icircle=9432,e.icircumflex=238,e.icyrillic=1110,e.idblgrave=521,e.ideographearthcircle=12943,e.ideographfirecircle=12939,e.ideographicallianceparen=12863,e.ideographiccallparen=12858,e.ideographiccentrecircle=12965,e.ideographicclose=12294,e.ideographiccomma=12289,e.ideographiccommaleft=65380,e.ideographiccongratulationparen=12855,e.ideographiccorrectcircle=12963,e.ideographicearthparen=12847,e.ideographicenterpriseparen=12861,e.ideographicexcellentcircle=12957,e.ideographicfestivalparen=12864,e.ideographicfinancialcircle=12950,e.ideographicfinancialparen=12854,e.ideographicfireparen=12843,e.ideographichaveparen=12850,e.ideographichighcircle=12964,e.ideographiciterationmark=12293,e.ideographiclaborcircle=12952,e.ideographiclaborparen=12856,e.ideographicleftcircle=12967,e.ideographiclowcircle=12966,e.ideographicmedicinecircle=12969,e.ideographicmetalparen=12846,e.ideographicmoonparen=12842,e.ideographicnameparen=12852,e.ideographicperiod=12290,e.ideographicprintcircle=12958,e.ideographicreachparen=12867,e.ideographicrepresentparen=12857,e.ideographicresourceparen=12862,e.ideographicrightcircle=12968,e.ideographicsecretcircle=12953,e.ideographicselfparen=12866,e.ideographicsocietyparen=12851,e.ideographicspace=12288,e.ideographicspecialparen=12853,e.ideographicstockparen=12849,e.ideographicstudyparen=12859,e.ideographicsunparen=12848,e.ideographicsuperviseparen=12860,e.ideographicwaterparen=12844,e.ideographicwoodparen=12845,e.ideographiczero=12295,e.ideographmetalcircle=12942,e.ideographmooncircle=12938,e.ideographnamecircle=12948,e.ideographsuncircle=12944,e.ideographwatercircle=12940,e.ideographwoodcircle=12941,e.ideva=2311
e.idieresis=239,e.idieresisacute=7727,e.idieresiscyrillic=1253,e.idotbelow=7883,e.iebrevecyrillic=1239,e.iecyrillic=1077,e.ieungacirclekorean=12917,e.ieungaparenkorean=12821,e.ieungcirclekorean=12903,e.ieungkorean=12615,e.ieungparenkorean=12807,e.igrave=236,e.igujarati=2695,e.igurmukhi=2567,e.ihiragana=12356,e.ihookabove=7881,e.iibengali=2440,e.iicyrillic=1080,e.iideva=2312,e.iigujarati=2696,e.iigurmukhi=2568,e.iimatragurmukhi=2624,e.iinvertedbreve=523,e.iishortcyrillic=1081,e.iivowelsignbengali=2496,e.iivowelsigndeva=2368,e.iivowelsigngujarati=2752,e.ij=307,e.ikatakana=12452,e.ikatakanahalfwidth=65394,e.ikorean=12643,e.ilde=732,e.iluyhebrew=1452,e.imacron=299,e.imacroncyrillic=1251,e.imageorapproximatelyequal=8787,e.imatragurmukhi=2623,e.imonospace=65353,e.increment=8710,e.infinity=8734,e.iniarmenian=1387,e.integral=8747,e.integralbottom=8993,e.integralbt=8993,e.integralex=63733,e.integraltop=8992,e.integraltp=8992,e.intersection=8745,e.intisquare=13061,e.invbullet=9688,e.invcircle=9689,e.invsmileface=9787,e.iocyrillic=1105,e.iogonek=303,e.iota=953,e.iotadieresis=970,e.iotadieresistonos=912,e.iotalatin=617,e.iotatonos=943,e.iparen=9380,e.irigurmukhi=2674,e.ismallhiragana=12355,e.ismallkatakana=12451,e.ismallkatakanahalfwidth=65384,e.issharbengali=2554,e.istroke=616,e.isuperior=63213,e.iterationhiragana=12445,e.iterationkatakana=12541,e.itilde=297,e.itildebelow=7725,e.iubopomofo=12585,e.iucyrillic=1102,e.ivowelsignbengali=2495,e.ivowelsigndeva=2367,e.ivowelsigngujarati=2751,e.izhitsacyrillic=1141,e.izhitsadblgravecyrillic=1143,e.j=106,e.jaarmenian=1393,e.jabengali=2460,e.jadeva=2332,e.jagujarati=2716,e.jagurmukhi=2588,e.jbopomofo=12560,e.jcaron=496,e.jcircle=9433,e.jcircumflex=309,e.jcrossedtail=669,e.jdotlessstroke=607,e.jecyrillic=1112,e.jeemarabic=1580,e.jeemfinalarabic=65182,e.jeeminitialarabic=65183,e.jeemmedialarabic=65184,e.jeharabic=1688,e.jehfinalarabic=64395,e.jhabengali=2461,e.jhadeva=2333,e.jhagujarati=2717,e.jhagurmukhi=2589,e.jheharmenian=1403,e.jis=12292,e.jmonospace=65354,e.jparen=9381,e.jsuperior=690,e.k=107,e.kabashkircyrillic=1185,e.kabengali=2453,e.kacute=7729,e.kacyrillic=1082,e.kadescendercyrillic=1179,e.kadeva=2325,e.kaf=1499,e.kafarabic=1603,e.kafdagesh=64315,e.kafdageshhebrew=64315,e.kaffinalarabic=65242,e.kafhebrew=1499,e.kafinitialarabic=65243,e.kafmedialarabic=65244,e.kafrafehebrew=64333,e.kagujarati=2709,e.kagurmukhi=2581,e.kahiragana=12363,e.kahookcyrillic=1220,e.kakatakana=12459,e.kakatakanahalfwidth=65398,e.kappa=954,e.kappasymbolgreek=1008,e.kapyeounmieumkorean=12657,e.kapyeounphieuphkorean=12676,e.kapyeounpieupkorean=12664,e.kapyeounssangpieupkorean=12665,e.karoriisquare=13069,e.kashidaautoarabic=1600,e.kashidaautonosidebearingarabic=1600,e.kasmallkatakana=12533,e.kasquare=13188,e.kasraarabic=1616,e.kasratanarabic=1613,e.kastrokecyrillic=1183,e.katahiraprolongmarkhalfwidth=65392,e.kaverticalstrokecyrillic=1181,e.kbopomofo=12558,e.kcalsquare=13193,e.kcaron=489,e.kcedilla=311,e.kcircle=9434,e.kcommaaccent=311,e.kdotbelow=7731,e.keharmenian=1412,e.kehiragana=12369,e.kekatakana=12465,e.kekatakanahalfwidth=65401,e.kenarmenian=1391,e.kesmallkatakana=12534,e.kgreenlandic=312,e.khabengali=2454,e.khacyrillic=1093,e.khadeva=2326,e.khagujarati=2710,e.khagurmukhi=2582,e.khaharabic=1582,e.khahfinalarabic=65190,e.khahinitialarabic=65191,e.khahmedialarabic=65192,e.kheicoptic=999,e.khhadeva=2393,e.khhagurmukhi=2649,e.khieukhacirclekorean=12920,e.khieukhaparenkorean=12824,e.khieukhcirclekorean=12906,e.khieukhkorean=12619,e.khieukhparenkorean=12810,e.khokhaithai=3586,e.khokhonthai=3589,e.khokhuatthai=3587,e.khokhwaithai=3588,e.khomutthai=3675,e.khook=409,e.khorakhangthai=3590,e.khzsquare=13201,e.kihiragana=12365,e.kikatakana=12461,e.kikatakanahalfwidth=65399,e.kiroguramusquare=13077,e.kiromeetorusquare=13078,e.kirosquare=13076,e.kiyeokacirclekorean=12910,e.kiyeokaparenkorean=12814,e.kiyeokcirclekorean=12896,e.kiyeokkorean=12593,e.kiyeokparenkorean=12800,e.kiyeoksioskorean=12595,e.kjecyrillic=1116,e.klinebelow=7733,e.klsquare=13208,e.kmcubedsquare=13222,e.kmonospace=65355
e.kmsquaredsquare=13218,e.kohiragana=12371,e.kohmsquare=13248,e.kokaithai=3585,e.kokatakana=12467,e.kokatakanahalfwidth=65402,e.kooposquare=13086,e.koppacyrillic=1153,e.koreanstandardsymbol=12927,e.koroniscmb=835,e.kparen=9382,e.kpasquare=13226,e.ksicyrillic=1135,e.ktsquare=13263,e.kturned=670,e.kuhiragana=12367,e.kukatakana=12463,e.kukatakanahalfwidth=65400,e.kvsquare=13240,e.kwsquare=13246,e.l=108,e.labengali=2482,e.lacute=314,e.ladeva=2354,e.lagujarati=2738,e.lagurmukhi=2610,e.lakkhangyaothai=3653,e.lamaleffinalarabic=65276,e.lamalefhamzaabovefinalarabic=65272,e.lamalefhamzaaboveisolatedarabic=65271,e.lamalefhamzabelowfinalarabic=65274,e.lamalefhamzabelowisolatedarabic=65273,e.lamalefisolatedarabic=65275,e.lamalefmaddaabovefinalarabic=65270,e.lamalefmaddaaboveisolatedarabic=65269,e.lamarabic=1604,e.lambda=955,e.lambdastroke=411,e.lamed=1500,e.lameddagesh=64316,e.lameddageshhebrew=64316,e.lamedhebrew=1500,e.lamfinalarabic=65246,e.lamhahinitialarabic=64714,e.laminitialarabic=65247,e.lamjeeminitialarabic=64713,e.lamkhahinitialarabic=64715,e.lamlamhehisolatedarabic=65010,e.lammedialarabic=65248,e.lammeemhahinitialarabic=64904,e.lammeeminitialarabic=64716,e.largecircle=9711,e.lbar=410,e.lbelt=620,e.lbopomofo=12556,e.lcaron=318,e.lcedilla=316,e.lcircle=9435,e.lcircumflexbelow=7741,e.lcommaaccent=316,e.ldot=320,e.ldotaccent=320,e.ldotbelow=7735,e.ldotbelowmacron=7737,e.leftangleabovecmb=794,e.lefttackbelowcmb=792,e.less=60,e.lessequal=8804,e.lessequalorgreater=8922,e.lessmonospace=65308,e.lessorequivalent=8818,e.lessorgreater=8822,e.lessoverequal=8806,e.lesssmall=65124,e.lezh=622,e.lfblock=9612,e.lhookretroflex=621,e.lira=8356,e.liwnarmenian=1388,e.lj=457,e.ljecyrillic=1113,e.ll=63168,e.lladeva=2355,e.llagujarati=2739,e.llinebelow=7739,e.llladeva=2356,e.llvocalicbengali=2529,e.llvocalicdeva=2401,e.llvocalicvowelsignbengali=2531,e.llvocalicvowelsigndeva=2403,e.lmiddletilde=619,e.lmonospace=65356,e.lmsquare=13264,e.lochulathai=3628,e.logicaland=8743,e.logicalnot=172,e.logicalnotreversed=8976,e.logicalor=8744,e.lolingthai=3621,e.longs=383,e.lowlinecenterline=65102,e.lowlinecmb=818,e.lowlinedashed=65101,e.lozenge=9674,e.lparen=9383,e.lslash=322,e.lsquare=8467,e.lsuperior=63214,e.ltshade=9617,e.luthai=3622,e.lvocalicbengali=2444,e.lvocalicdeva=2316,e.lvocalicvowelsignbengali=2530,e.lvocalicvowelsigndeva=2402,e.lxsquare=13267,e.m=109,e.mabengali=2478,e.macron=175,e.macronbelowcmb=817,e.macroncmb=772,e.macronlowmod=717,e.macronmonospace=65507,e.macute=7743,e.madeva=2350,e.magujarati=2734,e.magurmukhi=2606,e.mahapakhhebrew=1444,e.mahapakhlefthebrew=1444,e.mahiragana=12414,e.maichattawalowleftthai=63637,e.maichattawalowrightthai=63636,e.maichattawathai=3659,e.maichattawaupperleftthai=63635,e.maieklowleftthai=63628,e.maieklowrightthai=63627,e.maiekthai=3656,e.maiekupperleftthai=63626,e.maihanakatleftthai=63620,e.maihanakatthai=3633,e.maitaikhuleftthai=63625,e.maitaikhuthai=3655,e.maitholowleftthai=63631,e.maitholowrightthai=63630,e.maithothai=3657,e.maithoupperleftthai=63629,e.maitrilowleftthai=63634,e.maitrilowrightthai=63633,e.maitrithai=3658,e.maitriupperleftthai=63632,e.maiyamokthai=3654,e.makatakana=12510,e.makatakanahalfwidth=65423,e.male=9794,e.mansyonsquare=13127,e.maqafhebrew=1470,e.mars=9794,e.masoracirclehebrew=1455,e.masquare=13187,e.mbopomofo=12551,e.mbsquare=13268,e.mcircle=9436,e.mcubedsquare=13221,e.mdotaccent=7745,e.mdotbelow=7747,e.meemarabic=1605,e.meemfinalarabic=65250,e.meeminitialarabic=65251,e.meemmedialarabic=65252,e.meemmeeminitialarabic=64721,e.meemmeemisolatedarabic=64584,e.meetorusquare=13133,e.mehiragana=12417,e.meizierasquare=13182,e.mekatakana=12513,e.mekatakanahalfwidth=65426,e.mem=1502,e.memdagesh=64318,e.memdageshhebrew=64318,e.memhebrew=1502,e.menarmenian=1396,e.merkhahebrew=1445,e.merkhakefulahebrew=1446,e.merkhakefulalefthebrew=1446,e.merkhalefthebrew=1445,e.mhook=625,e.mhzsquare=13202,e.middledotkatakanahalfwidth=65381,e.middot=183,e.mieumacirclekorean=12914,e.mieumaparenkorean=12818,e.mieumcirclekorean=12900,e.mieumkorean=12609,e.mieumpansioskorean=12656,e.mieumparenkorean=12804,e.mieumpieupkorean=12654,e.mieumsioskorean=12655,e.mihiragana=12415,e.mikatakana=12511,e.mikatakanahalfwidth=65424,e.minus=8722
e.minusbelowcmb=800,e.minuscircle=8854,e.minusmod=727,e.minusplus=8723,e.minute=8242,e.miribaarusquare=13130,e.mirisquare=13129,e.mlonglegturned=624,e.mlsquare=13206,e.mmcubedsquare=13219,e.mmonospace=65357,e.mmsquaredsquare=13215,e.mohiragana=12418,e.mohmsquare=13249,e.mokatakana=12514,e.mokatakanahalfwidth=65427,e.molsquare=13270,e.momathai=3617,e.moverssquare=13223,e.moverssquaredsquare=13224,e.mparen=9384,e.mpasquare=13227,e.mssquare=13235,e.msuperior=63215,e.mturned=623,e.mu=181,e.mu1=181,e.muasquare=13186,e.muchgreater=8811,e.muchless=8810,e.mufsquare=13196,e.mugreek=956,e.mugsquare=13197,e.muhiragana=12416,e.mukatakana=12512,e.mukatakanahalfwidth=65425,e.mulsquare=13205,e.multiply=215,e.mumsquare=13211,e.munahhebrew=1443,e.munahlefthebrew=1443,e.musicalnote=9834,e.musicalnotedbl=9835,e.musicflatsign=9837,e.musicsharpsign=9839,e.mussquare=13234,e.muvsquare=13238,e.muwsquare=13244,e.mvmegasquare=13241,e.mvsquare=13239,e.mwmegasquare=13247,e.mwsquare=13245,e.n=110,e.nabengali=2472,e.nabla=8711,e.nacute=324,e.nadeva=2344,e.nagujarati=2728,e.nagurmukhi=2600,e.nahiragana=12394,e.nakatakana=12490,e.nakatakanahalfwidth=65413,e.napostrophe=329,e.nasquare=13185,e.nbopomofo=12555,e.nbspace=160,e.ncaron=328,e.ncedilla=326,e.ncircle=9437,e.ncircumflexbelow=7755,e.ncommaaccent=326,e.ndotaccent=7749,e.ndotbelow=7751,e.nehiragana=12397,e.nekatakana=12493,e.nekatakanahalfwidth=65416,e.newsheqelsign=8362,e.nfsquare=13195,e.ngabengali=2457,e.ngadeva=2329,e.ngagujarati=2713,e.ngagurmukhi=2585,e.ngonguthai=3591,e.nhiragana=12435,e.nhookleft=626,e.nhookretroflex=627,e.nieunacirclekorean=12911,e.nieunaparenkorean=12815,e.nieuncieuckorean=12597,e.nieuncirclekorean=12897,e.nieunhieuhkorean=12598,e.nieunkorean=12596,e.nieunpansioskorean=12648,e.nieunparenkorean=12801,e.nieunsioskorean=12647,e.nieuntikeutkorean=12646,e.nihiragana=12395,e.nikatakana=12491,e.nikatakanahalfwidth=65414,e.nikhahitleftthai=63641,e.nikhahitthai=3661,e.nine=57,e.ninearabic=1641,e.ninebengali=2543,e.ninecircle=9320,e.ninecircleinversesansserif=10130,e.ninedeva=2415,e.ninegujarati=2799,e.ninegurmukhi=2671,e.ninehackarabic=1641,e.ninehangzhou=12329,e.nineideographicparen=12840,e.nineinferior=8329,e.ninemonospace=65305,e.nineoldstyle=63289,e.nineparen=9340,e.nineperiod=9360,e.ninepersian=1785,e.nineroman=8568,e.ninesuperior=8313,e.nineteencircle=9330,e.nineteenparen=9350,e.nineteenperiod=9370,e.ninethai=3673,e.nj=460,e.njecyrillic=1114,e.nkatakana=12531,e.nkatakanahalfwidth=65437,e.nlegrightlong=414,e.nlinebelow=7753,e.nmonospace=65358,e.nmsquare=13210,e.nnabengali=2467,e.nnadeva=2339,e.nnagujarati=2723,e.nnagurmukhi=2595,e.nnnadeva=2345,e.nohiragana=12398,e.nokatakana=12494,e.nokatakanahalfwidth=65417,e.nonbreakingspace=160,e.nonenthai=3603,e.nonuthai=3609,e.noonarabic=1606,e.noonfinalarabic=65254,e.noonghunnaarabic=1722,e.noonghunnafinalarabic=64415,e.nooninitialarabic=65255,e.noonjeeminitialarabic=64722,e.noonjeemisolatedarabic=64587,e.noonmedialarabic=65256,e.noonmeeminitialarabic=64725,e.noonmeemisolatedarabic=64590,e.noonnoonfinalarabic=64653,e.notcontains=8716,e.notelement=8713,e.notelementof=8713,e.notequal=8800,e.notgreater=8815,e.notgreaternorequal=8817,e.notgreaternorless=8825,e.notidentical=8802,e.notless=8814,e.notlessnorequal=8816,e.notparallel=8742,e.notprecedes=8832,e.notsubset=8836,e.notsucceeds=8833,e.notsuperset=8837,e.nowarmenian=1398,e.nparen=9385,e.nssquare=13233,e.nsuperior=8319,e.ntilde=241,e.nu=957,e.nuhiragana=12396,e.nukatakana=12492,e.nukatakanahalfwidth=65415,e.nuktabengali=2492,e.nuktadeva=2364,e.nuktagujarati=2748,e.nuktagurmukhi=2620,e.numbersign=35,e.numbersignmonospace=65283,e.numbersignsmall=65119,e.numeralsigngreek=884,e.numeralsignlowergreek=885,e.numero=8470,e.nun=1504,e.nundagesh=64320,e.nundageshhebrew=64320,e.nunhebrew=1504,e.nvsquare=13237,e.nwsquare=13243,e.nyabengali=2462,e.nyadeva=2334,e.nyagujarati=2718,e.nyagurmukhi=2590,e.o=111,e.oacute=243
e.oangthai=3629,e.obarred=629,e.obarredcyrillic=1257,e.obarreddieresiscyrillic=1259,e.obengali=2451,e.obopomofo=12571,e.obreve=335,e.ocandradeva=2321,e.ocandragujarati=2705,e.ocandravowelsigndeva=2377,e.ocandravowelsigngujarati=2761,e.ocaron=466,e.ocircle=9438,e.ocircumflex=244,e.ocircumflexacute=7889,e.ocircumflexdotbelow=7897,e.ocircumflexgrave=7891,e.ocircumflexhookabove=7893,e.ocircumflextilde=7895,e.ocyrillic=1086,e.odblacute=337,e.odblgrave=525,e.odeva=2323,e.odieresis=246,e.odieresiscyrillic=1255,e.odotbelow=7885,e.oe=339,e.oekorean=12634,e.ogonek=731,e.ogonekcmb=808,e.ograve=242,e.ogujarati=2707,e.oharmenian=1413,e.ohiragana=12362,e.ohookabove=7887,e.ohorn=417,e.ohornacute=7899,e.ohorndotbelow=7907,e.ohorngrave=7901,e.ohornhookabove=7903,e.ohorntilde=7905,e.ohungarumlaut=337,e.oi=419,e.oinvertedbreve=527,e.okatakana=12458,e.okatakanahalfwidth=65397,e.okorean=12631,e.olehebrew=1451,e.omacron=333,e.omacronacute=7763,e.omacrongrave=7761,e.omdeva=2384,e.omega=969,e.omega1=982,e.omegacyrillic=1121,e.omegalatinclosed=631,e.omegaroundcyrillic=1147,e.omegatitlocyrillic=1149,e.omegatonos=974,e.omgujarati=2768,e.omicron=959,e.omicrontonos=972,e.omonospace=65359,e.one=49,e.onearabic=1633,e.onebengali=2535,e.onecircle=9312,e.onecircleinversesansserif=10122,e.onedeva=2407,e.onedotenleader=8228,e.oneeighth=8539,e.onefitted=63196,e.onegujarati=2791,e.onegurmukhi=2663,e.onehackarabic=1633,e.onehalf=189,e.onehangzhou=12321,e.oneideographicparen=12832,e.oneinferior=8321,e.onemonospace=65297,e.onenumeratorbengali=2548,e.oneoldstyle=63281,e.oneparen=9332,e.oneperiod=9352,e.onepersian=1777,e.onequarter=188,e.oneroman=8560,e.onesuperior=185,e.onethai=3665,e.onethird=8531,e.oogonek=491,e.oogonekmacron=493,e.oogurmukhi=2579,e.oomatragurmukhi=2635,e.oopen=596,e.oparen=9386,e.openbullet=9702,e.option=8997,e.ordfeminine=170,e.ordmasculine=186,e.orthogonal=8735,e.oshortdeva=2322,e.oshortvowelsigndeva=2378,e.oslash=248,e.oslashacute=511,e.osmallhiragana=12361,e.osmallkatakana=12457,e.osmallkatakanahalfwidth=65387,e.ostrokeacute=511,e.osuperior=63216,e.otcyrillic=1151,e.otilde=245,e.otildeacute=7757,e.otildedieresis=7759,e.oubopomofo=12577,e.overline=8254,e.overlinecenterline=65098,e.overlinecmb=773,e.overlinedashed=65097,e.overlinedblwavy=65100,e.overlinewavy=65099,e.overscore=175,e.ovowelsignbengali=2507,e.ovowelsigndeva=2379,e.ovowelsigngujarati=2763,e.p=112,e.paampssquare=13184,e.paasentosquare=13099,e.pabengali=2474,e.pacute=7765,e.padeva=2346,e.pagedown=8671,e.pageup=8670,e.pagujarati=2730,e.pagurmukhi=2602,e.pahiragana=12401,e.paiyannoithai=3631,e.pakatakana=12497,e.palatalizationcyrilliccmb=1156,e.palochkacyrillic=1216,e.pansioskorean=12671,e.paragraph=182,e.parallel=8741,e.parenleft=40,e.parenleftaltonearabic=64830,e.parenleftbt=63725,e.parenleftex=63724,e.parenleftinferior=8333,e.parenleftmonospace=65288,e.parenleftsmall=65113,e.parenleftsuperior=8317,e.parenlefttp=63723,e.parenleftvertical=65077,e.parenright=41,e.parenrightaltonearabic=64831,e.parenrightbt=63736,e.parenrightex=63735,e.parenrightinferior=8334,e.parenrightmonospace=65289,e.parenrightsmall=65114,e.parenrightsuperior=8318,e.parenrighttp=63734,e.parenrightvertical=65078,e.partialdiff=8706,e.paseqhebrew=1472,e.pashtahebrew=1433,e.pasquare=13225,e.patah=1463,e.patah11=1463,e.patah1d=1463,e.patah2a=1463,e.patahhebrew=1463,e.patahnarrowhebrew=1463,e.patahquarterhebrew=1463,e.patahwidehebrew=1463,e.pazerhebrew=1441,e.pbopomofo=12550,e.pcircle=9439,e.pdotaccent=7767,e.pe=1508,e.pecyrillic=1087,e.pedagesh=64324,e.pedageshhebrew=64324,e.peezisquare=13115,e.pefinaldageshhebrew=64323,e.peharabic=1662,e.peharmenian=1402,e.pehebrew=1508,e.pehfinalarabic=64343,e.pehinitialarabic=64344,e.pehiragana=12410,e.pehmedialarabic=64345,e.pekatakana=12506,e.pemiddlehookcyrillic=1191,e.perafehebrew=64334,e.percent=37,e.percentarabic=1642,e.percentmonospace=65285,e.percentsmall=65130,e.period=46
e.periodarmenian=1417,e.periodcentered=183,e.periodhalfwidth=65377,e.periodinferior=63207,e.periodmonospace=65294,e.periodsmall=65106,e.periodsuperior=63208,e.perispomenigreekcmb=834,e.perpendicular=8869,e.perthousand=8240,e.peseta=8359,e.pfsquare=13194,e.phabengali=2475,e.phadeva=2347,e.phagujarati=2731,e.phagurmukhi=2603,e.phi=966,e.phi1=981,e.phieuphacirclekorean=12922,e.phieuphaparenkorean=12826,e.phieuphcirclekorean=12908,e.phieuphkorean=12621,e.phieuphparenkorean=12812,e.philatin=632,e.phinthuthai=3642,e.phisymbolgreek=981,e.phook=421,e.phophanthai=3614,e.phophungthai=3612,e.phosamphaothai=3616,e.pi=960,e.pieupacirclekorean=12915,e.pieupaparenkorean=12819,e.pieupcieuckorean=12662,e.pieupcirclekorean=12901,e.pieupkiyeokkorean=12658,e.pieupkorean=12610,e.pieupparenkorean=12805,e.pieupsioskiyeokkorean=12660,e.pieupsioskorean=12612,e.pieupsiostikeutkorean=12661,e.pieupthieuthkorean=12663,e.pieuptikeutkorean=12659,e.pihiragana=12404,e.pikatakana=12500,e.pisymbolgreek=982,e.piwrarmenian=1411,e.plus=43,e.plusbelowcmb=799,e.pluscircle=8853,e.plusminus=177,e.plusmod=726,e.plusmonospace=65291,e.plussmall=65122,e.plussuperior=8314,e.pmonospace=65360,e.pmsquare=13272,e.pohiragana=12413,e.pointingindexdownwhite=9759,e.pointingindexleftwhite=9756,e.pointingindexrightwhite=9758,e.pointingindexupwhite=9757,e.pokatakana=12509,e.poplathai=3611,e.postalmark=12306,e.postalmarkface=12320,e.pparen=9387,e.precedes=8826,e.prescription=8478,e.primemod=697,e.primereversed=8245,e.product=8719,e.projective=8965,e.prolongedkana=12540,e.propellor=8984,e.propersubset=8834,e.propersuperset=8835,e.proportion=8759,e.proportional=8733,e.psi=968,e.psicyrillic=1137,e.psilipneumatacyrilliccmb=1158,e.pssquare=13232,e.puhiragana=12407,e.pukatakana=12503,e.pvsquare=13236,e.pwsquare=13242,e.q=113,e.qadeva=2392,e.qadmahebrew=1448,e.qafarabic=1602,e.qaffinalarabic=65238,e.qafinitialarabic=65239,e.qafmedialarabic=65240,e.qamats=1464,e.qamats10=1464,e.qamats1a=1464,e.qamats1c=1464,e.qamats27=1464,e.qamats29=1464,e.qamats33=1464,e.qamatsde=1464,e.qamatshebrew=1464,e.qamatsnarrowhebrew=1464,e.qamatsqatanhebrew=1464,e.qamatsqatannarrowhebrew=1464,e.qamatsqatanquarterhebrew=1464,e.qamatsqatanwidehebrew=1464,e.qamatsquarterhebrew=1464,e.qamatswidehebrew=1464,e.qarneyparahebrew=1439,e.qbopomofo=12561,e.qcircle=9440,e.qhook=672,e.qmonospace=65361,e.qof=1511,e.qofdagesh=64327,e.qofdageshhebrew=64327,e.qofhebrew=1511,e.qparen=9388,e.quarternote=9833,e.qubuts=1467,e.qubuts18=1467,e.qubuts25=1467,e.qubuts31=1467,e.qubutshebrew=1467,e.qubutsnarrowhebrew=1467,e.qubutsquarterhebrew=1467,e.qubutswidehebrew=1467,e.question=63,e.questionarabic=1567,e.questionarmenian=1374,e.questiondown=191,e.questiondownsmall=63423,e.questiongreek=894,e.questionmonospace=65311,e.questionsmall=63295,e.quotedbl=34,e.quotedblbase=8222,e.quotedblleft=8220,e.quotedblmonospace=65282,e.quotedblprime=12318,e.quotedblprimereversed=12317,e.quotedblright=8221,e.quoteleft=8216,e.quoteleftreversed=8219,e.quotereversed=8219,e.quoteright=8217,e.quoterightn=329,e.quotesinglbase=8218,e.quotesingle=39,e.quotesinglemonospace=65287,e.r=114,e.raarmenian=1404,e.rabengali=2480,e.racute=341,e.radeva=2352,e.radical=8730,e.radicalex=63717,e.radoverssquare=13230,e.radoverssquaredsquare=13231,e.radsquare=13229,e.rafe=1471,e.rafehebrew=1471,e.ragujarati=2736,e.ragurmukhi=2608,e.rahiragana=12425,e.rakatakana=12521,e.rakatakanahalfwidth=65431,e.ralowerdiagonalbengali=2545,e.ramiddlediagonalbengali=2544,e.ramshorn=612,e.ratio=8758,e.rbopomofo=12566,e.rcaron=345,e.rcedilla=343,e.rcircle=9441,e.rcommaaccent=343,e.rdblgrave=529,e.rdotaccent=7769,e.rdotbelow=7771,e.rdotbelowmacron=7773,e.referencemark=8251,e.reflexsubset=8838,e.reflexsuperset=8839,e.registered=174,e.registersans=63720,e.registerserif=63194,e.reharabic=1585,e.reharmenian=1408,e.rehfinalarabic=65198,e.rehiragana=12428,e.rekatakana=12524,e.rekatakanahalfwidth=65434,e.resh=1512,e.reshdageshhebrew=64328,e.reshhebrew=1512,e.reversedtilde=8765,e.reviahebrew=1431,e.reviamugrashhebrew=1431
e.revlogicalnot=8976,e.rfishhook=638,e.rfishhookreversed=639,e.rhabengali=2525,e.rhadeva=2397,e.rho=961,e.rhook=637,e.rhookturned=635,e.rhookturnedsuperior=693,e.rhosymbolgreek=1009,e.rhotichookmod=734,e.rieulacirclekorean=12913,e.rieulaparenkorean=12817,e.rieulcirclekorean=12899,e.rieulhieuhkorean=12608,e.rieulkiyeokkorean=12602,e.rieulkiyeoksioskorean=12649,e.rieulkorean=12601,e.rieulmieumkorean=12603,e.rieulpansioskorean=12652,e.rieulparenkorean=12803,e.rieulphieuphkorean=12607,e.rieulpieupkorean=12604,e.rieulpieupsioskorean=12651,e.rieulsioskorean=12605,e.rieulthieuthkorean=12606,e.rieultikeutkorean=12650,e.rieulyeorinhieuhkorean=12653,e.rightangle=8735,e.righttackbelowcmb=793,e.righttriangle=8895,e.rihiragana=12426,e.rikatakana=12522,e.rikatakanahalfwidth=65432,e.ring=730,e.ringbelowcmb=805,e.ringcmb=778,e.ringhalfleft=703,e.ringhalfleftarmenian=1369,e.ringhalfleftbelowcmb=796,e.ringhalfleftcentered=723,e.ringhalfright=702,e.ringhalfrightbelowcmb=825,e.ringhalfrightcentered=722,e.rinvertedbreve=531,e.rittorusquare=13137,e.rlinebelow=7775,e.rlongleg=636,e.rlonglegturned=634,e.rmonospace=65362,e.rohiragana=12429,e.rokatakana=12525,e.rokatakanahalfwidth=65435,e.roruathai=3619,e.rparen=9389,e.rrabengali=2524,e.rradeva=2353,e.rragurmukhi=2652,e.rreharabic=1681,e.rrehfinalarabic=64397,e.rrvocalicbengali=2528,e.rrvocalicdeva=2400,e.rrvocalicgujarati=2784,e.rrvocalicvowelsignbengali=2500,e.rrvocalicvowelsigndeva=2372,e.rrvocalicvowelsigngujarati=2756,e.rsuperior=63217,e.rtblock=9616,e.rturned=633,e.rturnedsuperior=692,e.ruhiragana=12427,e.rukatakana=12523,e.rukatakanahalfwidth=65433,e.rupeemarkbengali=2546,e.rupeesignbengali=2547,e.rupiah=63197,e.ruthai=3620,e.rvocalicbengali=2443,e.rvocalicdeva=2315,e.rvocalicgujarati=2699,e.rvocalicvowelsignbengali=2499,e.rvocalicvowelsigndeva=2371,e.rvocalicvowelsigngujarati=2755,e.s=115,e.sabengali=2488,e.sacute=347,e.sacutedotaccent=7781,e.sadarabic=1589,e.sadeva=2360,e.sadfinalarabic=65210,e.sadinitialarabic=65211,e.sadmedialarabic=65212,e.sagujarati=2744,e.sagurmukhi=2616,e.sahiragana=12373,e.sakatakana=12469,e.sakatakanahalfwidth=65403,e.sallallahoualayhewasallamarabic=65018,e.samekh=1505,e.samekhdagesh=64321,e.samekhdageshhebrew=64321,e.samekhhebrew=1505,e.saraaathai=3634,e.saraaethai=3649,e.saraaimaimalaithai=3652,e.saraaimaimuanthai=3651,e.saraamthai=3635,e.saraathai=3632,e.saraethai=3648,e.saraiileftthai=63622,e.saraiithai=3637,e.saraileftthai=63621,e.saraithai=3636,e.saraothai=3650,e.saraueeleftthai=63624,e.saraueethai=3639,e.saraueleftthai=63623,e.sarauethai=3638,e.sarauthai=3640,e.sarauuthai=3641,e.sbopomofo=12569,e.scaron=353,e.scarondotaccent=7783,e.scedilla=351,e.schwa=601,e.schwacyrillic=1241,e.schwadieresiscyrillic=1243,e.schwahook=602,e.scircle=9442,e.scircumflex=349,e.scommaaccent=537,e.sdotaccent=7777,e.sdotbelow=7779,e.sdotbelowdotaccent=7785,e.seagullbelowcmb=828,e.second=8243,e.secondtonechinese=714,e.section=167,e.seenarabic=1587,e.seenfinalarabic=65202,e.seeninitialarabic=65203,e.seenmedialarabic=65204,e.segol=1462,e.segol13=1462,e.segol1f=1462,e.segol2c=1462,e.segolhebrew=1462,e.segolnarrowhebrew=1462,e.segolquarterhebrew=1462,e.segoltahebrew=1426,e.segolwidehebrew=1462,e.seharmenian=1405,e.sehiragana=12379,e.sekatakana=12475,e.sekatakanahalfwidth=65406,e.semicolon=59,e.semicolonarabic=1563,e.semicolonmonospace=65307,e.semicolonsmall=65108,e.semivoicedmarkkana=12444,e.semivoicedmarkkanahalfwidth=65439,e.sentisquare=13090,e.sentosquare=13091,e.seven=55,e.sevenarabic=1639,e.sevenbengali=2541,e.sevencircle=9318,e.sevencircleinversesansserif=10128,e.sevendeva=2413,e.seveneighths=8542,e.sevengujarati=2797,e.sevengurmukhi=2669,e.sevenhackarabic=1639,e.sevenhangzhou=12327,e.sevenideographicparen=12838,e.seveninferior=8327,e.sevenmonospace=65303,e.sevenoldstyle=63287,e.sevenparen=9338,e.sevenperiod=9358,e.sevenpersian=1783,e.sevenroman=8566,e.sevensuperior=8311,e.seventeencircle=9328,e.seventeenparen=9348,e.seventeenperiod=9368,e.seventhai=3671,e.sfthyphen=173,e.shaarmenian=1399,e.shabengali=2486,e.shacyrillic=1096,e.shaddaarabic=1617,e.shaddadammaarabic=64609,e.shaddadammatanarabic=64606,e.shaddafathaarabic=64608,e.shaddakasraarabic=64610,e.shaddakasratanarabic=64607,e.shade=9618,e.shadedark=9619,e.shadelight=9617
e.shademedium=9618,e.shadeva=2358,e.shagujarati=2742,e.shagurmukhi=2614,e.shalshelethebrew=1427,e.shbopomofo=12565,e.shchacyrillic=1097,e.sheenarabic=1588,e.sheenfinalarabic=65206,e.sheeninitialarabic=65207,e.sheenmedialarabic=65208,e.sheicoptic=995,e.sheqel=8362,e.sheqelhebrew=8362,e.sheva=1456,e.sheva115=1456,e.sheva15=1456,e.sheva22=1456,e.sheva2e=1456,e.shevahebrew=1456,e.shevanarrowhebrew=1456,e.shevaquarterhebrew=1456,e.shevawidehebrew=1456,e.shhacyrillic=1211,e.shimacoptic=1005,e.shin=1513,e.shindagesh=64329,e.shindageshhebrew=64329,e.shindageshshindot=64300,e.shindageshshindothebrew=64300,e.shindageshsindot=64301,e.shindageshsindothebrew=64301,e.shindothebrew=1473,e.shinhebrew=1513,e.shinshindot=64298,e.shinshindothebrew=64298,e.shinsindot=64299,e.shinsindothebrew=64299,e.shook=642,e.sigma=963,e.sigma1=962,e.sigmafinal=962,e.sigmalunatesymbolgreek=1010,e.sihiragana=12375,e.sikatakana=12471,e.sikatakanahalfwidth=65404,e.siluqhebrew=1469,e.siluqlefthebrew=1469,e.similar=8764,e.sindothebrew=1474,e.siosacirclekorean=12916,e.siosaparenkorean=12820,e.sioscieuckorean=12670,e.sioscirclekorean=12902,e.sioskiyeokkorean=12666,e.sioskorean=12613,e.siosnieunkorean=12667,e.siosparenkorean=12806,e.siospieupkorean=12669,e.siostikeutkorean=12668,e.six=54,e.sixarabic=1638,e.sixbengali=2540,e.sixcircle=9317,e.sixcircleinversesansserif=10127,e.sixdeva=2412,e.sixgujarati=2796,e.sixgurmukhi=2668,e.sixhackarabic=1638,e.sixhangzhou=12326,e.sixideographicparen=12837,e.sixinferior=8326,e.sixmonospace=65302,e.sixoldstyle=63286,e.sixparen=9337,e.sixperiod=9357,e.sixpersian=1782,e.sixroman=8565,e.sixsuperior=8310,e.sixteencircle=9327,e.sixteencurrencydenominatorbengali=2553,e.sixteenparen=9347,e.sixteenperiod=9367,e.sixthai=3670,e.slash=47,e.slashmonospace=65295,e.slong=383,e.slongdotaccent=7835,e.smileface=9786,e.smonospace=65363,e.sofpasuqhebrew=1475,e.softhyphen=173,e.softsigncyrillic=1100,e.sohiragana=12381,e.sokatakana=12477,e.sokatakanahalfwidth=65407,e.soliduslongoverlaycmb=824,e.solidusshortoverlaycmb=823,e.sorusithai=3625,e.sosalathai=3624,e.sosothai=3595,e.sosuathai=3626,e.space=32,e.spacehackarabic=32,e.spade=9824,e.spadesuitblack=9824,e.spadesuitwhite=9828,e.sparen=9390,e.squarebelowcmb=827,e.squarecc=13252,e.squarecm=13213,e.squarediagonalcrosshatchfill=9641,e.squarehorizontalfill=9636,e.squarekg=13199,e.squarekm=13214,e.squarekmcapital=13262,e.squareln=13265,e.squarelog=13266,e.squaremg=13198,e.squaremil=13269,e.squaremm=13212,e.squaremsquared=13217,e.squareorthogonalcrosshatchfill=9638,e.squareupperlefttolowerrightfill=9639,e.squareupperrighttolowerleftfill=9640,e.squareverticalfill=9637,e.squarewhitewithsmallblack=9635,e.srsquare=13275,e.ssabengali=2487,e.ssadeva=2359,e.ssagujarati=2743,e.ssangcieuckorean=12617,e.ssanghieuhkorean=12677,e.ssangieungkorean=12672,e.ssangkiyeokkorean=12594,e.ssangnieunkorean=12645,e.ssangpieupkorean=12611,e.ssangsioskorean=12614,e.ssangtikeutkorean=12600,e.ssuperior=63218,e.sterling=163,e.sterlingmonospace=65505,e.strokelongoverlaycmb=822,e.strokeshortoverlaycmb=821,e.subset=8834,e.subsetnotequal=8842,e.subsetorequal=8838,e.succeeds=8827,e.suchthat=8715,e.suhiragana=12377,e.sukatakana=12473,e.sukatakanahalfwidth=65405,e.sukunarabic=1618,e.summation=8721,e.sun=9788,e.superset=8835,e.supersetnotequal=8843,e.supersetorequal=8839,e.svsquare=13276,e.syouwaerasquare=13180,e.t=116,e.tabengali=2468,e.tackdown=8868,e.tackleft=8867,e.tadeva=2340,e.tagujarati=2724,e.tagurmukhi=2596,e.taharabic=1591,e.tahfinalarabic=65218,e.tahinitialarabic=65219,e.tahiragana=12383,e.tahmedialarabic=65220,e.taisyouerasquare=13181,e.takatakana=12479,e.takatakanahalfwidth=65408,e.tatweelarabic=1600,e.tau=964,e.tav=1514,e.tavdages=64330,e.tavdagesh=64330,e.tavdageshhebrew=64330,e.tavhebrew=1514,e.tbar=359,e.tbopomofo=12554,e.tcaron=357,e.tccurl=680,e.tcedilla=355,e.tcheharabic=1670,e.tchehfinalarabic=64379,e.tchehinitialarabic=64380,e.tchehmedialarabic=64381,e.tcircle=9443,e.tcircumflexbelow=7793,e.tcommaaccent=355,e.tdieresis=7831,e.tdotaccent=7787,e.tdotbelow=7789,e.tecyrillic=1090,e.tedescendercyrillic=1197,e.teharabic=1578
e.tehfinalarabic=65174,e.tehhahinitialarabic=64674,e.tehhahisolatedarabic=64524,e.tehinitialarabic=65175,e.tehiragana=12390,e.tehjeeminitialarabic=64673,e.tehjeemisolatedarabic=64523,e.tehmarbutaarabic=1577,e.tehmarbutafinalarabic=65172,e.tehmedialarabic=65176,e.tehmeeminitialarabic=64676,e.tehmeemisolatedarabic=64526,e.tehnoonfinalarabic=64627,e.tekatakana=12486,e.tekatakanahalfwidth=65411,e.telephone=8481,e.telephoneblack=9742,e.telishagedolahebrew=1440,e.telishaqetanahebrew=1449,e.tencircle=9321,e.tenideographicparen=12841,e.tenparen=9341,e.tenperiod=9361,e.tenroman=8569,e.tesh=679,e.tet=1496,e.tetdagesh=64312,e.tetdageshhebrew=64312,e.tethebrew=1496,e.tetsecyrillic=1205,e.tevirhebrew=1435,e.tevirlefthebrew=1435,e.thabengali=2469,e.thadeva=2341,e.thagujarati=2725,e.thagurmukhi=2597,e.thalarabic=1584,e.thalfinalarabic=65196,e.thanthakhatlowleftthai=63640,e.thanthakhatlowrightthai=63639,e.thanthakhatthai=3660,e.thanthakhatupperleftthai=63638,e.theharabic=1579,e.thehfinalarabic=65178,e.thehinitialarabic=65179,e.thehmedialarabic=65180,e.thereexists=8707,e.therefore=8756,e.theta=952,e.theta1=977,e.thetasymbolgreek=977,e.thieuthacirclekorean=12921,e.thieuthaparenkorean=12825,e.thieuthcirclekorean=12907,e.thieuthkorean=12620,e.thieuthparenkorean=12811,e.thirteencircle=9324,e.thirteenparen=9344,e.thirteenperiod=9364,e.thonangmonthothai=3601,e.thook=429,e.thophuthaothai=3602,e.thorn=254,e.thothahanthai=3607,e.thothanthai=3600,e.thothongthai=3608,e.thothungthai=3606,e.thousandcyrillic=1154,e.thousandsseparatorarabic=1644,e.thousandsseparatorpersian=1644,e.three=51,e.threearabic=1635,e.threebengali=2537,e.threecircle=9314,e.threecircleinversesansserif=10124,e.threedeva=2409,e.threeeighths=8540,e.threegujarati=2793,e.threegurmukhi=2665,e.threehackarabic=1635,e.threehangzhou=12323,e.threeideographicparen=12834,e.threeinferior=8323,e.threemonospace=65299,e.threenumeratorbengali=2550,e.threeoldstyle=63283,e.threeparen=9334,e.threeperiod=9354,e.threepersian=1779,e.threequarters=190,e.threequartersemdash=63198,e.threeroman=8562,e.threesuperior=179,e.threethai=3667,e.thzsquare=13204,e.tihiragana=12385,e.tikatakana=12481,e.tikatakanahalfwidth=65409,e.tikeutacirclekorean=12912,e.tikeutaparenkorean=12816,e.tikeutcirclekorean=12898,e.tikeutkorean=12599,e.tikeutparenkorean=12802,e.tilde=732,e.tildebelowcmb=816,e.tildecmb=771,e.tildecomb=771,e.tildedoublecmb=864,e.tildeoperator=8764,e.tildeoverlaycmb=820,e.tildeverticalcmb=830,e.timescircle=8855,e.tipehahebrew=1430,e.tipehalefthebrew=1430,e.tippigurmukhi=2672,e.titlocyrilliccmb=1155,e.tiwnarmenian=1407,e.tlinebelow=7791,e.tmonospace=65364,e.toarmenian=1385,e.tohiragana=12392,e.tokatakana=12488,e.tokatakanahalfwidth=65412,e.tonebarextrahighmod=741,e.tonebarextralowmod=745,e.tonebarhighmod=742,e.tonebarlowmod=744,e.tonebarmidmod=743,e.tonefive=445,e.tonesix=389,e.tonetwo=424,e.tonos=900,e.tonsquare=13095,e.topatakthai=3599,e.tortoiseshellbracketleft=12308,e.tortoiseshellbracketleftsmall=65117,e.tortoiseshellbracketleftvertical=65081,e.tortoiseshellbracketright=12309,e.tortoiseshellbracketrightsmall=65118,e.tortoiseshellbracketrightvertical=65082,e.totaothai=3605,e.tpalatalhook=427,e.tparen=9391,e.trademark=8482,e.trademarksans=63722,e.trademarkserif=63195,e.tretroflexhook=648,e.triagdn=9660,e.triaglf=9668,e.triagrt=9658,e.triagup=9650,e.ts=678,e.tsadi=1510,e.tsadidagesh=64326,e.tsadidageshhebrew=64326,e.tsadihebrew=1510,e.tsecyrillic=1094,e.tsere=1461,e.tsere12=1461,e.tsere1e=1461,e.tsere2b=1461,e.tserehebrew=1461,e.tserenarrowhebrew=1461,e.tserequarterhebrew=1461,e.tserewidehebrew=1461,e.tshecyrillic=1115,e.tsuperior=63219,e.ttabengali=2463,e.ttadeva=2335,e.ttagujarati=2719,e.ttagurmukhi=2591,e.tteharabic=1657,e.ttehfinalarabic=64359,e.ttehinitialarabic=64360,e.ttehmedialarabic=64361,e.tthabengali=2464,e.tthadeva=2336,e.tthagujarati=2720,e.tthagurmukhi=2592,e.tturned=647,e.tuhiragana=12388,e.tukatakana=12484,e.tukatakanahalfwidth=65410,e.tusmallhiragana=12387,e.tusmallkatakana=12483,e.tusmallkatakanahalfwidth=65391,e.twelvecircle=9323,e.twelveparen=9343,e.twelveperiod=9363,e.twelveroman=8571,e.twentycircle=9331,e.twentyhangzhou=21316,e.twentyparen=9351,e.twentyperiod=9371,e.two=50,e.twoarabic=1634,e.twobengali=2536,e.twocircle=9313,e.twocircleinversesansserif=10123,e.twodeva=2408
e.twodotenleader=8229,e.twodotleader=8229,e.twodotleadervertical=65072,e.twogujarati=2792,e.twogurmukhi=2664,e.twohackarabic=1634,e.twohangzhou=12322,e.twoideographicparen=12833,e.twoinferior=8322,e.twomonospace=65298,e.twonumeratorbengali=2549,e.twooldstyle=63282,e.twoparen=9333,e.twoperiod=9353,e.twopersian=1778,e.tworoman=8561,e.twostroke=443,e.twosuperior=178,e.twothai=3666,e.twothirds=8532,e.u=117,e.uacute=250,e.ubar=649,e.ubengali=2441,e.ubopomofo=12584,e.ubreve=365,e.ucaron=468,e.ucircle=9444,e.ucircumflex=251,e.ucircumflexbelow=7799,e.ucyrillic=1091,e.udattadeva=2385,e.udblacute=369,e.udblgrave=533,e.udeva=2313,e.udieresis=252,e.udieresisacute=472,e.udieresisbelow=7795,e.udieresiscaron=474,e.udieresiscyrillic=1265,e.udieresisgrave=476,e.udieresismacron=470,e.udotbelow=7909,e.ugrave=249,e.ugujarati=2697,e.ugurmukhi=2569,e.uhiragana=12358,e.uhookabove=7911,e.uhorn=432,e.uhornacute=7913,e.uhorndotbelow=7921,e.uhorngrave=7915,e.uhornhookabove=7917,e.uhorntilde=7919,e.uhungarumlaut=369,e.uhungarumlautcyrillic=1267,e.uinvertedbreve=535,e.ukatakana=12454,e.ukatakanahalfwidth=65395,e.ukcyrillic=1145,e.ukorean=12636,e.umacron=363,e.umacroncyrillic=1263,e.umacrondieresis=7803,e.umatragurmukhi=2625,e.umonospace=65365,e.underscore=95,e.underscoredbl=8215,e.underscoremonospace=65343,e.underscorevertical=65075,e.underscorewavy=65103,e.union=8746,e.universal=8704,e.uogonek=371,e.uparen=9392,e.upblock=9600,e.upperdothebrew=1476,e.upsilon=965,e.upsilondieresis=971,e.upsilondieresistonos=944,e.upsilonlatin=650,e.upsilontonos=973,e.uptackbelowcmb=797,e.uptackmod=724,e.uragurmukhi=2675,e.uring=367,e.ushortcyrillic=1118,e.usmallhiragana=12357,e.usmallkatakana=12453,e.usmallkatakanahalfwidth=65385,e.ustraightcyrillic=1199,e.ustraightstrokecyrillic=1201,e.utilde=361,e.utildeacute=7801,e.utildebelow=7797,e.uubengali=2442,e.uudeva=2314,e.uugujarati=2698,e.uugurmukhi=2570,e.uumatragurmukhi=2626,e.uuvowelsignbengali=2498,e.uuvowelsigndeva=2370,e.uuvowelsigngujarati=2754,e.uvowelsignbengali=2497,e.uvowelsigndeva=2369,e.uvowelsigngujarati=2753,e.v=118,e.vadeva=2357,e.vagujarati=2741,e.vagurmukhi=2613,e.vakatakana=12535,e.vav=1493,e.vavdagesh=64309,e.vavdagesh65=64309,e.vavdageshhebrew=64309,e.vavhebrew=1493,e.vavholam=64331,e.vavholamhebrew=64331,e.vavvavhebrew=1520,e.vavyodhebrew=1521,e.vcircle=9445,e.vdotbelow=7807,e.vecyrillic=1074,e.veharabic=1700,e.vehfinalarabic=64363,e.vehinitialarabic=64364,e.vehmedialarabic=64365,e.vekatakana=12537,e.venus=9792,e.verticalbar=124,e.verticallineabovecmb=781,e.verticallinebelowcmb=809,e.verticallinelowmod=716,e.verticallinemod=712,e.vewarmenian=1406,e.vhook=651,e.vikatakana=12536,e.viramabengali=2509,e.viramadeva=2381,e.viramagujarati=2765,e.visargabengali=2435,e.visargadeva=2307,e.visargagujarati=2691,e.vmonospace=65366,e.voarmenian=1400,e.voicediterationhiragana=12446,e.voicediterationkatakana=12542,e.voicedmarkkana=12443,e.voicedmarkkanahalfwidth=65438,e.vokatakana=12538,e.vparen=9393,e.vtilde=7805,e.vturned=652,e.vuhiragana=12436,e.vukatakana=12532,e.w=119,e.wacute=7811,e.waekorean=12633,e.wahiragana=12431,e.wakatakana=12527,e.wakatakanahalfwidth=65436,e.wakorean=12632,e.wasmallhiragana=12430,e.wasmallkatakana=12526,e.wattosquare=13143,e.wavedash=12316,e.wavyunderscorevertical=65076,e.wawarabic=1608,e.wawfinalarabic=65262,e.wawhamzaabovearabic=1572,e.wawhamzaabovefinalarabic=65158,e.wbsquare=13277,e.wcircle=9446,e.wcircumflex=373,e.wdieresis=7813,e.wdotaccent=7815,e.wdotbelow=7817,e.wehiragana=12433,e.weierstrass=8472,e.wekatakana=12529,e.wekorean=12638,e.weokorean=12637,e.wgrave=7809,e.whitebullet=9702,e.whitecircle=9675,e.whitecircleinverse=9689,e.whitecornerbracketleft=12302,e.whitecornerbracketleftvertical=65091,e.whitecornerbracketright=12303,e.whitecornerbracketrightvertical=65092,e.whitediamond=9671,e.whitediamondcontainingblacksmalldiamond=9672,e.whitedownpointingsmalltriangle=9663,e.whitedownpointingtriangle=9661,e.whiteleftpointingsmalltriangle=9667,e.whiteleftpointingtriangle=9665,e.whitelenticularbracketleft=12310,e.whitelenticularbracketright=12311,e.whiterightpointingsmalltriangle=9657,e.whiterightpointingtriangle=9655
e.whitesmallsquare=9643,e.whitesmilingface=9786,e.whitesquare=9633,e.whitestar=9734,e.whitetelephone=9743,e.whitetortoiseshellbracketleft=12312,e.whitetortoiseshellbracketright=12313,e.whiteuppointingsmalltriangle=9653,e.whiteuppointingtriangle=9651,e.wihiragana=12432,e.wikatakana=12528,e.wikorean=12639,e.wmonospace=65367,e.wohiragana=12434,e.wokatakana=12530,e.wokatakanahalfwidth=65382,e.won=8361,e.wonmonospace=65510,e.wowaenthai=3623,e.wparen=9394,e.wring=7832,e.wsuperior=695,e.wturned=653,e.wynn=447,e.x=120,e.xabovecmb=829,e.xbopomofo=12562,e.xcircle=9447,e.xdieresis=7821,e.xdotaccent=7819,e.xeharmenian=1389,e.xi=958,e.xmonospace=65368,e.xparen=9395,e.xsuperior=739,e.y=121,e.yaadosquare=13134,e.yabengali=2479,e.yacute=253,e.yadeva=2351,e.yaekorean=12626,e.yagujarati=2735,e.yagurmukhi=2607,e.yahiragana=12420,e.yakatakana=12516,e.yakatakanahalfwidth=65428,e.yakorean=12625,e.yamakkanthai=3662,e.yasmallhiragana=12419,e.yasmallkatakana=12515,e.yasmallkatakanahalfwidth=65388,e.yatcyrillic=1123,e.ycircle=9448,e.ycircumflex=375,e.ydieresis=255,e.ydotaccent=7823,e.ydotbelow=7925,e.yeharabic=1610,e.yehbarreearabic=1746,e.yehbarreefinalarabic=64431,e.yehfinalarabic=65266,e.yehhamzaabovearabic=1574,e.yehhamzaabovefinalarabic=65162,e.yehhamzaaboveinitialarabic=65163,e.yehhamzaabovemedialarabic=65164,e.yehinitialarabic=65267,e.yehmedialarabic=65268,e.yehmeeminitialarabic=64733,e.yehmeemisolatedarabic=64600,e.yehnoonfinalarabic=64660,e.yehthreedotsbelowarabic=1745,e.yekorean=12630,e.yen=165,e.yenmonospace=65509,e.yeokorean=12629,e.yeorinhieuhkorean=12678,e.yerahbenyomohebrew=1450,e.yerahbenyomolefthebrew=1450,e.yericyrillic=1099,e.yerudieresiscyrillic=1273,e.yesieungkorean=12673,e.yesieungpansioskorean=12675,e.yesieungsioskorean=12674,e.yetivhebrew=1434,e.ygrave=7923,e.yhook=436,e.yhookabove=7927,e.yiarmenian=1397,e.yicyrillic=1111,e.yikorean=12642,e.yinyang=9775,e.yiwnarmenian=1410,e.ymonospace=65369,e.yod=1497,e.yoddagesh=64313,e.yoddageshhebrew=64313,e.yodhebrew=1497,e.yodyodhebrew=1522,e.yodyodpatahhebrew=64287,e.yohiragana=12424,e.yoikorean=12681,e.yokatakana=12520,e.yokatakanahalfwidth=65430,e.yokorean=12635,e.yosmallhiragana=12423,e.yosmallkatakana=12519,e.yosmallkatakanahalfwidth=65390,e.yotgreek=1011,e.yoyaekorean=12680,e.yoyakorean=12679,e.yoyakthai=3618,e.yoyingthai=3597,e.yparen=9396,e.ypogegrammeni=890,e.ypogegrammenigreekcmb=837,e.yr=422,e.yring=7833,e.ysuperior=696,e.ytilde=7929,e.yturned=654,e.yuhiragana=12422,e.yuikorean=12684,e.yukatakana=12518,e.yukatakanahalfwidth=65429,e.yukorean=12640,e.yusbigcyrillic=1131,e.yusbigiotifiedcyrillic=1133,e.yuslittlecyrillic=1127,e.yuslittleiotifiedcyrillic=1129,e.yusmallhiragana=12421,e.yusmallkatakana=12517,e.yusmallkatakanahalfwidth=65389,e.yuyekorean=12683,e.yuyeokorean=12682,e.yyabengali=2527,e.yyadeva=2399,e.z=122,e.zaarmenian=1382,e.zacute=378,e.zadeva=2395,e.zagurmukhi=2651,e.zaharabic=1592,e.zahfinalarabic=65222,e.zahinitialarabic=65223,e.zahiragana=12374,e.zahmedialarabic=65224,e.zainarabic=1586,e.zainfinalarabic=65200,e.zakatakana=12470,e.zaqefgadolhebrew=1429,e.zaqefqatanhebrew=1428,e.zarqahebrew=1432,e.zayin=1494,e.zayindagesh=64310,e.zayindageshhebrew=64310,e.zayinhebrew=1494,e.zbopomofo=12567,e.zcaron=382,e.zcircle=9449,e.zcircumflex=7825,e.zcurl=657,e.zdot=380,e.zdotaccent=380,e.zdotbelow=7827,e.zecyrillic=1079,e.zedescendercyrillic=1177,e.zedieresiscyrillic=1247,e.zehiragana=12380,e.zekatakana=12476,e.zero=48,e.zeroarabic=1632,e.zerobengali=2534,e.zerodeva=2406,e.zerogujarati=2790,e.zerogurmukhi=2662,e.zerohackarabic=1632,e.zeroinferior=8320,e.zeromonospace=65296,e.zerooldstyle=63280,e.zeropersian=1776,e.zerosuperior=8304,e.zerothai=3664,e.zerowidthjoiner=65279,e.zerowidthnonjoiner=8204,e.zerowidthspace=8203,e.zeta=950,e.zhbopomofo=12563,e.zhearmenian=1386,e.zhebrevecyrillic=1218,e.zhecyrillic=1078,e.zhedescendercyrillic=1175,e.zhedieresiscyrillic=1245,e.zihiragana=12376,e.zikatakana=12472,e.zinorhebrew=1454,e.zlinebelow=7829,e.zmonospace=65370,e.zohiragana=12382,e.zokatakana=12478,e.zparen=9397
e.zretroflexhook=656,e.zstroke=438,e.zuhiragana=12378,e.zukatakana=12474,e[".notdef"]=0,e.angbracketleftbig=9001,e.angbracketleftBig=9001,e.angbracketleftbigg=9001,e.angbracketleftBigg=9001,e.angbracketrightBig=9002,e.angbracketrightbig=9002,e.angbracketrightBigg=9002,e.angbracketrightbigg=9002,e.arrowhookleft=8618,e.arrowhookright=8617,e.arrowlefttophalf=8636,e.arrowleftbothalf=8637,e.arrownortheast=8599,e.arrownorthwest=8598,e.arrowrighttophalf=8640,e.arrowrightbothalf=8641,e.arrowsoutheast=8600,e.arrowsouthwest=8601,e.backslashbig=8726,e.backslashBig=8726,e.backslashBigg=8726,e.backslashbigg=8726,e.bardbl=8214,e.bracehtipdownleft=65079,e.bracehtipdownright=65079,e.bracehtipupleft=65080,e.bracehtipupright=65080,e.braceleftBig=123,e.braceleftbig=123,e.braceleftbigg=123,e.braceleftBigg=123,e.bracerightBig=125,e.bracerightbig=125,e.bracerightbigg=125,e.bracerightBigg=125,e.bracketleftbig=91,e.bracketleftBig=91,e.bracketleftbigg=91,e.bracketleftBigg=91,e.bracketrightBig=93,e.bracketrightbig=93,e.bracketrightbigg=93,e.bracketrightBigg=93,e.ceilingleftbig=8968,e.ceilingleftBig=8968,e.ceilingleftBigg=8968,e.ceilingleftbigg=8968,e.ceilingrightbig=8969,e.ceilingrightBig=8969,e.ceilingrightbigg=8969,e.ceilingrightBigg=8969,e.circledotdisplay=8857,e.circledottext=8857,e.circlemultiplydisplay=8855,e.circlemultiplytext=8855,e.circleplusdisplay=8853,e.circleplustext=8853,e.contintegraldisplay=8750,e.contintegraltext=8750,e.coproductdisplay=8720,e.coproducttext=8720,e.floorleftBig=8970,e.floorleftbig=8970,e.floorleftbigg=8970,e.floorleftBigg=8970,e.floorrightbig=8971,e.floorrightBig=8971,e.floorrightBigg=8971,e.floorrightbigg=8971,e.hatwide=770,e.hatwider=770,e.hatwidest=770,e.intercal=7488,e.integraldisplay=8747,e.integraltext=8747,e.intersectiondisplay=8898,e.intersectiontext=8898,e.logicalanddisplay=8743,e.logicalandtext=8743,e.logicalordisplay=8744,e.logicalortext=8744,e.parenleftBig=40,e.parenleftbig=40,e.parenleftBigg=40,e.parenleftbigg=40,e.parenrightBig=41,e.parenrightbig=41,e.parenrightBigg=41,e.parenrightbigg=41,e.prime=8242,e.productdisplay=8719,e.producttext=8719,e.radicalbig=8730,e.radicalBig=8730,e.radicalBigg=8730,e.radicalbigg=8730,e.radicalbt=8730,e.radicaltp=8730,e.radicalvertex=8730,e.slashbig=47,e.slashBig=47,e.slashBigg=47,e.slashbigg=47,e.summationdisplay=8721,e.summationtext=8721,e.tildewide=732,e.tildewider=732,e.tildewidest=732,e.uniondisplay=8899,e.unionmultidisplay=8846,e.unionmultitext=8846,e.unionsqdisplay=8852,e.unionsqtext=8852,e.uniontext=8899,e.vextenddouble=8741,e.vextendsingle=8739}),n=a(function(e){e.space=32,e.a1=9985,e.a2=9986,e.a202=9987,e.a3=9988,e.a4=9742,e.a5=9990,e.a119=9991,e.a118=9992,e.a117=9993,e.a11=9755,e.a12=9758,e.a13=9996,e.a14=9997,e.a15=9998,e.a16=9999,e.a105=1e4,e.a17=10001,e.a18=10002,e.a19=10003,e.a20=10004,e.a21=10005,e.a22=10006,e.a23=10007,e.a24=10008,e.a25=10009,e.a26=10010,e.a27=10011,e.a28=10012,e.a6=10013,e.a7=10014,e.a8=10015,e.a9=10016,e.a10=10017,e.a29=10018,e.a30=10019,e.a31=10020,e.a32=10021,e.a33=10022,e.a34=10023,e.a35=9733,e.a36=10025,e.a37=10026,e.a38=10027,e.a39=10028,e.a40=10029,e.a41=10030,e.a42=10031,e.a43=10032,e.a44=10033,e.a45=10034,e.a46=10035,e.a47=10036,e.a48=10037,e.a49=10038,e.a50=10039,e.a51=10040,e.a52=10041,e.a53=10042,e.a54=10043,e.a55=10044,e.a56=10045,e.a57=10046,e.a58=10047,e.a59=10048,e.a60=10049,e.a61=10050,e.a62=10051,e.a63=10052,e.a64=10053,e.a65=10054,e.a66=10055,e.a67=10056,e.a68=10057,e.a69=10058,e.a70=10059,e.a71=9679,e.a72=10061,e.a73=9632,e.a74=10063,e.a203=10064,e.a75=10065,e.a204=10066,e.a76=9650,e.a77=9660,e.a78=9670,e.a79=10070,e.a81=9687,e.a82=10072,e.a83=10073,e.a84=10074,e.a97=10075,e.a98=10076,e.a99=10077,e.a100=10078,e.a101=10081,e.a102=10082,e.a103=10083,e.a104=10084,e.a106=10085,e.a107=10086,e.a108=10087,e.a112=9827,e.a111=9830,e.a110=9829,e.a109=9824,e.a120=9312,e.a121=9313,e.a122=9314,e.a123=9315,e.a124=9316,e.a125=9317,e.a126=9318,e.a127=9319,e.a128=9320,e.a129=9321,e.a130=10102,e.a131=10103,e.a132=10104,e.a133=10105,e.a134=10106,e.a135=10107,e.a136=10108,e.a137=10109,e.a138=10110,e.a139=10111,e.a140=10112,e.a141=10113,e.a142=10114,e.a143=10115,e.a144=10116,e.a145=10117,e.a146=10118,e.a147=10119,e.a148=10120,e.a149=10121,e.a150=10122,e.a151=10123,e.a152=10124,e.a153=10125,e.a154=10126,e.a155=10127,e.a156=10128,e.a157=10129,e.a158=10130,e.a159=10131,e.a160=10132,e.a161=8594,e.a163=8596,e.a164=8597,e.a196=10136,e.a165=10137,e.a192=10138,e.a166=10139,e.a167=10140,e.a168=10141,e.a169=10142,e.a170=10143,e.a171=10144,e.a172=10145,e.a173=10146,e.a162=10147,e.a174=10148,e.a175=10149,e.a176=10150,e.a177=10151,e.a178=10152,e.a179=10153,e.a193=10154,e.a180=10155,e.a199=10156,e.a181=10157,e.a200=10158,e.a182=10159,e.a201=10161,e.a183=10162,e.a184=10163,e.a197=10164,e.a185=10165,e.a194=10166,e.a198=10167,e.a186=10168,e.a195=10169,e.a187=10170,e.a188=10171,e.a189=10172,e.a190=10173,e.a191=10174,e.a89=10088,e.a90=10089,e.a93=10090,e.a94=10091,e.a91=10092,e.a92=10093,e.a205=10094,e.a85=10095,e.a206=10096,e.a86=10097,e.a87=10098,e.a88=10099
e.a95=10100,e.a96=10101,e[".notdef"]=0})
t.getGlyphsUnicode=i,t.getDingbatsGlyphsUnicode=n},function(e,t,r){"use strict"
e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!")
return e}},function(e,t,r){"use strict"
e.exports=function(e,t,r,a){if(!(e instanceof t)||void 0!==a&&a in e)throw TypeError(r+": incorrect invocation!")
return e}},function(e,t,r){"use strict"
var a=r(13),i=r(21),n=r(8)
e.exports=function(e){for(var t=a(this),r=n(t.length),o=arguments.length,s=i(o>1?arguments[1]:void 0,r),c=o>2?arguments[2]:void 0,l=void 0===c?r:i(c,r);l>s;)t[s++]=e
return t}},function(e,t,r){"use strict"
var a=r(22),i=r(8),n=r(21)
e.exports=function(e){return function(t,r,o){var s,c=a(t),l=i(c.length),u=n(o,l)
if(e&&r!=r){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===r)return e||u||0
return!e&&-1}}},function(e,t,r){"use strict"
var a=r(24),i=r(2)("toStringTag"),n="Arguments"==a(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(e){}}
e.exports=function(e){var t,r,s
return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=o(t=Object(e),i))?r:n?a(t):"Object"==(s=a(t))&&"function"==typeof t.callee?"Arguments":s}},function(e,t,r){"use strict"
e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e)
return e}},function(e,t,r){"use strict"
var a=r(10),i=r(4).document,n=a(i)&&a(i.createElement)
e.exports=function(e){return n?i.createElement(e):{}}},function(e,t,r){"use strict"
var a=r(4),i=r(18),n=r(6),o=r(28),s=r(25),c=function e(t,r,c){var l,u,h,f,d=t&e.F,g=t&e.G,m=t&e.S,p=t&e.P,b=t&e.B,v=g?a:m?a[r]||(a[r]={}):(a[r]||{}).prototype,y=g?i:i[r]||(i[r]={}),w=y.prototype||(y.prototype={})
g&&(c=r)
for(l in c)u=!d&&v&&void 0!==v[l],h=(u?v:c)[l],f=b&&u?s(h,a):p&&"function"==typeof h?s(Function.call,h):h,v&&o(v,l,h,t&e.U),y[l]!=h&&n(y,l,f),p&&w[l]!=h&&(w[l]=h)}
a.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,r){"use strict"
e.exports=!r(5)&&!r(19)(function(){return 7!=Object.defineProperty(r(40)("div"),"a",{get:function(){return 7}}).a})},function(e,t,r){"use strict"
var a=r(24)
e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==a(e)?e.split(""):Object(e)}},function(e,t,r){"use strict"
var a=r(17),i=r(76),n=r(26),o=r(30)("IE_PROTO"),s=function(){},c=function(){var e,t=r(40)("iframe"),a=n.length
for(t.style.display="none",r(69).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;a--;)delete c.prototype[n[a]]
return c()}
e.exports=Object.create||function(e,t){var r
return null!==e?(s.prototype=a(e),r=new s,s.prototype=null,r[o]=e):r=c(),void 0===t?r:i(r,t)}},function(e,t,r){"use strict"
var a=r(47),i=r(26).concat("length","prototype")
t.f=Object.getOwnPropertyNames||function(e){return a(e,i)}},function(e,t,r){"use strict"
var a=r(7),i=r(13),n=r(30)("IE_PROTO"),o=Object.prototype
e.exports=Object.getPrototypeOf||function(e){return e=i(e),a(e,n)?e[n]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},function(e,t,r){"use strict"
var a=r(7),i=r(22),n=r(37)(!1),o=r(30)("IE_PROTO")
e.exports=function(e,t){var r,s=i(e),c=0,l=[]
for(r in s)r!=o&&a(s,r)&&l.push(r)
for(;t.length>c;)a(s,r=t[c++])&&(~n(l,r)||l.push(r))
return l}},function(e,t,r){"use strict"
var a=r(28)
e.exports=function(e,t,r){for(var i in t)a(e,i,t[i],r)
return e}},function(e,t,r){"use strict"
var a=r(4),i=a["__core-js_shared__"]||(a["__core-js_shared__"]={})
e.exports=function(e){return i[e]||(i[e]={})}},function(e,t,r){"use strict"
var a=r(12),i=r(8)
e.exports=function(e){if(void 0===e)return 0
var t=a(e),r=i(t)
if(t!==r)throw RangeError("Wrong length!")
return r}},function(e,t,r){"use strict"
for(var a,i=r(4),n=r(6),o=r(14),s=o("typed_array"),c=o("view"),l=!(!i.ArrayBuffer||!i.DataView),u=l,h=0,f="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");h<9;)(a=i[f[h++]])?(n(a.prototype,s,!0),n(a.prototype,c,!0)):u=!1
e.exports={ABV:l,CONSTR:u,TYPED:s,VIEW:c}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){function e(e,t,r){this.data=e,this.bp=t,this.dataEnd=r,this.chigh=e[t],this.clow=0,this.byteIn(),this.chigh=this.chigh<<7&65535|this.clow>>9&127,this.clow=this.clow<<7&65535,this.ct-=7,this.a=32768}var t=[{qe:22017,nmps:1,nlps:1,switchFlag:1},{qe:13313,nmps:2,nlps:6,switchFlag:0},{qe:6145,nmps:3,nlps:9,switchFlag:0},{qe:2753,nmps:4,nlps:12,switchFlag:0},{qe:1313,nmps:5,nlps:29,switchFlag:0},{qe:545,nmps:38,nlps:33,switchFlag:0},{qe:22017,nmps:7,nlps:6,switchFlag:1},{qe:21505,nmps:8,nlps:14,switchFlag:0},{qe:18433,nmps:9,nlps:14,switchFlag:0},{qe:14337,nmps:10,nlps:14,switchFlag:0},{qe:12289,nmps:11,nlps:17,switchFlag:0},{qe:9217,nmps:12,nlps:18,switchFlag:0},{qe:7169,nmps:13,nlps:20,switchFlag:0},{qe:5633,nmps:29,nlps:21,switchFlag:0},{qe:22017,nmps:15,nlps:14,switchFlag:1},{qe:21505,nmps:16,nlps:14,switchFlag:0},{qe:20737,nmps:17,nlps:15,switchFlag:0},{qe:18433,nmps:18,nlps:16,switchFlag:0},{qe:14337,nmps:19,nlps:17,switchFlag:0},{qe:13313,nmps:20,nlps:18,switchFlag:0},{qe:12289,nmps:21,nlps:19,switchFlag:0},{qe:10241,nmps:22,nlps:19,switchFlag:0},{qe:9217,nmps:23,nlps:20,switchFlag:0},{qe:8705,nmps:24,nlps:21,switchFlag:0},{qe:7169,nmps:25,nlps:22,switchFlag:0},{qe:6145,nmps:26,nlps:23,switchFlag:0},{qe:5633,nmps:27,nlps:24,switchFlag:0},{qe:5121,nmps:28,nlps:25,switchFlag:0},{qe:4609,nmps:29,nlps:26,switchFlag:0},{qe:4353,nmps:30,nlps:27,switchFlag:0},{qe:2753,nmps:31,nlps:28,switchFlag:0},{qe:2497,nmps:32,nlps:29,switchFlag:0},{qe:2209,nmps:33,nlps:30,switchFlag:0},{qe:1313,nmps:34,nlps:31,switchFlag:0},{qe:1089,nmps:35,nlps:32,switchFlag:0},{qe:673,nmps:36,nlps:33,switchFlag:0},{qe:545,nmps:37,nlps:34,switchFlag:0},{qe:321,nmps:38,nlps:35,switchFlag:0},{qe:273,nmps:39,nlps:36,switchFlag:0},{qe:133,nmps:40,nlps:37,switchFlag:0},{qe:73,nmps:41,nlps:38,switchFlag:0},{qe:37,nmps:42,nlps:39,switchFlag:0},{qe:21,nmps:43,nlps:40,switchFlag:0},{qe:9,nmps:44,nlps:41,switchFlag:0},{qe:5,nmps:45,nlps:42,switchFlag:0},{qe:1,nmps:45,nlps:43,switchFlag:0},{qe:22017,nmps:46,nlps:46,switchFlag:0}]
return e.prototype={byteIn:function(){var e=this.data,t=this.bp
if(255===e[t]){e[t+1]>143?(this.clow+=65280,this.ct=8):(t++,this.clow+=e[t]<<9,this.ct=7,this.bp=t)}else t++,this.clow+=t<this.dataEnd?e[t]<<8:65280,this.ct=8,this.bp=t
this.clow>65535&&(this.chigh+=this.clow>>16,this.clow&=65535)},readBit:function(e,r){var a,i=e[r]>>1,n=1&e[r],o=t[i],s=o.qe,c=this.a-s
if(this.chigh<s)c<s?(c=s,a=n,i=o.nmps):(c=s,a=1^n,1===o.switchFlag&&(n=a),i=o.nlps)
else{if(this.chigh-=s,0!=(32768&c))return this.a=c,n
c<s?(a=1^n,1===o.switchFlag&&(n=a),i=o.nlps):(a=n,i=o.nmps)}do{0===this.ct&&this.byteIn(),c<<=1,this.chigh=this.chigh<<1&65535|this.clow>>15&1,this.clow=this.clow<<1&65535,this.ct--}while(0==(32768&c))
return this.a=c,e[r]=i<<1|n,a}},e}()
t.ArithmeticDecoder=a},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CFFCompiler=t.CFFPrivateDict=t.CFFTopDict=t.CFFCharset=t.CFFIndex=t.CFFStrings=t.CFFHeader=t.CFF=t.CFFParser=t.CFFStandardStrings=void 0
var a=r(0),i=r(89),n=r(16),o=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],s=function(){function e(e,t,r){this.bytes=e.getBytes(),this.properties=t,this.seacAnalysisEnabled=!!r}var t=[null,{id:"hstem",min:2,stackClearing:!0,stem:!0},null,{id:"vstem",min:2,stackClearing:!0,stem:!0},{id:"vmoveto",min:1,stackClearing:!0},{id:"rlineto",min:2,resetStack:!0},{id:"hlineto",min:1,resetStack:!0},{id:"vlineto",min:1,resetStack:!0},{id:"rrcurveto",min:6,resetStack:!0},null,{id:"callsubr",min:1,undefStack:!0},{id:"return",min:0,undefStack:!0},null,null,{id:"endchar",min:0,stackClearing:!0},null,null,null,{id:"hstemhm",min:2,stackClearing:!0,stem:!0},{id:"hintmask",min:0,stackClearing:!0},{id:"cntrmask",min:0,stackClearing:!0},{id:"rmoveto",min:2,stackClearing:!0},{id:"hmoveto",min:1,stackClearing:!0},{id:"vstemhm",min:2,stackClearing:!0,stem:!0},{id:"rcurveline",min:8,resetStack:!0},{id:"rlinecurve",min:8,resetStack:!0},{id:"vvcurveto",min:4,resetStack:!0},{id:"hhcurveto",min:4,resetStack:!0},null,{id:"callgsubr",min:1,undefStack:!0},{id:"vhcurveto",min:4,resetStack:!0},{id:"hvcurveto",min:4,resetStack:!0}],r=[null,null,null,{id:"and",min:2,stackDelta:-1},{id:"or",min:2,stackDelta:-1},{id:"not",min:1,stackDelta:0},null,null,null,{id:"abs",min:1,stackDelta:0},{id:"add",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]+e[t-1]}},{id:"sub",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]-e[t-1]}},{id:"div",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]/e[t-1]}},null,{id:"neg",min:1,stackDelta:0,stackFn:function(e,t){e[t-1]=-e[t-1]}},{id:"eq",min:2,stackDelta:-1},null,null,{id:"drop",min:1,stackDelta:-1},null,{id:"put",min:2,stackDelta:-2},{id:"get",min:1,stackDelta:0},{id:"ifelse",min:4,stackDelta:-3},{id:"random",min:0,stackDelta:1},{id:"mul",min:2,stackDelta:-1,stackFn:function(e,t){e[t-2]=e[t-2]*e[t-1]}},null,{id:"sqrt",min:1,stackDelta:0},{id:"dup",min:1,stackDelta:1},{id:"exch",min:2,stackDelta:0},{id:"index",min:2,stackDelta:0},{id:"roll",min:3,stackDelta:-2},null,null,null,{id:"hflex",min:7,resetStack:!0},{id:"flex",min:13,resetStack:!0},{id:"hflex1",min:9,resetStack:!0},{id:"flex1",min:11,resetStack:!0}]
return e.prototype={parse:function(){var e=this.properties,t=new c
this.cff=t
var r=this.parseHeader(),a=this.parseIndex(r.endPos),i=this.parseIndex(a.endPos),n=this.parseIndex(i.endPos),o=this.parseIndex(n.endPos),s=this.parseDict(i.obj.get(0)),l=this.createDict(d,s,t.strings)
t.header=r.obj,t.names=this.parseNameIndex(a.obj),t.strings=this.parseStringIndex(n.obj),t.topDict=l,t.globalSubrIndex=o.obj,this.parsePrivateDict(t.topDict),t.isCIDFont=l.hasName("ROS")
var u=l.getByName("CharStrings"),h=this.parseIndex(u).obj,f=l.getByName("FontMatrix")
f&&(e.fontMatrix=f)
var g=l.getByName("FontBBox")
g&&(e.ascent=Math.max(g[3],g[1]),e.descent=Math.min(g[1],g[3]),e.ascentScaled=!0)
var m,p
if(t.isCIDFont){for(var b=this.parseIndex(l.getByName("FDArray")).obj,v=0,y=b.count;v<y;++v){var w=b.get(v),k=this.createDict(d,this.parseDict(w),t.strings)
this.parsePrivateDict(k),t.fdArray.push(k)}p=null,m=this.parseCharsets(l.getByName("charset"),h.count,t.strings,!0),t.fdSelect=this.parseFDSelect(l.getByName("FDSelect"),h.count)}else m=this.parseCharsets(l.getByName("charset"),h.count,t.strings,!1),p=this.parseEncoding(l.getByName("Encoding"),e,t.strings,m.charset)
t.charset=m,t.encoding=p
var S=this.parseCharStrings({charStrings:h,localSubrIndex:l.privateDict.subrsIndex,globalSubrIndex:o.obj,fdSelect:t.fdSelect,fdArray:t.fdArray,privateDict:l.privateDict})
return t.charStrings=S.charStrings,t.seacs=S.seacs,t.widths=S.widths,t},parseHeader:function(){for(var e=this.bytes,t=e.length,r=0;r<t&&1!==e[r];)++r
if(r>=t)throw new a.FormatError("Invalid CFF header")
0!==r&&((0,a.info)("cff data is shifted"),e=e.subarray(r),this.bytes=e)
var i=e[0],n=e[1],o=e[2],s=e[3]
return{obj:new l(i,n,o,s),endPos:o}},parseDict:function(e){function t(){for(var t="",a=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"],i=e.length;r<i;){var n=e[r++],o=n>>4,s=15&n
if(15===o)break
if(t+=a[o],15===s)break
t+=a[s]}return parseFloat(t)}var r=0,i=[],n=[]
r=0
for(var o=e.length;r<o;){var s=e[r]
s<=21?(12===s&&(s=s<<8|e[++r]),n.push([s,i]),i=[],++r):i.push(function(){var i=e[r++]
return 30===i?t():28===i?(i=e[r++],i=(i<<24|e[r++]<<16)>>16):29===i?(i=e[r++],i=i<<8|e[r++],i=i<<8|e[r++],i=i<<8|e[r++]):i>=32&&i<=246?i-139:i>=247&&i<=250?256*(i-247)+e[r++]+108:i>=251&&i<=254?-256*(i-251)-e[r++]-108:((0,a.warn)('CFFParser_parseDict: "'+i+'" is a reserved command.'),NaN)}())}return n},parseIndex:function(e){var t,r,a=new h,i=this.bytes,n=i[e++]<<8|i[e++],o=[],s=e
if(0!==n){var c=i[e++],l=e+(n+1)*c-1
for(t=0,r=n+1;t<r;++t){for(var u=0,f=0;f<c;++f)u<<=8,u+=i[e++]
o.push(l+u)}s=o[n]}for(t=0,r=o.length-1;t<r;++t){var d=o[t],g=o[t+1]
a.add(i.subarray(d,g))}return{obj:a,endPos:s}},parseNameIndex:function(e){for(var t=[],r=0,i=e.count;r<i;++r){for(var n=e.get(r),o=Math.min(n.length,127),s=[],c=0;c<o;++c){var l=n[c]
0!==c||0!==l?s[c]=l<33||l>126||91===l||93===l||40===l||41===l||123===l||125===l||60===l||62===l||47===l||37===l||35===l?95:l:s[c]=l}t.push((0,a.bytesToString)(s))}return t},parseStringIndex:function(e){for(var t=new u,r=0,i=e.count;r<i;++r){var n=e.get(r)
t.add((0,a.bytesToString)(n))}return t},createDict:function(e,t,r){for(var a=new e(r),i=0,n=t.length;i<n;++i){var o=t[i],s=o[0],c=o[1]
a.setByKey(s,c)}return a},parseCharString:function(e,i,n,o){if(!i||e.callDepth>10)return!1
for(var s=e.stackSize,c=e.stack,l=i.length,u=0;u<l;){var h=i[u++],f=null
if(12===h){var d=i[u++]
0===d?(i[u-2]=139,i[u-1]=22,s=0):f=r[d]}else if(28===h)c[s]=(i[u]<<24|i[u+1]<<16)>>16,u+=2,s++
else if(14===h){if(s>=4&&(s-=4,this.seacAnalysisEnabled))return e.seac=c.slice(s,s+4),!1
f=t[h]}else if(h>=32&&h<=246)c[s]=h-139,s++
else if(h>=247&&h<=254)c[s]=h<251?(h-247<<8)+i[u]+108:-(h-251<<8)-i[u]-108,u++,s++
else if(255===h)c[s]=(i[u]<<24|i[u+1]<<16|i[u+2]<<8|i[u+3])/65536,u+=4,s++
else if(19===h||20===h)e.hints+=s>>1,u+=e.hints+7>>3,s%=2,f=t[h]
else{if(10===h||29===h){var g
if(!(g=10===h?n:o))return f=t[h],(0,a.warn)("Missing subrsIndex for "+f.id),!1
var m=32768
g.count<1240?m=107:g.count<33900&&(m=1131)
var p=c[--s]+m
if(p<0||p>=g.count||isNaN(p))return f=t[h],(0,a.warn)("Out of bounds subrIndex for "+f.id),!1
e.stackSize=s,e.callDepth++
var b=this.parseCharString(e,g.get(p),n,o)
if(!b)return!1
e.callDepth--,s=e.stackSize
continue}if(11===h)return e.stackSize=s,!0
f=t[h]}if(f){if(f.stem&&(e.hints+=s>>1),"min"in f&&!e.undefStack&&s<f.min)return(0,a.warn)("Not enough parameters for "+f.id+"; actual: "+s+", expected: "+f.min),!1
e.firstStackClearing&&f.stackClearing&&(e.firstStackClearing=!1,s-=f.min,s>=2&&f.stem?s%=2:s>1&&(0,a.warn)("Found too many parameters for stack-clearing command"),s>0&&c[s-1]>=0&&(e.width=c[s-1])),"stackDelta"in f?("stackFn"in f&&f.stackFn(c,s),s+=f.stackDelta):f.stackClearing?s=0:f.resetStack?(s=0,e.undefStack=!1):f.undefStack&&(s=0,e.undefStack=!0,e.firstStackClearing=!1)}}return e.stackSize=s,!0},parseCharStrings:function(e){for(var t=e.charStrings,r=e.localSubrIndex,i=e.globalSubrIndex,n=e.fdSelect,o=e.fdArray,s=e.privateDict,c=[],l=[],u=t.count,h=0;h<u;h++){var f=t.get(h),d={callDepth:0,stackSize:0,stack:[],undefStack:!0,hints:0,firstStackClearing:!0,seac:null,width:null},g=!0,m=null,p=s
if(n&&o.length){var b=n.getFDIndex(h);-1===b&&((0,a.warn)("Glyph index is not in fd select."),g=!1),b>=o.length&&((0,a.warn)("Invalid fd index for glyph index."),g=!1),g&&(p=o[b].privateDict,m=p.subrsIndex)}else r&&(m=r)
if(g&&(g=this.parseCharString(d,f,m,i)),null!==d.width){var v=p.getByName("nominalWidthX")
l[h]=v+d.width}else{var y=p.getByName("defaultWidthX")
l[h]=y}null!==d.seac&&(c[h]=d.seac),g||t.set(h,new Uint8Array([14]))}return{charStrings:t,seacs:c,widths:l}},emptyPrivateDictionary:function(e){var t=this.createDict(g,[],e.strings)
e.setByKey(18,[0,0]),e.privateDict=t},parsePrivateDict:function(e){if(!e.hasName("Private"))return void this.emptyPrivateDictionary(e)
var t=e.getByName("Private")
if(!(0,a.isArray)(t)||2!==t.length)return void e.removeByName("Private")
var r=t[0],i=t[1]
if(0===r||i>=this.bytes.length)return void this.emptyPrivateDictionary(e)
var n=i+r,o=this.bytes.subarray(i,n),s=this.parseDict(o),c=this.createDict(g,s,e.strings)
if(e.privateDict=c,c.getByName("Subrs")){var l=c.getByName("Subrs"),u=i+l
if(0===l||u>=this.bytes.length)return void this.emptyPrivateDictionary(e)
var h=this.parseIndex(u)
c.subrsIndex=h.obj}},parseCharsets:function(e,t,r,n){if(0===e)return new p(!0,m.ISO_ADOBE,i.ISOAdobeCharset)
if(1===e)return new p(!0,m.EXPERT,i.ExpertCharset)
if(2===e)return new p(!0,m.EXPERT_SUBSET,i.ExpertSubsetCharset)
var o,s,c,l=this.bytes,u=e,h=l[e++],f=[".notdef"]
switch(t-=1,h){case 0:for(c=0;c<t;c++)o=l[e++]<<8|l[e++],f.push(n?o:r.get(o))
break
case 1:for(;f.length<=t;)for(o=l[e++]<<8|l[e++],s=l[e++],c=0;c<=s;c++)f.push(n?o++:r.get(o++))
break
case 2:for(;f.length<=t;)for(o=l[e++]<<8|l[e++],s=l[e++]<<8|l[e++],c=0;c<=s;c++)f.push(n?o++:r.get(o++))
break
default:throw new a.FormatError("Unknown charset format")}var d=e,g=l.subarray(u,d)
return new p(!1,h,f,g)},parseEncoding:function(e,t,r,i){var o,s,c,l=Object.create(null),u=this.bytes,h=!1,f=null
if(0===e||1===e){h=!0,o=e
var d=e?n.ExpertEncoding:n.StandardEncoding
for(s=0,c=i.length;s<c;s++){var g=d.indexOf(i[s]);-1!==g&&(l[g]=s)}}else{var m=e
switch(127&(o=u[e++])){case 0:var p=u[e++]
for(s=1;s<=p;s++)l[u[e++]]=s
break
case 1:var v=u[e++],y=1
for(s=0;s<v;s++)for(var w=u[e++],k=u[e++],S=w;S<=w+k;S++)l[S]=y++
break
default:throw new a.FormatError("Unknown encoding format: "+o+" in CFF")}var C=e
128&o&&(u[m]&=127,function(){var t=u[e++]
for(s=0;s<t;s++){var a=u[e++],n=(u[e++]<<8)+(255&u[e++])
l[a]=i.indexOf(r.get(n))}}()),f=u.subarray(m,C)}return o&=127,new b(h,o,l,f)},parseFDSelect:function(e,t){var r,i,n=e,o=this.bytes,s=o[e++],c=[],l=!1
switch(s){case 0:for(i=0;i<t;++i){var u=o[e++]
c.push(u)}r=o.subarray(n,e)
break
case 3:var h=o[e++]<<8|o[e++]
for(i=0;i<h;++i){var f=o[e++]<<8|o[e++]
0===i&&0!==f&&((0,a.warn)("parseFDSelect: The first range must have a first GID of 0 -- trying to recover."),l=!0,f=0)
for(var d=o[e++],g=o[e]<<8|o[e+1],m=f;m<g;++m)c.push(d)}e+=2,r=o.subarray(n,e),l&&(r[3]=r[4]=0)
break
default:throw new a.FormatError('parseFDSelect: Unknown format "'+s+'".')}if(c.length!==t)throw new a.FormatError("parseFDSelect: Invalid font data.")
return new v(c,r)}},e}(),c=function(){function e(){this.header=null,this.names=[],this.topDict=null,this.strings=new u,this.globalSubrIndex=null,this.encoding=null,this.charset=null,this.charStrings=null,this.fdArray=[],this.fdSelect=null,this.isCIDFont=!1}return e}(),l=function(){function e(e,t,r,a){this.major=e,this.minor=t,this.hdrSize=r,this.offSize=a}return e}(),u=function(){function e(){this.strings=[]}return e.prototype={get:function(e){return e>=0&&e<=390?o[e]:e-391<=this.strings.length?this.strings[e-391]:o[0]},add:function(e){this.strings.push(e)},get count(){return this.strings.length}},e}(),h=function(){function e(){this.objects=[],this.length=0}return e.prototype={add:function(e){this.length+=e.length,this.objects.push(e)},set:function(e,t){this.length+=t.length-this.objects[e].length,this.objects[e]=t},get:function(e){return this.objects[e]},get count(){return this.objects.length}},e}(),f=function(){function e(e,t){this.keyToNameMap=e.keyToNameMap,this.nameToKeyMap=e.nameToKeyMap,this.defaults=e.defaults,this.types=e.types,this.opcodes=e.opcodes,this.order=e.order,this.strings=t,this.values=Object.create(null)}return e.prototype={setByKey:function(e,t){if(!(e in this.keyToNameMap))return!1
var r=t.length
if(0===r)return!0
for(var i=0;i<r;i++)if(isNaN(t[i]))return(0,a.warn)('Invalid CFFDict value: "'+t+'" for key "'+e+'".'),!0
var n=this.types[e]
return"num"!==n&&"sid"!==n&&"offset"!==n||(t=t[0]),this.values[e]=t,!0},setByName:function(e,t){if(!(e in this.nameToKeyMap))throw new a.FormatError('Invalid dictionary name "'+e+'"')
this.values[this.nameToKeyMap[e]]=t},hasName:function(e){return this.nameToKeyMap[e]in this.values},getByName:function(e){if(!(e in this.nameToKeyMap))throw new a.FormatError("Invalid dictionary name "+e+'"')
var t=this.nameToKeyMap[e]
return t in this.values?this.values[t]:this.defaults[t]},removeByName:function(e){delete this.values[this.nameToKeyMap[e]]}},e.createTables=function(e){for(var t={keyToNameMap:{},nameToKeyMap:{},defaults:{},types:{},opcodes:{},order:[]},r=0,i=e.length;r<i;++r){var n=e[r],o=(0,a.isArray)(n[0])?(n[0][0]<<8)+n[0][1]:n[0]
t.keyToNameMap[o]=n[1],t.nameToKeyMap[n[1]]=o,t.types[o]=n[2],t.defaults[o]=n[3],t.opcodes[o]=(0,a.isArray)(n[0])?n[0]:[n[0]],t.order.push(o)}return t},e}(),d=function(){function e(e){null===r&&(r=f.createTables(t)),f.call(this,r,e),this.privateDict=null}var t=[[[12,30],"ROS",["sid","sid","num"],null],[[12,20],"SyntheticBase","num",null],[0,"version","sid",null],[1,"Notice","sid",null],[[12,0],"Copyright","sid",null],[2,"FullName","sid",null],[3,"FamilyName","sid",null],[4,"Weight","sid",null],[[12,1],"isFixedPitch","num",0],[[12,2],"ItalicAngle","num",0],[[12,3],"UnderlinePosition","num",-100],[[12,4],"UnderlineThickness","num",50],[[12,5],"PaintType","num",0],[[12,6],"CharstringType","num",2],[[12,7],"FontMatrix",["num","num","num","num","num","num"],[.001,0,0,.001,0,0]],[13,"UniqueID","num",null],[5,"FontBBox",["num","num","num","num"],[0,0,0,0]],[[12,8],"StrokeWidth","num",0],[14,"XUID","array",null],[15,"charset","offset",0],[16,"Encoding","offset",0],[17,"CharStrings","offset",0],[18,"Private",["offset","offset"],null],[[12,21],"PostScript","sid",null],[[12,22],"BaseFontName","sid",null],[[12,23],"BaseFontBlend","delta",null],[[12,31],"CIDFontVersion","num",0],[[12,32],"CIDFontRevision","num",0],[[12,33],"CIDFontType","num",0],[[12,34],"CIDCount","num",8720],[[12,35],"UIDBase","num",null],[[12,37],"FDSelect","offset",null],[[12,36],"FDArray","offset",null],[[12,38],"FontName","sid",null]],r=null
return e.prototype=Object.create(f.prototype),e}(),g=function(){function e(e){null===r&&(r=f.createTables(t)),f.call(this,r,e),this.subrsIndex=null}var t=[[6,"BlueValues","delta",null],[7,"OtherBlues","delta",null],[8,"FamilyBlues","delta",null],[9,"FamilyOtherBlues","delta",null],[[12,9],"BlueScale","num",.039625],[[12,10],"BlueShift","num",7],[[12,11],"BlueFuzz","num",1],[10,"StdHW","num",null],[11,"StdVW","num",null],[[12,12],"StemSnapH","delta",null],[[12,13],"StemSnapV","delta",null],[[12,14],"ForceBold","num",0],[[12,17],"LanguageGroup","num",0],[[12,18],"ExpansionFactor","num",.06],[[12,19],"initialRandomSeed","num",0],[20,"defaultWidthX","num",0],[21,"nominalWidthX","num",0],[19,"Subrs","offset",null]],r=null
return e.prototype=Object.create(f.prototype),e}(),m={ISO_ADOBE:0,EXPERT:1,EXPERT_SUBSET:2},p=function(){function e(e,t,r,a){this.predefined=e,this.format=t,this.charset=r,this.raw=a}return e}(),b=function(){function e(e,t,r,a){this.predefined=e,this.format=t,this.encoding=r,this.raw=a}return e}(),v=function(){function e(e,t){this.fdSelect=e,this.raw=t}return e.prototype={getFDIndex:function(e){return e<0||e>=this.fdSelect.length?-1:this.fdSelect[e]}},e}(),y=function(){function e(){this.offsets=Object.create(null)}return e.prototype={isTracking:function(e){return e in this.offsets},track:function(e,t){if(e in this.offsets)throw new a.FormatError("Already tracking location of "+e)
this.offsets[e]=t},offset:function(e){for(var t in this.offsets)this.offsets[t]+=e},setEntryLocation:function(e,t,r){if(!(e in this.offsets))throw new a.FormatError("Not tracking location of "+e)
for(var i=r.data,n=this.offsets[e],o=0,s=t.length;o<s;++o){var c=5*o+n,l=c+1,u=c+2,h=c+3,f=c+4
if(29!==i[c]||0!==i[l]||0!==i[u]||0!==i[h]||0!==i[f])throw new a.FormatError("writing to an offset that is not empty")
var d=t[o]
i[c]=29,i[l]=d>>24&255,i[u]=d>>16&255,i[h]=d>>8&255,i[f]=255&d}}},e}(),w=function(){function e(e){this.cff=e}return e.prototype={compile:function(){var e=this.cff,t={data:[],length:0,add:function(e){this.data=this.data.concat(e),this.length=this.data.length}},r=this.compileHeader(e.header)
t.add(r)
var i=this.compileNameIndex(e.names)
if(t.add(i),e.isCIDFont&&e.topDict.hasName("FontMatrix")){var n=e.topDict.getByName("FontMatrix")
e.topDict.removeByName("FontMatrix")
for(var o=0,s=e.fdArray.length;o<s;o++){var c=e.fdArray[o],l=n.slice(0)
c.hasName("FontMatrix")&&(l=a.Util.transform(l,c.getByName("FontMatrix"))),c.setByName("FontMatrix",l)}}var u=this.compileTopDicts([e.topDict],t.length,e.isCIDFont)
t.add(u.output)
var h=u.trackers[0],f=this.compileStringIndex(e.strings.strings)
t.add(f)
var d=this.compileIndex(e.globalSubrIndex)
if(t.add(d),e.encoding&&e.topDict.hasName("Encoding"))if(e.encoding.predefined)h.setEntryLocation("Encoding",[e.encoding.format],t)
else{var g=this.compileEncoding(e.encoding)
h.setEntryLocation("Encoding",[t.length],t),t.add(g)}if(e.charset&&e.topDict.hasName("charset"))if(e.charset.predefined)h.setEntryLocation("charset",[e.charset.format],t)
else{var m=this.compileCharset(e.charset)
h.setEntryLocation("charset",[t.length],t),t.add(m)}var p=this.compileCharStrings(e.charStrings)
if(h.setEntryLocation("CharStrings",[t.length],t),t.add(p),e.isCIDFont){h.setEntryLocation("FDSelect",[t.length],t)
var b=this.compileFDSelect(e.fdSelect.raw)
t.add(b),u=this.compileTopDicts(e.fdArray,t.length,!0),h.setEntryLocation("FDArray",[t.length],t),t.add(u.output)
var v=u.trackers
this.compilePrivateDicts(e.fdArray,v,t)}return this.compilePrivateDicts([e.topDict],[h],t),t.add([0]),t.data},encodeNumber:function(e){return parseFloat(e)!==parseInt(e,10)||isNaN(e)?this.encodeFloat(e):this.encodeInteger(e)},encodeFloat:function(e){var t=e.toString(),r=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t)
if(r){var a=parseFloat("1e"+((r[2]?+r[2]:0)+r[1].length))
t=(Math.round(e*a)/a).toString()}var i,n,o=""
for(i=0,n=t.length;i<n;++i){var s=t[i]
o+="e"===s?"-"===t[++i]?"c":"b":"."===s?"a":"-"===s?"e":s}o+=1&o.length?"f":"ff"
var c=[30]
for(i=0,n=o.length;i<n;i+=2)c.push(parseInt(o.substr(i,2),16))
return c},encodeInteger:function(e){var t
return e>=-107&&e<=107?t=[e+139]:e>=108&&e<=1131?(e-=108,t=[247+(e>>8),255&e]):e>=-1131&&e<=-108?(e=-e-108,t=[251+(e>>8),255&e]):t=e>=-32768&&e<=32767?[28,e>>8&255,255&e]:[29,e>>24&255,e>>16&255,e>>8&255,255&e],t},compileHeader:function(e){return[e.major,e.minor,e.hdrSize,e.offSize]},compileNameIndex:function(e){for(var t=new h,r=0,i=e.length;r<i;++r)t.add((0,a.stringToBytes)(e[r]))
return this.compileIndex(t)},compileTopDicts:function(e,t,r){for(var a=[],i=new h,n=0,o=e.length;n<o;++n){var s=e[n]
r&&(s.removeByName("CIDFontVersion"),s.removeByName("CIDFontRevision"),s.removeByName("CIDFontType"),s.removeByName("CIDCount"),s.removeByName("UIDBase"))
var c=new y,l=this.compileDict(s,c)
a.push(c),i.add(l),c.offset(t)}return i=this.compileIndex(i,a),{trackers:a,output:i}},compilePrivateDicts:function(e,t,r){for(var i=0,n=e.length;i<n;++i){var o=e[i],s=o.privateDict
if(!s||!o.hasName("Private"))throw new a.FormatError("There must be a private dictionary.")
var c=new y,l=this.compileDict(s,c),u=r.length
if(c.offset(u),l.length||(u=0),t[i].setEntryLocation("Private",[l.length,u],r),r.add(l),s.subrsIndex&&s.hasName("Subrs")){var h=this.compileIndex(s.subrsIndex)
c.setEntryLocation("Subrs",[l.length],r),r.add(h)}}},compileDict:function(e,t){for(var r=[],i=e.order,n=0;n<i.length;++n){var o=i[n]
if(o in e.values){var s=e.values[o],c=e.types[o]
if((0,a.isArray)(c)||(c=[c]),(0,a.isArray)(s)||(s=[s]),0!==s.length){for(var l=0,u=c.length;l<u;++l){var h=c[l],f=s[l]
switch(h){case"num":case"sid":r=r.concat(this.encodeNumber(f))
break
case"offset":var d=e.keyToNameMap[o]
t.isTracking(d)||t.track(d,r.length),r=r.concat([29,0,0,0,0])
break
case"array":case"delta":r=r.concat(this.encodeNumber(f))
for(var g=1,m=s.length;g<m;++g)r=r.concat(this.encodeNumber(s[g]))
break
default:throw new a.FormatError("Unknown data type of "+h)}}r=r.concat(e.opcodes[o])}}}return r},compileStringIndex:function(e){for(var t=new h,r=0,i=e.length;r<i;++r)t.add((0,a.stringToBytes)(e[r]))
return this.compileIndex(t)},compileGlobalSubrIndex:function(){var e=this.cff.globalSubrIndex
this.out.writeByteArray(this.compileIndex(e))},compileCharStrings:function(e){return this.compileIndex(e)},compileCharset:function(e){return this.compileTypedArray(e.raw)},compileEncoding:function(e){return this.compileTypedArray(e.raw)},compileFDSelect:function(e){return this.compileTypedArray(e)},compileTypedArray:function(e){for(var t=[],r=0,a=e.length;r<a;++r)t[r]=e[r]
return t},compileIndex:function(e,t){t=t||[]
var r=e.objects,a=r.length
if(0===a)return[0,0,0]
var i,n=[a>>8&255,255&a],o=1
for(i=0;i<a;++i)o+=r[i].length
var s
s=o<256?1:o<65536?2:o<16777216?3:4,n.push(s)
var c=1
for(i=0;i<a+1;i++)1===s?n.push(255&c):2===s?n.push(c>>8&255,255&c):3===s?n.push(c>>16&255,c>>8&255,255&c):n.push(c>>>24&255,c>>16&255,c>>8&255,255&c),r[i]&&(c+=r[i].length)
for(i=0;i<a;i++){t[i]&&t[i].offset(n.length)
for(var l=0,u=r[i].length;l<u;l++)n.push(r[i][l])}return n}},e}()
t.CFFStandardStrings=o,t.CFFParser=s,t.CFF=c,t.CFFHeader=l,t.CFFStrings=u,t.CFFIndex=h,t.CFFCharset=p,t.CFFTopDict=d,t.CFFPrivateDict=g,t.CFFCompiler=w},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ChunkedStreamManager=t.ChunkedStream=void 0
var a=r(0),i=function(){function e(e,t,r){this.bytes=new Uint8Array(e),this.start=0,this.pos=0,this.end=e,this.chunkSize=t,this.loadedChunks=[],this.numChunksLoaded=0,this.numChunks=Math.ceil(e/t),this.manager=r,this.progressiveDataLength=0,this.lastSuccessfulEnsureByteChunk=-1}return e.prototype={getMissingChunks:function(){for(var e=[],t=0,r=this.numChunks;t<r;++t)this.loadedChunks[t]||e.push(t)
return e},getBaseStreams:function(){return[this]},allChunksLoaded:function(){return this.numChunksLoaded===this.numChunks},onReceiveData:function(e,t){var r=e+t.byteLength
if(e%this.chunkSize!=0)throw new Error("Bad begin offset: "+e)
var a=this.bytes.length
if(r%this.chunkSize!=0&&r!==a)throw new Error("Bad end offset: "+r)
this.bytes.set(new Uint8Array(t),e)
var i,n=this.chunkSize,o=Math.floor(e/n),s=Math.floor((r-1)/n)+1
for(i=o;i<s;++i)this.loadedChunks[i]||(this.loadedChunks[i]=!0,++this.numChunksLoaded)},onReceiveProgressiveData:function(e){var t=this.progressiveDataLength,r=Math.floor(t/this.chunkSize)
this.bytes.set(new Uint8Array(e),t),t+=e.byteLength,this.progressiveDataLength=t
var a,i=t>=this.end?this.numChunks:Math.floor(t/this.chunkSize)
for(a=r;a<i;++a)this.loadedChunks[a]||(this.loadedChunks[a]=!0,++this.numChunksLoaded)},ensureByte:function(e){var t=Math.floor(e/this.chunkSize)
if(t!==this.lastSuccessfulEnsureByteChunk){if(!this.loadedChunks[t])throw new a.MissingDataException(e,e+1)
this.lastSuccessfulEnsureByteChunk=t}},ensureRange:function(e,t){if(!(e>=t||t<=this.progressiveDataLength))for(var r=this.chunkSize,i=Math.floor(e/r),n=Math.floor((t-1)/r)+1,o=i;o<n;++o)if(!this.loadedChunks[o])throw new a.MissingDataException(e,t)},nextEmptyChunk:function(e){for(var t,r=this.numChunks,a=0;a<r;++a)if(t=(e+a)%r,!this.loadedChunks[t])return t
return null},hasChunk:function(e){return!!this.loadedChunks[e]},get length(){return this.end-this.start},get isEmpty(){return 0===this.length},getByte:function(){var e=this.pos
return e>=this.end?-1:(this.ensureByte(e),this.bytes[this.pos++])},getUint16:function(){var e=this.getByte(),t=this.getByte()
return-1===e||-1===t?-1:(e<<8)+t},getInt32:function(){return(this.getByte()<<24)+(this.getByte()<<16)+(this.getByte()<<8)+this.getByte()},getBytes:function(e){var t=this.bytes,r=this.pos,a=this.end
if(!e)return this.ensureRange(r,a),t.subarray(r,a)
var i=r+e
return i>a&&(i=a),this.ensureRange(r,i),this.pos=i,t.subarray(r,i)},peekByte:function(){var e=this.getByte()
return this.pos--,e},peekBytes:function(e){var t=this.getBytes(e)
return this.pos-=t.length,t},getByteRange:function(e,t){return this.ensureRange(e,t),this.bytes.subarray(e,t)},skip:function(e){e||(e=1),this.pos+=e},reset:function(){this.pos=this.start},moveStart:function(){this.start=this.pos},makeSubStream:function(e,t,r){function a(){}this.ensureRange(e,e+t),a.prototype=Object.create(this),a.prototype.getMissingChunks=function(){for(var e=this.chunkSize,t=Math.floor(this.start/e),r=Math.floor((this.end-1)/e)+1,a=[],i=t;i<r;++i)this.loadedChunks[i]||a.push(i)
return a}
var i=new a
return i.pos=i.start=e,i.end=e+t||this.end,i.dict=r,i}},e}(),n=function(){function e(e,t){var r=t.rangeChunkSize,n=t.length
this.stream=new i(n,r,this),this.length=n,this.chunkSize=r,this.pdfNetworkStream=e,this.url=t.url,this.disableAutoFetch=t.disableAutoFetch,this.msgHandler=t.msgHandler,this.currRequestId=0,this.chunksNeededByRequest=Object.create(null),this.requestsByChunk=Object.create(null),this.promisesByRequest=Object.create(null),this.progressiveDataLength=0,this.aborted=!1,this._loadedStreamCapability=(0,a.createPromiseCapability)()}return e.prototype={onLoadedStream:function(){return this._loadedStreamCapability.promise},sendRequest:function(e,t){var r=this,i=this.pdfNetworkStream.getRangeReader(e,t)
i.isStreamingSupported||(i.onProgress=this.onProgress.bind(this))
var n=[],o=0,s=this
new Promise(function(e,t){var r=function r(c){try{if(!c.done){var l=c.value
return n.push(l),o+=(0,a.arrayByteLength)(l),i.isStreamingSupported&&s.onProgress({loaded:o}),void i.read().then(r,t)}var u=(0,a.arraysToBytes)(n)
n=null,e(u)}catch(e){t(e)}}
i.read().then(r,t)}).then(function(t){r.aborted||r.onReceiveData({chunk:t,begin:e})})},requestAllChunks:function(){var e=this.stream.getMissingChunks()
return this._requestChunks(e),this._loadedStreamCapability.promise},_requestChunks:function(e){var t,r,i=this.currRequestId++,n=Object.create(null)
for(this.chunksNeededByRequest[i]=n,t=0,r=e.length;t<r;t++)this.stream.hasChunk(e[t])||(n[e[t]]=!0)
if((0,a.isEmptyObj)(n))return Promise.resolve()
var o=(0,a.createPromiseCapability)()
this.promisesByRequest[i]=o
var s=[]
for(var c in n)c|=0,c in this.requestsByChunk||(this.requestsByChunk[c]=[],s.push(c)),this.requestsByChunk[c].push(i)
if(!s.length)return o.promise
var l=this.groupChunks(s)
for(t=0;t<l.length;++t){var u=l[t],h=u.beginChunk*this.chunkSize,f=Math.min(u.endChunk*this.chunkSize,this.length)
this.sendRequest(h,f)}return o.promise},getStream:function(){return this.stream},requestRange:function(e,t){t=Math.min(t,this.length)
for(var r=this.getBeginChunk(e),a=this.getEndChunk(t),i=[],n=r;n<a;++n)i.push(n)
return this._requestChunks(i)},requestRanges:function(e){e=e||[]
for(var t=[],r=0;r<e.length;r++)for(var a=this.getBeginChunk(e[r].begin),i=this.getEndChunk(e[r].end),n=a;n<i;++n)t.indexOf(n)<0&&t.push(n)
return t.sort(function(e,t){return e-t}),this._requestChunks(t)},groupChunks:function(e){for(var t=[],r=-1,a=-1,i=0;i<e.length;++i){var n=e[i]
r<0&&(r=n),a>=0&&a+1!==n&&(t.push({beginChunk:r,endChunk:a+1}),r=n),i+1===e.length&&t.push({beginChunk:r,endChunk:n+1}),a=n}return t},onProgress:function(e){var t=this.stream.numChunksLoaded*this.chunkSize+e.loaded
this.msgHandler.send("DocProgress",{loaded:t,total:this.length})},onReceiveData:function(e){var t=e.chunk,r=void 0===e.begin,i=r?this.progressiveDataLength:e.begin,n=i+t.byteLength,o=Math.floor(i/this.chunkSize),s=n<this.length?Math.floor(n/this.chunkSize):Math.ceil(n/this.chunkSize)
r?(this.stream.onReceiveProgressiveData(t),this.progressiveDataLength=n):this.stream.onReceiveData(i,t),this.stream.allChunksLoaded()&&this._loadedStreamCapability.resolve(this.stream)
var c,l,u=[]
for(t=o;t<s;++t){var h=this.requestsByChunk[t]||[]
for(delete this.requestsByChunk[t],c=0;c<h.length;++c){l=h[c]
var f=this.chunksNeededByRequest[l]
t in f&&delete f[t],(0,a.isEmptyObj)(f)&&u.push(l)}}if(!this.disableAutoFetch&&(0,a.isEmptyObj)(this.requestsByChunk)){var d
if(1===this.stream.numChunksLoaded){var g=this.stream.numChunks-1
this.stream.hasChunk(g)||(d=g)}else d=this.stream.nextEmptyChunk(s);(0,a.isInt)(d)&&this._requestChunks([d])}for(c=0;c<u.length;++c){l=u[c]
var m=this.promisesByRequest[l]
delete this.promisesByRequest[l],m.resolve()}this.msgHandler.send("DocProgress",{loaded:this.stream.numChunksLoaded*this.chunkSize,total:this.length})},onError:function(e){this._loadedStreamCapability.reject(e)},getBeginChunk:function(e){return Math.floor(e/this.chunkSize)},getEndChunk:function(e){return Math.floor((e-1)/this.chunkSize)+1},abort:function(){this.aborted=!0,this.pdfNetworkStream&&this.pdfNetworkStream.cancelAllRequests("abort")
for(var e in this.promisesByRequest){this.promisesByRequest[e].reject(new Error("Request was aborted"))}}},e}()
t.ChunkedStream=i,t.ChunkedStreamManager=n},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.calculateSHA512=t.calculateSHA384=t.calculateSHA256=t.calculateMD5=t.PDF20=t.PDF17=t.CipherTransformFactory=t.ARCFourCipher=t.AES256Cipher=t.AES128Cipher=void 0
var a=r(0),i=r(1),n=r(3),o=function(){function e(e){this.a=0,this.b=0
var t,r,a=new Uint8Array(256),i=0,n=e.length
for(t=0;t<256;++t)a[t]=t
for(t=0;t<256;++t)r=a[t],i=i+r+e[t%n]&255,a[t]=a[i],a[i]=r
this.s=a}return e.prototype={encryptBlock:function(e){var t,r,a,i=e.length,n=this.a,o=this.b,s=this.s,c=new Uint8Array(i)
for(t=0;t<i;++t)n=n+1&255,r=s[n],o=o+r&255,a=s[o],s[n]=a,s[o]=r,c[t]=e[t]^s[r+a&255]
return this.a=n,this.b=o,c}},e.prototype.decryptBlock=e.prototype.encryptBlock,e}(),s=function(){function e(e,a,i){var n,o,s,c=1732584193,l=-271733879,u=-1732584194,h=271733878,f=i+72&-64,d=new Uint8Array(f)
for(n=0;n<i;++n)d[n]=e[a++]
for(d[n++]=128,s=f-8;n<s;)d[n++]=0
d[n++]=i<<3&255,d[n++]=i>>5&255,d[n++]=i>>13&255,d[n++]=i>>21&255,d[n++]=i>>>29&255,d[n++]=0,d[n++]=0,d[n++]=0
var g=new Int32Array(16)
for(n=0;n<f;){for(o=0;o<16;++o,n+=4)g[o]=d[n]|d[n+1]<<8|d[n+2]<<16|d[n+3]<<24
var m,p,b=c,v=l,y=u,w=h
for(o=0;o<64;++o){o<16?(m=v&y|~v&w,p=o):o<32?(m=w&v|~w&y,p=5*o+1&15):o<48?(m=v^y^w,p=3*o+5&15):(m=y^(v|~w),p=7*o&15)
var k=w,S=b+m+r[o]+g[p]|0,C=t[o]
w=y,y=v,v=v+(S<<C|S>>>32-C)|0,b=k}c=c+b|0,l=l+v|0,u=u+y|0,h=h+w|0}return new Uint8Array([255&c,c>>8&255,c>>16&255,c>>>24&255,255&l,l>>8&255,l>>16&255,l>>>24&255,255&u,u>>8&255,u>>16&255,u>>>24&255,255&h,h>>8&255,h>>16&255,h>>>24&255])}var t=new Uint8Array([7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21]),r=new Int32Array([-680876936,-389564586,606105819,-1044525330,-176418897,1200080426,-1473231341,-45705983,1770035416,-1958414417,-42063,-1990404162,1804603682,-40341101,-1502002290,1236535329,-165796510,-1069501632,643717713,-373897302,-701558691,38016083,-660478335,-405537848,568446438,-1019803690,-187363961,1163531501,-1444681467,-51403784,1735328473,-1926607734,-378558,-2022574463,1839030562,-35309556,-1530992060,1272893353,-155497632,-1094730640,681279174,-358537222,-722521979,76029189,-640364487,-421815835,530742520,-995338651,-198630844,1126891415,-1416354905,-57434055,1700485571,-1894986606,-1051523,-2054922799,1873313359,-30611744,-1560198380,1309151649,-145523070,-1120210379,718787259,-343485551])
return e}(),c=function(){function e(e,t){this.high=0|e,this.low=0|t}return e.prototype={and:function(e){this.high&=e.high,this.low&=e.low},xor:function(e){this.high^=e.high,this.low^=e.low},or:function(e){this.high|=e.high,this.low|=e.low},shiftRight:function(e){e>=32?(this.low=this.high>>>e-32|0,this.high=0):(this.low=this.low>>>e|this.high<<32-e,this.high=this.high>>>e|0)},shiftLeft:function(e){e>=32?(this.high=this.low<<e-32,this.low=0):(this.high=this.high<<e|this.low>>>32-e,this.low=this.low<<e)},rotateRight:function(e){var t,r
32&e?(r=this.low,t=this.high):(t=this.low,r=this.high),e&=31,this.low=t>>>e|r<<32-e,this.high=r>>>e|t<<32-e},not:function(){this.high=~this.high,this.low=~this.low},add:function(e){var t=(this.low>>>0)+(e.low>>>0),r=(this.high>>>0)+(e.high>>>0)
t>4294967295&&(r+=1),this.low=0|t,this.high=0|r},copyTo:function(e,t){e[t]=this.high>>>24&255,e[t+1]=this.high>>16&255,e[t+2]=this.high>>8&255,e[t+3]=255&this.high,e[t+4]=this.low>>>24&255,e[t+5]=this.low>>16&255,e[t+6]=this.low>>8&255,e[t+7]=255&this.low},assign:function(e){this.high=e.high,this.low=e.low}},e}(),l=function(){function e(e,t){return e>>>t|e<<32-t}function t(e,t,r){return e&t^~e&r}function r(e,t,r){return e&t^e&r^t&r}function a(t){return e(t,2)^e(t,13)^e(t,22)}function i(t){return e(t,6)^e(t,11)^e(t,25)}function n(t){return e(t,7)^e(t,18)^t>>>3}function o(t){return e(t,17)^e(t,19)^t>>>10}function s(e,s,l){var u,h,f,d=1779033703,g=3144134277,m=1013904242,p=2773480762,b=1359893119,v=2600822924,y=528734635,w=1541459225,k=64*Math.ceil((l+9)/64),S=new Uint8Array(k)
for(u=0;u<l;++u)S[u]=e[s++]
for(S[u++]=128,f=k-8;u<f;)S[u++]=0
S[u++]=0,S[u++]=0,S[u++]=0,S[u++]=l>>>29&255,S[u++]=l>>21&255,S[u++]=l>>13&255,S[u++]=l>>5&255,S[u++]=l<<3&255
var C=new Uint32Array(64)
for(u=0;u<k;){for(h=0;h<16;++h)C[h]=S[u]<<24|S[u+1]<<16|S[u+2]<<8|S[u+3],u+=4
for(h=16;h<64;++h)C[h]=o(C[h-2])+C[h-7]+n(C[h-15])+C[h-16]|0
var x,A,P=d,I=g,_=m,O=p,T=b,E=v,R=y,F=w
for(h=0;h<64;++h)x=F+i(T)+t(T,E,R)+c[h]+C[h],A=a(P)+r(P,I,_),F=R,R=E,E=T,T=O+x|0,O=_,_=I,I=P,P=x+A|0
d=d+P|0,g=g+I|0,m=m+_|0,p=p+O|0,b=b+T|0,v=v+E|0,y=y+R|0,w=w+F|0}return new Uint8Array([d>>24&255,d>>16&255,d>>8&255,255&d,g>>24&255,g>>16&255,g>>8&255,255&g,m>>24&255,m>>16&255,m>>8&255,255&m,p>>24&255,p>>16&255,p>>8&255,255&p,b>>24&255,b>>16&255,b>>8&255,255&b,v>>24&255,v>>16&255,v>>8&255,255&v,y>>24&255,y>>16&255,y>>8&255,255&y,w>>24&255,w>>16&255,w>>8&255,255&w])}var c=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
return s}(),u=function(){function e(e,t,r,a,i){e.assign(t),e.and(r),i.assign(t),i.not(),i.and(a),e.xor(i)}function t(e,t,r,a,i){e.assign(t),e.and(r),i.assign(t),i.and(a),e.xor(i),i.assign(r),i.and(a),e.xor(i)}function r(e,t,r){e.assign(t),e.rotateRight(28),r.assign(t),r.rotateRight(34),e.xor(r),r.assign(t),r.rotateRight(39),e.xor(r)}function a(e,t,r){e.assign(t),e.rotateRight(14),r.assign(t),r.rotateRight(18),e.xor(r),r.assign(t),r.rotateRight(41),e.xor(r)}function i(e,t,r){e.assign(t),e.rotateRight(1),r.assign(t),r.rotateRight(8),e.xor(r),r.assign(t),r.shiftRight(7),e.xor(r)}function n(e,t,r){e.assign(t),e.rotateRight(19),r.assign(t),r.rotateRight(61),e.xor(r),r.assign(t),r.shiftRight(6),e.xor(r)}function o(o,l,u,h){h=!!h
var f,d,g,m,p,b,v,y
h?(f=new c(3418070365,3238371032),d=new c(1654270250,914150663),g=new c(2438529370,812702999),m=new c(355462360,4144912697),p=new c(1731405415,4290775857),b=new c(2394180231,1750603025),v=new c(3675008525,1694076839),y=new c(1203062813,3204075428)):(f=new c(1779033703,4089235720),d=new c(3144134277,2227873595),g=new c(1013904242,4271175723),m=new c(2773480762,1595750129),p=new c(1359893119,2917565137),b=new c(2600822924,725511199),v=new c(528734635,4215389547),y=new c(1541459225,327033209))
var w,k,S,C=128*Math.ceil((u+17)/128),x=new Uint8Array(C)
for(w=0;w<u;++w)x[w]=o[l++]
for(x[w++]=128,S=C-16;w<S;)x[w++]=0
x[w++]=0,x[w++]=0,x[w++]=0,x[w++]=0,x[w++]=0,x[w++]=0,x[w++]=0,x[w++]=0,x[w++]=0,x[w++]=0,x[w++]=0,x[w++]=u>>>29&255,x[w++]=u>>21&255,x[w++]=u>>13&255,x[w++]=u>>5&255,x[w++]=u<<3&255
var A=new Array(80)
for(w=0;w<80;w++)A[w]=new c(0,0)
var P,I=new c(0,0),_=new c(0,0),O=new c(0,0),T=new c(0,0),E=new c(0,0),R=new c(0,0),F=new c(0,0),B=new c(0,0),M=new c(0,0),D=new c(0,0),L=new c(0,0),N=new c(0,0)
for(w=0;w<C;){for(k=0;k<16;++k)A[k].high=x[w]<<24|x[w+1]<<16|x[w+2]<<8|x[w+3],A[k].low=x[w+4]<<24|x[w+5]<<16|x[w+6]<<8|x[w+7],w+=8
for(k=16;k<80;++k)P=A[k],n(P,A[k-2],N),P.add(A[k-7]),i(L,A[k-15],N),P.add(L),P.add(A[k-16])
for(I.assign(f),_.assign(d),O.assign(g),T.assign(m),E.assign(p),R.assign(b),F.assign(v),B.assign(y),k=0;k<80;++k)M.assign(B),a(L,E,N),M.add(L),e(L,E,R,F,N),M.add(L),M.add(s[k]),M.add(A[k]),r(D,I,N),t(L,I,_,O,N),D.add(L),P=B,B=F,F=R,R=E,T.add(M),E=T,T=O,O=_,_=I,P.assign(M),P.add(D),I=P
f.add(I),d.add(_),g.add(O),m.add(T),p.add(E),b.add(R),v.add(F),y.add(B)}var U
return h?(U=new Uint8Array(48),f.copyTo(U,0),d.copyTo(U,8),g.copyTo(U,16),m.copyTo(U,24),p.copyTo(U,32),b.copyTo(U,40)):(U=new Uint8Array(64),f.copyTo(U,0),d.copyTo(U,8),g.copyTo(U,16),m.copyTo(U,24),p.copyTo(U,32),b.copyTo(U,40),v.copyTo(U,48),y.copyTo(U,56)),U}var s=[new c(1116352408,3609767458),new c(1899447441,602891725),new c(3049323471,3964484399),new c(3921009573,2173295548),new c(961987163,4081628472),new c(1508970993,3053834265),new c(2453635748,2937671579),new c(2870763221,3664609560),new c(3624381080,2734883394),new c(310598401,1164996542),new c(607225278,1323610764),new c(1426881987,3590304994),new c(1925078388,4068182383),new c(2162078206,991336113),new c(2614888103,633803317),new c(3248222580,3479774868),new c(3835390401,2666613458),new c(4022224774,944711139),new c(264347078,2341262773),new c(604807628,2007800933),new c(770255983,1495990901),new c(1249150122,1856431235),new c(1555081692,3175218132),new c(1996064986,2198950837),new c(2554220882,3999719339),new c(2821834349,766784016),new c(2952996808,2566594879),new c(3210313671,3203337956),new c(3336571891,1034457026),new c(3584528711,2466948901),new c(113926993,3758326383),new c(338241895,168717936),new c(666307205,1188179964),new c(773529912,1546045734),new c(1294757372,1522805485),new c(1396182291,2643833823),new c(1695183700,2343527390),new c(1986661051,1014477480),new c(2177026350,1206759142),new c(2456956037,344077627),new c(2730485921,1290863460),new c(2820302411,3158454273),new c(3259730800,3505952657),new c(3345764771,106217008),new c(3516065817,3606008344),new c(3600352804,1432725776),new c(4094571909,1467031594),new c(275423344,851169720),new c(430227734,3100823752),new c(506948616,1363258195),new c(659060556,3750685593),new c(883997877,3785050280),new c(958139571,3318307427),new c(1322822218,3812723403),new c(1537002063,2003034995),new c(1747873779,3602036899),new c(1955562222,1575990012),new c(2024104815,1125592928),new c(2227730452,2716904306),new c(2361852424,442776044),new c(2428436474,593698344),new c(2756734187,3733110249),new c(3204031479,2999351573),new c(3329325298,3815920427),new c(3391569614,3928383900),new c(3515267271,566280711),new c(3940187606,3454069534),new c(4118630271,4000239992),new c(116418474,1914138554),new c(174292421,2731055270),new c(289380356,3203993006),new c(460393269,320620315),new c(685471733,587496836),new c(852142971,1086792851),new c(1017036298,365543100),new c(1126000580,2618297676),new c(1288033470,3409855158),new c(1501505948,4234509866),new c(1607167915,987167468),new c(1816402316,1246189591)]
return o}(),h=function(){function e(e,t,r){return u(e,t,r,!0)}return e}(),f=function(){function e(){}return e.prototype={decryptBlock:function(e){return e}},e}(),d=function(){function e(e){var t=new Uint8Array(176)
t.set(e)
for(var r=16,a=1;r<176;++a){var i=t[r-3],s=t[r-2],c=t[r-1],l=t[r-4]
i=o[i],s=o[s],c=o[c],l=o[l],i^=n[a]
for(var u=0;u<4;++u)t[r]=i^=t[r-16],r++,t[r]=s^=t[r-16],r++,t[r]=c^=t[r-16],r++,t[r]=l^=t[r-16],r++}return t}function t(e,t){var r=new Uint8Array(16)
r.set(e)
var a,i,n,o,c,l
for(i=0,n=160;i<16;++i,++n)r[i]^=t[n]
for(a=9;a>=1;--a){for(o=r[13],r[13]=r[9],r[9]=r[5],r[5]=r[1],r[1]=o,o=r[14],c=r[10],r[14]=r[6],r[10]=r[2],r[6]=o,r[2]=c,o=r[15],c=r[11],l=r[7],r[15]=r[3],r[11]=o,r[7]=c,r[3]=l,i=0;i<16;++i)r[i]=s[r[i]]
for(i=0,n=16*a;i<16;++i,++n)r[i]^=t[n]
for(i=0;i<16;i+=4){var h=u[r[i]],f=u[r[i+1]],d=u[r[i+2]],g=u[r[i+3]]
o=h^f>>>8^f<<24^d>>>16^d<<16^g>>>24^g<<8,r[i]=o>>>24&255,r[i+1]=o>>16&255,r[i+2]=o>>8&255,r[i+3]=255&o}}for(o=r[13],r[13]=r[9],r[9]=r[5],r[5]=r[1],r[1]=o,o=r[14],c=r[10],r[14]=r[6],r[10]=r[2],r[6]=o,r[2]=c,o=r[15],c=r[11],l=r[7],r[15]=r[3],r[11]=o,r[7]=c,r[3]=l,i=0;i<16;++i)r[i]=s[r[i]],r[i]^=t[i]
return r}function r(e,t){var r,a,i,n,s=new Uint8Array(16)
for(s.set(e),u=0;u<16;++u)s[u]^=t[u]
for(l=1;l<10;l++){for(u=0;u<16;++u)s[u]=o[s[u]]
i=s[1],s[1]=s[5],s[5]=s[9],s[9]=s[13],s[13]=i,i=s[2],a=s[6],s[2]=s[10],s[6]=s[14],s[10]=i,s[14]=a,i=s[3],a=s[7],r=s[11],s[3]=s[15],s[7]=i,s[11]=a,s[15]=r
for(var u=0;u<16;u+=4){var h=s[u+0],f=s[u+1],d=s[u+2],g=s[u+3]
r=h^f^d^g,s[u+0]^=r^c[h^f],s[u+1]^=r^c[f^d],s[u+2]^=r^c[d^g],s[u+3]^=r^c[g^h]}for(u=0,n=16*l;u<16;++u,++n)s[u]^=t[n]}for(u=0;u<16;++u)s[u]=o[s[u]]
for(i=s[1],s[1]=s[5],s[5]=s[9],s[9]=s[13],s[13]=i,i=s[2],a=s[6],s[2]=s[10],s[6]=s[14],s[10]=i,s[14]=a,i=s[3],a=s[7],r=s[11],s[3]=s[15],s[7]=i,s[11]=a,s[15]=r,u=0,n=160;u<16;++u,++n)s[u]^=t[n]
return s}function a(t){this.key=e(t),this.buffer=new Uint8Array(16),this.bufferPosition=0}function i(e,r){var a,i,n,o=e.length,s=this.buffer,c=this.bufferPosition,l=[],u=this.iv
for(a=0;a<o;++a)if(s[c]=e[a],!(++c<16)){var h=t(s,this.key)
for(i=0;i<16;++i)h[i]^=u[i]
u=s,l.push(h),s=new Uint8Array(16),c=0}if(this.buffer=s,this.bufferLength=c,this.iv=u,0===l.length)return new Uint8Array([])
var f=16*l.length
if(r){var d=l[l.length-1],g=d[15]
if(g<=16){for(a=15,n=16-g;a>=n;--a)if(d[a]!==g){g=0
break}f-=g,l[l.length-1]=d.subarray(0,16-g)}}var m=new Uint8Array(f)
for(a=0,i=0,n=l.length;a<n;++a,i+=16)m.set(l[a],i)
return m}for(var n=new Uint8Array([141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141]),o=new Uint8Array([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22]),s=new Uint8Array([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125]),c=new Uint8Array(256),l=0;l<256;l++)c[l]=l<128?l<<1:l<<1^27
var u=new Uint32Array([0,235474187,470948374,303765277,941896748,908933415,607530554,708780849,1883793496,2118214995,1817866830,1649639237,1215061108,1181045119,1417561698,1517767529,3767586992,4003061179,4236429990,4069246893,3635733660,3602770327,3299278474,3400528769,2430122216,2664543715,2362090238,2193862645,2835123396,2801107407,3035535058,3135740889,3678124923,3576870512,3341394285,3374361702,3810496343,3977675356,4279080257,4043610186,2876494627,2776292904,3076639029,3110650942,2472011535,2640243204,2403728665,2169303058,1001089995,899835584,666464733,699432150,59727847,226906860,530400753,294930682,1273168787,1172967064,1475418501,1509430414,1942435775,2110667444,1876241833,1641816226,2910219766,2743034109,2976151520,3211623147,2505202138,2606453969,2302690252,2269728455,3711829422,3543599269,3240894392,3475313331,3843699074,3943906441,4178062228,4144047775,1306967366,1139781709,1374988112,1610459739,1975683434,2076935265,1775276924,1742315127,1034867998,866637845,566021896,800440835,92987698,193195065,429456164,395441711,1984812685,2017778566,1784663195,1683407248,1315562145,1080094634,1383856311,1551037884,101039829,135050206,437757123,337553864,1042385657,807962610,573804783,742039012,2531067453,2564033334,2328828971,2227573024,2935566865,2700099354,3001755655,3168937228,3868552805,3902563182,4203181171,4102977912,3736164937,3501741890,3265478751,3433712980,1106041591,1340463100,1576976609,1408749034,2043211483,2009195472,1708848333,1809054150,832877231,1068351396,766945465,599762354,159417987,126454664,361929877,463180190,2709260871,2943682380,3178106961,3009879386,2572697195,2538681184,2236228733,2336434550,3509871135,3745345300,3441850377,3274667266,3910161971,3877198648,4110568485,4211818798,2597806476,2497604743,2261089178,2295101073,2733856160,2902087851,3202437046,2968011453,3936291284,3835036895,4136440770,4169408201,3535486456,3702665459,3467192302,3231722213,2051518780,1951317047,1716890410,1750902305,1113818384,1282050075,1584504582,1350078989,168810852,67556463,371049330,404016761,841739592,1008918595,775550814,540080725,3969562369,3801332234,4035489047,4269907996,3569255213,3669462566,3366754619,3332740144,2631065433,2463879762,2160117071,2395588676,2767645557,2868897406,3102011747,3069049960,202008497,33778362,270040487,504459436,875451293,975658646,675039627,641025152,2084704233,1917518562,1615861247,1851332852,1147550661,1248802510,1484005843,1451044056,933301370,967311729,733156972,632953703,260388950,25965917,328671808,496906059,1206477858,1239443753,1543208500,1441952575,2144161806,1908694277,1675577880,1842759443,3610369226,3644379585,3408119516,3307916247,4011190502,3776767469,4077384432,4245618683,2809771154,2842737049,3144396420,3043140495,2673705150,2438237621,2203032232,2370213795])
return a.prototype={decryptBlock:function(e,t){var r,a=e.length,n=this.buffer,o=this.bufferPosition
for(r=0;o<16&&r<a;++r,++o)n[o]=e[r]
return o<16?(this.bufferLength=o,new Uint8Array([])):(this.iv=n,this.buffer=new Uint8Array(16),this.bufferLength=0,this.decryptBlock=i,this.decryptBlock(e.subarray(16),t))},encrypt:function(e,t){var a,i,n,o=e.length,s=this.buffer,c=this.bufferPosition,l=[]
for(t||(t=new Uint8Array(16)),a=0;a<o;++a)if(s[c]=e[a],!(++c<16)){for(i=0;i<16;++i)s[i]^=t[i]
var u=r(s,this.key)
t=u,l.push(u),s=new Uint8Array(16),c=0}if(this.buffer=s,this.bufferLength=c,this.iv=t,0===l.length)return new Uint8Array([])
var h=16*l.length,f=new Uint8Array(h)
for(a=0,i=0,n=l.length;a<n;++a,i+=16)f.set(l[a],i)
return f}},a}(),g=function(){function e(e){var t=new Uint8Array(240),r=1
t.set(e)
for(var a=32,i=1;a<240;++i){if(a%32==16)o=n[o],s=n[s],c=n[c],l=n[l]
else if(a%32==0){var o=t[a-3],s=t[a-2],c=t[a-1],l=t[a-4]
o=n[o],s=n[s],c=n[c],l=n[l],o^=r,(r<<=1)>=256&&(r=255&(27^r))}for(var u=0;u<4;++u)t[a]=o^=t[a-32],a++,t[a]=s^=t[a-32],a++,t[a]=c^=t[a-32],a++,t[a]=l^=t[a-32],a++}return t}function t(e,t){var r=new Uint8Array(16)
r.set(e)
var a,i,n,s,c,u
for(i=0,n=224;i<16;++i,++n)r[i]^=t[n]
for(a=13;a>=1;--a){for(s=r[13],r[13]=r[9],r[9]=r[5],r[5]=r[1],r[1]=s,s=r[14],c=r[10],r[14]=r[6],r[10]=r[2],r[6]=s,r[2]=c,s=r[15],c=r[11],u=r[7],r[15]=r[3],r[11]=s,r[7]=c,r[3]=u,i=0;i<16;++i)r[i]=o[r[i]]
for(i=0,n=16*a;i<16;++i,++n)r[i]^=t[n]
for(i=0;i<16;i+=4){var h=l[r[i]],f=l[r[i+1]],d=l[r[i+2]],g=l[r[i+3]]
s=h^f>>>8^f<<24^d>>>16^d<<16^g>>>24^g<<8,r[i]=s>>>24&255,r[i+1]=s>>16&255,r[i+2]=s>>8&255,r[i+3]=255&s}}for(s=r[13],r[13]=r[9],r[9]=r[5],r[5]=r[1],r[1]=s,s=r[14],c=r[10],r[14]=r[6],r[10]=r[2],r[6]=s,r[2]=c,s=r[15],c=r[11],u=r[7],r[15]=r[3],r[11]=s,r[7]=c,r[3]=u,i=0;i<16;++i)r[i]=o[r[i]],r[i]^=t[i]
return r}function r(e,t){var r,a,i,o,l=new Uint8Array(16)
for(l.set(e),u=0;u<16;++u)l[u]^=t[u]
for(c=1;c<14;c++){for(u=0;u<16;++u)l[u]=n[l[u]]
i=l[1],l[1]=l[5],l[5]=l[9],l[9]=l[13],l[13]=i,i=l[2],a=l[6],l[2]=l[10],l[6]=l[14],l[10]=i,l[14]=a,i=l[3],a=l[7],r=l[11],l[3]=l[15],l[7]=i,l[11]=a,l[15]=r
for(var u=0;u<16;u+=4){var h=l[u+0],f=l[u+1],d=l[u+2],g=l[u+3]
r=h^f^d^g,l[u+0]^=r^s[h^f],l[u+1]^=r^s[f^d],l[u+2]^=r^s[d^g],l[u+3]^=r^s[g^h]}for(u=0,o=16*c;u<16;++u,++o)l[u]^=t[o]}for(u=0;u<16;++u)l[u]=n[l[u]]
for(i=l[1],l[1]=l[5],l[5]=l[9],l[9]=l[13],l[13]=i,i=l[2],a=l[6],l[2]=l[10],l[6]=l[14],l[10]=i,l[14]=a,i=l[3],a=l[7],r=l[11],l[3]=l[15],l[7]=i,l[11]=a,l[15]=r,u=0,o=224;u<16;++u,++o)l[u]^=t[o]
return l}function a(t){this.key=e(t),this.buffer=new Uint8Array(16),this.bufferPosition=0}function i(e,r){var a,i,n,o=e.length,s=this.buffer,c=this.bufferPosition,l=[],u=this.iv
for(a=0;a<o;++a)if(s[c]=e[a],!(++c<16)){var h=t(s,this.key)
for(i=0;i<16;++i)h[i]^=u[i]
u=s,l.push(h),s=new Uint8Array(16),c=0}if(this.buffer=s,this.bufferLength=c,this.iv=u,0===l.length)return new Uint8Array([])
var f=16*l.length
if(r){var d=l[l.length-1],g=d[15]
if(g<=16){for(a=15,n=16-g;a>=n;--a)if(d[a]!==g){g=0
break}f-=g,l[l.length-1]=d.subarray(0,16-g)}}var m=new Uint8Array(f)
for(a=0,i=0,n=l.length;a<n;++a,i+=16)m.set(l[a],i)
return m}for(var n=new Uint8Array([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22]),o=new Uint8Array([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125]),s=new Uint8Array(256),c=0;c<256;c++)s[c]=c<128?c<<1:c<<1^27
var l=new Uint32Array([0,235474187,470948374,303765277,941896748,908933415,607530554,708780849,1883793496,2118214995,1817866830,1649639237,1215061108,1181045119,1417561698,1517767529,3767586992,4003061179,4236429990,4069246893,3635733660,3602770327,3299278474,3400528769,2430122216,2664543715,2362090238,2193862645,2835123396,2801107407,3035535058,3135740889,3678124923,3576870512,3341394285,3374361702,3810496343,3977675356,4279080257,4043610186,2876494627,2776292904,3076639029,3110650942,2472011535,2640243204,2403728665,2169303058,1001089995,899835584,666464733,699432150,59727847,226906860,530400753,294930682,1273168787,1172967064,1475418501,1509430414,1942435775,2110667444,1876241833,1641816226,2910219766,2743034109,2976151520,3211623147,2505202138,2606453969,2302690252,2269728455,3711829422,3543599269,3240894392,3475313331,3843699074,3943906441,4178062228,4144047775,1306967366,1139781709,1374988112,1610459739,1975683434,2076935265,1775276924,1742315127,1034867998,866637845,566021896,800440835,92987698,193195065,429456164,395441711,1984812685,2017778566,1784663195,1683407248,1315562145,1080094634,1383856311,1551037884,101039829,135050206,437757123,337553864,1042385657,807962610,573804783,742039012,2531067453,2564033334,2328828971,2227573024,2935566865,2700099354,3001755655,3168937228,3868552805,3902563182,4203181171,4102977912,3736164937,3501741890,3265478751,3433712980,1106041591,1340463100,1576976609,1408749034,2043211483,2009195472,1708848333,1809054150,832877231,1068351396,766945465,599762354,159417987,126454664,361929877,463180190,2709260871,2943682380,3178106961,3009879386,2572697195,2538681184,2236228733,2336434550,3509871135,3745345300,3441850377,3274667266,3910161971,3877198648,4110568485,4211818798,2597806476,2497604743,2261089178,2295101073,2733856160,2902087851,3202437046,2968011453,3936291284,3835036895,4136440770,4169408201,3535486456,3702665459,3467192302,3231722213,2051518780,1951317047,1716890410,1750902305,1113818384,1282050075,1584504582,1350078989,168810852,67556463,371049330,404016761,841739592,1008918595,775550814,540080725,3969562369,3801332234,4035489047,4269907996,3569255213,3669462566,3366754619,3332740144,2631065433,2463879762,2160117071,2395588676,2767645557,2868897406,3102011747,3069049960,202008497,33778362,270040487,504459436,875451293,975658646,675039627,641025152,2084704233,1917518562,1615861247,1851332852,1147550661,1248802510,1484005843,1451044056,933301370,967311729,733156972,632953703,260388950,25965917,328671808,496906059,1206477858,1239443753,1543208500,1441952575,2144161806,1908694277,1675577880,1842759443,3610369226,3644379585,3408119516,3307916247,4011190502,3776767469,4077384432,4245618683,2809771154,2842737049,3144396420,3043140495,2673705150,2438237621,2203032232,2370213795])
return a.prototype={decryptBlock:function(e,t,r){var a,n=e.length,o=this.buffer,s=this.bufferPosition
if(r)this.iv=r
else{for(a=0;s<16&&a<n;++a,++s)o[s]=e[a]
if(s<16)return this.bufferLength=s,new Uint8Array([])
this.iv=o,e=e.subarray(16)}return this.buffer=new Uint8Array(16),this.bufferLength=0,this.decryptBlock=i,this.decryptBlock(e,t)},encrypt:function(e,t){var a,i,n,o=e.length,s=this.buffer,c=this.bufferPosition,l=[]
for(t||(t=new Uint8Array(16)),a=0;a<o;++a)if(s[c]=e[a],!(++c<16)){for(i=0;i<16;++i)s[i]^=t[i]
var u=r(s,this.key)
this.iv=u,l.push(u),s=new Uint8Array(16),c=0}if(this.buffer=s,this.bufferLength=c,this.iv=t,0===l.length)return new Uint8Array([])
var h=16*l.length,f=new Uint8Array(h)
for(a=0,i=0,n=l.length;a<n;++a,i+=16)f.set(l[a],i)
return f}},a}(),m=function(){function e(e,t){if(e.length!==t.length)return!1
for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1
return!0}function t(){}return t.prototype={checkOwnerPassword:function(t,r,a,i){var n=new Uint8Array(t.length+56)
return n.set(t,0),n.set(r,t.length),n.set(a,t.length+r.length),e(l(n,0,n.length),i)},checkUserPassword:function(t,r,a){var i=new Uint8Array(t.length+8)
return i.set(t,0),i.set(r,t.length),e(l(i,0,i.length),a)},getOwnerKey:function(e,t,r,a){var i=new Uint8Array(e.length+56)
i.set(e,0),i.set(t,e.length),i.set(r,e.length+t.length)
var n=l(i,0,i.length)
return new g(n).decryptBlock(a,!1,new Uint8Array(16))},getUserKey:function(e,t,r){var a=new Uint8Array(e.length+8)
a.set(e,0),a.set(t,e.length)
var i=l(a,0,a.length)
return new g(i).decryptBlock(r,!1,new Uint8Array(16))}},t}(),p=function(){function e(e,t){var r=new Uint8Array(e.length+t.length)
return r.set(e,0),r.set(t,e.length),r}function t(t,r,a){for(var i=l(r,0,r.length).subarray(0,32),n=[0],o=0;o<64||n[n.length-1]>o-32;){var s=t.length+i.length+a.length,c=new Uint8Array(64*s),f=e(t,i)
f=e(f,a)
for(var g=0,m=0;g<64;g++,m+=s)c.set(f,m)
n=new d(i.subarray(0,16)).encrypt(c,i.subarray(16,32))
for(var p=0,b=0;b<16;b++)p*=1,p%=3,p+=(n[b]>>>0)%3,p%=3
0===p?i=l(n,0,n.length):1===p?i=h(n,0,n.length):2===p&&(i=u(n,0,n.length)),o++}return i.subarray(0,32)}function r(){}function a(e,t){if(e.length!==t.length)return!1
for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1
return!0}return r.prototype={hash:function(e,r,a){return t(e,r,a)},checkOwnerPassword:function(e,r,i,n){var o=new Uint8Array(e.length+56)
return o.set(e,0),o.set(r,e.length),o.set(i,e.length+r.length),a(t(e,o,i),n)},checkUserPassword:function(e,r,i){var n=new Uint8Array(e.length+8)
return n.set(e,0),n.set(r,e.length),a(t(e,n,[]),i)},getOwnerKey:function(e,r,a,i){var n=new Uint8Array(e.length+56)
n.set(e,0),n.set(r,e.length),n.set(a,e.length+r.length)
var o=t(e,n,a)
return new g(o).decryptBlock(i,!1,new Uint8Array(16))},getUserKey:function(e,r,a){var i=new Uint8Array(e.length+8)
i.set(e,0),i.set(r,e.length)
var n=t(e,i,[])
return new g(n).decryptBlock(a,!1,new Uint8Array(16))}},r}(),b=function(){function e(e,t){this.StringCipherConstructor=e,this.StreamCipherConstructor=t}return e.prototype={createStream:function(e,t){var r=new this.StreamCipherConstructor
return new n.DecryptStream(e,t,function(e,t){return r.decryptBlock(e,t)})},decryptString:function(e){var t=new this.StringCipherConstructor,r=(0,a.stringToBytes)(e)
return r=t.decryptBlock(r,!0),(0,a.bytesToString)(r)}},e}(),v=function(){function e(e,t,r,a,i,n,o,s,c,l,u,h){if(t){var f=Math.min(127,t.length)
t=t.subarray(0,f)}else t=[]
var d
return d=6===e?new p:new m,d.checkUserPassword(t,s,o)?d.getUserKey(t,c,u):t.length&&d.checkOwnerPassword(t,a,n,r)?d.getOwnerKey(t,i,n,l):null}function t(e,t,r,a,i,n,c,l){var h,f,d=40+r.length+e.length,g=new Uint8Array(d),m=0
if(t)for(f=Math.min(32,t.length);m<f;++m)g[m]=t[m]
for(h=0;m<32;)g[m++]=u[h++]
for(h=0,f=r.length;h<f;++h)g[m++]=r[h]
for(g[m++]=255&i,g[m++]=i>>8&255,g[m++]=i>>16&255,g[m++]=i>>>24&255,h=0,f=e.length;h<f;++h)g[m++]=e[h]
n>=4&&!l&&(g[m++]=255,g[m++]=255,g[m++]=255,g[m++]=255)
var p=s(g,0,m),b=c>>3
if(n>=3)for(h=0;h<50;++h)p=s(p,0,b)
var v,y,w=p.subarray(0,b)
if(n>=3){for(m=0;m<32;++m)g[m]=u[m]
for(h=0,f=e.length;h<f;++h)g[m++]=e[h]
v=new o(w),y=v.encryptBlock(s(g,0,m)),f=w.length
var k,S=new Uint8Array(f)
for(h=1;h<=19;++h){for(k=0;k<f;++k)S[k]=w[k]^h
v=new o(S),y=v.encryptBlock(y)}for(h=0,f=y.length;h<f;++h)if(a[h]!==y[h])return null}else for(v=new o(w),y=v.encryptBlock(u),h=0,f=y.length;h<f;++h)if(a[h]!==y[h])return null
return w}function r(e,t,r,a){var i,n,c=new Uint8Array(32),l=0
for(n=Math.min(32,e.length);l<n;++l)c[l]=e[l]
for(i=0;l<32;)c[l++]=u[i++]
var h=s(c,0,l),f=a>>3
if(r>=3)for(i=0;i<50;++i)h=s(h,0,h.length)
var d,g
if(r>=3){g=t
var m,p=new Uint8Array(f)
for(i=19;i>=0;i--){for(m=0;m<f;++m)p[m]=h[m]^i
d=new o(p),g=d.encryptBlock(g)}}else d=new o(h.subarray(0,f)),g=d.encryptBlock(t)
return g}function n(n,o,s){var c=n.get("Filter")
if(!(0,i.isName)(c,"Standard"))throw new a.FormatError("unknown encryption method")
this.dict=n
var l=n.get("V")
if(!(0,a.isInt)(l)||1!==l&&2!==l&&4!==l&&5!==l)throw new a.FormatError("unsupported encryption algorithm")
this.algorithm=l
var u=n.get("Length")
if(!u)if(l<=3)u=40
else{var f=n.get("CF"),d=n.get("StmF")
if((0,i.isDict)(f)&&(0,i.isName)(d)){f.suppressEncryption=!0
var g=f.get(d.name)
u=g&&g.get("Length")||128,u<40&&(u<<=3)}}if(!(0,a.isInt)(u)||u<40||u%8!=0)throw new a.FormatError("invalid key length")
var m=(0,a.stringToBytes)(n.get("O")).subarray(0,32),p=(0,a.stringToBytes)(n.get("U")).subarray(0,32),b=n.get("P"),v=n.get("R"),y=(4===l||5===l)&&!1!==n.get("EncryptMetadata")
this.encryptMetadata=y
var w,k=(0,a.stringToBytes)(o)
if(s){if(6===v)try{s=(0,a.utf8StringToString)(s)}catch(e){(0,a.warn)("CipherTransformFactory: Unable to convert UTF8 encoded password.")}w=(0,a.stringToBytes)(s)}var S
if(5!==l)S=t(k,w,m,p,b,v,u,y)
else{S=e(v,w,m,(0,a.stringToBytes)(n.get("O")).subarray(32,40),(0,a.stringToBytes)(n.get("O")).subarray(40,48),(0,a.stringToBytes)(n.get("U")).subarray(0,48),p,(0,a.stringToBytes)(n.get("U")).subarray(32,40),(0,a.stringToBytes)(n.get("U")).subarray(40,48),(0,a.stringToBytes)(n.get("OE")),(0,a.stringToBytes)(n.get("UE")),(0,a.stringToBytes)(n.get("Perms")))}if(!S&&!s)throw new a.PasswordException("No password given",a.PasswordResponses.NEED_PASSWORD)
if(!S&&s){S=t(k,r(w,m,v,u),m,p,b,v,u,y)}if(!S)throw new a.PasswordException("Incorrect Password",a.PasswordResponses.INCORRECT_PASSWORD)
if(this.encryptionKey=S,l>=4){var C=n.get("CF");(0,i.isDict)(C)&&(C.suppressEncryption=!0),this.cf=C,this.stmf=n.get("StmF")||h,this.strf=n.get("StrF")||h,this.eff=n.get("EFF")||this.stmf}}function c(e,t,r,a){var i,n,o=new Uint8Array(r.length+9)
for(i=0,n=r.length;i<n;++i)o[i]=r[i]
return o[i++]=255&e,o[i++]=e>>8&255,o[i++]=e>>16&255,o[i++]=255&t,o[i++]=t>>8&255,a&&(o[i++]=115,o[i++]=65,o[i++]=108,o[i++]=84),s(o,0,i).subarray(0,Math.min(r.length+5,16))}function l(e,t,r,n,s){if(!(0,i.isName)(t))throw new a.FormatError("Invalid crypt filter name.")
var l,u=e.get(t.name)
if(null!==u&&void 0!==u&&(l=u.get("CFM")),!l||"None"===l.name)return function(){return new f}
if("V2"===l.name)return function(){return new o(c(r,n,s,!1))}
if("AESV2"===l.name)return function(){return new d(c(r,n,s,!0))}
if("AESV3"===l.name)return function(){return new g(s)}
throw new a.FormatError("Unknown crypto method")}var u=new Uint8Array([40,191,78,94,78,117,138,65,100,0,78,86,255,250,1,8,46,46,0,182,208,104,62,128,47,12,169,254,100,83,105,122]),h=i.Name.get("Identity")
return n.prototype={createCipherTransform:function(e,t){if(4===this.algorithm||5===this.algorithm)return new b(l(this.cf,this.stmf,e,t,this.encryptionKey),l(this.cf,this.strf,e,t,this.encryptionKey))
var r=c(e,t,this.encryptionKey,!1),a=function(){return new o(r)}
return new b(a,a)}},n}()
t.AES128Cipher=d,t.AES256Cipher=g,t.ARCFourCipher=o,t.CipherTransformFactory=v,t.PDF17=m,t.PDF20=p,t.calculateMD5=s,t.calculateSHA256=l,t.calculateSHA384=h,t.calculateSHA512=u},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PartialEvaluator=t.OperatorList=void 0
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(0),n=r(90),o=r(3),s=r(1),c=r(93),l=r(16),u=r(60),h=r(59),f=r(99),d=r(32),g=r(23),m=r(88),p=r(15),b=r(33),v=r(97),y=r(98),w=r(94),k=function(){function e(e,t,r,a){this.xref=e,this.resources=t,this.handler=r,this.forceDataSchema=a}function t(e){var t=this,r=e.pdfManager,a=e.xref,n=e.handler,o=e.pageIndex,s=e.idFactory,c=e.fontCache,l=e.builtInCMapCache,u=e.options,h=void 0===u?null:u
this.pdfManager=r,this.xref=a,this.handler=n,this.pageIndex=o,this.idFactory=s,this.fontCache=c,this.builtInCMapCache=l,this.options=h||k,this.fetchBuiltInCMap=function(e){var r=t.builtInCMapCache[e]
return r?Promise.resolve(r):t.handler.sendWithPromise("FetchBuiltInCMap",{name:e}).then(function(r){return r.compressionType!==i.CMapCompressionType.NONE&&(t.builtInCMapCache[e]=r),r})}}function r(){this.reset()}function g(e){if(!(0,s.isName)(e))return"source-over"
switch(e.name){case"Normal":case"Compatible":return"source-over"
case"Multiply":return"multiply"
case"Screen":return"screen"
case"Overlay":return"overlay"
case"Darken":return"darken"
case"Lighten":return"lighten"
case"ColorDodge":return"color-dodge"
case"ColorBurn":return"color-burn"
case"HardLight":return"hard-light"
case"SoftLight":return"soft-light"
case"Difference":return"difference"
case"Exclusion":return"exclusion"
case"Hue":return"hue"
case"Saturation":return"saturation"
case"Color":return"color"
case"Luminosity":return"luminosity"}return(0,i.warn)("Unsupported blend mode: "+e.name),"source-over"}var k={forceDataSchema:!1,maxImageSize:-1,disableFontFace:!1,nativeImageDecoderSupport:i.NativeImageDecoding.DECODE,ignoreErrors:!1}
e.prototype={canDecode:function(t){return t instanceof o.JpegStream&&e.isDecodable(t,this.xref,this.resources)},decode:function(e){var t=e.dict,r=t.get("ColorSpace","CS")
r=p.ColorSpace.parse(r,this.xref,this.resources)
var a=r.numComps
return this.handler.sendWithPromise("JpegDecode",[e.getIR(this.forceDataSchema),a]).then(function(t){var r=t.data
return new o.Stream(r,0,r.length,e.dict)})}},e.isSupported=function(e,t,r){var a=e.dict
if(a.has("DecodeParms")||a.has("DP"))return!1
var i=p.ColorSpace.parse(a.get("ColorSpace","CS"),t,r)
return("DeviceGray"===i.name||"DeviceRGB"===i.name)&&i.isDefaultDecode(a.getArray("Decode","D"))},e.isDecodable=function(e,t,r){var a=e.dict
if(a.has("DecodeParms")||a.has("DP"))return!1
var i=p.ColorSpace.parse(a.get("ColorSpace","CS"),t,r)
return(1===i.numComps||3===i.numComps)&&i.isDefaultDecode(a.getArray("Decode","D"))}
r.prototype={check:function(){return!(++this.checked<100)&&(this.checked=0,this.endTime<=Date.now())},reset:function(){this.endTime=Date.now()+20,this.checked=0}}
var _=Promise.resolve()
return t.prototype={clone:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=Object.create(this)
return t.options=e,t},hasBlendModes:function(e){if(!(0,s.isDict)(e))return!1
var t=Object.create(null)
e.objId&&(t[e.objId]=!0)
for(var r=[e],a=this.xref;r.length;){var i,n,o,c=r.shift(),l=c.get("ExtGState")
if((0,s.isDict)(l)){var u=l.getKeys()
for(n=0,o=u.length;n<o;n++){i=u[n]
var h=l.get(i),f=h.get("BM")
if((0,s.isName)(f)&&"Normal"!==f.name)return!0}}var d=c.get("XObject")
if((0,s.isDict)(d)){var g=d.getKeys()
for(n=0,o=g.length;n<o;n++){i=g[n]
var m=d.getRaw(i)
if((0,s.isRef)(m)){if(t[m.toString()])continue
m=a.fetch(m)}if((0,s.isStream)(m)){if(m.dict.objId){if(t[m.dict.objId])continue
t[m.dict.objId]=!0}var p=m.dict.get("Resources")
!(0,s.isDict)(p)||p.objId&&t[p.objId]||(r.push(p),p.objId&&(t[p.objId]=!0))}}}}return!1},buildFormXObject:function(e,t,r,a,n,o){var c=t.dict,l=c.getArray("Matrix"),u=c.getArray("BBox"),h=c.get("Group")
if(h){var f,d={matrix:l,bbox:u,smask:r,isolated:!1,knockout:!1},g=h.get("S");(0,s.isName)(g,"Transparency")&&(d.isolated=h.get("I")||!1,d.knockout=h.get("K")||!1,f=h.has("CS")?p.ColorSpace.parse(h.get("CS"),this.xref,e):null),r&&r.backdrop&&(f=f||p.ColorSpace.singletons.rgb,r.backdrop=f.getRgb(r.backdrop,0)),a.addOp(i.OPS.beginGroup,[d])}return a.addOp(i.OPS.paintFormXObjectBegin,[l,u]),this.getOperatorList({stream:t,task:n,resources:c.get("Resources")||e,operatorList:a,initialState:o}).then(function(){a.addOp(i.OPS.paintFormXObjectEnd,[]),h&&a.addOp(i.OPS.endGroup,[d])})},buildPaintImageXObject:function(t,r,a,n,s,c){var l=this,u=r.dict,h=u.get("Width","W"),f=u.get("Height","H")
if(!(h&&(0,i.isNum)(h)&&f&&(0,i.isNum)(f)))return void(0,i.warn)("Image dimensions are missing, or not numbers.")
var d=this.options.maxImageSize
if(-1!==d&&h*f>d)return void(0,i.warn)("Image exceeded maximum allowed size and was removed.")
var g,m,p=u.get("ImageMask","IM")||!1
if(p){var b=u.get("Width","W"),v=u.get("Height","H"),y=b+7>>3,k=r.getBytes(y*v),S=u.getArray("Decode","D"),C=!!S&&S[0]>0
return g=w.PDFImage.createMask(k,b,v,r instanceof o.DecodeStream,C),g.cached=!0,m=[g],n.addOp(i.OPS.paintImageMaskXObject,m),void(s&&(c[s]={fn:i.OPS.paintImageMaskXObject,args:m}))}var x=u.get("SMask","SM")||!1,A=u.get("Mask")||!1
if(a&&!x&&!A&&!(r instanceof o.JpegStream)&&h+f<200){return g=new w.PDFImage(this.xref,t,r,a,null,null).createImageData(!0),void n.addOp(i.OPS.paintInlineImageXObject,[g])}var P=this.options.nativeImageDecoderSupport,I="img_"+this.idFactory.createObjId()
if(n.addDependency(I),m=[I,h,f],P!==i.NativeImageDecoding.NONE&&!x&&!A&&r instanceof o.JpegStream&&e.isSupported(r,this.xref,t))return n.addOp(i.OPS.paintJpegXObject,m),this.handler.send("obj",[I,this.pageIndex,"JpegStream",r.getIR(this.options.forceDataSchema)]),void(s&&(c[s]={fn:i.OPS.paintJpegXObject,args:m}))
var _=null
P===i.NativeImageDecoding.DECODE&&(r instanceof o.JpegStream||A instanceof o.JpegStream||x instanceof o.JpegStream)&&(_=new e(this.xref,t,this.handler,this.options.forceDataSchema)),w.PDFImage.buildImage(this.handler,this.xref,t,r,a,_).then(function(e){var t=e.createImageData(!1)
l.handler.send("obj",[I,l.pageIndex,"Image",t],[t.data.buffer])}).catch(function(e){(0,i.warn)("Unable to decode image: "+e),l.handler.send("obj",[I,l.pageIndex,"Image",null])}),n.addOp(i.OPS.paintImageXObject,m),s&&(c[s]={fn:i.OPS.paintImageXObject,args:m})},handleSMask:function(e,t,r,a,i){var n=e.get("G"),o={subtype:e.get("S").name,backdrop:e.get("BC")},s=e.get("TR")
if((0,d.isPDFFunction)(s)){for(var c=d.PDFFunction.parse(this.xref,s),l=new Uint8Array(256),u=new Float32Array(1),h=0;h<256;h++)u[0]=h/255,c(u,0,u,0),l[h]=255*u[0]|0
o.transferMap=l}return this.buildFormXObject(t,n,o,r,a,i.state.clone())},handleTilingType:function(e,t,r,a,n,o,c){var l=this,u=new C,h=[n.get("Resources"),r],d=s.Dict.merge(this.xref,h)
return this.getOperatorList({stream:a,task:c,resources:d,operatorList:u}).then(function(){return(0,f.getTilingPatternIR)({fnArray:u.fnArray,argsArray:u.argsArray},n,t)}).then(function(t){o.addDependencies(u.dependencies),o.addOp(e,t)},function(e){if(l.options.ignoreErrors)return l.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.unknown}),void(0,i.warn)('handleTilingType - ignoring pattern: "'+e+'".')
throw e})},handleSetFont:function(e,t,r,a,n,o){var s,l=this
return t&&(t=t.slice(),s=t[0].name),this.loadFont(s,r,e).then(function(t){return t.font.isType3Font?t.loadType3Data(l,e,a,n).then(function(){return t}).catch(function(e){return l.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.font}),new S("g_font_error",new c.ErrorFont("Type3 font load error: "+e),t.font)}):t}).then(function(e){return o.font=e.font,e.send(l.handler),e.loadedName})},handleText:function(e,t){var r=this,a=t.font,n=a.charsToGlyphs(e),o=!!(t.textRenderingMode&i.TextRenderingMode.ADD_TO_PATH_FLAG)
if(a.data&&(o||this.options.disableFontFace))for(var s=function(e){if(!a.renderer.hasBuiltPath(e)){var t=a.renderer.getPathJs(e)
r.handler.send("commonobj",[a.loadedName+"_path_"+e,"FontPath",t])}},c=0,l=n.length;c<l;c++){var u=n[c]
s(u.fontChar)
var h=u.accent
h&&h.fontChar&&s(h.fontChar)}return n},setGState:function(e,t,r,a,n){for(var o=this,c=[],l=t.getKeys(),u=Promise.resolve(),h=0,f=l.length;h<f;h++)!function(){var f=l[h],d=t.get(f)
switch(f){case"Type":break
case"LW":case"LC":case"LJ":case"ML":case"D":case"RI":case"FL":case"CA":case"ca":c.push([f,d])
break
case"Font":u=u.then(function(){return o.handleSetFont(e,null,d[0],r,a,n.state).then(function(e){r.addDependency(e),c.push([f,[e,d[1]]])})})
break
case"BM":c.push([f,g(d)])
break
case"SMask":if((0,s.isName)(d,"None")){c.push([f,!1])
break}(0,s.isDict)(d)?(u=u.then(function(){return o.handleSMask(d,e,r,a,n)}),c.push([f,!0])):(0,i.warn)("Unsupported SMask type")
break
case"OP":case"op":case"OPM":case"BG":case"BG2":case"UCR":case"UCR2":case"TR":case"TR2":case"HT":case"SM":case"SA":case"AIS":case"TK":(0,i.info)("graphic state operator "+f)
break
default:(0,i.info)("Unknown graphic state operator "+f)}}()
return u.then(function(){c.length>0&&r.addOp(i.OPS.setGState,[c])})},loadFont:function(e,t,r){function a(){return Promise.resolve(new S("g_font_error",new c.ErrorFont("Font "+e+" is not available"),t))}var n,o=this,l=this.xref
if(t){if(!(0,s.isRef)(t))throw new Error('The "font" object should be a reference.')
n=t}else{var u=r.get("Font")
if(!u)return(0,i.warn)("fontRes not available"),a()
n=u.getRaw(e)}if(!n)return(0,i.warn)("fontRef not available"),a()
if(this.fontCache.has(n))return this.fontCache.get(n)
if(t=l.fetchIfRef(n),!(0,s.isDict)(t))return a()
if(t.translated)return t.translated
var h,f=(0,i.createPromiseCapability)(),d=this.preEvaluateFont(t),g=d.descriptor,m=(0,s.isRef)(n)
if(m&&(h=n.toString()),(0,s.isDict)(g)){g.fontAliases||(g.fontAliases=Object.create(null))
var p=g.fontAliases,b=d.hash
if(p[b]){var v=p[b].aliasRef
if(m&&v&&this.fontCache.has(v))return this.fontCache.putAlias(n,v),this.fontCache.get(n)}else p[b]={fontID:c.Font.getFontID()}
m&&(p[b].aliasRef=n),h=p[b].fontID}m?this.fontCache.put(n,f.promise):(h||(h=this.idFactory.createObjId()),this.fontCache.put("id_"+h,f.promise)),(0,i.assert)(h,'The "fontID" must be defined.'),t.loadedName="g_"+this.pdfManager.docId+"_f"+h,t.translated=f.promise
var y
try{y=this.translateFont(d)}catch(e){y=Promise.reject(e)}return y.then(function(e){if(void 0!==e.fontType){l.stats.fontTypes[e.fontType]=!0}f.resolve(new S(t.loadedName,e,t))}).catch(function(e){o.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.font})
try{var r=d.descriptor,a=r&&r.get("FontFile3"),n=a&&a.get("Subtype"),s=(0,c.getFontType)(d.type,n&&n.name)
l.stats.fontTypes[s]=!0}catch(e){}f.resolve(new S(t.loadedName,new c.ErrorFont(e instanceof Error?e.message:e),t))}),f.promise},buildPath:function(e,t,r){var a=e.length-1
if(r||(r=[]),a<0||e.fnArray[a]!==i.OPS.constructPath)e.addOp(i.OPS.constructPath,[[t],r])
else{var n=e.argsArray[a]
n[0].push(t),Array.prototype.push.apply(n[1],r)}},handleColorN:function(e,t,r,a,i,n,o){var c,l=r[r.length-1]
if((0,s.isName)(l)&&(c=i.get(l.name))){var u=(0,s.isStream)(c)?c.dict:c,h=u.get("PatternType")
if(1===h){var d=a.base?a.base.getRgb(r,0):null
return this.handleTilingType(t,d,n,c,u,e,o)}if(2===h){var g=u.get("Shading"),m=u.getArray("Matrix")
return c=f.Pattern.parseShading(g,m,this.xref,n,this.handler),e.addOp(t,c.getIR()),Promise.resolve()}return Promise.reject(new Error("Unknown PatternType: "+h))}return e.addOp(t,r),Promise.resolve()},getOperatorList:function(e){function t(e){for(var t=0,r=w.savedStatesDepth;t<r;t++)l.addOp(i.OPS.restore,[])}var a=this,n=e.stream,o=e.task,c=e.resources,l=e.operatorList,u=e.initialState,h=void 0===u?null:u
if(c=c||s.Dict.empty,h=h||new P,!l)throw new Error('getOperatorList: missing "operatorList" parameter')
var d=this,g=this.xref,m=Object.create(null),b=c.get("XObject")||s.Dict.empty,v=c.get("Pattern")||s.Dict.empty,y=new x(h),w=new I(n,g,y),k=new r
return new Promise(function e(r,a){var n=function(t){t.then(function(){try{e(r,a)}catch(e){a(e)}},a)}
o.ensureNotTerminated(),k.reset()
for(var u,h,S,C,x={};!(u=k.check())&&(x.args=null,w.read(x));){var A=x.args,P=x.fn
switch(0|P){case i.OPS.paintXObject:var I=A[0].name
if(!I){(0,i.warn)("XObject must be referred to by name.")
continue}if(void 0!==m[I]){l.addOp(m[I].fn,m[I].args),A=null
continue}var O=b.get(I)
if(O){if(!(0,s.isStream)(O))throw new i.FormatError("XObject should be a stream")
var T=O.dict.get("Subtype")
if(!(0,s.isName)(T))throw new i.FormatError("XObject should have a Name subtype")
if("Form"===T.name)return y.save(),void n(d.buildFormXObject(c,O,null,l,o,y.state.clone()).then(function(){y.restore()}))
if("Image"===T.name){d.buildPaintImageXObject(c,O,!1,l,I,m),A=null
continue}if("PS"===T.name){(0,i.info)("Ignored XObject subtype PS")
continue}throw new i.FormatError("Unhandled XObject subtype "+T.name)}break
case i.OPS.setFont:var E=A[1]
return void n(d.handleSetFont(c,A,null,l,o,y.state).then(function(e){l.addDependency(e),l.addOp(i.OPS.setFont,[e,E])}))
case i.OPS.endInlineImage:var R=A[0].cacheKey
if(R){var F=m[R]
if(void 0!==F){l.addOp(F.fn,F.args),A=null
continue}}d.buildPaintImageXObject(c,A[0],!0,l,R,m),A=null
continue
case i.OPS.showText:A[0]=d.handleText(A[0],y.state)
break
case i.OPS.showSpacedText:var B=A[0],M=[],D=B.length,L=y.state
for(h=0;h<D;++h){var N=B[h];(0,i.isString)(N)?Array.prototype.push.apply(M,d.handleText(N,L)):(0,i.isNum)(N)&&M.push(N)}A[0]=M,P=i.OPS.showText
break
case i.OPS.nextLineShowText:l.addOp(i.OPS.nextLine),A[0]=d.handleText(A[0],y.state),P=i.OPS.showText
break
case i.OPS.nextLineSetSpacingShowText:l.addOp(i.OPS.nextLine),l.addOp(i.OPS.setWordSpacing,[A.shift()]),l.addOp(i.OPS.setCharSpacing,[A.shift()]),A[0]=d.handleText(A[0],y.state),P=i.OPS.showText
break
case i.OPS.setTextRenderingMode:y.state.textRenderingMode=A[0]
break
case i.OPS.setFillColorSpace:y.state.fillColorSpace=p.ColorSpace.parse(A[0],g,c)
continue
case i.OPS.setStrokeColorSpace:y.state.strokeColorSpace=p.ColorSpace.parse(A[0],g,c)
continue
case i.OPS.setFillColor:C=y.state.fillColorSpace,A=C.getRgb(A,0),P=i.OPS.setFillRGBColor
break
case i.OPS.setStrokeColor:C=y.state.strokeColorSpace,A=C.getRgb(A,0),P=i.OPS.setStrokeRGBColor
break
case i.OPS.setFillGray:y.state.fillColorSpace=p.ColorSpace.singletons.gray,A=p.ColorSpace.singletons.gray.getRgb(A,0),P=i.OPS.setFillRGBColor
break
case i.OPS.setStrokeGray:y.state.strokeColorSpace=p.ColorSpace.singletons.gray,A=p.ColorSpace.singletons.gray.getRgb(A,0),P=i.OPS.setStrokeRGBColor
break
case i.OPS.setFillCMYKColor:y.state.fillColorSpace=p.ColorSpace.singletons.cmyk,A=p.ColorSpace.singletons.cmyk.getRgb(A,0),P=i.OPS.setFillRGBColor
break
case i.OPS.setStrokeCMYKColor:y.state.strokeColorSpace=p.ColorSpace.singletons.cmyk,A=p.ColorSpace.singletons.cmyk.getRgb(A,0),P=i.OPS.setStrokeRGBColor
break
case i.OPS.setFillRGBColor:y.state.fillColorSpace=p.ColorSpace.singletons.rgb,A=p.ColorSpace.singletons.rgb.getRgb(A,0)
break
case i.OPS.setStrokeRGBColor:y.state.strokeColorSpace=p.ColorSpace.singletons.rgb,A=p.ColorSpace.singletons.rgb.getRgb(A,0)
break
case i.OPS.setFillColorN:if(C=y.state.fillColorSpace,"Pattern"===C.name)return void n(d.handleColorN(l,i.OPS.setFillColorN,A,C,v,c,o))
A=C.getRgb(A,0),P=i.OPS.setFillRGBColor
break
case i.OPS.setStrokeColorN:if(C=y.state.strokeColorSpace,"Pattern"===C.name)return void n(d.handleColorN(l,i.OPS.setStrokeColorN,A,C,v,c,o))
A=C.getRgb(A,0),P=i.OPS.setStrokeRGBColor
break
case i.OPS.shadingFill:var U=c.get("Shading")
if(!U)throw new i.FormatError("No shading resource found")
var j=U.get(A[0].name)
if(!j)throw new i.FormatError("No shading object found")
A=[f.Pattern.parseShading(j,null,g,c,d.handler).getIR()],P=i.OPS.shadingFill
break
case i.OPS.setGState:var q=A[0],z=c.get("ExtGState")
if(!(0,s.isDict)(z)||!z.has(q.name))break
var H=z.get(q.name)
return void n(d.setGState(c,H,l,o,y))
case i.OPS.moveTo:case i.OPS.lineTo:case i.OPS.curveTo:case i.OPS.curveTo2:case i.OPS.curveTo3:case i.OPS.closePath:case i.OPS.rectangle:d.buildPath(l,P,A)
continue
case i.OPS.markPoint:case i.OPS.markPointProps:case i.OPS.beginMarkedContent:case i.OPS.beginMarkedContentProps:case i.OPS.endMarkedContent:case i.OPS.beginCompat:case i.OPS.endCompat:continue
default:if(null!==A){for(h=0,S=A.length;h<S&&!(A[h]instanceof s.Dict);h++);if(h<S){(0,i.warn)("getOperatorList - ignoring operator: "+P)
continue}}}l.addOp(P,A)}if(u)return void n(_)
t(),r()}).catch(function(e){if(a.options.ignoreErrors)return a.handler.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.unknown}),(0,i.warn)("getOperatorList - ignoring errors during task: "+o.name),void t()
throw e})},getTextContent:function(e){function t(){if(M.initialized)return M
var e=R.font
e.loadedName in E||(E[e.loadedName]=!0,B.styles[e.loadedName]={fontFamily:e.fallbackName,ascent:e.ascent,descent:e.descent,vertical:e.vertical}),M.fontName=e.loadedName
var t=[R.fontSize*R.textHScale,0,0,R.fontSize,0,R.textRise]
if(e.isType3Font&&R.fontMatrix!==i.FONT_IDENTITY_MATRIX&&1===R.fontSize){var r=e.bbox[3]-e.bbox[1]
r>0&&(r*=R.fontMatrix[3],t[3]*=r)}var a=i.Util.transform(R.ctm,i.Util.transform(R.textMatrix,t))
M.transform=a,e.vertical?(M.width=Math.sqrt(a[0]*a[0]+a[1]*a[1]),M.height=0,M.vertical=!0):(M.width=0,M.height=Math.sqrt(a[2]*a[2]+a[3]*a[3]),M.vertical=!1)
var n=R.textLineMatrix[0],o=R.textLineMatrix[1],s=Math.sqrt(n*n+o*o)
n=R.ctm[0],o=R.ctm[1]
var c=Math.sqrt(n*n+o*o)
M.textAdvanceScale=c*s,M.lastAdvanceWidth=0,M.lastAdvanceHeight=0
var l=e.spaceWidth/1e3*R.fontSize
return l?(M.spaceWidth=l,M.fakeSpaceMin=l*D,M.fakeMultiSpaceMin=l*L,M.fakeMultiSpaceMax=l*N,M.textRunBreakAllowed=!e.isMonospace):(M.spaceWidth=0,M.fakeSpaceMin=1/0,M.fakeMultiSpaceMin=1/0,M.fakeMultiSpaceMax=0,M.textRunBreakAllowed=!1),M.initialized=!0,M}function n(e){for(var t,r=0,a=e.length;r<a&&(t=e.charCodeAt(r))>=32&&t<=127;)r++
return r<a?e.replace(F," "):e}function o(e){var t=e.str.join(""),r=(0,m.bidi)(t,-1,e.vertical)
return{str:S?n(r.str):r.str,dir:r.dir,width:e.width,height:e.height,transform:e.transform,fontName:e.fontName}}function c(e,t){return U.loadFont(e,t,v).then(function(e){R.font=e.font,R.fontMatrix=e.font.fontMatrix||i.FONT_IDENTITY_MATRIX})}function l(e){for(var r=R.font,a=t(),i=0,n=0,o=r.charsToGlyphs(e),s=0;s<o.length;s++){var c=o[s],l=null
l=r.vertical&&c.vmetric?c.vmetric[0]:c.width
var f=c.unicode,d=(0,u.getNormalizedUnicodes)()
void 0!==d[f]&&(f=d[f]),f=(0,u.reverseIfRtl)(f)
var g=R.charSpacing
if(c.isSpace){var m=R.wordSpacing
g+=m,m>0&&h(m,a.str)}var p=0,b=0
if(r.vertical){b=l*R.fontMatrix[0]*R.fontSize+g,n+=b}else{p=(l*R.fontMatrix[0]*R.fontSize+g)*R.textHScale,i+=p}R.translateTextMatrix(p,b),a.str.push(f)}return r.vertical?(a.lastAdvanceHeight=n,a.height+=Math.abs(n)):(a.lastAdvanceWidth=i,a.width+=i),a}function h(e,t){if(!(e<M.fakeSpaceMin)){if(e<M.fakeMultiSpaceMin)return void t.push(" ")
for(var r=Math.round(e/M.spaceWidth);r-- >0;)t.push(" ")}}function f(){M.initialized&&(M.width*=M.textAdvanceScale,M.height*=M.textAdvanceScale,B.items.push(o(M)),M.initialized=!1,M.str.length=0)}function d(){var e=B.items.length
e>0&&(O.enqueue(B,e),B.items=[],B.styles=Object.create(null))}var g=this,p=e.stream,b=e.task,v=e.resources,y=e.stateManager,w=void 0===y?null:y,k=e.normalizeWhitespace,S=void 0!==k&&k,C=e.combineTextItems,P=void 0!==C&&C,O=e.sink,T=e.seenStyles,E=void 0===T?Object.create(null):T
v=v||s.Dict.empty,w=w||new x(new A)
var R,F=/\s/g,B={items:[],styles:Object.create(null)},M={initialized:!1,str:[],width:0,height:0,vertical:!1,lastAdvanceWidth:0,lastAdvanceHeight:0,textAdvanceScale:0,spaceWidth:0,fakeSpaceMin:1/0,fakeMultiSpaceMin:1/0,fakeMultiSpaceMax:-0,textRunBreakAllowed:!1,transform:null,fontName:null},D=.3,L=1.5,N=4,U=this,j=this.xref,q=null,z=Object.create(null),H=new I(p,j,w),W=new r
return new Promise(function e(r,n){var o=function(t){d(),Promise.all([t,O.ready]).then(function(){try{e(r,n)}catch(e){n(e)}},n)}
b.ensureNotTerminated(),W.reset()
for(var u,g={},m=[];!(u=W.check())&&(m.length=0,g.args=m,H.read(g));){R=w.state
var p=g.fn
m=g.args
var y,k,C,A,I,T,F,D,L,N,j,G,X,V,Y,K,J,Z,Q,$,ee=function(){switch(0|p){case i.OPS.setFont:if(C=m[0].name,A=m[1],R.font&&C===R.fontName&&A===R.fontSize)break
return f(),R.fontName=C,R.fontSize=A,o(c(C,null)),{v:void 0}
case i.OPS.setTextRise:f(),R.textRise=m[0]
break
case i.OPS.setHScale:f(),R.textHScale=m[0]/100
break
case i.OPS.setLeading:f(),R.leading=m[0]
break
case i.OPS.moveText:if(I=!!R.font&&0===(R.font.vertical?m[0]:m[1]),y=m[0]-m[1],P&&I&&M.initialized&&y>0&&y<=M.fakeMultiSpaceMax){R.translateTextLineMatrix(m[0],m[1]),M.width+=m[0]-M.lastAdvanceWidth,M.height+=m[1]-M.lastAdvanceHeight,k=m[0]-M.lastAdvanceWidth-(m[1]-M.lastAdvanceHeight),h(k,M.str)
break}f(),R.translateTextLineMatrix(m[0],m[1]),R.textMatrix=R.textLineMatrix.slice()
break
case i.OPS.setLeadingMoveText:f(),R.leading=-m[1],R.translateTextLineMatrix(m[0],m[1]),R.textMatrix=R.textLineMatrix.slice()
break
case i.OPS.nextLine:f(),R.carriageReturn()
break
case i.OPS.setTextMatrix:if(y=R.calcTextLineMatrixAdvance(m[0],m[1],m[2],m[3],m[4],m[5]),P&&null!==y&&M.initialized&&y.value>0&&y.value<=M.fakeMultiSpaceMax){R.translateTextLineMatrix(y.width,y.height),M.width+=y.width-M.lastAdvanceWidth,M.height+=y.height-M.lastAdvanceHeight,k=y.width-M.lastAdvanceWidth-(y.height-M.lastAdvanceHeight),h(k,M.str)
break}f(),R.setTextMatrix(m[0],m[1],m[2],m[3],m[4],m[5]),R.setTextLineMatrix(m[0],m[1],m[2],m[3],m[4],m[5])
break
case i.OPS.setCharSpacing:R.charSpacing=m[0]
break
case i.OPS.setWordSpacing:R.wordSpacing=m[0]
break
case i.OPS.beginText:f(),R.textMatrix=i.IDENTITY_MATRIX.slice(),R.textLineMatrix=i.IDENTITY_MATRIX.slice()
break
case i.OPS.showSpacedText:for(T=m[0],D=0,L=T.length;D<L;D++)"string"==typeof T[D]?l(T[D]):(0,i.isNum)(T[D])&&(t(),y=T[D]*R.fontSize/1e3,N=!1,R.font.vertical?(F=y,R.translateTextMatrix(0,F),(N=M.textRunBreakAllowed&&y>M.fakeMultiSpaceMax)||(M.height+=F)):(y=-y,F=y*R.textHScale,R.translateTextMatrix(F,0),(N=M.textRunBreakAllowed&&y>M.fakeMultiSpaceMax)||(M.width+=F)),N?f():y>0&&h(y,M.str))
break
case i.OPS.showText:l(m[0])
break
case i.OPS.nextLineShowText:f(),R.carriageReturn(),l(m[0])
break
case i.OPS.nextLineSetSpacingShowText:f(),R.wordSpacing=m[0],R.charSpacing=m[1],R.carriageReturn(),l(m[2])
break
case i.OPS.paintXObject:if(f(),q||(q=v.get("XObject")||s.Dict.empty),(j=m[0].name)in z)break
if(!(G=q.get(j)))break
if(!(0,s.isStream)(G))throw new i.FormatError("XObject should be a stream")
if(X=G.dict.get("Subtype"),!(0,s.isName)(X))throw new i.FormatError("XObject should have a Name subtype")
if("Form"!==X.name){z[j]=!0
break}V=w.state.clone(),Y=new x(V),K=G.dict.getArray("Matrix"),(0,i.isArray)(K)&&6===K.length&&Y.transform(K),d()
var e={enqueueInvoked:!1,enqueue:function(e,t){this.enqueueInvoked=!0,O.enqueue(e,t)},get desiredSize(){return O.desiredSize},get ready(){return O.ready}}
return o(U.getTextContent({stream:G,task:b,resources:G.dict.get("Resources")||v,stateManager:Y,normalizeWhitespace:S,combineTextItems:P,sink:e,seenStyles:E}).then(function(){e.enqueueInvoked||(z[j]=!0)})),{v:void 0}
case i.OPS.setGState:if(f(),J=m[0],Z=v.get("ExtGState"),!(0,s.isDict)(Z)||!(0,s.isName)(J))break
if(Q=Z.get(J.name),!(0,s.isDict)(Q))break
if($=Q.get("Font"))return R.fontName=null,R.fontSize=$[1],o(c(null,$[0])),{v:void 0}}}()
if("object"===(void 0===ee?"undefined":a(ee)))return ee.v
if(B.items.length>=O.desiredSize){u=!0
break}}if(u)return void o(_)
f(),d(),r()}).catch(function(e){if(!(e instanceof i.AbortException)){if(g.options.ignoreErrors)return(0,i.warn)("getTextContent - ignoring errors during task: "+b.name),f(),void d()
throw e}})},extractDataStructures:function(e,t,r){var a=this,n=this.xref,o=e.get("ToUnicode")||t.get("ToUnicode"),u=o?this.readToUnicode(o):Promise.resolve(void 0)
if(r.composite){var h=e.get("CIDSystemInfo");(0,s.isDict)(h)&&(r.cidSystemInfo={registry:h.get("Registry"),ordering:h.get("Ordering"),supplement:h.get("Supplement")})
var f=e.get("CIDToGIDMap");(0,s.isStream)(f)&&(r.cidToGidMap=this.readCidToGidMap(f))}var d,g=[],m=null
if(e.has("Encoding")){if(d=e.get("Encoding"),(0,s.isDict)(d)){if(m=d.get("BaseEncoding"),m=(0,s.isName)(m)?m.name:null,d.has("Differences"))for(var p=d.get("Differences"),b=0,v=0,y=p.length;v<y;v++){var w=n.fetchIfRef(p[v])
if((0,i.isNum)(w))b=w
else{if(!(0,s.isName)(w))throw new i.FormatError("Invalid entry in 'Differences' array: "+w)
g[b++]=w.name}}}else{if(!(0,s.isName)(d))throw new i.FormatError("Encoding is not a Name nor a Dict")
m=d.name}"MacRomanEncoding"!==m&&"MacExpertEncoding"!==m&&"WinAnsiEncoding"!==m&&(m=null)}if(m)r.defaultEncoding=(0,l.getEncoding)(m).slice()
else{var k=!!(r.flags&c.FontFlags.Symbolic),S=!!(r.flags&c.FontFlags.Nonsymbolic)
d=l.StandardEncoding,"TrueType"!==r.type||S||(d=l.WinAnsiEncoding),k&&(d=l.MacRomanEncoding,r.file||(/Symbol/i.test(r.name)?d=l.SymbolSetEncoding:/Dingbats/i.test(r.name)&&(d=l.ZapfDingbatsEncoding))),r.defaultEncoding=d}return r.differences=g,r.baseEncodingName=m,r.hasEncoding=!!m||g.length>0,r.dict=e,u.then(function(e){return r.toUnicode=e,a.buildToUnicode(r)}).then(function(e){return r.toUnicode=e,r})},buildToUnicode:function(e){if(e.hasIncludedToUnicodeMap=!!e.toUnicode&&e.toUnicode.length>0,e.hasIncludedToUnicodeMap)return Promise.resolve(e.toUnicode)
var t,r,a
if(!e.composite){t=[]
var o=e.defaultEncoding.slice(),h=e.baseEncodingName,f=e.differences
for(r in f)".notdef"!==(a=f[r])&&(o[r]=a)
var d=(0,b.getGlyphsUnicode)()
for(r in o)if(""!==(a=o[r]))if(void 0!==d[a])t[r]=String.fromCharCode(d[a])
else{var g=0
switch(a[0]){case"G":3===a.length&&(g=parseInt(a.substr(1),16))
break
case"g":5===a.length&&(g=parseInt(a.substr(1),16))
break
case"C":case"c":a.length>=3&&(g=+a.substr(1))
break
default:var m=(0,u.getUnicodeForGlyph)(a,d);-1!==m&&(g=m)}if(g){if(h&&g===+r){var p=(0,l.getEncoding)(h)
if(p&&(a=p[r])){t[r]=String.fromCharCode(d[a])
continue}}t[r]=String.fromCharCode(g)}}return Promise.resolve(new c.ToUnicodeMap(t))}if(e.composite&&(e.cMap.builtInCMap&&!(e.cMap instanceof n.IdentityCMap)||"Adobe"===e.cidSystemInfo.registry&&("GB1"===e.cidSystemInfo.ordering||"CNS1"===e.cidSystemInfo.ordering||"Japan1"===e.cidSystemInfo.ordering||"Korea1"===e.cidSystemInfo.ordering))){var v=e.cidSystemInfo.registry,y=e.cidSystemInfo.ordering,w=s.Name.get(v+"-"+y+"-UCS2")
return n.CMapFactory.create({encoding:w,fetchBuiltInCMap:this.fetchBuiltInCMap,useCMap:null}).then(function(r){var a=e.cMap
return t=[],a.forEach(function(e,a){if(a>65535)throw new i.FormatError("Max size of CID is 65,535")
var n=r.lookup(a)
n&&(t[e]=String.fromCharCode((n.charCodeAt(0)<<8)+n.charCodeAt(1)))}),new c.ToUnicodeMap(t)})}return Promise.resolve(new c.IdentityToUnicodeMap(e.firstChar,e.lastChar))},readToUnicode:function(e){var t=e
return(0,s.isName)(t)?n.CMapFactory.create({encoding:t,fetchBuiltInCMap:this.fetchBuiltInCMap,useCMap:null}).then(function(e){return e instanceof n.IdentityCMap?new c.IdentityToUnicodeMap(0,65535):new c.ToUnicodeMap(e.getMap())}):(0,s.isStream)(t)?n.CMapFactory.create({encoding:t,fetchBuiltInCMap:this.fetchBuiltInCMap,useCMap:null}).then(function(e){if(e instanceof n.IdentityCMap)return new c.IdentityToUnicodeMap(0,65535)
var t=new Array(e.length)
return e.forEach(function(e,r){for(var a=[],i=0;i<r.length;i+=2){var n=r.charCodeAt(i)<<8|r.charCodeAt(i+1)
if(55296==(63488&n)){i+=2
var o=r.charCodeAt(i)<<8|r.charCodeAt(i+1)
a.push(((1023&n)<<10)+(1023&o)+65536)}else a.push(n)}t[e]=String.fromCharCode.apply(String,a)}),new c.ToUnicodeMap(t)}):Promise.resolve(null)},readCidToGidMap:function(e){for(var t=e.getBytes(),r=[],a=0,i=t.length;a<i;a++){var n=t[a++]<<8|t[a]
if(0!==n){r[a>>1]=n}}return r},extractWidths:function(e,t,r){var a,n,o,l,u,h,f,d,g=this.xref,m=[],p=0,b=[]
if(r.composite){if(p=e.get("DW")||1e3,d=e.get("W"))for(n=0,o=d.length;n<o;n++)if(h=g.fetchIfRef(d[n++]),f=g.fetchIfRef(d[n]),(0,i.isArray)(f))for(l=0,u=f.length;l<u;l++)m[h++]=g.fetchIfRef(f[l])
else{var v=g.fetchIfRef(d[++n])
for(l=h;l<=f;l++)m[l]=v}if(r.vertical){var y=e.getArray("DW2")||[880,-1e3]
if(a=[y[1],.5*p,y[0]],y=e.get("W2"))for(n=0,o=y.length;n<o;n++)if(h=g.fetchIfRef(y[n++]),f=g.fetchIfRef(y[n]),(0,i.isArray)(f))for(l=0,u=f.length;l<u;l++)b[h++]=[g.fetchIfRef(f[l++]),g.fetchIfRef(f[l++]),g.fetchIfRef(f[l])]
else{var w=[g.fetchIfRef(y[++n]),g.fetchIfRef(y[++n]),g.fetchIfRef(y[++n])]
for(l=h;l<=f;l++)b[l]=w}}}else{var k=r.firstChar
if(d=e.get("Widths")){for(l=k,n=0,o=d.length;n<o;n++)m[l++]=g.fetchIfRef(d[n])
p=parseFloat(t.get("MissingWidth"))||0}else{var S=e.get("BaseFont")
if((0,s.isName)(S)){var C=this.getBaseFontMetrics(S.name)
m=this.buildCharCodeToWidth(C.widths,r),p=C.defaultWidth}}}var x=!0,A=p
for(var P in m){var I=m[P]
if(I)if(A){if(A!==I){x=!1
break}}else A=I}x&&(r.flags|=c.FontFlags.FixedPitch),r.defaultWidth=p,r.widths=m,r.defaultVMetrics=a,r.vmetrics=b},isSerifFont:function(e){var t=e.split("-")[0]
return t in(0,h.getSerifFonts)()||-1!==t.search(/serif/gi)},getBaseFontMetrics:function(e){var t=0,r=[],a=!1,n=(0,h.getStdFontMap)(),o=n[e]||e,s=(0,v.getMetrics)()
o in s||(o=this.isSerifFont(e)?"Times-Roman":"Helvetica")
var c=s[o]
return(0,i.isNum)(c)?(t=c,a=!0):r=c(),{defaultWidth:t,monospace:a,widths:r}},buildCharCodeToWidth:function(e,t){for(var r=Object.create(null),a=t.differences,i=t.defaultEncoding,n=0;n<256;n++)n in a&&e[a[n]]?r[n]=e[a[n]]:n in i&&e[i[n]]&&(r[n]=e[i[n]])
return r},preEvaluateFont:function(e){var t=e,r=e.get("Subtype")
if(!(0,s.isName)(r))throw new i.FormatError("invalid font Subtype")
var a,n=!1
if("Type0"===r.name){var o=e.get("DescendantFonts")
if(!o)throw new i.FormatError("Descendant fonts are not specified")
if(e=(0,i.isArray)(o)?this.xref.fetchIfRef(o[0]):o,r=e.get("Subtype"),!(0,s.isName)(r))throw new i.FormatError("invalid font Subtype")
n=!0}var c=e.get("FontDescriptor")
if(c){var l=new y.MurmurHash3_64,u=t.getRaw("Encoding")
if((0,s.isName)(u))l.update(u.name)
else if((0,s.isRef)(u))l.update(u.toString())
else if((0,s.isDict)(u))for(var h=u.getKeys(),f=0,d=h.length;f<d;f++){var g=u.getRaw(h[f])
if((0,s.isName)(g))l.update(g.name)
else if((0,s.isRef)(g))l.update(g.toString())
else if((0,i.isArray)(g)){for(var m=g.length,p=new Array(m),b=0;b<m;b++){var v=g[b];(0,s.isName)(v)?p[b]=v.name:((0,i.isNum)(v)||(0,s.isRef)(v))&&(p[b]=v.toString())}l.update(p.join())}}var w=e.get("ToUnicode")||t.get("ToUnicode")
if((0,s.isStream)(w)){var k=w.str||w
a=k.buffer?new Uint8Array(k.buffer.buffer,0,k.bufferLength):new Uint8Array(k.bytes.buffer,k.start,k.end-k.start),l.update(a)}else(0,s.isName)(w)&&l.update(w.name)
var S=e.get("Widths")||t.get("Widths")
S&&(a=new Uint8Array(new Uint32Array(S).buffer),l.update(a))}return{descriptor:c,dict:e,baseDict:t,composite:n,type:r.name,hash:l?l.hexdigest():""}},translateFont:function(e){var t,r=this,a=e.baseDict,o=e.dict,l=e.composite,u=e.descriptor,f=e.type,d=l?65535:255
if(!u){if("Type3"!==f){var g=o.get("BaseFont")
if(!(0,s.isName)(g))throw new i.FormatError("Base font is not specified")
g=g.name.replace(/[,_]/g,"-")
var m=this.getBaseFontMetrics(g),p=g.split("-")[0],b=(this.isSerifFont(p)?c.FontFlags.Serif:0)|(m.monospace?c.FontFlags.FixedPitch:0)|((0,h.getSymbolsFonts)()[p]?c.FontFlags.Symbolic:c.FontFlags.Nonsymbolic)
return t={type:f,name:g,widths:m.widths,defaultWidth:m.defaultWidth,flags:b,firstChar:0,lastChar:d},this.extractDataStructures(o,o,t).then(function(e){return e.widths=r.buildCharCodeToWidth(m.widths,e),new c.Font(g,null,e)})}u=new s.Dict(null),u.set("FontName",s.Name.get(f)),u.set("FontBBox",o.getArray("FontBBox"))}var v=o.get("FirstChar")||0,y=o.get("LastChar")||d,w=u.get("FontName"),k=o.get("BaseFont")
if((0,i.isString)(w)&&(w=s.Name.get(w)),(0,i.isString)(k)&&(k=s.Name.get(k)),"Type3"!==f){var S=w&&w.name,C=k&&k.name
S!==C&&((0,i.info)("The FontDescriptor's FontName is \""+S+'" but should be the same as the Font\'s BaseFont "'+C+'"'),S&&C&&0===C.indexOf(S)&&(w=k))}if(w=w||k,!(0,s.isName)(w))throw new i.FormatError("invalid font name")
var x=u.get("FontFile","FontFile2","FontFile3")
if(x&&x.dict){var A=x.dict.get("Subtype")
A&&(A=A.name)
var P=x.dict.get("Length1"),I=x.dict.get("Length2"),_=x.dict.get("Length3")}t={type:f,name:w.name,subtype:A,file:x,length1:P,length2:I,length3:_,loadedName:a.loadedName,composite:l,wideChars:l,fixedPitch:!1,fontMatrix:o.getArray("FontMatrix")||i.FONT_IDENTITY_MATRIX,firstChar:v||0,lastChar:y||d,bbox:u.getArray("FontBBox"),ascent:u.get("Ascent"),descent:u.get("Descent"),xHeight:u.get("XHeight"),capHeight:u.get("CapHeight"),flags:u.get("Flags"),italicAngle:u.get("ItalicAngle"),isType3Font:!1}
var O
if(l){var T=a.get("Encoding");(0,s.isName)(T)&&(t.cidEncoding=T.name),O=n.CMapFactory.create({encoding:T,fetchBuiltInCMap:this.fetchBuiltInCMap,useCMap:null}).then(function(e){t.cMap=e,t.vertical=t.cMap.vertical})}else O=Promise.resolve(void 0)
return O.then(function(){return r.extractDataStructures(o,a,t)}).then(function(e){return r.extractWidths(o,u,e),"Type3"===f&&(e.isType3Font=!0),new c.Font(w.name,x,e)})}},t}(),S=function(){function e(e,t,r){this.loadedName=e,this.font=t,this.dict=r,this.type3Loaded=null,this.sent=!1}return e.prototype={send:function(e){if(!this.sent){var t=this.font.exportData()
e.send("commonobj",[this.loadedName,"Font",t]),this.sent=!0}},loadType3Data:function(e,t,r,a){if(!this.font.isType3Font)throw new Error("Must be a Type3 font.")
if(this.type3Loaded)return this.type3Loaded
var n=Object.create(e.options)
n.ignoreErrors=!1
for(var o=e.clone(n),s=this.font,c=Promise.resolve(),l=this.dict.get("CharProcs"),u=this.dict.get("Resources")||t,h=l.getKeys(),f=Object.create(null),d=0,g=h.length;d<g;++d)!function(){var e=h[d]
c=c.then(function(){var t=l.get(e),n=new C
return o.getOperatorList({stream:t,task:a,resources:u,operatorList:n}).then(function(){f[e]=n.getIR(),r.addDependencies(n.dependencies)}).catch(function(t){(0,i.warn)('Type3 font resource "'+e+'" is not available.')
var r=new C
f[e]=r.getIR()})})}()
return this.type3Loaded=c.then(function(){s.charProcOperatorList=f}),this.type3Loaded}},e}(),C=function(){function e(e){for(var t=[],r=e.fnArray,a=e.argsArray,n=0,o=e.length;n<o;n++)switch(r[n]){case i.OPS.paintInlineImageXObject:case i.OPS.paintInlineImageXObjectGroup:case i.OPS.paintImageMaskXObject:var s=a[n][0]
s.cached||t.push(s.data.buffer)}return t}function t(e,t,r){this.messageHandler=t,this.fnArray=[],this.argsArray=[],this.dependencies=Object.create(null),this._totalLength=0,this.pageIndex=r,this.intent=e}return t.prototype={get length(){return this.argsArray.length},get totalLength(){return this._totalLength+this.length},addOp:function(e,t){this.fnArray.push(e),this.argsArray.push(t),this.messageHandler&&(this.fnArray.length>=1e3?this.flush():this.fnArray.length>=995&&(e===i.OPS.restore||e===i.OPS.endText)&&this.flush())},addDependency:function(e){e in this.dependencies||(this.dependencies[e]=!0,this.addOp(i.OPS.dependency,[e]))},addDependencies:function(e){for(var t in e)this.addDependency(t)},addOpList:function(e){i.Util.extendObj(this.dependencies,e.dependencies)
for(var t=0,r=e.length;t<r;t++)this.addOp(e.fnArray[t],e.argsArray[t])},getIR:function(){return{fnArray:this.fnArray,argsArray:this.argsArray,length:this.length}},flush:function(t){"oplist"!==this.intent&&(new _).optimize(this)
var r=e(this),a=this.length
this._totalLength+=a,this.messageHandler.send("RenderPageChunk",{operatorList:{fnArray:this.fnArray,argsArray:this.argsArray,lastChunk:t,length:a},pageIndex:this.pageIndex,intent:this.intent},r),this.dependencies=Object.create(null),this.fnArray.length=0,this.argsArray.length=0}},t}(),x=function(){function e(e){this.state=e,this.stateStack=[]}return e.prototype={save:function(){var e=this.state
this.stateStack.push(this.state),this.state=e.clone()},restore:function(){var e=this.stateStack.pop()
e&&(this.state=e)},transform:function(e){this.state.ctm=i.Util.transform(this.state.ctm,e)}},e}(),A=function(){function e(){this.ctm=new Float32Array(i.IDENTITY_MATRIX),this.fontName=null,this.fontSize=0,this.font=null,this.fontMatrix=i.FONT_IDENTITY_MATRIX,this.textMatrix=i.IDENTITY_MATRIX.slice(),this.textLineMatrix=i.IDENTITY_MATRIX.slice(),this.charSpacing=0,this.wordSpacing=0,this.leading=0,this.textHScale=1,this.textRise=0}return e.prototype={setTextMatrix:function(e,t,r,a,i,n){var o=this.textMatrix
o[0]=e,o[1]=t,o[2]=r,o[3]=a,o[4]=i,o[5]=n},setTextLineMatrix:function(e,t,r,a,i,n){var o=this.textLineMatrix
o[0]=e,o[1]=t,o[2]=r,o[3]=a,o[4]=i,o[5]=n},translateTextMatrix:function(e,t){var r=this.textMatrix
r[4]=r[0]*e+r[2]*t+r[4],r[5]=r[1]*e+r[3]*t+r[5]},translateTextLineMatrix:function(e,t){var r=this.textLineMatrix
r[4]=r[0]*e+r[2]*t+r[4],r[5]=r[1]*e+r[3]*t+r[5]},calcTextLineMatrixAdvance:function(e,t,r,a,i,n){var o=this.font
if(!o)return null
var s=this.textLineMatrix
if(e!==s[0]||t!==s[1]||r!==s[2]||a!==s[3])return null
var c=i-s[4],l=n-s[5]
if(o.vertical&&0!==c||!o.vertical&&0!==l)return null
var u,h,f=e*a-t*r
return o.vertical?(u=-l*r/f,h=l*e/f):(u=c*a/f,h=-c*t/f),{width:u,height:h,value:o.vertical?h:u}},calcRenderMatrix:function(e){var t=[this.fontSize*this.textHScale,0,0,this.fontSize,0,this.textRise]
return i.Util.transform(e,i.Util.transform(this.textMatrix,t))},carriageReturn:function(){this.translateTextLineMatrix(0,-this.leading),this.textMatrix=this.textLineMatrix.slice()},clone:function(){var e=Object.create(this)
return e.textMatrix=this.textMatrix.slice(),e.textLineMatrix=this.textLineMatrix.slice(),e.fontMatrix=this.fontMatrix.slice(),e}},e}(),P=function(){function e(){this.ctm=new Float32Array(i.IDENTITY_MATRIX),this.font=null,this.textRenderingMode=i.TextRenderingMode.FILL,this.fillColorSpace=p.ColorSpace.singletons.gray,this.strokeColorSpace=p.ColorSpace.singletons.gray}return e.prototype={clone:function(){return Object.create(this)}},e}(),I=function(){function e(e,r,a){this.opMap=t(),this.parser=new g.Parser(new g.Lexer(e,this.opMap),!1,r),this.stateManager=a,this.nonProcessedArgs=[]}var t=(0,i.getLookupTableFactory)(function(e){e.w={id:i.OPS.setLineWidth,numArgs:1,variableArgs:!1},e.J={id:i.OPS.setLineCap,numArgs:1,variableArgs:!1},e.j={id:i.OPS.setLineJoin,numArgs:1,variableArgs:!1},e.M={id:i.OPS.setMiterLimit,numArgs:1,variableArgs:!1},e.d={id:i.OPS.setDash,numArgs:2,variableArgs:!1},e.ri={id:i.OPS.setRenderingIntent,numArgs:1,variableArgs:!1},e.i={id:i.OPS.setFlatness,numArgs:1,variableArgs:!1},e.gs={id:i.OPS.setGState,numArgs:1,variableArgs:!1},e.q={id:i.OPS.save,numArgs:0,variableArgs:!1},e.Q={id:i.OPS.restore,numArgs:0,variableArgs:!1},e.cm={id:i.OPS.transform,numArgs:6,variableArgs:!1},e.m={id:i.OPS.moveTo,numArgs:2,variableArgs:!1},e.l={id:i.OPS.lineTo,numArgs:2,variableArgs:!1},e.c={id:i.OPS.curveTo,numArgs:6,variableArgs:!1},e.v={id:i.OPS.curveTo2,numArgs:4,variableArgs:!1},e.y={id:i.OPS.curveTo3,numArgs:4,variableArgs:!1},e.h={id:i.OPS.closePath,numArgs:0,variableArgs:!1},e.re={id:i.OPS.rectangle,numArgs:4,variableArgs:!1},e.S={id:i.OPS.stroke,numArgs:0,variableArgs:!1},e.s={id:i.OPS.closeStroke,numArgs:0,variableArgs:!1},e.f={id:i.OPS.fill,numArgs:0,variableArgs:!1},e.F={id:i.OPS.fill,numArgs:0,variableArgs:!1},e["f*"]={id:i.OPS.eoFill,numArgs:0,variableArgs:!1},e.B={id:i.OPS.fillStroke,numArgs:0,variableArgs:!1},e["B*"]={id:i.OPS.eoFillStroke,numArgs:0,variableArgs:!1},e.b={id:i.OPS.closeFillStroke,numArgs:0,variableArgs:!1},e["b*"]={id:i.OPS.closeEOFillStroke,numArgs:0,variableArgs:!1},e.n={id:i.OPS.endPath,numArgs:0,variableArgs:!1},e.W={id:i.OPS.clip,numArgs:0,variableArgs:!1},e["W*"]={id:i.OPS.eoClip,numArgs:0,variableArgs:!1},e.BT={id:i.OPS.beginText,numArgs:0,variableArgs:!1},e.ET={id:i.OPS.endText,numArgs:0,variableArgs:!1},e.Tc={id:i.OPS.setCharSpacing,numArgs:1,variableArgs:!1},e.Tw={id:i.OPS.setWordSpacing,numArgs:1,variableArgs:!1},e.Tz={id:i.OPS.setHScale,numArgs:1,variableArgs:!1},e.TL={id:i.OPS.setLeading,numArgs:1,variableArgs:!1},e.Tf={id:i.OPS.setFont,numArgs:2,variableArgs:!1},e.Tr={id:i.OPS.setTextRenderingMode,numArgs:1,variableArgs:!1},e.Ts={id:i.OPS.setTextRise,numArgs:1,variableArgs:!1},e.Td={id:i.OPS.moveText,numArgs:2,variableArgs:!1},e.TD={id:i.OPS.setLeadingMoveText,numArgs:2,variableArgs:!1},e.Tm={id:i.OPS.setTextMatrix,numArgs:6,variableArgs:!1},e["T*"]={id:i.OPS.nextLine,numArgs:0,variableArgs:!1},e.Tj={id:i.OPS.showText,numArgs:1,variableArgs:!1},e.TJ={id:i.OPS.showSpacedText,numArgs:1,variableArgs:!1},e["'"]={id:i.OPS.nextLineShowText,numArgs:1,variableArgs:!1},e['"']={id:i.OPS.nextLineSetSpacingShowText,numArgs:3,variableArgs:!1},e.d0={id:i.OPS.setCharWidth,numArgs:2,variableArgs:!1},e.d1={id:i.OPS.setCharWidthAndBounds,numArgs:6,variableArgs:!1},e.CS={id:i.OPS.setStrokeColorSpace,numArgs:1,variableArgs:!1},e.cs={id:i.OPS.setFillColorSpace,numArgs:1,variableArgs:!1},e.SC={id:i.OPS.setStrokeColor,numArgs:4,variableArgs:!0},e.SCN={id:i.OPS.setStrokeColorN,numArgs:33,variableArgs:!0},e.sc={id:i.OPS.setFillColor,numArgs:4,variableArgs:!0},e.scn={id:i.OPS.setFillColorN,numArgs:33,variableArgs:!0},e.G={id:i.OPS.setStrokeGray,numArgs:1,variableArgs:!1},e.g={id:i.OPS.setFillGray,numArgs:1,variableArgs:!1},e.RG={id:i.OPS.setStrokeRGBColor,numArgs:3,variableArgs:!1},e.rg={id:i.OPS.setFillRGBColor,numArgs:3,variableArgs:!1},e.K={id:i.OPS.setStrokeCMYKColor,numArgs:4,variableArgs:!1},e.k={id:i.OPS.setFillCMYKColor,numArgs:4,variableArgs:!1},e.sh={id:i.OPS.shadingFill,numArgs:1,variableArgs:!1},e.BI={id:i.OPS.beginInlineImage,numArgs:0,variableArgs:!1},e.ID={id:i.OPS.beginImageData,numArgs:0,variableArgs:!1},e.EI={id:i.OPS.endInlineImage,numArgs:1,variableArgs:!1},e.Do={id:i.OPS.paintXObject,numArgs:1,variableArgs:!1},e.MP={id:i.OPS.markPoint,numArgs:1,variableArgs:!1},e.DP={id:i.OPS.markPointProps,numArgs:2,variableArgs:!1},e.BMC={id:i.OPS.beginMarkedContent,numArgs:1,variableArgs:!1},e.BDC={id:i.OPS.beginMarkedContentProps,numArgs:2,variableArgs:!1},e.EMC={id:i.OPS.endMarkedContent,numArgs:0,variableArgs:!1},e.BX={id:i.OPS.beginCompat,numArgs:0,variableArgs:!1},e.EX={id:i.OPS.endCompat,numArgs:0,variableArgs:!1},e.BM=null,e.BD=null,e.true=null,e.fa=null,e.fal=null,e.fals=null,e.false=null,e.nu=null,e.nul=null,e.null=null})
return e.prototype={get savedStatesDepth(){return this.stateManager.stateStack.length},read:function(e){for(var t=e.args;;){var r=this.parser.getObj()
if((0,s.isCmd)(r)){var a=r.cmd,n=this.opMap[a]
if(!n){(0,i.warn)('Unknown command "'+a+'"')
continue}var o=n.id,c=n.numArgs,l=null!==t?t.length:0
if(n.variableArgs)l>c&&(0,i.info)("Command "+o+": expected [0,"+c+"] args, but received "+l+" args.")
else{if(l!==c){for(var u=this.nonProcessedArgs;l>c;)u.push(t.shift()),l--
for(;l<c&&0!==u.length;)null===t&&(t=[]),t.unshift(u.pop()),l++}if(l<c){(0,i.warn)("Skipping command "+o+": expected "+c+" args, but received "+l+" args."),null!==t&&(t.length=0)
continue}}return this.preprocessCommand(o,t),e.fn=o,e.args=t,!0}if((0,s.isEOF)(r))return!1
if(null!==r&&(null===t&&(t=[]),t.push(r),t.length>33))throw new i.FormatError("Too many arguments")}},preprocessCommand:function(e,t){switch(0|e){case i.OPS.save:this.stateManager.save()
break
case i.OPS.restore:this.stateManager.restore()
break
case i.OPS.transform:this.stateManager.transform(t)}}},e}(),_=function(){function e(e,t,r){for(var a=e,i=0,n=t.length-1;i<n;i++){var o=t[i]
a=a[o]||(a[o]=[])}a[t[t.length-1]]=r}function t(e,t,r,a){for(var n=e+2,o=0;o<t;o++){var s=a[n+4*o],c=1===s.length&&s[0]
if(!c||1!==c.width||1!==c.height||c.data.length&&(1!==c.data.length||0!==c.data[0]))break
r[n+4*o]=i.OPS.paintSolidColorImageMask}return t-o}function r(){}var a=[]
return e(a,[i.OPS.save,i.OPS.transform,i.OPS.paintInlineImageXObject,i.OPS.restore],function(e){for(var t=e.fnArray,r=e.argsArray,a=e.iCurr,n=a-3,o=a-2,s=a-1,c=n+4,l=t.length;c+3<l&&t[c]===i.OPS.save&&t[c+1]===i.OPS.transform&&t[c+2]===i.OPS.paintInlineImageXObject&&t[c+3]===i.OPS.restore;)c+=4
var u=Math.min((c-n)/4,200)
if(u<10)return c
var h,f=0,d=[],g=0,m=1,p=1
for(h=0;h<u;h++){var b=r[o+(h<<2)],v=r[s+(h<<2)][0]
m+v.width>1e3&&(f=Math.max(f,m),p+=g+2,m=0,g=0),d.push({transform:b,x:m,y:p,w:v.width,h:v.height}),m+=v.width+2,g=Math.max(g,v.height)}var y=Math.max(f,m)+1,w=p+g+1,k=new Uint8Array(y*w*4),S=y<<2
for(h=0;h<u;h++){var C=r[s+(h<<2)][0].data,x=d[h].w<<2,A=0,P=d[h].x+d[h].y*y<<2
k.set(C.subarray(0,x),P-S)
for(var I=0,_=d[h].h;I<_;I++)k.set(C.subarray(A,A+x),P),A+=x,P+=S
for(k.set(C.subarray(A-x,A),P);P>=0;)C[P-4]=C[P],C[P-3]=C[P+1],C[P-2]=C[P+2],C[P-1]=C[P+3],C[P+x]=C[P+x-4],C[P+x+1]=C[P+x-3],C[P+x+2]=C[P+x-2],C[P+x+3]=C[P+x-1],P-=S}return t.splice(n,4*u,i.OPS.paintInlineImageXObjectGroup),r.splice(n,4*u,[{width:y,height:w,kind:i.ImageKind.RGBA_32BPP,data:k},d]),n+1}),e(a,[i.OPS.save,i.OPS.transform,i.OPS.paintImageMaskXObject,i.OPS.restore],function(e){for(var r=e.fnArray,a=e.argsArray,n=e.iCurr,o=n-3,s=n-2,c=n-1,l=o+4,u=r.length;l+3<u&&r[l]===i.OPS.save&&r[l+1]===i.OPS.transform&&r[l+2]===i.OPS.paintImageMaskXObject&&r[l+3]===i.OPS.restore;)l+=4
var h=(l-o)/4
if((h=t(o,h,r,a))<10)return l
var f,d,g,m=!1,p=a[c][0]
if(0===a[s][1]&&0===a[s][2]){m=!0
var b=a[s][0],v=a[s][3]
d=s+4
var y=c+4
for(f=1;f<h;f++,d+=4,y+=4)if(g=a[d],a[y][0]!==p||g[0]!==b||0!==g[1]||0!==g[2]||g[3]!==v){f<10?m=!1:h=f
break}}if(m){h=Math.min(h,1e3)
var w=new Float32Array(2*h)
for(d=s,f=0;f<h;f++,d+=4)g=a[d],w[f<<1]=g[4],w[1+(f<<1)]=g[5]
r.splice(o,4*h,i.OPS.paintImageMaskXObjectRepeat),a.splice(o,4*h,[p,b,v,w])}else{h=Math.min(h,100)
var k=[]
for(f=0;f<h;f++){g=a[s+(f<<2)]
var S=a[c+(f<<2)][0]
k.push({data:S.data,width:S.width,height:S.height,transform:g})}r.splice(o,4*h,i.OPS.paintImageMaskXObjectGroup),a.splice(o,4*h,[k])}return o+1}),e(a,[i.OPS.save,i.OPS.transform,i.OPS.paintImageXObject,i.OPS.restore],function(e){var t=e.fnArray,r=e.argsArray,a=e.iCurr,n=a-3,o=a-2,s=a-1,c=a
if(0!==r[o][1]||0!==r[o][2])return c+1
for(var l=r[s][0],u=r[o][0],h=r[o][3],f=n+4,d=t.length;f+3<d&&t[f]===i.OPS.save&&t[f+1]===i.OPS.transform&&t[f+2]===i.OPS.paintImageXObject&&t[f+3]===i.OPS.restore&&r[f+1][0]===u&&0===r[f+1][1]&&0===r[f+1][2]&&r[f+1][3]===h&&r[f+2][0]===l;)f+=4
var g=Math.min((f-n)/4,1e3)
if(g<3)return f
for(var m=new Float32Array(2*g),p=o,b=0;b<g;b++,p+=4){var v=r[p]
m[b<<1]=v[4],m[1+(b<<1)]=v[5]}var y=[l,u,h,m]
return t.splice(n,4*g,i.OPS.paintImageXObjectRepeat),r.splice(n,4*g,y),n+1}),e(a,[i.OPS.beginText,i.OPS.setFont,i.OPS.setTextMatrix,i.OPS.showText,i.OPS.endText],function(e){for(var t=e.fnArray,r=e.argsArray,a=e.iCurr,n=a-4,o=a-3,s=a-2,c=a-1,l=a,u=r[o][0],h=r[o][1],f=n+5,d=t.length;f+4<d&&t[f]===i.OPS.beginText&&t[f+1]===i.OPS.setFont&&t[f+2]===i.OPS.setTextMatrix&&t[f+3]===i.OPS.showText&&t[f+4]===i.OPS.endText&&r[f+1][0]===u&&r[f+1][1]===h;)f+=5
var g=Math.min((f-n)/5,1e3)
if(g<3)return f
var m=n
n>=4&&t[n-4]===t[o]&&t[n-3]===t[s]&&t[n-2]===t[c]&&t[n-1]===t[l]&&r[n-4][0]===u&&r[n-4][1]===h&&(g++,m-=5)
for(var p=m+4,b=1;b<g;b++)t.splice(p,3),r.splice(p,3),p+=2
return p+1}),r.prototype={optimize:function(e){for(var t,r=e.fnArray,i=e.argsArray,n={iCurr:0,fnArray:r,argsArray:i},o=0,s=r.length;o<s;)t=(t||a)[r[o]],"function"==typeof t?(n.iCurr=o,o=t(n),t=void 0,s=n.fnArray.length):o++}},r}()
t.OperatorList=C,t.PartialEvaluator=k},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.JpxImage=void 0
var a=r(0),i=r(52),n=function(){function e(e){this.message="JPX error: "+e}return e.prototype=new Error,e.prototype.name="JpxError",e.constructor=e,e}(),o=function(){function e(){this.failOnCorruptedImage=!1}function t(e,t){e.x0=Math.ceil(t.XOsiz/e.XRsiz),e.x1=Math.ceil(t.Xsiz/e.XRsiz),e.y0=Math.ceil(t.YOsiz/e.YRsiz),e.y1=Math.ceil(t.Ysiz/e.YRsiz),e.width=e.x1-e.x0,e.height=e.y1-e.y0}function r(e,t){for(var r,a=e.SIZ,i=[],n=Math.ceil((a.Xsiz-a.XTOsiz)/a.XTsiz),o=Math.ceil((a.Ysiz-a.YTOsiz)/a.YTsiz),s=0;s<o;s++)for(var c=0;c<n;c++)r={},r.tx0=Math.max(a.XTOsiz+c*a.XTsiz,a.XOsiz),r.ty0=Math.max(a.YTOsiz+s*a.YTsiz,a.YOsiz),r.tx1=Math.min(a.XTOsiz+(c+1)*a.XTsiz,a.Xsiz),r.ty1=Math.min(a.YTOsiz+(s+1)*a.YTsiz,a.Ysiz),r.width=r.tx1-r.tx0,r.height=r.ty1-r.ty0,r.components=[],i.push(r)
e.tiles=i
for(var l=a.Csiz,u=0,h=l;u<h;u++)for(var f=t[u],d=0,g=i.length;d<g;d++){var m={}
r=i[d],m.tcx0=Math.ceil(r.tx0/f.XRsiz),m.tcy0=Math.ceil(r.ty0/f.YRsiz),m.tcx1=Math.ceil(r.tx1/f.XRsiz),m.tcy1=Math.ceil(r.ty1/f.YRsiz),m.width=m.tcx1-m.tcx0,m.height=m.tcy1-m.tcy0,r.components[u]=m}}function o(e,t,r){var a=t.codingStyleParameters,i={}
return a.entropyCoderWithCustomPrecincts?(i.PPx=a.precinctsSizes[r].PPx,i.PPy=a.precinctsSizes[r].PPy):(i.PPx=15,i.PPy=15),i.xcb_=r>0?Math.min(a.xcb,i.PPx-1):Math.min(a.xcb,i.PPx),i.ycb_=r>0?Math.min(a.ycb,i.PPy-1):Math.min(a.ycb,i.PPy),i}function s(e,t,r){var a=1<<r.PPx,i=1<<r.PPy,n=0===t.resLevel,o=1<<r.PPx+(n?0:-1),s=1<<r.PPy+(n?0:-1),c=t.trx1>t.trx0?Math.ceil(t.trx1/a)-Math.floor(t.trx0/a):0,l=t.try1>t.try0?Math.ceil(t.try1/i)-Math.floor(t.try0/i):0,u=c*l
t.precinctParameters={precinctWidth:a,precinctHeight:i,numprecinctswide:c,numprecinctshigh:l,numprecincts:u,precinctWidthInSubband:o,precinctHeightInSubband:s}}function c(e,t,r){var a,i,n,o,s=r.xcb_,c=r.ycb_,l=1<<s,u=1<<c,h=t.tbx0>>s,f=t.tby0>>c,d=t.tbx1+l-1>>s,g=t.tby1+u-1>>c,m=t.resolution.precinctParameters,p=[],b=[]
for(i=f;i<g;i++)for(a=h;a<d;a++){n={cbx:a,cby:i,tbx0:l*a,tby0:u*i,tbx1:l*(a+1),tby1:u*(i+1)},n.tbx0_=Math.max(t.tbx0,n.tbx0),n.tby0_=Math.max(t.tby0,n.tby0),n.tbx1_=Math.min(t.tbx1,n.tbx1),n.tby1_=Math.min(t.tby1,n.tby1)
var v=Math.floor((n.tbx0_-t.tbx0)/m.precinctWidthInSubband),y=Math.floor((n.tby0_-t.tby0)/m.precinctHeightInSubband)
if(o=v+y*m.numprecinctswide,n.precinctNumber=o,n.subbandType=t.type,n.Lblock=3,!(n.tbx1_<=n.tbx0_||n.tby1_<=n.tby0_)){p.push(n)
var w=b[o]
void 0!==w?(a<w.cbxMin?w.cbxMin=a:a>w.cbxMax&&(w.cbxMax=a),i<w.cbyMin?w.cbxMin=i:i>w.cbyMax&&(w.cbyMax=i)):b[o]=w={cbxMin:a,cbyMin:i,cbxMax:a,cbyMax:i},n.precinct=w}}t.codeblockParameters={codeblockWidth:s,codeblockHeight:c,numcodeblockwide:d-h+1,numcodeblockhigh:g-f+1},t.codeblocks=p,t.precincts=b}function l(e,t,r){for(var a=[],i=e.subbands,n=0,o=i.length;n<o;n++)for(var s=i[n],c=s.codeblocks,l=0,u=c.length;l<u;l++){var h=c[l]
h.precinctNumber===t&&a.push(h)}return{layerNumber:r,codeblocks:a}}function u(e){for(var t=e.SIZ,r=e.currentTile.index,a=e.tiles[r],i=a.codingStyleDefaultParameters.layersCount,o=t.Csiz,s=0,c=0;c<o;c++)s=Math.max(s,a.components[c].codingStyleParameters.decompositionLevelsCount)
var u=0,h=0,f=0,d=0
this.nextPacket=function(){for(;u<i;u++){for(;h<=s;h++){for(;f<o;f++){var e=a.components[f]
if(!(h>e.codingStyleParameters.decompositionLevelsCount)){for(var t=e.resolutions[h],r=t.precinctParameters.numprecincts;d<r;){var c=l(t,d,u)
return d++,c}d=0}}f=0}h=0}throw new n("Out of packets")}}function h(e){for(var t=e.SIZ,r=e.currentTile.index,a=e.tiles[r],i=a.codingStyleDefaultParameters.layersCount,o=t.Csiz,s=0,c=0;c<o;c++)s=Math.max(s,a.components[c].codingStyleParameters.decompositionLevelsCount)
var u=0,h=0,f=0,d=0
this.nextPacket=function(){for(;u<=s;u++){for(;h<i;h++){for(;f<o;f++){var e=a.components[f]
if(!(u>e.codingStyleParameters.decompositionLevelsCount)){for(var t=e.resolutions[u],r=t.precinctParameters.numprecincts;d<r;){var c=l(t,d,h)
return d++,c}d=0}}f=0}h=0}throw new n("Out of packets")}}function f(e){var t,r,a,i,o=e.SIZ,s=e.currentTile.index,c=e.tiles[s],u=c.codingStyleDefaultParameters.layersCount,h=o.Csiz,f=0
for(a=0;a<h;a++){var d=c.components[a]
f=Math.max(f,d.codingStyleParameters.decompositionLevelsCount)}var g=new Int32Array(f+1)
for(r=0;r<=f;++r){var m=0
for(a=0;a<h;++a){var p=c.components[a].resolutions
r<p.length&&(m=Math.max(m,p[r].precinctParameters.numprecincts))}g[r]=m}t=0,r=0,a=0,i=0,this.nextPacket=function(){for(;r<=f;r++){for(;i<g[r];i++){for(;a<h;a++){var e=c.components[a]
if(!(r>e.codingStyleParameters.decompositionLevelsCount)){var o=e.resolutions[r],s=o.precinctParameters.numprecincts
if(!(i>=s)){for(;t<u;){var d=l(o,i,t)
return t++,d}t=0}}}a=0}i=0}throw new n("Out of packets")}}function d(e){var t=e.SIZ,r=e.currentTile.index,a=e.tiles[r],i=a.codingStyleDefaultParameters.layersCount,o=t.Csiz,s=p(a),c=s,u=0,h=0,f=0,d=0,g=0
this.nextPacket=function(){for(;g<c.maxNumHigh;g++){for(;d<c.maxNumWide;d++){for(;f<o;f++){for(var e=a.components[f],t=e.codingStyleParameters.decompositionLevelsCount;h<=t;h++){var r=e.resolutions[h],p=s.components[f].resolutions[h],b=m(d,g,p,c,r)
if(null!==b){for(;u<i;){var v=l(r,b,u)
return u++,v}u=0}}h=0}f=0}d=0}throw new n("Out of packets")}}function g(e){var t=e.SIZ,r=e.currentTile.index,a=e.tiles[r],i=a.codingStyleDefaultParameters.layersCount,o=t.Csiz,s=p(a),c=0,u=0,h=0,f=0,d=0
this.nextPacket=function(){for(;h<o;++h){for(var e=a.components[h],t=s.components[h],r=e.codingStyleParameters.decompositionLevelsCount;d<t.maxNumHigh;d++){for(;f<t.maxNumWide;f++){for(;u<=r;u++){var g=e.resolutions[u],p=t.resolutions[u],b=m(f,d,p,t,g)
if(null!==b){for(;c<i;){var v=l(g,b,c)
return c++,v}c=0}}u=0}f=0}d=0}throw new n("Out of packets")}}function m(e,t,r,a,i){var n=e*a.minWidth,o=t*a.minHeight
if(n%r.width!=0||o%r.height!=0)return null
var s=o/r.width*i.precinctParameters.numprecinctswide
return n/r.height+s}function p(e){for(var t=e.components.length,r=Number.MAX_VALUE,a=Number.MAX_VALUE,i=0,n=0,o=new Array(t),s=0;s<t;s++){for(var c=e.components[s],l=c.codingStyleParameters.decompositionLevelsCount,u=new Array(l+1),h=Number.MAX_VALUE,f=Number.MAX_VALUE,d=0,g=0,m=1,p=l;p>=0;--p){var b=c.resolutions[p],v=m*b.precinctParameters.precinctWidth,y=m*b.precinctParameters.precinctHeight
h=Math.min(h,v),f=Math.min(f,y),d=Math.max(d,b.precinctParameters.numprecinctswide),g=Math.max(g,b.precinctParameters.numprecinctshigh),u[p]={width:v,height:y},m<<=1}r=Math.min(r,h),a=Math.min(a,f),i=Math.max(i,d),n=Math.max(n,g),o[s]={resolutions:u,minWidth:h,minHeight:f,maxNumWide:d,maxNumHigh:g}}return{components:o,minWidth:r,minHeight:a,maxNumWide:i,maxNumHigh:n}}function b(e){for(var t=e.SIZ,r=e.currentTile.index,a=e.tiles[r],i=t.Csiz,l=0;l<i;l++){for(var m=a.components[l],p=m.codingStyleParameters.decompositionLevelsCount,b=[],v=[],y=0;y<=p;y++){var w=o(e,m,y),k={},S=1<<p-y
k.trx0=Math.ceil(m.tcx0/S),k.try0=Math.ceil(m.tcy0/S),k.trx1=Math.ceil(m.tcx1/S),k.try1=Math.ceil(m.tcy1/S),k.resLevel=y,s(e,k,w),b.push(k)
var C
if(0===y)C={},C.type="LL",C.tbx0=Math.ceil(m.tcx0/S),C.tby0=Math.ceil(m.tcy0/S),C.tbx1=Math.ceil(m.tcx1/S),C.tby1=Math.ceil(m.tcy1/S),C.resolution=k,c(e,C,w),v.push(C),k.subbands=[C]
else{var x=1<<p-y+1,A=[]
C={},C.type="HL",C.tbx0=Math.ceil(m.tcx0/x-.5),C.tby0=Math.ceil(m.tcy0/x),C.tbx1=Math.ceil(m.tcx1/x-.5),C.tby1=Math.ceil(m.tcy1/x),C.resolution=k,c(e,C,w),v.push(C),A.push(C),C={},C.type="LH",C.tbx0=Math.ceil(m.tcx0/x),C.tby0=Math.ceil(m.tcy0/x-.5),C.tbx1=Math.ceil(m.tcx1/x),C.tby1=Math.ceil(m.tcy1/x-.5),C.resolution=k,c(e,C,w),v.push(C),A.push(C),C={},C.type="HH",C.tbx0=Math.ceil(m.tcx0/x-.5),C.tby0=Math.ceil(m.tcy0/x-.5),C.tbx1=Math.ceil(m.tcx1/x-.5),C.tby1=Math.ceil(m.tcy1/x-.5),C.resolution=k,c(e,C,w),v.push(C),A.push(C),k.subbands=A}}m.resolutions=b,m.subbands=v}var P=a.codingStyleDefaultParameters.progressionOrder
switch(P){case 0:a.packetsIterator=new u(e)
break
case 1:a.packetsIterator=new h(e)
break
case 2:a.packetsIterator=new f(e)
break
case 3:a.packetsIterator=new d(e)
break
case 4:a.packetsIterator=new g(e)
break
default:throw new n("Unsupported progression order "+P)}}function v(e,t,r,i){function n(e){for(;h<e;){var a=t[r+u]
u++,f?(l=l<<7|a,h+=7,f=!1):(l=l<<8|a,h+=8),255===a&&(f=!0)}return h-=e,l>>>h&(1<<e)-1}function o(e){return 255===t[r+u-1]&&t[r+u]===e?(s(1),!0):255===t[r+u]&&t[r+u+1]===e&&(s(2),!0)}function s(e){u+=e}function c(){h=0,f&&(u++,f=!1)}for(var l,u=0,h=0,f=!1,d=e.currentTile.index,g=e.tiles[d],m=e.COD.sopMarkerUsed,p=e.COD.ephMarkerUsed,b=g.packetsIterator;u<i;){c(),m&&o(145)&&s(4)
var v=b.nextPacket()
if(n(1)){for(var y,w=v.layerNumber,k=[],S=0,C=v.codeblocks.length;S<C;S++){y=v.codeblocks[S]
var P=y.precinct,I=y.cbx-P.cbxMin,_=y.cby-P.cbyMin,O=!1,T=!1
if(void 0!==y.included)O=!!n(1)
else{P=y.precinct
var E,R
if(void 0!==P.inclusionTree)E=P.inclusionTree
else{var F=P.cbxMax-P.cbxMin+1,B=P.cbyMax-P.cbyMin+1
E=new A(F,B,w),R=new x(F,B),P.inclusionTree=E,P.zeroBitPlanesTree=R}if(E.reset(I,_,w))for(;;){if(!n(1)){E.incrementValue(w)
break}if(!E.nextLevel()){y.included=!0,O=T=!0
break}}}if(O){if(T){for(R=P.zeroBitPlanesTree,R.reset(I,_);;)if(n(1)){if(!R.nextLevel())break}else R.incrementValue()
y.zeroBitPlanes=R.value}for(var M=function(){if(0===n(1))return 1
if(0===n(1))return 2
var e=n(2)
return e<3?e+3:(e=n(5))<31?e+6:(e=n(7))+37}();n(1);)y.Lblock++
var D=(0,a.log2)(M),L=(M<1<<D?D-1:D)+y.Lblock,N=n(L)
k.push({codeblock:y,codingpasses:M,dataLength:N})}}for(c(),p&&o(146);k.length>0;){var U=k.shift()
y=U.codeblock,void 0===y.data&&(y.data=[]),y.data.push({data:t,start:r+u,end:r+u+U.dataLength,codingpasses:U.codingpasses}),u+=U.dataLength}}}return u}function y(e,t,r,a,n,o,s,c){for(var l=a.tbx0,u=a.tby0,h=a.tbx1-a.tbx0,f=a.codeblocks,d="H"===a.type.charAt(0)?1:0,g="H"===a.type.charAt(1)?t:0,m=0,p=f.length;m<p;++m){var b=f[m],v=b.tbx1_-b.tbx0_,y=b.tby1_-b.tby0_
if(0!==v&&0!==y&&void 0!==b.data){var w,k
w=new P(v,y,b.subbandType,b.zeroBitPlanes,o),k=2
var S,C,x,A=b.data,I=0,_=0
for(S=0,C=A.length;S<C;S++)x=A[S],I+=x.end-x.start,_+=x.codingpasses
var O=new Uint8Array(I),T=0
for(S=0,C=A.length;S<C;S++){x=A[S]
var E=x.data.subarray(x.start,x.end)
O.set(E,T),T+=E.length}var R=new i.ArithmeticDecoder(O,0,I)
for(w.setDecoder(R),S=0;S<_;S++){switch(k){case 0:w.runSignificancePropagationPass()
break
case 1:w.runMagnitudeRefinementPass()
break
case 2:w.runCleanupPass(),c&&w.checkSegmentationSymbol()}k=(k+1)%3}var F,B,M,D=b.tbx0_-l+(b.tby0_-u)*h,L=w.coefficentsSign,N=w.coefficentsMagnitude,U=w.bitsDecoded,j=s?0:.5
T=0
var q="LL"!==a.type
for(S=0;S<y;S++){var z=D/h|0,H=2*z*(t-h)+d+g
for(F=0;F<v;F++){if(0!==(B=N[T])){B=(B+j)*n,0!==L[T]&&(B=-B),M=U[T]
var W=q?H+(D<<1):D
e[W]=s&&M>=o?B:B*(1<<o-M)}D++,T++}D+=h-v}}}}function w(e,t,r){for(var a=t.components[r],i=a.codingStyleParameters,n=a.quantizationParameters,o=i.decompositionLevelsCount,s=n.SPqcds,c=n.scalarExpounded,l=n.guardBits,u=i.segmentationSymbolUsed,h=e.components[r].precision,f=i.reversibleTransformation,d=f?new O:new _,g=[],m=0,p=0;p<=o;p++){for(var b=a.resolutions[p],v=b.trx1-b.trx0,w=b.try1-b.try0,k=new Float32Array(v*w),S=0,x=b.subbands.length;S<x;S++){var A,P
c?(A=s[m].mu,P=s[m].epsilon,m++):(A=s[0].mu,P=s[0].epsilon+(p>0?1-p:0))
var I=b.subbands[S],T=C[I.type]
y(k,v,w,I,f?1:Math.pow(2,h+T-P)*(1+A/2048),l+P-1,f,u)}g.push({width:v,height:w,items:k})}var E=d.calculate(g,a.tcx0,a.tcy0)
return{left:a.tcx0,top:a.tcy0,width:E.width,height:E.height,items:E.items}}function k(e){for(var t=e.SIZ,r=e.components,a=t.Csiz,i=[],n=0,o=e.tiles.length;n<o;n++){var s,c=e.tiles[n],l=[]
for(s=0;s<a;s++)l[s]=w(e,c,s)
var u,h,f,d,g,m,p,b=l[0],v=new Uint8ClampedArray(b.items.length*a),y={left:b.left,top:b.top,width:b.width,height:b.height,items:v},k=0
if(c.codingStyleDefaultParameters.multipleComponentTransform){var S=4===a,C=l[0].items,x=l[1].items,A=l[2].items,P=S?l[3].items:null
u=r[0].precision-8,h=.5+(128<<u)
var I=c.components[0],_=a-3
if(d=C.length,I.codingStyleParameters.reversibleTransformation)for(f=0;f<d;f++,k+=_){g=C[f]+h,m=x[f],p=A[f]
var O=g-(p+m>>2)
v[k++]=O+p>>u,v[k++]=O>>u,v[k++]=O+m>>u}else for(f=0;f<d;f++,k+=_)g=C[f]+h,m=x[f],p=A[f],v[k++]=g+1.402*p>>u,v[k++]=g-.34413*m-.71414*p>>u,v[k++]=g+1.772*m>>u
if(S)for(f=0,k=3;f<d;f++,k+=4)v[k]=P[f]+h>>u}else for(s=0;s<a;s++){var T=l[s].items
for(u=r[s].precision-8,h=.5+(128<<u),k=s,f=0,d=T.length;f<d;f++)v[k]=T[f]+h>>u,k+=a}i.push(y)}return i}function S(e,t){for(var r=e.SIZ,a=r.Csiz,i=e.tiles[t],n=0;n<a;n++){var o=i.components[n],s=void 0!==e.currentTile.QCC[n]?e.currentTile.QCC[n]:e.currentTile.QCD
o.quantizationParameters=s
var c=void 0!==e.currentTile.COC[n]?e.currentTile.COC[n]:e.currentTile.COD
o.codingStyleParameters=c}i.codingStyleDefaultParameters=e.currentTile.COD}var C={LL:0,LH:1,HL:1,HH:2}
e.prototype={parse:function(e){if(65359===(0,a.readUint16)(e,0))return void this.parseCodestream(e,0,e.length)
for(var t=0,r=e.length;t<r;){var i=8,o=(0,a.readUint32)(e,t),s=(0,a.readUint32)(e,t+4)
if(t+=i,1===o&&(o=4294967296*(0,a.readUint32)(e,t)+(0,a.readUint32)(e,t+4),t+=8,i+=8),0===o&&(o=r-t+i),o<i)throw new n("Invalid box field size")
var c=o-i,l=!0
switch(s){case 1785737832:l=!1
break
case 1668246642:var u=e[t]
if(1===u){var h=(0,a.readUint32)(e,t+3)
switch(h){case 16:case 17:case 18:break
default:(0,a.warn)("Unknown colorspace "+h)}}else 2===u&&(0,a.info)("ICC profile not supported")
break
case 1785737827:this.parseCodestream(e,t,t+c)
break
case 1783636e3:218793738!==(0,a.readUint32)(e,t)&&(0,a.warn)("Invalid JP2 signature")
break
case 1783634458:case 1718909296:case 1920099697:case 1919251232:case 1768449138:break
default:var f=String.fromCharCode(s>>24&255,s>>16&255,s>>8&255,255&s);(0,a.warn)("Unsupported header type "+s+" ("+f+")")}l&&(t+=c)}},parseImageProperties:function(e){for(var t=e.getByte();t>=0;){var r=t
t=e.getByte()
if(65361===(r<<8|t)){e.skip(4)
var a=e.getInt32()>>>0,i=e.getInt32()>>>0,o=e.getInt32()>>>0,s=e.getInt32()>>>0
e.skip(16)
var c=e.getUint16()
return this.width=a-o,this.height=i-s,this.componentsCount=c,void(this.bitsPerComponent=8)}}throw new n("No size marker found in JPX stream")},parseCodestream:function(e,i,o){var s={},c=!1
try{for(var l=i;l+1<o;){var u=(0,a.readUint16)(e,l)
l+=2
var h,f,d,g,m,p,y=0
switch(u){case 65359:s.mainHeader=!0
break
case 65497:break
case 65361:y=(0,a.readUint16)(e,l)
var w={}
w.Xsiz=(0,a.readUint32)(e,l+4),w.Ysiz=(0,a.readUint32)(e,l+8),w.XOsiz=(0,a.readUint32)(e,l+12),w.YOsiz=(0,a.readUint32)(e,l+16),w.XTsiz=(0,a.readUint32)(e,l+20),w.YTsiz=(0,a.readUint32)(e,l+24),w.XTOsiz=(0,a.readUint32)(e,l+28),w.YTOsiz=(0,a.readUint32)(e,l+32)
var C=(0,a.readUint16)(e,l+36)
w.Csiz=C
var x=[]
h=l+38
for(var A=0;A<C;A++){var P={precision:1+(127&e[h]),isSigned:!!(128&e[h]),XRsiz:e[h+1],YRsiz:e[h+1]}
t(P,w),x.push(P)}s.SIZ=w,s.components=x,r(s,x),s.QCC=[],s.COC=[]
break
case 65372:y=(0,a.readUint16)(e,l)
var I={}
switch(h=l+2,31&(f=e[h++])){case 0:g=8,m=!0
break
case 1:g=16,m=!1
break
case 2:g=16,m=!0
break
default:throw new Error("Invalid SQcd value "+f)}for(I.noQuantization=8===g,I.scalarExpounded=m,I.guardBits=f>>5,d=[];h<y+l;){var _={}
8===g?(_.epsilon=e[h++]>>3,_.mu=0):(_.epsilon=e[h]>>3,_.mu=(7&e[h])<<8|e[h+1],h+=2),d.push(_)}I.SPqcds=d,s.mainHeader?s.QCD=I:(s.currentTile.QCD=I,s.currentTile.QCC=[])
break
case 65373:y=(0,a.readUint16)(e,l)
var O={}
h=l+2
var T
switch(s.SIZ.Csiz<257?T=e[h++]:(T=(0,a.readUint16)(e,h),h+=2),31&(f=e[h++])){case 0:g=8,m=!0
break
case 1:g=16,m=!1
break
case 2:g=16,m=!0
break
default:throw new Error("Invalid SQcd value "+f)}for(O.noQuantization=8===g,O.scalarExpounded=m,O.guardBits=f>>5,d=[];h<y+l;)_={},8===g?(_.epsilon=e[h++]>>3,_.mu=0):(_.epsilon=e[h]>>3,_.mu=(7&e[h])<<8|e[h+1],h+=2),d.push(_)
O.SPqcds=d,s.mainHeader?s.QCC[T]=O:s.currentTile.QCC[T]=O
break
case 65362:y=(0,a.readUint16)(e,l)
var E={}
h=l+2
var R=e[h++]
E.entropyCoderWithCustomPrecincts=!!(1&R),E.sopMarkerUsed=!!(2&R),E.ephMarkerUsed=!!(4&R),E.progressionOrder=e[h++],E.layersCount=(0,a.readUint16)(e,h),h+=2,E.multipleComponentTransform=e[h++],E.decompositionLevelsCount=e[h++],E.xcb=2+(15&e[h++]),E.ycb=2+(15&e[h++])
var F=e[h++]
if(E.selectiveArithmeticCodingBypass=!!(1&F),E.resetContextProbabilities=!!(2&F),E.terminationOnEachCodingPass=!!(4&F),E.verticalyStripe=!!(8&F),E.predictableTermination=!!(16&F),E.segmentationSymbolUsed=!!(32&F),E.reversibleTransformation=e[h++],E.entropyCoderWithCustomPrecincts){for(var B=[];h<y+l;){var M=e[h++]
B.push({PPx:15&M,PPy:M>>4})}E.precinctsSizes=B}var D=[]
if(E.selectiveArithmeticCodingBypass&&D.push("selectiveArithmeticCodingBypass"),E.resetContextProbabilities&&D.push("resetContextProbabilities"),E.terminationOnEachCodingPass&&D.push("terminationOnEachCodingPass"),E.verticalyStripe&&D.push("verticalyStripe"),E.predictableTermination&&D.push("predictableTermination"),D.length>0)throw c=!0,new Error("Unsupported COD options ("+D.join(", ")+")")
s.mainHeader?s.COD=E:(s.currentTile.COD=E,s.currentTile.COC=[])
break
case 65424:y=(0,a.readUint16)(e,l),p={},p.index=(0,a.readUint16)(e,l+2),p.length=(0,a.readUint32)(e,l+4),p.dataEnd=p.length+l-2,p.partIndex=e[l+8],p.partsCount=e[l+9],s.mainHeader=!1,0===p.partIndex&&(p.COD=s.COD,p.COC=s.COC.slice(0),p.QCD=s.QCD,p.QCC=s.QCC.slice(0)),s.currentTile=p
break
case 65427:p=s.currentTile,0===p.partIndex&&(S(s,p.index),b(s)),y=p.dataEnd-l,v(s,e,l,y)
break
case 65365:case 65367:case 65368:case 65380:y=(0,a.readUint16)(e,l)
break
case 65363:throw new Error("Codestream code 0xFF53 (COC) is not implemented")
default:throw new Error("Unknown codestream code: "+u.toString(16))}l+=y}}catch(e){if(c||this.failOnCorruptedImage)throw new n(e.message);(0,a.warn)("JPX: Trying to recover from: "+e.message)}this.tiles=k(s),this.width=s.SIZ.Xsiz-s.SIZ.XOsiz,this.height=s.SIZ.Ysiz-s.SIZ.YOsiz,this.componentsCount=s.SIZ.Csiz}}
var x=function(){function e(e,t){var r=(0,a.log2)(Math.max(e,t))+1
this.levels=[]
for(var i=0;i<r;i++){var n={width:e,height:t,items:[]}
this.levels.push(n),e=Math.ceil(e/2),t=Math.ceil(t/2)}}return e.prototype={reset:function(e,t){for(var r,a=0,i=0;a<this.levels.length;){r=this.levels[a]
var n=e+t*r.width
if(void 0!==r.items[n]){i=r.items[n]
break}r.index=n,e>>=1,t>>=1,a++}a--,r=this.levels[a],r.items[r.index]=i,this.currentLevel=a,delete this.value},incrementValue:function(){var e=this.levels[this.currentLevel]
e.items[e.index]++},nextLevel:function(){var e=this.currentLevel,t=this.levels[e],r=t.items[t.index]
return--e<0?(this.value=r,!1):(this.currentLevel=e,t=this.levels[e],t.items[t.index]=r,!0)}},e}(),A=function(){function e(e,t,r){var i=(0,a.log2)(Math.max(e,t))+1
this.levels=[]
for(var n=0;n<i;n++){for(var o=new Uint8Array(e*t),s=0,c=o.length;s<c;s++)o[s]=r
var l={width:e,height:t,items:o}
this.levels.push(l),e=Math.ceil(e/2),t=Math.ceil(t/2)}}return e.prototype={reset:function(e,t,r){for(var a=0;a<this.levels.length;){var i=this.levels[a],n=e+t*i.width
i.index=n
var o=i.items[n]
if(255===o)break
if(o>r)return this.currentLevel=a,this.propagateValues(),!1
e>>=1,t>>=1,a++}return this.currentLevel=a-1,!0},incrementValue:function(e){var t=this.levels[this.currentLevel]
t.items[t.index]=e+1,this.propagateValues()},propagateValues:function(){for(var e=this.currentLevel,t=this.levels[e],r=t.items[t.index];--e>=0;)t=this.levels[e],t.items[t.index]=r},nextLevel:function(){var e=this.currentLevel,t=this.levels[e],r=t.items[t.index]
return t.items[t.index]=255,!(--e<0)&&(this.currentLevel=e,t=this.levels[e],t.items[t.index]=r,!0)}},e}(),P=function(){function e(e,i,n,o,s){this.width=e,this.height=i,this.contextLabelTable="HH"===n?a:"HL"===n?r:t
var c=e*i
this.neighborsSignificance=new Uint8Array(c),this.coefficentsSign=new Uint8Array(c),this.coefficentsMagnitude=s>14?new Uint32Array(c):s>6?new Uint16Array(c):new Uint8Array(c),this.processingFlags=new Uint8Array(c)
var l=new Uint8Array(c)
if(0!==o)for(var u=0;u<c;u++)l[u]=o
this.bitsDecoded=l,this.reset()}var t=new Uint8Array([0,5,8,0,3,7,8,0,4,7,8,0,0,0,0,0,1,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8]),r=new Uint8Array([0,3,4,0,5,7,7,0,8,8,8,0,0,0,0,0,1,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8]),a=new Uint8Array([0,1,2,0,1,2,2,0,2,2,2,0,0,0,0,0,3,4,5,0,4,5,5,0,5,5,5,0,0,0,0,0,6,7,7,0,7,7,7,0,7,7,7,0,0,0,0,0,8,8,8,0,8,8,8,0,8,8,8,0,0,0,0,0,8,8,8,0,8,8,8,0,8,8,8])
return e.prototype={setDecoder:function(e){this.decoder=e},reset:function(){this.contexts=new Int8Array(19),this.contexts[0]=8,this.contexts[17]=92,this.contexts[18]=6},setNeighborsSignificance:function(e,t,r){var a,i=this.neighborsSignificance,n=this.width,o=this.height,s=t>0,c=t+1<n
e>0&&(a=r-n,s&&(i[a-1]+=16),c&&(i[a+1]+=16),i[a]+=4),e+1<o&&(a=r+n,s&&(i[a-1]+=16),c&&(i[a+1]+=16),i[a]+=4),s&&(i[r-1]+=1),c&&(i[r+1]+=1),i[r]|=128},runSignificancePropagationPass:function(){for(var e=this.decoder,t=this.width,r=this.height,a=this.coefficentsMagnitude,i=this.coefficentsSign,n=this.neighborsSignificance,o=this.processingFlags,s=this.contexts,c=this.contextLabelTable,l=this.bitsDecoded,u=0;u<r;u+=4)for(var h=0;h<t;h++)for(var f=u*t+h,d=0;d<4;d++,f+=t){var g=u+d
if(g>=r)break
if(o[f]&=-2,!a[f]&&n[f]){var m=c[n[f]],p=e.readBit(s,m)
if(p){var b=this.decodeSignBit(g,h,f)
i[f]=b,a[f]=1,this.setNeighborsSignificance(g,h,f),o[f]|=2}l[f]++,o[f]|=1}}},decodeSignBit:function(e,t,r){var a,i,n,o,s,c,l=this.width,u=this.height,h=this.coefficentsMagnitude,f=this.coefficentsSign
o=t>0&&0!==h[r-1],t+1<l&&0!==h[r+1]?(n=f[r+1],o?(i=f[r-1],a=1-n-i):a=1-n-n):o?(i=f[r-1],a=1-i-i):a=0
var d=3*a
return o=e>0&&0!==h[r-l],e+1<u&&0!==h[r+l]?(n=f[r+l],o?(i=f[r-l],a=1-n-i+d):a=1-n-n+d):o?(i=f[r-l],a=1-i-i+d):a=d,a>=0?(s=9+a,c=this.decoder.readBit(this.contexts,s)):(s=9-a,c=1^this.decoder.readBit(this.contexts,s)),c},runMagnitudeRefinementPass:function(){for(var e,t=this.decoder,r=this.width,a=this.height,i=this.coefficentsMagnitude,n=this.neighborsSignificance,o=this.contexts,s=this.bitsDecoded,c=this.processingFlags,l=r*a,u=4*r,h=0;h<l;h=e){e=Math.min(l,h+u)
for(var f=0;f<r;f++)for(var d=h+f;d<e;d+=r)if(i[d]&&0==(1&c[d])){var g=16
if(0!=(2&c[d])){c[d]^=2
var m=127&n[d]
g=0===m?15:14}var p=t.readBit(o,g)
i[d]=i[d]<<1|p,s[d]++,c[d]|=1}}},runCleanupPass:function(){for(var e,t=this.decoder,r=this.width,a=this.height,i=this.neighborsSignificance,n=this.coefficentsMagnitude,o=this.coefficentsSign,s=this.contexts,c=this.contextLabelTable,l=this.bitsDecoded,u=this.processingFlags,h=r,f=2*r,d=3*r,g=0;g<a;g=e){e=Math.min(g+4,a)
for(var m=g*r,p=g+3<a,b=0;b<r;b++){var v,y=m+b,w=p&&0===u[y]&&0===u[y+h]&&0===u[y+f]&&0===u[y+d]&&0===i[y]&&0===i[y+h]&&0===i[y+f]&&0===i[y+d],k=0,S=y,C=g
if(w){if(!t.readBit(s,18)){l[y]++,l[y+h]++,l[y+f]++,l[y+d]++
continue}k=t.readBit(s,17)<<1|t.readBit(s,17),0!==k&&(C=g+k,S+=k*r),v=this.decodeSignBit(C,b,S),o[S]=v,n[S]=1,this.setNeighborsSignificance(C,b,S),u[S]|=2,S=y
for(var x=g;x<=C;x++,S+=r)l[S]++
k++}for(C=g+k;C<e;C++,S+=r)if(!n[S]&&0==(1&u[S])){var A=c[i[S]],P=t.readBit(s,A)
1===P&&(v=this.decodeSignBit(C,b,S),o[S]=v,n[S]=1,this.setNeighborsSignificance(C,b,S),u[S]|=2),l[S]++}}}},checkSegmentationSymbol:function(){var e=this.decoder,t=this.contexts
if(10!=(e.readBit(t,17)<<3|e.readBit(t,17)<<2|e.readBit(t,17)<<1|e.readBit(t,17)))throw new n("Invalid segmentation symbol")}},e}(),I=function(){function e(){}return e.prototype.calculate=function(e,t,r){for(var a=e[0],i=1,n=e.length;i<n;i++)a=this.iterate(a,e[i],t,r)
return a},e.prototype.extend=function(e,t,r){var a=t-1,i=t+1,n=t+r-2,o=t+r
e[a--]=e[i++],e[o++]=e[n--],e[a--]=e[i++],e[o++]=e[n--],e[a--]=e[i++],e[o++]=e[n--],e[a]=e[i],e[o]=e[n]},e.prototype.iterate=function(e,t,r,a){var i,n,o,s,c,l,u=e.width,h=e.height,f=e.items,d=t.width,g=t.height,m=t.items
for(o=0,i=0;i<h;i++)for(s=2*i*d,n=0;n<u;n++,o++,s+=2)m[s]=f[o]
f=e.items=null
var p=new Float32Array(d+8)
if(1===d){if(0!=(1&r))for(l=0,o=0;l<g;l++,o+=d)m[o]*=.5}else for(l=0,o=0;l<g;l++,o+=d)p.set(m.subarray(o,o+d),4),this.extend(p,4,d),this.filter(p,4,d),m.set(p.subarray(4,4+d),o)
var b=16,v=[]
for(i=0;i<b;i++)v.push(new Float32Array(g+8))
var y,w=0
if(e=4+g,1===g){if(0!=(1&a))for(c=0;c<d;c++)m[c]*=.5}else for(c=0;c<d;c++){if(0===w){for(b=Math.min(d-c,b),o=c,s=4;s<e;o+=d,s++)for(y=0;y<b;y++)v[y][s]=m[o+y]
w=b}w--
var k=v[w]
if(this.extend(k,4,g),this.filter(k,4,g),0===w)for(o=c-b+1,s=4;s<e;o+=d,s++)for(y=0;y<b;y++)m[o+y]=v[y][s]}return{width:d,height:g,items:m}},e}(),_=function(){function e(){I.call(this)}return e.prototype=Object.create(I.prototype),e.prototype.filter=function(e,t,r){var a=r>>1
t|=0
var i,n,o,s,c=-1.586134342059924,l=-.052980118572961,u=.882911075530934,h=.443506852043971,f=1.230174104914001
for(i=t-3,n=a+4;n--;i+=2)e[i]*=.8128930661159609
for(i=t-2,o=h*e[i-1],n=a+3;n--&&(s=h*e[i+1],e[i]=f*e[i]-o-s,n--);i+=2)i+=2,o=h*e[i+1],e[i]=f*e[i]-o-s
for(i=t-1,o=u*e[i-1],n=a+2;n--&&(s=u*e[i+1],e[i]-=o+s,n--);i+=2)i+=2,o=u*e[i+1],e[i]-=o+s
for(i=t,o=l*e[i-1],n=a+1;n--&&(s=l*e[i+1],e[i]-=o+s,n--);i+=2)i+=2,o=l*e[i+1],e[i]-=o+s
if(0!==a)for(i=t+1,o=c*e[i-1],n=a;n--&&(s=c*e[i+1],e[i]-=o+s,n--);i+=2)i+=2,o=c*e[i+1],e[i]-=o+s},e}(),O=function(){function e(){I.call(this)}return e.prototype=Object.create(I.prototype),e.prototype.filter=function(e,t,r){var a=r>>1
t|=0
var i,n
for(i=t,n=a+1;n--;i+=2)e[i]-=e[i-1]+e[i+1]+2>>2
for(i=t+1,n=a;n--;i+=2)e[i]+=e[i-1]+e[i+1]>>1},e}()
return e}()
t.JpxImage=o},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.FileSpec=t.XRef=t.ObjectLoader=t.Catalog=void 0
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){var r=[],a=!0,i=!1,n=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw n}}return r}return function(t,r){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,r)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=r(0),o=r(1),s=r(23),c=r(54),l=r(55),u=r(15),h=function(){function e(e,t,r){if(this.pdfManager=e,this.xref=t,this.catDict=t.getCatalogObj(),!(0,o.isDict)(this.catDict))throw new n.FormatError("catalog object is not a dictionary")
this.fontCache=new o.RefSetCache,this.builtInCMapCache=Object.create(null),this.pageKidsCountCache=new o.RefSetCache,this.pageFactory=r,this.pagePromises=[]}return e.prototype={get metadata(){var e=this.catDict.getRaw("Metadata")
if(!(0,o.isRef)(e))return(0,n.shadow)(this,"metadata",null)
var t,r=!!this.xref.encrypt&&this.xref.encrypt.encryptMetadata,a=this.xref.fetch(e,!r)
if(a&&(0,o.isDict)(a.dict)){var i=a.dict.get("Type"),s=a.dict.get("Subtype")
if((0,o.isName)(i,"Metadata")&&(0,o.isName)(s,"XML"))try{t=(0,n.stringToUTF8String)((0,n.bytesToString)(a.getBytes()))}catch(e){if(e instanceof n.MissingDataException)throw e;(0,n.info)("Skipping invalid metadata.")}}return(0,n.shadow)(this,"metadata",t)},get toplevelPagesDict(){var e=this.catDict.get("Pages")
if(!(0,o.isDict)(e))throw new n.FormatError("invalid top-level pages dictionary")
return(0,n.shadow)(this,"toplevelPagesDict",e)},get documentOutline(){var e=null
try{e=this.readDocumentOutline()}catch(e){if(e instanceof n.MissingDataException)throw e;(0,n.warn)("Unable to read document outline")}return(0,n.shadow)(this,"documentOutline",e)},readDocumentOutline:function(){var t=this.catDict.get("Outlines")
if(!(0,o.isDict)(t))return null
if(t=t.getRaw("First"),!(0,o.isRef)(t))return null
var r={items:[]},a=[{obj:t,parent:r}],i=new o.RefSet
i.put(t)
for(var s=this.xref,c=new Uint8Array(3);a.length>0;){var l=a.shift(),h=s.fetchIfRef(l.obj)
if(null!==h){if(!h.has("Title"))throw new n.FormatError("Invalid outline item")
var f={url:null,dest:null}
e.parseDestDictionary({destDict:h,resultObj:f,docBaseUrl:this.pdfManager.docBaseUrl})
var d=h.get("Title"),g=h.get("F")||0,m=h.getArray("C"),p=c
!(0,n.isArray)(m)||3!==m.length||0===m[0]&&0===m[1]&&0===m[2]||(p=u.ColorSpace.singletons.rgb.getRgb(m,0))
var b={dest:f.dest,url:f.url,unsafeUrl:f.unsafeUrl,newWindow:f.newWindow,title:(0,n.stringToPDFString)(d),color:p,count:h.get("Count"),bold:!!(2&g),italic:!!(1&g),items:[]}
l.parent.items.push(b),t=h.getRaw("First"),(0,o.isRef)(t)&&!i.has(t)&&(a.push({obj:t,parent:b}),i.put(t)),t=h.getRaw("Next"),(0,o.isRef)(t)&&!i.has(t)&&(a.push({obj:t,parent:l.parent}),i.put(t))}}return r.items.length>0?r.items:null},get numPages(){var e=this.toplevelPagesDict.get("Count")
if(!(0,n.isInt)(e))throw new n.FormatError("page count in top level pages object is not an integer")
return(0,n.shadow)(this,"numPages",e)},get destinations(){function e(e){return(0,o.isDict)(e)?e.get("D"):e}var t,r,a=this.xref,i={},s=this.catDict.get("Names")
if(s&&s.has("Dests")?t=s.getRaw("Dests"):this.catDict.has("Dests")&&(r=this.catDict.get("Dests")),r&&(s=r,s.forEach(function(t,r){r&&(i[t]=e(r))})),t){var c=new g(t,a),l=c.getAll()
for(var u in l)i[u]=e(l[u])}return(0,n.shadow)(this,"destinations",i)},getDestination:function(e){function t(e){return(0,o.isDict)(e)?e.get("D"):e}var r,a,i=this.xref,n=null,s=this.catDict.get("Names")
if(s&&s.has("Dests")?r=s.getRaw("Dests"):this.catDict.has("Dests")&&(a=this.catDict.get("Dests")),a){var c=a.get(e)
c&&(n=t(c))}if(r){n=t(new g(r,i).get(e))}return n},get pageLabels(){var e=null
try{e=this.readPageLabels()}catch(e){if(e instanceof n.MissingDataException)throw e;(0,n.warn)("Unable to read page labels.")}return(0,n.shadow)(this,"pageLabels",e)},readPageLabels:function(){var e=this.catDict.getRaw("PageLabels")
if(!e)return null
for(var t=new Array(this.numPages),r=null,a="",i=new m(e,this.xref),s=i.getAll(),c="",l=1,u=0,h=this.numPages;u<h;u++){if(u in s){var f=s[u]
if(!(0,o.isDict)(f))throw new n.FormatError("The PageLabel is not a dictionary.")
var d=f.get("Type")
if(d&&!(0,o.isName)(d,"PageLabel"))throw new n.FormatError("Invalid type in PageLabel dictionary.")
var g=f.get("S")
if(g&&!(0,o.isName)(g))throw new n.FormatError("Invalid style in PageLabel dictionary.")
r=g?g.name:null
var p=f.get("P")
if(p&&!(0,n.isString)(p))throw new n.FormatError("Invalid prefix in PageLabel dictionary.")
a=p?(0,n.stringToPDFString)(p):""
var b=f.get("St")
if(b&&!((0,n.isInt)(b)&&b>=1))throw new n.FormatError("Invalid start in PageLabel dictionary.")
l=b||1}switch(r){case"D":c=l
break
case"R":case"r":c=n.Util.toRoman(l,"r"===r)
break
case"A":case"a":for(var v="a"===r?97:65,y=l-1,w=String.fromCharCode(v+y%26),k=[],S=0,C=y/26|0;S<=C;S++)k.push(w)
c=k.join("")
break
default:if(r)throw new n.FormatError('Invalid style "'+r+'" in PageLabel dictionary.')}t[u]=a+c,c="",l++}return t},get pageMode(){var e=this.catDict.get("PageMode"),t="UseNone"
if((0,o.isName)(e))switch(e.name){case"UseNone":case"UseOutlines":case"UseThumbs":case"FullScreen":case"UseOC":case"UseAttachments":t=e.name}return(0,n.shadow)(this,"pageMode",t)},get attachments(){var e,t=this.xref,r=null,a=this.catDict.get("Names")
if(a&&(e=a.getRaw("EmbeddedFiles")),e){var i=new g(e,t),o=i.getAll()
for(var s in o){var c=new p(o[s],t)
r||(r=Object.create(null)),r[(0,n.stringToPDFString)(s)]=c.serializable}}return(0,n.shadow)(this,"attachments",r)},get javaScript(){function e(e){var t=e.get("S")
if((0,o.isName)(t,"JavaScript")){var r=e.get("JS")
if((0,o.isStream)(r))r=(0,n.bytesToString)(r.getBytes())
else if(!(0,n.isString)(r))return
a.push((0,n.stringToPDFString)(r))}}var t=this.xref,r=this.catDict.get("Names"),a=[]
if(r&&r.has("JavaScript")){var i=new g(r.getRaw("JavaScript"),t),s=i.getAll()
for(var c in s){var l=s[c];(0,o.isDict)(l)&&e(l)}}var u=this.catDict.get("OpenAction")
if((0,o.isDict)(u,"Action")){var h=u.get("S")
if((0,o.isName)(h,"Named")){var f=u.get("N");(0,o.isName)(f,"Print")&&a.push("print({});")}else e(u)}return(0,n.shadow)(this,"javaScript",a)},cleanup:function(){var e=this
this.pageKidsCountCache.clear()
var t=[]
return this.fontCache.forEach(function(e){t.push(e)}),Promise.all(t).then(function(t){for(var r=0,a=t.length;r<a;r++){delete t[r].dict.translated}e.fontCache.clear(),e.builtInCMapCache=Object.create(null)})},getPage:function(e){var t=this
return e in this.pagePromises||(this.pagePromises[e]=this.getPageDict(e).then(function(r){var a=i(r,2),n=a[0],o=a[1]
return t.pageFactory.createPage(e,n,o,t.fontCache,t.builtInCMapCache)})),this.pagePromises[e]},getPageDict:function(e){function t(){for(;i.length;){var u=i.pop()
if((0,o.isRef)(u)){if((r=l.get(u))>0&&s+r<e){s+=r
continue}return void c.fetchAsync(u).then(function(r){if((0,o.isDict)(r,"Page")||(0,o.isDict)(r)&&!r.has("Kids"))return void(e===s?(u&&!l.has(u)&&l.put(u,1),a.resolve([r,u])):(s++,t()))
i.push(r),t()},a.reject)}if(!(0,o.isDict)(u))return void a.reject(new n.FormatError("page dictionary kid reference points to wrong type of object"))
r=u.get("Count")
var h=u.objId
if(h&&!l.has(h)&&l.put(h,r),s+r<=e)s+=r
else{var f=u.get("Kids")
if(!(0,n.isArray)(f))return void a.reject(new n.FormatError("page dictionary kids object is not an array"))
for(var d=f.length-1;d>=0;d--)i.push(f[d])}}a.reject(new Error("Page index "+e+" not found."))}var r,a=(0,n.createPromiseCapability)(),i=[this.catDict.getRaw("Pages")],s=0,c=this.xref,l=this.pageKidsCountCache
return t(),a.promise},getPageIndex:function(e){function t(t){var r,i=0
return a.fetchAsync(t).then(function(a){if((0,o.isRefsEqual)(t,e)&&!(0,o.isDict)(a,"Page")&&(!(0,o.isDict)(a)||a.has("Type")||!a.has("Contents")))throw new n.FormatError("The reference does not point to a /Page Dict.")
if(!a)return null
if(!(0,o.isDict)(a))throw new n.FormatError("node must be a Dict.")
return r=a.getRaw("Parent"),a.getAsync("Parent")}).then(function(e){if(!e)return null
if(!(0,o.isDict)(e))throw new n.FormatError("parent must be a Dict.")
return e.getAsync("Kids")}).then(function(e){if(!e)return null
for(var s=[],c=!1,l=0;l<e.length;l++){var u=e[l]
if(!(0,o.isRef)(u))throw new n.FormatError("kid must be a Ref.")
if(u.num===t.num){c=!0
break}s.push(a.fetchAsync(u).then(function(e){if(e.has("Count")){var t=e.get("Count")
i+=t}else i++}))}if(!c)throw new n.FormatError("kid ref not found in parents kids")
return Promise.all(s).then(function(){return[i,r]})})}function r(e){return t(e).then(function(e){if(!e)return i
var t=e[0],a=e[1]
return i+=t,r(a)})}var a=this.xref,i=0
return r(e)}},e.parseDestDictionary=function(e){var t=e.destDict
if(!(0,o.isDict)(t))return void(0,n.warn)('parseDestDictionary: "destDict" must be a dictionary.')
var r=e.resultObj
if("object"!==(void 0===r?"undefined":a(r)))return void(0,n.warn)('parseDestDictionary: "resultObj" must be an object.')
var i,s,c=e.docBaseUrl||null,l=t.get("A")
if(!(0,o.isDict)(l)&&t.has("Dest")&&(l=t.get("Dest")),(0,o.isDict)(l)){var u=l.get("S")
if(!(0,o.isName)(u))return void(0,n.warn)("parseDestDictionary: Invalid type in Action dictionary.")
var h=u.name
switch(h){case"URI":i=l.get("URI"),(0,o.isName)(i)?i="/"+i.name:(0,n.isString)(i)&&(i=function(e){return 0===e.indexOf("www.")?"http://"+e:e}(i))
break
case"GoTo":s=l.get("D")
break
case"Launch":case"GoToR":var f=l.get("F");(0,o.isDict)(f)?i=f.get("F")||null:(0,n.isString)(f)&&(i=f)
var d=l.get("D")
if(d&&((0,o.isName)(d)&&(d=d.name),(0,n.isString)(i))){var g=i.split("#")[0];(0,n.isString)(d)?i=g+"#"+d:(0,n.isArray)(d)&&(i=g+"#"+JSON.stringify(d))}var m=l.get("NewWindow");(0,n.isBool)(m)&&(r.newWindow=m)
break
case"Named":var p=l.get("N");(0,o.isName)(p)&&(r.action=p.name)
break
case"JavaScript":var b,v=l.get("JS")
if((0,o.isStream)(v)?b=(0,n.bytesToString)(v.getBytes()):(0,n.isString)(v)&&(b=v),b){var y=["app.launchURL","window.open"],w=new RegExp("^\\s*("+y.join("|").split(".").join("\\.")+")\\((?:'|\")([^'\"]*)(?:'|\")(?:,\\s*(\\w+)\\)|\\))","i"),k=w.exec((0,n.stringToPDFString)(b))
if(k&&k[2]){i=k[2],"true"===k[3]&&"app.launchURL"===k[1]&&(r.newWindow=!0)
break}}default:(0,n.warn)('parseDestDictionary: Unsupported Action type "'+h+'".')}}else t.has("Dest")&&(s=t.get("Dest"))
if((0,n.isString)(i)){i=function(e){try{return(0,n.stringToUTF8String)(e)}catch(t){return e}}(i)
var S=(0,n.createValidAbsoluteUrl)(i,c)
S&&(r.url=S.href),r.unsafeUrl=i}s&&((0,o.isName)(s)&&(s=s.name),((0,n.isString)(s)||(0,n.isArray)(s))&&(r.dest=s))},e}(),f=function(){function e(e,t){this.stream=e,this.pdfManager=t,this.entries=[],this.xrefstms=Object.create(null),this.cache=[],this.stats={streamTypes:[],fontTypes:[]}}return e.prototype={setStartXRef:function(e){this.startXRefQueue=[e]},parse:function(e){var t
e?((0,n.warn)("Indexing all PDF objects"),t=this.indexObjects()):t=this.readXRef(),t.assignXref(this),this.trailer=t
var r=t.get("Encrypt")
if((0,o.isDict)(r)){var a=t.get("ID"),i=a&&a.length?a[0]:""
r.suppressEncryption=!0,this.encrypt=new l.CipherTransformFactory(r,i,this.pdfManager.password)}if(!(this.root=t.get("Root")))throw new n.FormatError("Invalid root reference")},processXRefTable:function(e){"tableState"in this||(this.tableState={entryNum:0,streamPos:e.lexer.stream.pos,parserBuf1:e.buf1,parserBuf2:e.buf2})
var t=this.readXRefTable(e)
if(!(0,o.isCmd)(t,"trailer"))throw new n.FormatError("Invalid XRef table: could not find trailer dictionary")
var r=e.getObj()
if(!(0,o.isDict)(r)&&r.dict&&(r=r.dict),!(0,o.isDict)(r))throw new n.FormatError("Invalid XRef table: could not parse trailer dictionary")
return delete this.tableState,r},readXRefTable:function(e){var t=e.lexer.stream,r=this.tableState
t.pos=r.streamPos,e.buf1=r.parserBuf1,e.buf2=r.parserBuf2
for(var a;;){if(!("firstEntryNum"in r&&"entryCount"in r)){if((0,o.isCmd)(a=e.getObj(),"trailer"))break
r.firstEntryNum=a,r.entryCount=e.getObj()}var i=r.firstEntryNum,s=r.entryCount
if(!(0,n.isInt)(i)||!(0,n.isInt)(s))throw new n.FormatError("Invalid XRef table: wrong types in subsection header")
for(var c=r.entryNum;c<s;c++){r.streamPos=t.pos,r.entryNum=c,r.parserBuf1=e.buf1,r.parserBuf2=e.buf2
var l={}
l.offset=e.getObj(),l.gen=e.getObj()
var u=e.getObj()
if((0,o.isCmd)(u,"f")?l.free=!0:(0,o.isCmd)(u,"n")&&(l.uncompressed=!0),!(0,n.isInt)(l.offset)||!(0,n.isInt)(l.gen)||!l.free&&!l.uncompressed)throw new n.FormatError("Invalid entry in XRef subsection: "+i+", "+s)
0===c&&l.free&&1===i&&(i=0),this.entries[c+i]||(this.entries[c+i]=l)}r.entryNum=0,r.streamPos=t.pos,r.parserBuf1=e.buf1,r.parserBuf2=e.buf2,delete r.firstEntryNum,delete r.entryCount}if(this.entries[0]&&!this.entries[0].free)throw new n.FormatError("Invalid XRef table: unexpected first object")
return a},processXRefStream:function(e){if(!("streamState"in this)){var t=e.dict,r=t.get("W"),a=t.get("Index")
a||(a=[0,t.get("Size")]),this.streamState={entryRanges:a,byteWidths:r,entryNum:0,streamPos:e.pos}}return this.readXRefStream(e),delete this.streamState,e.dict},readXRefStream:function(e){var t,r,a=this.streamState
e.pos=a.streamPos
for(var i=a.byteWidths,o=i[0],s=i[1],c=i[2],l=a.entryRanges;l.length>0;){var u=l[0],h=l[1]
if(!(0,n.isInt)(u)||!(0,n.isInt)(h))throw new n.FormatError("Invalid XRef range fields: "+u+", "+h)
if(!(0,n.isInt)(o)||!(0,n.isInt)(s)||!(0,n.isInt)(c))throw new n.FormatError("Invalid XRef entry fields length: "+u+", "+h)
for(t=a.entryNum;t<h;++t){a.entryNum=t,a.streamPos=e.pos
var f=0,d=0,g=0
for(r=0;r<o;++r)f=f<<8|e.getByte()
for(0===o&&(f=1),r=0;r<s;++r)d=d<<8|e.getByte()
for(r=0;r<c;++r)g=g<<8|e.getByte()
var m={}
switch(m.offset=d,m.gen=g,f){case 0:m.free=!0
break
case 1:m.uncompressed=!0
break
case 2:break
default:throw new n.FormatError("Invalid XRef entry type: "+f)}this.entries[u+t]||(this.entries[u+t]=m)}a.entryNum=0,a.streamPos=e.pos,l.splice(0,2)}},indexObjects:function(){function e(e,t,r){for(var a=r.length,i=e.length,n=0;t<i;){for(var o=0;o<a&&e[t+o]===r[o];)++o
if(o>=a)break
t++,n++}return n}var t=10,r=13,a=60,i=/^(\d+)\s+(\d+)\s+obj\b/,c=new Uint8Array([116,114,97,105,108,101,114]),l=new Uint8Array([115,116,97,114,116,120,114,101,102]),u=new Uint8Array([101,110,100,111,98,106]),h=new Uint8Array([47,88,82,101,102])
this.entries.length=0
var f=this.stream
f.pos=0
for(var d=f.getBytes(),g=f.start,m=d.length,p=[],b=[];g<m;){var v=d[g]
if(9!==v&&v!==t&&v!==r&&32!==v)if(37!==v){var y,w=function(e,i){for(var n="",o=e[i];o!==t&&o!==r&&o!==a&&!(++i>=e.length);)n+=String.fromCharCode(o),o=e[i]
return n}(d,g)
if(0!==w.indexOf("xref")||4!==w.length&&!/\s/.test(w[4]))if(y=i.exec(w)){void 0===this.entries[y[1]]&&(this.entries[y[1]]={offset:g-f.start,gen:0|y[2],uncompressed:!0})
var k=e(d,g,u)+7,S=d.subarray(g,g+k),C=e(S,0,h)
C<k&&S[C+5]<64&&(b.push(g-f.start),this.xrefstms[g-f.start]=1),g+=k}else 0!==w.indexOf("trailer")||7!==w.length&&!/\s/.test(w[7])?g+=w.length+1:(p.push(g),g+=e(d,g,l))
else g+=e(d,g,c),p.push(g),g+=e(d,g,l)}else do{if(++g>=m)break
v=d[g]}while(v!==t&&v!==r)
else++g}var x,A
for(x=0,A=b.length;x<A;++x)this.startXRefQueue.push(b[x]),this.readXRef(!0)
var P
for(x=0,A=p.length;x<A;++x){f.pos=p[x]
var I=new s.Parser(new s.Lexer(f),!0,this,!0),_=I.getObj()
if((0,o.isCmd)(_,"trailer")&&(P=I.getObj(),(0,o.isDict)(P)&&P.has("ID")))return P}if(P)return P
throw new n.InvalidPDFException("Invalid PDF structure")},readXRef:function(e){var t=this.stream,r=Object.create(null)
try{for(;this.startXRefQueue.length;){var a=this.startXRefQueue[0]
if(r[a])(0,n.warn)("readXRef - skipping XRef table since it was already parsed."),this.startXRefQueue.shift()
else{r[a]=!0,t.pos=a+t.start
var i,c=new s.Parser(new s.Lexer(t),!0,this),l=c.getObj()
if((0,o.isCmd)(l,"xref")){if(i=this.processXRefTable(c),this.topDict||(this.topDict=i),l=i.get("XRefStm"),(0,n.isInt)(l)){var u=l
u in this.xrefstms||(this.xrefstms[u]=1,this.startXRefQueue.push(u))}}else{if(!(0,n.isInt)(l))throw new n.FormatError("Invalid XRef stream header")
if(!(0,n.isInt)(c.getObj())||!(0,o.isCmd)(c.getObj(),"obj")||!(0,o.isStream)(l=c.getObj()))throw new n.FormatError("Invalid XRef stream")
if(i=this.processXRefStream(l),this.topDict||(this.topDict=i),!i)throw new n.FormatError("Failed to read XRef stream")}l=i.get("Prev"),(0,n.isInt)(l)?this.startXRefQueue.push(l):(0,o.isRef)(l)&&this.startXRefQueue.push(l.num),this.startXRefQueue.shift()}}return this.topDict}catch(e){if(e instanceof n.MissingDataException)throw e;(0,n.info)("(while reading XRef): "+e)}if(!e)throw new n.XRefParseException},getEntry:function(e){var t=this.entries[e]
return t&&!t.free&&t.offset?t:null},fetchIfRef:function(e,t){return(0,o.isRef)(e)?this.fetch(e,t):e},fetch:function(e,t){if(!(0,o.isRef)(e))throw new Error("ref object is not a reference")
var r=e.num
if(r in this.cache){var a=this.cache[r]
return a instanceof o.Dict&&!a.objId&&(a.objId=e.toString()),a}var i=this.getEntry(r)
return null===i?this.cache[r]=null:(i=i.uncompressed?this.fetchUncompressed(e,i,t):this.fetchCompressed(i,t),(0,o.isDict)(i)?i.objId=e.toString():(0,o.isStream)(i)&&(i.dict.objId=e.toString()),i)},fetchUncompressed:function(e,t,r){var a=e.gen,i=e.num
if(t.gen!==a)throw new n.FormatError("inconsistent generation in XRef")
var c=this.stream.makeSubStream(t.offset+this.stream.start),l=new s.Parser(new s.Lexer(c),!0,this),u=l.getObj(),h=l.getObj(),f=l.getObj()
if(!(0,n.isInt)(u)||parseInt(u,10)!==i||!(0,n.isInt)(h)||parseInt(h,10)!==a||!(0,o.isCmd)(f))throw new n.FormatError("bad XRef entry")
if(!(0,o.isCmd)(f,"obj")){if(0===f.cmd.indexOf("obj")&&(i=parseInt(f.cmd.substring(3),10),!isNaN(i)))return i
throw new n.FormatError("bad XRef entry")}return t=this.encrypt&&!r?l.getObj(this.encrypt.createCipherTransform(i,a)):l.getObj(),(0,o.isStream)(t)||(this.cache[i]=t),t},fetchCompressed:function(e,t){var r=e.offset,a=this.fetch(new o.Ref(r,0))
if(!(0,o.isStream)(a))throw new n.FormatError("bad ObjStm stream")
var i=a.dict.get("First"),c=a.dict.get("N")
if(!(0,n.isInt)(i)||!(0,n.isInt)(c))throw new n.FormatError("invalid first and n parameters for ObjStm stream")
var l=new s.Parser(new s.Lexer(a),!1,this)
l.allowStreams=!0
var u,h,f=[],d=[]
for(u=0;u<c;++u){if(h=l.getObj(),!(0,n.isInt)(h))throw new n.FormatError("invalid object number in the ObjStm stream: "+h)
d.push(h)
var g=l.getObj()
if(!(0,n.isInt)(g))throw new n.FormatError("invalid object offset in the ObjStm stream: "+g)}for(u=0;u<c;++u){f.push(l.getObj()),(0,o.isCmd)(l.buf1,"endobj")&&l.shift(),h=d[u]
var m=this.entries[h]
m&&m.offset===r&&m.gen===u&&(this.cache[h]=f[u])}if(void 0===(e=f[e.gen]))throw new n.FormatError("bad XRef entry for compressed object")
return e},fetchIfRefAsync:function(e,t){return(0,o.isRef)(e)?this.fetchAsync(e,t):Promise.resolve(e)},fetchAsync:function(e,t){var r=this.stream.manager,a=this
return new Promise(function i(o,s){try{o(a.fetch(e,t))}catch(e){if(e instanceof n.MissingDataException)return void r.requestRange(e.begin,e.end).then(function(){i(o,s)},s)
s(e)}})},getCatalogObj:function(){return this.root}},e}(),d=function(){function e(e,t){throw new Error("Cannot initialize NameOrNumberTree.")}return e.prototype={getAll:function(){var e=Object.create(null)
if(!this.root)return e
var t=this.xref,r=new o.RefSet
r.put(this.root)
for(var a=[this.root];a.length>0;){var i,s,c=t.fetchIfRef(a.shift())
if((0,o.isDict)(c))if(c.has("Kids")){var l=c.get("Kids")
for(i=0,s=l.length;i<s;i++){var u=l[i]
if(r.has(u))throw new n.FormatError('Duplicate entry in "'+this._type+'" tree.')
a.push(u),r.put(u)}}else{var h=c.get(this._type)
if((0,n.isArray)(h))for(i=0,s=h.length;i<s;i+=2)e[t.fetchIfRef(h[i])]=t.fetchIfRef(h[i+1])}}return e},get:function(e){if(!this.root)return null
for(var t,r,a,i=this.xref,o=i.fetchIfRef(this.root),s=0;o.has("Kids");){if(++s>10)return(0,n.warn)('Search depth limit reached for "'+this._type+'" tree.'),null
var c=o.get("Kids")
if(!(0,n.isArray)(c))return null
for(t=0,r=c.length-1;t<=r;){a=t+r>>1
var l=i.fetchIfRef(c[a]),u=l.get("Limits")
if(e<i.fetchIfRef(u[0]))r=a-1
else{if(!(e>i.fetchIfRef(u[1]))){o=i.fetchIfRef(c[a])
break}t=a+1}}if(t>r)return null}var h=o.get(this._type)
if((0,n.isArray)(h))for(t=0,r=h.length-2;t<=r;){a=t+r&-2
var f=i.fetchIfRef(h[a])
if(e<f)r=a-2
else{if(!(e>f))return i.fetchIfRef(h[a+1])
t=a+2}}return null}},e}(),g=function(){function e(e,t){this.root=e,this.xref=t,this._type="Names"}return n.Util.inherit(e,d,{}),e}(),m=function(){function e(e,t){this.root=e,this.xref=t,this._type="Nums"}return n.Util.inherit(e,d,{}),e}(),p=function(){function e(e,t){e&&(0,o.isDict)(e)&&(this.xref=t,this.root=e,e.has("FS")&&(this.fs=e.get("FS")),this.description=e.has("Desc")?(0,n.stringToPDFString)(e.get("Desc")):"",e.has("RF")&&(0,n.warn)("Related file specifications are not supported"),this.contentAvailable=!0,e.has("EF")||(this.contentAvailable=!1,(0,n.warn)("Non-embedded file specifications are not supported")))}function t(e){return e.has("UF")?e.get("UF"):e.has("F")?e.get("F"):e.has("Unix")?e.get("Unix"):e.has("Mac")?e.get("Mac"):e.has("DOS")?e.get("DOS"):null}return e.prototype={get filename(){if(!this._filename&&this.root){var e=t(this.root)||"unnamed"
this._filename=(0,n.stringToPDFString)(e).replace(/\\\\/g,"\\").replace(/\\\//g,"/").replace(/\\/g,"/")}return this._filename},get content(){if(!this.contentAvailable)return null
!this.contentRef&&this.root&&(this.contentRef=t(this.root.get("EF")))
var e=null
if(this.contentRef){var r=this.xref,a=r.fetchIfRef(this.contentRef)
a&&(0,o.isStream)(a)?e=a.getBytes():(0,n.warn)("Embedded file specification points to non-existing/invalid content")}else(0,n.warn)("Embedded file specification does not have a content")
return e},get serializable(){return{filename:this.filename,content:this.content}}},e}(),b=function(){function e(e){return(0,o.isRef)(e)||(0,o.isDict)(e)||(0,n.isArray)(e)||(0,o.isStream)(e)}function t(t,r){if((0,o.isDict)(t)||(0,o.isStream)(t))for(var a=(0,o.isDict)(t)?t:t.dict,i=a.getKeys(),s=0,c=i.length;s<c;s++){var l=a.getRaw(i[s])
e(l)&&r.push(l)}else if((0,n.isArray)(t))for(var u=0,h=t.length;u<h;u++){var f=t[u]
e(f)&&r.push(f)}}function r(e,t,r){this.dict=e,this.keys=t,this.xref=r,this.refSet=null,this.capability=null}return r.prototype={load:function(){if(this.capability=(0,n.createPromiseCapability)(),!(this.xref.stream instanceof c.ChunkedStream)||0===this.xref.stream.getMissingChunks().length)return this.capability.resolve(),this.capability.promise
var e=this.keys,t=this.dict
this.refSet=new o.RefSet
for(var r=[],a=0,i=e.length;a<i;a++){var s=t.getRaw(e[a])
void 0!==s&&r.push(s)}return this._walk(r),this.capability.promise},_walk:function(e){for(var r=this,a=[],i=[];e.length;){var s=e.pop()
if((0,o.isRef)(s)){if(this.refSet.has(s))continue
try{this.refSet.put(s),s=this.xref.fetch(s)}catch(e){if(!(e instanceof n.MissingDataException))throw e
a.push(s),i.push({begin:e.begin,end:e.end})}}if(s&&s.getBaseStreams){for(var c=s.getBaseStreams(),l=!1,u=0,h=c.length;u<h;u++){var f=c[u]
f.getMissingChunks&&f.getMissingChunks().length&&(l=!0,i.push({begin:f.start,end:f.end}))}l&&a.push(s)}t(s,e)}if(i.length)return void this.xref.stream.manager.requestRanges(i).then(function(){for(var e=0,t=a.length;e<t;e++){var i=a[e];(0,o.isRef)(i)&&r.refSet.remove(i)}r._walk(a)},this.capability.reject)
this.refSet=null,this.capability.resolve()}},r}()
t.Catalog=h,t.ObjectLoader=b,t.XRef=f,t.FileSpec=p},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getSupplementalGlyphMapForArialBlack=t.getGlyphMapForStandardFonts=t.getSymbolsFonts=t.getSerifFonts=t.getNonStdFontMap=t.getStdFontMap=void 0
var a=r(0),i=(0,a.getLookupTableFactory)(function(e){e.ArialNarrow="Helvetica",e["ArialNarrow-Bold"]="Helvetica-Bold",e["ArialNarrow-BoldItalic"]="Helvetica-BoldOblique",e["ArialNarrow-Italic"]="Helvetica-Oblique",e.ArialBlack="Helvetica",e["ArialBlack-Bold"]="Helvetica-Bold",e["ArialBlack-BoldItalic"]="Helvetica-BoldOblique",e["ArialBlack-Italic"]="Helvetica-Oblique",e["Arial-Black"]="Helvetica",e["Arial-Black-Bold"]="Helvetica-Bold",e["Arial-Black-BoldItalic"]="Helvetica-BoldOblique",e["Arial-Black-Italic"]="Helvetica-Oblique",e.Arial="Helvetica",e["Arial-Bold"]="Helvetica-Bold",e["Arial-BoldItalic"]="Helvetica-BoldOblique",e["Arial-Italic"]="Helvetica-Oblique",e["Arial-BoldItalicMT"]="Helvetica-BoldOblique",e["Arial-BoldMT"]="Helvetica-Bold",e["Arial-ItalicMT"]="Helvetica-Oblique",e.ArialMT="Helvetica",e["Courier-Bold"]="Courier-Bold",e["Courier-BoldItalic"]="Courier-BoldOblique",e["Courier-Italic"]="Courier-Oblique",e.CourierNew="Courier",e["CourierNew-Bold"]="Courier-Bold",e["CourierNew-BoldItalic"]="Courier-BoldOblique",e["CourierNew-Italic"]="Courier-Oblique",e["CourierNewPS-BoldItalicMT"]="Courier-BoldOblique",e["CourierNewPS-BoldMT"]="Courier-Bold",e["CourierNewPS-ItalicMT"]="Courier-Oblique",e.CourierNewPSMT="Courier",e.Helvetica="Helvetica",e["Helvetica-Bold"]="Helvetica-Bold",e["Helvetica-BoldItalic"]="Helvetica-BoldOblique",e["Helvetica-BoldOblique"]="Helvetica-BoldOblique",e["Helvetica-Italic"]="Helvetica-Oblique",e["Helvetica-Oblique"]="Helvetica-Oblique",e.SegoeUISymbol="Helvetica",e["Symbol-Bold"]="Symbol",e["Symbol-BoldItalic"]="Symbol",e["Symbol-Italic"]="Symbol",e.TimesNewRoman="Times-Roman",e["TimesNewRoman-Bold"]="Times-Bold",e["TimesNewRoman-BoldItalic"]="Times-BoldItalic",e["TimesNewRoman-Italic"]="Times-Italic",e.TimesNewRomanPS="Times-Roman",e["TimesNewRomanPS-Bold"]="Times-Bold",e["TimesNewRomanPS-BoldItalic"]="Times-BoldItalic",e["TimesNewRomanPS-BoldItalicMT"]="Times-BoldItalic",e["TimesNewRomanPS-BoldMT"]="Times-Bold",e["TimesNewRomanPS-Italic"]="Times-Italic",e["TimesNewRomanPS-ItalicMT"]="Times-Italic",e.TimesNewRomanPSMT="Times-Roman",e["TimesNewRomanPSMT-Bold"]="Times-Bold",e["TimesNewRomanPSMT-BoldItalic"]="Times-BoldItalic",e["TimesNewRomanPSMT-Italic"]="Times-Italic"}),n=(0,a.getLookupTableFactory)(function(e){e.CenturyGothic="Helvetica",e["CenturyGothic-Bold"]="Helvetica-Bold",e["CenturyGothic-BoldItalic"]="Helvetica-BoldOblique",e["CenturyGothic-Italic"]="Helvetica-Oblique",e.ComicSansMS="Comic Sans MS",e["ComicSansMS-Bold"]="Comic Sans MS-Bold",e["ComicSansMS-BoldItalic"]="Comic Sans MS-BoldItalic",e["ComicSansMS-Italic"]="Comic Sans MS-Italic",e.LucidaConsole="Courier",e["LucidaConsole-Bold"]="Courier-Bold",e["LucidaConsole-BoldItalic"]="Courier-BoldOblique",e["LucidaConsole-Italic"]="Courier-Oblique",e["MS-Gothic"]="MS Gothic",e["MS-Gothic-Bold"]="MS Gothic-Bold",e["MS-Gothic-BoldItalic"]="MS Gothic-BoldItalic",e["MS-Gothic-Italic"]="MS Gothic-Italic",e["MS-Mincho"]="MS Mincho",e["MS-Mincho-Bold"]="MS Mincho-Bold",e["MS-Mincho-BoldItalic"]="MS Mincho-BoldItalic",e["MS-Mincho-Italic"]="MS Mincho-Italic",e["MS-PGothic"]="MS PGothic",e["MS-PGothic-Bold"]="MS PGothic-Bold",e["MS-PGothic-BoldItalic"]="MS PGothic-BoldItalic",e["MS-PGothic-Italic"]="MS PGothic-Italic",e["MS-PMincho"]="MS PMincho",e["MS-PMincho-Bold"]="MS PMincho-Bold",e["MS-PMincho-BoldItalic"]="MS PMincho-BoldItalic",e["MS-PMincho-Italic"]="MS PMincho-Italic",e.NuptialScript="Times-Italic",e.Wingdings="ZapfDingbats"}),o=(0,a.getLookupTableFactory)(function(e){e["Adobe Jenson"]=!0,e["Adobe Text"]=!0,e.Albertus=!0,e.Aldus=!0,e.Alexandria=!0,e.Algerian=!0,e["American Typewriter"]=!0,e.Antiqua=!0,e.Apex=!0,e.Arno=!0,e.Aster=!0,e.Aurora=!0,e.Baskerville=!0,e.Bell=!0,e.Bembo=!0,e["Bembo Schoolbook"]=!0,e.Benguiat=!0,e["Berkeley Old Style"]=!0,e["Bernhard Modern"]=!0,e["Berthold City"]=!0,e.Bodoni=!0,e["Bauer Bodoni"]=!0,e["Book Antiqua"]=!0,e.Bookman=!0,e["Bordeaux Roman"]=!0,e["Californian FB"]=!0,e.Calisto=!0,e.Calvert=!0,e.Capitals=!0,e.Cambria=!0,e.Cartier=!0,e.Caslon=!0,e.Catull=!0,e.Centaur=!0,e["Century Old Style"]=!0,e["Century Schoolbook"]=!0,e.Chaparral=!0,e["Charis SIL"]=!0,e.Cheltenham=!0,e["Cholla Slab"]=!0,e.Clarendon=!0,e.Clearface=!0,e.Cochin=!0,e.Colonna=!0,e["Computer Modern"]=!0,e["Concrete Roman"]=!0,e.Constantia=!0,e["Cooper Black"]=!0,e.Corona=!0,e.Ecotype=!0,e.Egyptienne=!0,e.Elephant=!0,e.Excelsior=!0,e.Fairfield=!0,e["FF Scala"]=!0,e.Folkard=!0,e.Footlight=!0,e.FreeSerif=!0,e["Friz Quadrata"]=!0,e.Garamond=!0,e.Gentium=!0,e.Georgia=!0,e.Gloucester=!0,e["Goudy Old Style"]=!0,e["Goudy Schoolbook"]=!0,e["Goudy Pro Font"]=!0,e.Granjon=!0,e["Guardian Egyptian"]=!0,e.Heather=!0,e.Hercules=!0,e["High Tower Text"]=!0,e.Hiroshige=!0,e["Hoefler Text"]=!0,e["Humana Serif"]=!0,e.Imprint=!0,e["Ionic No. 5"]=!0,e.Janson=!0,e.Joanna=!0,e.Korinna=!0,e.Lexicon=!0,e["Liberation Serif"]=!0,e["Linux Libertine"]=!0,e.Literaturnaya=!0,e.Lucida=!0,e["Lucida Bright"]=!0,e.Melior=!0,e.Memphis=!0,e.Miller=!0,e.Minion=!0,e.Modern=!0,e["Mona Lisa"]=!0,e["Mrs Eaves"]=!0,e["MS Serif"]=!0,e["Museo Slab"]=!0,e["New York"]=!0,e["Nimbus Roman"]=!0,e["NPS Rawlinson Roadway"]=!0,e.NuptialScript=!0,e.Palatino=!0,e.Perpetua=!0,e.Plantin=!0,e["Plantin Schoolbook"]=!0,e.Playbill=!0,e["Poor Richard"]=!0,e["Rawlinson Roadway"]=!0,e.Renault=!0,e.Requiem=!0,e.Rockwell=!0,e.Roman=!0,e["Rotis Serif"]=!0,e.Sabon=!0,e.Scala=!0,e.Seagull=!0,e.Sistina=!0,e.Souvenir=!0,e.STIX=!0,e["Stone Informal"]=!0,e["Stone Serif"]=!0,e.Sylfaen=!0,e.Times=!0,e.Trajan=!0,e["Trinité"]=!0,e["Trump Mediaeval"]=!0,e.Utopia=!0,e["Vale Type"]=!0,e["Bitstream Vera"]=!0,e["Vera Serif"]=!0,e.Versailles=!0,e.Wanted=!0,e.Weiss=!0,e["Wide Latin"]=!0,e.Windsor=!0,e.XITS=!0}),s=(0,a.getLookupTableFactory)(function(e){e.Dingbats=!0,e.Symbol=!0,e.ZapfDingbats=!0}),c=(0,a.getLookupTableFactory)(function(e){e[2]=10,e[3]=32,e[4]=33,e[5]=34,e[6]=35,e[7]=36,e[8]=37,e[9]=38,e[10]=39,e[11]=40,e[12]=41,e[13]=42,e[14]=43,e[15]=44,e[16]=45,e[17]=46,e[18]=47,e[19]=48,e[20]=49,e[21]=50,e[22]=51,e[23]=52,e[24]=53,e[25]=54,e[26]=55,e[27]=56,e[28]=57,e[29]=58,e[30]=894,e[31]=60,e[32]=61,e[33]=62,e[34]=63,e[35]=64,e[36]=65,e[37]=66,e[38]=67,e[39]=68,e[40]=69,e[41]=70,e[42]=71,e[43]=72,e[44]=73,e[45]=74,e[46]=75,e[47]=76,e[48]=77,e[49]=78,e[50]=79,e[51]=80,e[52]=81,e[53]=82,e[54]=83,e[55]=84,e[56]=85,e[57]=86,e[58]=87,e[59]=88,e[60]=89,e[61]=90,e[62]=91,e[63]=92,e[64]=93,e[65]=94,e[66]=95,e[67]=96,e[68]=97,e[69]=98,e[70]=99,e[71]=100,e[72]=101,e[73]=102,e[74]=103,e[75]=104,e[76]=105,e[77]=106,e[78]=107,e[79]=108,e[80]=109,e[81]=110,e[82]=111,e[83]=112,e[84]=113,e[85]=114,e[86]=115,e[87]=116,e[88]=117,e[89]=118,e[90]=119,e[91]=120,e[92]=121,e[93]=122,e[94]=123,e[95]=124,e[96]=125,e[97]=126,e[98]=196,e[99]=197,e[100]=199,e[101]=201,e[102]=209,e[103]=214,e[104]=220,e[105]=225,e[106]=224,e[107]=226,e[108]=228,e[109]=227,e[110]=229,e[111]=231,e[112]=233,e[113]=232,e[114]=234,e[115]=235,e[116]=237,e[117]=236,e[118]=238,e[119]=239,e[120]=241,e[121]=243,e[122]=242,e[123]=244,e[124]=246,e[125]=245,e[126]=250,e[127]=249,e[128]=251,e[129]=252,e[130]=8224,e[131]=176,e[132]=162,e[133]=163,e[134]=167,e[135]=8226,e[136]=182,e[137]=223,e[138]=174,e[139]=169,e[140]=8482,e[141]=180,e[142]=168,e[143]=8800,e[144]=198,e[145]=216,e[146]=8734,e[147]=177,e[148]=8804,e[149]=8805,e[150]=165,e[151]=181,e[152]=8706,e[153]=8721,e[154]=8719,e[156]=8747,e[157]=170,e[158]=186,e[159]=8486,e[160]=230,e[161]=248,e[162]=191,e[163]=161,e[164]=172,e[165]=8730,e[166]=402,e[167]=8776,e[168]=8710,e[169]=171,e[170]=187,e[171]=8230,e[210]=218,e[223]=711,e[224]=321,e[225]=322,e[227]=353,e[229]=382,e[234]=253,e[252]=263,e[253]=268,e[254]=269,e[258]=258,e[260]=260,e[261]=261,e[265]=280,e[266]=281,e[268]=283,e[269]=313,e[275]=323,e[276]=324,e[278]=328,e[284]=345,e[285]=346,e[286]=347,e[292]=367,e[295]=377,e[296]=378,e[298]=380,e[305]=963,e[306]=964,e[307]=966,e[308]=8215
e[309]=8252,e[310]=8319,e[311]=8359,e[312]=8592,e[313]=8593,e[337]=9552,e[493]=1039,e[494]=1040,e[705]=1524,e[706]=8362,e[710]=64288,e[711]=64298,e[759]=1617,e[761]=1776,e[763]=1778,e[775]=1652,e[777]=1764,e[778]=1780,e[779]=1781,e[780]=1782,e[782]=771,e[783]=64726,e[786]=8363,e[788]=8532,e[790]=768,e[791]=769,e[792]=768,e[795]=803,e[797]=64336,e[798]=64337,e[799]=64342,e[800]=64343,e[801]=64344,e[802]=64345,e[803]=64362,e[804]=64363,e[805]=64364,e[2424]=7821,e[2425]=7822,e[2426]=7823,e[2427]=7824,e[2428]=7825,e[2429]=7826,e[2430]=7827,e[2433]=7682,e[2678]=8045,e[2679]=8046,e[2830]=1552,e[2838]=686,e[2840]=751,e[2842]=753,e[2843]=754,e[2844]=755,e[2846]=757,e[2856]=767,e[2857]=848,e[2858]=849,e[2862]=853,e[2863]=854,e[2864]=855,e[2865]=861,e[2866]=862,e[2906]=7460,e[2908]=7462,e[2909]=7463,e[2910]=7464,e[2912]=7466,e[2913]=7467,e[2914]=7468,e[2916]=7470,e[2917]=7471,e[2918]=7472,e[2920]=7474,e[2921]=7475,e[2922]=7476,e[2924]=7478,e[2925]=7479,e[2926]=7480,e[2928]=7482,e[2929]=7483,e[2930]=7484,e[2932]=7486,e[2933]=7487,e[2934]=7488,e[2936]=7490,e[2937]=7491,e[2938]=7492,e[2940]=7494,e[2941]=7495,e[2942]=7496,e[2944]=7498,e[2946]=7500,e[2948]=7502,e[2950]=7504,e[2951]=7505,e[2952]=7506,e[2954]=7508,e[2955]=7509,e[2956]=7510,e[2958]=7512,e[2959]=7513,e[2960]=7514,e[2962]=7516,e[2963]=7517,e[2964]=7518,e[2966]=7520,e[2967]=7521,e[2968]=7522,e[2970]=7524,e[2971]=7525,e[2972]=7526,e[2974]=7528,e[2975]=7529,e[2976]=7530,e[2978]=1537,e[2979]=1538,e[2980]=1539,e[2982]=1549,e[2983]=1551,e[2984]=1552,e[2986]=1554,e[2987]=1555,e[2988]=1556,e[2990]=1623,e[2991]=1624,e[2995]=1775,e[2999]=1791,e[3002]=64290,e[3003]=64291,e[3004]=64292,e[3006]=64294,e[3007]=64295,e[3008]=64296,e[3011]=1900,e[3014]=8223,e[3015]=8244,e[3017]=7532,e[3018]=7533,e[3019]=7534,e[3075]=7590,e[3076]=7591,e[3079]=7594,e[3080]=7595,e[3083]=7598,e[3084]=7599,e[3087]=7602,e[3088]=7603,e[3091]=7606,e[3092]=7607,e[3095]=7610,e[3096]=7611,e[3099]=7614,e[3100]=7615,e[3103]=7618,e[3104]=7619,e[3107]=8337,e[3108]=8338,e[3116]=1884,e[3119]=1885,e[3120]=1885,e[3123]=1886,e[3124]=1886,e[3127]=1887,e[3128]=1887,e[3131]=1888,e[3132]=1888,e[3135]=1889,e[3136]=1889,e[3139]=1890,e[3140]=1890,e[3143]=1891,e[3144]=1891,e[3147]=1892,e[3148]=1892,e[3153]=580,e[3154]=581,e[3157]=584,e[3158]=585,e[3161]=588,e[3162]=589,e[3165]=891,e[3166]=892,e[3169]=1274,e[3170]=1275,e[3173]=1278,e[3174]=1279,e[3181]=7622,e[3182]=7623,e[3282]=11799,e[3316]=578,e[3379]=42785,e[3393]=1159,e[3416]=8377}),l=(0,a.getLookupTableFactory)(function(e){e[227]=322,e[264]=261,e[291]=346})
t.getStdFontMap=i,t.getNonStdFontMap=n,t.getSerifFonts=o,t.getSymbolsFonts=s,t.getGlyphMapForStandardFonts=c,t.getSupplementalGlyphMapForArialBlack=l},function(e,t,r){"use strict"
function a(e){return e>=65520&&e<=65535?0:e>=62976&&e<=63743?l()[e]||e:e}function i(e,t){var r=t[e]
if(void 0!==r)return r
if(!e)return-1
if("u"===e[0]){var a,i=e.length
if(7===i&&"n"===e[1]&&"i"===e[2])a=e.substr(3)
else{if(!(i>=5&&i<=7))return-1
a=e.substr(1)}if(a===a.toUpperCase()&&(r=parseInt(a,16))>=0)return r}return-1}function n(e){for(var t=0,r=u.length;t<r;t++){var a=u[t]
if(e>=a.begin&&e<a.end)return t}return-1}function o(e){var t=u[13]
return e>=t.begin&&e<t.end||(t=u[11],e>=t.begin&&e<t.end)}function s(e){var t=e.length
if(t<=1||!o(e.charCodeAt(0)))return e
for(var r="",a=t-1;a>=0;a--)r+=e[a]
return r}var c=r(0).getLookupTableFactory,l=c(function(e){e[63721]=169,e[63193]=169,e[63720]=174,e[63194]=174,e[63722]=8482,e[63195]=8482,e[63729]=9127,e[63730]=9128,e[63731]=9129,e[63740]=9131,e[63741]=9132,e[63742]=9133,e[63726]=9121,e[63727]=9122,e[63728]=9123,e[63737]=9124,e[63738]=9125,e[63739]=9126,e[63723]=9115,e[63724]=9116,e[63725]=9117,e[63734]=9118,e[63735]=9119,e[63736]=9120}),u=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}],h=c(function(e){e["¨"]=" ̈",e["¯"]=" ̄",e["´"]=" ́",e["µ"]="μ",e["¸"]=" ̧",e["Ĳ"]="IJ",e["ĳ"]="ij",e["Ŀ"]="L·",e["ŀ"]="l·",e["ŉ"]="ʼn",e["ſ"]="s",e["Ǆ"]="DŽ",e["ǅ"]="Dž",e["ǆ"]="dž",e["Ǉ"]="LJ",e["ǈ"]="Lj",e["ǉ"]="lj",e["Ǌ"]="NJ",e["ǋ"]="Nj",e["ǌ"]="nj",e["Ǳ"]="DZ",e["ǲ"]="Dz",e["ǳ"]="dz",e["˘"]=" ̆",e["˙"]=" ̇",e["˚"]=" ̊",e["˛"]=" ̨",e["˜"]=" ̃",e["˝"]=" ̋",e["ͺ"]=" ͅ",e["΄"]=" ́",e["ϐ"]="β",e["ϑ"]="θ",e["ϒ"]="Υ",e["ϕ"]="φ",e["ϖ"]="π",e["ϰ"]="κ",e["ϱ"]="ρ",e["ϲ"]="ς",e["ϴ"]="Θ",e["ϵ"]="ε",e["Ϲ"]="Σ",e["և"]="եւ",e["ٵ"]="اٴ",e["ٶ"]="وٴ",e["ٷ"]="ۇٴ",e["ٸ"]="يٴ",e["ำ"]="ํา",e["ຳ"]="ໍາ",e["ໜ"]="ຫນ",e["ໝ"]="ຫມ",e["ཷ"]="ྲཱྀ",e["ཹ"]="ླཱྀ",e["ẚ"]="aʾ",e["᾽"]=" ̓",e["᾿"]=" ̓",e["῀"]=" ͂",e["῾"]=" ̔",e[" "]=" ",e[" "]=" ",e[" "]=" ",e[" "]=" ",e[" "]=" ",e[" "]=" ",e[" "]=" ",e[" "]=" ",e["‗"]=" ̳",e["․"]=".",e["‥"]="..",e["…"]="...",e["″"]="′′",e["‴"]="′′′",e["‶"]="‵‵",e["‷"]="‵‵‵",e["‼"]="!!",e["‾"]=" ̅",e["⁇"]="??",e["⁈"]="?!",e["⁉"]="!?",e["⁗"]="′′′′",e[" "]=" ",e["₨"]="Rs",e["℀"]="a/c",e["℁"]="a/s",e["℃"]="°C",e["℅"]="c/o",e["℆"]="c/u",e["ℇ"]="Ɛ",e["℉"]="°F",e["№"]="No",e["℡"]="TEL",e["ℵ"]="א",e["ℶ"]="ב",e["ℷ"]="ג",e["ℸ"]="ד",e["℻"]="FAX",e["Ⅰ"]="I",e["Ⅱ"]="II",e["Ⅲ"]="III",e["Ⅳ"]="IV",e["Ⅴ"]="V",e["Ⅵ"]="VI",e["Ⅶ"]="VII",e["Ⅷ"]="VIII",e["Ⅸ"]="IX",e["Ⅹ"]="X",e["Ⅺ"]="XI",e["Ⅻ"]="XII",e["Ⅼ"]="L",e["Ⅽ"]="C",e["Ⅾ"]="D",e["Ⅿ"]="M",e["ⅰ"]="i",e["ⅱ"]="ii",e["ⅲ"]="iii",e["ⅳ"]="iv",e["ⅴ"]="v",e["ⅵ"]="vi",e["ⅶ"]="vii",e["ⅷ"]="viii",e["ⅸ"]="ix",e["ⅹ"]="x",e["ⅺ"]="xi",e["ⅻ"]="xii",e["ⅼ"]="l",e["ⅽ"]="c",e["ⅾ"]="d",e["ⅿ"]="m",e["∬"]="∫∫",e["∭"]="∫∫∫",e["∯"]="∮∮",e["∰"]="∮∮∮",e["⑴"]="(1)",e["⑵"]="(2)",e["⑶"]="(3)",e["⑷"]="(4)",e["⑸"]="(5)",e["⑹"]="(6)",e["⑺"]="(7)",e["⑻"]="(8)",e["⑼"]="(9)",e["⑽"]="(10)",e["⑾"]="(11)",e["⑿"]="(12)",e["⒀"]="(13)",e["⒁"]="(14)",e["⒂"]="(15)",e["⒃"]="(16)",e["⒄"]="(17)",e["⒅"]="(18)",e["⒆"]="(19)",e["⒇"]="(20)",e["⒈"]="1.",e["⒉"]="2.",e["⒊"]="3.",e["⒋"]="4.",e["⒌"]="5.",e["⒍"]="6.",e["⒎"]="7.",e["⒏"]="8.",e["⒐"]="9.",e["⒑"]="10.",e["⒒"]="11.",e["⒓"]="12.",e["⒔"]="13.",e["⒕"]="14.",e["⒖"]="15.",e["⒗"]="16.",e["⒘"]="17.",e["⒙"]="18.",e["⒚"]="19.",e["⒛"]="20.",e["⒜"]="(a)",e["⒝"]="(b)",e["⒞"]="(c)",e["⒟"]="(d)",e["⒠"]="(e)",e["⒡"]="(f)",e["⒢"]="(g)",e["⒣"]="(h)",e["⒤"]="(i)",e["⒥"]="(j)",e["⒦"]="(k)",e["⒧"]="(l)",e["⒨"]="(m)",e["⒩"]="(n)",e["⒪"]="(o)",e["⒫"]="(p)",e["⒬"]="(q)",e["⒭"]="(r)",e["⒮"]="(s)",e["⒯"]="(t)",e["⒰"]="(u)",e["⒱"]="(v)",e["⒲"]="(w)",e["⒳"]="(x)",e["⒴"]="(y)",e["⒵"]="(z)",e["⨌"]="∫∫∫∫",e["⩴"]="::="
e["⩵"]="==",e["⩶"]="===",e["⺟"]="母",e["⻳"]="龟",e["⼀"]="一",e["⼁"]="丨",e["⼂"]="丶",e["⼃"]="丿",e["⼄"]="乙",e["⼅"]="亅",e["⼆"]="二",e["⼇"]="亠",e["⼈"]="人",e["⼉"]="儿",e["⼊"]="入",e["⼋"]="八",e["⼌"]="冂",e["⼍"]="冖",e["⼎"]="冫",e["⼏"]="几",e["⼐"]="凵",e["⼑"]="刀",e["⼒"]="力",e["⼓"]="勹",e["⼔"]="匕",e["⼕"]="匚",e["⼖"]="匸",e["⼗"]="十",e["⼘"]="卜",e["⼙"]="卩",e["⼚"]="厂",e["⼛"]="厶",e["⼜"]="又",e["⼝"]="口",e["⼞"]="囗",e["⼟"]="土",e["⼠"]="士",e["⼡"]="夂",e["⼢"]="夊",e["⼣"]="夕",e["⼤"]="大",e["⼥"]="女",e["⼦"]="子",e["⼧"]="宀",e["⼨"]="寸",e["⼩"]="小",e["⼪"]="尢",e["⼫"]="尸",e["⼬"]="屮",e["⼭"]="山",e["⼮"]="巛",e["⼯"]="工",e["⼰"]="己",e["⼱"]="巾",e["⼲"]="干",e["⼳"]="幺",e["⼴"]="广",e["⼵"]="廴",e["⼶"]="廾",e["⼷"]="弋",e["⼸"]="弓",e["⼹"]="彐",e["⼺"]="彡",e["⼻"]="彳",e["⼼"]="心",e["⼽"]="戈",e["⼾"]="戶",e["⼿"]="手",e["⽀"]="支",e["⽁"]="攴",e["⽂"]="文",e["⽃"]="斗",e["⽄"]="斤",e["⽅"]="方",e["⽆"]="无",e["⽇"]="日",e["⽈"]="曰",e["⽉"]="月",e["⽊"]="木",e["⽋"]="欠",e["⽌"]="止",e["⽍"]="歹",e["⽎"]="殳",e["⽏"]="毋",e["⽐"]="比",e["⽑"]="毛",e["⽒"]="氏",e["⽓"]="气",e["⽔"]="水",e["⽕"]="火",e["⽖"]="爪",e["⽗"]="父",e["⽘"]="爻",e["⽙"]="爿",e["⽚"]="片",e["⽛"]="牙",e["⽜"]="牛",e["⽝"]="犬",e["⽞"]="玄",e["⽟"]="玉",e["⽠"]="瓜",e["⽡"]="瓦",e["⽢"]="甘",e["⽣"]="生",e["⽤"]="用",e["⽥"]="田",e["⽦"]="疋",e["⽧"]="疒",e["⽨"]="癶",e["⽩"]="白",e["⽪"]="皮",e["⽫"]="皿",e["⽬"]="目",e["⽭"]="矛",e["⽮"]="矢",e["⽯"]="石",e["⽰"]="示",e["⽱"]="禸",e["⽲"]="禾",e["⽳"]="穴",e["⽴"]="立",e["⽵"]="竹",e["⽶"]="米",e["⽷"]="糸",e["⽸"]="缶",e["⽹"]="网",e["⽺"]="羊",e["⽻"]="羽",e["⽼"]="老",e["⽽"]="而",e["⽾"]="耒",e["⽿"]="耳",e["⾀"]="聿",e["⾁"]="肉",e["⾂"]="臣",e["⾃"]="自",e["⾄"]="至",e["⾅"]="臼",e["⾆"]="舌",e["⾇"]="舛",e["⾈"]="舟",e["⾉"]="艮",e["⾊"]="色",e["⾋"]="艸",e["⾌"]="虍",e["⾍"]="虫",e["⾎"]="血",e["⾏"]="行",e["⾐"]="衣",e["⾑"]="襾",e["⾒"]="見",e["⾓"]="角",e["⾔"]="言",e["⾕"]="谷",e["⾖"]="豆",e["⾗"]="豕",e["⾘"]="豸",e["⾙"]="貝",e["⾚"]="赤",e["⾛"]="走",e["⾜"]="足",e["⾝"]="身",e["⾞"]="車",e["⾟"]="辛",e["⾠"]="辰",e["⾡"]="辵",e["⾢"]="邑",e["⾣"]="酉",e["⾤"]="釆",e["⾥"]="里",e["⾦"]="金",e["⾧"]="長",e["⾨"]="門",e["⾩"]="阜",e["⾪"]="隶",e["⾫"]="隹",e["⾬"]="雨",e["⾭"]="靑",e["⾮"]="非",e["⾯"]="面",e["⾰"]="革",e["⾱"]="韋",e["⾲"]="韭",e["⾳"]="音",e["⾴"]="頁",e["⾵"]="風",e["⾶"]="飛",e["⾷"]="食",e["⾸"]="首",e["⾹"]="香",e["⾺"]="馬",e["⾻"]="骨",e["⾼"]="高",e["⾽"]="髟",e["⾾"]="鬥",e["⾿"]="鬯",e["⿀"]="鬲",e["⿁"]="鬼",e["⿂"]="魚",e["⿃"]="鳥"
e["⿄"]="鹵",e["⿅"]="鹿",e["⿆"]="麥",e["⿇"]="麻",e["⿈"]="黃",e["⿉"]="黍",e["⿊"]="黑",e["⿋"]="黹",e["⿌"]="黽",e["⿍"]="鼎",e["⿎"]="鼓",e["⿏"]="鼠",e["⿐"]="鼻",e["⿑"]="齊",e["⿒"]="齒",e["⿓"]="龍",e["⿔"]="龜",e["⿕"]="龠",e["〶"]="〒",e["〸"]="十",e["〹"]="卄",e["〺"]="卅",e["゛"]=" ゙",e["゜"]=" ゚",e["ㄱ"]="ᄀ",e["ㄲ"]="ᄁ",e["ㄳ"]="ᆪ",e["ㄴ"]="ᄂ",e["ㄵ"]="ᆬ",e["ㄶ"]="ᆭ",e["ㄷ"]="ᄃ",e["ㄸ"]="ᄄ",e["ㄹ"]="ᄅ",e["ㄺ"]="ᆰ",e["ㄻ"]="ᆱ",e["ㄼ"]="ᆲ",e["ㄽ"]="ᆳ",e["ㄾ"]="ᆴ",e["ㄿ"]="ᆵ",e["ㅀ"]="ᄚ",e["ㅁ"]="ᄆ",e["ㅂ"]="ᄇ",e["ㅃ"]="ᄈ",e["ㅄ"]="ᄡ",e["ㅅ"]="ᄉ",e["ㅆ"]="ᄊ",e["ㅇ"]="ᄋ",e["ㅈ"]="ᄌ",e["ㅉ"]="ᄍ",e["ㅊ"]="ᄎ",e["ㅋ"]="ᄏ",e["ㅌ"]="ᄐ",e["ㅍ"]="ᄑ",e["ㅎ"]="ᄒ",e["ㅏ"]="ᅡ",e["ㅐ"]="ᅢ",e["ㅑ"]="ᅣ",e["ㅒ"]="ᅤ",e["ㅓ"]="ᅥ",e["ㅔ"]="ᅦ",e["ㅕ"]="ᅧ",e["ㅖ"]="ᅨ",e["ㅗ"]="ᅩ",e["ㅘ"]="ᅪ",e["ㅙ"]="ᅫ",e["ㅚ"]="ᅬ",e["ㅛ"]="ᅭ",e["ㅜ"]="ᅮ",e["ㅝ"]="ᅯ",e["ㅞ"]="ᅰ",e["ㅟ"]="ᅱ",e["ㅠ"]="ᅲ",e["ㅡ"]="ᅳ",e["ㅢ"]="ᅴ",e["ㅣ"]="ᅵ",e["ㅤ"]="ᅠ",e["ㅥ"]="ᄔ",e["ㅦ"]="ᄕ",e["ㅧ"]="ᇇ",e["ㅨ"]="ᇈ",e["ㅩ"]="ᇌ",e["ㅪ"]="ᇎ",e["ㅫ"]="ᇓ",e["ㅬ"]="ᇗ",e["ㅭ"]="ᇙ",e["ㅮ"]="ᄜ",e["ㅯ"]="ᇝ",e["ㅰ"]="ᇟ",e["ㅱ"]="ᄝ",e["ㅲ"]="ᄞ",e["ㅳ"]="ᄠ",e["ㅴ"]="ᄢ",e["ㅵ"]="ᄣ",e["ㅶ"]="ᄧ",e["ㅷ"]="ᄩ",e["ㅸ"]="ᄫ",e["ㅹ"]="ᄬ",e["ㅺ"]="ᄭ",e["ㅻ"]="ᄮ",e["ㅼ"]="ᄯ",e["ㅽ"]="ᄲ",e["ㅾ"]="ᄶ",e["ㅿ"]="ᅀ",e["ㆀ"]="ᅇ",e["ㆁ"]="ᅌ",e["ㆂ"]="ᇱ",e["ㆃ"]="ᇲ",e["ㆄ"]="ᅗ",e["ㆅ"]="ᅘ",e["ㆆ"]="ᅙ",e["ㆇ"]="ᆄ",e["ㆈ"]="ᆅ",e["ㆉ"]="ᆈ",e["ㆊ"]="ᆑ",e["ㆋ"]="ᆒ",e["ㆌ"]="ᆔ",e["ㆍ"]="ᆞ",e["ㆎ"]="ᆡ",e["㈀"]="(ᄀ)",e["㈁"]="(ᄂ)",e["㈂"]="(ᄃ)",e["㈃"]="(ᄅ)",e["㈄"]="(ᄆ)",e["㈅"]="(ᄇ)",e["㈆"]="(ᄉ)",e["㈇"]="(ᄋ)",e["㈈"]="(ᄌ)",e["㈉"]="(ᄎ)",e["㈊"]="(ᄏ)",e["㈋"]="(ᄐ)",e["㈌"]="(ᄑ)",e["㈍"]="(ᄒ)",e["㈎"]="(가)",e["㈏"]="(나)",e["㈐"]="(다)",e["㈑"]="(라)",e["㈒"]="(마)",e["㈓"]="(바)",e["㈔"]="(사)",e["㈕"]="(아)",e["㈖"]="(자)",e["㈗"]="(차)",e["㈘"]="(카)",e["㈙"]="(타)",e["㈚"]="(파)",e["㈛"]="(하)",e["㈜"]="(주)",e["㈝"]="(오전)",e["㈞"]="(오후)",e["㈠"]="(一)",e["㈡"]="(二)",e["㈢"]="(三)",e["㈣"]="(四)",e["㈤"]="(五)",e["㈥"]="(六)",e["㈦"]="(七)",e["㈧"]="(八)",e["㈨"]="(九)",e["㈩"]="(十)",e["㈪"]="(月)",e["㈫"]="(火)",e["㈬"]="(水)",e["㈭"]="(木)",e["㈮"]="(金)",e["㈯"]="(土)",e["㈰"]="(日)",e["㈱"]="(株)",e["㈲"]="(有)",e["㈳"]="(社)",e["㈴"]="(名)",e["㈵"]="(特)",e["㈶"]="(財)",e["㈷"]="(祝)",e["㈸"]="(労)",e["㈹"]="(代)",e["㈺"]="(呼)",e["㈻"]="(学)",e["㈼"]="(監)",e["㈽"]="(企)",e["㈾"]="(資)",e["㈿"]="(協)",e["㉀"]="(祭)",e["㉁"]="(休)",e["㉂"]="(自)",e["㉃"]="(至)",e["㋀"]="1月",e["㋁"]="2月",e["㋂"]="3月",e["㋃"]="4月",e["㋄"]="5月",e["㋅"]="6月",e["㋆"]="7月",e["㋇"]="8月",e["㋈"]="9月",e["㋉"]="10月",e["㋊"]="11月",e["㋋"]="12月",e["㍘"]="0点",e["㍙"]="1点",e["㍚"]="2点"
e["㍛"]="3点",e["㍜"]="4点",e["㍝"]="5点",e["㍞"]="6点",e["㍟"]="7点",e["㍠"]="8点",e["㍡"]="9点",e["㍢"]="10点",e["㍣"]="11点",e["㍤"]="12点",e["㍥"]="13点",e["㍦"]="14点",e["㍧"]="15点",e["㍨"]="16点",e["㍩"]="17点",e["㍪"]="18点",e["㍫"]="19点",e["㍬"]="20点",e["㍭"]="21点",e["㍮"]="22点",e["㍯"]="23点",e["㍰"]="24点",e["㏠"]="1日",e["㏡"]="2日",e["㏢"]="3日",e["㏣"]="4日",e["㏤"]="5日",e["㏥"]="6日",e["㏦"]="7日",e["㏧"]="8日",e["㏨"]="9日",e["㏩"]="10日",e["㏪"]="11日",e["㏫"]="12日",e["㏬"]="13日",e["㏭"]="14日",e["㏮"]="15日",e["㏯"]="16日",e["㏰"]="17日",e["㏱"]="18日",e["㏲"]="19日",e["㏳"]="20日",e["㏴"]="21日",e["㏵"]="22日",e["㏶"]="23日",e["㏷"]="24日",e["㏸"]="25日",e["㏹"]="26日",e["㏺"]="27日",e["㏻"]="28日",e["㏼"]="29日",e["㏽"]="30日",e["㏾"]="31日",e["ﬀ"]="ff",e["ﬁ"]="fi",e["ﬂ"]="fl",e["ﬃ"]="ffi",e["ﬄ"]="ffl",e["ﬅ"]="ſt",e["ﬆ"]="st",e["ﬓ"]="մն",e["ﬔ"]="մե",e["ﬕ"]="մի",e["ﬖ"]="վն",e["ﬗ"]="մխ",e["ﭏ"]="אל",e["ﭐ"]="ٱ",e["ﭑ"]="ٱ",e["ﭒ"]="ٻ",e["ﭓ"]="ٻ",e["ﭔ"]="ٻ",e["ﭕ"]="ٻ",e["ﭖ"]="پ",e["ﭗ"]="پ",e["ﭘ"]="پ",e["ﭙ"]="پ",e["ﭚ"]="ڀ",e["ﭛ"]="ڀ",e["ﭜ"]="ڀ",e["ﭝ"]="ڀ",e["ﭞ"]="ٺ",e["ﭟ"]="ٺ",e["ﭠ"]="ٺ",e["ﭡ"]="ٺ",e["ﭢ"]="ٿ",e["ﭣ"]="ٿ",e["ﭤ"]="ٿ",e["ﭥ"]="ٿ",e["ﭦ"]="ٹ",e["ﭧ"]="ٹ",e["ﭨ"]="ٹ",e["ﭩ"]="ٹ",e["ﭪ"]="ڤ",e["ﭫ"]="ڤ",e["ﭬ"]="ڤ",e["ﭭ"]="ڤ",e["ﭮ"]="ڦ",e["ﭯ"]="ڦ",e["ﭰ"]="ڦ",e["ﭱ"]="ڦ",e["ﭲ"]="ڄ",e["ﭳ"]="ڄ",e["ﭴ"]="ڄ",e["ﭵ"]="ڄ",e["ﭶ"]="ڃ",e["ﭷ"]="ڃ",e["ﭸ"]="ڃ",e["ﭹ"]="ڃ",e["ﭺ"]="چ",e["ﭻ"]="چ",e["ﭼ"]="چ",e["ﭽ"]="چ",e["ﭾ"]="ڇ",e["ﭿ"]="ڇ",e["ﮀ"]="ڇ",e["ﮁ"]="ڇ",e["ﮂ"]="ڍ",e["ﮃ"]="ڍ",e["ﮄ"]="ڌ",e["ﮅ"]="ڌ",e["ﮆ"]="ڎ",e["ﮇ"]="ڎ",e["ﮈ"]="ڈ",e["ﮉ"]="ڈ",e["ﮊ"]="ژ",e["ﮋ"]="ژ",e["ﮌ"]="ڑ",e["ﮍ"]="ڑ",e["ﮎ"]="ک",e["ﮏ"]="ک",e["ﮐ"]="ک",e["ﮑ"]="ک",e["ﮒ"]="گ",e["ﮓ"]="گ",e["ﮔ"]="گ",e["ﮕ"]="گ",e["ﮖ"]="ڳ",e["ﮗ"]="ڳ",e["ﮘ"]="ڳ",e["ﮙ"]="ڳ",e["ﮚ"]="ڱ",e["ﮛ"]="ڱ",e["ﮜ"]="ڱ",e["ﮝ"]="ڱ",e["ﮞ"]="ں",e["ﮟ"]="ں",e["ﮠ"]="ڻ",e["ﮡ"]="ڻ",e["ﮢ"]="ڻ",e["ﮣ"]="ڻ",e["ﮤ"]="ۀ",e["ﮥ"]="ۀ",e["ﮦ"]="ہ",e["ﮧ"]="ہ",e["ﮨ"]="ہ",e["ﮩ"]="ہ",e["ﮪ"]="ھ",e["ﮫ"]="ھ",e["ﮬ"]="ھ",e["ﮭ"]="ھ",e["ﮮ"]="ے",e["ﮯ"]="ے",e["ﮰ"]="ۓ",e["ﮱ"]="ۓ",e["ﯓ"]="ڭ",e["ﯔ"]="ڭ",e["ﯕ"]="ڭ",e["ﯖ"]="ڭ",e["ﯗ"]="ۇ",e["ﯘ"]="ۇ",e["ﯙ"]="ۆ",e["ﯚ"]="ۆ",e["ﯛ"]="ۈ",e["ﯜ"]="ۈ",e["ﯝ"]="ٷ",e["ﯞ"]="ۋ",e["ﯟ"]="ۋ",e["ﯠ"]="ۅ",e["ﯡ"]="ۅ",e["ﯢ"]="ۉ",e["ﯣ"]="ۉ",e["ﯤ"]="ې",e["ﯥ"]="ې",e["ﯦ"]="ې",e["ﯧ"]="ې",e["ﯨ"]="ى",e["ﯩ"]="ى",e["ﯪ"]="ئا",e["ﯫ"]="ئا",e["ﯬ"]="ئە",e["ﯭ"]="ئە",e["ﯮ"]="ئو",e["ﯯ"]="ئو",e["ﯰ"]="ئۇ",e["ﯱ"]="ئۇ",e["ﯲ"]="ئۆ",e["ﯳ"]="ئۆ",e["ﯴ"]="ئۈ",e["ﯵ"]="ئۈ",e["ﯶ"]="ئې"
e["ﯷ"]="ئې",e["ﯸ"]="ئې",e["ﯹ"]="ئى",e["ﯺ"]="ئى",e["ﯻ"]="ئى",e["ﯼ"]="ی",e["ﯽ"]="ی",e["ﯾ"]="ی",e["ﯿ"]="ی",e["ﰀ"]="ئج",e["ﰁ"]="ئح",e["ﰂ"]="ئم",e["ﰃ"]="ئى",e["ﰄ"]="ئي",e["ﰅ"]="بج",e["ﰆ"]="بح",e["ﰇ"]="بخ",e["ﰈ"]="بم",e["ﰉ"]="بى",e["ﰊ"]="بي",e["ﰋ"]="تج",e["ﰌ"]="تح",e["ﰍ"]="تخ",e["ﰎ"]="تم",e["ﰏ"]="تى",e["ﰐ"]="تي",e["ﰑ"]="ثج",e["ﰒ"]="ثم",e["ﰓ"]="ثى",e["ﰔ"]="ثي",e["ﰕ"]="جح",e["ﰖ"]="جم",e["ﰗ"]="حج",e["ﰘ"]="حم",e["ﰙ"]="خج",e["ﰚ"]="خح",e["ﰛ"]="خم",e["ﰜ"]="سج",e["ﰝ"]="سح",e["ﰞ"]="سخ",e["ﰟ"]="سم",e["ﰠ"]="صح",e["ﰡ"]="صم",e["ﰢ"]="ضج",e["ﰣ"]="ضح",e["ﰤ"]="ضخ",e["ﰥ"]="ضم",e["ﰦ"]="طح",e["ﰧ"]="طم",e["ﰨ"]="ظم",e["ﰩ"]="عج",e["ﰪ"]="عم",e["ﰫ"]="غج",e["ﰬ"]="غم",e["ﰭ"]="فج",e["ﰮ"]="فح",e["ﰯ"]="فخ",e["ﰰ"]="فم",e["ﰱ"]="فى",e["ﰲ"]="في",e["ﰳ"]="قح",e["ﰴ"]="قم",e["ﰵ"]="قى",e["ﰶ"]="قي",e["ﰷ"]="كا",e["ﰸ"]="كج",e["ﰹ"]="كح",e["ﰺ"]="كخ",e["ﰻ"]="كل",e["ﰼ"]="كم",e["ﰽ"]="كى",e["ﰾ"]="كي",e["ﰿ"]="لج",e["ﱀ"]="لح",e["ﱁ"]="لخ",e["ﱂ"]="لم",e["ﱃ"]="لى",e["ﱄ"]="لي",e["ﱅ"]="مج",e["ﱆ"]="مح",e["ﱇ"]="مخ",e["ﱈ"]="مم",e["ﱉ"]="مى",e["ﱊ"]="مي",e["ﱋ"]="نج",e["ﱌ"]="نح",e["ﱍ"]="نخ",e["ﱎ"]="نم",e["ﱏ"]="نى",e["ﱐ"]="ني",e["ﱑ"]="هج",e["ﱒ"]="هم",e["ﱓ"]="هى",e["ﱔ"]="هي",e["ﱕ"]="يج",e["ﱖ"]="يح",e["ﱗ"]="يخ",e["ﱘ"]="يم",e["ﱙ"]="يى",e["ﱚ"]="يي",e["ﱛ"]="ذٰ",e["ﱜ"]="رٰ",e["ﱝ"]="ىٰ",e["ﱞ"]=" ٌّ",e["ﱟ"]=" ٍّ",e["ﱠ"]=" َّ",e["ﱡ"]=" ُّ",e["ﱢ"]=" ِّ",e["ﱣ"]=" ّٰ",e["ﱤ"]="ئر",e["ﱥ"]="ئز",e["ﱦ"]="ئم",e["ﱧ"]="ئن",e["ﱨ"]="ئى",e["ﱩ"]="ئي",e["ﱪ"]="بر",e["ﱫ"]="بز",e["ﱬ"]="بم",e["ﱭ"]="بن",e["ﱮ"]="بى",e["ﱯ"]="بي",e["ﱰ"]="تر",e["ﱱ"]="تز",e["ﱲ"]="تم",e["ﱳ"]="تن",e["ﱴ"]="تى",e["ﱵ"]="تي",e["ﱶ"]="ثر",e["ﱷ"]="ثز",e["ﱸ"]="ثم",e["ﱹ"]="ثن",e["ﱺ"]="ثى",e["ﱻ"]="ثي",e["ﱼ"]="فى",e["ﱽ"]="في",e["ﱾ"]="قى",e["ﱿ"]="قي",e["ﲀ"]="كا",e["ﲁ"]="كل",e["ﲂ"]="كم",e["ﲃ"]="كى",e["ﲄ"]="كي",e["ﲅ"]="لم",e["ﲆ"]="لى",e["ﲇ"]="لي",e["ﲈ"]="ما",e["ﲉ"]="مم",e["ﲊ"]="نر",e["ﲋ"]="نز",e["ﲌ"]="نم",e["ﲍ"]="نن",e["ﲎ"]="نى",e["ﲏ"]="ني",e["ﲐ"]="ىٰ",e["ﲑ"]="ير",e["ﲒ"]="يز",e["ﲓ"]="يم",e["ﲔ"]="ين",e["ﲕ"]="يى",e["ﲖ"]="يي",e["ﲗ"]="ئج",e["ﲘ"]="ئح",e["ﲙ"]="ئخ",e["ﲚ"]="ئم",e["ﲛ"]="ئه",e["ﲜ"]="بج",e["ﲝ"]="بح",e["ﲞ"]="بخ",e["ﲟ"]="بم",e["ﲠ"]="به",e["ﲡ"]="تج",e["ﲢ"]="تح",e["ﲣ"]="تخ",e["ﲤ"]="تم",e["ﲥ"]="ته",e["ﲦ"]="ثم",e["ﲧ"]="جح",e["ﲨ"]="جم",e["ﲩ"]="حج",e["ﲪ"]="حم",e["ﲫ"]="خج",e["ﲬ"]="خم",e["ﲭ"]="سج",e["ﲮ"]="سح",e["ﲯ"]="سخ",e["ﲰ"]="سم",e["ﲱ"]="صح",e["ﲲ"]="صخ",e["ﲳ"]="صم",e["ﲴ"]="ضج",e["ﲵ"]="ضح",e["ﲶ"]="ضخ",e["ﲷ"]="ضم",e["ﲸ"]="طح",e["ﲹ"]="ظم",e["ﲺ"]="عج",e["ﲻ"]="عم",e["ﲼ"]="غج",e["ﲽ"]="غم",e["ﲾ"]="فج"
e["ﲿ"]="فح",e["ﳀ"]="فخ",e["ﳁ"]="فم",e["ﳂ"]="قح",e["ﳃ"]="قم",e["ﳄ"]="كج",e["ﳅ"]="كح",e["ﳆ"]="كخ",e["ﳇ"]="كل",e["ﳈ"]="كم",e["ﳉ"]="لج",e["ﳊ"]="لح",e["ﳋ"]="لخ",e["ﳌ"]="لم",e["ﳍ"]="له",e["ﳎ"]="مج",e["ﳏ"]="مح",e["ﳐ"]="مخ",e["ﳑ"]="مم",e["ﳒ"]="نج",e["ﳓ"]="نح",e["ﳔ"]="نخ",e["ﳕ"]="نم",e["ﳖ"]="نه",e["ﳗ"]="هج",e["ﳘ"]="هم",e["ﳙ"]="هٰ",e["ﳚ"]="يج",e["ﳛ"]="يح",e["ﳜ"]="يخ",e["ﳝ"]="يم",e["ﳞ"]="يه",e["ﳟ"]="ئم",e["ﳠ"]="ئه",e["ﳡ"]="بم",e["ﳢ"]="به",e["ﳣ"]="تم",e["ﳤ"]="ته",e["ﳥ"]="ثم",e["ﳦ"]="ثه",e["ﳧ"]="سم",e["ﳨ"]="سه",e["ﳩ"]="شم",e["ﳪ"]="شه",e["ﳫ"]="كل",e["ﳬ"]="كم",e["ﳭ"]="لم",e["ﳮ"]="نم",e["ﳯ"]="نه",e["ﳰ"]="يم",e["ﳱ"]="يه",e["ﳲ"]="ـَّ",e["ﳳ"]="ـُّ",e["ﳴ"]="ـِّ",e["ﳵ"]="طى",e["ﳶ"]="طي",e["ﳷ"]="عى",e["ﳸ"]="عي",e["ﳹ"]="غى",e["ﳺ"]="غي",e["ﳻ"]="سى",e["ﳼ"]="سي",e["ﳽ"]="شى",e["ﳾ"]="شي",e["ﳿ"]="حى",e["ﴀ"]="حي",e["ﴁ"]="جى",e["ﴂ"]="جي",e["ﴃ"]="خى",e["ﴄ"]="خي",e["ﴅ"]="صى",e["ﴆ"]="صي",e["ﴇ"]="ضى",e["ﴈ"]="ضي",e["ﴉ"]="شج",e["ﴊ"]="شح",e["ﴋ"]="شخ",e["ﴌ"]="شم",e["ﴍ"]="شر",e["ﴎ"]="سر",e["ﴏ"]="صر",e["ﴐ"]="ضر",e["ﴑ"]="طى",e["ﴒ"]="طي",e["ﴓ"]="عى",e["ﴔ"]="عي",e["ﴕ"]="غى",e["ﴖ"]="غي",e["ﴗ"]="سى",e["ﴘ"]="سي",e["ﴙ"]="شى",e["ﴚ"]="شي",e["ﴛ"]="حى",e["ﴜ"]="حي",e["ﴝ"]="جى",e["ﴞ"]="جي",e["ﴟ"]="خى",e["ﴠ"]="خي",e["ﴡ"]="صى",e["ﴢ"]="صي",e["ﴣ"]="ضى",e["ﴤ"]="ضي",e["ﴥ"]="شج",e["ﴦ"]="شح",e["ﴧ"]="شخ",e["ﴨ"]="شم",e["ﴩ"]="شر",e["ﴪ"]="سر",e["ﴫ"]="صر",e["ﴬ"]="ضر",e["ﴭ"]="شج",e["ﴮ"]="شح",e["ﴯ"]="شخ",e["ﴰ"]="شم",e["ﴱ"]="سه",e["ﴲ"]="شه",e["ﴳ"]="طم",e["ﴴ"]="سج",e["ﴵ"]="سح",e["ﴶ"]="سخ",e["ﴷ"]="شج",e["ﴸ"]="شح",e["ﴹ"]="شخ",e["ﴺ"]="طم",e["ﴻ"]="ظم",e["ﴼ"]="اً",e["ﴽ"]="اً",e["ﵐ"]="تجم",e["ﵑ"]="تحج",e["ﵒ"]="تحج",e["ﵓ"]="تحم",e["ﵔ"]="تخم",e["ﵕ"]="تمج",e["ﵖ"]="تمح",e["ﵗ"]="تمخ",e["ﵘ"]="جمح",e["ﵙ"]="جمح",e["ﵚ"]="حمي",e["ﵛ"]="حمى",e["ﵜ"]="سحج",e["ﵝ"]="سجح",e["ﵞ"]="سجى",e["ﵟ"]="سمح",e["ﵠ"]="سمح",e["ﵡ"]="سمج",e["ﵢ"]="سمم",e["ﵣ"]="سمم",e["ﵤ"]="صحح",e["ﵥ"]="صحح",e["ﵦ"]="صمم",e["ﵧ"]="شحم",e["ﵨ"]="شحم",e["ﵩ"]="شجي",e["ﵪ"]="شمخ",e["ﵫ"]="شمخ",e["ﵬ"]="شمم",e["ﵭ"]="شمم",e["ﵮ"]="ضحى",e["ﵯ"]="ضخم",e["ﵰ"]="ضخم",e["ﵱ"]="طمح",e["ﵲ"]="طمح",e["ﵳ"]="طمم",e["ﵴ"]="طمي",e["ﵵ"]="عجم",e["ﵶ"]="عمم",e["ﵷ"]="عمم",e["ﵸ"]="عمى",e["ﵹ"]="غمم",e["ﵺ"]="غمي",e["ﵻ"]="غمى",e["ﵼ"]="فخم",e["ﵽ"]="فخم",e["ﵾ"]="قمح",e["ﵿ"]="قمم",e["ﶀ"]="لحم",e["ﶁ"]="لحي",e["ﶂ"]="لحى",e["ﶃ"]="لجج",e["ﶄ"]="لجج",e["ﶅ"]="لخم",e["ﶆ"]="لخم",e["ﶇ"]="لمح",e["ﶈ"]="لمح",e["ﶉ"]="محج",e["ﶊ"]="محم",e["ﶋ"]="محي",e["ﶌ"]="مجح",e["ﶍ"]="مجم",e["ﶎ"]="مخج",e["ﶏ"]="مخم",e["ﶒ"]="مجخ",e["ﶓ"]="همج",e["ﶔ"]="همم",e["ﶕ"]="نحم",e["ﶖ"]="نحى",e["ﶗ"]="نجم",e["ﶘ"]="نجم",e["ﶙ"]="نجى",e["ﶚ"]="نمي"
e["ﶛ"]="نمى",e["ﶜ"]="يمم",e["ﶝ"]="يمم",e["ﶞ"]="بخي",e["ﶟ"]="تجي",e["ﶠ"]="تجى",e["ﶡ"]="تخي",e["ﶢ"]="تخى",e["ﶣ"]="تمي",e["ﶤ"]="تمى",e["ﶥ"]="جمي",e["ﶦ"]="جحى",e["ﶧ"]="جمى",e["ﶨ"]="سخى",e["ﶩ"]="صحي",e["ﶪ"]="شحي",e["ﶫ"]="ضحي",e["ﶬ"]="لجي",e["ﶭ"]="لمي",e["ﶮ"]="يحي",e["ﶯ"]="يجي",e["ﶰ"]="يمي",e["ﶱ"]="ممي",e["ﶲ"]="قمي",e["ﶳ"]="نحي",e["ﶴ"]="قمح",e["ﶵ"]="لحم",e["ﶶ"]="عمي",e["ﶷ"]="كمي",e["ﶸ"]="نجح",e["ﶹ"]="مخي",e["ﶺ"]="لجم",e["ﶻ"]="كمم",e["ﶼ"]="لجم",e["ﶽ"]="نجح",e["ﶾ"]="جحي",e["ﶿ"]="حجي",e["ﷀ"]="مجي",e["ﷁ"]="فمي",e["ﷂ"]="بحي",e["ﷃ"]="كمم",e["ﷄ"]="عجم",e["ﷅ"]="صمم",e["ﷆ"]="سخي",e["ﷇ"]="نجي",e["﹉"]="‾",e["﹊"]="‾",e["﹋"]="‾",e["﹌"]="‾",e["﹍"]="_",e["﹎"]="_",e["﹏"]="_",e["ﺀ"]="ء",e["ﺁ"]="آ",e["ﺂ"]="آ",e["ﺃ"]="أ",e["ﺄ"]="أ",e["ﺅ"]="ؤ",e["ﺆ"]="ؤ",e["ﺇ"]="إ",e["ﺈ"]="إ",e["ﺉ"]="ئ",e["ﺊ"]="ئ",e["ﺋ"]="ئ",e["ﺌ"]="ئ",e["ﺍ"]="ا",e["ﺎ"]="ا",e["ﺏ"]="ب",e["ﺐ"]="ب",e["ﺑ"]="ب",e["ﺒ"]="ب",e["ﺓ"]="ة",e["ﺔ"]="ة",e["ﺕ"]="ت",e["ﺖ"]="ت",e["ﺗ"]="ت",e["ﺘ"]="ت",e["ﺙ"]="ث",e["ﺚ"]="ث",e["ﺛ"]="ث",e["ﺜ"]="ث",e["ﺝ"]="ج",e["ﺞ"]="ج",e["ﺟ"]="ج",e["ﺠ"]="ج",e["ﺡ"]="ح",e["ﺢ"]="ح",e["ﺣ"]="ح",e["ﺤ"]="ح",e["ﺥ"]="خ",e["ﺦ"]="خ",e["ﺧ"]="خ",e["ﺨ"]="خ",e["ﺩ"]="د",e["ﺪ"]="د",e["ﺫ"]="ذ",e["ﺬ"]="ذ",e["ﺭ"]="ر",e["ﺮ"]="ر",e["ﺯ"]="ز",e["ﺰ"]="ز",e["ﺱ"]="س",e["ﺲ"]="س",e["ﺳ"]="س",e["ﺴ"]="س",e["ﺵ"]="ش",e["ﺶ"]="ش",e["ﺷ"]="ش",e["ﺸ"]="ش",e["ﺹ"]="ص",e["ﺺ"]="ص",e["ﺻ"]="ص",e["ﺼ"]="ص",e["ﺽ"]="ض",e["ﺾ"]="ض",e["ﺿ"]="ض",e["ﻀ"]="ض",e["ﻁ"]="ط",e["ﻂ"]="ط",e["ﻃ"]="ط",e["ﻄ"]="ط",e["ﻅ"]="ظ",e["ﻆ"]="ظ",e["ﻇ"]="ظ",e["ﻈ"]="ظ",e["ﻉ"]="ع",e["ﻊ"]="ع",e["ﻋ"]="ع",e["ﻌ"]="ع",e["ﻍ"]="غ",e["ﻎ"]="غ",e["ﻏ"]="غ",e["ﻐ"]="غ",e["ﻑ"]="ف",e["ﻒ"]="ف",e["ﻓ"]="ف",e["ﻔ"]="ف",e["ﻕ"]="ق",e["ﻖ"]="ق",e["ﻗ"]="ق",e["ﻘ"]="ق",e["ﻙ"]="ك",e["ﻚ"]="ك",e["ﻛ"]="ك",e["ﻜ"]="ك",e["ﻝ"]="ل",e["ﻞ"]="ل",e["ﻟ"]="ل",e["ﻠ"]="ل",e["ﻡ"]="م",e["ﻢ"]="م",e["ﻣ"]="م",e["ﻤ"]="م",e["ﻥ"]="ن",e["ﻦ"]="ن",e["ﻧ"]="ن",e["ﻨ"]="ن",e["ﻩ"]="ه",e["ﻪ"]="ه",e["ﻫ"]="ه",e["ﻬ"]="ه",e["ﻭ"]="و",e["ﻮ"]="و",e["ﻯ"]="ى",e["ﻰ"]="ى",e["ﻱ"]="ي",e["ﻲ"]="ي",e["ﻳ"]="ي",e["ﻴ"]="ي",e["ﻵ"]="لآ",e["ﻶ"]="لآ",e["ﻷ"]="لأ",e["ﻸ"]="لأ",e["ﻹ"]="لإ",e["ﻺ"]="لإ",e["ﻻ"]="لا",e["ﻼ"]="لا"})
t.mapSpecialUnicodeValues=a,t.reverseIfRtl=s,t.getUnicodeRangeFor=n,t.getNormalizedUnicodes=h,t.getUnicodeForGlyph=i},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.WorkerMessageHandler=t.WorkerTask=void 0
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(0),n=r(100),o=r(1),s=function(){function e(e){this.name=e,this.terminated=!1,this._capability=(0,i.createPromiseCapability)()}return e.prototype={get finished(){return this._capability.promise},finish:function(){this._capability.resolve()},terminate:function(){this.terminated=!0},ensureNotTerminated:function(){if(this.terminated)throw new Error("Worker task was terminated")}},e}(),c=function(){function e(e){this._msgHandler=e,this._contentLength=null,this._fullRequestReader=null,this._rangeRequestReaders=[]}function t(e){var t=this
this._msgHandler=e,this._contentLength=null,this._isRangeSupported=!1,this._isStreamingSupported=!1
var r=this._msgHandler.sendWithStream("GetReader")
this._reader=r.getReader(),this._headersReady=this._msgHandler.sendWithPromise("ReaderHeadersReady").then(function(e){t._isStreamingSupported=e.isStreamingSupported,t._isRangeSupported=e.isRangeSupported,t._contentLength=e.contentLength})}function r(e,t,r){this._msgHandler=r,this.onProgress=null
var a=this._msgHandler.sendWithStream("GetRangeReader",{begin:e,end:t})
this._reader=a.getReader()}return e.prototype={getFullReader:function(){return(0,i.assert)(!this._fullRequestReader),this._fullRequestReader=new t(this._msgHandler),this._fullRequestReader},getRangeReader:function(e,t){var a=new r(e,t,this._msgHandler)
return this._rangeRequestReaders.push(a),a},cancelAllRequests:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach(function(t){t.cancel(e)})}},t.prototype={get headersReady(){return this._headersReady},get contentLength(){return this._contentLength},get isStreamingSupported(){return this._isStreamingSupported},get isRangeSupported(){return this._isRangeSupported},read:function(){return this._reader.read().then(function(e){var t=e.value
return e.done?{value:void 0,done:!0}:{value:t.buffer,done:!1}})},cancel:function(e){this._reader.cancel(e)}},r.prototype={get isStreamingSupported(){return!1},read:function(){return this._reader.read().then(function(e){var t=e.value
return e.done?{value:void 0,done:!0}:{value:t.buffer,done:!1}})},cancel:function(e){this._reader.cancel(e)}},e}(),l={setup:function(e,t){var r=!1
e.on("test",function(t){if(!r){if(r=!0,!(t instanceof Uint8Array))return void e.send("test","main",!1)
var a=255===t[0]
e.postMessageTransfers=a
var i=new XMLHttpRequest,n="response"in i
try{i.responseType}catch(e){n=!1}if(!n)return void e.send("test",!1)
e.send("test",{supportTypedArray:!0,supportTransfers:a})}}),e.on("configure",function(e){(0,i.setVerbosityLevel)(e.verbosity)}),e.on("GetDocRequest",function(e){return l.createDocumentHandler(e,t)})},createDocumentHandler:function(e,t){function r(){if(m)throw new Error("Worker was terminated")}function l(e){b.push(e)}function u(e){e.finish()
var t=b.indexOf(e)
b.splice(t,1)}function h(e){var t=(0,i.createPromiseCapability)(),r=function(){var e=g.ensureDoc("numPages"),r=g.ensureDoc("fingerprint"),i=g.ensureXRef("encrypt")
Promise.all([e,r,i]).then(function(e){var r={numPages:e[0],fingerprint:e[1],encrypted:!!e[2]}
t.resolve(r)},a)},a=function(e){t.reject(e)}
return g.ensureDoc("checkHeader",[]).then(function(){g.ensureDoc("parseStartXRef",[]).then(function(){g.ensureDoc("parse",[e]).then(r,a)},a)},a),t.promise}function f(e,t){var a,o=(0,i.createPromiseCapability)(),s=e.source
if(s.data){try{a=new n.LocalPdfManager(v,s.data,s.password,t,y),o.resolve(a)}catch(e){o.reject(e)}return o.promise}var l,u=[]
try{l=new c(k)}catch(e){return o.reject(e),o.promise}var h=l.getFullReader()
h.headersReady.then(function(){if(h.isRangeSupported){var e=s.disableAutoFetch||h.isStreamingSupported
a=new n.NetworkPdfManager(v,l,{msgHandler:k,url:s.url,password:s.password,length:h.contentLength,disableAutoFetch:e,rangeChunkSize:s.rangeChunkSize},t,y)
for(var r=0;r<u.length;r++)a.sendProgressiveData(u[r])
u=[],o.resolve(a),p=null}}).catch(function(e){o.reject(e),p=null})
var f=0,d=function(){var e=(0,i.arraysToBytes)(u)
s.length&&e.length!==s.length&&(0,i.warn)("reported HTTP length is different from actual")
try{a=new n.LocalPdfManager(v,e,s.password,t,y),o.resolve(a)}catch(e){o.reject(e)}u=[]}
return new Promise(function(e,t){var n=function e(n){try{if(r(),n.done)return a||d(),void(p=null)
var o=n.value
f+=(0,i.arrayByteLength)(o),h.isStreamingSupported||k.send("DocProgress",{loaded:f,total:Math.max(f,h.contentLength||0)}),a?a.sendProgressiveData(o):u.push(o),h.read().then(e,t)}catch(e){t(e)}}
h.read().then(n,t)}).catch(function(e){o.reject(e),p=null}),p=function(){l.cancelAllRequests("abort")},o.promise}function d(e){function t(e){r(),k.send("GetDoc",{pdfInfo:e})}function a(e){if(r(),e instanceof i.PasswordException){var t=new s("PasswordException: response "+e.code)
l(t),k.sendWithPromise("PasswordRequest",e).then(function(e){u(t),g.updatePassword(e.password),n()}).catch(function(e){u(t),k.send("PasswordException",e)}.bind(null,e))}else e instanceof i.InvalidPDFException?k.send("InvalidPDF",e):e instanceof i.MissingPDFException?k.send("MissingPDF",e):e instanceof i.UnexpectedResponseException?k.send("UnexpectedResponse",e):k.send("UnknownError",new i.UnknownErrorException(e.message,e.toString()))}function n(){r(),h(!1).then(t,function(e){if(r(),!(e instanceof i.XRefParseException))return void a(e)
g.requestLoadedStream(),g.onLoadedStream().then(function(){r(),h(!0).then(t,a)})},a)}r(),f(e,{forceDataSchema:e.disableCreateObjectURL,maxImageSize:void 0===e.maxImageSize?-1:e.maxImageSize,disableFontFace:e.disableFontFace,nativeImageDecoderSupport:e.nativeImageDecoderSupport,ignoreErrors:e.ignoreErrors}).then(function(e){if(m)throw e.terminate(),new Error("Worker was terminated")
g=e,k.send("PDFManagerReady",null),g.onLoadedStream().then(function(e){k.send("DataLoaded",{length:e.bytes.byteLength})})}).then(n,a)}var g,m=!1,p=null,b=[],v=e.docId,y=e.docBaseUrl,w=e.docId+"_worker",k=new i.MessageHandler(w,v,t)
return k.postMessageTransfers=e.postMessageTransfers,k.on("GetPage",function(e){return g.getPage(e.pageIndex).then(function(e){var t=g.ensure(e,"rotate"),r=g.ensure(e,"ref"),a=g.ensure(e,"userUnit"),i=g.ensure(e,"view")
return Promise.all([t,r,a,i]).then(function(e){return{rotate:e[0],ref:e[1],userUnit:e[2],view:e[3]}})})}),k.on("GetPageIndex",function(e){var t=new o.Ref(e.ref.num,e.ref.gen)
return g.pdfDocument.catalog.getPageIndex(t)}),k.on("GetDestinations",function(e){return g.ensureCatalog("destinations")}),k.on("GetDestination",function(e){return g.ensureCatalog("getDestination",[e.id])}),k.on("GetPageLabels",function(e){return g.ensureCatalog("pageLabels")}),k.on("GetPageMode",function(e){return g.ensureCatalog("pageMode")}),k.on("GetAttachments",function(e){return g.ensureCatalog("attachments")}),k.on("GetJavaScript",function(e){return g.ensureCatalog("javaScript")}),k.on("GetOutline",function(e){return g.ensureCatalog("documentOutline")}),k.on("GetMetadata",function(e){return Promise.all([g.ensureDoc("documentInfo"),g.ensureCatalog("metadata")])}),k.on("GetData",function(e){return g.requestLoadedStream(),g.onLoadedStream().then(function(e){return e.bytes})}),k.on("GetStats",function(e){return g.pdfDocument.xref.stats}),k.on("GetAnnotations",function(e){return g.getPage(e.pageIndex).then(function(t){return g.ensure(t,"getAnnotationsData",[e.intent])})}),k.on("RenderPageRequest",function(e){var t=e.pageIndex
g.getPage(t).then(function(r){var n=new s("RenderPageRequest: page "+t)
l(n)
var o=t+1,c=Date.now()
r.getOperatorList({handler:k,task:n,intent:e.intent,renderInteractiveForms:e.renderInteractiveForms}).then(function(e){u(n),(0,i.info)("page="+o+" - getOperatorList: time="+(Date.now()-c)+"ms, len="+e.totalLength)},function(t){if(u(n),!n.terminated){k.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.unknown})
var r,s="worker.js: while trying to getPage() and getOperatorList()"
r="string"==typeof t?{message:t,stack:s}:"object"===(void 0===t?"undefined":a(t))?{message:t.message||t.toString(),stack:t.stack||s}:{message:"Unknown exception type: "+(void 0===t?"undefined":a(t)),stack:s},k.send("PageError",{pageNum:o,error:r,intent:e.intent})}})})},this),k.on("GetTextContent",function(e,t){var r=e.pageIndex
t.onPull=function(e){},t.onCancel=function(e){},g.getPage(r).then(function(a){var n=new s("GetTextContent: page "+r)
l(n)
var o=r+1,c=Date.now()
a.extractTextContent({handler:k,task:n,sink:t,normalizeWhitespace:e.normalizeWhitespace,combineTextItems:e.combineTextItems}).then(function(){u(n),(0,i.info)("text indexing: page="+o+" - time="+(Date.now()-c)+"ms"),t.close()},function(e){if(u(n),!n.terminated)throw t.error(e),e})})}),k.on("Cleanup",function(e){return g.cleanup()}),k.on("Terminate",function(e){m=!0,g&&(g.terminate(),g=null),p&&p()
var t=[]
return b.forEach(function(e){t.push(e.finished),e.terminate()}),Promise.all(t).then(function(){k.destroy(),k=null})}),k.on("Ready",function(t){d(e),e=null}),w},initializeFromPort:function(e){var t=new i.MessageHandler("worker","main",e)
l.setup(t,e),t.send("ready",null)}}
"undefined"==typeof window&&!(0,i.isNodeJS)()&&"undefined"!=typeof self&&function(e){return"function"==typeof e.postMessage&&"onmessage"in e}(self)&&l.initializeFromPort(self),t.WorkerTask=s,t.WorkerMessageHandler=l},function(e,t,r){"use strict"
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){function t(a){if(r[a])return r[a].exports
var i=r[a]={i:a,l:!1,exports:{}}
return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={}
return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e}
return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,r){function i(e){return"string"==typeof e||"symbol"===(void 0===e?"undefined":o(e))}function n(e,t,r){if("function"!=typeof e)throw new TypeError("Argument is not a function")
return Function.prototype.apply.call(e,t,r)}var o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return void 0===e?"undefined":a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":a(e)},s=r(1),c=s.assert
t.typeIsObject=function(e){return"object"===(void 0===e?"undefined":o(e))&&null!==e||"function"==typeof e},t.createDataProperty=function(e,r,a){c(t.typeIsObject(e)),Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0})},t.createArrayFromList=function(e){return e.slice()},t.ArrayBufferCopy=function(e,t,r,a,i){new Uint8Array(e).set(new Uint8Array(r,a,i),t)},t.CreateIterResultObject=function(e,t){c("boolean"==typeof t)
var r={}
return Object.defineProperty(r,"value",{value:e,enumerable:!0,writable:!0,configurable:!0}),Object.defineProperty(r,"done",{value:t,enumerable:!0,writable:!0,configurable:!0}),r},t.IsFiniteNonNegativeNumber=function(e){return!Number.isNaN(e)&&(e!==1/0&&!(e<0))},t.InvokeOrNoop=function(e,t,r){c(void 0!==e),c(i(t)),c(Array.isArray(r))
var a=e[t]
if(void 0!==a)return n(a,e,r)},t.PromiseInvokeOrNoop=function(e,r,a){c(void 0!==e),c(i(r)),c(Array.isArray(a))
try{return Promise.resolve(t.InvokeOrNoop(e,r,a))}catch(e){return Promise.reject(e)}},t.PromiseInvokeOrPerformFallback=function(e,t,r,a,o){c(void 0!==e),c(i(t)),c(Array.isArray(r)),c(Array.isArray(o))
var s=void 0
try{s=e[t]}catch(e){return Promise.reject(e)}if(void 0===s)return a.apply(null,o)
try{return Promise.resolve(n(s,e,r))}catch(e){return Promise.reject(e)}},t.TransferArrayBuffer=function(e){return e.slice()},t.ValidateAndNormalizeHighWaterMark=function(e){if(e=Number(e),Number.isNaN(e)||e<0)throw new RangeError("highWaterMark property of a queuing strategy must be non-negative and non-NaN")
return e},t.ValidateAndNormalizeQueuingStrategy=function(e,r){if(void 0!==e&&"function"!=typeof e)throw new TypeError("size property of a queuing strategy must be a function")
return r=t.ValidateAndNormalizeHighWaterMark(r),{size:e,highWaterMark:r}}},function(e,t,r){function a(e){e&&e.constructor===i&&setTimeout(function(){throw e},0)}function i(e){this.name="AssertionError",this.message=e||"",this.stack=(new Error).stack}function n(e,t){if(!e)throw new i(t)}i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,e.exports={rethrowAssertionErrorRejection:a,AssertionError:i,assert:n}},function(e,t,r){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return new ye(e)}function n(e){return!!le(e)&&!!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")}function o(e){return he(!0===n(e),"IsWritableStreamLocked should only be used on known writable streams"),void 0!==e._writer}function s(e,t){var r=e._state
if("closed"===r)return Promise.resolve(void 0)
if("errored"===r)return Promise.reject(e._storedError)
var a=new TypeError("Requested to abort")
if(void 0!==e._pendingAbortRequest)return Promise.reject(a)
he("writable"===r||"erroring"===r,"state must be writable or erroring")
var i=!1
"erroring"===r&&(i=!0,t=void 0)
var n=new Promise(function(r,a){e._pendingAbortRequest={_resolve:r,_reject:a,_reason:t,_wasAlreadyErroring:i}})
return!1===i&&u(e,a),n}function c(e){return he(!0===o(e)),he("writable"===e._state),new Promise(function(t,r){var a={_resolve:t,_reject:r}
e._writeRequests.push(a)})}function l(e,t){var r=e._state
if("writable"===r)return void u(e,t)
he("erroring"===r),h(e)}function u(e,t){he(void 0===e._storedError,"stream._storedError === undefined"),he("writable"===e._state,"state must be writable")
var r=e._writableStreamController
he(void 0!==r,"controller must not be undefined"),e._state="erroring",e._storedError=t
var a=e._writer
void 0!==a&&I(a,t),!1===b(e)&&!0===r._started&&h(e)}function h(e){he("erroring"===e._state,"stream._state === erroring"),he(!1===b(e),"WritableStreamHasOperationMarkedInFlight(stream) === false"),e._state="errored",e._writableStreamController.__errorSteps()
for(var t=e._storedError,r=0;r<e._writeRequests.length;r++){e._writeRequests[r]._reject(t)}if(e._writeRequests=[],void 0===e._pendingAbortRequest)return void w(e)
var a=e._pendingAbortRequest
if(e._pendingAbortRequest=void 0,!0===a._wasAlreadyErroring)return a._reject(t),void w(e)
e._writableStreamController.__abortSteps(a._reason).then(function(){a._resolve(),w(e)},function(t){a._reject(t),w(e)})}function f(e){he(void 0!==e._inFlightWriteRequest),e._inFlightWriteRequest._resolve(void 0),e._inFlightWriteRequest=void 0}function d(e,t){he(void 0!==e._inFlightWriteRequest),e._inFlightWriteRequest._reject(t),e._inFlightWriteRequest=void 0,he("writable"===e._state||"erroring"===e._state),l(e,t)}function g(e){he(void 0!==e._inFlightCloseRequest),e._inFlightCloseRequest._resolve(void 0),e._inFlightCloseRequest=void 0
var t=e._state
he("writable"===t||"erroring"===t),"erroring"===t&&(e._storedError=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._resolve(),e._pendingAbortRequest=void 0)),e._state="closed"
var r=e._writer
void 0!==r&&J(r),he(void 0===e._pendingAbortRequest,"stream._pendingAbortRequest === undefined"),he(void 0===e._storedError,"stream._storedError === undefined")}function m(e,t){he(void 0!==e._inFlightCloseRequest),e._inFlightCloseRequest._reject(t),e._inFlightCloseRequest=void 0,he("writable"===e._state||"erroring"===e._state),void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._reject(t),e._pendingAbortRequest=void 0),l(e,t)}function p(e){return void 0!==e._closeRequest||void 0!==e._inFlightCloseRequest}function b(e){return void 0!==e._inFlightWriteRequest||void 0!==e._inFlightCloseRequest}function v(e){he(void 0===e._inFlightCloseRequest),he(void 0!==e._closeRequest),e._inFlightCloseRequest=e._closeRequest,e._closeRequest=void 0}function y(e){he(void 0===e._inFlightWriteRequest,"there must be no pending write request"),he(0!==e._writeRequests.length,"writeRequests must not be empty"),e._inFlightWriteRequest=e._writeRequests.shift()}function w(e){he("errored"===e._state,'_stream_.[[state]] is `"errored"`'),void 0!==e._closeRequest&&(he(void 0===e._inFlightCloseRequest),e._closeRequest._reject(e._storedError),e._closeRequest=void 0)
var t=e._writer
void 0!==t&&(Y(t,e._storedError),t._closedPromise.catch(function(){}))}function k(e,t){he("writable"===e._state),he(!1===p(e))
var r=e._writer
void 0!==r&&t!==e._backpressure&&(!0===t?te(r):(he(!1===t),ae(r))),e._backpressure=t}function S(e){return!!le(e)&&!!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")}function C(e,t){var r=e._ownerWritableStream
return he(void 0!==r),s(r,t)}function x(e){var t=e._ownerWritableStream
he(void 0!==t)
var r=t._state
if("closed"===r||"errored"===r)return Promise.reject(new TypeError("The stream (in "+r+" state) is not in the writable state and cannot be closed"))
he("writable"===r||"erroring"===r),he(!1===p(t))
var a=new Promise(function(e,r){var a={_resolve:e,_reject:r}
t._closeRequest=a})
return!0===t._backpressure&&"writable"===r&&ae(e),E(t._writableStreamController),a}function A(e){var t=e._ownerWritableStream
he(void 0!==t)
var r=t._state
return!0===p(t)||"closed"===r?Promise.resolve():"errored"===r?Promise.reject(t._storedError):(he("writable"===r||"erroring"===r),x(e))}function P(e,t){"pending"===e._closedPromiseState?Y(e,t):K(e,t),e._closedPromise.catch(function(){})}function I(e,t){"pending"===e._readyPromiseState?ee(e,t):re(e,t),e._readyPromise.catch(function(){})}function _(e){var t=e._ownerWritableStream,r=t._state
return"errored"===r||"erroring"===r?null:"closed"===r?0:F(t._writableStreamController)}function O(e){var t=e._ownerWritableStream
he(void 0!==t),he(t._writer===e)
var r=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness")
I(e,r),P(e,r),t._writer=void 0,e._ownerWritableStream=void 0}function T(e,t){var r=e._ownerWritableStream
he(void 0!==r)
var a=r._writableStreamController,i=R(a,t)
if(r!==e._ownerWritableStream)return Promise.reject(W("write to"))
var n=r._state
if("errored"===n)return Promise.reject(r._storedError)
if(!0===p(r)||"closed"===n)return Promise.reject(new TypeError("The stream is closing or closed and cannot be written to"))
if("erroring"===n)return Promise.reject(r._storedError)
he("writable"===n)
var o=c(r)
return B(a,t,i),o}function E(e){me(e,"close",0),D(e)}function R(e,t){var r=e._strategySize
if(void 0===r)return 1
try{return r(t)}catch(t){return L(e,t),1}}function F(e){return e._strategyHWM-e._queueTotalSize}function B(e,t,r){var a={chunk:t}
try{me(e,a,r)}catch(t){return void L(e,t)}var i=e._controlledWritableStream
if(!1===p(i)&&"writable"===i._state){k(i,j(e))}D(e)}function M(e){return!!le(e)&&!!Object.prototype.hasOwnProperty.call(e,"_underlyingSink")}function D(e){var t=e._controlledWritableStream
if(!1!==e._started&&void 0===t._inFlightWriteRequest){var r=t._state
if("closed"!==r&&"errored"!==r){if("erroring"===r)return void h(t)
if(0!==e._queue.length){var a=pe(e)
"close"===a?N(e):U(e,a.chunk)}}}}function L(e,t){"writable"===e._controlledWritableStream._state&&q(e,t)}function N(e){var t=e._controlledWritableStream
v(t),ge(e),he(0===e._queue.length,"queue must be empty once the final write record is dequeued"),se(e._underlyingSink,"close",[]).then(function(){g(t)},function(e){m(t,e)}).catch(fe)}function U(e,t){var r=e._controlledWritableStream
y(r),se(e._underlyingSink,"write",[t,e]).then(function(){f(r)
var t=r._state
if(he("writable"===t||"erroring"===t),ge(e),!1===p(r)&&"writable"===t){var a=j(e)
k(r,a)}D(e)},function(e){d(r,e)}).catch(fe)}function j(e){return F(e)<=0}function q(e,t){var r=e._controlledWritableStream
he("writable"===r._state),u(r,t)}function z(e){return new TypeError("WritableStream.prototype."+e+" can only be used on a WritableStream")}function H(e){return new TypeError("WritableStreamDefaultWriter.prototype."+e+" can only be used on a WritableStreamDefaultWriter")}function W(e){return new TypeError("Cannot "+e+" a stream using a released writer")}function G(e){e._closedPromise=new Promise(function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending"})}function X(e,t){e._closedPromise=Promise.reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected"}function V(e){e._closedPromise=Promise.resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved"}function Y(e,t){he(void 0!==e._closedPromise_resolve,"writer._closedPromise_resolve !== undefined"),he(void 0!==e._closedPromise_reject,"writer._closedPromise_reject !== undefined"),he("pending"===e._closedPromiseState,"writer._closedPromiseState is pending"),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected"}function K(e,t){he(void 0===e._closedPromise_resolve,"writer._closedPromise_resolve === undefined"),he(void 0===e._closedPromise_reject,"writer._closedPromise_reject === undefined"),he("pending"!==e._closedPromiseState,"writer._closedPromiseState is not pending"),e._closedPromise=Promise.reject(t),e._closedPromiseState="rejected"}function J(e){he(void 0!==e._closedPromise_resolve,"writer._closedPromise_resolve !== undefined"),he(void 0!==e._closedPromise_reject,"writer._closedPromise_reject !== undefined"),he("pending"===e._closedPromiseState,"writer._closedPromiseState is pending"),e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved"}function Z(e){e._readyPromise=new Promise(function(t,r){e._readyPromise_resolve=t,e._readyPromise_reject=r}),e._readyPromiseState="pending"}function Q(e,t){e._readyPromise=Promise.reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected"}function $(e){e._readyPromise=Promise.resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled"}function ee(e,t){he(void 0!==e._readyPromise_resolve,"writer._readyPromise_resolve !== undefined"),he(void 0!==e._readyPromise_reject,"writer._readyPromise_reject !== undefined"),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected"}function te(e){he(void 0===e._readyPromise_resolve,"writer._readyPromise_resolve === undefined"),he(void 0===e._readyPromise_reject,"writer._readyPromise_reject === undefined"),e._readyPromise=new Promise(function(t,r){e._readyPromise_resolve=t,e._readyPromise_reject=r}),e._readyPromiseState="pending"}function re(e,t){he(void 0===e._readyPromise_resolve,"writer._readyPromise_resolve === undefined"),he(void 0===e._readyPromise_reject,"writer._readyPromise_reject === undefined"),e._readyPromise=Promise.reject(t),e._readyPromiseState="rejected"}function ae(e){he(void 0!==e._readyPromise_resolve,"writer._readyPromise_resolve !== undefined"),he(void 0!==e._readyPromise_reject,"writer._readyPromise_reject !== undefined"),e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled"}var ie=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),ne=r(0),oe=ne.InvokeOrNoop,se=ne.PromiseInvokeOrNoop,ce=ne.ValidateAndNormalizeQueuingStrategy,le=ne.typeIsObject,ue=r(1),he=ue.assert,fe=ue.rethrowAssertionErrorRejection,de=r(3),ge=de.DequeueValue,me=de.EnqueueValueWithSize,pe=de.PeekQueueValue,be=de.ResetQueue,ve=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.size,n=r.highWaterMark,o=void 0===n?1:n
if(a(this,e),this._state="writable",this._storedError=void 0,this._writer=void 0,this._writableStreamController=void 0,this._writeRequests=[],this._inFlightWriteRequest=void 0,this._closeRequest=void 0,this._inFlightCloseRequest=void 0,this._pendingAbortRequest=void 0,this._backpressure=!1,void 0!==t.type)throw new RangeError("Invalid type is specified")
this._writableStreamController=new we(this,t,i,o),this._writableStreamController.__startSteps()}return ie(e,[{key:"abort",value:function(e){return!1===n(this)?Promise.reject(z("abort")):!0===o(this)?Promise.reject(new TypeError("Cannot abort a stream that already has a writer")):s(this,e)}},{key:"getWriter",value:function(){if(!1===n(this))throw z("getWriter")
return i(this)}},{key:"locked",get:function(){if(!1===n(this))throw z("locked")
return o(this)}}]),e}()
e.exports={AcquireWritableStreamDefaultWriter:i,IsWritableStream:n,IsWritableStreamLocked:o,WritableStream:ve,WritableStreamAbort:s,WritableStreamDefaultControllerError:q,WritableStreamDefaultWriterCloseWithErrorPropagation:A,WritableStreamDefaultWriterRelease:O,WritableStreamDefaultWriterWrite:T,WritableStreamCloseQueuedOrInFlight:p}
var ye=function(){function e(t){if(a(this,e),!1===n(t))throw new TypeError("WritableStreamDefaultWriter can only be constructed with a WritableStream instance")
if(!0===o(t))throw new TypeError("This stream has already been locked for exclusive writing by another writer")
this._ownerWritableStream=t,t._writer=this
var r=t._state
if("writable"===r)!1===p(t)&&!0===t._backpressure?Z(this):$(this),G(this)
else if("erroring"===r)Q(this,t._storedError),this._readyPromise.catch(function(){}),G(this)
else if("closed"===r)$(this),V(this)
else{he("errored"===r,"state must be errored")
var i=t._storedError
Q(this,i),this._readyPromise.catch(function(){}),X(this,i),this._closedPromise.catch(function(){})}}return ie(e,[{key:"abort",value:function(e){return!1===S(this)?Promise.reject(H("abort")):void 0===this._ownerWritableStream?Promise.reject(W("abort")):C(this,e)}},{key:"close",value:function(){if(!1===S(this))return Promise.reject(H("close"))
var e=this._ownerWritableStream
return void 0===e?Promise.reject(W("close")):!0===p(e)?Promise.reject(new TypeError("cannot close an already-closing stream")):x(this)}},{key:"releaseLock",value:function(){if(!1===S(this))throw H("releaseLock")
var e=this._ownerWritableStream
void 0!==e&&(he(void 0!==e._writer),O(this))}},{key:"write",value:function(e){return!1===S(this)?Promise.reject(H("write")):void 0===this._ownerWritableStream?Promise.reject(W("write to")):T(this,e)}},{key:"closed",get:function(){return!1===S(this)?Promise.reject(H("closed")):this._closedPromise}},{key:"desiredSize",get:function(){if(!1===S(this))throw H("desiredSize")
if(void 0===this._ownerWritableStream)throw W("desiredSize")
return _(this)}},{key:"ready",get:function(){return!1===S(this)?Promise.reject(H("ready")):this._readyPromise}}]),e}(),we=function(){function e(t,r,i,o){if(a(this,e),!1===n(t))throw new TypeError("WritableStreamDefaultController can only be constructed with a WritableStream instance")
if(void 0!==t._writableStreamController)throw new TypeError("WritableStreamDefaultController instances can only be created by the WritableStream constructor")
this._controlledWritableStream=t,this._underlyingSink=r,this._queue=void 0,this._queueTotalSize=void 0,be(this),this._started=!1
var s=ce(i,o)
this._strategySize=s.size,this._strategyHWM=s.highWaterMark,k(t,j(this))}return ie(e,[{key:"error",value:function(e){if(!1===M(this))throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController")
"writable"===this._controlledWritableStream._state&&q(this,e)}},{key:"__abortSteps",value:function(e){return se(this._underlyingSink,"abort",[e])}},{key:"__errorSteps",value:function(){be(this)}},{key:"__startSteps",value:function(){var e=this,t=oe(this._underlyingSink,"start",[this]),r=this._controlledWritableStream
Promise.resolve(t).then(function(){he("writable"===r._state||"erroring"===r._state),e._started=!0,D(e)},function(t){he("writable"===r._state||"erroring"===r._state),e._started=!0,l(r,t)}).catch(fe)}}]),e}()},function(e,t,r){var a=r(0),i=a.IsFiniteNonNegativeNumber,n=r(1),o=n.assert
t.DequeueValue=function(e){o("_queue"in e&&"_queueTotalSize"in e,"Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."),o(e._queue.length>0,"Spec-level failure: should never dequeue from an empty queue.")
var t=e._queue.shift()
return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value},t.EnqueueValueWithSize=function(e,t,r){if(o("_queue"in e&&"_queueTotalSize"in e,"Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and [[queueTotalSize]]."),r=Number(r),!i(r))throw new RangeError("Size must be a finite, non-NaN, non-negative number.")
e._queue.push({value:t,size:r}),e._queueTotalSize+=r},t.PeekQueueValue=function(e){return o("_queue"in e&&"_queueTotalSize"in e,"Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."),o(e._queue.length>0,"Spec-level failure: should never peek at an empty queue."),e._queue[0].value},t.ResetQueue=function(e){o("_queue"in e&&"_queueTotalSize"in e,"Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]]."),e._queue=[],e._queueTotalSize=0}},function(e,t,r){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return new tt(e)}function n(e){return new et(e)}function o(e){return!!De(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")}function s(e){return Ne(!0===o(e),"IsReadableStreamDisturbed should only be used on known readable streams"),e._disturbed}function c(e){return Ne(!0===o(e),"IsReadableStreamLocked should only be used on known readable streams"),void 0!==e._reader}function l(e,t){Ne(!0===o(e)),Ne("boolean"==typeof t)
var r=n(e),a={closedOrErrored:!1,canceled1:!1,canceled2:!1,reason1:void 0,reason2:void 0}
a.promise=new Promise(function(e){a._resolve=e})
var i=u()
i._reader=r,i._teeState=a,i._cloneForBranch2=t
var s=h()
s._stream=e,s._teeState=a
var c=f()
c._stream=e,c._teeState=a
var l=Object.create(Object.prototype)
Me(l,"pull",i),Me(l,"cancel",s)
var d=new $e(l),g=Object.create(Object.prototype)
Me(g,"pull",i),Me(g,"cancel",c)
var m=new $e(g)
return i._branch1=d._readableStreamController,i._branch2=m._readableStreamController,r._closedPromise.catch(function(e){!0!==a.closedOrErrored&&(D(i._branch1,e),D(i._branch2,e),a.closedOrErrored=!0)}),[d,m]}function u(){function e(){var t=e._reader,r=e._branch1,a=e._branch2,i=e._teeState
return T(t).then(function(e){Ne(De(e))
var t=e.value,n=e.done
if(Ne("boolean"==typeof n),!0===n&&!1===i.closedOrErrored&&(!1===i.canceled1&&B(r),!1===i.canceled2&&B(a),i.closedOrErrored=!0),!0!==i.closedOrErrored){var o=t,s=t
!1===i.canceled1&&M(r,o),!1===i.canceled2&&M(a,s)}})}return e}function h(){function e(t){var r=e._stream,a=e._teeState
if(a.canceled1=!0,a.reason1=t,!0===a.canceled2){var i=Be([a.reason1,a.reason2]),n=m(r,i)
a._resolve(n)}return a.promise}return e}function f(){function e(t){var r=e._stream,a=e._teeState
if(a.canceled2=!0,a.reason2=t,!0===a.canceled1){var i=Be([a.reason1,a.reason2]),n=m(r,i)
a._resolve(n)}return a.promise}return e}function d(e){return Ne(!0===x(e._reader)),Ne("readable"===e._state||"closed"===e._state),new Promise(function(t,r){var a={_resolve:t,_reject:r}
e._reader._readIntoRequests.push(a)})}function g(e){return Ne(!0===A(e._reader)),Ne("readable"===e._state),new Promise(function(t,r){var a={_resolve:t,_reject:r}
e._reader._readRequests.push(a)})}function m(e,t){return e._disturbed=!0,"closed"===e._state?Promise.resolve(void 0):"errored"===e._state?Promise.reject(e._storedError):(p(e),e._readableStreamController.__cancelSteps(t).then(function(){}))}function p(e){Ne("readable"===e._state),e._state="closed"
var t=e._reader
if(void 0!==t){if(!0===A(t)){for(var r=0;r<t._readRequests.length;r++){(0,t._readRequests[r]._resolve)(Pe(void 0,!0))}t._readRequests=[]}be(t)}}function b(e,t){Ne(!0===o(e),"stream must be ReadableStream"),Ne("readable"===e._state,"state must be readable"),e._state="errored",e._storedError=t
var r=e._reader
if(void 0!==r){if(!0===A(r)){for(var a=0;a<r._readRequests.length;a++){r._readRequests[a]._reject(t)}r._readRequests=[]}else{Ne(x(r),"reader must be ReadableStreamBYOBReader")
for(var i=0;i<r._readIntoRequests.length;i++){r._readIntoRequests[i]._reject(t)}r._readIntoRequests=[]}me(r,t),r._closedPromise.catch(function(){})}}function v(e,t,r){var a=e._reader
Ne(a._readIntoRequests.length>0),a._readIntoRequests.shift()._resolve(Pe(t,r))}function y(e,t,r){var a=e._reader
Ne(a._readRequests.length>0),a._readRequests.shift()._resolve(Pe(t,r))}function w(e){return e._reader._readIntoRequests.length}function k(e){return e._reader._readRequests.length}function S(e){var t=e._reader
return void 0!==t&&!1!==x(t)}function C(e){var t=e._reader
return void 0!==t&&!1!==A(t)}function x(e){return!!De(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")}function A(e){return!!De(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readRequests")}function P(e,t){e._ownerReadableStream=t,t._reader=e,"readable"===t._state?fe(e):"closed"===t._state?ge(e):(Ne("errored"===t._state,"state must be errored"),de(e,t._storedError),e._closedPromise.catch(function(){}))}function I(e,t){var r=e._ownerReadableStream
return Ne(void 0!==r),m(r,t)}function _(e){Ne(void 0!==e._ownerReadableStream),Ne(e._ownerReadableStream._reader===e),"readable"===e._ownerReadableStream._state?me(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):pe(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),e._closedPromise.catch(function(){}),e._ownerReadableStream._reader=void 0,e._ownerReadableStream=void 0}function O(e,t){var r=e._ownerReadableStream
return Ne(void 0!==r),r._disturbed=!0,"errored"===r._state?Promise.reject(r._storedError):Z(r._readableStreamController,t)}function T(e){var t=e._ownerReadableStream
return Ne(void 0!==t),t._disturbed=!0,"closed"===t._state?Promise.resolve(Pe(void 0,!0)):"errored"===t._state?Promise.reject(t._storedError):(Ne("readable"===t._state),t._readableStreamController.__pullSteps())}function E(e){return!!De(e)&&!!Object.prototype.hasOwnProperty.call(e,"_underlyingSource")}function R(e){if(!1!==F(e)){if(!0===e._pulling)return void(e._pullAgain=!0)
Ne(!1===e._pullAgain),e._pulling=!0,Oe(e._underlyingSource,"pull",[e]).then(function(){if(e._pulling=!1,!0===e._pullAgain)return e._pullAgain=!1,R(e)},function(t){L(e,t)}).catch(Ue)}}function F(e){var t=e._controlledReadableStream
return"closed"!==t._state&&"errored"!==t._state&&(!0!==e._closeRequested&&(!1!==e._started&&(!0===c(t)&&k(t)>0||N(e)>0)))}function B(e){var t=e._controlledReadableStream
Ne(!1===e._closeRequested),Ne("readable"===t._state),e._closeRequested=!0,0===e._queue.length&&p(t)}function M(e,t){var r=e._controlledReadableStream
if(Ne(!1===e._closeRequested),Ne("readable"===r._state),!0===c(r)&&k(r)>0)y(r,t,!1)
else{var a=1
if(void 0!==e._strategySize){var i=e._strategySize
try{a=i(t)}catch(t){throw L(e,t),t}}try{ze(e,t,a)}catch(t){throw L(e,t),t}}R(e)}function D(e,t){var r=e._controlledReadableStream
Ne("readable"===r._state),He(e),b(r,t)}function L(e,t){"readable"===e._controlledReadableStream._state&&D(e,t)}function N(e){var t=e._controlledReadableStream,r=t._state
return"errored"===r?null:"closed"===r?0:e._strategyHWM-e._queueTotalSize}function U(e){return!!De(e)&&!!Object.prototype.hasOwnProperty.call(e,"_underlyingByteSource")}function j(e){return!!De(e)&&!!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")}function q(e){if(!1!==re(e)){if(!0===e._pulling)return void(e._pullAgain=!0)
Ne(!1===e._pullAgain),e._pulling=!0,Oe(e._underlyingByteSource,"pull",[e]).then(function(){e._pulling=!1,!0===e._pullAgain&&(e._pullAgain=!1,q(e))},function(t){"readable"===e._controlledReadableStream._state&&ne(e,t)}).catch(Ue)}}function z(e){K(e),e._pendingPullIntos=[]}function H(e,t){Ne("errored"!==e._state,"state must not be errored")
var r=!1
"closed"===e._state&&(Ne(0===t.bytesFilled),r=!0)
var a=W(t)
"default"===t.readerType?y(e,a,r):(Ne("byob"===t.readerType),v(e,a,r))}function W(e){var t=e.bytesFilled,r=e.elementSize
return Ne(t<=e.byteLength),Ne(t%r==0),new e.ctor(e.buffer,e.byteOffset,t/r)}function G(e,t,r,a){e._queue.push({buffer:t,byteOffset:r,byteLength:a}),e._queueTotalSize+=a}function X(e,t){var r=t.elementSize,a=t.bytesFilled-t.bytesFilled%r,i=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),n=t.bytesFilled+i,o=n-n%r,s=i,c=!1
o>a&&(s=o-t.bytesFilled,c=!0)
for(var l=e._queue;s>0;){var u=l[0],h=Math.min(s,u.byteLength),f=t.byteOffset+t.bytesFilled
Ae(t.buffer,f,u.buffer,u.byteOffset,h),u.byteLength===h?l.shift():(u.byteOffset+=h,u.byteLength-=h),e._queueTotalSize-=h,V(e,h,t),s-=h}return!1===c&&(Ne(0===e._queueTotalSize,"queue must be empty"),Ne(t.bytesFilled>0),Ne(t.bytesFilled<t.elementSize)),c}function V(e,t,r){Ne(0===e._pendingPullIntos.length||e._pendingPullIntos[0]===r),K(e),r.bytesFilled+=t}function Y(e){Ne("readable"===e._controlledReadableStream._state),0===e._queueTotalSize&&!0===e._closeRequested?p(e._controlledReadableStream):q(e)}function K(e){void 0!==e._byobRequest&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=void 0,e._byobRequest=void 0)}function J(e){for(Ne(!1===e._closeRequested);e._pendingPullIntos.length>0;){if(0===e._queueTotalSize)return
var t=e._pendingPullIntos[0]
!0===X(e,t)&&(te(e),H(e._controlledReadableStream,t))}}function Z(e,t){var r=e._controlledReadableStream,a=1
t.constructor!==DataView&&(a=t.constructor.BYTES_PER_ELEMENT)
var i=t.constructor,n={buffer:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength,bytesFilled:0,elementSize:a,ctor:i,readerType:"byob"}
if(e._pendingPullIntos.length>0)return n.buffer=Te(n.buffer),e._pendingPullIntos.push(n),d(r)
if("closed"===r._state){var o=new t.constructor(n.buffer,n.byteOffset,0)
return Promise.resolve(Pe(o,!0))}if(e._queueTotalSize>0){if(!0===X(e,n)){var s=W(n)
return Y(e),Promise.resolve(Pe(s,!1))}if(!0===e._closeRequested){var c=new TypeError("Insufficient bytes to fill elements in the given buffer")
return ne(e,c),Promise.reject(c)}}n.buffer=Te(n.buffer),e._pendingPullIntos.push(n)
var l=d(r)
return q(e),l}function Q(e,t){t.buffer=Te(t.buffer),Ne(0===t.bytesFilled,"bytesFilled must be 0")
var r=e._controlledReadableStream
if(!0===S(r))for(;w(r)>0;){var a=te(e)
H(r,a)}}function $(e,t,r){if(r.bytesFilled+t>r.byteLength)throw new RangeError("bytesWritten out of range")
if(V(e,t,r),!(r.bytesFilled<r.elementSize)){te(e)
var a=r.bytesFilled%r.elementSize
if(a>0){var i=r.byteOffset+r.bytesFilled,n=r.buffer.slice(i-a,i)
G(e,n,0,n.byteLength)}r.buffer=Te(r.buffer),r.bytesFilled-=a,H(e._controlledReadableStream,r),J(e)}}function ee(e,t){var r=e._pendingPullIntos[0],a=e._controlledReadableStream
if("closed"===a._state){if(0!==t)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")
Q(e,r)}else Ne("readable"===a._state),$(e,t,r)}function te(e){var t=e._pendingPullIntos.shift()
return K(e),t}function re(e){var t=e._controlledReadableStream
return"readable"===t._state&&(!0!==e._closeRequested&&(!1!==e._started&&(!0===C(t)&&k(t)>0||(!0===S(t)&&w(t)>0||oe(e)>0))))}function ae(e){var t=e._controlledReadableStream
if(Ne(!1===e._closeRequested),Ne("readable"===t._state),e._queueTotalSize>0)return void(e._closeRequested=!0)
if(e._pendingPullIntos.length>0){if(e._pendingPullIntos[0].bytesFilled>0){var r=new TypeError("Insufficient bytes to fill elements in the given buffer")
throw ne(e,r),r}}p(t)}function ie(e,t){var r=e._controlledReadableStream
Ne(!1===e._closeRequested),Ne("readable"===r._state)
var a=t.buffer,i=t.byteOffset,n=t.byteLength,o=Te(a)
if(!0===C(r))if(0===k(r))G(e,o,i,n)
else{Ne(0===e._queue.length)
var s=new Uint8Array(o,i,n)
y(r,s,!1)}else!0===S(r)?(G(e,o,i,n),J(e)):(Ne(!1===c(r),"stream must not be locked"),G(e,o,i,n))}function ne(e,t){var r=e._controlledReadableStream
Ne("readable"===r._state),z(e),He(e),b(r,t)}function oe(e){var t=e._controlledReadableStream,r=t._state
return"errored"===r?null:"closed"===r?0:e._strategyHWM-e._queueTotalSize}function se(e,t){if(t=Number(t),!1===Ie(t))throw new RangeError("bytesWritten must be a finite")
Ne(e._pendingPullIntos.length>0),ee(e,t)}function ce(e,t){Ne(e._pendingPullIntos.length>0)
var r=e._pendingPullIntos[0]
if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw new RangeError("The region specified by view does not match byobRequest")
if(r.byteLength!==t.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest")
r.buffer=t.buffer,ee(e,t.byteLength)}function le(e){return new TypeError("ReadableStream.prototype."+e+" can only be used on a ReadableStream")}function ue(e){return new TypeError("Cannot "+e+" a stream using a released reader")}function he(e){return new TypeError("ReadableStreamDefaultReader.prototype."+e+" can only be used on a ReadableStreamDefaultReader")}function fe(e){e._closedPromise=new Promise(function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r})}function de(e,t){e._closedPromise=Promise.reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function ge(e){e._closedPromise=Promise.resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function me(e,t){Ne(void 0!==e._closedPromise_resolve),Ne(void 0!==e._closedPromise_reject),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function pe(e,t){Ne(void 0===e._closedPromise_resolve),Ne(void 0===e._closedPromise_reject),e._closedPromise=Promise.reject(t)}function be(e){Ne(void 0!==e._closedPromise_resolve),Ne(void 0!==e._closedPromise_reject),e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function ve(e){return new TypeError("ReadableStreamBYOBReader.prototype."+e+" can only be used on a ReadableStreamBYOBReader")}function ye(e){return new TypeError("ReadableStreamDefaultController.prototype."+e+" can only be used on a ReadableStreamDefaultController")}function we(e){return new TypeError("ReadableStreamBYOBRequest.prototype."+e+" can only be used on a ReadableStreamBYOBRequest")}function ke(e){return new TypeError("ReadableByteStreamController.prototype."+e+" can only be used on a ReadableByteStreamController")}function Se(e){try{Promise.prototype.then.call(e,void 0,function(){})}catch(e){}}var Ce=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),xe=r(0),Ae=xe.ArrayBufferCopy,Pe=xe.CreateIterResultObject,Ie=xe.IsFiniteNonNegativeNumber,_e=xe.InvokeOrNoop,Oe=xe.PromiseInvokeOrNoop,Te=xe.TransferArrayBuffer,Ee=xe.ValidateAndNormalizeQueuingStrategy,Re=xe.ValidateAndNormalizeHighWaterMark,Fe=r(0),Be=Fe.createArrayFromList,Me=Fe.createDataProperty,De=Fe.typeIsObject,Le=r(1),Ne=Le.assert,Ue=Le.rethrowAssertionErrorRejection,je=r(3),qe=je.DequeueValue,ze=je.EnqueueValueWithSize,He=je.ResetQueue,We=r(2),Ge=We.AcquireWritableStreamDefaultWriter,Xe=We.IsWritableStream,Ve=We.IsWritableStreamLocked,Ye=We.WritableStreamAbort,Ke=We.WritableStreamDefaultWriterCloseWithErrorPropagation,Je=We.WritableStreamDefaultWriterRelease,Ze=We.WritableStreamDefaultWriterWrite,Qe=We.WritableStreamCloseQueuedOrInFlight,$e=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.size,n=r.highWaterMark
a(this,e),this._state="readable",this._reader=void 0,this._storedError=void 0,this._disturbed=!1,this._readableStreamController=void 0
var o=t.type
if("bytes"===String(o))void 0===n&&(n=0),this._readableStreamController=new it(this,t,n)
else{if(void 0!==o)throw new RangeError("Invalid type is specified")
void 0===n&&(n=1),this._readableStreamController=new rt(this,t,i,n)}}return Ce(e,[{key:"cancel",value:function(e){return!1===o(this)?Promise.reject(le("cancel")):!0===c(this)?Promise.reject(new TypeError("Cannot cancel a stream that already has a reader")):m(this,e)}},{key:"getReader",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mode
if(!1===o(this))throw le("getReader")
if(void 0===t)return n(this)
if("byob"===(t=String(t)))return i(this)
throw new RangeError("Invalid mode is specified")}},{key:"pipeThrough",value:function(e,t){var r=e.writable,a=e.readable
return Se(this.pipeTo(r,t)),a}},{key:"pipeTo",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.preventClose,i=r.preventAbort,s=r.preventCancel
if(!1===o(this))return Promise.reject(le("pipeTo"))
if(!1===Xe(e))return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"))
if(a=Boolean(a),i=Boolean(i),s=Boolean(s),!0===c(this))return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"))
if(!0===Ve(e))return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"))
var l=n(this),u=Ge(e),h=!1,f=Promise.resolve()
return new Promise(function(r,n){function o(){return f=Promise.resolve(),!0===h?Promise.resolve():u._readyPromise.then(function(){return T(l).then(function(e){var t=e.value
!0!==e.done&&(f=Ze(u,t).catch(function(){}))})}).then(o)}function c(){var e=f
return f.then(function(){return e!==f?c():void 0})}function d(e,t,r){"errored"===e._state?r(e._storedError):t.catch(r).catch(Ue)}function g(t,r,a){function i(){t().then(function(){return b(r,a)},function(e){return b(!0,e)}).catch(Ue)}!0!==h&&(h=!0,"writable"===e._state&&!1===Qe(e)?c().then(i):i())}function p(t,r){!0!==h&&(h=!0,"writable"===e._state&&!1===Qe(e)?c().then(function(){return b(t,r)}).catch(Ue):b(t,r))}function b(e,t){Je(u),_(l),e?n(t):r(void 0)}if(d(t,l._closedPromise,function(t){!1===i?g(function(){return Ye(e,t)},!0,t):p(!0,t)}),d(e,u._closedPromise,function(e){!1===s?g(function(){return m(t,e)},!0,e):p(!0,e)}),function(e,t,r){"closed"===e._state?r():t.then(r).catch(Ue)}(t,l._closedPromise,function(){!1===a?g(function(){return Ke(u)}):p()}),!0===Qe(e)||"closed"===e._state){var v=new TypeError("the destination writable stream closed before all data could be piped to it")
!1===s?g(function(){return m(t,v)},!0,v):p(!0,v)}o().catch(function(e){f=Promise.resolve(),Ue(e)})})}},{key:"tee",value:function(){if(!1===o(this))throw le("tee")
var e=l(this,!1)
return Be(e)}},{key:"locked",get:function(){if(!1===o(this))throw le("locked")
return c(this)}}]),e}()
e.exports={ReadableStream:$e,IsReadableStreamDisturbed:s,ReadableStreamDefaultControllerClose:B,ReadableStreamDefaultControllerEnqueue:M,ReadableStreamDefaultControllerError:D,ReadableStreamDefaultControllerGetDesiredSize:N}
var et=function(){function e(t){if(a(this,e),!1===o(t))throw new TypeError("ReadableStreamDefaultReader can only be constructed with a ReadableStream instance")
if(!0===c(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
P(this,t),this._readRequests=[]}return Ce(e,[{key:"cancel",value:function(e){return!1===A(this)?Promise.reject(he("cancel")):void 0===this._ownerReadableStream?Promise.reject(ue("cancel")):I(this,e)}},{key:"read",value:function(){return!1===A(this)?Promise.reject(he("read")):void 0===this._ownerReadableStream?Promise.reject(ue("read from")):T(this)}},{key:"releaseLock",value:function(){if(!1===A(this))throw he("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
_(this)}}},{key:"closed",get:function(){return!1===A(this)?Promise.reject(he("closed")):this._closedPromise}}]),e}(),tt=function(){function e(t){if(a(this,e),!o(t))throw new TypeError("ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source")
if(!1===U(t._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source")
if(c(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
P(this,t),this._readIntoRequests=[]}return Ce(e,[{key:"cancel",value:function(e){return x(this)?void 0===this._ownerReadableStream?Promise.reject(ue("cancel")):I(this,e):Promise.reject(ve("cancel"))}},{key:"read",value:function(e){return x(this)?void 0===this._ownerReadableStream?Promise.reject(ue("read from")):ArrayBuffer.isView(e)?0===e.byteLength?Promise.reject(new TypeError("view must have non-zero byteLength")):O(this,e):Promise.reject(new TypeError("view must be an array buffer view")):Promise.reject(ve("read"))}},{key:"releaseLock",value:function(){if(!x(this))throw ve("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readIntoRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
_(this)}}},{key:"closed",get:function(){return x(this)?this._closedPromise:Promise.reject(ve("closed"))}}]),e}(),rt=function(){function e(t,r,i,n){if(a(this,e),!1===o(t))throw new TypeError("ReadableStreamDefaultController can only be constructed with a ReadableStream instance")
if(void 0!==t._readableStreamController)throw new TypeError("ReadableStreamDefaultController instances can only be created by the ReadableStream constructor")
this._controlledReadableStream=t,this._underlyingSource=r,this._queue=void 0,this._queueTotalSize=void 0,He(this),this._started=!1,this._closeRequested=!1,this._pullAgain=!1,this._pulling=!1
var s=Ee(i,n)
this._strategySize=s.size,this._strategyHWM=s.highWaterMark
var c=this,l=_e(r,"start",[this])
Promise.resolve(l).then(function(){c._started=!0,Ne(!1===c._pulling),Ne(!1===c._pullAgain),R(c)},function(e){L(c,e)}).catch(Ue)}return Ce(e,[{key:"close",value:function(){if(!1===E(this))throw ye("close")
if(!0===this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!")
var e=this._controlledReadableStream._state
if("readable"!==e)throw new TypeError("The stream (in "+e+" state) is not in the readable state and cannot be closed")
B(this)}},{key:"enqueue",value:function(e){if(!1===E(this))throw ye("enqueue")
if(!0===this._closeRequested)throw new TypeError("stream is closed or draining")
var t=this._controlledReadableStream._state
if("readable"!==t)throw new TypeError("The stream (in "+t+" state) is not in the readable state and cannot be enqueued to")
return M(this,e)}},{key:"error",value:function(e){if(!1===E(this))throw ye("error")
var t=this._controlledReadableStream
if("readable"!==t._state)throw new TypeError("The stream is "+t._state+" and so cannot be errored")
D(this,e)}},{key:"__cancelSteps",value:function(e){return He(this),Oe(this._underlyingSource,"cancel",[e])}},{key:"__pullSteps",value:function(){var e=this._controlledReadableStream
if(this._queue.length>0){var t=qe(this)
return!0===this._closeRequested&&0===this._queue.length?p(e):R(this),Promise.resolve(Pe(t,!1))}var r=g(e)
return R(this),r}},{key:"desiredSize",get:function(){if(!1===E(this))throw ye("desiredSize")
return N(this)}}]),e}(),at=function(){function e(t,r){a(this,e),this._associatedReadableByteStreamController=t,this._view=r}return Ce(e,[{key:"respond",value:function(e){if(!1===j(this))throw we("respond")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
se(this._associatedReadableByteStreamController,e)}},{key:"respondWithNewView",value:function(e){if(!1===j(this))throw we("respond")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
if(!ArrayBuffer.isView(e))throw new TypeError("You can only respond with array buffer views")
ce(this._associatedReadableByteStreamController,e)}},{key:"view",get:function(){return this._view}}]),e}(),it=function(){function e(t,r,i){if(a(this,e),!1===o(t))throw new TypeError("ReadableByteStreamController can only be constructed with a ReadableStream instance given a byte source")
if(void 0!==t._readableStreamController)throw new TypeError("ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte source")
this._controlledReadableStream=t,this._underlyingByteSource=r,this._pullAgain=!1,this._pulling=!1,z(this),this._queue=this._queueTotalSize=void 0,He(this),this._closeRequested=!1,this._started=!1,this._strategyHWM=Re(i)
var n=r.autoAllocateChunkSize
if(void 0!==n&&(!1===Number.isInteger(n)||n<=0))throw new RangeError("autoAllocateChunkSize must be a positive integer")
this._autoAllocateChunkSize=n,this._pendingPullIntos=[]
var s=this,c=_e(r,"start",[this])
Promise.resolve(c).then(function(){s._started=!0,Ne(!1===s._pulling),Ne(!1===s._pullAgain),q(s)},function(e){"readable"===t._state&&ne(s,e)}).catch(Ue)}return Ce(e,[{key:"close",value:function(){if(!1===U(this))throw ke("close")
if(!0===this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!")
var e=this._controlledReadableStream._state
if("readable"!==e)throw new TypeError("The stream (in "+e+" state) is not in the readable state and cannot be closed")
ae(this)}},{key:"enqueue",value:function(e){if(!1===U(this))throw ke("enqueue")
if(!0===this._closeRequested)throw new TypeError("stream is closed or draining")
var t=this._controlledReadableStream._state
if("readable"!==t)throw new TypeError("The stream (in "+t+" state) is not in the readable state and cannot be enqueued to")
if(!ArrayBuffer.isView(e))throw new TypeError("You can only enqueue array buffer views when using a ReadableByteStreamController")
ie(this,e)}},{key:"error",value:function(e){if(!1===U(this))throw ke("error")
var t=this._controlledReadableStream
if("readable"!==t._state)throw new TypeError("The stream is "+t._state+" and so cannot be errored")
ne(this,e)}},{key:"__cancelSteps",value:function(e){if(this._pendingPullIntos.length>0){this._pendingPullIntos[0].bytesFilled=0}return He(this),Oe(this._underlyingByteSource,"cancel",[e])}},{key:"__pullSteps",value:function(){var e=this._controlledReadableStream
if(Ne(!0===C(e)),this._queueTotalSize>0){Ne(0===k(e))
var t=this._queue.shift()
this._queueTotalSize-=t.byteLength,Y(this)
var r=void 0
try{r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}catch(e){return Promise.reject(e)}return Promise.resolve(Pe(r,!1))}var a=this._autoAllocateChunkSize
if(void 0!==a){var i=void 0
try{i=new ArrayBuffer(a)}catch(e){return Promise.reject(e)}var n={buffer:i,byteOffset:0,byteLength:a,bytesFilled:0,elementSize:1,ctor:Uint8Array,readerType:"default"}
this._pendingPullIntos.push(n)}var o=g(e)
return q(this),o}},{key:"byobRequest",get:function(){if(!1===U(this))throw ke("byobRequest")
if(void 0===this._byobRequest&&this._pendingPullIntos.length>0){var e=this._pendingPullIntos[0],t=new Uint8Array(e.buffer,e.byteOffset+e.bytesFilled,e.byteLength-e.bytesFilled)
this._byobRequest=new at(this,t)}return this._byobRequest}},{key:"desiredSize",get:function(){if(!1===U(this))throw ke("desiredSize")
return oe(this)}}]),e}()},function(e,t,r){var a=r(6),i=r(4),n=r(2)
t.TransformStream=a.TransformStream,t.ReadableStream=i.ReadableStream,t.IsReadableStreamDisturbed=i.IsReadableStreamDisturbed,t.ReadableStreamDefaultControllerClose=i.ReadableStreamDefaultControllerClose,t.ReadableStreamDefaultControllerEnqueue=i.ReadableStreamDefaultControllerEnqueue,t.ReadableStreamDefaultControllerError=i.ReadableStreamDefaultControllerError,t.ReadableStreamDefaultControllerGetDesiredSize=i.ReadableStreamDefaultControllerGetDesiredSize,t.AcquireWritableStreamDefaultWriter=n.AcquireWritableStreamDefaultWriter,t.IsWritableStream=n.IsWritableStream,t.IsWritableStreamLocked=n.IsWritableStreamLocked,t.WritableStream=n.WritableStream,t.WritableStreamAbort=n.WritableStreamAbort,t.WritableStreamDefaultControllerError=n.WritableStreamDefaultControllerError,t.WritableStreamDefaultWriterCloseWithErrorPropagation=n.WritableStreamDefaultWriterCloseWithErrorPropagation,t.WritableStreamDefaultWriterRelease=n.WritableStreamDefaultWriterRelease,t.WritableStreamDefaultWriterWrite=n.WritableStreamDefaultWriterWrite},function(e,t,r){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){if(!0===e._errored)throw new TypeError("TransformStream is already errored")
if(!0===e._readableClosed)throw new TypeError("Readable side is already closed")
s(e)}function n(e,t){if(!0===e._errored)throw new TypeError("TransformStream is already errored")
if(!0===e._readableClosed)throw new TypeError("Readable side is already closed")
var r=e._readableController
try{O(r,t)}catch(t){throw e._readableClosed=!0,c(e,t),e._storedError}!0==E(r)<=0&&!1===e._backpressure&&h(e,!0)}function o(e,t){if(!0===e._errored)throw new TypeError("TransformStream is already errored")
l(e,t)}function s(e){w(!1===e._errored),w(!1===e._readableClosed)
try{_(e._readableController)}catch(e){w(!1)}e._readableClosed=!0}function c(e,t){!1===e._errored&&l(e,t)}function l(e,t){w(!1===e._errored),e._errored=!0,e._storedError=t,!1===e._writableDone&&B(e._writableController,t),!1===e._readableClosed&&T(e._readableController,t)}function u(e){return w(void 0!==e._backpressureChangePromise,"_backpressureChangePromise should have been initialized"),!1===e._backpressure?Promise.resolve():(w(!0===e._backpressure,"_backpressure should have been initialized"),e._backpressureChangePromise)}function h(e,t){w(e._backpressure!==t,"TransformStreamSetBackpressure() should be called only when backpressure is changed"),void 0!==e._backpressureChangePromise&&e._backpressureChangePromise_resolve(t),e._backpressureChangePromise=new Promise(function(t){e._backpressureChangePromise_resolve=t}),e._backpressureChangePromise.then(function(e){w(e!==t,"_backpressureChangePromise should be fulfilled only when backpressure is changed")}),e._backpressure=t}function f(e,t){return n(t._controlledTransformStream,e),Promise.resolve()}function d(e,t){w(!1===e._errored),w(!1===e._transforming),w(!1===e._backpressure),e._transforming=!0
var r=e._transformer,a=e._transformStreamController
return C(r,"transform",[t,a],f,[t,a]).then(function(){return e._transforming=!1,u(e)},function(t){return c(e,t),Promise.reject(t)})}function g(e){return!!A(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")}function m(e){return!!A(e)&&!!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")}function p(e){return new TypeError("TransformStreamDefaultController.prototype."+e+" can only be used on a TransformStreamDefaultController")}function b(e){return new TypeError("TransformStream.prototype."+e+" can only be used on a TransformStream")}var v=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r]
a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),y=r(1),w=y.assert,k=r(0),S=k.InvokeOrNoop,C=k.PromiseInvokeOrPerformFallback,x=k.PromiseInvokeOrNoop,A=k.typeIsObject,P=r(4),I=P.ReadableStream,_=P.ReadableStreamDefaultControllerClose,O=P.ReadableStreamDefaultControllerEnqueue,T=P.ReadableStreamDefaultControllerError,E=P.ReadableStreamDefaultControllerGetDesiredSize,R=r(2),F=R.WritableStream,B=R.WritableStreamDefaultControllerError,M=function(){function e(t,r){a(this,e),this._transformStream=t,this._startPromise=r}return v(e,[{key:"start",value:function(e){var t=this._transformStream
return t._writableController=e,this._startPromise.then(function(){return u(t)})}},{key:"write",value:function(e){return d(this._transformStream,e)}},{key:"abort",value:function(){var e=this._transformStream
e._writableDone=!0,l(e,new TypeError("Writable side aborted"))}},{key:"close",value:function(){var e=this._transformStream
return w(!1===e._transforming),e._writableDone=!0,x(e._transformer,"flush",[e._transformStreamController]).then(function(){return!0===e._errored?Promise.reject(e._storedError):(!1===e._readableClosed&&s(e),Promise.resolve())}).catch(function(t){return c(e,t),Promise.reject(e._storedError)})}}]),e}(),D=function(){function e(t,r){a(this,e),this._transformStream=t,this._startPromise=r}return v(e,[{key:"start",value:function(e){var t=this._transformStream
return t._readableController=e,this._startPromise.then(function(){return w(void 0!==t._backpressureChangePromise,"_backpressureChangePromise should have been initialized"),!0===t._backpressure?Promise.resolve():(w(!1===t._backpressure,"_backpressure should have been initialized"),t._backpressureChangePromise)})}},{key:"pull",value:function(){var e=this._transformStream
return w(!0===e._backpressure,"pull() should be never called while _backpressure is false"),w(void 0!==e._backpressureChangePromise,"_backpressureChangePromise should have been initialized"),h(e,!1),e._backpressureChangePromise}},{key:"cancel",value:function(){var e=this._transformStream
e._readableClosed=!0,l(e,new TypeError("Readable side canceled"))}}]),e}(),L=function(){function e(t){if(a(this,e),!1===m(t))throw new TypeError("TransformStreamDefaultController can only be constructed with a TransformStream instance")
if(void 0!==t._transformStreamController)throw new TypeError("TransformStreamDefaultController instances can only be created by the TransformStream constructor")
this._controlledTransformStream=t}return v(e,[{key:"enqueue",value:function(e){if(!1===g(this))throw p("enqueue")
n(this._controlledTransformStream,e)}},{key:"close",value:function(){if(!1===g(this))throw p("close")
i(this._controlledTransformStream)}},{key:"error",value:function(e){if(!1===g(this))throw p("error")
o(this._controlledTransformStream,e)}},{key:"desiredSize",get:function(){if(!1===g(this))throw p("desiredSize")
var e=this._controlledTransformStream,t=e._readableController
return E(t)}}]),e}(),N=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
a(this,e),this._transformer=t
var r=t.readableStrategy,i=t.writableStrategy
this._transforming=!1,this._errored=!1,this._storedError=void 0,this._writableController=void 0,this._readableController=void 0,this._transformStreamController=void 0,this._writableDone=!1,this._readableClosed=!1,this._backpressure=void 0,this._backpressureChangePromise=void 0,this._backpressureChangePromise_resolve=void 0,this._transformStreamController=new L(this)
var n=void 0,o=new Promise(function(e){n=e}),s=new D(this,o)
this._readable=new I(s,r)
var c=new M(this,o)
this._writable=new F(c,i),w(void 0!==this._writableController),w(void 0!==this._readableController),h(this,E(this._readableController)<=0)
var l=this,u=S(t,"start",[l._transformStreamController])
n(u),o.catch(function(e){!1===l._errored&&(l._errored=!0,l._storedError=e)})}return v(e,[{key:"readable",get:function(){if(!1===m(this))throw b("readable")
return this._readable}},{key:"writable",get:function(){if(!1===m(this))throw b("writable")
return this._writable}}]),e}()
e.exports={TransformStream:N}},function(e,t,r){e.exports=r(5)}]))},function(e,t,r){"use strict"
r(86),e.exports=r(18).Uint8ClampedArray},function(e,t,r){"use strict"
var a=r(2)("unscopables"),i=Array.prototype
void 0==i[a]&&r(6)(i,a,{}),e.exports=function(e){i[a][e]=!0}},function(e,t,r){"use strict"
var a=r(13),i=r(21),n=r(8)
e.exports=[].copyWithin||function(e,t){var r=a(this),o=n(r.length),s=i(e,o),c=i(t,o),l=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===l?o:i(l,o))-c,o-s),h=1
for(c<s&&s<c+u&&(h=-1,c+=u-1,s+=u-1);u-- >0;)c in r?r[s]=r[c]:delete r[s],s+=h,c+=h
return r}},function(e,t,r){"use strict"
var a=r(25),i=r(43),n=r(13),o=r(8),s=r(68)
e.exports=function(e,t){var r=1==e,c=2==e,l=3==e,u=4==e,h=6==e,f=5==e||h,d=t||s
return function(t,s,g){for(var m,p,b=n(t),v=i(b),y=a(s,g,3),w=o(v.length),k=0,S=r?d(t,w):c?d(t,0):void 0;w>k;k++)if((f||k in v)&&(m=v[k],p=y(m,k,b),e))if(r)S[k]=p
else if(p)switch(e){case 3:return!0
case 5:return m
case 6:return k
case 2:S.push(m)}else if(u)return!1
return h?-1:l||u?u:S}}},function(e,t,r){"use strict"
var a=r(10),i=r(71),n=r(2)("species")
e.exports=function(e){var t
return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),a(t)&&null===(t=t[n])&&(t=void 0)),void 0===t?Array:t}},function(e,t,r){"use strict"
var a=r(67)
e.exports=function(e,t){return new(a(e))(t)}},function(e,t,r){"use strict"
var a=r(4).document
e.exports=a&&a.documentElement},function(e,t,r){"use strict"
var a=r(11),i=r(2)("iterator"),n=Array.prototype
e.exports=function(e){return void 0!==e&&(a.Array===e||n[i]===e)}},function(e,t,r){"use strict"
var a=r(24)
e.exports=Array.isArray||function(e){return"Array"==a(e)}},function(e,t,r){"use strict"
var a=r(44),i=r(20),n=r(29),o={}
r(6)(o,r(2)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=a(o,{next:i(1,r)}),n(e,t+" Iterator")}},function(e,t,r){"use strict"
var a=r(27),i=r(41),n=r(28),o=r(6),s=r(7),c=r(11),l=r(72),u=r(29),h=r(46),f=r(2)("iterator"),d=!([].keys&&"next"in[].keys()),g=function(){return this}
e.exports=function(e,t,r,m,p,b,v){l(r,t,m)
var y,w,k,S=function(e){if(!d&&e in P)return P[e]
switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},C=t+" Iterator",x="values"==p,A=!1,P=e.prototype,I=P[f]||P["@@iterator"]||p&&P[p],_=I||S(p),O=p?x?S("entries"):_:void 0,T="Array"==t?P.entries||I:I
if(T&&(k=h(T.call(new e)))!==Object.prototype&&k.next&&(u(k,C,!0),a||s(k,f)||o(k,f,g)),x&&I&&"values"!==I.name&&(A=!0,_=function(){return I.call(this)}),a&&!v||!d&&!A&&P[f]||o(P,f,_),c[t]=_,c[C]=g,p)if(y={values:x?_:S("values"),keys:b?_:S("keys"),entries:O},v)for(w in y)w in P||n(P,w,y[w])
else i(i.P+i.F*(d||A),t,y)
return y}},function(e,t,r){"use strict"
var a=r(2)("iterator"),i=!1
try{var n=[7][a]()
n.return=function(){i=!0},Array.from(n,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1
var r=!1
try{var n=[7],o=n[a]()
o.next=function(){return{done:r=!0}},n[a]=function(){return o},e(n)}catch(e){}return r}},function(e,t,r){"use strict"
e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,r){"use strict"
var a=r(9),i=r(17),n=r(78)
e.exports=r(5)?Object.defineProperties:function(e,t){i(e)
for(var r,o=n(t),s=o.length,c=0;s>c;)a.f(e,r=o[c++],t[r])
return e}},function(e,t,r){"use strict"
var a=r(79),i=r(20),n=r(22),o=r(31),s=r(7),c=r(42),l=Object.getOwnPropertyDescriptor
t.f=r(5)?l:function(e,t){if(e=n(e),t=o(t,!0),c)try{return l(e,t)}catch(e){}if(s(e,t))return i(!a.f.call(e,t),e[t])}},function(e,t,r){"use strict"
var a=r(47),i=r(26)
e.exports=Object.keys||function(e){return a(e,i)}},function(e,t,r){"use strict"
t.f={}.propertyIsEnumerable},function(e,t,r){"use strict"
var a=r(4),i=r(9),n=r(5),o=r(2)("species")
e.exports=function(e){var t=a[e]
n&&t&&!t[o]&&i.f(t,o,{configurable:!0,get:function(){return this}})}},function(e,t,r){"use strict"
var a=r(17),i=r(34),n=r(2)("species")
e.exports=function(e,t){var r,o=a(e).constructor
return void 0===o||void 0==(r=a(o)[n])?t:i(r)}},function(e,t,r){"use strict"
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
if(r(5)){var i=r(27),n=r(4),o=r(19),s=r(41),c=r(51),l=r(83),u=r(25),h=r(35),f=r(20),d=r(6),g=r(48),m=r(12),p=r(8),b=r(50),v=r(21),y=r(31),w=r(7),k=r(38),S=r(10),C=r(13),x=r(70),A=r(44),P=r(46),I=r(45).f,_=r(84),O=r(14),T=r(2),E=r(66),R=r(37),F=r(81),B=r(85),M=r(11),D=r(74),L=r(80),N=r(36),U=r(65),j=r(9),q=r(77),z=j.f,H=q.f,W=n.RangeError,G=n.TypeError,X=n.Uint8Array,V=Array.prototype,Y=l.ArrayBuffer,K=l.DataView,J=E(0),Z=E(2),Q=E(3),$=E(4),ee=E(5),te=E(6),re=R(!0),ae=R(!1),ie=B.values,ne=B.keys,oe=B.entries,se=V.lastIndexOf,ce=V.reduce,le=V.reduceRight,ue=V.join,he=V.sort,fe=V.slice,de=V.toString,ge=V.toLocaleString,me=T("iterator"),pe=T("toStringTag"),be=O("typed_constructor"),ve=O("def_constructor"),ye=c.CONSTR,we=c.TYPED,ke=c.VIEW,Se=E(1,function(e,t){return Ie(F(e,e[ve]),t)}),Ce=o(function(){return 1===new X(new Uint16Array([1]).buffer)[0]}),xe=!!X&&!!X.prototype.set&&o(function(){new X(1).set({})}),Ae=function(e,t){var r=m(e)
if(r<0||r%t)throw W("Wrong offset!")
return r},Pe=function(e){if(S(e)&&we in e)return e
throw G(e+" is not a typed array!")},Ie=function(e,t){if(!(S(e)&&be in e))throw G("It is not a typed array constructor!")
return new e(t)},_e=function(e,t){return Oe(F(e,e[ve]),t)},Oe=function(e,t){for(var r=0,a=t.length,i=Ie(e,a);a>r;)i[r]=t[r++]
return i},Te=function(e,t,r){z(e,t,{get:function(){return this._d[r]}})},Ee=function(e){var t,r,a,i,n,o,s=C(e),c=arguments.length,l=c>1?arguments[1]:void 0,h=void 0!==l,f=_(s)
if(void 0!=f&&!x(f)){for(o=f.call(s),a=[],t=0;!(n=o.next()).done;t++)a.push(n.value)
s=a}for(h&&c>2&&(l=u(l,arguments[2],2)),t=0,r=p(s.length),i=Ie(this,r);r>t;t++)i[t]=h?l(s[t],t):s[t]
return i},Re=function(){for(var e=0,t=arguments.length,r=Ie(this,t);t>e;)r[e]=arguments[e++]
return r},Fe=!!X&&o(function(){ge.call(new X(1))}),Be=function(){return ge.apply(Fe?fe.call(Pe(this)):Pe(this),arguments)},Me={copyWithin:function(e,t){return U.call(Pe(this),e,t,arguments.length>2?arguments[2]:void 0)},every:function(e){return $(Pe(this),e,arguments.length>1?arguments[1]:void 0)},fill:function(e){return N.apply(Pe(this),arguments)},filter:function(e){return _e(this,Z(Pe(this),e,arguments.length>1?arguments[1]:void 0))},find:function(e){return ee(Pe(this),e,arguments.length>1?arguments[1]:void 0)},findIndex:function(e){return te(Pe(this),e,arguments.length>1?arguments[1]:void 0)},forEach:function(e){J(Pe(this),e,arguments.length>1?arguments[1]:void 0)},indexOf:function(e){return ae(Pe(this),e,arguments.length>1?arguments[1]:void 0)},includes:function(e){return re(Pe(this),e,arguments.length>1?arguments[1]:void 0)},join:function(e){return ue.apply(Pe(this),arguments)},lastIndexOf:function(e){return se.apply(Pe(this),arguments)},map:function(e){return Se(Pe(this),e,arguments.length>1?arguments[1]:void 0)},reduce:function(e){return ce.apply(Pe(this),arguments)},reduceRight:function(e){return le.apply(Pe(this),arguments)},reverse:function(){for(var e,t=this,r=Pe(t).length,a=Math.floor(r/2),i=0;i<a;)e=t[i],t[i++]=t[--r],t[r]=e
return t},some:function(e){return Q(Pe(this),e,arguments.length>1?arguments[1]:void 0)},sort:function(e){return he.call(Pe(this),e)},subarray:function(e,t){var r=Pe(this),a=r.length,i=v(e,a)
return new(F(r,r[ve]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,p((void 0===t?a:v(t,a))-i))}},De=function(e,t){return _e(this,fe.call(Pe(this),e,t))},Le=function(e){Pe(this)
var t=Ae(arguments[1],1),r=this.length,a=C(e),i=p(a.length),n=0
if(i+t>r)throw W("Wrong length!")
for(;n<i;)this[t+n]=a[n++]},Ne={entries:function(){return oe.call(Pe(this))},keys:function(){return ne.call(Pe(this))},values:function(){return ie.call(Pe(this))}},Ue=function(e,t){return S(e)&&e[we]&&"symbol"!=(void 0===t?"undefined":a(t))&&t in e&&String(+t)==String(t)},je=function(e,t){return Ue(e,t=y(t,!0))?f(2,e[t]):H(e,t)},qe=function(e,t,r){return!(Ue(e,t=y(t,!0))&&S(r)&&w(r,"value"))||w(r,"get")||w(r,"set")||r.configurable||w(r,"writable")&&!r.writable||w(r,"enumerable")&&!r.enumerable?z(e,t,r):(e[t]=r.value,e)}
ye||(q.f=je,j.f=qe),s(s.S+s.F*!ye,"Object",{getOwnPropertyDescriptor:je,defineProperty:qe}),o(function(){de.call({})})&&(de=ge=function(){return ue.call(this)})
var ze=g({},Me)
g(ze,Ne),d(ze,me,Ne.values),g(ze,{slice:De,set:Le,constructor:function(){},toString:de,toLocaleString:Be}),Te(ze,"buffer","b"),Te(ze,"byteOffset","o"),Te(ze,"byteLength","l"),Te(ze,"length","e"),z(ze,pe,{get:function(){return this[we]}}),e.exports=function(e,t,r,a){a=!!a
var l=e+(a?"Clamped":"")+"Array",u="get"+e,f="set"+e,g=n[l],m=g||{},v=g&&P(g),y=!g||!c.ABV,w={},C=g&&g.prototype,x=function(e,r){var a=e._d
return a.v[u](r*t+a.o,Ce)},_=function(e,r,i){var n=e._d
a&&(i=(i=Math.round(i))<0?0:i>255?255:255&i),n.v[f](r*t+n.o,i,Ce)},O=function(e,t){z(e,t,{get:function(){return x(this,t)},set:function(e){return _(this,t,e)},enumerable:!0})}
y?(g=r(function(e,r,a,i){h(e,g,l,"_d")
var n,o,s,c,u=0,f=0
if(S(r)){if(!(r instanceof Y||"ArrayBuffer"==(c=k(r))||"SharedArrayBuffer"==c))return we in r?Oe(g,r):Ee.call(g,r)
n=r,f=Ae(a,t)
var m=r.byteLength
if(void 0===i){if(m%t)throw W("Wrong length!")
if((o=m-f)<0)throw W("Wrong length!")}else if((o=p(i)*t)+f>m)throw W("Wrong length!")
s=o/t}else s=b(r),o=s*t,n=new Y(o)
for(d(e,"_d",{b:n,o:f,l:o,e:s,v:new K(n)});u<s;)O(e,u++)}),C=g.prototype=A(ze),d(C,"constructor",g)):o(function(){g(1)})&&o(function(){new g(-1)})&&D(function(e){new g,new g(null),new g(1.5),new g(e)},!0)||(g=r(function(e,r,a,i){h(e,g,l)
var n
return S(r)?r instanceof Y||"ArrayBuffer"==(n=k(r))||"SharedArrayBuffer"==n?void 0!==i?new m(r,Ae(a,t),i):void 0!==a?new m(r,Ae(a,t)):new m(r):we in r?Oe(g,r):Ee.call(g,r):new m(b(r))}),J(v!==Function.prototype?I(m).concat(I(v)):I(m),function(e){e in g||d(g,e,m[e])}),g.prototype=C,i||(C.constructor=g))
var T=C[me],E=!!T&&("values"==T.name||void 0==T.name),R=Ne.values
d(g,be,!0),d(C,we,l),d(C,ke,!0),d(C,ve,g),(a?new g(1)[pe]==l:pe in C)||z(C,pe,{get:function(){return l}}),w[l]=g,s(s.G+s.W+s.F*(g!=m),w),s(s.S,l,{BYTES_PER_ELEMENT:t}),s(s.S+s.F*o(function(){m.of.call(g,1)}),l,{from:Ee,of:Re}),"BYTES_PER_ELEMENT"in C||d(C,"BYTES_PER_ELEMENT",t),s(s.P,l,Me),L(l),s(s.P+s.F*xe,l,{set:Le}),s(s.P+s.F*!E,l,Ne),i||C.toString==de||(C.toString=de),s(s.P+s.F*o(function(){new g(1).slice()}),l,{slice:De}),s(s.P+s.F*(o(function(){return[1,2].toLocaleString()!=new g([1,2]).toLocaleString()})||!o(function(){C.toLocaleString.call([1,2])})),l,{toLocaleString:Be}),M[l]=E?T:R,i||E||d(C,me,R)}}else e.exports=function(){}},function(e,t,r){"use strict"
function a(e,t,r){var a,i,n,o=Array(r),s=8*r-t-1,c=(1<<s)-1,l=c>>1,u=23===t?N(2,-24)-N(2,-77):0,h=0,f=e<0||0===e&&1/e<0?1:0
for(e=L(e),e!=e||e===M?(i=e!=e?1:0,a=c):(a=U(j(e)/q),e*(n=N(2,-a))<1&&(a--,n*=2),e+=a+l>=1?u/n:u*N(2,1-l),e*n>=2&&(a++,n/=2),a+l>=c?(i=0,a=c):a+l>=1?(i=(e*n-1)*N(2,t),a+=l):(i=e*N(2,l-1)*N(2,t),a=0));t>=8;o[h++]=255&i,i/=256,t-=8);for(a=a<<t|i,s+=t;s>0;o[h++]=255&a,a/=256,s-=8);return o[--h]|=128*f,o}function i(e,t,r){var a,i=8*r-t-1,n=(1<<i)-1,o=n>>1,s=i-7,c=r-1,l=e[c--],u=127&l
for(l>>=7;s>0;u=256*u+e[c],c--,s-=8);for(a=u&(1<<-s)-1,u>>=-s,s+=t;s>0;a=256*a+e[c],c--,s-=8);if(0===u)u=1-o
else{if(u===n)return a?NaN:l?-M:M
a+=N(2,t),u-=o}return(l?-1:1)*a*N(2,u-t)}function n(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function o(e){return[255&e]}function s(e){return[255&e,e>>8&255]}function c(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]}function l(e){return a(e,52,8)}function u(e){return a(e,23,4)}function h(e,t,r){P(e[O],t,{get:function(){return this[r]}})}function f(e,t,r,a){var i=+r,n=x(i)
if(n+t>e[H])throw B(T)
var o=e[z]._b,s=n+e[W],c=o.slice(s,s+t)
return a?c:c.reverse()}function d(e,t,r,a,i,n){var o=+r,s=x(o)
if(s+t>e[H])throw B(T)
for(var c=e[z]._b,l=s+e[W],u=a(+i),h=0;h<t;h++)c[l+h]=u[n?h:t-h-1]}var g=r(4),m=r(5),p=r(27),b=r(51),v=r(6),y=r(48),w=r(19),k=r(35),S=r(12),C=r(8),x=r(50),A=r(45).f,P=r(9).f,I=r(36),_=r(29),O="prototype",T="Wrong index!",E=g.ArrayBuffer,R=g.DataView,F=g.Math,B=g.RangeError,M=g.Infinity,D=E,L=F.abs,N=F.pow,U=F.floor,j=F.log,q=F.LN2,z=m?"_b":"buffer",H=m?"_l":"byteLength",W=m?"_o":"byteOffset"
if(b.ABV){if(!w(function(){E(1)})||!w(function(){new E(-1)})||w(function(){return new E,new E(1.5),new E(NaN),"ArrayBuffer"!=E.name})){E=function(e){return k(this,E),new D(x(e))}
for(var G,X=E[O]=D[O],V=A(D),Y=0;V.length>Y;)(G=V[Y++])in E||v(E,G,D[G])
p||(X.constructor=E)}var K=new R(new E(2)),J=R[O].setInt8
K.setInt8(0,2147483648),K.setInt8(1,2147483649),!K.getInt8(0)&&K.getInt8(1)||y(R[O],{setInt8:function(e,t){J.call(this,e,t<<24>>24)},setUint8:function(e,t){J.call(this,e,t<<24>>24)}},!0)}else E=function(e){k(this,E,"ArrayBuffer")
var t=x(e)
this._b=I.call(Array(t),0),this[H]=t},R=function(e,t,r){k(this,R,"DataView"),k(e,E,"DataView")
var a=e[H],i=S(t)
if(i<0||i>a)throw B("Wrong offset!")
if(r=void 0===r?a-i:C(r),i+r>a)throw B("Wrong length!")
this[z]=e,this[W]=i,this[H]=r},m&&(h(E,"byteLength","_l"),h(R,"buffer","_b"),h(R,"byteLength","_l"),h(R,"byteOffset","_o")),y(R[O],{getInt8:function(e){return f(this,1,e)[0]<<24>>24},getUint8:function(e){return f(this,1,e)[0]},getInt16:function(e){var t=f(this,2,e,arguments[1])
return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=f(this,2,e,arguments[1])
return t[1]<<8|t[0]},getInt32:function(e){return n(f(this,4,e,arguments[1]))},getUint32:function(e){return n(f(this,4,e,arguments[1]))>>>0},getFloat32:function(e){return i(f(this,4,e,arguments[1]),23,4)},getFloat64:function(e){return i(f(this,8,e,arguments[1]),52,8)},setInt8:function(e,t){d(this,1,e,o,t)},setUint8:function(e,t){d(this,1,e,o,t)},setInt16:function(e,t){d(this,2,e,s,t,arguments[2])},setUint16:function(e,t){d(this,2,e,s,t,arguments[2])},setInt32:function(e,t){d(this,4,e,c,t,arguments[2])},setUint32:function(e,t){d(this,4,e,c,t,arguments[2])},setFloat32:function(e,t){d(this,4,e,u,t,arguments[2])},setFloat64:function(e,t){d(this,8,e,l,t,arguments[2])}})
_(E,"ArrayBuffer"),_(R,"DataView"),v(R[O],b.VIEW,!0),t.ArrayBuffer=E,t.DataView=R},function(e,t,r){"use strict"
var a=r(38),i=r(2)("iterator"),n=r(11)
e.exports=r(18).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||n[a(e)]}},function(e,t,r){"use strict"
var a=r(64),i=r(75),n=r(11),o=r(22)
e.exports=r(73)(Array,"Array",function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++
return!e||r>=e.length?(this._t=void 0,i(1)):"keys"==t?i(0,r):"values"==t?i(0,e[r]):i(0,[r,e[r]])},"values"),n.Arguments=n.Array,a("keys"),a("values"),a("entries")},function(e,t,r){"use strict"
r(82)("Uint8",1,function(e){return function(t,r,a){return e(this,t,r,a)}},!0)},function(e,t,r){"use strict"
function a(){}Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationFactory=t.AnnotationBorderStyle=t.Annotation=void 0
var i=r(0),n=r(58),o=r(1),s=r(15),c=r(56),l=r(3)
a.prototype={create:function(e,t,r,a){var n=e.fetchIfRef(t)
if((0,o.isDict)(n)){var s=(0,o.isRef)(t)?t.toString():"annot_"+a.createObjId(),c=n.get("Subtype")
c=(0,o.isName)(c)?c.name:null
var l={xref:e,dict:n,ref:(0,o.isRef)(t)?t:null,subtype:c,id:s,pdfManager:r}
switch(c){case"Link":return new b(l)
case"Text":return new p(l)
case"Widget":var h=i.Util.getInheritableProperty(n,"FT")
switch(h=(0,o.isName)(h)?h.name:null){case"Tx":return new d(l)
case"Btn":return new g(l)
case"Ch":return new m(l)}return(0,i.warn)('Unimplemented widget field type "'+h+'", falling back to base field type.'),new f(l)
case"Popup":return new v(l)
case"Line":return new y(l)
case"Highlight":return new w(l)
case"Underline":return new k(l)
case"Squiggly":return new S(l)
case"StrikeOut":return new C(l)
case"FileAttachment":return new x(l)
default:return c?(0,i.warn)('Unimplemented annotation type "'+c+'", falling back to base annotation.'):(0,i.warn)("Annotation is missing the required /Subtype."),new u(l)}}}}
var u=function(){function e(e,t,r){var a=i.Util.getAxialAlignedBoundingBox(t,r),n=a[0],o=a[1],s=a[2],c=a[3]
if(n===s||o===c)return[1,0,0,1,e[0],e[1]]
var l=(e[2]-e[0])/(s-n),u=(e[3]-e[1])/(c-o)
return[l,0,0,u,e[0]-n*l,e[1]-o*u]}function t(e){var t=e.dict
this.setFlags(t.get("F")),this.setRectangle(t.getArray("Rect")),this.setColor(t.getArray("C")),this.setBorderStyle(t),this.setAppearance(t),this.data={},this.data.id=e.id,this.data.subtype=e.subtype,this.data.annotationFlags=this.flags,this.data.rect=this.rectangle,this.data.color=this.color,this.data.borderStyle=this.borderStyle,this.data.hasAppearance=!!this.appearance}return t.prototype={_hasFlag:function(e,t){return!!(e&t)},_isViewable:function(e){return!this._hasFlag(e,i.AnnotationFlag.INVISIBLE)&&!this._hasFlag(e,i.AnnotationFlag.HIDDEN)&&!this._hasFlag(e,i.AnnotationFlag.NOVIEW)},_isPrintable:function(e){return this._hasFlag(e,i.AnnotationFlag.PRINT)&&!this._hasFlag(e,i.AnnotationFlag.INVISIBLE)&&!this._hasFlag(e,i.AnnotationFlag.HIDDEN)},get viewable(){return 0===this.flags||this._isViewable(this.flags)},get printable(){return 0!==this.flags&&this._isPrintable(this.flags)},setFlags:function(e){this.flags=(0,i.isInt)(e)&&e>0?e:0},hasFlag:function(e){return this._hasFlag(this.flags,e)},setRectangle:function(e){(0,i.isArray)(e)&&4===e.length?this.rectangle=i.Util.normalizeRect(e):this.rectangle=[0,0,0,0]},setColor:function(e){var t=new Uint8Array(3)
if(!(0,i.isArray)(e))return void(this.color=t)
switch(e.length){case 0:this.color=null
break
case 1:s.ColorSpace.singletons.gray.getRgbItem(e,0,t,0),this.color=t
break
case 3:s.ColorSpace.singletons.rgb.getRgbItem(e,0,t,0),this.color=t
break
case 4:s.ColorSpace.singletons.cmyk.getRgbItem(e,0,t,0),this.color=t
break
default:this.color=t}},setBorderStyle:function(e){if(this.borderStyle=new h,(0,o.isDict)(e))if(e.has("BS")){var t=e.get("BS"),r=t.get("Type")
r&&!(0,o.isName)(r,"Border")||(this.borderStyle.setWidth(t.get("W")),this.borderStyle.setStyle(t.get("S")),this.borderStyle.setDashArray(t.getArray("D")))}else if(e.has("Border")){var a=e.getArray("Border");(0,i.isArray)(a)&&a.length>=3&&(this.borderStyle.setHorizontalCornerRadius(a[0]),this.borderStyle.setVerticalCornerRadius(a[1]),this.borderStyle.setWidth(a[2]),4===a.length&&this.borderStyle.setDashArray(a[3]))}else this.borderStyle.setWidth(0)},setAppearance:function(e){this.appearance=null
var t=e.get("AP")
if((0,o.isDict)(t)){var r=t.get("N")
if((0,o.isStream)(r))return void(this.appearance=r)
if((0,o.isDict)(r)){var a=e.get("AS");(0,o.isName)(a)&&r.has(a.name)&&(this.appearance=r.get(a.name))}}},_preparePopup:function(e){e.has("C")||(this.data.color=null),this.data.hasPopup=e.has("Popup"),this.data.title=(0,i.stringToPDFString)(e.get("T")||""),this.data.contents=(0,i.stringToPDFString)(e.get("Contents")||"")},loadResources:function(e){return this.appearance.dict.getAsync("Resources").then(function(t){if(t){return new n.ObjectLoader(t,e,t.xref).load().then(function(){return t})}})},getOperatorList:function(t,r,a){var n=this
if(!this.appearance)return Promise.resolve(new c.OperatorList)
var o=this.data,s=this.appearance.dict,l=this.loadResources(["ExtGState","ColorSpace","Pattern","Shading","XObject","Font"]),u=s.getArray("BBox")||[0,0,1,1],h=s.getArray("Matrix")||[1,0,0,1,0,0],f=e(o.rect,u,h)
return l.then(function(e){var a=new c.OperatorList
return a.addOp(i.OPS.beginAnnotation,[o.rect,f,h]),t.getOperatorList({stream:n.appearance,task:r,resources:e,operatorList:a}).then(function(){return a.addOp(i.OPS.endAnnotation,[]),n.appearance.reset(),a})})}},t}(),h=function(){function e(){this.width=1,this.style=i.AnnotationBorderStyleType.SOLID,this.dashArray=[3],this.horizontalCornerRadius=0,this.verticalCornerRadius=0}return e.prototype={setWidth:function(e){e===(0|e)&&(this.width=e)},setStyle:function(e){if(e)switch(e.name){case"S":this.style=i.AnnotationBorderStyleType.SOLID
break
case"D":this.style=i.AnnotationBorderStyleType.DASHED
break
case"B":this.style=i.AnnotationBorderStyleType.BEVELED
break
case"I":this.style=i.AnnotationBorderStyleType.INSET
break
case"U":this.style=i.AnnotationBorderStyleType.UNDERLINE}},setDashArray:function(e){if((0,i.isArray)(e)&&e.length>0){for(var t=!0,r=!0,a=0,n=e.length;a<n;a++){var o=e[a]
if(!(+o>=0)){t=!1
break}o>0&&(r=!1)}t&&!r?this.dashArray=e:this.width=0}else e&&(this.width=0)},setHorizontalCornerRadius:function(e){e===(0|e)&&(this.horizontalCornerRadius=e)},setVerticalCornerRadius:function(e){e===(0|e)&&(this.verticalCornerRadius=e)}},e}(),f=function(){function e(e){u.call(this,e)
var t=e.dict,r=this.data
r.annotationType=i.AnnotationType.WIDGET,r.fieldName=this._constructFieldName(t),r.fieldValue=i.Util.getInheritableProperty(t,"V",!0),r.alternativeText=(0,i.stringToPDFString)(t.get("TU")||""),r.defaultAppearance=i.Util.getInheritableProperty(t,"DA")||""
var a=i.Util.getInheritableProperty(t,"FT")
r.fieldType=(0,o.isName)(a)?a.name:null,this.fieldResources=i.Util.getInheritableProperty(t,"DR")||o.Dict.empty,r.fieldFlags=i.Util.getInheritableProperty(t,"Ff"),(!(0,i.isInt)(r.fieldFlags)||r.fieldFlags<0)&&(r.fieldFlags=0),r.readOnly=this.hasFieldFlag(i.AnnotationFieldFlag.READONLY),"Sig"===r.fieldType&&this.setFlags(i.AnnotationFlag.HIDDEN)}return i.Util.inherit(e,u,{_constructFieldName:function(e){if(!e.has("T")&&!e.has("Parent"))return(0,i.warn)("Unknown field name, falling back to empty field name."),""
if(!e.has("Parent"))return(0,i.stringToPDFString)(e.get("T"))
var t=[]
e.has("T")&&t.unshift((0,i.stringToPDFString)(e.get("T")))
for(var r=e;r.has("Parent")&&(r=r.get("Parent"),(0,o.isDict)(r));)r.has("T")&&t.unshift((0,i.stringToPDFString)(r.get("T")))
return t.join(".")},hasFieldFlag:function(e){return!!(this.data.fieldFlags&e)}}),e}(),d=function(){function e(e){f.call(this,e),this.data.fieldValue=(0,i.stringToPDFString)(this.data.fieldValue||"")
var t=i.Util.getInheritableProperty(e.dict,"Q");(!(0,i.isInt)(t)||t<0||t>2)&&(t=null),this.data.textAlignment=t
var r=i.Util.getInheritableProperty(e.dict,"MaxLen");(!(0,i.isInt)(r)||r<0)&&(r=null),this.data.maxLen=r,this.data.multiLine=this.hasFieldFlag(i.AnnotationFieldFlag.MULTILINE),this.data.comb=this.hasFieldFlag(i.AnnotationFieldFlag.COMB)&&!this.hasFieldFlag(i.AnnotationFieldFlag.MULTILINE)&&!this.hasFieldFlag(i.AnnotationFieldFlag.PASSWORD)&&!this.hasFieldFlag(i.AnnotationFieldFlag.FILESELECT)&&null!==this.data.maxLen}return i.Util.inherit(e,f,{getOperatorList:function(e,t,r){var a=new c.OperatorList
if(r)return Promise.resolve(a)
if(this.appearance)return u.prototype.getOperatorList.call(this,e,t,r)
if(!this.data.defaultAppearance)return Promise.resolve(a)
var n=new l.Stream((0,i.stringToBytes)(this.data.defaultAppearance))
return e.getOperatorList({stream:n,task:t,resources:this.fieldResources,operatorList:a}).then(function(){return a})}}),e}(),g=function(){function e(e){if(f.call(this,e),this.data.checkBox=!this.hasFieldFlag(i.AnnotationFieldFlag.RADIO)&&!this.hasFieldFlag(i.AnnotationFieldFlag.PUSHBUTTON),this.data.checkBox){if(!(0,o.isName)(this.data.fieldValue))return
this.data.fieldValue=this.data.fieldValue.name}if(this.data.radioButton=this.hasFieldFlag(i.AnnotationFieldFlag.RADIO)&&!this.hasFieldFlag(i.AnnotationFieldFlag.PUSHBUTTON),this.data.radioButton){this.data.fieldValue=this.data.buttonValue=null
var t=e.dict.get("Parent")
if((0,o.isDict)(t)&&t.has("V")){var r=t.get("V");(0,o.isName)(r)&&(this.data.fieldValue=r.name)}var a=e.dict.get("AP")
if(!(0,o.isDict)(a))return
var n=a.get("N")
if(!(0,o.isDict)(n))return
for(var s=n.getKeys(),c=0,l=s.length;c<l;c++)if("Off"!==s[c]){this.data.buttonValue=s[c]
break}}}return i.Util.inherit(e,f,{getOperatorList:function(e,t,r){var a=new c.OperatorList
return r?Promise.resolve(a):this.appearance?u.prototype.getOperatorList.call(this,e,t,r):Promise.resolve(a)}}),e}(),m=function(){function e(e){f.call(this,e),this.data.options=[]
var t=i.Util.getInheritableProperty(e.dict,"Opt")
if((0,i.isArray)(t))for(var r=e.xref,a=0,n=t.length;a<n;a++){var o=r.fetchIfRef(t[a]),s=(0,i.isArray)(o)
this.data.options[a]={exportValue:s?r.fetchIfRef(o[0]):o,displayValue:s?r.fetchIfRef(o[1]):o}}(0,i.isArray)(this.data.fieldValue)||(this.data.fieldValue=[this.data.fieldValue]),this.data.combo=this.hasFieldFlag(i.AnnotationFieldFlag.COMBO),this.data.multiSelect=this.hasFieldFlag(i.AnnotationFieldFlag.MULTISELECT)}return i.Util.inherit(e,f,{getOperatorList:function(e,t,r){var a=new c.OperatorList
return r?Promise.resolve(a):u.prototype.getOperatorList.call(this,e,t,r)}}),e}(),p=function(){function e(e){u.call(this,e),this.data.annotationType=i.AnnotationType.TEXT,this.data.hasAppearance?this.data.name="NoIcon":(this.data.rect[1]=this.data.rect[3]-t,this.data.rect[2]=this.data.rect[0]+t,this.data.name=e.dict.has("Name")?e.dict.get("Name").name:"Note"),this._preparePopup(e.dict)}var t=22
return i.Util.inherit(e,u,{}),e}(),b=function(){function e(e){u.call(this,e)
var t=this.data
t.annotationType=i.AnnotationType.LINK,n.Catalog.parseDestDictionary({destDict:e.dict,resultObj:t,docBaseUrl:e.pdfManager.docBaseUrl})}return i.Util.inherit(e,u,{}),e}(),v=function(){function e(e){u.call(this,e),this.data.annotationType=i.AnnotationType.POPUP
var t=e.dict,r=t.get("Parent")
if(!r)return void(0,i.warn)("Popup annotation has a missing or invalid parent annotation.")
var a=r.get("Subtype")
if(this.data.parentType=(0,o.isName)(a)?a.name:null,this.data.parentId=t.getRaw("Parent").toString(),this.data.title=(0,i.stringToPDFString)(r.get("T")||""),this.data.contents=(0,i.stringToPDFString)(r.get("Contents")||""),r.has("C")?(this.setColor(r.getArray("C")),this.data.color=this.color):this.data.color=null,!this.viewable){var n=r.get("F")
this._isViewable(n)&&this.setFlags(n)}}return i.Util.inherit(e,u,{}),e}(),y=function(){function e(e){u.call(this,e),this.data.annotationType=i.AnnotationType.LINE
var t=e.dict
this.data.lineCoordinates=i.Util.normalizeRect(t.getArray("L")),this._preparePopup(t)}return i.Util.inherit(e,u,{}),e}(),w=function(){function e(e){u.call(this,e),this.data.annotationType=i.AnnotationType.HIGHLIGHT,this._preparePopup(e.dict)}return i.Util.inherit(e,u,{}),e}(),k=function(){function e(e){u.call(this,e),this.data.annotationType=i.AnnotationType.UNDERLINE,this._preparePopup(e.dict)}return i.Util.inherit(e,u,{}),e}(),S=function(){function e(e){u.call(this,e),this.data.annotationType=i.AnnotationType.SQUIGGLY,this._preparePopup(e.dict)}return i.Util.inherit(e,u,{}),e}(),C=function(){function e(e){u.call(this,e),this.data.annotationType=i.AnnotationType.STRIKEOUT,this._preparePopup(e.dict)}return i.Util.inherit(e,u,{}),e}(),x=function(){function e(e){u.call(this,e)
var t=new n.FileSpec(e.dict.get("FS"),e.xref)
this.data.annotationType=i.AnnotationType.FILEATTACHMENT,this.data.file=t.serializable,this._preparePopup(e.dict)}return i.Util.inherit(e,u,{}),e}()
t.Annotation=u,t.AnnotationBorderStyle=h,t.AnnotationFactory=a},function(e,t,r){"use strict"
function a(e){return 0!=(1&e)}function i(e){return 0==(1&e)}function n(e,t,r){for(var a=t,i=e.length;a<i;++a)if(e[a]!==r)return a
return a}function o(e,t,r,a){for(var i=t;i<r;++i)e[i]=a}function s(e,t,r){for(var a=t,i=r-1;a<i;++a,--i){var n=e[a]
e[a]=e[i],e[i]=n}}function c(e,t,r){return{str:e,dir:r?"ttb":t?"ltr":"rtl"}}function l(e,t,r){var l=!0,m=e.length
if(0===m||r)return c(e,l,r)
d.length=m,g.length=m
var p,b,v=0
for(p=0;p<m;++p){d[p]=e.charAt(p)
var y=e.charCodeAt(p),w="L"
y<=255?w=h[y]:1424<=y&&y<=1524?w="R":1536<=y&&y<=1791?(w=f[255&y])||(0,u.warn)("Bidi: invalid Unicode character "+y.toString(16)):1792<=y&&y<=2220&&(w="AL"),"R"!==w&&"AL"!==w&&"AN"!==w||v++,g[p]=w}if(0===v)return l=!0,c(e,l);-1===t&&(v/m<.3?(l=!0,t=0):(l=!1,t=1))
var k=[]
for(p=0;p<m;++p)k[p]=t
var S=a(t)?"R":"L",C=S,x=C,A=C
for(p=0;p<m;++p)"NSM"===g[p]?g[p]=A:A=g[p]
A=C
var P
for(p=0;p<m;++p)P=g[p],"EN"===P?g[p]="AL"===A?"AN":"EN":"R"!==P&&"L"!==P&&"AL"!==P||(A=P)
for(p=0;p<m;++p)"AL"===(P=g[p])&&(g[p]="R")
for(p=1;p<m-1;++p)"ES"===g[p]&&"EN"===g[p-1]&&"EN"===g[p+1]&&(g[p]="EN"),"CS"!==g[p]||"EN"!==g[p-1]&&"AN"!==g[p-1]||g[p+1]!==g[p-1]||(g[p]=g[p-1])
for(p=0;p<m;++p)if("EN"===g[p]){var I
for(I=p-1;I>=0&&"ET"===g[I];--I)g[I]="EN"
for(I=p+1;I<m&&"ET"===g[I];++I)g[I]="EN"}for(p=0;p<m;++p)"WS"!==(P=g[p])&&"ES"!==P&&"ET"!==P&&"CS"!==P||(g[p]="ON")
for(A=C,p=0;p<m;++p)P=g[p],"EN"===P?g[p]="L"===A?"L":"EN":"R"!==P&&"L"!==P||(A=P)
for(p=0;p<m;++p)if("ON"===g[p]){var _=n(g,p+1,"ON"),O=C
p>0&&(O=g[p-1])
var T=x
_+1<m&&(T=g[_+1]),"L"!==O&&(O="R"),"L"!==T&&(T="R"),O===T&&o(g,p,_,O),p=_-1}for(p=0;p<m;++p)"ON"===g[p]&&(g[p]=S)
for(p=0;p<m;++p)P=g[p],i(k[p])?"R"===P?k[p]+=1:"AN"!==P&&"EN"!==P||(k[p]+=2):"L"!==P&&"AN"!==P&&"EN"!==P||(k[p]+=1)
var E,R=-1,F=99
for(p=0,b=k.length;p<b;++p)E=k[p],R<E&&(R=E),F>E&&a(E)&&(F=E)
for(E=R;E>=F;--E){var B=-1
for(p=0,b=k.length;p<b;++p)k[p]<E?B>=0&&(s(d,B,p),B=-1):B<0&&(B=p)
B>=0&&s(d,B,k.length)}for(p=0,b=d.length;p<b;++p){var M=d[p]
"<"!==M&&">"!==M||(d[p]="")}return c(d.join(""),l)}Object.defineProperty(t,"__esModule",{value:!0}),t.bidi=void 0
var u=r(0),h=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","ON","ON","ET","ET","ET","ON","ON","ON","ON","ON","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","ON","ON","ON","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","ON","ET","ET","ET","ET","ON","ON","ON","ON","L","ON","ON","BN","ON","ON","ET","ET","EN","EN","ON","L","ON","ON","ON","EN","L","ON","ON","ON","ON","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","ON","L","L","L","L","L","L","L","L"],f=["AN","AN","AN","AN","AN","AN","ON","ON","AL","ET","ET","AL","CS","AL","ON","ON","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","ON","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","ON","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL"],d=[],g=[]
t.bidi=l},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var a=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron"],i=[".notdef","space","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],n=[".notdef","space","dollaroldstyle","dollarsuperior","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","hyphensuperior","colonmonetary","onefitted","rupiah","centoldstyle","figuredash","hypheninferior","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior"]
t.ISOAdobeCharset=a,t.ExpertCharset=i,t.ExpertSubsetCharset=n},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CMapFactory=t.IdentityCMap=t.CMap=void 0
var a=r(0),i=r(1),n=r(23),o=r(3),s=["Adobe-GB1-UCS2","Adobe-CNS1-UCS2","Adobe-Japan1-UCS2","Adobe-Korea1-UCS2","78-EUC-H","78-EUC-V","78-H","78-RKSJ-H","78-RKSJ-V","78-V","78ms-RKSJ-H","78ms-RKSJ-V","83pv-RKSJ-H","90ms-RKSJ-H","90ms-RKSJ-V","90msp-RKSJ-H","90msp-RKSJ-V","90pv-RKSJ-H","90pv-RKSJ-V","Add-H","Add-RKSJ-H","Add-RKSJ-V","Add-V","Adobe-CNS1-0","Adobe-CNS1-1","Adobe-CNS1-2","Adobe-CNS1-3","Adobe-CNS1-4","Adobe-CNS1-5","Adobe-CNS1-6","Adobe-GB1-0","Adobe-GB1-1","Adobe-GB1-2","Adobe-GB1-3","Adobe-GB1-4","Adobe-GB1-5","Adobe-Japan1-0","Adobe-Japan1-1","Adobe-Japan1-2","Adobe-Japan1-3","Adobe-Japan1-4","Adobe-Japan1-5","Adobe-Japan1-6","Adobe-Korea1-0","Adobe-Korea1-1","Adobe-Korea1-2","B5-H","B5-V","B5pc-H","B5pc-V","CNS-EUC-H","CNS-EUC-V","CNS1-H","CNS1-V","CNS2-H","CNS2-V","ETHK-B5-H","ETHK-B5-V","ETen-B5-H","ETen-B5-V","ETenms-B5-H","ETenms-B5-V","EUC-H","EUC-V","Ext-H","Ext-RKSJ-H","Ext-RKSJ-V","Ext-V","GB-EUC-H","GB-EUC-V","GB-H","GB-V","GBK-EUC-H","GBK-EUC-V","GBK2K-H","GBK2K-V","GBKp-EUC-H","GBKp-EUC-V","GBT-EUC-H","GBT-EUC-V","GBT-H","GBT-V","GBTpc-EUC-H","GBTpc-EUC-V","GBpc-EUC-H","GBpc-EUC-V","H","HKdla-B5-H","HKdla-B5-V","HKdlb-B5-H","HKdlb-B5-V","HKgccs-B5-H","HKgccs-B5-V","HKm314-B5-H","HKm314-B5-V","HKm471-B5-H","HKm471-B5-V","HKscs-B5-H","HKscs-B5-V","Hankaku","Hiragana","KSC-EUC-H","KSC-EUC-V","KSC-H","KSC-Johab-H","KSC-Johab-V","KSC-V","KSCms-UHC-H","KSCms-UHC-HW-H","KSCms-UHC-HW-V","KSCms-UHC-V","KSCpc-EUC-H","KSCpc-EUC-V","Katakana","NWP-H","NWP-V","RKSJ-H","RKSJ-V","Roman","UniCNS-UCS2-H","UniCNS-UCS2-V","UniCNS-UTF16-H","UniCNS-UTF16-V","UniCNS-UTF32-H","UniCNS-UTF32-V","UniCNS-UTF8-H","UniCNS-UTF8-V","UniGB-UCS2-H","UniGB-UCS2-V","UniGB-UTF16-H","UniGB-UTF16-V","UniGB-UTF32-H","UniGB-UTF32-V","UniGB-UTF8-H","UniGB-UTF8-V","UniJIS-UCS2-H","UniJIS-UCS2-HW-H","UniJIS-UCS2-HW-V","UniJIS-UCS2-V","UniJIS-UTF16-H","UniJIS-UTF16-V","UniJIS-UTF32-H","UniJIS-UTF32-V","UniJIS-UTF8-H","UniJIS-UTF8-V","UniJIS2004-UTF16-H","UniJIS2004-UTF16-V","UniJIS2004-UTF32-H","UniJIS2004-UTF32-V","UniJIS2004-UTF8-H","UniJIS2004-UTF8-V","UniJISPro-UCS2-HW-V","UniJISPro-UCS2-V","UniJISPro-UTF8-V","UniJISX0213-UTF32-H","UniJISX0213-UTF32-V","UniJISX02132004-UTF32-H","UniJISX02132004-UTF32-V","UniKS-UCS2-H","UniKS-UCS2-V","UniKS-UTF16-H","UniKS-UTF16-V","UniKS-UTF32-H","UniKS-UTF32-V","UniKS-UTF8-H","UniKS-UTF8-V","V","WP-Symbol"],c=function(){function e(e){this.codespaceRanges=[[],[],[],[]],this.numCodespaceRanges=0,this._map=[],this.name="",this.vertical=!1,this.useCMap=null,this.builtInCMap=e}return e.prototype={addCodespaceRange:function(e,t,r){this.codespaceRanges[e-1].push(t,r),this.numCodespaceRanges++},mapCidRange:function(e,t,r){for(;e<=t;)this._map[e++]=r++},mapBfRange:function(e,t,r){for(var a=r.length-1;e<=t;)this._map[e++]=r,r=r.substr(0,a)+String.fromCharCode(r.charCodeAt(a)+1)},mapBfRangeToArray:function(e,t,r){for(var a=0,i=r.length;e<=t&&a<i;)this._map[e]=r[a++],++e},mapOne:function(e,t){this._map[e]=t},lookup:function(e){return this._map[e]},contains:function(e){return void 0!==this._map[e]},forEach:function(e){var t=this._map,r=t.length
if(r<=65536)for(var a=0;a<r;a++)void 0!==t[a]&&e(a,t[a])
else for(var i in t)e(i,t[i])},charCodeOf:function(e){var t=this._map
if(t.length<=65536)return t.indexOf(e)
for(var r in t)if(t[r]===e)return 0|r
return-1},getMap:function(){return this._map},readCharCode:function(e,t,r){for(var a=0,i=this.codespaceRanges,n=this.codespaceRanges.length,o=0;o<n;o++){a=(a<<8|e.charCodeAt(t+o))>>>0
for(var s=i[o],c=0,l=s.length;c<l;){var u=s[c++],h=s[c++]
if(a>=u&&a<=h)return r.charcode=a,void(r.length=o+1)}}r.charcode=0,r.length=1},get length(){return this._map.length},get isIdentityCMap(){if("Identity-H"!==this.name&&"Identity-V"!==this.name)return!1
if(65536!==this._map.length)return!1
for(var e=0;e<65536;e++)if(this._map[e]!==e)return!1
return!0}},e}(),l=function(){function e(e,t){c.call(this),this.vertical=e,this.addCodespaceRange(t,0,65535)}return a.Util.inherit(e,c,{}),e.prototype={addCodespaceRange:c.prototype.addCodespaceRange,mapCidRange:function(e,t,r){throw new Error("should not call mapCidRange")},mapBfRange:function(e,t,r){throw new Error("should not call mapBfRange")},mapBfRangeToArray:function(e,t,r){throw new Error("should not call mapBfRangeToArray")},mapOne:function(e,t){throw new Error("should not call mapCidOne")},lookup:function(e){return(0,a.isInt)(e)&&e<=65535?e:void 0},contains:function(e){return(0,a.isInt)(e)&&e<=65535},forEach:function(e){for(var t=0;t<=65535;t++)e(t,t)},charCodeOf:function(e){return(0,a.isInt)(e)&&e<=65535?e:-1},getMap:function(){for(var e=new Array(65536),t=0;t<=65535;t++)e[t]=t
return e},readCharCode:c.prototype.readCharCode,get length(){return 65536},get isIdentityCMap(){throw new Error("should not access .isIdentityCMap")}},e}(),u=function(){function e(e,t){for(var r=0,a=0;a<=t;a++)r=r<<8|e[a]
return r>>>0}function t(e,t){return 1===t?String.fromCharCode(e[0],e[1]):3===t?String.fromCharCode(e[0],e[1],e[2],e[3]):String.fromCharCode.apply(null,e.subarray(0,t+1))}function r(e,t,r){for(var a=0,i=r;i>=0;i--)a+=e[i]+t[i],e[i]=255&a,a>>=8}function i(e,t){for(var r=1,a=t;a>=0&&r>0;a--)r+=e[a],e[a]=255&r,r>>=8}function n(e){this.buffer=e,this.pos=0,this.end=e.length,this.tmpBuf=new Uint8Array(l)}function o(a,o,s){return new Promise(function(l,u){var h=new n(a),f=h.readByte()
o.vertical=!!(1&f)
for(var d,g,m=null,p=new Uint8Array(c),b=new Uint8Array(c),v=new Uint8Array(c),y=new Uint8Array(c),w=new Uint8Array(c);(g=h.readByte())>=0;){var k=g>>5
if(7!==k){var S=!!(16&g),C=15&g
if(C+1>c)throw new Error("processBinaryCMap: Invalid dataSize.")
var x,A=h.readNumber()
switch(k){case 0:for(h.readHex(p,C),h.readHexNumber(b,C),r(b,p,C),o.addCodespaceRange(C+1,e(p,C),e(b,C)),x=1;x<A;x++)i(b,C),h.readHexNumber(p,C),r(p,b,C),h.readHexNumber(b,C),r(b,p,C),o.addCodespaceRange(C+1,e(p,C),e(b,C))
break
case 1:for(h.readHex(p,C),h.readHexNumber(b,C),r(b,p,C),d=h.readNumber(),x=1;x<A;x++)i(b,C),h.readHexNumber(p,C),r(p,b,C),h.readHexNumber(b,C),r(b,p,C),d=h.readNumber()
break
case 2:for(h.readHex(v,C),d=h.readNumber(),o.mapOne(e(v,C),d),x=1;x<A;x++)i(v,C),S||(h.readHexNumber(w,C),r(v,w,C)),d=h.readSigned()+(d+1),o.mapOne(e(v,C),d)
break
case 3:for(h.readHex(p,C),h.readHexNumber(b,C),r(b,p,C),d=h.readNumber(),o.mapCidRange(e(p,C),e(b,C),d),x=1;x<A;x++)i(b,C),S?p.set(b):(h.readHexNumber(p,C),r(p,b,C)),h.readHexNumber(b,C),r(b,p,C),d=h.readNumber(),o.mapCidRange(e(p,C),e(b,C),d)
break
case 4:for(h.readHex(v,1),h.readHex(y,C),o.mapOne(e(v,1),t(y,C)),x=1;x<A;x++)i(v,1),S||(h.readHexNumber(w,1),r(v,w,1)),i(y,C),h.readHexSigned(w,C),r(y,w,C),o.mapOne(e(v,1),t(y,C))
break
case 5:for(h.readHex(p,1),h.readHexNumber(b,1),r(b,p,1),h.readHex(y,C),o.mapBfRange(e(p,1),e(b,1),t(y,C)),x=1;x<A;x++)i(b,1),S?p.set(b):(h.readHexNumber(p,1),r(p,b,1)),h.readHexNumber(b,1),r(b,p,1),h.readHex(y,C),o.mapBfRange(e(p,1),e(b,1),t(y,C))
break
default:return void u(new Error("processBinaryCMap: Unknown type: "+k))}}else switch(31&g){case 0:h.readString()
break
case 1:m=h.readString()}}if(m)return void l(s(m))
l(o)})}function s(){}var c=16,l=19
return n.prototype={readByte:function(){return this.pos>=this.end?-1:this.buffer[this.pos++]},readNumber:function(){var e,t=0
do{var r=this.readByte()
if(r<0)throw new a.FormatError("unexpected EOF in bcmap")
e=!(128&r),t=t<<7|127&r}while(!e)
return t},readSigned:function(){var e=this.readNumber()
return 1&e?~(e>>>1):e>>>1},readHex:function(e,t){e.set(this.buffer.subarray(this.pos,this.pos+t+1)),this.pos+=t+1},readHexNumber:function(e,t){var r,i=this.tmpBuf,n=0
do{var o=this.readByte()
if(o<0)throw new a.FormatError("unexpected EOF in bcmap")
r=!(128&o),i[n++]=127&o}while(!r)
for(var s=t,c=0,l=0;s>=0;){for(;l<8&&i.length>0;)c=i[--n]<<l|c,l+=7
e[s]=255&c,s--,c>>=8,l-=8}},readHexSigned:function(e,t){this.readHexNumber(e,t)
for(var r=1&e[t]?255:0,a=0,i=0;i<=t;i++)a=(1&a)<<8|e[i],e[i]=a>>1^r},readString:function(){for(var e=this.readNumber(),t="",r=0;r<e;r++)t+=String.fromCharCode(this.readNumber())
return t}},s.prototype={process:o},s}(),h=function(){function e(e){for(var t=0,r=0;r<e.length;r++)t=t<<8|e.charCodeAt(r)
return t>>>0}function t(e){if(!(0,a.isString)(e))throw new a.FormatError("Malformed CMap: expected string.")}function r(e){if(!(0,a.isInt)(e))throw new a.FormatError("Malformed CMap: expected int.")}function h(r,a){for(;;){var n=a.getObj()
if((0,i.isEOF)(n))break
if((0,i.isCmd)(n,"endbfchar"))return
t(n)
var o=e(n)
n=a.getObj(),t(n)
var s=n
r.mapOne(o,s)}}function f(r,n){for(;;){var o=n.getObj()
if((0,i.isEOF)(o))break
if((0,i.isCmd)(o,"endbfrange"))return
t(o)
var s=e(o)
o=n.getObj(),t(o)
var c=e(o)
if(o=n.getObj(),(0,a.isInt)(o)||(0,a.isString)(o)){var l=(0,a.isInt)(o)?String.fromCharCode(o):o
r.mapBfRange(s,c,l)}else{if(!(0,i.isCmd)(o,"["))break
o=n.getObj()
for(var u=[];!(0,i.isCmd)(o,"]")&&!(0,i.isEOF)(o);)u.push(o),o=n.getObj()
r.mapBfRangeToArray(s,c,u)}}throw new a.FormatError("Invalid bf range.")}function d(a,n){for(;;){var o=n.getObj()
if((0,i.isEOF)(o))break
if((0,i.isCmd)(o,"endcidchar"))return
t(o)
var s=e(o)
o=n.getObj(),r(o)
var c=o
a.mapOne(s,c)}}function g(a,n){for(;;){var o=n.getObj()
if((0,i.isEOF)(o))break
if((0,i.isCmd)(o,"endcidrange"))return
t(o)
var s=e(o)
o=n.getObj(),t(o)
var c=e(o)
o=n.getObj(),r(o)
var l=o
a.mapCidRange(s,c,l)}}function m(t,r){for(;;){var n=r.getObj()
if((0,i.isEOF)(n))break
if((0,i.isCmd)(n,"endcodespacerange"))return
if(!(0,a.isString)(n))break
var o=e(n)
if(n=r.getObj(),!(0,a.isString)(n))break
var s=e(n)
t.addCodespaceRange(n.length,o,s)}throw new a.FormatError("Invalid codespace range.")}function p(e,t){var r=t.getObj();(0,a.isInt)(r)&&(e.vertical=!!r)}function b(e,t){var r=t.getObj();(0,i.isName)(r)&&(0,a.isString)(r.name)&&(e.name=r.name)}function v(e,t,r,n){var o,s
e:for(;;)try{var c=t.getObj()
if((0,i.isEOF)(c))break
if((0,i.isName)(c))"WMode"===c.name?p(e,t):"CMapName"===c.name&&b(e,t),o=c
else if((0,i.isCmd)(c))switch(c.cmd){case"endcmap":break e
case"usecmap":(0,i.isName)(o)&&(s=o.name)
break
case"begincodespacerange":m(e,t)
break
case"beginbfchar":h(e,t)
break
case"begincidchar":d(e,t)
break
case"beginbfrange":f(e,t)
break
case"begincidrange":g(e,t)}}catch(e){if(e instanceof a.MissingDataException)throw e;(0,a.warn)("Invalid cMap data: "+e)
continue}return!n&&s&&(n=s),n?y(e,r,n):Promise.resolve(e)}function y(e,t,r){return w(r,t).then(function(t){if(e.useCMap=t,0===e.numCodespaceRanges){for(var r=e.useCMap.codespaceRanges,a=0;a<r.length;a++)e.codespaceRanges[a]=r[a].slice()
e.numCodespaceRanges=e.useCMap.numCodespaceRanges}return e.useCMap.forEach(function(t,r){e.contains(t)||e.mapOne(t,e.useCMap.lookup(t))}),e})}function w(e,t){return"Identity-H"===e?Promise.resolve(new l(!1,2)):"Identity-V"===e?Promise.resolve(new l(!0,2)):-1===s.indexOf(e)?Promise.reject(new Error("Unknown CMap name: "+e)):t?t(e).then(function(e){var r=e.cMapData,i=e.compressionType,s=new c(!0)
if(i===a.CMapCompressionType.BINARY)return(new u).process(r,s,function(e){return y(s,t,e)})
if(i===a.CMapCompressionType.NONE){var l=new n.Lexer(new o.Stream(r))
return v(s,l,t,null)}return Promise.reject(new Error("TODO: Only BINARY/NONE CMap compression is currently supported."))}):Promise.reject(new Error("Built-in CMap parameters are not provided."))}return{create:function(e){var t=e.encoding,r=e.fetchBuiltInCMap,a=e.useCMap
if((0,i.isName)(t))return w(t.name,r)
if((0,i.isStream)(t)){return v(new c,new n.Lexer(t),r,a).then(function(e){return e.isIdentityCMap?w(e.name,r):e})}return Promise.reject(new Error("Encoding required."))}}}()
t.CMap=c,t.IdentityCMap=l,t.CMapFactory=h},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFDocument=t.Page=void 0
var a=function(){function e(e,t){var r=[],a=!0,i=!1,n=void 0
try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw n}}return r}return function(t,r){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,r)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=r(58),n=r(1),o=r(0),s=r(3),c=r(56),l=r(87),u=r(55),h=r(23),f=function(){function e(e,t){return"display"===t&&e.viewable||"print"===t&&e.printable}function t(e,t,r,a,i,n,o){this.pdfManager=e,this.pageIndex=r,this.pageDict=a,this.xref=t,this.ref=i,this.fontCache=n,this.builtInCMapCache=o,this.evaluatorOptions=e.evaluatorOptions,this.resourcesPromise=null
var s="p"+this.pageIndex+"_",c={obj:0}
this.idFactory={createObjId:function(){return s+ ++c.obj}}}var r=[0,0,612,792]
return t.prototype={getPageProp:function(e){return this.pageDict.get(e)},getInheritedPageProp:function(e,t){var r=this.pageDict,a=null,i=0
for(t=t||!1;r;){var s=t?r.getArray(e):r.get(e)
if(void 0!==s&&(a||(a=[]),a.push(s)),++i>100)return(0,o.warn)("getInheritedPageProp: maximum loop count exceeded for "+e),a?a[0]:void 0
r=r.get("Parent")}if(a)return 1!==a.length&&(0,n.isDict)(a[0])?n.Dict.merge(this.xref,a):a[0]},get content(){return this.getPageProp("Contents")},get resources(){return(0,o.shadow)(this,"resources",this.getInheritedPageProp("Resources")||n.Dict.empty)},get mediaBox(){var e=this.getInheritedPageProp("MediaBox",!0)
return(0,o.isArray)(e)&&4===e.length?(0,o.shadow)(this,"mediaBox",e):(0,o.shadow)(this,"mediaBox",r)},get cropBox(){var e=this.getInheritedPageProp("CropBox",!0)
return(0,o.isArray)(e)&&4===e.length?(0,o.shadow)(this,"cropBox",e):(0,o.shadow)(this,"cropBox",this.mediaBox)},get userUnit(){var e=this.getPageProp("UserUnit")
return(!(0,o.isNum)(e)||e<=0)&&(e=1),(0,o.shadow)(this,"userUnit",e)},get view(){var e=this.mediaBox,t=this.cropBox
if(e===t)return(0,o.shadow)(this,"view",e)
var r=o.Util.intersect(t,e)
return(0,o.shadow)(this,"view",r||e)},get rotate(){var e=this.getInheritedPageProp("Rotate")||0
return e%90!=0?e=0:e>=360?e%=360:e<0&&(e=(e%360+360)%360),(0,o.shadow)(this,"rotate",e)},getContentStream:function(){var e,t=this.content
if((0,o.isArray)(t)){var r,a=this.xref,i=t.length,c=[]
for(r=0;r<i;++r)c.push(a.fetchIfRef(t[r]))
e=new s.StreamsSequenceStream(c)}else e=(0,n.isStream)(t)?t:new s.NullStream
return e},loadResources:function(e){var t=this
return this.resourcesPromise||(this.resourcesPromise=this.pdfManager.ensure(this,"resources")),this.resourcesPromise.then(function(){return new i.ObjectLoader(t.resources,e,t.xref).load()})},getOperatorList:function(t){var r=this,i=t.handler,n=t.task,s=t.intent,l=t.renderInteractiveForms,u=this.pdfManager.ensure(this,"getContentStream"),h=this.loadResources(["ExtGState","ColorSpace","Pattern","Shading","XObject","Font"]),f=new c.PartialEvaluator({pdfManager:this.pdfManager,xref:this.xref,handler:i,pageIndex:this.pageIndex,idFactory:this.idFactory,fontCache:this.fontCache,builtInCMapCache:this.builtInCMapCache,options:this.evaluatorOptions}),d=Promise.all([u,h]),g=d.then(function(e){var t=a(e,1),o=t[0],l=new c.OperatorList(s,i,r.pageIndex)
return i.send("StartRenderPage",{transparency:f.hasBlendModes(r.resources),pageIndex:r.pageIndex,intent:s}),f.getOperatorList({stream:o,task:n,resources:r.resources,operatorList:l}).then(function(){return l})}),m=this.pdfManager.ensure(this,"annotations")
return Promise.all([g,m]).then(function(t){var r=a(t,2),i=r[0],c=r[1]
if(0===c.length)return i.flush(!0),i
var u,h,d=[]
for(u=0,h=c.length;u<h;u++)e(c[u],s)&&d.push(c[u].getOperatorList(f,n,l))
return Promise.all(d).then(function(e){for(i.addOp(o.OPS.beginAnnotations,[]),u=0,h=e.length;u<h;u++)i.addOpList(e[u])
return i.addOp(o.OPS.endAnnotations,[]),i.flush(!0),i})})},extractTextContent:function(e){var t=this,r=e.handler,i=e.task,n=e.normalizeWhitespace,o=e.sink,s=e.combineTextItems,l=this.pdfManager.ensure(this,"getContentStream"),u=this.loadResources(["ExtGState","XObject","Font"])
return Promise.all([l,u]).then(function(e){var l=a(e,1),u=l[0]
return new c.PartialEvaluator({pdfManager:t.pdfManager,xref:t.xref,handler:r,pageIndex:t.pageIndex,idFactory:t.idFactory,fontCache:t.fontCache,builtInCMapCache:t.builtInCMapCache,options:t.evaluatorOptions}).getTextContent({stream:u,task:i,resources:t.resources,normalizeWhitespace:n,combineTextItems:s,sink:o})})},getAnnotationsData:function(t){for(var r=this.annotations,a=[],i=0,n=r.length;i<n;++i)t&&!e(r[i],t)||a.push(r[i].data)
return a},get annotations(){for(var e=[],t=this.getInheritedPageProp("Annots")||[],r=new l.AnnotationFactory,a=0,i=t.length;a<i;++a){var n=t[a],s=r.create(this.xref,n,this.pdfManager,this.idFactory)
s&&e.push(s)}return(0,o.shadow)(this,"annotations",e)}},t}(),d=function(){function e(e,t){var r
if((0,n.isStream)(t))r=t
else{if(!(0,o.isArrayBuffer)(t))throw new Error("PDFDocument: Unknown argument type")
r=new s.Stream(t)}if(r.length<=0)throw new Error("PDFDocument: stream must have data")
this.pdfManager=e,this.stream=r,this.xref=new i.XRef(r,e)}function t(e,t,r,a){var i=e.pos,n=e.end,o=[]
i+r>n&&(r=n-i)
for(var s=0;s<r;++s)o.push(String.fromCharCode(e.getByte()))
var c=o.join("")
e.pos=i
var l=a?c.lastIndexOf(t):c.indexOf(t)
return-1!==l&&(e.pos+=l,!0)}var r=1024,a={get entries(){return(0,o.shadow)(this,"entries",{Title:o.isString,Author:o.isString,Subject:o.isString,Keywords:o.isString,Creator:o.isString,Producer:o.isString,CreationDate:o.isString,ModDate:o.isString,Trapped:n.isName})}}
return e.prototype={parse:function(e){this.setup(e)
var t=this.catalog.catDict.get("Version");(0,n.isName)(t)&&(this.pdfFormatVersion=t.name)
try{if(this.acroForm=this.catalog.catDict.get("AcroForm"),this.acroForm){this.xfa=this.acroForm.get("XFA")
var r=this.acroForm.get("Fields")
r&&(0,o.isArray)(r)&&0!==r.length||this.xfa||(this.acroForm=null)}}catch(e){if(e instanceof o.MissingDataException)throw e;(0,o.info)("Something wrong with AcroForm entry"),this.acroForm=null}},get linearization(){var e=null
if(this.stream.length)try{e=h.Linearization.create(this.stream)}catch(e){if(e instanceof o.MissingDataException)throw e;(0,o.info)(e)}return(0,o.shadow)(this,"linearization",e)},get startXRef(){var e=this.stream,r=0
if(this.linearization)e.reset(),t(e,"endobj",1024)&&(r=e.pos+6)
else{for(var a=!1,i=e.end;!a&&i>0;)i-=1024-"startxref".length,i<0&&(i=0),e.pos=i,a=t(e,"startxref",1024,!0)
if(a){e.skip(9)
var n
do{n=e.getByte()}while((0,o.isSpace)(n))
for(var s="";n>=32&&n<=57;)s+=String.fromCharCode(n),n=e.getByte()
r=parseInt(s,10),isNaN(r)&&(r=0)}}return(0,o.shadow)(this,"startXRef",r)},get mainXRefEntriesOffset(){var e=0,t=this.linearization
return t&&(e=t.mainXRefEntriesOffset),(0,o.shadow)(this,"mainXRefEntriesOffset",e)},checkHeader:function(){var e=this.stream
if(e.reset(),t(e,"%PDF-",1024)){e.moveStart()
for(var r,a="";(r=e.getByte())>32&&!(a.length>=12);)a+=String.fromCharCode(r)
return void(this.pdfFormatVersion||(this.pdfFormatVersion=a.substring(5)))}},parseStartXRef:function(){var e=this.startXRef
this.xref.setStartXRef(e)},setup:function(e){var t=this
this.xref.parse(e)
var r={createPage:function(e,r,a,i,n){return new f(t.pdfManager,t.xref,e,r,a,i,n)}}
this.catalog=new i.Catalog(this.pdfManager,this.xref,r)},get numPages(){var e=this.linearization,t=e?e.numPages:this.catalog.numPages
return(0,o.shadow)(this,"numPages",t)},get documentInfo(){var e,t={PDFFormatVersion:this.pdfFormatVersion,IsAcroFormPresent:!!this.acroForm,IsXFAPresent:!!this.xfa}
try{e=this.xref.trailer.get("Info")}catch(e){if(e instanceof o.MissingDataException)throw e;(0,o.info)("The document information dictionary is invalid.")}if(e){var r=a.entries
for(var i in r)if(e.has(i)){var n=e.get(i)
r[i](n)?t[i]="string"!=typeof n?n:(0,o.stringToPDFString)(n):(0,o.info)('Bad value in document info for "'+i+'"')}}return(0,o.shadow)(this,"documentInfo",t)},get fingerprint(){var e,t=this.xref,a="",i=t.trailer.get("ID")
i&&(0,o.isArray)(i)&&i[0]&&(0,o.isString)(i[0])&&"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"!==i[0]?e=(0,o.stringToBytes)(i[0]):(this.stream.ensureRange&&this.stream.ensureRange(0,Math.min(r,this.stream.end)),e=(0,u.calculateMD5)(this.stream.bytes.subarray(0,r),0,r))
for(var n=0,s=e.length;n<s;n++){var c=e[n].toString(16)
a+=1===c.length?"0"+c:c}return(0,o.shadow)(this,"fingerprint",a)},getPage:function(e){return this.catalog.getPage(e)},cleanup:function(){return this.catalog.cleanup()}},e}()
t.Page=f,t.PDFDocument=d},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.FontRendererFactory=void 0
var a=r(0),i=r(53),n=r(33),o=r(16),s=r(3),c=function(){function e(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function t(e,t){return e[t]<<8|e[t+1]}function r(r,i,n){var o,s,c,l=1===t(r,i+2)?e(r,i+8):e(r,i+16),u=t(r,i+l)
if(4===u){t(r,i+l+2)
var h=t(r,i+l+6)>>1
for(s=i+l+14,o=[],c=0;c<h;c++,s+=2)o[c]={end:t(r,s)}
for(s+=2,c=0;c<h;c++,s+=2)o[c].start=t(r,s)
for(c=0;c<h;c++,s+=2)o[c].idDelta=t(r,s)
for(c=0;c<h;c++,s+=2){var f=t(r,s)
if(0!==f){o[c].ids=[]
for(var d=0,g=o[c].end-o[c].start+1;d<g;d++)o[c].ids[d]=t(r,s+f),f+=2}}return o}if(12===u){e(r,i+l+4)
var m=e(r,i+l+12)
for(s=i+l+16,o=[],c=0;c<m;c++)o.push({start:e(r,s),end:e(r,s+4),idDelta:e(r,s+8)-e(r,s)}),s+=12
return o}throw new a.FormatError("unsupported cmap: "+u)}function c(e,t,r,a){var n={},o=new i.CFFParser(new s.Stream(e,t,r-t),n,a),c=o.parse()
return{glyphs:c.charStrings.objects,subrs:c.topDict.privateDict&&c.topDict.privateDict.subrsIndex&&c.topDict.privateDict.subrsIndex.objects,gsubrs:c.globalSubrIndex&&c.globalSubrIndex.objects}}function l(e,t,r){var a,i
r?(a=4,i=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}):(a=2,i=function(e,t){return e[t]<<9|e[t+1]<<1})
for(var n=[],o=i(t,0),s=a;s<t.length;s+=a){var c=i(t,s)
n.push(e.subarray(o,c)),o=c}return n}function u(e,t){for(var r=t.charCodeAt(0),a=0,i=0,n=e.length-1;i<n;){var o=i+n+1>>1
r<e[o].start?n=o-1:i=o}return e[i].start<=r&&r<=e[i].end&&(a=e[i].idDelta+(e[i].ids?e[i].ids[r-e[i].start]:r)&65535),{charCode:r,glyphId:a}}function h(e,t,r){function a(e,r,a,i){t.push({cmd:"quadraticCurveTo",args:[e,r,a,i]})}var i,n=0,o=(e[n]<<24|e[n+1]<<16)>>16,s=0,c=0
if(n+=10,o<0)do{i=e[n]<<8|e[n+1]
var l=e[n+2]<<8|e[n+3]
n+=4
var u,f
1&i?(u=(e[n]<<24|e[n+1]<<16)>>16,f=(e[n+2]<<24|e[n+3]<<16)>>16,n+=4):(u=e[n++],f=e[n++]),2&i?(s=u,c=f):(s=0,c=0)
var d=1,g=1,m=0,p=0
8&i?(d=g=(e[n]<<24|e[n+1]<<16)/1073741824,n+=2):64&i?(d=(e[n]<<24|e[n+1]<<16)/1073741824,g=(e[n+2]<<24|e[n+3]<<16)/1073741824,n+=4):128&i&&(d=(e[n]<<24|e[n+1]<<16)/1073741824,m=(e[n+2]<<24|e[n+3]<<16)/1073741824,p=(e[n+4]<<24|e[n+5]<<16)/1073741824,g=(e[n+6]<<24|e[n+7]<<16)/1073741824,n+=8)
var b=r.glyphs[l]
b&&(t.push({cmd:"save"}),t.push({cmd:"transform",args:[d,m,p,g,s,c]}),h(b,t,r),t.push({cmd:"restore"}))}while(32&i)
else{var v,y,w=[]
for(v=0;v<o;v++)w.push(e[n]<<8|e[n+1]),n+=2
n+=2+(e[n]<<8|e[n+1])
for(var k=w[w.length-1]+1,S=[];S.length<k;){i=e[n++]
var C=1
for(8&i&&(C+=e[n++]);C-- >0;)S.push({flags:i})}for(v=0;v<k;v++){switch(18&S[v].flags){case 0:s+=(e[n]<<24|e[n+1]<<16)>>16,n+=2
break
case 2:s-=e[n++]
break
case 18:s+=e[n++]}S[v].x=s}for(v=0;v<k;v++){switch(36&S[v].flags){case 0:c+=(e[n]<<24|e[n+1]<<16)>>16,n+=2
break
case 4:c-=e[n++]
break
case 36:c+=e[n++]}S[v].y=c}var x=0
for(n=0;n<o;n++){var A=w[n],P=S.slice(x,A+1)
if(1&P[0].flags)P.push(P[0])
else if(1&P[P.length-1].flags)P.unshift(P[P.length-1])
else{var I={flags:1,x:(P[0].x+P[P.length-1].x)/2,y:(P[0].y+P[P.length-1].y)/2}
P.unshift(I),P.push(I)}for(function(e,r){t.push({cmd:"moveTo",args:[e,r]})}(P[0].x,P[0].y),v=1,y=P.length;v<y;v++)1&P[v].flags?function(e,r){t.push({cmd:"lineTo",args:[e,r]})}(P[v].x,P[v].y):1&P[v+1].flags?(a(P[v].x,P[v].y,P[v+1].x,P[v+1].y),v++):a(P[v].x,P[v].y,(P[v].x+P[v+1].x)/2,(P[v].y+P[v+1].y)/2)
x=A+1}}}function f(e,t,r){function i(e,r){t.push({cmd:"moveTo",args:[e,r]})}function n(e,r){t.push({cmd:"lineTo",args:[e,r]})}function s(e,r,a,i,n,o){t.push({cmd:"bezierCurveTo",args:[e,r,a,i,n,o]})}function c(e){for(var m=0;m<e.length;){var p,b,v,y,w,k,S,C,x,A=!1,P=e[m++]
switch(P){case 1:case 3:g+=l.length>>1,A=!0
break
case 4:d+=l.pop(),i(h,d),A=!0
break
case 5:for(;l.length>0;)h+=l.shift(),d+=l.shift(),n(h,d)
break
case 6:for(;l.length>0&&(h+=l.shift(),n(h,d),0!==l.length);)d+=l.shift(),n(h,d)
break
case 7:for(;l.length>0&&(d+=l.shift(),n(h,d),0!==l.length);)h+=l.shift(),n(h,d)
break
case 8:for(;l.length>0;)p=h+l.shift(),v=d+l.shift(),b=p+l.shift(),y=v+l.shift(),h=b+l.shift(),d=y+l.shift(),s(p,v,b,y,h,d)
break
case 10:C=l.pop()+r.subrsBias,x=r.subrs[C],x&&c(x)
break
case 11:return
case 12:switch(P=e[m++]){case 34:p=h+l.shift(),b=p+l.shift(),w=d+l.shift(),h=b+l.shift(),s(p,d,b,w,h,w),p=h+l.shift(),b=p+l.shift(),h=b+l.shift(),s(p,w,b,d,h,d)
break
case 35:p=h+l.shift(),v=d+l.shift(),b=p+l.shift(),y=v+l.shift(),h=b+l.shift(),d=y+l.shift(),s(p,v,b,y,h,d),p=h+l.shift(),v=d+l.shift(),b=p+l.shift(),y=v+l.shift(),h=b+l.shift(),d=y+l.shift(),s(p,v,b,y,h,d),l.pop()
break
case 36:p=h+l.shift(),w=d+l.shift(),b=p+l.shift(),k=w+l.shift(),h=b+l.shift(),s(p,w,b,k,h,k),p=h+l.shift(),b=p+l.shift(),S=k+l.shift(),h=b+l.shift(),s(p,k,b,S,h,d)
break
case 37:var I=h,_=d
p=h+l.shift(),v=d+l.shift(),b=p+l.shift(),y=v+l.shift(),h=b+l.shift(),d=y+l.shift(),s(p,v,b,y,h,d),p=h+l.shift(),v=d+l.shift(),b=p+l.shift(),y=v+l.shift(),h=b,d=y,Math.abs(h-I)>Math.abs(d-_)?h+=l.shift():d+=l.shift(),s(p,v,b,y,h,d)
break
default:throw new a.FormatError("unknown operator: 12 "+P)}break
case 14:if(l.length>=4){var O=l.pop(),T=l.pop()
d=l.pop(),h=l.pop(),t.push({cmd:"save"}),t.push({cmd:"translate",args:[h,d]})
var E=u(r.cmap,String.fromCharCode(r.glyphNameMap[o.StandardEncoding[O]]))
f(r.glyphs[E.glyphId],t,r),t.push({cmd:"restore"}),E=u(r.cmap,String.fromCharCode(r.glyphNameMap[o.StandardEncoding[T]])),f(r.glyphs[E.glyphId],t,r)}return
case 18:g+=l.length>>1,A=!0
break
case 19:case 20:g+=l.length>>1,m+=g+7>>3,A=!0
break
case 21:d+=l.pop(),h+=l.pop(),i(h,d),A=!0
break
case 22:h+=l.pop(),i(h,d),A=!0
break
case 23:g+=l.length>>1,A=!0
break
case 24:for(;l.length>2;)p=h+l.shift(),v=d+l.shift(),b=p+l.shift(),y=v+l.shift(),h=b+l.shift(),d=y+l.shift(),s(p,v,b,y,h,d)
h+=l.shift(),d+=l.shift(),n(h,d)
break
case 25:for(;l.length>6;)h+=l.shift(),d+=l.shift(),n(h,d)
p=h+l.shift(),v=d+l.shift(),b=p+l.shift(),y=v+l.shift(),h=b+l.shift(),d=y+l.shift(),s(p,v,b,y,h,d)
break
case 26:for(l.length%2&&(h+=l.shift());l.length>0;)p=h,v=d+l.shift(),b=p+l.shift(),y=v+l.shift(),h=b,d=y+l.shift(),s(p,v,b,y,h,d)
break
case 27:for(l.length%2&&(d+=l.shift());l.length>0;)p=h+l.shift(),v=d,b=p+l.shift(),y=v+l.shift(),h=b+l.shift(),d=y,s(p,v,b,y,h,d)
break
case 28:l.push((e[m]<<24|e[m+1]<<16)>>16),m+=2
break
case 29:C=l.pop()+r.gsubrsBias,x=r.gsubrs[C],x&&c(x)
break
case 30:for(;l.length>0&&(p=h,v=d+l.shift(),b=p+l.shift(),y=v+l.shift(),h=b+l.shift(),d=y+(1===l.length?l.shift():0),s(p,v,b,y,h,d),0!==l.length);)p=h+l.shift(),v=d,b=p+l.shift(),y=v+l.shift(),d=y+l.shift(),h=b+(1===l.length?l.shift():0),s(p,v,b,y,h,d)
break
case 31:for(;l.length>0&&(p=h+l.shift(),v=d,b=p+l.shift(),y=v+l.shift(),d=y+l.shift(),h=b+(1===l.length?l.shift():0),s(p,v,b,y,h,d),0!==l.length);)p=h,v=d+l.shift(),b=p+l.shift(),y=v+l.shift(),h=b+l.shift(),d=y+(1===l.length?l.shift():0),s(p,v,b,y,h,d)
break
default:if(P<32)throw new a.FormatError("unknown operator: "+P)
P<247?l.push(P-139):P<251?l.push(256*(P-247)+e[m++]+108):P<255?l.push(256*-(P-251)-e[m++]-108):(l.push((e[m]<<24|e[m+1]<<16|e[m+2]<<8|e[m+3])/65536),m+=4)}A&&(l.length=0)}}var l=[],h=0,d=0,g=0
c(e)}function d(e){this.compiledGlyphs=Object.create(null),this.compiledCharCodeToGlyphId=Object.create(null),this.fontMatrix=e}function g(e,t,r){r=r||[488e-6,0,0,488e-6,0,0],d.call(this,r),this.glyphs=e,this.cmap=t}function m(e,t,r,a){r=r||[.001,0,0,.001,0,0],d.call(this,r),this.glyphs=e.glyphs,this.gsubrs=e.gsubrs||[],this.subrs=e.subrs||[],this.cmap=t,this.glyphNameMap=a||(0,n.getGlyphsUnicode)(),this.gsubrsBias=this.gsubrs.length<1240?107:this.gsubrs.length<33900?1131:32768,this.subrsBias=this.subrs.length<1240?107:this.subrs.length<33900?1131:32768}return d.prototype={getPathJs:function(e){var t=u(this.cmap,e),r=this.compiledGlyphs[t.glyphId]
return r||(r=this.compileGlyph(this.glyphs[t.glyphId]),this.compiledGlyphs[t.glyphId]=r),void 0===this.compiledCharCodeToGlyphId[t.charCode]&&(this.compiledCharCodeToGlyphId[t.charCode]=t.glyphId),r},compileGlyph:function(e){if(!e||0===e.length||14===e[0])return""
var t=[]
return t.push({cmd:"save"}),t.push({cmd:"transform",args:this.fontMatrix.slice()}),t.push({cmd:"scale",args:["size","-size"]}),this.compileGlyphImpl(e,t),t.push({cmd:"restore"}),t},compileGlyphImpl:function(){throw new Error("Children classes should implement this.")},hasBuiltPath:function(e){var t=u(this.cmap,e)
return void 0!==this.compiledGlyphs[t.glyphId]&&void 0!==this.compiledCharCodeToGlyphId[t.charCode]}},a.Util.inherit(g,d,{compileGlyphImpl:function(e,t){h(e,t,this)}}),a.Util.inherit(m,d,{compileGlyphImpl:function(e,t){f(e,t,this)}}),{create:function(i,n){for(var o,s,u,h,f,d,p=new Uint8Array(i.data),b=t(p,4),v=0,y=12;v<b;v++,y+=16){var w=(0,a.bytesToString)(p.subarray(y,y+4)),k=e(p,y+8),S=e(p,y+12)
switch(w){case"cmap":o=r(p,k,k+S)
break
case"glyf":s=p.subarray(k,k+S)
break
case"loca":u=p.subarray(k,k+S)
break
case"head":d=t(p,k+18),f=t(p,k+50)
break
case"CFF ":h=c(p,k,k+S,n)}}if(s){var C=d?[1/d,0,0,1/d,0,0]:i.fontMatrix
return new g(l(s,u,f),o,C)}return new m(h,o,i.fontMatrix,i.glyphNameMap)}}}()
t.FontRendererFactory=c},function(e,t,r){"use strict"
function a(e){if(e.fontMatrix&&e.fontMatrix[0]!==c.FONT_IDENTITY_MATRIX[0]){var t=.001/e.fontMatrix[0],r=e.widths
for(var a in r)r[a]*=t
e.defaultWidth*=t}}function i(e,t){if(!e.hasIncludedToUnicodeMap&&!(e.hasEncoding||t===e.defaultEncoding||e.toUnicode instanceof P)){var r=[],a=(0,u.getGlyphsUnicode)()
for(var i in t){var n=t[i],o=(0,d.getUnicodeForGlyph)(n,a);-1!==o&&(r[i]=String.fromCharCode(o))}e.toUnicode.amend(r)}}function n(e,t){switch(e){case"Type1":return"Type1C"===t?c.FontType.TYPE1C:c.FontType.TYPE1
case"CIDFontType0":return"CIDFontType0C"===t?c.FontType.CIDFONTTYPE0C:c.FontType.CIDFONTTYPE0
case"OpenType":return c.FontType.OPENTYPE
case"TrueType":return c.FontType.TRUETYPE
case"CIDFontType2":return c.FontType.CIDFONTTYPE2
case"MMType1":return c.FontType.MMTYPE1
case"Type0":return c.FontType.TYPE0
default:return c.FontType.UNKNOWN}}function o(e,t){if(void 0!==t[e])return e
var r=(0,d.getUnicodeForGlyph)(e,t)
if(-1!==r)for(var a in t)if(t[a]===r)return a
return(0,c.info)("Unable to recover a standard glyph name for: "+e),e}function s(e,t,r){var a,i,n,s=Object.create(null),c=!!(e.flags&S.Symbolic)
if(e.baseEncodingName)for(n=(0,h.getEncoding)(e.baseEncodingName),i=0;i<n.length;i++)a=r.indexOf(n[i]),s[i]=a>=0?a:0
else if(c)for(i in t)s[i]=t[i]
else for(n=h.StandardEncoding,i=0;i<n.length;i++)a=r.indexOf(n[i]),s[i]=a>=0?a:0
var l,f=e.differences
if(f)for(i in f){var d=f[i]
if(-1===(a=r.indexOf(d))){l||(l=(0,u.getGlyphsUnicode)())
var g=o(d,l)
g!==d&&(a=r.indexOf(g))}s[i]=a>=0?a:0}return s}Object.defineProperty(t,"__esModule",{value:!0}),t.getFontType=t.ProblematicCharRanges=t.IdentityToUnicodeMap=t.ToUnicodeMap=t.FontFlags=t.Font=t.ErrorFont=t.PRIVATE_USE_OFFSET_END=t.PRIVATE_USE_OFFSET_START=t.SEAC_ANALYSIS_ENABLED=void 0
var c=r(0),l=r(53),u=r(33),h=r(16),f=r(59),d=r(60),g=r(92),m=r(3),p=r(102),b=57344,v=63743,y=!1,w=1e3,k=!1,S={FixedPitch:1,Serif:2,Symbolic:4,Script:8,Nonsymbolic:32,Italic:64,AllCap:65536,SmallCap:131072,ForceBold:262144},C=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"],x=function(){function e(e,t,r,a,i,n,o,s){this.fontChar=e,this.unicode=t,this.accent=r,this.width=a,this.vmetric=i,this.operatorListId=n,this.isSpace=o,this.isInFont=s}return e.prototype.matchesForCache=function(e,t,r,a,i,n,o,s){return this.fontChar===e&&this.unicode===t&&this.accent===r&&this.width===a&&this.vmetric===i&&this.operatorListId===n&&this.isSpace===o&&this.isInFont===s},e}(),A=function(){function e(e){this._map=e}return e.prototype={get length(){return this._map.length},forEach:function(e){for(var t in this._map)e(t,this._map[t].charCodeAt(0))},has:function(e){return void 0!==this._map[e]},get:function(e){return this._map[e]},charCodeOf:function(e){var t=this._map
if(t.length<=65536)return t.indexOf(e)
for(var r in t)if(t[r]===e)return 0|r
return-1},amend:function(e){for(var t in e)this._map[t]=e[t]}},e}(),P=function(){function e(e,t){this.firstChar=e,this.lastChar=t}return e.prototype={get length(){return this.lastChar+1-this.firstChar},forEach:function(e){for(var t=this.firstChar,r=this.lastChar;t<=r;t++)e(t,t)},has:function(e){return this.firstChar<=e&&e<=this.lastChar},get:function(e){if(this.firstChar<=e&&e<=this.lastChar)return String.fromCharCode(e)},charCodeOf:function(e){return(0,c.isInt)(e)&&e>=this.firstChar&&e<=this.lastChar?e:-1},amend:function(e){throw new Error("Should not call amend()")}},e}(),I=function(){function e(e,t,r){e[t]=r>>8&255,e[t+1]=255&r}function t(e,t,r){e[t]=r>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r}function r(e,t,r){var a,i
if(r instanceof Uint8Array)e.set(r,t)
else if("string"==typeof r)for(a=0,i=r.length;a<i;a++)e[t++]=255&r.charCodeAt(a)
else for(a=0,i=r.length;a<i;a++)e[t++]=255&r[a]}function a(e){this.sfnt=e,this.tables=Object.create(null)}a.getSearchParams=function(e,t){for(var r=1,a=0;(r^e)>r;)r<<=1,a++
var i=r*t
return{range:i,entry:a,rangeShift:t*e-i}}
return a.prototype={toArray:function(){var i=this.sfnt,n=this.tables,o=Object.keys(n)
o.sort()
var s,l,u,h,f,d=o.length,g=12+16*d,m=[g]
for(s=0;s<d;s++){h=n[o[s]]
g+=(h.length+3&-4)>>>0,m.push(g)}var p=new Uint8Array(g)
for(s=0;s<d;s++)h=n[o[s]],r(p,m[s],h)
"true"===i&&(i=(0,c.string32)(65536)),p[0]=255&i.charCodeAt(0),p[1]=255&i.charCodeAt(1),p[2]=255&i.charCodeAt(2),p[3]=255&i.charCodeAt(3),e(p,4,d)
var b=a.getSearchParams(d,16)
for(e(p,6,b.range),e(p,8,b.entry),e(p,10,b.rangeShift),g=12,s=0;s<d;s++){f=o[s],p[g]=255&f.charCodeAt(0),p[g+1]=255&f.charCodeAt(1),p[g+2]=255&f.charCodeAt(2),p[g+3]=255&f.charCodeAt(3)
var v=0
for(l=m[s],u=m[s+1];l<u;l+=4){v=v+(0,c.readUint32)(p,l)>>>0}t(p,g+4,v),t(p,g+8,m[s]),t(p,g+12,n[f].length),g+=16}return p},addTable:function(e,t){if(e in this.tables)throw new Error("Table "+e+" already exists")
this.tables[e]=t}},a}(),_=new Int32Array([0,32,127,161,173,174,1536,1920,2208,4256,6016,6144,7168,7248,8192,8208,8209,8210,8232,8240,8287,8304,9676,9677,12288,12289,12644,12645,43616,43648,65520,65536]),O=function(){function e(e,t,r){var i
this.name=e,this.loadedName=r.loadedName,this.isType3Font=r.isType3Font,this.sizes=[],this.missingFile=!1,this.glyphCache=Object.create(null),this.isSerifFont=!!(r.flags&S.Serif),this.isSymbolicFont=!!(r.flags&S.Symbolic),this.isMonospace=!!(r.flags&S.FixedPitch)
var o=r.type,s=r.subtype
if(this.type=o,this.subtype=s,this.fallbackName=this.isMonospace?"monospace":this.isSerifFont?"serif":"sans-serif",this.differences=r.differences,this.widths=r.widths,this.defaultWidth=r.defaultWidth,this.composite=r.composite,this.wideChars=r.wideChars,this.cMap=r.cMap,this.ascent=r.ascent/w,this.descent=r.descent/w,this.fontMatrix=r.fontMatrix,this.bbox=r.bbox,this.defaultEncoding=r.defaultEncoding,this.toUnicode=r.toUnicode,this.toFontChar=[],"Type3"===r.type){for(i=0;i<256;i++)this.toFontChar[i]=this.differences[i]||r.defaultEncoding[i]
return void(this.fontType=c.FontType.TYPE3)}if(this.cidEncoding=r.cidEncoding,this.vertical=r.vertical,this.vertical&&(this.vmetrics=r.vmetrics,this.defaultVMetrics=r.defaultVMetrics),!t||t.isEmpty)return t&&(0,c.warn)('Font file is empty in "'+e+'" ('+this.loadedName+")"),void this.fallbackToSystemFont()
"Type1C"===s&&("Type1"!==o&&"MMType1"!==o?T(t)?s="TrueType":o="Type1":F(t)&&(s="OpenType")),"CIDFontType0C"===s&&"CIDFontType0"!==o&&(o="CIDFontType0"),"CIDFontType0"===o&&(s=B(t)?"CIDFontType0":F(t)?"OpenType":"CIDFontType0C"),"OpenType"===s&&"OpenType"!==o&&(o="OpenType")
try{var l
switch(o){case"MMType1":(0,c.info)("MMType1 font ("+e+"), falling back to Type1.")
case"Type1":case"CIDFontType0":this.mimetype="font/opentype"
var u="Type1C"===s||"CIDFontType0C"===s?new R(t,r):new E(e,t,r)
a(r),l=this.convert(e,u,r)
break
case"OpenType":case"TrueType":case"CIDFontType2":this.mimetype="font/opentype",l=this.checkAndRepair(e,t,r),this.isOpenType&&(a(r),o="OpenType")
break
default:throw new c.FormatError("Font "+o+" is not supported")}}catch(e){if(!(e instanceof c.FormatError))throw e
return(0,c.warn)(e),void this.fallbackToSystemFont()}this.data=l,this.fontType=n(o,s),this.fontMatrix=r.fontMatrix,this.widths=r.widths,this.defaultWidth=r.defaultWidth,this.toUnicode=r.toUnicode,this.encoding=r.baseEncoding,this.seacMap=r.seacMap,this.loading=!0}function t(e,t){return(e<<8)+t}function r(e,t){var r=(e<<8)+t
return 32768&r?r-65536:r}function s(e,t,r,a){return(e<<24)+(t<<16)+(r<<8)+a}function p(e){return String.fromCharCode(e>>8&255,255&e)}function O(e){return e=e>32767?32767:e<-32768?-32768:e,String.fromCharCode(e>>8&255,255&e)}function T(e){var t=e.peekBytes(4)
return 65536===(0,c.readUint32)(t,0)}function F(e){var t=e.peekBytes(4)
return"OTTO"===(0,c.bytesToString)(t)}function B(e){var t=e.peekBytes(2)
return 37===t[0]&&33===t[1]||128===t[0]&&1===t[1]}function M(e,t,r){for(var a,i=[],n=0,o=e.length;n<o;n++)-1!==(a=(0,d.getUnicodeForGlyph)(e[n],t))&&(i[n]=a)
for(var s in r)-1!==(a=(0,d.getUnicodeForGlyph)(r[s],t))&&(i[+s]=a)
return i}function D(e){for(var t=0,r=_.length-1;t<r;){var a=t+r+1>>1
e<_[a]?r=a-1:t=a}return!(1&t)}function L(e,t,r){var a=t.toUnicode,i=!!(t.flags&S.Symbolic),n=t.toUnicode instanceof P,o=Object.create(null),s=[],l=[],u=b
for(var h in e){h|=0
var f=e[h]
if(!r[f]){var d=h,g=!1
if(!n&&a.has(h)){g=!0
var m=a.get(d)
1===m.length&&(d=m.charCodeAt(0))}if(void 0!==l[d]||D(d)||i&&!g)do{if(u>v){(0,c.warn)("Ran out of space in font private use area.")
break}d=u++,y&&61440===d&&(d=61472,u=d+1)}while(void 0!==l[d])
o[d]=f,s[h]=d,l[d]=!0}}return{toFontChar:s,charCodeToGlyphId:o,nextAvailableFontCharCode:u}}function N(e,t){var r=[]
for(var a in e)e[a]>=t||r.push({fontCharCode:0|a,glyphId:e[a]})
0===r.length&&r.push({fontCharCode:0,glyphId:0}),r.sort(function(e,t){return e.fontCharCode-t.fontCharCode})
for(var i=[],n=r.length,o=0;o<n;){var s=r[o].fontCharCode,c=[r[o].glyphId];++o
for(var l=s;o<n&&l+1===r[o].fontCharCode&&(c.push(r[o].glyphId),++l,++o,65535!==l););i.push([s,l,c])}return i}function U(e,t){var r,a,i,n,o=N(e,t),s=o[o.length-1][1]>65535?2:1,l="\0\0"+p(s)+"\0\0"+(0,c.string32)(4+8*s)
for(r=o.length-1;r>=0&&!(o[r][0]<=65535);--r);var u=r+1
o[r][0]<65535&&65535===o[r][1]&&(o[r][1]=65534)
var h,f,d,g,m=o[r][1]<65535?1:0,b=u+m,v=I.getSearchParams(b,2),y="",w="",k="",S="",C="",x=0
for(r=0,a=u;r<a;r++){h=o[r],f=h[0],d=h[1],y+=p(f),w+=p(d),g=h[2]
var A=!0
for(i=1,n=g.length;i<n;++i)if(g[i]!==g[i-1]+1){A=!1
break}if(A){k+=p(g[0]-f&65535),S+=p(0)}else{var P=2*(b-r)+2*x
for(x+=d-f+1,k+=p(0),S+=p(P),i=0,n=g.length;i<n;++i)C+=p(g[i])}}m>0&&(w+="ÿÿ",y+="ÿÿ",k+="\0",S+="\0\0")
var _="\0\0"+p(2*b)+p(v.range)+p(v.entry)+p(v.rangeShift)+w+"\0\0"+y+k+S+C,O="",T=""
if(s>1){for(l+="\0\0\n"+(0,c.string32)(4+8*s+4+_.length),O="",r=0,a=o.length;r<a;r++){h=o[r],f=h[0],g=h[2]
var E=g[0]
for(i=1,n=g.length;i<n;++i)g[i]!==g[i-1]+1&&(d=h[0]+i-1,O+=(0,c.string32)(f)+(0,c.string32)(d)+(0,c.string32)(E),f=d+1,E=g[i])
O+=(0,c.string32)(f)+(0,c.string32)(h[1])+(0,c.string32)(E)}T="\0\f\0\0"+(0,c.string32)(O.length+16)+"\0\0\0\0"+(0,c.string32)(O.length/12)}return l+"\0"+p(_.length+4)+_+T+O}function j(e){var t=new m.Stream(e.data),r=t.getUint16()
t.getBytes(60)
var a=t.getUint16()
return!(r<4&&768&a)&&(!(t.getUint16()>t.getUint16())&&(t.getBytes(6),0!==t.getUint16()&&(e.data[8]=e.data[9]=0,!0)))}function q(e,t,r){r=r||{unitsPerEm:0,yMax:0,yMin:0,ascent:0,descent:0}
var a=0,i=0,n=0,o=0,s=null,l=0
if(t)for(var u in t){u|=0,(s>u||!s)&&(s=u),l<u&&(l=u)
var h=(0,d.getUnicodeRangeFor)(u)
if(h<32)a|=1<<h
else if(h<64)i|=1<<h-32
else if(h<96)n|=1<<h-64
else{if(!(h<123))throw new c.FormatError("Unicode ranges Bits > 123 are reserved for internal usage")
o|=1<<h-96}}else s=0,l=255
var f=e.bbox||[0,0,0,0],g=r.unitsPerEm||1/(e.fontMatrix||c.FONT_IDENTITY_MATRIX)[0],m=e.ascentScaled?1:g/w,b=r.ascent||Math.round(m*(e.ascent||f[3])),v=r.descent||Math.round(m*(e.descent||f[1]))
v>0&&e.descent>0&&f[1]<0&&(v=-v)
var y=r.yMax||b,k=-r.yMin||-v
return"\0$ô\0\0\0»\0\0\0»\0\0ß\x001\0\0\0\0"+String.fromCharCode(e.fixedPitch?9:0)+"\0\0\0\0\0\0"+(0,c.string32)(a)+(0,c.string32)(i)+(0,c.string32)(n)+(0,c.string32)(o)+"*21*"+p(e.italicAngle?1:0)+p(s||e.firstChar)+p(l||e.lastChar)+p(b)+p(v)+"\0d"+p(y)+p(k)+"\0\0\0\0\0\0\0\0"+p(e.xHeight)+p(e.capHeight)+p(0)+p(s||e.firstChar)+"\0"}function z(e){var t=Math.floor(e.italicAngle*Math.pow(2,16))
return"\0\0\0"+(0,c.string32)(t)+"\0\0\0\0"+(0,c.string32)(e.fixedPitch)+"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"}function H(e,t){t||(t=[[],[]])
var r,a,i,n,o,s=[t[0][0]||"Original licence",t[0][1]||e,t[0][2]||"Unknown",t[0][3]||"uniqueID",t[0][4]||e,t[0][5]||"Version 0.11",t[0][6]||"",t[0][7]||"Unknown",t[0][8]||"Unknown",t[0][9]||"Unknown"],c=[]
for(r=0,a=s.length;r<a;r++){o=t[1][r]||s[r]
var l=[]
for(i=0,n=o.length;i<n;i++)l.push(p(o.charCodeAt(i)))
c.push(l.join(""))}var u=[s,c],h=["\0","\0"],f=["\0\0","\0"],d=["\0\0","\t"],g=s.length*h.length,m="\0\0"+p(g)+p(12*g+6),b=0
for(r=0,a=h.length;r<a;r++){var v=u[r]
for(i=0,n=v.length;i<n;i++){o=v[i]
m+=h[r]+f[r]+d[r]+p(i)+p(o.length)+p(b),b+=o.length}}return m+=s.join("")+c.join("")}return e.getFontID=function(){var e=1
return function(){return String(e++)}}(),e.prototype={name:null,font:null,mimetype:null,encoding:null,get renderer(){var e=g.FontRendererFactory.create(this,k)
return(0,c.shadow)(this,"renderer",e)},exportData:function(){var e={}
for(var t in this)this.hasOwnProperty(t)&&(e[t]=this[t])
return e},fallbackToSystemFont:function(){var e=this
this.missingFile=!0
var t,r,a=this.name,i=this.type,o=this.subtype,s=a.replace(/[,_]/g,"-"),l=(0,f.getStdFontMap)(),g=(0,f.getNonStdFontMap)(),m=!!l[s]||!(!g[s]||!l[g[s]])
if(s=l[s]||g[s]||s,this.bold=-1!==s.search(/bold/gi),this.italic=-1!==s.search(/oblique/gi)||-1!==s.search(/italic/gi),this.black=-1!==a.search(/Black/g),this.remeasure=Object.keys(this.widths).length>0,m&&"CIDFontType2"===i&&0===this.cidEncoding.indexOf("Identity-")){var p=(0,f.getGlyphMapForStandardFonts)(),b=[]
for(t in p)b[+t]=p[t]
if(/Arial-?Black/i.test(a)){var v=(0,f.getSupplementalGlyphMapForArialBlack)()
for(t in v)b[+t]=v[t]}this.toUnicode instanceof P||this.toUnicode.forEach(function(e,t){b[+e]=t}),this.toFontChar=b,this.toUnicode=new A(b)}else if(/Symbol/i.test(s))this.toFontChar=M(h.SymbolSetEncoding,(0,u.getGlyphsUnicode)(),this.differences)
else if(/Dingbats/i.test(s))/Wingdings/i.test(a)&&(0,c.warn)("Non-embedded Wingdings font, falling back to ZapfDingbats."),this.toFontChar=M(h.ZapfDingbatsEncoding,(0,u.getDingbatsGlyphsUnicode)(),this.differences)
else if(m)this.toFontChar=M(this.defaultEncoding,(0,u.getGlyphsUnicode)(),this.differences)
else{var y=(0,u.getGlyphsUnicode)()
this.toUnicode.forEach(function(t,a){if(!e.composite){var i=e.differences[t]||e.defaultEncoding[t]
r=(0,d.getUnicodeForGlyph)(i,y),-1!==r&&(a=r)}e.toFontChar[t]=a})}this.loadedName=s.split("-")[0],this.loading=!1,this.fontType=n(i,o)},checkAndRepair:function(e,i,n){function f(e,t,r,a,i,n){if(r-t<=12)return 0
var o=e.subarray(t,r),s=o[0]<<8|o[1]
if(32768&s)return a.set(o,i),o.length
var c,l=10,u=0
for(c=0;c<s;c++){u=(o[l]<<8|o[l+1])+1,l+=2}var h=l,f=o[l]<<8|o[l+1]
l+=2+f
var d=l,g=0
for(c=0;c<u;c++){var m=o[l++]
192&m&&(o[l-1]=63&m)
var p=(2&m?1:16&m?0:2)+(4&m?1:32&m?0:2)
if(g+=p,8&m){var b=o[l++]
c+=b,g+=b*p}}if(0===g)return 0
var v=l+g
return v>o.length?0:!n&&f>0?(a.set(o.subarray(0,h),i),a.set([0,0],i+h),a.set(o.subarray(d,v),i+h+2),v-=f,o.length-v>3&&(v=v+3&-4),v):o.length-v>3?(v=v+3&-4,a.set(o.subarray(0,v),i),v):(a.set(o,i),o.length)}function d(e,t){for(var r,a,i,n,o,s=e.data,l=0,u=0,h=0,f=[],d=[],g=[],m=t.tooComplexToFollowFunctions,b=!1,y=0,w=0,k=s.length;l<k;){var S=s[l++]
if(64===S)if(a=s[l++],b||w)l+=a
else for(r=0;r<a;r++)f.push(s[l++])
else if(65===S)if(a=s[l++],b||w)l+=2*a
else for(r=0;r<a;r++)i=s[l++],f.push(i<<8|s[l++])
else if(176==(248&S))if(a=S-176+1,b||w)l+=a
else for(r=0;r<a;r++)f.push(s[l++])
else if(184==(248&S))if(a=S-184+1,b||w)l+=2*a
else for(r=0;r<a;r++)i=s[l++],f.push(i<<8|s[l++])
else if(43!==S||m)if(44!==S||m){if(45===S)if(b)b=!1,u=l
else{if(!(o=d.pop()))return(0,c.warn)("TT: ENDF bad stack"),void(t.hintsValid=!1)
n=g.pop(),s=o.data,l=o.i,t.functionsStackDeltas[n]=f.length-o.stackTop}else if(137===S)(b||w)&&((0,c.warn)("TT: nested IDEFs not allowed"),m=!0),b=!0,h=l
else if(88===S)++y
else if(27===S)w=y
else if(89===S)w===y&&(w=0),--y
else if(28===S&&!b&&!w){var C=f[f.length-1]
C>0&&(l+=C-1)}}else(b||w)&&((0,c.warn)("TT: nested FDEFs not allowed"),m=!0),b=!0,h=l,n=f.pop(),t.functionsDefined[n]={data:s,i:l}
else if(!b&&!w)if(n=f[f.length-1],t.functionsUsed[n]=!0,n in t.functionsStackDeltas)f.length+=t.functionsStackDeltas[n]
else if(n in t.functionsDefined&&g.indexOf(n)<0){if(d.push({data:s,i:l,stackTop:f.length-1}),g.push(n),!(o=t.functionsDefined[n]))return(0,c.warn)("TT: CALL non-existent function"),void(t.hintsValid=!1)
s=o.data,l=o.i}if(!b&&!w){var x=S<=142?v[S]:S>=192&&S<=223?-1:S>=224?-2:0
for(S>=113&&S<=117&&(a=f.pop(),isNaN(a)||(x=2*-a));x<0&&f.length>0;)f.pop(),x++
for(;x>0;)f.push(NaN),x--}}t.tooComplexToFollowFunctions=m
var A=[s]
l>s.length&&A.push(new Uint8Array(l-s.length)),h>u&&((0,c.warn)("TT: complementing a missing function tail"),A.push(new Uint8Array([34,45]))),p(e,A)}function g(e,t){if(!e.tooComplexToFollowFunctions){if(e.functionsDefined.length>t)return(0,c.warn)("TT: more functions defined than expected"),void(e.hintsValid=!1)
for(var r=0,a=e.functionsUsed.length;r<a;r++){if(r>t)return(0,c.warn)("TT: invalid function id: "+r),void(e.hintsValid=!1)
if(e.functionsUsed[r]&&!e.functionsDefined[r])return(0,c.warn)("TT: undefined function: "+r),void(e.hintsValid=!1)}}}function p(e,t){if(t.length>1){var r,a,i=0
for(r=0,a=t.length;r<a;r++)i+=t[r].length
i=i+3&-4
var n=new Uint8Array(i),o=0
for(r=0,a=t.length;r<a;r++)n.set(t[r],o),o+=t[r].length
e.data=n,e.length=i}}function b(e){return!N[e]}var v=[0,0,0,0,0,0,0,0,-2,-2,-2,-2,0,0,-2,-5,-1,-1,-1,-1,-1,-1,-1,-1,0,0,-1,0,-1,-1,-1,-1,1,-1,-999,0,1,0,-1,-2,0,-1,-2,-1,-1,0,-1,-1,0,0,-999,-999,-1,-1,-1,-1,-2,-999,-2,-2,-999,0,-2,-2,0,0,-2,0,-2,0,0,0,-2,-1,-1,1,1,0,0,-1,-1,-1,-1,-1,-1,-1,0,0,-1,0,-1,-1,0,-999,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,-2,-999,-999,-999,-999,-999,-1,-1,-2,-2,0,0,0,0,-1,-1,-999,-2,-2,0,0,-1,-2,-2,0,0,0,-1,-1,-1,-2]
i=new m.Stream(new Uint8Array(i.getBytes()))
var y,w,S=["OS/2","cmap","head","hhea","hmtx","maxp","name","post","loca","glyf","fpgm","prep","cvt ","CFF "],x=function(e){return{version:(0,c.bytesToString)(e.getBytes(4)),numTables:e.getUint16(),searchRange:e.getUint16(),entrySelector:e.getUint16(),rangeShift:e.getUint16()}}(i),A=x.numTables,P=Object.create(null)
P["OS/2"]=null,P.cmap=null,P.head=null,P.hhea=null,P.hmtx=null,P.maxp=null,P.name=null,P.post=null
for(var _,O=0;O<A;O++)_=function(e){var t=(0,c.bytesToString)(e.getBytes(4)),r=e.getInt32()>>>0,a=e.getInt32()>>>0,i=e.getInt32()>>>0,n=e.pos
e.pos=e.start?e.start:0,e.skip(a)
var o=e.getBytes(i)
return e.pos=n,"head"===t&&(o[8]=o[9]=o[10]=o[11]=0,o[17]|=32),{tag:t,checksum:r,length:i,offset:a,data:o}}(i),S.indexOf(_.tag)<0||0!==_.length&&(P[_.tag]=_)
var T=!P["CFF "]
if(T){if(!P.loca)throw new c.FormatError('Required "loca" table is not found')
P.glyf||((0,c.warn)('Required "glyf" table is not found -- trying to recover.'),P.glyf={tag:"glyf",data:new Uint8Array(0)}),this.isOpenType=!1}else{if(!(("OTTO"!==x.version||n.composite&&n.cidToGidMap)&&P.head&&P.hhea&&P.maxp&&P.post))return w=new m.Stream(P["CFF "].data),y=new R(w,n),a(n),this.convert(e,y,n)
delete P.glyf,delete P.loca,delete P.fpgm,delete P.prep,delete P["cvt "],this.isOpenType=!0}if(!P.maxp)throw new c.FormatError('Required "maxp" table is not found')
i.pos=(i.start||0)+P.maxp.offset
var E=i.getInt32(),F=i.getUint16(),B=0
if(E>=65536&&P.maxp.length>=22){i.pos+=8
i.getUint16()>2&&(P.maxp.data[14]=0,P.maxp.data[15]=2),i.pos+=4,B=i.getUint16()}var M=!1
"CIDFontType2"===n.type&&n.toUnicode&&n.toUnicode.get(0)>"\0"&&(M=!0,F++,P.maxp.data[4]=F>>8,P.maxp.data[5]=255&F)
var D=function(e,t,r,a){var i={functionsDefined:[],functionsUsed:[],functionsStackDeltas:[],tooComplexToFollowFunctions:!1,hintsValid:!0}
if(e&&d(e,i),t&&d(t,i),e&&g(i,a),r&&1&r.length){var n=new Uint8Array(r.length+1)
n.set(r.data),r.data=n}return i.hintsValid}(P.fpgm,P.prep,P["cvt "],B)
if(D||(delete P.fpgm,delete P.prep,delete P["cvt "]),function(e,t,r,a){if(!t)return void(r&&(r.data=null))
e.pos=(e.start?e.start:0)+t.offset,e.pos+=t.length-2
var i=e.getUint16()
i>a&&((0,c.info)("The numOfMetrics ("+i+") should not be greater than the numGlyphs ("+a+")"),i=a,t.data[34]=(65280&i)>>8,t.data[35]=255&i)
var n=a-i,o=n-(r.length-4*i>>1)
if(o>0){var s=new Uint8Array(r.length+2*o)
s.set(r.data),r.data=s}}(i,P.hhea,P.hmtx,F),!P.head)throw new c.FormatError('Required "head" table is not found')
!function(e,r,a){var i=e.data,n=s(i[0],i[1],i[2],i[3])
n>>16!=1&&((0,c.info)("Attempting to fix invalid version in head table: "+n),i[0]=0,i[1]=1,i[2]=0,i[3]=0)
var o=t(i[50],i[51])
if(o<0||o>1){(0,c.info)("Attempting to fix invalid indexToLocFormat in head table: "+o)
var l=r+1
if(a===l<<1)i[50]=0,i[51]=0
else{if(a!==l<<2)throw new c.FormatError("Could not fix indexToLocFormat: "+o)
i[50]=0,i[51]=1}}}(P.head,F,T?P.loca.length:0)
var N=Object.create(null)
if(T){var W=t(P.head.data[50],P.head.data[51])
N=function(e,t,r,a,i,n){var o,s,c
a?(o=4,s=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]},c=function(e,t,r){e[t]=r>>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r}):(o=2,s=function(e,t){return e[t]<<9|e[t+1]<<1},c=function(e,t,r){e[t]=r>>9&255,e[t+1]=r>>1&255})
var l=e.data,u=o*(1+r)
l.length!==u&&(l=new Uint8Array(u),l.set(e.data.subarray(0,u)),e.data=l)
var h=t.data,d=h.length,g=new Uint8Array(d),m=s(l,0),p=0,b=Object.create(null)
c(l,0,p)
var v,y,w=n?r-1:r
for(v=0,y=o;v<w;v++,y+=o){var k=s(l,y)
k>d&&(d+3&-4)===k&&(k=d),k>d&&(m=k)
var S=f(h,m,k,g,p,i)
0===S&&(b[v]=!0),p+=S,c(l,y,p),m=k}if(0===p){var C=new Uint8Array([0,1,0,0,0,0,0,0,0,0,0,0,0,0,49,0])
for(v=0,y=o;v<r;v++,y+=o)c(l,y,C.length)
return t.data=C,b}if(n){var x=s(l,o)
g.length>x+p?t.data=g.subarray(0,x+p):(t.data=new Uint8Array(x+p),t.data.set(g.subarray(0,p))),t.data.set(g.subarray(0,x),p),c(e.data,l.length-o,p+x)}else t.data=g.subarray(0,p)
return b}(P.loca,P.glyf,F,W,D,M)}if(!P.hhea)throw new c.FormatError('Required "hhea" table is not found')
0===P.hhea.data[10]&&0===P.hhea.data[11]&&(P.hhea.data[10]=255,P.hhea.data[11]=255)
var G={unitsPerEm:t(P.head.data[18],P.head.data[19]),yMax:t(P.head.data[42],P.head.data[43]),yMin:r(P.head.data[38],P.head.data[39]),ascent:t(P.hhea.data[4],P.hhea.data[5]),descent:r(P.hhea.data[6],P.hhea.data[7])}
if(this.ascent=G.ascent/G.unitsPerEm,this.descent=G.descent/G.unitsPerEm,P.post){(function(e,t,r){var a=(i.start?i.start:0)+e.offset
i.pos=a
var n=e.length,o=a+n,s=i.getInt32()
i.getBytes(28)
var l,u,h=!0
switch(s){case 65536:l=C
break
case 131072:var f=i.getUint16()
if(f!==r){h=!1
break}var d=[]
for(u=0;u<f;++u){var g=i.getUint16()
if(g>=32768){h=!1
break}d.push(g)}if(!h)break
for(var m=[],p=[];i.pos<o;){var b=i.getByte()
for(p.length=b,u=0;u<b;++u)p[u]=String.fromCharCode(i.getByte())
m.push(p.join(""))}for(l=[],u=0;u<f;++u){var v=d[u]
v<258?l.push(C[v]):l.push(m[v-258])}break
case 196608:break
default:(0,c.warn)("Unknown/unsupported post table version "+s),h=!1,t.defaultEncoding&&(l=t.defaultEncoding)}return t.glyphNames=l,h})(P.post,n,F)||(P.post=null)}var X,V=[]
if(n.composite){var Y=n.cidToGidMap||[],K=0===Y.length
n.cMap.forEach(function(e,t){if(t>65535)throw new c.FormatError("Max size of CID is 65,535")
var r=-1
K?r=t:void 0!==Y[t]&&(r=Y[t]),r>=0&&r<F&&b(r)&&(V[e]=r)}),!M||!K&&V[0]||(V[0]=F-1)}else{var J=function(e,t,r,a){if(!e)return(0,c.warn)("No cmap table available."),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
var i,n=(t.start?t.start:0)+e.offset
t.pos=n,t.getUint16()
for(var o,s=t.getUint16(),l=!1,u=0;u<s;u++){var h=t.getUint16(),f=t.getUint16(),d=t.getInt32()>>>0,g=!1
if((!o||o.platformId!==h||o.encodingId!==f)&&(0===h&&0===f?g=!0:1===h&&0===f?g=!0:3!==h||1!==f||!a&&o?r&&3===h&&0===f&&(g=!0,l=!0):(g=!0,r||(l=!0)),g&&(o={platformId:h,encodingId:f,offset:d}),l))break}if(o&&(t.pos=n+o.offset),!o||-1===t.peekByte())return(0,c.warn)("Could not find a preferred cmap table."),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
var m=t.getUint16()
t.getUint16(),t.getUint16()
var p,b,v=!1,y=[]
if(0===m){for(p=0;p<256;p++){var w=t.getByte()
w&&y.push({charCode:p,glyphId:w})}v=!0}else if(4===m){var k=t.getUint16()>>1
t.getBytes(6)
var S,C=[]
for(S=0;S<k;S++)C.push({end:t.getUint16()})
for(t.getUint16(),S=0;S<k;S++)C[S].start=t.getUint16()
for(S=0;S<k;S++)C[S].delta=t.getUint16()
var x=0
for(S=0;S<k;S++){i=C[S]
var A=t.getUint16()
if(A){var P=(A>>1)-(k-S)
i.offsetIndex=P,x=Math.max(x,P+i.end-i.start+1)}else i.offsetIndex=-1}var I=[]
for(p=0;p<x;p++)I.push(t.getUint16())
for(S=0;S<k;S++){i=C[S],n=i.start
var _=i.end,O=i.delta
for(P=i.offsetIndex,p=n;p<=_;p++)65535!==p&&(b=P<0?p:I[P+p-n],b=b+O&65535,y.push({charCode:p,glyphId:b}))}}else{if(6!==m)return(0,c.warn)("cmap table has unsupported format: "+m),{platformId:-1,encodingId:-1,mappings:[],hasShortCmap:!1}
var T=t.getUint16(),E=t.getUint16()
for(p=0;p<E;p++){b=t.getUint16()
var R=T+p
y.push({charCode:R,glyphId:b})}}for(y.sort(function(e,t){return e.charCode-t.charCode}),u=1;u<y.length;u++)y[u-1].charCode===y[u].charCode&&(y.splice(u,1),u--)
return{platformId:o.platformId,encodingId:o.encodingId,mappings:y,hasShortCmap:v}}(P.cmap,i,this.isSymbolicFont,n.hasEncoding),Z=J.platformId,Q=J.encodingId,$=J.mappings,ee=$.length
if(n.hasEncoding&&(3===Z&&1===Q||1===Z&&0===Q)||-1===Z&&-1===Q&&(0,h.getEncoding)(n.baseEncodingName)){var te=[]
"MacRomanEncoding"!==n.baseEncodingName&&"WinAnsiEncoding"!==n.baseEncodingName||(te=(0,h.getEncoding)(n.baseEncodingName))
var re=(0,u.getGlyphsUnicode)()
for(X=0;X<256;X++){var ae,ie
if(ae=this.differences&&X in this.differences?this.differences[X]:X in te&&""!==te[X]?te[X]:h.StandardEncoding[X]){ie=o(ae,re)
var ne
3===Z&&1===Q?ne=re[ie]:1===Z&&0===Q&&(ne=h.MacRomanEncoding.indexOf(ie))
var oe=!1
for(O=0;O<ee;++O)if($[O].charCode===ne){V[X]=$[O].glyphId,oe=!0
break}if(!oe&&n.glyphNames){var se=n.glyphNames.indexOf(ae);-1===se&&ie!==ae&&(se=n.glyphNames.indexOf(ie)),se>0&&b(se)&&(V[X]=se,oe=!0)}}}}else if(0===Z&&0===Q)for(O=0;O<ee;++O)V[$[O].charCode]=$[O].glyphId
else for(O=0;O<ee;++O)X=$[O].charCode,3===Z&&X>=61440&&X<=61695&&(X&=255),V[X]=$[O].glyphId}0===V.length&&(V[0]=0)
var ce=L(V,n,N)
if(this.toFontChar=ce.toFontChar,P.cmap={tag:"cmap",data:U(ce.charCodeToGlyphId,F)},P["OS/2"]&&j(P["OS/2"])||(P["OS/2"]={tag:"OS/2",data:q(n,ce.charCodeToGlyphId,G)}),P.post||(P.post={tag:"post",data:z(n)}),!T)try{w=new m.Stream(P["CFF "].data)
y=new l.CFFParser(w,n,k).parse()
var le=new l.CFFCompiler(y)
P["CFF "].data=le.compile()}catch(e){(0,c.warn)("Failed to compile font "+n.loadedName)}if(P.name){var ue=function(e){var t=(i.start?i.start:0)+e.offset
i.pos=t
var r=[[],[]],a=e.length,n=t+a
if(0!==i.getUint16()||a<6)return r
var o,s,l=i.getUint16(),u=i.getUint16(),h=[]
for(o=0;o<l&&i.pos+12<=n;o++){var f={platform:i.getUint16(),encoding:i.getUint16(),language:i.getUint16(),name:i.getUint16(),length:i.getUint16(),offset:i.getUint16()};(1===f.platform&&0===f.encoding&&0===f.language||3===f.platform&&1===f.encoding&&1033===f.language)&&h.push(f)}for(o=0,s=h.length;o<s;o++){var d=h[o]
if(!(d.length<=0)){var g=t+u+d.offset
if(!(g+d.length>n)){i.pos=g
var m=d.name
if(d.encoding){for(var p="",b=0,v=d.length;b<v;b+=2)p+=String.fromCharCode(i.getUint16())
r[1][m]=p}else r[0][m]=(0,c.bytesToString)(i.getBytes(d.length))}}}return r}(P.name)
P.name.data=H(e,ue)}else P.name={tag:"name",data:H(this.name)}
var he=new I(x.version)
for(var fe in P)he.addTable(fe,P[fe].data)
return he.toArray()},convert:function(e,t,r){function a(e,t){for(var r in e)if(t===e[r])return 0|r
return o.charCodeToGlyphId[o.nextAvailableFontCharCode]=t,o.nextAvailableFontCharCode++}r.fixedPitch=!1,r.builtInEncoding&&i(r,r.builtInEncoding)
var n=t.getGlyphMapping(r),o=L(n,r,Object.create(null))
this.toFontChar=o.toFontChar
var s=t.numGlyphs,l=t.seacs
if(k&&l&&l.length){var u=r.fontMatrix||c.FONT_IDENTITY_MATRIX,f=t.getCharset(),d=Object.create(null)
for(var g in l){g|=0
var m=l[g],b=h.StandardEncoding[m[2]],v=h.StandardEncoding[m[3]],y=f.indexOf(b),w=f.indexOf(v)
if(!(y<0||w<0)){var S={x:m[0]*u[0]+m[1]*u[2]+u[4],y:m[0]*u[1]+m[1]*u[3]+u[5]},C=function(e,t){var r=null
for(var a in e)t===e[a]&&(r||(r=[]),r.push(0|a))
return r}(n,g)
if(C)for(var x=0,A=C.length;x<A;x++){var P=C[x],_=o.charCodeToGlyphId,T=a(_,y),E=a(_,w)
d[P]={baseFontCharCode:T,accentFontCharCode:E,accentOffset:S}}}}r.seacMap=d}var R=1/(r.fontMatrix||c.FONT_IDENTITY_MATRIX)[0],F=new I("OTTO")
return F.addTable("CFF ",t.data),F.addTable("OS/2",q(r,o.charCodeToGlyphId)),F.addTable("cmap",U(o.charCodeToGlyphId,s)),F.addTable("head","\0\0\0\0\0\0\0\0\0\0_<õ\0\0"+O(R)+"\0\0\0\0\v~'\0\0\0\0\v~'\0\0"+O(r.descent)+"ÿ"+O(r.ascent)+p(r.italicAngle?2:0)+"\0\0\0\0\0\0\0"),F.addTable("hhea","\0\0\0"+O(r.ascent)+O(r.descent)+"\0\0ÿÿ\0\0\0\0\0\0"+O(r.capHeight)+O(Math.tan(r.italicAngle)*r.xHeight)+"\0\0\0\0\0\0\0\0\0\0\0\0"+p(s)),F.addTable("hmtx",function(){for(var e=t.charstrings,r=t.cff?t.cff.widths:null,a="\0\0\0\0",i=1,n=s;i<n;i++){var o=0
if(e){var c=e[i-1]
o="width"in c?c.width:0}else r&&(o=Math.ceil(r[i]||0))
a+=p(o)+p(0)}return a}()),F.addTable("maxp","\0\0P\0"+p(s)),F.addTable("name",H(e)),F.addTable("post",z(r)),F.toArray()},get spaceWidth(){if("_shadowWidth"in this)return this._shadowWidth
for(var e,t=["space","minus","one","i","I"],r=0,a=t.length;r<a;r++){var i=t[r]
if(i in this.widths){e=this.widths[i]
break}var n=(0,u.getGlyphsUnicode)(),o=n[i],s=0
if(this.composite&&this.cMap.contains(o)&&(s=this.cMap.lookup(o)),!s&&this.toUnicode&&(s=this.toUnicode.charCodeOf(o)),s<=0&&(s=o),e=this.widths[s])break}return e=e||this.defaultWidth,this._shadowWidth=e,e},charToGlyph:function(e,t){var r,a,i,n=e
this.cMap&&this.cMap.contains(e)&&(n=this.cMap.lookup(e)),a=this.widths[n],a=(0,c.isNum)(a)?a:this.defaultWidth
var o=this.vmetrics&&this.vmetrics[n],s=this.toUnicode.get(e)||e
"number"==typeof s&&(s=String.fromCharCode(s))
var l=e in this.toFontChar
r=this.toFontChar[e]||e,this.missingFile&&(r=(0,d.mapSpecialUnicodeValues)(r)),this.isType3Font&&(i=r)
var u=null
if(this.seacMap&&this.seacMap[e]){l=!0
var h=this.seacMap[e]
r=h.baseFontCharCode,u={fontChar:String.fromCharCode(h.accentFontCharCode),offset:h.accentOffset}}var f=String.fromCharCode(r),g=this.glyphCache[e]
return g&&g.matchesForCache(f,s,u,a,o,i,t,l)||(g=new x(f,s,u,a,o,i,t,l),this.glyphCache[e]=g),g},charsToGlyphs:function(e){var t,r,a,i=this.charsCache
if(i&&(t=i[e]))return t
i||(i=this.charsCache=Object.create(null)),t=[]
var n,o=e,s=0
if(this.cMap)for(var c=Object.create(null);s<e.length;){this.cMap.readCharCode(e,s,c),a=c.charcode
var l=c.length
s+=l
var u=1===l&&32===e.charCodeAt(s-1)
r=this.charToGlyph(a,u),t.push(r)}else for(s=0,n=e.length;s<n;++s)a=e.charCodeAt(s),r=this.charToGlyph(a,32===a),t.push(r)
return i[o]=t}},e}(),T=function(){function e(e){this.error=e,this.loadedName="g_font_error",this.loading=!1}return e.prototype={charsToGlyphs:function(){return[]},exportData:function(){return{error:this.error}}},e}(),E=function(){function e(e,t,r){for(var a,i=e.length,n=t.length,o=i-n,s=r,l=!1;s<o;){for(a=0;a<n&&e[s+a]===t[a];)a++
if(a>=n){for(s+=a;s<i&&(0,c.isSpace)(e[s]);)s++
l=!0
break}s++}return{found:l,length:s}}function t(t,r){var a,i,n,o=[101,101,120,101,99],s=t.pos
try{a=t.getBytes(r),i=a.length}catch(e){if(e instanceof c.MissingDataException)throw e}if(i===r&&(n=e(a,o,r-2*o.length),n.found&&n.length===r))return{stream:new m.Stream(a),length:r};(0,c.warn)('Invalid "Length1" property in Type1 font -- trying to recover.'),t.pos=s
for(var l;;){if(n=e(t.peekBytes(2048),o,0),0===n.length)break
if(t.pos+=n.length,n.found){l=t.pos-s
break}}return t.pos=s,l?{stream:new m.Stream(t.getBytes(l)),length:l}:((0,c.warn)('Unable to recover "Length1" property in Type1 font -- using as is.'),{stream:new m.Stream(t.getBytes(r)),length:r})}function r(e,t){var r=e.getBytes()
return{stream:new m.Stream(r),length:r.length}}function a(e,a,i){var n=i.length1,o=i.length2,s=a.peekBytes(6),c=128===s[0]&&1===s[1]
c&&(a.skip(6),n=s[5]<<24|s[4]<<16|s[3]<<8|s[2])
var l=t(a,n)
n=l.length,new p.Type1Parser(l.stream,!1,k).extractFontHeader(i),c&&(s=a.getBytes(6),o=s[5]<<24|s[4]<<16|s[3]<<8|s[2])
var u=r(a,o)
o=u.length
var h=new p.Type1Parser(u.stream,!0,k),f=h.extractFontProgram()
for(var d in f.properties)i[d]=f.properties[d]
var g=f.charstrings,m=this.getType2Charstrings(g),b=this.getType2Subrs(f.subrs)
this.charstrings=g,this.data=this.wrap(e,m,this.charstrings,b,i),this.seacs=this.getSeacs(f.charstrings)}return a.prototype={get numGlyphs(){return this.charstrings.length+1},getCharset:function(){for(var e=[".notdef"],t=this.charstrings,r=0;r<t.length;r++)e.push(t[r].glyphName)
return e},getGlyphMapping:function(e){var t,r=this.charstrings,a=[".notdef"]
for(t=0;t<r.length;t++)a.push(r[t].glyphName)
var i=e.builtInEncoding
if(i){var n=Object.create(null)
for(var o in i)(t=a.indexOf(i[o]))>=0&&(n[o]=t)}return s(e,n,a)},getSeacs:function(e){var t,r,a=[]
for(t=0,r=e.length;t<r;t++){var i=e[t]
i.seac&&(a[t+1]=i.seac)}return a},getType2Charstrings:function(e){for(var t=[],r=0,a=e.length;r<a;r++)t.push(e[r].charstring)
return t},getType2Subrs:function(e){var t=0,r=e.length
t=r<1133?107:r<33769?1131:32768
var a,i=[]
for(a=0;a<t;a++)i.push([11])
for(a=0;a<r;a++)i.push(e[a])
return i},wrap:function(e,t,r,a,i){var n=new l.CFF
n.header=new l.CFFHeader(1,0,4,4),n.names=[e]
var o=new l.CFFTopDict
o.setByName("version",391),o.setByName("Notice",392),o.setByName("FullName",393),o.setByName("FamilyName",394),o.setByName("Weight",395),o.setByName("Encoding",null),o.setByName("FontMatrix",i.fontMatrix),o.setByName("FontBBox",i.bbox),o.setByName("charset",null),o.setByName("CharStrings",null),o.setByName("Private",null),n.topDict=o
var s=new l.CFFStrings
s.add("Version 0.11"),s.add("See original notice"),s.add(e),s.add(e),s.add("Medium"),n.strings=s,n.globalSubrIndex=new l.CFFIndex
var u,h,f=t.length,d=[0]
for(u=0;u<f;u++){var g=l.CFFStandardStrings.indexOf(r[u].glyphName);-1===g&&(g=0),d.push(g>>8&255,255&g)}n.charset=new l.CFFCharset(!1,0,[],d)
var m=new l.CFFIndex
for(m.add([139,14]),u=0;u<f;u++){var p=t[u]
0!==p.length?m.add(p):m.add([139,14])}n.charStrings=m
var b=new l.CFFPrivateDict
b.setByName("Subrs",null)
var v=["BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StemSnapH","StemSnapV","BlueShift","BlueFuzz","BlueScale","LanguageGroup","ExpansionFactor","ForceBold","StdHW","StdVW"]
for(u=0,h=v.length;u<h;u++){var y=v[u]
if(y in i.privateData){var w=i.privateData[y]
if((0,c.isArray)(w))for(var k=w.length-1;k>0;k--)w[k]-=w[k-1]
b.setByName(y,w)}}n.topDict.privateDict=b
var S=new l.CFFIndex
for(u=0,h=a.length;u<h;u++)S.add(a[u])
return b.subrsIndex=S,new l.CFFCompiler(n).compile()}},a}(),R=function(){function e(e,t){this.properties=t
var r=new l.CFFParser(e,t,k)
this.cff=r.parse()
var a=new l.CFFCompiler(this.cff)
this.seacs=this.cff.seacs
try{this.data=a.compile()}catch(r){(0,c.warn)("Failed to compile font "+t.loadedName),this.data=e}}return e.prototype={get numGlyphs(){return this.cff.charStrings.count},getCharset:function(){return this.cff.charset.charset},getGlyphMapping:function(){var e,t,r=this.cff,a=this.properties,i=r.charset.charset
if(a.composite){if(e=Object.create(null),r.isCIDFont)for(t=0;t<i.length;t++){var n=i[t],o=a.cMap.charCodeOf(n)
e[o]=t}else for(t=0;t<r.charStrings.count;t++)e[t]=t
return e}return e=s(a,r.encoding?r.encoding.encoding:null,i)}},e}()
!function(){"undefined"!=typeof navigator&&/Windows/.test(navigator.userAgent)&&(t.SEAC_ANALYSIS_ENABLED=k=!0)}(),function(){"undefined"!=typeof navigator&&/Windows.*Chrome/.test(navigator.userAgent)&&(y=!0)}(),t.SEAC_ANALYSIS_ENABLED=k,t.PRIVATE_USE_OFFSET_START=b,t.PRIVATE_USE_OFFSET_END=v,t.ErrorFont=T,t.Font=O,t.FontFlags=S,t.ToUnicodeMap=A,t.IdentityToUnicodeMap=P,t.ProblematicCharRanges=_,t.getFontType=n},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFImage=void 0
var a=r(0),i=r(3),n=r(1),o=r(15),s=r(57),c=function(){function e(e,t){return t&&t.canDecode(e)?t.decode(e):Promise.resolve(e)}function t(e,t,r,a){return e=t+e*r,e<0?0:e>a?a:e}function r(e,t,r,a,i,n){var o,s,c,l,u=i*n,h=t<=8?new Uint8Array(u):t<=16?new Uint16Array(u):new Uint32Array(u),f=r/i,d=a/n,g=0,m=new Uint16Array(i),p=r
for(o=0;o<i;o++)m[o]=Math.floor(o*f)
for(o=0;o<n;o++)for(c=Math.floor(o*d)*p,s=0;s<i;s++)l=c+m[s],h[g++]=e[l]
return h}function c(e,t,r,i,l,u,h){this.image=r
var f=r.dict
if(f.has("Filter")){var d=f.get("Filter").name
if("JPXDecode"===d){var g=new s.JpxImage
g.parseImageProperties(r.stream),r.stream.reset(),r.bitsPerComponent=g.bitsPerComponent,r.numComps=g.componentsCount}else"JBIG2Decode"===d&&(r.bitsPerComponent=1,r.numComps=1)}if(this.width=f.get("Width","W"),this.height=f.get("Height","H"),this.width<1||this.height<1)throw new a.FormatError("Invalid image width: "+this.width+" or height: "+this.height)
this.interpolate=f.get("Interpolate","I")||!1,this.imageMask=f.get("ImageMask","IM")||!1,this.matte=f.get("Matte")||!1
var m=r.bitsPerComponent
if(!m&&!(m=f.get("BitsPerComponent","BPC"))){if(!this.imageMask)throw new a.FormatError("Bits per component missing in image: "+this.imageMask)
m=1}if(this.bpc=m,!this.imageMask){var p=f.get("ColorSpace","CS")
if(!p)switch((0,a.info)("JPX images (which do not require color spaces)"),r.numComps){case 1:p=n.Name.get("DeviceGray")
break
case 3:p=n.Name.get("DeviceRGB")
break
case 4:p=n.Name.get("DeviceCMYK")
break
default:throw new Error("JPX images with "+this.numComps+" color components not supported.")}this.colorSpace=o.ColorSpace.parse(p,e,t),this.numComps=this.colorSpace.numComps}if(this.decode=f.getArray("Decode","D"),this.needsDecode=!1,this.decode&&(this.colorSpace&&!this.colorSpace.isDefaultDecode(this.decode)||h&&!o.ColorSpace.isDefaultDecode(this.decode,1))){this.needsDecode=!0
var b=(1<<m)-1
this.decodeCoefficients=[],this.decodeAddends=[]
for(var v=0,y=0;v<this.decode.length;v+=2,++y){var w=this.decode[v],k=this.decode[v+1]
this.decodeCoefficients[y]=k-w,this.decodeAddends[y]=b*w}}if(l)this.smask=new c(e,t,l,!1)
else if(u)if((0,n.isStream)(u)){var S=u.dict,C=S.get("ImageMask","IM")
C?this.mask=new c(e,t,u,!1,null,null,!0):(0,a.warn)("Ignoring /Mask in image without /ImageMask.")}else this.mask=u}return c.buildImage=function(t,r,i,o,s,l){var u,h,f=e(o,l),d=o.dict.get("SMask"),g=o.dict.get("Mask")
return d?(u=e(d,l),h=Promise.resolve(null)):(u=Promise.resolve(null),g?(0,n.isStream)(g)?h=e(g,l):(0,a.isArray)(g)?h=Promise.resolve(g):((0,a.warn)("Unsupported mask format."),h=Promise.resolve(null)):h=Promise.resolve(null)),Promise.all([f,u,h]).then(function(e){var t=e[0],a=e[1],n=e[2]
return new c(r,i,t,s,a,n)})},c.createMask=function(e,t,r,a,i){var n,o,s=(t+7>>3)*r,c=e.byteLength,l=s===c
if(!a||i&&!l)if(i)for(n=new Uint8Array(s),n.set(e),o=c;o<s;o++)n[o]=255
else n=new Uint8Array(c),n.set(e)
else n=e
if(i)for(o=0;o<c;o++)n[o]^=255
return{data:n,width:t,height:r}},c.prototype={get drawWidth(){return Math.max(this.width,this.smask&&this.smask.width||0,this.mask&&this.mask.width||0)},get drawHeight(){return Math.max(this.height,this.smask&&this.smask.height||0,this.mask&&this.mask.height||0)},decodeBuffer:function(e){var r,a,i=this.bpc,n=this.numComps,o=this.decodeAddends,s=this.decodeCoefficients,c=(1<<i)-1
if(1!==i){var l=0
for(r=0,a=this.width*this.height;r<a;r++)for(var u=0;u<n;u++)e[l]=t(e[l],o[u],s[u],c),l++}else for(r=0,a=e.length;r<a;r++)e[r]=+!e[r]},getComponents:function(e){var t=this.bpc
if(8===t)return e
var r,a,i=this.width,n=this.height,o=this.numComps,s=i*n*o,c=0,l=t<=8?new Uint8Array(s):t<=16?new Uint16Array(s):new Uint32Array(s),u=i*o,h=(1<<t)-1,f=0
if(1===t)for(var d,g,m,p=0;p<n;p++){for(g=f+(-8&u),m=f+u;f<g;)a=e[c++],l[f]=a>>7&1,l[f+1]=a>>6&1,l[f+2]=a>>5&1,l[f+3]=a>>4&1,l[f+4]=a>>3&1,l[f+5]=a>>2&1,l[f+6]=a>>1&1,l[f+7]=1&a,f+=8
if(f<m)for(a=e[c++],d=128;f<m;)l[f++]=+!!(a&d),d>>=1}else{var b=0
for(a=0,f=0,r=s;f<r;++f){for(f%u==0&&(a=0,b=0);b<t;)a=a<<8|e[c++],b+=8
var v=b-t,y=a>>v
l[f]=y<0?0:y>h?h:y,a&=(1<<v)-1,b=v}}return l},fillOpacity:function(e,t,i,n,o){var s,l,u,h,f,d,g=this.smask,m=this.mask
if(g)l=g.width,u=g.height,s=new Uint8Array(l*u),g.fillGrayBuffer(s),l===t&&u===i||(s=r(s,g.bpc,l,u,t,i))
else if(m)if(m instanceof c){for(l=m.width,u=m.height,s=new Uint8Array(l*u),m.numComps=1,m.fillGrayBuffer(s),h=0,f=l*u;h<f;++h)s[h]=255-s[h]
l===t&&u===i||(s=r(s,m.bpc,l,u,t,i))}else{if(!(0,a.isArray)(m))throw new a.FormatError("Unknown mask format.")
s=new Uint8Array(t*i)
var p=this.numComps
for(h=0,f=t*i;h<f;++h){var b=0,v=h*p
for(d=0;d<p;++d){var y=o[v+d],w=2*d
if(y<m[w]||y>m[w+1]){b=255
break}}s[h]=b}}if(s)for(h=0,d=3,f=t*n;h<f;++h,d+=4)e[d]=s[h]
else for(h=0,d=3,f=t*n;h<f;++h,d+=4)e[d]=255},undoPreblend:function(e,t,r){var a=this.smask&&this.smask.matte
if(a)for(var i,n,o,s=this.colorSpace.getRgb(a,0),c=s[0],l=s[1],u=s[2],h=t*r*4,f=0;f<h;f+=4){var d=e[f+3]
if(0!==d){var g=255/d
i=(e[f]-c)*g+c,n=(e[f+1]-l)*g+l,o=(e[f+2]-u)*g+u,e[f]=i<=0?0:i>=255?255:0|i,e[f+1]=n<=0?0:n>=255?255:0|n,e[f+2]=o<=0?0:o>=255?255:0|o}else e[f]=255,e[f+1]=255,e[f+2]=255}},createImageData:function(e){var t,r=this.drawWidth,n=this.drawHeight,o={width:r,height:n},s=this.numComps,c=this.width,l=this.height,u=this.bpc,h=c*s*u+7>>3
if(!e){var f
if("DeviceGray"===this.colorSpace.name&&1===u?f=a.ImageKind.GRAYSCALE_1BPP:"DeviceRGB"!==this.colorSpace.name||8!==u||this.needsDecode||(f=a.ImageKind.RGB_24BPP),f&&!this.smask&&!this.mask&&r===c&&n===l){if(o.kind=f,t=this.getImageBytes(l*h),this.image instanceof i.DecodeStream)o.data=t
else{var d=new Uint8Array(t.length)
d.set(t),o.data=d}if(this.needsDecode){(0,a.assert)(f===a.ImageKind.GRAYSCALE_1BPP)
for(var g=o.data,m=0,p=g.length;m<p;m++)g[m]^=255}return o}if(this.image instanceof i.JpegStream&&!this.smask&&!this.mask&&("DeviceGray"===this.colorSpace.name||"DeviceRGB"===this.colorSpace.name||"DeviceCMYK"===this.colorSpace.name))return o.kind=a.ImageKind.RGB_24BPP,o.data=this.getImageBytes(l*h,r,n,!0),o}t=this.getImageBytes(l*h)
var b,v,y=0|t.length/h*n/l,w=this.getComponents(t)
return e||this.smask||this.mask?(o.kind=a.ImageKind.RGBA_32BPP,o.data=new Uint8Array(r*n*4),b=1,v=!0,this.fillOpacity(o.data,r,n,y,w)):(o.kind=a.ImageKind.RGB_24BPP,o.data=new Uint8Array(r*n*3),b=0,v=!1),this.needsDecode&&this.decodeBuffer(w),this.colorSpace.fillRgb(o.data,c,l,r,n,y,u,w,b),v&&this.undoPreblend(o.data,r,y),o},fillGrayBuffer:function(e){var t=this.numComps
if(1!==t)throw new a.FormatError("Reading gray scale from a color image: "+t)
var r,i,n=this.width,o=this.height,s=this.bpc,c=n*t*s+7>>3,l=this.getImageBytes(o*c),u=this.getComponents(l)
if(1!==s){this.needsDecode&&this.decodeBuffer(u),i=n*o
var h=255/((1<<s)-1)
for(r=0;r<i;++r)e[r]=h*u[r]|0}else if(i=n*o,this.needsDecode)for(r=0;r<i;++r)e[r]=u[r]-1&255
else for(r=0;r<i;++r)e[r]=255&-u[r]},getImageBytes:function(e,t,r,a){return this.image.reset(),this.image.drawWidth=t||this.width,this.image.drawHeight=r||this.height,this.image.forceRGB=!!a,this.image.getBytes(e)}},c}()
t.PDFImage=c},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Jbig2Image=void 0
var a=r(0),i=r(52),n=function(){function e(e){this.message="JBIG2 error: "+e}return e.prototype=new Error,e.prototype.name="Jbig2Error",e.constructor=e,e}(),o=function(){function e(){}function t(e,t,r){this.data=e,this.start=t,this.end=r}function r(e,t,r){function a(e){for(var t=0,a=0;a<e;a++){var o=r.readBit(i,n)
n=n<256?n<<1|o:511&(n<<1|o)|256,t=t<<1|o}return t>>>0}var i=e.getContexts(t),n=1,o=a(1),s=a(1)?a(1)?a(1)?a(1)?a(1)?a(32)+4436:a(12)+340:a(8)+84:a(6)+20:a(4)+4:a(2)
return 0===o?s:s>0?-s:null}function o(e,t,r){for(var a=e.getContexts("IAID"),i=1,n=0;n<r;n++){i=i<<1|t.readBit(a,i)}return r<31?i&(1<<r)-1:2147483647&i}function s(e,t,r){var a,i,n,o,s,c,l,u=r.decoder,h=r.contextCache.getContexts("GB"),f=[]
for(i=0;i<t;i++)for(s=f[i]=new Uint8Array(e),c=i<1?s:f[i-1],l=i<2?s:f[i-2],a=l[0]<<13|l[1]<<12|l[2]<<11|c[0]<<7|c[1]<<6|c[2]<<5|c[3]<<4,n=0;n<e;n++)s[n]=o=u.readBit(h,a),a=(31735&a)<<1|(n+3<e?l[n+3]<<11:0)|(n+4<e?c[n+4]<<4:0)|o
return f}function c(e,t,r,a,i,o,c,l){if(e)throw new n("MMR encoding is not supported")
if(0===a&&!o&&!i&&4===c.length&&3===c[0].x&&-1===c[0].y&&-3===c[1].x&&-1===c[1].y&&2===c[2].x&&-2===c[2].y&&-2===c[3].x&&-2===c[3].y)return s(t,r,l)
var u=!!o,h=C[a].concat(c)
h.sort(function(e,t){return e.y-t.y||e.x-t.x})
var f,d,g=h.length,m=new Int8Array(g),p=new Int8Array(g),b=[],v=0,y=0,w=0,k=0
for(d=0;d<g;d++)m[d]=h[d].x,p[d]=h[d].y,y=Math.min(y,h[d].x),w=Math.max(w,h[d].x),k=Math.min(k,h[d].y),d<g-1&&h[d].y===h[d+1].y&&h[d].x===h[d+1].x-1?v|=1<<g-1-d:b.push(d)
var S=b.length,x=new Int8Array(S),P=new Int8Array(S),I=new Uint16Array(S)
for(f=0;f<S;f++)d=b[f],x[f]=h[d].x,P[f]=h[d].y,I[f]=1<<g-1-d
for(var _,O,T,E,R,F=-y,B=-k,M=t-w,D=A[a],L=new Uint8Array(t),N=[],U=l.decoder,j=l.contextCache.getContexts("GB"),q=0,z=0,H=0;H<r;H++){if(i){if(q^=U.readBit(j,D)){N.push(L)
continue}}for(L=new Uint8Array(L),N.push(L),_=0;_<t;_++)if(u&&o[H][_])L[_]=0
else{if(_>=F&&_<M&&H>=B)for(z=z<<1&v,d=0;d<S;d++)O=H+P[d],T=_+x[d],(E=N[O][T])&&(E=I[d],z|=E)
else for(z=0,R=g-1,d=0;d<g;d++,R--)(T=_+m[d])>=0&&T<t&&(O=H+p[d])>=0&&(E=N[O][T])&&(z|=E<<R)
var W=U.readBit(j,z)
L[_]=W}}return N}function l(e,t,r,a,i,o,s,c,l){var u=x[r].coding
0===r&&(u=u.concat([c[0]]))
var h,f=u.length,d=new Int32Array(f),g=new Int32Array(f)
for(h=0;h<f;h++)d[h]=u[h].x,g[h]=u[h].y
var m=x[r].reference
0===r&&(m=m.concat([c[1]]))
var p=m.length,b=new Int32Array(p),v=new Int32Array(p)
for(h=0;h<p;h++)b[h]=m[h].x,v[h]=m[h].y
for(var y=a[0].length,w=a.length,k=P[r],S=[],C=l.decoder,A=l.contextCache.getContexts("GR"),I=0,_=0;_<t;_++){if(s){if(I^=C.readBit(A,k))throw new n("prediction is not supported")}var O=new Uint8Array(e)
S.push(O)
for(var T=0;T<e;T++){var E,R,F=0
for(h=0;h<f;h++)E=_+g[h],R=T+d[h],E<0||R<0||R>=e?F<<=1:F=F<<1|S[E][R]
for(h=0;h<p;h++)E=_+v[h]-o,R=T+b[h]-i,E<0||E>=w||R<0||R>=y?F<<=1:F=F<<1|a[E][R]
var B=C.readBit(A,F)
O[T]=B}}return S}function u(e,t,i,s,u,f,d,g,m,p,b){if(e)throw new n("huffman is not supported")
for(var v=[],y=0,w=(0,a.log2)(i.length+s),k=b.decoder,S=b.contextCache;v.length<s;){y+=r(S,"IADH",k)
for(var C=0;;){var x=r(S,"IADW",k)
if(null===x)break
C+=x
var A
if(t){var P=r(S,"IAAI",k)
if(P>1)A=h(e,t,C,y,0,P,1,i.concat(v),w,0,0,1,0,f,m,p,b)
else{var I=o(S,k,w),_=r(S,"IARDX",k),O=r(S,"IARDY",k)
A=l(C,y,m,I<i.length?i[I]:v[I-i.length],_,O,!1,p,b)}}else A=c(!1,C,y,d,!1,null,g,b)
v.push(A)}}for(var T=[],E=[],R=!1,F=i.length+s;E.length<F;){for(var B=r(S,"IAEX",k);B--;)E.push(R)
R=!R}for(var M=0,D=i.length;M<D;M++)E[M]&&T.push(i[M])
for(var L=0;L<s;M++,L++)E[M]&&T.push(v[L])
return T}function h(e,t,a,i,s,c,u,h,f,d,g,m,p,b,v,y,w){if(e)throw new n("huffman is not supported")
var k,S,C=[]
for(k=0;k<i;k++){if(S=new Uint8Array(a),s)for(var x=0;x<a;x++)S[x]=s
C.push(S)}var A=w.decoder,P=w.contextCache,I=-r(P,"IADT",A),_=0
for(k=0;k<c;){I+=r(P,"IADT",A)
_+=r(P,"IAFS",A)
for(var O=_;;){var T=1===u?0:r(P,"IAIT",A),E=u*I+T,R=o(P,A,f),F=t&&r(P,"IARI",A),B=h[R],M=B[0].length,D=B.length
if(F){var L=r(P,"IARDW",A),N=r(P,"IARDH",A),U=r(P,"IARDX",A),j=r(P,"IARDY",A)
M+=L,D+=N,B=l(M,D,v,B,(L>>1)+U,(N>>1)+j,!1,y,w)}var q,z,H,W=E-(1&m?0:D),G=O-(2&m?M:0)
if(d){for(q=0;q<D;q++)if(S=C[G+q]){H=B[q]
var X=Math.min(a-W,M)
switch(p){case 0:for(z=0;z<X;z++)S[W+z]|=H[z]
break
case 2:for(z=0;z<X;z++)S[W+z]^=H[z]
break
default:throw new n("operator "+p+" is not supported")}}O+=D-1}else{for(z=0;z<D;z++)if(S=C[W+z])switch(H=B[z],p){case 0:for(q=0;q<M;q++)S[G+q]|=H[q]
break
case 2:for(q=0;q<M;q++)S[G+q]^=H[q]
break
default:throw new n("operator "+p+" is not supported")}O+=M-1}k++
var V=r(P,"IADS",A)
if(null===V)break
O+=V+g}}return C}function f(e,t,r,a,i,n){var o=[]
o.push({x:-t,y:0}),0===i&&(o.push({x:-3,y:-1}),o.push({x:2,y:-2}),o.push({x:-2,y:-2}))
for(var s=(a+1)*t,l=c(e,s,r,i,!1,null,o,n),u=[],h=0,f=void 0,d=void 0,g=void 0,m=void 0;h<=a;){for(f=[],d=t*h,g=d+t,m=0;m<r;m++)f.push(l[m].subarray(d,g))
u.push(f),h++}return u}function d(e,t,r,i,o,s,l,u,h,f,d,g,m,p,b){if(l)throw new n("skip is not supported")
if(0!==u)throw new n("operator "+u+" is not supported in halftone region")
var v=[],y=void 0,w=void 0,k=void 0
for(y=0;y<o;y++){if(k=new Uint8Array(i),s)for(w=0;w<i;w++)k[w]=s
v.push(k)}var S=t.length,C=t[0],x=C[0].length,A=C.length,P=(0,a.log2)(S),I=[]
I.push({x:r<=1?3:2,y:-1}),0===r&&(I.push({x:-3,y:-1}),I.push({x:2,y:-2}),I.push({x:-2,y:-2}))
var _=[]
for(y=P-1;y>=0;y--)_[y]=c(e,h,f,r,!1,null,I,b)
var O=void 0,T=void 0,E=void 0,R=void 0,F=void 0,B=void 0,M=void 0,D=void 0,L=void 0
for(O=0;O<f;O++)for(T=0;T<h;T++){for(E=0,R=0,w=P-1;w>=0;w--)E=_[w][O][T]^E,R|=E<<w
if(F=t[R],B=d+O*p+T*m>>8,M=g+O*m-T*p>>8,B>=0&&B+x<=i&&M>=0&&M+A<=o)for(y=0;y<A;y++)for(L=v[M+y],D=F[y],w=0;w<x;w++)L[B+w]|=D[w]
else{var N=void 0,U=void 0
for(y=0;y<A;y++)if(!((U=M+y)<0||U>=o))for(L=v[U],D=F[y],w=0;w<x;w++)(N=B+w)>=0&&N<i&&(L[N]|=D[w])}}return v}function g(e,t){var r={}
r.number=(0,a.readUint32)(e,t)
var i=e[t+4],o=63&i
if(!S[o])throw new n("invalid segment type: "+o)
r.type=o,r.typeName=S[o],r.deferredNonRetain=!!(128&i)
var s=!!(64&i),c=e[t+5],l=c>>5&7,u=[31&c],h=t+6
if(7===c){l=536870911&(0,a.readUint32)(e,h-1),h+=3
var f=l+7>>3
for(u[0]=e[h++];--f>0;)u.push(e[h++])}else if(5===c||6===c)throw new n("invalid referred-to flags")
r.retainBits=u
var d,g,m=r.number<=256?1:r.number<=65536?2:4,b=[]
for(d=0;d<l;d++){var v=1===m?e[h]:2===m?(0,a.readUint16)(e,h):(0,a.readUint32)(e,h)
b.push(v),h+=m}if(r.referredTo=b,s?(r.pageAssociation=(0,a.readUint32)(e,h),h+=4):r.pageAssociation=e[h++],r.length=(0,a.readUint32)(e,h),h+=4,4294967295===r.length){if(38!==o)throw new n("invalid unknown segment length")
var y=p(e,h),w=e[h+I],k=!!(1&w),C=new Uint8Array(6)
for(k||(C[0]=255,C[1]=172),C[2]=y.height>>>24&255,C[3]=y.height>>16&255,C[4]=y.height>>8&255,C[5]=255&y.height,d=h,g=e.length;d<g;d++){for(var x=0;x<6&&C[x]===e[d+x];)x++
if(6===x){r.length=d+6
break}}if(4294967295===r.length)throw new n("segment end was not found")}return r.headerEnd=h,r}function m(e,t,r,a){for(var i=[],n=r;n<a;){var o=g(t,n)
n=o.headerEnd
var s={header:o,data:t}
if(e.randomAccess||(s.start=n,n+=o.length,s.end=n),i.push(s),51===o.type)break}if(e.randomAccess)for(var c=0,l=i.length;c<l;c++)i[c].start=n,n+=i[c].header.length,i[c].end=n
return i}function p(e,t){return{width:(0,a.readUint32)(e,t),height:(0,a.readUint32)(e,t+4),x:(0,a.readUint32)(e,t+8),y:(0,a.readUint32)(e,t+12),combinationOperator:7&e[t+16]}}function b(e,t){var r,i,o,s,c=e.header,l=e.data,u=e.start,h=e.end
switch(c.type){case 0:var f={},d=(0,a.readUint16)(l,u)
if(f.huffman=!!(1&d),f.refinement=!!(2&d),f.huffmanDHSelector=d>>2&3,f.huffmanDWSelector=d>>4&3,f.bitmapSizeSelector=d>>6&1,f.aggregationInstancesSelector=d>>7&1,f.bitmapCodingContextUsed=!!(256&d),f.bitmapCodingContextRetained=!!(512&d),f.template=d>>10&3,f.refinementTemplate=d>>12&1,u+=2,!f.huffman){for(s=0===f.template?4:1,i=[],o=0;o<s;o++)i.push({x:(0,a.readInt8)(l,u),y:(0,a.readInt8)(l,u+1)}),u+=2
f.at=i}if(f.refinement&&!f.refinementTemplate){for(i=[],o=0;o<2;o++)i.push({x:(0,a.readInt8)(l,u),y:(0,a.readInt8)(l,u+1)}),u+=2
f.refinementAt=i}f.numberOfExportedSymbols=(0,a.readUint32)(l,u),u+=4,f.numberOfNewSymbols=(0,a.readUint32)(l,u),u+=4,r=[f,c.number,c.referredTo,l,u,h]
break
case 6:case 7:var g={}
g.info=p(l,u),u+=I
var m=(0,a.readUint16)(l,u)
if(u+=2,g.huffman=!!(1&m),g.refinement=!!(2&m),g.stripSize=1<<(m>>2&3),g.referenceCorner=m>>4&3,g.transposed=!!(64&m),g.combinationOperator=m>>7&3,g.defaultPixelValue=m>>9&1,g.dsOffset=m<<17>>27,g.refinementTemplate=m>>15&1,g.huffman){var b=(0,a.readUint16)(l,u)
u+=2,g.huffmanFS=3&b,g.huffmanDS=b>>2&3,g.huffmanDT=b>>4&3,g.huffmanRefinementDW=b>>6&3,g.huffmanRefinementDH=b>>8&3,g.huffmanRefinementDX=b>>10&3,g.huffmanRefinementDY=b>>12&3,g.huffmanRefinementSizeSelector=!!(14&b)}if(g.refinement&&!g.refinementTemplate){for(i=[],o=0;o<2;o++)i.push({x:(0,a.readInt8)(l,u),y:(0,a.readInt8)(l,u+1)}),u+=2
g.refinementAt=i}if(g.numberOfSymbolInstances=(0,a.readUint32)(l,u),u+=4,g.huffman)throw new n("huffman is not supported")
r=[g,c.referredTo,l,u,h]
break
case 16:var v={},y=l[u++]
v.mmr=!!(1&y),v.template=y>>1&3,v.patternWidth=l[u++],v.patternHeight=l[u++],v.maxPatternIndex=(0,a.readUint32)(l,u),u+=4,r=[v,c.number,l,u,h]
break
case 22:case 23:var w={}
w.info=p(l,u),u+=I
var k=l[u++]
w.mmr=!!(1&k),w.template=k>>1&3,w.enableSkip=!!(8&k),w.combinationOperator=k>>4&7,w.defaultPixelValue=k>>7&1,w.gridWidth=(0,a.readUint32)(l,u),u+=4,w.gridHeight=(0,a.readUint32)(l,u),u+=4,w.gridOffsetX=4294967295&(0,a.readUint32)(l,u),u+=4,w.gridOffsetY=4294967295&(0,a.readUint32)(l,u),u+=4,w.gridVectorX=(0,a.readUint16)(l,u),u+=2,w.gridVectorY=(0,a.readUint16)(l,u),u+=2,r=[w,c.referredTo,l,u,h]
break
case 38:case 39:var S={}
S.info=p(l,u),u+=I
var C=l[u++]
if(S.mmr=!!(1&C),S.template=C>>1&3,S.prediction=!!(8&C),!S.mmr){for(s=0===S.template?4:1,i=[],o=0;o<s;o++)i.push({x:(0,a.readInt8)(l,u),y:(0,a.readInt8)(l,u+1)}),u+=2
S.at=i}r=[S,l,u,h]
break
case 48:var x={width:(0,a.readUint32)(l,u),height:(0,a.readUint32)(l,u+4),resolutionX:(0,a.readUint32)(l,u+8),resolutionY:(0,a.readUint32)(l,u+12)}
4294967295===x.height&&delete x.height
var A=l[u+16];(0,a.readUint16)(l,u+17),x.lossless=!!(1&A),x.refinement=!!(2&A),x.defaultPixelValue=A>>2&1,x.combinationOperator=A>>3&3,x.requiresBuffer=!!(32&A),x.combinationOperatorOverride=!!(64&A),r=[x]
break
case 49:case 50:case 51:case 62:break
default:throw new n("segment type "+c.typeName+"("+c.type+") is not implemented")}var P="on"+c.typeName
P in t&&t[P].apply(t,r)}function v(e,t){for(var r=0,a=e.length;r<a;r++)b(e[r],t)}function y(e){for(var t=new w,r=0,a=e.length;r<a;r++){var i=e[r]
v(m({},i.data,i.start,i.end),t)}return t.buffer}function w(){}function k(){}e.prototype={getContexts:function(e){return e in this?this[e]:this[e]=new Int8Array(65536)}},t.prototype={get decoder(){var e=new i.ArithmeticDecoder(this.data,this.start,this.end)
return(0,a.shadow)(this,"decoder",e)},get contextCache(){var t=new e
return(0,a.shadow)(this,"contextCache",t)}}
var S=["SymbolDictionary",null,null,null,"IntermediateTextRegion",null,"ImmediateTextRegion","ImmediateLosslessTextRegion",null,null,null,null,null,null,null,null,"PatternDictionary",null,null,null,"IntermediateHalftoneRegion",null,"ImmediateHalftoneRegion","ImmediateLosslessHalftoneRegion",null,null,null,null,null,null,null,null,null,null,null,null,"IntermediateGenericRegion",null,"ImmediateGenericRegion","ImmediateLosslessGenericRegion","IntermediateGenericRefinementRegion",null,"ImmediateGenericRefinementRegion","ImmediateLosslessGenericRefinementRegion",null,null,null,null,"PageInformation","EndOfPage","EndOfStripe","EndOfFile","Profiles","Tables",null,null,null,null,null,null,null,null,"Extension"],C=[[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-4,y:0},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}],[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:2,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}],[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-2,y:0},{x:-1,y:0}],[{x:-3,y:-1},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-4,y:0},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}]],x=[{coding:[{x:0,y:-1},{x:1,y:-1},{x:-1,y:0}],reference:[{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}]},{coding:[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0}],reference:[{x:0,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}]}],A=[39717,1941,229,405],P=[32,8],I=17
return w.prototype={onPageInformation:function(e){this.currentPageInfo=e
var t=e.width+7>>3,r=new Uint8ClampedArray(t*e.height)
if(e.defaultPixelValue)for(var a=0,i=r.length;a<i;a++)r[a]=255
this.buffer=r},drawBitmap:function(e,t){var r,a,i,o,s=this.currentPageInfo,c=e.width,l=e.height,u=s.width+7>>3,h=s.combinationOperatorOverride?e.combinationOperator:s.combinationOperator,f=this.buffer,d=128>>(7&e.x),g=e.y*u+(e.x>>3)
switch(h){case 0:for(r=0;r<l;r++){for(i=d,o=g,a=0;a<c;a++)t[r][a]&&(f[o]|=i),(i>>=1)||(i=128,o++)
g+=u}break
case 2:for(r=0;r<l;r++){for(i=d,o=g,a=0;a<c;a++)t[r][a]&&(f[o]^=i),(i>>=1)||(i=128,o++)
g+=u}break
default:throw new n("operator "+h+" is not supported")}},onImmediateGenericRegion:function(e,r,a,i){var n=e.info,o=new t(r,a,i),s=c(e.mmr,n.width,n.height,e.template,e.prediction,null,e.at,o)
this.drawBitmap(n,s)},onImmediateLosslessGenericRegion:function(){this.onImmediateGenericRegion.apply(this,arguments)},onSymbolDictionary:function(e,r,a,i,o,s){if(e.huffman)throw new n("huffman is not supported")
var c=this.symbols
c||(this.symbols=c={})
for(var l=[],h=0,f=a.length;h<f;h++)l=l.concat(c[a[h]])
var d=new t(i,o,s)
c[r]=u(e.huffman,e.refinement,l,e.numberOfNewSymbols,e.numberOfExportedSymbols,void 0,e.template,e.at,e.refinementTemplate,e.refinementAt,d)},onImmediateTextRegion:function(e,r,i,n,o){for(var s=e.info,c=this.symbols,l=[],u=0,f=r.length;u<f;u++)l=l.concat(c[r[u]])
var d=(0,a.log2)(l.length),g=new t(i,n,o),m=h(e.huffman,e.refinement,s.width,s.height,e.defaultPixelValue,e.numberOfSymbolInstances,e.stripSize,l,d,e.transposed,e.dsOffset,e.referenceCorner,e.combinationOperator,void 0,e.refinementTemplate,e.refinementAt,g)
this.drawBitmap(s,m)},onImmediateLosslessTextRegion:function(){this.onImmediateTextRegion.apply(this,arguments)},onPatternDictionary:function(e,r,a,i,n){var o=this.patterns
o||(this.patterns=o={})
var s=new t(a,i,n)
o[r]=f(e.mmr,e.patternWidth,e.patternHeight,e.maxPatternIndex,e.template,s)},onImmediateHalftoneRegion:function(e,r,a,i,n){var o=this.patterns[r[0]],s=e.info,c=new t(a,i,n),l=d(e.mmr,o,e.template,s.width,s.height,e.defaultPixelValue,e.enableSkip,e.combinationOperator,e.gridWidth,e.gridHeight,e.gridOffsetX,e.gridOffsetY,e.gridVectorX,e.gridVectorY,c)
this.drawBitmap(s,l)},onImmediateLosslessHalftoneRegion:function(){this.onImmediateHalftoneRegion.apply(this,arguments)}},k.prototype={parseChunks:function(e){return y(e)}},k}()
t.Jbig2Image=o},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.JpegImage=void 0
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(0),n=function(){function e(e){this.message="JPEG error: "+e}return e.prototype=new Error,e.prototype.name="JpegError",e.constructor=e,e}(),o=function(){function e(){this.decodeTransform=null,this.colorTransform=-1}function t(e,t){for(var r,a,i=0,n=[],o=16;o>0&&!e[o-1];)o--
n.push({children:[],index:0})
var s,c=n[0]
for(r=0;r<o;r++){for(a=0;a<e[r];a++){for(c=n.pop(),c.children[c.index]=t[i];c.index>0;)c=n.pop()
for(c.index++,n.push(c);n.length<=r;)n.push(s={children:[],index:0}),c.children[c.index]=s.children,c=s
i++}r+1<o&&(n.push(s={children:[],index:0}),c.children[c.index]=s.children,c=s)}return n[0].children}function r(e,t,r){return 64*((e.blocksPerLine+1)*t+r)}function o(e,t,o,s,c,h,f,d,g){function m(){if(M>0)return M--,B>>M&1
if(255===(B=e[t++])){var r=e[t++]
if(r)throw new n("unexpected marker "+(B<<8|r).toString(16))}return M=7,B>>>7}function p(e){for(var t=e;;){if("number"==typeof(t=t[m()]))return t
if("object"!==(void 0===t?"undefined":a(t)))throw new n("invalid huffman sequence")}}function b(e){for(var t=0;e>0;)t=t<<1|m(),e--
return t}function v(e){if(1===e)return 1===m()?1:-1
var t=b(e)
return t>=1<<e-1?t:t+(-1<<e)+1}function y(e,t){var r=p(e.huffmanTableDC),a=0===r?0:v(r)
e.blockData[t]=e.pred+=a
for(var i=1;i<64;){var n=p(e.huffmanTableAC),o=15&n,s=n>>4
if(0!==o){i+=s
var c=u[i]
e.blockData[t+c]=v(o),i++}else{if(s<15)break
i+=16}}}function w(e,t){var r=p(e.huffmanTableDC),a=0===r?0:v(r)<<g
e.blockData[t]=e.pred+=a}function k(e,t){e.blockData[t]|=m()<<g}function S(e,t){if(D>0)return void D--
for(var r=h,a=f;r<=a;){var i=p(e.huffmanTableAC),n=15&i,o=i>>4
if(0!==n){r+=o
var s=u[r]
e.blockData[t+s]=v(n)*(1<<g),r++}else{if(o<15){D=b(o)+(1<<o)-1
break}r+=16}}}function C(e,t){for(var r,a,i=h,o=f,s=0;i<=o;){var c=u[i]
switch(L){case 0:if(a=p(e.huffmanTableAC),r=15&a,s=a>>4,0===r)s<15?(D=b(s)+(1<<s),L=4):(s=16,L=1)
else{if(1!==r)throw new n("invalid ACn encoding")
x=v(r),L=s?2:3}continue
case 1:case 2:e.blockData[t+c]?e.blockData[t+c]+=m()<<g:0===--s&&(L=2===L?3:0)
break
case 3:e.blockData[t+c]?e.blockData[t+c]+=m()<<g:(e.blockData[t+c]=x<<g,L=0)
break
case 4:e.blockData[t+c]&&(e.blockData[t+c]+=m()<<g)}i++}4===L&&0===--D&&(L=0)}var x,A,P,I,_,O,T,E=o.mcusPerLine,R=o.progressive,F=t,B=0,M=0,D=0,L=0,N=s.length
T=R?0===h?0===d?w:k:0===d?S:C:y
var U,j,q=0
j=1===N?s[0].blocksPerLine*s[0].blocksPerColumn:E*o.mcusPerColumn
for(var z,H;q<j;){var W=c?Math.min(j-q,c):j
for(P=0;P<N;P++)s[P].pred=0
if(D=0,1===N)for(A=s[0],O=0;O<W;O++)!function(e,t,a){t(e,r(e,a/e.blocksPerLine|0,a%e.blocksPerLine))}(A,T,q),q++
else for(O=0;O<W;O++){for(P=0;P<N;P++)for(A=s[P],z=A.h,H=A.v,I=0;I<H;I++)for(_=0;_<z;_++)!function(e,t,a,i,n){var o=a/E|0,s=a%E
t(e,r(e,o*e.v+i,s*e.h+n))}(A,T,q,I,_)
q++}M=0,U=l(e,t),U&&U.invalid&&((0,i.warn)("decodeScan - unexpected MCU data, next marker is: "+U.invalid),t=U.offset)
var G=U&&U.marker
if(!G||G<=65280)throw new n("marker was not found")
if(!(G>=65488&&G<=65495))break
t+=2}return U=l(e,t),U&&U.invalid&&((0,i.warn)("decodeScan - unexpected Scan data, next marker is: "+U.invalid),t=U.offset),t-F}function s(e,t,r){var a,i,o,s,c,l,u,y,w,k,S,C,x,A,P,I,_,O=e.quantizationTable,T=e.blockData
if(!O)throw new n("missing required Quantization Table.")
for(var E=0;E<64;E+=8)w=T[t+E],k=T[t+E+1],S=T[t+E+2],C=T[t+E+3],x=T[t+E+4],A=T[t+E+5],P=T[t+E+6],I=T[t+E+7],w*=O[E],0!=(k|S|C|x|A|P|I)?(k*=O[E+1],S*=O[E+2],C*=O[E+3],x*=O[E+4],A*=O[E+5],P*=O[E+6],I*=O[E+7],a=b*w+128>>8,i=b*x+128>>8,o=S,s=P,c=v*(k-I)+128>>8,y=v*(k+I)+128>>8,l=C<<4,u=A<<4,a=a+i+1>>1,i=a-i,_=o*p+s*m+128>>8,o=o*m-s*p+128>>8,s=_,c=c+u+1>>1,u=c-u,y=y+l+1>>1,l=y-l,a=a+s+1>>1,s=a-s,i=i+o+1>>1,o=i-o,_=c*g+y*d+2048>>12,c=c*d-y*g+2048>>12,y=_,_=l*f+u*h+2048>>12,l=l*h-u*f+2048>>12,u=_,r[E]=a+y,r[E+7]=a-y,r[E+1]=i+u,r[E+6]=i-u,r[E+2]=o+l,r[E+5]=o-l,r[E+3]=s+c,r[E+4]=s-c):(_=b*w+512>>10,r[E]=_,r[E+1]=_,r[E+2]=_,r[E+3]=_,r[E+4]=_,r[E+5]=_,r[E+6]=_,r[E+7]=_)
for(var R=0;R<8;++R)w=r[R],k=r[R+8],S=r[R+16],C=r[R+24],x=r[R+32],A=r[R+40],P=r[R+48],I=r[R+56],0!=(k|S|C|x|A|P|I)?(a=b*w+2048>>12,i=b*x+2048>>12,o=S,s=P,c=v*(k-I)+2048>>12,y=v*(k+I)+2048>>12,l=C,u=A,a=4112+(a+i+1>>1),i=a-i,_=o*p+s*m+2048>>12,o=o*m-s*p+2048>>12,s=_,c=c+u+1>>1,u=c-u,y=y+l+1>>1,l=y-l,a=a+s+1>>1,s=a-s,i=i+o+1>>1,o=i-o,_=c*g+y*d+2048>>12,c=c*d-y*g+2048>>12,y=_,_=l*f+u*h+2048>>12,l=l*h-u*f+2048>>12,u=_,w=a+y,I=a-y,k=i+u,P=i-u,S=o+l,A=o-l,C=s+c,x=s-c,w=w<16?0:w>=4080?255:w>>4,k=k<16?0:k>=4080?255:k>>4,S=S<16?0:S>=4080?255:S>>4,C=C<16?0:C>=4080?255:C>>4,x=x<16?0:x>=4080?255:x>>4,A=A<16?0:A>=4080?255:A>>4,P=P<16?0:P>=4080?255:P>>4,I=I<16?0:I>=4080?255:I>>4,T[t+R]=w,T[t+R+8]=k,T[t+R+16]=S,T[t+R+24]=C,T[t+R+32]=x,T[t+R+40]=A,T[t+R+48]=P,T[t+R+56]=I):(_=b*w+8192>>14,_=_<-2040?0:_>=2024?255:_+2056>>4,T[t+R]=_,T[t+R+8]=_,T[t+R+16]=_,T[t+R+24]=_,T[t+R+32]=_,T[t+R+40]=_,T[t+R+48]=_,T[t+R+56]=_)}function c(e,t){for(var a=t.blocksPerLine,i=t.blocksPerColumn,n=new Int16Array(64),o=0;o<i;o++)for(var c=0;c<a;c++){var l=r(t,o,c)
s(t,l,n)}return t.blockData}function l(e,t,r){function a(t){return e[t]<<8|e[t+1]}var i=e.length-1,n=r<t?r:t
if(t>=i)return null
var o=a(t)
if(o>=65472&&o<=65534)return{invalid:null,marker:o,offset:t}
for(var s=a(n);!(s>=65472&&s<=65534);){if(++n>=i)return null
s=a(n)}return{invalid:o.toString(16),marker:s,offset:n}}var u=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),h=4017,f=799,d=3406,g=2276,m=1567,p=3784,b=5793,v=2896
return e.prototype={parse:function(e){function r(){var t=e[h]<<8|e[h+1]
return h+=2,t}var a,s,h=0,f=null,d=null,g=[],m=[],p=[],b=r()
if(65496!==b)throw new n("SOI not found")
for(b=r();65497!==b;){var v,y,w
switch(b){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var k=function(){var t=r(),a=h+t-2,n=l(e,a,h)
n&&n.invalid&&((0,i.warn)("readDataBlock - incorrect length, next marker is: "+n.invalid),a=n.offset)
var o=e.subarray(h,a)
return h+=o.length,o}()
65504===b&&74===k[0]&&70===k[1]&&73===k[2]&&70===k[3]&&0===k[4]&&(f={version:{major:k[5],minor:k[6]},densityUnits:k[7],xDensity:k[8]<<8|k[9],yDensity:k[10]<<8|k[11],thumbWidth:k[12],thumbHeight:k[13],thumbData:k.subarray(14,14+3*k[12]*k[13])}),65518===b&&65===k[0]&&100===k[1]&&111===k[2]&&98===k[3]&&101===k[4]&&(d={version:k[5]<<8|k[6],flags0:k[7]<<8|k[8],flags1:k[9]<<8|k[10],transformCode:k[11]})
break
case 65499:for(var S,C=r(),x=C+h-2;h<x;){var A=e[h++],P=new Uint16Array(64)
if(A>>4==0)for(y=0;y<64;y++)S=u[y],P[S]=e[h++]
else{if(A>>4!=1)throw new n("DQT - invalid table spec")
for(y=0;y<64;y++)S=u[y],P[S]=r()}g[15&A]=P}break
case 65472:case 65473:case 65474:if(a)throw new n("Only single frame JPEGs supported")
r(),a={},a.extended=65473===b,a.progressive=65474===b,a.precision=e[h++],a.scanLines=r(),a.samplesPerLine=r(),a.components=[],a.componentIds={}
var I,_=e[h++],O=0,T=0
for(v=0;v<_;v++){I=e[h]
var E=e[h+1]>>4,R=15&e[h+1]
O<E&&(O=E),T<R&&(T=R)
var F=e[h+2]
w=a.components.push({h:E,v:R,quantizationId:F,quantizationTable:null}),a.componentIds[I]=w-1,h+=3}a.maxH=O,a.maxV=T,function(e){for(var t=Math.ceil(e.samplesPerLine/8/e.maxH),r=Math.ceil(e.scanLines/8/e.maxV),a=0;a<e.components.length;a++){U=e.components[a]
var i=Math.ceil(Math.ceil(e.samplesPerLine/8)*U.h/e.maxH),n=Math.ceil(Math.ceil(e.scanLines/8)*U.v/e.maxV),o=t*U.h,s=r*U.v,c=64*s*(o+1)
U.blockData=new Int16Array(c),U.blocksPerLine=i,U.blocksPerColumn=n}e.mcusPerLine=t,e.mcusPerColumn=r}(a)
break
case 65476:var B=r()
for(v=2;v<B;){var M=e[h++],D=new Uint8Array(16),L=0
for(y=0;y<16;y++,h++)L+=D[y]=e[h]
var N=new Uint8Array(L)
for(y=0;y<L;y++,h++)N[y]=e[h]
v+=17+L,(M>>4==0?p:m)[15&M]=t(D,N)}break
case 65501:r(),s=r()
break
case 65498:r()
var U,j=e[h++],q=[]
for(v=0;v<j;v++){var z=a.componentIds[e[h++]]
U=a.components[z]
var H=e[h++]
U.huffmanTableDC=p[H>>4],U.huffmanTableAC=m[15&H],q.push(U)}var W=e[h++],G=e[h++],X=e[h++],V=o(e,h,a,q,s,W,G,X>>4,15&X)
h+=V
break
case 65535:255!==e[h]&&h--
break
default:if(255===e[h-3]&&e[h-2]>=192&&e[h-2]<=254){h-=3
break}throw new n("unknown marker "+b.toString(16))}b=r()}for(this.width=a.samplesPerLine,this.height=a.scanLines,this.jfif=f,this.adobe=d,this.components=[],v=0;v<a.components.length;v++){U=a.components[v]
var Y=g[U.quantizationId]
Y&&(U.quantizationTable=Y),this.components.push({output:c(a,U),scaleX:U.h/a.maxH,scaleY:U.v/a.maxV,blocksPerLine:U.blocksPerLine,blocksPerColumn:U.blocksPerColumn})}this.numComponents=this.components.length},_getLinearizedBlockData:function(e,t){var r,a,i,n,o,s,c,l,u,h,f,d=this.width/e,g=this.height/t,m=0,p=this.components.length,b=e*t*p,v=new Uint8ClampedArray(b),y=new Uint32Array(e)
for(c=0;c<p;c++){for(r=this.components[c],a=r.scaleX*d,i=r.scaleY*g,m=c,f=r.output,n=r.blocksPerLine+1<<3,o=0;o<e;o++)l=0|o*a,y[o]=(4294967288&l)<<3|7&l
for(s=0;s<t;s++)for(l=0|s*i,h=n*(4294967288&l)|(7&l)<<3,o=0;o<e;o++)v[m]=f[h+y[o]],m+=p}var w=this.decodeTransform
if(w)for(c=0;c<b;)for(l=0,u=0;l<p;l++,c++,u+=2)v[c]=(v[c]*w[u]>>8)+w[u+1]
return v},_isColorConversionNeeded:function(){return this.adobe?!!this.adobe.transformCode:3===this.numComponents?0!==this.colorTransform:1===this.colorTransform},_convertYccToRgb:function(e){for(var t,r,a,i=0,n=e.length;i<n;i+=3)t=e[i],r=e[i+1],a=e[i+2],e[i]=t-179.456+1.402*a,e[i+1]=t+135.459-.344*r-.714*a,e[i+2]=t-226.816+1.772*r
return e},_convertYcckToRgb:function(e){for(var t,r,a,i,n=0,o=0,s=e.length;o<s;o+=4)t=e[o],r=e[o+1],a=e[o+2],i=e[o+3],e[n++]=r*(-660635669420364e-19*r+.000437130475926232*a-54080610064599e-18*t+.00048449797120281*i-.154362151871126)-122.67195406894+a*(-.000957964378445773*a+.000817076911346625*t-.00477271405408747*i+1.53380253221734)+t*(.000961250184130688*t-.00266257332283933*i+.48357088451265)+i*(-.000336197177618394*i+.484791561490776),e[n++]=107.268039397724+r*(219927104525741e-19*r-.000640992018297945*a+.000659397001245577*t+.000426105652938837*i-.176491792462875)+a*(-.000778269941513683*a+.00130872261408275*t+.000770482631801132*i-.151051492775562)+t*(.00126935368114843*t-.00265090189010898*i+.25802910206845)+i*(-.000318913117588328*i-.213742400323665),e[n++]=r*(-.000570115196973677*r-263409051004589e-19*a+.0020741088115012*t-.00288260236853442*i+.814272968359295)-20.810012546947+a*(-153496057440975e-19*a-.000132689043961446*t+.000560833691242812*i-.195152027534049)+t*(.00174418132927582*t-.00255243321439347*i+.116935020465145)+i*(-.000343531996510555*i+.24165260232407)
return e},_convertYcckToCmyk:function(e){for(var t,r,a,i=0,n=e.length;i<n;i+=4)t=e[i],r=e[i+1],a=e[i+2],e[i]=434.456-t-1.402*a,e[i+1]=119.541-t+.344*r+.714*a,e[i+2]=481.816-t-1.772*r
return e},_convertCmykToRgb:function(e){for(var t,r,a,i,n=0,o=0,s=e.length;o<s;o+=4)t=e[o]*(1/255),r=e[o+1]*(1/255),a=e[o+2]*(1/255),i=e[o+3]*(1/255),e[n++]=255+t*(-4.387332384609988*t+54.48615194189176*r+18.82290502165302*a+212.25662451639585*i-285.2331026137004)+r*(1.7149763477362134*r-5.6096736904047315*a-17.873870861415444*i-5.497006427196366)+a*(-2.5217340131683033*a-21.248923337353073*i+17.5119270841813)-i*(21.86122147463605*i+189.48180835922747),e[n++]=255+t*(8.841041422036149*t+60.118027045597366*r+6.871425592049007*a+31.159100130055922*i-79.2970844816548)+r*(-15.310361306967817*r+17.575251261109482*a+131.35250912493976*i-190.9453302588951)+a*(4.444339102852739*a+9.8632861493405*i-24.86741582555878)-i*(20.737325471181034*i+187.80453709719578),e[n++]=255+t*(.8842522430003296*t+8.078677503112928*r+30.89978309703729*a-.23883238689178934*i-14.183576799673286)+r*(10.49593273432072*r+63.02378494754052*a+50.606957656360734*i-112.23884253719248)+a*(.03296041114873217*a+115.60384449646641*i-193.58209356861505)-i*(22.33816807309886*i+180.12613974708367)
return e},getData:function(e,t,r){if(this.numComponents>4)throw new n("Unsupported color mode")
var a=this._getLinearizedBlockData(e,t)
if(1===this.numComponents&&r){for(var i=a.length,o=new Uint8ClampedArray(3*i),s=0,c=0;c<i;c++){var l=a[c]
o[s++]=l,o[s++]=l,o[s++]=l}return o}if(3===this.numComponents&&this._isColorConversionNeeded())return this._convertYccToRgb(a)
if(4===this.numComponents){if(this._isColorConversionNeeded())return r?this._convertYcckToRgb(a):this._convertYcckToCmyk(a)
if(r)return this._convertCmykToRgb(a)}return a}},e}()
t.JpegImage=o},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getMetrics=void 0
var a=r(0),i=(0,a.getLookupTableFactory)(function(e){e.Courier=600,e["Courier-Bold"]=600,e["Courier-BoldOblique"]=600,e["Courier-Oblique"]=600,e.Helvetica=(0,a.getLookupTableFactory)(function(e){e.space=278,e.exclam=278,e.quotedbl=355,e.numbersign=556,e.dollar=556,e.percent=889,e.ampersand=667,e.quoteright=222,e.parenleft=333,e.parenright=333,e.asterisk=389,e.plus=584,e.comma=278,e.hyphen=333,e.period=278,e.slash=278,e.zero=556,e.one=556,e.two=556,e.three=556,e.four=556,e.five=556,e.six=556,e.seven=556,e.eight=556,e.nine=556,e.colon=278,e.semicolon=278,e.less=584,e.equal=584,e.greater=584,e.question=556,e.at=1015,e.A=667,e.B=667,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=722,e.I=278,e.J=500,e.K=667,e.L=556,e.M=833,e.N=722,e.O=778,e.P=667,e.Q=778,e.R=722,e.S=667,e.T=611,e.U=722,e.V=667,e.W=944,e.X=667,e.Y=667,e.Z=611,e.bracketleft=278,e.backslash=278,e.bracketright=278,e.asciicircum=469,e.underscore=556,e.quoteleft=222,e.a=556,e.b=556,e.c=500,e.d=556,e.e=556,e.f=278,e.g=556,e.h=556,e.i=222,e.j=222,e.k=500,e.l=222,e.m=833,e.n=556,e.o=556,e.p=556,e.q=556,e.r=333,e.s=500,e.t=278,e.u=556,e.v=500,e.w=722,e.x=500,e.y=500,e.z=500,e.braceleft=334,e.bar=260,e.braceright=334,e.asciitilde=584,e.exclamdown=333,e.cent=556,e.sterling=556,e.fraction=167,e.yen=556,e.florin=556,e.section=556,e.currency=556,e.quotesingle=191,e.quotedblleft=333,e.guillemotleft=556,e.guilsinglleft=333,e.guilsinglright=333,e.fi=500,e.fl=500,e.endash=556,e.dagger=556,e.daggerdbl=556,e.periodcentered=278,e.paragraph=537,e.bullet=350,e.quotesinglbase=222,e.quotedblbase=333,e.quotedblright=333,e.guillemotright=556,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=611,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=370,e.Lslash=556,e.Oslash=778,e.OE=1e3,e.ordmasculine=365,e.ae=889,e.dotlessi=278,e.lslash=222,e.oslash=611,e.oe=944,e.germandbls=611,e.Idieresis=278,e.eacute=556,e.abreve=556,e.uhungarumlaut=556,e.ecaron=556,e.Ydieresis=667,e.divide=584,e.Yacute=667,e.Acircumflex=667,e.aacute=556,e.Ucircumflex=722,e.yacute=500,e.scommaaccent=500,e.ecircumflex=556,e.Uring=722,e.Udieresis=722,e.aogonek=556,e.Uacute=722,e.uogonek=556,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=737,e.Emacron=667,e.ccaron=500,e.aring=556,e.Ncommaaccent=722,e.lacute=222,e.agrave=556,e.Tcommaaccent=611,e.Cacute=722,e.atilde=556,e.Edotaccent=667,e.scaron=500,e.scedilla=500,e.iacute=278,e.lozenge=471,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=556,e.acircumflex=556,e.Amacron=667,e.rcaron=333,e.ccedilla=500,e.Zdotaccent=611,e.Thorn=667,e.Omacron=778,e.Racute=722,e.Sacute=667,e.dcaron=643,e.Umacron=722
e.uring=556,e.threesuperior=333,e.Ograve=778,e.Agrave=667,e.Abreve=667,e.multiply=584,e.uacute=556,e.Tcaron=611,e.partialdiff=476,e.ydieresis=500,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=556,e.edieresis=556,e.cacute=500,e.nacute=556,e.umacron=556,e.Ncaron=722,e.Iacute=278,e.plusminus=584,e.brokenbar=260,e.registered=737,e.Gbreve=778,e.Idotaccent=278,e.summation=600,e.Egrave=667,e.racute=333,e.omacron=556,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=222,e.tcaron=317,e.eogonek=556,e.Uogonek=722,e.Aacute=667,e.Adieresis=667,e.egrave=556,e.zacute=500,e.iogonek=222,e.Oacute=778,e.oacute=556,e.amacron=556,e.sacute=500,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=556,e.twosuperior=333,e.Odieresis=778,e.mu=556,e.igrave=278,e.ohungarumlaut=556,e.Eogonek=667,e.dcroat=556,e.threequarters=834,e.Scedilla=667,e.lcaron=299,e.Kcommaaccent=667,e.Lacute=556,e.trademark=1e3,e.edotaccent=556,e.Igrave=278,e.Imacron=278,e.Lcaron=556,e.onehalf=834,e.lessequal=549,e.ocircumflex=556,e.ntilde=556,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=556,e.gbreve=556,e.onequarter=834,e.Scaron=667,e.Scommaaccent=667,e.Ohungarumlaut=778,e.degree=400,e.ograve=556,e.Ccaron=722,e.ugrave=556,e.radical=453,e.Dcaron=722,e.rcommaaccent=333,e.Ntilde=722,e.otilde=556,e.Rcommaaccent=722,e.Lcommaaccent=556,e.Atilde=667,e.Aogonek=667,e.Aring=667,e.Otilde=778,e.zdotaccent=500,e.Ecaron=667,e.Iogonek=278,e.kcommaaccent=500,e.minus=584,e.Icircumflex=278,e.ncaron=556,e.tcommaaccent=278,e.logicalnot=584,e.odieresis=556,e.udieresis=556,e.notequal=549,e.gcommaaccent=556,e.eth=556,e.zcaron=500,e.ncommaaccent=556,e.onesuperior=333,e.imacron=278,e.Euro=556}),e["Helvetica-Bold"]=(0,a.getLookupTableFactory)(function(e){e.space=278,e.exclam=333,e.quotedbl=474,e.numbersign=556,e.dollar=556,e.percent=889,e.ampersand=722,e.quoteright=278,e.parenleft=333,e.parenright=333,e.asterisk=389,e.plus=584,e.comma=278,e.hyphen=333,e.period=278,e.slash=278,e.zero=556,e.one=556,e.two=556,e.three=556,e.four=556,e.five=556,e.six=556,e.seven=556,e.eight=556,e.nine=556,e.colon=333,e.semicolon=333,e.less=584,e.equal=584,e.greater=584,e.question=611,e.at=975,e.A=722,e.B=722,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=722,e.I=278,e.J=556,e.K=722,e.L=611,e.M=833,e.N=722,e.O=778,e.P=667,e.Q=778,e.R=722,e.S=667,e.T=611,e.U=722,e.V=667,e.W=944,e.X=667,e.Y=667,e.Z=611,e.bracketleft=333,e.backslash=278,e.bracketright=333,e.asciicircum=584,e.underscore=556,e.quoteleft=278,e.a=556,e.b=611,e.c=556,e.d=611,e.e=556,e.f=333,e.g=611,e.h=611,e.i=278,e.j=278,e.k=556,e.l=278,e.m=889,e.n=611,e.o=611,e.p=611,e.q=611,e.r=389,e.s=556,e.t=333,e.u=611,e.v=556,e.w=778,e.x=556,e.y=556,e.z=500,e.braceleft=389,e.bar=280,e.braceright=389,e.asciitilde=584,e.exclamdown=333,e.cent=556,e.sterling=556,e.fraction=167,e.yen=556,e.florin=556,e.section=556,e.currency=556,e.quotesingle=238,e.quotedblleft=500,e.guillemotleft=556,e.guilsinglleft=333,e.guilsinglright=333,e.fi=611,e.fl=611,e.endash=556,e.dagger=556,e.daggerdbl=556,e.periodcentered=278,e.paragraph=556,e.bullet=350,e.quotesinglbase=278,e.quotedblbase=500,e.quotedblright=500,e.guillemotright=556,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=611,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=370,e.Lslash=611,e.Oslash=778,e.OE=1e3,e.ordmasculine=365,e.ae=889,e.dotlessi=278,e.lslash=278,e.oslash=611,e.oe=944,e.germandbls=611,e.Idieresis=278,e.eacute=556,e.abreve=556,e.uhungarumlaut=611,e.ecaron=556,e.Ydieresis=667,e.divide=584,e.Yacute=667,e.Acircumflex=722,e.aacute=556,e.Ucircumflex=722,e.yacute=556,e.scommaaccent=556,e.ecircumflex=556,e.Uring=722,e.Udieresis=722,e.aogonek=556,e.Uacute=722,e.uogonek=611,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=737,e.Emacron=667,e.ccaron=556,e.aring=556,e.Ncommaaccent=722,e.lacute=278,e.agrave=556,e.Tcommaaccent=611,e.Cacute=722,e.atilde=556,e.Edotaccent=667,e.scaron=556,e.scedilla=556,e.iacute=278,e.lozenge=494,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=611,e.acircumflex=556,e.Amacron=722,e.rcaron=389,e.ccedilla=556,e.Zdotaccent=611,e.Thorn=667,e.Omacron=778,e.Racute=722,e.Sacute=667,e.dcaron=743,e.Umacron=722
e.uring=611,e.threesuperior=333,e.Ograve=778,e.Agrave=722,e.Abreve=722,e.multiply=584,e.uacute=611,e.Tcaron=611,e.partialdiff=494,e.ydieresis=556,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=556,e.edieresis=556,e.cacute=556,e.nacute=611,e.umacron=611,e.Ncaron=722,e.Iacute=278,e.plusminus=584,e.brokenbar=280,e.registered=737,e.Gbreve=778,e.Idotaccent=278,e.summation=600,e.Egrave=667,e.racute=389,e.omacron=611,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=278,e.tcaron=389,e.eogonek=556,e.Uogonek=722,e.Aacute=722,e.Adieresis=722,e.egrave=556,e.zacute=500,e.iogonek=278,e.Oacute=778,e.oacute=611,e.amacron=556,e.sacute=556,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=611,e.twosuperior=333,e.Odieresis=778,e.mu=611,e.igrave=278,e.ohungarumlaut=611,e.Eogonek=667,e.dcroat=611,e.threequarters=834,e.Scedilla=667,e.lcaron=400,e.Kcommaaccent=722,e.Lacute=611,e.trademark=1e3,e.edotaccent=556,e.Igrave=278,e.Imacron=278,e.Lcaron=611,e.onehalf=834,e.lessequal=549,e.ocircumflex=611,e.ntilde=611,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=556,e.gbreve=611,e.onequarter=834,e.Scaron=667,e.Scommaaccent=667,e.Ohungarumlaut=778,e.degree=400,e.ograve=611,e.Ccaron=722,e.ugrave=611,e.radical=549,e.Dcaron=722,e.rcommaaccent=389,e.Ntilde=722,e.otilde=611,e.Rcommaaccent=722,e.Lcommaaccent=611,e.Atilde=722,e.Aogonek=722,e.Aring=722,e.Otilde=778,e.zdotaccent=500,e.Ecaron=667,e.Iogonek=278,e.kcommaaccent=556,e.minus=584,e.Icircumflex=278,e.ncaron=611,e.tcommaaccent=333,e.logicalnot=584,e.odieresis=611,e.udieresis=611,e.notequal=549,e.gcommaaccent=611,e.eth=611,e.zcaron=500,e.ncommaaccent=611,e.onesuperior=333,e.imacron=278,e.Euro=556}),e["Helvetica-BoldOblique"]=(0,a.getLookupTableFactory)(function(e){e.space=278,e.exclam=333,e.quotedbl=474,e.numbersign=556,e.dollar=556,e.percent=889,e.ampersand=722,e.quoteright=278,e.parenleft=333,e.parenright=333,e.asterisk=389,e.plus=584,e.comma=278,e.hyphen=333,e.period=278,e.slash=278,e.zero=556,e.one=556,e.two=556,e.three=556,e.four=556,e.five=556,e.six=556,e.seven=556,e.eight=556,e.nine=556,e.colon=333,e.semicolon=333,e.less=584,e.equal=584,e.greater=584,e.question=611,e.at=975,e.A=722,e.B=722,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=722,e.I=278,e.J=556,e.K=722,e.L=611,e.M=833,e.N=722,e.O=778,e.P=667,e.Q=778,e.R=722,e.S=667,e.T=611,e.U=722,e.V=667,e.W=944,e.X=667,e.Y=667,e.Z=611,e.bracketleft=333,e.backslash=278,e.bracketright=333,e.asciicircum=584,e.underscore=556,e.quoteleft=278,e.a=556,e.b=611,e.c=556,e.d=611,e.e=556,e.f=333,e.g=611,e.h=611,e.i=278,e.j=278,e.k=556,e.l=278,e.m=889,e.n=611,e.o=611,e.p=611,e.q=611,e.r=389,e.s=556,e.t=333,e.u=611,e.v=556,e.w=778,e.x=556,e.y=556,e.z=500,e.braceleft=389,e.bar=280,e.braceright=389,e.asciitilde=584,e.exclamdown=333,e.cent=556,e.sterling=556,e.fraction=167,e.yen=556,e.florin=556,e.section=556,e.currency=556,e.quotesingle=238,e.quotedblleft=500,e.guillemotleft=556,e.guilsinglleft=333,e.guilsinglright=333,e.fi=611,e.fl=611,e.endash=556,e.dagger=556,e.daggerdbl=556,e.periodcentered=278,e.paragraph=556,e.bullet=350,e.quotesinglbase=278,e.quotedblbase=500,e.quotedblright=500,e.guillemotright=556,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=611,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=370,e.Lslash=611,e.Oslash=778,e.OE=1e3,e.ordmasculine=365,e.ae=889,e.dotlessi=278,e.lslash=278,e.oslash=611,e.oe=944,e.germandbls=611,e.Idieresis=278,e.eacute=556,e.abreve=556,e.uhungarumlaut=611,e.ecaron=556,e.Ydieresis=667,e.divide=584,e.Yacute=667,e.Acircumflex=722,e.aacute=556,e.Ucircumflex=722,e.yacute=556,e.scommaaccent=556,e.ecircumflex=556,e.Uring=722,e.Udieresis=722,e.aogonek=556,e.Uacute=722,e.uogonek=611,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=737,e.Emacron=667,e.ccaron=556,e.aring=556,e.Ncommaaccent=722,e.lacute=278,e.agrave=556,e.Tcommaaccent=611,e.Cacute=722,e.atilde=556,e.Edotaccent=667,e.scaron=556,e.scedilla=556,e.iacute=278,e.lozenge=494,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=611,e.acircumflex=556,e.Amacron=722,e.rcaron=389,e.ccedilla=556,e.Zdotaccent=611,e.Thorn=667,e.Omacron=778,e.Racute=722,e.Sacute=667,e.dcaron=743,e.Umacron=722
e.uring=611,e.threesuperior=333,e.Ograve=778,e.Agrave=722,e.Abreve=722,e.multiply=584,e.uacute=611,e.Tcaron=611,e.partialdiff=494,e.ydieresis=556,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=556,e.edieresis=556,e.cacute=556,e.nacute=611,e.umacron=611,e.Ncaron=722,e.Iacute=278,e.plusminus=584,e.brokenbar=280,e.registered=737,e.Gbreve=778,e.Idotaccent=278,e.summation=600,e.Egrave=667,e.racute=389,e.omacron=611,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=278,e.tcaron=389,e.eogonek=556,e.Uogonek=722,e.Aacute=722,e.Adieresis=722,e.egrave=556,e.zacute=500,e.iogonek=278,e.Oacute=778,e.oacute=611,e.amacron=556,e.sacute=556,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=611,e.twosuperior=333,e.Odieresis=778,e.mu=611,e.igrave=278,e.ohungarumlaut=611,e.Eogonek=667,e.dcroat=611,e.threequarters=834,e.Scedilla=667,e.lcaron=400,e.Kcommaaccent=722,e.Lacute=611,e.trademark=1e3,e.edotaccent=556,e.Igrave=278,e.Imacron=278,e.Lcaron=611,e.onehalf=834,e.lessequal=549,e.ocircumflex=611,e.ntilde=611,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=556,e.gbreve=611,e.onequarter=834,e.Scaron=667,e.Scommaaccent=667,e.Ohungarumlaut=778,e.degree=400,e.ograve=611,e.Ccaron=722,e.ugrave=611,e.radical=549,e.Dcaron=722,e.rcommaaccent=389,e.Ntilde=722,e.otilde=611,e.Rcommaaccent=722,e.Lcommaaccent=611,e.Atilde=722,e.Aogonek=722,e.Aring=722,e.Otilde=778,e.zdotaccent=500,e.Ecaron=667,e.Iogonek=278,e.kcommaaccent=556,e.minus=584,e.Icircumflex=278,e.ncaron=611,e.tcommaaccent=333,e.logicalnot=584,e.odieresis=611,e.udieresis=611,e.notequal=549,e.gcommaaccent=611,e.eth=611,e.zcaron=500,e.ncommaaccent=611,e.onesuperior=333,e.imacron=278,e.Euro=556}),e["Helvetica-Oblique"]=(0,a.getLookupTableFactory)(function(e){e.space=278,e.exclam=278,e.quotedbl=355,e.numbersign=556,e.dollar=556,e.percent=889,e.ampersand=667,e.quoteright=222,e.parenleft=333,e.parenright=333,e.asterisk=389,e.plus=584,e.comma=278,e.hyphen=333,e.period=278,e.slash=278,e.zero=556,e.one=556,e.two=556,e.three=556,e.four=556,e.five=556,e.six=556,e.seven=556,e.eight=556,e.nine=556,e.colon=278,e.semicolon=278,e.less=584,e.equal=584,e.greater=584,e.question=556,e.at=1015,e.A=667,e.B=667,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=722,e.I=278,e.J=500,e.K=667,e.L=556,e.M=833,e.N=722,e.O=778,e.P=667,e.Q=778,e.R=722,e.S=667,e.T=611,e.U=722,e.V=667,e.W=944,e.X=667,e.Y=667,e.Z=611,e.bracketleft=278,e.backslash=278,e.bracketright=278,e.asciicircum=469,e.underscore=556,e.quoteleft=222,e.a=556,e.b=556,e.c=500,e.d=556,e.e=556,e.f=278,e.g=556,e.h=556,e.i=222,e.j=222,e.k=500,e.l=222,e.m=833,e.n=556,e.o=556,e.p=556,e.q=556,e.r=333,e.s=500,e.t=278,e.u=556,e.v=500,e.w=722,e.x=500,e.y=500,e.z=500,e.braceleft=334,e.bar=260,e.braceright=334,e.asciitilde=584,e.exclamdown=333,e.cent=556,e.sterling=556,e.fraction=167,e.yen=556,e.florin=556,e.section=556,e.currency=556,e.quotesingle=191,e.quotedblleft=333,e.guillemotleft=556,e.guilsinglleft=333,e.guilsinglright=333,e.fi=500,e.fl=500,e.endash=556,e.dagger=556,e.daggerdbl=556,e.periodcentered=278,e.paragraph=537,e.bullet=350,e.quotesinglbase=222,e.quotedblbase=333,e.quotedblright=333,e.guillemotright=556,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=611,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=370,e.Lslash=556,e.Oslash=778,e.OE=1e3,e.ordmasculine=365,e.ae=889,e.dotlessi=278,e.lslash=222,e.oslash=611,e.oe=944,e.germandbls=611,e.Idieresis=278,e.eacute=556,e.abreve=556,e.uhungarumlaut=556,e.ecaron=556,e.Ydieresis=667,e.divide=584,e.Yacute=667,e.Acircumflex=667,e.aacute=556,e.Ucircumflex=722,e.yacute=500,e.scommaaccent=500,e.ecircumflex=556,e.Uring=722,e.Udieresis=722,e.aogonek=556,e.Uacute=722,e.uogonek=556,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=737,e.Emacron=667,e.ccaron=500,e.aring=556,e.Ncommaaccent=722,e.lacute=222,e.agrave=556,e.Tcommaaccent=611,e.Cacute=722,e.atilde=556,e.Edotaccent=667,e.scaron=500,e.scedilla=500,e.iacute=278,e.lozenge=471,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=556,e.acircumflex=556,e.Amacron=667,e.rcaron=333,e.ccedilla=500,e.Zdotaccent=611,e.Thorn=667,e.Omacron=778,e.Racute=722,e.Sacute=667,e.dcaron=643,e.Umacron=722
e.uring=556,e.threesuperior=333,e.Ograve=778,e.Agrave=667,e.Abreve=667,e.multiply=584,e.uacute=556,e.Tcaron=611,e.partialdiff=476,e.ydieresis=500,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=556,e.edieresis=556,e.cacute=500,e.nacute=556,e.umacron=556,e.Ncaron=722,e.Iacute=278,e.plusminus=584,e.brokenbar=260,e.registered=737,e.Gbreve=778,e.Idotaccent=278,e.summation=600,e.Egrave=667,e.racute=333,e.omacron=556,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=222,e.tcaron=317,e.eogonek=556,e.Uogonek=722,e.Aacute=667,e.Adieresis=667,e.egrave=556,e.zacute=500,e.iogonek=222,e.Oacute=778,e.oacute=556,e.amacron=556,e.sacute=500,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=556,e.twosuperior=333,e.Odieresis=778,e.mu=556,e.igrave=278,e.ohungarumlaut=556,e.Eogonek=667,e.dcroat=556,e.threequarters=834,e.Scedilla=667,e.lcaron=299,e.Kcommaaccent=667,e.Lacute=556,e.trademark=1e3,e.edotaccent=556,e.Igrave=278,e.Imacron=278,e.Lcaron=556,e.onehalf=834,e.lessequal=549,e.ocircumflex=556,e.ntilde=556,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=556,e.gbreve=556,e.onequarter=834,e.Scaron=667,e.Scommaaccent=667,e.Ohungarumlaut=778,e.degree=400,e.ograve=556,e.Ccaron=722,e.ugrave=556,e.radical=453,e.Dcaron=722,e.rcommaaccent=333,e.Ntilde=722,e.otilde=556,e.Rcommaaccent=722,e.Lcommaaccent=556,e.Atilde=667,e.Aogonek=667,e.Aring=667,e.Otilde=778,e.zdotaccent=500,e.Ecaron=667,e.Iogonek=278,e.kcommaaccent=500,e.minus=584,e.Icircumflex=278,e.ncaron=556,e.tcommaaccent=278,e.logicalnot=584,e.odieresis=556,e.udieresis=556,e.notequal=549,e.gcommaaccent=556,e.eth=556,e.zcaron=500,e.ncommaaccent=556,e.onesuperior=333,e.imacron=278,e.Euro=556}),e.Symbol=(0,a.getLookupTableFactory)(function(e){e.space=250,e.exclam=333,e.universal=713,e.numbersign=500,e.existential=549,e.percent=833,e.ampersand=778,e.suchthat=439,e.parenleft=333,e.parenright=333,e.asteriskmath=500,e.plus=549,e.comma=250,e.minus=549,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=278,e.semicolon=278,e.less=549,e.equal=549,e.greater=549,e.question=444,e.congruent=549,e.Alpha=722,e.Beta=667,e.Chi=722,e.Delta=612,e.Epsilon=611,e.Phi=763,e.Gamma=603,e.Eta=722,e.Iota=333,e.theta1=631,e.Kappa=722,e.Lambda=686,e.Mu=889,e.Nu=722,e.Omicron=722,e.Pi=768,e.Theta=741,e.Rho=556,e.Sigma=592,e.Tau=611,e.Upsilon=690,e.sigma1=439,e.Omega=768,e.Xi=645,e.Psi=795,e.Zeta=611,e.bracketleft=333,e.therefore=863,e.bracketright=333,e.perpendicular=658,e.underscore=500,e.radicalex=500,e.alpha=631,e.beta=549,e.chi=549,e.delta=494,e.epsilon=439,e.phi=521,e.gamma=411,e.eta=603,e.iota=329,e.phi1=603,e.kappa=549,e.lambda=549,e.mu=576,e.nu=521,e.omicron=549,e.pi=549,e.theta=521,e.rho=549,e.sigma=603,e.tau=439,e.upsilon=576,e.omega1=713,e.omega=686,e.xi=493,e.psi=686,e.zeta=494,e.braceleft=480,e.bar=200,e.braceright=480,e.similar=549,e.Euro=750,e.Upsilon1=620,e.minute=247,e.lessequal=549,e.fraction=167,e.infinity=713,e.florin=500,e.club=753,e.diamond=753,e.heart=753,e.spade=753,e.arrowboth=1042,e.arrowleft=987,e.arrowup=603,e.arrowright=987,e.arrowdown=603,e.degree=400,e.plusminus=549,e.second=411,e.greaterequal=549,e.multiply=549,e.proportional=713,e.partialdiff=494,e.bullet=460,e.divide=549,e.notequal=549,e.equivalence=549,e.approxequal=549,e.ellipsis=1e3,e.arrowvertex=603,e.arrowhorizex=1e3,e.carriagereturn=658,e.aleph=823,e.Ifraktur=686,e.Rfraktur=795,e.weierstrass=987,e.circlemultiply=768,e.circleplus=768,e.emptyset=823,e.intersection=768,e.union=768,e.propersuperset=713,e.reflexsuperset=713,e.notsubset=713,e.propersubset=713,e.reflexsubset=713,e.element=713,e.notelement=713,e.angle=768,e.gradient=713,e.registerserif=790,e.copyrightserif=790,e.trademarkserif=890,e.product=823,e.radical=549,e.dotmath=250,e.logicalnot=713,e.logicaland=603,e.logicalor=603,e.arrowdblboth=1042,e.arrowdblleft=987,e.arrowdblup=603,e.arrowdblright=987,e.arrowdbldown=603,e.lozenge=494,e.angleleft=329,e.registersans=790,e.copyrightsans=790,e.trademarksans=786,e.summation=713,e.parenlefttp=384,e.parenleftex=384,e.parenleftbt=384,e.bracketlefttp=384,e.bracketleftex=384,e.bracketleftbt=384,e.bracelefttp=494,e.braceleftmid=494,e.braceleftbt=494,e.braceex=494,e.angleright=329,e.integral=274,e.integraltp=686,e.integralex=686,e.integralbt=686,e.parenrighttp=384,e.parenrightex=384,e.parenrightbt=384,e.bracketrighttp=384,e.bracketrightex=384,e.bracketrightbt=384,e.bracerighttp=494,e.bracerightmid=494,e.bracerightbt=494,e.apple=790}),e["Times-Roman"]=(0,a.getLookupTableFactory)(function(e){e.space=250,e.exclam=333,e.quotedbl=408,e.numbersign=500,e.dollar=500,e.percent=833,e.ampersand=778,e.quoteright=333,e.parenleft=333,e.parenright=333,e.asterisk=500,e.plus=564,e.comma=250,e.hyphen=333,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=278,e.semicolon=278,e.less=564,e.equal=564,e.greater=564,e.question=444,e.at=921,e.A=722,e.B=667,e.C=667,e.D=722,e.E=611,e.F=556,e.G=722,e.H=722,e.I=333,e.J=389,e.K=722,e.L=611,e.M=889,e.N=722,e.O=722,e.P=556,e.Q=722,e.R=667,e.S=556,e.T=611,e.U=722,e.V=722,e.W=944,e.X=722,e.Y=722,e.Z=611,e.bracketleft=333,e.backslash=278,e.bracketright=333,e.asciicircum=469,e.underscore=500,e.quoteleft=333,e.a=444,e.b=500,e.c=444,e.d=500,e.e=444,e.f=333,e.g=500,e.h=500,e.i=278,e.j=278,e.k=500,e.l=278,e.m=778,e.n=500,e.o=500,e.p=500,e.q=500,e.r=333,e.s=389,e.t=278,e.u=500,e.v=500,e.w=722,e.x=500,e.y=500,e.z=444,e.braceleft=480,e.bar=200,e.braceright=480,e.asciitilde=541,e.exclamdown=333,e.cent=500,e.sterling=500,e.fraction=167,e.yen=500,e.florin=500,e.section=500,e.currency=500,e.quotesingle=180,e.quotedblleft=444,e.guillemotleft=500,e.guilsinglleft=333,e.guilsinglright=333,e.fi=556,e.fl=556,e.endash=500,e.dagger=500,e.daggerdbl=500,e.periodcentered=250,e.paragraph=453,e.bullet=350,e.quotesinglbase=333,e.quotedblbase=444,e.quotedblright=444,e.guillemotright=500,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=444,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=889,e.ordfeminine=276,e.Lslash=611,e.Oslash=722,e.OE=889,e.ordmasculine=310,e.ae=667,e.dotlessi=278,e.lslash=278,e.oslash=500,e.oe=722,e.germandbls=500,e.Idieresis=333,e.eacute=444,e.abreve=444,e.uhungarumlaut=500,e.ecaron=444,e.Ydieresis=722,e.divide=564,e.Yacute=722,e.Acircumflex=722,e.aacute=444,e.Ucircumflex=722,e.yacute=500,e.scommaaccent=389,e.ecircumflex=444,e.Uring=722,e.Udieresis=722,e.aogonek=444,e.Uacute=722,e.uogonek=500,e.Edieresis=611,e.Dcroat=722,e.commaaccent=250,e.copyright=760,e.Emacron=611,e.ccaron=444,e.aring=444,e.Ncommaaccent=722,e.lacute=278,e.agrave=444,e.Tcommaaccent=611,e.Cacute=667,e.atilde=444,e.Edotaccent=611,e.scaron=389,e.scedilla=389,e.iacute=278,e.lozenge=471,e.Rcaron=667,e.Gcommaaccent=722,e.ucircumflex=500,e.acircumflex=444,e.Amacron=722,e.rcaron=333,e.ccedilla=444,e.Zdotaccent=611,e.Thorn=556,e.Omacron=722,e.Racute=667,e.Sacute=556,e.dcaron=588,e.Umacron=722
e.uring=500,e.threesuperior=300,e.Ograve=722,e.Agrave=722,e.Abreve=722,e.multiply=564,e.uacute=500,e.Tcaron=611,e.partialdiff=476,e.ydieresis=500,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=611,e.adieresis=444,e.edieresis=444,e.cacute=444,e.nacute=500,e.umacron=500,e.Ncaron=722,e.Iacute=333,e.plusminus=564,e.brokenbar=200,e.registered=760,e.Gbreve=722,e.Idotaccent=333,e.summation=600,e.Egrave=611,e.racute=333,e.omacron=500,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=667,e.lcommaaccent=278,e.tcaron=326,e.eogonek=444,e.Uogonek=722,e.Aacute=722,e.Adieresis=722,e.egrave=444,e.zacute=444,e.iogonek=278,e.Oacute=722,e.oacute=500,e.amacron=444,e.sacute=389,e.idieresis=278,e.Ocircumflex=722,e.Ugrave=722,e.Delta=612,e.thorn=500,e.twosuperior=300,e.Odieresis=722,e.mu=500,e.igrave=278,e.ohungarumlaut=500,e.Eogonek=611,e.dcroat=500,e.threequarters=750,e.Scedilla=556,e.lcaron=344,e.Kcommaaccent=722,e.Lacute=611,e.trademark=980,e.edotaccent=444,e.Igrave=333,e.Imacron=333,e.Lcaron=611,e.onehalf=750,e.lessequal=549,e.ocircumflex=500,e.ntilde=500,e.Uhungarumlaut=722,e.Eacute=611,e.emacron=444,e.gbreve=500,e.onequarter=750,e.Scaron=556,e.Scommaaccent=556,e.Ohungarumlaut=722,e.degree=400,e.ograve=500,e.Ccaron=667,e.ugrave=500,e.radical=453,e.Dcaron=722,e.rcommaaccent=333,e.Ntilde=722,e.otilde=500,e.Rcommaaccent=667,e.Lcommaaccent=611,e.Atilde=722,e.Aogonek=722,e.Aring=722,e.Otilde=722,e.zdotaccent=444,e.Ecaron=611,e.Iogonek=333,e.kcommaaccent=500,e.minus=564,e.Icircumflex=333,e.ncaron=500,e.tcommaaccent=278,e.logicalnot=564,e.odieresis=500,e.udieresis=500,e.notequal=549,e.gcommaaccent=500,e.eth=500,e.zcaron=444,e.ncommaaccent=500,e.onesuperior=300,e.imacron=278,e.Euro=500}),e["Times-Bold"]=(0,a.getLookupTableFactory)(function(e){e.space=250,e.exclam=333,e.quotedbl=555,e.numbersign=500,e.dollar=500,e.percent=1e3,e.ampersand=833,e.quoteright=333,e.parenleft=333,e.parenright=333,e.asterisk=500,e.plus=570,e.comma=250,e.hyphen=333,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=333,e.semicolon=333,e.less=570,e.equal=570,e.greater=570,e.question=500,e.at=930,e.A=722,e.B=667,e.C=722,e.D=722,e.E=667,e.F=611,e.G=778,e.H=778,e.I=389,e.J=500,e.K=778,e.L=667,e.M=944,e.N=722,e.O=778,e.P=611,e.Q=778,e.R=722,e.S=556,e.T=667,e.U=722,e.V=722,e.W=1e3,e.X=722,e.Y=722,e.Z=667,e.bracketleft=333,e.backslash=278,e.bracketright=333,e.asciicircum=581,e.underscore=500,e.quoteleft=333,e.a=500,e.b=556,e.c=444,e.d=556,e.e=444,e.f=333,e.g=500,e.h=556,e.i=278,e.j=333,e.k=556,e.l=278,e.m=833,e.n=556,e.o=500,e.p=556,e.q=556,e.r=444,e.s=389,e.t=333,e.u=556,e.v=500,e.w=722,e.x=500,e.y=500,e.z=444,e.braceleft=394,e.bar=220,e.braceright=394,e.asciitilde=520,e.exclamdown=333,e.cent=500,e.sterling=500,e.fraction=167,e.yen=500,e.florin=500,e.section=500,e.currency=500,e.quotesingle=278,e.quotedblleft=500,e.guillemotleft=500,e.guilsinglleft=333,e.guilsinglright=333,e.fi=556,e.fl=556,e.endash=500,e.dagger=500,e.daggerdbl=500,e.periodcentered=250,e.paragraph=540,e.bullet=350,e.quotesinglbase=333,e.quotedblbase=500,e.quotedblright=500,e.guillemotright=500,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=500,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=1e3,e.ordfeminine=300,e.Lslash=667,e.Oslash=778,e.OE=1e3,e.ordmasculine=330,e.ae=722,e.dotlessi=278,e.lslash=278,e.oslash=500,e.oe=722,e.germandbls=556,e.Idieresis=389,e.eacute=444,e.abreve=500,e.uhungarumlaut=556,e.ecaron=444,e.Ydieresis=722,e.divide=570,e.Yacute=722,e.Acircumflex=722,e.aacute=500,e.Ucircumflex=722,e.yacute=500,e.scommaaccent=389,e.ecircumflex=444,e.Uring=722,e.Udieresis=722,e.aogonek=500,e.Uacute=722,e.uogonek=556,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=747,e.Emacron=667,e.ccaron=444,e.aring=500,e.Ncommaaccent=722,e.lacute=278,e.agrave=500,e.Tcommaaccent=667,e.Cacute=722,e.atilde=500,e.Edotaccent=667,e.scaron=389,e.scedilla=389,e.iacute=278,e.lozenge=494,e.Rcaron=722,e.Gcommaaccent=778,e.ucircumflex=556,e.acircumflex=500,e.Amacron=722,e.rcaron=444,e.ccedilla=444,e.Zdotaccent=667,e.Thorn=611,e.Omacron=778,e.Racute=722,e.Sacute=556,e.dcaron=672,e.Umacron=722
e.uring=556,e.threesuperior=300,e.Ograve=778,e.Agrave=722,e.Abreve=722,e.multiply=570,e.uacute=556,e.Tcaron=667,e.partialdiff=494,e.ydieresis=500,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=500,e.edieresis=444,e.cacute=444,e.nacute=556,e.umacron=556,e.Ncaron=722,e.Iacute=389,e.plusminus=570,e.brokenbar=220,e.registered=747,e.Gbreve=778,e.Idotaccent=389,e.summation=600,e.Egrave=667,e.racute=444,e.omacron=500,e.Zacute=667,e.Zcaron=667,e.greaterequal=549,e.Eth=722,e.Ccedilla=722,e.lcommaaccent=278,e.tcaron=416,e.eogonek=444,e.Uogonek=722,e.Aacute=722,e.Adieresis=722,e.egrave=444,e.zacute=444,e.iogonek=278,e.Oacute=778,e.oacute=500,e.amacron=500,e.sacute=389,e.idieresis=278,e.Ocircumflex=778,e.Ugrave=722,e.Delta=612,e.thorn=556,e.twosuperior=300,e.Odieresis=778,e.mu=556,e.igrave=278,e.ohungarumlaut=500,e.Eogonek=667,e.dcroat=556,e.threequarters=750,e.Scedilla=556,e.lcaron=394,e.Kcommaaccent=778,e.Lacute=667,e.trademark=1e3,e.edotaccent=444,e.Igrave=389,e.Imacron=389,e.Lcaron=667,e.onehalf=750,e.lessequal=549,e.ocircumflex=500,e.ntilde=556,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=444,e.gbreve=500,e.onequarter=750,e.Scaron=556,e.Scommaaccent=556,e.Ohungarumlaut=778,e.degree=400,e.ograve=500,e.Ccaron=722,e.ugrave=556,e.radical=549,e.Dcaron=722,e.rcommaaccent=444,e.Ntilde=722,e.otilde=500,e.Rcommaaccent=722,e.Lcommaaccent=667,e.Atilde=722,e.Aogonek=722,e.Aring=722,e.Otilde=778,e.zdotaccent=444,e.Ecaron=667,e.Iogonek=389,e.kcommaaccent=556,e.minus=570,e.Icircumflex=389,e.ncaron=556,e.tcommaaccent=333,e.logicalnot=570,e.odieresis=500,e.udieresis=556,e.notequal=549,e.gcommaaccent=500,e.eth=500,e.zcaron=444,e.ncommaaccent=556,e.onesuperior=300,e.imacron=278,e.Euro=500}),e["Times-BoldItalic"]=(0,a.getLookupTableFactory)(function(e){e.space=250,e.exclam=389,e.quotedbl=555,e.numbersign=500,e.dollar=500,e.percent=833,e.ampersand=778,e.quoteright=333,e.parenleft=333,e.parenright=333,e.asterisk=500,e.plus=570,e.comma=250,e.hyphen=333,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=333,e.semicolon=333,e.less=570,e.equal=570,e.greater=570,e.question=500,e.at=832,e.A=667,e.B=667,e.C=667,e.D=722,e.E=667,e.F=667,e.G=722,e.H=778,e.I=389,e.J=500,e.K=667,e.L=611,e.M=889,e.N=722,e.O=722,e.P=611,e.Q=722,e.R=667,e.S=556,e.T=611,e.U=722,e.V=667,e.W=889,e.X=667,e.Y=611,e.Z=611,e.bracketleft=333,e.backslash=278,e.bracketright=333,e.asciicircum=570,e.underscore=500,e.quoteleft=333,e.a=500,e.b=500,e.c=444,e.d=500,e.e=444,e.f=333,e.g=500,e.h=556,e.i=278,e.j=278,e.k=500,e.l=278,e.m=778,e.n=556,e.o=500,e.p=500,e.q=500,e.r=389,e.s=389,e.t=278,e.u=556,e.v=444,e.w=667,e.x=500,e.y=444,e.z=389,e.braceleft=348,e.bar=220,e.braceright=348,e.asciitilde=570,e.exclamdown=389,e.cent=500,e.sterling=500,e.fraction=167,e.yen=500,e.florin=500,e.section=500,e.currency=500,e.quotesingle=278,e.quotedblleft=500,e.guillemotleft=500,e.guilsinglleft=333,e.guilsinglright=333,e.fi=556,e.fl=556,e.endash=500,e.dagger=500,e.daggerdbl=500,e.periodcentered=250,e.paragraph=500,e.bullet=350,e.quotesinglbase=333,e.quotedblbase=500,e.quotedblright=500,e.guillemotright=500,e.ellipsis=1e3,e.perthousand=1e3,e.questiondown=500,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=1e3,e.AE=944,e.ordfeminine=266,e.Lslash=611,e.Oslash=722,e.OE=944,e.ordmasculine=300,e.ae=722,e.dotlessi=278,e.lslash=278,e.oslash=500,e.oe=722,e.germandbls=500,e.Idieresis=389,e.eacute=444,e.abreve=500,e.uhungarumlaut=556,e.ecaron=444,e.Ydieresis=611,e.divide=570,e.Yacute=611,e.Acircumflex=667,e.aacute=500,e.Ucircumflex=722,e.yacute=444,e.scommaaccent=389,e.ecircumflex=444,e.Uring=722,e.Udieresis=722,e.aogonek=500,e.Uacute=722,e.uogonek=556,e.Edieresis=667,e.Dcroat=722,e.commaaccent=250,e.copyright=747,e.Emacron=667,e.ccaron=444,e.aring=500,e.Ncommaaccent=722,e.lacute=278,e.agrave=500,e.Tcommaaccent=611,e.Cacute=667,e.atilde=500,e.Edotaccent=667,e.scaron=389,e.scedilla=389,e.iacute=278,e.lozenge=494,e.Rcaron=667,e.Gcommaaccent=722,e.ucircumflex=556,e.acircumflex=500,e.Amacron=667,e.rcaron=389,e.ccedilla=444,e.Zdotaccent=611,e.Thorn=611,e.Omacron=722,e.Racute=667,e.Sacute=556,e.dcaron=608,e.Umacron=722
e.uring=556,e.threesuperior=300,e.Ograve=722,e.Agrave=667,e.Abreve=667,e.multiply=570,e.uacute=556,e.Tcaron=611,e.partialdiff=494,e.ydieresis=444,e.Nacute=722,e.icircumflex=278,e.Ecircumflex=667,e.adieresis=500,e.edieresis=444,e.cacute=444,e.nacute=556,e.umacron=556,e.Ncaron=722,e.Iacute=389,e.plusminus=570,e.brokenbar=220,e.registered=747,e.Gbreve=722,e.Idotaccent=389,e.summation=600,e.Egrave=667,e.racute=389,e.omacron=500,e.Zacute=611,e.Zcaron=611,e.greaterequal=549,e.Eth=722,e.Ccedilla=667,e.lcommaaccent=278,e.tcaron=366,e.eogonek=444,e.Uogonek=722,e.Aacute=667,e.Adieresis=667,e.egrave=444,e.zacute=389,e.iogonek=278,e.Oacute=722,e.oacute=500,e.amacron=500,e.sacute=389,e.idieresis=278,e.Ocircumflex=722,e.Ugrave=722,e.Delta=612,e.thorn=500,e.twosuperior=300,e.Odieresis=722,e.mu=576,e.igrave=278,e.ohungarumlaut=500,e.Eogonek=667,e.dcroat=500,e.threequarters=750,e.Scedilla=556,e.lcaron=382,e.Kcommaaccent=667,e.Lacute=611,e.trademark=1e3,e.edotaccent=444,e.Igrave=389,e.Imacron=389,e.Lcaron=611,e.onehalf=750,e.lessequal=549,e.ocircumflex=500,e.ntilde=556,e.Uhungarumlaut=722,e.Eacute=667,e.emacron=444,e.gbreve=500,e.onequarter=750,e.Scaron=556,e.Scommaaccent=556,e.Ohungarumlaut=722,e.degree=400,e.ograve=500,e.Ccaron=667,e.ugrave=556,e.radical=549,e.Dcaron=722,e.rcommaaccent=389,e.Ntilde=722,e.otilde=500,e.Rcommaaccent=667,e.Lcommaaccent=611,e.Atilde=667,e.Aogonek=667,e.Aring=667,e.Otilde=722,e.zdotaccent=389,e.Ecaron=667,e.Iogonek=389,e.kcommaaccent=500,e.minus=606,e.Icircumflex=389,e.ncaron=556,e.tcommaaccent=278,e.logicalnot=606,e.odieresis=500,e.udieresis=556,e.notequal=549,e.gcommaaccent=500,e.eth=500,e.zcaron=389,e.ncommaaccent=556,e.onesuperior=300,e.imacron=278,e.Euro=500}),e["Times-Italic"]=(0,a.getLookupTableFactory)(function(e){e.space=250,e.exclam=333,e.quotedbl=420,e.numbersign=500,e.dollar=500,e.percent=833,e.ampersand=778,e.quoteright=333,e.parenleft=333,e.parenright=333,e.asterisk=500,e.plus=675,e.comma=250,e.hyphen=333,e.period=250,e.slash=278,e.zero=500,e.one=500,e.two=500,e.three=500,e.four=500,e.five=500,e.six=500,e.seven=500,e.eight=500,e.nine=500,e.colon=333,e.semicolon=333,e.less=675,e.equal=675,e.greater=675,e.question=500,e.at=920,e.A=611,e.B=611,e.C=667,e.D=722,e.E=611,e.F=611,e.G=722,e.H=722,e.I=333,e.J=444,e.K=667,e.L=556,e.M=833,e.N=667,e.O=722,e.P=611,e.Q=722,e.R=611,e.S=500,e.T=556,e.U=722,e.V=611,e.W=833,e.X=611,e.Y=556,e.Z=556,e.bracketleft=389,e.backslash=278,e.bracketright=389,e.asciicircum=422,e.underscore=500,e.quoteleft=333,e.a=500,e.b=500,e.c=444,e.d=500,e.e=444,e.f=278,e.g=500,e.h=500,e.i=278,e.j=278,e.k=444,e.l=278,e.m=722,e.n=500,e.o=500,e.p=500,e.q=500,e.r=389,e.s=389,e.t=278,e.u=500,e.v=444,e.w=667,e.x=444,e.y=444,e.z=389,e.braceleft=400,e.bar=275,e.braceright=400,e.asciitilde=541,e.exclamdown=389,e.cent=500,e.sterling=500,e.fraction=167,e.yen=500,e.florin=500,e.section=500,e.currency=500,e.quotesingle=214,e.quotedblleft=556,e.guillemotleft=500,e.guilsinglleft=333,e.guilsinglright=333,e.fi=500,e.fl=500,e.endash=500,e.dagger=500,e.daggerdbl=500,e.periodcentered=250,e.paragraph=523,e.bullet=350,e.quotesinglbase=333,e.quotedblbase=556,e.quotedblright=556,e.guillemotright=500,e.ellipsis=889,e.perthousand=1e3,e.questiondown=500,e.grave=333,e.acute=333,e.circumflex=333,e.tilde=333,e.macron=333,e.breve=333,e.dotaccent=333,e.dieresis=333,e.ring=333,e.cedilla=333,e.hungarumlaut=333,e.ogonek=333,e.caron=333,e.emdash=889,e.AE=889,e.ordfeminine=276,e.Lslash=556,e.Oslash=722,e.OE=944,e.ordmasculine=310,e.ae=667,e.dotlessi=278,e.lslash=278,e.oslash=500,e.oe=667,e.germandbls=500,e.Idieresis=333,e.eacute=444,e.abreve=500,e.uhungarumlaut=500,e.ecaron=444,e.Ydieresis=556,e.divide=675,e.Yacute=556,e.Acircumflex=611,e.aacute=500,e.Ucircumflex=722,e.yacute=444,e.scommaaccent=389,e.ecircumflex=444,e.Uring=722,e.Udieresis=722,e.aogonek=500,e.Uacute=722,e.uogonek=500,e.Edieresis=611,e.Dcroat=722,e.commaaccent=250,e.copyright=760,e.Emacron=611,e.ccaron=444,e.aring=500,e.Ncommaaccent=667,e.lacute=278,e.agrave=500,e.Tcommaaccent=556,e.Cacute=667,e.atilde=500,e.Edotaccent=611,e.scaron=389,e.scedilla=389,e.iacute=278,e.lozenge=471,e.Rcaron=611,e.Gcommaaccent=722,e.ucircumflex=500,e.acircumflex=500,e.Amacron=611,e.rcaron=389,e.ccedilla=444,e.Zdotaccent=556,e.Thorn=611,e.Omacron=722,e.Racute=611,e.Sacute=500,e.dcaron=544,e.Umacron=722
e.uring=500,e.threesuperior=300,e.Ograve=722,e.Agrave=611,e.Abreve=611,e.multiply=675,e.uacute=500,e.Tcaron=556,e.partialdiff=476,e.ydieresis=444,e.Nacute=667,e.icircumflex=278,e.Ecircumflex=611,e.adieresis=500,e.edieresis=444,e.cacute=444,e.nacute=500,e.umacron=500,e.Ncaron=667,e.Iacute=333,e.plusminus=675,e.brokenbar=275,e.registered=760,e.Gbreve=722,e.Idotaccent=333,e.summation=600,e.Egrave=611,e.racute=389,e.omacron=500,e.Zacute=556,e.Zcaron=556,e.greaterequal=549,e.Eth=722,e.Ccedilla=667,e.lcommaaccent=278,e.tcaron=300,e.eogonek=444,e.Uogonek=722,e.Aacute=611,e.Adieresis=611,e.egrave=444,e.zacute=389,e.iogonek=278,e.Oacute=722,e.oacute=500,e.amacron=500,e.sacute=389,e.idieresis=278,e.Ocircumflex=722,e.Ugrave=722,e.Delta=612,e.thorn=500,e.twosuperior=300,e.Odieresis=722,e.mu=500,e.igrave=278,e.ohungarumlaut=500,e.Eogonek=611,e.dcroat=500,e.threequarters=750,e.Scedilla=500,e.lcaron=300,e.Kcommaaccent=667,e.Lacute=556,e.trademark=980,e.edotaccent=444,e.Igrave=333,e.Imacron=333,e.Lcaron=611,e.onehalf=750,e.lessequal=549,e.ocircumflex=500,e.ntilde=500,e.Uhungarumlaut=722,e.Eacute=611,e.emacron=444,e.gbreve=500,e.onequarter=750,e.Scaron=500,e.Scommaaccent=500,e.Ohungarumlaut=722,e.degree=400,e.ograve=500,e.Ccaron=667,e.ugrave=500,e.radical=453,e.Dcaron=722,e.rcommaaccent=389,e.Ntilde=667,e.otilde=500,e.Rcommaaccent=611,e.Lcommaaccent=556,e.Atilde=611,e.Aogonek=611,e.Aring=611,e.Otilde=722,e.zdotaccent=389,e.Ecaron=611,e.Iogonek=333,e.kcommaaccent=444,e.minus=675,e.Icircumflex=333,e.ncaron=500,e.tcommaaccent=278,e.logicalnot=675,e.odieresis=500,e.udieresis=500,e.notequal=549,e.gcommaaccent=500,e.eth=500,e.zcaron=389,e.ncommaaccent=500,e.onesuperior=300,e.imacron=278,e.Euro=500}),e.ZapfDingbats=(0,a.getLookupTableFactory)(function(e){e.space=278,e.a1=974,e.a2=961,e.a202=974,e.a3=980,e.a4=719,e.a5=789,e.a119=790,e.a118=791,e.a117=690,e.a11=960,e.a12=939,e.a13=549,e.a14=855,e.a15=911,e.a16=933,e.a105=911,e.a17=945,e.a18=974,e.a19=755,e.a20=846,e.a21=762,e.a22=761,e.a23=571,e.a24=677,e.a25=763,e.a26=760,e.a27=759,e.a28=754,e.a6=494,e.a7=552,e.a8=537,e.a9=577,e.a10=692,e.a29=786,e.a30=788,e.a31=788,e.a32=790,e.a33=793,e.a34=794,e.a35=816,e.a36=823,e.a37=789,e.a38=841,e.a39=823,e.a40=833,e.a41=816,e.a42=831,e.a43=923,e.a44=744,e.a45=723,e.a46=749,e.a47=790,e.a48=792,e.a49=695,e.a50=776,e.a51=768,e.a52=792,e.a53=759,e.a54=707,e.a55=708,e.a56=682,e.a57=701,e.a58=826,e.a59=815,e.a60=789,e.a61=789,e.a62=707,e.a63=687,e.a64=696,e.a65=689,e.a66=786,e.a67=787,e.a68=713,e.a69=791,e.a70=785,e.a71=791,e.a72=873,e.a73=761,e.a74=762,e.a203=762,e.a75=759,e.a204=759,e.a76=892,e.a77=892,e.a78=788,e.a79=784,e.a81=438,e.a82=138,e.a83=277,e.a84=415,e.a97=392,e.a98=392,e.a99=668,e.a100=668,e.a89=390,e.a90=390,e.a93=317,e.a94=317,e.a91=276,e.a92=276,e.a205=509,e.a85=509,e.a206=410,e.a86=410,e.a87=234,e.a88=234,e.a95=334,e.a96=334,e.a101=732,e.a102=544,e.a103=544,e.a104=910,e.a106=667,e.a107=760,e.a108=760,e.a112=776,e.a111=595,e.a110=694,e.a109=626,e.a120=788,e.a121=788,e.a122=788,e.a123=788,e.a124=788,e.a125=788,e.a126=788,e.a127=788,e.a128=788,e.a129=788,e.a130=788,e.a131=788,e.a132=788,e.a133=788,e.a134=788,e.a135=788,e.a136=788,e.a137=788,e.a138=788,e.a139=788,e.a140=788,e.a141=788,e.a142=788,e.a143=788,e.a144=788,e.a145=788,e.a146=788,e.a147=788,e.a148=788,e.a149=788,e.a150=788,e.a151=788,e.a152=788,e.a153=788,e.a154=788,e.a155=788,e.a156=788,e.a157=788,e.a158=788,e.a159=788,e.a160=894,e.a161=838,e.a163=1016,e.a164=458,e.a196=748,e.a165=924,e.a192=748,e.a166=918,e.a167=927,e.a168=928,e.a169=928,e.a170=834,e.a171=873,e.a172=828,e.a173=924,e.a162=924,e.a174=917,e.a175=930,e.a176=931,e.a177=463,e.a178=883,e.a179=836,e.a193=836,e.a180=867,e.a199=867,e.a181=696,e.a200=696,e.a182=874,e.a201=874,e.a183=760,e.a184=946,e.a197=771,e.a185=865,e.a194=771,e.a198=888,e.a186=967,e.a195=888,e.a187=831,e.a188=873,e.a189=927
e.a190=970,e.a191=918})})
t.getMetrics=i},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e){function t(e){this.h1=e?4294967295&e:3285377520,this.h2=e?4294967295&e:3285377520}return t.prototype={update:function(e){var t
if("string"==typeof e){var r=new Uint8Array(2*e.length),i=0
for(t=0;t<e.length;t++){var n=e.charCodeAt(t)
n<=255?r[i++]=n:(r[i++]=n>>>8,r[i++]=255&n)}}else{if(!("object"===(void 0===e?"undefined":a(e))&&"byteLength"in e))throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.")
r=e,i=r.byteLength}var o=i>>2,s=i-4*o,c=new Uint32Array(r.buffer,0,o),l=0,u=0,h=this.h1,f=this.h2,d=3432918353,g=461845907
for(t=0;t<o;t++)1&t?(l=c[t],l=l*d&4294901760|11601*l&65535,l=l<<15|l>>>17,l=l*g&4294901760|13715*l&65535,h^=l,h=h<<13|h>>>19,h=5*h+3864292196):(u=c[t],u=u*d&4294901760|11601*u&65535,u=u<<15|u>>>17,u=u*g&4294901760|13715*u&65535,f^=u,f=f<<13|f>>>19,f=5*f+3864292196)
switch(l=0,s){case 3:l^=r[4*o+2]<<16
case 2:l^=r[4*o+1]<<8
case 1:l^=r[4*o],l=l*d&4294901760|11601*l&65535,l=l<<15|l>>>17,l=l*g&4294901760|13715*l&65535,1&o?h^=l:f^=l}return this.h1=h,this.h2=f,this},hexdigest:function(){var e=this.h1,t=this.h2
e^=t>>>1,e=3981806797*e&4294901760|36045*e&65535,t=4283543511*t&4294901760|(2950163797*(t<<16|e>>>16)&4294901760)>>>16,e^=t>>>1,e=444984403*e&4294901760|60499*e&65535,t=3301882366*t&4294901760|(3120437893*(t<<16|e>>>16)&4294901760)>>>16,e^=t>>>1
for(var r=0,a=[e,t],i="";r<a.length;r++){for(var n=(a[r]>>>0).toString(16);n.length<8;)n="0"+n
i+=n}return i}},t}()
t.MurmurHash3_64=i},function(e,t,r){"use strict"
function a(e,t,r){var a=t.getArray("Matrix"),n=i.Util.normalizeRect(t.getArray("BBox")),o=t.get("XStep"),s=t.get("YStep"),c=t.get("PaintType"),l=t.get("TilingType")
if(n[2]-n[0]==0||n[3]-n[1]==0)throw new i.FormatError("Invalid getTilingPatternIR /BBox array: ["+n+"].")
return["TilingPattern",r,e,a,n,o,s,c,l]}Object.defineProperty(t,"__esModule",{value:!0}),t.getTilingPatternIR=t.Pattern=void 0
var i=r(0),n=r(15),o=r(1),s=r(32),c={FUNCTION_BASED:1,AXIAL:2,RADIAL:3,FREE_FORM_MESH:4,LATTICE_FORM_MESH:5,COONS_PATCH_MESH:6,TENSOR_PATCH_MESH:7},l=function(){function e(){throw new Error("should not call Pattern constructor")}return e.prototype={getPattern:function(e){throw new Error("Should not call Pattern.getStyle: "+e)}},e.parseShading=function(e,t,r,a,n){var s=(0,o.isStream)(e)?e.dict:e,l=s.get("ShadingType")
try{switch(l){case c.AXIAL:case c.RADIAL:return new u.RadialAxial(s,t,r,a)
case c.FREE_FORM_MESH:case c.LATTICE_FORM_MESH:case c.COONS_PATCH_MESH:case c.TENSOR_PATCH_MESH:return new u.Mesh(e,t,r,a)
default:throw new i.FormatError("Unsupported ShadingType: "+l)}}catch(e){if(e instanceof i.MissingDataException)throw e
return n.send("UnsupportedFeature",{featureId:i.UNSUPPORTED_FEATURES.shadingPattern}),(0,i.warn)(e),new u.Dummy}},e}(),u={}
u.SMALL_NUMBER=1e-6,u.RadialAxial=function(){function e(e,t,r,a){this.matrix=t,this.coordsArr=e.getArray("Coords"),this.shadingType=e.get("ShadingType"),this.type="Pattern"
var o=e.get("ColorSpace","CS")
o=n.ColorSpace.parse(o,r,a),this.cs=o
var l=0,h=1
if(e.has("Domain")){var f=e.getArray("Domain")
l=f[0],h=f[1]}var d=!1,g=!1
if(e.has("Extend")){var m=e.getArray("Extend")
d=m[0],g=m[1]}if(!(this.shadingType!==c.RADIAL||d&&g)){var p=this.coordsArr[0],b=this.coordsArr[1],v=this.coordsArr[2],y=this.coordsArr[3],w=this.coordsArr[4],k=this.coordsArr[5],S=Math.sqrt((p-y)*(p-y)+(b-w)*(b-w))
v<=k+S&&k<=v+S&&(0,i.warn)("Unsupported radial gradient.")}this.extendStart=d,this.extendEnd=g
var C=e.get("Function"),x=s.PDFFunction.parseArray(r,C),A=h-l,P=A/10,I=this.colorStops=[]
if(l>=h||P<=0)return void(0,i.info)("Bad shading domain.")
for(var _,O=new Float32Array(o.numComps),T=new Float32Array(1),E=l;E<=h;E+=P){T[0]=E,x(T,0,O,0),_=o.getRgb(O,0)
var R=i.Util.makeCssRgb(_[0],_[1],_[2])
I.push([(E-l)/A,R])}var F="transparent"
e.has("Background")&&(_=o.getRgb(e.get("Background"),0),F=i.Util.makeCssRgb(_[0],_[1],_[2])),d||(I.unshift([0,F]),I[1][0]+=u.SMALL_NUMBER),g||(I[I.length-1][0]-=u.SMALL_NUMBER,I.push([1,F])),this.colorStops=I}return e.prototype={getIR:function(){var e,t,r,a,n,o=this.coordsArr,s=this.shadingType
s===c.AXIAL?(t=[o[0],o[1]],r=[o[2],o[3]],a=null,n=null,e="axial"):s===c.RADIAL?(t=[o[0],o[1]],r=[o[3],o[4]],a=o[2],n=o[5],e="radial"):(0,i.unreachable)("getPattern type unknown: "+s)
var l=this.matrix
if(l&&(t=i.Util.applyTransform(t,l),r=i.Util.applyTransform(r,l),s===c.RADIAL)){var u=i.Util.singularValueDecompose2dScale(l)
a*=u[0],n*=u[1]}return["RadialAxial",e,this.colorStops,t,r,a,n]}},e}(),u.Mesh=function(){function e(e,t){this.stream=e,this.context=t,this.buffer=0,this.bufferLength=0
var r=t.numComps
this.tmpCompsBuf=new Float32Array(r)
var a=t.colorSpace.numComps
this.tmpCsCompsBuf=t.colorFn?new Float32Array(a):this.tmpCompsBuf}function t(e,t){for(var r=e.coords,a=e.colors,n=[],o=[],s=0;t.hasData;){var c=t.readFlag(),l=t.readCoordinate(),u=t.readComponents()
if(0===s){if(!(0<=c&&c<=2))throw new i.FormatError("Unknown type4 flag")
switch(c){case 0:s=3
break
case 1:o.push(o[o.length-2],o[o.length-1]),s=1
break
case 2:o.push(o[o.length-3],o[o.length-1]),s=1}n.push(c)}o.push(r.length),r.push(l),a.push(u),s--,t.align()}e.figures.push({type:"triangles",coords:new Int32Array(o),colors:new Int32Array(o)})}function r(e,t,r){for(var a=e.coords,i=e.colors,n=[];t.hasData;){var o=t.readCoordinate(),s=t.readComponents()
n.push(a.length),a.push(o),i.push(s)}e.figures.push({type:"lattice",coords:new Int32Array(n),colors:new Int32Array(n),verticesPerRow:r})}function a(e,t){var r=e.figures[t];(0,i.assert)("patch"===r.type,"Unexpected patch mesh figure")
var a=e.coords,n=e.colors,o=r.coords,s=r.colors,c=Math.min(a[o[0]][0],a[o[3]][0],a[o[12]][0],a[o[15]][0]),l=Math.min(a[o[0]][1],a[o[3]][1],a[o[12]][1],a[o[15]][1]),u=Math.max(a[o[0]][0],a[o[3]][0],a[o[12]][0],a[o[15]][0]),h=Math.max(a[o[0]][1],a[o[3]][1],a[o[12]][1],a[o[15]][1]),f=Math.ceil((u-c)*p/(e.bounds[2]-e.bounds[0]))
f=Math.max(g,Math.min(m,f))
var d=Math.ceil((h-l)*p/(e.bounds[3]-e.bounds[1]))
d=Math.max(g,Math.min(m,d))
for(var v=f+1,y=new Int32Array((d+1)*v),w=new Int32Array((d+1)*v),k=0,S=new Uint8Array(3),C=new Uint8Array(3),x=n[s[0]],A=n[s[1]],P=n[s[2]],I=n[s[3]],_=b(d),O=b(f),T=0;T<=d;T++){S[0]=(x[0]*(d-T)+P[0]*T)/d|0,S[1]=(x[1]*(d-T)+P[1]*T)/d|0,S[2]=(x[2]*(d-T)+P[2]*T)/d|0,C[0]=(A[0]*(d-T)+I[0]*T)/d|0,C[1]=(A[1]*(d-T)+I[1]*T)/d|0,C[2]=(A[2]*(d-T)+I[2]*T)/d|0
for(var E=0;E<=f;E++,k++)if(0!==T&&T!==d||0!==E&&E!==f){for(var R=0,F=0,B=0,M=0;M<=3;M++)for(var D=0;D<=3;D++,B++){var L=_[T][M]*O[E][D]
R+=a[o[B]][0]*L,F+=a[o[B]][1]*L}y[k]=a.length,a.push([R,F]),w[k]=n.length
var N=new Uint8Array(3)
N[0]=(S[0]*(f-E)+C[0]*E)/f|0,N[1]=(S[1]*(f-E)+C[1]*E)/f|0,N[2]=(S[2]*(f-E)+C[2]*E)/f|0,n.push(N)}}y[0]=o[0],w[0]=s[0],y[f]=o[3],w[f]=s[1],y[v*d]=o[12],w[v*d]=s[2],y[v*d+f]=o[15],w[v*d+f]=s[3],e.figures[t]={type:"lattice",coords:y,colors:w,verticesPerRow:v}}function l(e,t){for(var r=e.coords,a=e.colors,n=new Int32Array(16),o=new Int32Array(4);t.hasData;){var s=t.readFlag()
if(!(0<=s&&s<=3))throw new i.FormatError("Unknown type6 flag")
var c,l,u=r.length
for(c=0,l=0!==s?8:12;c<l;c++)r.push(t.readCoordinate())
var h=a.length
for(c=0,l=0!==s?2:4;c<l;c++)a.push(t.readComponents())
var f,d,g,m
switch(s){case 0:n[12]=u+3,n[13]=u+4,n[14]=u+5,n[15]=u+6,n[8]=u+2,n[11]=u+7,n[4]=u+1,n[7]=u+8,n[0]=u,n[1]=u+11,n[2]=u+10,n[3]=u+9,o[2]=h+1,o[3]=h+2,o[0]=h,o[1]=h+3
break
case 1:f=n[12],d=n[13],g=n[14],m=n[15],n[12]=m,n[13]=u+0,n[14]=u+1,n[15]=u+2,n[8]=g,n[11]=u+3,n[4]=d,n[7]=u+4,n[0]=f,n[1]=u+7,n[2]=u+6,n[3]=u+5,f=o[2],d=o[3],o[2]=d,o[3]=h,o[0]=f,o[1]=h+1
break
case 2:f=n[15],d=n[11],n[12]=n[3],n[13]=u+0,n[14]=u+1,n[15]=u+2,n[8]=n[7],n[11]=u+3,n[4]=d,n[7]=u+4,n[0]=f,n[1]=u+7,n[2]=u+6,n[3]=u+5,f=o[3],o[2]=o[1],o[3]=h,o[0]=f,o[1]=h+1
break
case 3:n[12]=n[0],n[13]=u+0,n[14]=u+1,n[15]=u+2,n[8]=n[1],n[11]=u+3,n[4]=n[2],n[7]=u+4,n[0]=n[3],n[1]=u+7,n[2]=u+6,n[3]=u+5,o[2]=o[0],o[3]=h,o[0]=o[1],o[1]=h+1}n[5]=r.length,r.push([(-4*r[n[0]][0]-r[n[15]][0]+6*(r[n[4]][0]+r[n[1]][0])-2*(r[n[12]][0]+r[n[3]][0])+3*(r[n[13]][0]+r[n[7]][0]))/9,(-4*r[n[0]][1]-r[n[15]][1]+6*(r[n[4]][1]+r[n[1]][1])-2*(r[n[12]][1]+r[n[3]][1])+3*(r[n[13]][1]+r[n[7]][1]))/9]),n[6]=r.length,r.push([(-4*r[n[3]][0]-r[n[12]][0]+6*(r[n[2]][0]+r[n[7]][0])-2*(r[n[0]][0]+r[n[15]][0])+3*(r[n[4]][0]+r[n[14]][0]))/9,(-4*r[n[3]][1]-r[n[12]][1]+6*(r[n[2]][1]+r[n[7]][1])-2*(r[n[0]][1]+r[n[15]][1])+3*(r[n[4]][1]+r[n[14]][1]))/9]),n[9]=r.length,r.push([(-4*r[n[12]][0]-r[n[3]][0]+6*(r[n[8]][0]+r[n[13]][0])-2*(r[n[0]][0]+r[n[15]][0])+3*(r[n[11]][0]+r[n[1]][0]))/9,(-4*r[n[12]][1]-r[n[3]][1]+6*(r[n[8]][1]+r[n[13]][1])-2*(r[n[0]][1]+r[n[15]][1])+3*(r[n[11]][1]+r[n[1]][1]))/9]),n[10]=r.length,r.push([(-4*r[n[15]][0]-r[n[0]][0]+6*(r[n[11]][0]+r[n[14]][0])-2*(r[n[12]][0]+r[n[3]][0])+3*(r[n[2]][0]+r[n[8]][0]))/9,(-4*r[n[15]][1]-r[n[0]][1]+6*(r[n[11]][1]+r[n[14]][1])-2*(r[n[12]][1]+r[n[3]][1])+3*(r[n[2]][1]+r[n[8]][1]))/9]),e.figures.push({type:"patch",coords:new Int32Array(n),colors:new Int32Array(o)})}}function u(e,t){for(var r=e.coords,a=e.colors,n=new Int32Array(16),o=new Int32Array(4);t.hasData;){var s=t.readFlag()
if(!(0<=s&&s<=3))throw new i.FormatError("Unknown type7 flag")
var c,l,u=r.length
for(c=0,l=0!==s?12:16;c<l;c++)r.push(t.readCoordinate())
var h=a.length
for(c=0,l=0!==s?2:4;c<l;c++)a.push(t.readComponents())
var f,d,g,m
switch(s){case 0:n[12]=u+3,n[13]=u+4,n[14]=u+5,n[15]=u+6,n[8]=u+2,n[9]=u+13,n[10]=u+14,n[11]=u+7,n[4]=u+1,n[5]=u+12,n[6]=u+15,n[7]=u+8,n[0]=u,n[1]=u+11,n[2]=u+10,n[3]=u+9,o[2]=h+1,o[3]=h+2,o[0]=h,o[1]=h+3
break
case 1:f=n[12],d=n[13],g=n[14],m=n[15],n[12]=m,n[13]=u+0,n[14]=u+1,n[15]=u+2,n[8]=g,n[9]=u+9,n[10]=u+10,n[11]=u+3,n[4]=d,n[5]=u+8,n[6]=u+11,n[7]=u+4,n[0]=f,n[1]=u+7,n[2]=u+6,n[3]=u+5,f=o[2],d=o[3],o[2]=d,o[3]=h,o[0]=f,o[1]=h+1
break
case 2:f=n[15],d=n[11],n[12]=n[3],n[13]=u+0,n[14]=u+1,n[15]=u+2,n[8]=n[7],n[9]=u+9,n[10]=u+10,n[11]=u+3,n[4]=d,n[5]=u+8,n[6]=u+11,n[7]=u+4,n[0]=f,n[1]=u+7,n[2]=u+6,n[3]=u+5,f=o[3],o[2]=o[1],o[3]=h,o[0]=f,o[1]=h+1
break
case 3:n[12]=n[0],n[13]=u+0,n[14]=u+1,n[15]=u+2,n[8]=n[1],n[9]=u+9,n[10]=u+10,n[11]=u+3,n[4]=n[2],n[5]=u+8,n[6]=u+11,n[7]=u+4,n[0]=n[3],n[1]=u+7,n[2]=u+6,n[3]=u+5,o[2]=o[0],o[3]=h,o[0]=o[1],o[1]=h+1}e.figures.push({type:"patch",coords:new Int32Array(n),colors:new Int32Array(o)})}}function h(e){for(var t=e.coords[0][0],r=e.coords[0][1],a=t,i=r,n=1,o=e.coords.length;n<o;n++){var s=e.coords[n][0],c=e.coords[n][1]
t=t>s?s:t,r=r>c?c:r,a=a<s?s:a,i=i<c?c:i}e.bounds=[t,r,a,i]}function f(e){var t,r,a,i,n=e.coords,o=new Float32Array(2*n.length)
for(t=0,a=0,r=n.length;t<r;t++){var s=n[t]
o[a++]=s[0],o[a++]=s[1]}e.coords=o
var c=e.colors,l=new Uint8Array(3*c.length)
for(t=0,a=0,r=c.length;t<r;t++){var u=c[t]
l[a++]=u[0],l[a++]=u[1],l[a++]=u[2]}e.colors=l
var h=e.figures
for(t=0,r=h.length;t<r;t++){var f=h[t],d=f.coords,g=f.colors
for(a=0,i=d.length;a<i;a++)d[a]*=2,g[a]*=3}}function d(d,g,m,p){if(!(0,o.isStream)(d))throw new i.FormatError("Mesh data is not a stream")
var b=d.dict
this.matrix=g,this.shadingType=b.get("ShadingType"),this.type="Pattern",this.bbox=b.getArray("BBox")
var v=b.get("ColorSpace","CS")
v=n.ColorSpace.parse(v,m,p),this.cs=v,this.background=b.has("Background")?v.getRgb(b.get("Background"),0):null
var y=b.get("Function"),w=y?s.PDFFunction.parseArray(m,y):null
this.coords=[],this.colors=[],this.figures=[]
var k={bitsPerCoordinate:b.get("BitsPerCoordinate"),bitsPerComponent:b.get("BitsPerComponent"),bitsPerFlag:b.get("BitsPerFlag"),decode:b.getArray("Decode"),colorFn:w,colorSpace:v,numComps:w?1:v.numComps},S=new e(d,k),C=!1
switch(this.shadingType){case c.FREE_FORM_MESH:t(this,S)
break
case c.LATTICE_FORM_MESH:var x=0|b.get("VerticesPerRow")
if(x<2)throw new i.FormatError("Invalid VerticesPerRow")
r(this,S,x)
break
case c.COONS_PATCH_MESH:l(this,S),C=!0
break
case c.TENSOR_PATCH_MESH:u(this,S),C=!0
break
default:(0,i.unreachable)("Unsupported mesh type.")}if(C){h(this)
for(var A=0,P=this.figures.length;A<P;A++)a(this,A)}h(this),f(this)}e.prototype={get hasData(){if(this.stream.end)return this.stream.pos<this.stream.end
if(this.bufferLength>0)return!0
var e=this.stream.getByte()
return!(e<0)&&(this.buffer=e,this.bufferLength=8,!0)},readBits:function(e){var t=this.buffer,r=this.bufferLength
if(32===e){if(0===r)return(this.stream.getByte()<<24|this.stream.getByte()<<16|this.stream.getByte()<<8|this.stream.getByte())>>>0
t=t<<24|this.stream.getByte()<<16|this.stream.getByte()<<8|this.stream.getByte()
var a=this.stream.getByte()
return this.buffer=a&(1<<r)-1,(t<<8-r|(255&a)>>r)>>>0}if(8===e&&0===r)return this.stream.getByte()
for(;r<e;)t=t<<8|this.stream.getByte(),r+=8
return r-=e,this.bufferLength=r,this.buffer=t&(1<<r)-1,t>>r},align:function(){this.buffer=0,this.bufferLength=0},readFlag:function(){return this.readBits(this.context.bitsPerFlag)},readCoordinate:function(){var e=this.context.bitsPerCoordinate,t=this.readBits(e),r=this.readBits(e),a=this.context.decode,i=e<32?1/((1<<e)-1):2.3283064365386963e-10
return[t*i*(a[1]-a[0])+a[0],r*i*(a[3]-a[2])+a[2]]},readComponents:function(){for(var e=this.context.numComps,t=this.context.bitsPerComponent,r=t<32?1/((1<<t)-1):2.3283064365386963e-10,a=this.context.decode,i=this.tmpCompsBuf,n=0,o=4;n<e;n++,o+=2){var s=this.readBits(t)
i[n]=s*r*(a[o+1]-a[o])+a[o]}var c=this.tmpCsCompsBuf
return this.context.colorFn&&this.context.colorFn(i,0,c,0),this.context.colorSpace.getRgb(c,0)}}
var g=3,m=20,p=20,b=function(){function e(e){for(var t=[],r=0;r<=e;r++){var a=r/e,i=1-a
t.push(new Float32Array([i*i*i,3*a*i*i,3*a*a*i,a*a*a]))}return t}var t=[]
return function(r){return t[r]||(t[r]=e(r)),t[r]}}()
return d.prototype={getIR:function(){return["Mesh",this.shadingType,this.coords,this.colors,this.figures,this.bounds,this.matrix,this.bbox,this.background]}},d}(),u.Dummy=function(){function e(){this.type="Pattern"}return e.prototype={getIR:function(){return["Dummy"]}},e}(),t.Pattern=l,t.getTilingPatternIR=a},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.NetworkPdfManager=t.LocalPdfManager=void 0
var a=r(0),i=r(54),n=r(91),o=r(3),s=function(){function e(){throw new Error("Cannot initialize BaseManagerManager")}return e.prototype={get docId(){return this._docId},get password(){return this._password},get docBaseUrl(){var e=null
if(this._docBaseUrl){var t=(0,a.createValidAbsoluteUrl)(this._docBaseUrl)
t?e=t.href:(0,a.warn)('Invalid absolute docBaseUrl: "'+this._docBaseUrl+'".')}return(0,a.shadow)(this,"docBaseUrl",e)},onLoadedStream:function(){throw new a.NotImplementedException},ensureDoc:function(e,t){return this.ensure(this.pdfDocument,e,t)},ensureXRef:function(e,t){return this.ensure(this.pdfDocument.xref,e,t)},ensureCatalog:function(e,t){return this.ensure(this.pdfDocument.catalog,e,t)},getPage:function(e){return this.pdfDocument.getPage(e)},cleanup:function(){return this.pdfDocument.cleanup()},ensure:function(e,t,r){return new a.NotImplementedException},requestRange:function(e,t){return new a.NotImplementedException},requestLoadedStream:function(){return new a.NotImplementedException},sendProgressiveData:function(e){return new a.NotImplementedException},updatePassword:function(e){this._password=e},terminate:function(){return new a.NotImplementedException}},e}(),c=function(){function e(e,t,r,i,s){this._docId=e,this._password=r,this._docBaseUrl=s,this.evaluatorOptions=i
var c=new o.Stream(t)
this.pdfDocument=new n.PDFDocument(this,c),this._loadedStreamCapability=(0,a.createPromiseCapability)(),this._loadedStreamCapability.resolve(c)}return a.Util.inherit(e,s,{ensure:function(e,t,r){return new Promise(function(a,i){try{var n,o=e[t]
n="function"==typeof o?o.apply(e,r):o,a(n)}catch(e){i(e)}})},requestRange:function(e,t){return Promise.resolve()},requestLoadedStream:function(){},onLoadedStream:function(){return this._loadedStreamCapability.promise},terminate:function(){}}),e}(),l=function(){function e(e,t,r,a,o){this._docId=e,this._password=r.password,this._docBaseUrl=o,this.msgHandler=r.msgHandler,this.evaluatorOptions=a
var s={msgHandler:r.msgHandler,url:r.url,length:r.length,disableAutoFetch:r.disableAutoFetch,rangeChunkSize:r.rangeChunkSize}
this.streamManager=new i.ChunkedStreamManager(t,s),this.pdfDocument=new n.PDFDocument(this,this.streamManager.getStream())}return a.Util.inherit(e,s,{ensure:function(e,t,r){var i=this
return new Promise(function(n,o){function s(){try{var c,l=e[t]
c="function"==typeof l?l.apply(e,r):l,n(c)}catch(e){if(!(e instanceof a.MissingDataException))return void o(e)
i.streamManager.requestRange(e.begin,e.end).then(s,o)}}s()})},requestRange:function(e,t){return this.streamManager.requestRange(e,t)},requestLoadedStream:function(){this.streamManager.requestAllChunks()},sendProgressiveData:function(e){this.streamManager.onReceiveData({chunk:e})},onLoadedStream:function(){return this.streamManager.onLoadedStream()},terminate:function(){this.streamManager.abort()}}),e}()
t.LocalPdfManager=c,t.NetworkPdfManager=l},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PostScriptParser=t.PostScriptLexer=void 0
var a=r(0),i=r(1),n=function(){function e(e){this.lexer=e,this.operators=[],this.token=null,this.prev=null}return e.prototype={nextToken:function(){this.prev=this.token,this.token=this.lexer.getToken()},accept:function(e){return this.token.type===e&&(this.nextToken(),!0)},expect:function(e){if(this.accept(e))return!0
throw new a.FormatError("Unexpected symbol: found "+this.token.type+" expected "+e+".")},parse:function(){return this.nextToken(),this.expect(o.LBRACE),this.parseBlock(),this.expect(o.RBRACE),this.operators},parseBlock:function(){for(;;)if(this.accept(o.NUMBER))this.operators.push(this.prev.value)
else if(this.accept(o.OPERATOR))this.operators.push(this.prev.value)
else{if(!this.accept(o.LBRACE))return
this.parseCondition()}},parseCondition:function(){var e=this.operators.length
if(this.operators.push(null,null),this.parseBlock(),this.expect(o.RBRACE),this.accept(o.IF))this.operators[e]=this.operators.length,this.operators[e+1]="jz"
else{if(!this.accept(o.LBRACE))throw new a.FormatError("PS Function: error parsing conditional.")
var t=this.operators.length
this.operators.push(null,null)
var r=this.operators.length
this.parseBlock(),this.expect(o.RBRACE),this.expect(o.IFELSE),this.operators[t]=this.operators.length,this.operators[t+1]="j",this.operators[e]=r,this.operators[e+1]="jz"}}},e}(),o={LBRACE:0,RBRACE:1,NUMBER:2,OPERATOR:3,IF:4,IFELSE:5},s=function(){function e(e,t){this.type=e,this.value=t}var t=Object.create(null)
return e.getOperator=function(r){var a=t[r]
return a||(t[r]=new e(o.OPERATOR,r))},e.LBRACE=new e(o.LBRACE,"{"),e.RBRACE=new e(o.RBRACE,"}"),e.IF=new e(o.IF,"IF"),e.IFELSE=new e(o.IFELSE,"IFELSE"),e}(),c=function(){function e(e){this.stream=e,this.nextChar(),this.strBuf=[]}return e.prototype={nextChar:function(){return this.currentChar=this.stream.getByte()},getToken:function(){for(var e=!1,t=this.currentChar;;){if(t<0)return i.EOF
if(e)10!==t&&13!==t||(e=!1)
else if(37===t)e=!0
else if(!(0,a.isSpace)(t))break
t=this.nextChar()}switch(0|t){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 43:case 45:case 46:return new s(o.NUMBER,this.getNumber())
case 123:return this.nextChar(),s.LBRACE
case 125:return this.nextChar(),s.RBRACE}var r=this.strBuf
for(r.length=0,r[0]=String.fromCharCode(t);(t=this.nextChar())>=0&&(t>=65&&t<=90||t>=97&&t<=122);)r.push(String.fromCharCode(t))
var n=r.join("")
switch(n.toLowerCase()){case"if":return s.IF
case"ifelse":return s.IFELSE
default:return s.getOperator(n)}},getNumber:function(){var e=this.currentChar,t=this.strBuf
for(t.length=0,t[0]=String.fromCharCode(e);(e=this.nextChar())>=0&&(e>=48&&e<=57||45===e||46===e);)t.push(String.fromCharCode(e))
var r=parseFloat(t.join(""))
if(isNaN(r))throw new a.FormatError("Invalid floating point number: "+r)
return r}},e}()
t.PostScriptLexer=c,t.PostScriptParser=n},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Type1Parser=void 0
var a=r(0),i=r(16),n=r(3),o=function(){function e(){this.width=0,this.lsb=0,this.flexing=!1,this.output=[],this.stack=[]}var t={hstem:[1],vstem:[3],vmoveto:[4],rlineto:[5],hlineto:[6],vlineto:[7],rrcurveto:[8],callsubr:[10],flex:[12,35],drop:[12,18],endchar:[14],rmoveto:[21],hmoveto:[22],vhcurveto:[30],hvcurveto:[31]}
return e.prototype={convert:function(e,r,i){for(var n,o,s,c=e.length,l=!1,u=0;u<c;u++){var h=e[u]
if(h<32){switch(12===h&&(h=(h<<8)+e[++u]),h){case 1:case 3:this.stack=[]
break
case 4:if(this.flexing){if(this.stack.length<1){l=!0
break}var f=this.stack.pop()
this.stack.push(0,f)
break}l=this.executeCommand(1,t.vmoveto)
break
case 5:l=this.executeCommand(2,t.rlineto)
break
case 6:l=this.executeCommand(1,t.hlineto)
break
case 7:l=this.executeCommand(1,t.vlineto)
break
case 8:l=this.executeCommand(6,t.rrcurveto)
break
case 9:this.stack=[]
break
case 10:if(this.stack.length<1){l=!0
break}s=this.stack.pop(),l=this.convert(r[s],r,i)
break
case 11:return l
case 13:if(this.stack.length<2){l=!0
break}n=this.stack.pop(),o=this.stack.pop(),this.lsb=o,this.width=n,this.stack.push(n,o),l=this.executeCommand(2,t.hmoveto)
break
case 14:this.output.push(t.endchar[0])
break
case 21:if(this.flexing)break
l=this.executeCommand(2,t.rmoveto)
break
case 22:if(this.flexing){this.stack.push(0)
break}l=this.executeCommand(1,t.hmoveto)
break
case 30:l=this.executeCommand(4,t.vhcurveto)
break
case 31:l=this.executeCommand(4,t.hvcurveto)
break
case 3072:case 3073:case 3074:this.stack=[]
break
case 3078:i?(this.seac=this.stack.splice(-4,4),l=this.executeCommand(0,t.endchar)):l=this.executeCommand(4,t.endchar)
break
case 3079:if(this.stack.length<4){l=!0
break}this.stack.pop(),n=this.stack.pop()
var d=this.stack.pop()
o=this.stack.pop(),this.lsb=o,this.width=n,this.stack.push(n,o,d),l=this.executeCommand(3,t.rmoveto)
break
case 3084:if(this.stack.length<2){l=!0
break}var g=this.stack.pop(),m=this.stack.pop()
this.stack.push(m/g)
break
case 3088:if(this.stack.length<2){l=!0
break}s=this.stack.pop()
var p=this.stack.pop()
if(0===s&&3===p){var b=this.stack.splice(this.stack.length-17,17)
this.stack.push(b[2]+b[0],b[3]+b[1],b[4],b[5],b[6],b[7],b[8],b[9],b[10],b[11],b[12],b[13],b[14]),l=this.executeCommand(13,t.flex,!0),this.flexing=!1,this.stack.push(b[15],b[16])}else 1===s&&0===p&&(this.flexing=!0)
break
case 3089:break
case 3105:this.stack=[]
break
default:(0,a.warn)('Unknown type 1 charstring command of "'+h+'"')}if(l)break}else h<=246?h-=139:h=h<=250?256*(h-247)+e[++u]+108:h<=254?-256*(h-251)-e[++u]-108:(255&e[++u])<<24|(255&e[++u])<<16|(255&e[++u])<<8|(255&e[++u])<<0,this.stack.push(h)}return l},executeCommand:function(e,t,r){var a=this.stack.length
if(e>a)return!0
for(var i=a-e,n=i;n<a;n++){var o=this.stack[n]
o===(0|o)?this.output.push(28,o>>8&255,255&o):(o=65536*o|0,this.output.push(255,o>>24&255,o>>16&255,o>>8&255,255&o))}return this.output.push.apply(this.output,t),r?this.stack.splice(i,e):this.stack.length=0,!1}},e}(),s=function(){function e(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102}function t(e,t,r){if(r>=e.length)return new Uint8Array(0)
var a,i,n=0|t
for(a=0;a<r;a++)n=52845*(e[a]+n)+22719&65535
var o=e.length-r,s=new Uint8Array(o)
for(a=r,i=0;i<o;a++,i++){var c=e[a]
s[i]=c^n>>8,n=52845*(c+n)+22719&65535}return s}function r(t,r,a){var i,n,o=0|r,s=t.length,c=s>>>1,l=new Uint8Array(c)
for(i=0,n=0;i<s;i++){var u=t[i]
if(e(u)){i++
for(var h;i<s&&!e(h=t[i]);)i++
if(i<s){var f=parseInt(String.fromCharCode(u,h),16)
l[n++]=f^o>>8,o=52845*(f+o)+22719&65535}}}return Array.prototype.slice.call(l,a,n)}function s(e){return 47===e||91===e||93===e||123===e||125===e||40===e||41===e}function c(a,i,o){if(i){var s=a.getBytes(),c=!(e(s[0])&&e(s[1])&&e(s[2])&&e(s[3]))
a=new n.Stream(c?t(s,l,4):r(s,l,4))}this.seacAnalysisEnabled=!!o,this.stream=a,this.nextChar()}var l=55665
return c.prototype={readNumberArray:function(){this.getToken()
for(var e=[];;){var t=this.getToken()
if(null===t||"]"===t||"}"===t)break
e.push(parseFloat(t||0))}return e},readNumber:function(){var e=this.getToken()
return parseFloat(e||0)},readInt:function(){var e=this.getToken()
return 0|parseInt(e||0,10)},readBoolean:function(){return"true"===this.getToken()?1:0},nextChar:function(){return this.currentChar=this.stream.getByte()},getToken:function(){for(var e=!1,t=this.currentChar;;){if(-1===t)return null
if(e)10!==t&&13!==t||(e=!1)
else if(37===t)e=!0
else if(!(0,a.isSpace)(t))break
t=this.nextChar()}if(s(t))return this.nextChar(),String.fromCharCode(t)
var r=""
do{r+=String.fromCharCode(t),t=this.nextChar()}while(t>=0&&!(0,a.isSpace)(t)&&!s(t))
return r},extractFontProgram:function(){var e=this.stream,r=[],a=[],i=Object.create(null)
i.lenIV=4
for(var n,s,c,l,u,h={subrs:[],charstrings:[],properties:{privateData:i}};null!==(n=this.getToken());)if("/"===n)switch(n=this.getToken()){case"CharStrings":for(this.getToken(),this.getToken(),this.getToken(),this.getToken();;){if(null===(n=this.getToken())||"end"===n)break
if("/"===n){var f=this.getToken()
s=this.readInt(),this.getToken(),c=e.makeSubStream(e.pos,s),l=h.properties.privateData.lenIV,u=t(c.getBytes(),4330,l),e.skip(s),this.nextChar(),n=this.getToken(),"noaccess"===n&&this.getToken(),a.push({glyph:f,encoded:u})}}break
case"Subrs":for(this.readInt(),this.getToken();"dup"===(n=this.getToken());){var d=this.readInt()
s=this.readInt(),this.getToken(),c=e.makeSubStream(e.pos,s),l=h.properties.privateData.lenIV,u=t(c.getBytes(),4330,l),e.skip(s),this.nextChar(),n=this.getToken(),"noaccess"===n&&this.getToken(),r[d]=u}break
case"BlueValues":case"OtherBlues":case"FamilyBlues":case"FamilyOtherBlues":var g=this.readNumberArray()
g.length>0&&g.length,1
break
case"StemSnapH":case"StemSnapV":h.properties.privateData[n]=this.readNumberArray()
break
case"StdHW":case"StdVW":h.properties.privateData[n]=this.readNumberArray()[0]
break
case"BlueShift":case"lenIV":case"BlueFuzz":case"BlueScale":case"LanguageGroup":case"ExpansionFactor":h.properties.privateData[n]=this.readNumber()
break
case"ForceBold":h.properties.privateData[n]=this.readBoolean()}for(var m=0;m<a.length;m++){f=a[m].glyph,u=a[m].encoded
var p=new o,b=p.convert(u,r,this.seacAnalysisEnabled),v=p.output
b&&(v=[14]),h.charstrings.push({glyphName:f,charstring:v,width:p.width,lsb:p.lsb,seac:p.seac})}return h},extractFontHeader:function(e){for(var t;null!==(t=this.getToken());)if("/"===t)switch(t=this.getToken()){case"FontMatrix":var r=this.readNumberArray()
e.fontMatrix=r
break
case"Encoding":var a,n=this.getToken()
if(/^\d+$/.test(n)){a=[]
var o=0|parseInt(n,10)
this.getToken()
for(var s=0;s<o;s++){for(t=this.getToken();"dup"!==t&&"def"!==t;)if(null===(t=this.getToken()))return
if("def"===t)break
var c=this.readInt()
this.getToken()
var l=this.getToken()
a[c]=l,this.getToken()}}else a=(0,i.getEncoding)(n)
e.builtInEncoding=a
break
case"FontBBox":var u=this.readNumberArray()
e.ascent=Math.max(u[3],u[1]),e.descent=Math.min(u[1],u[3]),e.ascentScaled=!0}}},c}()
t.Type1Parser=s},function(e,t,r){"use strict"
var a=r(61)
t.WorkerMessageHandler=a.WorkerMessageHandler},function(e,t,r){"use strict"
var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
if("undefined"==typeof PDFJS||!PDFJS.compatibilityChecked){var i=r(105),n="undefined"!=typeof navigator&&navigator.userAgent||"",o=/Android/.test(n),s=/Android\s[0-2][^\d]/.test(n),c=/Android\s[0-4][^\d]/.test(n),l=n.indexOf("Chrom")>=0,u=/Chrome\/(39|40)\./.test(n),h=n.indexOf("CriOS")>=0,f=n.indexOf("Trident")>=0,d=/\b(iPad|iPhone|iPod)(?=;)/.test(n),g=n.indexOf("Opera")>=0,m=/Safari\//.test(n)&&!/(Chrome\/|Android\s)/.test(n),p="object"===("undefined"==typeof window?"undefined":a(window))&&"object"===("undefined"==typeof document?"undefined":a(document))
"undefined"==typeof PDFJS&&(i.PDFJS={}),PDFJS.compatibilityChecked=!0,function(){function e(e,t){return new c(this.slice(e,t))}function t(e,t){arguments.length<2&&(t=0)
for(var r=0,a=e.length;r<a;++r,++t)this[t]=255&e[r]}function n(e,t){this.buffer=e,this.byteLength=e.length,this.length=t,s(this.length)}function o(e){return{get:function(){var t=this.buffer,r=e<<2
return(t[r]|t[r+1]<<8|t[r+2]<<16|t[r+3]<<24)>>>0},set:function(t){var r=this.buffer,a=e<<2
r[a]=255&t,r[a+1]=t>>8&255,r[a+2]=t>>16&255,r[a+3]=t>>>24&255}}}function s(e){for(;l<e;)Object.defineProperty(n.prototype,l,o(l)),l++}function c(r){var i,n,o
if("number"==typeof r)for(i=[],n=0;n<r;++n)i[n]=0
else if("slice"in r)i=r.slice(0)
else for(i=[],n=0,o=r.length;n<o;++n)i[n]=r[n]
return i.subarray=e,i.buffer=i,i.byteLength=i.length,i.set=t,"object"===(void 0===r?"undefined":a(r))&&r.buffer&&(i.buffer=r.buffer),i}if("undefined"==typeof Uint8ClampedArray&&(i.Uint8ClampedArray=r(63)),"undefined"!=typeof Uint8Array)return void 0===Uint8Array.prototype.subarray&&(Uint8Array.prototype.subarray=function(e,t){return new Uint8Array(this.slice(e,t))},Float32Array.prototype.subarray=function(e,t){return new Float32Array(this.slice(e,t))}),void("undefined"==typeof Float64Array&&(i.Float64Array=Float32Array))
n.prototype=Object.create(null)
var l=0
i.Uint8Array=c,i.Int8Array=c,i.Int32Array=c,i.Uint16Array=c,i.Float32Array=c,i.Float64Array=c,i.Uint32Array=function(){if(3===arguments.length){if(0!==arguments[1])throw new Error("offset !== 0 is not supported")
return new n(arguments[0],arguments[2])}return c.apply(this,arguments)}}(),function(){if(p&&window.CanvasPixelArray){var e=window.CanvasPixelArray.prototype
"buffer"in e||(Object.defineProperty(e,"buffer",{get:function(){return this},enumerable:!1,configurable:!0}),Object.defineProperty(e,"byteLength",{get:function(){return this.length},enumerable:!1,configurable:!0}))}}(),function(){i.URL||(i.URL=i.webkitURL)}(),function(){if(void 0!==Object.defineProperty){var e=!0
try{p&&Object.defineProperty(new Image,"id",{value:"test"})
var t=function(){}
t.prototype={get id(){}},Object.defineProperty(new t,"id",{value:"",configurable:!0,enumerable:!0,writable:!1})}catch(t){e=!1}if(e)return}Object.defineProperty=function(e,t,r){delete e[t],"get"in r&&e.__defineGetter__(t,r.get),"set"in r&&e.__defineSetter__(t,r.set),"value"in r&&(e.__defineSetter__(t,function(e){return this.__defineGetter__(t,function(){return e}),e}),e[t]=r.value)}}(),function(){if("undefined"!=typeof XMLHttpRequest){var e=XMLHttpRequest.prototype,t=new XMLHttpRequest
if("overrideMimeType"in t||Object.defineProperty(e,"overrideMimeType",{value:function(e){}}),!("responseType"in t)){if(Object.defineProperty(e,"responseType",{get:function(){return this._responseType||"text"},set:function(e){"text"!==e&&"arraybuffer"!==e||(this._responseType=e,"arraybuffer"===e&&"function"==typeof this.overrideMimeType&&this.overrideMimeType("text/plain; charset=x-user-defined"))}}),"undefined"!=typeof VBArray)return void Object.defineProperty(e,"response",{get:function(){return"arraybuffer"===this.responseType?new Uint8Array(new VBArray(this.responseBody).toArray()):this.responseText}})
Object.defineProperty(e,"response",{get:function(){if("arraybuffer"!==this.responseType)return this.responseText
var e,t=this.responseText,r=t.length,a=new Uint8Array(r)
for(e=0;e<r;++e)a[e]=255&t.charCodeAt(e)
return a.buffer}})}}}(),function(){if(!("btoa"in i)){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
i.btoa=function(t){var r,a,i=""
for(r=0,a=t.length;r<a;r+=3){var n=255&t.charCodeAt(r),o=255&t.charCodeAt(r+1),s=255&t.charCodeAt(r+2),c=n>>2,l=(3&n)<<4|o>>4,u=r+1<a?(15&o)<<2|s>>6:64,h=r+2<a?63&s:64
i+=e.charAt(c)+e.charAt(l)+e.charAt(u)+e.charAt(h)}return i}}}(),function(){if(!("atob"in i)){i.atob=function(e){if(e=e.replace(/=+$/,""),e.length%4==1)throw new Error("bad atob input")
for(var t,r,a=0,i=0,n="";r=e.charAt(i++);~r&&(t=a%4?64*t+r:r,a++%4)?n+=String.fromCharCode(255&t>>(-2*a&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r)
return n}}}(),function(){void 0===Function.prototype.bind&&(Function.prototype.bind=function(e){var t=this,r=Array.prototype.slice.call(arguments,1)
return function(){var a=r.concat(Array.prototype.slice.call(arguments))
return t.apply(e,a)}})}(),function(){if(p){"dataset"in document.createElement("div")||Object.defineProperty(HTMLElement.prototype,"dataset",{get:function(){if(this._dataset)return this._dataset
for(var e={},t=0,r=this.attributes.length;t<r;t++){var a=this.attributes[t]
if("data-"===a.name.substring(0,5)){e[a.name.substring(5).replace(/\-([a-z])/g,function(e,t){return t.toUpperCase()})]=a.value}}return Object.defineProperty(this,"_dataset",{value:e,writable:!1,enumerable:!1}),e},enumerable:!0})}}(),function(){function e(e,t,r,a){var i=e.className||"",n=i.split(/\s+/g)
""===n[0]&&n.shift()
var o=n.indexOf(t)
return o<0&&r&&n.push(t),o>=0&&a&&n.splice(o,1),e.className=n.join(" "),o>=0}if(p){if(!("classList"in document.createElement("div"))){var t={add:function(t){e(this.element,t,!0,!1)},contains:function(t){return e(this.element,t,!1,!1)},remove:function(t){e(this.element,t,!1,!0)},toggle:function(t){e(this.element,t,!0,!0)}}
Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){if(this._classList)return this._classList
var e=Object.create(t,{element:{value:this,writable:!1,enumerable:!0}})
return Object.defineProperty(this,"_classList",{value:e,writable:!1,enumerable:!1}),e},enumerable:!0})}}}(),function(){if(!("undefined"==typeof importScripts||"console"in i)){var e={},t={log:function(){var e=Array.prototype.slice.call(arguments)
i.postMessage({targetName:"main",action:"console_log",data:e})},error:function(){var e=Array.prototype.slice.call(arguments)
i.postMessage({targetName:"main",action:"console_error",data:e})},time:function(t){e[t]=Date.now()},timeEnd:function(t){var r=e[t]
if(!r)throw new Error("Unknown timer name "+t)
this.log("Timer:",t,Date.now()-r)}}
i.console=t}}(),function(){if(p)"console"in window?"bind"in console.log||(console.log=function(e){return function(t){return e(t)}}(console.log),console.error=function(e){return function(t){return e(t)}}(console.error),console.warn=function(e){return function(t){return e(t)}}(console.warn)):window.console={log:function(){},error:function(){},warn:function(){}}}(),function(){function e(e){t(e.target)&&e.stopPropagation()}function t(e){return e.disabled||e.parentNode&&t(e.parentNode)}g&&document.addEventListener("click",e,!0)}(),function(){(f||h)&&(PDFJS.disableCreateObjectURL=!0)}(),function(){"undefined"!=typeof navigator&&("language"in navigator||(PDFJS.locale=navigator.userLanguage||"en-US"))}(),function(){(m||s||u||d)&&(PDFJS.disableRange=!0,PDFJS.disableStream=!0)}(),function(){p&&(history.pushState&&!s||(PDFJS.disableHistory=!0))}(),function(){if(p)if(window.CanvasPixelArray)"function"!=typeof window.CanvasPixelArray.prototype.set&&(window.CanvasPixelArray.prototype.set=function(e){for(var t=0,r=this.length;t<r;t++)this[t]=e[t]})
else{var e,t=!1
if(l?(e=n.match(/Chrom(e|ium)\/([0-9]+)\./),t=e&&parseInt(e[2])<21):o?t=c:m&&(e=n.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//),t=e&&parseInt(e[1])<6),t){var r=window.CanvasRenderingContext2D.prototype,a=r.createImageData
r.createImageData=function(e,t){var r=a.call(this,e,t)
return r.data.set=function(e){for(var t=0,r=this.length;t<r;t++)this[t]=e[t]},r},r=null}}}(),function(){function e(){window.requestAnimationFrame=function(e){return window.setTimeout(e,20)},window.cancelAnimationFrame=function(e){window.clearTimeout(e)}}if(p)d?e():"requestAnimationFrame"in window||(window.requestAnimationFrame=window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame,window.requestAnimationFrame||e())}(),function(){(d||o)&&(PDFJS.maxCanvasPixels=5242880)}(),function(){p&&f&&window.parent!==window&&(PDFJS.disableFullscreen=!0)}(),function(){p&&("currentScript"in document||Object.defineProperty(document,"currentScript",{get:function(){var e=document.getElementsByTagName("script")
return e[e.length-1]},enumerable:!0,configurable:!0}))}(),function(){if(p){var e=document.createElement("input")
try{e.type="number"}catch(a){var t=e.constructor.prototype,r=Object.getOwnPropertyDescriptor(t,"type")
Object.defineProperty(t,"type",{get:function(){return r.get.call(this)},set:function(e){r.set.call(this,"number"===e?"text":e)},enumerable:!0,configurable:!0})}}}(),function(){if(p&&document.attachEvent){var e=document.constructor.prototype,t=Object.getOwnPropertyDescriptor(e,"readyState")
Object.defineProperty(e,"readyState",{get:function(){var e=t.get.call(this)
return"interactive"===e?"loading":e},set:function(e){t.set.call(this,e)},enumerable:!0,configurable:!0})}}(),function(){p&&void 0===Element.prototype.remove&&(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),function(){Number.isNaN||(Number.isNaN=function(e){return"number"==typeof e&&isNaN(e)})}(),function(){Number.isInteger||(Number.isInteger=function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e})}(),function(){if(i.Promise)return"function"!=typeof i.Promise.all&&(i.Promise.all=function(e){var t,r,a=0,n=[],o=new i.Promise(function(e,a){t=e,r=a})
return e.forEach(function(e,i){a++,e.then(function(e){n[i]=e,0===--a&&t(n)},r)}),0===a&&t(n),o}),"function"!=typeof i.Promise.resolve&&(i.Promise.resolve=function(e){return new i.Promise(function(t){t(e)})}),"function"!=typeof i.Promise.reject&&(i.Promise.reject=function(e){return new i.Promise(function(t,r){r(e)})}),void("function"!=typeof i.Promise.prototype.catch&&(i.Promise.prototype.catch=function(e){return i.Promise.prototype.then(void 0,e)}))
var e=2,t={handlers:[],running:!1,unhandledRejections:[],pendingRejectionCheck:!1,scheduleHandlers:function(e){0!==e._status&&(this.handlers=this.handlers.concat(e._handlers),e._handlers=[],this.running||(this.running=!0,setTimeout(this.runHandlers.bind(this),0)))},runHandlers:function(){for(var t=Date.now()+1;this.handlers.length>0;){var r=this.handlers.shift(),a=r.thisPromise._status,i=r.thisPromise._value
try{1===a?"function"==typeof r.onResolve&&(i=r.onResolve(i)):"function"==typeof r.onReject&&(i=r.onReject(i),a=1,r.thisPromise._unhandledRejection&&this.removeUnhandeledRejection(r.thisPromise))}catch(t){a=e,i=t}if(r.nextPromise._updateStatus(a,i),Date.now()>=t)break}if(this.handlers.length>0)return void setTimeout(this.runHandlers.bind(this),0)
this.running=!1},addUnhandledRejection:function(e){this.unhandledRejections.push({promise:e,time:Date.now()}),this.scheduleRejectionCheck()},removeUnhandeledRejection:function(e){e._unhandledRejection=!1
for(var t=0;t<this.unhandledRejections.length;t++)this.unhandledRejections[t].promise===e&&(this.unhandledRejections.splice(t),t--)},scheduleRejectionCheck:function(){var e=this
this.pendingRejectionCheck||(this.pendingRejectionCheck=!0,setTimeout(function(){e.pendingRejectionCheck=!1
for(var t=Date.now(),r=0;r<e.unhandledRejections.length;r++)if(t-e.unhandledRejections[r].time>500){var a=e.unhandledRejections[r].promise._value,i="Unhandled rejection: "+a
a.stack&&(i+="\n"+a.stack)
try{throw new Error(i)}catch(e){console.warn(i)}e.unhandledRejections.splice(r),r--}e.unhandledRejections.length&&e.scheduleRejectionCheck()},500))}},r=function(e){this._status=0,this._handlers=[]
try{e.call(this,this._resolve.bind(this),this._reject.bind(this))}catch(e){this._reject(e)}}
r.all=function(t){function a(t){o._status!==e&&(c=[],n(t))}var i,n,o=new r(function(e,t){i=e,n=t}),s=t.length,c=[]
if(0===s)return i(c),o
for(var l=0,u=t.length;l<u;++l){var h=t[l],f=function(t){return function(r){o._status!==e&&(c[t]=r,0===--s&&i(c))}}(l)
r.isPromise(h)?h.then(f,a):f(h)}return o},r.isPromise=function(e){return e&&"function"==typeof e.then},r.resolve=function(e){return new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,r){r(e)})},r.prototype={_status:null,_value:null,_handlers:null,_unhandledRejection:null,_updateStatus:function(a,i){if(1!==this._status&&this._status!==e){if(1===a&&r.isPromise(i))return void i.then(this._updateStatus.bind(this,1),this._updateStatus.bind(this,e))
this._status=a,this._value=i,a===e&&0===this._handlers.length&&(this._unhandledRejection=!0,t.addUnhandledRejection(this)),t.scheduleHandlers(this)}},_resolve:function(e){this._updateStatus(1,e)},_reject:function(t){this._updateStatus(e,t)},then:function(e,a){var i=new r(function(e,t){this.resolve=e,this.reject=t})
return this._handlers.push({thisPromise:this,onResolve:e,onReject:a,nextPromise:i}),t.scheduleHandlers(this),i},catch:function(e){return this.then(void 0,e)}},i.Promise=r}(),function(){function e(){this.id="$weakmap"+t++}if(!i.WeakMap){var t=0
e.prototype={has:function(e){return("object"===(void 0===e?"undefined":a(e))||"function"==typeof e)&&null!==e&&!!Object.getOwnPropertyDescriptor(e,this.id)},get:function(e){return this.has(e)?e[this.id]:void 0},set:function(e,t){Object.defineProperty(e,this.id,{value:t,enumerable:!1,configurable:!0})},delete:function(e){delete e[this.id]}},i.WeakMap=e}}(),function(){function e(e){return void 0!==f[e]}function t(){c.call(this),this._isInvalid=!0}function r(e){return""===e&&t.call(this),e.toLowerCase()}function n(e){var t=e.charCodeAt(0)
return t>32&&t<127&&-1===[34,35,60,62,63,96].indexOf(t)?e:encodeURIComponent(e)}function o(e){var t=e.charCodeAt(0)
return t>32&&t<127&&-1===[34,35,60,62,96].indexOf(t)?e:encodeURIComponent(e)}function s(a,i,s){function c(e){y.push(e)}var l=i||"scheme start",u=0,h="",b=!1,v=!1,y=[]
e:for(;(a[u-1]!==g||0===u)&&!this._isInvalid;){var w=a[u]
switch(l){case"scheme start":if(!w||!m.test(w)){if(i){c("Invalid scheme.")
break e}h="",l="no scheme"
continue}h+=w.toLowerCase(),l="scheme"
break
case"scheme":if(w&&p.test(w))h+=w.toLowerCase()
else{if(":"!==w){if(i){if(w===g)break e
c("Code point not allowed in scheme: "+w)
break e}h="",u=0,l="no scheme"
continue}if(this._scheme=h,h="",i)break e
e(this._scheme)&&(this._isRelative=!0),l="file"===this._scheme?"relative":this._isRelative&&s&&s._scheme===this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break
case"scheme data":"?"===w?(this._query="?",l="query"):"#"===w?(this._fragment="#",l="fragment"):w!==g&&"\t"!==w&&"\n"!==w&&"\r"!==w&&(this._schemeData+=n(w))
break
case"no scheme":if(s&&e(s._scheme)){l="relative"
continue}c("Missing scheme."),t.call(this)
break
case"relative or authority":if("/"!==w||"/"!==a[u+1]){c("Expected /, got: "+w),l="relative"
continue}l="authority ignore slashes"
break
case"relative":if(this._isRelative=!0,"file"!==this._scheme&&(this._scheme=s._scheme),w===g){this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._username=s._username,this._password=s._password
break e}if("/"===w||"\\"===w)"\\"===w&&c("\\ is an invalid code point."),l="relative slash"
else if("?"===w)this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query="?",this._username=s._username,this._password=s._password,l="query"
else{if("#"!==w){var k=a[u+1],S=a[u+2];("file"!==this._scheme||!m.test(w)||":"!==k&&"|"!==k||S!==g&&"/"!==S&&"\\"!==S&&"?"!==S&&"#"!==S)&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password,this._path=s._path.slice(),this._path.pop()),l="relative path"
continue}this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._fragment="#",this._username=s._username,this._password=s._password,l="fragment"}break
case"relative slash":if("/"!==w&&"\\"!==w){"file"!==this._scheme&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password),l="relative path"
continue}"\\"===w&&c("\\ is an invalid code point."),l="file"===this._scheme?"file host":"authority ignore slashes"
break
case"authority first slash":if("/"!==w){c("Expected '/', got: "+w),l="authority ignore slashes"
continue}l="authority second slash"
break
case"authority second slash":if(l="authority ignore slashes","/"!==w){c("Expected '/', got: "+w)
continue}break
case"authority ignore slashes":if("/"!==w&&"\\"!==w){l="authority"
continue}c("Expected authority, got: "+w)
break
case"authority":if("@"===w){b&&(c("@ already seen."),h+="%40"),b=!0
for(var C=0;C<h.length;C++){var x=h[C]
if("\t"!==x&&"\n"!==x&&"\r"!==x)if(":"!==x||null!==this._password){var A=n(x)
null!==this._password?this._password+=A:this._username+=A}else this._password=""
else c("Invalid whitespace in authority.")}h=""}else{if(w===g||"/"===w||"\\"===w||"?"===w||"#"===w){u-=h.length,h="",l="host"
continue}h+=w}break
case"file host":if(w===g||"/"===w||"\\"===w||"?"===w||"#"===w){2!==h.length||!m.test(h[0])||":"!==h[1]&&"|"!==h[1]?0===h.length?l="relative path start":(this._host=r.call(this,h),h="",l="relative path start"):l="relative path"
continue}"\t"===w||"\n"===w||"\r"===w?c("Invalid whitespace in file host."):h+=w
break
case"host":case"hostname":if(":"!==w||v){if(w===g||"/"===w||"\\"===w||"?"===w||"#"===w){if(this._host=r.call(this,h),h="",l="relative path start",i)break e
continue}"\t"!==w&&"\n"!==w&&"\r"!==w?("["===w?v=!0:"]"===w&&(v=!1),h+=w):c("Invalid code point in host/hostname: "+w)}else if(this._host=r.call(this,h),h="",l="port","hostname"===i)break e
break
case"port":if(/[0-9]/.test(w))h+=w
else{if(w===g||"/"===w||"\\"===w||"?"===w||"#"===w||i){if(""!==h){var P=parseInt(h,10)
P!==f[this._scheme]&&(this._port=P+""),h=""}if(i)break e
l="relative path start"
continue}"\t"===w||"\n"===w||"\r"===w?c("Invalid code point in port: "+w):t.call(this)}break
case"relative path start":if("\\"===w&&c("'\\' not allowed in path."),l="relative path","/"!==w&&"\\"!==w)continue
break
case"relative path":if(w!==g&&"/"!==w&&"\\"!==w&&(i||"?"!==w&&"#"!==w))"\t"!==w&&"\n"!==w&&"\r"!==w&&(h+=n(w))
else{"\\"===w&&c("\\ not allowed in relative path.")
var I;(I=d[h.toLowerCase()])&&(h=I),".."===h?(this._path.pop(),"/"!==w&&"\\"!==w&&this._path.push("")):"."===h&&"/"!==w&&"\\"!==w?this._path.push(""):"."!==h&&("file"===this._scheme&&0===this._path.length&&2===h.length&&m.test(h[0])&&"|"===h[1]&&(h=h[0]+":"),this._path.push(h)),h="","?"===w?(this._query="?",l="query"):"#"===w&&(this._fragment="#",l="fragment")}break
case"query":i||"#"!==w?w!==g&&"\t"!==w&&"\n"!==w&&"\r"!==w&&(this._query+=o(w)):(this._fragment="#",l="fragment")
break
case"fragment":w!==g&&"\t"!==w&&"\n"!==w&&"\r"!==w&&(this._fragment+=w)}u++}}function c(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function l(e,t){void 0===t||t instanceof l||(t=new l(String(t))),this._url=e,c.call(this)
var r=e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"")
s.call(this,r,null,t)}var u=!1
try{if("function"==typeof URL&&"object"===a(URL.prototype)&&"origin"in URL.prototype){var h=new URL("b","http://a")
h.pathname="c%20d",u="http://a/c%20d"===h.href}}catch(e){}if(!u){var f=Object.create(null)
f.ftp=21,f.file=0,f.gopher=70,f.http=80,f.https=443,f.ws=80,f.wss=443
var d=Object.create(null)
d["%2e"]=".",d[".%2e"]="..",d["%2e."]="..",d["%2e%2e"]=".."
var g,m=/[a-zA-Z]/,p=/[a-zA-Z0-9\+\-\.]/
l.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url
var e=""
return""===this._username&&null===this._password||(e=this._username+(null!==this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+e+this.host:"")+this.pathname+this._query+this._fragment},set href(e){c.call(this),s.call(this,e)},get protocol(){return this._scheme+":"},set protocol(e){this._isInvalid||s.call(this,e+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(e){!this._isInvalid&&this._isRelative&&s.call(this,e,"host")},get hostname(){return this._host},set hostname(e){!this._isInvalid&&this._isRelative&&s.call(this,e,"hostname")},get port(){return this._port},set port(e){!this._isInvalid&&this._isRelative&&s.call(this,e,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(e){!this._isInvalid&&this._isRelative&&(this._path=[],s.call(this,e,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"===this._query?"":this._query},set search(e){!this._isInvalid&&this._isRelative&&(this._query="?","?"===e[0]&&(e=e.slice(1)),s.call(this,e,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"===this._fragment?"":this._fragment},set hash(e){this._isInvalid||(this._fragment="#","#"===e[0]&&(e=e.slice(1)),s.call(this,e,"fragment"))},get origin(){var e
if(this._isInvalid||!this._scheme)return""
switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"
case"blob":try{return new l(this._schemeData).origin||"null"}catch(e){}return"null"}return e=this.host,e?this._scheme+"://"+e:""}}
var b=i.URL
b&&(l.createObjectURL=function(e){return b.createObjectURL.apply(b,arguments)},l.revokeObjectURL=function(e){b.revokeObjectURL(e)}),i.URL=l}}()}},function(e,t,r){"use strict"
e.exports="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:{}},function(e,t,r){"use strict"
var a=!1
if("undefined"!=typeof ReadableStream)try{new ReadableStream({start:function(e){e.close()}}),a=!0}catch(e){}t.ReadableStream=a?ReadableStream:r(62).ReadableStream}])})
