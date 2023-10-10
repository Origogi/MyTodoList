/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/abstract-factory/3d-button.ts":
/*!*******************************************!*\
  !*** ./src/abstract-factory/3d-button.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThreeDButton: () => (/* binding */ ThreeDButton)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/abstract-factory/button.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ThreeDButton = /** @class */ (function (_super) {
    __extends(ThreeDButton, _super);
    function ThreeDButton(dom, caption) {
        var _this = _super.call(this, dom, caption) || this;
        _this.render();
        return _this;
    }
    ThreeDButton.prototype.render = function () {
        this.dom.innerHTML = "".concat(this.caption, "\n        <div></div>\n        <div></div>");
        this.dom.classList.add("threeD-button");
    };
    return ThreeDButton;
}(_button__WEBPACK_IMPORTED_MODULE_0__.Button));



/***/ }),

/***/ "./src/abstract-factory/3d-check-box.ts":
/*!**********************************************!*\
  !*** ./src/abstract-factory/3d-check-box.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThreeDCheckbox: () => (/* binding */ ThreeDCheckbox)
/* harmony export */ });
/* harmony import */ var _check_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-box */ "./src/abstract-factory/check-box.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ThreeDCheckbox = /** @class */ (function (_super) {
    __extends(ThreeDCheckbox, _super);
    function ThreeDCheckbox(dom, label, checked) {
        var _this = _super.call(this, dom, label, checked) || this;
        _this.render();
        return _this;
    }
    ThreeDCheckbox.prototype.render = function () {
        this.dom.innerHTML = "\n            <label>CheckBox\n                <input type=\"checkbox\" ".concat(this.checked ? "checked" : "", ">\n                <div class=\"box\"></div>\n                <div class=\"line\"></div>\n            </label>");
        this.dom.classList.add("threeD-checkbox");
    };
    return ThreeDCheckbox;
}(_check_box__WEBPACK_IMPORTED_MODULE_0__.Checkbox));



/***/ }),

/***/ "./src/abstract-factory/3d-text-edit.ts":
/*!**********************************************!*\
  !*** ./src/abstract-factory/3d-text-edit.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThreeDTextEdit: () => (/* binding */ ThreeDTextEdit)
/* harmony export */ });
/* harmony import */ var _text_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-edit */ "./src/abstract-factory/text-edit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ThreeDTextEdit = /** @class */ (function (_super) {
    __extends(ThreeDTextEdit, _super);
    function ThreeDTextEdit(dom, text) {
        var _this = _super.call(this, dom, text) || this;
        _this.render();
        return _this;
    }
    ThreeDTextEdit.prototype.render = function () {
        this.dom.innerHTML = "\n            <input value=\"".concat(this.text, "\">");
        this.dom.classList.add("threeD-input");
    };
    return ThreeDTextEdit;
}(_text_edit__WEBPACK_IMPORTED_MODULE_0__.TextEdit));



/***/ }),

/***/ "./src/abstract-factory/3d-ui-factory.ts":
/*!***********************************************!*\
  !*** ./src/abstract-factory/3d-ui-factory.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThreeDUiFactory: () => (/* binding */ ThreeDUiFactory)
/* harmony export */ });
/* harmony import */ var _ui_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-factory */ "./src/abstract-factory/ui-factory.ts");
/* harmony import */ var _3d_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3d-button */ "./src/abstract-factory/3d-button.ts");
/* harmony import */ var _3d_check_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3d-check-box */ "./src/abstract-factory/3d-check-box.ts");
/* harmony import */ var _3d_text_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./3d-text-edit */ "./src/abstract-factory/3d-text-edit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ThreeDUiFactory = /** @class */ (function (_super) {
    __extends(ThreeDUiFactory, _super);
    function ThreeDUiFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeDUiFactory.prototype.createButton = function (dom, caption) {
        return new _3d_button__WEBPACK_IMPORTED_MODULE_1__.ThreeDButton(dom, caption);
    };
    ThreeDUiFactory.prototype.createCheckBox = function (dom, label, checked) {
        return new _3d_check_box__WEBPACK_IMPORTED_MODULE_2__.ThreeDCheckbox(dom, label, checked);
    };
    ThreeDUiFactory.prototype.createTextEdit = function (dom, text) {
        return new _3d_text_edit__WEBPACK_IMPORTED_MODULE_3__.ThreeDTextEdit(dom, text);
    };
    return ThreeDUiFactory;
}(_ui_factory__WEBPACK_IMPORTED_MODULE_0__.UiFactory));



/***/ }),

/***/ "./src/abstract-factory/button.ts":
/*!****************************************!*\
  !*** ./src/abstract-factory/button.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
var Button = /** @class */ (function () {
    function Button(dom, caption) {
        this.dom = dom;
        this.caption = caption;
    }
    return Button;
}());



/***/ }),

/***/ "./src/abstract-factory/check-box.ts":
/*!*******************************************!*\
  !*** ./src/abstract-factory/check-box.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox)
/* harmony export */ });
var Checkbox = /** @class */ (function () {
    function Checkbox(dom, label, checked) {
        this.dom = dom;
        this.label = label;
        this.checked = checked;
    }
    return Checkbox;
}());



/***/ }),

/***/ "./src/abstract-factory/flat-button.ts":
/*!*********************************************!*\
  !*** ./src/abstract-factory/flat-button.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlatButton: () => (/* binding */ FlatButton)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/abstract-factory/button.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FlatButton = /** @class */ (function (_super) {
    __extends(FlatButton, _super);
    function FlatButton(dom, caption) {
        var _this = _super.call(this, dom, caption) || this;
        _this.render();
        return _this;
    }
    FlatButton.prototype.render = function () {
        this.dom.innerText = this.caption;
        this.dom.classList.add("flat-button");
    };
    return FlatButton;
}(_button__WEBPACK_IMPORTED_MODULE_0__.Button));



/***/ }),

/***/ "./src/abstract-factory/flat-check-box.ts":
/*!************************************************!*\
  !*** ./src/abstract-factory/flat-check-box.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlatCheckbox: () => (/* binding */ FlatCheckbox)
/* harmony export */ });
/* harmony import */ var _check_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-box */ "./src/abstract-factory/check-box.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FlatCheckbox = /** @class */ (function (_super) {
    __extends(FlatCheckbox, _super);
    function FlatCheckbox(dom, label, checked) {
        var _this = _super.call(this, dom, label, checked) || this;
        _this.render();
        return _this;
    }
    FlatCheckbox.prototype.render = function () {
        this.dom.innerHTML = "\n            <label>\n                ".concat(this.label, "\n                <input type=\"checkbox\" ").concat(this.checked ? "checked" : "", ">\n                <span></span>\n            </label>");
        this.dom.classList.add("flat-checkbox");
    };
    return FlatCheckbox;
}(_check_box__WEBPACK_IMPORTED_MODULE_0__.Checkbox));



/***/ }),

/***/ "./src/abstract-factory/flat-text-edit.ts":
/*!************************************************!*\
  !*** ./src/abstract-factory/flat-text-edit.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlatTextEdit: () => (/* binding */ FlatTextEdit)
/* harmony export */ });
/* harmony import */ var _text_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-edit */ "./src/abstract-factory/text-edit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FlatTextEdit = /** @class */ (function (_super) {
    __extends(FlatTextEdit, _super);
    function FlatTextEdit(dom, text) {
        var _this = _super.call(this, dom, text) || this;
        _this.render();
        return _this;
    }
    FlatTextEdit.prototype.render = function () {
        this.dom.innerHTML = "\n            <input value=\"".concat(this.text, "\">");
        this.dom.classList.add("flat-input");
    };
    return FlatTextEdit;
}(_text_edit__WEBPACK_IMPORTED_MODULE_0__.TextEdit));



/***/ }),

/***/ "./src/abstract-factory/flat-ui-factory.ts":
/*!*************************************************!*\
  !*** ./src/abstract-factory/flat-ui-factory.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlatUiFactory: () => (/* binding */ FlatUiFactory)
/* harmony export */ });
/* harmony import */ var _ui_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-factory */ "./src/abstract-factory/ui-factory.ts");
/* harmony import */ var _flat_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flat-button */ "./src/abstract-factory/flat-button.ts");
/* harmony import */ var _flat_check_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flat-check-box */ "./src/abstract-factory/flat-check-box.ts");
/* harmony import */ var _flat_text_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flat-text-edit */ "./src/abstract-factory/flat-text-edit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FlatUiFactory = /** @class */ (function (_super) {
    __extends(FlatUiFactory, _super);
    function FlatUiFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlatUiFactory.prototype.createButton = function (dom, caption) {
        return new _flat_button__WEBPACK_IMPORTED_MODULE_1__.FlatButton(dom, caption);
    };
    FlatUiFactory.prototype.createCheckBox = function (dom, label, checked) {
        return new _flat_check_box__WEBPACK_IMPORTED_MODULE_2__.FlatCheckbox(dom, label, checked);
    };
    FlatUiFactory.prototype.createTextEdit = function (dom, text) {
        return new _flat_text_edit__WEBPACK_IMPORTED_MODULE_3__.FlatTextEdit(dom, text);
    };
    return FlatUiFactory;
}(_ui_factory__WEBPACK_IMPORTED_MODULE_0__.UiFactory));



/***/ }),

/***/ "./src/abstract-factory/text-edit.ts":
/*!*******************************************!*\
  !*** ./src/abstract-factory/text-edit.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextEdit: () => (/* binding */ TextEdit)
/* harmony export */ });
var TextEdit = /** @class */ (function () {
    function TextEdit(dom, text) {
        this.dom = dom;
        this.text = text;
    }
    return TextEdit;
}());



/***/ }),

/***/ "./src/abstract-factory/ui-factory.ts":
/*!********************************************!*\
  !*** ./src/abstract-factory/ui-factory.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiFactory: () => (/* binding */ UiFactory)
/* harmony export */ });
var UiFactory = /** @class */ (function () {
    function UiFactory() {
    }
    return UiFactory;
}());



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/abstract-factory/index.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flat_ui_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flat-ui-factory */ "./src/abstract-factory/flat-ui-factory.ts");
/* harmony import */ var _3d_ui_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3d-ui-factory */ "./src/abstract-factory/3d-ui-factory.ts");


console.log("Abstract Factory");
var factory;
var flatMode = false;
factory = flatMode ? new _flat_ui_factory__WEBPACK_IMPORTED_MODULE_0__.FlatUiFactory() : new _3d_ui_factory__WEBPACK_IMPORTED_MODULE_1__.ThreeDUiFactory();
var domButton = document.querySelector(".button");
var domCheckbox = document.querySelector(".checkbox");
var domTextEdit = document.querySelector(".textedit");
factory.createButton(domButton, "Button");
factory.createCheckBox(domCheckbox, "Checkbox", true);
factory.createTextEdit(domTextEdit, "Design Pattern");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5LzNkLWJ1dHRvbi50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5LzNkLWNoZWNrLWJveC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5LzNkLXRleHQtZWRpdC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5LzNkLXVpLWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9idXR0b24udHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9jaGVjay1ib3gudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9mbGF0LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5L2ZsYXQtY2hlY2stYm94LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvZmxhdC10ZXh0LWVkaXQudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9mbGF0LXVpLWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS90ZXh0LWVkaXQudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS91aS1mYWN0b3J5LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcblxuZXhwb3J0IGNsYXNzIFRocmVlREJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246IHN0cmluZykge1xuICAgIHN1cGVyKGRvbSwgY2FwdGlvbik7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgJHt0aGlzLmNhcHRpb259XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDxkaXY+PC9kaXY+YDtcblxuICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZUQtYnV0dG9uXCIpO1xuICB9XG59IiwiaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwiLi9jaGVjay1ib3hcIjtcblxuZXhwb3J0IGNsYXNzIFRocmVlRENoZWNrYm94IGV4dGVuZHMgQ2hlY2tib3gge1xuICBjb25zdHJ1Y3Rvcihkb206IEhUTUxFbGVtZW50LCBsYWJlbDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgc3VwZXIoZG9tLCBsYWJlbCwgY2hlY2tlZCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8bGFiZWw+Q2hlY2tCb3hcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHt0aGlzLmNoZWNrZWQgPyBcImNoZWNrZWRcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9sYWJlbD5gO1xuXG4gICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChcInRocmVlRC1jaGVja2JveFwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGV4dEVkaXQgfSBmcm9tIFwiLi90ZXh0LWVkaXRcIjtcblxuZXhwb3J0IGNsYXNzIFRocmVlRFRleHRFZGl0IGV4dGVuZHMgVGV4dEVkaXQge1xuICAgIGNvbnN0cnVjdG9yKGRvbSA6IEhUTUxFbGVtZW50LCB0ZXh0IDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGRvbSwgdGV4dCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9XCIke3RoaXMudGV4dH1cIj5gO1xuICAgICAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKFwidGhyZWVELWlucHV0XCIpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBVaUZhY3RvcnkgfSBmcm9tIFwiLi91aS1mYWN0b3J5XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcbmltcG9ydCB7IFRleHRFZGl0IH0gZnJvbSBcIi4vdGV4dC1lZGl0XCI7XG5pbXBvcnQgeyBUaHJlZURCdXR0b24gfSBmcm9tIFwiLi8zZC1idXR0b25cIjtcbmltcG9ydCB7IFRocmVlRENoZWNrYm94IH0gZnJvbSBcIi4vM2QtY2hlY2stYm94XCI7XG5pbXBvcnQgeyBUaHJlZURUZXh0RWRpdCB9IGZyb20gXCIuLzNkLXRleHQtZWRpdFwiO1xuXG5leHBvcnQgY2xhc3MgVGhyZWVEVWlGYWN0b3J5IGV4dGVuZHMgVWlGYWN0b3J5IHtcbiAgY3JlYXRlQnV0dG9uKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246IHN0cmluZyk6IEJ1dHRvbiB7XG4gICAgcmV0dXJuIG5ldyBUaHJlZURCdXR0b24oZG9tLCBjYXB0aW9uKTtcbiAgfVxuXG4gIGNyZWF0ZUNoZWNrQm94KGRvbTogSFRNTEVsZW1lbnQsIGxhYmVsOiBzdHJpbmcsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gbmV3IFRocmVlRENoZWNrYm94KGRvbSwgbGFiZWwsIGNoZWNrZWQpO1xuICB9XG5cbiAgY3JlYXRlVGV4dEVkaXQoZG9tOiBIVE1MRWxlbWVudCwgdGV4dDogc3RyaW5nKTogVGV4dEVkaXQge1xuICAgIHJldHVybiBuZXcgVGhyZWVEVGV4dEVkaXQoZG9tLCB0ZXh0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJ1dHRvbiB7XG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZG9tOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgY2FwdGlvbjogc3RyaW5nXG4gICkge31cblxuICBhYnN0cmFjdCByZW5kZXIoKTogdm9pZDtcbn1cbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGVja2JveCB7XG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZG9tOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgbGFiZWw6IHN0cmluZyxcbiAgICBwcm90ZWN0ZWQgY2hlY2tlZDogYm9vbGVhblxuICApIHt9XG5cbiAgICBhYnN0cmFjdCByZW5kZXIoKTogdm9pZDtcbn1cbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvblwiO1xuXG5leHBvcnQgY2xhc3MgRmxhdEJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246IHN0cmluZykge1xuICAgIHN1cGVyKGRvbSwgY2FwdGlvbik7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lclRleHQgPSB0aGlzLmNhcHRpb247XG4gICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChcImZsYXQtYnV0dG9uXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCIuL2NoZWNrLWJveFwiO1xuXG5leHBvcnQgY2xhc3MgRmxhdENoZWNrYm94IGV4dGVuZHMgQ2hlY2tib3gge1xuICBjb25zdHJ1Y3Rvcihkb206IEhUTUxFbGVtZW50LCBsYWJlbDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgc3VwZXIoZG9tLCBsYWJlbCwgY2hlY2tlZCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmxhYmVsfVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke3RoaXMuY2hlY2tlZCA/IFwiY2hlY2tlZFwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5gO1xuICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoXCJmbGF0LWNoZWNrYm94XCIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUZXh0RWRpdCB9IGZyb20gXCIuL3RleHQtZWRpdFwiO1xuXG5leHBvcnQgY2xhc3MgRmxhdFRleHRFZGl0IGV4dGVuZHMgVGV4dEVkaXQge1xuICBjb25zdHJ1Y3Rvcihkb206IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcpIHtcbiAgICBzdXBlcihkb20sIHRleHQpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5kb20uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPVwiJHt0aGlzLnRleHR9XCI+YDtcbiAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKFwiZmxhdC1pbnB1dFwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVWlGYWN0b3J5IH0gZnJvbSBcIi4vdWktZmFjdG9yeVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XG5pbXBvcnQgeyBUZXh0RWRpdCB9IGZyb20gXCIuL3RleHQtZWRpdFwiO1xuaW1wb3J0IHsgRmxhdEJ1dHRvbiB9IGZyb20gXCIuL2ZsYXQtYnV0dG9uXCI7XG5pbXBvcnQgeyBGbGF0Q2hlY2tib3ggfSBmcm9tIFwiLi9mbGF0LWNoZWNrLWJveFwiO1xuaW1wb3J0IHsgRmxhdFRleHRFZGl0IH0gZnJvbSBcIi4vZmxhdC10ZXh0LWVkaXRcIjtcblxuZXhwb3J0IGNsYXNzIEZsYXRVaUZhY3RvcnkgZXh0ZW5kcyBVaUZhY3Rvcnkge1xuICBjcmVhdGVCdXR0b24oZG9tOiBIVE1MRWxlbWVudCwgY2FwdGlvbjogc3RyaW5nKTogQnV0dG9uIHtcbiAgICByZXR1cm4gbmV3IEZsYXRCdXR0b24oZG9tLCBjYXB0aW9uKTtcbiAgfVxuXG4gIGNyZWF0ZUNoZWNrQm94KGRvbTogSFRNTEVsZW1lbnQsIGxhYmVsOiBzdHJpbmcsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gbmV3IEZsYXRDaGVja2JveChkb20sIGxhYmVsLCBjaGVja2VkKTtcbiAgfVxuXG4gIGNyZWF0ZVRleHRFZGl0KGRvbTogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZyk6IFRleHRFZGl0IHtcbiAgICByZXR1cm4gbmV3IEZsYXRUZXh0RWRpdChkb20sIHRleHQpO1xuICB9XG59XG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgVGV4dEVkaXQge1xuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIGRvbTogSFRNTEVsZW1lbnQsIHByb3RlY3RlZCB0ZXh0OiBzdHJpbmcpIHt9XG5cbiAgYWJzdHJhY3QgcmVuZGVyKCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcbmltcG9ydCB7IFRleHRFZGl0IH0gZnJvbSBcIi4vdGV4dC1lZGl0XCI7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCIuL2NoZWNrLWJveFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVWlGYWN0b3J5IHtcbiAgYWJzdHJhY3QgY3JlYXRlQ2hlY2tCb3goXG4gICAgZG9tOiBIVE1MRWxlbWVudCxcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIGNoZWNrZWQ6IGJvb2xlYW5cbiAgKTogQ2hlY2tib3g7XG5cbiAgYWJzdHJhY3QgY3JlYXRlQnV0dG9uKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246IHN0cmluZyk6IEJ1dHRvbjtcblxuICBhYnN0cmFjdCBjcmVhdGVUZXh0RWRpdChkb206IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcpOiBUZXh0RWRpdDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVWlGYWN0b3J5IH0gZnJvbSBcIi4vdWktZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmxhdFVpRmFjdG9yeSB9IGZyb20gXCIuL2ZsYXQtdWktZmFjdG9yeVwiO1xuaW1wb3J0IHsgVGhyZWVEVWlGYWN0b3J5IH0gZnJvbSBcIi4vM2QtdWktZmFjdG9yeVwiO1xuXG5jb25zb2xlLmxvZyhcIkFic3RyYWN0IEZhY3RvcnlcIik7XG5cbmxldCBmYWN0b3J5IDogVWlGYWN0b3J5O1xuXG5jb25zdCBmbGF0TW9kZSA9IGZhbHNlO1xuXG5mYWN0b3J5ID0gZmxhdE1vZGUgPyBuZXcgRmxhdFVpRmFjdG9yeSgpIDogbmV3IFRocmVlRFVpRmFjdG9yeSgpO1xuXG5jb25zdCBkb21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvblwiKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGRvbUNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVja2JveFwiKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGRvbVRleHRFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0ZWRpdFwiKSBhcyBIVE1MRWxlbWVudDtcblxuZmFjdG9yeS5jcmVhdGVCdXR0b24oZG9tQnV0dG9uLCBcIkJ1dHRvblwiKTtcbmZhY3RvcnkuY3JlYXRlQ2hlY2tCb3goZG9tQ2hlY2tib3gsIFwiQ2hlY2tib3hcIiwgdHJ1ZSk7XG5mYWN0b3J5LmNyZWF0ZVRleHRFZGl0KGRvbVRleHRFZGl0LCBcIkRlc2lnbiBQYXR0ZXJuXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==