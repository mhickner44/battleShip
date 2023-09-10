/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.boardContainer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;


}

.popUpContainer {
    position: absolute;
    left: 30%;

    top: 50%;
    transform: translateY(-50%);
    text-align: center;

    background-color: white;
    border: 2px black;
    border-radius: 2em;
    color: darkgray;
    width: 40%;
    height: 12em;
}

.setupContainer {
    position: absolute;
    left: 40%;

    top: 50%;
    transform: translateY(-50%);
    text-align: center;

    background-color: white;
    border: 2px black;
    border-radius: 2em;
    color: darkgray;
    width: fit-content;
    height: fit-content;
    padding: 3em;
}

.block {
    border: 1px solid black;
    width: 100%;
    height: 100%;

}

.block:hover {
    background-color: white;
}

.block.selected {
    cursor: not-allowed;
}




body {
    color: white;
    background-color: darkblue;

}

.title {
    font-size: 6em;
    margin: auto;
    width: 50%;
    text-align: center;
    color: darkgray;
}

.gridContainer {
    display: grid;
    grid-template-columns: repeat(10, 2em);
    grid-template-rows: repeat(10, 2em);
    width: fit-content;
    height: fit-content;
}

.block {
    border: 2px solid black;
    width: 100%;
    height: 100%;
}

.container {
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: inherit;
}


.startContainer {
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: inherit;

}



.enter {
    width: 6em;
    margin: 2em;
    background-color: darkgray;
    border-radius: 2em;

}

.player {
    font-size: 3em;
}

#playerTextInput {
    width: 18em;

}

.orientBtn {
    margin: 1em;

}

/*  draggable ship */
.shipContainer>div {

    width: fit-content;
    height: fit-content;

    background-color: red;
    height: fit-content;

}

#horizontalShip {
    display: flex;
    flex-direction: row;


    width: fit-content;
    height: fit-content;

    background-color: red;
    height: fit-content;
}

#innerShip {
    width: 2em;
    height: 2em;
    background-color: red;
}

.shipContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 5px;
    margin: 2em;
    width: fit-content;
    height: fit-content;
}

.backgroundCover{
    background-color: black;
    position: absolute;
    left: 0%;

    top: 0%;
    transform: translateY(-0%);
    text-align: center;

   
 

    width: 100%;
    height: 100%;
   
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;;IAEX,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;;AAGjC;;AAEA;IACI,kBAAkB;IAClB,SAAS;;IAET,QAAQ;IACR,2BAA2B;IAC3B,kBAAkB;;IAElB,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;;IAET,QAAQ;IACR,2BAA2B;IAC3B,kBAAkB;;IAElB,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;;AAEhB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;;;;;AAKA;IACI,YAAY;IACZ,0BAA0B;;AAE9B;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,eAAe;AACnB;;;AAGA;IACI,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,eAAe;;AAEnB;;;;AAIA;IACI,UAAU;IACV,WAAW;IACX,0BAA0B;IAC1B,kBAAkB;;AAEtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;;AAEf;;AAEA;IACI,WAAW;;AAEf;;AAEA,oBAAoB;AACpB;;IAEI,kBAAkB;IAClB,mBAAmB;;IAEnB,qBAAqB;IACrB,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,mBAAmB;;;IAGnB,kBAAkB;IAClB,mBAAmB;;IAEnB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,QAAQ;IACR,WAAW;IACX,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;;IAER,OAAO;IACP,0BAA0B;IAC1B,kBAAkB;;;;;IAKlB,WAAW;IACX,YAAY;;AAEhB","sourcesContent":[".boardContainer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n\n\n}\n\n.popUpContainer {\n    position: absolute;\n    left: 30%;\n\n    top: 50%;\n    transform: translateY(-50%);\n    text-align: center;\n\n    background-color: white;\n    border: 2px black;\n    border-radius: 2em;\n    color: darkgray;\n    width: 40%;\n    height: 12em;\n}\n\n.setupContainer {\n    position: absolute;\n    left: 40%;\n\n    top: 50%;\n    transform: translateY(-50%);\n    text-align: center;\n\n    background-color: white;\n    border: 2px black;\n    border-radius: 2em;\n    color: darkgray;\n    width: fit-content;\n    height: fit-content;\n    padding: 3em;\n}\n\n.block {\n    border: 1px solid black;\n    width: 100%;\n    height: 100%;\n\n}\n\n.block:hover {\n    background-color: white;\n}\n\n.block.selected {\n    cursor: not-allowed;\n}\n\n\n\n\nbody {\n    color: white;\n    background-color: darkblue;\n\n}\n\n.title {\n    font-size: 6em;\n    margin: auto;\n    width: 50%;\n    text-align: center;\n    color: darkgray;\n}\n\n.gridContainer {\n    display: grid;\n    grid-template-columns: repeat(10, 2em);\n    grid-template-rows: repeat(10, 2em);\n    width: fit-content;\n    height: fit-content;\n}\n\n.block {\n    border: 2px solid black;\n    width: 100%;\n    height: 100%;\n}\n\n.container {\n    margin: auto;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    height: inherit;\n}\n\n\n.startContainer {\n    margin: auto;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    height: inherit;\n\n}\n\n\n\n.enter {\n    width: 6em;\n    margin: 2em;\n    background-color: darkgray;\n    border-radius: 2em;\n\n}\n\n.player {\n    font-size: 3em;\n}\n\n#playerTextInput {\n    width: 18em;\n\n}\n\n.orientBtn {\n    margin: 1em;\n\n}\n\n/*  draggable ship */\n.shipContainer>div {\n\n    width: fit-content;\n    height: fit-content;\n\n    background-color: red;\n    height: fit-content;\n\n}\n\n#horizontalShip {\n    display: flex;\n    flex-direction: row;\n\n\n    width: fit-content;\n    height: fit-content;\n\n    background-color: red;\n    height: fit-content;\n}\n\n#innerShip {\n    width: 2em;\n    height: 2em;\n    background-color: red;\n}\n\n.shipContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    gap: 5px;\n    margin: 2em;\n    width: fit-content;\n    height: fit-content;\n}\n\n.backgroundCover{\n    background-color: black;\n    position: absolute;\n    left: 0%;\n\n    top: 0%;\n    transform: translateY(-0%);\n    text-align: center;\n\n   \n \n\n    width: 100%;\n    height: 100%;\n   \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addGridListeners: () => (/* binding */ addGridListeners),
/* harmony export */   boardSetup: () => (/* binding */ boardSetup),
/* harmony export */   endGame: () => (/* binding */ endGame),
/* harmony export */   newGame: () => (/* binding */ newGame)
/* harmony export */ });
/* harmony import */ var _gameDriver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameDriver */ "./src/gameDriver.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


const box = document.getElementById("box");

const root = document.getElementById("root");











const game = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();



function newGame() {
  let component = document.createElement('div');
  let playerBoardLabel = document.createElement('h2');
  playerBoardLabel.textContent = "Player One";

  let AIBoardLabel = document.createElement('h2');
  AIBoardLabel.textContent = "Enemy";


  component.classList = "boardContainer";



  let grid1 = game.renderBoard();
  let grid2 = game.renderBoard();
  grid2.id = "enemyGrid";
  grid1.id = "playerGrid";

  component.appendChild(playerBoardLabel);
  component.appendChild(grid1);
  component.appendChild(grid2);
  component.appendChild(AIBoardLabel);
  return component;
}


const addGridListeners = (enemyGrid) => {
  for (const gridElement of enemyGrid.children) {
    gridElement.addEventListener('click', event => {
      //handle click
      let row = gridElement.getAttribute("data-rows")
      let column = gridElement.getAttribute("data-column");
      (0,_gameDriver__WEBPACK_IMPORTED_MODULE_0__.handleAttack)(row, column, gridElement);
    }
    )
  }
};


function endGame(result, winner) {
  if (result == true) {
    //place pop up over the board\


    const popUpContainer = document.createElement("div");
    popUpContainer.className = "popUpContainer"
    const text = document.createElement("h2");
    text.textContent = "Game Over!";
    const winnerText = document.createElement("h2");
    winnerText.className = "winnerText";
    winnerText.textContent = "You " + winner;
    const replayBtn = document.createElement("button");
    replayBtn.textContent = "Replay?"


    replayBtn.addEventListener("click", (event) => {
      location.reload();
    })

    //add all elements
    popUpContainer.appendChild(text);
    popUpContainer.appendChild(winnerText);
    popUpContainer.appendChild(replayBtn);

    document.body.appendChild(popUpContainer);
  }



}



//add ship placement listeners
function addPlacementListeners(grid) {
  //temp board for checking if spot is
  let checkBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();
  for (let i = 0; i <= 99; i++) {
    grid[i].setAttribute("draggable", false)
    grid[i].addEventListener("dragover", (event) => {
      // prevent default to allow drop
      event.preventDefault();
      //set the hover for multeiple here?
    });
    grid[i].addEventListener("drop", (event) => {

      // prevent default to allow drop
      event.preventDefault();

      let row = event.target.getAttribute("data-rows")
      let column = event.target.getAttribute("data-column")

      let blockID = event.dataTransfer.getData("textID");
      let shipType = event.dataTransfer.getData("shipType");
      let orientation = event.dataTransfer.getData("orientation");
      if (blockID == "" || row == undefined) {
        //do nothing
      } else {
        let blok = document.querySelector(blockID);
        let shipLength = blok.getAttribute("data-length")
        let value = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.dropCheck)(parseInt(row), parseInt(column), orientation, parseInt(shipLength), checkBoard)
        checkBoard = value[0]
        if (value[1] == true) {
          event.target.appendChild(blok);
          //setting the grid element ship type dataset
          event.target.dataset.shipType = shipType;
          event.target.dataset.orientation = orientation;

          blok.style.cursor = "not-allowed"
          blok.setAttribute("draggable", false)
        }
      }

    });
  }
}



//moving drop check to another module






function boardSetup() {
  const setupContainer = document.createElement("div");
  setupContainer.classList = "setupContainer";


  //background 

  let grid = game.renderBoard();
  grid.setAttribute('id', "placementGrid");
  //Place Ships text
  const text = document.createElement("h2");
  text.textContent = "Drag and drop to place ships";
  //change orientation button
  const startBtn = document.createElement("button");
  startBtn.classList = "startBtn";
  startBtn.textContent = "Start Game";

  //add the listneers to the blocks of the grid
  addPlacementListeners(grid.childNodes);

  let shipContainer = placementShips();

  const message = document.createElement("h2");
  message.textContent = "Double click to rotate ship"

  //append all nodes
  setupContainer.appendChild(text);
  setupContainer.appendChild(startBtn);
  setupContainer.appendChild(grid);
  setupContainer.appendChild(message)
  setupContainer.appendChild(shipContainer)


  return setupContainer;

}

function placementShips() {
  //draggable ship container
  const shipContainer = document.createElement("div");
  shipContainer.classList.add("shipContainer");

  //ship type and length
  let ships = [
    { length: 5, shipType: 1 },
    { length: 4, shipType: 2 },
    { length: 3, shipType: 3 },
    { length: 3, shipType: 4 },
    { length: 2, shipType: 5 },]

  //create the ship


  //add the blocks of the ship
  for (let i = 0; i < 5; i++) {
    let placementShip = document.createElement("div");
    placementShip.classList = "ship" + i;
    placementShip.dataset.shipType = ships[i].shipType;
    placementShip.dataset.length = ships[i].length;
    placementShip.dataset.orientation = "vertical"
    placementShip.id = "vertical";
    //create the number of blocks that are needed .
    for (let ii = 0; ii < ships[i].length; ii++) {
      let shipBlock = document.createElement("div");
      shipBlock.id = "innerShip"
      placementShip.appendChild(shipBlock);
      shipBlock.setAttribute("draggable", false)
    }


    placementShip.setAttribute("draggable", true)
    placementShip.addEventListener("dragstart", (event) => {
      // store a ref. on the dragged elem
      // dragged = event.target;
      event.dataTransfer.setData("textID", "." + event.target.classList);
      event.dataTransfer.setData("shipType", event.target.dataset.shipType);
      event.dataTransfer.setData("shipLength", event.target.dataset.length);
      event.dataTransfer.setData("orientation", event.target.dataset.orientation);


    });

    placementShip.addEventListener("dblclick", (event) => {

      if (placementShip.dataset.orientation == "vertical") {
        placementShip.dataset.orientation = "horizontal"
        placementShip.id = "horizontalShip"
      } else {
        placementShip.dataset.orientation = "vertical"
        placementShip.id = ""
      }
      //remove draggable option


    });
    shipContainer.appendChild(placementShip);
  }
  return shipContainer;
}




/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dropCheck: () => (/* binding */ dropCheck),
/* harmony export */   gameBoard: () => (/* binding */ gameBoard)
/* harmony export */ });
// 1	Carrier		5
// 2	Battleship	4
// 3	Cruiser		3
// 4	Submarine	3
// 5	Destroyer	2
// 6	   hit	    2
// 7	   miss	    2


const shipFactory = __webpack_require__(/*! ./ship */ "./src/ship.js");





const gameBoard = () => {

    let shipTypes = {
        carrier: 1,
        battleship: 2,
        cruiser: 3,
        submarine: 4,
        destroyer: 5
    }


    let board = new Array(10);

    let ships = [

    ]
    let getShips = () => {
        return ships;
    }

    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(10);
        for (let ii = 0; ii < board[0].length; ii++) {
            board[i][ii] = 0;
        }
    }


    let getSpot = (x, y) => {
        return board[x][y];
    }


    let shipHorizontal = (ship, row, column) => {
        // arrayName[rowIndex][columnIndex]


        ships.push(ship);

        let shipSize = ship.getLength();

        if (shipSize + column > 9) {
            column = 10 - shipSize;

        }

        for (let i = column; i < shipSize + column; i++) {
            board[row][i] = ship.getType();
        }
    }


    let shipVertical = (ship, row, column) => {
        ships.push(ship);
        let shipSize = ship.getLength();

        if (shipSize + row > 9) {
            row = 10 - shipSize;
        }

        for (let i = row; i < shipSize + row; i++) {
            board[i][column] = ship.getType();
        }
    }
    //receive attack

    let recieveAttack = (row, column) => {
        if (board[row][column] == 0) {
            //miss
            board[row][column] = 7;
        } else if (board[row][column] >= 1 || board[row][column] <= 5) {
            for (const ship in ships) {
                if (ships[ship].getType() == board[row][column]) {
                    ships[ship].hit();
                }
            }
            //update board 
            board[row][column] = 6;
        }
    }

    let gameOver = () => {
        let endGame = true;

        for (const ship in ships) {
            if (ships[ship].isSunk() == false) {
                return false;
            }
        }
        return endGame

    }

    let renderBoard = () => {

        let row = 0;
        let column = 0;


        let container = document.createElement('div');
        container.classList = "gridContainer";
        container.setAttribute("draggable", false)


        for (let i = 0; i < 10; i++) {

            for (let ii = 0; ii < 10; ii++) {
                let block = document.createElement("div");
                block.classList = "block";
                block.dataset.rows = row;
                block.dataset.column = column;
                container.appendChild(block);
                column++;
            }
            row++;
            column = 0;
        }
        return container;
    }


    return { board, getSpot, shipHorizontal, shipVertical, recieveAttack, gameOver, getShips, renderBoard };
}


//check a valid ship placement
function dropCheck(row, column, orientation, shipLength, tempBoard) {
    //tempBoard = tempBoard;
 let   unchangedBoard = tempBoard;

    if (orientation == "vertical") {
        //check for edges 
        if (row + shipLength > 10) {
         
           return [unchangedBoard, false]
        }

        for (let i = 0; i < shipLength; i++) {
            if (tempBoard.board[row + i][column] >= 1) {
                //cannot place
                
                return [unchangedBoard, false]
            } else {
                tempBoard.board[row + i][column] = 1;

            }

        }
        return [tempBoard, true];
    } else {
        if (column + shipLength > 10) {
       
            return [unchangedBoard, false]
        }
        for (let i = 0; i < shipLength; i++) {
            //need to start at the column it was placed on 
            if (tempBoard.board[row][column + i] >= 1) {
             
                return [unchangedBoard, false]
            } else {
                //its fine 
                tempBoard.board[row][column + i] = 1;
            }

        }

        return [tempBoard, true];
    }
}





/***/ }),

/***/ "./src/gameDriver.js":
/*!***************************!*\
  !*** ./src/gameDriver.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAttack: () => (/* binding */ handleAttack)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameLogic */ "./src/gameLogic.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ship */ "./src/ship.js");










let title=document.createElement("h1");
title.classList="title"
title.textContent="Battleship"

document.body.appendChild(title);
document.body.appendChild((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.newGame)());

//need for AI decisions
let AI = (0,_player__WEBPACK_IMPORTED_MODULE_4__.player)();

//create the boards
let p1Board = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_2__.gameBoard)();
let AIBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_2__.gameBoard)();

//fill the boards/ will turn into ship placement
AIBoard = (0,_gameLogic__WEBPACK_IMPORTED_MODULE_3__.fillBoard)(AIBoard);



//adds grid listeners 
let enemyGrid = document.getElementById("enemyGrid");
(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.addGridListeners)(enemyGrid);


//display the popup selection for ship placement
const background = document.createElement("div");
background.classList = "backgroundCover"
document.body.appendChild(background);
document.body.appendChild((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.boardSetup)());

//start butten listener
let startBtn = document.querySelector(".startBtn");
startBtn.addEventListener('click', finalizePlacement)

//handle turns
function handleAttack(row, column, gridElement) {
    //players attack

    if (AIBoard.getSpot(row, column) == 7 || (AIBoard.getSpot(row, column) == 6)) {
        //try again
    } else {
        AIBoard.recieveAttack(row, column);



        if (AIBoard.getSpot(row, column) == 7) {
            gridElement.style.backgroundColor = "white";
        } else {
            gridElement.style.backgroundColor = "red";
            //check whether all ships are sunk here or at the end 

            //function to change dom to display winner 
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.endGame)(AIBoard.gameOver(), "Won");
        }

        gridElement.classList.add("selected");
        //AI attacks now
        //get rand spot for AI attack

        //check if all ships have been sunk 
        AITurn();
    }


}




function AITurn() {
    let AIShot = AI.AISpotPlacement();
    //get rid of gridelement 
    let playerGrid = document.getElementById("playerGrid");

    //get the dom cell that will change
    let AIDomShotElement;
    for (const playerElement of playerGrid.children) {
        if (playerElement.getAttribute("data-rows") == AIShot[0] && playerElement.getAttribute("data-column") == AIShot[1]) {
            AIDomShotElement = playerElement;
            break;
        }

    }

    //check if spot has already been taken
    if (p1Board.getSpot(AIShot[0], AIShot[1]) == 7 || p1Board.getSpot(AIShot[0], AIShot[1]) == 6) {
        //AI decides 
        AITurn();
    } else {
        p1Board.recieveAttack(AIShot[0], AIShot[1]);
        if (p1Board.getSpot(AIShot[0], AIShot[1]) == 7) {
            AIDomShotElement.style.backgroundColor = "white";
        } else {
            AIDomShotElement.style.backgroundColor = "red";
            //check whether the game is over
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.endGame)(p1Board.gameOver(), "lost");
        }
    }


}



let lengthToShip = {

    1: "carrier",
    2: "battleship",
    3: "cruiser",
    4: "submarine",
    5: "destroyer"
}


let shipLength = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2
}


function finalizePlacement() {
    let placementBoard = document.getElementById("placementGrid");
    placementBoard = placementBoard.childNodes;
    //logical board
    let rows = 0
    let columns = 0
    let shipNum = 0;
    //loop through transfering the ship type from the board to the logical board 
    for (let i = 0; i <= 99; i++) {
        //navigate he two dimensionsal array while the other does it in order 
        //every ten restart the column 
        //everyten add one to rows
        if (i % 10 == 0 && i != 0) {
            rows += 1;
            columns = 0;
        }
        if (placementBoard[i].dataset.shipType != undefined) {
            p1Board.board[rows][columns] = placementBoard[i].dataset.shipType

            //create ship with proper lengths and orientattion
            const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_5__["default"])(lengthToShip[placementBoard[i].dataset.shipType])
            //add that ship using the method
            if (placementBoard[i].dataset.orientation == "vertical") {
                p1Board.shipVertical(ship, rows, columns)
                shipNum++
            } else {
                p1Board.shipHorizontal(ship, rows, columns)
                shipNum++
            }

        }
        columns++;
    }
    let setupContainer = document.querySelector(".setupContainer")
    let background=document.querySelector(".backgroundCover")
    //hide the setupBoard
    setupContainer.remove();
    background.remove()


}




/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillBoard: () => (/* binding */ fillBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");






//ships
const botCarrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("carrier");
const botBattleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("battleship");
const botCruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("cruiser");
const botSubmarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("submarine");
const botDestroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])("destroyer");



let ships = {
    one: botCarrier,
    two: botBattleship,
    three: botCruiser,
    four: botSubmarine,
    five: botDestroyer,
}

ships = Object.values(ships)

///random numbers
function fillBoard(board) {
    //temp board
    let checkBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.gameBoard)();


    //random numbers fucntino
    let AIplayer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)();

    //each ship 

    for (let i = 0; i < 5;) {
        //random row and column
        let spot = AIplayer.AISpotPlacement()
        let row = spot[0]
        let column = spot[1]
        //random orientation
        //1 = vertical
        //0=horizontal
        let orientation = AIplayer.AIShipOrientation()

        if (orientation[0] == 0) {
            orientation = "vertical"
        } else {
            orientation = "horizontal"
        }
        //pass dropcheck the non ship object arguments 
       
        let result = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_1__.dropCheck)(row, column, orientation, ships[i].getLength(), checkBoard)
        checkBoard = result[0]

        if (result[1] == true) {
            if (orientation == "vertical") {
                checkBoard.shipVertical(ships[i], row, column);
            } else {
                checkBoard.shipHorizontal(ships[i], row, column);
            }
            i++
        }

    }

    return checkBoard;
}










/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   player: () => (/* binding */ player)
/* harmony export */ });


const player = () => {



    const AIShipOrientation= () => {
        let x, y;

        x=Math.floor(Math.random() * 2)
        y=Math.floor(Math.random() * 2)
        return [x, y]
    }

    const AISpotPlacement =()=>{
        let x, y;

        x=Math.floor(Math.random() * 10)
        y=Math.floor(Math.random() * 10)
        return [x, y]
    }



   
    return { AIShipOrientation,AISpotPlacement}
}




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// 1	Carrier		5
// 2	Battleship	4
// 3	Cruiser		3
// 4	Submarine	3
// 5	Destroyer	2
// 6	   hit	    2

const shipFactory = (shipName) => {



    //how to get the lenght using the data structure below from one another
    let shipTypes = {
        carrier: 1,
        battleship: 2,
        cruiser: 3,
        submarine: 4,
        destroyer: 5
    }

    let shipLength = {
        carrier: 5,
        battleship: 4,
        cruiser: 3,
        submarine: 3,
        destroyer: 2
    }
    const shipType=shipTypes[shipName];

    let hits=0;

    const hit=()=>{
        hits++;
    }

    const getHits= ()=>hits;
 
    const getLength=()=>shipLength[shipName];

    const isSunk=()=>{
        if(hits>=shipLength[shipName]){
            return true;
        }
        return false;
    }

    const getType=()=>shipType;

    return { getLength ,getHits,hit,isSunk,getType};
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipFactory);

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gameDriver.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUFxQixxREFBUztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVwQjs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0EsYUFBYTtBQUNiOztBQUVlOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxhQUFhO0FBQ2I7Ozs7QUFJQSxpRUFBZ0IsV0FBVzs7Ozs7O1VDdEQzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRHJpdmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUxvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ib2FyZENvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblxuXG59XG5cbi5wb3BVcENvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDMwJTtcblxuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XG4gICAgY29sb3I6IGRhcmtncmF5O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiAxMmVtO1xufVxuXG4uc2V0dXBDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0MCU7XG5cbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xuICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiAzZW07XG59XG5cbi5ibG9jayB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi5ibG9jazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ibG9jay5zZWxlY3RlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuXG5cblxuYm9keSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuXG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiA2ZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLmdyaWRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDJlbSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDJlbSk7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5ibG9jayB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW46IGF1dG87XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGhlaWdodDogaW5oZXJpdDtcbn1cblxuXG4uc3RhcnRDb250YWluZXIge1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuXG59XG5cblxuXG4uZW50ZXIge1xuICAgIHdpZHRoOiA2ZW07XG4gICAgbWFyZ2luOiAyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xuXG59XG5cbi5wbGF5ZXIge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xufVxuXG4jcGxheWVyVGV4dElucHV0IHtcbiAgICB3aWR0aDogMThlbTtcblxufVxuXG4ub3JpZW50QnRuIHtcbiAgICBtYXJnaW46IDFlbTtcblxufVxuXG4vKiAgZHJhZ2dhYmxlIHNoaXAgKi9cbi5zaGlwQ29udGFpbmVyPmRpdiB7XG5cbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuXG59XG5cbiNob3Jpem9udGFsU2hpcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG5cbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4jaW5uZXJTaGlwIHtcbiAgICB3aWR0aDogMmVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNoaXBDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBnYXA6IDVweDtcbiAgICBtYXJnaW46IDJlbTtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLmJhY2tncm91bmRDb3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMCU7XG5cbiAgICB0b3A6IDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgXG4gXG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICBcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVzs7SUFFWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2Qjs7O0FBR2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7O0lBRVQsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixrQkFBa0I7O0lBRWxCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTOztJQUVULFFBQVE7SUFDUiwyQkFBMkI7SUFDM0Isa0JBQWtCOztJQUVsQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7Ozs7QUFLQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7O0FBRTlCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLGVBQWU7O0FBRW5COzs7O0FBSUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxXQUFXOztBQUVmOztBQUVBLG9CQUFvQjtBQUNwQjs7SUFFSSxrQkFBa0I7SUFDbEIsbUJBQW1COztJQUVuQixxQkFBcUI7SUFDckIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7OztJQUduQixrQkFBa0I7SUFDbEIsbUJBQW1COztJQUVuQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixRQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFFBQVE7O0lBRVIsT0FBTztJQUNQLDBCQUEwQjtJQUMxQixrQkFBa0I7Ozs7O0lBS2xCLFdBQVc7SUFDWCxZQUFZOztBQUVoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9hcmRDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuXFxufVxcblxcbi5wb3BVcENvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMzAlO1xcblxcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgICBjb2xvcjogZGFya2dyYXk7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGhlaWdodDogMTJlbTtcXG59XFxuXFxuLnNldHVwQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0MCU7XFxuXFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XFxuICAgIGNvbG9yOiBkYXJrZ3JheTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAzZW07XFxufVxcblxcbi5ibG9jayB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG4uYmxvY2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJsb2NrLnNlbGVjdGVkIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuXFxuXFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuXFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNmVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uZ3JpZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyZW0pO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMmVtKTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogYXV0bztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuXFxuLnN0YXJ0Q29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcblxcbn1cXG5cXG5cXG5cXG4uZW50ZXIge1xcbiAgICB3aWR0aDogNmVtO1xcbiAgICBtYXJnaW46IDJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcXG5cXG59XFxuXFxuLnBsYXllciB7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG4jcGxheWVyVGV4dElucHV0IHtcXG4gICAgd2lkdGg6IDE4ZW07XFxuXFxufVxcblxcbi5vcmllbnRCdG4ge1xcbiAgICBtYXJnaW46IDFlbTtcXG5cXG59XFxuXFxuLyogIGRyYWdnYWJsZSBzaGlwICovXFxuLnNoaXBDb250YWluZXI+ZGl2IHtcXG5cXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFxufVxcblxcbiNob3Jpem9udGFsU2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jaW5uZXJTaGlwIHtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNoaXBDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMmVtO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5iYWNrZ3JvdW5kQ292ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDAlO1xcblxcbiAgICB0b3A6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAlKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgIFxcbiBcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuXG5jb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveFwiKTtcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuXG5cblxuXG5pbXBvcnQgeyBoYW5kbGVBdHRhY2sgfSBmcm9tIFwiLi9nYW1lRHJpdmVyXCI7XG5pbXBvcnQgeyBkcm9wQ2hlY2ssIGdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5cblxuXG5jb25zdCBnYW1lID0gZ2FtZUJvYXJkKCk7XG5cblxuXG5mdW5jdGlvbiBuZXdHYW1lKCkge1xuICBsZXQgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBwbGF5ZXJCb2FyZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcGxheWVyQm9hcmRMYWJlbC50ZXh0Q29udGVudCA9IFwiUGxheWVyIE9uZVwiO1xuXG4gIGxldCBBSUJvYXJkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBBSUJvYXJkTGFiZWwudGV4dENvbnRlbnQgPSBcIkVuZW15XCI7XG5cblxuICBjb21wb25lbnQuY2xhc3NMaXN0ID0gXCJib2FyZENvbnRhaW5lclwiO1xuXG5cblxuICBsZXQgZ3JpZDEgPSBnYW1lLnJlbmRlckJvYXJkKCk7XG4gIGxldCBncmlkMiA9IGdhbWUucmVuZGVyQm9hcmQoKTtcbiAgZ3JpZDIuaWQgPSBcImVuZW15R3JpZFwiO1xuICBncmlkMS5pZCA9IFwicGxheWVyR3JpZFwiO1xuXG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZExhYmVsKTtcbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKGdyaWQxKTtcbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKGdyaWQyKTtcbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKEFJQm9hcmRMYWJlbCk7XG4gIHJldHVybiBjb21wb25lbnQ7XG59XG5cblxuY29uc3QgYWRkR3JpZExpc3RlbmVycyA9IChlbmVteUdyaWQpID0+IHtcbiAgZm9yIChjb25zdCBncmlkRWxlbWVudCBvZiBlbmVteUdyaWQuY2hpbGRyZW4pIHtcbiAgICBncmlkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgIC8vaGFuZGxlIGNsaWNrXG4gICAgICBsZXQgcm93ID0gZ3JpZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpXG4gICAgICBsZXQgY29sdW1uID0gZ3JpZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5cIik7XG4gICAgICBoYW5kbGVBdHRhY2socm93LCBjb2x1bW4sIGdyaWRFbGVtZW50KTtcbiAgICB9XG4gICAgKVxuICB9XG59O1xuXG5cbmZ1bmN0aW9uIGVuZEdhbWUocmVzdWx0LCB3aW5uZXIpIHtcbiAgaWYgKHJlc3VsdCA9PSB0cnVlKSB7XG4gICAgLy9wbGFjZSBwb3AgdXAgb3ZlciB0aGUgYm9hcmRcXFxuXG5cbiAgICBjb25zdCBwb3BVcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wVXBDb250YWluZXIuY2xhc3NOYW1lID0gXCJwb3BVcENvbnRhaW5lclwiXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJHYW1lIE92ZXIhXCI7XG4gICAgY29uc3Qgd2lubmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB3aW5uZXJUZXh0LmNsYXNzTmFtZSA9IFwid2lubmVyVGV4dFwiO1xuICAgIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBcIllvdSBcIiArIHdpbm5lcjtcbiAgICBjb25zdCByZXBsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlcGxheUJ0bi50ZXh0Q29udGVudCA9IFwiUmVwbGF5P1wiXG5cblxuICAgIHJlcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KVxuXG4gICAgLy9hZGQgYWxsIGVsZW1lbnRzXG4gICAgcG9wVXBDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcG9wVXBDb250YWluZXIuYXBwZW5kQ2hpbGQod2lubmVyVGV4dCk7XG4gICAgcG9wVXBDb250YWluZXIuYXBwZW5kQ2hpbGQocmVwbGF5QnRuKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wVXBDb250YWluZXIpO1xuICB9XG5cblxuXG59XG5cblxuXG4vL2FkZCBzaGlwIHBsYWNlbWVudCBsaXN0ZW5lcnNcbmZ1bmN0aW9uIGFkZFBsYWNlbWVudExpc3RlbmVycyhncmlkKSB7XG4gIC8vdGVtcCBib2FyZCBmb3IgY2hlY2tpbmcgaWYgc3BvdCBpc1xuICBsZXQgY2hlY2tCb2FyZCA9IGdhbWVCb2FyZCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OTsgaSsrKSB7XG4gICAgZ3JpZFtpXS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgZmFsc2UpXG4gICAgZ3JpZFtpXS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgdG8gYWxsb3cgZHJvcFxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vc2V0IHRoZSBob3ZlciBmb3IgbXVsdGVpcGxlIGhlcmU/XG4gICAgfSk7XG4gICAgZ3JpZFtpXS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZXZlbnQpID0+IHtcblxuICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHRvIGFsbG93IGRyb3BcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCByb3cgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpXG4gICAgICBsZXQgY29sdW1uID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uXCIpXG5cbiAgICAgIGxldCBibG9ja0lEID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0SURcIik7XG4gICAgICBsZXQgc2hpcFR5cGUgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNoaXBUeXBlXCIpO1xuICAgICAgbGV0IG9yaWVudGF0aW9uID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJvcmllbnRhdGlvblwiKTtcbiAgICAgIGlmIChibG9ja0lEID09IFwiXCIgfHwgcm93ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAvL2RvIG5vdGhpbmdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBibG9rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihibG9ja0lEKTtcbiAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBibG9rLmdldEF0dHJpYnV0ZShcImRhdGEtbGVuZ3RoXCIpXG4gICAgICAgIGxldCB2YWx1ZSA9IGRyb3BDaGVjayhwYXJzZUludChyb3cpLCBwYXJzZUludChjb2x1bW4pLCBvcmllbnRhdGlvbiwgcGFyc2VJbnQoc2hpcExlbmd0aCksIGNoZWNrQm9hcmQpXG4gICAgICAgIGNoZWNrQm9hcmQgPSB2YWx1ZVswXVxuICAgICAgICBpZiAodmFsdWVbMV0gPT0gdHJ1ZSkge1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChibG9rKTtcbiAgICAgICAgICAvL3NldHRpbmcgdGhlIGdyaWQgZWxlbWVudCBzaGlwIHR5cGUgZGF0YXNldFxuICAgICAgICAgIGV2ZW50LnRhcmdldC5kYXRhc2V0LnNoaXBUeXBlID0gc2hpcFR5cGU7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LmRhdGFzZXQub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcblxuICAgICAgICAgIGJsb2suc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiXG4gICAgICAgICAgYmxvay5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vL21vdmluZyBkcm9wIGNoZWNrIHRvIGFub3RoZXIgbW9kdWxlXG5cblxuXG5cblxuXG5mdW5jdGlvbiBib2FyZFNldHVwKCkge1xuICBjb25zdCBzZXR1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldHVwQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwic2V0dXBDb250YWluZXJcIjtcblxuXG4gIC8vYmFja2dyb3VuZCBcblxuICBsZXQgZ3JpZCA9IGdhbWUucmVuZGVyQm9hcmQoKTtcbiAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJwbGFjZW1lbnRHcmlkXCIpO1xuICAvL1BsYWNlIFNoaXBzIHRleHRcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IFwiRHJhZyBhbmQgZHJvcCB0byBwbGFjZSBzaGlwc1wiO1xuICAvL2NoYW5nZSBvcmllbnRhdGlvbiBidXR0b25cbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdGFydEJ0bi5jbGFzc0xpc3QgPSBcInN0YXJ0QnRuXCI7XG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG5cbiAgLy9hZGQgdGhlIGxpc3RuZWVycyB0byB0aGUgYmxvY2tzIG9mIHRoZSBncmlkXG4gIGFkZFBsYWNlbWVudExpc3RlbmVycyhncmlkLmNoaWxkTm9kZXMpO1xuXG4gIGxldCBzaGlwQ29udGFpbmVyID0gcGxhY2VtZW50U2hpcHMoKTtcblxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJEb3VibGUgY2xpY2sgdG8gcm90YXRlIHNoaXBcIlxuXG4gIC8vYXBwZW5kIGFsbCBub2Rlc1xuICBzZXR1cENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgc2V0dXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuICBzZXR1cENvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcbiAgc2V0dXBDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZSlcbiAgc2V0dXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENvbnRhaW5lcilcblxuXG4gIHJldHVybiBzZXR1cENvbnRhaW5lcjtcblxufVxuXG5mdW5jdGlvbiBwbGFjZW1lbnRTaGlwcygpIHtcbiAgLy9kcmFnZ2FibGUgc2hpcCBjb250YWluZXJcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNoaXBDb250YWluZXJcIik7XG5cbiAgLy9zaGlwIHR5cGUgYW5kIGxlbmd0aFxuICBsZXQgc2hpcHMgPSBbXG4gICAgeyBsZW5ndGg6IDUsIHNoaXBUeXBlOiAxIH0sXG4gICAgeyBsZW5ndGg6IDQsIHNoaXBUeXBlOiAyIH0sXG4gICAgeyBsZW5ndGg6IDMsIHNoaXBUeXBlOiAzIH0sXG4gICAgeyBsZW5ndGg6IDMsIHNoaXBUeXBlOiA0IH0sXG4gICAgeyBsZW5ndGg6IDIsIHNoaXBUeXBlOiA1IH0sXVxuXG4gIC8vY3JlYXRlIHRoZSBzaGlwXG5cblxuICAvL2FkZCB0aGUgYmxvY2tzIG9mIHRoZSBzaGlwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgbGV0IHBsYWNlbWVudFNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYWNlbWVudFNoaXAuY2xhc3NMaXN0ID0gXCJzaGlwXCIgKyBpO1xuICAgIHBsYWNlbWVudFNoaXAuZGF0YXNldC5zaGlwVHlwZSA9IHNoaXBzW2ldLnNoaXBUeXBlO1xuICAgIHBsYWNlbWVudFNoaXAuZGF0YXNldC5sZW5ndGggPSBzaGlwc1tpXS5sZW5ndGg7XG4gICAgcGxhY2VtZW50U2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiXG4gICAgcGxhY2VtZW50U2hpcC5pZCA9IFwidmVydGljYWxcIjtcbiAgICAvL2NyZWF0ZSB0aGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IGFyZSBuZWVkZWQgLlxuICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBzaGlwc1tpXS5sZW5ndGg7IGlpKyspIHtcbiAgICAgIGxldCBzaGlwQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2hpcEJsb2NrLmlkID0gXCJpbm5lclNoaXBcIlxuICAgICAgcGxhY2VtZW50U2hpcC5hcHBlbmRDaGlsZChzaGlwQmxvY2spO1xuICAgICAgc2hpcEJsb2NrLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBmYWxzZSlcbiAgICB9XG5cblxuICAgIHBsYWNlbWVudFNoaXAuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpXG4gICAgcGxhY2VtZW50U2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChldmVudCkgPT4ge1xuICAgICAgLy8gc3RvcmUgYSByZWYuIG9uIHRoZSBkcmFnZ2VkIGVsZW1cbiAgICAgIC8vIGRyYWdnZWQgPSBldmVudC50YXJnZXQ7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRJRFwiLCBcIi5cIiArIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpO1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzaGlwVHlwZVwiLCBldmVudC50YXJnZXQuZGF0YXNldC5zaGlwVHlwZSk7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInNoaXBMZW5ndGhcIiwgZXZlbnQudGFyZ2V0LmRhdGFzZXQubGVuZ3RoKTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwib3JpZW50YXRpb25cIiwgZXZlbnQudGFyZ2V0LmRhdGFzZXQub3JpZW50YXRpb24pO1xuXG5cbiAgICB9KTtcblxuICAgIHBsYWNlbWVudFNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChldmVudCkgPT4ge1xuXG4gICAgICBpZiAocGxhY2VtZW50U2hpcC5kYXRhc2V0Lm9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgICBwbGFjZW1lbnRTaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIlxuICAgICAgICBwbGFjZW1lbnRTaGlwLmlkID0gXCJob3Jpem9udGFsU2hpcFwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZW1lbnRTaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCJcbiAgICAgICAgcGxhY2VtZW50U2hpcC5pZCA9IFwiXCJcbiAgICAgIH1cbiAgICAgIC8vcmVtb3ZlIGRyYWdnYWJsZSBvcHRpb25cblxuXG4gICAgfSk7XG4gICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZW1lbnRTaGlwKTtcbiAgfVxuICByZXR1cm4gc2hpcENvbnRhaW5lcjtcbn1cblxuXG5leHBvcnQgeyBuZXdHYW1lLCBhZGRHcmlkTGlzdGVuZXJzLCBlbmRHYW1lLCBib2FyZFNldHVwIH07IiwiLy8gMVx0Q2Fycmllclx0XHQ1XG4vLyAyXHRCYXR0bGVzaGlwXHQ0XG4vLyAzXHRDcnVpc2VyXHRcdDNcbi8vIDRcdFN1Ym1hcmluZVx0M1xuLy8gNVx0RGVzdHJveWVyXHQyXG4vLyA2XHQgICBoaXRcdCAgICAyXG4vLyA3XHQgICBtaXNzXHQgICAgMlxuXG5cbmNvbnN0IHNoaXBGYWN0b3J5ID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5cblxuXG5cblxuY29uc3QgZ2FtZUJvYXJkID0gKCkgPT4ge1xuXG4gICAgbGV0IHNoaXBUeXBlcyA9IHtcbiAgICAgICAgY2FycmllcjogMSxcbiAgICAgICAgYmF0dGxlc2hpcDogMixcbiAgICAgICAgY3J1aXNlcjogMyxcbiAgICAgICAgc3VibWFyaW5lOiA0LFxuICAgICAgICBkZXN0cm95ZXI6IDVcbiAgICB9XG5cblxuICAgIGxldCBib2FyZCA9IG5ldyBBcnJheSgxMCk7XG5cbiAgICBsZXQgc2hpcHMgPSBbXG5cbiAgICBdXG4gICAgbGV0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFtpXSA9IG5ldyBBcnJheSgxMCk7XG4gICAgICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBib2FyZFswXS5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICAgIGJvYXJkW2ldW2lpXSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGxldCBnZXRTcG90ID0gKHgsIHkpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvYXJkW3hdW3ldO1xuICAgIH1cblxuXG4gICAgbGV0IHNoaXBIb3Jpem9udGFsID0gKHNoaXAsIHJvdywgY29sdW1uKSA9PiB7XG4gICAgICAgIC8vIGFycmF5TmFtZVtyb3dJbmRleF1bY29sdW1uSW5kZXhdXG5cblxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgICAgIGxldCBzaGlwU2l6ZSA9IHNoaXAuZ2V0TGVuZ3RoKCk7XG5cbiAgICAgICAgaWYgKHNoaXBTaXplICsgY29sdW1uID4gOSkge1xuICAgICAgICAgICAgY29sdW1uID0gMTAgLSBzaGlwU2l6ZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGNvbHVtbjsgaSA8IHNoaXBTaXplICsgY29sdW1uOyBpKyspIHtcbiAgICAgICAgICAgIGJvYXJkW3Jvd11baV0gPSBzaGlwLmdldFR5cGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgbGV0IHNoaXBWZXJ0aWNhbCA9IChzaGlwLCByb3csIGNvbHVtbikgPT4ge1xuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICBsZXQgc2hpcFNpemUgPSBzaGlwLmdldExlbmd0aCgpO1xuXG4gICAgICAgIGlmIChzaGlwU2l6ZSArIHJvdyA+IDkpIHtcbiAgICAgICAgICAgIHJvdyA9IDEwIC0gc2hpcFNpemU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgc2hpcFNpemUgKyByb3c7IGkrKykge1xuICAgICAgICAgICAgYm9hcmRbaV1bY29sdW1uXSA9IHNoaXAuZ2V0VHlwZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vcmVjZWl2ZSBhdHRhY2tcblxuICAgIGxldCByZWNpZXZlQXR0YWNrID0gKHJvdywgY29sdW1uKSA9PiB7XG4gICAgICAgIGlmIChib2FyZFtyb3ddW2NvbHVtbl0gPT0gMCkge1xuICAgICAgICAgICAgLy9taXNzXG4gICAgICAgICAgICBib2FyZFtyb3ddW2NvbHVtbl0gPSA3O1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkW3Jvd11bY29sdW1uXSA+PSAxIHx8IGJvYXJkW3Jvd11bY29sdW1uXSA8PSA1KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNoaXAgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcHNbc2hpcF0uZ2V0VHlwZSgpID09IGJvYXJkW3Jvd11bY29sdW1uXSkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwc1tzaGlwXS5oaXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3VwZGF0ZSBib2FyZCBcbiAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sdW1uXSA9IDY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZ2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbmRHYW1lID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKGNvbnN0IHNoaXAgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIGlmIChzaGlwc1tzaGlwXS5pc1N1bmsoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW5kR2FtZVxuXG4gICAgfVxuXG4gICAgbGV0IHJlbmRlckJvYXJkID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCByb3cgPSAwO1xuICAgICAgICBsZXQgY29sdW1uID0gMDtcblxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdCA9IFwiZ3JpZENvbnRhaW5lclwiO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIGZhbHNlKVxuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCAxMDsgaWkrKykge1xuICAgICAgICAgICAgICAgIGxldCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIGJsb2NrLmRhdGFzZXQucm93cyA9IHJvdztcbiAgICAgICAgICAgICAgICBibG9jay5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmxvY2spO1xuICAgICAgICAgICAgICAgIGNvbHVtbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICBjb2x1bW4gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG5cbiAgICByZXR1cm4geyBib2FyZCwgZ2V0U3BvdCwgc2hpcEhvcml6b250YWwsIHNoaXBWZXJ0aWNhbCwgcmVjaWV2ZUF0dGFjaywgZ2FtZU92ZXIsIGdldFNoaXBzLCByZW5kZXJCb2FyZCB9O1xufVxuXG5cbi8vY2hlY2sgYSB2YWxpZCBzaGlwIHBsYWNlbWVudFxuZnVuY3Rpb24gZHJvcENoZWNrKHJvdywgY29sdW1uLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgdGVtcEJvYXJkKSB7XG4gICAgLy90ZW1wQm9hcmQgPSB0ZW1wQm9hcmQ7XG4gbGV0ICAgdW5jaGFuZ2VkQm9hcmQgPSB0ZW1wQm9hcmQ7XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIC8vY2hlY2sgZm9yIGVkZ2VzIFxuICAgICAgICBpZiAocm93ICsgc2hpcExlbmd0aCA+IDEwKSB7XG4gICAgICAgICBcbiAgICAgICAgICAgcmV0dXJuIFt1bmNoYW5nZWRCb2FyZCwgZmFsc2VdXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRlbXBCb2FyZC5ib2FyZFtyb3cgKyBpXVtjb2x1bW5dID49IDEpIHtcbiAgICAgICAgICAgICAgICAvL2Nhbm5vdCBwbGFjZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBbdW5jaGFuZ2VkQm9hcmQsIGZhbHNlXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wQm9hcmQuYm9hcmRbcm93ICsgaV1bY29sdW1uXSA9IDE7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdGVtcEJvYXJkLCB0cnVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29sdW1uICsgc2hpcExlbmd0aCA+IDEwKSB7XG4gICAgICAgXG4gICAgICAgICAgICByZXR1cm4gW3VuY2hhbmdlZEJvYXJkLCBmYWxzZV1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy9uZWVkIHRvIHN0YXJ0IGF0IHRoZSBjb2x1bW4gaXQgd2FzIHBsYWNlZCBvbiBcbiAgICAgICAgICAgIGlmICh0ZW1wQm9hcmQuYm9hcmRbcm93XVtjb2x1bW4gKyBpXSA+PSAxKSB7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt1bmNoYW5nZWRCb2FyZCwgZmFsc2VdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vaXRzIGZpbmUgXG4gICAgICAgICAgICAgICAgdGVtcEJvYXJkLmJvYXJkW3Jvd11bY29sdW1uICsgaV0gPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3RlbXBCb2FyZCwgdHJ1ZV07XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHsgZ2FtZUJvYXJkLCBkcm9wQ2hlY2sgfTsiLCJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbmV3R2FtZSwgYWRkR3JpZExpc3RlbmVycywgZW5kR2FtZSB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGRyb3BDaGVjayxnYW1lQm9hcmQgfSBmcm9tICcuL2dhbWVCb2FyZCc7XG5pbXBvcnQgeyBmaWxsQm9hcmQsIGZpbGxCb2FyZFRlbXAgfSBmcm9tICcuL2dhbWVMb2dpYyc7XG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBib2FyZFNldHVwIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gJy4vc2hpcCc7XG5cblxubGV0IHRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRpdGxlLmNsYXNzTGlzdD1cInRpdGxlXCJcbnRpdGxlLnRleHRDb250ZW50PVwiQmF0dGxlc2hpcFwiXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdHYW1lKCkpO1xuXG4vL25lZWQgZm9yIEFJIGRlY2lzaW9uc1xubGV0IEFJID0gcGxheWVyKCk7XG5cbi8vY3JlYXRlIHRoZSBib2FyZHNcbmxldCBwMUJvYXJkID0gZ2FtZUJvYXJkKCk7XG5sZXQgQUlCb2FyZCA9IGdhbWVCb2FyZCgpO1xuXG4vL2ZpbGwgdGhlIGJvYXJkcy8gd2lsbCB0dXJuIGludG8gc2hpcCBwbGFjZW1lbnRcbkFJQm9hcmQgPSBmaWxsQm9hcmQoQUlCb2FyZCk7XG5cblxuXG4vL2FkZHMgZ3JpZCBsaXN0ZW5lcnMgXG5sZXQgZW5lbXlHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmVteUdyaWRcIik7XG5hZGRHcmlkTGlzdGVuZXJzKGVuZW15R3JpZCk7XG5cblxuLy9kaXNwbGF5IHRoZSBwb3B1cCBzZWxlY3Rpb24gZm9yIHNoaXAgcGxhY2VtZW50XG5jb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJhY2tncm91bmQuY2xhc3NMaXN0ID0gXCJiYWNrZ3JvdW5kQ292ZXJcIlxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9hcmRTZXR1cCgpKTtcblxuLy9zdGFydCBidXR0ZW4gbGlzdGVuZXJcbmxldCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRCdG5cIik7XG5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbmFsaXplUGxhY2VtZW50KVxuXG4vL2hhbmRsZSB0dXJuc1xuZnVuY3Rpb24gaGFuZGxlQXR0YWNrKHJvdywgY29sdW1uLCBncmlkRWxlbWVudCkge1xuICAgIC8vcGxheWVycyBhdHRhY2tcblxuICAgIGlmIChBSUJvYXJkLmdldFNwb3Qocm93LCBjb2x1bW4pID09IDcgfHwgKEFJQm9hcmQuZ2V0U3BvdChyb3csIGNvbHVtbikgPT0gNikpIHtcbiAgICAgICAgLy90cnkgYWdhaW5cbiAgICB9IGVsc2Uge1xuICAgICAgICBBSUJvYXJkLnJlY2lldmVBdHRhY2socm93LCBjb2x1bW4pO1xuXG5cblxuICAgICAgICBpZiAoQUlCb2FyZC5nZXRTcG90KHJvdywgY29sdW1uKSA9PSA3KSB7XG4gICAgICAgICAgICBncmlkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBncmlkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgLy9jaGVjayB3aGV0aGVyIGFsbCBzaGlwcyBhcmUgc3VuayBoZXJlIG9yIGF0IHRoZSBlbmQgXG5cbiAgICAgICAgICAgIC8vZnVuY3Rpb24gdG8gY2hhbmdlIGRvbSB0byBkaXNwbGF5IHdpbm5lciBcbiAgICAgICAgICAgIGVuZEdhbWUoQUlCb2FyZC5nYW1lT3ZlcigpLCBcIldvblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyaWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgLy9BSSBhdHRhY2tzIG5vd1xuICAgICAgICAvL2dldCByYW5kIHNwb3QgZm9yIEFJIGF0dGFja1xuXG4gICAgICAgIC8vY2hlY2sgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rIFxuICAgICAgICBBSVR1cm4oKTtcbiAgICB9XG5cblxufVxuXG5cblxuXG5mdW5jdGlvbiBBSVR1cm4oKSB7XG4gICAgbGV0IEFJU2hvdCA9IEFJLkFJU3BvdFBsYWNlbWVudCgpO1xuICAgIC8vZ2V0IHJpZCBvZiBncmlkZWxlbWVudCBcbiAgICBsZXQgcGxheWVyR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyR3JpZFwiKTtcblxuICAgIC8vZ2V0IHRoZSBkb20gY2VsbCB0aGF0IHdpbGwgY2hhbmdlXG4gICAgbGV0IEFJRG9tU2hvdEVsZW1lbnQ7XG4gICAgZm9yIChjb25zdCBwbGF5ZXJFbGVtZW50IG9mIHBsYXllckdyaWQuY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKHBsYXllckVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dzXCIpID09IEFJU2hvdFswXSAmJiBwbGF5ZXJFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uXCIpID09IEFJU2hvdFsxXSkge1xuICAgICAgICAgICAgQUlEb21TaG90RWxlbWVudCA9IHBsYXllckVsZW1lbnQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy9jaGVjayBpZiBzcG90IGhhcyBhbHJlYWR5IGJlZW4gdGFrZW5cbiAgICBpZiAocDFCb2FyZC5nZXRTcG90KEFJU2hvdFswXSwgQUlTaG90WzFdKSA9PSA3IHx8IHAxQm9hcmQuZ2V0U3BvdChBSVNob3RbMF0sIEFJU2hvdFsxXSkgPT0gNikge1xuICAgICAgICAvL0FJIGRlY2lkZXMgXG4gICAgICAgIEFJVHVybigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHAxQm9hcmQucmVjaWV2ZUF0dGFjayhBSVNob3RbMF0sIEFJU2hvdFsxXSk7XG4gICAgICAgIGlmIChwMUJvYXJkLmdldFNwb3QoQUlTaG90WzBdLCBBSVNob3RbMV0pID09IDcpIHtcbiAgICAgICAgICAgIEFJRG9tU2hvdEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQUlEb21TaG90RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgLy9jaGVjayB3aGV0aGVyIHRoZSBnYW1lIGlzIG92ZXJcbiAgICAgICAgICAgIGVuZEdhbWUocDFCb2FyZC5nYW1lT3ZlcigpLCBcImxvc3RcIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5cblxubGV0IGxlbmd0aFRvU2hpcCA9IHtcblxuICAgIDE6IFwiY2FycmllclwiLFxuICAgIDI6IFwiYmF0dGxlc2hpcFwiLFxuICAgIDM6IFwiY3J1aXNlclwiLFxuICAgIDQ6IFwic3VibWFyaW5lXCIsXG4gICAgNTogXCJkZXN0cm95ZXJcIlxufVxuXG5cbmxldCBzaGlwTGVuZ3RoID0ge1xuICAgIGNhcnJpZXI6IDUsXG4gICAgYmF0dGxlc2hpcDogNCxcbiAgICBjcnVpc2VyOiAzLFxuICAgIHN1Ym1hcmluZTogMyxcbiAgICBkZXN0cm95ZXI6IDJcbn1cblxuXG5mdW5jdGlvbiBmaW5hbGl6ZVBsYWNlbWVudCgpIHtcbiAgICBsZXQgcGxhY2VtZW50Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYWNlbWVudEdyaWRcIik7XG4gICAgcGxhY2VtZW50Qm9hcmQgPSBwbGFjZW1lbnRCb2FyZC5jaGlsZE5vZGVzO1xuICAgIC8vbG9naWNhbCBib2FyZFxuICAgIGxldCByb3dzID0gMFxuICAgIGxldCBjb2x1bW5zID0gMFxuICAgIGxldCBzaGlwTnVtID0gMDtcbiAgICAvL2xvb3AgdGhyb3VnaCB0cmFuc2ZlcmluZyB0aGUgc2hpcCB0eXBlIGZyb20gdGhlIGJvYXJkIHRvIHRoZSBsb2dpY2FsIGJvYXJkIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDk5OyBpKyspIHtcbiAgICAgICAgLy9uYXZpZ2F0ZSBoZSB0d28gZGltZW5zaW9uc2FsIGFycmF5IHdoaWxlIHRoZSBvdGhlciBkb2VzIGl0IGluIG9yZGVyIFxuICAgICAgICAvL2V2ZXJ5IHRlbiByZXN0YXJ0IHRoZSBjb2x1bW4gXG4gICAgICAgIC8vZXZlcnl0ZW4gYWRkIG9uZSB0byByb3dzXG4gICAgICAgIGlmIChpICUgMTAgPT0gMCAmJiBpICE9IDApIHtcbiAgICAgICAgICAgIHJvd3MgKz0gMTtcbiAgICAgICAgICAgIGNvbHVtbnMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZW1lbnRCb2FyZFtpXS5kYXRhc2V0LnNoaXBUeXBlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcDFCb2FyZC5ib2FyZFtyb3dzXVtjb2x1bW5zXSA9IHBsYWNlbWVudEJvYXJkW2ldLmRhdGFzZXQuc2hpcFR5cGVcblxuICAgICAgICAgICAgLy9jcmVhdGUgc2hpcCB3aXRoIHByb3BlciBsZW5ndGhzIGFuZCBvcmllbnRhdHRpb25cbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwRmFjdG9yeShsZW5ndGhUb1NoaXBbcGxhY2VtZW50Qm9hcmRbaV0uZGF0YXNldC5zaGlwVHlwZV0pXG4gICAgICAgICAgICAvL2FkZCB0aGF0IHNoaXAgdXNpbmcgdGhlIG1ldGhvZFxuICAgICAgICAgICAgaWYgKHBsYWNlbWVudEJvYXJkW2ldLmRhdGFzZXQub3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgcDFCb2FyZC5zaGlwVmVydGljYWwoc2hpcCwgcm93cywgY29sdW1ucylcbiAgICAgICAgICAgICAgICBzaGlwTnVtKytcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcDFCb2FyZC5zaGlwSG9yaXpvbnRhbChzaGlwLCByb3dzLCBjb2x1bW5zKVxuICAgICAgICAgICAgICAgIHNoaXBOdW0rK1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgY29sdW1ucysrO1xuICAgIH1cbiAgICBsZXQgc2V0dXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHVwQ29udGFpbmVyXCIpXG4gICAgbGV0IGJhY2tncm91bmQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrZ3JvdW5kQ292ZXJcIilcbiAgICAvL2hpZGUgdGhlIHNldHVwQm9hcmRcbiAgICBzZXR1cENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBiYWNrZ3JvdW5kLnJlbW92ZSgpXG5cblxufVxuXG5cbmV4cG9ydCB7IGhhbmRsZUF0dGFjayB9OyIsIlxuXG5pbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IGRyb3BDaGVjaywgZ2FtZUJvYXJkIH0gZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuXG4vL3NoaXBzXG5jb25zdCBib3RDYXJyaWVyID0gc2hpcEZhY3RvcnkoXCJjYXJyaWVyXCIpO1xuY29uc3QgYm90QmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KFwiYmF0dGxlc2hpcFwiKTtcbmNvbnN0IGJvdENydWlzZXIgPSBzaGlwRmFjdG9yeShcImNydWlzZXJcIik7XG5jb25zdCBib3RTdWJtYXJpbmUgPSBzaGlwRmFjdG9yeShcInN1Ym1hcmluZVwiKTtcbmNvbnN0IGJvdERlc3Ryb3llciA9IHNoaXBGYWN0b3J5KFwiZGVzdHJveWVyXCIpO1xuXG5cblxubGV0IHNoaXBzID0ge1xuICAgIG9uZTogYm90Q2FycmllcixcbiAgICB0d286IGJvdEJhdHRsZXNoaXAsXG4gICAgdGhyZWU6IGJvdENydWlzZXIsXG4gICAgZm91cjogYm90U3VibWFyaW5lLFxuICAgIGZpdmU6IGJvdERlc3Ryb3llcixcbn1cblxuc2hpcHMgPSBPYmplY3QudmFsdWVzKHNoaXBzKVxuXG4vLy9yYW5kb20gbnVtYmVyc1xuZnVuY3Rpb24gZmlsbEJvYXJkKGJvYXJkKSB7XG4gICAgLy90ZW1wIGJvYXJkXG4gICAgbGV0IGNoZWNrQm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuXG4gICAgLy9yYW5kb20gbnVtYmVycyBmdWNudGlub1xuICAgIGxldCBBSXBsYXllciA9IHBsYXllcigpO1xuXG4gICAgLy9lYWNoIHNoaXAgXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7KSB7XG4gICAgICAgIC8vcmFuZG9tIHJvdyBhbmQgY29sdW1uXG4gICAgICAgIGxldCBzcG90ID0gQUlwbGF5ZXIuQUlTcG90UGxhY2VtZW50KClcbiAgICAgICAgbGV0IHJvdyA9IHNwb3RbMF1cbiAgICAgICAgbGV0IGNvbHVtbiA9IHNwb3RbMV1cbiAgICAgICAgLy9yYW5kb20gb3JpZW50YXRpb25cbiAgICAgICAgLy8xID0gdmVydGljYWxcbiAgICAgICAgLy8wPWhvcml6b250YWxcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gQUlwbGF5ZXIuQUlTaGlwT3JpZW50YXRpb24oKVxuXG4gICAgICAgIGlmIChvcmllbnRhdGlvblswXSA9PSAwKSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IFwidmVydGljYWxcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIlxuICAgICAgICB9XG4gICAgICAgIC8vcGFzcyBkcm9wY2hlY2sgdGhlIG5vbiBzaGlwIG9iamVjdCBhcmd1bWVudHMgXG4gICAgICAgXG4gICAgICAgIGxldCByZXN1bHQgPSBkcm9wQ2hlY2socm93LCBjb2x1bW4sIG9yaWVudGF0aW9uLCBzaGlwc1tpXS5nZXRMZW5ndGgoKSwgY2hlY2tCb2FyZClcbiAgICAgICAgY2hlY2tCb2FyZCA9IHJlc3VsdFswXVxuXG4gICAgICAgIGlmIChyZXN1bHRbMV0gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgIGNoZWNrQm9hcmQuc2hpcFZlcnRpY2FsKHNoaXBzW2ldLCByb3csIGNvbHVtbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoZWNrQm9hcmQuc2hpcEhvcml6b250YWwoc2hpcHNbaV0sIHJvdywgY29sdW1uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrK1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2tCb2FyZDtcbn1cblxuXG5leHBvcnQgeyBmaWxsQm9hcmQgfVxuXG5cblxuXG5cbiIsIlxuXG5jb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG5cblxuXG4gICAgY29uc3QgQUlTaGlwT3JpZW50YXRpb249ICgpID0+IHtcbiAgICAgICAgbGV0IHgsIHk7XG5cbiAgICAgICAgeD1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgICAgICB5PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXG4gICAgICAgIHJldHVybiBbeCwgeV1cbiAgICB9XG5cbiAgICBjb25zdCBBSVNwb3RQbGFjZW1lbnQgPSgpPT57XG4gICAgICAgIGxldCB4LCB5O1xuXG4gICAgICAgIHg9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIHk9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIHJldHVybiBbeCwgeV1cbiAgICB9XG5cblxuXG4gICBcbiAgICByZXR1cm4geyBBSVNoaXBPcmllbnRhdGlvbixBSVNwb3RQbGFjZW1lbnR9XG59XG5cbmV4cG9ydCB7cGxheWVyfVxuIiwiXG4vLyAxXHRDYXJyaWVyXHRcdDVcbi8vIDJcdEJhdHRsZXNoaXBcdDRcbi8vIDNcdENydWlzZXJcdFx0M1xuLy8gNFx0U3VibWFyaW5lXHQzXG4vLyA1XHREZXN0cm95ZXJcdDJcbi8vIDZcdCAgIGhpdFx0ICAgIDJcblxuY29uc3Qgc2hpcEZhY3RvcnkgPSAoc2hpcE5hbWUpID0+IHtcblxuXG5cbiAgICAvL2hvdyB0byBnZXQgdGhlIGxlbmdodCB1c2luZyB0aGUgZGF0YSBzdHJ1Y3R1cmUgYmVsb3cgZnJvbSBvbmUgYW5vdGhlclxuICAgIGxldCBzaGlwVHlwZXMgPSB7XG4gICAgICAgIGNhcnJpZXI6IDEsXG4gICAgICAgIGJhdHRsZXNoaXA6IDIsXG4gICAgICAgIGNydWlzZXI6IDMsXG4gICAgICAgIHN1Ym1hcmluZTogNCxcbiAgICAgICAgZGVzdHJveWVyOiA1XG4gICAgfVxuXG4gICAgbGV0IHNoaXBMZW5ndGggPSB7XG4gICAgICAgIGNhcnJpZXI6IDUsXG4gICAgICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgICAgIGNydWlzZXI6IDMsXG4gICAgICAgIHN1Ym1hcmluZTogMyxcbiAgICAgICAgZGVzdHJveWVyOiAyXG4gICAgfVxuICAgIGNvbnN0IHNoaXBUeXBlPXNoaXBUeXBlc1tzaGlwTmFtZV07XG5cbiAgICBsZXQgaGl0cz0wO1xuXG4gICAgY29uc3QgaGl0PSgpPT57XG4gICAgICAgIGhpdHMrKztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRIaXRzPSAoKT0+aGl0cztcbiBcbiAgICBjb25zdCBnZXRMZW5ndGg9KCk9PnNoaXBMZW5ndGhbc2hpcE5hbWVdO1xuXG4gICAgY29uc3QgaXNTdW5rPSgpPT57XG4gICAgICAgIGlmKGhpdHM+PXNoaXBMZW5ndGhbc2hpcE5hbWVdKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUeXBlPSgpPT5zaGlwVHlwZTtcblxuICAgIHJldHVybiB7IGdldExlbmd0aCAsZ2V0SGl0cyxoaXQsaXNTdW5rLGdldFR5cGV9O1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgIHNoaXBGYWN0b3J5OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2dhbWVEcml2ZXIuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=