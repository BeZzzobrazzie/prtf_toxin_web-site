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

/***/ "./src/blocks/dropdown-field/dropdown-field.js":
/*!*****************************************************!*\
  !*** ./src/blocks/dropdown-field/dropdown-field.js ***!
  \*****************************************************/
/***/ (() => {

eval("class dropdownField {\n  constructor(selectorDropdownField) {\n    let arr = document.querySelectorAll(selectorDropdownField);\n    for (let elem of arr) {\n      elem.addEventListener(\"click\", this);\n    }\n  }\n\n  handleEvent(event) {\n    this.dropdownHide(event);\n  }\n\n  dropdownHide(event) {\n    let dropdownField;\n    if(event.target.classList.contains('dropdown-field')) {\n      dropdownField = event.target;\n    }\n    else {\n      dropdownField = event.target.closest('.dropdown-field');\n    }\n    let dropdown = dropdownField.closest('.dropdown');\n    let dropdownFieldExpand = dropdownField.querySelector('.dropdown-field__expand');\n    let dropdownFloor = dropdown.parentElement.querySelector('.dropdown-floor');\n\n\n    if(dropdownFloor.hidden) {\n        dropdownFloor.hidden = false;\n        dropdownFieldExpand.querySelector('p').textContent = \"expand_less\";\n        dropdownField.classList.toggle(\"dropdown-field_expanded\");\n    }\n    else {\n      dropdownFloor.hidden = true;\n      dropdownFieldExpand.querySelector('p').textContent = \"expand_more\";\n      dropdownField.classList.toggle(\"dropdown-field_expanded\");\n    }\n  }\n\n}\n\nlet objDropdownField = new dropdownField('.dropdown-field');\n\n//# sourceURL=webpack://webpack-template-v.2/./src/blocks/dropdown-field/dropdown-field.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/blocks/dropdown-field/dropdown-field.js"]();
/******/ 	
/******/ })()
;