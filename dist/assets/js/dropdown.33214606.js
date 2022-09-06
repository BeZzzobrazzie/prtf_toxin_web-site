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

/***/ "./src/blocks/dropdown/dropdown.js":
/*!*****************************************!*\
  !*** ./src/blocks/dropdown/dropdown.js ***!
  \*****************************************/
/***/ (() => {

eval("let field = document.querySelector(\".dropdown__field\");\nlet expand = document.querySelector(\".dropdown-field__expand\");\nlet list = document.querySelector(\".dropdown__list\");\n\nfield.addEventListener(\"click\", dropdownHide);\nlist.addEventListener(\"click\", quantityChange);\n\nfunction dropdownHide() {\n    if(list.hidden) {\n        list.hidden = false;\n        expand.textContent = \"expand_less\";\n        field.classList.toggle(\"dropdown-field_expanded\");\n    }\n    else {\n        list.hidden = true;\n        expand.textContent = \"expand_more\";\n        field.classList.toggle(\"dropdown-field_expanded\");\n    }\n}\n\nfunction quantityChange() {\n    let target = event.target;\n    if(target.classList.contains(\"dropdown__btn-count_minus\")) {\n        let dropdown__countGroup = target.closest(\".dropdown__count-group\");\n        let dropdown__count = dropdown__countGroup.querySelector(\".dropdown__count\");\n        if(dropdown__count.textContent == 99) {\n            dropdown__countGroup.querySelector(\".dropdown__btn-count_plus\").classList.add(\"dropdown__btn-count_further\");\n        }\n        if(dropdown__count.textContent > 0) {\n            dropdown__count.textContent = + dropdown__count.textContent - 1;\n            totalCount(\"-\", target);\n\n            if(dropdown__count.textContent == 0) {\n                target.classList.remove(\"dropdown__btn-count_further\");\n            }\n            \n        }\n    }\n    else if(target.classList.contains(\"dropdown__btn-count_plus\")) {\n\n\n        let dropdown__countGroup = target.closest(\".dropdown__count-group\");\n        let dropdown__count = dropdown__countGroup.querySelector(\".dropdown__count\");\n        if(dropdown__count.textContent == 0) {\n            dropdown__countGroup.querySelector(\".dropdown__btn-count_minus\").classList.add(\"dropdown__btn-count_further\");\n        }\n        if(dropdown__count.textContent < 99) {\n            dropdown__count.textContent = + dropdown__count.textContent + 1;\n            totalCount(\"+\", target);\n\n            if(dropdown__count.textContent == 99) {\n                target.classList.remove(\"dropdown__btn-count_further\");\n            }\n            \n        }\n    }\n}\n\nfunction totalCount(sign, target) {\n    let dropdown__value = target.closest(\".dropdown\").querySelector(\".dropdown-field__value\");\n    if(dropdown__value.textContent == \"Сколько гостей\") {\n        dropdown__value.textContent = 0;\n    }\n    if(sign == \"+\") {\n        dropdown__value.textContent = (+dropdown__value.textContent.split(\" \")[0] + 1) + \" \" + getNoun((+dropdown__value.textContent.split(\" \")[0] + 1), \"гость\", \"гостя\", \"гостей\");\n    }\n    else if (sign == \"-\") {\n        dropdown__value.textContent = (+dropdown__value.textContent.split(\" \")[0] - 1) + \" \" + getNoun((+dropdown__value.textContent.split(\" \")[0] - 1), \"гость\", \"гостя\", \"гостей\");\n        if(+dropdown__value.textContent.split(\" \")[0] == 0) {\n            dropdown__value.textContent = \"Сколько гостей\";\n        }\n    }\n}\n\nfunction getNoun(number, one, two, five) {\n    let n = Math.abs(number);\n    n %= 100;\n    if (n >= 5 && n <= 20) {\n      return five;\n    }\n    n %= 10;\n    if (n === 1) {\n      return one;\n    }\n    if (n >= 2 && n <= 4) {\n      return two;\n    }\n    return five;\n  }\n\n\n\n//# sourceURL=webpack://webpack-template-v.2/./src/blocks/dropdown/dropdown.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/blocks/dropdown/dropdown.js"]();
/******/ 	
/******/ })()
;