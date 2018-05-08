define(["esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/ArcGISTiledMapServiceLayer","esri/map"], function(__WEBPACK_EXTERNAL_MODULE_esri_layers_ArcGISDynamicMapServiceLayer__, __WEBPACK_EXTERNAL_MODULE_esri_layers_ArcGISTiledMapServiceLayer__, __WEBPACK_EXTERNAL_MODULE_esri_map__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _map = __webpack_require__(/*! esri/map */ \"esri/map\");\n\nvar _map2 = _interopRequireDefault(_map);\n\nvar _ArcGISTiledMapServiceLayer = __webpack_require__(/*! esri/layers/ArcGISTiledMapServiceLayer */ \"esri/layers/ArcGISTiledMapServiceLayer\");\n\nvar _ArcGISTiledMapServiceLayer2 = _interopRequireDefault(_ArcGISTiledMapServiceLayer);\n\nvar _ArcGISDynamicMapServiceLayer = __webpack_require__(/*! esri/layers/ArcGISDynamicMapServiceLayer */ \"esri/layers/ArcGISDynamicMapServiceLayer\");\n\nvar _ArcGISDynamicMapServiceLayer2 = _interopRequireDefault(_ArcGISDynamicMapServiceLayer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// 广州切片服务,这里可以换成本地的\nvar gzStatic = \"http://172.16.45.70/arcgis/rest/services/%E6%94%BF%E5%8A%A1%E7%94%B5%E5%AD%90%E5%9C%B0%E5%9B%BE/MapServer\"; /* \r\n                                                                                                                              A test\r\n                                                                                                                            */\n\nvar gzDynamic = \"http://10.194.148.22:6080/arcgis/rest/services/%E5%8E%9F%E4%B8%89%E8%A7%84%E5%90%88%E4%B8%80%E6%9C%8D%E5%8A%A1/%E4%B8%AD%E5%BF%83%E5%9F%8E%E5%8C%BA%E7%94%A8%E5%9C%B0%E8%A7%84%E5%88%92/MapServer\";\n\nvar map = new _map2.default(\"baseMap\", {\n  logo: false\n});\n\nvar staticLayer = new _ArcGISTiledMapServiceLayer2.default(gzStatic);\nvar dynamicLayer = new _ArcGISDynamicMapServiceLayer2.default(gzDynamic);\n\nmap.addLayer(staticLayer);\nmap.addLayer(dynamicLayer);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "esri/layers/ArcGISDynamicMapServiceLayer":
/*!***********************************************************!*\
  !*** external "esri/layers/ArcGISDynamicMapServiceLayer" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_ArcGISDynamicMapServiceLayer__;\n\n//# sourceURL=webpack:///external_%22esri/layers/ArcGISDynamicMapServiceLayer%22?");

/***/ }),

/***/ "esri/layers/ArcGISTiledMapServiceLayer":
/*!*********************************************************!*\
  !*** external "esri/layers/ArcGISTiledMapServiceLayer" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_ArcGISTiledMapServiceLayer__;\n\n//# sourceURL=webpack:///external_%22esri/layers/ArcGISTiledMapServiceLayer%22?");

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