"use strict";
(self["webpackChunkgatsby_starter_blog"] = self["webpackChunkgatsby_starter_blog"] || []).push([[84],{

/***/ 3204:
/***/ (function(module) {



const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 8032:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: function() { return /* binding */ G; },
/* harmony export */   M: function() { return /* binding */ K; },
/* harmony export */   P: function() { return /* binding */ Z; },
/* harmony export */   S: function() { return /* binding */ we; },
/* harmony export */   _: function() { return /* binding */ u; },
/* harmony export */   a: function() { return /* binding */ h; },
/* harmony export */   b: function() { return /* binding */ P; },
/* harmony export */   g: function() { return /* binding */ A; },
/* harmony export */   h: function() { return /* binding */ W; }
/* harmony export */ });
/* unused harmony exports G, c, d, e, f, i, j, w */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3204);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},h.apply(this,arguments);}function u(e,t){if(null==e)return{};var a,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)t.indexOf(a=r[i])>=0||(s[a]=e[a]);return s;}const g=(/* unused pure expression or super */ null && ([.25,.5,1,2])),p=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),m=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),f=800,w=800,y=(/* unused pure expression or super */ null && (4/3)),b=e=>console.warn(e),v=(e,t)=>e-t,E=(e,t)=>{switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}},k=e=>e.map(e=>e.src+" "+e.width+"w").join(",\n");function S(e){const t=e.lastIndexOf(".");if(-1!==t){const a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function M(e){let{layout:t="constrained",width:a,height:i,sourceMetadata:s,breakpoints:r,aspectRatio:n,formats:o=["auto","webp"]}=e;return o=o.map(e=>e.toLowerCase()),t=l(t),a&&i?h({},e,{formats:o,layout:t,aspectRatio:a/i}):(s.width&&s.height&&!n&&(n=s.width/s.height),"fullWidth"===t?(a=a||s.width||r[r.length-1],i=i||Math.round(a/(n||y))):(a||(a=i&&n?i*n:s.width?s.width:i?Math.round(i/y):w),n&&!i?i=Math.round(a/n):n||(n=a/i)),h({},e,{width:a,height:i,aspectRatio:n,layout:t,formats:o}));}function N(e,t){if(t===void 0){t=20;}var a;e=M(e);const{generateImageSource:i,filename:s,aspectRatio:r}=e;return null==(a=i(s,t,Math.round(t/r),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function $(e){e=M(e);let{pluginName:t,sourceMetadata:a,generateImageSource:i,layout:s,fit:r,options:n,width:o,height:l,filename:d,reporter:c={warn:b},backgroundColor:u,placeholderURL:m}=e;if(t||c.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof i)throw new Error("generateImageSource must be a function");var f;a&&(a.width||a.height)?a.format||(a.format=S(d)):a={width:o,height:l,format:(null==(f=a)?void 0:f.format)||S(d)||"auto"};const y=new Set(e.formats);(0===y.size||y.has("auto")||y.has(""))&&(y.delete("auto"),y.delete(""),y.add(a.format)),y.has("jpg")&&y.has("png")&&(c.warn("["+t+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),y.delete("jpg"===a.format?"png":"jpg"));const v=function(e){const{width:t,height:a,filename:i,layout:s="constrained",sourceMetadata:r,reporter:n={warn:b},breakpoints:o=p}=e,l=Object.entries({width:t,height:a}).filter(_ref=>{let[e,t]=_ref;return"number"==typeof t&&t<1;});if(l.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+l.map(e=>e.join(": ")).join(", "));return"fixed"===s?function(_ref2){let{filename:e,sourceMetadata:t,width:a,height:i,fit:s="cover",outputPixelDensities:r=g,reporter:n={warn:b}}=_ref2;let o=t.width/t.height;const l=I(r);if(a&&i){const e=j(t,{width:a,height:i,fit:s});a=e.width,i=e.height,o=e.aspectRatio;}a?i||(i=Math.round(a/o)):a=i?Math.round(i*o):w;const d=a;if(t.width<a||t.height<i){const s=t.width<a?"width":"height";n.warn("\nThe requested "+s+" \""+("width"===s?a:i)+"px\" for the image "+e+" was larger than the actual image "+s+" of "+t[s]+"px. If possible, replace the current image with a larger one."),"width"===s?(a=t.width,i=Math.round(a/o)):a=(i=t.height)*o;}return{sizes:l.filter(e=>e>=1).map(e=>Math.round(e*a)).filter(e=>e<=t.width),aspectRatio:o,presentationWidth:d,presentationHeight:Math.round(d/o),unscaledWidth:a};}(e):"constrained"===s?x(e):"fullWidth"===s?x(h({breakpoints:o},e)):(n.warn("No valid layout was provided for the image at "+i+". Valid image layouts are fixed, fullWidth, and constrained. Found "+s),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(h({},e,{sourceMetadata:a})),N={sources:[]};let $=e.sizes;$||($=E(v.presentationWidth,s)),y.forEach(e=>{const a=v.sizes.map(a=>{const s=i(d,a,Math.round(a/v.aspectRatio),e,r,n);if(null!=s&&s.width&&s.height&&s.src&&s.format)return s;c.warn("["+t+"] The resolver for image "+d+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){const e=a.find(e=>e.width===v.unscaledWidth)||a[0];e&&(N.fallback={src:e.src,srcSet:k(a),sizes:$});}else{var s;null==(s=N.sources)||s.push({srcSet:k(a),sizes:$,type:"image/"+e});}});const L={images:N,layout:s,backgroundColor:u};switch(m&&(L.placeholder={fallback:m}),s){case"fixed":L.width=v.presentationWidth,L.height=v.presentationHeight;break;case"fullWidth":L.width=1,L.height=1/v.aspectRatio;break;case"constrained":L.width=e.width||v.presentationWidth||1,L.height=(L.width||1)/v.aspectRatio;}return L;}const I=e=>Array.from(new Set([1].concat(_toConsumableArray(e)))).sort(v);function x(_ref3){let{sourceMetadata:e,width:t,height:a,fit:i="cover",outputPixelDensities:s=g,breakpoints:r,layout:n}=_ref3;let o,l=e.width/e.height;const d=I(s);if(t&&a){const s=j(e,{width:t,height:a,fit:i});t=s.width,a=s.height,l=s.aspectRatio;}t=t&&Math.min(t,e.width),a=a&&Math.min(a,e.height),t||a||(a=(t=Math.min(f,e.width))/l),t||(t=a*l);const c=t;return(e.width<t||e.height<a)&&(t=e.width,a=e.height),t=Math.round(t),(null==r?void 0:r.length)>0?(o=r.filter(t=>t<=e.width),o.length<r.length&&!o.includes(e.width)&&o.push(e.width)):(o=d.map(e=>Math.round(e*t)),o=o.filter(t=>t<=e.width)),"constrained"!==n||o.includes(t)||o.push(t),o=o.sort(v),{sizes:o,aspectRatio:l,presentationWidth:c,presentationHeight:Math.round(c/l),unscaledWidth:t};}function j(e,t){const a=e.width/e.height;let i=t.width,s=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,s=t.height?t.height:e.height;break;case"inside":{const e=t.width?t.width:Number.MAX_SAFE_INTEGER,r=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(e,Math.round(r*a)),s=Math.min(r,Math.round(e/a));break;}case"outside":{const e=t.width?t.width:0,r=t.height?t.height:0;i=Math.max(e,Math.round(r*a)),s=Math.max(r,Math.round(e/a));break;}default:t.width&&!t.height&&(i=t.width,s=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),s=t.height);}return{width:i,height:s,aspectRatio:i/s};}const L=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),T=(/* unused pure expression or super */ null && (["images","placeholder"])),W=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function R(){return true&&true;}const _=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},C=e=>{var t,a,i;return null==(t=_(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},O=e=>{var t,a,i;return null==(t=_(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function z(e,t,a){const i={};let s="gatsby-image-wrapper";return R()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(R()||(i.display="inline-block",i.verticalAlign="top"),s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:i};}function D(e){var t;let{baseUrl:a,urlBuilder:i,sourceWidth:s,sourceHeight:r,pluginName:n="getImageData",formats:o=["auto"],breakpoints:l,options:d}=e,c=u(e,L);return null!=(t=l)&&t.length||"fullWidth"!==c.layout&&"FULL_WIDTH"!==c.layout||(l=m),$(h({},c,{pluginName:n,generateImageSource:(e,t,a,s)=>({width:t,height:a,format:s,src:i({baseUrl:e,width:t,height:a,options:d,format:s})}),filename:a,formats:o,breakpoints:l,sourceMetadata:{width:s,height:r,format:"auto"}}));}function P(e,t,a,i,s){if(s===void 0){s={};}return R()||(s=h({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},s)),h({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:h({},s,{opacity:t?1:0})});}function A(e,t,a,i,s,r,n,o){const l={};r&&(l.backgroundColor=r,"fixed"===a?(l.width=i,l.height=s,l.backgroundColor=r,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),n&&(l.objectFit=n),o&&(l.objectPosition=o);const d=h({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:h({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return R()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}function q(e,t){var _s$images$sources2,_r$sources;const{images:a,placeholder:i}=e,s=h({},u(e,T),{images:h({},a,{sources:[]}),placeholder:i&&h({},i,{sources:[]})});var r;return t.forEach(_ref4=>{var _s$images$sources;let{media:t,image:a}=_ref4;t?(a.layout!==e.layout&&"development"==="production"&&0,(_s$images$sources=s.images.sources).push.apply(_s$images$sources,_toConsumableArray(a.images.sources.map(e=>h({},e,{media:t}))).concat([{media:t,srcSet:a.images.fallback.srcSet}])),s.placeholder&&s.placeholder.sources.push({media:t,srcSet:a.placeholder.fallback})): false&&0;}),(_s$images$sources2=s.images.sources).push.apply(_s$images$sources2,_toConsumableArray(a.sources)),null!=i&&i.sources&&(null==(r=s.placeholder)||(_r$sources=r.sources).push.apply(_r$sources,_toConsumableArray(i.sources))),s;}const H=["children"],F=function(_ref5){let{layout:t,width:a,height:i}=_ref5;return"fullWidth"===t?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{maxWidth:a,display:"block"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},G=function(a){let{children:i}=a,s=u(a,H);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(F,h({},s)),i,null);},V=["src","srcSet","loading","alt","shouldLoad"],B=["fallback","sources","shouldLoad"],U=function(t){let{src:a,srcSet:i,loading:s,alt:r="",shouldLoad:n}=t,o=u(t,V);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",h({},o,{decoding:"async",loading:s,src:n?a:void 0,"data-src":n?void 0:a,srcSet:n?i:void 0,"data-srcset":n?void 0:i,alt:r}));},Y=function(t){let{fallback:a,sources:i=[],shouldLoad:s=!0}=t,r=u(t,B);const n=r.sizes||(null==a?void 0:a.sizes),o=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(U,h({},r,a,{sizes:n,shouldLoad:s}));return i.length?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("picture",null,i.map(_ref6=>{let{media:t,srcSet:a,type:i}=_ref6;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:n});}),o):o;};var X;U.propTypes={src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool},Y.displayName="Picture",Y.propTypes={alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string}),sources:prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired}),prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired})]))};const J=["fallback"],Z=function(t){let{fallback:a}=t,i=u(t,J);return a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Y,h({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",h({},i));};Z.displayName="Placeholder",Z.propTypes={fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sources:null==(X=Y.propTypes)?void 0:X.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};const K=function(t){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Y,h({},t)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("noscript",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Y,h({},t,{shouldLoad:!0}))));};K.displayName="MainImage",K.propTypes=Y.propTypes;const Q=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],ee=["style","className"],te=e=>e.replace(/\n/g,""),ae=function(e,t,a){for(var _len=arguments.length,i=new Array(_len>3?_len-3:0),_key=3;_key<_len;_key++){i[_key-3]=arguments[_key];}return e.alt||""===e.alt?prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t,a].concat(i)):new Error("The \"alt\" prop is required in "+a+". If the image is purely presentational then pass an empty string: e.g. alt=\"\". Learn more: https://a11y-style-guide.com/style-guide/section-media.html");},ie={image:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,alt:ae},se=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],re=["style","className"],ne=new Set();let oe,le;const de=function(e){let{as:t="div",image:a,style:l,backgroundColor:d,className:c,class:g,onStartLoad:p,onLoad:m,onError:f}=e,w=u(e,se);const{width:y,height:b,layout:v}=a,E=z(y,b,v),{style:k,className:S}=E,M=u(E,re),N=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),$=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>JSON.stringify(a.images),[a.images]);g&&(c=g);const I=function(e,t,a){let i="";return"fullWidth"===e&&(i="<div aria-hidden=\"true\" style=\"padding-top: "+a/t*100+"%;\"></div>"),"constrained"===e&&(i="<div style=\"max-width: "+t+"px; display: block;\"><img alt=\"\" role=\"presentation\" aria-hidden=\"true\" src=\"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),i;}(v,y,b);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{oe||(oe=__webpack_require__.e(/* import() */ 731).then(__webpack_require__.bind(__webpack_require__, 6731)).then(_ref7=>{let{renderImageToString:e,swapPlaceholderImage:t}=_ref7;return le=e,{renderImageToString:e,swapPlaceholderImage:t};}));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&W())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout(()=>{e.removeAttribute("data-gatsby-image-ssr");},0)):(null==p||p({wasCached:!0}),e.addEventListener("load",function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout(()=>{e.removeAttribute("data-gatsby-image-ssr");},0);})),void ne.add($);if(le&&ne.has($))return;let t,i;return oe.then(_ref8=>{let{renderImageToString:e,swapPlaceholderImage:s}=_ref8;N.current&&(N.current.innerHTML=e(h({isLoading:!0,isLoaded:ne.has($),image:a},w)),ne.has($)||(t=requestAnimationFrame(()=>{N.current&&(i=s(N.current,$,ne,l,p,m,f));})));}),()=>{t&&cancelAnimationFrame(t),i&&i();};},[a]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{ne.has($)&&le&&(N.current.innerHTML=le(h({isLoading:ne.has($),isLoaded:ne.has($),image:a},w)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}));},[a]),/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(t,h({},M,{style:h({},k,l,{backgroundColor:d}),className:""+S+(c?" "+c:""),ref:N,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}));},ce=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(e){return e.image?(R()||"development"!=="production"||0,/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(de,e)):( false&&0,null);});ce.propTypes=ie,ce.displayName="GatsbyImage";const he=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function ue(t){return function(a){let{src:i,__imageData:s,__error:r}=a,n=u(a,he);return r&&console.warn(r),s?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(t,h({image:s},n)):(console.warn("Image not loaded",i),r||"development"!=="production"||0,null);};}const ge=ue(function(t){let{as:a="div",className:i,class:s,style:r,image:n,loading:o="lazy",imgClassName:l,imgStyle:d,backgroundColor:c,objectFit:g,objectPosition:p}=t,m=u(t,Q);if(!n)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(i=s),d=h({objectFit:g,objectPosition:p,backgroundColor:c},d);const{width:f,height:w,layout:y,images:b,placeholder:v,backgroundColor:E}=n,k=z(f,w,y),{style:S,className:M}=k,N=u(k,ee),$={fallback:void 0,sources:[]};return b.fallback&&($.fallback=h({},b.fallback,{srcSet:b.fallback.srcSet?te(b.fallback.srcSet):void 0})),b.sources&&($.sources=b.sources.map(e=>h({},e,{srcSet:te(e.srcSet)}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(a,h({},N,{style:h({},S,r,{backgroundColor:c}),className:""+M+(i?" "+i:"")}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(G,{layout:y,width:f,height:w},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Z,h({},A(v,!1,y,f,w,E,g,p))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(K,h({"data-gatsby-image-ssr":"",className:l},m,P("eager"===o,!1,$,o,d)))));}),pe=function(e,t){for(var _len2=arguments.length,a=new Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){a[_key2-2]=arguments[_key2];}return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t].concat(a)):new Error("\""+t+"\" "+e[t]+" may not be passed when layout is fullWidth.");},me=new Set(["fixed","fullWidth","constrained"]),fe={src:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,alt:ae,width:pe,height:pe,sizes:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),layout:e=>{if(void 0!==e.layout&&!me.has(e.layout))return new Error("Invalid value "+e.layout+"\" provided for prop \"layout\". Defaulting to \"constrained\". Valid values are \"fixed\", \"fullWidth\" or \"constrained\".");}};ge.displayName="StaticImage",ge.propTypes=fe;const we=ue(ce);we.displayName="StaticImage",we.propTypes=fe;

/***/ }),

/***/ 8771:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1883);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8032);
/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */const Bio=()=>{var _data$site$siteMetada,_data$site$siteMetada2;const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("3257411868");// Set these values by editing "siteMetadata" in gatsby-config.js
const author=(_data$site$siteMetada=data.site.siteMetadata)===null||_data$site$siteMetada===void 0?void 0:_data$site$siteMetada.author;const social=(_data$site$siteMetada2=data.site.siteMetadata)===null||_data$site$siteMetada2===void 0?void 0:_data$site$siteMetada2.social;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bio"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/gatsby-icon.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:__webpack_require__(6241)}),(author===null||author===void 0?void 0:author.name)&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Written by ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,author.name)," ",(author===null||author===void 0?void 0:author.summary)||null," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://twitter.com/"+((social===null||social===void 0?void 0:social.twitter)||"")},"You should follow them on Twitter")));};/* harmony default export */ __webpack_exports__.Z = (Bio);

/***/ }),

/***/ 8678:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1883);
const Layout=_ref=>{let{location,title,children}=_ref;const rootPath="/blog"+"/";const isRootPath=location.pathname===rootPath;let header;if(isRootPath){header=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"main-heading"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/"},title));}else{header=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"header-link-home",to:"/"},title);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"global-wrapper","data-is-root-path":isRootPath},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"global-header"},header),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",null,children),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer",null,"\xA9 ",new Date().getFullYear(),", Built with"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")));};/* harmony default export */ __webpack_exports__.Z = (Layout);

/***/ }),

/***/ 9357:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1883);
/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */const Seo=_ref=>{var _site$siteMetadata,_site$siteMetadata2,_site$siteMetadata2$s;let{description,title,children}=_ref;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("2841359383");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,defaultTitle?title+" | "+defaultTitle:title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:card",content:"summary"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:creator",content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:(_site$siteMetadata2$s=_site$siteMetadata2.social)===null||_site$siteMetadata2$s===void 0?void 0:_site$siteMetadata2$s.twitter)||""}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:description",content:metaDescription}),children);};/* harmony default export */ __webpack_exports__.Z = (Seo);

/***/ }),

/***/ 6241:
/***/ (function(module) {

module.exports = JSON.parse('{"layout":"fixed","backgroundColor":"#683898","images":{"fallback":{"src":"/blog/static/4a9773549091c227cd2eb82ccd9c5e3a/e5610/gatsby-icon.png","srcSet":"/blog/static/4a9773549091c227cd2eb82ccd9c5e3a/e5610/gatsby-icon.png 50w,\\n/blog/static/4a9773549091c227cd2eb82ccd9c5e3a/e9b55/gatsby-icon.png 100w","sizes":"50px"},"sources":[{"srcSet":"/blog/static/4a9773549091c227cd2eb82ccd9c5e3a/d4bf4/gatsby-icon.avif 50w,\\n/blog/static/4a9773549091c227cd2eb82ccd9c5e3a/ee81f/gatsby-icon.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/blog/static/4a9773549091c227cd2eb82ccd9c5e3a/3faea/gatsby-icon.webp 50w,\\n/blog/static/4a9773549091c227cd2eb82ccd9c5e3a/6a679/gatsby-icon.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}');

/***/ })

}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-637d15db9d564df2c08a.js.map