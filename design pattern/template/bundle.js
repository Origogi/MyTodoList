/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/strategy/gauss-sum-strategy.ts":
/*!********************************************!*\
  !*** ./src/strategy/gauss-sum-strategy.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GaussSumStrategy: () => (/* binding */ GaussSumStrategy)
/* harmony export */ });
var GaussSumStrategy = /** @class */ (function () {
    function GaussSumStrategy() {
    }
    GaussSumStrategy.prototype.get = function (n) {
        return (n * (n + 1)) / 2;
    };
    return GaussSumStrategy;
}());



/***/ }),

/***/ "./src/strategy/loop-sum-strategy.ts":
/*!*******************************************!*\
  !*** ./src/strategy/loop-sum-strategy.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoopSumStrategy: () => (/* binding */ LoopSumStrategy)
/* harmony export */ });
var LoopSumStrategy = /** @class */ (function () {
    function LoopSumStrategy() {
    }
    LoopSumStrategy.prototype.get = function (n) {
        var sum = 0;
        for (var i = 0; i <= n; i++) {
            sum += i;
        }
        return sum;
    };
    return LoopSumStrategy;
}());



/***/ }),

/***/ "./src/strategy/sum-printer.ts":
/*!*************************************!*\
  !*** ./src/strategy/sum-printer.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SumPrinter: () => (/* binding */ SumPrinter)
/* harmony export */ });
var SumPrinter = /** @class */ (function () {
    function SumPrinter() {
    }
    SumPrinter.prototype.print = function (n, strategy, domOutput) {
        var value = strategy.get(n);
        domOutput.innerHTML = "The sum of 1 to ".concat(n, " is ").concat(value);
    };
    return SumPrinter;
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
  !*** ./src/strategy/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loop_sum_strategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loop-sum-strategy */ "./src/strategy/loop-sum-strategy.ts");
/* harmony import */ var _sum_printer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sum-printer */ "./src/strategy/sum-printer.ts");
/* harmony import */ var _gauss_sum_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gauss-sum-strategy */ "./src/strategy/gauss-sum-strategy.ts");



console.log('Strategy Pattern!!');
var printer = new _sum_printer__WEBPACK_IMPORTED_MODULE_1__.SumPrinter();
var dom1 = document.createElement('h1');
document.body.appendChild(dom1);
var dom2 = document.createElement('h1');
document.body.appendChild(dom2);
printer.print(100, new _loop_sum_strategy__WEBPACK_IMPORTED_MODULE_0__.LoopSumStrategy(), dom1);
printer.print(200, new _gauss_sum_strategy__WEBPACK_IMPORTED_MODULE_2__.GaussSumStrategy(), dom2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQUlBLENBQUM7SUFIQyw4QkFBRyxHQUFILFVBQUksQ0FBUztRQUNYLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEO0lBQUE7SUFRQSxDQUFDO0lBUEMsNkJBQUcsR0FBSCxVQUFJLENBQVU7UUFDWixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JEO0lBQUE7SUFNQSxDQUFDO0lBTEcsMEJBQUssR0FBTCxVQUFNLENBQVUsRUFBRSxRQUFzQixFQUFFLFNBQW1CO1FBQ3pELElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUIsU0FBUyxDQUFDLFNBQVMsR0FBRywwQkFBbUIsQ0FBQyxpQkFBTyxLQUFLLENBQUUsQ0FBQztJQUM3RCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ1JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zRDtBQUNYO0FBQ2E7QUFFeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2xDLElBQU0sT0FBTyxHQUFHLElBQUksb0RBQVUsRUFBRSxDQUFDO0FBRWpDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVoQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLCtEQUFlLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLGlFQUFnQixFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9zdHJhdGVneS9nYXVzcy1zdW0tc3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvc3RyYXRlZ3kvbG9vcC1zdW0tc3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvc3RyYXRlZ3kvc3VtLXByaW50ZXIudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9zdHJhdGVneS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdW1TdHJhdGVneSB9IGZyb20gXCIuL3N1bS1zdHJhdGVneVwiO1xuXG5leHBvcnQgY2xhc3MgR2F1c3NTdW1TdHJhdGVneSBpbXBsZW1lbnRzIFN1bVN0cmF0ZWd5IHtcbiAgZ2V0KG46IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIChuICogKG4gKyAxKSkgLyAyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdW1TdHJhdGVneSB9IGZyb20gXCIuL3N1bS1zdHJhdGVneVwiO1xuXG5leHBvcnQgY2xhc3MgTG9vcFN1bVN0cmF0ZWd5IGltcGxlbWVudHMgU3VtU3RyYXRlZ3kge1xuICBnZXQobiA6IG51bWJlcikgOiBudW1iZXIge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykge1xuICAgICAgc3VtICs9IGk7XG4gICAgfVxuICAgIHJldHVybiBzdW07XG4gIH1cbn1cbiIsImltcG9ydCB7IFN1bVN0cmF0ZWd5IH0gZnJvbSBcIi4vc3VtLXN0cmF0ZWd5XCI7XG5cbmV4cG9ydCBjbGFzcyBTdW1QcmludGVyIHtcbiAgICBwcmludChuIDogbnVtYmVyLCBzdHJhdGVneSA6IFN1bVN0cmF0ZWd5LCBkb21PdXRwdXQgOiBFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3RyYXRlZ3kuZ2V0KG4pO1xuXG4gICAgICAgIGRvbU91dHB1dC5pbm5lckhUTUwgPSBgVGhlIHN1bSBvZiAxIHRvICR7bn0gaXMgJHt2YWx1ZX1gO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IExvb3BTdW1TdHJhdGVneSB9IGZyb20gXCIuL2xvb3Atc3VtLXN0cmF0ZWd5XCI7XG5pbXBvcnQgeyBTdW1QcmludGVyIH0gZnJvbSBcIi4vc3VtLXByaW50ZXJcIjtcbmltcG9ydCB7IEdhdXNzU3VtU3RyYXRlZ3kgfSBmcm9tIFwiLi9nYXVzcy1zdW0tc3RyYXRlZ3lcIjtcblxuY29uc29sZS5sb2coJ1N0cmF0ZWd5IFBhdHRlcm4hIScpO1xuY29uc3QgcHJpbnRlciA9IG5ldyBTdW1QcmludGVyKCk7XG5cbmNvbnN0IGRvbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb20xKTtcblxuY29uc3QgZG9tMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbTIpO1xuXG5wcmludGVyLnByaW50KDEwMCwgbmV3IExvb3BTdW1TdHJhdGVneSgpLCBkb20xKTtcbnByaW50ZXIucHJpbnQoMjAwLCBuZXcgR2F1c3NTdW1TdHJhdGVneSgpLCBkb20yKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=