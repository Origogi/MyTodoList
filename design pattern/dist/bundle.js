/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/adapter/animal.ts":
/*!*******************************!*\
  !*** ./src/adapter/animal.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animal);


/***/ }),

/***/ "./src/adapter/cat.ts":
/*!****************************!*\
  !*** ./src/adapter/cat.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cat: () => (/* binding */ Cat)
/* harmony export */ });
/* harmony import */ var _animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animal */ "./src/adapter/animal.ts");
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

var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.sound = function () {
        console.log("".concat(this.name, " meows"));
    };
    return Cat;
}(_animal__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/adapter/dog.ts":
/*!****************************!*\
  !*** ./src/adapter/dog.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dog: () => (/* binding */ Dog)
/* harmony export */ });
/* harmony import */ var _animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animal */ "./src/adapter/animal.ts");
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

var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.sound = function () {
        console.log("".concat(this.name, " barks"));
    };
    return Dog;
}(_animal__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/adapter/tiger-adapter.ts":
/*!**************************************!*\
  !*** ./src/adapter/tiger-adapter.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TigerAdapter: () => (/* binding */ TigerAdapter)
/* harmony export */ });
/* harmony import */ var _animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animal */ "./src/adapter/animal.ts");
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

var TigerAdapter = /** @class */ (function (_super) {
    __extends(TigerAdapter, _super);
    function TigerAdapter(tiger) {
        var _this = _super.call(this, tiger.getName()) || this;
        _this.tiger = tiger;
        return _this;
    }
    TigerAdapter.prototype.sound = function () {
        this.tiger.roar();
    };
    return TigerAdapter;
}(_animal__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/adapter/tiger.ts":
/*!******************************!*\
  !*** ./src/adapter/tiger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tiger: () => (/* binding */ Tiger)
/* harmony export */ });
var Tiger = /** @class */ (function () {
    function Tiger(name) {
        this.name = name;
    }
    Tiger.prototype.roar = function () {
        console.log("".concat(this.name, " roars"));
    };
    Tiger.prototype.getName = function () {
        return this.name;
    };
    return Tiger;
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
/*!******************************!*\
  !*** ./src/adapter/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dog */ "./src/adapter/dog.ts");
/* harmony import */ var _cat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat */ "./src/adapter/cat.ts");
/* harmony import */ var _tiger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiger */ "./src/adapter/tiger.ts");
/* harmony import */ var _tiger_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiger-adapter */ "./src/adapter/tiger-adapter.ts");




console.log("Adapter Pattern!!");
var list = Array();
list.push(new _dog__WEBPACK_IMPORTED_MODULE_0__.Dog("Shiba"));
list.push(new _dog__WEBPACK_IMPORTED_MODULE_0__.Dog("Siberian Husky"));
list.push(new _cat__WEBPACK_IMPORTED_MODULE_1__.Cat("Persian"));
list.push(new _tiger_adapter__WEBPACK_IMPORTED_MODULE_3__.TigerAdapter(new _tiger__WEBPACK_IMPORTED_MODULE_2__.Tiger("Tiger")));
list.forEach(function (animal) {
    animal.sound();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFDRSxnQkFBZ0MsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFBRyxDQUFDO0lBR2xELGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0o2QjtBQUU5QjtJQUF5Qix1QkFBTTtJQUM3QixhQUFZLElBQVk7ZUFDdEIsa0JBQU0sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELG1CQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUcsSUFBSSxDQUFDLElBQUksV0FBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDLENBUndCLCtDQUFNLEdBUTlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y2QjtBQUU5QjtJQUF5Qix1QkFBTTtJQUM3QixhQUFZLElBQVk7ZUFDdEIsa0JBQU0sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELG1CQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUcsSUFBSSxDQUFDLElBQUksV0FBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDLENBUndCLCtDQUFNLEdBUTlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Q2QjtBQUU5QjtJQUFrQyxnQ0FBTTtJQUN0QyxzQkFBNkIsS0FBWTtRQUF6QyxZQUNFLGtCQUFNLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUN2QjtRQUY0QixXQUFLLEdBQUwsS0FBSyxDQUFPOztJQUV6QyxDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxDQVJpQywrQ0FBTSxHQVF2Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hEO0lBQ0UsZUFBNkIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFBRyxDQUFDO0lBRTdDLG9CQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUcsSUFBSSxDQUFDLElBQUksV0FBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHVCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ1ZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNMNEI7QUFDQTtBQUNJO0FBQ2U7QUFFL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRWpDLElBQU0sSUFBSSxHQUFJLEtBQUssRUFBVSxDQUFDO0FBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxxQ0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLHFDQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxxQ0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLHdEQUFZLENBQUMsSUFBSSx5Q0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtJQUNoQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hZGFwdGVyL2FuaW1hbC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hZGFwdGVyL2NhdC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hZGFwdGVyL2RvZy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hZGFwdGVyL3RpZ2VyLWFkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWRhcHRlci90aWdlci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2FkYXB0ZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQW5pbWFsIHtcbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBuYW1lOiBzdHJpbmcpIHt9XG5cbiAgYWJzdHJhY3Qgc291bmQoKTogdm9pZDtcbn1cbiIsImltcG9ydCBBbmltYWwgZnJvbSBcIi4vYW5pbWFsXCI7XG5cbmV4cG9ydCBjbGFzcyBDYXQgZXh0ZW5kcyBBbmltYWwge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgfVxuXG4gIHNvdW5kKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gbWVvd3NgKTtcbiAgfVxufSIsImltcG9ydCBBbmltYWwgZnJvbSBcIi4vYW5pbWFsXCI7XG5cbmV4cG9ydCBjbGFzcyBEb2cgZXh0ZW5kcyBBbmltYWwge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgfVxuXG4gIHNvdW5kKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gYmFya3NgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVGlnZXIgfSBmcm9tIFwiLi90aWdlclwiO1xuaW1wb3J0IEFuaW1hbCBmcm9tIFwiLi9hbmltYWxcIjtcblxuZXhwb3J0IGNsYXNzIFRpZ2VyQWRhcHRlciBleHRlbmRzIEFuaW1hbCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdGlnZXI6IFRpZ2VyKSB7XG4gICAgc3VwZXIodGlnZXIuZ2V0TmFtZSgpKTtcbiAgfVxuXG4gIHNvdW5kKCkge1xuICAgIHRoaXMudGlnZXIucm9hcigpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGlnZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG5hbWU6IHN0cmluZykge31cblxuICByb2FyKCkge1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gcm9hcnNgKTtcbiAgfVxuXG4gIGdldE5hbWUgKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQW5pbWFsIGZyb20gXCIuL2FuaW1hbFwiO1xuaW1wb3J0IHsgRG9nIH0gZnJvbSBcIi4vZG9nXCI7XG5pbXBvcnQgeyBDYXQgfSBmcm9tIFwiLi9jYXRcIjtcbmltcG9ydCB7IFRpZ2VyIH0gZnJvbSBcIi4vdGlnZXJcIjtcbmltcG9ydCB7IFRpZ2VyQWRhcHRlciB9IGZyb20gXCIuL3RpZ2VyLWFkYXB0ZXJcIjtcblxuY29uc29sZS5sb2coXCJBZGFwdGVyIFBhdHRlcm4hIVwiKTtcblxuY29uc3QgbGlzdCA9ICBBcnJheTxBbmltYWw+KCk7XG5cbmxpc3QucHVzaChuZXcgRG9nKFwiU2hpYmFcIikpO1xubGlzdC5wdXNoKG5ldyBEb2coXCJTaWJlcmlhbiBIdXNreVwiKSk7XG5saXN0LnB1c2gobmV3IENhdChcIlBlcnNpYW5cIikpO1xubGlzdC5wdXNoKG5ldyBUaWdlckFkYXB0ZXIobmV3IFRpZ2VyKFwiVGlnZXJcIikpKTtcblxubGlzdC5mb3JFYWNoKChhbmltYWwpID0+IHtcbiAgICBhbmltYWwuc291bmQoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==