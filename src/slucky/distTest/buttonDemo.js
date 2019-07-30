(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom/server"), require("react-highlight"), require("react-markdown"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom/server", "react-highlight", "react-markdown"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom/server"), require("react-highlight"), require("react-markdown")) : factory(root["react"], root["react-dom/server"], root["react-highlight"], root["react-markdown"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_highlight__, __WEBPACK_EXTERNAL_MODULE_react_markdown__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/buttonDemo.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/buttonDemo.jsx":
/*!****************************!*\
  !*** ./src/buttonDemo.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactMarkdown = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n\nvar _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);\n\nvar _reactHighlight = __webpack_require__(/*! react-highlight */ \"react-highlight\");\n\nvar _reactHighlight2 = _interopRequireDefault(_reactHighlight);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ButtonDemo = function (_Component) {\n    _inherits(ButtonDemo, _Component);\n\n    function ButtonDemo() {\n        _classCallCheck(this, ButtonDemo);\n\n        return _possibleConstructorReturn(this, (ButtonDemo.__proto__ || Object.getPrototypeOf(ButtonDemo)).apply(this, arguments));\n    }\n\n    _createClass(ButtonDemo, [{\n        key: 'render',\n        value: function render() {\n            var demoString = '``` html' + '\\n<div className=\"btn p-r m32 ptb6 svgMutiLine plr16\">\\n    <svg\\n        className=\"btn-svgMutiLine\"\\n        viewBox=\"0 0 180 64\"\\n        version=\"1.1\"\\n        xmlns=\"http://www.w3.org/2000/svg\">\\n        <rect className=\"shape\"></rect>\\n    </svg>\\n    <div>SluckyUI</div>\\n</div>\\n\\n<div className=\"btn p-r m32 ptb6 regularLineMove plr16\">SluckyUI</div>\\n\\n<div className=\"btn p-r m32 ptb6 regularShadowScale plr16\">SluckyUI</div>\\n\\n<div className=\"btn p-r m32 ptb6 regularShadowMove plr16\">SluckyUI</div>\\n\\n<button className=\"btn-n ptb6 plr16 m32\">SluckyUI</button>\\n\\n<button className=\"btn-w bor b-side ptb6 plr16 m32\">SluckyUI</button>\\n\\n<button className=\"btn-hollow ptb6 plr16 m32\">SluckyUI</button>\\n\\n<button className=\"tag-hollow ptb6 plr16 m32\">SluckyUI</button>\\n\\n<button className=\"tag-text ptb6 plr16 m32\">SluckyUI</button>\\n' + '```';\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { className: 'd-f ac fw' },\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'btn p-r m32 ptb6 svgMutiLine plr16 tp' },\n                        _react2.default.createElement(\n                            'svg',\n                            {\n                                className: 'btn-svgMutiLine',\n                                viewBox: '0 0 180 64',\n                                version: '1.1',\n                                xmlns: 'http://www.w3.org/2000/svg' },\n                            _react2.default.createElement('rect', { className: 'shape' })\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            null,\n                            'SluckyUI'\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'btn p-r m32 ptb6 regularLineMove plr16 tp' },\n                        'SluckyUI'\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'btn p-r m32 ptb6 regularShadowScale plr16 tp' },\n                        'SluckyUI'\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'btn p-r m32 ptb6 regularShadowMove plr16 tp' },\n                        'SluckyUI'\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'btn-n ptb6 plr16 m32' },\n                        'SluckyUI'\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'btn-w bor b-side ptb6 plr16 m32' },\n                        'SluckyUI'\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'btn-hollow ptb6 plr16 m32' },\n                        'SluckyUI'\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'tag-text ptb6 plr16 m32' },\n                        'SluckyUI'\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'btn-action ptb6 plr16 m32' },\n                        'SluckyUI'\n                    )\n                ),\n                _react2.default.createElement(\n                    'details',\n                    { className: 'pb16 mb16 bor-b b-side-s' },\n                    _react2.default.createElement(\n                        'summary',\n                        { className: 'btn-n pl8 pr64 ptb8' },\n                        '\\u663E\\u793ADemo\\u4EE3\\u7801'\n                    ),\n                    _react2.default.createElement(\n                        _reactHighlight2.default,\n                        { innerHTML: true },\n                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoString }))\n                    )\n                )\n            );\n        }\n    }]);\n\n    return ButtonDemo;\n}(_react.Component);\n\nexports.default = ButtonDemo;\n\n//# sourceURL=webpack:///./src/buttonDemo.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-highlight":
/*!**********************************!*\
  !*** external "react-highlight" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_highlight__;\n\n//# sourceURL=webpack:///external_%22react-highlight%22?");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_markdown__;\n\n//# sourceURL=webpack:///external_%22react-markdown%22?");

/***/ })

/******/ });
});