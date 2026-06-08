(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Pc="EUR",Lc="€",Dc="Tap",Ic=[{id:"tap-bar-2",name:"Tap Bar 2",tagline:"2-Kachel-Aufsteller mit geprägtem Logo. Beliebt bei Cafés & Salons.",tileCount:2,price:89},{id:"tap-bar-3",name:"Tap Bar 3",tagline:"3-Kachel-Aufsteller. Bewertung, Social und ein Extra.",tileCount:3,price:99},{id:"tap-bar-4",name:"Tap Bar 4",tagline:"4-Kachel-Aufsteller. Vier frei belegbare Ziele auf einen Tap.",tileCount:4,price:129}],Uc="tap-bar-4",Nc=[{id:"base",label:"Korpus",default:"#F2F1EB"},{id:"frame",label:"Rahmen",default:"#1C1C1C"},{id:"tile",label:"Kacheln",default:"#1C1C1C"},{id:"icon",label:"Icons",default:"#FFFFFF"},{id:"logo",label:"Logo",default:"#1C1C1C"}],Oc=[{name:"Pearl White",hex:"#F2F1EB"},{name:"Jade White",hex:"#FFFFFF"},{name:"Slate Black",hex:"#1C1C1C"},{name:"Graphite",hex:"#4A4A4A"},{name:"Sky Blue",hex:"#3B82F6"},{name:"Royal",hex:"#1E3A8A"},{name:"Forest",hex:"#2F5D3A"},{name:"Sage",hex:"#9CAF88"},{name:"Sunflower",hex:"#F2B705"},{name:"Coral",hex:"#E8643C"},{name:"Ruby",hex:"#9B1B30"},{name:"Lavender",hex:"#8B7FD6"},{name:"Blush",hex:"#F3C9D3"},{name:"Sand",hex:"#D8C3A5"}],Fc=[{id:"globe",label:"Website"},{id:"camera",label:"Instagram"},{id:"chat",label:"WhatsApp"},{id:"note",label:"TikTok"},{id:"star",label:"Google"},{id:"heart",label:"Favorit"},{id:"mail",label:"E-Mail"},{id:"pin",label:"Standort"},{id:"music",label:"Spotify"},{id:"play",label:"YouTube"},{id:"cart",label:"Shop"},{id:"qr",label:"QR-Code"}],Uo={currency:Pc,currencySymbol:Lc,brand:Dc,products:Ic,defaultProductId:Uc,parts:Nc,palette:Oc,icons:Fc};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lr="160",On={ROTATE:0,DOLLY:1,PAN:2},Fn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bc=0,$r=1,zc=2,No=1,Oo=2,$e=3,mn=0,Se=1,Qe=2,fn=0,ri=1,Qr=2,ta=3,ea=4,Hc=5,Tn=100,Gc=101,kc=102,na=103,ia=104,Vc=200,Wc=201,Xc=202,qc=203,mr=204,gr=205,Yc=206,Zc=207,jc=208,Kc=209,Jc=210,$c=211,Qc=212,tl=213,el=214,nl=0,il=1,sl=2,ps=3,rl=4,al=5,ol=6,cl=7,Fo=0,ll=1,hl=2,dn=0,ul=1,fl=2,dl=3,Bo=4,pl=5,ml=6,zo=300,ci=301,li=302,_r=303,xr=304,Ms=306,vr=1e3,ze=1001,Mr=1002,ye=1003,sa=1004,Ps=1005,De=1006,gl=1007,Ri=1008,pn=1009,_l=1010,xl=1011,Dr=1012,Ho=1013,hn=1014,un=1015,Ci=1016,Go=1017,ko=1018,An=1020,vl=1021,He=1023,Ml=1024,yl=1025,wn=1026,hi=1027,Sl=1028,Vo=1029,El=1030,Wo=1031,Xo=1033,Ls=33776,Ds=33777,Is=33778,Us=33779,ra=35840,aa=35841,oa=35842,ca=35843,qo=36196,la=37492,ha=37496,ua=37808,fa=37809,da=37810,pa=37811,ma=37812,ga=37813,_a=37814,xa=37815,va=37816,Ma=37817,ya=37818,Sa=37819,Ea=37820,Ta=37821,Ns=36492,ba=36494,Aa=36495,Tl=36283,wa=36284,Ra=36285,Ca=36286,Yo=3e3,Rn=3001,bl=3200,Al=3201,Zo=0,wl=1,Ie="",oe="srgb",en="srgb-linear",Ir="display-p3",ys="display-p3-linear",ms="linear",Qt="srgb",gs="rec709",_s="p3",Bn=7680,Pa=519,Rl=512,Cl=513,Pl=514,jo=515,Ll=516,Dl=517,Il=518,Ul=519,La=35044,Da="300 es",yr=1035,tn=2e3,xs=2001;class Un{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fs=Math.PI/180,Sr=180/Math.PI;function fi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Nl(i,t){return(i%t+t)%t}function Os(i,t,e){return(1-e)*i+e*t}function Ia(i){return(i&i-1)===0&&i!==0}function Er(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ol={DEG2RAD:fs};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,s,r,o,a,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],g=n[5],_=n[8],x=s[0],p=s[3],u=s[6],A=s[1],v=s[4],E=s[7],N=s[2],P=s[5],C=s[8];return r[0]=o*x+a*A+c*N,r[3]=o*p+a*v+c*P,r[6]=o*u+a*E+c*C,r[1]=l*x+h*A+f*N,r[4]=l*p+h*v+f*P,r[7]=l*u+h*E+f*C,r[2]=d*x+g*A+_*N,r[5]=d*p+g*v+_*P,r[8]=d*u+g*E+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,d=a*c-h*r,g=l*r-o*c,_=e*f+n*d+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=f*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=g*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fs.makeScale(t,e)),this}rotate(t){return this.premultiply(Fs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fs=new Bt;function Ko(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fl(){const i=vs("canvas");return i.style.display="block",i}const Ua={};function Ti(i){i in Ua||(Ua[i]=!0,console.warn(i))}const Na=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oa=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fi={[en]:{transfer:ms,primaries:gs,toReference:i=>i,fromReference:i=>i},[oe]:{transfer:Qt,primaries:gs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ys]:{transfer:ms,primaries:_s,toReference:i=>i.applyMatrix3(Oa),fromReference:i=>i.applyMatrix3(Na)},[Ir]:{transfer:Qt,primaries:_s,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Oa),fromReference:i=>i.applyMatrix3(Na).convertLinearToSRGB()}},Bl=new Set([en,ys]),$t={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Bl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Fi[t].toReference,s=Fi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Fi[i].primaries},getTransfer:function(i){return i===Ie?ms:Fi[i].transfer}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zn;class Jo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zn===void 0&&(zn=vs("canvas")),zn.width=t.width,zn.height=t.height;const n=zn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zl=0;class $o{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=fi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zs(s[o].image)):r.push(zs(s[o]))}else r=zs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function zs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hl=0;class Te extends Un{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=ze,s=ze,r=De,o=Ri,a=He,c=pn,l=Te.DEFAULT_ANISOTROPY,h=Ie){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=fi(),this.name="",this.source=new $o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Rn?oe:Ie),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x=t.x-Math.floor(t.x);break;case ze:t.x=t.x<0?0:1;break;case Mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y=t.y-Math.floor(t.y);break;case ze:t.y=t.y<0?0:1;break;case Mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===oe?Rn:Yo}set encoding(t){Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Rn?oe:Ie}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=zo;Te.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,s=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],g=c[5],_=c[9],x=c[2],p=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+g+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,E=(g+1)/2,N=(u+1)/2,P=(h+d)/4,C=(f+x)/4,Z=(_+p)/4;return v>E&&v>N?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=P/n,r=C/n):E>N?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=P/s,r=Z/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=C/r,s=Z/r),this.set(n,s,r,e),this}let A=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(f-x)/A,this.z=(d-h)/A,this.w=Math.acos((l+g+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gl extends Un{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(Ti("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Rn?oe:Ie),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Te(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $o(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Gl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qo extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ye,this.minFilter=ye,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ye,this.minFilter=ye,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const d=r[o+0],g=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=g,t[e+2]=_,t[e+3]=x;return}if(f!==x||c!==d||l!==g||h!==_){let p=1-a;const u=c*d+l*g+h*_+f*x,A=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const N=Math.sqrt(v),P=Math.atan2(N,u*A);p=Math.sin(p*P)/N,a=Math.sin(a*P)/N}const E=a*A;if(c=c*p+d*E,l=l*p+g*E,h=h*p+_*E,f=f*p+x*E,p===1-a){const N=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=N,l*=N,h*=N,f*=N}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],d=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+h*f+c*g-l*d,t[e+1]=c*_+h*d+l*f-a*g,t[e+2]=l*_+h*g+a*d-c*f,t[e+3]=h*_-a*f-c*d-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),d=c(n/2),g=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*f+l*g*_,this._y=l*g*f-d*h*_,this._z=l*h*_+d*g*f,this._w=l*h*f-d*g*_;break;case"YXZ":this._x=d*h*f+l*g*_,this._y=l*g*f-d*h*_,this._z=l*h*_-d*g*f,this._w=l*h*f+d*g*_;break;case"ZXY":this._x=d*h*f-l*g*_,this._y=l*g*f+d*h*_,this._z=l*h*_+d*g*f,this._w=l*h*f-d*g*_;break;case"ZYX":this._x=d*h*f-l*g*_,this._y=l*g*f+d*h*_,this._z=l*h*_-d*g*f,this._w=l*h*f+d*g*_;break;case"YZX":this._x=d*h*f+l*g*_,this._y=l*g*f+d*h*_,this._z=l*h*_-d*g*f,this._w=l*h*f-d*g*_;break;case"XZY":this._x=d*h*f-l*g*_,this._y=l*g*f-d*h*_,this._z=l*h*_+d*g*f,this._w=l*h*f+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-c)*g,this._y=(r-l)*g,this._z=(o-s)*g}else if(n>a&&n>f){const g=2*Math.sqrt(1+n-a-f);this._w=(h-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+l)/g}else if(a>f){const g=2*Math.sqrt(1+a-n-f);this._w=(r-l)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+f-n-a);this._w=(o-s)/g,this._x=(r+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hs.copy(this).projectOnVector(t),this.sub(Hs)}reflect(t){return this.sub(Hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new z,Fa=new Ln;class Ii{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ne.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ne.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ne.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ne):Ne.fromBufferAttribute(r,o),Ne.applyMatrix4(t.matrixWorld),this.expandByPoint(Ne);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bi.copy(n.boundingBox)),Bi.applyMatrix4(t.matrixWorld),this.union(Bi)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ne),Ne.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_i),zi.subVectors(this.max,_i),Hn.subVectors(t.a,_i),Gn.subVectors(t.b,_i),kn.subVectors(t.c,_i),sn.subVectors(Gn,Hn),rn.subVectors(kn,Gn),xn.subVectors(Hn,kn);let e=[0,-sn.z,sn.y,0,-rn.z,rn.y,0,-xn.z,xn.y,sn.z,0,-sn.x,rn.z,0,-rn.x,xn.z,0,-xn.x,-sn.y,sn.x,0,-rn.y,rn.x,0,-xn.y,xn.x,0];return!Gs(e,Hn,Gn,kn,zi)||(e=[1,0,0,0,1,0,0,0,1],!Gs(e,Hn,Gn,kn,zi))?!1:(Hi.crossVectors(sn,rn),e=[Hi.x,Hi.y,Hi.z],Gs(e,Hn,Gn,kn,zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ne).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ne).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qe=[new z,new z,new z,new z,new z,new z,new z,new z],Ne=new z,Bi=new Ii,Hn=new z,Gn=new z,kn=new z,sn=new z,rn=new z,xn=new z,_i=new z,zi=new z,Hi=new z,vn=new z;function Gs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vn.fromArray(i,r);const a=s.x*Math.abs(vn.x)+s.y*Math.abs(vn.y)+s.z*Math.abs(vn.z),c=t.dot(vn),l=e.dot(vn),h=n.dot(vn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Vl=new Ii,xi=new z,ks=new z;class Ur{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xi.subVectors(t,this.center);const e=xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xi.copy(t.center).add(ks)),this.expandByPoint(xi.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ye=new z,Vs=new z,Gi=new z,an=new z,Ws=new z,ki=new z,Xs=new z;class Nr{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ye)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ye.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ye.copy(this.origin).addScaledVector(this.direction,e),Ye.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vs.copy(t).add(e).multiplyScalar(.5),Gi.copy(e).sub(t).normalize(),an.copy(this.origin).sub(Vs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Gi),a=an.dot(this.direction),c=-an.dot(Gi),l=an.lengthSq(),h=Math.abs(1-o*o);let f,d,g,_;if(h>0)if(f=o*c-a,d=o*a-c,_=r*h,f>=0)if(d>=-_)if(d<=_){const x=1/h;f*=x,d*=x,g=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),g=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-r,-c),r),g=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),g=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Vs).addScaledVector(Gi,d),g}intersectSphere(t,e){Ye.subVectors(t.center,this.origin);const n=Ye.dot(this.direction),s=Ye.dot(Ye)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ye)!==null}intersectTriangle(t,e,n,s,r){Ws.subVectors(e,t),ki.subVectors(n,t),Xs.crossVectors(Ws,ki);let o=this.direction.dot(Xs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;an.subVectors(this.origin,t);const c=a*this.direction.dot(ki.crossVectors(an,ki));if(c<0)return null;const l=a*this.direction.dot(Ws.cross(an));if(l<0||c+l>o)return null;const h=-a*an.dot(Xs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,o,a,c,l,h,f,d,g,_,x,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,f,d,g,_,x,p)}set(t,e,n,s,r,o,a,c,l,h,f,d,g,_,x,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=g,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Vn.setFromMatrixColumn(t,0).length(),r=1/Vn.setFromMatrixColumn(t,1).length(),o=1/Vn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=o*h,g=o*f,_=a*h,x=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=g+_*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=_+g*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,g=c*f,_=l*h,x=l*f;e[0]=d+x*a,e[4]=_*a-g,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=g*a-_,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,g=c*f,_=l*h,x=l*f;e[0]=d-x*a,e[4]=-o*f,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,g=o*f,_=a*h,x=a*f;e[0]=c*h,e[4]=_*l-g,e[8]=d*l+x,e[1]=c*f,e[5]=x*l+d,e[9]=g*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,g=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=x-d*f,e[8]=_*f+g,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=g*f+_,e[10]=d-x*f}else if(t.order==="XZY"){const d=o*c,g=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+x,e[5]=o*h,e[9]=g*f-_,e[2]=_*f-g,e[6]=a*h,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wl,t,Xl)}lookAt(t,e,n){const s=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),on.crossVectors(n,Ae),on.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),on.crossVectors(n,Ae)),on.normalize(),Vi.crossVectors(Ae,on),s[0]=on.x,s[4]=Vi.x,s[8]=Ae.x,s[1]=on.y,s[5]=Vi.y,s[9]=Ae.y,s[2]=on.z,s[6]=Vi.z,s[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],g=n[13],_=n[2],x=n[6],p=n[10],u=n[14],A=n[3],v=n[7],E=n[11],N=n[15],P=s[0],C=s[4],Z=s[8],y=s[12],w=s[1],j=s[5],q=s[9],ft=s[13],F=s[2],Y=s[6],K=s[10],J=s[14],G=s[3],rt=s[7],st=s[11],pt=s[15];return r[0]=o*P+a*w+c*F+l*G,r[4]=o*C+a*j+c*Y+l*rt,r[8]=o*Z+a*q+c*K+l*st,r[12]=o*y+a*ft+c*J+l*pt,r[1]=h*P+f*w+d*F+g*G,r[5]=h*C+f*j+d*Y+g*rt,r[9]=h*Z+f*q+d*K+g*st,r[13]=h*y+f*ft+d*J+g*pt,r[2]=_*P+x*w+p*F+u*G,r[6]=_*C+x*j+p*Y+u*rt,r[10]=_*Z+x*q+p*K+u*st,r[14]=_*y+x*ft+p*J+u*pt,r[3]=A*P+v*w+E*F+N*G,r[7]=A*C+v*j+E*Y+N*rt,r[11]=A*Z+v*q+E*K+N*st,r[15]=A*y+v*ft+E*J+N*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],g=t[14],_=t[3],x=t[7],p=t[11],u=t[15];return _*(+r*c*f-s*l*f-r*a*d+n*l*d+s*a*g-n*c*g)+x*(+e*c*g-e*l*d+r*o*d-s*o*g+s*l*h-r*c*h)+p*(+e*l*f-e*a*g-r*o*f+n*o*g+r*a*h-n*l*h)+u*(-s*a*h-e*c*f+e*a*d+s*o*f-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],g=t[11],_=t[12],x=t[13],p=t[14],u=t[15],A=f*p*l-x*d*l+x*c*g-a*p*g-f*c*u+a*d*u,v=_*d*l-h*p*l-_*c*g+o*p*g+h*c*u-o*d*u,E=h*x*l-_*f*l+_*a*g-o*x*g-h*a*u+o*f*u,N=_*f*c-h*x*c-_*a*d+o*x*d+h*a*p-o*f*p,P=e*A+n*v+s*E+r*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return t[0]=A*C,t[1]=(x*d*r-f*p*r-x*s*g+n*p*g+f*s*u-n*d*u)*C,t[2]=(a*p*r-x*c*r+x*s*l-n*p*l-a*s*u+n*c*u)*C,t[3]=(f*c*r-a*d*r-f*s*l+n*d*l+a*s*g-n*c*g)*C,t[4]=v*C,t[5]=(h*p*r-_*d*r+_*s*g-e*p*g-h*s*u+e*d*u)*C,t[6]=(_*c*r-o*p*r-_*s*l+e*p*l+o*s*u-e*c*u)*C,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*g+e*c*g)*C,t[8]=E*C,t[9]=(_*f*r-h*x*r-_*n*g+e*x*g+h*n*u-e*f*u)*C,t[10]=(o*x*r-_*a*r+_*n*l-e*x*l-o*n*u+e*a*u)*C,t[11]=(h*a*r-o*f*r-h*n*l+e*f*l+o*n*g-e*a*g)*C,t[12]=N*C,t[13]=(h*x*s-_*f*s+_*n*d-e*x*d-h*n*p+e*f*p)*C,t[14]=(_*a*s-o*x*s-_*n*c+e*x*c+o*n*p-e*a*p)*C,t[15]=(o*f*s-h*a*s+h*n*c-e*f*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,d=r*l,g=r*h,_=r*f,x=o*h,p=o*f,u=a*f,A=c*l,v=c*h,E=c*f,N=n.x,P=n.y,C=n.z;return s[0]=(1-(x+u))*N,s[1]=(g+E)*N,s[2]=(_-v)*N,s[3]=0,s[4]=(g-E)*P,s[5]=(1-(d+u))*P,s[6]=(p+A)*P,s[7]=0,s[8]=(_+v)*C,s[9]=(p-A)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Vn.set(s[0],s[1],s[2]).length();const o=Vn.set(s[4],s[5],s[6]).length(),a=Vn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Oe.copy(this);const l=1/r,h=1/o,f=1/a;return Oe.elements[0]*=l,Oe.elements[1]*=l,Oe.elements[2]*=l,Oe.elements[4]*=h,Oe.elements[5]*=h,Oe.elements[6]*=h,Oe.elements[8]*=f,Oe.elements[9]*=f,Oe.elements[10]*=f,e.setFromRotationMatrix(Oe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=tn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let g,_;if(a===tn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===xs)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=tn){const c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(o-r),d=(e+t)*l,g=(n+s)*h;let _,x;if(a===tn)_=(o+r)*f,x=-2*f;else if(a===xs)_=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vn=new z,Oe=new ce,Wl=new z(0,0,0),Xl=new z(1,1,1),on=new z,Vi=new z,Ae=new z,Ba=new ce,za=new Ln;class Ss{constructor(t=0,e=0,n=0,s=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ba.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ba,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return za.setFromEuler(this),this.setFromQuaternion(za,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class Or{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ql=0;const Ha=new z,Wn=new Ln,Ze=new ce,Wi=new z,vi=new z,Yl=new z,Zl=new Ln,Ga=new z(1,0,0),ka=new z(0,1,0),Va=new z(0,0,1),jl={type:"added"},Kl={type:"removed"};class ge extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new z,e=new Ss,n=new Ln,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Bt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wn.setFromAxisAngle(t,e),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(t,e){return Wn.setFromAxisAngle(t,e),this.quaternion.premultiply(Wn),this}rotateX(t){return this.rotateOnAxis(Ga,t)}rotateY(t){return this.rotateOnAxis(ka,t)}rotateZ(t){return this.rotateOnAxis(Va,t)}translateOnAxis(t,e){return Ha.copy(t).applyQuaternion(this.quaternion),this.position.add(Ha.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ga,t)}translateY(t){return this.translateOnAxis(ka,t)}translateZ(t){return this.translateOnAxis(Va,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ze.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wi.copy(t):Wi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ze.lookAt(vi,Wi,this.up):Ze.lookAt(Wi,vi,this.up),this.quaternion.setFromRotationMatrix(Ze),s&&(Ze.extractRotation(s.matrixWorld),Wn.setFromRotationMatrix(Ze),this.quaternion.premultiply(Wn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(jl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ze.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ze.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ze),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,t,Yl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,Zl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new z(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fe=new z,je=new z,qs=new z,Ke=new z,Xn=new z,qn=new z,Wa=new z,Ys=new z,Zs=new z,js=new z;let Xi=!1;class Be{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fe.subVectors(t,e),s.cross(Fe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fe.subVectors(s,e),je.subVectors(n,e),qs.subVectors(t,e);const o=Fe.dot(Fe),a=Fe.dot(je),c=Fe.dot(qs),l=je.dot(je),h=je.dot(qs),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,g=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ke)===null?!1:Ke.x>=0&&Ke.y>=0&&Ke.x+Ke.y<=1}static getUV(t,e,n,s,r,o,a,c){return Xi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xi=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ke)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ke.x),c.addScaledVector(o,Ke.y),c.addScaledVector(a,Ke.z),c)}static isFrontFacing(t,e,n,s){return Fe.subVectors(n,e),je.subVectors(t,e),Fe.cross(je).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fe.subVectors(this.c,this.b),je.subVectors(this.a,this.b),Fe.cross(je).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Be.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Xi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xi=!0),Be.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return Be.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Xn.subVectors(s,n),qn.subVectors(r,n),Ys.subVectors(t,n);const c=Xn.dot(Ys),l=qn.dot(Ys);if(c<=0&&l<=0)return e.copy(n);Zs.subVectors(t,s);const h=Xn.dot(Zs),f=qn.dot(Zs);if(h>=0&&f<=h)return e.copy(s);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Xn,o);js.subVectors(t,r);const g=Xn.dot(js),_=qn.dot(js);if(_>=0&&g<=_)return e.copy(r);const x=g*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(qn,a);const p=h*_-g*f;if(p<=0&&f-h>=0&&g-_>=0)return Wa.subVectors(r,s),a=(f-h)/(f-h+(g-_)),e.copy(s).addScaledVector(Wa,a);const u=1/(p+x+d);return o=x*u,a=d*u,e.copy(n).addScaledVector(Xn,o).addScaledVector(qn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},qi={h:0,s:0,l:0};function Ks(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Nl(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ks(o,r,t+1/3),this.g=Ks(o,r,t),this.b=Ks(o,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oe){const n=tc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oe){return $t.fromWorkingColorSpace(ve.copy(this),t),Math.round(me(ve.r*255,0,255))*65536+Math.round(me(ve.g*255,0,255))*256+Math.round(me(ve.b*255,0,255))}getHexString(t=oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(ve.copy(this),e);const n=ve.r,s=ve.g,r=ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=oe){$t.fromWorkingColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,s=ve.b;return t!==oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(cn),this.setHSL(cn.h+t,cn.s+e,cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cn),t.getHSL(qi);const n=Os(cn.h,qi.h,e),s=Os(cn.s,qi.s,e),r=Os(cn.l,qi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new jt;jt.NAMES=tc;let Jl=0;class di extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=ri,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mr,this.blendDst=gr,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bn,this.stencilZFail=Bn,this.stencilZPass=Bn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mr&&(n.blendSrc=this.blendSrc),this.blendDst!==gr&&(n.blendDst=this.blendDst),this.blendEquation!==Tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fr extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new z,Yi=new lt;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=La,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yi.fromBufferAttribute(this,e),Yi.applyMatrix3(t),this.setXY(e,Yi.x,Yi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==La&&(t.usage=this.usage),t}}class ec extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nc extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ue extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $l=0;const Pe=new ce,Js=new ge,Yn=new z,we=new Ii,Mi=new Ii,pe=new z;class nn extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ko(t)?nc:ec)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return Js.lookAt(t),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];we.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Mi.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(we.min,Mi.min),we.expandByPoint(pe),pe.addVectors(we.max,Mi.max),we.expandByPoint(pe)):(we.expandByPoint(Mi.min),we.expandByPoint(Mi.max))}we.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)pe.fromBufferAttribute(a,l),c&&(Yn.fromBufferAttribute(t,l),pe.add(Yn)),s=Math.max(s,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new z,h[w]=new z;const f=new z,d=new z,g=new z,_=new lt,x=new lt,p=new lt,u=new z,A=new z;function v(w,j,q){f.fromArray(s,w*3),d.fromArray(s,j*3),g.fromArray(s,q*3),_.fromArray(o,w*2),x.fromArray(o,j*2),p.fromArray(o,q*2),d.sub(f),g.sub(f),x.sub(_),p.sub(_);const ft=1/(x.x*p.y-p.x*x.y);isFinite(ft)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(g,-x.y).multiplyScalar(ft),A.copy(g).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(ft),l[w].add(u),l[j].add(u),l[q].add(u),h[w].add(A),h[j].add(A),h[q].add(A))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let w=0,j=E.length;w<j;++w){const q=E[w],ft=q.start,F=q.count;for(let Y=ft,K=ft+F;Y<K;Y+=3)v(n[Y+0],n[Y+1],n[Y+2])}const N=new z,P=new z,C=new z,Z=new z;function y(w){C.fromArray(r,w*3),Z.copy(C);const j=l[w];N.copy(j),N.sub(C.multiplyScalar(C.dot(j))).normalize(),P.crossVectors(Z,j);const ft=P.dot(h[w])<0?-1:1;c[w*4]=N.x,c[w*4+1]=N.y,c[w*4+2]=N.z,c[w*4+3]=ft}for(let w=0,j=E.length;w<j;++w){const q=E[w],ft=q.start,F=q.count;for(let Y=ft,K=ft+F;Y<K;Y+=3)y(n[Y+0]),y(n[Y+1]),y(n[Y+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,h=new z,f=new z;if(t)for(let d=0,g=t.count;d<g;d+=3){const _=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(c.length*h);let g=0,_=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?g=c[x]*a.data.stride+a.offset:g=c[x]*h;for(let u=0;u<h;u++)d[_++]=l[g++]}return new Ve(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new nn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){const d=l[h],g=t(d,n);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const g=l[f];h.push(g.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let d=0,g=f.length;d<g;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xa=new ce,Mn=new Nr,Zi=new Ur,qa=new z,Zn=new z,jn=new z,Kn=new z,$s=new z,ji=new z,Ki=new lt,Ji=new lt,$i=new lt,Ya=new z,Za=new z,ja=new z,Qi=new z,ts=new z;class Jt extends ge{constructor(t=new nn,e=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ji.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],f=r[c];h!==0&&($s.fromBufferAttribute(f,t),o?ji.addScaledVector($s,h):ji.addScaledVector($s.sub(e),h))}e.add(ji)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(r),Mn.copy(t.ray).recast(t.near),!(Zi.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(Zi,qa)===null||Mn.origin.distanceToSquared(qa)>(t.far-t.near)**2))&&(Xa.copy(r).invert(),Mn.copy(t.ray).applyMatrix4(Xa),!(n.boundingBox!==null&&Mn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],u=o[p.materialIndex],A=Math.max(p.start,g.start),v=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let E=A,N=v;E<N;E+=3){const P=a.getX(E),C=a.getX(E+1),Z=a.getX(E+2);s=es(this,u,t,n,l,h,f,P,C,Z),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let p=_,u=x;p<u;p+=3){const A=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);s=es(this,o,t,n,l,h,f,A,v,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const p=d[_],u=o[p.materialIndex],A=Math.max(p.start,g.start),v=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let E=A,N=v;E<N;E+=3){const P=E,C=E+1,Z=E+2;s=es(this,u,t,n,l,h,f,P,C,Z),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,g.start),x=Math.min(c.count,g.start+g.count);for(let p=_,u=x;p<u;p+=3){const A=p,v=p+1,E=p+2;s=es(this,o,t,n,l,h,f,A,v,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Ql(i,t,e,n,s,r,o,a){let c;if(t.side===Se?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===mn,a),c===null)return null;ts.copy(a),ts.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ts);return l<e.near||l>e.far?null:{distance:l,point:ts.clone(),object:i}}function es(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Zn),i.getVertexPosition(c,jn),i.getVertexPosition(l,Kn);const h=Ql(i,t,e,n,Zn,jn,Kn,Qi);if(h){s&&(Ki.fromBufferAttribute(s,a),Ji.fromBufferAttribute(s,c),$i.fromBufferAttribute(s,l),h.uv=Be.getInterpolation(Qi,Zn,jn,Kn,Ki,Ji,$i,new lt)),r&&(Ki.fromBufferAttribute(r,a),Ji.fromBufferAttribute(r,c),$i.fromBufferAttribute(r,l),h.uv1=Be.getInterpolation(Qi,Zn,jn,Kn,Ki,Ji,$i,new lt),h.uv2=h.uv1),o&&(Ya.fromBufferAttribute(o,a),Za.fromBufferAttribute(o,c),ja.fromBufferAttribute(o,l),h.normal=Be.getInterpolation(Qi,Zn,jn,Kn,Ya,Za,ja,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new z,materialIndex:0};Be.getNormal(Zn,jn,Kn,f.normal),h.face=f}return h}class Nn extends nn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],f=[];let d=0,g=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(f,2));function _(x,p,u,A,v,E,N,P,C,Z,y){const w=E/C,j=N/Z,q=E/2,ft=N/2,F=P/2,Y=C+1,K=Z+1;let J=0,G=0;const rt=new z;for(let st=0;st<K;st++){const pt=st*j-ft;for(let _t=0;_t<Y;_t++){const it=_t*w-q;rt[x]=it*A,rt[p]=pt*v,rt[u]=F,l.push(rt.x,rt.y,rt.z),rt[x]=0,rt[p]=0,rt[u]=P>0?1:-1,h.push(rt.x,rt.y,rt.z),f.push(_t/C),f.push(1-st/Z),J+=1}}for(let st=0;st<Z;st++)for(let pt=0;pt<C;pt++){const _t=d+pt+Y*st,it=d+pt+Y*(st+1),I=d+(pt+1)+Y*(st+1),L=d+(pt+1)+Y*st;c.push(_t,it,L),c.push(it,I,L),G+=6}a.addGroup(g,G,y),g+=G,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Me(i){const t={};for(let e=0;e<i.length;e++){const n=ui(i[e]);for(const s in n)t[s]=n[s]}return t}function th(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ic(i){return i.getRenderTarget()===null?i.outputColorSpace:$t.workingColorSpace}const eh={clone:ui,merge:Me};var nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nh,this.fragmentShader=ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=th(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sc extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Re extends sc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Jn=-90,$n=1;class sh extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Re(Jn,$n,t,e);s.layers=this.layers,this.add(s);const r=new Re(Jn,$n,t,e);r.layers=this.layers,this.add(r);const o=new Re(Jn,$n,t,e);o.layers=this.layers,this.add(o);const a=new Re(Jn,$n,t,e);a.layers=this.layers,this.add(a);const c=new Re(Jn,$n,t,e);c.layers=this.layers,this.add(c);const l=new Re(Jn,$n,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class rc extends Te{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ci,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rh extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Ti("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Rn?oe:Ie),this.texture=new rc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:De}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nn(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:fn});r.uniforms.tEquirect.value=e;const o=new Jt(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=De),new sh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Qs=new z,ah=new z,oh=new Bt;class ln{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Qs.subVectors(n,e).cross(ah.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||oh.getNormalMatrix(t),s=this.coplanarPoint(Qs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yn=new Ur,ns=new z;class Br{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,o=new ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=tn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],x=s[10],p=s[11],u=s[12],A=s[13],v=s[14],E=s[15];if(n[0].setComponents(c-r,d-l,p-g,E-u).normalize(),n[1].setComponents(c+r,d+l,p+g,E+u).normalize(),n[2].setComponents(c+o,d+h,p+_,E+A).normalize(),n[3].setComponents(c-o,d-h,p-_,E-A).normalize(),n[4].setComponents(c-a,d-f,p-x,E-v).normalize(),e===tn)n[5].setComponents(c+a,d+f,p+x,E+v).normalize();else if(e===xs)n[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(t){return yn.center.set(0,0,0),yn.radius=.7071067811865476,yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ns.x=s.normal.x>0?t.max.x:t.min.x,ns.y=s.normal.y>0?t.max.y:t.min.y,ns.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ac(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ch(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,h){const f=l.array,d=l.usage,g=f.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,f,d),l.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:g}}function r(l,h,f){const d=h.array,g=h._updateRange,_=h.updateRanges;if(i.bindBuffer(f,l),g.count===-1&&_.length===0&&i.bufferSubData(f,0,d),_.length!==0){for(let x=0,p=_.length;x<p;x++){const u=_[x];e?i.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):i.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}g.count!==-1&&(e?i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):i.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);if(f===void 0)n.set(l,s(l,h));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,h),f.version=l.version}}return{get:o,remove:a,update:c}}class Ui extends nn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=t/a,d=e/c,g=[],_=[],x=[],p=[];for(let u=0;u<h;u++){const A=u*d-o;for(let v=0;v<l;v++){const E=v*f-r;_.push(E,-A,0),x.push(0,0,1),p.push(v/a),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let A=0;A<a;A++){const v=A+l*u,E=A+l*(u+1),N=A+1+l*(u+1),P=A+1+l*u;g.push(v,E,P),g.push(E,N,P)}this.setIndex(g),this.setAttribute("position",new Ue(_,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.widthSegments,t.heightSegments)}}var lh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_h=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ih=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$h=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,su=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ru=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ou=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,du=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_u=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Su=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Du=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ou=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ju=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ku=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ju=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$u=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ef=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_f=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ef=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:lh,alphahash_pars_fragment:hh,alphamap_fragment:uh,alphamap_pars_fragment:fh,alphatest_fragment:dh,alphatest_pars_fragment:ph,aomap_fragment:mh,aomap_pars_fragment:gh,batching_pars_vertex:_h,batching_vertex:xh,begin_vertex:vh,beginnormal_vertex:Mh,bsdfs:yh,iridescence_fragment:Sh,bumpmap_pars_fragment:Eh,clipping_planes_fragment:Th,clipping_planes_pars_fragment:bh,clipping_planes_pars_vertex:Ah,clipping_planes_vertex:wh,color_fragment:Rh,color_pars_fragment:Ch,color_pars_vertex:Ph,color_vertex:Lh,common:Dh,cube_uv_reflection_fragment:Ih,defaultnormal_vertex:Uh,displacementmap_pars_vertex:Nh,displacementmap_vertex:Oh,emissivemap_fragment:Fh,emissivemap_pars_fragment:Bh,colorspace_fragment:zh,colorspace_pars_fragment:Hh,envmap_fragment:Gh,envmap_common_pars_fragment:kh,envmap_pars_fragment:Vh,envmap_pars_vertex:Wh,envmap_physical_pars_fragment:nu,envmap_vertex:Xh,fog_vertex:qh,fog_pars_vertex:Yh,fog_fragment:Zh,fog_pars_fragment:jh,gradientmap_pars_fragment:Kh,lightmap_fragment:Jh,lightmap_pars_fragment:$h,lights_lambert_fragment:Qh,lights_lambert_pars_fragment:tu,lights_pars_begin:eu,lights_toon_fragment:iu,lights_toon_pars_fragment:su,lights_phong_fragment:ru,lights_phong_pars_fragment:au,lights_physical_fragment:ou,lights_physical_pars_fragment:cu,lights_fragment_begin:lu,lights_fragment_maps:hu,lights_fragment_end:uu,logdepthbuf_fragment:fu,logdepthbuf_pars_fragment:du,logdepthbuf_pars_vertex:pu,logdepthbuf_vertex:mu,map_fragment:gu,map_pars_fragment:_u,map_particle_fragment:xu,map_particle_pars_fragment:vu,metalnessmap_fragment:Mu,metalnessmap_pars_fragment:yu,morphcolor_vertex:Su,morphnormal_vertex:Eu,morphtarget_pars_vertex:Tu,morphtarget_vertex:bu,normal_fragment_begin:Au,normal_fragment_maps:wu,normal_pars_fragment:Ru,normal_pars_vertex:Cu,normal_vertex:Pu,normalmap_pars_fragment:Lu,clearcoat_normal_fragment_begin:Du,clearcoat_normal_fragment_maps:Iu,clearcoat_pars_fragment:Uu,iridescence_pars_fragment:Nu,opaque_fragment:Ou,packing:Fu,premultiplied_alpha_fragment:Bu,project_vertex:zu,dithering_fragment:Hu,dithering_pars_fragment:Gu,roughnessmap_fragment:ku,roughnessmap_pars_fragment:Vu,shadowmap_pars_fragment:Wu,shadowmap_pars_vertex:Xu,shadowmap_vertex:qu,shadowmask_pars_fragment:Yu,skinbase_vertex:Zu,skinning_pars_vertex:ju,skinning_vertex:Ku,skinnormal_vertex:Ju,specularmap_fragment:$u,specularmap_pars_fragment:Qu,tonemapping_fragment:tf,tonemapping_pars_fragment:ef,transmission_fragment:nf,transmission_pars_fragment:sf,uv_pars_fragment:rf,uv_pars_vertex:af,uv_vertex:of,worldpos_vertex:cf,background_vert:lf,background_frag:hf,backgroundCube_vert:uf,backgroundCube_frag:ff,cube_vert:df,cube_frag:pf,depth_vert:mf,depth_frag:gf,distanceRGBA_vert:_f,distanceRGBA_frag:xf,equirect_vert:vf,equirect_frag:Mf,linedashed_vert:yf,linedashed_frag:Sf,meshbasic_vert:Ef,meshbasic_frag:Tf,meshlambert_vert:bf,meshlambert_frag:Af,meshmatcap_vert:wf,meshmatcap_frag:Rf,meshnormal_vert:Cf,meshnormal_frag:Pf,meshphong_vert:Lf,meshphong_frag:Df,meshphysical_vert:If,meshphysical_frag:Uf,meshtoon_vert:Nf,meshtoon_frag:Of,points_vert:Ff,points_frag:Bf,shadow_vert:zf,shadow_frag:Hf,sprite_vert:Gf,sprite_frag:kf},yt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},ke={basic:{uniforms:Me([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Me([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Me([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Me([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Me([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Me([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Me([yt.points,yt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Me([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Me([yt.common,yt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Me([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Me([yt.sprite,yt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Me([yt.common,yt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Me([yt.lights,yt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};ke.physical={uniforms:Me([ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const is={r:0,b:0,g:0};function Vf(i,t,e,n,s,r,o){const a=new jt(0);let c=r===!0?0:1,l,h,f=null,d=0,g=null;function _(p,u){let A=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?e:t).get(v)),v===null?x(a,c):v&&v.isColor&&(x(v,1),A=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ms)?(h===void 0&&(h=new Jt(new Nn(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:ui(ke.backgroundCube.uniforms),vertexShader:ke.backgroundCube.vertexShader,fragmentShader:ke.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=$t.getTransfer(v.colorSpace)!==Qt,(f!==v||d!==v.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,g=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Jt(new Ui(2,2),new Dn({name:"BackgroundMaterial",uniforms:ui(ke.background.uniforms),vertexShader:ke.background.vertexShader,fragmentShader:ke.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=$t.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,d=v.version,g=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,u){p.getRGB(is,ic(i)),n.buffers.color.setClear(is.r,is.g,is.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),c=u,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:_}}function Wf(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,h=!1;function f(F,Y,K,J,G){let rt=!1;if(o){const st=x(J,K,Y);l!==st&&(l=st,g(l.object)),rt=u(F,J,K,G),rt&&A(F,J,K,G)}else{const st=Y.wireframe===!0;(l.geometry!==J.id||l.program!==K.id||l.wireframe!==st)&&(l.geometry=J.id,l.program=K.id,l.wireframe=st,rt=!0)}G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(rt||h)&&(h=!1,Z(F,Y,K,J),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function g(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function x(F,Y,K){const J=K.wireframe===!0;let G=a[F.id];G===void 0&&(G={},a[F.id]=G);let rt=G[Y.id];rt===void 0&&(rt={},G[Y.id]=rt);let st=rt[J];return st===void 0&&(st=p(d()),rt[J]=st),st}function p(F){const Y=[],K=[],J=[];for(let G=0;G<s;G++)Y[G]=0,K[G]=0,J[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:K,attributeDivisors:J,object:F,attributes:{},index:null}}function u(F,Y,K,J){const G=l.attributes,rt=Y.attributes;let st=0;const pt=K.getAttributes();for(const _t in pt)if(pt[_t].location>=0){const I=G[_t];let L=rt[_t];if(L===void 0&&(_t==="instanceMatrix"&&F.instanceMatrix&&(L=F.instanceMatrix),_t==="instanceColor"&&F.instanceColor&&(L=F.instanceColor)),I===void 0||I.attribute!==L||L&&I.data!==L.data)return!0;st++}return l.attributesNum!==st||l.index!==J}function A(F,Y,K,J){const G={},rt=Y.attributes;let st=0;const pt=K.getAttributes();for(const _t in pt)if(pt[_t].location>=0){let I=rt[_t];I===void 0&&(_t==="instanceMatrix"&&F.instanceMatrix&&(I=F.instanceMatrix),_t==="instanceColor"&&F.instanceColor&&(I=F.instanceColor));const L={};L.attribute=I,I&&I.data&&(L.data=I.data),G[_t]=L,st++}l.attributes=G,l.attributesNum=st,l.index=J}function v(){const F=l.newAttributes;for(let Y=0,K=F.length;Y<K;Y++)F[Y]=0}function E(F){N(F,0)}function N(F,Y){const K=l.newAttributes,J=l.enabledAttributes,G=l.attributeDivisors;K[F]=1,J[F]===0&&(i.enableVertexAttribArray(F),J[F]=1),G[F]!==Y&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,Y),G[F]=Y)}function P(){const F=l.newAttributes,Y=l.enabledAttributes;for(let K=0,J=Y.length;K<J;K++)Y[K]!==F[K]&&(i.disableVertexAttribArray(K),Y[K]=0)}function C(F,Y,K,J,G,rt,st){st===!0?i.vertexAttribIPointer(F,Y,K,G,rt):i.vertexAttribPointer(F,Y,K,J,G,rt)}function Z(F,Y,K,J){if(n.isWebGL2===!1&&(F.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const G=J.attributes,rt=K.getAttributes(),st=Y.defaultAttributeValues;for(const pt in rt){const _t=rt[pt];if(_t.location>=0){let it=G[pt];if(it===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(it=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(it=F.instanceColor)),it!==void 0){const I=it.normalized,L=it.itemSize,T=e.get(it);if(T===void 0)continue;const S=T.buffer,$=T.type,ot=T.bytesPerElement,k=n.isWebGL2===!0&&($===i.INT||$===i.UNSIGNED_INT||it.gpuType===Ho);if(it.isInterleavedBufferAttribute){const ct=it.data,R=ct.stride,Q=it.offset;if(ct.isInstancedInterleavedBuffer){for(let O=0;O<_t.locationSize;O++)N(_t.location+O,ct.meshPerAttribute);F.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let O=0;O<_t.locationSize;O++)E(_t.location+O);i.bindBuffer(i.ARRAY_BUFFER,S);for(let O=0;O<_t.locationSize;O++)C(_t.location+O,L/_t.locationSize,$,I,R*ot,(Q+L/_t.locationSize*O)*ot,k)}else{if(it.isInstancedBufferAttribute){for(let ct=0;ct<_t.locationSize;ct++)N(_t.location+ct,it.meshPerAttribute);F.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ct=0;ct<_t.locationSize;ct++)E(_t.location+ct);i.bindBuffer(i.ARRAY_BUFFER,S);for(let ct=0;ct<_t.locationSize;ct++)C(_t.location+ct,L/_t.locationSize,$,I,L*ot,L/_t.locationSize*ct*ot,k)}}else if(st!==void 0){const I=st[pt];if(I!==void 0)switch(I.length){case 2:i.vertexAttrib2fv(_t.location,I);break;case 3:i.vertexAttrib3fv(_t.location,I);break;case 4:i.vertexAttrib4fv(_t.location,I);break;default:i.vertexAttrib1fv(_t.location,I)}}}}P()}function y(){q();for(const F in a){const Y=a[F];for(const K in Y){const J=Y[K];for(const G in J)_(J[G].object),delete J[G];delete Y[K]}delete a[F]}}function w(F){if(a[F.id]===void 0)return;const Y=a[F.id];for(const K in Y){const J=Y[K];for(const G in J)_(J[G].object),delete J[G];delete Y[K]}delete a[F.id]}function j(F){for(const Y in a){const K=a[Y];if(K[F.id]===void 0)continue;const J=K[F.id];for(const G in J)_(J[G].object),delete J[G];delete K[F.id]}}function q(){ft(),h=!0,l!==c&&(l=c,g(l.object))}function ft(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:q,resetDefaultState:ft,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:j,initAttributes:v,enableAttribute:E,disableUnusedAttributes:P}}function Xf(i,t,e,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,f){i.drawArrays(r,h,f),e.update(f,r,1)}function c(h,f,d){if(d===0)return;let g,_;if(s)g=i,_="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](r,h,f,d),e.update(f,r,d)}function l(h,f,d){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<d;_++)this.render(h[_],f[_]);else{g.multiDrawArraysWEBGL(r,h,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=f[x];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function qf(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,E=o||t.has("OES_texture_float"),N=v&&E,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:A,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:N,maxSamples:P}}function Yf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ln,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||n!==0||s;return s=d,n=f.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,g){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{const A=r?0:n,v=A*4;let E=u.clippingState||null;c.value=E,E=h(_,d,v,g);for(let N=0;N!==v;++N)E[N]=e[N];u.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,g,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=c.value,_!==!0||p===null){const u=g+x*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,E=g;v!==x;++v,E+=4)o.copy(f[v]).applyMatrix4(A,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Zf(i){let t=new WeakMap;function e(o,a){return a===_r?o.mapping=ci:a===xr&&(o.mapping=li),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_r||a===xr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new rh(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class oc extends sc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ni=4,Ka=[.125,.215,.35,.446,.526,.582],bn=20,tr=new oc,Ja=new jt;let er=null,nr=0,ir=0;const En=(1+Math.sqrt(5))/2,Qn=1/En,$a=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,En,Qn),new z(0,En,-Qn),new z(Qn,0,En),new z(-Qn,0,En),new z(En,Qn,0),new z(-En,Qn,0)];class Tr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){er=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=to(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(er,nr,ir),t.scissorTest=!1,ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),er=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:Ci,format:He,colorSpace:en,depthBuffer:!1},s=Qa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jf(r)),this._blurMaterial=Kf(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,tr)}_sceneToCubeUV(t,e,n,s){const a=new Re(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ja),h.toneMapping=dn,h.autoClear=!1;const g=new Fr({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),_=new Jt(new Nn,g);let x=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,x=!0):(g.color.copy(Ja),x=!0);for(let u=0;u<6;u++){const A=u%3;A===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):A===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const v=this._cubeSize;ss(s,A*v,u>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ci||t.mapping===li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=to());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ss(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,tr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=$a[(s-1)%$a.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Jt(this._lodPlanes[s],l),d=l.uniforms,g=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*bn-1),x=r/_,p=isFinite(r)?1+Math.floor(h*x):bn;p>bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bn}`);const u=[];let A=0;for(let C=0;C<bn;++C){const Z=C/x,y=Math.exp(-Z*Z/2);u.push(y),C===0?A+=y:C<p&&(A+=2*y)}for(let C=0;C<u.length;C++)u[C]=u[C]/A;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;const E=this._sizeLods[s],N=3*E*(s>v-ni?s-v+ni:0),P=4*(this._cubeSize-E);ss(e,N,P,3*E,2*E),c.setRenderTarget(e),c.render(f,tr)}}function jf(i){const t=[],e=[],n=[];let s=i;const r=i-ni+1+Ka.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ni?c=Ka[o-i+ni-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,_=6,x=3,p=2,u=1,A=new Float32Array(x*_*g),v=new Float32Array(p*_*g),E=new Float32Array(u*_*g);for(let P=0;P<g;P++){const C=P%3*2/3-1,Z=P>2?0:-1,y=[C,Z,0,C+2/3,Z,0,C+2/3,Z+1,0,C,Z,0,C+2/3,Z+1,0,C,Z+1,0];A.set(y,x*_*P),v.set(d,p*_*P);const w=[P,P,P,P,P,P];E.set(w,u*_*P)}const N=new nn;N.setAttribute("position",new Ve(A,x)),N.setAttribute("uv",new Ve(v,p)),N.setAttribute("faceIndex",new Ve(E,u)),t.push(N),s>ni&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qa(i,t,e){const n=new Pn(i,t,e);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Kf(i,t,e){const n=new Float32Array(bn),s=new z(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:bn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function to(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function eo(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function zr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===_r||c===xr,h=c===ci||c===li;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new Tr(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||h&&f&&s(f)){e===null&&(e=new Tr(i));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $f(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qf(i,t,e,n){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];const g=r.get(d);g&&(t.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const x=g[_];for(let p=0,u=x.length;p<u;p++)t.update(x[p],i.ARRAY_BUFFER)}}function l(f){const d=[],g=f.index,_=f.attributes.position;let x=0;if(g!==null){const A=g.array;x=g.version;for(let v=0,E=A.length;v<E;v+=3){const N=A[v+0],P=A[v+1],C=A[v+2];d.push(N,P,P,C,C,N)}}else if(_!==void 0){const A=_.array;x=_.version;for(let v=0,E=A.length/3-1;v<E;v+=3){const N=v+0,P=v+1,C=v+2;d.push(N,P,P,C,C,N)}}else return;const p=new(Ko(d)?nc:ec)(d,1);p.version=x;const u=r.get(f);u&&t.remove(u),r.set(f,p)}function h(f){const d=r.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function td(i,t,e,n){const s=n.isWebGL2;let r;function o(g){r=g}let a,c;function l(g){a=g.type,c=g.bytesPerElement}function h(g,_){i.drawElements(r,_,a,g*c),e.update(_,r,1)}function f(g,_,x){if(x===0)return;let p,u;if(s)p=i,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,_,a,g*c,x),e.update(_,r,x)}function d(g,_,x){if(x===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(g[u]/c,_[u]);else{p.multiDrawElementsWEBGL(r,_,0,a,g,0,x);let u=0;for(let A=0;A<x;A++)u+=_[A];e.update(u,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function ed(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function nd(i,t){return i[0]-t[0]}function id(i,t){return Math.abs(t[1])-Math.abs(i[1])}function sd(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new te,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,f){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let p=r.get(h);if(p===void 0||p.count!==x){let Y=function(){ft.dispose(),r.delete(h),h.removeEventListener("dispose",Y)};var g=Y;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,N=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],Z=h.morphAttributes.color||[];let y=0;v===!0&&(y=1),E===!0&&(y=2),N===!0&&(y=3);let w=h.attributes.position.count*y,j=1;w>t.maxTextureSize&&(j=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const q=new Float32Array(w*j*4*x),ft=new Qo(q,w,j,x);ft.type=un,ft.needsUpdate=!0;const F=y*4;for(let K=0;K<x;K++){const J=P[K],G=C[K],rt=Z[K],st=w*j*4*K;for(let pt=0;pt<J.count;pt++){const _t=pt*F;v===!0&&(o.fromBufferAttribute(J,pt),q[st+_t+0]=o.x,q[st+_t+1]=o.y,q[st+_t+2]=o.z,q[st+_t+3]=0),E===!0&&(o.fromBufferAttribute(G,pt),q[st+_t+4]=o.x,q[st+_t+5]=o.y,q[st+_t+6]=o.z,q[st+_t+7]=0),N===!0&&(o.fromBufferAttribute(rt,pt),q[st+_t+8]=o.x,q[st+_t+9]=o.y,q[st+_t+10]=o.z,q[st+_t+11]=rt.itemSize===4?o.w:1)}}p={count:x,texture:ft,size:new lt(w,j)},r.set(h,p),h.addEventListener("dispose",Y)}let u=0;for(let v=0;v<d.length;v++)u+=d[v];const A=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(i,"morphTargetBaseInfluence",A),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const _=d===void 0?0:d.length;let x=n[h.id];if(x===void 0||x.length!==_){x=[];for(let E=0;E<_;E++)x[E]=[E,0];n[h.id]=x}for(let E=0;E<_;E++){const N=x[E];N[0]=E,N[1]=d[E]}x.sort(id);for(let E=0;E<8;E++)E<_&&x[E][1]?(a[E][0]=x[E][0],a[E][1]=x[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(nd);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let A=0;for(let E=0;E<8;E++){const N=a[E],P=N[0],C=N[1];P!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+E)!==p[P]&&h.setAttribute("morphTarget"+E,p[P]),u&&h.getAttribute("morphNormal"+E)!==u[P]&&h.setAttribute("morphNormal"+E,u[P]),s[E]=C,A+=C):(p&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),u&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),s[E]=0)}const v=h.morphTargetsRelative?1:1-A;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function rd(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class cc extends Te{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:wn,h!==wn&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wn&&(n=hn),n===void 0&&h===hi&&(n=An),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ye,this.minFilter=c!==void 0?c:ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lc=new Te,hc=new cc(1,1);hc.compareFunction=jo;const uc=new Qo,fc=new kl,dc=new rc,no=[],io=[],so=new Float32Array(16),ro=new Float32Array(9),ao=new Float32Array(4);function pi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=no[s];if(r===void 0&&(r=new Float32Array(s),no[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Es(i,t){let e=io[t];e===void 0&&(e=new Int32Array(t),io[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ad(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function od(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2fv(this.addr,t),fe(e,t)}}function cd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;i.uniform3fv(this.addr,t),fe(e,t)}}function ld(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4fv(this.addr,t),fe(e,t)}}function hd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(ue(e,n))return;ao.set(n),i.uniformMatrix2fv(this.addr,!1,ao),fe(e,n)}}function ud(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(ue(e,n))return;ro.set(n),i.uniformMatrix3fv(this.addr,!1,ro),fe(e,n)}}function fd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(ue(e,n))return;so.set(n),i.uniformMatrix4fv(this.addr,!1,so),fe(e,n)}}function dd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2iv(this.addr,t),fe(e,t)}}function md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3iv(this.addr,t),fe(e,t)}}function gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4iv(this.addr,t),fe(e,t)}}function _d(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2uiv(this.addr,t),fe(e,t)}}function vd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3uiv(this.addr,t),fe(e,t)}}function Md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4uiv(this.addr,t),fe(e,t)}}function yd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?hc:lc;e.setTexture2D(t||r,s)}function Sd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||fc,s)}function Ed(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||dc,s)}function Td(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||uc,s)}function bd(i){switch(i){case 5126:return ad;case 35664:return od;case 35665:return cd;case 35666:return ld;case 35674:return hd;case 35675:return ud;case 35676:return fd;case 5124:case 35670:return dd;case 35667:case 35671:return pd;case 35668:case 35672:return md;case 35669:case 35673:return gd;case 5125:return _d;case 36294:return xd;case 36295:return vd;case 36296:return Md;case 35678:case 36198:case 36298:case 36306:case 35682:return yd;case 35679:case 36299:case 36307:return Sd;case 35680:case 36300:case 36308:case 36293:return Ed;case 36289:case 36303:case 36311:case 36292:return Td}}function Ad(i,t){i.uniform1fv(this.addr,t)}function wd(i,t){const e=pi(t,this.size,2);i.uniform2fv(this.addr,e)}function Rd(i,t){const e=pi(t,this.size,3);i.uniform3fv(this.addr,e)}function Cd(i,t){const e=pi(t,this.size,4);i.uniform4fv(this.addr,e)}function Pd(i,t){const e=pi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ld(i,t){const e=pi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Dd(i,t){const e=pi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Id(i,t){i.uniform1iv(this.addr,t)}function Ud(i,t){i.uniform2iv(this.addr,t)}function Nd(i,t){i.uniform3iv(this.addr,t)}function Od(i,t){i.uniform4iv(this.addr,t)}function Fd(i,t){i.uniform1uiv(this.addr,t)}function Bd(i,t){i.uniform2uiv(this.addr,t)}function zd(i,t){i.uniform3uiv(this.addr,t)}function Hd(i,t){i.uniform4uiv(this.addr,t)}function Gd(i,t,e){const n=this.cache,s=t.length,r=Es(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lc,r[o])}function kd(i,t,e){const n=this.cache,s=t.length,r=Es(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||fc,r[o])}function Vd(i,t,e){const n=this.cache,s=t.length,r=Es(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||dc,r[o])}function Wd(i,t,e){const n=this.cache,s=t.length,r=Es(e,s);ue(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||uc,r[o])}function Xd(i){switch(i){case 5126:return Ad;case 35664:return wd;case 35665:return Rd;case 35666:return Cd;case 35674:return Pd;case 35675:return Ld;case 35676:return Dd;case 5124:case 35670:return Id;case 35667:case 35671:return Ud;case 35668:case 35672:return Nd;case 35669:case 35673:return Od;case 5125:return Fd;case 36294:return Bd;case 36295:return zd;case 36296:return Hd;case 35678:case 36198:case 36298:case 36306:case 35682:return Gd;case 35679:case 36299:case 36307:return kd;case 35680:case 36300:case 36308:case 36293:return Vd;case 36289:case 36303:case 36311:case 36292:return Wd}}class qd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bd(e.type)}}class Yd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xd(e.type)}}class Zd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const sr=/(\w+)(\])?(\[|\.)?/g;function oo(i,t){i.seq.push(t),i.map[t.id]=t}function jd(i,t,e){const n=i.name,s=n.length;for(sr.lastIndex=0;;){const r=sr.exec(n),o=sr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){oo(e,l===void 0?new qd(a,i,t):new Yd(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Zd(a),oo(e,f)),e=f}}}class ds{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);jd(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function co(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Kd=37297;let Jd=0;function $d(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Qd(i){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(i);let n;switch(t===e?n="":t===_s&&e===gs?n="LinearDisplayP3ToLinearSRGB":t===gs&&e===_s&&(n="LinearSRGBToLinearDisplayP3"),i){case en:case ys:return[n,"LinearTransferOETF"];case oe:case Ir:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function lo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$d(i.getShaderSource(t),o)}else return s}function tp(i,t){const e=Qd(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ep(i,t){let e;switch(t){case ul:e="Linear";break;case fl:e="Reinhard";break;case dl:e="OptimizedCineon";break;case Bo:e="ACESFilmic";break;case ml:e="AgX";break;case pl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function np(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ii).join(`
`)}function ip(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ii).join(`
`)}function sp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ii(i){return i!==""}function ho(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function br(i){return i.replace(ap,cp)}const op=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cp(i,t){let e=Vt[t];if(e===void 0){const n=op.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return br(e)}const lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fo(i){return i.replace(lp,hp)}function hp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function po(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function up(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===No?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Oo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$e&&(t="SHADOWMAP_TYPE_VSM"),t}function fp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ci:case li:t="ENVMAP_TYPE_CUBE";break;case Ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case li:t="ENVMAP_MODE_REFRACTION";break}return t}function pp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fo:t="ENVMAP_BLENDING_MULTIPLY";break;case ll:t="ENVMAP_BLENDING_MIX";break;case hl:t="ENVMAP_BLENDING_ADD";break}return t}function mp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function gp(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=up(e),l=fp(e),h=dp(e),f=pp(e),d=mp(e),g=e.isWebGL2?"":np(e),_=ip(e),x=sp(r),p=s.createProgram();let u,A,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ii).join(`
`),u.length>0&&(u+=`
`),A=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ii).join(`
`),A.length>0&&(A+=`
`)):(u=[po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ii).join(`
`),A=[g,po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dn?"#define TONE_MAPPING":"",e.toneMapping!==dn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==dn?ep("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,tp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ii).join(`
`)),o=br(o),o=ho(o,e),o=uo(o,e),a=br(a),a=ho(a,e),a=uo(a,e),o=fo(o),a=fo(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,A=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Da?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Da?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const E=v+u+o,N=v+A+a,P=co(s,s.VERTEX_SHADER,E),C=co(s,s.FRAGMENT_SHADER,N);s.attachShader(p,P),s.attachShader(p,C),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function Z(q){if(i.debug.checkShaderErrors){const ft=s.getProgramInfoLog(p).trim(),F=s.getShaderInfoLog(P).trim(),Y=s.getShaderInfoLog(C).trim();let K=!0,J=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,P,C);else{const G=lo(s,P,"vertex"),rt=lo(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ft+`
`+G+`
`+rt)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(F===""||Y==="")&&(J=!1);J&&(q.diagnostics={runnable:K,programLog:ft,vertexShader:{log:F,prefix:u},fragmentShader:{log:Y,prefix:A}})}s.deleteShader(P),s.deleteShader(C),y=new ds(s,p),w=rp(s,p)}let y;this.getUniforms=function(){return y===void 0&&Z(this),y};let w;this.getAttributes=function(){return w===void 0&&Z(this),w};let j=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=s.getProgramParameter(p,Kd)),j},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jd++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=P,this.fragmentShader=C,this}let _p=0;class xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vp(t),e.set(t,n)),n}}class vp{constructor(t){this.id=_p++,this.code=t,this.usedTimes=0}}function Mp(i,t,e,n,s,r,o){const a=new Or,c=new xp,l=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function p(y,w,j,q,ft){const F=q.fog,Y=ft.geometry,K=y.isMeshStandardMaterial?q.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||K),G=J&&J.mapping===Ms?J.image.height:null,rt=_[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const st=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pt=st!==void 0?st.length:0;let _t=0;Y.morphAttributes.position!==void 0&&(_t=1),Y.morphAttributes.normal!==void 0&&(_t=2),Y.morphAttributes.color!==void 0&&(_t=3);let it,I,L,T;if(rt){const re=ke[rt];it=re.vertexShader,I=re.fragmentShader}else it=y.vertexShader,I=y.fragmentShader,c.update(y),L=c.getVertexShaderID(y),T=c.getFragmentShaderID(y);const S=i.getRenderTarget(),$=ft.isInstancedMesh===!0,ot=ft.isBatchedMesh===!0,k=!!y.map,ct=!!y.matcap,R=!!J,Q=!!y.aoMap,O=!!y.lightMap,W=!!y.bumpMap,V=!!y.normalMap,ht=!!y.displacementMap,U=!!y.emissiveMap,m=!!y.metalnessMap,M=!!y.roughnessMap,H=y.anisotropy>0,ut=y.clearcoat>0,dt=y.iridescence>0,at=y.sheen>0,Tt=y.transmission>0,Mt=H&&!!y.anisotropyMap,Et=ut&&!!y.clearcoatMap,Rt=ut&&!!y.clearcoatNormalMap,Nt=ut&&!!y.clearcoatRoughnessMap,mt=dt&&!!y.iridescenceMap,qt=dt&&!!y.iridescenceThicknessMap,zt=at&&!!y.sheenColorMap,Ot=at&&!!y.sheenRoughnessMap,Ct=!!y.specularMap,bt=!!y.specularColorMap,D=!!y.specularIntensityMap,xt=Tt&&!!y.transmissionMap,Pt=Tt&&!!y.thicknessMap,wt=!!y.gradientMap,gt=!!y.alphaMap,B=y.alphaTest>0,vt=!!y.alphaHash,St=!!y.extensions,It=!!Y.attributes.uv1,Dt=!!Y.attributes.uv2,Yt=!!Y.attributes.uv3;let Zt=dn;return y.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Zt=i.toneMapping),{isWebGL2:h,shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:it,fragmentShader:I,defines:y.defines,customVertexShaderID:L,customFragmentShaderID:T,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:ot,instancing:$,instancingColor:$&&ft.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:S===null?i.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:en,map:k,matcap:ct,envMap:R,envMapMode:R&&J.mapping,envMapCubeUVHeight:G,aoMap:Q,lightMap:O,bumpMap:W,normalMap:V,displacementMap:d&&ht,emissiveMap:U,normalMapObjectSpace:V&&y.normalMapType===wl,normalMapTangentSpace:V&&y.normalMapType===Zo,metalnessMap:m,roughnessMap:M,anisotropy:H,anisotropyMap:Mt,clearcoat:ut,clearcoatMap:Et,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Nt,iridescence:dt,iridescenceMap:mt,iridescenceThicknessMap:qt,sheen:at,sheenColorMap:zt,sheenRoughnessMap:Ot,specularMap:Ct,specularColorMap:bt,specularIntensityMap:D,transmission:Tt,transmissionMap:xt,thicknessMap:Pt,gradientMap:wt,opaque:y.transparent===!1&&y.blending===ri,alphaMap:gt,alphaTest:B,alphaHash:vt,combine:y.combine,mapUv:k&&x(y.map.channel),aoMapUv:Q&&x(y.aoMap.channel),lightMapUv:O&&x(y.lightMap.channel),bumpMapUv:W&&x(y.bumpMap.channel),normalMapUv:V&&x(y.normalMap.channel),displacementMapUv:ht&&x(y.displacementMap.channel),emissiveMapUv:U&&x(y.emissiveMap.channel),metalnessMapUv:m&&x(y.metalnessMap.channel),roughnessMapUv:M&&x(y.roughnessMap.channel),anisotropyMapUv:Mt&&x(y.anisotropyMap.channel),clearcoatMapUv:Et&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(y.sheenRoughnessMap.channel),specularMapUv:Ct&&x(y.specularMap.channel),specularColorMapUv:bt&&x(y.specularColorMap.channel),specularIntensityMapUv:D&&x(y.specularIntensityMap.channel),transmissionMapUv:xt&&x(y.transmissionMap.channel),thicknessMapUv:Pt&&x(y.thicknessMap.channel),alphaMapUv:gt&&x(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(V||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Dt,vertexUv3s:Yt,pointsUvs:ft.isPoints===!0&&!!Y.attributes.uv&&(k||gt),fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ft.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:_t,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:k&&y.map.isVideoTexture===!0&&$t.getTransfer(y.map.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qe,flipSided:y.side===Se,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:St&&y.extensions.derivatives===!0,extensionFragDepth:St&&y.extensions.fragDepth===!0,extensionDrawBuffers:St&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:St&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const j in y.defines)w.push(j),w.push(y.defines[j]);return y.isRawShaderMaterial===!1&&(A(w,y),v(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function A(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function E(y){const w=_[y.type];let j;if(w){const q=ke[w];j=eh.clone(q.uniforms)}else j=y.uniforms;return j}function N(y,w){let j;for(let q=0,ft=l.length;q<ft;q++){const F=l[q];if(F.cacheKey===w){j=F,++j.usedTimes;break}}return j===void 0&&(j=new gp(i,w,y,r),l.push(j)),j}function P(y){if(--y.usedTimes===0){const w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),y.destroy()}}function C(y){c.remove(y)}function Z(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:N,releaseProgram:P,releaseShaderCache:C,programs:l,dispose:Z}}function yp(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Sp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function go(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,d,g,_,x,p){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:g,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},i[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=g,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=x,u.group=p),t++,u}function a(f,d,g,_,x,p){const u=o(f,d,g,_,x,p);g.transmission>0?n.push(u):g.transparent===!0?s.push(u):e.push(u)}function c(f,d,g,_,x,p){const u=o(f,d,g,_,x,p);g.transmission>0?n.unshift(u):g.transparent===!0?s.unshift(u):e.unshift(u)}function l(f,d){e.length>1&&e.sort(f||Sp),n.length>1&&n.sort(d||mo),s.length>1&&s.sort(d||mo)}function h(){for(let f=t,d=i.length;f<d;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Ep(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new go,i.set(n,[o])):s>=r.length?(o=new go,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new jt};break;case"SpotLight":e={position:new z,direction:new z,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function bp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ap=0;function wp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rp(i,t){const e=new Tp,n=bp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new z);const r=new z,o=new ce,a=new ce;function c(h,f){let d=0,g=0,_=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let x=0,p=0,u=0,A=0,v=0,E=0,N=0,P=0,C=0,Z=0,y=0;h.sort(wp);const w=f===!0?Math.PI:1;for(let q=0,ft=h.length;q<ft;q++){const F=h[q],Y=F.color,K=F.intensity,J=F.distance,G=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=Y.r*K*w,g+=Y.g*K*w,_+=Y.b*K*w;else if(F.isLightProbe){for(let rt=0;rt<9;rt++)s.probe[rt].addScaledVector(F.sh.coefficients[rt],K);y++}else if(F.isDirectionalLight){const rt=e.get(F);if(rt.color.copy(F.color).multiplyScalar(F.intensity*w),F.castShadow){const st=F.shadow,pt=n.get(F);pt.shadowBias=st.bias,pt.shadowNormalBias=st.normalBias,pt.shadowRadius=st.radius,pt.shadowMapSize=st.mapSize,s.directionalShadow[x]=pt,s.directionalShadowMap[x]=G,s.directionalShadowMatrix[x]=F.shadow.matrix,E++}s.directional[x]=rt,x++}else if(F.isSpotLight){const rt=e.get(F);rt.position.setFromMatrixPosition(F.matrixWorld),rt.color.copy(Y).multiplyScalar(K*w),rt.distance=J,rt.coneCos=Math.cos(F.angle),rt.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),rt.decay=F.decay,s.spot[u]=rt;const st=F.shadow;if(F.map&&(s.spotLightMap[C]=F.map,C++,st.updateMatrices(F),F.castShadow&&Z++),s.spotLightMatrix[u]=st.matrix,F.castShadow){const pt=n.get(F);pt.shadowBias=st.bias,pt.shadowNormalBias=st.normalBias,pt.shadowRadius=st.radius,pt.shadowMapSize=st.mapSize,s.spotShadow[u]=pt,s.spotShadowMap[u]=G,P++}u++}else if(F.isRectAreaLight){const rt=e.get(F);rt.color.copy(Y).multiplyScalar(K),rt.halfWidth.set(F.width*.5,0,0),rt.halfHeight.set(0,F.height*.5,0),s.rectArea[A]=rt,A++}else if(F.isPointLight){const rt=e.get(F);if(rt.color.copy(F.color).multiplyScalar(F.intensity*w),rt.distance=F.distance,rt.decay=F.decay,F.castShadow){const st=F.shadow,pt=n.get(F);pt.shadowBias=st.bias,pt.shadowNormalBias=st.normalBias,pt.shadowRadius=st.radius,pt.shadowMapSize=st.mapSize,pt.shadowCameraNear=st.camera.near,pt.shadowCameraFar=st.camera.far,s.pointShadow[p]=pt,s.pointShadowMap[p]=G,s.pointShadowMatrix[p]=F.shadow.matrix,N++}s.point[p]=rt,p++}else if(F.isHemisphereLight){const rt=e.get(F);rt.skyColor.copy(F.color).multiplyScalar(K*w),rt.groundColor.copy(F.groundColor).multiplyScalar(K*w),s.hemi[v]=rt,v++}}A>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_FLOAT_1,s.rectAreaLTC2=yt.LTC_FLOAT_2):(s.rectAreaLTC1=yt.LTC_HALF_1,s.rectAreaLTC2=yt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_FLOAT_1,s.rectAreaLTC2=yt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_HALF_1,s.rectAreaLTC2=yt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=g,s.ambient[2]=_;const j=s.hash;(j.directionalLength!==x||j.pointLength!==p||j.spotLength!==u||j.rectAreaLength!==A||j.hemiLength!==v||j.numDirectionalShadows!==E||j.numPointShadows!==N||j.numSpotShadows!==P||j.numSpotMaps!==C||j.numLightProbes!==y)&&(s.directional.length=x,s.spot.length=u,s.rectArea.length=A,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=P+C-Z,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=Z,s.numLightProbes=y,j.directionalLength=x,j.pointLength=p,j.spotLength=u,j.rectAreaLength=A,j.hemiLength=v,j.numDirectionalShadows=E,j.numPointShadows=N,j.numSpotShadows=P,j.numSpotMaps=C,j.numLightProbes=y,s.version=Ap++)}function l(h,f){let d=0,g=0,_=0,x=0,p=0;const u=f.matrixWorldInverse;for(let A=0,v=h.length;A<v;A++){const E=h[A];if(E.isDirectionalLight){const N=s.directional[d];N.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(u),d++}else if(E.isSpotLight){const N=s.spot[_];N.position.setFromMatrixPosition(E.matrixWorld),N.position.applyMatrix4(u),N.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(u),_++}else if(E.isRectAreaLight){const N=s.rectArea[x];N.position.setFromMatrixPosition(E.matrixWorld),N.position.applyMatrix4(u),a.identity(),o.copy(E.matrixWorld),o.premultiply(u),a.extractRotation(o),N.halfWidth.set(E.width*.5,0,0),N.halfHeight.set(0,E.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(E.matrixWorld),N.position.applyMatrix4(u),g++}else if(E.isHemisphereLight){const N=s.hemi[p];N.direction.setFromMatrixPosition(E.matrixWorld),N.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:s}}function _o(i,t){const e=new Rp(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Cp(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new _o(i,t),e.set(r,[c])):o>=a.length?(c=new _o(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class Pp extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lp extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ip=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Up(i,t,e){let n=new Br;const s=new lt,r=new lt,o=new te,a=new Pp({depthPacking:Al}),c=new Lp,l={},h=e.maxTextureSize,f={[mn]:Se,[Se]:mn,[Qe]:Qe},d=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Dp,fragmentShader:Ip}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Jt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let u=this.type;this.render=function(P,C,Z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const y=i.getRenderTarget(),w=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),q=i.state;q.setBlending(fn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ft=u!==$e&&this.type===$e,F=u===$e&&this.type!==$e;for(let Y=0,K=P.length;Y<K;Y++){const J=P[Y],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const rt=G.getFrameExtents();if(s.multiply(rt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,G.mapSize.y=r.y)),G.map===null||ft===!0||F===!0){const pt=this.type!==$e?{minFilter:ye,magFilter:ye}:{};G.map!==null&&G.map.dispose(),G.map=new Pn(s.x,s.y,pt),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const st=G.getViewportCount();for(let pt=0;pt<st;pt++){const _t=G.getViewport(pt);o.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),q.viewport(o),G.updateMatrices(J,pt),n=G.getFrustum(),E(C,Z,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===$e&&A(G,Z),G.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(y,w,j)};function A(P,C){const Z=t.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Pn(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(C,null,Z,d,x,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(C,null,Z,g,x,null)}function v(P,C,Z,y){let w=null;const j=Z.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(j!==void 0)w=j;else if(w=Z.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=w.uuid,ft=C.uuid;let F=l[q];F===void 0&&(F={},l[q]=F);let Y=F[ft];Y===void 0&&(Y=w.clone(),F[ft]=Y,C.addEventListener("dispose",N)),w=Y}if(w.visible=C.visible,w.wireframe=C.wireframe,y===$e?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:f[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,Z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const q=i.properties.get(w);q.light=Z}return w}function E(P,C,Z,y,w){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===$e)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld);const ft=t.update(P),F=P.material;if(Array.isArray(F)){const Y=ft.groups;for(let K=0,J=Y.length;K<J;K++){const G=Y[K],rt=F[G.materialIndex];if(rt&&rt.visible){const st=v(P,rt,y,w);P.onBeforeShadow(i,P,C,Z,ft,st,G),i.renderBufferDirect(Z,null,ft,st,P,G),P.onAfterShadow(i,P,C,Z,ft,st,G)}}}else if(F.visible){const Y=v(P,F,y,w);P.onBeforeShadow(i,P,C,Z,ft,Y,null),i.renderBufferDirect(Z,null,ft,Y,P,null),P.onAfterShadow(i,P,C,Z,ft,Y,null)}}const q=P.children;for(let ft=0,F=q.length;ft<F;ft++)E(q[ft],C,Z,y,w)}function N(P){P.target.removeEventListener("dispose",N);for(const Z in l){const y=l[Z],w=P.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function Np(i,t,e){const n=e.isWebGL2;function s(){let B=!1;const vt=new te;let St=null;const It=new te(0,0,0,0);return{setMask:function(Dt){St!==Dt&&!B&&(i.colorMask(Dt,Dt,Dt,Dt),St=Dt)},setLocked:function(Dt){B=Dt},setClear:function(Dt,Yt,Zt,ie,re){re===!0&&(Dt*=ie,Yt*=ie,Zt*=ie),vt.set(Dt,Yt,Zt,ie),It.equals(vt)===!1&&(i.clearColor(Dt,Yt,Zt,ie),It.copy(vt))},reset:function(){B=!1,St=null,It.set(-1,0,0,0)}}}function r(){let B=!1,vt=null,St=null,It=null;return{setTest:function(Dt){Dt?ot(i.DEPTH_TEST):k(i.DEPTH_TEST)},setMask:function(Dt){vt!==Dt&&!B&&(i.depthMask(Dt),vt=Dt)},setFunc:function(Dt){if(St!==Dt){switch(Dt){case nl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case sl:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case rl:i.depthFunc(i.EQUAL);break;case al:i.depthFunc(i.GEQUAL);break;case ol:i.depthFunc(i.GREATER);break;case cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=Dt}},setLocked:function(Dt){B=Dt},setClear:function(Dt){It!==Dt&&(i.clearDepth(Dt),It=Dt)},reset:function(){B=!1,vt=null,St=null,It=null}}}function o(){let B=!1,vt=null,St=null,It=null,Dt=null,Yt=null,Zt=null,ie=null,re=null;return{setTest:function(Kt){B||(Kt?ot(i.STENCIL_TEST):k(i.STENCIL_TEST))},setMask:function(Kt){vt!==Kt&&!B&&(i.stencilMask(Kt),vt=Kt)},setFunc:function(Kt,le,Ge){(St!==Kt||It!==le||Dt!==Ge)&&(i.stencilFunc(Kt,le,Ge),St=Kt,It=le,Dt=Ge)},setOp:function(Kt,le,Ge){(Yt!==Kt||Zt!==le||ie!==Ge)&&(i.stencilOp(Kt,le,Ge),Yt=Kt,Zt=le,ie=Ge)},setLocked:function(Kt){B=Kt},setClear:function(Kt){re!==Kt&&(i.clearStencil(Kt),re=Kt)},reset:function(){B=!1,vt=null,St=null,It=null,Dt=null,Yt=null,Zt=null,ie=null,re=null}}}const a=new s,c=new r,l=new o,h=new WeakMap,f=new WeakMap;let d={},g={},_=new WeakMap,x=[],p=null,u=!1,A=null,v=null,E=null,N=null,P=null,C=null,Z=null,y=new jt(0,0,0),w=0,j=!1,q=null,ft=null,F=null,Y=null,K=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,rt=0;const st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(st)[1]),G=rt>=1):st.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),G=rt>=2);let pt=null,_t={};const it=i.getParameter(i.SCISSOR_BOX),I=i.getParameter(i.VIEWPORT),L=new te().fromArray(it),T=new te().fromArray(I);function S(B,vt,St,It){const Dt=new Uint8Array(4),Yt=i.createTexture();i.bindTexture(B,Yt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<St;Zt++)n&&(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)?i.texImage3D(vt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(vt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return Yt}const $={};$[i.TEXTURE_2D]=S(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=S(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&($[i.TEXTURE_2D_ARRAY]=S(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=S(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ot(i.DEPTH_TEST),c.setFunc(ps),U(!1),m($r),ot(i.CULL_FACE),V(fn);function ot(B){d[B]!==!0&&(i.enable(B),d[B]=!0)}function k(B){d[B]!==!1&&(i.disable(B),d[B]=!1)}function ct(B,vt){return g[B]!==vt?(i.bindFramebuffer(B,vt),g[B]=vt,n&&(B===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=vt),B===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=vt)),!0):!1}function R(B,vt){let St=x,It=!1;if(B)if(St=_.get(vt),St===void 0&&(St=[],_.set(vt,St)),B.isWebGLMultipleRenderTargets){const Dt=B.texture;if(St.length!==Dt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let Yt=0,Zt=Dt.length;Yt<Zt;Yt++)St[Yt]=i.COLOR_ATTACHMENT0+Yt;St.length=Dt.length,It=!0}}else St[0]!==i.COLOR_ATTACHMENT0&&(St[0]=i.COLOR_ATTACHMENT0,It=!0);else St[0]!==i.BACK&&(St[0]=i.BACK,It=!0);It&&(e.isWebGL2?i.drawBuffers(St):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(St))}function Q(B){return p!==B?(i.useProgram(B),p=B,!0):!1}const O={[Tn]:i.FUNC_ADD,[Gc]:i.FUNC_SUBTRACT,[kc]:i.FUNC_REVERSE_SUBTRACT};if(n)O[na]=i.MIN,O[ia]=i.MAX;else{const B=t.get("EXT_blend_minmax");B!==null&&(O[na]=B.MIN_EXT,O[ia]=B.MAX_EXT)}const W={[Vc]:i.ZERO,[Wc]:i.ONE,[Xc]:i.SRC_COLOR,[mr]:i.SRC_ALPHA,[Jc]:i.SRC_ALPHA_SATURATE,[jc]:i.DST_COLOR,[Yc]:i.DST_ALPHA,[qc]:i.ONE_MINUS_SRC_COLOR,[gr]:i.ONE_MINUS_SRC_ALPHA,[Kc]:i.ONE_MINUS_DST_COLOR,[Zc]:i.ONE_MINUS_DST_ALPHA,[$c]:i.CONSTANT_COLOR,[Qc]:i.ONE_MINUS_CONSTANT_COLOR,[tl]:i.CONSTANT_ALPHA,[el]:i.ONE_MINUS_CONSTANT_ALPHA};function V(B,vt,St,It,Dt,Yt,Zt,ie,re,Kt){if(B===fn){u===!0&&(k(i.BLEND),u=!1);return}if(u===!1&&(ot(i.BLEND),u=!0),B!==Hc){if(B!==A||Kt!==j){if((v!==Tn||P!==Tn)&&(i.blendEquation(i.FUNC_ADD),v=Tn,P=Tn),Kt)switch(B){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qr:i.blendFunc(i.ONE,i.ONE);break;case ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ea:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ea:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,N=null,C=null,Z=null,y.set(0,0,0),w=0,A=B,j=Kt}return}Dt=Dt||vt,Yt=Yt||St,Zt=Zt||It,(vt!==v||Dt!==P)&&(i.blendEquationSeparate(O[vt],O[Dt]),v=vt,P=Dt),(St!==E||It!==N||Yt!==C||Zt!==Z)&&(i.blendFuncSeparate(W[St],W[It],W[Yt],W[Zt]),E=St,N=It,C=Yt,Z=Zt),(ie.equals(y)===!1||re!==w)&&(i.blendColor(ie.r,ie.g,ie.b,re),y.copy(ie),w=re),A=B,j=!1}function ht(B,vt){B.side===Qe?k(i.CULL_FACE):ot(i.CULL_FACE);let St=B.side===Se;vt&&(St=!St),U(St),B.blending===ri&&B.transparent===!1?V(fn):V(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),a.setMask(B.colorWrite);const It=B.stencilWrite;l.setTest(It),It&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),H(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):k(i.SAMPLE_ALPHA_TO_COVERAGE)}function U(B){q!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),q=B)}function m(B){B!==Bc?(ot(i.CULL_FACE),B!==ft&&(B===$r?i.cullFace(i.BACK):B===zc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):k(i.CULL_FACE),ft=B}function M(B){B!==F&&(G&&i.lineWidth(B),F=B)}function H(B,vt,St){B?(ot(i.POLYGON_OFFSET_FILL),(Y!==vt||K!==St)&&(i.polygonOffset(vt,St),Y=vt,K=St)):k(i.POLYGON_OFFSET_FILL)}function ut(B){B?ot(i.SCISSOR_TEST):k(i.SCISSOR_TEST)}function dt(B){B===void 0&&(B=i.TEXTURE0+J-1),pt!==B&&(i.activeTexture(B),pt=B)}function at(B,vt,St){St===void 0&&(pt===null?St=i.TEXTURE0+J-1:St=pt);let It=_t[St];It===void 0&&(It={type:void 0,texture:void 0},_t[St]=It),(It.type!==B||It.texture!==vt)&&(pt!==St&&(i.activeTexture(St),pt=St),i.bindTexture(B,vt||$[B]),It.type=B,It.texture=vt)}function Tt(){const B=_t[pt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Mt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function D(B){L.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),L.copy(B))}function xt(B){T.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),T.copy(B))}function Pt(B,vt){let St=f.get(vt);St===void 0&&(St=new WeakMap,f.set(vt,St));let It=St.get(B);It===void 0&&(It=i.getUniformBlockIndex(vt,B.name),St.set(B,It))}function wt(B,vt){const It=f.get(vt).get(B);h.get(vt)!==It&&(i.uniformBlockBinding(vt,It,B.__bindingPointIndex),h.set(vt,It))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},pt=null,_t={},g={},_=new WeakMap,x=[],p=null,u=!1,A=null,v=null,E=null,N=null,P=null,C=null,Z=null,y=new jt(0,0,0),w=0,j=!1,q=null,ft=null,F=null,Y=null,K=null,L.set(0,0,i.canvas.width,i.canvas.height),T.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ot,disable:k,bindFramebuffer:ct,drawBuffers:R,useProgram:Q,setBlending:V,setMaterial:ht,setFlipSided:U,setCullFace:m,setLineWidth:M,setPolygonOffset:H,setScissorTest:ut,activeTexture:dt,bindTexture:at,unbindTexture:Tt,compressedTexImage2D:Mt,compressedTexImage3D:Et,texImage2D:Ct,texImage3D:bt,updateUBOMapping:Pt,uniformBlockBinding:wt,texStorage2D:zt,texStorage3D:Ot,texSubImage2D:Rt,texSubImage3D:Nt,compressedTexSubImage2D:mt,compressedTexSubImage3D:qt,scissor:D,viewport:xt,reset:gt}}function Op(i,t,e,n,s,r,o){const a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(m,M){return g?new OffscreenCanvas(m,M):vs("canvas")}function x(m,M,H,ut){let dt=1;if((m.width>ut||m.height>ut)&&(dt=ut/Math.max(m.width,m.height)),dt<1||M===!0)if(typeof HTMLImageElement<"u"&&m instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&m instanceof ImageBitmap){const at=M?Er:Math.floor,Tt=at(dt*m.width),Mt=at(dt*m.height);f===void 0&&(f=_(Tt,Mt));const Et=H?_(Tt,Mt):f;return Et.width=Tt,Et.height=Mt,Et.getContext("2d").drawImage(m,0,0,Tt,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+m.width+"x"+m.height+") to ("+Tt+"x"+Mt+")."),Et}else return"data"in m&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+m.width+"x"+m.height+")."),m;return m}function p(m){return Ia(m.width)&&Ia(m.height)}function u(m){return a?!1:m.wrapS!==ze||m.wrapT!==ze||m.minFilter!==ye&&m.minFilter!==De}function A(m,M){return m.generateMipmaps&&M&&m.minFilter!==ye&&m.minFilter!==De}function v(m){i.generateMipmap(m)}function E(m,M,H,ut,dt=!1){if(a===!1)return M;if(m!==null){if(i[m]!==void 0)return i[m];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+m+"'")}let at=M;if(M===i.RED&&(H===i.FLOAT&&(at=i.R32F),H===i.HALF_FLOAT&&(at=i.R16F),H===i.UNSIGNED_BYTE&&(at=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(at=i.R8UI),H===i.UNSIGNED_SHORT&&(at=i.R16UI),H===i.UNSIGNED_INT&&(at=i.R32UI),H===i.BYTE&&(at=i.R8I),H===i.SHORT&&(at=i.R16I),H===i.INT&&(at=i.R32I)),M===i.RG&&(H===i.FLOAT&&(at=i.RG32F),H===i.HALF_FLOAT&&(at=i.RG16F),H===i.UNSIGNED_BYTE&&(at=i.RG8)),M===i.RGBA){const Tt=dt?ms:$t.getTransfer(ut);H===i.FLOAT&&(at=i.RGBA32F),H===i.HALF_FLOAT&&(at=i.RGBA16F),H===i.UNSIGNED_BYTE&&(at=Tt===Qt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function N(m,M,H){return A(m,H)===!0||m.isFramebufferTexture&&m.minFilter!==ye&&m.minFilter!==De?Math.log2(Math.max(M.width,M.height))+1:m.mipmaps!==void 0&&m.mipmaps.length>0?m.mipmaps.length:m.isCompressedTexture&&Array.isArray(m.image)?M.mipmaps.length:1}function P(m){return m===ye||m===sa||m===Ps?i.NEAREST:i.LINEAR}function C(m){const M=m.target;M.removeEventListener("dispose",C),y(M),M.isVideoTexture&&h.delete(M)}function Z(m){const M=m.target;M.removeEventListener("dispose",Z),j(M)}function y(m){const M=n.get(m);if(M.__webglInit===void 0)return;const H=m.source,ut=d.get(H);if(ut){const dt=ut[M.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&w(m),Object.keys(ut).length===0&&d.delete(H)}n.remove(m)}function w(m){const M=n.get(m);i.deleteTexture(M.__webglTexture);const H=m.source,ut=d.get(H);delete ut[M.__cacheKey],o.memory.textures--}function j(m){const M=m.texture,H=n.get(m),ut=n.get(M);if(ut.__webglTexture!==void 0&&(i.deleteTexture(ut.__webglTexture),o.memory.textures--),m.depthTexture&&m.depthTexture.dispose(),m.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(H.__webglFramebuffer[dt]))for(let at=0;at<H.__webglFramebuffer[dt].length;at++)i.deleteFramebuffer(H.__webglFramebuffer[dt][at]);else i.deleteFramebuffer(H.__webglFramebuffer[dt]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[dt])}else{if(Array.isArray(H.__webglFramebuffer))for(let dt=0;dt<H.__webglFramebuffer.length;dt++)i.deleteFramebuffer(H.__webglFramebuffer[dt]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let dt=0;dt<H.__webglColorRenderbuffer.length;dt++)H.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[dt]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(m.isWebGLMultipleRenderTargets)for(let dt=0,at=M.length;dt<at;dt++){const Tt=n.get(M[dt]);Tt.__webglTexture&&(i.deleteTexture(Tt.__webglTexture),o.memory.textures--),n.remove(M[dt])}n.remove(M),n.remove(m)}let q=0;function ft(){q=0}function F(){const m=q;return m>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+m+" texture units while this GPU supports only "+s.maxTextures),q+=1,m}function Y(m){const M=[];return M.push(m.wrapS),M.push(m.wrapT),M.push(m.wrapR||0),M.push(m.magFilter),M.push(m.minFilter),M.push(m.anisotropy),M.push(m.internalFormat),M.push(m.format),M.push(m.type),M.push(m.generateMipmaps),M.push(m.premultiplyAlpha),M.push(m.flipY),M.push(m.unpackAlignment),M.push(m.colorSpace),M.join()}function K(m,M){const H=n.get(m);if(m.isVideoTexture&&ht(m),m.isRenderTargetTexture===!1&&m.version>0&&H.__version!==m.version){const ut=m.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(H,m,M);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function J(m,M){const H=n.get(m);if(m.version>0&&H.__version!==m.version){L(H,m,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function G(m,M){const H=n.get(m);if(m.version>0&&H.__version!==m.version){L(H,m,M);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function rt(m,M){const H=n.get(m);if(m.version>0&&H.__version!==m.version){T(H,m,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}const st={[vr]:i.REPEAT,[ze]:i.CLAMP_TO_EDGE,[Mr]:i.MIRRORED_REPEAT},pt={[ye]:i.NEAREST,[sa]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[De]:i.LINEAR,[gl]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},_t={[Rl]:i.NEVER,[Ul]:i.ALWAYS,[Cl]:i.LESS,[jo]:i.LEQUAL,[Pl]:i.EQUAL,[Il]:i.GEQUAL,[Ll]:i.GREATER,[Dl]:i.NOTEQUAL};function it(m,M,H){if(H?(i.texParameteri(m,i.TEXTURE_WRAP_S,st[M.wrapS]),i.texParameteri(m,i.TEXTURE_WRAP_T,st[M.wrapT]),(m===i.TEXTURE_3D||m===i.TEXTURE_2D_ARRAY)&&i.texParameteri(m,i.TEXTURE_WRAP_R,st[M.wrapR]),i.texParameteri(m,i.TEXTURE_MAG_FILTER,pt[M.magFilter]),i.texParameteri(m,i.TEXTURE_MIN_FILTER,pt[M.minFilter])):(i.texParameteri(m,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(m,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(m===i.TEXTURE_3D||m===i.TEXTURE_2D_ARRAY)&&i.texParameteri(m,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==ze||M.wrapT!==ze)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(m,i.TEXTURE_MAG_FILTER,P(M.magFilter)),i.texParameteri(m,i.TEXTURE_MIN_FILTER,P(M.minFilter)),M.minFilter!==ye&&M.minFilter!==De&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(m,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(m,i.TEXTURE_COMPARE_FUNC,_t[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ut=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===ye||M.minFilter!==Ps&&M.minFilter!==Ri||M.type===un&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ci&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(m,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function I(m,M){let H=!1;m.__webglInit===void 0&&(m.__webglInit=!0,M.addEventListener("dispose",C));const ut=M.source;let dt=d.get(ut);dt===void 0&&(dt={},d.set(ut,dt));const at=Y(M);if(at!==m.__cacheKey){dt[at]===void 0&&(dt[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),dt[at].usedTimes++;const Tt=dt[m.__cacheKey];Tt!==void 0&&(dt[m.__cacheKey].usedTimes--,Tt.usedTimes===0&&w(M)),m.__cacheKey=at,m.__webglTexture=dt[at].texture}return H}function L(m,M,H){let ut=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ut=i.TEXTURE_3D);const dt=I(m,M),at=M.source;e.bindTexture(ut,m.__webglTexture,i.TEXTURE0+H);const Tt=n.get(at);if(at.version!==Tt.__version||dt===!0){e.activeTexture(i.TEXTURE0+H);const Mt=$t.getPrimaries($t.workingColorSpace),Et=M.colorSpace===Ie?null:$t.getPrimaries(M.colorSpace),Rt=M.colorSpace===Ie||Mt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Nt=u(M)&&p(M.image)===!1;let mt=x(M.image,Nt,!1,s.maxTextureSize);mt=U(M,mt);const qt=p(mt)||a,zt=r.convert(M.format,M.colorSpace);let Ot=r.convert(M.type),Ct=E(M.internalFormat,zt,Ot,M.colorSpace,M.isVideoTexture);it(ut,M,qt);let bt;const D=M.mipmaps,xt=a&&M.isVideoTexture!==!0&&Ct!==qo,Pt=Tt.__version===void 0||dt===!0,wt=N(M,mt,qt);if(M.isDepthTexture)Ct=i.DEPTH_COMPONENT,a?M.type===un?Ct=i.DEPTH_COMPONENT32F:M.type===hn?Ct=i.DEPTH_COMPONENT24:M.type===An?Ct=i.DEPTH24_STENCIL8:Ct=i.DEPTH_COMPONENT16:M.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===wn&&Ct===i.DEPTH_COMPONENT&&M.type!==Dr&&M.type!==hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=hn,Ot=r.convert(M.type)),M.format===hi&&Ct===i.DEPTH_COMPONENT&&(Ct=i.DEPTH_STENCIL,M.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=An,Ot=r.convert(M.type))),Pt&&(xt?e.texStorage2D(i.TEXTURE_2D,1,Ct,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,mt.width,mt.height,0,zt,Ot,null));else if(M.isDataTexture)if(D.length>0&&qt){xt&&Pt&&e.texStorage2D(i.TEXTURE_2D,wt,Ct,D[0].width,D[0].height);for(let gt=0,B=D.length;gt<B;gt++)bt=D[gt],xt?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,bt.width,bt.height,zt,Ot,bt.data):e.texImage2D(i.TEXTURE_2D,gt,Ct,bt.width,bt.height,0,zt,Ot,bt.data);M.generateMipmaps=!1}else xt?(Pt&&e.texStorage2D(i.TEXTURE_2D,wt,Ct,mt.width,mt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,zt,Ot,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,mt.width,mt.height,0,zt,Ot,mt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){xt&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Ct,D[0].width,D[0].height,mt.depth);for(let gt=0,B=D.length;gt<B;gt++)bt=D[gt],M.format!==He?zt!==null?xt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,bt.width,bt.height,mt.depth,zt,bt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,Ct,bt.width,bt.height,mt.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,bt.width,bt.height,mt.depth,zt,Ot,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,Ct,bt.width,bt.height,mt.depth,0,zt,Ot,bt.data)}else{xt&&Pt&&e.texStorage2D(i.TEXTURE_2D,wt,Ct,D[0].width,D[0].height);for(let gt=0,B=D.length;gt<B;gt++)bt=D[gt],M.format!==He?zt!==null?xt?e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,bt.width,bt.height,zt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,Ct,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,bt.width,bt.height,zt,Ot,bt.data):e.texImage2D(i.TEXTURE_2D,gt,Ct,bt.width,bt.height,0,zt,Ot,bt.data)}else if(M.isDataArrayTexture)xt?(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Ct,mt.width,mt.height,mt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,zt,Ot,mt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,mt.width,mt.height,mt.depth,0,zt,Ot,mt.data);else if(M.isData3DTexture)xt?(Pt&&e.texStorage3D(i.TEXTURE_3D,wt,Ct,mt.width,mt.height,mt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,zt,Ot,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,mt.width,mt.height,mt.depth,0,zt,Ot,mt.data);else if(M.isFramebufferTexture){if(Pt)if(xt)e.texStorage2D(i.TEXTURE_2D,wt,Ct,mt.width,mt.height);else{let gt=mt.width,B=mt.height;for(let vt=0;vt<wt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Ct,gt,B,0,zt,Ot,null),gt>>=1,B>>=1}}else if(D.length>0&&qt){xt&&Pt&&e.texStorage2D(i.TEXTURE_2D,wt,Ct,D[0].width,D[0].height);for(let gt=0,B=D.length;gt<B;gt++)bt=D[gt],xt?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,zt,Ot,bt):e.texImage2D(i.TEXTURE_2D,gt,Ct,zt,Ot,bt);M.generateMipmaps=!1}else xt?(Pt&&e.texStorage2D(i.TEXTURE_2D,wt,Ct,mt.width,mt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,zt,Ot,mt)):e.texImage2D(i.TEXTURE_2D,0,Ct,zt,Ot,mt);A(M,qt)&&v(ut),Tt.__version=at.version,M.onUpdate&&M.onUpdate(M)}m.__version=M.version}function T(m,M,H){if(M.image.length!==6)return;const ut=I(m,M),dt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,m.__webglTexture,i.TEXTURE0+H);const at=n.get(dt);if(dt.version!==at.__version||ut===!0){e.activeTexture(i.TEXTURE0+H);const Tt=$t.getPrimaries($t.workingColorSpace),Mt=M.colorSpace===Ie?null:$t.getPrimaries(M.colorSpace),Et=M.colorSpace===Ie||Tt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Rt=M.isCompressedTexture||M.image[0].isCompressedTexture,Nt=M.image[0]&&M.image[0].isDataTexture,mt=[];for(let gt=0;gt<6;gt++)!Rt&&!Nt?mt[gt]=x(M.image[gt],!1,!0,s.maxCubemapSize):mt[gt]=Nt?M.image[gt].image:M.image[gt],mt[gt]=U(M,mt[gt]);const qt=mt[0],zt=p(qt)||a,Ot=r.convert(M.format,M.colorSpace),Ct=r.convert(M.type),bt=E(M.internalFormat,Ot,Ct,M.colorSpace),D=a&&M.isVideoTexture!==!0,xt=at.__version===void 0||ut===!0;let Pt=N(M,qt,zt);it(i.TEXTURE_CUBE_MAP,M,zt);let wt;if(Rt){D&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,bt,qt.width,qt.height);for(let gt=0;gt<6;gt++){wt=mt[gt].mipmaps;for(let B=0;B<wt.length;B++){const vt=wt[B];M.format!==He?Ot!==null?D?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,B,0,0,vt.width,vt.height,Ot,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,B,bt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,B,0,0,vt.width,vt.height,Ot,Ct,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,B,bt,vt.width,vt.height,0,Ot,Ct,vt.data)}}}else{wt=M.mipmaps,D&&xt&&(wt.length>0&&Pt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,bt,mt[0].width,mt[0].height));for(let gt=0;gt<6;gt++)if(Nt){D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,mt[gt].width,mt[gt].height,Ot,Ct,mt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,bt,mt[gt].width,mt[gt].height,0,Ot,Ct,mt[gt].data);for(let B=0;B<wt.length;B++){const St=wt[B].image[gt].image;D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,B+1,0,0,St.width,St.height,Ot,Ct,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,B+1,bt,St.width,St.height,0,Ot,Ct,St.data)}}else{D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ot,Ct,mt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,bt,Ot,Ct,mt[gt]);for(let B=0;B<wt.length;B++){const vt=wt[B];D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,B+1,0,0,Ot,Ct,vt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,B+1,bt,Ot,Ct,vt.image[gt])}}}A(M,zt)&&v(i.TEXTURE_CUBE_MAP),at.__version=dt.version,M.onUpdate&&M.onUpdate(M)}m.__version=M.version}function S(m,M,H,ut,dt,at){const Tt=r.convert(H.format,H.colorSpace),Mt=r.convert(H.type),Et=E(H.internalFormat,Tt,Mt,H.colorSpace);if(!n.get(M).__hasExternalTextures){const Nt=Math.max(1,M.width>>at),mt=Math.max(1,M.height>>at);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,at,Et,Nt,mt,M.depth,0,Tt,Mt,null):e.texImage2D(dt,at,Et,Nt,mt,0,Tt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,m),V(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,dt,n.get(H).__webglTexture,0,W(M)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,dt,n.get(H).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $(m,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,m),M.depthBuffer&&!M.stencilBuffer){let ut=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||V(M)){const dt=M.depthTexture;dt&&dt.isDepthTexture&&(dt.type===un?ut=i.DEPTH_COMPONENT32F:dt.type===hn&&(ut=i.DEPTH_COMPONENT24));const at=W(M);V(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,ut,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ut,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ut,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,m)}else if(M.depthBuffer&&M.stencilBuffer){const ut=W(M);H&&V(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,i.DEPTH24_STENCIL8,M.width,M.height):V(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,m)}else{const ut=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let dt=0;dt<ut.length;dt++){const at=ut[dt],Tt=r.convert(at.format,at.colorSpace),Mt=r.convert(at.type),Et=E(at.internalFormat,Tt,Mt,at.colorSpace),Rt=W(M);H&&V(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Et,M.width,M.height):V(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,Et,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Et,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(m,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,m),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const ut=n.get(M.depthTexture).__webglTexture,dt=W(M);if(M.depthTexture.format===wn)V(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0);else if(M.depthTexture.format===hi)V(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function k(m){const M=n.get(m),H=m.isWebGLCubeRenderTarget===!0;if(m.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ot(M.__webglFramebuffer,m)}else if(H){M.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ut]),M.__webglDepthbuffer[ut]=i.createRenderbuffer(),$(M.__webglDepthbuffer[ut],m,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),$(M.__webglDepthbuffer,m,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(m,M,H){const ut=n.get(m);M!==void 0&&S(ut.__webglFramebuffer,m,m.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&k(m)}function R(m){const M=m.texture,H=n.get(m),ut=n.get(M);m.addEventListener("dispose",Z),m.isWebGLMultipleRenderTargets!==!0&&(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=M.version,o.memory.textures++);const dt=m.isWebGLCubeRenderTarget===!0,at=m.isWebGLMultipleRenderTargets===!0,Tt=p(m)||a;if(dt){H.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[Mt]=[];for(let Et=0;Et<M.mipmaps.length;Et++)H.__webglFramebuffer[Mt][Et]=i.createFramebuffer()}else H.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let Mt=0;Mt<M.mipmaps.length;Mt++)H.__webglFramebuffer[Mt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(at)if(s.drawBuffers){const Mt=m.texture;for(let Et=0,Rt=Mt.length;Et<Rt;Et++){const Nt=n.get(Mt[Et]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&m.samples>0&&V(m)===!1){const Mt=at?M:[M];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Et=0;Et<Mt.length;Et++){const Rt=Mt[Et];H.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Et]);const Nt=r.convert(Rt.format,Rt.colorSpace),mt=r.convert(Rt.type),qt=E(Rt.internalFormat,Nt,mt,Rt.colorSpace,m.isXRRenderTarget===!0),zt=W(m);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,qt,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,H.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),m.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),$(H.__webglDepthRenderbuffer,m,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),it(i.TEXTURE_CUBE_MAP,M,Tt);for(let Mt=0;Mt<6;Mt++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)S(H.__webglFramebuffer[Mt][Et],m,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Et);else S(H.__webglFramebuffer[Mt],m,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);A(M,Tt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const Mt=m.texture;for(let Et=0,Rt=Mt.length;Et<Rt;Et++){const Nt=Mt[Et],mt=n.get(Nt);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),it(i.TEXTURE_2D,Nt,Tt),S(H.__webglFramebuffer,m,Nt,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),A(Nt,Tt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((m.isWebGL3DRenderTarget||m.isWebGLArrayRenderTarget)&&(a?Mt=m.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Mt,ut.__webglTexture),it(Mt,M,Tt),a&&M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)S(H.__webglFramebuffer[Et],m,M,i.COLOR_ATTACHMENT0,Mt,Et);else S(H.__webglFramebuffer,m,M,i.COLOR_ATTACHMENT0,Mt,0);A(M,Tt)&&v(Mt),e.unbindTexture()}m.depthBuffer&&k(m)}function Q(m){const M=p(m)||a,H=m.isWebGLMultipleRenderTargets===!0?m.texture:[m.texture];for(let ut=0,dt=H.length;ut<dt;ut++){const at=H[ut];if(A(at,M)){const Tt=m.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(at).__webglTexture;e.bindTexture(Tt,Mt),v(Tt),e.unbindTexture()}}}function O(m){if(a&&m.samples>0&&V(m)===!1){const M=m.isWebGLMultipleRenderTargets?m.texture:[m.texture],H=m.width,ut=m.height;let dt=i.COLOR_BUFFER_BIT;const at=[],Tt=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(m),Et=m.isWebGLMultipleRenderTargets===!0;if(Et)for(let Rt=0;Rt<M.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Rt=0;Rt<M.length;Rt++){at.push(i.COLOR_ATTACHMENT0+Rt),m.depthBuffer&&at.push(Tt);const Nt=Mt.__ignoreDepthValues!==void 0?Mt.__ignoreDepthValues:!1;if(Nt===!1&&(m.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),m.stencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),Et&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Rt]),Nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Tt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Tt])),Et){const mt=n.get(M[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,H,ut,0,0,H,ut,dt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Rt=0;Rt<M.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Rt]);const Nt=n.get(M[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}}function W(m){return Math.min(s.maxSamples,m.samples)}function V(m){const M=n.get(m);return a&&m.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ht(m){const M=o.render.frame;h.get(m)!==M&&(h.set(m,M),m.update())}function U(m,M){const H=m.colorSpace,ut=m.format,dt=m.type;return m.isCompressedTexture===!0||m.isVideoTexture===!0||m.format===yr||H!==en&&H!==Ie&&($t.getTransfer(H)===Qt?a===!1?t.has("EXT_sRGB")===!0&&ut===He?(m.format=yr,m.minFilter=De,m.generateMipmaps=!1):M=Jo.sRGBToLinear(M):(ut!==He||dt!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=F,this.resetTextureUnits=ft,this.setTexture2D=K,this.setTexture2DArray=J,this.setTexture3D=G,this.setTextureCube=rt,this.rebindTextures=ct,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=S,this.useMultisampledRTT=V}function Fp(i,t,e){const n=e.isWebGL2;function s(r,o=Ie){let a;const c=$t.getTransfer(o);if(r===pn)return i.UNSIGNED_BYTE;if(r===Go)return i.UNSIGNED_SHORT_4_4_4_4;if(r===ko)return i.UNSIGNED_SHORT_5_5_5_1;if(r===_l)return i.BYTE;if(r===xl)return i.SHORT;if(r===Dr)return i.UNSIGNED_SHORT;if(r===Ho)return i.INT;if(r===hn)return i.UNSIGNED_INT;if(r===un)return i.FLOAT;if(r===Ci)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===vl)return i.ALPHA;if(r===He)return i.RGBA;if(r===Ml)return i.LUMINANCE;if(r===yl)return i.LUMINANCE_ALPHA;if(r===wn)return i.DEPTH_COMPONENT;if(r===hi)return i.DEPTH_STENCIL;if(r===yr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Sl)return i.RED;if(r===Vo)return i.RED_INTEGER;if(r===El)return i.RG;if(r===Wo)return i.RG_INTEGER;if(r===Xo)return i.RGBA_INTEGER;if(r===Ls||r===Ds||r===Is||r===Us)if(c===Qt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ls)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ls)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ds)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Is)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Us)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ra||r===aa||r===oa||r===ca)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ra)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===aa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ca)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qo)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===la||r===ha)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===la)return c===Qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ha)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ua||r===fa||r===da||r===pa||r===ma||r===ga||r===_a||r===xa||r===va||r===Ma||r===ya||r===Sa||r===Ea||r===Ta)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ua)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fa)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===da)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pa)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ma)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ga)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_a)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xa)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===va)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ma)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ya)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sa)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ea)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ta)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ns||r===ba||r===Aa)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ns)return c===Qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ba)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Aa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tl||r===wa||r===Ra||r===Ca)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ns)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ra)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ca)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===An?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Bp extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ei extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zp={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),u=this._getHandJoint(l,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),g=.02,_=.005;l.inputState.pinching&&d>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Hp extends Un{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,d=null,g=null,_=null;const x=e.getContextAttributes();let p=null,u=null;const A=[],v=[],E=new lt;let N=null;const P=new Re;P.layers.enable(1),P.viewport=new te;const C=new Re;C.layers.enable(2),C.viewport=new te;const Z=[P,C],y=new Bp;y.layers.enable(1),y.layers.enable(2);let w=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let I=A[it];return I===void 0&&(I=new rr,A[it]=I),I.getTargetRaySpace()},this.getControllerGrip=function(it){let I=A[it];return I===void 0&&(I=new rr,A[it]=I),I.getGripSpace()},this.getHand=function(it){let I=A[it];return I===void 0&&(I=new rr,A[it]=I),I.getHandSpace()};function q(it){const I=v.indexOf(it.inputSource);if(I===-1)return;const L=A[I];L!==void 0&&(L.update(it.inputSource,it.frame,l||o),L.dispatchEvent({type:it.type,data:it.inputSource}))}function ft(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",ft),s.removeEventListener("inputsourceschange",F);for(let it=0;it<A.length;it++){const I=v[it];I!==null&&(v[it]=null,A[it].disconnect(I))}w=null,j=null,t.setRenderTarget(p),g=null,d=null,f=null,s=null,u=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(it){l=it},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",ft),s.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const I={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,I),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new Pn(g.framebufferWidth,g.framebufferHeight,{format:He,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let I=null,L=null,T=null;x.depth&&(T=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,I=x.stencil?hi:wn,L=x.stencil?An:hn);const S={colorFormat:e.RGBA8,depthFormat:T,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(S),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),u=new Pn(d.textureWidth,d.textureHeight,{format:He,type:pn,depthTexture:new cc(d.textureWidth,d.textureHeight,L,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const $=t.properties.get(u);$.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(it){for(let I=0;I<it.removed.length;I++){const L=it.removed[I],T=v.indexOf(L);T>=0&&(v[T]=null,A[T].disconnect(L))}for(let I=0;I<it.added.length;I++){const L=it.added[I];let T=v.indexOf(L);if(T===-1){for(let $=0;$<A.length;$++)if($>=v.length){v.push(L),T=$;break}else if(v[$]===null){v[$]=L,T=$;break}if(T===-1)break}const S=A[T];S&&S.connect(L)}}const Y=new z,K=new z;function J(it,I,L){Y.setFromMatrixPosition(I.matrixWorld),K.setFromMatrixPosition(L.matrixWorld);const T=Y.distanceTo(K),S=I.projectionMatrix.elements,$=L.projectionMatrix.elements,ot=S[14]/(S[10]-1),k=S[14]/(S[10]+1),ct=(S[9]+1)/S[5],R=(S[9]-1)/S[5],Q=(S[8]-1)/S[0],O=($[8]+1)/$[0],W=ot*Q,V=ot*O,ht=T/(-Q+O),U=ht*-Q;I.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(U),it.translateZ(ht),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert();const m=ot+ht,M=k+ht,H=W-U,ut=V+(T-U),dt=ct*k/M*m,at=R*k/M*m;it.projectionMatrix.makePerspective(H,ut,dt,at,m,M),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}function G(it,I){I===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(I.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;y.near=C.near=P.near=it.near,y.far=C.far=P.far=it.far,(w!==y.near||j!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,j=y.far);const I=it.parent,L=y.cameras;G(y,I);for(let T=0;T<L.length;T++)G(L[T],I);L.length===2?J(y,P,C):y.projectionMatrix.copy(P.projectionMatrix),rt(it,y,I)};function rt(it,I,L){L===null?it.matrix.copy(I.matrixWorld):(it.matrix.copy(L.matrixWorld),it.matrix.invert(),it.matrix.multiply(I.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(I.projectionMatrix),it.projectionMatrixInverse.copy(I.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Sr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(it){c=it,d!==null&&(d.fixedFoveation=it),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=it)};let st=null;function pt(it,I){if(h=I.getViewerPose(l||o),_=I,h!==null){const L=h.views;g!==null&&(t.setRenderTargetFramebuffer(u,g.framebuffer),t.setRenderTarget(u));let T=!1;L.length!==y.cameras.length&&(y.cameras.length=0,T=!0);for(let S=0;S<L.length;S++){const $=L[S];let ot=null;if(g!==null)ot=g.getViewport($);else{const ct=f.getViewSubImage(d,$);ot=ct.viewport,S===0&&(t.setRenderTargetTextures(u,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(u))}let k=Z[S];k===void 0&&(k=new Re,k.layers.enable(S),k.viewport=new te,Z[S]=k),k.matrix.fromArray($.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray($.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(ot.x,ot.y,ot.width,ot.height),S===0&&(y.matrix.copy(k.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),T===!0&&y.cameras.push(k)}}for(let L=0;L<A.length;L++){const T=v[L],S=A[L];T!==null&&S!==void 0&&S.update(T,I,l||o)}st&&st(it,I),I.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:I}),_=null}const _t=new ac;_t.setAnimationLoop(pt),this.setAnimationLoop=function(it){st=it},this.dispose=function(){}}}function Gp(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,ic(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,A,v,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&g(p,u,E)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),x(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?c(p,u,A,v):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Se&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Se&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const A=t.get(u).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,A,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*A,p.scale.value=v*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,A){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Se&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const A=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kp(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(A,v){const E=v.program;n.uniformBlockBinding(A,E)}function l(A,v){let E=s[A.id];E===void 0&&(_(A),E=h(A),s[A.id]=E,A.addEventListener("dispose",p));const N=v.program;n.updateUBOMapping(A,N);const P=t.render.frame;r[A.id]!==P&&(d(A),r[A.id]=P)}function h(A){const v=f();A.__bindingPointIndex=v;const E=i.createBuffer(),N=A.__size,P=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,N,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const v=s[A.id],E=A.uniforms,N=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let P=0,C=E.length;P<C;P++){const Z=Array.isArray(E[P])?E[P]:[E[P]];for(let y=0,w=Z.length;y<w;y++){const j=Z[y];if(g(j,P,y,N)===!0){const q=j.__offset,ft=Array.isArray(j.value)?j.value:[j.value];let F=0;for(let Y=0;Y<ft.length;Y++){const K=ft[Y],J=x(K);typeof K=="number"||typeof K=="boolean"?(j.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,q+F,j.__data)):K.isMatrix3?(j.__data[0]=K.elements[0],j.__data[1]=K.elements[1],j.__data[2]=K.elements[2],j.__data[3]=0,j.__data[4]=K.elements[3],j.__data[5]=K.elements[4],j.__data[6]=K.elements[5],j.__data[7]=0,j.__data[8]=K.elements[6],j.__data[9]=K.elements[7],j.__data[10]=K.elements[8],j.__data[11]=0):(K.toArray(j.__data,F),F+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,j.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(A,v,E,N){const P=A.value,C=v+"_"+E;if(N[C]===void 0)return typeof P=="number"||typeof P=="boolean"?N[C]=P:N[C]=P.clone(),!0;{const Z=N[C];if(typeof P=="number"||typeof P=="boolean"){if(Z!==P)return N[C]=P,!0}else if(Z.equals(P)===!1)return Z.copy(P),!0}return!1}function _(A){const v=A.uniforms;let E=0;const N=16;for(let C=0,Z=v.length;C<Z;C++){const y=Array.isArray(v[C])?v[C]:[v[C]];for(let w=0,j=y.length;w<j;w++){const q=y[w],ft=Array.isArray(q.value)?q.value:[q.value];for(let F=0,Y=ft.length;F<Y;F++){const K=ft[F],J=x(K),G=E%N;G!==0&&N-G<J.boundary&&(E+=N-G),q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=J.storage}}}const P=E%N;return P>0&&(E+=N-P),A.__size=E,A.__cache={},this}function x(A){const v={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function p(A){const v=A.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(const A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}class pc{constructor(t={}){const{canvas:e=Fl(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const g=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oe,this._useLegacyLights=!1,this.toneMapping=dn,this.toneMappingExposure=1;const v=this;let E=!1,N=0,P=0,C=null,Z=-1,y=null;const w=new te,j=new te;let q=null;const ft=new jt(0);let F=0,Y=e.width,K=e.height,J=1,G=null,rt=null;const st=new te(0,0,Y,K),pt=new te(0,0,Y,K);let _t=!1;const it=new Br;let I=!1,L=!1,T=null;const S=new ce,$=new lt,ot=new z,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return C===null?J:1}let R=n;function Q(b,X){for(let et=0;et<b.length;et++){const nt=b[et],tt=e.getContext(nt,X);if(tt!==null)return tt}return null}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lr}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",vt,!1),R===null){const X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),R=Q(X,b),R===null)throw Q(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let O,W,V,ht,U,m,M,H,ut,dt,at,Tt,Mt,Et,Rt,Nt,mt,qt,zt,Ot,Ct,bt,D,xt;function Pt(){O=new $f(R),W=new qf(R,O,t),O.init(W),bt=new Fp(R,O,W),V=new Np(R,O,W),ht=new ed(R),U=new yp,m=new Op(R,O,V,U,W,bt,ht),M=new Zf(v),H=new Jf(v),ut=new ch(R,W),D=new Wf(R,O,ut,W),dt=new Qf(R,ut,ht,D),at=new rd(R,dt,ut,ht),zt=new sd(R,W,m),Nt=new Yf(U),Tt=new Mp(v,M,H,O,W,D,Nt),Mt=new Gp(v,U),Et=new Ep,Rt=new Cp(O,W),qt=new Vf(v,M,H,V,at,d,c),mt=new Up(v,at,W),xt=new kp(R,ht,W,V),Ot=new Xf(R,O,ht,W),Ct=new td(R,O,ht,W),ht.programs=Tt.programs,v.capabilities=W,v.extensions=O,v.properties=U,v.renderLists=Et,v.shadowMap=mt,v.state=V,v.info=ht}Pt();const wt=new Hp(v,R);this.xr=wt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=O.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=O.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(Y,K,!1))},this.getSize=function(b){return b.set(Y,K)},this.setSize=function(b,X,et=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,K=X,e.width=Math.floor(b*J),e.height=Math.floor(X*J),et===!0&&(e.style.width=b+"px",e.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(Y*J,K*J).floor()},this.setDrawingBufferSize=function(b,X,et){Y=b,K=X,J=et,e.width=Math.floor(b*et),e.height=Math.floor(X*et),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(st)},this.setViewport=function(b,X,et,nt){b.isVector4?st.set(b.x,b.y,b.z,b.w):st.set(b,X,et,nt),V.viewport(w.copy(st).multiplyScalar(J).floor())},this.getScissor=function(b){return b.copy(pt)},this.setScissor=function(b,X,et,nt){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,X,et,nt),V.scissor(j.copy(pt).multiplyScalar(J).floor())},this.getScissorTest=function(){return _t},this.setScissorTest=function(b){V.setScissorTest(_t=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){rt=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(b=!0,X=!0,et=!0){let nt=0;if(b){let tt=!1;if(C!==null){const At=C.texture.format;tt=At===Xo||At===Wo||At===Vo}if(tt){const At=C.texture.type,Lt=At===pn||At===hn||At===Dr||At===An||At===Go||At===ko,Ut=qt.getClearColor(),Ft=qt.getClearAlpha(),Wt=Ut.r,Ht=Ut.g,Gt=Ut.b;Lt?(g[0]=Wt,g[1]=Ht,g[2]=Gt,g[3]=Ft,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Wt,_[1]=Ht,_[2]=Gt,_[3]=Ft,R.clearBufferiv(R.COLOR,0,_))}else nt|=R.COLOR_BUFFER_BIT}X&&(nt|=R.DEPTH_BUFFER_BIT),et&&(nt|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Et.dispose(),Rt.dispose(),U.dispose(),M.dispose(),H.dispose(),at.dispose(),D.dispose(),xt.dispose(),Tt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",re),wt.removeEventListener("sessionend",Kt),T&&(T.dispose(),T=null),le.stop()};function gt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=ht.autoReset,X=mt.enabled,et=mt.autoUpdate,nt=mt.needsUpdate,tt=mt.type;Pt(),ht.autoReset=b,mt.enabled=X,mt.autoUpdate=et,mt.needsUpdate=nt,mt.type=tt}function vt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function St(b){const X=b.target;X.removeEventListener("dispose",St),It(X)}function It(b){Dt(b),U.remove(b)}function Dt(b){const X=U.get(b).programs;X!==void 0&&(X.forEach(function(et){Tt.releaseProgram(et)}),b.isShaderMaterial&&Tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,et,nt,tt,At){X===null&&(X=k);const Lt=tt.isMesh&&tt.matrixWorld.determinant()<0,Ut=Ac(b,X,et,nt,tt);V.setMaterial(nt,Lt);let Ft=et.index,Wt=1;if(nt.wireframe===!0){if(Ft=dt.getWireframeAttribute(et),Ft===void 0)return;Wt=2}const Ht=et.drawRange,Gt=et.attributes.position;let ae=Ht.start*Wt,be=(Ht.start+Ht.count)*Wt;At!==null&&(ae=Math.max(ae,At.start*Wt),be=Math.min(be,(At.start+At.count)*Wt)),Ft!==null?(ae=Math.max(ae,0),be=Math.min(be,Ft.count)):Gt!=null&&(ae=Math.max(ae,0),be=Math.min(be,Gt.count));const de=be-ae;if(de<0||de===1/0)return;D.setup(tt,nt,Ut,et,Ft);let Xe,ee=Ot;if(Ft!==null&&(Xe=ut.get(Ft),ee=Ct,ee.setIndex(Xe)),tt.isMesh)nt.wireframe===!0?(V.setLineWidth(nt.wireframeLinewidth*ct()),ee.setMode(R.LINES)):ee.setMode(R.TRIANGLES);else if(tt.isLine){let Xt=nt.linewidth;Xt===void 0&&(Xt=1),V.setLineWidth(Xt*ct()),tt.isLineSegments?ee.setMode(R.LINES):tt.isLineLoop?ee.setMode(R.LINE_LOOP):ee.setMode(R.LINE_STRIP)}else tt.isPoints?ee.setMode(R.POINTS):tt.isSprite&&ee.setMode(R.TRIANGLES);if(tt.isBatchedMesh)ee.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)ee.renderInstances(ae,de,tt.count);else if(et.isInstancedBufferGeometry){const Xt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,As=Math.min(et.instanceCount,Xt);ee.renderInstances(ae,de,As)}else ee.render(ae,de)};function Yt(b,X,et){b.transparent===!0&&b.side===Qe&&b.forceSinglePass===!1?(b.side=Se,b.needsUpdate=!0,Oi(b,X,et),b.side=mn,b.needsUpdate=!0,Oi(b,X,et),b.side=Qe):Oi(b,X,et)}this.compile=function(b,X,et=null){et===null&&(et=b),p=Rt.get(et),p.init(),A.push(p),et.traverseVisible(function(tt){tt.isLight&&tt.layers.test(X.layers)&&(p.pushLight(tt),tt.castShadow&&p.pushShadow(tt))}),b!==et&&b.traverseVisible(function(tt){tt.isLight&&tt.layers.test(X.layers)&&(p.pushLight(tt),tt.castShadow&&p.pushShadow(tt))}),p.setupLights(v._useLegacyLights);const nt=new Set;return b.traverse(function(tt){const At=tt.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){const Ut=At[Lt];Yt(Ut,et,tt),nt.add(Ut)}else Yt(At,et,tt),nt.add(At)}),A.pop(),p=null,nt},this.compileAsync=function(b,X,et=null){const nt=this.compile(b,X,et);return new Promise(tt=>{function At(){if(nt.forEach(function(Lt){U.get(Lt).currentProgram.isReady()&&nt.delete(Lt)}),nt.size===0){tt(b);return}setTimeout(At,10)}O.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Zt=null;function ie(b){Zt&&Zt(b)}function re(){le.stop()}function Kt(){le.start()}const le=new ac;le.setAnimationLoop(ie),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(b){Zt=b,wt.setAnimationLoop(b),b===null?le.stop():le.start()},wt.addEventListener("sessionstart",re),wt.addEventListener("sessionend",Kt),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(X),X=wt.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,X,C),p=Rt.get(b,A.length),p.init(),A.push(p),S.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),it.setFromProjectionMatrix(S),L=this.localClippingEnabled,I=Nt.init(this.clippingPlanes,L),x=Et.get(b,u.length),x.init(),u.push(x),Ge(b,X,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(G,rt),this.info.render.frame++,I===!0&&Nt.beginShadows();const et=p.state.shadowsArray;if(mt.render(et,b,X),I===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(x,b),p.setupLights(v._useLegacyLights),X.isArrayCamera){const nt=X.cameras;for(let tt=0,At=nt.length;tt<At;tt++){const Lt=nt[tt];qr(x,b,Lt,Lt.viewport)}}else qr(x,b,X);C!==null&&(m.updateMultisampleRenderTarget(C),m.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,X),D.resetDefaultState(),Z=-1,y=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Ge(b,X,et,nt){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)et=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||it.intersectsSprite(b)){nt&&ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(S);const Lt=at.update(b),Ut=b.material;Ut.visible&&x.push(b,Lt,Ut,et,ot.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||it.intersectsObject(b))){const Lt=at.update(b),Ut=b.material;if(nt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ot.copy(b.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),ot.copy(Lt.boundingSphere.center)),ot.applyMatrix4(b.matrixWorld).applyMatrix4(S)),Array.isArray(Ut)){const Ft=Lt.groups;for(let Wt=0,Ht=Ft.length;Wt<Ht;Wt++){const Gt=Ft[Wt],ae=Ut[Gt.materialIndex];ae&&ae.visible&&x.push(b,Lt,ae,et,ot.z,Gt)}}else Ut.visible&&x.push(b,Lt,Ut,et,ot.z,null)}}const At=b.children;for(let Lt=0,Ut=At.length;Lt<Ut;Lt++)Ge(At[Lt],X,et,nt)}function qr(b,X,et,nt){const tt=b.opaque,At=b.transmissive,Lt=b.transparent;p.setupLightsView(et),I===!0&&Nt.setGlobalState(v.clippingPlanes,et),At.length>0&&bc(tt,At,X,et),nt&&V.viewport(w.copy(nt)),tt.length>0&&Ni(tt,X,et),At.length>0&&Ni(At,X,et),Lt.length>0&&Ni(Lt,X,et),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function bc(b,X,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;const At=W.isWebGL2;T===null&&(T=new Pn(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")?Ci:pn,minFilter:Ri,samples:At?4:0})),v.getDrawingBufferSize($),At?T.setSize($.x,$.y):T.setSize(Er($.x),Er($.y));const Lt=v.getRenderTarget();v.setRenderTarget(T),v.getClearColor(ft),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();const Ut=v.toneMapping;v.toneMapping=dn,Ni(b,et,nt),m.updateMultisampleRenderTarget(T),m.updateRenderTargetMipmap(T);let Ft=!1;for(let Wt=0,Ht=X.length;Wt<Ht;Wt++){const Gt=X[Wt],ae=Gt.object,be=Gt.geometry,de=Gt.material,Xe=Gt.group;if(de.side===Qe&&ae.layers.test(nt.layers)){const ee=de.side;de.side=Se,de.needsUpdate=!0,Yr(ae,et,nt,be,de,Xe),de.side=ee,de.needsUpdate=!0,Ft=!0}}Ft===!0&&(m.updateMultisampleRenderTarget(T),m.updateRenderTargetMipmap(T)),v.setRenderTarget(Lt),v.setClearColor(ft,F),v.toneMapping=Ut}function Ni(b,X,et){const nt=X.isScene===!0?X.overrideMaterial:null;for(let tt=0,At=b.length;tt<At;tt++){const Lt=b[tt],Ut=Lt.object,Ft=Lt.geometry,Wt=nt===null?Lt.material:nt,Ht=Lt.group;Ut.layers.test(et.layers)&&Yr(Ut,X,et,Ft,Wt,Ht)}}function Yr(b,X,et,nt,tt,At){b.onBeforeRender(v,X,et,nt,tt,At),b.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),tt.onBeforeRender(v,X,et,nt,b,At),tt.transparent===!0&&tt.side===Qe&&tt.forceSinglePass===!1?(tt.side=Se,tt.needsUpdate=!0,v.renderBufferDirect(et,X,nt,tt,b,At),tt.side=mn,tt.needsUpdate=!0,v.renderBufferDirect(et,X,nt,tt,b,At),tt.side=Qe):v.renderBufferDirect(et,X,nt,tt,b,At),b.onAfterRender(v,X,et,nt,tt,At)}function Oi(b,X,et){X.isScene!==!0&&(X=k);const nt=U.get(b),tt=p.state.lights,At=p.state.shadowsArray,Lt=tt.state.version,Ut=Tt.getParameters(b,tt.state,At,X,et),Ft=Tt.getProgramCacheKey(Ut);let Wt=nt.programs;nt.environment=b.isMeshStandardMaterial?X.environment:null,nt.fog=X.fog,nt.envMap=(b.isMeshStandardMaterial?H:M).get(b.envMap||nt.environment),Wt===void 0&&(b.addEventListener("dispose",St),Wt=new Map,nt.programs=Wt);let Ht=Wt.get(Ft);if(Ht!==void 0){if(nt.currentProgram===Ht&&nt.lightsStateVersion===Lt)return jr(b,Ut),Ht}else Ut.uniforms=Tt.getUniforms(b),b.onBuild(et,Ut,v),b.onBeforeCompile(Ut,v),Ht=Tt.acquireProgram(Ut,Ft),Wt.set(Ft,Ht),nt.uniforms=Ut.uniforms;const Gt=nt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Gt.clippingPlanes=Nt.uniform),jr(b,Ut),nt.needsLights=Rc(b),nt.lightsStateVersion=Lt,nt.needsLights&&(Gt.ambientLightColor.value=tt.state.ambient,Gt.lightProbe.value=tt.state.probe,Gt.directionalLights.value=tt.state.directional,Gt.directionalLightShadows.value=tt.state.directionalShadow,Gt.spotLights.value=tt.state.spot,Gt.spotLightShadows.value=tt.state.spotShadow,Gt.rectAreaLights.value=tt.state.rectArea,Gt.ltc_1.value=tt.state.rectAreaLTC1,Gt.ltc_2.value=tt.state.rectAreaLTC2,Gt.pointLights.value=tt.state.point,Gt.pointLightShadows.value=tt.state.pointShadow,Gt.hemisphereLights.value=tt.state.hemi,Gt.directionalShadowMap.value=tt.state.directionalShadowMap,Gt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Gt.spotShadowMap.value=tt.state.spotShadowMap,Gt.spotLightMatrix.value=tt.state.spotLightMatrix,Gt.spotLightMap.value=tt.state.spotLightMap,Gt.pointShadowMap.value=tt.state.pointShadowMap,Gt.pointShadowMatrix.value=tt.state.pointShadowMatrix),nt.currentProgram=Ht,nt.uniformsList=null,Ht}function Zr(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=ds.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function jr(b,X){const et=U.get(b);et.outputColorSpace=X.outputColorSpace,et.batching=X.batching,et.instancing=X.instancing,et.instancingColor=X.instancingColor,et.skinning=X.skinning,et.morphTargets=X.morphTargets,et.morphNormals=X.morphNormals,et.morphColors=X.morphColors,et.morphTargetsCount=X.morphTargetsCount,et.numClippingPlanes=X.numClippingPlanes,et.numIntersection=X.numClipIntersection,et.vertexAlphas=X.vertexAlphas,et.vertexTangents=X.vertexTangents,et.toneMapping=X.toneMapping}function Ac(b,X,et,nt,tt){X.isScene!==!0&&(X=k),m.resetTextureUnits();const At=X.fog,Lt=nt.isMeshStandardMaterial?X.environment:null,Ut=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:en,Ft=(nt.isMeshStandardMaterial?H:M).get(nt.envMap||Lt),Wt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Ht=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Gt=!!et.morphAttributes.position,ae=!!et.morphAttributes.normal,be=!!et.morphAttributes.color;let de=dn;nt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(de=v.toneMapping);const Xe=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ee=Xe!==void 0?Xe.length:0,Xt=U.get(nt),As=p.state.lights;if(I===!0&&(L===!0||b!==y)){const Ce=b===y&&nt.id===Z;Nt.setState(nt,b,Ce)}let se=!1;nt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==As.state.version||Xt.outputColorSpace!==Ut||tt.isBatchedMesh&&Xt.batching===!1||!tt.isBatchedMesh&&Xt.batching===!0||tt.isInstancedMesh&&Xt.instancing===!1||!tt.isInstancedMesh&&Xt.instancing===!0||tt.isSkinnedMesh&&Xt.skinning===!1||!tt.isSkinnedMesh&&Xt.skinning===!0||tt.isInstancedMesh&&Xt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Xt.instancingColor===!1&&tt.instanceColor!==null||Xt.envMap!==Ft||nt.fog===!0&&Xt.fog!==At||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Nt.numPlanes||Xt.numIntersection!==Nt.numIntersection)||Xt.vertexAlphas!==Wt||Xt.vertexTangents!==Ht||Xt.morphTargets!==Gt||Xt.morphNormals!==ae||Xt.morphColors!==be||Xt.toneMapping!==de||W.isWebGL2===!0&&Xt.morphTargetsCount!==ee)&&(se=!0):(se=!0,Xt.__version=nt.version);let gn=Xt.currentProgram;se===!0&&(gn=Oi(nt,X,tt));let Kr=!1,mi=!1,ws=!1;const _e=gn.getUniforms(),_n=Xt.uniforms;if(V.useProgram(gn.program)&&(Kr=!0,mi=!0,ws=!0),nt.id!==Z&&(Z=nt.id,mi=!0),Kr||y!==b){_e.setValue(R,"projectionMatrix",b.projectionMatrix),_e.setValue(R,"viewMatrix",b.matrixWorldInverse);const Ce=_e.map.cameraPosition;Ce!==void 0&&Ce.setValue(R,ot.setFromMatrixPosition(b.matrixWorld)),W.logarithmicDepthBuffer&&_e.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&_e.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,mi=!0,ws=!0)}if(tt.isSkinnedMesh){_e.setOptional(R,tt,"bindMatrix"),_e.setOptional(R,tt,"bindMatrixInverse");const Ce=tt.skeleton;Ce&&(W.floatVertexTextures?(Ce.boneTexture===null&&Ce.computeBoneTexture(),_e.setValue(R,"boneTexture",Ce.boneTexture,m)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}tt.isBatchedMesh&&(_e.setOptional(R,tt,"batchingTexture"),_e.setValue(R,"batchingTexture",tt._matricesTexture,m));const Rs=et.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0&&W.isWebGL2===!0)&&zt.update(tt,et,gn),(mi||Xt.receiveShadow!==tt.receiveShadow)&&(Xt.receiveShadow=tt.receiveShadow,_e.setValue(R,"receiveShadow",tt.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(_n.envMap.value=Ft,_n.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),mi&&(_e.setValue(R,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&wc(_n,ws),At&&nt.fog===!0&&Mt.refreshFogUniforms(_n,At),Mt.refreshMaterialUniforms(_n,nt,J,K,T),ds.upload(R,Zr(Xt),_n,m)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(ds.upload(R,Zr(Xt),_n,m),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&_e.setValue(R,"center",tt.center),_e.setValue(R,"modelViewMatrix",tt.modelViewMatrix),_e.setValue(R,"normalMatrix",tt.normalMatrix),_e.setValue(R,"modelMatrix",tt.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Ce=nt.uniformsGroups;for(let Cs=0,Cc=Ce.length;Cs<Cc;Cs++)if(W.isWebGL2){const Jr=Ce[Cs];xt.update(Jr,gn),xt.bind(Jr,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function wc(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Rc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,X,et){U.get(b.texture).__webglTexture=X,U.get(b.depthTexture).__webglTexture=et;const nt=U.get(b);nt.__hasExternalTextures=!0,nt.__hasExternalTextures&&(nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,X){const et=U.get(b);et.__webglFramebuffer=X,et.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,et=0){C=b,N=X,P=et;let nt=!0,tt=null,At=!1,Lt=!1;if(b){const Ft=U.get(b);Ft.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(R.FRAMEBUFFER,null),nt=!1):Ft.__webglFramebuffer===void 0?m.setupRenderTarget(b):Ft.__hasExternalTextures&&m.rebindTextures(b,U.get(b.texture).__webglTexture,U.get(b.depthTexture).__webglTexture);const Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Lt=!0);const Ht=U.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ht[X])?tt=Ht[X][et]:tt=Ht[X],At=!0):W.isWebGL2&&b.samples>0&&m.useMultisampledRTT(b)===!1?tt=U.get(b).__webglMultisampledFramebuffer:Array.isArray(Ht)?tt=Ht[et]:tt=Ht,w.copy(b.viewport),j.copy(b.scissor),q=b.scissorTest}else w.copy(st).multiplyScalar(J).floor(),j.copy(pt).multiplyScalar(J).floor(),q=_t;if(V.bindFramebuffer(R.FRAMEBUFFER,tt)&&W.drawBuffers&&nt&&V.drawBuffers(b,tt),V.viewport(w),V.scissor(j),V.setScissorTest(q),At){const Ft=U.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ft.__webglTexture,et)}else if(Lt){const Ft=U.get(b.texture),Wt=X||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ft.__webglTexture,et||0,Wt)}Z=-1},this.readRenderTargetPixels=function(b,X,et,nt,tt,At,Lt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=U.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){V.bindFramebuffer(R.FRAMEBUFFER,Ut);try{const Ft=b.texture,Wt=Ft.format,Ht=Ft.type;if(Wt!==He&&bt.convert(Wt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Ht===Ci&&(O.has("EXT_color_buffer_half_float")||W.isWebGL2&&O.has("EXT_color_buffer_float"));if(Ht!==pn&&bt.convert(Ht)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===un&&(W.isWebGL2||O.has("OES_texture_float")||O.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-nt&&et>=0&&et<=b.height-tt&&R.readPixels(X,et,nt,tt,bt.convert(Wt),bt.convert(Ht),At)}finally{const Ft=C!==null?U.get(C).__webglFramebuffer:null;V.bindFramebuffer(R.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(b,X,et=0){const nt=Math.pow(2,-et),tt=Math.floor(X.image.width*nt),At=Math.floor(X.image.height*nt);m.setTexture2D(X,0),R.copyTexSubImage2D(R.TEXTURE_2D,et,0,0,b.x,b.y,tt,At),V.unbindTexture()},this.copyTextureToTexture=function(b,X,et,nt=0){const tt=X.image.width,At=X.image.height,Lt=bt.convert(et.format),Ut=bt.convert(et.type);m.setTexture2D(et,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,et.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,et.unpackAlignment),X.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,nt,b.x,b.y,tt,At,Lt,Ut,X.image.data):X.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,nt,b.x,b.y,X.mipmaps[0].width,X.mipmaps[0].height,Lt,X.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,nt,b.x,b.y,Lt,Ut,X.image),nt===0&&et.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(b,X,et,nt,tt=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const At=b.max.x-b.min.x+1,Lt=b.max.y-b.min.y+1,Ut=b.max.z-b.min.z+1,Ft=bt.convert(nt.format),Wt=bt.convert(nt.type);let Ht;if(nt.isData3DTexture)m.setTexture3D(nt,0),Ht=R.TEXTURE_3D;else if(nt.isDataArrayTexture||nt.isCompressedArrayTexture)m.setTexture2DArray(nt,0),Ht=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,nt.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,nt.unpackAlignment);const Gt=R.getParameter(R.UNPACK_ROW_LENGTH),ae=R.getParameter(R.UNPACK_IMAGE_HEIGHT),be=R.getParameter(R.UNPACK_SKIP_PIXELS),de=R.getParameter(R.UNPACK_SKIP_ROWS),Xe=R.getParameter(R.UNPACK_SKIP_IMAGES),ee=et.isCompressedTexture?et.mipmaps[tt]:et.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ee.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ee.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,b.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,b.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,b.min.z),et.isDataTexture||et.isData3DTexture?R.texSubImage3D(Ht,tt,X.x,X.y,X.z,At,Lt,Ut,Ft,Wt,ee.data):et.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Ht,tt,X.x,X.y,X.z,At,Lt,Ut,Ft,ee.data)):R.texSubImage3D(Ht,tt,X.x,X.y,X.z,At,Lt,Ut,Ft,Wt,ee),R.pixelStorei(R.UNPACK_ROW_LENGTH,Gt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ae),R.pixelStorei(R.UNPACK_SKIP_PIXELS,be),R.pixelStorei(R.UNPACK_SKIP_ROWS,de),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Xe),tt===0&&nt.generateMipmaps&&R.generateMipmap(Ht),V.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?m.setTextureCube(b,0):b.isData3DTexture?m.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?m.setTexture2DArray(b,0):m.setTexture2D(b,0),V.unbindTexture()},this.resetState=function(){N=0,P=0,C=null,V.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ir?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===ys?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===oe?Rn:Yo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Rn?oe:en}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Vp extends pc{}Vp.prototype.isWebGL1Renderer=!0;let mc=class extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};class gc extends Te{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class We{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,g=(o-h)/d;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new lt:new z);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new z,s=[],r=[],o=[],a=new z,c=new ce;for(let g=0;g<=t;g++){const _=g/t;s[g]=this.getTangentAt(_,new z)}r[0]=new z,o[0]=new z;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(me(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(c.makeRotationAxis(a,_))}o[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(me(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(g=-g);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],g*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hr extends We{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new lt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,g=l-this.aY;c=d*h-g*f+this.aX,l=d*f+g*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Wp extends Hr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gr(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,g=(a-o)/h-(c-o)/(h+f)+(c-a)/f;d*=h,g*=h,s(o,a,d,g)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const rs=new z,ar=new Gr,or=new Gr,cr=new Gr;class Xp extends We{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(rs.subVectors(s[0],s[1]).add(s[0]),l=rs);const f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(rs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rs),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(f),g),x=Math.pow(f.distanceToSquared(d),g),p=Math.pow(d.distanceToSquared(h),g);x<1e-4&&(x=1),_<1e-4&&(_=x),p<1e-4&&(p=x),ar.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,_,x,p),or.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,_,x,p),cr.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,_,x,p)}else this.curveType==="catmullrom"&&(ar.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),or.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),cr.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(ar.calc(c),or.calc(c),cr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xo(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function qp(i,t){const e=1-i;return e*e*t}function Yp(i,t){return 2*(1-i)*i*t}function Zp(i,t){return i*i*t}function bi(i,t,e,n){return qp(i,t)+Yp(i,e)+Zp(i,n)}function jp(i,t){const e=1-i;return e*e*e*t}function Kp(i,t){const e=1-i;return 3*e*e*i*t}function Jp(i,t){return 3*(1-i)*i*i*t}function $p(i,t){return i*i*i*t}function Ai(i,t,e,n,s){return jp(i,t)+Kp(i,e)+Jp(i,n)+$p(i,s)}class _c extends We{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ai(t,s.x,r.x,o.x,a.x),Ai(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qp extends We{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ai(t,s.x,r.x,o.x,a.x),Ai(t,s.y,r.y,o.y,a.y),Ai(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xc extends We{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tm extends We{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vc extends We{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(bi(t,s.x,r.x,o.x),bi(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class em extends We{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(bi(t,s.x,r.x,o.x),bi(t,s.y,r.y,o.y),bi(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mc extends We{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(xo(a,c.x,l.x,h.x,f.x),xo(a,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var Ar=Object.freeze({__proto__:null,ArcCurve:Wp,CatmullRomCurve3:Xp,CubicBezierCurve:_c,CubicBezierCurve3:Qp,EllipseCurve:Hr,LineCurve:xc,LineCurve3:tm,QuadraticBezierCurve:vc,QuadraticBezierCurve3:em,SplineCurve:Mc});class nm extends We{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ar[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ar[s.type]().fromJSON(s))}return this}}class oi extends nm{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new xc(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new vc(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new _c(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Hr(t,e,n,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wi extends oi{constructor(t){super(t),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new oi().fromJSON(s))}return this}}const im={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=yc(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,f,d,g;if(n&&(r=cm(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let _=e;_<s;_+=e)f=i[_],d=i[_+1],f<a&&(a=f),d<c&&(c=d),f>l&&(l=f),d>h&&(h=d);g=Math.max(l-a,h-c),g=g!==0?32767/g:0}return Pi(r,o,e,a,c,g,0),o}};function yc(i,t,e,n,s){let r,o;if(s===vm(i,t,e,n)>0)for(r=t;r<e;r+=n)o=vo(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=vo(r,i[r],i[r+1],o);return o&&Ts(o,o.next)&&(Di(o),o=o.next),o}function In(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ts(e,e.next)||ne(e.prev,e,e.next)===0)){if(Di(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Pi(i,t,e,n,s,r,o){if(!i)return;!o&&r&&dm(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?rm(i,n,s,r):sm(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Di(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=am(In(i),t,e),Pi(i,t,e,n,s,r,2)):o===2&&om(i,t,e,n,s,r):Pi(In(i),t,e,n,s,r,1);break}}}function sm(i){const t=i.prev,e=i,n=i.next;if(ne(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,g=a>c?a>l?a:l:c>l?c:l;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=f&&_.y<=g&&si(s,a,r,c,o,l,_.x,_.y)&&ne(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function rm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ne(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,d=o.y,g=a<c?a<l?a:l:c<l?c:l,_=h<f?h<d?h:d:f<d?f:d,x=a>c?a>l?a:l:c>l?c:l,p=h>f?h>d?h:d:f>d?f:d,u=wr(g,_,t,e,n),A=wr(x,p,t,e,n);let v=i.prevZ,E=i.nextZ;for(;v&&v.z>=u&&E&&E.z<=A;){if(v.x>=g&&v.x<=x&&v.y>=_&&v.y<=p&&v!==s&&v!==o&&si(a,h,c,f,l,d,v.x,v.y)&&ne(v.prev,v,v.next)>=0||(v=v.prevZ,E.x>=g&&E.x<=x&&E.y>=_&&E.y<=p&&E!==s&&E!==o&&si(a,h,c,f,l,d,E.x,E.y)&&ne(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;v&&v.z>=u;){if(v.x>=g&&v.x<=x&&v.y>=_&&v.y<=p&&v!==s&&v!==o&&si(a,h,c,f,l,d,v.x,v.y)&&ne(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;E&&E.z<=A;){if(E.x>=g&&E.x<=x&&E.y>=_&&E.y<=p&&E!==s&&E!==o&&si(a,h,c,f,l,d,E.x,E.y)&&ne(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function am(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Ts(s,r)&&Sc(s,n,n.next,r)&&Li(s,r)&&Li(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Di(n),Di(n.next),n=i=r),n=n.next}while(n!==i);return In(n)}function om(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gm(o,a)){let c=Ec(o,a);o=In(o,o.next),c=In(c,c.next),Pi(o,t,e,n,s,r,0),Pi(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function cm(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=yc(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(mm(l));for(s.sort(lm),r=0;r<s.length;r++)e=hm(s[r],e);return e}function lm(i,t){return i.x-t.x}function hm(i,t){const e=um(i,t);if(!e)return t;const n=Ec(e,i);return In(n,n.next),In(e,e.next)}function um(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&si(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),Li(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&fm(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function fm(i,t){return ne(i.prev,i,t.prev)<0&&ne(t.next,i,i.next)<0}function dm(i,t,e,n){let s=i;do s.z===0&&(s.z=wr(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,pm(s)}function pm(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function wr(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function mm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function si(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function gm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!_m(i,t)&&(Li(i,t)&&Li(t,i)&&xm(i,t)&&(ne(i.prev,i,t.prev)||ne(i,t.prev,t))||Ts(i,t)&&ne(i.prev,i,i.next)>0&&ne(t.prev,t,t.next)>0)}function ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ts(i,t){return i.x===t.x&&i.y===t.y}function Sc(i,t,e,n){const s=os(ne(i,t,e)),r=os(ne(i,t,n)),o=os(ne(e,n,i)),a=os(ne(e,n,t));return!!(s!==r&&o!==a||s===0&&as(i,e,t)||r===0&&as(i,n,t)||o===0&&as(e,i,n)||a===0&&as(e,t,n))}function as(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function os(i){return i>0?1:i<0?-1:0}function _m(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Li(i,t){return ne(i.prev,i,i.next)<0?ne(i,t,i.next)>=0&&ne(i,i.prev,t)>=0:ne(i,t,i.prev)<0||ne(i,i.next,t)<0}function xm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ec(i,t){const e=new Rr(i.i,i.x,i.y),n=new Rr(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vo(i,t,e,n){const s=new Rr(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Di(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rr(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Cn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Cn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Mo(t),yo(n,t);let o=t.length;e.forEach(Mo);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,yo(n,e[c]);const a=im.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Mo(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yo(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class kr extends nn{constructor(t=new wi([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Ue(s,3)),this.setAttribute("uv",new Ue(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:g-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const u=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:Mm;let v,E=!1,N,P,C,Z;u&&(v=u.getSpacedPoints(h),E=!0,d=!1,N=u.computeFrenetFrames(h,!1),P=new z,C=new z,Z=new z),d||(p=0,g=0,_=0,x=0);const y=a.extractPoints(l);let w=y.shape;const j=y.holes;if(!Cn.isClockWise(w)){w=w.reverse();for(let R=0,Q=j.length;R<Q;R++){const O=j[R];Cn.isClockWise(O)&&(j[R]=O.reverse())}}const ft=Cn.triangulateShape(w,j),F=w;for(let R=0,Q=j.length;R<Q;R++){const O=j[R];w=w.concat(O)}function Y(R,Q,O){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(Q,O)}const K=w.length,J=ft.length;function G(R,Q,O){let W,V,ht;const U=R.x-Q.x,m=R.y-Q.y,M=O.x-R.x,H=O.y-R.y,ut=U*U+m*m,dt=U*H-m*M;if(Math.abs(dt)>Number.EPSILON){const at=Math.sqrt(ut),Tt=Math.sqrt(M*M+H*H),Mt=Q.x-m/at,Et=Q.y+U/at,Rt=O.x-H/Tt,Nt=O.y+M/Tt,mt=((Rt-Mt)*H-(Nt-Et)*M)/(U*H-m*M);W=Mt+U*mt-R.x,V=Et+m*mt-R.y;const qt=W*W+V*V;if(qt<=2)return new lt(W,V);ht=Math.sqrt(qt/2)}else{let at=!1;U>Number.EPSILON?M>Number.EPSILON&&(at=!0):U<-Number.EPSILON?M<-Number.EPSILON&&(at=!0):Math.sign(m)===Math.sign(H)&&(at=!0),at?(W=-m,V=U,ht=Math.sqrt(ut)):(W=U,V=m,ht=Math.sqrt(ut/2))}return new lt(W/ht,V/ht)}const rt=[];for(let R=0,Q=F.length,O=Q-1,W=R+1;R<Q;R++,O++,W++)O===Q&&(O=0),W===Q&&(W=0),rt[R]=G(F[R],F[O],F[W]);const st=[];let pt,_t=rt.concat();for(let R=0,Q=j.length;R<Q;R++){const O=j[R];pt=[];for(let W=0,V=O.length,ht=V-1,U=W+1;W<V;W++,ht++,U++)ht===V&&(ht=0),U===V&&(U=0),pt[W]=G(O[W],O[ht],O[U]);st.push(pt),_t=_t.concat(pt)}for(let R=0;R<p;R++){const Q=R/p,O=g*Math.cos(Q*Math.PI/2),W=_*Math.sin(Q*Math.PI/2)+x;for(let V=0,ht=F.length;V<ht;V++){const U=Y(F[V],rt[V],W);S(U.x,U.y,-O)}for(let V=0,ht=j.length;V<ht;V++){const U=j[V];pt=st[V];for(let m=0,M=U.length;m<M;m++){const H=Y(U[m],pt[m],W);S(H.x,H.y,-O)}}}const it=_+x;for(let R=0;R<K;R++){const Q=d?Y(w[R],_t[R],it):w[R];E?(C.copy(N.normals[0]).multiplyScalar(Q.x),P.copy(N.binormals[0]).multiplyScalar(Q.y),Z.copy(v[0]).add(C).add(P),S(Z.x,Z.y,Z.z)):S(Q.x,Q.y,0)}for(let R=1;R<=h;R++)for(let Q=0;Q<K;Q++){const O=d?Y(w[Q],_t[Q],it):w[Q];E?(C.copy(N.normals[R]).multiplyScalar(O.x),P.copy(N.binormals[R]).multiplyScalar(O.y),Z.copy(v[R]).add(C).add(P),S(Z.x,Z.y,Z.z)):S(O.x,O.y,f/h*R)}for(let R=p-1;R>=0;R--){const Q=R/p,O=g*Math.cos(Q*Math.PI/2),W=_*Math.sin(Q*Math.PI/2)+x;for(let V=0,ht=F.length;V<ht;V++){const U=Y(F[V],rt[V],W);S(U.x,U.y,f+O)}for(let V=0,ht=j.length;V<ht;V++){const U=j[V];pt=st[V];for(let m=0,M=U.length;m<M;m++){const H=Y(U[m],pt[m],W);E?S(H.x,H.y+v[h-1].y,v[h-1].x+O):S(H.x,H.y,f+O)}}}I(),L();function I(){const R=s.length/3;if(d){let Q=0,O=K*Q;for(let W=0;W<J;W++){const V=ft[W];$(V[2]+O,V[1]+O,V[0]+O)}Q=h+p*2,O=K*Q;for(let W=0;W<J;W++){const V=ft[W];$(V[0]+O,V[1]+O,V[2]+O)}}else{for(let Q=0;Q<J;Q++){const O=ft[Q];$(O[2],O[1],O[0])}for(let Q=0;Q<J;Q++){const O=ft[Q];$(O[0]+K*h,O[1]+K*h,O[2]+K*h)}}n.addGroup(R,s.length/3-R,0)}function L(){const R=s.length/3;let Q=0;T(F,Q),Q+=F.length;for(let O=0,W=j.length;O<W;O++){const V=j[O];T(V,Q),Q+=V.length}n.addGroup(R,s.length/3-R,1)}function T(R,Q){let O=R.length;for(;--O>=0;){const W=O;let V=O-1;V<0&&(V=R.length-1);for(let ht=0,U=h+p*2;ht<U;ht++){const m=K*ht,M=K*(ht+1),H=Q+W+m,ut=Q+V+m,dt=Q+V+M,at=Q+W+M;ot(H,ut,dt,at)}}}function S(R,Q,O){c.push(R),c.push(Q),c.push(O)}function $(R,Q,O){k(R),k(Q),k(O);const W=s.length/3,V=A.generateTopUV(n,s,W-3,W-2,W-1);ct(V[0]),ct(V[1]),ct(V[2])}function ot(R,Q,O,W){k(R),k(Q),k(W),k(Q),k(O),k(W);const V=s.length/3,ht=A.generateSideWallUV(n,s,V-6,V-3,V-2,V-1);ct(ht[0]),ct(ht[1]),ct(ht[3]),ct(ht[1]),ct(ht[2]),ct(ht[3])}function k(R){s.push(c[R*3+0]),s.push(c[R*3+1]),s.push(c[R*3+2])}function ct(R){r.push(R.x),r.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ym(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ar[s.type]().fromJSON(s)),new kr(n,t.options)}}const Mm={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new lt(r,o),new lt(a,c),new lt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[s*3],g=t[s*3+1],_=t[s*3+2],x=t[r*3],p=t[r*3+1],u=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new lt(o,1-c),new lt(l,1-f),new lt(d,1-_),new lt(x,1-u)]:[new lt(a,1-c),new lt(h,1-f),new lt(g,1-_),new lt(p,1-u)]}};function ym(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Sm extends di{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Cr extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const So={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Em{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){const g=l[f],_=l[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null}}}const Tm=new Em;class Vr{constructor(t){this.manager=t!==void 0?t:Tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Vr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Je={};class bm extends Error{constructor(t,e){super(t),this.response=e}}class Am extends Vr{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=So.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Je[t]!==void 0){Je[t].push({onLoad:e,onProgress:n,onError:s});return}Je[t]=[],Je[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Je[t],f=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),g=d?parseInt(d):0,_=g!==0;let x=0;const p=new ReadableStream({start(u){A();function A(){f.read().then(({done:v,value:E})=>{if(v)u.close();else{x+=E.byteLength;const N=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:g});for(let P=0,C=h.length;P<C;P++){const Z=h[P];Z.onProgress&&Z.onProgress(N)}u.enqueue(E),A()}})}}});return new Response(p)}else throw new bm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,g=new TextDecoder(d);return l.arrayBuffer().then(_=>g.decode(_))}}}).then(l=>{So.add(t,l);const h=Je[t];delete Je[t];for(let f=0,d=h.length;f<d;f++){const g=h[f];g.onLoad&&g.onLoad(l)}}).catch(l=>{const h=Je[t];if(h===void 0)throw this.manager.itemError(t),l;delete Je[t];for(let f=0,d=h.length;f<d;f++){const g=h[f];g.onError&&g.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Wr extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class wm extends Wr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const lr=new ce,Eo=new z,To=new z;class Tc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Eo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eo),To.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(To),e.updateMatrixWorld(),lr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bo=new ce,yi=new z,hr=new z;class Rm extends Tc{constructor(){super(new Re(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yi.setFromMatrixPosition(t.matrixWorld),n.position.copy(yi),hr.copy(n.position),hr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(hr),n.updateMatrixWorld(),s.makeTranslation(-yi.x,-yi.y,-yi.z),bo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo)}}class Cm extends Wr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Pm extends Tc{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ao extends Wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Pm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Lm{constructor(t,e,n=0,s=1/0){this.ray=new Nr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Pr(t,this,n,e),n.sort(wo),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Pr(t[s],this,n,e);return n.sort(wo),n}}function wo(i,t){return i.distance-t.distance}function Pr(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)Pr(s[r],t,e,!0)}}class Ro{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Co=new lt;class Dm{constructor(t=new lt(1/0,1/0),e=new lt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Co.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Co).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class Sn{constructor(){this.type="ShapePath",this.color=new jt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new oi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(u){const A=[];for(let v=0,E=u.length;v<E;v++){const N=u[v],P=new wi;P.curves=N.curves,A.push(P)}return A}function n(u,A){const v=A.length;let E=!1;for(let N=v-1,P=0;P<v;N=P++){let C=A[N],Z=A[P],y=Z.x-C.x,w=Z.y-C.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(C=A[P],y=-y,Z=A[N],w=-w),u.y<C.y||u.y>Z.y)continue;if(u.y===C.y){if(u.x===C.x)return!0}else{const j=w*(u.x-C.x)-y*(u.y-C.y);if(j===0)return!0;if(j<0)continue;E=!E}}else{if(u.y!==C.y)continue;if(Z.x<=u.x&&u.x<=C.x||C.x<=u.x&&u.x<=Z.x)return!0}}return E}const s=Cn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new wi,c.curves=a.curves,l.push(c),l;let h=!s(r[0].getPoints());h=t?!h:h;const f=[],d=[];let g=[],_=0,x;d[_]=void 0,g[_]=[];for(let u=0,A=r.length;u<A;u++)a=r[u],x=a.getPoints(),o=s(x),o=t?!o:o,o?(!h&&d[_]&&_++,d[_]={s:new wi,p:x},d[_].s.curves=a.curves,h&&_++,g[_]=[]):g[_].push({h:a,p:x[0]});if(!d[0])return e(r);if(d.length>1){let u=!1,A=0;for(let v=0,E=d.length;v<E;v++)f[v]=[];for(let v=0,E=d.length;v<E;v++){const N=g[v];for(let P=0;P<N.length;P++){const C=N[P];let Z=!0;for(let y=0;y<d.length;y++)n(C.p,d[y].p)&&(v!==y&&A++,Z?(Z=!1,f[y].push(C)):u=!0);Z&&f[v].push(C)}}A>0&&u===!1&&(g=f)}let p;for(let u=0,A=d.length;u<A;u++){c=d[u].s,l.push(c),p=g[u];for(let v=0,E=p.length;v<E;v++)c.holes.push(p[v].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lr);const Po={type:"change"},ur={type:"start"},Lo={type:"end"},cs=new Nr,Do=new ln,Im=Math.cos(70*Ol.DEG2RAD);class Um extends Un{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:On.ROTATE,MIDDLE:On.DOLLY,RIGHT:On.PAN},this.touches={ONE:Fn.ROTATE,TWO:Fn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Rt),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Po),n.update(),r=s.NONE},this.update=function(){const D=new z,xt=new Ln().setFromUnitVectors(t.up,new z(0,1,0)),Pt=xt.clone().invert(),wt=new z,gt=new Ln,B=new z,vt=2*Math.PI;return function(It=null){const Dt=n.object.position;D.copy(Dt).sub(n.target),D.applyQuaternion(xt),a.setFromVector3(D),n.autoRotate&&r===s.NONE&&q(w(It)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Yt=n.minAzimuthAngle,Zt=n.maxAzimuthAngle;isFinite(Yt)&&isFinite(Zt)&&(Yt<-Math.PI?Yt+=vt:Yt>Math.PI&&(Yt-=vt),Zt<-Math.PI?Zt+=vt:Zt>Math.PI&&(Zt-=vt),Yt<=Zt?a.theta=Math.max(Yt,Math.min(Zt,a.theta)):a.theta=a.theta>(Yt+Zt)/2?Math.max(Yt,a.theta):Math.min(Zt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?a.radius=st(a.radius):a.radius=st(a.radius*l),D.setFromSpherical(a),D.applyQuaternion(Pt),Dt.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let ie=!1;if(n.zoomToCursor&&P){let re=null;if(n.object.isPerspectiveCamera){const Kt=D.length();re=st(Kt*l);const le=Kt-re;n.object.position.addScaledVector(E,le),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Kt=new z(N.x,N.y,0);Kt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ie=!0;const le=new z(N.x,N.y,0);le.unproject(n.object),n.object.position.sub(le).add(Kt),n.object.updateMatrixWorld(),re=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(re).add(n.object.position):(cs.origin.copy(n.object.position),cs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(cs.direction))<Im?t.lookAt(n.target):(Do.setFromNormalAndCoplanarPoint(n.object.up,n.target),cs.intersectPlane(Do,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ie=!0);return l=1,P=!1,ie||wt.distanceToSquared(n.object.position)>o||8*(1-gt.dot(n.object.quaternion))>o||B.distanceToSquared(n.target)>0?(n.dispatchEvent(Po),wt.copy(n.object.position),gt.copy(n.object.quaternion),B.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",qt),n.domElement.removeEventListener("pointerdown",m),n.domElement.removeEventListener("pointercancel",H),n.domElement.removeEventListener("wheel",at),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",H),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Rt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Ro,c=new Ro;let l=1;const h=new z,f=new lt,d=new lt,g=new lt,_=new lt,x=new lt,p=new lt,u=new lt,A=new lt,v=new lt,E=new z,N=new lt;let P=!1;const C=[],Z={};let y=!1;function w(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function j(D){const xt=Math.abs(D*.01);return Math.pow(.95,n.zoomSpeed*xt)}function q(D){c.theta-=D}function ft(D){c.phi-=D}const F=function(){const D=new z;return function(Pt,wt){D.setFromMatrixColumn(wt,0),D.multiplyScalar(-Pt),h.add(D)}}(),Y=function(){const D=new z;return function(Pt,wt){n.screenSpacePanning===!0?D.setFromMatrixColumn(wt,1):(D.setFromMatrixColumn(wt,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(Pt),h.add(D)}}(),K=function(){const D=new z;return function(Pt,wt){const gt=n.domElement;if(n.object.isPerspectiveCamera){const B=n.object.position;D.copy(B).sub(n.target);let vt=D.length();vt*=Math.tan(n.object.fov/2*Math.PI/180),F(2*Pt*vt/gt.clientHeight,n.object.matrix),Y(2*wt*vt/gt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(Pt*(n.object.right-n.object.left)/n.object.zoom/gt.clientWidth,n.object.matrix),Y(wt*(n.object.top-n.object.bottom)/n.object.zoom/gt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function J(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function rt(D,xt){if(!n.zoomToCursor)return;P=!0;const Pt=n.domElement.getBoundingClientRect(),wt=D-Pt.left,gt=xt-Pt.top,B=Pt.width,vt=Pt.height;N.x=wt/B*2-1,N.y=-(gt/vt)*2+1,E.set(N.x,N.y,1).unproject(n.object).sub(n.object.position).normalize()}function st(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function pt(D){f.set(D.clientX,D.clientY)}function _t(D){rt(D.clientX,D.clientX),u.set(D.clientX,D.clientY)}function it(D){_.set(D.clientX,D.clientY)}function I(D){d.set(D.clientX,D.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const xt=n.domElement;q(2*Math.PI*g.x/xt.clientHeight),ft(2*Math.PI*g.y/xt.clientHeight),f.copy(d),n.update()}function L(D){A.set(D.clientX,D.clientY),v.subVectors(A,u),v.y>0?J(j(v.y)):v.y<0&&G(j(v.y)),u.copy(A),n.update()}function T(D){x.set(D.clientX,D.clientY),p.subVectors(x,_).multiplyScalar(n.panSpeed),K(p.x,p.y),_.copy(x),n.update()}function S(D){rt(D.clientX,D.clientY),D.deltaY<0?G(j(D.deltaY)):D.deltaY>0&&J(j(D.deltaY)),n.update()}function $(D){let xt=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?ft(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,n.keyPanSpeed),xt=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?ft(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,-n.keyPanSpeed),xt=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(n.keyPanSpeed,0),xt=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(-n.keyPanSpeed,0),xt=!0;break}xt&&(D.preventDefault(),n.update())}function ot(D){if(C.length===1)f.set(D.pageX,D.pageY);else{const xt=bt(D),Pt=.5*(D.pageX+xt.x),wt=.5*(D.pageY+xt.y);f.set(Pt,wt)}}function k(D){if(C.length===1)_.set(D.pageX,D.pageY);else{const xt=bt(D),Pt=.5*(D.pageX+xt.x),wt=.5*(D.pageY+xt.y);_.set(Pt,wt)}}function ct(D){const xt=bt(D),Pt=D.pageX-xt.x,wt=D.pageY-xt.y,gt=Math.sqrt(Pt*Pt+wt*wt);u.set(0,gt)}function R(D){n.enableZoom&&ct(D),n.enablePan&&k(D)}function Q(D){n.enableZoom&&ct(D),n.enableRotate&&ot(D)}function O(D){if(C.length==1)d.set(D.pageX,D.pageY);else{const Pt=bt(D),wt=.5*(D.pageX+Pt.x),gt=.5*(D.pageY+Pt.y);d.set(wt,gt)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const xt=n.domElement;q(2*Math.PI*g.x/xt.clientHeight),ft(2*Math.PI*g.y/xt.clientHeight),f.copy(d)}function W(D){if(C.length===1)x.set(D.pageX,D.pageY);else{const xt=bt(D),Pt=.5*(D.pageX+xt.x),wt=.5*(D.pageY+xt.y);x.set(Pt,wt)}p.subVectors(x,_).multiplyScalar(n.panSpeed),K(p.x,p.y),_.copy(x)}function V(D){const xt=bt(D),Pt=D.pageX-xt.x,wt=D.pageY-xt.y,gt=Math.sqrt(Pt*Pt+wt*wt);A.set(0,gt),v.set(0,Math.pow(A.y/u.y,n.zoomSpeed)),J(v.y),u.copy(A);const B=(D.pageX+xt.x)*.5,vt=(D.pageY+xt.y)*.5;rt(B,vt)}function ht(D){n.enableZoom&&V(D),n.enablePan&&W(D)}function U(D){n.enableZoom&&V(D),n.enableRotate&&O(D)}function m(D){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",H)),zt(D),D.pointerType==="touch"?Nt(D):ut(D))}function M(D){n.enabled!==!1&&(D.pointerType==="touch"?mt(D):dt(D))}function H(D){Ot(D),C.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",H)),n.dispatchEvent(Lo),r=s.NONE}function ut(D){let xt;switch(D.button){case 0:xt=n.mouseButtons.LEFT;break;case 1:xt=n.mouseButtons.MIDDLE;break;case 2:xt=n.mouseButtons.RIGHT;break;default:xt=-1}switch(xt){case On.DOLLY:if(n.enableZoom===!1)return;_t(D),r=s.DOLLY;break;case On.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;it(D),r=s.PAN}else{if(n.enableRotate===!1)return;pt(D),r=s.ROTATE}break;case On.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;pt(D),r=s.ROTATE}else{if(n.enablePan===!1)return;it(D),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ur)}function dt(D){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;I(D);break;case s.DOLLY:if(n.enableZoom===!1)return;L(D);break;case s.PAN:if(n.enablePan===!1)return;T(D);break}}function at(D){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(D.preventDefault(),n.dispatchEvent(ur),S(Tt(D)),n.dispatchEvent(Lo))}function Tt(D){const xt=D.deltaMode,Pt={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(xt){case 1:Pt.deltaY*=16;break;case 2:Pt.deltaY*=100;break}return D.ctrlKey&&!y&&(Pt.deltaY*=10),Pt}function Mt(D){D.key==="Control"&&(y=!0,document.addEventListener("keyup",Et,{passive:!0,capture:!0}))}function Et(D){D.key==="Control"&&(y=!1,document.removeEventListener("keyup",Et,{passive:!0,capture:!0}))}function Rt(D){n.enabled===!1||n.enablePan===!1||$(D)}function Nt(D){switch(Ct(D),C.length){case 1:switch(n.touches.ONE){case Fn.ROTATE:if(n.enableRotate===!1)return;ot(D),r=s.TOUCH_ROTATE;break;case Fn.PAN:if(n.enablePan===!1)return;k(D),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Fn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;R(D),r=s.TOUCH_DOLLY_PAN;break;case Fn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Q(D),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ur)}function mt(D){switch(Ct(D),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;O(D),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;W(D),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ht(D),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;U(D),n.update();break;default:r=s.NONE}}function qt(D){n.enabled!==!1&&D.preventDefault()}function zt(D){C.push(D.pointerId)}function Ot(D){delete Z[D.pointerId];for(let xt=0;xt<C.length;xt++)if(C[xt]==D.pointerId){C.splice(xt,1);return}}function Ct(D){let xt=Z[D.pointerId];xt===void 0&&(xt=new lt,Z[D.pointerId]=xt),xt.set(D.pageX,D.pageY)}function bt(D){const xt=D.pointerId===C[0]?C[1]:C[0];return Z[xt]}n.domElement.addEventListener("contextmenu",qt),n.domElement.addEventListener("pointerdown",m),n.domElement.addEventListener("pointercancel",H),n.domElement.addEventListener("wheel",at,{passive:!1}),document.addEventListener("keydown",Mt,{passive:!0,capture:!0}),this.update()}}class Nm extends mc{constructor(t=null){super();const e=new Nn;e.deleteAttribute("uv");const n=new Cr({side:Se}),s=new Cr;let r=5;t!==null&&t._useLegacyLights===!1&&(r=900);const o=new Cm(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new Jt(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const c=new Jt(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);const l=new Jt(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);const h=new Jt(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);const f=new Jt(e,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const d=new Jt(e,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const g=new Jt(e,s);g.position.set(-2.193,-.369,-5.547),g.rotation.set(0,.516,0),g.scale.set(3.875,3.487,2.986),this.add(g);const _=new Jt(e,ti(50));_.position.set(-16.116,14.37,8.208),_.scale.set(.1,2.428,2.739),this.add(_);const x=new Jt(e,ti(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);const p=new Jt(e,ti(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const u=new Jt(e,ti(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const A=new Jt(e,ti(20));A.position.set(3.235,11.486,-12.541),A.scale.set(2.5,2,.1),this.add(A);const v=new Jt(e,ti(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ti(i){const t=new Fr;return t.color.setScalar(i),t}class Om{constructor(t){this.canvas=t,this.renderer=new pc({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=oe,this.renderer.toneMapping=Bo,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Oo,this.scene=new mc,this.scene.background=this._gradientBackground(),this.camera=new Re(34,1,.1,400),this.camera.position.set(20,15,30),this.controls=new Um(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!1,this.controls.minDistance=16,this.controls.maxDistance=70,this.controls.minPolarAngle=.15,this.controls.maxPolarAngle=Math.PI*.52,this.controls.target.set(0,5.2,1.2),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.7,this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1}),this._setupEnvironment(),this._setupLights(),this._setupGround(),window.addEventListener("resize",()=>this.resize()),this.resize(),this._tick()}_gradientBackground(){const t=document.createElement("canvas");t.width=16,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#f0eee7"),n.addColorStop(.55,"#e6e4dc"),n.addColorStop(1,"#d2cfc4"),e.fillStyle=n,e.fillRect(0,0,16,256);const s=new gc(t);return s.colorSpace=oe,s}_setupEnvironment(){const t=new Tr(this.renderer),e=new Nm;this.scene.environment=t.fromScene(e,.04).texture,t.dispose()}_setupLights(){const t=new Ao(16777215,2.3);t.position.set(13,23,15),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=1,t.shadow.camera.far=90;const e=20;t.shadow.camera.left=-e,t.shadow.camera.right=e,t.shadow.camera.top=e,t.shadow.camera.bottom=-e,t.shadow.bias=-4e-4,t.shadow.normalBias=.02,t.shadow.radius=7,t.target.position.set(0,4,1),this.scene.add(t),this.scene.add(t.target);const n=new Ao(16777215,.45);n.position.set(-18,9,8),this.scene.add(n);const s=new wm(16777215,10130826,.35);this.scene.add(s)}_setupGround(){const t=new Jt(new Ui(600,600),new Sm({opacity:.24}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.scene.add(t)}add(t){this.scene.add(t)}resize(){const t=this.canvas.parentElement,e=t.clientWidth||1,n=t.clientHeight||1;this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}_tick(){requestAnimationFrame(()=>this._tick()),this.controls.update(),this.renderer.render(this.scene,this.camera)}}const Si=new z;function Le(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Si.copy(t),Si[n]=0,Si.normalize();const l=.5*o/(o+a),h=1-Si.angleTo(i)/c;return Math.sign(Si[e])===1?h*l:a/(o+a)+l+l*(1-h)}class ls extends Nn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new z,c=new z,l=new z(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,_=new z,x=.5/s;for(let p=0,u=0;p<h.length;p+=3,u+=2)switch(a.fromArray(h,p),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[p+0]=l.x*Math.sign(a.x)+c.x*r,h[p+1]=l.y*Math.sign(a.y)+c.y*r,h[p+2]=l.z*Math.sign(a.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),d[u+0]=Le(_,c,"z","y",r,n),d[u+1]=1-Le(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[u+0]=1-Le(_,c,"z","y",r,n),d[u+1]=1-Le(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[u+0]=1-Le(_,c,"x","z",r,t),d[u+1]=Le(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[u+0]=1-Le(_,c,"x","z",r,t),d[u+1]=1-Le(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[u+0]=1-Le(_,c,"x","y",r,t),d[u+1]=1-Le(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[u+0]=Le(_,c,"x","y",r,t),d[u+1]=1-Le(_,c,"y","x",r,e);break}}}const Fm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#000" fill-rule="evenodd" d="M28 18 H72 a10 10 0 0 1 10 10 V72 a10 10 0 0 1 -10 10 H28 a10 10 0 0 1 -10 -10 V28 a10 10 0 0 1 10 -10 Z M34 26 H66 a8 8 0 0 1 8 8 V66 a8 8 0 0 1 -8 8 H34 a8 8 0 0 1 -8 -8 V34 a8 8 0 0 1 8 -8 Z M50 36 a14 14 0 1 0 0.01 0 Z M50 44 a6 6 0 1 0 0.01 0 Z M64 28 a4 4 0 1 0 0.01 0 Z"/></svg>
`,Bm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#000" fill-rule="evenodd" d="M30 42 H70 L74 80 H26 Z M40 42 V34 a10 10 0 0 1 20 0 V42 H54 V34 a4 4 0 0 0 -8 0 V42 Z"/></svg>
`,zm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#000" d="M28 20 H72 Q86 20 86 34 V52 Q86 66 72 66 H44 L30 82 L33 66 H28 Q14 66 14 52 V34 Q14 20 28 20 Z"/></svg>
`,Hm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#000" fill-rule="evenodd" d="M50 16 a34 34 0 1 0 0.01 0 Z M50 24 a26 26 0 1 0 0.01 0 Z M50 16 a12 34 0 1 0 0.01 0 Z M50 24 a7 26 0 1 0 0.01 0 Z M18 46 H82 V54 H18 Z"/></svg>
`,Gm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#000" d="M50 80 C24 60 14 42 22 30 C29 20 44 22 50 34 C56 22 71 20 78 30 C86 42 76 60 50 80 Z"/></svg>
`,km=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#000" fill-rule="evenodd" d="M18 28 H82 V72 H18 Z M24 34 L50 55 L76 34 Z"/></svg>
`,Vm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#000" d="M26 38 H38 V64 H26 Z M44 26 H56 V74 H44 Z M62 46 H74 V58 H62 Z"/></svg>
`,Wm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#000" d="M50 26 H58 V68 H50 Z M50 26 C66 25 74 33 74 44 C68 36 58 37 56 44 V30 Z M36 58 a15 13 0 1 0 0.01 0 Z"/></svg>
`,Xm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#000" fill-rule="evenodd" d="M50 16 C33 16 22 29 22 45 C22 64 42 79 50 86 C58 79 78 64 78 45 C78 29 67 16 50 16 Z M50 34 a10 10 0 1 0 0.01 0 Z"/></svg>
`,qm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#000" d="M32 22 L80 50 L32 78 Z"/></svg>
`,Ym=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#000" fill-rule="evenodd" d="M12 12 H34 V34 H12 Z M18 18 H28 V28 H18 Z M20 20 H26 V26 H20 Z M66 12 H88 V34 H66 Z M72 18 H82 V28 H72 Z M74 20 H80 V26 H74 Z M12 66 H34 V88 H12 Z M18 72 H28 V82 H18 Z M20 74 H26 V80 H20 Z M44 12 H52 V20 H44 Z M56 20 H64 V28 H56 Z M44 28 H52 V36 H44 Z M60 40 H68 V48 H60 Z M44 44 H52 V52 H44 Z M76 44 H84 V52 H76 Z M52 56 H60 V64 H52 Z M44 64 H52 V72 H44 Z M66 60 H74 V68 H66 Z M80 66 H88 V74 H80 Z M60 76 H68 V84 H60 Z M72 76 H88 V84 H72 Z M44 80 H52 V88 H44 Z"/></svg>
`,Zm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#000" d="M50 14 L62 40 L90 43 L69 62 L75 89 L50 75 L25 89 L31 62 L10 43 L38 40 Z"/></svg>
`,jm=oe;class bs extends Vr{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){const r=this,o=new Am(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){const e=this;function n(I,L){if(I.nodeType!==1)return;const T=E(I);let S=!1,$=null;switch(I.nodeName){case"svg":L=_(I,L);break;case"style":r(I);break;case"g":L=_(I,L);break;case"path":L=_(I,L),I.hasAttribute("d")&&($=s(I));break;case"rect":L=_(I,L),$=c(I);break;case"polygon":L=_(I,L),$=l(I);break;case"polyline":L=_(I,L),$=h(I);break;case"circle":L=_(I,L),$=f(I);break;case"ellipse":L=_(I,L),$=d(I);break;case"line":L=_(I,L),$=g(I);break;case"defs":S=!0;break;case"use":L=_(I,L);const ct=(I.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),R=I.viewportElement.getElementById(ct);R?n(R,L):console.warn("SVGLoader: 'use node' references non-existent node id: "+ct);break}$&&(L.fill!==void 0&&L.fill!=="none"&&$.color.setStyle(L.fill,jm),P($,pt),q.push($),$.userData={node:I,style:L});const ot=I.childNodes;for(let k=0;k<ot.length;k++){const ct=ot[k];S&&ct.nodeName!=="style"&&ct.nodeName!=="defs"||n(ct,L)}T&&(F.pop(),F.length>0?pt.copy(F[F.length-1]):pt.identity())}function s(I){const L=new Sn,T=new lt,S=new lt,$=new lt;let ot=!0,k=!1;const ct=I.getAttribute("d");if(ct===""||ct==="none")return null;const R=ct.match(/[a-df-z][^a-df-z]*/ig);for(let Q=0,O=R.length;Q<O;Q++){const W=R[Q],V=W.charAt(0),ht=W.slice(1).trim();ot===!0&&(k=!0,ot=!1);let U;switch(V){case"M":U=p(ht);for(let m=0,M=U.length;m<M;m+=2)T.x=U[m+0],T.y=U[m+1],S.x=T.x,S.y=T.y,m===0?L.moveTo(T.x,T.y):L.lineTo(T.x,T.y),m===0&&$.copy(T);break;case"H":U=p(ht);for(let m=0,M=U.length;m<M;m++)T.x=U[m],S.x=T.x,S.y=T.y,L.lineTo(T.x,T.y),m===0&&k===!0&&$.copy(T);break;case"V":U=p(ht);for(let m=0,M=U.length;m<M;m++)T.y=U[m],S.x=T.x,S.y=T.y,L.lineTo(T.x,T.y),m===0&&k===!0&&$.copy(T);break;case"L":U=p(ht);for(let m=0,M=U.length;m<M;m+=2)T.x=U[m+0],T.y=U[m+1],S.x=T.x,S.y=T.y,L.lineTo(T.x,T.y),m===0&&k===!0&&$.copy(T);break;case"C":U=p(ht);for(let m=0,M=U.length;m<M;m+=6)L.bezierCurveTo(U[m+0],U[m+1],U[m+2],U[m+3],U[m+4],U[m+5]),S.x=U[m+2],S.y=U[m+3],T.x=U[m+4],T.y=U[m+5],m===0&&k===!0&&$.copy(T);break;case"S":U=p(ht);for(let m=0,M=U.length;m<M;m+=4)L.bezierCurveTo(x(T.x,S.x),x(T.y,S.y),U[m+0],U[m+1],U[m+2],U[m+3]),S.x=U[m+0],S.y=U[m+1],T.x=U[m+2],T.y=U[m+3],m===0&&k===!0&&$.copy(T);break;case"Q":U=p(ht);for(let m=0,M=U.length;m<M;m+=4)L.quadraticCurveTo(U[m+0],U[m+1],U[m+2],U[m+3]),S.x=U[m+0],S.y=U[m+1],T.x=U[m+2],T.y=U[m+3],m===0&&k===!0&&$.copy(T);break;case"T":U=p(ht);for(let m=0,M=U.length;m<M;m+=2){const H=x(T.x,S.x),ut=x(T.y,S.y);L.quadraticCurveTo(H,ut,U[m+0],U[m+1]),S.x=H,S.y=ut,T.x=U[m+0],T.y=U[m+1],m===0&&k===!0&&$.copy(T)}break;case"A":U=p(ht,[3,4],7);for(let m=0,M=U.length;m<M;m+=7){if(U[m+5]==T.x&&U[m+6]==T.y)continue;const H=T.clone();T.x=U[m+5],T.y=U[m+6],S.x=T.x,S.y=T.y,o(L,U[m],U[m+1],U[m+2],U[m+3],U[m+4],H,T),m===0&&k===!0&&$.copy(T)}break;case"m":U=p(ht);for(let m=0,M=U.length;m<M;m+=2)T.x+=U[m+0],T.y+=U[m+1],S.x=T.x,S.y=T.y,m===0?L.moveTo(T.x,T.y):L.lineTo(T.x,T.y),m===0&&$.copy(T);break;case"h":U=p(ht);for(let m=0,M=U.length;m<M;m++)T.x+=U[m],S.x=T.x,S.y=T.y,L.lineTo(T.x,T.y),m===0&&k===!0&&$.copy(T);break;case"v":U=p(ht);for(let m=0,M=U.length;m<M;m++)T.y+=U[m],S.x=T.x,S.y=T.y,L.lineTo(T.x,T.y),m===0&&k===!0&&$.copy(T);break;case"l":U=p(ht);for(let m=0,M=U.length;m<M;m+=2)T.x+=U[m+0],T.y+=U[m+1],S.x=T.x,S.y=T.y,L.lineTo(T.x,T.y),m===0&&k===!0&&$.copy(T);break;case"c":U=p(ht);for(let m=0,M=U.length;m<M;m+=6)L.bezierCurveTo(T.x+U[m+0],T.y+U[m+1],T.x+U[m+2],T.y+U[m+3],T.x+U[m+4],T.y+U[m+5]),S.x=T.x+U[m+2],S.y=T.y+U[m+3],T.x+=U[m+4],T.y+=U[m+5],m===0&&k===!0&&$.copy(T);break;case"s":U=p(ht);for(let m=0,M=U.length;m<M;m+=4)L.bezierCurveTo(x(T.x,S.x),x(T.y,S.y),T.x+U[m+0],T.y+U[m+1],T.x+U[m+2],T.y+U[m+3]),S.x=T.x+U[m+0],S.y=T.y+U[m+1],T.x+=U[m+2],T.y+=U[m+3],m===0&&k===!0&&$.copy(T);break;case"q":U=p(ht);for(let m=0,M=U.length;m<M;m+=4)L.quadraticCurveTo(T.x+U[m+0],T.y+U[m+1],T.x+U[m+2],T.y+U[m+3]),S.x=T.x+U[m+0],S.y=T.y+U[m+1],T.x+=U[m+2],T.y+=U[m+3],m===0&&k===!0&&$.copy(T);break;case"t":U=p(ht);for(let m=0,M=U.length;m<M;m+=2){const H=x(T.x,S.x),ut=x(T.y,S.y);L.quadraticCurveTo(H,ut,T.x+U[m+0],T.y+U[m+1]),S.x=H,S.y=ut,T.x=T.x+U[m+0],T.y=T.y+U[m+1],m===0&&k===!0&&$.copy(T)}break;case"a":U=p(ht,[3,4],7);for(let m=0,M=U.length;m<M;m+=7){if(U[m+5]==0&&U[m+6]==0)continue;const H=T.clone();T.x+=U[m+5],T.y+=U[m+6],S.x=T.x,S.y=T.y,o(L,U[m],U[m+1],U[m+2],U[m+3],U[m+4],H,T),m===0&&k===!0&&$.copy(T)}break;case"Z":case"z":L.currentPath.autoClose=!0,L.currentPath.curves.length>0&&(T.copy($),L.currentPath.currentPoint.copy(T),ot=!0);break;default:console.warn(W)}k=!1}return L}function r(I){if(!(!I.sheet||!I.sheet.cssRules||!I.sheet.cssRules.length))for(let L=0;L<I.sheet.cssRules.length;L++){const T=I.sheet.cssRules[L];if(T.type!==1)continue;const S=T.selectorText.split(/,/gm).filter(Boolean).map($=>$.trim());for(let $=0;$<S.length;$++){const ot=Object.fromEntries(Object.entries(T.style).filter(([,k])=>k!==""));ft[S[$]]=Object.assign(ft[S[$]]||{},ot)}}}function o(I,L,T,S,$,ot,k,ct){if(L==0||T==0){I.lineTo(ct.x,ct.y);return}S=S*Math.PI/180,L=Math.abs(L),T=Math.abs(T);const R=(k.x-ct.x)/2,Q=(k.y-ct.y)/2,O=Math.cos(S)*R+Math.sin(S)*Q,W=-Math.sin(S)*R+Math.cos(S)*Q;let V=L*L,ht=T*T;const U=O*O,m=W*W,M=U/V+m/ht;if(M>1){const mt=Math.sqrt(M);L=mt*L,T=mt*T,V=L*L,ht=T*T}const H=V*m+ht*U,ut=(V*ht-H)/H;let dt=Math.sqrt(Math.max(0,ut));$===ot&&(dt=-dt);const at=dt*L*W/T,Tt=-dt*T*O/L,Mt=Math.cos(S)*at-Math.sin(S)*Tt+(k.x+ct.x)/2,Et=Math.sin(S)*at+Math.cos(S)*Tt+(k.y+ct.y)/2,Rt=a(1,0,(O-at)/L,(W-Tt)/T),Nt=a((O-at)/L,(W-Tt)/T,(-O-at)/L,(-W-Tt)/T)%(Math.PI*2);I.currentPath.absellipse(Mt,Et,L,T,Rt,Rt+Nt,ot===0,S)}function a(I,L,T,S){const $=I*T+L*S,ot=Math.sqrt(I*I+L*L)*Math.sqrt(T*T+S*S);let k=Math.acos(Math.max(-1,Math.min(1,$/ot)));return I*S-L*T<0&&(k=-k),k}function c(I){const L=v(I.getAttribute("x")||0),T=v(I.getAttribute("y")||0),S=v(I.getAttribute("rx")||I.getAttribute("ry")||0),$=v(I.getAttribute("ry")||I.getAttribute("rx")||0),ot=v(I.getAttribute("width")),k=v(I.getAttribute("height")),ct=1-.551915024494,R=new Sn;return R.moveTo(L+S,T),R.lineTo(L+ot-S,T),(S!==0||$!==0)&&R.bezierCurveTo(L+ot-S*ct,T,L+ot,T+$*ct,L+ot,T+$),R.lineTo(L+ot,T+k-$),(S!==0||$!==0)&&R.bezierCurveTo(L+ot,T+k-$*ct,L+ot-S*ct,T+k,L+ot-S,T+k),R.lineTo(L+S,T+k),(S!==0||$!==0)&&R.bezierCurveTo(L+S*ct,T+k,L,T+k-$*ct,L,T+k-$),R.lineTo(L,T+$),(S!==0||$!==0)&&R.bezierCurveTo(L,T+$*ct,L+S*ct,T,L+S,T),R}function l(I){function L(ot,k,ct){const R=v(k),Q=v(ct);$===0?S.moveTo(R,Q):S.lineTo(R,Q),$++}const T=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,S=new Sn;let $=0;return I.getAttribute("points").replace(T,L),S.currentPath.autoClose=!0,S}function h(I){function L(ot,k,ct){const R=v(k),Q=v(ct);$===0?S.moveTo(R,Q):S.lineTo(R,Q),$++}const T=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,S=new Sn;let $=0;return I.getAttribute("points").replace(T,L),S.currentPath.autoClose=!1,S}function f(I){const L=v(I.getAttribute("cx")||0),T=v(I.getAttribute("cy")||0),S=v(I.getAttribute("r")||0),$=new oi;$.absarc(L,T,S,0,Math.PI*2);const ot=new Sn;return ot.subPaths.push($),ot}function d(I){const L=v(I.getAttribute("cx")||0),T=v(I.getAttribute("cy")||0),S=v(I.getAttribute("rx")||0),$=v(I.getAttribute("ry")||0),ot=new oi;ot.absellipse(L,T,S,$,0,Math.PI*2);const k=new Sn;return k.subPaths.push(ot),k}function g(I){const L=v(I.getAttribute("x1")||0),T=v(I.getAttribute("y1")||0),S=v(I.getAttribute("x2")||0),$=v(I.getAttribute("y2")||0),ot=new Sn;return ot.moveTo(L,T),ot.lineTo(S,$),ot.currentPath.autoClose=!1,ot}function _(I,L){L=Object.assign({},L);let T={};if(I.hasAttribute("class")){const k=I.getAttribute("class").split(/\s/).filter(Boolean).map(ct=>ct.trim());for(let ct=0;ct<k.length;ct++)T=Object.assign(T,ft["."+k[ct]])}I.hasAttribute("id")&&(T=Object.assign(T,ft["#"+I.getAttribute("id")]));function S(k,ct,R){R===void 0&&(R=function(O){return O.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),O}),I.hasAttribute(k)&&(L[ct]=R(I.getAttribute(k))),T[k]&&(L[ct]=R(T[k])),I.style&&I.style[k]!==""&&(L[ct]=R(I.style[k]))}function $(k){return Math.max(0,Math.min(1,v(k)))}function ot(k){return Math.max(0,v(k))}return S("fill","fill"),S("fill-opacity","fillOpacity",$),S("fill-rule","fillRule"),S("opacity","opacity",$),S("stroke","stroke"),S("stroke-opacity","strokeOpacity",$),S("stroke-width","strokeWidth",ot),S("stroke-linejoin","strokeLineJoin"),S("stroke-linecap","strokeLineCap"),S("stroke-miterlimit","strokeMiterLimit",ot),S("visibility","visibility"),L}function x(I,L){return I-(L-I)}function p(I,L,T){if(typeof I!="string")throw new TypeError("Invalid input: "+typeof I);const S={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},$=0,ot=1,k=2,ct=3;let R=$,Q=!0,O="",W="";const V=[];function ht(H,ut,dt){const at=new SyntaxError('Unexpected character "'+H+'" at index '+ut+".");throw at.partial=dt,at}function U(){O!==""&&(W===""?V.push(Number(O)):V.push(Number(O)*Math.pow(10,Number(W)))),O="",W=""}let m;const M=I.length;for(let H=0;H<M;H++){if(m=I[H],Array.isArray(L)&&L.includes(V.length%T)&&S.FLAGS.test(m)){R=ot,O=m,U();continue}if(R===$){if(S.WHITESPACE.test(m))continue;if(S.DIGIT.test(m)||S.SIGN.test(m)){R=ot,O=m;continue}if(S.POINT.test(m)){R=k,O=m;continue}S.COMMA.test(m)&&(Q&&ht(m,H,V),Q=!0)}if(R===ot){if(S.DIGIT.test(m)){O+=m;continue}if(S.POINT.test(m)){O+=m,R=k;continue}if(S.EXP.test(m)){R=ct;continue}S.SIGN.test(m)&&O.length===1&&S.SIGN.test(O[0])&&ht(m,H,V)}if(R===k){if(S.DIGIT.test(m)){O+=m;continue}if(S.EXP.test(m)){R=ct;continue}S.POINT.test(m)&&O[O.length-1]==="."&&ht(m,H,V)}if(R===ct){if(S.DIGIT.test(m)){W+=m;continue}if(S.SIGN.test(m)){if(W===""){W+=m;continue}W.length===1&&S.SIGN.test(W)&&ht(m,H,V)}}S.WHITESPACE.test(m)?(U(),R=$,Q=!1):S.COMMA.test(m)?(U(),R=$,Q=!0):S.SIGN.test(m)?(U(),R=ot,O=m):S.POINT.test(m)?(U(),R=k,O=m):ht(m,H,V)}return U(),V}const u=["mm","cm","in","pt","pc","px"],A={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(I){let L="px";if(typeof I=="string"||I instanceof String)for(let S=0,$=u.length;S<$;S++){const ot=u[S];if(I.endsWith(ot)){L=ot,I=I.substring(0,I.length-ot.length);break}}let T;return L==="px"&&e.defaultUnit!=="px"?T=A.in[e.defaultUnit]/e.defaultDPI:(T=A[L][e.defaultUnit],T<0&&(T=A[L].in*e.defaultDPI)),T*parseFloat(I)}function E(I){if(!(I.hasAttribute("transform")||I.nodeName==="use"&&(I.hasAttribute("x")||I.hasAttribute("y"))))return null;const L=N(I);return F.length>0&&L.premultiply(F[F.length-1]),pt.copy(L),F.push(L),L}function N(I){const L=new Bt,T=Y;if(I.nodeName==="use"&&(I.hasAttribute("x")||I.hasAttribute("y"))){const S=v(I.getAttribute("x")),$=v(I.getAttribute("y"));L.translate(S,$)}if(I.hasAttribute("transform")){const S=I.getAttribute("transform").split(")");for(let $=S.length-1;$>=0;$--){const ot=S[$].trim();if(ot==="")continue;const k=ot.indexOf("("),ct=ot.length;if(k>0&&k<ct){const R=ot.slice(0,k),Q=p(ot.slice(k+1));switch(T.identity(),R){case"translate":if(Q.length>=1){const O=Q[0];let W=0;Q.length>=2&&(W=Q[1]),T.translate(O,W)}break;case"rotate":if(Q.length>=1){let O=0,W=0,V=0;O=Q[0]*Math.PI/180,Q.length>=3&&(W=Q[1],V=Q[2]),K.makeTranslation(-W,-V),J.makeRotation(O),G.multiplyMatrices(J,K),K.makeTranslation(W,V),T.multiplyMatrices(K,G)}break;case"scale":if(Q.length>=1){const O=Q[0];let W=O;Q.length>=2&&(W=Q[1]),T.scale(O,W)}break;case"skewX":Q.length===1&&T.set(1,Math.tan(Q[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Q.length===1&&T.set(1,0,0,Math.tan(Q[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Q.length===6&&T.set(Q[0],Q[2],Q[4],Q[1],Q[3],Q[5],0,0,1);break}}L.premultiply(T)}}return L}function P(I,L){function T(k){st.set(k.x,k.y,1).applyMatrix3(L),k.set(st.x,st.y)}function S(k){const ct=k.xRadius,R=k.yRadius,Q=Math.cos(k.aRotation),O=Math.sin(k.aRotation),W=new z(ct*Q,ct*O,0),V=new z(-R*O,R*Q,0),ht=W.applyMatrix3(L),U=V.applyMatrix3(L),m=Y.set(ht.x,U.x,0,ht.y,U.y,0,0,0,1),M=K.copy(m).invert(),dt=J.copy(M).transpose().multiply(M).elements,at=j(dt[0],dt[1],dt[4]),Tt=Math.sqrt(at.rt1),Mt=Math.sqrt(at.rt2);if(k.xRadius=1/Tt,k.yRadius=1/Mt,k.aRotation=Math.atan2(at.sn,at.cs),!((k.aEndAngle-k.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Rt=K.set(Tt,0,0,0,Mt,0,0,0,1),Nt=J.set(at.cs,at.sn,0,-at.sn,at.cs,0,0,0,1),mt=Rt.multiply(Nt).multiply(m),qt=zt=>{const{x:Ot,y:Ct}=new z(Math.cos(zt),Math.sin(zt),0).applyMatrix3(mt);return Math.atan2(Ct,Ot)};k.aStartAngle=qt(k.aStartAngle),k.aEndAngle=qt(k.aEndAngle),C(L)&&(k.aClockwise=!k.aClockwise)}}function $(k){const ct=y(L),R=w(L);k.xRadius*=ct,k.yRadius*=R;const Q=ct>Number.EPSILON?Math.atan2(L.elements[1],L.elements[0]):Math.atan2(-L.elements[3],L.elements[4]);k.aRotation+=Q,C(L)&&(k.aStartAngle*=-1,k.aEndAngle*=-1,k.aClockwise=!k.aClockwise)}const ot=I.subPaths;for(let k=0,ct=ot.length;k<ct;k++){const Q=ot[k].curves;for(let O=0;O<Q.length;O++){const W=Q[O];W.isLineCurve?(T(W.v1),T(W.v2)):W.isCubicBezierCurve?(T(W.v0),T(W.v1),T(W.v2),T(W.v3)):W.isQuadraticBezierCurve?(T(W.v0),T(W.v1),T(W.v2)):W.isEllipseCurve&&(rt.set(W.aX,W.aY),T(rt),W.aX=rt.x,W.aY=rt.y,Z(L)?S(W):$(W))}}}function C(I){const L=I.elements;return L[0]*L[4]-L[1]*L[3]<0}function Z(I){const L=I.elements,T=L[0]*L[3]+L[1]*L[4];if(T===0)return!1;const S=y(I),$=w(I);return Math.abs(T/(S*$))>Number.EPSILON}function y(I){const L=I.elements;return Math.sqrt(L[0]*L[0]+L[1]*L[1])}function w(I){const L=I.elements;return Math.sqrt(L[3]*L[3]+L[4]*L[4])}function j(I,L,T){let S,$,ot,k,ct;const R=I+T,Q=I-T,O=Math.sqrt(Q*Q+4*L*L);return R>0?(S=.5*(R+O),ct=1/S,$=I*ct*T-L*ct*L):R<0?$=.5*(R-O):(S=.5*O,$=-.5*O),Q>0?ot=Q+O:ot=Q-O,Math.abs(ot)>2*Math.abs(L)?(ct=-2*L/ot,k=1/Math.sqrt(1+ct*ct),ot=ct*k):Math.abs(L)===0?(ot=1,k=0):(ct=-.5*ot/L,ot=1/Math.sqrt(1+ct*ct),k=ct*ot),Q>0&&(ct=ot,ot=-k,k=ct),{rt1:S,rt2:$,cs:ot,sn:k}}const q=[],ft={},F=[],Y=new Bt,K=new Bt,J=new Bt,G=new Bt,rt=new lt,st=new z,pt=new Bt,_t=new DOMParser().parseFromString(t,"image/svg+xml");return n(_t.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:q,xml:_t.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(x,p,u,A){const v=x.x,E=p.x,N=u.x,P=A.x,C=x.y,Z=p.y,y=u.y,w=A.y,j=(P-N)*(C-y)-(w-y)*(v-N),q=(E-v)*(C-y)-(Z-C)*(v-N),ft=(w-y)*(E-v)-(P-N)*(Z-C),F=j/ft,Y=q/ft;if(ft===0&&j!==0||F<=0||F>=1||Y<0||Y>1)return null;if(j===0&&ft===0){for(let K=0;K<2;K++)if(o(K===0?u:A,x,p),s.loc==n.ORIGIN){const J=K===0?u:A;return{x:J.x,y:J.y,t:s.t}}else if(s.loc==n.BETWEEN){const J=+(v+s.t*(E-v)).toPrecision(10),G=+(C+s.t*(Z-C)).toPrecision(10);return{x:J,y:G,t:s.t}}return null}else{for(let G=0;G<2;G++)if(o(G===0?u:A,x,p),s.loc==n.ORIGIN){const rt=G===0?u:A;return{x:rt.x,y:rt.y,t:s.t}}const K=+(v+F*(E-v)).toPrecision(10),J=+(C+F*(Z-C)).toPrecision(10);return{x:K,y:J,t:F}}}function o(x,p,u){const A=u.x-p.x,v=u.y-p.y,E=x.x-p.x,N=x.y-p.y,P=A*N-E*v;if(x.x===p.x&&x.y===p.y){s.loc=n.ORIGIN,s.t=0;return}if(x.x===u.x&&x.y===u.y){s.loc=n.DESTINATION,s.t=1;return}if(P<-Number.EPSILON){s.loc=n.LEFT;return}if(P>Number.EPSILON){s.loc=n.RIGHT;return}if(A*E<0||v*N<0){s.loc=n.BEHIND;return}if(Math.sqrt(A*A+v*v)<Math.sqrt(E*E+N*N)){s.loc=n.BEYOND;return}let C;A!==0?C=E/A:C=N/v,s.loc=n.BETWEEN,s.t=C}function a(x,p){const u=[],A=[];for(let v=1;v<x.length;v++){const E=x[v-1],N=x[v];for(let P=1;P<p.length;P++){const C=p[P-1],Z=p[P],y=r(E,N,C,Z);y!==null&&u.find(w=>w.t<=y.t+Number.EPSILON&&w.t>=y.t-Number.EPSILON)===void 0&&(u.push(y),A.push(new lt(y.x,y.y)))}}return A}function c(x,p,u){const A=new lt;p.getCenter(A);const v=[];return u.forEach(E=>{E.boundingBox.containsPoint(A)&&a(x,E.points).forEach(P=>{v.push({identifier:E.identifier,isCW:E.isCW,point:P})})}),v.sort((E,N)=>E.point.x-N.point.x),v}function l(x,p,u,A,v){(v==null||v==="")&&(v="nonzero");const E=new lt;x.boundingBox.getCenter(E);const N=[new lt(u,E.y),new lt(A,E.y)],P=c(N,x.boundingBox,p);P.sort((q,ft)=>q.point.x-ft.point.x);const C=[],Z=[];P.forEach(q=>{q.identifier===x.identifier?C.push(q):Z.push(q)});const y=C[0].point.x,w=[];let j=0;for(;j<Z.length&&Z[j].point.x<y;)w.length>0&&w[w.length-1]===Z[j].identifier?w.pop():w.push(Z[j].identifier),j++;if(w.push(x.identifier),v==="evenodd"){const q=w.length%2===0,ft=w[w.length-2];return{identifier:x.identifier,isHole:q,for:ft}}else if(v==="nonzero"){let q=!0,ft=null,F=null;for(let Y=0;Y<w.length;Y++){const K=w[Y];q?(F=p[K].isCW,q=!1,ft=K):F!==p[K].isCW&&(F=p[K].isCW,q=!0)}return{identifier:x.identifier,isHole:q,for:ft}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let h=999999999,f=-999999999,d=t.subPaths.map(x=>{const p=x.getPoints();let u=-999999999,A=999999999,v=-999999999,E=999999999;for(let N=0;N<p.length;N++){const P=p[N];P.y>u&&(u=P.y),P.y<A&&(A=P.y),P.x>v&&(v=P.x),P.x<E&&(E=P.x)}return f<=v&&(f=v+1),h>=E&&(h=E-1),{curves:x.curves,points:p,isCW:Cn.isClockWise(p),identifier:-1,boundingBox:new Dm(new lt(E,A),new lt(v,u))}});d=d.filter(x=>x.points.length>1);for(let x=0;x<d.length;x++)d[x].identifier=x;const g=d.map(x=>l(x,d,h,f,t.userData?t.userData.style.fillRule:void 0)),_=[];return d.forEach(x=>{if(!g[x.identifier].isHole){const u=new wi;u.curves=x.curves,g.filter(v=>v.isHole&&v.for===x.identifier).forEach(v=>{const E=d[v.identifier],N=new oi;N.curves=E.curves,u.holes.push(N)}),_.push(u)}}),_}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){const r=[],o=[],a=[];if(bs.pointsToStrokeWithBuffers(t,e,n,s,r,o,a)===0)return null;const c=new nn;return c.setAttribute("position",new Ue(r,3)),c.setAttribute("normal",new Ue(o,3)),c.setAttribute("uv",new Ue(a,2)),c}static pointsToStrokeWithBuffers(t,e,n,s,r,o,a,c){const l=new lt,h=new lt,f=new lt,d=new lt,g=new lt,_=new lt,x=new lt,p=new lt,u=new lt,A=new lt,v=new lt,E=new lt,N=new lt,P=new lt,C=new lt,Z=new lt,y=new lt;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,t=Q(t);const w=t.length;if(w<2)return 0;const j=t[0].equals(t[w-1]);let q,ft=t[0],F;const Y=e.strokeWidth/2,K=1/(w-1);let J=0,G,rt,st,pt,_t=!1,it=0,I=c*3,L=c*2;T(t[0],t[1],l).multiplyScalar(Y),p.copy(t[0]).sub(l),u.copy(t[0]).add(l),A.copy(p),v.copy(u);for(let O=1;O<w;O++){q=t[O],O===w-1?j?F=t[1]:F=void 0:F=t[O+1];const W=l;if(T(ft,q,W),f.copy(W).multiplyScalar(Y),E.copy(q).sub(f),N.copy(q).add(f),G=J+K,rt=!1,F!==void 0){T(q,F,h),f.copy(h).multiplyScalar(Y),P.copy(q).sub(f),C.copy(q).add(f),st=!0,f.subVectors(F,ft),W.dot(f)<0&&(st=!1),O===1&&(_t=st),f.subVectors(F,q),f.normalize();const V=Math.abs(W.dot(f));if(V>Number.EPSILON){const ht=Y/V;f.multiplyScalar(-ht),d.subVectors(q,ft),g.copy(d).setLength(ht).add(f),Z.copy(g).negate();const U=g.length(),m=d.length();d.divideScalar(m),_.subVectors(F,q);const M=_.length();switch(_.divideScalar(M),d.dot(Z)<m&&_.dot(Z)<M&&(rt=!0),y.copy(g).add(q),Z.add(q),pt=!1,rt?st?(C.copy(Z),N.copy(Z)):(P.copy(Z),E.copy(Z)):ot(),e.strokeLineJoin){case"bevel":k(st,rt,G);break;case"round":ct(st,rt),st?$(q,E,P,G,0):$(q,C,N,G,1);break;case"miter":case"miter-clip":default:const H=Y*e.strokeMiterLimit/U;if(H<1)if(e.strokeLineJoin!=="miter-clip"){k(st,rt,G);break}else ct(st,rt),st?(_.subVectors(y,E).multiplyScalar(H).add(E),x.subVectors(y,P).multiplyScalar(H).add(P),S(E,G,0),S(_,G,0),S(q,G,.5),S(q,G,.5),S(_,G,0),S(x,G,0),S(q,G,.5),S(x,G,0),S(P,G,0)):(_.subVectors(y,N).multiplyScalar(H).add(N),x.subVectors(y,C).multiplyScalar(H).add(C),S(N,G,1),S(_,G,1),S(q,G,.5),S(q,G,.5),S(_,G,1),S(x,G,1),S(q,G,.5),S(x,G,1),S(C,G,1));else rt?(st?(S(u,J,1),S(p,J,0),S(y,G,0),S(u,J,1),S(y,G,0),S(Z,G,1)):(S(u,J,1),S(p,J,0),S(y,G,1),S(p,J,0),S(Z,G,0),S(y,G,1)),st?P.copy(y):C.copy(y)):st?(S(E,G,0),S(y,G,0),S(q,G,.5),S(q,G,.5),S(y,G,0),S(P,G,0)):(S(N,G,1),S(y,G,1),S(q,G,.5),S(q,G,.5),S(y,G,1),S(C,G,1)),pt=!0;break}}else ot()}else ot();!j&&O===w-1&&R(t[0],A,v,st,!0,J),J=G,ft=q,p.copy(P),u.copy(C)}if(!j)R(q,E,N,st,!1,G);else if(rt&&r){let O=y,W=Z;_t!==st&&(O=Z,W=y),st?(pt||_t)&&(W.toArray(r,0*3),W.toArray(r,3*3),pt&&O.toArray(r,1*3)):(pt||!_t)&&(W.toArray(r,1*3),W.toArray(r,3*3),pt&&O.toArray(r,0*3))}return it;function T(O,W,V){return V.subVectors(W,O),V.set(-V.y,V.x).normalize()}function S(O,W,V){r&&(r[I]=O.x,r[I+1]=O.y,r[I+2]=0,o&&(o[I]=0,o[I+1]=0,o[I+2]=1),I+=3,a&&(a[L]=W,a[L+1]=V,L+=2)),it+=3}function $(O,W,V,ht,U){l.copy(W).sub(O).normalize(),h.copy(V).sub(O).normalize();let m=Math.PI;const M=l.dot(h);Math.abs(M)<1&&(m=Math.abs(Math.acos(M))),m/=n,f.copy(W);for(let H=0,ut=n-1;H<ut;H++)d.copy(f).rotateAround(O,m),S(f,ht,U),S(d,ht,U),S(O,ht,.5),f.copy(d);S(d,ht,U),S(V,ht,U),S(O,ht,.5)}function ot(){S(u,J,1),S(p,J,0),S(E,G,0),S(u,J,1),S(E,G,1),S(N,G,0)}function k(O,W,V){W?O?(S(u,J,1),S(p,J,0),S(E,G,0),S(u,J,1),S(E,G,0),S(Z,G,1),S(E,V,0),S(P,V,0),S(Z,V,.5)):(S(u,J,1),S(p,J,0),S(N,G,1),S(p,J,0),S(Z,G,0),S(N,G,1),S(N,V,1),S(Z,V,0),S(C,V,1)):O?(S(E,V,0),S(P,V,0),S(q,V,.5)):(S(N,V,1),S(C,V,0),S(q,V,.5))}function ct(O,W){W&&(O?(S(u,J,1),S(p,J,0),S(E,G,0),S(u,J,1),S(E,G,0),S(Z,G,1),S(E,J,0),S(q,G,.5),S(Z,G,1),S(q,G,.5),S(P,J,0),S(Z,G,1)):(S(u,J,1),S(p,J,0),S(N,G,1),S(p,J,0),S(Z,G,0),S(N,G,1),S(N,J,1),S(Z,G,0),S(q,G,.5),S(q,G,.5),S(Z,G,0),S(C,J,1)))}function R(O,W,V,ht,U,m){switch(e.strokeLineCap){case"round":U?$(O,V,W,m,.5):$(O,W,V,m,.5);break;case"square":if(U)l.subVectors(W,O),h.set(l.y,-l.x),f.addVectors(l,h).add(O),d.subVectors(h,l).add(O),ht?(f.toArray(r,1*3),d.toArray(r,0*3),d.toArray(r,3*3)):(f.toArray(r,1*3),f.toArray(r,3*3),d.toArray(r,0*3));else{l.subVectors(V,O),h.set(l.y,-l.x),f.addVectors(l,h).add(O),d.subVectors(h,l).add(O);const M=r.length;ht?(f.toArray(r,M-1*3),d.toArray(r,M-2*3),d.toArray(r,M-4*3)):(d.toArray(r,M-2*3),f.toArray(r,M-1*3),d.toArray(r,M-4*3))}break}}function Q(O){let W=!1;for(let ht=1,U=O.length-1;ht<U;ht++)if(O[ht].distanceTo(O[ht+1])<s){W=!0;break}if(!W)return O;const V=[];V.push(O[0]);for(let ht=1,U=O.length-1;ht<U;ht++)O[ht].distanceTo(O[ht+1])>=s&&V.push(O[ht]);return V.push(O[O.length-1]),V}}}const Km=Object.assign({"../icons/camera.svg":Fm,"../icons/cart.svg":Bm,"../icons/chat.svg":zm,"../icons/globe.svg":Hm,"../icons/heart.svg":Gm,"../icons/mail.svg":km,"../icons/music.svg":Vm,"../icons/note.svg":Wm,"../icons/pin.svg":Xm,"../icons/play.svg":qm,"../icons/qr.svg":Ym,"../icons/star.svg":Zm}),Xr={};for(const[i,t]of Object.entries(Km)){const e=i.split("/").pop().replace(/\.svg$/,"");Xr[e]=t}const Jm=new bs;function $m(i){const t=Xr[i];return t?"data:image/svg+xml,"+encodeURIComponent(t):""}function Qm(i,{targetSize:t=1.7,depth:e=.16}={}){const n=Xr[i];return n?Promise.resolve(tg(n,t,e)):Promise.reject(new Error(`Icon "${i}" nicht gefunden`))}function tg(i,t,e){const n=Jm.parse(i),s=[];for(const c of n.paths)for(const l of bs.createShapes(c))s.push(l);if(s.length===0)throw new Error("SVG enthält keine Flächen");const r=new kr(s,{depth:e,bevelEnabled:!0,bevelThickness:e*.4,bevelSize:e*.28,bevelSegments:2,curveSegments:14});r.scale(1,-1,1),r.computeBoundingBox();let o=r.boundingBox;const a=t/Math.max(o.max.x-o.min.x,o.max.y-o.min.y);return r.scale(a,a,1),r.computeBoundingBox(),o=r.boundingBox,r.translate(-(o.max.x+o.min.x)/2,-(o.max.y+o.min.y)/2,0),r.computeVertexNormals(),r}const ei=2.6,fr=.55,eg=.42,Io=.7,ng=1.7,dr=4.3,hs=1.4,us=1.3,pr=11.5,ig=.9,sg=new jt("#2f6fe0");class rg{constructor(){this.group=new Ei,this.pickables=[],this._tileMeshes=[],this._iconMeshes=[],this._iconTokens=[],this._disposable=[],this._selected=null,this.materials=this._createMaterials(),this._logoTex=null}_createMaterials(){const t=(n,s)=>new Cr({color:new jt(n),roughness:s,metalness:0,envMapIntensity:.7}),e={base:t("#F2F1EB",.62),frame:t("#1C1C1C",.5),tile:t("#1C1C1C",.36),icon:t("#FFFFFF",.46),logo:t("#1C1C1C",.42)};for(const n of Object.values(e))n.emissiveIntensity=0;return e}build({tileCount:t,tiles:e,logoText:n,logoImage:s}){this._clear();const r=t*ei+(t-1)*Io,o=r+2*ng;this._buildBase(o),this._buildFrame(o),this._buildLogo(o,n,s),this._buildTiles(t,r),e.forEach((a,c)=>this.setTileIcon(c,a.icon)),this._selected&&this.setSelected(this._selected)}_buildBase(t){const e=new Jt(this._track(new ls(t,pr,us,4,ig)),this.materials.base);e.position.set(0,pr/2,0),this._addPart(e,"base");const n=new Jt(this._track(new ls(t,hs,dr,3,.4)),this.materials.base);n.position.set(0,hs/2,us/2+dr/2-.3),this._addPart(n,"base")}_buildFrame(t){const e=us/2+.09,n=.5,s=.34,r=t/2-1.4,o=pr-1.5,a=hs+1.7,c=2*r,l=o-a,h=(o+a)/2,f=(d,g,_,x)=>{const p=new Jt(this._track(new ls(d,g,s,2,s*.45)),this.materials.frame);p.position.set(_,x,e),this._addPart(p,"frame")};f(c+n,n,0,o),f(c+n,n,0,a),f(n,l+n,-r,h),f(n,l+n,r,h),this._frameArea={cx:0,cy:h,w:c,h:l,z:e+.05}}_buildLogo(t,e,n){const s=this._frameArea,r=s.w*.82,o=s.h*.66;this._updateLogoTexture(e,n);const a=this.materials.logo;a.alphaMap=this._logoTex,a.alphaTest=.45,a.transparent=!1,a.needsUpdate=!0;const c=new Jt(this._track(new Ui(r,o)),a);c.position.set(s.cx,s.cy,s.z),c.renderOrder=2,this._addPart(c,"logo"),this._logoMesh=c}_buildTiles(t,e){this._tileMeshes=[];const n=us/2+dr-ei/2-.55,s=hs+fr/2;for(let r=0;r<t;r++){const o=-e/2+ei/2+r*(ei+Io),a=new Jt(this._track(new ls(ei,fr,ei,4,eg)),this.materials.tile);a.position.set(o,s,n),a.userData.tileIndex=r,this._addPart(a,"tile"),this._tileMeshes.push(a)}}setTileIcon(t,e){const n=this._tileMeshes[t];if(!n)return;const s=this._iconMeshes[t];s&&(n.remove(s),this._removePickable(s),s.geometry?.dispose(),this._iconMeshes[t]=null);const r=(this._iconTokens[t]||0)+1;this._iconTokens[t]=r,Qm(e).then(o=>{if(this._tileMeshes[t]!==n||this._iconTokens[t]!==r){o.dispose();return}const a=new Jt(o,this.materials.icon);a.rotation.x=-Math.PI/2,a.position.y=fr/2+.01,a.castShadow=!0,a.userData.part="icon",a.userData.tileIndex=t,n.add(a),this._iconMeshes[t]=a,this.pickables.push(a),this._selected==="icon"&&this._applyHighlight("icon",!0)}).catch(o=>console.warn("Icon konnte nicht geladen werden:",e,o))}setColor(t,e){const n=this.materials[t];n&&n.color.set(e)}setLogo({text:t,image:e}){this._updateLogoTexture(t,e),this.materials.logo.alphaMap=this._logoTex,this.materials.logo.needsUpdate=!0}setSelected(t){this._selected&&this._selected!==t&&this._applyHighlight(this._selected,!1),this._selected=t,this._applyHighlight(t,!0)}_applyHighlight(t,e){const n=this.materials[t];n&&(e?(n.emissive.copy(sg),n.emissiveIntensity=.16):(n.emissive.setRGB(0,0,0),n.emissiveIntensity=0))}_updateLogoTexture(t,e){const n=document.createElement("canvas");n.width=512,n.height=256;const s=n.getContext("2d");if(s.clearRect(0,0,512,256),e){const o=Math.min(512/e.width,256/e.height),a=e.width*o,c=e.height*o;s.drawImage(e,(512-a)/2,(256-c)/2,a,c)}else s.fillStyle="#ffffff",s.font='700 150px Georgia, "Times New Roman", serif',s.textAlign="center",s.textBaseline="middle",s.fillText((t||"Tap").slice(0,14),256,140);const r=new gc(n);r.colorSpace=oe,r.anisotropy=4,this._logoTex?.dispose(),this._logoTex=r}_addPart(t,e){t.castShadow=!0,t.receiveShadow=!0,t.userData.part=e,this.group.add(t),this.pickables.push(t)}_track(t){return this._disposable.push(t),t}_removePickable(t){const e=this.pickables.indexOf(t);e>=0&&this.pickables.splice(e,1)}_clear(){for(const t of[...this.group.children])this.group.remove(t);for(const t of this._disposable)t.dispose();this._disposable=[],this.pickables=[],this._iconMeshes=[],this._iconTokens=[],this._tileMeshes=[]}}class ag{constructor(t,e){this.data=e,this.scene=new Om(t),this.model=new rg,this.scene.add(this.model.group),this.raycaster=new Lm,this.pointer=new lt,this._selectListeners=[],this.state=this._initialState(),this.applyProduct(this.state.productId,!0),this._bindPointer(t)}_initialState(){const t={};for(const n of this.data.parts)t[n.id]=n.default;const e=this.data.products.find(n=>n.id===this.data.defaultProductId);return{productId:e.id,tileCount:e.tileCount,colors:t,tiles:this._defaultTiles(e.tileCount),logoText:this.data.brand,logoImage:null,selected:"tile",selectedTile:null}}_defaultTiles(t){const e=["star","camera","globe","chat","music","play","cart","qr"];return Array.from({length:t},(n,s)=>({icon:e[s%e.length],link:""}))}applyProduct(t,e=!1){const n=this.data.products.find(o=>o.id===t);if(!n)return;this.state.productId=t,this.state.tileCount=n.tileCount;const s=this.state.tiles.slice(0,n.tileCount),r=this._defaultTiles(n.tileCount);for(;s.length<n.tileCount;)s.push(r[s.length]);this.state.tiles=s;for(const[o,a]of Object.entries(this.state.colors))this.model.setColor(o,a);this.model.build({tileCount:this.state.tileCount,tiles:this.state.tiles,logoText:this.state.logoText,logoImage:this.state.logoImage}),this.model.setSelected(this.state.selected),e||this._emitSelect()}setColor(t,e){this.state.colors[t]=e,this.model.setColor(t,e)}selectPart(t,e=null){this.state.selected=t,this.state.selectedTile=e,this.model.setSelected(t),this._emitSelect()}setTileIcon(t,e){this.state.tiles[t]&&(this.state.tiles[t].icon=e,this.model.setTileIcon(t,e))}setTileLink(t,e){this.state.tiles[t]&&(this.state.tiles[t].link=e)}setLogoText(t){this.state.logoText=t,this.model.setLogo({text:t,image:this.state.logoImage})}setLogoImage(t){this.state.logoImage=t,this.model.setLogo({text:this.state.logoText,image:t})}getProduct(){return this.data.products.find(t=>t.id===this.state.productId)}exportConfig(){const t=this.getProduct();return{product:{id:t.id,name:t.name,price:t.price},currency:this.data.currency,colors:{...this.state.colors},logo:{text:this.state.logoText,hasImage:!!this.state.logoImage},tiles:this.state.tiles.map((e,n)=>({position:n+1,icon:e.icon,link:e.link}))}}onSelect(t){this._selectListeners.push(t)}_emitSelect(){const t={part:this.state.selected,tileIndex:this.state.selectedTile};for(const e of this._selectListeners)e(t)}_bindPointer(t){let e=0,n=0;t.addEventListener("pointerdown",s=>{e=s.clientX,n=s.clientY}),t.addEventListener("pointerup",s=>{if(Math.hypot(s.clientX-e,s.clientY-n)>6)return;const r=t.getBoundingClientRect();this.pointer.x=(s.clientX-r.left)/r.width*2-1,this.pointer.y=-((s.clientY-r.top)/r.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.scene.camera);const o=this.raycaster.intersectObjects(this.model.pickables,!1);if(o.length){const a=o[0].object.userData;this.selectPart(a.part,a.tileIndex??null)}})}}class og{constructor(t,e,n){this.root=t,this.cfg=e,this.data=n,this.activePart=e.state.selected,this.refs={},this._render(),this.cfg.onSelect(({part:s,tileIndex:r})=>{this.activePart=s,this._syncParts(),this._syncPalette(),r!=null&&this._focusTile(r)})}_render(){this.root.replaceChildren(this._header(),this._productSwitch(),this._colorsSection(),this._tilesSection(),this._logoSection(),this._footer()),this._syncParts(),this._syncPalette(),this._syncProduct()}_header(){const t=kt("div",{class:"eyebrow"},"NFC-Konfigurator");return this.refs.name=kt("h1",{class:"product-name"}),this.refs.tagline=kt("p",{class:"tagline"}),kt("header",{class:"panel-header"},t,this.refs.name,this.refs.tagline)}_productSwitch(){this.refs.segment=kt("div",{class:"segment"});for(const t of this.data.products){const e=kt("button",{type:"button","data-id":t.id},t.name);e.addEventListener("click",()=>{this.cfg.applyProduct(t.id),this._syncProduct(),this._rebuildTiles()}),this.refs.segment.append(e)}return kt("div",{class:"block"},this.refs.segment)}_colorsSection(){this.refs.parts=kt("div",{class:"parts"});for(const t of this.data.parts){const e=kt("span",{class:"part-swatch","data-swatch":t.id}),n=kt("button",{type:"button",class:"part-row","data-part":t.id},e,kt("span",{class:"part-label"},t.label));n.addEventListener("click",()=>this.cfg.selectPart(t.id)),this.refs.parts.append(n)}this.refs.palette=kt("div",{class:"palette"});for(const t of this.data.palette){const e=kt("button",{type:"button",class:"swatch","data-hex":t.hex,title:`${t.name} · ${t.hex}`,style:`--c:${t.hex}`});e.addEventListener("click",()=>this._pickColor(t.hex)),this.refs.palette.append(e)}return this.refs.colorInput=kt("input",{type:"color",class:"color-input",value:"#1c1c1c"}),this.refs.colorInput.addEventListener("input",t=>this._pickColor(t.target.value)),this.refs.hexInput=kt("input",{type:"text",class:"hex-input",maxlength:"7",spellcheck:"false",placeholder:"#RRGGBB"}),this.refs.hexInput.addEventListener("change",t=>{const e=cg(t.target.value);e?this._pickColor(e):this._syncPalette()}),this.refs.cmyk=kt("div",{class:"cmyk"}),kt("section",{class:"block"},kt("h2",{},"Farben"),kt("p",{class:"hint"},"Bauteil wählen – im 3D-Modell oder hier – und Farbe zuweisen."),this.refs.parts,this.refs.palette,kt("div",{class:"color-row"},this.refs.colorInput,this.refs.hexInput),this.refs.cmyk)}_pickColor(t){this.cfg.setColor(this.activePart,t),this._syncParts(),this._syncPalette()}_tilesSection(){return this.refs.tiles=kt("div",{class:"tiles"}),this._rebuildTiles(),kt("section",{class:"block"},kt("h2",{},"Kacheln"),kt("p",{class:"hint"},"Pro Kachel ein Icon und ein Ziel-Link."),this.refs.tiles)}_rebuildTiles(){this.refs.tiles&&(this.refs.tiles.replaceChildren(),this.refs.tileCards=[],this.cfg.state.tiles.forEach((t,e)=>{const n=kt("div",{class:"icongrid"});for(const o of this.data.icons){const a=kt("button",{type:"button",class:"icon-btn","data-icon":o.id,title:o.label},kt("img",{src:$m(o.id),alt:o.label}));a.addEventListener("click",()=>{this.cfg.setTileIcon(e,o.id),this._syncTileIcons(e)}),n.append(a)}const s=kt("input",{type:"url",class:"link-input",placeholder:"https://deinlink.de",value:t.link||""});s.addEventListener("input",o=>this.cfg.setTileLink(e,o.target.value));const r=kt("div",{class:"tile-card","data-i":String(e)},kt("div",{class:"tile-head"},`Kachel ${e+1}`),n,s);this.refs.tiles.append(r),this.refs.tileCards.push(r),this._syncTileIcons(e)}))}_syncTileIcons(t){const e=this.refs.tileCards?.[t];if(!e)return;const n=this.cfg.state.tiles[t].icon;e.querySelectorAll(".icon-btn").forEach(s=>s.classList.toggle("active",s.dataset.icon===n))}_focusTile(t){const e=this.refs.tileCards?.[t];e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),e.classList.remove("flash"),e.offsetWidth,e.classList.add("flash"))}_logoSection(){const t=kt("input",{type:"text",class:"logo-input",maxlength:"14",value:this.cfg.state.logoText,placeholder:"Dein Logo-Text"});t.addEventListener("input",s=>this.cfg.setLogoText(s.target.value));const e=kt("input",{type:"file",accept:"image/png,image/svg+xml,image/jpeg",hidden:"hidden"});e.addEventListener("change",s=>this._onLogoFile(s.target.files[0]));const n=kt("label",{class:"upload"},"Logo-Bild hochladen",e);return kt("section",{class:"block"},kt("h2",{},"Logo"),kt("p",{class:"hint"},"Text oder eigenes Bild auf der Rückwand."),t,n)}_onLogoFile(t){if(!t)return;const e=new FileReader;e.onload=()=>{const n=new Image;n.onload=()=>this.cfg.setLogoImage(n),n.src=e.result},e.readAsDataURL(t)}_footer(){this.refs.price=kt("div",{class:"price"});const t=kt("button",{type:"button",class:"cta",disabled:"disabled"},"In den Warenkorb (bald)"),e=kt("button",{type:"button",class:"ghost"},"Konfiguration kopieren");return e.addEventListener("click",()=>this._exportConfig(e)),kt("footer",{class:"panel-footer"},this.refs.price,t,e)}async _exportConfig(t){const e=JSON.stringify(this.cfg.exportConfig(),null,2);try{await navigator.clipboard.writeText(e);const n=t.textContent;t.textContent="Kopiert ✓",setTimeout(()=>t.textContent=n,1500)}catch{console.log(e)}}_syncProduct(){const t=this.cfg.getProduct();this.refs.name.textContent=t.name,this.refs.tagline.textContent=t.tagline,this.refs.price.textContent=`${t.price} ${this.data.currencySymbol}`,this.refs.segment.querySelectorAll("button").forEach(e=>e.classList.toggle("active",e.dataset.id===t.id))}_syncParts(){for(const t of this.data.parts){const e=this.cfg.state.colors[t.id],n=this.refs.parts.querySelector(`[data-swatch="${t.id}"]`);n&&(n.style.background=e);const s=this.refs.parts.querySelector(`[data-part="${t.id}"]`);s&&s.classList.toggle("active",t.id===this.activePart)}}_syncPalette(){const t=(this.cfg.state.colors[this.activePart]||"#000000").toLowerCase();this.refs.hexInput.value=t,this.refs.colorInput.value=/^#[0-9a-f]{6}$/.test(t)?t:"#000000",this.refs.palette.querySelectorAll(".swatch").forEach(e=>e.classList.toggle("active",e.dataset.hex.toLowerCase()===t)),this.refs.cmyk.textContent=`Druck (CMYK): ${lg(t)}`}}function kt(i,t={},...e){const n=document.createElement(i);for(const[s,r]of Object.entries(t))s==="class"?n.className=r:n.setAttribute(s,r);for(const s of e.flat())s!=null&&n.append(s.nodeType?s:document.createTextNode(s));return n}function cg(i){let t=(i||"").trim();return t?(t[0]!=="#"&&(t="#"+t),/^#[0-9a-fA-F]{3}$/.test(t)&&(t="#"+t.slice(1).split("").map(e=>e+e).join("")),/^#[0-9a-fA-F]{6}$/.test(t)?t.toLowerCase():null):null}function lg(i){const t=parseInt(i.slice(1,3),16)/255,e=parseInt(i.slice(3,5),16)/255,n=parseInt(i.slice(5,7),16)/255,s=1-Math.max(t,e,n);if(s>=1)return"0 · 0 · 0 · 100";const r=Math.round((1-t-s)/(1-s)*100),o=Math.round((1-e-s)/(1-s)*100),a=Math.round((1-n-s)/(1-s)*100);return`${r} · ${o} · ${a} · ${Math.round(s*100)}`}const hg=document.getElementById("scene"),ug=document.getElementById("panel"),fg=document.getElementById("loading"),dg=new ag(hg,Uo);new og(ug,dg,Uo);requestAnimationFrame(()=>requestAnimationFrame(()=>fg?.remove()));
