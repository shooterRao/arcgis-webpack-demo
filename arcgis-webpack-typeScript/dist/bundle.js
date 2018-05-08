define(["dojo/dom","dojo/on","esri/map"], function(__WEBPACK_EXTERNAL_MODULE_dojo_dom__, __WEBPACK_EXTERNAL_MODULE_dojo_on__, __WEBPACK_EXTERNAL_MODULE_esri_map__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:9000/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Map = __webpack_require__(/*! esri/map */ \"esri/map\");\r\nvar dom = __webpack_require__(/*! dojo/dom */ \"dojo/dom\");\r\nvar on = __webpack_require__(/*! dojo/on */ \"dojo/on\");\r\nvar URL = 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer';\r\nvar map = new Map(\"baseMap\", {\r\n    logo: false,\r\n    basemap: \"topo\",\r\n    center: [-122.45, 37.75],\r\n    zoom: 13\r\n});\r\n// OK\r\nconsole.log(dom);\r\nconsole.log(on);\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "dojo/dom":
/*!***************************!*\
  !*** external "dojo/dom" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_dojo_dom__;\n\n//# sourceURL=webpack:///external_%22dojo/dom%22?");

/***/ }),

/***/ "dojo/on":
/*!**************************!*\
  !*** external "dojo/on" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_dojo_on__;\n\n//# sourceURL=webpack:///external_%22dojo/on%22?");

/***/ }),

/***/ "esri/map":
/*!***************************!*\
  !*** external "esri/map" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_esri_map__;\n\n//# sourceURL=webpack:///external_%22esri/map%22?");

/***/ })

/******/ })});;