/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/text-field-input/text-field-input.js":
/*!*********************************************************!*\
  !*** ./src/blocks/text-field-input/text-field-input.js ***!
  \*********************************************************/
/***/ (() => {

eval("class textFieldInput {\n  constructor() {\n    let arr = document.querySelectorAll('.text-field-input');\n    for (let elem of arr) {\n      elem.addEventListener('focus', this.handleTextFieldInputFocus);\n      elem.addEventListener('blur', this.handleTextFieldInputBlur);\n    }\n  }\n\n  handleTextFieldInputFocus() {\n    if(event.target.value == event.target.getAttribute('value')) {\n      event.target.value = '';\n    }\n  }\n  \n  handleTextFieldInputBlur() {\n    if(event.target.value == '') {\n      event.target.value = event.target.getAttribute('value');\n    }\n  }\n}\n\nlet objTextFieldInput = new textFieldInput();\n\n\n//# sourceURL=webpack://webpack-template-v.2/./src/blocks/text-field-input/text-field-input.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/blocks/text-field-input/text-field-input.js"]();
/******/ 	
/******/ })()
;