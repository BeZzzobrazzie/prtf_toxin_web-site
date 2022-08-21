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

eval("let field = document.querySelector(\".dropdown__field\");\r\nlet expand = document.querySelector(\".dropdown-field__expand\");\r\nlet list = document.querySelector(\".dropdown__list\");\r\n\r\nfield.addEventListener(\"click\", dropdownHide);\r\nlist.addEventListener(\"click\", quantityChange);\r\n\r\nfunction dropdownHide() {\r\n    if(list.hidden) {\r\n        list.hidden = false;\r\n        expand.textContent = \"expand_less\";\r\n        field.classList.toggle(\"dropdown-field_expanded\");\r\n    }\r\n    else {\r\n        list.hidden = true;\r\n        expand.textContent = \"expand_more\";\r\n        field.classList.toggle(\"dropdown-field_expanded\");\r\n    }\r\n}\r\n\r\nfunction quantityChange() {\r\n    let target = event.target;\r\n    if(target.classList.contains(\"dropdown__btn-count_minus\")) {\r\n        let dropdown__countGroup = target.closest(\".dropdown__count-group\");\r\n        let dropdown__count = dropdown__countGroup.querySelector(\".dropdown__count\");\r\n        if(dropdown__count.textContent == 99) {\r\n            dropdown__countGroup.querySelector(\".dropdown__btn-count_plus\").classList.add(\"dropdown__btn-count_further\");\r\n        }\r\n        if(dropdown__count.textContent > 0) {\r\n            dropdown__count.textContent = + dropdown__count.textContent - 1;\r\n            totalCount(\"-\", target);\r\n\r\n            if(dropdown__count.textContent == 0) {\r\n                target.classList.remove(\"dropdown__btn-count_further\");\r\n            }\r\n            \r\n        }\r\n    }\r\n    else if(target.classList.contains(\"dropdown__btn-count_plus\")) {\r\n\r\n\r\n        let dropdown__countGroup = target.closest(\".dropdown__count-group\");\r\n        let dropdown__count = dropdown__countGroup.querySelector(\".dropdown__count\");\r\n        if(dropdown__count.textContent == 0) {\r\n            dropdown__countGroup.querySelector(\".dropdown__btn-count_minus\").classList.add(\"dropdown__btn-count_further\");\r\n        }\r\n        if(dropdown__count.textContent < 99) {\r\n            dropdown__count.textContent = + dropdown__count.textContent + 1;\r\n            totalCount(\"+\", target);\r\n\r\n            if(dropdown__count.textContent == 99) {\r\n                target.classList.remove(\"dropdown__btn-count_further\");\r\n            }\r\n            \r\n        }\r\n    }\r\n}\r\n\r\nfunction totalCount(sign, target) {\r\n    let dropdown__value = target.closest(\".dropdown\").querySelector(\".dropdown-field__value\");\r\n    if(dropdown__value.textContent == \"Сколько гостей\") {\r\n        dropdown__value.textContent = 0;\r\n    }\r\n    if(sign == \"+\") {\r\n        dropdown__value.textContent = (+dropdown__value.textContent.split(\" \")[0] + 1) + \" \" + getNoun((+dropdown__value.textContent.split(\" \")[0] + 1), \"гость\", \"гостя\", \"гостей\");\r\n    }\r\n    else if (sign == \"-\") {\r\n        dropdown__value.textContent = (+dropdown__value.textContent.split(\" \")[0] - 1) + \" \" + getNoun((+dropdown__value.textContent.split(\" \")[0] - 1), \"гость\", \"гостя\", \"гостей\");\r\n        if(+dropdown__value.textContent.split(\" \")[0] == 0) {\r\n            dropdown__value.textContent = \"Сколько гостей\";\r\n        }\r\n    }\r\n}\r\n\r\nfunction getNoun(number, one, two, five) {\r\n    let n = Math.abs(number);\r\n    n %= 100;\r\n    if (n >= 5 && n <= 20) {\r\n      return five;\r\n    }\r\n    n %= 10;\r\n    if (n === 1) {\r\n      return one;\r\n    }\r\n    if (n >= 2 && n <= 4) {\r\n      return two;\r\n    }\r\n    return five;\r\n  }\r\n\r\n\n\n//# sourceURL=webpack://prtf_toxin_web-site/./src/blocks/dropdown/dropdown.js?");

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