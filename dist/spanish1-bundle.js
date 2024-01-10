/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../Documents/polices/strasua.otf */ "../../Documents/polices/strasua.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-size: 62.5%;
}

body {
  font-family: var(--font-family);
  color: var(--text);
  font-size: 1.6rem;
  width: 100%;
  overflow-x: hidden;
}

p {
  margin: 1rem 0;
  font-weight: 400 !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 1rem 0 2rem 0;
}

h2 {
  margin: 2rem 1rem;
}

h3 {
  font-weight: 400;
  margin: 1rem 0.5rem 1rem 0.5rem;
}

ul {
  list-style: none;
}

a {
  color: var(--text);
  text-decoration: none;
}

img {
  max-width: 100%;
}

.title-small {
  letter-spacing: 0.5rem;
  font-size: 1.6rem;
  font-family: var(--font-family-small);
}

.text-gras {
  font-weight: 700;
}

.first-link-text {
  margin: 0;
  color: var(--orange_01);
}

.text-decoration {
  color: var(--orange_01);
  font-weight: 400;
  letter-spacing: 0.5rem;
  font-family: var(--font-family-strasua);
}

/* Landscape phones and down */
/* Landscape phone to portrait tablet */
/* Portrait tablet to landscape and desktop */
/* Large desktop */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --font-family-strasua: "strasua";
  --font-family-title: "Cinzel Decorative", cursive;
  --font-family: "Nunito Sans", sans-serif;
  --text: #333;
  --blue: #6eb2bd;
  --orange_01: #df5b13;
  --orange_02: #fd8342;
  --green_01: #7ccbab;
  --green_02: #11a67e;
  --background: #d6d6d6;
  --box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
}

.mb_2 {
  margin-bottom: 2rem !important;
}

.mb_5 {
  margin-bottom: 5rem !important;
}

.mx_1 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.my_1 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.leader {
  color: var(--orange_01);
}

#menu-langue,
#menu-langue ul {
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
}

#menu-langue li {
  display: inline-block;
  position: relative;
  border-radius: 8px 8px 0 0;
}

#menu-langue ul li {
  display: inherit;
  border-radius: 0;
}

#menu-langue ul li:hover {
  border-radius: 0;
}

#menu-langue ul li:last-child {
  border-radius: 0 0 8px 8px;
}

#menu-langue ul {
  position: absolute;
  z-index: 1000;
  max-height: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  -moz-transition: 0.7s all 0.2s;
  -webkit-transition: 0.5s all 0.2s;
  transition: 0.5s all 0.2s;
}

#menu-langue li:hover ul {
  max-height: 15em;
}

/* background des liens menus */
/* background des liens sous menus */
#menu-langue li:last-child li {
  background: white;
}

/* background des liens menus et sous menus au survol */
#menu-langue li:last-child:hover {
  background: white;
}

#menu-langue li:last-child li:hover {
  transition: all 0.4s;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
}

/* les a href */
#menu-langue a {
  width: 15rem;
  text-decoration: none;
  display: block;
  padding: 8px 32px;
  font-family: arial;
}

#menu-langue ul a {
  padding: 8px 0;
  color: var(--orange_01);
}

#menu-langue li:hover li a {
  color: var(--orange_01);
  text-transform: inherit;
}

.menu-general,
.menu-general ul {
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
}

.menu-general li {
  display: inline-block;
  position: relative;
  transition: all 1s;
}
.menu-general li:hover {
  border-radius: 8px 8px 0 0;
}

.menu-general ul li {
  display: inherit;
  border-radius: 0;
}

.menu-general ul li:hover {
  border-radius: 0;
}

.menu-general ul li:last-child {
  border-radius: 0 0 8px 8px;
}

.menu-general ul {
  position: absolute;
  z-index: 1000;
  max-height: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  -moz-transition: 0.7s all 0.2s;
  -webkit-transition: 0.5s all 0.2s;
  transition: 0.5s all 0.2s;
}

.menu-general li:hover ul {
  max-height: 15em;
}

/* background des liens menus */
.menu-general li:last-child {
  background: linear-gradient(var(--green_01), var(--blue));
}

/* background des liens sous menus */
.menu-general li:last-child li {
  background: white;
}

/* background des liens menus et sous menus au survol */
.menu-general li:first-child {
  background: linear-gradient(var(--green_01), var(--blue));
}

.menu-general li:last-child li:hover {
  transition: all 0.4s;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
}

/* les a href */
.menu-general a {
  width: 32rem;
  text-decoration: none;
  display: block;
  padding: 8px 32px;
  font-family: var(--font-family-strasua);
  letter-spacing: 0.2rem;
  font-weight: 200;
  color: white;
}

.menu-general ul a {
  padding: 8px 0;
  color: white;
}

.menu-general li:hover li a {
  color: var(--blue);
  text-transform: inherit;
}

@font-face {
  font-family: "strasua";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(opentype);
}
.separator-1 {
  margin: 1rem 20rem;
  height: 6px;
  border-radius: 5px;
  width: 80rem;
  background-color: var(--green_01);
  animation-name: chargement;
  animation-duration: 1.8s;
}
@keyframes chargement {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

.separator-2 {
  position: fixed;
  top: 10rem;
  margin: 0;
  background: var(--green_02);
  height: 2px;
  width: 25rem;
  grid-area: separator-2;
  animation-name: separator-2;
  animation-duration: 1.8s;
  z-index: 2;
}
@keyframes separator-2 {
  from {
    transform: translateY(15rem);
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 480px) {
  .separator-2 {
    top: 8rem;
    width: 22rem;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .separator-2 {
    top: 8rem;
    width: 22rem;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .separator-2 {
    top: 8rem;
    width: 22rem;
  }
}

.separator-3 {
  position: fixed;
  top: 10rem;
  left: 25rem;
  margin: 0;
  background: var(--orange_01);
  height: 2px;
  width: 100%;
  grid-area: separator-3;
  animation-name: separator-3;
  animation-duration: 1.8s;
  z-index: 2;
}
@keyframes separator-3 {
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
@media (max-width: 480px) {
  .separator-3 {
    top: 8rem;
    left: 22rem;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .separator-3 {
    top: 8rem;
    left: 22rem;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .separator-3 {
    top: 8rem;
    left: 22rem;
  }
}

.separator-4 {
  height: 4rem;
  width: 1rem;
  margin: 0;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.separator-4.active::before {
  top: 0;
  transition-delay: 0.8s;
}

.separator-4::before {
  content: "";
  position: absolute;
  top: -4rem;
  background: var(--blue);
  height: 100%;
  width: 100%;
  transition: all 0.6s;
  z-index: -1;
}

.separator-6 {
  height: 4rem;
  width: 1rem;
  margin: 0;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.separator-6.active::before {
  transition-delay: 1.4s;
  top: 0;
}

.separator-6::before {
  content: "";
  position: absolute;
  top: -4rem;
  background: var(--blue);
  height: 100%;
  width: 100%;
  transition: all 0.6s;
  z-index: -1;
}

.separator-9 {
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  margin: 1rem 0;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.separator-9.active::before {
  transition-delay: 1.9s;
  left: 0;
}

.separator-9::before {
  content: "";
  position: absolute;
  left: -2rem;
  background: var(--blue);
  height: 100%;
  width: 100%;
  transition: all 0.8s;
  z-index: -1;
}

.separator-11 {
  height: 4rem;
  width: 1rem;
  margin: 0;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.separator-11.active::before {
  transition-delay: 2s;
  top: 0;
}

.separator-11::before {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  top: -4rem;
  background: var(--blue);
  transition: all 0.6s;
  z-index: -1;
}

.separator-14 {
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  margin: 1rem 0;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.separator-14.active::before {
  transition-delay: 1.9s;
  right: 0;
}

.separator-14::before {
  content: "";
  position: absolute;
  right: -2rem;
  background: var(--blue);
  height: 100%;
  width: 100%;
  transition: all 0.8s;
  z-index: -1;
}

.separator-15 {
  height: 4rem;
  width: 1rem;
  margin: 0;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.separator-15.active::before {
  transition-delay: 1.4s;
  top: 0;
}

.separator-15::before {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  top: -4rem;
  background: var(--blue);
  transition: all 0.6s;
  z-index: -1;
}

.separator-16 {
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  margin: 1rem 0;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.separator-16.active::before {
  transition-delay: 1s;
  top: 0;
}

.separator-16::before {
  content: "";
  position: absolute;
  top: -2rem;
  background: var(--blue);
  height: 100%;
  width: 100%;
  transition: all 1s;
  z-index: -1;
}

.separator-17 {
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  margin: 1rem 0;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.separator-17.active::before {
  transition-delay: 1s;
  top: 0;
}

.separator-17::before {
  content: "";
  position: absolute;
  top: -2rem;
  background: var(--blue);
  height: 100%;
  width: 100%;
  transition: all 1s;
  z-index: -1;
}

.separator-18 {
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  margin: 1rem 0;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.separator-18.active::before {
  transition-delay: 1s;
  top: 0;
}

.separator-18::before {
  content: "";
  position: absolute;
  top: -2rem;
  background: var(--blue);
  height: 100%;
  width: 100%;
  transition: all 1s;
  z-index: -1;
}

.separator-19 {
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  margin: 1rem 0;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.separator-19.active::before {
  transition-delay: 1s;
  top: 0;
}

.separator-19::before {
  content: "";
  position: absolute;
  top: -2rem;
  background: var(--blue);
  height: 100%;
  width: 100%;
  transition: all 1s;
  z-index: -1;
}

.separator-20 {
  margin-top: 4rem;
  height: 6px;
  width: 53.3rem;
  border-radius: 5px;
  background: var(--green_01);
  animation-name: chargement;
  animation-duration: 1.8s;
}
@keyframes chargement {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

.separator-container-2 {
  display: flex;
  align-items: center;
  margin: 0;
}

.content-separator-ligne {
  grid-area: separator-ligne;
  height: 4rem;
  width: 100%;
  display: flex;
  margin: 0 0 0 0;
}

.container-separator-ligne {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
}
.container-separator-ligne .separator-ligne-1 {
  margin: 0;
  height: 4rem;
  width: 50%;
  position: relative;
}
.container-separator-ligne .separator-ligne-1.active::before {
  width: 1%;
  border-radius: 3rem;
  margin-left: 1rem;
}
.container-separator-ligne .separator-ligne-1::before {
  content: "";
  position: absolute;
  background: var(--green_01);
  height: 4rem;
  width: 100%;
  transition: all 1s;
}
.container-separator-ligne .separator-ligne-2 {
  margin: 0;
  height: 4rem;
  width: 2rem;
  position: relative;
}
.container-separator-ligne .separator-ligne-2.active::before {
  width: 1rem;
  border-radius: 3rem;
  margin-right: 1rem;
}
.container-separator-ligne .separator-ligne-2::before {
  content: "";
  position: absolute;
  background: var(--green_01);
  height: 4rem;
  width: 106rem;
  right: 0;
  transition: all 1s;
}
@media (min-width: 2559px) {
  .container-separator-ligne .separator-ligne-2::before {
    width: 141.2rem;
  }
}

.container-separator-xs-1 {
  display: flex;
  justify-content: center;
  height: 2px;
  width: 100%;
  margin: 1rem 0.5rem;
}

.container-separator-xs-2 {
  display: flex;
  justify-content: center;
  height: 2px;
  width: 100%;
  margin: 0;
  margin: 0.5rem;
}

.separator-xs-1 {
  height: 2px;
  width: 75%;
  background: #ddd;
}

.separator-xs-2 {
  height: 2px;
  width: 60%;
  background: white;
}

.content-menu {
  position: sticky;
  top: 10.2rem;
  grid-area: menu;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background: #eee;
  z-index: 1;
  animation-name: content-menu;
  animation-duration: 3s;
  margin: 0;
}
@keyframes content-menu {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (max-width: 480px) {
  .content-menu {
    display: none;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .content-menu {
    display: none;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .content-menu {
    display: none;
  }
}

.menu-container {
  display: flex;
  margin: 0 1rem;
  height: 4rem;
  align-items: center;
}

.menu-container-general {
  position: absolute;
  top: 4rem;
  display: none;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 105rem;
  border-radius: 0 0 2rem 2rem;
  background: #eee;
  margin: 0;
  animation-name: containerMenu;
  animation-duration: 1.6s;
}
@keyframes containerMenu {
  0% {
    opacity: 0;
    transform: translateY(-5rem);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
}

.menu-content-general {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 32rem;
  background: linear-gradient(var(--green_01), var(--blue));
  border-radius: 3rem;
  margin: 0 2rem;
  cursor: default;
  transition: all 1s;
}
.menu-content-general:hover > .menu-container-general {
  display: flex;
}
.menu-content-general:hover {
  width: 100rem;
  border-radius: 2rem 2rem 0 0;
}

.titre {
  font-size: 1.8rem;
  font-family: var(--font-family-strasua);
  color: white;
  letter-spacing: 0.2rem;
}
.titre:hover {
  font-size: 2rem;
}

.titre-votre-besoins {
  font-size: 2rem;
  font-family: var(--font-family-strasua);
  color: white;
  letter-spacing: 0.2rem;
  cursor: default;
}

.titre-notre-reseau {
  font-size: 2rem;
  font-family: var(--font-family-strasua);
  color: white;
  letter-spacing: 0.2rem;
  cursor: pointer;
}
.titre-notre-reseau:hover {
  font-size: 2.2rem;
}

.border-radius-1 {
  border-radius: 0 0 0 8px;
}

.border-radius-3 {
  border-radius: 0 0 8px 0;
}

.menu-langue {
  margin-right: 1rem;
}
@media (max-width: 480px) {
  .menu-langue {
    display: none;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .menu-langue {
    display: none;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .menu-langue {
    display: none;
  }
}

.menu-xs,
.menu-xs-content {
  display: none;
}

@media (max-width: 480px) {
  .menu-xs {
    display: flex;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .menu-xs {
    display: flex;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .menu-xs {
    display: flex;
  }
}
.menu-xs {
  position: fixed;
  top: 3rem;
  right: 0;
  width: 10%;
  align-items: center;
  justify-content: flex-end;
  z-index: 5;
  animation: menu-xs 2s;
  margin: 0;
}
@keyframes menu-xs {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.menu-xs-content {
  position: fixed;
  display: none;
  top: 0rem;
  height: 100vh;
  width: 100%;
  margin: 0;
  background: white;
  z-index: 4;
  animation: menu-xs 0.8s;
}
.menu-xs-content.animate-open {
  animation: menu-xs-open 0.8s;
}
.menu-xs-content.animate-close {
  animation: menu-xs-close 0.8s;
}

.menu-xs-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}

.menu-xs-langue {
  display: flex;
  width: 100%;
  margin: 2.8rem 2rem 0 1rem;
}
.menu-xs-langue a {
  color: white;
  font-family: var(--font-family-strasua);
  letter-spacing: 0.2rem;
  font-size: 1.5rem;
  margin-left: 1rem;
}

.menu-xs-langue-content {
  z-index: 3;
  display: flex;
  margin: 0;
}

.menu-xs-langue-container {
  display: none;
  flex-direction: column;
  height: 10rem;
  width: 13rem;
  margin: 0;
  background: var(--orange_02);
  border-radius: 0.8rem;
  animation: menu-xs-langue-container-open 1s;
}
@keyframes menu-xs-langue-container-open {
  0% {
    width: 0;
    height: 2.5rem;
  }
  40% {
    height: 2.5rem;
  }
  50% {
    width: 13rem;
  }
  100% {
    height: 10rem;
  }
}

.menu-general-xs-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 2rem;
}
.menu-general-xs-content a {
  font-size: 2rem;
  font-family: var(--font-family-strasua);
  color: var(--orange_02);
  letter-spacing: 0.2rem;
}
@media (max-width: 480px) {
  .menu-general-xs-content a {
    width: 25rem;
  }
}

.menu-general-xs-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 1rem;
  text-align: center;
}

.animation-menu-general-xs-container {
  animation: animation-container-menu-general-xs 1.8s;
}

.menu-general-xs-content-opacity {
  opacity: 0;
}

.content-link-menu-general-xs {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  max-height: 38rem;
  width: 90%;
  margin: 0 1rem;
  border-radius: 3rem;
  background: var(--orange_02);
  animation: open-content-link-menu-general-xs 1s;
  margin: 0;
}
.content-link-menu-general-xs .link-menu-general-xs {
  margin: 0.5rem 0;
  font-size: 2rem;
  font-family: var(--font-family-strasua);
  color: white;
  letter-spacing: 0.2rem;
}

.animation-content-link-menu-general-xs {
  display: flex;
  flex-direction: column;
  margin: 0;
  animation: open-link-menu-general-xs 1s;
}

.link-menu-container-langue-xs {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0;
  margin-top: 5px;
}

.first-link-menu-xs-langue {
  font-family: var(--font-family-strasua);
  letter-spacing: 0.2rem;
  font-size: 1.5rem;
}

.link-menu-xs-langue {
  margin: 0.2rem 0;
}

.btn {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 2rem;
  width: 2rem;
  margin: 0 2rem 0 0;
}

.btn-barre {
  position: absolute;
  height: 0.2rem;
  width: 2.6rem;
  background: var(--orange_02);
  margin: 0;
  transition: all 0.8s;
}

.btn-barre-1 {
  transform-origin: 0 0;
  left: 1.5px;
}

.btn-barre-2 {
  top: 1.8rem;
  transform-origin: 0 100%;
  left: 1.5px;
}

.btn-open-menu-langue-xs {
  margin: 0 1rem 0 0;
}

.btn-close-menu-langue-xs-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  width: 100%;
  margin: 0;
  animation: btn-close-menu-langue-xs 1s;
}
@keyframes btn-close-menu-langue-xs {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.btn-close-menu-langue-xs-close {
  opacity: 0;
}

.btn-close-menu-langue-xs {
  margin: 0.8rem;
  color: white;
  font-size: 1.5rem;
}

.btn-open-close-content-link-menu-general-xs {
  margin-left: 1rem;
  font-size: 2rem;
  color: var(--orange_02);
  transition: all 1s;
}

@keyframes menu-xs-open {
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes menu-xs-close {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100vh);
  }
}
.first-animation-menu-general-xs {
  animation: first-animation-menu-general-xs 1.3s;
}
@keyframes first-animation-menu-general-xs {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}

@keyframes animation-container-menu-general-xs {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes open-content-link-menu-general-xs {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}
.close-content-link-menu-general-xs {
  animation: close-content-link-menu-general-xs 1s;
}
@keyframes close-content-link-menu-general-xs {
  0% {
    height: 20.8rem;
  }
  100% {
    height: 0;
  }
}

@keyframes open-link-menu-general-xs {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.close-link-menu-general-xs {
  animation: close-link-menu-general-xs 1s;
}
@keyframes close-link-menu-general-xs {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.animation-close-menu-langue-xs {
  animation: menu-xs-langue-container-close 1s;
}
@keyframes menu-xs-langue-container-close {
  0% {
    height: 10rem;
  }
  40% {
    width: 13rem;
  }
  50% {
    height: 2.5rem;
  }
  100% {
    height: 2.5rem;
    width: 0;
  }
}

.fa-globe {
  font-size: 2.5rem;
  color: var(--orange_02);
}

.mail-container {
  grid-area: mail;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  margin: 0;
}

.mail-content-1 {
  background: white;
  height: 5rem;
  width: calc(50% - 10rem);
  margin: 0;
  transform: translateX(-96rem);
  transition: all 1s;
  border-radius: 0 3rem 3rem 0;
  z-index: 0;
}
@media (max-width: 480px) {
  .mail-content-1 {
    transform: translateX(0);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .mail-content-1 {
    transform: translateX(0);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .mail-content-1 {
    transform: translateX(0);
  }
}
.mail-content-1.active {
  transform: translateX(0);
  border-radius: 0;
}

.mail-content-2 {
  background: white;
  height: 5rem;
  width: calc(50% - 10rem);
  margin: 0;
  transform: translateX(96rem);
  transition: all 1s;
  border-radius: 3rem 0 0 3rem;
  z-index: 0;
}
@media (max-width: 480px) {
  .mail-content-2 {
    transform: translateX(0);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .mail-content-2 {
    transform: translateX(0);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .mail-content-2 {
    transform: translateX(0);
  }
}
.mail-content-2.active {
  transform: translateX(0);
  border-radius: 0;
}

.contact {
  display: flex;
  justify-content: center;
  height: 5rem;
  width: 37.5rem;
  background-color: #eee;
  color: #eee;
  position: relative;
  overflow: hidden;
}
.contact p {
  font-family: var(--font-family);
  letter-spacing: 0.1rem;
  font-size: 2rem;
  font-weight: 400;
}
.contact:hover::before {
  opacity: 1;
}
.contact.active {
  background: white;
  color: var(--blue);
  transition: all 1s;
  transition-delay: 0.8s;
}

.contact::before {
  content: "contact@auro-it-consulting.com";
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--blue);
  background: white;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: all 1s;
  font-weight: 400;
  font-size: 1.8rem;
  font-family: var(--font-family);
  text-decoration: underline;
  letter-spacing: 0.1rem;
  border-radius: 0;
  opacity: 0;
}

header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  background: white;
  animation-name: header;
  animation-duration: 1.8s;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
}
@keyframes header {
  from {
    transform: translateY(-10rem);
  }
}
@media (max-width: 480px) {
  header {
    height: 8rem;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  header {
    height: 8rem;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  header {
    height: 8rem;
  }
}

.h1 {
  margin-top: 2rem;
  color: var(--green_02);
  font-family: var(--font-family-strasua);
  font-weight: 200;
  font-size: 3.1rem;
  letter-spacing: 0.2rem;
  margin-left: 2rem;
}
@media (max-width: 480px) {
  .h1 {
    display: none;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .h1 {
    display: none;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .h1 {
    display: none;
  }
}

.content-h1-xs {
  display: none;
}

@media (max-width: 480px) {
  .content-h1-xs {
    grid-area: h1-xs;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 1rem);
    margin: 0.5rem;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .content-h1-xs {
    grid-area: h1-xs;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 1rem);
    margin: 0.5rem;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .content-h1-xs {
    grid-area: h1-xs;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 1rem);
    margin: 0.5rem;
  }
}
.h1-xs {
  grid-area: h1-xs;
  color: var(--green_02);
  font-family: var(--font-family-strasua);
  font-weight: 200;
  font-size: 2.1rem;
  letter-spacing: 0.2rem;
}

.a-img {
  grid-area: img;
  height: 10rem;
  width: 25rem;
  animation-name: logo-1;
  animation-duration: 1.8s;
  position: sticky;
  top: 0;
  z-index: 2;
}
@keyframes logo-1 {
  from {
    transform: translateY(5rem);
  }
}
@media (max-width: 480px) {
  .a-img {
    height: 8rem;
    width: 22rem;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .a-img {
    height: 8rem;
    width: 22rem;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .a-img {
    height: 8rem;
    width: 22rem;
  }
}

.repere-content {
  position: absolute;
  right: 8rem;
  display: none;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 8rem;
  margin: 0;
}
@media (min-width: 910px) and (max-width: 1400px) {
  .repere-content {
    display: flex;
  }
}
.repere-content a {
  color: var(--orange_02);
  font-family: var(--font-family-strasua);
  font-weight: 200;
  font-size: 2rem;
  letter-spacing: 0.2rem;
}

footer {
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
}
footer.active::before {
  bottom: 0;
  border-radius: 0;
}

footer::before {
  content: "";
  position: absolute;
  bottom: -10rem;
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  transition: all 1s;
  z-index: -1;
}
@media (max-width: 480px) {
  footer::before {
    bottom: 0;
    border-radius: 0;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  footer::before {
    bottom: 0;
    border-radius: 0;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  footer::before {
    bottom: 0;
    border-radius: 0;
  }
}

.text-footer {
  font-family: var(--font-family-strasua);
  font-size: 1.8rem;
  letter-spacing: 0.2rem;
  color: #eee;
  margin: 0;
}
.text-footer.active {
  transition: all 2s;
  transition-delay: 1s;
  color: var(--orange_01);
}
@media (max-width: 480px) {
  .text-footer {
    color: var(--orange_01);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .text-footer {
    color: var(--orange_01);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .text-footer {
    color: var(--orange_01);
  }
}

.copyright {
  font-size: 2rem;
  font-weight: 700;
  color: #eee;
}
.copyright.active {
  transition: all 2s;
  transition-delay: 1s;
  color: var(--orange_01);
}
@media (max-width: 480px) {
  .copyright {
    color: var(--orange_01);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .copyright {
    color: var(--orange_01);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .copyright {
    color: var(--orange_01);
  }
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/_base.scss","webpack://./src/assets/styles/style.scss","webpack://./src/assets/styles/_classes.scss","webpack://./src/assets/styles/_media-queries.scss","webpack://./src/assets/styles/_reset.scss","webpack://./src/assets/styles/_variables.scss","webpack://./src/assets/styles/_utils.scss","webpack://./src/assets/styles/_menu-langue.scss","webpack://./src/assets/styles/_menu-general.scss","webpack://./src/assets/styles/_fonts.scss","webpack://./src/assets/styles/_separator.scss","webpack://./src/assets/styles/_menu.scss","webpack://./src/assets/styles/_contact.scss"],"names":[],"mappings":"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","sourcesContent":["html {\n  font-size: 62.5%;\n}\nbody {\n  font-family: var(--font-family);\n  color: var(--text);\n  font-size: 1.6rem;\n  width: 100%;\n  overflow-x: hidden;\n}\np {\n  margin: 1rem 0;\n  font-weight: 400 !important;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 1rem 0 2rem 0;\n}\nh2 {\n  margin: 2rem 1rem;\n}\nh3 {\n  font-weight: 400;\n  margin: 1rem 0.5rem 1rem 0.5rem;\n}\n\nul {\n  list-style: none;\n}\na {\n  color: var(--text);\n  text-decoration: none;\n}\nimg {\n  max-width: 100%;\n}\n","@use \"base\" as *;\r\n@use \"classes\" as *;\r\n@use \"media-queries\" as *;\r\n@use \"reset\" as *;\r\n@use \"variables\" as *;\r\n@use \"utils\" as *;\r\n@use \"menu-langue\" as *;\r\n@use \"menu-general\" as *;\r\n@use \"fonts\" as *;\r\n@use \"separator\" as *;\r\n@use \"menu\" as *;\r\n@use \"contact\" as *;\r\n\r\n// header\r\n\r\nheader {\r\n  grid-area: header;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 10rem;\r\n  background: white;\r\n  animation-name: header;\r\n  animation-duration: 1.8s;\r\n  width: 100%;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 2;\r\n\r\n  @keyframes header {\r\n    from {\r\n      transform: translateY(-10rem);\r\n    }\r\n    to {\r\n    }\r\n  }\r\n  @include xs {\r\n    height: 8rem;\r\n  }\r\n  @include sm {\r\n    height: 8rem;\r\n  }\r\n  @include md {\r\n    height: 8rem;\r\n  }\r\n}\r\n.h1 {\r\n  margin-top: 2rem;\r\n  color: var(--green_02);\r\n  font-family: var(--font-family-strasua);\r\n  font-weight: 200;\r\n  font-size: 3.1rem;\r\n  letter-spacing: 0.2rem;\r\n  margin-left: 2rem;\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    display: none;\r\n  }\r\n  @include md {\r\n    display: none;\r\n  }\r\n}\r\n\r\n// h1-xs\r\n\r\n.content-h1-xs {\r\n  display: none;\r\n}\r\n\r\n@include xs {\r\n  .content-h1-xs {\r\n    grid-area: h1-xs;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: calc(100% - 1rem);\r\n    margin: 0.5rem;\r\n  }\r\n}\r\n@include sm {\r\n  .content-h1-xs {\r\n    grid-area: h1-xs;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: calc(100% - 1rem);\r\n    margin: 0.5rem;\r\n  }\r\n}\r\n@include md {\r\n  .content-h1-xs {\r\n    grid-area: h1-xs;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: calc(100% - 1rem);\r\n    margin: 0.5rem;\r\n  }\r\n}\r\n.h1-xs {\r\n  grid-area: h1-xs;\r\n  color: var(--green_02);\r\n  font-family: var(--font-family-strasua);\r\n  font-weight: 200;\r\n  font-size: 2.1rem;\r\n  letter-spacing: 0.2rem;\r\n}\r\n\r\n// logo header\r\n\r\n.a-img {\r\n  grid-area: img;\r\n  height: 10rem;\r\n  width: 25rem;\r\n  animation-name: logo-1;\r\n  animation-duration: 1.8s;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 2;\r\n  @keyframes logo-1 {\r\n    from {\r\n      transform: translateY(5rem);\r\n    }\r\n    to {\r\n    }\r\n  }\r\n  @include xs {\r\n    height: 8rem;\r\n    width: 22rem;\r\n  }\r\n  @include sm {\r\n    height: 8rem;\r\n    width: 22rem;\r\n  }\r\n  @include md {\r\n    height: 8rem;\r\n    width: 22rem;\r\n  }\r\n}\r\n\r\n.repere-content {\r\n  position: absolute;\r\n  right: 8rem;\r\n  display: none;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 8rem;\r\n  margin: 0;\r\n  @include md {\r\n    display: flex;\r\n  }\r\n  a {\r\n    color: var(--orange_02);\r\n    font-family: var(--font-family-strasua);\r\n    font-weight: 200;\r\n    font-size: 2rem;\r\n    letter-spacing: 0.2rem;\r\n  }\r\n}\r\n// footer\r\n\r\nfooter {\r\n  grid-area: footer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 5rem;\r\n  position: relative;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n  &.active::before {\r\n    bottom: 0;\r\n    border-radius: 0;\r\n  }\r\n}\r\n\r\nfooter::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -10rem;\r\n  background-color: white;\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 3rem;\r\n  transition: all 1s;\r\n  z-index: -1;\r\n  @include xs {\r\n    bottom: 0;\r\n    border-radius: 0;\r\n  }\r\n  @include sm {\r\n    bottom: 0;\r\n    border-radius: 0;\r\n  }\r\n  @include md {\r\n    bottom: 0;\r\n    border-radius: 0;\r\n  }\r\n}\r\n\r\n.text-footer {\r\n  font-family: var(--font-family-strasua);\r\n  font-size: 1.8rem;\r\n  letter-spacing: 0.2rem;\r\n  color: #eee;\r\n  margin: 0;\r\n  &.active {\r\n    transition: all 2s;\r\n    transition-delay: 1s;\r\n    color: var(--orange_01);\r\n  }\r\n  @include xs {\r\n    color: var(--orange_01);\r\n  }\r\n  @include sm {\r\n    color: var(--orange_01);\r\n  }\r\n  @include md {\r\n    color: var(--orange_01);\r\n  }\r\n}\r\n\r\n.copyright {\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  color: #eee;\r\n  &.active {\r\n    transition: all 2s;\r\n    transition-delay: 1s;\r\n    color: var(--orange_01);\r\n  }\r\n  @include xs {\r\n    color: var(--orange_01);\r\n  }\r\n  @include sm {\r\n    color: var(--orange_01);\r\n  }\r\n  @include md {\r\n    color: var(--orange_01);\r\n  }\r\n}\r\n",".title {\n  &-small {\n    letter-spacing: 0.5rem;\n    font-size: 1.6rem;\n    font-family: var(--font-family-small);\n  }\n}\n.text-gras {\n  font-weight: 700;\n}\n.first-link-text {\n  margin: 0;\n  color: var(--orange_01);\n}\n.text-decoration {\n  color: var(--orange_01);\n  font-weight: 400;\n  letter-spacing: 0.5rem;\n  font-family: var(--font-family-strasua);\n}\n","/* Landscape phones and down */\r\n@mixin xs {\r\n  @media (max-width: 480px) {\r\n    @content;\r\n  }\r\n}\r\n/* Landscape phone to portrait tablet */\r\n@mixin sm {\r\n  @media (min-width: 480px) and (max-width: 909px) {\r\n    @content;\r\n  }\r\n}\r\n/* Portrait tablet to landscape and desktop */\r\n@mixin md {\r\n  @media (min-width: 910px) and (max-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n/* Large desktop */\r\n@mixin xl {\r\n  @media (min-width: 1200px) and (max-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin xxl {\r\n  @media (min-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n",":root {\r\n  // font-family\r\n  --font-family-strasua: \"strasua\";\r\n  --font-family-title: \"Cinzel Decorative\", cursive;\r\n  --font-family: \"Nunito Sans\", sans-serif;\r\n\r\n  // color\r\n  --text: #333;\r\n  --blue: #6eb2bd;\r\n  --orange_01: #df5b13;\r\n  --orange_02: #fd8342;\r\n  --green_01: #7ccbab;\r\n  --green_02: #11a67e;\r\n  --background: #d6d6d6;\r\n\r\n  // box-shadow\r\n  --box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),\r\n    0 1px 3px 1px rgba(60, 64, 67, 0.15);\r\n}\r\n",".mb_2 {\n  margin-bottom: 2rem !important;\n}\n.mb_5 {\n  margin-bottom: 5rem !important;\n}\n.mx_1 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.my_1 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n",".leader {\r\n  color: var(--orange_01);\r\n}\r\n\r\n#menu-langue,\r\n#menu-langue ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-align: center;\r\n}\r\n#menu-langue li {\r\n  display: inline-block;\r\n  position: relative;\r\n  border-radius: 8px 8px 0 0;\r\n}\r\n#menu-langue ul li {\r\n  display: inherit;\r\n  border-radius: 0;\r\n}\r\n#menu-langue ul li:hover {\r\n  border-radius: 0;\r\n}\r\n#menu-langue ul li:last-child {\r\n  border-radius: 0 0 8px 8px;\r\n}\r\n#menu-langue ul {\r\n  position: absolute;\r\n  z-index: 1000;\r\n  max-height: 0;\r\n  left: 0;\r\n  right: 0;\r\n  overflow: hidden;\r\n  -moz-transition: 0.7s all 0.2s;\r\n  -webkit-transition: 0.5s all 0.2s;\r\n  transition: 0.5s all 0.2s;\r\n}\r\n#menu-langue li:hover ul {\r\n  max-height: 15em;\r\n}\r\n/* background des liens menus */\r\n\r\n#menu-langue li:last-child {\r\n  // background: var(--orange_01);\r\n}\r\n/* background des liens sous menus */\r\n#menu-langue li:last-child li {\r\n  background: white;\r\n}\r\n/* background des liens menus et sous menus au survol */\r\n#menu-langue li:last-child:hover {\r\n  background: white;\r\n}\r\n#menu-langue li:last-child li:hover {\r\n  transition: all 0.4s;\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.2rem;\r\n}\r\n/* les a href */\r\n#menu-langue a {\r\n  width: 15rem;\r\n  text-decoration: none;\r\n  display: block;\r\n  padding: 8px 32px;\r\n  font-family: arial;\r\n}\r\n#menu-langue ul a {\r\n  padding: 8px 0;\r\n  color: var(--orange_01);\r\n}\r\n#menu-langue li:hover li a {\r\n  color: var(--orange_01);\r\n  text-transform: inherit;\r\n}\r\n",".menu-general,\r\n.menu-general ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-align: center;\r\n}\r\n.menu-general li {\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: all 1s;\r\n  &:hover {\r\n    border-radius: 8px 8px 0 0;\r\n  }\r\n}\r\n.menu-general ul li {\r\n  display: inherit;\r\n  border-radius: 0;\r\n}\r\n.menu-general ul li:hover {\r\n  border-radius: 0;\r\n}\r\n.menu-general ul li:last-child {\r\n  border-radius: 0 0 8px 8px;\r\n}\r\n.menu-general ul {\r\n  position: absolute;\r\n  z-index: 1000;\r\n  max-height: 0;\r\n  left: 0;\r\n  right: 0;\r\n  overflow: hidden;\r\n  -moz-transition: 0.7s all 0.2s;\r\n  -webkit-transition: 0.5s all 0.2s;\r\n  transition: 0.5s all 0.2s;\r\n}\r\n.menu-general li:hover ul {\r\n  max-height: 15em;\r\n}\r\n/* background des liens menus */\r\n\r\n.menu-general li:last-child {\r\n  background: linear-gradient(var(--green_01), var(--blue));\r\n}\r\n/* background des liens sous menus */\r\n.menu-general li:last-child li {\r\n  background: white;\r\n}\r\n/* background des liens menus et sous menus au survol */\r\n.menu-general li:first-child {\r\n  background: linear-gradient(var(--green_01), var(--blue));\r\n}\r\n.menu-general li:last-child li:hover {\r\n  transition: all 0.4s;\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.2rem;\r\n}\r\n/* les a href */\r\n.menu-general a {\r\n  width: 32rem;\r\n  text-decoration: none;\r\n  display: block;\r\n  padding: 8px 32px;\r\n  font-family: var(--font-family-strasua);\r\n  letter-spacing: 0.2rem;\r\n  font-weight: 200;\r\n  color: white;\r\n}\r\n.menu-general ul a {\r\n  padding: 8px 0;\r\n  color: white;\r\n}\r\n.menu-general li:hover li a {\r\n  color: var(--blue);\r\n  text-transform: inherit;\r\n}\r\n\r\n// .menu-demo2 li:hover a,\r\n// .menu-demo2 li li:hover a {\r\n// }\r\n","@font-face {\r\n  font-family: \"strasua\";\r\n  src: url(\"C:/Users/Azstras/OneDrive/Documents/polices/strasua.otf\")\r\n    format(opentype);\r\n}\r\n","@use \"media-queries\" as *;\r\n// separator\r\n\r\n.separator-1 {\r\n  margin: 1rem 20rem;\r\n  height: 6px;\r\n  border-radius: 5px;\r\n  width: 80rem;\r\n  background-color: var(--green_01);\r\n  animation-name: chargement;\r\n  animation-duration: 1.8s;\r\n  @keyframes chargement {\r\n    0% {\r\n      transform: scaleX(0);\r\n    }\r\n    100% {\r\n      transform: scaleX(1);\r\n    }\r\n  }\r\n}\r\n.separator-2 {\r\n  position: fixed;\r\n  top: 10rem;\r\n  margin: 0;\r\n  background: var(--green_02);\r\n  height: 2px;\r\n  width: 25rem;\r\n  grid-area: separator-2;\r\n  animation-name: separator-2;\r\n  animation-duration: 1.8s;\r\n  z-index: 2;\r\n  @keyframes separator-2 {\r\n    from {\r\n      transform: translateY(15rem);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  @include xs {\r\n    top: 8rem;\r\n    width: 22rem;\r\n  }\r\n  @include sm {\r\n    top: 8rem;\r\n    width: 22rem;\r\n  }\r\n  @include md {\r\n    top: 8rem;\r\n    width: 22rem;\r\n  }\r\n}\r\n.separator-3 {\r\n  position: fixed;\r\n  top: 10rem;\r\n  left: 25rem;\r\n  margin: 0;\r\n  background: var(--orange_01);\r\n  height: 2px;\r\n  width: 100%;\r\n  grid-area: separator-3;\r\n  animation-name: separator-3;\r\n  animation-duration: 1.8s;\r\n  z-index: 2;\r\n  @keyframes separator-3 {\r\n    from {\r\n      transform: scaleX(0);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n      transform: scaleX(1);\r\n    }\r\n  }\r\n  @include xs {\r\n    top: 8rem;\r\n    left: 22rem;\r\n  }\r\n  @include sm {\r\n    top: 8rem;\r\n    left: 22rem;\r\n  }\r\n  @include md {\r\n    top: 8rem;\r\n    left: 22rem;\r\n  }\r\n}\r\n\r\n.separator-4 {\r\n  height: 4rem;\r\n  width: 1rem;\r\n  // border-radius: 100%;\r\n  margin: 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    top: 0;\r\n    transition-delay: 0.8s;\r\n  }\r\n}\r\n.separator-4::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -4rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 0.6s;\r\n  z-index: -1;\r\n}\r\n.separator-6 {\r\n  height: 4rem;\r\n  width: 1rem;\r\n\r\n  margin: 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1.4s;\r\n    top: 0;\r\n  }\r\n}\r\n.separator-6::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -4rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 0.6s;\r\n  z-index: -1;\r\n}\r\n.separator-9 {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  border-radius: 100%;\r\n  margin: 1rem 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1.9s;\r\n    left: 0;\r\n  }\r\n}\r\n.separator-9::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: -2rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 0.8s;\r\n  z-index: -1;\r\n}\r\n\r\n.separator-11 {\r\n  height: 4rem;\r\n  width: 1rem;\r\n  margin: 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 2s;\r\n    top: 0;\r\n  }\r\n}\r\n\r\n.separator-11::before {\r\n  content: \"\";\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: -4rem;\r\n  background: var(--blue);\r\n  transition: all 0.6s;\r\n  z-index: -1;\r\n}\r\n\r\n.separator-14 {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  border-radius: 100%;\r\n  margin: 1rem 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1.9s;\r\n    right: 0;\r\n  }\r\n}\r\n.separator-14::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  right: -2rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 0.8s;\r\n  z-index: -1;\r\n}\r\n.separator-15 {\r\n  height: 4rem;\r\n  width: 1rem;\r\n  margin: 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1.4s;\r\n    top: 0;\r\n  }\r\n}\r\n.separator-15::before {\r\n  content: \"\";\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: -4rem;\r\n  background: var(--blue);\r\n  transition: all 0.6s;\r\n  z-index: -1;\r\n}\r\n.separator-16 {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  border-radius: 100%;\r\n  margin: 1rem 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1s;\r\n    top: 0;\r\n  }\r\n}\r\n.separator-16::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -2rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 1s;\r\n  z-index: -1;\r\n}\r\n.separator-17 {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  border-radius: 100%;\r\n  margin: 1rem 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1s;\r\n    top: 0;\r\n  }\r\n}\r\n.separator-17::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -2rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 1s;\r\n  z-index: -1;\r\n}\r\n.separator-18 {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  border-radius: 100%;\r\n  margin: 1rem 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1s;\r\n    top: 0;\r\n  }\r\n}\r\n.separator-18::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -2rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 1s;\r\n  z-index: -1;\r\n}\r\n.separator-19 {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  border-radius: 100%;\r\n  margin: 1rem 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1s;\r\n    top: 0;\r\n  }\r\n}\r\n.separator-19::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -2rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 1s;\r\n  z-index: -1;\r\n}\r\n\r\n.separator-20 {\r\n  margin-top: 4rem;\r\n  height: 6px;\r\n  width: 53.3rem;\r\n  border-radius: 5px;\r\n  background: var(--green_01);\r\n  animation-name: chargement;\r\n  animation-duration: 1.8s;\r\n  @keyframes chargement {\r\n    0% {\r\n      transform: scaleX(0);\r\n    }\r\n    100% {\r\n      transform: scaleX(1);\r\n    }\r\n  }\r\n}\r\n\r\n// separator-container\r\n\r\n.separator-container-2 {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0;\r\n}\r\n\r\n// separator-ligne\r\n\r\n.content-separator-ligne {\r\n  grid-area: separator-ligne;\r\n  height: 4rem;\r\n  width: 100%;\r\n  display: flex;\r\n  margin: 0 0 0 0;\r\n}\r\n\r\n.container-separator-ligne {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin: 0;\r\n\r\n  .separator-ligne-1 {\r\n    margin: 0;\r\n    height: 4rem;\r\n    width: 50%;\r\n    position: relative;\r\n    &.active::before {\r\n      width: 1%;\r\n      border-radius: 3rem;\r\n      margin-left: 1rem;\r\n    }\r\n  }\r\n  .separator-ligne-1::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background: var(--green_01);\r\n    // background: #d6d6d6;\r\n    height: 4rem;\r\n    width: 100%;\r\n    transition: all 1s;\r\n  }\r\n  .separator-ligne-2 {\r\n    margin: 0;\r\n    height: 4rem;\r\n    width: 2rem;\r\n    position: relative;\r\n    &.active::before {\r\n      width: 1rem;\r\n      border-radius: 3rem;\r\n      margin-right: 1rem;\r\n    }\r\n  }\r\n  .separator-ligne-2::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background: var(--green_01);\r\n    // background: #d6d6d6;\r\n    height: 4rem;\r\n    width: 106rem;\r\n    @include xxl {\r\n      width: 141.2rem;\r\n    }\r\n    right: 0;\r\n    transition: all 1s;\r\n  }\r\n}\r\n\r\n// separator xs\r\n\r\n.container-separator-xs-1 {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 2px;\r\n  width: 100%;\r\n  margin: 1rem 0.5rem;\r\n}\r\n.container-separator-xs-2 {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 2px;\r\n  width: 100%;\r\n  margin: 0;\r\n  margin: 0.5rem;\r\n}\r\n.separator-xs-1 {\r\n  height: 2px;\r\n  width: 75%;\r\n  background: #ddd;\r\n}\r\n.separator-xs-2 {\r\n  height: 2px;\r\n  width: 60%;\r\n  background: white;\r\n}\r\n","@use \"media-queries\" as *;\r\n\r\n.content-menu {\r\n  position: sticky;\r\n  top: 10.2rem;\r\n  grid-area: menu;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 5rem;\r\n  background: #eee;\r\n  z-index: 1;\r\n  animation-name: content-menu;\r\n  animation-duration: 3s;\r\n  margin: 0;\r\n  @keyframes content-menu {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    80% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    display: none;\r\n  }\r\n  @include md {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.menu-container {\r\n  display: flex;\r\n  margin: 0 1rem;\r\n  height: 4rem;\r\n  align-items: center;\r\n}\r\n\r\n.menu-container-general {\r\n  position: absolute;\r\n  top: 4rem;\r\n  display: none;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 10rem;\r\n  width: 105rem;\r\n  border-radius: 0 0 2rem 2rem;\r\n  background: #eee;\r\n  margin: 0;\r\n  animation-name: containerMenu;\r\n  animation-duration: 1.6s;\r\n\r\n  @keyframes containerMenu {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translateY(-5rem);\r\n    }\r\n    50% {\r\n      opacity: 0;\r\n    }\r\n\r\n    100% {\r\n      opacity: 1;\r\n      transform: translateY(0rem);\r\n    }\r\n  }\r\n}\r\n\r\n.menu-content-general {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 4rem;\r\n  width: 32rem;\r\n  background: linear-gradient(var(--green_01), var(--blue));\r\n  border-radius: 3rem;\r\n  margin: 0 2rem;\r\n  cursor: default;\r\n  transition: all 1s;\r\n  &:hover > .menu-container-general {\r\n    display: flex;\r\n  }\r\n  &:hover {\r\n    width: 100rem;\r\n    border-radius: 2rem 2rem 0 0;\r\n  }\r\n}\r\n\r\n.titre {\r\n  font-size: 1.8rem;\r\n  font-family: var(--font-family-strasua);\r\n  color: white;\r\n  letter-spacing: 0.2rem;\r\n  &:hover {\r\n    font-size: 2rem;\r\n  }\r\n}\r\n\r\n.titre-votre-besoins {\r\n  font-size: 2rem;\r\n  font-family: var(--font-family-strasua);\r\n  color: white;\r\n  letter-spacing: 0.2rem;\r\n  cursor: default;\r\n}\r\n.titre-notre-reseau {\r\n  font-size: 2rem;\r\n  font-family: var(--font-family-strasua);\r\n  color: white;\r\n  letter-spacing: 0.2rem;\r\n  cursor: pointer;\r\n  &:hover {\r\n    font-size: 2.2rem;\r\n  }\r\n}\r\n\r\n.border-radius-1 {\r\n  border-radius: 0 0 0 8px;\r\n}\r\n.border-radius-3 {\r\n  border-radius: 0 0 8px 0;\r\n}\r\n\r\n// menu-langue\r\n\r\n.menu-langue {\r\n  margin-right: 1rem;\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    display: none;\r\n  }\r\n  @include md {\r\n    display: none;\r\n  }\r\n}\r\n\r\n// menu mobiles\r\n\r\n.menu-xs,\r\n.menu-xs-content {\r\n  display: none;\r\n}\r\n\r\n@include xs {\r\n  .menu-xs {\r\n    display: flex;\r\n  }\r\n}\r\n@include sm {\r\n  .menu-xs {\r\n    display: flex;\r\n  }\r\n}\r\n@include md {\r\n  .menu-xs {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n.menu-xs {\r\n  position: fixed;\r\n  top: 3rem;\r\n  right: 0;\r\n  width: 10%;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  z-index: 5;\r\n  animation: menu-xs 2s;\r\n  margin: 0;\r\n  @keyframes menu-xs {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    40% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n// menu-xs-open\r\n\r\n.menu-xs-content {\r\n  position: fixed;\r\n  display: none;\r\n  top: 0rem;\r\n  height: 100vh;\r\n  width: 100%;\r\n  margin: 0;\r\n  background: white;\r\n  z-index: 4;\r\n  animation: menu-xs 0.8s;\r\n  &.animate-open {\r\n    animation: menu-xs-open 0.8s;\r\n  }\r\n\r\n  &.animate-close {\r\n    animation: menu-xs-close 0.8s;\r\n  }\r\n}\r\n\r\n.menu-xs-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin: 0;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n// menu langue xs\r\n\r\n.menu-xs-langue {\r\n  display: flex;\r\n  width: 100%;\r\n  margin: 2.8rem 2rem 0 1rem;\r\n  a {\r\n    color: white;\r\n    font-family: var(--font-family-strasua);\r\n    letter-spacing: 0.2rem;\r\n    font-size: 1.5rem;\r\n    margin-left: 1rem;\r\n  }\r\n}\r\n.menu-xs-langue-content {\r\n  z-index: 3;\r\n  display: flex;\r\n  margin: 0;\r\n}\r\n\r\n.menu-xs-langue-container {\r\n  display: none;\r\n  flex-direction: column;\r\n  height: 10rem;\r\n  width: 13rem;\r\n  margin: 0;\r\n  background: var(--orange_02);\r\n  border-radius: 0.8rem;\r\n\r\n  animation: menu-xs-langue-container-open 1s;\r\n  @keyframes menu-xs-langue-container-open {\r\n    0% {\r\n      width: 0;\r\n      height: 2.5rem;\r\n    }\r\n    40% {\r\n      height: 2.5rem;\r\n    }\r\n    50% {\r\n      width: 13rem;\r\n    }\r\n    100% {\r\n      height: 10rem;\r\n    }\r\n  }\r\n}\r\n\r\n// menu general xs\r\n\r\n.menu-general-xs-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  margin-top: 2rem;\r\n\r\n  a {\r\n    font-size: 2rem;\r\n    font-family: var(--font-family-strasua);\r\n    color: var(--orange_02);\r\n    letter-spacing: 0.2rem;\r\n    @include xs {\r\n      width: 25rem;\r\n    }\r\n  }\r\n}\r\n.menu-general-xs-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 1.5rem 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.animation-menu-general-xs-container {\r\n  animation: animation-container-menu-general-xs 1.8s;\r\n}\r\n.menu-general-xs-content-opacity {\r\n  opacity: 0;\r\n}\r\n\r\n.content-link-menu-general-xs {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  height: 100%;\r\n  max-height: 38rem;\r\n  width: 90%;\r\n  margin: 0 1rem;\r\n  border-radius: 3rem;\r\n  background: var(--orange_02);\r\n  animation: open-content-link-menu-general-xs 1s;\r\n  margin: 0;\r\n  .link-menu-general-xs {\r\n    margin: 0.5rem 0;\r\n    font-size: 2rem;\r\n    font-family: var(--font-family-strasua);\r\n    color: white;\r\n    letter-spacing: 0.2rem;\r\n  }\r\n}\r\n\r\n.animation-content-link-menu-general-xs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  animation: open-link-menu-general-xs 1s;\r\n}\r\n\r\n// link\r\n\r\n// link menu langue xs\r\n\r\n.link-menu-container-langue-xs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  margin: 0;\r\n  margin-top: 5px;\r\n}\r\n\r\n.first-link-menu-xs-langue {\r\n  font-family: var(--font-family-strasua);\r\n  letter-spacing: 0.2rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.link-menu-xs-langue {\r\n  margin: 0.2rem 0;\r\n}\r\n\r\n// btn\r\n\r\n// btn-menu-xs\r\n\r\n.btn {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: 2rem;\r\n  width: 2rem;\r\n  margin: 0 2rem 0 0;\r\n}\r\n.btn-barre {\r\n  position: absolute;\r\n  height: 0.2rem;\r\n  width: 2.6rem;\r\n  background: var(--orange_02);\r\n  margin: 0;\r\n  transition: all 0.8s;\r\n}\r\n.btn-barre-1 {\r\n  transform-origin: 0 0;\r\n  left: 1.5px;\r\n}\r\n.btn-barre-2 {\r\n  top: 1.8rem;\r\n  transform-origin: 0 100%;\r\n  left: 1.5px;\r\n}\r\n\r\n// btn menu langue xs\r\n\r\n.btn-open-menu-langue-xs {\r\n  margin: 0 1rem 0 0;\r\n}\r\n.btn-close-menu-langue-xs-content {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 2.5rem;\r\n  width: 100%;\r\n  margin: 0;\r\n\r\n  animation: btn-close-menu-langue-xs 1s;\r\n  @keyframes btn-close-menu-langue-xs {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n.btn-close-menu-langue-xs-close {\r\n  opacity: 0;\r\n}\r\n\r\n.btn-close-menu-langue-xs {\r\n  margin: 0.8rem;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n// btn menu general xs\r\n.btn-open-close-content-link-menu-general-xs {\r\n  margin-left: 1rem;\r\n  font-size: 2rem;\r\n  color: var(--orange_02);\r\n  transition: all 1s;\r\n}\r\n\r\n// animation\r\n\r\n@keyframes menu-xs-open {\r\n  0% {\r\n    transform: translateY(-100vh);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes menu-xs-close {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(-100vh);\r\n  }\r\n}\r\n\r\n// animation menu general xs\r\n\r\n.first-animation-menu-general-xs {\r\n  animation: first-animation-menu-general-xs 1.3s;\r\n  @keyframes first-animation-menu-general-xs {\r\n    0% {\r\n      transform: scaleY(0);\r\n    }\r\n    80% {\r\n      transform: scaleY(0);\r\n    }\r\n    100% {\r\n      transform: scaleY(1);\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes animation-container-menu-general-xs {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  80% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes open-content-link-menu-general-xs {\r\n  0% {\r\n    height: 0;\r\n  }\r\n  100% {\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.close-content-link-menu-general-xs {\r\n  animation: close-content-link-menu-general-xs 1s;\r\n  @keyframes close-content-link-menu-general-xs {\r\n    0% {\r\n      height: 20.8rem;\r\n    }\r\n    100% {\r\n      height: 0;\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes open-link-menu-general-xs {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  30% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n.close-link-menu-general-xs {\r\n  animation: close-link-menu-general-xs 1s;\r\n  @keyframes close-link-menu-general-xs {\r\n    0% {\r\n      opacity: 1;\r\n    }\r\n    50% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n}\r\n\r\n// animation menu langue xs\r\n\r\n.animation-close-menu-langue-xs {\r\n  animation: menu-xs-langue-container-close 1s;\r\n  @keyframes menu-xs-langue-container-close {\r\n    0% {\r\n      height: 10rem;\r\n    }\r\n    40% {\r\n      width: 13rem;\r\n    }\r\n    50% {\r\n      height: 2.5rem;\r\n    }\r\n    100% {\r\n      height: 2.5rem;\r\n      width: 0;\r\n    }\r\n  }\r\n}\r\n// divers - menu\r\n\r\n.fa-globe {\r\n  font-size: 2.5rem;\r\n  color: var(--orange_02);\r\n}\r\n","@use \"media-queries\" as *;\r\n.mail-container {\r\n  grid-area: mail;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 5rem;\r\n  margin: 0;\r\n}\r\n\r\n.mail-content-1 {\r\n  background: white;\r\n  height: 5rem;\r\n  width: calc(50% - 10rem);\r\n  margin: 0;\r\n  transform: translateX(-96rem);\r\n  transition: all 1s;\r\n  border-radius: 0 3rem 3rem 0;\r\n  z-index: 0;\r\n  @include xs {\r\n    transform: translateX(0);\r\n  }\r\n  @include sm {\r\n    transform: translateX(0);\r\n  }\r\n  @include md {\r\n    transform: translateX(0);\r\n  }\r\n  &.active {\r\n    transform: translateX(0);\r\n    border-radius: 0;\r\n  }\r\n}\r\n.mail-content-2 {\r\n  background: white;\r\n  height: 5rem;\r\n  width: calc(50% - 10rem);\r\n  margin: 0;\r\n  transform: translateX(96rem);\r\n  transition: all 1s;\r\n  border-radius: 3rem 0 0 3rem;\r\n  z-index: 0;\r\n  @include xs {\r\n    transform: translateX(0);\r\n  }\r\n  @include sm {\r\n    transform: translateX(0);\r\n  }\r\n  @include md {\r\n    transform: translateX(0);\r\n  }\r\n  &.active {\r\n    transform: translateX(0);\r\n    border-radius: 0;\r\n  }\r\n}\r\n\r\n.contact {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 5rem;\r\n  width: 37.5rem;\r\n  background-color: #eee;\r\n  color: #eee;\r\n  position: relative;\r\n  overflow: hidden;\r\n  p {\r\n    font-family: var(--font-family);\r\n    letter-spacing: 0.1rem;\r\n    font-size: 2rem;\r\n    font-weight: 400;\r\n  }\r\n  &:hover::before {\r\n    opacity: 1;\r\n  }\r\n  &.active {\r\n    background: white;\r\n    color: var(--blue);\r\n    transition: all 1s;\r\n    transition-delay: 0.8s;\r\n  }\r\n}\r\n\r\n.contact::before {\r\n  content: \"contact@auro-it-consulting.com\";\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--blue);\r\n  background: white;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  transition: all 1s;\r\n  font-weight: 400;\r\n  font-size: 1.8rem;\r\n  font-family: var(--font-family);\r\n  text-decoration: underline;\r\n  letter-spacing: 0.1rem;\r\n  border-radius: 0;\r\n  opacity: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/spanish/spanish.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/spanish/spanish.scss ***!
  \*********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Landscape phones and down */
/* Landscape phone to portrait tablet */
/* Portrait tablet to landscape and desktop */
/* Large desktop */
/* Landscape phones and down */
/* Landscape phone to portrait tablet */
/* Portrait tablet to landscape and desktop */
/* Large desktop */
.logo-content {
  grid-area: slogan-container;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70rem;
}
@media (max-width: 480px) {
  .logo-content {
    display: none;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .logo-content {
    display: none;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .logo-content {
    display: none;
  }
}
@media (min-width: 2559px) {
  .logo-content {
    height: 104rem;
  }
}

.logo-container {
  margin-top: 1rem;
  margin-bottom: 2rem;
  animation-name: logo-2;
  animation-duration: 1.8s;
}
@keyframes logo-2 {
  from {
    transform: scaley(0);
  }
  to {
    transform: scaley(1);
  }
}
.logo-container .logo-2 {
  height: 25rem;
  width: 60rem;
}

.slogan-container {
  align-items: center;
  justify-content: center;
  display: flex;
  min-width: 30rem;
  border-radius: 0.8rem;
  animation-name: apparition;
  text-align: center;
}

.h2 {
  margin-left: 2rem;
  margin-top: 3rem;
  color: var(--blue);
  font-family: var(--font-family-strasua);
  font-weight: 200;
  font-size: 3.1rem;
  letter-spacing: 0.5rem;
  animation-name: h2;
  animation-duration: 1.8s;
}
@keyframes h2 {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

div {
  display: flex;
}

div {
  margin: 0 1rem;
}

.container {
  display: grid;
  background: #eee;
  width: 100%;
  grid: "img header" 10rem "separator-2 separator-3" auto "slogan-container slogan-container" auto "menu menu" auto "general general" auto "mail mail" auto "footer footer" auto/25rem auto;
}
@media (max-width: 480px) {
  .container {
    grid: "img header" 8rem "menu-xs menu-xs" auto "separator-2 separator-3" auto "slogan-container slogan-container" auto "h1-xs h1-xs" auto "menu menu" auto "general general" auto "mail mail" auto "footer footer" auto/22rem auto;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .container {
    grid: "img header" 8rem "menu-xs menu-xs" auto "separator-2 separator-3" auto "slogan-container slogan-container" auto "h1-xs h1-xs" auto "menu menu" auto "general general" auto "mail mail" auto "footer footer" auto/22rem auto;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .container {
    grid: "img header" 8rem "menu-xs menu-xs" auto "separator-2 separator-3" auto "slogan-container slogan-container" auto "h1-xs h1-xs" auto "menu menu" auto "general general" auto "mail mail" auto "footer footer" auto/22rem auto;
  }
}

.general-content {
  grid-area: general;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
}
.general-content .text-content-1 {
  margin: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  background: #d6d6d6;
}
@media (max-width: 480px) {
  .general-content .text-content-1 {
    margin: 0;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-content-1 {
    margin: 0;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-content-1 {
    margin: 0;
  }
}
.general-content .sous-titre-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  border-radius: 3rem;
  color: var(--orange_01);
  position: relative;
  z-index: 0;
  overflow: hidden;
  margin-top: 4rem !important;
}
@media (max-width: 480px) {
  .general-content .sous-titre-1 {
    width: calc(100% - 4rem);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .sous-titre-1 {
    width: calc(100% - 4rem);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .sous-titre-1 {
    width: calc(100% - 4rem);
  }
}
.general-content .sous-titre-1.active::before {
  top: 0;
}
.general-content .sous-titre-1::before {
  content: "";
  position: absolute;
  top: -4rem;
  background: var(--green_01);
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  transition: all 0.8s;
  z-index: -1;
}
@media (max-width: 480px) {
  .general-content .sous-titre-1::before {
    top: 0;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .sous-titre-1::before {
    top: 0;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .sous-titre-1::before {
    top: 0;
  }
}
.general-content .text-container-1 {
  margin: 2rem;
  height: 28rem;
  width: 110rem;
  border-radius: 3rem;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
@media (max-width: 480px) {
  .general-content .text-container-1 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-container-1 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-container-1 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
.general-content .text-container-1.active::before {
  top: 0;
}
.general-content .text-container-1 p {
  color: white;
  margin: 0 2rem;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
.general-content .text-container-1::before {
  content: "";
  position: absolute;
  top: -28rem;
  background: var(--green_01);
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  transition: all 0.8s;
  z-index: -1;
}
@media (max-width: 480px) {
  .general-content .text-container-1::before {
    top: 0;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-container-1::before {
    top: 0;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-container-1::before {
    top: 0;
  }
}
.general-content .sous-titre-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38rem;
  border-radius: 3rem;
  color: var(--orange_01);
  position: relative;
  z-index: 0;
  overflow: hidden;
}
@media (max-width: 480px) {
  .general-content .sous-titre-2 {
    width: calc(100% - 4rem);
    font-size: 1.8rem;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .sous-titre-2 {
    width: calc(100% - 4rem);
    font-size: 1.8rem;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .sous-titre-2 {
    width: calc(100% - 4rem);
    font-size: 1.8rem;
  }
}
.general-content .sous-titre-2.active::before {
  top: 0;
}
.general-content .sous-titre-2::before {
  content: "";
  position: absolute;
  top: -4rem;
  background: var(--green_01);
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  transition: all 0.8s;
  z-index: -1;
}
@media (max-width: 480px) {
  .general-content .sous-titre-2::before {
    top: 0;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .sous-titre-2::before {
    top: 0;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .sous-titre-2::before {
    top: 0;
  }
}
.general-content .text-container-2 {
  display: flex;
  flex-direction: row nowrap;
  margin: 0;
}
@media (max-width: 480px) {
  .general-content .text-container-2 {
    flex-direction: column;
    height: 80rem;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-container-2 {
    flex-direction: column;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-container-2 {
    flex-direction: column;
  }
}
.general-content .div-text-container-1 {
  display: flex;
  align-items: center;
  border-radius: 3rem;
  flex: 1;
  height: auto;
  width: auto;
  margin: 2rem;
  margin: 2rem;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
@media (max-width: 480px) {
  .general-content .div-text-container-1 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .div-text-container-1 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .div-text-container-1 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
.general-content .div-text-container-1.active::before {
  right: 0;
}
.general-content .div-text-container-1 p {
  color: white;
  margin: 0 2rem;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  font-weight: 700;
}
@media (max-width: 480px) {
  .general-content .div-text-container-1 p {
    margin: 2rem;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .div-text-container-1 p {
    margin: 2rem;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .div-text-container-1 p {
    margin: 2rem;
  }
}
.general-content .div-text-container-1::before {
  content: "";
  position: absolute;
  right: -100%;
  background: var(--green_01);
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  transition: all 0.8s;
  z-index: -1;
}
@media (max-width: 480px) {
  .general-content .div-text-container-1::before {
    right: 0;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .div-text-container-1::before {
    right: 0;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .div-text-container-1::before {
    right: 0;
  }
}
.general-content .div-text-container-2 {
  display: flex;
  align-items: center;
  border-radius: 3rem;
  flex: 1;
  height: auto;
  width: auto;
  margin: 2rem;
  margin: 2rem;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
@media (max-width: 480px) {
  .general-content .div-text-container-2 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .div-text-container-2 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .div-text-container-2 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
.general-content .div-text-container-2.active::before {
  top: 0;
}
.general-content .div-text-container-2 p {
  color: white;
  margin: 2rem;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  font-weight: 700;
}
@media (max-width: 480px) {
  .general-content .div-text-container-2 p {
    margin: 2rem;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .div-text-container-2 p {
    margin: 2rem;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .div-text-container-2 p {
    margin: 2rem;
  }
}
.general-content .div-text-container-2::before {
  content: "";
  position: absolute;
  top: -20rem;
  background: var(--green_01);
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  transition: all 0.8s;
  z-index: -1;
}
@media (max-width: 480px) {
  .general-content .div-text-container-2::before {
    top: 0;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .div-text-container-2::before {
    top: 0;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .div-text-container-2::before {
    top: 0;
  }
}
.general-content .div-text-container-3 {
  display: flex;
  border-radius: 3rem;
  flex: 1;
  height: auto;
  width: auto;
  margin: 2rem;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
@media (max-width: 480px) {
  .general-content .div-text-container-3 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .div-text-container-3 {
    min-height: 18rem;
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .div-text-container-3 {
    min-height: 18rem;
    height: auto;
    width: calc(100% - 4rem);
  }
}
.general-content .div-text-container-3.active::before {
  left: 0;
}
.general-content .div-text-container-3 p {
  color: white;
  margin: 2rem 2rem 1rem 2rem;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  font-weight: 700;
}
@media (max-width: 480px) {
  .general-content .div-text-container-3 p {
    margin: 2rem;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .div-text-container-3 p {
    margin: 2rem;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .div-text-container-3 p {
    margin: 2rem;
  }
}
.general-content .div-text-container-3::before {
  content: "";
  position: absolute;
  left: -100%;
  background: var(--green_01);
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  transition: all 1s;
  z-index: -1;
}
@media (max-width: 480px) {
  .general-content .div-text-container-3::before {
    left: 0;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .div-text-container-3::before {
    left: 0;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .div-text-container-3::before {
    left: 0;
  }
}
.general-content .text-container-3 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  width: 58rem;
  border-radius: 3rem;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
@media (max-width: 480px) {
  .general-content .text-container-3 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-container-3 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-container-3 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
.general-content .text-container-3.active::before {
  top: 0;
}
.general-content .text-container-3 p {
  color: white;
  margin: 1rem 2rem 1rem 2rem;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  font-weight: 700;
}
@media (max-width: 480px) {
  .general-content .text-container-3 p {
    margin: 2rem;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-container-3 p {
    margin: 2rem;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-container-3 p {
    margin: 2rem;
  }
}
.general-content .text-container-3::before {
  content: "";
  position: absolute;
  top: -28rem;
  background: var(--green_01);
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  transition: all 1.8s;
  z-index: -1;
}
@media (max-width: 480px) {
  .general-content .text-container-3::before {
    top: 0;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-container-3::before {
    top: 0;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-container-3::before {
    top: 0;
  }
}
.general-content .text-container-4 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  width: 50rem;
  border-radius: 3rem;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
@media (max-width: 480px) {
  .general-content .text-container-4 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-container-4 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-container-4 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
.general-content .text-container-4.active::before {
  top: 0;
}
.general-content .text-container-4 p {
  color: white;
  margin: 1rem 2rem 1rem 2rem;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  font-weight: 700;
}
@media (max-width: 480px) {
  .general-content .text-container-4 p {
    margin: 2rem;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-container-4 p {
    margin: 2rem;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-container-4 p {
    margin: 2rem;
  }
}
.general-content .text-container-4::before {
  content: "";
  position: absolute;
  top: -28rem;
  background: var(--green_01);
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  transition: all 1.8s;
  z-index: -1;
}
@media (max-width: 480px) {
  .general-content .text-container-4::before {
    top: 0;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-container-4::before {
    top: 0;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-container-4::before {
    top: 0;
  }
}
.general-content .text-content-2 {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  background: #d6d6d6;
}
.general-content .sous-titre-3 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  border-radius: 3rem;
  color: var(--orange_01);
  position: relative;
  z-index: 0;
  overflow: hidden;
}
@media (max-width: 480px) {
  .general-content .sous-titre-3 {
    width: calc(100% - 4rem);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .sous-titre-3 {
    width: calc(100% - 4rem);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .sous-titre-3 {
    width: calc(100% - 4rem);
  }
}
.general-content .sous-titre-3.active::before {
  top: 0;
}
.general-content .sous-titre-3::before {
  content: "";
  position: absolute;
  top: -4rem;
  background: var(--green_01);
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  transition: all 1s;
  z-index: -1;
}
@media (max-width: 480px) {
  .general-content .sous-titre-3::before {
    top: 0;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .sous-titre-3::before {
    top: 0;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .sous-titre-3::before {
    top: 0;
  }
}
.general-content .text-container-5 {
  height: auto;
  width: auto;
  max-width: 100rem;
  border-radius: 3rem;
  color: white;
  background: var(--green_01);
  opacity: 0;
}
@media (max-width: 480px) {
  .general-content .text-container-5 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-container-5 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-container-5 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
.general-content .text-container-5 p {
  margin: 2rem 2rem;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  font-weight: 700;
}
.general-content .animation-text-container-5 {
  animation: animation-text-container-5 2s;
  opacity: 1;
}
@keyframes animation-text-container-5 {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.general-content .text-container-6 {
  height: auto;
  width: auto;
  max-width: 100rem;
  background: var(--green_01);
  color: white;
  border-radius: 3rem;
  opacity: 0;
}
@media (max-width: 480px) {
  .general-content .text-container-6 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-container-6 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-container-6 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
.general-content .text-container-6 p {
  margin: 2rem 2rem;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  font-weight: 700;
}
.general-content .animation-text-container-6 {
  animation: animation-text-container-6 2s;
  opacity: 1;
}
@keyframes animation-text-container-6 {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.general-content .text-container-7 {
  height: auto;
  width: auto;
  max-width: 100rem;
  background: var(--green_01);
  color: white;
  border-radius: 3rem;
  opacity: 0;
}
@media (max-width: 480px) {
  .general-content .text-container-7 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-container-7 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-container-7 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
.general-content .text-container-7 p {
  margin: 2rem 2rem;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  font-weight: 700;
}
.general-content .animation-text-container-7 {
  animation: animation-text-container-7 2s;
  opacity: 1;
}
@keyframes animation-text-container-7 {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.general-content .text-container-8 {
  height: auto;
  width: auto;
  max-width: 100rem;
  background: var(--green_01);
  color: white;
  border-radius: 3rem;
  margin-bottom: 4rem !important;
  opacity: 0;
}
@media (max-width: 480px) {
  .general-content .text-container-8 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .general-content .text-container-8 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .general-content .text-container-8 {
    height: auto;
    width: calc(100% - 4rem);
  }
}
.general-content .text-container-8 p {
  margin: 2rem 2rem;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  font-weight: 700;
}
.general-content .animation-text-container-8 {
  animation: animation-text-container-8 2s;
  opacity: 1;
}
@keyframes animation-text-container-8 {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.general-content .sous-titre {
  font-weight: 400;
  letter-spacing: 0.5rem;
  font-family: var(--font-family-strasua);
}

.text-decoration-1 {
  font-family: var(--font-family-strasua);
  letter-spacing: 0.5rem;
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--orange_01);
}

.text-1 {
  color: none;
  opacity: 0;
}
.text-1.active {
  color: var(--orange_01);
  transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);
  transition-delay: 0.8;
  opacity: 1;
}
@media (max-width: 480px) {
  .text-1 {
    opacity: 1;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .text-1 {
    opacity: 1;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .text-1 {
    opacity: 1;
  }
}

.text-2 {
  color: none;
  opacity: 0;
}
.text-2.active {
  color: white;
  transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);
  transition-delay: 0.8s;
  opacity: 1;
}
@media (max-width: 480px) {
  .text-2 {
    opacity: 1;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .text-2 {
    opacity: 1;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .text-2 {
    opacity: 1;
  }
}

.text-3 {
  color: none;
  opacity: 0;
}
.text-3.active {
  color: var(--orange_01);
  transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);
  transition-delay: 0.8s;
  opacity: 1;
}
@media (max-width: 480px) {
  .text-3 {
    opacity: 1;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .text-3 {
    opacity: 1;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .text-3 {
    opacity: 1;
  }
}

.text-4 {
  color: none;
  opacity: 0;
}
.text-4.active {
  color: white;
  transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);
  transition-delay: 0.8s;
  opacity: 1;
}
@media (max-width: 480px) {
  .text-4 {
    opacity: 1;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .text-4 {
    opacity: 1;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .text-4 {
    opacity: 1;
  }
}

.text-5 {
  color: none;
  opacity: 0;
}
.text-5.active {
  color: white;
  transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);
  transition-delay: 0.8s;
  opacity: 1;
}
@media (max-width: 480px) {
  .text-5 {
    opacity: 1;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .text-5 {
    opacity: 1;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .text-5 {
    opacity: 1;
  }
}

.text-6 {
  color: none;
  opacity: 0;
}
.text-6.active {
  color: white;
  transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);
  transition-delay: 0.8s;
  opacity: 1;
}
@media (max-width: 480px) {
  .text-6 {
    opacity: 1;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .text-6 {
    opacity: 1;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .text-6 {
    opacity: 1;
  }
}

.text-7 {
  color: none;
  opacity: 0;
  width: 100%;
}
.text-7.active {
  color: white;
  transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);
  transition-delay: 0.8s;
  opacity: 1;
}
@media (max-width: 480px) {
  .text-7 {
    opacity: 1;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .text-7 {
    opacity: 1;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .text-7 {
    opacity: 1;
  }
}

.text-8 {
  color: none;
  opacity: 0;
}
.text-8.active {
  color: white;
  transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);
  transition-delay: 0.8s;
  opacity: 1;
}
@media (max-width: 480px) {
  .text-8 {
    opacity: 1;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .text-8 {
    opacity: 1;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .text-8 {
    opacity: 1;
  }
}

.text-9 {
  color: none;
  opacity: 0;
}
.text-9.active {
  color: var(--orange_01);
  transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);
  transition-delay: 0.8s;
  opacity: 1;
}
@media (max-width: 480px) {
  .text-9 {
    opacity: 1;
  }
}
@media (min-width: 480px) and (max-width: 909px) {
  .text-9 {
    opacity: 1;
  }
}
@media (min-width: 910px) and (max-width: 1400px) {
  .text-9 {
    opacity: 1;
  }
}

div {
  margin: 2rem 0;
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/_media-queries.scss","webpack://./src/assets/styles/_logo-slogan.scss","webpack://./src/spanish/spanish.scss"],"names":[],"mappings":"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","sourcesContent":["/* Landscape phones and down */\r\n@mixin xs {\r\n  @media (max-width: 480px) {\r\n    @content;\r\n  }\r\n}\r\n/* Landscape phone to portrait tablet */\r\n@mixin sm {\r\n  @media (min-width: 480px) and (max-width: 909px) {\r\n    @content;\r\n  }\r\n}\r\n/* Portrait tablet to landscape and desktop */\r\n@mixin md {\r\n  @media (min-width: 910px) and (max-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n/* Large desktop */\r\n@mixin xl {\r\n  @media (min-width: 1200px) and (max-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin xxl {\r\n  @media (min-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n","@use \"media-queries\" as *;\r\n\r\n// logo & slogan\r\n\r\n.logo-content {\r\n  grid-area: slogan-container;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  height: 70rem;\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    display: none;\r\n  }\r\n  @include md {\r\n    display: none;\r\n  }\r\n  @include xxl {\r\n    height: 104rem;\r\n  }\r\n}\r\n.logo-container {\r\n  margin-top: 1rem;\r\n  margin-bottom: 2rem;\r\n  animation-name: logo-2;\r\n  animation-duration: 1.8s;\r\n  @keyframes logo-2 {\r\n    from {\r\n      transform: scaley(0);\r\n    }\r\n    to {\r\n      transform: scaley(1);\r\n    }\r\n  }\r\n  .logo-2 {\r\n    height: 25rem;\r\n    width: 60rem;\r\n  }\r\n}\r\n.slogan-container {\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  min-width: 30rem;\r\n  border-radius: 0.8rem;\r\n  animation-name: apparition;\r\n  text-align: center;\r\n}\r\n.h2 {\r\n  margin-left: 2rem;\r\n  margin-top: 3rem;\r\n  color: var(--blue);\r\n  font-family: var(--font-family-strasua);\r\n  font-weight: 200;\r\n  font-size: 3.1rem;\r\n  letter-spacing: 0.5rem;\r\n  animation-name: h2;\r\n  animation-duration: 1.8s;\r\n\r\n  @keyframes h2 {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    80% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\ndiv {\r\n  display: flex;\r\n}\r\ndiv {\r\n  margin: 0 1rem;\r\n}\r\n","@import \"../assets/styles/media-queries\";\r\n@import \"../assets/styles/logo-slogan\";\r\n.container {\r\n  display: grid;\r\n  background: #eee;\r\n  width: 100%;\r\n  grid:\r\n    \"img header\" 10rem\r\n    \"separator-2 separator-3\" auto\r\n    \"slogan-container slogan-container\" auto\r\n    \"menu menu\" auto\r\n    \"general general\" auto\r\n    \"mail mail\" auto\r\n    \"footer footer\" auto\r\n    / 25rem auto;\r\n  @include xs {\r\n    grid:\r\n      \"img header\" 8rem\r\n      \"menu-xs menu-xs\" auto\r\n      \"separator-2 separator-3\" auto\r\n      \"slogan-container slogan-container\" auto\r\n      \"h1-xs h1-xs\" auto\r\n      \"menu menu\" auto\r\n      \"general general\" auto\r\n      \"mail mail\" auto\r\n      \"footer footer\" auto\r\n      / 22rem auto;\r\n  }\r\n  @include sm {\r\n    grid:\r\n      \"img header\" 8rem\r\n      \"menu-xs menu-xs\" auto\r\n      \"separator-2 separator-3\" auto\r\n      \"slogan-container slogan-container\" auto\r\n      \"h1-xs h1-xs\" auto\r\n      \"menu menu\" auto\r\n      \"general general\" auto\r\n      \"mail mail\" auto\r\n      \"footer footer\" auto\r\n      / 22rem auto;\r\n  }\r\n  @include md {\r\n    grid:\r\n      \"img header\" 8rem\r\n      \"menu-xs menu-xs\" auto\r\n      \"separator-2 separator-3\" auto\r\n      \"slogan-container slogan-container\" auto\r\n      \"h1-xs h1-xs\" auto\r\n      \"menu menu\" auto\r\n      \"general general\" auto\r\n      \"mail mail\" auto\r\n      \"footer footer\" auto\r\n      / 22rem auto;\r\n  }\r\n}\r\n\r\n.general-content {\r\n  grid-area: general;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin: 0;\r\n\r\n  .text-content-1 {\r\n    margin: 4rem 0 0 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    text-align: center;\r\n    background: #d6d6d6;\r\n    @include xs {\r\n      margin: 0;\r\n    }\r\n    @include sm {\r\n      margin: 0;\r\n    }\r\n    @include md {\r\n      margin: 0;\r\n    }\r\n  }\r\n  .sous-titre-1 {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 30rem;\r\n    border-radius: 3rem;\r\n    color: var(--orange_01);\r\n    position: relative;\r\n    z-index: 0;\r\n    overflow: hidden;\r\n    margin-top: 4rem !important;\r\n    @include xs {\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include sm {\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include md {\r\n      width: calc(100% - 4rem);\r\n    }\r\n    &.active::before {\r\n      top: 0;\r\n    }\r\n  }\r\n  .sous-titre-1::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -4rem;\r\n    background: var(--green_01);\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 3rem;\r\n    transition: all 0.8s;\r\n    z-index: -1;\r\n    @include xs {\r\n      top: 0;\r\n    }\r\n    @include sm {\r\n      top: 0;\r\n    }\r\n    @include md {\r\n      top: 0;\r\n    }\r\n  }\r\n  .text-container-1 {\r\n    margin: 2rem;\r\n    height: 28rem;\r\n    width: 110rem;\r\n    border-radius: 3rem;\r\n    position: relative;\r\n    z-index: 0;\r\n    overflow: hidden;\r\n    @include xs {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include sm {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include md {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    &.active::before {\r\n      top: 0;\r\n    }\r\n    p {\r\n      color: white;\r\n      margin: 0 2rem;\r\n      letter-spacing: 0.1rem;\r\n      font-size: 1.8rem;\r\n      font-weight: 700;\r\n      margin-bottom: 2rem;\r\n    }\r\n  }\r\n  .text-container-1::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -28rem;\r\n    background: var(--green_01);\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 3rem;\r\n    transition: all 0.8s;\r\n    z-index: -1;\r\n    @include xs {\r\n      top: 0;\r\n    }\r\n    @include sm {\r\n      top: 0;\r\n    }\r\n    @include md {\r\n      top: 0;\r\n    }\r\n  }\r\n\r\n  .sous-titre-2 {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 38rem;\r\n    border-radius: 3rem;\r\n    color: var(--orange_01);\r\n    position: relative;\r\n    z-index: 0;\r\n    overflow: hidden;\r\n    @include xs {\r\n      width: calc(100% - 4rem);\r\n      font-size: 1.8rem;\r\n    }\r\n    @include sm {\r\n      width: calc(100% - 4rem);\r\n      font-size: 1.8rem;\r\n    }\r\n    @include md {\r\n      width: calc(100% - 4rem);\r\n      font-size: 1.8rem;\r\n    }\r\n    &.active::before {\r\n      top: 0;\r\n    }\r\n  }\r\n  .sous-titre-2::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -4rem;\r\n    background: var(--green_01);\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 3rem;\r\n    transition: all 0.8s;\r\n    z-index: -1;\r\n    @include xs {\r\n      top: 0;\r\n    }\r\n    @include sm {\r\n      top: 0;\r\n    }\r\n    @include md {\r\n      top: 0;\r\n    }\r\n  }\r\n\r\n  .text-container-2 {\r\n    display: flex;\r\n    flex-direction: row nowrap;\r\n\r\n    margin: 0;\r\n    @include xs {\r\n      flex-direction: column;\r\n      height: 80rem;\r\n    }\r\n    @include sm {\r\n      flex-direction: column;\r\n    }\r\n    @include md {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n\r\n  .div-text-container-1 {\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 3rem;\r\n    flex: 1;\r\n    height: auto;\r\n    width: auto;\r\n    margin: 2rem;\r\n    margin: 2rem;\r\n    position: relative;\r\n    z-index: 0;\r\n    overflow: hidden;\r\n    @include xs {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include sm {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include md {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    &.active::before {\r\n      right: 0;\r\n    }\r\n    p {\r\n      color: white;\r\n      margin: 0 2rem;\r\n      letter-spacing: 0.1rem;\r\n      font-size: 1.8rem;\r\n      font-weight: 700;\r\n      @include xs {\r\n        margin: 2rem;\r\n      }\r\n      @include sm {\r\n        margin: 2rem;\r\n      }\r\n      @include md {\r\n        margin: 2rem;\r\n      }\r\n    }\r\n  }\r\n  .div-text-container-1::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: -100%;\r\n    background: var(--green_01);\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 3rem;\r\n    transition: all 0.8s;\r\n    z-index: -1;\r\n    @include xs {\r\n      right: 0;\r\n    }\r\n    @include sm {\r\n      right: 0;\r\n    }\r\n    @include md {\r\n      right: 0;\r\n    }\r\n  }\r\n  .div-text-container-2 {\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 3rem;\r\n    flex: 1;\r\n\r\n    height: auto;\r\n    width: auto;\r\n\r\n    margin: 2rem;\r\n    margin: 2rem;\r\n    position: relative;\r\n    z-index: 0;\r\n    overflow: hidden;\r\n    @include xs {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include sm {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include md {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    &.active::before {\r\n      top: 0;\r\n    }\r\n    p {\r\n      color: white;\r\n      margin: 2rem;\r\n      letter-spacing: 0.1rem;\r\n      font-size: 1.8rem;\r\n      font-weight: 700;\r\n      @include xs {\r\n        margin: 2rem;\r\n      }\r\n      @include sm {\r\n        margin: 2rem;\r\n      }\r\n      @include md {\r\n        margin: 2rem;\r\n      }\r\n    }\r\n  }\r\n  .div-text-container-2::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -20rem;\r\n    background: var(--green_01);\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 3rem;\r\n    transition: all 0.8s;\r\n    z-index: -1;\r\n    @include xs {\r\n      top: 0;\r\n    }\r\n    @include sm {\r\n      top: 0;\r\n    }\r\n    @include md {\r\n      top: 0;\r\n    }\r\n  }\r\n  .div-text-container-3 {\r\n    display: flex;\r\n    border-radius: 3rem;\r\n    flex: 1;\r\n    height: auto;\r\n    width: auto;\r\n    margin: 2rem;\r\n    position: relative;\r\n    z-index: 0;\r\n    overflow: hidden;\r\n    @include xs {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include sm {\r\n      min-height: 18rem;\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include md {\r\n      min-height: 18rem;\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    &.active::before {\r\n      left: 0;\r\n    }\r\n    p {\r\n      color: white;\r\n      margin: 2rem 2rem 1rem 2rem;\r\n      letter-spacing: 0.1rem;\r\n      font-size: 1.8rem;\r\n      font-weight: 700;\r\n      @include xs {\r\n        margin: 2rem;\r\n      }\r\n      @include sm {\r\n        margin: 2rem;\r\n      }\r\n      @include md {\r\n        margin: 2rem;\r\n      }\r\n    }\r\n  }\r\n  .div-text-container-3::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: -100%;\r\n    background: var(--green_01);\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 3rem;\r\n    transition: all 1s;\r\n    z-index: -1;\r\n    @include xs {\r\n      left: 0;\r\n    }\r\n    @include sm {\r\n      left: 0;\r\n    }\r\n    @include md {\r\n      left: 0;\r\n    }\r\n  }\r\n  .text-container-3 {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 8rem;\r\n    width: 58rem;\r\n    border-radius: 3rem;\r\n    position: relative;\r\n    z-index: 0;\r\n    overflow: hidden;\r\n    @include xs {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include sm {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include md {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    &.active::before {\r\n      top: 0;\r\n    }\r\n    p {\r\n      color: white;\r\n      margin: 1rem 2rem 1rem 2rem;\r\n      letter-spacing: 0.1rem;\r\n      font-size: 1.8rem;\r\n      font-weight: 700;\r\n      @include xs {\r\n        margin: 2rem;\r\n      }\r\n      @include sm {\r\n        margin: 2rem;\r\n      }\r\n      @include md {\r\n        margin: 2rem;\r\n      }\r\n    }\r\n  }\r\n  .text-container-3::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -28rem;\r\n    background: var(--green_01);\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 3rem;\r\n    transition: all 1.8s;\r\n    z-index: -1;\r\n    @include xs {\r\n      top: 0;\r\n    }\r\n    @include sm {\r\n      top: 0;\r\n    }\r\n    @include md {\r\n      top: 0;\r\n    }\r\n  }\r\n  .text-container-4 {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 15rem;\r\n    width: 50rem;\r\n    border-radius: 3rem;\r\n    position: relative;\r\n    z-index: 0;\r\n    overflow: hidden;\r\n    @include xs {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include sm {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include md {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    &.active::before {\r\n      top: 0;\r\n    }\r\n    p {\r\n      color: white;\r\n      margin: 1rem 2rem 1rem 2rem;\r\n      letter-spacing: 0.1rem;\r\n      font-size: 1.8rem;\r\n      font-weight: 700;\r\n      @include xs {\r\n        margin: 2rem;\r\n      }\r\n      @include sm {\r\n        margin: 2rem;\r\n      }\r\n      @include md {\r\n        margin: 2rem;\r\n      }\r\n    }\r\n  }\r\n  .text-container-4::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -28rem;\r\n    background: var(--green_01);\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 3rem;\r\n    transition: all 1.8s;\r\n    z-index: -1;\r\n    @include xs {\r\n      top: 0;\r\n    }\r\n    @include sm {\r\n      top: 0;\r\n    }\r\n    @include md {\r\n      top: 0;\r\n    }\r\n  }\r\n\r\n  // text-content-2\r\n\r\n  .text-content-2 {\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    width: 100%;\r\n    background: #d6d6d6;\r\n  }\r\n\r\n  .sous-titre-3 {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 25rem;\r\n    border-radius: 3rem;\r\n    color: var(--orange_01);\r\n    position: relative;\r\n    z-index: 0;\r\n    overflow: hidden;\r\n    @include xs {\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include sm {\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include md {\r\n      width: calc(100% - 4rem);\r\n    }\r\n    &.active::before {\r\n      top: 0;\r\n    }\r\n  }\r\n  .sous-titre-3::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -4rem;\r\n    background: var(--green_01);\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 3rem;\r\n    transition: all 1s;\r\n    z-index: -1;\r\n    @include xs {\r\n      top: 0;\r\n    }\r\n    @include sm {\r\n      top: 0;\r\n    }\r\n    @include md {\r\n      top: 0;\r\n    }\r\n  }\r\n\r\n  .text-container-5 {\r\n    height: auto;\r\n    width: auto;\r\n    max-width: 100rem;\r\n    border-radius: 3rem;\r\n    color: white;\r\n    background: var(--green_01);\r\n    opacity: 0;\r\n    @include xs {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include sm {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include md {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    p {\r\n      margin: 2rem 2rem;\r\n      letter-spacing: 0.1rem;\r\n      font-size: 1.8rem;\r\n      font-weight: 700;\r\n    }\r\n  }\r\n  .animation-text-container-5 {\r\n    animation: animation-text-container-5 2s;\r\n    opacity: 1;\r\n    @keyframes animation-text-container-5 {\r\n      0% {\r\n        transform: translateX(100%);\r\n        opacity: 0;\r\n      }\r\n      100% {\r\n        transform: translateX(0);\r\n        opacity: 1;\r\n      }\r\n    }\r\n  }\r\n\r\n  .text-container-6 {\r\n    height: auto;\r\n    width: auto;\r\n    max-width: 100rem;\r\n    background: var(--green_01);\r\n    color: white;\r\n    border-radius: 3rem;\r\n    opacity: 0;\r\n    @include xs {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include sm {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include md {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    p {\r\n      margin: 2rem 2rem;\r\n      letter-spacing: 0.1rem;\r\n      font-size: 1.8rem;\r\n      font-weight: 700;\r\n    }\r\n  }\r\n  .animation-text-container-6 {\r\n    animation: animation-text-container-6 2s;\r\n    opacity: 1;\r\n    @keyframes animation-text-container-6 {\r\n      0% {\r\n        transform: translateX(-100%);\r\n        opacity: 0;\r\n      }\r\n      100% {\r\n        transform: translateX(0);\r\n        opacity: 1;\r\n      }\r\n    }\r\n  }\r\n\r\n  .text-container-7 {\r\n    height: auto;\r\n    width: auto;\r\n    max-width: 100rem;\r\n    background: var(--green_01);\r\n    color: white;\r\n    border-radius: 3rem;\r\n    opacity: 0;\r\n    @include xs {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include sm {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include md {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    p {\r\n      margin: 2rem 2rem;\r\n      letter-spacing: 0.1rem;\r\n      font-size: 1.8rem;\r\n      font-weight: 700;\r\n    }\r\n  }\r\n  .animation-text-container-7 {\r\n    animation: animation-text-container-7 2s;\r\n    opacity: 1;\r\n    @keyframes animation-text-container-7 {\r\n      0% {\r\n        transform: translateX(100%);\r\n        opacity: 0;\r\n      }\r\n      100% {\r\n        transform: translateX(0);\r\n        opacity: 1;\r\n      }\r\n    }\r\n  }\r\n  .text-container-8 {\r\n    height: auto;\r\n    width: auto;\r\n    max-width: 100rem;\r\n    background: var(--green_01);\r\n    color: white;\r\n    border-radius: 3rem;\r\n    margin-bottom: 4rem !important;\r\n    opacity: 0;\r\n    @include xs {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include sm {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n    @include md {\r\n      height: auto;\r\n      width: calc(100% - 4rem);\r\n    }\r\n\r\n    p {\r\n      margin: 2rem 2rem;\r\n      letter-spacing: 0.1rem;\r\n      font-size: 1.8rem;\r\n      font-weight: 700;\r\n    }\r\n  }\r\n  .animation-text-container-8 {\r\n    animation: animation-text-container-8 2s;\r\n    opacity: 1;\r\n    @keyframes animation-text-container-8 {\r\n      0% {\r\n        transform: translateX(-100%);\r\n        opacity: 0;\r\n      }\r\n      100% {\r\n        transform: translateX(0);\r\n        opacity: 1;\r\n      }\r\n    }\r\n  }\r\n  .sous-titre {\r\n    font-weight: 400;\r\n    letter-spacing: 0.5rem;\r\n    font-family: var(--font-family-strasua);\r\n  }\r\n}\r\n\r\n.text-decoration-1 {\r\n  font-family: var(--font-family-strasua);\r\n  letter-spacing: 0.5rem;\r\n  font-size: 1.6rem;\r\n  font-weight: 300;\r\n  color: var(--orange_01);\r\n}\r\n\r\n.text-1 {\r\n  color: none;\r\n  opacity: 0;\r\n  &.active {\r\n    color: var(--orange_01);\r\n    transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);\r\n    transition-delay: 0.8;\r\n    opacity: 1;\r\n  }\r\n  @include xs {\r\n    opacity: 1;\r\n  }\r\n  @include sm {\r\n    opacity: 1;\r\n  }\r\n  @include md {\r\n    opacity: 1;\r\n  }\r\n}\r\n.text-2 {\r\n  color: none;\r\n  opacity: 0;\r\n  &.active {\r\n    color: white;\r\n    transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);\r\n    transition-delay: 0.8s;\r\n    opacity: 1;\r\n  }\r\n  @include xs {\r\n    opacity: 1;\r\n  }\r\n  @include sm {\r\n    opacity: 1;\r\n  }\r\n  @include md {\r\n    opacity: 1;\r\n  }\r\n}\r\n.text-3 {\r\n  color: none;\r\n  opacity: 0;\r\n  &.active {\r\n    color: var(--orange_01);\r\n    transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);\r\n    transition-delay: 0.8s;\r\n    opacity: 1;\r\n  }\r\n  @include xs {\r\n    opacity: 1;\r\n  }\r\n  @include sm {\r\n    opacity: 1;\r\n  }\r\n  @include md {\r\n    opacity: 1;\r\n  }\r\n}\r\n.text-4 {\r\n  color: none;\r\n  opacity: 0;\r\n  &.active {\r\n    color: white;\r\n    transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);\r\n    transition-delay: 0.8s;\r\n    opacity: 1;\r\n  }\r\n  @include xs {\r\n    opacity: 1;\r\n  }\r\n  @include sm {\r\n    opacity: 1;\r\n  }\r\n  @include md {\r\n    opacity: 1;\r\n  }\r\n}\r\n.text-5 {\r\n  color: none;\r\n  opacity: 0;\r\n  &.active {\r\n    color: white;\r\n    transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);\r\n    transition-delay: 0.8s;\r\n    opacity: 1;\r\n  }\r\n  @include xs {\r\n    opacity: 1;\r\n  }\r\n  @include sm {\r\n    opacity: 1;\r\n  }\r\n  @include md {\r\n    opacity: 1;\r\n  }\r\n}\r\n.text-6 {\r\n  color: none;\r\n  opacity: 0;\r\n  &.active {\r\n    color: white;\r\n    transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);\r\n    transition-delay: 0.8s;\r\n    opacity: 1;\r\n  }\r\n  @include xs {\r\n    opacity: 1;\r\n  }\r\n  @include sm {\r\n    opacity: 1;\r\n  }\r\n  @include md {\r\n    opacity: 1;\r\n  }\r\n}\r\n.text-7 {\r\n  color: none;\r\n  opacity: 0;\r\n  width: 100%;\r\n  &.active {\r\n    color: white;\r\n    transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);\r\n    transition-delay: 0.8s;\r\n    opacity: 1;\r\n  }\r\n  @include xs {\r\n    opacity: 1;\r\n  }\r\n  @include sm {\r\n    opacity: 1;\r\n  }\r\n  @include md {\r\n    opacity: 1;\r\n  }\r\n}\r\n.text-8 {\r\n  color: none;\r\n  opacity: 0;\r\n  &.active {\r\n    color: white;\r\n    transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);\r\n    transition-delay: 0.8s;\r\n    opacity: 1;\r\n  }\r\n  @include xs {\r\n    opacity: 1;\r\n  }\r\n  @include sm {\r\n    opacity: 1;\r\n  }\r\n  @include md {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.text-9 {\r\n  color: none;\r\n  opacity: 0;\r\n  &.active {\r\n    color: var(--orange_01);\r\n    transition: all 0.8s cubic-bezier(1, -0.01, 1, 0.99);\r\n    transition-delay: 0.8s;\r\n    opacity: 1;\r\n  }\r\n  @include xs {\r\n    opacity: 1;\r\n  }\r\n  @include sm {\r\n    opacity: 1;\r\n  }\r\n  @include md {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n// footer\r\n\r\n// .test {\r\n//   color: var(--orange_01);\r\n// }\r\n\r\n// menu\r\n\r\ndiv {\r\n  margin: 2rem 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/spanish/spanish.scss":
/*!**********************************!*\
  !*** ./src/spanish/spanish.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_spanish_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./spanish.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/spanish/spanish.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_spanish_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_spanish_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_spanish_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_spanish_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "../../Documents/polices/strasua.otf":
/*!*******************************************!*\
  !*** ../../Documents/polices/strasua.otf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52bda089827a7b6a3336.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"spanish1": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/spanish/spanish.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/style.scss */ "./src/assets/styles/style.scss");
/* harmony import */ var _spanish_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spanish.scss */ "./src/spanish/spanish.scss");


// menu general

var votreBesoincloseOpenMenu = document.querySelector(".votre-besoin-close-open-menu");
var notreReseaucloseOpenMenu = document.querySelector(".notre-reseau-close-open-menu");
notreReseaucloseOpenMenu.addEventListener("mouseover", function () {
  votreBesoincloseOpenMenu.style.display = "none";
});
notreReseaucloseOpenMenu.addEventListener("mouseout", function () {
  votreBesoincloseOpenMenu.style.display = "flex";
});
votreBesoincloseOpenMenu.addEventListener("mouseover", function () {
  notreReseaucloseOpenMenu.style.display = "none";
});
votreBesoincloseOpenMenu.addEventListener("mouseout", function () {
  notreReseaucloseOpenMenu.style.display = "flex";
});

// menu-xs

var menuXsContent = document.querySelector(".menu-xs-content");
var btnOpen = document.querySelector(".btn-open-close");
var btnBarre1 = document.querySelector(".btn-barre-1");
var btnBarre2 = document.querySelector(".btn-barre-2");
var menuGeneralXsContent = document.querySelector(".menu-general-xs-content");

// btn open/close

btnOpen.addEventListener("click", function () {
  var menuDisplay = getComputedStyle(menuXsContent).display;
  menuXsContent.classList.remove("animate-open", "animate-close");
  menuGeneralXsContent.classList.remove("menu-general-xs-content-opacity");
  if (menuDisplay === "flex") {
    menuXsContent.classList.add("animate-close");
    menuGeneralXsContent.classList.add("menu-general-xs-content-opacity");
    menuXsContent.addEventListener("animationend", function () {
      menuXsContent.style.display = "none";
      menuXsLangueContainer.style.display = "none";
      contentLinkMenuGeneralXs.style.display = "none";
      contentLinkMenuGeneralXs2.style.display = "none";
      contentLinkMenuGeneralXs3.style.display = "none";
      contentLinkMenuGeneralXs4.style.display = "none";
      btnOpenCloseContentLinkMenuGeneralXs.style.transform = "rotate(0deg)";
      btnOpenCloseContentLinkMenuGeneralXs2.style.transform = "rotate(0deg)";
      btnOpenCloseContentLinkMenuGeneralXs3.style.transform = "rotate(0deg)";
      btnOpenCloseContentLinkMenuGeneralXs4.style.transform = "rotate(0deg)";
    }, {
      once: true
    });
  } else {
    menuXsContent.style.display = "flex";
    menuXsContent.classList.add("animate-open");
  }
  var rotation1 = getRotationAngle(getComputedStyle(btnBarre1).transform);
  var rotation2 = getRotationAngle(getComputedStyle(btnBarre2).transform);
  btnBarre1.style.transform = rotation1 === 0 ? "rotate(45deg)" : "rotate(0)";
  btnBarre2.style.transform = rotation2 === 0 ? "rotate(-45deg)" : "rotate(0)";
});
function getRotationAngle(transformValue) {
  if (!transformValue) {
    return 0;
  }
  var transformValues = transformValue.split("(");
  if (transformValues.length < 2) {
    return 0;
  }
  var matrixValues = transformValues[1].split(")")[0].split(",");
  var a = parseFloat(matrixValues[0]);
  var b = parseFloat(matrixValues[1]);
  var c = parseFloat(matrixValues[2]);
  var d = parseFloat(matrixValues[3]);
  var angle = Math.atan2(b, a) * (180 / Math.PI);
  var positiveAngle = angle < 0 ? angle + 360 : angle;
  return positiveAngle;
}

// menu langue open/close

var btnCloseMenuLangue = document.querySelector(".btn-close-menu-langue-xs");
var btnOpenMenuLangue = document.querySelector(".btn-open-menu-langue-xs");
var btnMenuXsContentlangueClose = document.querySelector(".btn-close-menu-langue-xs-content");
var menuXsLangueContainer = document.querySelector(".menu-xs-langue-container");
btnOpenMenuLangue.addEventListener("click", function () {
  menuXsLangueContainer.style.display = "flex";
  menuXsLangueContainer.classList.remove("animation-close-menu-langue-xs");
  btnMenuXsContentlangueClose.classList.remove("btn-close-menu-langue-xs-close");
});
btnCloseMenuLangue.addEventListener("click", function () {
  menuXsLangueContainer.classList.add("animation-close-menu-langue-xs");
  setTimeout(function () {
    menuXsLangueContainer.classList.remove("animation-close-menu-langue-xs");
    menuXsLangueContainer.style.display = "none";
  }, 990);
});
btnCloseMenuLangue.addEventListener("click", function () {
  btnMenuXsContentlangueClose.classList.add("btn-close-menu-langue-xs-close");
});

// menu general xs

// const  btn 1

var contentLinkMenuGeneralXs = document.querySelector(".content-link-menu-general-xs");
var btnOpenCloseContentLinkMenuGeneralXs = document.querySelector(".btn-open-close-content-link-menu-general-xs");
var linkMenuGeneralXs = document.querySelector(".animation-content-link-menu-general-xs");

// const btn 2

var contentLinkMenuGeneralXs2 = document.querySelector(".content-link-menu-general-xs-2");
var btnOpenCloseContentLinkMenuGeneralXs2 = document.querySelector(".btn-open-close-content-link-menu-general-xs-2");
var linkMenuGeneralXs2 = document.querySelector(".animation-content-link-menu-general-xs-2");

//  btn 3

var contentLinkMenuGeneralXs3 = document.querySelector(".content-link-menu-general-xs-3");
var btnOpenCloseContentLinkMenuGeneralXs3 = document.querySelector(".btn-open-close-content-link-menu-general-xs-3");
var linkMenuGeneralXs3 = document.querySelector(".animation-content-link-menu-general-xs-3");

//  btn 4

var contentLinkMenuGeneralXs4 = document.querySelector(".content-link-menu-general-xs-4");
var btnOpenCloseContentLinkMenuGeneralXs4 = document.querySelector(".btn-open-close-content-link-menu-general-xs-4");
var linkMenuGeneralXs4 = document.querySelector(".animation-content-link-menu-general-xs-4");

// btn 1

btnOpenCloseContentLinkMenuGeneralXs.addEventListener("click", function () {
  var menuDisplay = window.getComputedStyle(contentLinkMenuGeneralXs).getPropertyValue("display");
  if (menuDisplay === "none") {
    btnOpenCloseContentLinkMenuGeneralXs.style.transform = "rotate(90deg)";
    contentLinkMenuGeneralXs.style.display = "flex";
    btnOpenCloseContentLinkMenuGeneralXs2.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs2.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs3.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs3.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs4.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs4.style.display = "none";
  } else {
    contentLinkMenuGeneralXs.classList.add("close-content-link-menu-general-xs");
    linkMenuGeneralXs.classList.add("close-link-menu-general-xs");
    btnOpenCloseContentLinkMenuGeneralXs.style.transform = "rotate(0deg)";
    setTimeout(function () {
      contentLinkMenuGeneralXs.style.display = "none";
      contentLinkMenuGeneralXs.classList.remove("close-content-link-menu-general-xs");
      linkMenuGeneralXs.classList.remove("close-link-menu-general-xs");
    }, 990);
  }
});

// btn 2

btnOpenCloseContentLinkMenuGeneralXs2.addEventListener("click", function () {
  var menuDisplay = window.getComputedStyle(contentLinkMenuGeneralXs2).getPropertyValue("display");
  if (menuDisplay === "none") {
    btnOpenCloseContentLinkMenuGeneralXs2.style.transform = "rotate(90deg)";
    contentLinkMenuGeneralXs2.style.display = "flex";
    btnOpenCloseContentLinkMenuGeneralXs.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs3.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs3.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs4.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs4.style.display = "none";
  } else {
    contentLinkMenuGeneralXs2.classList.add("close-content-link-menu-general-xs");
    linkMenuGeneralXs2.classList.add("close-link-menu-general-xs");
    btnOpenCloseContentLinkMenuGeneralXs2.style.transform = "rotate(0deg)";
    setTimeout(function () {
      contentLinkMenuGeneralXs2.style.display = "none";
      contentLinkMenuGeneralXs2.classList.remove("close-content-link-menu-general-xs");
      linkMenuGeneralXs2.classList.remove("close-link-menu-general-xs");
    }, 990);
  }
});

// btn 3

btnOpenCloseContentLinkMenuGeneralXs3.addEventListener("click", function () {
  var menuDisplay = window.getComputedStyle(contentLinkMenuGeneralXs3).getPropertyValue("display");
  if (menuDisplay === "none") {
    btnOpenCloseContentLinkMenuGeneralXs3.style.transform = "rotate(90deg)";
    contentLinkMenuGeneralXs3.style.display = "flex";
    btnOpenCloseContentLinkMenuGeneralXs.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs2.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs2.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs4.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs4.style.display = "none";
  } else {
    contentLinkMenuGeneralXs3.classList.add("close-content-link-menu-general-xs");
    linkMenuGeneralXs3.classList.add("close-link-menu-general-xs");
    btnOpenCloseContentLinkMenuGeneralXs3.style.transform = "rotate(0deg)";
    setTimeout(function () {
      contentLinkMenuGeneralXs3.style.display = "none";
      contentLinkMenuGeneralXs3.classList.remove("close-content-link-menu-general-xs");
      linkMenuGeneralXs3.classList.remove("close-link-menu-general-xs");
    }, 990);
  }
});
// btn 4

btnOpenCloseContentLinkMenuGeneralXs4.addEventListener("click", function () {
  var menuDisplay = window.getComputedStyle(contentLinkMenuGeneralXs4).getPropertyValue("display");
  if (menuDisplay === "none") {
    btnOpenCloseContentLinkMenuGeneralXs4.style.transform = "rotate(90deg)";
    contentLinkMenuGeneralXs4.style.display = "flex";
    btnOpenCloseContentLinkMenuGeneralXs.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs2.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs2.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs3.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs3.style.display = "none";
  } else {
    contentLinkMenuGeneralXs4.classList.add("close-content-link-menu-general-xs");
    linkMenuGeneralXs4.classList.add("close-link-menu-general-xs");
    btnOpenCloseContentLinkMenuGeneralXs4.style.transform = "rotate(0deg)";
    setTimeout(function () {
      contentLinkMenuGeneralXs4.style.display = "none";
      contentLinkMenuGeneralXs4.classList.remove("close-content-link-menu-general-xs");
      linkMenuGeneralXs4.classList.remove("close-link-menu-general-xs");
    }, 990);
  }
});

// sous-titre-1

var sousTitre1 = document.querySelector(".sous-titre-1");
window.addEventListener("scroll", function () {
  var _document$documentEle = document.documentElement,
    scrollTop = _document$documentEle.scrollTop,
    clientHeight = _document$documentEle.clientHeight;
  var topElementToTopViewport = sousTitre1.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    sousTitre1.classList.add("active");
  }
});

// // sous-titre-2

var sousTitre2 = document.querySelector(".sous-titre-2");
window.addEventListener("scroll", function () {
  var _document$documentEle2 = document.documentElement,
    scrollTop = _document$documentEle2.scrollTop,
    clientHeight = _document$documentEle2.clientHeight;
  var topElementToTopViewport = sousTitre2.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    sousTitre2.classList.add("active");
  }
});

// sous-titre-3

var sousTitre3 = document.querySelector(".sous-titre-3");
window.addEventListener("scroll", function () {
  var _document$documentEle3 = document.documentElement,
    scrollTop = _document$documentEle3.scrollTop,
    clientHeight = _document$documentEle3.clientHeight;
  var topElementToTopViewport = sousTitre3.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    sousTitre3.classList.add("active");
  }
});

// text-container-1

var textContainer1 = document.querySelector(".text-container-1");
window.addEventListener("scroll", function () {
  var _document$documentEle4 = document.documentElement,
    scrollTop = _document$documentEle4.scrollTop,
    clientHeight = _document$documentEle4.clientHeight;
  var topElementToTopViewport = textContainer1.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    textContainer1.classList.add("active");
  }
});

// text-container-3

var textContainer3 = document.querySelector(".text-container-3");
window.addEventListener("scroll", function () {
  var _document$documentEle5 = document.documentElement,
    scrollTop = _document$documentEle5.scrollTop,
    clientHeight = _document$documentEle5.clientHeight;
  var topElementToTopViewport = textContainer3.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    textContainer3.classList.add("active");
  }
});

// text-container-4

var textContainer4 = document.querySelector(".text-container-4");
window.addEventListener("scroll", function () {
  var _document$documentEle6 = document.documentElement,
    scrollTop = _document$documentEle6.scrollTop,
    clientHeight = _document$documentEle6.clientHeight;
  var topElementToTopViewport = textContainer4.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    textContainer4.classList.add("active");
  }
});

// text-container-5

var textContainer5 = document.querySelector(".text-container-5");
window.addEventListener("scroll", function () {
  var _document$documentEle7 = document.documentElement,
    scrollTop = _document$documentEle7.scrollTop,
    clientHeight = _document$documentEle7.clientHeight;
  var topElementToTopViewport = textContainer5.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.7) {
    textContainer5.classList.add("animation-text-container-5");
  }
});

// text-container-6

var textContainer6 = document.querySelector(".text-container-6");
window.addEventListener("scroll", function () {
  var _document$documentEle8 = document.documentElement,
    scrollTop = _document$documentEle8.scrollTop,
    clientHeight = _document$documentEle8.clientHeight;
  var topElementToTopViewport = textContainer6.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.7) {
    textContainer6.classList.add("animation-text-container-6");
  }
});
// text-container-7

var textContainer7 = document.querySelector(".text-container-7");
window.addEventListener("scroll", function () {
  var _document$documentEle9 = document.documentElement,
    scrollTop = _document$documentEle9.scrollTop,
    clientHeight = _document$documentEle9.clientHeight;
  var topElementToTopViewport = textContainer7.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.7) {
    textContainer7.classList.add("animation-text-container-7");
  }
});
// text-container-8

var textContainer8 = document.querySelector(".text-container-8");
window.addEventListener("scroll", function () {
  var _document$documentEle10 = document.documentElement,
    scrollTop = _document$documentEle10.scrollTop,
    clientHeight = _document$documentEle10.clientHeight;
  var topElementToTopViewport = textContainer8.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    textContainer8.classList.add("animation-text-container-8");
  }
});

// div-text-container-1

var DivTextContainer1 = document.querySelector(".div-text-container-1");
window.addEventListener("scroll", function () {
  var _document$documentEle11 = document.documentElement,
    scrollTop = _document$documentEle11.scrollTop,
    clientHeight = _document$documentEle11.clientHeight;
  var topElementToTopViewport = DivTextContainer1.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    DivTextContainer1.classList.add("active");
  }
});

// div-text-container-2

var DivTextContainer2 = document.querySelector(".div-text-container-2");
window.addEventListener("scroll", function () {
  var _document$documentEle12 = document.documentElement,
    scrollTop = _document$documentEle12.scrollTop,
    clientHeight = _document$documentEle12.clientHeight;
  var topElementToTopViewport = DivTextContainer2.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    DivTextContainer2.classList.add("active");
  }
});

// div-text-container-3

var DivTextContainer3 = document.querySelector(".div-text-container-3");
window.addEventListener("scroll", function () {
  var _document$documentEle13 = document.documentElement,
    scrollTop = _document$documentEle13.scrollTop,
    clientHeight = _document$documentEle13.clientHeight;
  var topElementToTopViewport = DivTextContainer3.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    DivTextContainer3.classList.add("active");
  }
});

// // text-1

var text1 = document.querySelector(".text-1");
window.addEventListener("scroll", function () {
  var _document$documentEle14 = document.documentElement,
    scrollTop = _document$documentEle14.scrollTop,
    clientHeight = _document$documentEle14.clientHeight;
  var topElementToTopViewport = text1.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    text1.classList.add("active");
  }
});

// // text-2

var text2 = document.querySelector(".text-2");
window.addEventListener("scroll", function () {
  var _document$documentEle15 = document.documentElement,
    scrollTop = _document$documentEle15.scrollTop,
    clientHeight = _document$documentEle15.clientHeight;
  var topElementToTopViewport = text2.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    text2.classList.add("active");
  }
});

// // text-3

var text3 = document.querySelector(".text-3");
window.addEventListener("scroll", function () {
  var _document$documentEle16 = document.documentElement,
    scrollTop = _document$documentEle16.scrollTop,
    clientHeight = _document$documentEle16.clientHeight;
  var topElementToTopViewport = text3.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    text3.classList.add("active");
  }
});

// // text-4

var text4 = document.querySelector(".text-4");
window.addEventListener("scroll", function () {
  var _document$documentEle17 = document.documentElement,
    scrollTop = _document$documentEle17.scrollTop,
    clientHeight = _document$documentEle17.clientHeight;
  var topElementToTopViewport = text4.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    text4.classList.add("active");
  }
});

// // text-5

var text5 = document.querySelector(".text-5");
window.addEventListener("scroll", function () {
  var _document$documentEle18 = document.documentElement,
    scrollTop = _document$documentEle18.scrollTop,
    clientHeight = _document$documentEle18.clientHeight;
  var topElementToTopViewport = text5.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    text5.classList.add("active");
  }
});

// // text-6

var text6 = document.querySelector(".text-6");
window.addEventListener("scroll", function () {
  var _document$documentEle19 = document.documentElement,
    scrollTop = _document$documentEle19.scrollTop,
    clientHeight = _document$documentEle19.clientHeight;
  var topElementToTopViewport = text6.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    text6.classList.add("active");
  }
});

// // text-7

var text7 = document.querySelector(".text-7");
window.addEventListener("scroll", function () {
  var _document$documentEle20 = document.documentElement,
    scrollTop = _document$documentEle20.scrollTop,
    clientHeight = _document$documentEle20.clientHeight;
  var topElementToTopViewport = text7.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    text7.classList.add("active");
  }
});

// // text-8

var text8 = document.querySelector(".text-8");
window.addEventListener("scroll", function () {
  var _document$documentEle21 = document.documentElement,
    scrollTop = _document$documentEle21.scrollTop,
    clientHeight = _document$documentEle21.clientHeight;
  var topElementToTopViewport = text8.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    text8.classList.add("active");
  }
});

// text-9

var text9 = document.querySelector(".text-9");
window.addEventListener("scroll", function () {
  var _document$documentEle22 = document.documentElement,
    scrollTop = _document$documentEle22.scrollTop,
    clientHeight = _document$documentEle22.clientHeight;
  var topElementToTopViewport = text9.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
    text9.classList.add("active");
  }
});

// mail-content-1

var mailContent1 = document.querySelector(".mail-content-1");
window.addEventListener("scroll", function () {
  var _document$documentEle23 = document.documentElement,
    scrollTop = _document$documentEle23.scrollTop,
    clientHeight = _document$documentEle23.clientHeight;
  var topElementToTopViewport = mailContent1.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1) {
    mailContent1.classList.add("active");
  }
});

// mail-content-2

var mailContent2 = document.querySelector(".mail-content-2");
window.addEventListener("scroll", function () {
  var _document$documentEle24 = document.documentElement,
    scrollTop = _document$documentEle24.scrollTop,
    clientHeight = _document$documentEle24.clientHeight;
  var topElementToTopViewport = mailContent2.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1) {
    mailContent2.classList.add("active");
  }
});

// contact

var contact = document.querySelector(".contact");
window.addEventListener("scroll", function () {
  var _document$documentEle25 = document.documentElement,
    scrollTop = _document$documentEle25.scrollTop,
    clientHeight = _document$documentEle25.clientHeight;
  var topElementToTopViewport = contact.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1) {
    contact.classList.add("active");
  }
});

// footer

var footer = document.querySelector("footer");
window.addEventListener("scroll", function () {
  var _document$documentEle26 = document.documentElement,
    scrollTop = _document$documentEle26.scrollTop,
    clientHeight = _document$documentEle26.clientHeight;
  var topElementToTopViewport = footer.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1) {
    footer.classList.add("active");
  }
});

// text-footer

var textFooter = document.querySelector(".text-footer");
window.addEventListener("scroll", function () {
  var _document$documentEle27 = document.documentElement,
    scrollTop = _document$documentEle27.scrollTop,
    clientHeight = _document$documentEle27.clientHeight;
  var topElementToTopViewport = textFooter.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1) {
    textFooter.classList.add("active");
  }
});

// copyright

var copyright = document.querySelector(".copyright");
window.addEventListener("scroll", function () {
  var _document$documentEle28 = document.documentElement,
    scrollTop = _document$documentEle28.scrollTop,
    clientHeight = _document$documentEle28.clientHeight;
  var topElementToTopViewport = copyright.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1) {
    copyright.classList.add("active");
  }
});
})();

/******/ })()
;
//# sourceMappingURL=spanish1-bundle.js.map