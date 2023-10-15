/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/visitor/average-visitor.ts":
/*!****************************************!*\
  !*** ./src/visitor/average-visitor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AverageVisitor: () => (/* binding */ AverageVisitor)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/visitor/item.ts");

var AverageVisitor = /** @class */ (function () {
    function AverageVisitor() {
        this.sum = 0;
        this.count = 0;
    }
    AverageVisitor.prototype.visit = function (unit) {
        if (unit instanceof _item__WEBPACK_IMPORTED_MODULE_0__.Item) {
            this.sum += unit.getValue();
            this.count++;
        }
        else {
            unit.accept(this);
        }
    };
    AverageVisitor.prototype.getValue = function () {
        return this.sum / this.count;
    };
    return AverageVisitor;
}());



/***/ }),

/***/ "./src/visitor/item-list.ts":
/*!**********************************!*\
  !*** ./src/visitor/item-list.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemList: () => (/* binding */ ItemList)
/* harmony export */ });
var ItemList = /** @class */ (function () {
    function ItemList() {
        this.list = new Array();
    }
    ItemList.prototype.add = function (unit) {
        this.list.push(unit);
    };
    ItemList.prototype.accept = function (visitor) {
        this.list.forEach(function (unit) { return unit.accept(visitor); });
    };
    return ItemList;
}());



/***/ }),

/***/ "./src/visitor/item.ts":
/*!*****************************!*\
  !*** ./src/visitor/item.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item: () => (/* binding */ Item)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item(value) {
        this.value = value;
    }
    Item.prototype.accept = function (visitor) {
        visitor.visit(this);
    };
    Item.prototype.getValue = function () {
        return this.value;
    };
    return Item;
}());



/***/ }),

/***/ "./src/visitor/sum-visitor.ts":
/*!************************************!*\
  !*** ./src/visitor/sum-visitor.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SumVisitor: () => (/* binding */ SumVisitor)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/visitor/item.ts");

var SumVisitor = /** @class */ (function () {
    function SumVisitor() {
        this.sum = 0;
    }
    SumVisitor.prototype.visit = function (unit) {
        if (unit instanceof _item__WEBPACK_IMPORTED_MODULE_0__.Item) {
            this.sum += unit.getValue();
        }
        else {
            unit.accept(this);
        }
    };
    SumVisitor.prototype.getSum = function () {
        return this.sum;
    };
    return SumVisitor;
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
  !*** ./src/visitor/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-list */ "./src/visitor/item-list.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/visitor/item.ts");
/* harmony import */ var _sum_visitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sum-visitor */ "./src/visitor/sum-visitor.ts");
/* harmony import */ var _average_visitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./average-visitor */ "./src/visitor/average-visitor.ts");




console.log("visitor pattern");
var list1 = new _item_list__WEBPACK_IMPORTED_MODULE_0__.ItemList();
list1.add(new _item__WEBPACK_IMPORTED_MODULE_1__.Item(100));
list1.add(new _item__WEBPACK_IMPORTED_MODULE_1__.Item(200));
list1.add(new _item__WEBPACK_IMPORTED_MODULE_1__.Item(300));
var list2 = new _item_list__WEBPACK_IMPORTED_MODULE_0__.ItemList();
list2.add(new _item__WEBPACK_IMPORTED_MODULE_1__.Item(400));
list2.add(new _item__WEBPACK_IMPORTED_MODULE_1__.Item(500));
list1.add(list2);
var list3 = new _item_list__WEBPACK_IMPORTED_MODULE_0__.ItemList();
list3.add(new _item__WEBPACK_IMPORTED_MODULE_1__.Item(600));
list2.add(list3);
var sum = new _sum_visitor__WEBPACK_IMPORTED_MODULE_2__.SumVisitor();
list1.accept(sum);
console.log(sum.getSum());
var avg = new _average_visitor__WEBPACK_IMPORTED_MODULE_3__.AverageVisitor();
list1.accept(avg);
console.log(avg.getValue());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSx1Q0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFekIsSUFBTSxLQUFLLEdBQUcsSUFBSSxnREFBUSxFQUFFLENBQUM7QUFDN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLHVDQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksdUNBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFakIsSUFBTSxLQUFLLEdBQUcsSUFBSSxnREFBUSxFQUFFLENBQUM7QUFDN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLHVDQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRWpCLElBQU0sR0FBRyxHQUFHLElBQUksb0RBQVUsRUFBRSxDQUFDO0FBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUUxQixJQUFNLEdBQUcsR0FBRyxJQUFJLDREQUFjLEVBQUUsQ0FBQztBQUNqQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy92aXNpdG9yL2F2ZXJhZ2UtdmlzaXRvci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy92aXNpdG9yL2l0ZW0tbGlzdC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy92aXNpdG9yL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvdmlzaXRvci9zdW0tdmlzaXRvci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3Zpc2l0b3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlzaXRvciB9IGZyb20gXCIuL3Zpc2l0b3JcIjtcbmltcG9ydCB7IFVuaXQgfSBmcm9tIFwiLi91bml0XCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5leHBvcnQgY2xhc3MgQXZlcmFnZVZpc2l0b3IgaW1wbGVtZW50cyBWaXNpdG9yIHtcbiAgcHJpdmF0ZSBzdW0gPSAwO1xuICBwcml2YXRlIGNvdW50ID0gMDtcblxuICB2aXNpdCh1bml0OiBVbml0KTogdm9pZCB7XG4gICAgaWYgKHVuaXQgaW5zdGFuY2VvZiBJdGVtKSB7XG4gICAgICB0aGlzLnN1bSArPSB1bml0LmdldFZhbHVlKCk7XG4gICAgICB0aGlzLmNvdW50Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXQuYWNjZXB0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnN1bSAvIHRoaXMuY291bnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFVuaXQgfSBmcm9tIFwiLi91bml0XCI7XG5pbXBvcnQgeyBWaXNpdG9yIH0gZnJvbSBcIi4vdmlzaXRvclwiO1xuXG5leHBvcnQgY2xhc3MgSXRlbUxpc3QgaW1wbGVtZW50cyBVbml0IHtcbiAgcHJpdmF0ZSBsaXN0ID0gbmV3IEFycmF5PFVuaXQ+KCk7XG5cbiAgYWRkKHVuaXQ6IFVuaXQpIHtcbiAgICB0aGlzLmxpc3QucHVzaCh1bml0KTtcbiAgfVxuXG4gIGFjY2VwdCh2aXNpdG9yOiBWaXNpdG9yKTogdm9pZCB7XG4gICAgdGhpcy5saXN0LmZvckVhY2goKHVuaXQpID0+IHVuaXQuYWNjZXB0KHZpc2l0b3IpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVW5pdCB9IGZyb20gXCIuL3VuaXRcIjtcbmltcG9ydCB7IFZpc2l0b3IgfSBmcm9tIFwiLi92aXNpdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBJdGVtIGltcGxlbWVudHMgVW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsdWU6IG51bWJlcikge31cblxuICBhY2NlcHQodmlzaXRvcjogVmlzaXRvcik6IHZvaWQge1xuICAgICAgdmlzaXRvci52aXNpdCh0aGlzKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBVbml0IH0gZnJvbSBcIi4vdW5pdFwiO1xuaW1wb3J0IHsgVmlzaXRvciB9IGZyb20gXCIuL3Zpc2l0b3JcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBTdW1WaXNpdG9yIGltcGxlbWVudHMgVmlzaXRvciB7XG4gIHByaXZhdGUgc3VtID0gMDtcblxuICB2aXNpdCh1bml0OiBVbml0KSB7XG4gICAgaWYgKHVuaXQgaW5zdGFuY2VvZiBJdGVtKSB7XG4gICAgICB0aGlzLnN1bSArPSB1bml0LmdldFZhbHVlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXQuYWNjZXB0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldFN1bSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdW07XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgSXRlbUxpc3QgfSBmcm9tIFwiLi9pdGVtLWxpc3RcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBTdW1WaXNpdG9yIH0gZnJvbSBcIi4vc3VtLXZpc2l0b3JcIjtcbmltcG9ydCB7IEF2ZXJhZ2VWaXNpdG9yIH0gZnJvbSBcIi4vYXZlcmFnZS12aXNpdG9yXCI7XG5cbmNvbnNvbGUubG9nKFwidmlzaXRvciBwYXR0ZXJuXCIpO1xuXG5jb25zdCBsaXN0MSA9IG5ldyBJdGVtTGlzdCgpO1xuXG5saXN0MS5hZGQobmV3IEl0ZW0oMTAwKSk7XG5saXN0MS5hZGQobmV3IEl0ZW0oMjAwKSk7XG5saXN0MS5hZGQobmV3IEl0ZW0oMzAwKSk7XG5cbmNvbnN0IGxpc3QyID0gbmV3IEl0ZW1MaXN0KCk7XG5saXN0Mi5hZGQobmV3IEl0ZW0oNDAwKSk7XG5saXN0Mi5hZGQobmV3IEl0ZW0oNTAwKSk7XG5saXN0MS5hZGQobGlzdDIpO1xuXG5jb25zdCBsaXN0MyA9IG5ldyBJdGVtTGlzdCgpO1xubGlzdDMuYWRkKG5ldyBJdGVtKDYwMCkpO1xubGlzdDIuYWRkKGxpc3QzKTtcblxuY29uc3Qgc3VtID0gbmV3IFN1bVZpc2l0b3IoKTtcbmxpc3QxLmFjY2VwdChzdW0pO1xuXG5jb25zb2xlLmxvZyhzdW0uZ2V0U3VtKCkpO1xuXG5jb25zdCBhdmcgPSBuZXcgQXZlcmFnZVZpc2l0b3IoKTtcbmxpc3QxLmFjY2VwdChhdmcpO1xuXG5jb25zb2xlLmxvZyhhdmcuZ2V0VmFsdWUoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9