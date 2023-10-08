/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/builder-2/builder.ts":
/*!**********************************!*\
  !*** ./src/builder-2/builder.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Builder: () => (/* binding */ Builder)
/* harmony export */ });
var Builder = /** @class */ (function () {
    function Builder(data) {
        this.data = data;
    }
    return Builder;
}());



/***/ }),

/***/ "./src/builder-2/data.ts":
/*!*******************************!*\
  !*** ./src/builder-2/data.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Data: () => (/* binding */ Data)
/* harmony export */ });
var Data = /** @class */ (function () {
    function Data(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(Data.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (v) {
            this._age = v;
        },
        enumerable: false,
        configurable: true
    });
    return Data;
}());



/***/ }),

/***/ "./src/builder-2/director.ts":
/*!***********************************!*\
  !*** ./src/builder-2/director.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Director: () => (/* binding */ Director)
/* harmony export */ });
var Director = /** @class */ (function () {
    function Director(builder) {
        this.builder = builder;
    }
    Director.prototype.build = function () {
        return "".concat(this.builder.head()).concat(this.builder.body()).concat(this.builder.foot());
    };
    return Director;
}());



/***/ }),

/***/ "./src/builder-2/json-builder.ts":
/*!***************************************!*\
  !*** ./src/builder-2/json-builder.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonBuilder: () => (/* binding */ JsonBuilder)
/* harmony export */ });
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ "./src/builder-2/builder.ts");
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

var JsonBuilder = /** @class */ (function (_super) {
    __extends(JsonBuilder, _super);
    function JsonBuilder(data) {
        return _super.call(this, data) || this;
    }
    JsonBuilder.prototype.head = function () {
        return "{";
    };
    JsonBuilder.prototype.body = function () {
        return "name : ".concat(this.data.name, ", age : ").concat(this.data.age);
    };
    JsonBuilder.prototype.foot = function () {
        return "}";
    };
    return JsonBuilder;
}(_builder__WEBPACK_IMPORTED_MODULE_0__.Builder));



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
  !*** ./src/builder-2/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/builder-2/data.ts");
/* harmony import */ var _director__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./director */ "./src/builder-2/director.ts");
/* harmony import */ var _json_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json-builder */ "./src/builder-2/json-builder.ts");



console.log("Builder-2");
var data = new _data__WEBPACK_IMPORTED_MODULE_0__.Data("John", 20);
// const builder = new PlainTextBuilder(data);
// const builder = new XmlBuilder(data);
var builder = new _json_builder__WEBPACK_IMPORTED_MODULE_2__.JsonBuilder(data);
var director = new _director__WEBPACK_IMPORTED_MODULE_1__.Director(builder);
console.log(director.build());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFDSSxpQkFBZ0MsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDMUMsQ0FBQztJQU1MLGNBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkQ7SUFDRSxjQUFvQixLQUFhLEVBQVUsSUFBWTtRQUFuQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFHLENBQUM7SUFFM0Qsc0JBQUksc0JBQUk7YUFRUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO2FBVkQsVUFBUyxDQUFTO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUJBQUc7YUFRUDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDO2FBVkQsVUFBUSxDQUFTO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFTSCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDtJQUNFLGtCQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQUcsQ0FBQztJQUV4Qyx3QkFBSyxHQUFMO1FBQ0UsT0FBTyxVQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsU0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFFLENBQUM7SUFDOUUsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JtQztBQUdwQztJQUFpQywrQkFBTztJQUN0QyxxQkFBWSxJQUFVO2VBQ3BCLGtCQUFNLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCwwQkFBSSxHQUFKO1FBQ0UsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsMEJBQUksR0FBSjtRQUNFLE9BQU8saUJBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVELDBCQUFJLEdBQUo7UUFDRSxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQ0FoQmdDLDZDQUFPLEdBZ0J2Qzs7Ozs7Ozs7VUNuQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBRVE7QUFFTztBQUU3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXpCLElBQU0sSUFBSSxHQUFHLElBQUksdUNBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFbEMsOENBQThDO0FBQzlDLHdDQUF3QztBQUN4QyxJQUFNLE9BQU8sR0FBRyxJQUFJLHNEQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEMsSUFBTSxRQUFRLEdBQUcsSUFBSSwrQ0FBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9idWlsZGVyLTIvYnVpbGRlci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9idWlsZGVyLTIvZGF0YS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9idWlsZGVyLTIvZGlyZWN0b3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYnVpbGRlci0yL2pzb24tYnVpbGRlci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2J1aWxkZXItMi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhIH0gZnJvbSBcIi4vZGF0YVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQnVpbGRlciB7XG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkYXRhOiBEYXRhKSB7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgaGVhZCgpIDogc3RyaW5nO1xuICAgIGFic3RyYWN0IGJvZHkoKSA6IHN0cmluZztcbiAgICBhYnN0cmFjdCBmb290KCkgOiBzdHJpbmc7XG5cbn0iLCJleHBvcnQgY2xhc3MgRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hbWU6IHN0cmluZywgcHJpdmF0ZSBfYWdlOiBudW1iZXIpIHt9XG5cbiAgc2V0IG5hbWUodjogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHY7XG4gIH1cblxuICBzZXQgYWdlKHY6IG51bWJlcikge1xuICAgIHRoaXMuX2FnZSA9IHY7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIGdldCBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FnZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gXCIuL2J1aWxkZXJcIjtcblxuZXhwb3J0IGNsYXNzIERpcmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBidWlsZGVyOiBCdWlsZGVyKSB7fVxuXG4gIGJ1aWxkKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmJ1aWxkZXIuaGVhZCgpfSR7dGhpcy5idWlsZGVyLmJvZHkoKX0ke3RoaXMuYnVpbGRlci5mb290KCl9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gXCIuL2J1aWxkZXJcIjtcbmltcG9ydCB7IERhdGEgfSBmcm9tIFwiLi9kYXRhXCI7XG5cbmV4cG9ydCBjbGFzcyBKc29uQnVpbGRlciBleHRlbmRzIEJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcihkYXRhOiBEYXRhKSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gIH1cblxuICBoZWFkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwie1wiO1xuICB9XG5cbiAgYm9keSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgbmFtZSA6ICR7dGhpcy5kYXRhLm5hbWV9LCBhZ2UgOiAke3RoaXMuZGF0YS5hZ2V9YDtcbiAgfVxuXG4gIGZvb3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJ9XCI7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IFBsYWluVGV4dEJ1aWxkZXIgfSBmcm9tIFwiLi9wbGFpbi10ZXh0LWJ1aWxkZXJcIjtcbmltcG9ydCB7IERpcmVjdG9yIH0gZnJvbSBcIi4vZGlyZWN0b3JcIjtcbmltcG9ydCB7IFhtbEJ1aWxkZXIgfSBmcm9tIFwiLi94bWwtYnVpbGRlclwiO1xuaW1wb3J0IHsgSnNvbkJ1aWxkZXIgfSBmcm9tIFwiLi9qc29uLWJ1aWxkZXJcIjtcblxuY29uc29sZS5sb2coXCJCdWlsZGVyLTJcIik7XG5cbmNvbnN0IGRhdGEgPSBuZXcgRGF0YShcIkpvaG5cIiwgMjApO1xuXG4vLyBjb25zdCBidWlsZGVyID0gbmV3IFBsYWluVGV4dEJ1aWxkZXIoZGF0YSk7XG4vLyBjb25zdCBidWlsZGVyID0gbmV3IFhtbEJ1aWxkZXIoZGF0YSk7XG5jb25zdCBidWlsZGVyID0gbmV3IEpzb25CdWlsZGVyKGRhdGEpO1xuY29uc3QgZGlyZWN0b3IgPSBuZXcgRGlyZWN0b3IoYnVpbGRlcik7XG5cbmNvbnNvbGUubG9nKGRpcmVjdG9yLmJ1aWxkKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9