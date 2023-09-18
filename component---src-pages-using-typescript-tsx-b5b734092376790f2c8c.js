"use strict";
(self["webpackChunkgatsby_starter_blog"] = self["webpackChunkgatsby_starter_blog"] || []).push([[970],{

/***/ 8619:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: function() { return /* binding */ Head; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1883);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8678);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9357);
// If you don't want to use TypeScript you can delete this file!
const UsingTypescript=_ref=>{let{data,path,location}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{title:"Using TypeScript",location:location},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Gatsby supports TypeScript by default!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"This means that you can create and write ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,".ts/.tsx")," files for your pages, components, and ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"gatsby-*")," configuration files (for example ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"gatsby-config.ts"),")."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"For type checking you'll want to install ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em",null,"typescript")," via npm and run ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em",null,"tsc --init")," to create a ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em",null,"tsconfig")," file."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"You're currently on the page \"",path,"\" which was built on"," ",data.site.buildTime,"."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"To learn more, head over to our"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/"},"documentation about TypeScript"),"."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/"},"Go back to the homepage"));};const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{title:"Using TypeScript"});/* harmony default export */ __webpack_exports__["default"] = (UsingTypescript);const query="2907560070";

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

/***/ })

}]);
//# sourceMappingURL=component---src-pages-using-typescript-tsx-b5b734092376790f2c8c.js.map