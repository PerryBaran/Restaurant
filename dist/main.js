/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    box-sizing: border-box;\\n    margin: 0;\\n    font-family: Arial, sans-serif;\\n    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);\\n    overflow-x: hidden;\\n}\\n\\n\\n/*Top Bar*/\\n#navbar {\\n    position:fixed;\\n    width: 100%;\\n    background: rgb(139, 1, 1);\\n    z-index: 10;\\n    text-align: center;\\n}\\n\\nh1 {\\n    color: white;\\n    font-family: \\\"Times New Roman\\\", Times, serif;\\n    font-size: 3rem;\\n    padding: 5px;\\n}\\n\\nbutton {\\n    padding-right: 20px;\\n    padding-left: 20px;\\n    width: 30%;\\n    cursor: pointer;\\n    color: rgb(139, 1, 1);\\n    font-weight: bold;\\n    border: none;\\n    border-left: 1px solid rgb(139, 1, 1);\\n    border-right: 1px solid rgb(139, 1, 1);\\n    border-bottom: 1px solid white;\\n}\\n\\n#left {\\n    border-top-left-radius: 10px;\\n}\\n\\n#right {\\n    border-top-right-radius: 10px;\\n}\\n\\n.active {\\n    color: white;\\n    background: none;\\n    border: 1px solid white;\\n}\\n\\n/*Bottom bar */\\n#bottombar {\\n    position: fixed;\\n    bottom: 0;\\n    width: 100%;\\n    text-align: center;\\n    background: rgb(139, 1, 1);\\n    z-index: 10;\\n    padding-top: 5px;\\n}\\n\\n.attribution {\\n    display: inline-flex;\\n    color: white;\\n    padding: 5px;\\n    font-size: 0.95rem;\\n    margin-left: 20px;\\n    margin-right: 20px;\\n    margin-bottom: 5px;\\n}\\n\\na {\\n    text-decoration: none;\\n    color: white;\\n    padding-left: 4px;\\n    padding-right: 4px;\\n}\\n\\na:active {\\n    color: white;\\n}\\n\\na:visited {\\n    color: white;\\n}\\n\\na:hover {\\n    text-decoration: underLine;\\n}\\n\\n/*Pizza Picture Background*/\\n#background {\\n    position: fixed;\\n    bottom: 0;\\n    max-height: 100%;\\n    min-width: 100%;\\n    width: auto;\\n    height: auto;\\n    z-index: -1;\\n}\\n\\n/*Main Content*/\\n#container {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100%;\\n    height: 100vh;\\n}\\n\\n.info {\\n    position: absolute;\\n    background: rgba(255, 255, 255, 0.425);\\n    padding: 20px;\\n    width: 100%;\\n    max-width: 800px;\\n    text-align: center;\\n    border-radius: 5px;\\n}\\n\\n/*Homepage*/\\n.quote {\\n    font-size: 1.4rem;\\n}\\n\\n.quote::before {\\n    content: open-quote;\\n    font-size: 2rem;\\n    color: rgb(51, 51, 51);\\n}\\n\\n.quote::after{\\n    content: close-quote;\\n    font-size: 2rem;\\n    color:rgb(51, 51, 51);\\n}\\n\\n#man {\\n    width: 250px;\\n    border-radius: 200px;\\n    border: 2px solid rgba(139, 1, 1, 0.425);\\n    margin: 10px;\\n}\\n\\nh2 {\\n    font-family: \\\"Times New Roman\\\", Times, serif;\\n    font-size: 2rem;\\n    padding: 5px;\\n    text-decoration: underline;\\n    text-decoration-thickness: 0.1rem;\\n}\\n\\n.about {\\n    padding-top: 5px;\\n    margin: auto;\\n    width: 90%;\\n    max-width: 400px;\\n}\\n\\n/*Menu and items*/\\n.menu {\\n    background:rgba(255, 255, 255, 0.425);\\n    margin: auto;\\n    margin-top: 100px;\\n    margin-bottom: 60px;\\n    width: 75%;\\n    max-width: 800px;\\n    border-radius: 5px;\\n    padding: 5px;\\n}\\n\\nh3 {\\n    font-family: \\\"Times New Roman\\\", Times, serif;\\n    font-size: 2rem;\\n    width: 100%;\\n    text-align: center;\\n    text-decoration: underline;\\n    text-decoration-thickness: 0.1rem;\\n}\\n\\nh4 {\\n    width: 100%;\\n    font-size: 1.3rem;\\n    font-weight: bold;\\n}\\n\\n.description {\\n    display: inline-flex;\\n    padding-bottom: 0.8em;\\n    width: calc(100% - 90px);\\n}\\n\\n.price {\\n    display: inline-flex;\\n    float: right;\\n}\\n\\n/*Contact*/\\n.contactHeader {\\n    display: inline-flex;\\n    width: 100px;\\n}\\n\\n.contactDetails {\\n    display: inline-flex;\\n    width: 45%;\\n}\\n\\niframe {\\n    width: 100%;\\n    max-width: 400px;\\n    height: 400px;\\n    margin-top: 10px;\\n    border: none;\\n}\\n\\n@media screen and (max-height: 700px) {\\n    #man {\\n        width: 150px;\\n    }\\n\\n    iframe {\\n        height: 200px;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact(heading, text) {\n    const container = document.createElement('div');\n\n    const header = document.createElement('h4');\n    header.innerHTML = heading;\n    header.className = 'contactHeader'\n    container.appendChild(header);\n\n    const details = document.createElement('p');\n    details.innerHTML = text;\n    details.className = 'contactDetails'\n    container.appendChild(details);\n\n    return container;\n}\n\nfunction createMap() {\n    const map = document.createElement('div');\n    map.innerHTML = '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354.7855876369017!2d-1.5680612840666222!3d53.82889014615775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879595b4558eac3%3A0xfe06c2f11ee2c53e!2sPizza%20Roma!5e0!3m2!1sen!2suk!4v1636472397988!5m2!1sen!2suk\" allowfullscreen=\"\" loading=\"lazy\"></iframe>'\n\n    return map\n}\n\nfunction buildInfo(){\n    const info = document.createElement('div');\n    info.className = 'info';\n\n    info.appendChild(createContact('Tel:', '0113 209 1050'))\n    info.appendChild(createContact('Address:', ' 17 Stonegate Rd, Meanwood, Leeds LS6 4HZ'))\n    info.appendChild(createMap())\n    \n    return info;\n}\n\nfunction buildContact() {\n    const container = document.createElement('div');\n    container.id = 'container';\n    content.appendChild(container);\n\n    container.appendChild(buildInfo());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildContact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_man_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/man.jpg */ \"./src/img/man.jpg\");\n\n\nfunction createQuote() {\n    const quote = document.createElement('p');\n    quote.className = 'quote';\n    quote.innerHTML = 'Pizza worth dying for';\n\n    return quote;\n}\n\nfunction createLogo() {\n    const logo = new Image();\n    logo.src = _img_man_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    logo.id = 'man';\n    \n    return logo;\n}\n\nfunction createAboutHeader() {\n    const about = document.createElement('h2');\n    about.innerHTML = 'ABOUT';\n\n    return about;\n}\n\nfunction createAboutContent() {\n    const about = document.createElement('p');\n    about.className = 'about';\n    about.innerHTML = \"Pizza Rona was established in 2019 to expose the world to our life altering pizza. Over the last 2 years Pizza Rona has spread across the globe and has invaded the homes of over 1 million families. To get your taste of what everyone's talking about, check out our menu. For any questions or concerns please contact us via our contact page.\"\n\n    return about;\n}\n\n\nfunction buildInfo(){\n    const info = document.createElement('div');\n    info.className = 'info';\n\n    info.appendChild(createQuote());\n    info.appendChild(createLogo());\n    info.appendChild(createAboutHeader());\n    info.appendChild(createAboutContent());\n\n    return info;\n}\n\nfunction buildHome() {\n    const container = document.createElement('div');\n    container.id = 'container';\n    content.appendChild(container);\n\n    container.appendChild(buildInfo());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHome);\n\n//# sourceURL=webpack://restaurant/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('home');\n(0,_homepage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeading(text) {\n    const heading = document.createElement('h3');\n    heading.innerHTML = text;\n\n    return heading\n}\n\nfunction createItem(name, text, price) {\n    const container = document.createElement('div');\n    container.className = 'menuOption'\n\n    const item = document.createElement('h4');\n    item.innerHTML = name;\n    \n    const descrition = document.createElement('p');\n    descrition.innerHTML = text;\n    descrition.className = 'description';\n\n    const pricing = document.createElement('p');\n    pricing.innerHTML = 'from £' + price;\n    pricing.className = 'price';\n\n    container.appendChild(item);\n    container.appendChild(descrition);\n    container.appendChild(pricing);\n\n    return container\n}\n\nfunction buildMenu() {\n    const menu = document.createElement('div');\n    menu.className = 'menu';\n    content.appendChild(menu);\n\n    menu.appendChild(createHeading('Starters'));\n    menu.appendChild(createItem('Dry Ribs', 'BBQ spare ribs', '2.00'))\n    menu.appendChild(createItem('Ribs in BBQ sauce', 'BBQ spare ribs in BBQ sauce', '2.30'))\n    menu.appendChild(createItem('Salt & Pepper Ribs', \"BBQ spare ribs with salt and peppers\", '3.50'))\n    menu.appendChild(createItem('\"Chicken\"', '\"Chicken\" balls', '2.40'))\n    menu.appendChild(createItem('Salt & Pepper \"Chicken\"', '\"Chicken\" with salt and peppers', '3.10'))\n    menu.appendChild(createItem('Garlic Bread', 'Garlic on a pizza base', '2.00'))\n    menu.appendChild(createItem('Salt & Pepper Bat', \"Bat with salt and peppers\", '3.90'))\n    menu.appendChild(createHeading('Pizzas'));\n    menu.appendChild(createItem('Margherita', 'Mozerella cheese, tomato sauce & Italian herbs', '6.90'))\n    menu.appendChild(createItem('Garlic Magherita', 'Mozerella cheese, tomato sauce, garlic & Italian herbs', '7.10'))\n    menu.appendChild(createItem('Quatro Formagi', 'A combination of 4 cheeses', '7.20'))\n    menu.appendChild(createItem('Murciélago', 'Mozerella cheese, tomato sauce, bat & Italian herbs', '7.60'))\n    menu.appendChild(createItem('Meat Feast', 'Mozerella cheese, tomato sauce, salami, chicken, bat, beef & Italian herbs', '8.00'))\n    menu.appendChild(createItem('Al-Funghi', 'Mozerella cheese, tomato sauce, mushrooms & Italian herbs', '7.30'))\n    menu.appendChild(createItem('BBQB', 'Mozerella cheese, BBQ sauce & smoked bat', '8.00'))\n    menu.appendChild(createItem('Vegetarian', 'Mozerella cheese, tomato sauce, mushrooms, onions, green peppers & Italian herbs', '7.50'))\n    menu.appendChild(createItem('Hot Shot', 'Mozerella cheese, tomato sauce, chilli, green peppers & bat', '8.30'))\n    menu.appendChild(createItem('Murciélago Funghi', 'Mozerella cheese, tomato sauce, bat, mushroom & Italian herbs', '7.60'))\n    menu.appendChild(createItem('UM PA PA', \"God's gift to this world\", '8.50'))\n    menu.appendChild(createItem(\"Chef's Special\", 'Anything the chef can cough on', '8.30'))\n    menu.appendChild(createItem('Half & Half', '2 Half pizzas of your choice', '7.00'))\n    menu.appendChild(createHeading('Sides'));\n    menu.appendChild(createItem('Chips', 'Chips', '1.50'))\n    menu.appendChild(createItem('Fries', 'Kinda like chips but thinner and cost more', '1.60'))\n    menu.appendChild(createItem('French Fries', 'Just Fries but cost even more', '1.80'))\n    menu.appendChild(createItem('Potato Wedgies', 'Kinda like chips but with more potato', '2.00'))\n    menu.appendChild(createItem('Salt & Pepper Chips', 'Chips with salt and peppers', '2.30'))\n    menu.appendChild(createHeading('Dips'));\n    menu.appendChild(createItem('Ketchup', 'Tomatoish dip', '0.40'))\n    menu.appendChild(createItem('BBQ', 'BBQ dip', '0.40'))\n    menu.appendChild(createItem('Garlic Mayo', 'Garlic Mayonnaise dip', '0.40'))\n    menu.appendChild(createItem('Chilli', 'Chilli dip', '0.40'))\n    menu.appendChild(createHeading('Drinks'));\n    menu.appendChild(createItem('Coke', 'Coca Cola', '1.50'))\n    menu.appendChild(createItem('Diet Coke', 'Diet Coca Cola', '1.50'))\n    menu.appendChild(createItem('Fanta', 'Like fizza orange mate', '1.50'))\n    menu.appendChild(createItem('Mysterious Liqud', 'What could it be?', '1.60'))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pizza.jpg */ \"./src/img/pizza.jpg\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nfunction reset(parent){\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}\n\nfunction createNavbar(page) {\n    const navbar = document.createElement('div');\n    navbar.id = 'navbar';\n    content.appendChild(navbar);\n\n    const heading = document.createElement('h1');\n    heading.innerHTML = 'PIZZA RONA';\n    navbar.appendChild(heading);\n\n    const homeButton = document.createElement('button');\n    homeButton.innerHTML = 'HOME';\n    homeButton.id = 'left'\n    navbar.appendChild(homeButton);\n\n    const menuButton = document.createElement('button');\n    menuButton.innerHTML = 'MENU';\n    navbar.appendChild(menuButton);\n\n    const contactButton = document.createElement('button');\n    contactButton.innerHTML = 'CONTACT';\n    contactButton.id = 'right'\n    navbar.appendChild(contactButton);\n\n    if (page === 'home') {\n        homeButton.className = 'active';\n    } if (page === 'menu') {\n        menuButton.className = 'active';\n    } if (page === 'contact') {\n        contactButton.className = 'active';\n    }\n\n    homeButton.addEventListener('click', () => {\n        reset(content);\n        initializeSite('home');\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    menuButton.addEventListener('click', () => {\n        reset(content);\n        initializeSite('menu');\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    contactButton.addEventListener('click', () => {\n        reset(content)\n        initializeSite('contact')\n        ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n}\n\nfunction createBackground() {\n    const backgroundImage = new Image();\n    backgroundImage.src = _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    backgroundImage.id = 'background';\n    content.appendChild(backgroundImage);\n}\n\nfunction createBottombar() {\n    const bottombar = document.createElement('div');\n    bottombar.id = 'bottombar';\n    content.appendChild(bottombar);\n\n    const selfAttribution = document.createElement('a');\n    selfAttribution.className = 'attribution';\n    selfAttribution.href = 'https://github.com/Squilly-flac';\n    selfAttribution.innerHTML = 'Perry Baran © 2021';\n    bottombar.appendChild(selfAttribution);\n\n    const iconAttribution = document.createElement('p');\n    iconAttribution.className = 'attribution';\n    iconAttribution.innerHTML = 'Icons made by <a href=\"https://www.freepik.com\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a>'\n    bottombar.appendChild(iconAttribution);\n}\n\nfunction initializeSite(page) {\n    createNavbar(page);\n    createBottombar();\n    createBackground();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeSite);\n\n//# sourceURL=webpack://restaurant/./src/website.js?");

/***/ }),

/***/ "./src/img/man.jpg":
/*!*************************!*\
  !*** ./src/img/man.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c2e442ec7b7132cbc4d.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/img/man.jpg?");

/***/ }),

/***/ "./src/img/pizza.jpg":
/*!***************************!*\
  !*** ./src/img/pizza.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e3e99661e3618d282d7.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/img/pizza.jpg?");

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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;