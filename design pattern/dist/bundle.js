/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/iterator/array-iterator.ts":
/*!****************************************!*\
  !*** ./src/iterator/array-iterator.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayIterator: () => (/* binding */ ArrayIterator)
/* harmony export */ });
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(item) {
        this.item = item;
        this._index = -1;
    }
    ArrayIterator.prototype.current = function () {
        return this.item[this._index];
    };
    ArrayIterator.prototype.next = function () {
        this._index++;
        return this._index < this.item.length;
    };
    return ArrayIterator;
}());



/***/ }),

/***/ "./src/iterator/array.ts":
/*!*******************************!*\
  !*** ./src/iterator/array.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Array: () => (/* binding */ Array)
/* harmony export */ });
/* harmony import */ var _array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array-iterator */ "./src/iterator/array-iterator.ts");

var Array = /** @class */ (function () {
    function Array(items) {
        this.items = items;
    }
    Array.prototype.getItem = function (index) {
        return this.items[index];
    };
    Object.defineProperty(Array.prototype, "count", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    Array.prototype.iterator = function () {
        return new _array_iterator__WEBPACK_IMPORTED_MODULE_0__.ArrayIterator(this.items);
    };
    return Array;
}());



/***/ }),

/***/ "./src/iterator/item.ts":
/*!******************************!*\
  !*** ./src/iterator/item.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item: () => (/* binding */ Item)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item(name, cost) {
        this._name = name;
        this._cost = cost;
    }
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
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
/*!*******************************!*\
  !*** ./src/iterator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/iterator/item.ts");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./src/iterator/array.ts");


console.log('Iterator Pattern');
var items = [
    new _item__WEBPACK_IMPORTED_MODULE_0__.Item('빼빼로', 400),
    new _item__WEBPACK_IMPORTED_MODULE_0__.Item('새우깡', 100),
    new _item__WEBPACK_IMPORTED_MODULE_0__.Item('쿠쿠다스', 400),
    new _item__WEBPACK_IMPORTED_MODULE_0__.Item('포카칩', 500),
];
var array = new _array__WEBPACK_IMPORTED_MODULE_1__.Array(items);
var iterator = array.iterator();
while (iterator.next()) {
    var item = iterator.current();
    var domItem = document.createElement('div');
    domItem.innerText = "".concat(item.name, " : ").concat(item.cost);
    document.body.appendChild(domItem);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQyxJQUFJLENBQUUsQ0FBQztJQUNsRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUNwQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2l0ZXJhdG9yL2FycmF5LWl0ZXJhdG9yLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2l0ZXJhdG9yL2FycmF5LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2l0ZXJhdG9yL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9pdGVyYXRvci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVyYXRvciB9IGZyb20gJy4vaXRlcmF0b3InO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcblxuXG5leHBvcnQgY2xhc3MgQXJyYXlJdGVyYXRvciBpbXBsZW1lbnRzIEl0ZXJhdG9yPEl0ZW0+IHtcblxuICAgIHByaXZhdGUgX2luZGV4IDogbnVtYmVyID0gLTE7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtIDogSXRlbVtdKSB7XG4gICAgfVxuXG4gICAgY3VycmVudCgpOiBJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVt0aGlzLl9pbmRleF07XG4gICAgfVxuXG4gICAgbmV4dCgpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5faW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4IDwgdGhpcy5pdGVtLmxlbmd0aDtcbiAgICB9XG5cblxuXG5cbn0iLCJpbXBvcnQgeyBBZ2dyZWdhdG9yIH0gZnJvbSBcIi4vYWdncmVnYXRvclwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEFycmF5SXRlcmF0b3IgfSBmcm9tIFwiLi9hcnJheS1pdGVyYXRvclwiO1xuaW1wb3J0IHsgSXRlcmF0b3IgfSBmcm9tIFwiLi9pdGVyYXRvclwiO1xuXG5leHBvcnQgY2xhc3MgQXJyYXkgaW1wbGVtZW50cyBBZ2dyZWdhdG9yPEl0ZW0+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtczogSXRlbVtdKSB7fVxuXG4gIHB1YmxpYyBnZXRJdGVtKGluZGV4OiBudW1iZXIpOiBJdGVtIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgaXRlcmF0b3IoKTogSXRlcmF0b3I8SXRlbT4ge1xuICAgIHJldHVybiBuZXcgQXJyYXlJdGVyYXRvcih0aGlzLml0ZW1zKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEl0ZW0ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX25hbWUgOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfY29zdCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUgOiBzdHJpbmcsIGNvc3QgOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2Nvc3QgPSBjb3N0O1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBnZXQgY29zdCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvc3Q7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgeyBBcnJheSB9IGZyb20gJy4vYXJyYXknO1xuXG5jb25zb2xlLmxvZygnSXRlcmF0b3IgUGF0dGVybicpO1xuXG5jb25zdCBpdGVtcyA9IFtcbiAgbmV3IEl0ZW0oJ+u5vOu5vOuhnCcsIDQwMCksXG4gIG5ldyBJdGVtKCfsg4jsmrDquaEnLCAxMDApLFxuICBuZXcgSXRlbSgn7L+g7L+g64uk7IqkJywgNDAwKSxcbiAgbmV3IEl0ZW0oJ+2PrOy5tOy5qScsIDUwMCksXG5dO1xuXG5jb25zdCBhcnJheSA9IG5ldyBBcnJheShpdGVtcyk7XG5cbmNvbnN0IGl0ZXJhdG9yID0gYXJyYXkuaXRlcmF0b3IoKTtcblxud2hpbGUgKGl0ZXJhdG9yLm5leHQoKSkge1xuICBjb25zdCBpdGVtID0gaXRlcmF0b3IuY3VycmVudCgpO1xuXG4gIGNvbnN0IGRvbUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9tSXRlbS5pbm5lclRleHQgPSBgJHtpdGVtLm5hbWV9IDogJHtpdGVtLmNvc3R9YDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21JdGVtKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==