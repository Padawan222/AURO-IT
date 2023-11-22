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

#menu-general,
#menu-general ul {
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
}

#menu-general li {
  display: inline-block;
  position: relative;
  transition: all 1s;
}
#menu-general li:hover {
  border-radius: 8px 8px 0 0;
}

#menu-general ul li {
  display: inherit;
  border-radius: 0;
}

#menu-general ul li:hover {
  border-radius: 0;
}

#menu-general ul li:last-child {
  border-radius: 0 0 8px 8px;
}

#menu-general ul {
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

#menu-general li:hover ul {
  max-height: 15em;
}

/* background des liens menus */
#menu-general li:last-child {
  background: linear-gradient(var(--green_01), var(--blue));
}

/* background des liens sous menus */
#menu-general li:last-child li {
  background: white;
}

/* background des liens menus et sous menus au survol */
#menu-general li:first-child {
  background: linear-gradient(var(--green_01), var(--blue));
}

#menu-general li:last-child li:hover {
  transition: all 0.4s;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
}

/* les a href */
#menu-general a {
  width: 32rem;
  text-decoration: none;
  display: block;
  padding: 8px 32px;
  font-family: var(--font-family-strasua);
  letter-spacing: 0.2rem;
  font-weight: 200;
  color: white;
}

#menu-general ul a {
  padding: 8px 0;
  color: white;
}

#menu-general li:hover li a {
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
@media (max-width: 767px) {
  .separator-2 {
    top: 8rem;
    width: 22rem;
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
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
@media (max-width: 767px) {
  .separator-3 {
    top: 8rem;
    left: 22rem;
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
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
  width: 55rem;
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
@media (max-width: 767px) {
  .content-menu {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
  .content-menu {
    display: none;
  }
}

.menu-container {
  margin: 0 1rem;
  height: 4rem;
}

.menu-container-general {
  position: absolute;
  top: 4rem;
  display: none;
  align-items: center;
  justify-content: center;
  height: 7rem;
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
@media (max-width: 767px) {
  .menu-langue {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
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
@media (max-width: 767px) {
  .menu-xs {
    display: flex;
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
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

.menu-general-xs-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 1rem;
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
}

.first-link-menu-xs-langue {
  font-family: var(--font-family-strasua);
  letter-spacing: 0.2rem;
  font-size: 1.5rem;
}

.link-menu-xs-langue {
  margin: 0.5rem 0;
}

.menu-langue-xs-link-mid {
  margin-top: 0;
  margin-bottom: 0;
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
@media (max-width: 767px) {
  .mail-content-1 {
    transform: translateX(0);
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
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
@media (max-width: 767px) {
  .mail-content-2 {
    transform: translateX(0);
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
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
  width: 20rem;
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
  content: "Email@exemple.com";
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
@media (max-width: 767px) {
  header {
    height: 8rem;
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
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
@media (max-width: 767px) {
  .h1 {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
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
@media (max-width: 767px) {
  .content-h1-xs {
    grid-area: h1-xs;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 1rem);
    margin: 0.5rem;
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
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
@media (max-width: 767px) {
  .a-img {
    height: 8rem;
    width: 22rem;
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
  .a-img {
    height: 8rem;
    width: 22rem;
  }
}

.repere-content {
  position: absolute;
  right: 16rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100rem;
  height: 10rem;
}
@media (max-width: 480px) {
  .repere-content {
    display: none;
  }
}
@media (max-width: 767px) {
  .repere-content {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
  .repere-content {
    display: none;
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
@media (max-width: 767px) {
  footer::before {
    bottom: 0;
    border-radius: 0;
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
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
@media (max-width: 767px) {
  .text-footer {
    color: var(--orange_01);
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
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
@media (max-width: 767px) {
  .copyright {
    color: var(--orange_01);
  }
}
@media (min-width: 768px) and (max-width: 1400px) {
  .copyright {
    color: var(--orange_01);
  }
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/_base.scss","webpack://./src/assets/styles/style.scss","webpack://./src/assets/styles/_classes.scss","webpack://./src/assets/styles/_media-queries.scss","webpack://./src/assets/styles/_reset.scss","webpack://./src/assets/styles/_variables.scss","webpack://./src/assets/styles/_utils.scss","webpack://./src/assets/styles/_menu-langue.scss","webpack://./src/assets/styles/_menu-general.scss","webpack://./src/assets/styles/_fonts.scss","webpack://./src/assets/styles/_separator.scss","webpack://./src/assets/styles/_menu.scss","webpack://./src/assets/styles/_contact.scss"],"names":[],"mappings":"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","sourcesContent":["html {\n  font-size: 62.5%;\n}\nbody {\n  font-family: var(--font-family);\n  color: var(--text);\n  font-size: 1.6rem;\n  width: 100%;\n  // overflow-x: hidden;\n}\np {\n  margin: 1rem 0;\n  font-weight: 400 !important;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 1rem 0 2rem 0;\n}\nh2 {\n  margin: 2rem 1rem;\n}\nh3 {\n  font-weight: 400;\n  margin: 1rem 0.5rem 1rem 0.5rem;\n}\n\nul {\n  list-style: none;\n}\na {\n  color: var(--text);\n  text-decoration: none;\n}\nimg {\n  max-width: 100%;\n}\n","@use \"base\" as *;\r\n@use \"classes\" as *;\r\n@use \"media-queries\" as *;\r\n@use \"reset\" as *;\r\n@use \"variables\" as *;\r\n@use \"utils\" as *;\r\n@use \"menu-langue\" as *;\r\n@use \"menu-general\" as *;\r\n@use \"fonts\" as *;\r\n@use \"separator\" as *;\r\n@use \"menu\" as *;\r\n@use \"contact\" as *;\r\n\r\n// header\r\n\r\nheader {\r\n  grid-area: header;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 10rem;\r\n  background: white;\r\n  animation-name: header;\r\n  animation-duration: 1.8s;\r\n  width: 100%;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 2;\r\n\r\n  @keyframes header {\r\n    from {\r\n      transform: translateY(-10rem);\r\n    }\r\n    to {\r\n    }\r\n  }\r\n  @include xs {\r\n    height: 8rem;\r\n  }\r\n  @include sm {\r\n    height: 8rem;\r\n  }\r\n  @include md {\r\n    height: 8rem;\r\n  }\r\n}\r\n.h1 {\r\n  margin-top: 2rem;\r\n  color: var(--green_02);\r\n  font-family: var(--font-family-strasua);\r\n  font-weight: 200;\r\n  font-size: 3.1rem;\r\n  letter-spacing: 0.2rem;\r\n  margin-left: 2rem;\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    display: none;\r\n  }\r\n  @include md {\r\n    display: none;\r\n  }\r\n}\r\n\r\n// h1-xs\r\n\r\n.content-h1-xs {\r\n  display: none;\r\n}\r\n\r\n@include xs {\r\n  .content-h1-xs {\r\n    grid-area: h1-xs;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: calc(100% - 1rem);\r\n    margin: 0.5rem;\r\n  }\r\n}\r\n@include sm {\r\n  .content-h1-xs {\r\n    grid-area: h1-xs;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: calc(100% - 1rem);\r\n    margin: 0.5rem;\r\n  }\r\n}\r\n@include md {\r\n  .content-h1-xs {\r\n    grid-area: h1-xs;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: calc(100% - 1rem);\r\n    margin: 0.5rem;\r\n  }\r\n}\r\n.h1-xs {\r\n  grid-area: h1-xs;\r\n  color: var(--green_02);\r\n  font-family: var(--font-family-strasua);\r\n  font-weight: 200;\r\n  font-size: 2.1rem;\r\n  letter-spacing: 0.2rem;\r\n}\r\n\r\n// logo header\r\n\r\n.a-img {\r\n  grid-area: img;\r\n  height: 10rem;\r\n  width: 25rem;\r\n  animation-name: logo-1;\r\n  animation-duration: 1.8s;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 2;\r\n  @keyframes logo-1 {\r\n    from {\r\n      transform: translateY(5rem);\r\n    }\r\n    to {\r\n    }\r\n  }\r\n  @include xs {\r\n    height: 8rem;\r\n    width: 22rem;\r\n  }\r\n  @include sm {\r\n    height: 8rem;\r\n    width: 22rem;\r\n  }\r\n  @include md {\r\n    height: 8rem;\r\n    width: 22rem;\r\n  }\r\n}\r\n\r\n.repere-content {\r\n  position: absolute;\r\n  right: 16rem;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  width: 100rem;\r\n  height: 10rem;\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    display: none;\r\n  }\r\n  @include md {\r\n    display: none;\r\n  }\r\n  a {\r\n    color: var(--orange_02);\r\n    font-family: var(--font-family-strasua);\r\n    font-weight: 200;\r\n    font-size: 2rem;\r\n    letter-spacing: 0.2rem;\r\n  }\r\n}\r\n// footer\r\n\r\nfooter {\r\n  grid-area: footer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 5rem;\r\n  position: relative;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n  &.active::before {\r\n    bottom: 0;\r\n    border-radius: 0;\r\n  }\r\n}\r\n\r\nfooter::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -10rem;\r\n  background-color: white;\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 3rem;\r\n  transition: all 1s;\r\n  z-index: -1;\r\n  @include xs {\r\n    bottom: 0;\r\n    border-radius: 0;\r\n  }\r\n  @include sm {\r\n    bottom: 0;\r\n    border-radius: 0;\r\n  }\r\n  @include md {\r\n    bottom: 0;\r\n    border-radius: 0;\r\n  }\r\n}\r\n\r\n.text-footer {\r\n  font-family: var(--font-family-strasua);\r\n  font-size: 1.8rem;\r\n  letter-spacing: 0.2rem;\r\n  color: #eee;\r\n  margin: 0;\r\n  &.active {\r\n    transition: all 2s;\r\n    transition-delay: 1s;\r\n    color: var(--orange_01);\r\n  }\r\n  @include xs {\r\n    color: var(--orange_01);\r\n  }\r\n  @include sm {\r\n    color: var(--orange_01);\r\n  }\r\n  @include md {\r\n    color: var(--orange_01);\r\n  }\r\n}\r\n\r\n.copyright {\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  color: #eee;\r\n  &.active {\r\n    transition: all 2s;\r\n    transition-delay: 1s;\r\n    color: var(--orange_01);\r\n  }\r\n  @include xs {\r\n    color: var(--orange_01);\r\n  }\r\n  @include sm {\r\n    color: var(--orange_01);\r\n  }\r\n  @include md {\r\n    color: var(--orange_01);\r\n  }\r\n}\r\n",".title {\n  &-small {\n    letter-spacing: 0.5rem;\n    font-size: 1.6rem;\n    font-family: var(--font-family-small);\n  }\n}\n","/* Landscape phones and down */\r\n@mixin xs {\r\n  @media (max-width: 480px) {\r\n    @content;\r\n  }\r\n}\r\n/* Landscape phone to portrait tablet */\r\n@mixin sm {\r\n  @media (max-width: 767px) {\r\n    @content;\r\n  }\r\n}\r\n/* Portrait tablet to landscape and desktop */\r\n@mixin md {\r\n  @media (min-width: 768px) and (max-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n/* Large desktop */\r\n@mixin xl {\r\n  @media (min-width: 1400px) and (max-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin xxl {\r\n  @media (min-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n",":root {\r\n  // font-family\r\n  --font-family-strasua: \"strasua\";\r\n  --font-family-title: \"Cinzel Decorative\", cursive;\r\n  --font-family: \"Nunito Sans\", sans-serif;\r\n\r\n  // color\r\n  --text: #333;\r\n  --blue: #6eb2bd;\r\n  --orange_01: #df5b13;\r\n  --orange_02: #fd8342;\r\n  --green_01: #7ccbab;\r\n  --green_02: #11a67e;\r\n  --background: #d6d6d6;\r\n\r\n  // box-shadow\r\n  --box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),\r\n    0 1px 3px 1px rgba(60, 64, 67, 0.15);\r\n}\r\n",".mb_2 {\n  margin-bottom: 2rem !important;\n}\n.mb_5 {\n  margin-bottom: 5rem !important;\n}\n.mx_1 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.my_1 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n",".leader {\r\n  color: var(--orange_01);\r\n}\r\n\r\n#menu-langue,\r\n#menu-langue ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-align: center;\r\n}\r\n#menu-langue li {\r\n  display: inline-block;\r\n  position: relative;\r\n  border-radius: 8px 8px 0 0;\r\n}\r\n#menu-langue ul li {\r\n  display: inherit;\r\n  border-radius: 0;\r\n}\r\n#menu-langue ul li:hover {\r\n  border-radius: 0;\r\n}\r\n#menu-langue ul li:last-child {\r\n  border-radius: 0 0 8px 8px;\r\n}\r\n#menu-langue ul {\r\n  position: absolute;\r\n  z-index: 1000;\r\n  max-height: 0;\r\n  left: 0;\r\n  right: 0;\r\n  overflow: hidden;\r\n  -moz-transition: 0.7s all 0.2s;\r\n  -webkit-transition: 0.5s all 0.2s;\r\n  transition: 0.5s all 0.2s;\r\n}\r\n#menu-langue li:hover ul {\r\n  max-height: 15em;\r\n}\r\n/* background des liens menus */\r\n\r\n#menu-langue li:last-child {\r\n  // background: var(--orange_01);\r\n}\r\n/* background des liens sous menus */\r\n#menu-langue li:last-child li {\r\n  background: white;\r\n}\r\n/* background des liens menus et sous menus au survol */\r\n#menu-langue li:last-child:hover {\r\n  background: white;\r\n}\r\n#menu-langue li:last-child li:hover {\r\n  transition: all 0.4s;\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.2rem;\r\n}\r\n/* les a href */\r\n#menu-langue a {\r\n  width: 15rem;\r\n  text-decoration: none;\r\n  display: block;\r\n  padding: 8px 32px;\r\n  font-family: arial;\r\n}\r\n#menu-langue ul a {\r\n  padding: 8px 0;\r\n  color: var(--orange_01);\r\n}\r\n#menu-langue li:hover li a {\r\n  color: var(--orange_01);\r\n  text-transform: inherit;\r\n}\r\n","#menu-general,\r\n#menu-general ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-align: center;\r\n}\r\n#menu-general li {\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: all 1s;\r\n  &:hover {\r\n    border-radius: 8px 8px 0 0;\r\n  }\r\n}\r\n#menu-general ul li {\r\n  display: inherit;\r\n  border-radius: 0;\r\n}\r\n#menu-general ul li:hover {\r\n  border-radius: 0;\r\n}\r\n#menu-general ul li:last-child {\r\n  border-radius: 0 0 8px 8px;\r\n}\r\n#menu-general ul {\r\n  position: absolute;\r\n  z-index: 1000;\r\n  max-height: 0;\r\n  left: 0;\r\n  right: 0;\r\n  overflow: hidden;\r\n  -moz-transition: 0.7s all 0.2s;\r\n  -webkit-transition: 0.5s all 0.2s;\r\n  transition: 0.5s all 0.2s;\r\n}\r\n#menu-general li:hover ul {\r\n  max-height: 15em;\r\n}\r\n/* background des liens menus */\r\n\r\n#menu-general li:last-child {\r\n  background: linear-gradient(var(--green_01), var(--blue));\r\n}\r\n/* background des liens sous menus */\r\n#menu-general li:last-child li {\r\n  background: white;\r\n}\r\n/* background des liens menus et sous menus au survol */\r\n#menu-general li:first-child {\r\n  background: linear-gradient(var(--green_01), var(--blue));\r\n}\r\n#menu-general li:last-child li:hover {\r\n  transition: all 0.4s;\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.2rem;\r\n}\r\n/* les a href */\r\n#menu-general a {\r\n  width: 32rem;\r\n  text-decoration: none;\r\n  display: block;\r\n  padding: 8px 32px;\r\n  font-family: var(--font-family-strasua);\r\n  letter-spacing: 0.2rem;\r\n  font-weight: 200;\r\n  color: white;\r\n}\r\n#menu-general ul a {\r\n  padding: 8px 0;\r\n  color: white;\r\n}\r\n#menu-general li:hover li a {\r\n  color: var(--blue);\r\n  text-transform: inherit;\r\n}\r\n\r\n// #menu-demo2 li:hover a,\r\n// #menu-demo2 li li:hover a {\r\n// }\r\n","@font-face {\r\n  font-family: \"strasua\";\r\n  src: url(\"C:/Users/Azstras/OneDrive/Documents/polices/strasua.otf\")\r\n    format(opentype);\r\n}\r\n","@use \"media-queries\" as *;\r\n// separator\r\n\r\n.separator-1 {\r\n  margin: 1rem 20rem;\r\n  height: 6px;\r\n  border-radius: 5px;\r\n  width: 80rem;\r\n  background-color: var(--green_01);\r\n  animation-name: chargement;\r\n  animation-duration: 1.8s;\r\n  @keyframes chargement {\r\n    0% {\r\n      transform: scaleX(0);\r\n    }\r\n    100% {\r\n      transform: scaleX(1);\r\n    }\r\n  }\r\n}\r\n.separator-2 {\r\n  position: fixed;\r\n  top: 10rem;\r\n  margin: 0;\r\n  background: var(--green_02);\r\n  height: 2px;\r\n  width: 25rem;\r\n  grid-area: separator-2;\r\n  animation-name: separator-2;\r\n  animation-duration: 1.8s;\r\n  z-index: 2;\r\n  @keyframes separator-2 {\r\n    from {\r\n      transform: translateY(15rem);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  @include xs {\r\n    top: 8rem;\r\n    width: 22rem;\r\n  }\r\n  @include sm {\r\n    top: 8rem;\r\n    width: 22rem;\r\n  }\r\n  @include md {\r\n    top: 8rem;\r\n    width: 22rem;\r\n  }\r\n}\r\n.separator-3 {\r\n  position: fixed;\r\n  top: 10rem;\r\n  left: 25rem;\r\n  margin: 0;\r\n  background: var(--orange_01);\r\n  height: 2px;\r\n  width: 100%;\r\n  grid-area: separator-3;\r\n  animation-name: separator-3;\r\n  animation-duration: 1.8s;\r\n  z-index: 2;\r\n  @keyframes separator-3 {\r\n    from {\r\n      transform: scaleX(0);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n      transform: scaleX(1);\r\n    }\r\n  }\r\n  @include xs {\r\n    top: 8rem;\r\n    left: 22rem;\r\n  }\r\n  @include sm {\r\n    top: 8rem;\r\n    left: 22rem;\r\n  }\r\n  @include md {\r\n    top: 8rem;\r\n    left: 22rem;\r\n  }\r\n}\r\n\r\n.separator-4 {\r\n  height: 4rem;\r\n  width: 1rem;\r\n  // border-radius: 100%;\r\n  margin: 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    top: 0;\r\n    transition-delay: 0.8s;\r\n  }\r\n}\r\n.separator-4::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -4rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 0.6s;\r\n  z-index: -1;\r\n}\r\n.separator-6 {\r\n  height: 4rem;\r\n  width: 1rem;\r\n\r\n  margin: 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1.4s;\r\n    top: 0;\r\n  }\r\n}\r\n.separator-6::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -4rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 0.6s;\r\n  z-index: -1;\r\n}\r\n.separator-9 {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  border-radius: 100%;\r\n  margin: 1rem 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1.9s;\r\n    left: 0;\r\n  }\r\n}\r\n.separator-9::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: -2rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 0.8s;\r\n  z-index: -1;\r\n}\r\n\r\n.separator-11 {\r\n  height: 4rem;\r\n  width: 1rem;\r\n  margin: 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 2s;\r\n    top: 0;\r\n  }\r\n}\r\n\r\n.separator-11::before {\r\n  content: \"\";\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: -4rem;\r\n  background: var(--blue);\r\n  transition: all 0.6s;\r\n  z-index: -1;\r\n}\r\n\r\n.separator-14 {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  border-radius: 100%;\r\n  margin: 1rem 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1.9s;\r\n    right: 0;\r\n  }\r\n}\r\n.separator-14::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  right: -2rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 0.8s;\r\n  z-index: -1;\r\n}\r\n.separator-15 {\r\n  height: 4rem;\r\n  width: 1rem;\r\n  margin: 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1.4s;\r\n    top: 0;\r\n  }\r\n}\r\n.separator-15::before {\r\n  content: \"\";\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: -4rem;\r\n  background: var(--blue);\r\n  transition: all 0.6s;\r\n  z-index: -1;\r\n}\r\n.separator-16 {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  border-radius: 100%;\r\n  margin: 1rem 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1s;\r\n    top: 0;\r\n  }\r\n}\r\n.separator-16::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -2rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 1s;\r\n  z-index: -1;\r\n}\r\n.separator-17 {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  border-radius: 100%;\r\n  margin: 1rem 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1s;\r\n    top: 0;\r\n  }\r\n}\r\n.separator-17::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -2rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 1s;\r\n  z-index: -1;\r\n}\r\n.separator-18 {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  border-radius: 100%;\r\n  margin: 1rem 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1s;\r\n    top: 0;\r\n  }\r\n}\r\n.separator-18::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -2rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 1s;\r\n  z-index: -1;\r\n}\r\n.separator-19 {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  border-radius: 100%;\r\n  margin: 1rem 0;\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  &.active::before {\r\n    transition-delay: 1s;\r\n    top: 0;\r\n  }\r\n}\r\n.separator-19::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -2rem;\r\n  background: var(--blue);\r\n  height: 100%;\r\n  width: 100%;\r\n  transition: all 1s;\r\n  z-index: -1;\r\n}\r\n\r\n.separator-20 {\r\n  margin-top: 4rem;\r\n  height: 6px;\r\n  width: 55rem;\r\n  border-radius: 5px;\r\n  background: var(--green_01);\r\n  animation-name: chargement;\r\n  animation-duration: 1.8s;\r\n  @keyframes chargement {\r\n    0% {\r\n      transform: scaleX(0);\r\n    }\r\n    100% {\r\n      transform: scaleX(1);\r\n    }\r\n  }\r\n}\r\n\r\n// separator-container\r\n\r\n.separator-container-2 {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0;\r\n}\r\n\r\n// separator-ligne\r\n\r\n.content-separator-ligne {\r\n  grid-area: separator-ligne;\r\n  height: 4rem;\r\n  width: 100%;\r\n  display: flex;\r\n  margin: 0 0 0 0;\r\n}\r\n\r\n.container-separator-ligne {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin: 0;\r\n\r\n  .separator-ligne-1 {\r\n    margin: 0;\r\n    height: 4rem;\r\n    width: 50%;\r\n    position: relative;\r\n    &.active::before {\r\n      width: 1%;\r\n      border-radius: 3rem;\r\n      margin-left: 1rem;\r\n    }\r\n  }\r\n  .separator-ligne-1::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background: var(--green_01);\r\n    // background: #d6d6d6;\r\n    height: 4rem;\r\n    width: 100%;\r\n    transition: all 1s;\r\n  }\r\n  .separator-ligne-2 {\r\n    margin: 0;\r\n    height: 4rem;\r\n    width: 2rem;\r\n    position: relative;\r\n    &.active::before {\r\n      width: 1rem;\r\n      border-radius: 3rem;\r\n      margin-right: 1rem;\r\n    }\r\n  }\r\n  .separator-ligne-2::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background: var(--green_01);\r\n    // background: #d6d6d6;\r\n    height: 4rem;\r\n    width: 106rem;\r\n    @include xxl {\r\n      width: 141.2rem;\r\n    }\r\n    right: 0;\r\n    transition: all 1s;\r\n  }\r\n}\r\n\r\n// separator xs\r\n\r\n.container-separator-xs-1 {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 2px;\r\n  width: 100%;\r\n  margin: 1rem 0.5rem;\r\n}\r\n.container-separator-xs-2 {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 2px;\r\n  width: 100%;\r\n  margin: 0;\r\n  margin: 0.5rem;\r\n}\r\n.separator-xs-1 {\r\n  height: 2px;\r\n  width: 75%;\r\n  background: #ddd;\r\n}\r\n.separator-xs-2 {\r\n  height: 2px;\r\n  width: 60%;\r\n  background: white;\r\n}\r\n","@use \"media-queries\" as *;\r\n\r\n.content-menu {\r\n  position: sticky;\r\n  top: 10.2rem;\r\n  grid-area: menu;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 5rem;\r\n  background: #eee;\r\n  z-index: 1;\r\n  animation-name: content-menu;\r\n  animation-duration: 3s;\r\n  margin: 0;\r\n  @keyframes content-menu {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    80% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    display: none;\r\n  }\r\n  @include md {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.menu-container {\r\n  margin: 0 1rem;\r\n  height: 4rem;\r\n}\r\n\r\n.menu-container-general {\r\n  position: absolute;\r\n  top: 4rem;\r\n  display: none;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 7rem;\r\n  width: 105rem;\r\n  border-radius: 0 0 2rem 2rem;\r\n  background: #eee;\r\n  margin: 0;\r\n  animation-name: containerMenu;\r\n  animation-duration: 1.6s;\r\n\r\n  @keyframes containerMenu {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translateY(-5rem);\r\n    }\r\n    50% {\r\n      opacity: 0;\r\n    }\r\n\r\n    100% {\r\n      opacity: 1;\r\n      transform: translateY(0rem);\r\n    }\r\n  }\r\n}\r\n\r\n.menu-content-general {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 4rem;\r\n  width: 32rem;\r\n  background: linear-gradient(var(--green_01), var(--blue));\r\n  border-radius: 3rem;\r\n  margin: 0 2rem;\r\n  cursor: default;\r\n  transition: all 1s;\r\n  &:hover > .menu-container-general {\r\n    display: flex;\r\n  }\r\n  &:hover {\r\n    width: 100rem;\r\n    border-radius: 2rem 2rem 0 0;\r\n  }\r\n}\r\n\r\n.titre {\r\n  font-size: 1.8rem;\r\n  font-family: var(--font-family-strasua);\r\n  color: white;\r\n  letter-spacing: 0.2rem;\r\n  &:hover {\r\n    font-size: 2rem;\r\n  }\r\n}\r\n\r\n.titre-votre-besoins {\r\n  font-size: 2rem;\r\n  font-family: var(--font-family-strasua);\r\n  color: white;\r\n  letter-spacing: 0.2rem;\r\n  cursor: default;\r\n}\r\n.titre-notre-reseau {\r\n  font-size: 2rem;\r\n  font-family: var(--font-family-strasua);\r\n  color: white;\r\n  letter-spacing: 0.2rem;\r\n  cursor: pointer;\r\n  &:hover {\r\n    font-size: 2.2rem;\r\n  }\r\n}\r\n\r\n.border-radius-1 {\r\n  border-radius: 0 0 0 8px;\r\n}\r\n.border-radius-3 {\r\n  border-radius: 0 0 8px 0;\r\n}\r\n\r\n// menu-langue\r\n\r\n.menu-langue {\r\n  margin-right: 1rem;\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    display: none;\r\n  }\r\n  @include md {\r\n    display: none;\r\n  }\r\n}\r\n\r\n// menu mobiles\r\n\r\n.menu-xs,\r\n.menu-xs-content {\r\n  display: none;\r\n}\r\n\r\n@include xs {\r\n  .menu-xs {\r\n    display: flex;\r\n  }\r\n}\r\n@include sm {\r\n  .menu-xs {\r\n    display: flex;\r\n  }\r\n}\r\n@include md {\r\n  .menu-xs {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n.menu-xs {\r\n  position: fixed;\r\n  top: 3rem;\r\n  right: 0;\r\n  width: 10%;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  z-index: 5;\r\n  animation: menu-xs 2s;\r\n  margin: 0;\r\n  @keyframes menu-xs {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    40% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n// menu-xs-open\r\n\r\n.menu-xs-content {\r\n  position: fixed;\r\n  display: none;\r\n  top: 0rem;\r\n  height: 100vh;\r\n  width: 100%;\r\n  margin: 0;\r\n  background: white;\r\n  z-index: 4;\r\n  animation: menu-xs 0.8s;\r\n  &.animate-open {\r\n    animation: menu-xs-open 0.8s;\r\n  }\r\n\r\n  &.animate-close {\r\n    animation: menu-xs-close 0.8s;\r\n  }\r\n}\r\n\r\n.menu-xs-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin: 0;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n// menu langue xs\r\n\r\n.menu-xs-langue {\r\n  display: flex;\r\n  width: 100%;\r\n  margin: 2.8rem 2rem 0 1rem;\r\n  a {\r\n    color: white;\r\n    font-family: var(--font-family-strasua);\r\n    letter-spacing: 0.2rem;\r\n    font-size: 1.5rem;\r\n    margin-left: 1rem;\r\n  }\r\n}\r\n.menu-xs-langue-content {\r\n  z-index: 3;\r\n  display: flex;\r\n  margin: 0;\r\n}\r\n\r\n.menu-xs-langue-container {\r\n  display: none;\r\n  flex-direction: column;\r\n  height: 10rem;\r\n  width: 13rem;\r\n  margin: 0;\r\n  background: var(--orange_02);\r\n  border-radius: 0.8rem;\r\n  animation: menu-xs-langue-container-open 1s;\r\n  @keyframes menu-xs-langue-container-open {\r\n    0% {\r\n      width: 0;\r\n      height: 2.5rem;\r\n    }\r\n    40% {\r\n      height: 2.5rem;\r\n    }\r\n    50% {\r\n      width: 13rem;\r\n    }\r\n    100% {\r\n      height: 10rem;\r\n    }\r\n  }\r\n}\r\n\r\n// menu general xs\r\n\r\n.menu-general-xs-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  margin-top: 2rem;\r\n\r\n  a {\r\n    font-size: 2rem;\r\n    font-family: var(--font-family-strasua);\r\n    color: var(--orange_02);\r\n    letter-spacing: 0.2rem;\r\n  }\r\n}\r\n.menu-general-xs-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 1.5rem 1rem;\r\n}\r\n\r\n.animation-menu-general-xs-container {\r\n  animation: animation-container-menu-general-xs 1.8s;\r\n}\r\n.menu-general-xs-content-opacity {\r\n  opacity: 0;\r\n}\r\n\r\n.content-link-menu-general-xs {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  height: 100%;\r\n  width: 90%;\r\n  margin: 0 1rem;\r\n  border-radius: 3rem;\r\n  background: var(--orange_02);\r\n  animation: open-content-link-menu-general-xs 1s;\r\n  margin: 0;\r\n  .link-menu-general-xs {\r\n    margin: 0.5rem 0;\r\n    font-size: 2rem;\r\n    font-family: var(--font-family-strasua);\r\n    color: white;\r\n    letter-spacing: 0.2rem;\r\n  }\r\n}\r\n\r\n.animation-content-link-menu-general-xs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  animation: open-link-menu-general-xs 1s;\r\n}\r\n\r\n// link\r\n\r\n// link menu langue xs\r\n\r\n.link-menu-container-langue-xs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  margin: 0;\r\n}\r\n\r\n.first-link-menu-xs-langue {\r\n  font-family: var(--font-family-strasua);\r\n  letter-spacing: 0.2rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.link-menu-xs-langue {\r\n  margin: 0.5rem 0;\r\n}\r\n\r\n.menu-langue-xs-link-mid {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n// btn\r\n\r\n// btn-menu-xs\r\n\r\n.btn {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: 2rem;\r\n  width: 2rem;\r\n  margin: 0 2rem 0 0;\r\n}\r\n.btn-barre {\r\n  position: absolute;\r\n  height: 0.2rem;\r\n  width: 2.6rem;\r\n  background: var(--orange_02);\r\n  margin: 0;\r\n  transition: all 0.8s;\r\n}\r\n.btn-barre-1 {\r\n  transform-origin: 0 0;\r\n  left: 1.5px;\r\n}\r\n.btn-barre-2 {\r\n  top: 1.8rem;\r\n  transform-origin: 0 100%;\r\n  left: 1.5px;\r\n}\r\n\r\n// btn menu langue xs\r\n\r\n.btn-open-menu-langue-xs {\r\n  margin: 0 1rem 0 0;\r\n}\r\n.btn-close-menu-langue-xs-content {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 2.5rem;\r\n  width: 100%;\r\n  margin: 0;\r\n\r\n  animation: btn-close-menu-langue-xs 1s;\r\n  @keyframes btn-close-menu-langue-xs {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n.btn-close-menu-langue-xs-close {\r\n  opacity: 0;\r\n}\r\n\r\n.btn-close-menu-langue-xs {\r\n  margin: 0.8rem;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n// btn menu general xs\r\n.btn-open-close-content-link-menu-general-xs {\r\n  margin-left: 1rem;\r\n  font-size: 2rem;\r\n  color: var(--orange_02);\r\n  transition: all 1s;\r\n}\r\n\r\n// animation\r\n\r\n@keyframes menu-xs-open {\r\n  0% {\r\n    transform: translateY(-100vh);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes menu-xs-close {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(-100vh);\r\n  }\r\n}\r\n\r\n// animation menu general xs\r\n\r\n.first-animation-menu-general-xs {\r\n  animation: first-animation-menu-general-xs 1.3s;\r\n  @keyframes first-animation-menu-general-xs {\r\n    0% {\r\n      transform: scaleY(0);\r\n    }\r\n    80% {\r\n      transform: scaleY(0);\r\n    }\r\n    100% {\r\n      transform: scaleY(1);\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes animation-container-menu-general-xs {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  80% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes open-content-link-menu-general-xs {\r\n  0% {\r\n    height: 0;\r\n  }\r\n  100% {\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.close-content-link-menu-general-xs {\r\n  animation: close-content-link-menu-general-xs 1s;\r\n  @keyframes close-content-link-menu-general-xs {\r\n    0% {\r\n      height: 20.8rem;\r\n    }\r\n    100% {\r\n      height: 0;\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes open-link-menu-general-xs {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  30% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n.close-link-menu-general-xs {\r\n  animation: close-link-menu-general-xs 1s;\r\n  @keyframes close-link-menu-general-xs {\r\n    0% {\r\n      opacity: 1;\r\n    }\r\n    50% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n}\r\n\r\n// animation menu langue xs\r\n\r\n.animation-close-menu-langue-xs {\r\n  animation: menu-xs-langue-container-close 1s;\r\n  @keyframes menu-xs-langue-container-close {\r\n    0% {\r\n      height: 10rem;\r\n    }\r\n    40% {\r\n      width: 13rem;\r\n    }\r\n    50% {\r\n      height: 2.5rem;\r\n    }\r\n    100% {\r\n      height: 2.5rem;\r\n      width: 0;\r\n    }\r\n  }\r\n}\r\n// divers - menu\r\n\r\n.fa-globe {\r\n  font-size: 2.5rem;\r\n  color: var(--orange_02);\r\n}\r\n","@use \"media-queries\" as *;\r\n.mail-container {\r\n  grid-area: mail;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 5rem;\r\n  margin: 0;\r\n}\r\n\r\n.mail-content-1 {\r\n  background: white;\r\n  height: 5rem;\r\n  width: calc(50% - 10rem);\r\n  margin: 0;\r\n  transform: translateX(-96rem);\r\n  transition: all 1s;\r\n  border-radius: 0 3rem 3rem 0;\r\n  z-index: 0;\r\n  @include xs {\r\n    transform: translateX(0);\r\n  }\r\n  @include sm {\r\n    transform: translateX(0);\r\n  }\r\n  @include md {\r\n    transform: translateX(0);\r\n  }\r\n  &.active {\r\n    transform: translateX(0);\r\n    border-radius: 0;\r\n  }\r\n}\r\n.mail-content-2 {\r\n  background: white;\r\n  height: 5rem;\r\n  width: calc(50% - 10rem);\r\n  margin: 0;\r\n  transform: translateX(96rem);\r\n  transition: all 1s;\r\n  border-radius: 3rem 0 0 3rem;\r\n  z-index: 0;\r\n  @include xs {\r\n    transform: translateX(0);\r\n  }\r\n  @include sm {\r\n    transform: translateX(0);\r\n  }\r\n  @include md {\r\n    transform: translateX(0);\r\n  }\r\n  &.active {\r\n    transform: translateX(0);\r\n    border-radius: 0;\r\n  }\r\n}\r\n\r\n.contact {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 5rem;\r\n  width: 20rem;\r\n  background-color: #eee;\r\n  color: #eee;\r\n  position: relative;\r\n  overflow: hidden;\r\n  p {\r\n    font-family: var(--font-family);\r\n    letter-spacing: 0.1rem;\r\n    font-size: 2rem;\r\n    font-weight: 400;\r\n  }\r\n  &:hover::before {\r\n    opacity: 1;\r\n  }\r\n  &.active {\r\n    background: white;\r\n    color: var(--blue);\r\n    transition: all 1s;\r\n    transition-delay: 0.8s;\r\n  }\r\n}\r\n\r\n.contact::before {\r\n  content: \"Email@exemple.com\";\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--blue);\r\n  background: white;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  transition: all 1s;\r\n  font-weight: 400;\r\n  font-size: 1.8rem;\r\n  font-family: var(--font-family);\r\n  text-decoration: underline;\r\n  letter-spacing: 0.1rem;\r\n  border-radius: 0;\r\n  opacity: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/nos-valeurs/nos-valeurs.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/nos-valeurs/nos-valeurs.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Landscape phones and down */
/* Landscape phone to portrait tablet */
/* Portrait tablet to landscape and desktop */
/* Large desktop */
.container {
  display: grid;
  background: #eee;
  grid: "img header" 10rem "separator-2 separator-3" auto "slogan-container slogan-container" auto "menu menu" auto "general general" auto "mail mail" auto "footer footer" auto/25rem auto;
}
@media (max-width: 480px) {
  .container {
    grid: "img header" 8rem "menu-xs menu-xs" auto "separator-2 separator-3" auto "slogan-container slogan-container" auto "h1-xs h1-xs" auto "menu menu" auto "general general" auto "mail mail" auto "footer footer" auto/22rem auto;
  }
}

.cercle-content {
  margin: 0 0 0 0;
  height: 35rem;
  grid-area: slogan-container;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (max-width: 480px) {
  .cercle-content {
    display: none;
  }
}

.cerlce-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18rem;
  width: 130rem;
  border-radius: 3rem;
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
.cerlce-container p {
  margin-top: 5rem;
  font-weight: 400;
  font-size: 3.2rem;
  text-align: center;
  letter-spacing: 0.5rem;
  font-family: var(--font-family-strasua);
  color: var(--orange_01);
}

.img-content {
  margin-right: 1rem;
  height: 18rem;
  width: 18rem;
}

.general-content {
  grid-area: general;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
}
.general-content .text-content {
  margin: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  text-align: center;
  background: #d6d6d6;
}
@media (max-width: 480px) {
  .general-content .text-content {
    margin: 0;
  }
}

.separator-23 {
  margin-top: 4rem;
  height: 6px;
  width: 124rem;
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
}`, "",{"version":3,"sources":["webpack://./src/index/nos-valeurs/_media-queries.scss","webpack://./src/index/nos-valeurs/nos-valeurs.scss"],"names":[],"mappings":"AAAA,8BAAA;AAMA,uCAAA;AAMA,6CAAA;AAMA,kBAAA;ACjBA;EACE,aAAA;EACA,gBAAA;EACA,yLACE;AAGJ;ADNE;ECDF;IAaI,kOACE;EAHJ;AACF;;AAcA;EACE,eAAA;EACA,aAAA;EACA,2BAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAXF;ADrBE;ECyBF;IASI,aAAA;EATF;AACF;;AAWA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,wBAAA;AARF;AASE;EACE;IACE,oBAAA;EAPJ;EASE;IACE,oBAAA;EAPJ;AACF;AASE;EACE,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,uCAAA;EACA,uBAAA;AAPJ;;AAUA;EACE,kBAAA;EACA,aAAA;EACA,YAAA;AAPF;;AAUA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,SAAA;AAPF;AASE;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AAPJ;AD9EE;EC6EA;IAUI,SAAA;EALJ;AACF;;AAQA;EACE,gBAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,2BAAA;EACA,0BAAA;EACA,wBAAA;AALF;AAME;EACE;IACE,oBAAA;EAJJ;EAME;IACE,oBAAA;EAJJ;AACF","sourcesContent":["/* Landscape phones and down */\r\n@mixin xs {\r\n  @media (max-width: 480px) {\r\n    @content;\r\n  }\r\n}\r\n/* Landscape phone to portrait tablet */\r\n@mixin sm {\r\n  @media (max-width: 767px) {\r\n    @content;\r\n  }\r\n}\r\n/* Portrait tablet to landscape and desktop */\r\n@mixin md {\r\n  @media (min-width: 768px) and (max-width: 979px) {\r\n    @content;\r\n  }\r\n}\r\n/* Large desktop */\r\n@mixin xl {\r\n  @media (min-width: 1200px) and (max-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin xxl {\r\n  @media (min-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n","@use \"media-queries\" as *;\r\n.container {\r\n  display: grid;\r\n  background: #eee;\r\n  grid:\r\n    \"img header\" 10rem\r\n    \"separator-2 separator-3\" auto\r\n    \"slogan-container slogan-container\" auto\r\n    \"menu menu\" auto\r\n    \"general general\" auto\r\n    \"mail mail\" auto\r\n    \"footer footer\" auto\r\n    / 25rem auto;\r\n  @include xs {\r\n    grid:\r\n      \"img header\" 8rem\r\n      \"menu-xs menu-xs\" auto\r\n      \"separator-2 separator-3\" auto\r\n      \"slogan-container slogan-container\" auto\r\n      \"h1-xs h1-xs\" auto\r\n      \"menu menu\" auto\r\n      \"general general\" auto\r\n      \"mail mail\" auto\r\n      \"footer footer\" auto\r\n      / 22rem auto;\r\n  }\r\n}\r\n.cercle-content {\r\n  margin: 0 0 0 0;\r\n  height: 35rem;\r\n  grid-area: slogan-container;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  @include xs {\r\n    display: none;\r\n  }\r\n}\r\n.cerlce-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 18rem;\r\n  width: 130rem;\r\n  border-radius: 3rem;\r\n  animation-name: logo-2;\r\n  animation-duration: 1.8s;\r\n  @keyframes logo-2 {\r\n    from {\r\n      transform: scaley(0);\r\n    }\r\n    to {\r\n      transform: scaley(1);\r\n    }\r\n  }\r\n  p {\r\n    margin-top: 5rem;\r\n    font-weight: 400;\r\n    font-size: 3.2rem;\r\n    text-align: center;\r\n    letter-spacing: 0.5rem;\r\n    font-family: var(--font-family-strasua);\r\n    color: var(--orange_01);\r\n  }\r\n}\r\n.img-content {\r\n  margin-right: 1rem;\r\n  height: 18rem;\r\n  width: 18rem;\r\n}\r\n\r\n.general-content {\r\n  grid-area: general;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin: 0;\r\n\r\n  .text-content {\r\n    margin: 4rem 0 0 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 100vh;\r\n    width: 100%;\r\n    text-align: center;\r\n    background: #d6d6d6;\r\n    @include xs {\r\n      margin: 0;\r\n    }\r\n  }\r\n}\r\n.separator-23 {\r\n  margin-top: 4rem;\r\n  height: 6px;\r\n  width: 124rem;\r\n  border-radius: 5px;\r\n  background: var(--green_01);\r\n  animation-name: chargement;\r\n  animation-duration: 1.8s;\r\n  @keyframes chargement {\r\n    0% {\r\n      transform: scaleX(0);\r\n    }\r\n    100% {\r\n      transform: scaleX(1);\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/index/nos-valeurs/nos-valeurs.scss":
/*!************************************************!*\
  !*** ./src/index/nos-valeurs/nos-valeurs.scss ***!
  \************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_nos_valeurs_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./nos-valeurs.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/nos-valeurs/nos-valeurs.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_nos_valeurs_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_nos_valeurs_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_nos_valeurs_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_nos_valeurs_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			"main7": 0
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
/*!**********************************************!*\
  !*** ./src/index/nos-valeurs/nos-valeurs.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nos_valeurs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nos-valeurs.scss */ "./src/index/nos-valeurs/nos-valeurs.scss");
/* harmony import */ var C_Users_Azstras_OneDrive_Bureau_AURO_IT_src_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/assets/styles/style.scss */ "./src/assets/styles/style.scss");



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

// mail-content-1

var mailContent1 = document.querySelector(".mail-content-1");
window.addEventListener("scroll", function () {
  var _document$documentEle = document.documentElement,
    scrollTop = _document$documentEle.scrollTop,
    clientHeight = _document$documentEle.clientHeight;
  var topElementToTopViewport = mailContent1.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1) {
    mailContent1.classList.add("active");
  }
});

// mail-content-2

var mailContent2 = document.querySelector(".mail-content-2");
window.addEventListener("scroll", function () {
  var _document$documentEle2 = document.documentElement,
    scrollTop = _document$documentEle2.scrollTop,
    clientHeight = _document$documentEle2.clientHeight;
  var topElementToTopViewport = mailContent2.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1) {
    mailContent2.classList.add("active");
  }
});

// contact

var contact = document.querySelector(".contact");
window.addEventListener("scroll", function () {
  var _document$documentEle3 = document.documentElement,
    scrollTop = _document$documentEle3.scrollTop,
    clientHeight = _document$documentEle3.clientHeight;
  var topElementToTopViewport = contact.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1) {
    contact.classList.add("active");
  }
});

// footer

var footer = document.querySelector("footer");
window.addEventListener("scroll", function () {
  var _document$documentEle4 = document.documentElement,
    scrollTop = _document$documentEle4.scrollTop,
    clientHeight = _document$documentEle4.clientHeight;
  var topElementToTopViewport = footer.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1) {
    footer.classList.add("active");
  }
});

// text-footer

var textFooter = document.querySelector(".text-footer");
window.addEventListener("scroll", function () {
  var _document$documentEle5 = document.documentElement,
    scrollTop = _document$documentEle5.scrollTop,
    clientHeight = _document$documentEle5.clientHeight;
  var topElementToTopViewport = textFooter.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1) {
    textFooter.classList.add("active");
  }
});

// copyright

var copyright = document.querySelector(".copyright");
window.addEventListener("scroll", function () {
  var _document$documentEle6 = document.documentElement,
    scrollTop = _document$documentEle6.scrollTop,
    clientHeight = _document$documentEle6.clientHeight;
  var topElementToTopViewport = copyright.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1) {
    copyright.classList.add("active");
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main7-bundle.js.map