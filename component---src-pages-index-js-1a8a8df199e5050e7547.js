"use strict";
(self["webpackChunkgatsby_starter_blog"] = self["webpackChunkgatsby_starter_blog"] || []).push([[678],{

/***/ 6558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: function() { return /* binding */ Head; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1883);
/* harmony import */ var _components_bio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8771);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8678);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9357);
const BlogIndex=_ref=>{var _data$site$siteMetada;let{data,location}=_ref;const siteTitle=((_data$site$siteMetada=data.site.siteMetadata)===null||_data$site$siteMetada===void 0?void 0:_data$site$siteMetada.title)||"Title";const posts=data.allMarkdownRemark.nodes;if(posts.length===0){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{location:location,title:siteTitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_bio__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"No blog posts found. Add markdown posts to \"content/blog\" (or the directory you specified for the \"gatsby-source-filesystem\" plugin in gatsby-config.js)."));}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{location:location,title:siteTitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_bio__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol",{style:{listStyle:"none"}},posts.map(post=>{const title=post.frontmatter.title||post.fields.slug;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:post.fields.slug},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article",{className:"post-list-item",itemScope:true,itemType:"http://schema.org/Article"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:post.fields.slug,itemProp:"url"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{itemProp:"headline"},title))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small",null,post.frontmatter.date)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{dangerouslySetInnerHTML:{__html:post.frontmatter.description||post.excerpt},itemProp:"description"}))));})));};/* harmony default export */ __webpack_exports__["default"] = (BlogIndex);/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{title:"All posts"});const pageQuery="3100300281";

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-1a8a8df199e5050e7547.js.map