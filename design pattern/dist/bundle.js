/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/decorator/box-decorator.ts":
/*!****************************************!*\
  !*** ./src/decorator/box-decorator.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxDecorator: () => (/* binding */ BoxDecorator)
/* harmony export */ });
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorator */ "./src/decorator/decorator.ts");
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

var BoxDecorator = /** @class */ (function (_super) {
    __extends(BoxDecorator, _super);
    function BoxDecorator(targetItem) {
        return _super.call(this, targetItem) || this;
    }
    BoxDecorator.prototype.getLength = function (index) {
        return this.targetItem.getLength(index) + 2;
    };
    BoxDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount() + 2;
    };
    BoxDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 2;
    };
    BoxDecorator.prototype.getString = function (index) {
        if (index === 0 || index === this.getLinesCount() - 1) {
            return "+".concat("-".repeat(this.targetItem.getMaxLength()), "+");
        }
        else {
            return "<span>|</span>".concat(this.targetItem.getString(index - 1)).concat(" ".repeat(this.getMaxLength() - this.getLength(index - 1)), "<span>|</span>");
        }
    };
    return BoxDecorator;
}(_decorator__WEBPACK_IMPORTED_MODULE_0__.Decorator));



/***/ }),

/***/ "./src/decorator/decorator.ts":
/*!************************************!*\
  !*** ./src/decorator/decorator.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Decorator: () => (/* binding */ Decorator)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/decorator/item.ts");
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

var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator(targetItem) {
        var _this = _super.call(this) || this;
        _this.targetItem = targetItem;
        return _this;
    }
    return Decorator;
}(_item__WEBPACK_IMPORTED_MODULE_0__.Item));



/***/ }),

/***/ "./src/decorator/item.ts":
/*!*******************************!*\
  !*** ./src/decorator/item.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item: () => (/* binding */ Item)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.print = function (dom) {
        var result = [];
        for (var i = 0; i < this.getLinesCount(); i++) {
            result.push(this.getString(i));
        }
        dom.innerHTML = result.join('\n');
    };
    return Item;
}());



/***/ }),

/***/ "./src/decorator/line-number-decorator.ts":
/*!************************************************!*\
  !*** ./src/decorator/line-number-decorator.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineNumberDecorator: () => (/* binding */ LineNumberDecorator)
/* harmony export */ });
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorator */ "./src/decorator/decorator.ts");
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

var LineNumberDecorator = /** @class */ (function (_super) {
    __extends(LineNumberDecorator, _super);
    function LineNumberDecorator(targetItem) {
        return _super.call(this, targetItem) || this;
    }
    LineNumberDecorator.prototype.getLength = function (index) {
        return this.targetItem.getLength(index) + 6;
    };
    LineNumberDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    LineNumberDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 6;
    };
    LineNumberDecorator.prototype.getString = function (index) {
        return "<span>".concat(index
            .toString()
            .padStart(4, "0"), ": </span>").concat(this.targetItem.getString(index));
    };
    return LineNumberDecorator;
}(_decorator__WEBPACK_IMPORTED_MODULE_0__.Decorator));



/***/ }),

/***/ "./src/decorator/side-decorator.ts":
/*!*****************************************!*\
  !*** ./src/decorator/side-decorator.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SideDecorator: () => (/* binding */ SideDecorator)
/* harmony export */ });
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorator */ "./src/decorator/decorator.ts");
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

var SideDecorator = /** @class */ (function (_super) {
    __extends(SideDecorator, _super);
    function SideDecorator(targetItem, ch) {
        var _this = _super.call(this, targetItem) || this;
        _this.ch = ch;
        return _this;
    }
    SideDecorator.prototype.getLength = function (index) {
        return this.targetItem.getLength(index) + this.ch.length * 2;
    };
    SideDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    SideDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + this.ch.length * 2;
    };
    SideDecorator.prototype.getString = function (index) {
        return "<span>".concat(this.ch, "</span>").concat(this.targetItem.getString(index), "<span>").concat(this.ch, "</span>");
    };
    return SideDecorator;
}(_decorator__WEBPACK_IMPORTED_MODULE_0__.Decorator));



/***/ }),

/***/ "./src/decorator/strings.ts":
/*!**********************************!*\
  !*** ./src/decorator/strings.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strings: () => (/* binding */ Strings)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/decorator/item.ts");
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

var Strings = /** @class */ (function (_super) {
    __extends(Strings, _super);
    function Strings() {
        var _this = _super.call(this) || this;
        _this.data = new Array();
        return _this;
    }
    Strings.prototype.add = function (str) {
        this.data.push(str);
    };
    Strings.prototype.getLength = function (index) {
        return this.data[index].length;
    };
    Strings.prototype.getLinesCount = function () {
        return this.data.length;
    };
    Strings.prototype.getMaxLength = function () {
        return this.data.reduce(function (a, b) { return (a.length > b.length ? a : b); }).length;
    };
    Strings.prototype.getString = function (index) {
        return this.data[index];
    };
    return Strings;
}(_item__WEBPACK_IMPORTED_MODULE_0__.Item));



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
/*!********************************!*\
  !*** ./src/decorator/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strings */ "./src/decorator/strings.ts");
/* harmony import */ var _side_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-decorator */ "./src/decorator/side-decorator.ts");
/* harmony import */ var _box_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box-decorator */ "./src/decorator/box-decorator.ts");
/* harmony import */ var _line_number_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-number-decorator */ "./src/decorator/line-number-decorator.ts");




console.log("Decorator Pattern!!");
var strs = new _strings__WEBPACK_IMPORTED_MODULE_0__.Strings();
strs.add("Design Patterns");
strs.add("Elements of Reusable Object-Oriented Software");
strs.add("Software patterns have revolutionized the way we think about how software is designed, built, and documented.");
strs.add("This book is the first volume of a two-volume work describing a proven object-oriented design process.");
var d1 = new _side_decorator__WEBPACK_IMPORTED_MODULE_1__.SideDecorator(strs, "*");
var d2 = new _box_decorator__WEBPACK_IMPORTED_MODULE_2__.BoxDecorator(strs);
var d3 = new _line_number_decorator__WEBPACK_IMPORTED_MODULE_3__.LineNumberDecorator(strs);
var domPre = document.querySelector("pre");
if (domPre) {
    // strs.print(domPre);
    // d1.print(domPre);
    // d2.print(domPre);
    d3.print(domPre);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUd4QztJQUFrQyxnQ0FBUztJQUN6QyxzQkFBWSxVQUFnQjtlQUMxQixrQkFBTSxVQUFVLENBQUM7SUFDbkIsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsbUNBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3JCLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNyRCxPQUFPLFdBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQUcsQ0FBQztTQUMxRDthQUFNO1lBQ0wsT0FBTyx3QkFBaUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxTQUFHLEdBQUcsQ0FBQyxNQUFNLENBQ3ZFLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FDaEQsbUJBQWdCLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLENBMUJpQyxpREFBUyxHQTBCMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0I2QjtBQUU5QjtJQUF3Qyw2QkFBSTtJQUMxQyxtQkFBZ0MsVUFBZ0I7UUFBaEQsWUFDRSxpQkFBTyxTQUNSO1FBRitCLGdCQUFVLEdBQVYsVUFBVSxDQUFNOztJQUVoRCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLENBSnVDLHVDQUFJLEdBSTNDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7SUFBQTtJQWNBLENBQUM7SUFSRyxvQkFBSyxHQUFMLFVBQU0sR0FBaUI7UUFDbkIsSUFBTSxNQUFNLEdBQWMsRUFBRSxDQUFDO1FBRTdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEM7UUFDRCxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J1QztBQUV4QztJQUF5Qyx1Q0FBUztJQUNoRCw2QkFBWSxVQUFnQjtlQUMxQixrQkFBTSxVQUFVLENBQUM7SUFDbkIsQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCwwQ0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsdUNBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsT0FBTyxnQkFBUyxLQUFLO2FBQ2xCLFFBQVEsRUFBRTthQUNWLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLHNCQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7SUFDcEUsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxDQXRCd0MsaURBQVMsR0FzQmpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCdUM7QUFFeEM7SUFBbUMsaUNBQVM7SUFDMUMsdUJBQVksVUFBZ0IsRUFBVSxFQUFVO1FBQWhELFlBQ0ksa0JBQU0sVUFBVSxDQUFDLFNBQ3BCO1FBRnFDLFFBQUUsR0FBRixFQUFFLENBQVE7O0lBRWhELENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3JCLE9BQU8sZ0JBQVMsSUFBSSxDQUFDLEVBQUUsb0JBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLG1CQUMvRCxJQUFJLENBQUMsRUFBRSxZQUNBLENBQUM7SUFDWixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLENBdEJrQyxpREFBUyxHQXNCM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI2QjtBQUU5QjtJQUE2QiwyQkFBSTtJQUcvQjtRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQUpPLFVBQUksR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDOztJQUluQyxDQUFDO0lBRUQscUJBQUcsR0FBSCxVQUFJLEdBQVc7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsMkJBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBRUQsK0JBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUMxRSxDQUFDO0lBRUQsMkJBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxDQTFCNEIsdUNBQUksR0EwQmhDOzs7Ozs7OztVQzVCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ2E7QUFDRjtBQUNlO0FBRTlELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUVuQyxJQUFNLElBQUksR0FBRyxJQUFJLDZDQUFPLEVBQUUsQ0FBQztBQUUzQixJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0FBQzFELElBQUksQ0FBQyxHQUFHLENBQ04sK0dBQStHLENBQ2hILENBQUM7QUFDRixJQUFJLENBQUMsR0FBRyxDQUNOLHdHQUF3RyxDQUN6RyxDQUFDO0FBRUYsSUFBTSxFQUFFLEdBQUcsSUFBSSwwREFBYSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN4QyxJQUFNLEVBQUUsR0FBRyxJQUFJLHdEQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsSUFBTSxFQUFFLEdBQUcsSUFBSSx1RUFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6QyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTdDLElBQUksTUFBTSxFQUFFO0lBQ1Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2RlY29yYXRvci9ib3gtZGVjb3JhdG9yLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2RlY29yYXRvci9kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZGVjb3JhdG9yL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZGVjb3JhdG9yL2xpbmUtbnVtYmVyLWRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9kZWNvcmF0b3Ivc2lkZS1kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZGVjb3JhdG9yL3N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9kZWNvcmF0b3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVjb3JhdG9yIH0gZnJvbSBcIi4vZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5leHBvcnQgY2xhc3MgQm94RGVjb3JhdG9yIGV4dGVuZHMgRGVjb3JhdG9yIHtcbiAgY29uc3RydWN0b3IodGFyZ2V0SXRlbTogSXRlbSkge1xuICAgIHN1cGVyKHRhcmdldEl0ZW0pO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGVuZ3RoKGluZGV4KSArIDI7XG4gIH1cblxuICBnZXRMaW5lc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRMaW5lc0NvdW50KCkgKyAyO1xuICB9XG5cbiAgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRNYXhMZW5ndGgoKSArIDI7XG4gIH1cblxuICBnZXRTdHJpbmcoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSB0aGlzLmdldExpbmVzQ291bnQoKSAtIDEpIHtcbiAgICAgIHJldHVybiBgKyR7XCItXCIucmVwZWF0KHRoaXMudGFyZ2V0SXRlbS5nZXRNYXhMZW5ndGgoKSl9K2A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgPHNwYW4+fDwvc3Bhbj4ke3RoaXMudGFyZ2V0SXRlbS5nZXRTdHJpbmcoaW5kZXggLSAxKX0ke1wiIFwiLnJlcGVhdChcbiAgICAgICAgdGhpcy5nZXRNYXhMZW5ndGgoKSAtIHRoaXMuZ2V0TGVuZ3RoKGluZGV4IC0gMSlcbiAgICAgICl9PHNwYW4+fDwvc3Bhbj5gO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERlY29yYXRvciBleHRlbmRzIEl0ZW0ge1xuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIHRhcmdldEl0ZW06IEl0ZW0pIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgSXRlbSB7XG4gICAgYWJzdHJhY3QgZ2V0TGluZXNDb3VudCgpOiBudW1iZXI7XG4gICAgYWJzdHJhY3QgZ2V0TGVuZ3RoKGluZGV4IDogbnVtYmVyKTogbnVtYmVyO1xuICAgIGFic3RyYWN0IGdldE1heExlbmd0aCgpOiBudW1iZXI7XG4gICAgYWJzdHJhY3QgZ2V0U3RyaW5nKGluZGV4IDogbnVtYmVyKTogc3RyaW5nO1xuXG4gICAgcHJpbnQoZG9tIDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0IDogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0TGluZXNDb3VudCgpOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZ2V0U3RyaW5nKGkpKTtcbiAgICAgICAgfVxuICAgICAgICBkb20uaW5uZXJIVE1MID0gcmVzdWx0LmpvaW4oJ1xcbicpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgRGVjb3JhdG9yIH0gZnJvbSBcIi4vZGVjb3JhdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBMaW5lTnVtYmVyRGVjb3JhdG9yIGV4dGVuZHMgRGVjb3JhdG9yIHtcbiAgY29uc3RydWN0b3IodGFyZ2V0SXRlbTogSXRlbSkge1xuICAgIHN1cGVyKHRhcmdldEl0ZW0pO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKGluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExlbmd0aChpbmRleCkgKyA2O1xuICB9XG5cbiAgZ2V0TGluZXNDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExpbmVzQ291bnQoKTtcbiAgfVxuXG4gIGdldE1heExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldE1heExlbmd0aCgpICsgNjtcbiAgfVxuXG4gIGdldFN0cmluZyhpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGA8c3Bhbj4ke2luZGV4XG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnBhZFN0YXJ0KDQsIFwiMFwiKX06IDwvc3Bhbj4ke3RoaXMudGFyZ2V0SXRlbS5nZXRTdHJpbmcoaW5kZXgpfWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBEZWNvcmF0b3IgfSBmcm9tIFwiLi9kZWNvcmF0b3JcIjtcblxuZXhwb3J0IGNsYXNzIFNpZGVEZWNvcmF0b3IgZXh0ZW5kcyBEZWNvcmF0b3Ige1xuICBjb25zdHJ1Y3Rvcih0YXJnZXRJdGVtOiBJdGVtLCBwcml2YXRlIGNoOiBzdHJpbmcpIHtcbiAgICAgIHN1cGVyKHRhcmdldEl0ZW0pO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGVuZ3RoKGluZGV4KSArIHRoaXMuY2gubGVuZ3RoICogMjtcbiAgfVxuXG4gIGdldExpbmVzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExpbmVzQ291bnQoKTtcbiAgfVxuXG4gIGdldE1heExlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TWF4TGVuZ3RoKCkgKyB0aGlzLmNoLmxlbmd0aCAqIDI7XG4gIH1cblxuICBnZXRTdHJpbmcoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8c3Bhbj4ke3RoaXMuY2h9PC9zcGFuPiR7dGhpcy50YXJnZXRJdGVtLmdldFN0cmluZyhpbmRleCl9PHNwYW4+JHtcbiAgICAgIHRoaXMuY2hcbiAgICB9PC9zcGFuPmA7XG4gIH1cbn1cbiIsImltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdzIGV4dGVuZHMgSXRlbSB7XG4gIHByaXZhdGUgZGF0YSA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGFkZChzdHI6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YS5wdXNoKHN0cik7XG4gIH1cblxuICBnZXRMZW5ndGgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVtpbmRleF0ubGVuZ3RoO1xuICB9XG5cbiAgZ2V0TGluZXNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoO1xuICB9XG5cbiAgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5yZWR1Y2UoKGEsIGIpID0+IChhLmxlbmd0aCA+IGIubGVuZ3RoID8gYSA6IGIpKS5sZW5ndGg7XG4gIH1cblxuICBnZXRTdHJpbmcoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVtpbmRleF07XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgU3RyaW5ncyB9IGZyb20gXCIuL3N0cmluZ3NcIjtcbmltcG9ydCB7IFNpZGVEZWNvcmF0b3IgfSBmcm9tIFwiLi9zaWRlLWRlY29yYXRvclwiO1xuaW1wb3J0IHsgQm94RGVjb3JhdG9yIH0gZnJvbSBcIi4vYm94LWRlY29yYXRvclwiO1xuaW1wb3J0IHsgTGluZU51bWJlckRlY29yYXRvciB9IGZyb20gXCIuL2xpbmUtbnVtYmVyLWRlY29yYXRvclwiO1xuXG5jb25zb2xlLmxvZyhcIkRlY29yYXRvciBQYXR0ZXJuISFcIik7XG5cbmNvbnN0IHN0cnMgPSBuZXcgU3RyaW5ncygpO1xuXG5zdHJzLmFkZChcIkRlc2lnbiBQYXR0ZXJuc1wiKTtcbnN0cnMuYWRkKFwiRWxlbWVudHMgb2YgUmV1c2FibGUgT2JqZWN0LU9yaWVudGVkIFNvZnR3YXJlXCIpO1xuc3Rycy5hZGQoXG4gIFwiU29mdHdhcmUgcGF0dGVybnMgaGF2ZSByZXZvbHV0aW9uaXplZCB0aGUgd2F5IHdlIHRoaW5rIGFib3V0IGhvdyBzb2Z0d2FyZSBpcyBkZXNpZ25lZCwgYnVpbHQsIGFuZCBkb2N1bWVudGVkLlwiXG4pO1xuc3Rycy5hZGQoXG4gIFwiVGhpcyBib29rIGlzIHRoZSBmaXJzdCB2b2x1bWUgb2YgYSB0d28tdm9sdW1lIHdvcmsgZGVzY3JpYmluZyBhIHByb3ZlbiBvYmplY3Qtb3JpZW50ZWQgZGVzaWduIHByb2Nlc3MuXCJcbik7XG5cbmNvbnN0IGQxID0gbmV3IFNpZGVEZWNvcmF0b3Ioc3RycywgXCIqXCIpO1xuY29uc3QgZDIgPSBuZXcgQm94RGVjb3JhdG9yKHN0cnMpO1xuY29uc3QgZDMgPSBuZXcgTGluZU51bWJlckRlY29yYXRvcihzdHJzKTtcblxuY29uc3QgZG9tUHJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInByZVwiKTtcblxuaWYgKGRvbVByZSkge1xuICAvLyBzdHJzLnByaW50KGRvbVByZSk7XG4gIC8vIGQxLnByaW50KGRvbVByZSk7XG4gIC8vIGQyLnByaW50KGRvbVByZSk7XG4gIGQzLnByaW50KGRvbVByZSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=