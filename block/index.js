/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),
/* 6 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),
/* 7 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),
/* 8 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__(5);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/assets/mcc-icon.svg
var _path, _path2, _path3, _path4, _path5;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMccIcon(props) {
  return /*#__PURE__*/external_React_["createElement"]("svg", _extends({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 98.94 66.17"
  }, props), _path || (_path = /*#__PURE__*/external_React_["createElement"]("path", {
    d: "M98.94 59.63c0 6.42-4.16 8.47-9.24 4.54L68.2 47.56l30.74-24.22z",
    fill: "#ff8d6a"
  })), _path2 || (_path2 = /*#__PURE__*/external_React_["createElement"]("path", {
    d: "M9.24 64.17C4.16 68.1 0 66.05 0 59.63V23.34l30.74 24.22z",
    fill: "#52d3f4"
  })), _path3 || (_path3 = /*#__PURE__*/external_React_["createElement"]("path", {
    d: "M68.2 47.56l-11.39 9a12.49 12.49 0 01-14.68 0l-11.39-9 18.73-14.48z",
    fill: "#9c2af3"
  })), _path4 || (_path4 = /*#__PURE__*/external_React_["createElement"]("path", {
    d: "M9.24 2l40.23 31.08-18.73 14.48L0 23.34V6.54C0 .11 4.16-1.93 9.24 2z",
    fill: "#3d3de8"
  })), _path5 || (_path5 = /*#__PURE__*/external_React_["createElement"]("path", {
    d: "M89.7 2c5.08-3.93 9.24-1.89 9.24 4.54v16.8L68.2 47.56 49.47 33.08z",
    fill: "#f73dfc"
  })));
}

/* harmony default export */ var mcc_icon = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5OC45NCA2Ni4xNyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZjhkNmE7fS5jbHMtMntmaWxsOiM1MmQzZjQ7fS5jbHMtM3tmaWxsOiM5YzJhZjM7fS5jbHMtNHtmaWxsOiMzZDNkZTg7fS5jbHMtNXtmaWxsOiNmNzNkZmM7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTk4Ljk0LDU5LjYzYzAsNi40Mi00LjE2LDguNDctOS4yNCw0LjU0TDY4LjIsNDcuNTYsOTguOTQsMjMuMzRaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNOS4yNCw2NC4xN0M0LjE2LDY4LjEsMCw2Ni4wNSwwLDU5LjYzVjIzLjM0TDMwLjc0LDQ3LjU2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTY4LjIsNDcuNTZsLTExLjM5LDlhMTIuNDksMTIuNDksMCwwLDEtMTQuNjgsMGwtMTEuMzktOUw0OS40NywzMy4wOFoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik05LjI0LDIsNDkuNDcsMzMuMDgsMzAuNzQsNDcuNTYsMCwyMy4zNFY2LjU0QzAsLjExLDQuMTYtMS45Myw5LjI0LDJaIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNODkuNywyYzUuMDgtMy45Myw5LjI0LTEuODksOS4yNCw0LjU0djE2LjhMNjguMiw0Ny41Niw0OS40NywzMy4wOFoiLz48L3N2Zz4=");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(1);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(8);

// CONCATENATED MODULE: ./src/assets/mcc-logo.svg
var _defs, mcc_logo_path, mcc_logo_path2, mcc_logo_path3, mcc_logo_path4, mcc_logo_path5, _path6, _path7, _path8;

function mcc_logo_extends() { mcc_logo_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return mcc_logo_extends.apply(this, arguments); }



function SvgMccLogo(props) {
  return /*#__PURE__*/external_React_["createElement"]("svg", mcc_logo_extends({
    id: "mcc-logo_svg__Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 379.01 45.15"
  }, props), _defs || (_defs = /*#__PURE__*/external_React_["createElement"]("defs", null, /*#__PURE__*/external_React_["createElement"]("style", null, ".mcc-logo_svg__cls-3{fill:#9c2af3}.mcc-logo_svg__cls-6,.mcc-logo_svg__cls-7{fill:#141667}"))), mcc_logo_path || (mcc_logo_path = /*#__PURE__*/external_React_["createElement"]("path", {
    d: "M67.51 40.69c0 4.38-2.84 5.77-6.31 3.09L46.53 32.45l21-16.53z",
    fill: "#ff8d6a"
  })), mcc_logo_path2 || (mcc_logo_path2 = /*#__PURE__*/external_React_["createElement"]("path", {
    d: "M6.31 43.78C2.84 46.46 0 45.07 0 40.69V15.92l21 16.53z",
    fill: "#52d3f4"
  })), mcc_logo_path3 || (mcc_logo_path3 = /*#__PURE__*/external_React_["createElement"]("path", {
    className: "mcc-logo_svg__cls-3",
    d: "M46.53 32.45l-7.77 6.12a8.52 8.52 0 01-10 0L21 32.45l12.78-9.88z"
  })), mcc_logo_path4 || (mcc_logo_path4 = /*#__PURE__*/external_React_["createElement"]("path", {
    d: "M6.31 1.36l27.44 21.21L21 32.45 0 15.92V4.46c0-4.38 2.84-5.78 6.31-3.1z",
    fill: "#3d3de8"
  })), mcc_logo_path5 || (mcc_logo_path5 = /*#__PURE__*/external_React_["createElement"]("path", {
    d: "M61.2 1.36c3.47-2.68 6.31-1.28 6.31 3.1v11.46l-21 16.53-12.76-9.88z",
    fill: "#f73dfc"
  })), _path6 || (_path6 = /*#__PURE__*/external_React_["createElement"]("path", {
    className: "mcc-logo_svg__cls-6",
    d: "M124.12 34.4h-5.85V21.34l-6.88 13.06h-2.78l-6.92-13.13V34.4h-5.85V9.89h5.93L110 25.44l8.23-15.55h5.89zM147 34.4h-5.9v-1.46a8.28 8.28 0 01-5.71 2c-4.87 0-9-3.91-9-9.73s4.09-9.73 9-9.73a8.28 8.28 0 015.71 2V16h5.9zm-5.85-9.18a4.59 4.59 0 00-4.5-4.75 4.41 4.41 0 00-4.43 4.75c0 2.86 1.86 4.76 4.43 4.76a4.56 4.56 0 004.45-4.76zM164 15.93l-.26 5.85h-1.06c-4.09 0-6.33 2.13-6.33 6.88v5.74h-5.85V16h5.85v3.51a7.11 7.11 0 016.33-3.77 5 5 0 011.32.19zM178.41 26.61l5.38 1.17a9.22 9.22 0 01-9.37 7.22c-5.48 0-10-3.91-10-9.73s4.54-9.73 10-9.73a9.34 9.34 0 019.37 7.06l-5.49 1.32a3.79 3.79 0 00-3.88-3.26 4.31 4.31 0 00-4.42 4.56 4.29 4.29 0 004.39 4.61 3.94 3.94 0 004.02-3.22zM205.12 25.22c0 5.82-4.61 9.7-10.06 9.7s-10.17-3.88-10.17-9.7 4.61-9.66 10.17-9.66 10.06 3.88 10.06 9.66zm-5.64 0a4.49 4.49 0 10-9 0 4.49 4.49 0 109 0zM238.23 22.92V34.4h-5.82V24.16a3.11 3.11 0 00-3.07-3.4c-2.16 0-3.59 1.57-3.59 4.65v9h-5.85V24.16a3.13 3.13 0 00-3.11-3.4c-2.12 0-3.51 1.57-3.51 4.65v9h-5.86V16h5.86v1.68a6.93 6.93 0 015.41-2.23 6.81 6.81 0 016 3.11 7.92 7.92 0 016.51-3.11c3.92.04 7.03 3 7.03 7.47z"
  })), _path7 || (_path7 = /*#__PURE__*/external_React_["createElement"]("path", {
    className: "mcc-logo_svg__cls-3",
    d: "M362.63 16l-.26 5.85h-1.06c-4.1 0-6.33 2.12-6.33 6.88v5.74h-5.85V16.12H355v3.51a7.11 7.11 0 016.33-3.77 5 5 0 011.3.14zM267.26 22.1c0 7.7-5.36 12.38-12.42 12.38-7.91 0-13.6-5.83-13.6-13.06a13.06 13.06 0 0113.21-13.14 12.87 12.87 0 0111 5.76l-4.89 2.8A7.57 7.57 0 00247 21.45c0 4.29 3 7.42 7.92 7.42 3.34 0 5.54-1.48 6.44-3.89h-6.73v-5h12.63zM288.79 16v18h-5.4v-1.71a6.78 6.78 0 01-5.39 2.19c-4.72 0-8.6-4.14-8.6-9.5s3.88-9.5 8.6-9.5a6.75 6.75 0 015.36 2.19V16zm-5.4 9a4.29 4.29 0 10-8.57 0 4.29 4.29 0 108.57 0zM306.24 33a9.91 9.91 0 01-5 1.36c-4.57 0-7.31-2.49-7.31-7.32v-7h-3.33v-4.63h3.33V10h5.85v5.41h5.41v4.65h-5.41v6.36c0 1.91.91 2.68 2.45 2.68a6 6 0 002.67-.74zM347 26.25h-13.47a4.24 4.24 0 007.86 1.43l5.2 1.06c-1.58 3.88-4.91 5.74-9.11 5.74a9.47 9.47 0 01-9.7-9.73 9.5 9.5 0 019.73-9.75c5.2 0 9.37 3.73 9.48 9.73zm-13.35-3.58h7.57a3.67 3.67 0 00-3.7-2.89 4 4 0 00-3.88 2.89zM325.56 23.28v11h-5.4V24.07a3 3 0 00-3.16-3.28c-2 0-3.35 1.15-3.35 3.71v9.83h-5.4V9.13h5.4V18a6.19 6.19 0 015.15-2.2c3.67.02 6.76 2.62 6.76 7.48z"
  })), _path8 || (_path8 = /*#__PURE__*/external_React_["createElement"]("path", {
    className: "mcc-logo_svg__cls-7",
    d: "M371.59 29h-1.84v5.53h-1.34V29h-1.83v-1.33h5zM379 34.48h-1.33v-4.42l-1.92 3.17h-.15l-1.92-3.16v4.41h-1.35v-6.81h1.39l1.95 3.22 1.95-3.22H379z"
  })));
}

/* harmony default export */ var mcc_logo = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzkuMDEgNDUuMTUiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmY4ZDZhO30uY2xzLTJ7ZmlsbDojNTJkM2Y0O30uY2xzLTN7ZmlsbDojOWMyYWYzO30uY2xzLTR7ZmlsbDojM2QzZGU4O30uY2xzLTV7ZmlsbDojZjczZGZjO30uY2xzLTZ7ZmlsbDojMTQxNjY3O30uY2xzLTd7ZmlsbDojMTQxNjY3O308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02Ny41MSw0MC42OWMwLDQuMzgtMi44NCw1Ljc3LTYuMzEsMy4wOUw0Ni41MywzMi40NWwyMS0xNi41M1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02LjMxLDQzLjc4QzIuODQsNDYuNDYsMCw0NS4wNywwLDQwLjY5VjE1LjkyTDIxLDMyLjQ1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQ2LjUzLDMyLjQ1bC03Ljc3LDYuMTJhOC41Miw4LjUyLDAsMCwxLTEwLDBMMjEsMzIuNDVsMTIuNzgtOS44OFoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik02LjMxLDEuMzYsMzMuNzUsMjIuNTcsMjEsMzIuNDUsMCwxNS45MlY0LjQ2QzAsLjA4LDIuODQtMS4zMiw2LjMxLDEuMzZaIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNNjEuMiwxLjM2YzMuNDctMi42OCw2LjMxLTEuMjgsNi4zMSwzLjFWMTUuOTJsLTIxLDE2LjUzTDMzLjc1LDIyLjU3WiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTEyNC4xMiwzNC40aC01Ljg1VjIxLjM0TDExMS4zOSwzNC40aC0yLjc4bC02LjkyLTEzLjEzVjM0LjRIOTUuODRWOS44OWg1LjkzTDExMCwyNS40NGw4LjIzLTE1LjU1aDUuODlaIi8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNMTQ3LDM0LjRIMTQxLjFWMzIuOTRhOC4yOCw4LjI4LDAsMCwxLTUuNzEsMmMtNC44NywwLTktMy45MS05LTkuNzNzNC4wOS05LjczLDktOS43M2E4LjI4LDguMjgsMCwwLDEsNS43MSwyVjE2SDE0N1ptLTUuODUtOS4xOGE0LjU5LDQuNTksMCwwLDAtNC41LTQuNzUsNC40MSw0LjQxLDAsMCwwLTQuNDMsNC43NWMwLDIuODYsMS44Niw0Ljc2LDQuNDMsNC43NkE0LjU2LDQuNTYsMCwwLDAsMTQxLjEsMjUuMjJaIi8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNMTY0LDE1LjkzbC0uMjYsNS44NWgtMS4wNmMtNC4wOSwwLTYuMzMsMi4xMy02LjMzLDYuODhWMzQuNGgtNS44NVYxNmg1Ljg1djMuNTFhNy4xMSw3LjExLDAsMCwxLDYuMzMtMy43N0E1LDUsMCwwLDEsMTY0LDE1LjkzWiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTE3OC40MSwyNi42MWw1LjM4LDEuMTdBOS4yMiw5LjIyLDAsMCwxLDE3NC40MiwzNWMtNS40OCwwLTEwLTMuOTEtMTAtOS43M3M0LjU0LTkuNzMsMTAtOS43M2E5LjM0LDkuMzQsMCwwLDEsOS4zNyw3LjA2bC01LjQ5LDEuMzJhMy43OSwzLjc5LDAsMCwwLTMuODgtMy4yNkE0LjMxLDQuMzEsMCwwLDAsMTcwLDI1LjIyYTQuMjksNC4yOSwwLDAsMCw0LjM5LDQuNjFBMy45NCwzLjk0LDAsMCwwLDE3OC40MSwyNi42MVoiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0yMDUuMTIsMjUuMjJjMCw1LjgyLTQuNjEsOS43LTEwLjA2LDkuN3MtMTAuMTctMy44OC0xMC4xNy05LjcsNC42MS05LjY2LDEwLjE3LTkuNjZTMjA1LjEyLDE5LjQ0LDIwNS4xMiwyNS4yMlptLTUuNjQsMGE0LjQ5LDQuNDksMCwxLDAtOSwwLDQuNDksNC40OSwwLDEsMCw5LDBaIi8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNMjM4LjIzLDIyLjkyVjM0LjRoLTUuODJWMjQuMTZhMy4xMSwzLjExLDAsMCwwLTMuMDctMy40Yy0yLjE2LDAtMy41OSwxLjU3LTMuNTksNC42NXY5SDIxOS45VjI0LjE2YTMuMTMsMy4xMywwLDAsMC0zLjExLTMuNGMtMi4xMiwwLTMuNTEsMS41Ny0zLjUxLDQuNjV2OWgtNS44NlYxNmg1Ljg2djEuNjhhNi45Myw2LjkzLDAsMCwxLDUuNDEtMi4yMyw2LjgxLDYuODEsMCwwLDEsNiwzLjExLDcuOTIsNy45MiwwLDAsMSw2LjUxLTMuMTFDMjM1LjEyLDE1LjQ5LDIzOC4yMywxOC40NSwyMzguMjMsMjIuOTJaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMzYyLjYzLDE2bC0uMjYsNS44NWgtMS4wNmMtNC4xLDAtNi4zMywyLjEyLTYuMzMsNi44OHY1Ljc0aC01Ljg1VjE2LjEySDM1NXYzLjUxYTcuMTEsNy4xMSwwLDAsMSw2LjMzLTMuNzdBNSw1LDAsMCwxLDM2Mi42MywxNloiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yNjcuMjYsMjIuMWMwLDcuNy01LjM2LDEyLjM4LTEyLjQyLDEyLjM4LTcuOTEsMC0xMy42LTUuODMtMTMuNi0xMy4wNkExMy4wNiwxMy4wNiwwLDAsMSwyNTQuNDUsOC4yOGExMi44NywxMi44NywwLDAsMSwxMSw1Ljc2bC00Ljg5LDIuOEE3LjU3LDcuNTcsMCwwLDAsMjQ3LDIxLjQ1YzAsNC4yOSwzLDcuNDIsNy45Miw3LjQyLDMuMzQsMCw1LjU0LTEuNDgsNi40NC0zLjg5aC02Ljczdi01aDEyLjYzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTI4OC43OSwxNlYzNGgtNS40VjMyLjI5QTYuNzgsNi43OCwwLDAsMSwyNzgsMzQuNDhjLTQuNzIsMC04LjYtNC4xNC04LjYtOS41czMuODgtOS41LDguNi05LjVhNi43NSw2Ljc1LDAsMCwxLDUuMzYsMi4xOVYxNlptLTUuNCw5YTQuMjksNC4yOSwwLDEsMC04LjU3LDAsNC4yOSw0LjI5LDAsMSwwLDguNTcsMFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0zMDYuMjQsMzNhOS45MSw5LjkxLDAsMCwxLTUsMS4zNmMtNC41NywwLTcuMzEtMi40OS03LjMxLTcuMzJ2LTdoLTMuMzNWMTUuNDFoMy4zM1YxMGg1Ljg1djUuNDFoNS40MXY0LjY1aC01LjQxdjYuMzZjMCwxLjkxLjkxLDIuNjgsMi40NSwyLjY4YTYsNiwwLDAsMCwyLjY3LS43NFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0zNDcsMjYuMjVIMzMzLjUzYTQuMjQsNC4yNCwwLDAsMCw3Ljg2LDEuNDNsNS4yLDEuMDZjLTEuNTgsMy44OC00LjkxLDUuNzQtOS4xMSw1Ljc0YTkuNDcsOS40NywwLDAsMS05LjctOS43M0E5LjUsOS41LDAsMCwxLDMzNy41MSwxNWM1LjIsMCw5LjM3LDMuNzMsOS40OCw5LjczWm0tMTMuMzUtMy41OGg3LjU3YTMuNjcsMy42NywwLDAsMC0zLjctMi44OUE0LDQsMCwwLDAsMzMzLjY0LDIyLjY3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTMyNS41NiwyMy4yOHYxMWgtNS40VjI0LjA3QTMsMywwLDAsMCwzMTcsMjAuNzljLTIsMC0zLjM1LDEuMTUtMy4zNSwzLjcxdjkuODNoLTUuNFY5LjEzaDUuNFYxOGE2LjE5LDYuMTksMCwwLDEsNS4xNS0yLjJDMzIyLjQ3LDE1LjgyLDMyNS41NiwxOC40MiwzMjUuNTYsMjMuMjhaIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNMzcxLjU5LDI5aC0xLjg0djUuNTNoLTEuMzRWMjloLTEuODNWMjcuNjdoNVoiLz48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik0zNzksMzQuNDhoLTEuMzNWMzAuMDZsLTEuOTIsMy4xN2gtLjE1bC0xLjkyLTMuMTZ2NC40MWgtMS4zNVYyNy42N2gxLjM5bDEuOTUsMy4yMiwxLjk1LTMuMjJIMzc5WiIvPjwvc3ZnPg==");

// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(6);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./config.js
const ALLOWED_IMAGE_FILES = ["jpeg", "jpg", "png", "gif"];
const ALLOWED_VIDEO_FILES = ["mpg", "mp4", "ogv", "mov", "webm", "3gp", "m4f", "mj2", "mkv", "ogg"];
// CONCATENATED MODULE: ./src/utils.js

function isImageUrl(url) {
  if (!url) return false;
  return url.match(new RegExp(`\.(${ALLOWED_IMAGE_FILES.join("|")})$`)) != null;
}
function isVideoUrl(url) {
  if (!url) return false;
  return url.match(new RegExp(`\.(${ALLOWED_VIDEO_FILES.join("|")})$`)) != null;
}
// CONCATENATED MODULE: ./src/editor.scss
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/edit.js













class edit_MarcomBlock extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);

    defineProperty_default()(this, "openModal", () => {
      this.setState({
        isOpen: true
      });
    });

    defineProperty_default()(this, "openLoginModal", () => {
      this.setState({
        isLoginOpen: true
      });
    });

    defineProperty_default()(this, "closeModalWithIsLoading", () => this.setState({
      isOpen: false,
      isLoading: true
    }));

    defineProperty_default()(this, "closeModal", () => this.setState({
      isOpen: false,
      isLoading: false
    }));

    defineProperty_default()(this, "closeLoginModal", () => this.setState({
      isLoginOpen: false,
      isLoading: false
    }));

    defineProperty_default()(this, "addMediaFromUrl", async payload => {
      const url = '/marcom/v1/getMarcomAsset';

      try {
        await external_wp_apiFetch_default()({
          path: url,
          method: 'POST',
          data: payload
        }).then(mediaUrl => {
          if (isImageUrl(mediaUrl)) {
            this.setImage(mediaUrl);
          } else if (isVideoUrl(mediaUrl)) {
            this.setVideo(mediaUrl);
          } else {
            return this.closeModal();
          }

          this.setState({
            isLoading: false
          });
        });
      } catch (e) {
        this.closeModal();
        this.setState({
          isLoading: false
        });
        console.log('Error in block', {
          url,
          error: e
        });
      }
    });

    defineProperty_default()(this, "setImage", mediaUrl => {
      this.props.setAttributes({
        mediaID: mediaUrl
      });
      const name = 'core/image';
      const currentBlock = Object(external_wp_data_["select"])('core/block-editor').getSelectedBlock();
      const rootId = Object(external_wp_data_["select"])('core/block-editor').getBlockRootClientId(currentBlock.clientId);
      const insertedBlock = Object(external_wp_blocks_["createBlock"])(name, {
        url: mediaUrl
      });
      const addedBlock = Object(external_wp_data_["select"])('core/block-editor').getBlockInsertionPoint(currentBlock);
      Object(external_wp_data_["dispatch"])('core/block-editor').insertBlock(insertedBlock, addedBlock.index, rootId);
      Object(external_wp_data_["dispatch"])('core/block-editor').removeBlock(this.props.clientId, false);
    });

    defineProperty_default()(this, "setVideo", mediaUrl => {
      this.props.setAttributes({
        mediaID: mediaUrl
      });
      const name = 'core/video';
      const currentBlock = Object(external_wp_data_["select"])('core/block-editor').getSelectedBlock();
      const rootId = Object(external_wp_data_["select"])('core/block-editor').getBlockRootClientId(currentBlock.clientId);
      const insertedBlock = Object(external_wp_blocks_["createBlock"])(name, {
        src: mediaUrl
      });
      const addedBlock = Object(external_wp_data_["select"])('core/block-editor').getBlockInsertionPoint(currentBlock);
      Object(external_wp_data_["dispatch"])('core/block-editor').insertBlock(insertedBlock, addedBlock.index, rootId);
      Object(external_wp_data_["dispatch"])('core/block-editor').removeBlock(this.props.clientId, false);
    });

    this.state = {
      isOpen: false,
      isLoginOpen: false,
      marcomUrl: '',
      isLoading: false,
      isAuthenticated: false
    };
  }

  componentDidMount() {
    external_wp_apiFetch_default()({
      path: '/marcom/v1/marcom_url'
    }).then(marcomUrl => {
      marcomUrl = marcomUrl.replace(/\/$/, '');
      this.setState({
        marcomUrl
      });
    });
  }

  componentDidUpdate() {
    const handlerModalMGLibrary = event => {
      if (!this.state.isOpen) return;

      if (event.data.origin === 'mcm-selectedAttachment') {
        const payload = event.data;
        this.closeModalWithIsLoading();
        this.addMediaFromUrl(payload);
        window.removeEventListener('message', handlerModalMGLibrary);
      }
    };

    window.addEventListener('message', handlerModalMGLibrary);

    const handlerModalMGLogin = event => {
      if (event.data.origin === 'mcm-loggedIn') {
        this.closeLoginModal();
        this.openModal();
        window.removeEventListener('message', handlerModalMGLogin);
      }
    };

    window.addEventListener('message', handlerModalMGLogin);

    const handlerModalMGLoginError = event => {
      if (event.data.origin === 'mcm-loggedInError') {
        this.closeLoginModal();
        window.removeEventListener('message', handlerModalMGLoginError);
      }
    };

    window.addEventListener('message', handlerModalMGLoginError);

    const handlerModalUserClose = event => {
      if (event.data.origin === 'mcm-closeWindowSignal') {
        this.closeModal();
        window.removeEventListener('message', handlerModalUserClose);
      }
    };

    window.addEventListener('message', handlerModalUserClose);
  }

  render() {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, !this.props.mediaID && Object(external_wp_element_["createElement"])("div", {
      class: "marcomGather-block"
    }, Object(external_wp_element_["createElement"])("div", {
      class: "marcomGather-logo"
    }, Object(external_wp_element_["createElement"])(SvgMccLogo, null)), Object(external_wp_element_["createElement"])("div", {
      class: "marcomGather-buttons"
    }, !this.state.isLoading && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      className: "marcomGather__button",
      variant: "secondary",
      onClick: this.openLoginModal
    }, "Choose Asset")), this.state.isLoading && Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null)), this.state.isOpen && Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
      className: "marcomGather-modal",
      title: "This is my modal",
      onRequestClose: this.closeModal
    }, Object(external_wp_element_["createElement"])(external_wp_components_["FocusableIframe"], {
      src: this.state.marcomUrl + '?pluginName=wordpress',
      class: "marcom-frame",
      onFocus: () => console.log('iframe is focused')
    })), this.state.isLoginOpen && Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
      className: "marcomGather-login-modal",
      title: "This is my modal",
      onRequestClose: this.closeLoginModal
    }, Object(external_wp_element_["createElement"])(external_wp_components_["FocusableIframe"], {
      src: this.state.marcomUrl + '/wordpress/oauth',
      class: "marcom-frame",
      onFocus: () => console.log('iframe is focused')
    })));
  }

}

function Edit(props) {
  return Object(external_wp_element_["createElement"])("div", Object(external_wp_blockEditor_["useBlockProps"])(), Object(external_wp_element_["createElement"])(edit_MarcomBlock, props));
}
// CONCATENATED MODULE: ./src/index.js


/**
 * Internal dependencies
 */


Object(external_wp_blocks_["registerBlockType"])('marcom-gather/marcomgather-block', {
  icon: SvgMccIcon,
  supports: {
    html: false,
    align: true
  },
  attributes: {
    mediaID: {
      type: "number"
    }
  },
  example: {},
  edit: Edit
});

/***/ })
/******/ ]);