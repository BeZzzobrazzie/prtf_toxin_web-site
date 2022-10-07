"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_template_v_2"] = self["webpackChunkwebpack_template_v_2"] || []).push([["src_blocks-test_dropdown-floor_dropdown-floor_js"],{

/***/ "./src/blocks-test/dropdown-floor/dropdown-floor.js":
/*!**********************************************************!*\
  !*** ./src/blocks-test/dropdown-floor/dropdown-floor.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DropdownFloor\": () => (/* binding */ DropdownFloor)\n/* harmony export */ });\n/* harmony import */ var _js_base_baseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/base/baseClass */ \"./src/js/base/baseClass.js\");\n\n\nclass DropdownFloor extends _js_base_baseClass__WEBPACK_IMPORTED_MODULE_0__.BaseClass {\n\n  hide() {\n    this.domElement.hidden = true;\n  }\n  show() {\n    this.domElement.hidden = false;\n  }\n  changeHidden() {\n    //this.domElement.hidden = !this.domElement.hidden;\n    if(this.domElement.hidden == true) {\n      this.show();\n    }\n    else if(this.domElement.hidden == false) {\n      this.hide();\n    }\n  }\n}\n\n//# sourceURL=webpack://webpack-template-v.2/./src/blocks-test/dropdown-floor/dropdown-floor.js?");

/***/ })

}]);