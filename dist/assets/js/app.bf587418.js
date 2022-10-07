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

/***/ "./src/blocks-test lazy recursive ^\\.\\/.*\\.js$":
/*!*************************************************************!*\
  !*** ./src/blocks-test/ lazy ^\.\/.*\.js$ namespace object ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./dropdown-floor/dropdown-floor.js\": [\n\t\t\"./src/blocks-test/dropdown-floor/dropdown-floor.js\",\n\t\t\"src_blocks-test_dropdown-floor_dropdown-floor_js\"\n\t],\n\t\"./dropdown/dropdown.js\": [\n\t\t\"./src/blocks-test/dropdown/dropdown.js\",\n\t\t\"src_blocks-test_dropdown_dropdown_js\"\n\t],\n\t\"./test/test.js\": [\n\t\t\"./src/blocks-test/test/test.js\",\n\t\t\"src_blocks-test_test_test_js\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/blocks-test lazy recursive ^\\\\.\\\\/.*\\\\.js$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://webpack-template-v.2/./src/blocks-test/_lazy_^\\.\\/.*\\.js$_namespace_object?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_baseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/baseClass */ \"./src/js/base/baseClass.js\");\n\n\nclass Main extends _base_baseClass__WEBPACK_IMPORTED_MODULE_0__.BaseClass {\n\n}\n\n\nlet m = new Main(document.querySelector('body'));\n\n\n//# sourceURL=webpack://webpack-template-v.2/./src/js/app.js?");

/***/ }),

/***/ "./src/js/base/baseClass.js":
/*!**********************************!*\
  !*** ./src/js/base/baseClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseClass\": () => (/* binding */ BaseClass)\n/* harmony export */ });\nclass BaseClass {\n  constructor(domElement) {\n    this.domElement = domElement;\n    this.children = [];\n    this.init(this.domElement);\n    this.initEventListener(this.domElement);\n    //console.log(this.children);\n    console.log(this);\n  }\n\n  \n  init(domElement) {\n    for (let child of domElement.children) {\n      //нужно импортировать js реализацию каждого блока ребёнка\n      //если js реализации нет, создать болванку\n\n      for(let c of child.classList) {\n        //сделаем допущение, что на одном DOM-элементе может быть только один класс (что не верно, ибо это не так)\n\n        let prom;\n        switch(this.checkClassBem(c)) {\n          case 'block':\n            prom = __webpack_require__(\"./src/blocks-test lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(\"./\" + this.pathToModuleBlock(c) + \".js\");\n            prom.then(\n              result => this.handlerImportResult(result, child), \n              error => this.handlerImportError(error, child)\n            );\n            break;\n          case 'element':\n            prom = __webpack_require__(\"./src/blocks-test lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(\"./\" + this.pathToModuleElement(c) + \".js\");\n            prom.then(\n              result => this.handlerImportResult(result, child), \n              error => this.handlerImportError(error, child)\n            );\n            break;\n          case 'mod':\n            break;\n          case 'error':\n            break;\n        }\n      }\n    }\n  }\n\n  createBlank(child) {\n    return new BaseClass(child);\n  }\n  pathToModuleBlock(cls) {\n    let path = String(cls) + '/' + String(cls);\n    return path;\n  }\n  pathToModuleElement(cls) {\n    let arrClsSplit = cls.split('__');\n    let blockDirr = arrClsSplit[0];\n    let elementDirr = '__' + arrClsSplit[1];\n    let path = String(blockDirr) + '/' + String(elementDirr) + '/' + String(cls);\n    return path;\n  }\n  translateNameClass(cls) {\n    if(cls.includes('-')) {\n      let arr = cls.split('-');\n      let result = arr[0];\n      for(let a = 1; a < arr.length; a++) {\n        result += arr[a][0].toUpperCase() + arr[a].slice(1);\n      }\n      return result;\n    }\n  }\n  handlerImportResult(result, child) {\n    console.log(result);\n    for(let key in result) {\n      console.log(key);\n\n      this.children.push(new result[key](child));\n    }\n  }\n  handlerImportError(error, child) {\n    console.log(error);\n    this.children.push(this.createBlank(child));\n  }\n  checkClassBem(cls) {\n    if(!cls.includes('_')) {\n      //console.log('it is block');\n      return 'block'\n    }\n    else if(cls.includes(cls.match(/[^_]__[^_]/)) && !cls.includes(cls.match(/[^_]_[^_]/))) {\n      //console.log('it is element');\n      return 'element'\n    }\n    else if(cls.includes(cls.match(/[^_]_[^_]/))) {\n      //console.log('it is mod');\n      return 'mod'\n    }\n    else {\n      //console.log('error');\n      return 'error'\n    }\n  }\n\n\n  initEventListener(domElement) {\n    domElement.addEventListener('click', this);\n  }\n\n  handleEvent(event) {\n\n  }\n\n  queryChild(cls) {\n    for(let el of this.children) {\n      if(el.domElement.classList.contains(cls)) {\n        console.log(el);\n        return el;\n      }\n      else {\n        console.log('00');\n        el.queryChild(cls);\n      }\n    }\n  }\n  /*\n    Должен иметь:\n    - ссылку на dom элемент;\n    - метод инициализации детей;\n    - коллекцию с сылками на js объекты детей;\n    - метод инициализации обработчиков;\n  */\n\n}\n\n//# sourceURL=webpack://webpack-template-v.2/./src/js/base/baseClass.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "assets/js/" + chunkId + "." + {"src_blocks-test_dropdown-floor_dropdown-floor_js":"2d9f7e83","src_blocks-test_dropdown_dropdown_js":"992fc171","src_blocks-test_test_test_js":"896d9a2c"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack-template-v.2:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_template_v_2"] = self["webpackChunkwebpack_template_v_2"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;