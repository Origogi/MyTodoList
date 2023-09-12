/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bridge/caption-display.ts":
/*!***************************************!*\
  !*** ./src/bridge/caption-display.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaptionDisplay: () => (/* binding */ CaptionDisplay)
/* harmony export */ });
var CaptionDisplay = /** @class */ (function () {
    function CaptionDisplay() {
    }
    CaptionDisplay.prototype.author = function (draft) {
        console.log("Author: ".concat(draft.getAuthor()));
    };
    CaptionDisplay.prototype.content = function (draft) {
        console.log("Content: ");
        draft.getContent().forEach(function (content) {
            console.log("    ".concat(content));
        });
    };
    CaptionDisplay.prototype.title = function (draft) {
        console.log("Title: ".concat(draft.getTitle()));
    };
    return CaptionDisplay;
}());



/***/ }),

/***/ "./src/bridge/characters-count.ts":
/*!****************************************!*\
  !*** ./src/bridge/characters-count.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CharactersCount: () => (/* binding */ CharactersCount)
/* harmony export */ });
/* harmony import */ var _draft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draft */ "./src/bridge/draft.ts");
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

var CharactersCount = /** @class */ (function (_super) {
    __extends(CharactersCount, _super);
    function CharactersCount(title, author, content) {
        return _super.call(this, title, author, content) || this;
    }
    CharactersCount.prototype.getCharactersCount = function () {
        var count = 0;
        count += this.getTitle().length;
        count += this.getAuthor().length;
        this.getContent().forEach(function (content) {
            count += content.length;
        });
        return count;
    };
    return CharactersCount;
}(_draft__WEBPACK_IMPORTED_MODULE_0__.Draft));



/***/ }),

/***/ "./src/bridge/draft.ts":
/*!*****************************!*\
  !*** ./src/bridge/draft.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Draft: () => (/* binding */ Draft)
/* harmony export */ });
var Draft = /** @class */ (function () {
    function Draft(title, author, content) {
        this.title = title;
        this.author = author;
        this.content = content;
    }
    Draft.prototype.getTitle = function () {
        return this.title;
    };
    Draft.prototype.getAuthor = function () {
        return this.author;
    };
    Draft.prototype.getContent = function () {
        return this.content;
    };
    Draft.prototype.print = function (display) {
        display.title(this);
        display.author(this);
        display.content(this);
    };
    return Draft;
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
/*!*****************************!*\
  !*** ./src/bridge/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _caption_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caption-display */ "./src/bridge/caption-display.ts");
/* harmony import */ var _characters_count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characters-count */ "./src/bridge/characters-count.ts");


console.log("Bridge Pattern!!");
var title = "Design Pattern";
var author = "Jun";
var content = ["Bridge Pattern", "Adapter Pattern", "Composite Pattern"];
// const draft = new Draft(title, author, content);
var draft = new _characters_count__WEBPACK_IMPORTED_MODULE_1__.CharactersCount(title, author, content);
var display = new _caption_display__WEBPACK_IMPORTED_MODULE_0__.CaptionDisplay();
draft.print(display);
console.log("total characters : ".concat(draft.getCharactersCount()));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7QUFDL0IsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLElBQU0sT0FBTyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUUzRSxtREFBbUQ7QUFDbkQsSUFBTSxLQUFLLEdBQUcsSUFBSSw4REFBZSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFMUQsSUFBTSxPQUFPLEdBQUcsSUFBSSw0REFBYyxFQUFFLENBQUM7QUFDckMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUFzQixLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9icmlkZ2UvY2FwdGlvbi1kaXNwbGF5LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2JyaWRnZS9jaGFyYWN0ZXJzLWNvdW50LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2JyaWRnZS9kcmFmdC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2JyaWRnZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgRHJhZnQgfSBmcm9tIFwiLi9kcmFmdFwiO1xuXG5leHBvcnQgY2xhc3MgQ2FwdGlvbkRpc3BsYXkgaW1wbGVtZW50cyBEaXNwbGF5IHtcbiAgYXV0aG9yKGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGBBdXRob3I6ICR7ZHJhZnQuZ2V0QXV0aG9yKCl9YCk7XG4gIH1cblxuICBjb250ZW50KGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGBDb250ZW50OiBgKTtcbiAgICBkcmFmdC5nZXRDb250ZW50KCkuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYCAgICAke2NvbnRlbnR9YCk7XG4gICAgfSk7XG4gIH1cblxuICB0aXRsZShkcmFmdDogRHJhZnQpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhgVGl0bGU6ICR7ZHJhZnQuZ2V0VGl0bGUoKX1gKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRHJhZnQgfSBmcm9tIFwiLi9kcmFmdFwiO1xuXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyc0NvdW50IGV4dGVuZHMgRHJhZnQge1xuICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29udGVudDogc3RyaW5nW10pIHtcbiAgICBzdXBlcih0aXRsZSwgYXV0aG9yLCBjb250ZW50KTtcbiAgfVxuXG4gIGdldENoYXJhY3RlcnNDb3VudCgpOiBudW1iZXIge1xuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBjb3VudCArPSB0aGlzLmdldFRpdGxlKCkubGVuZ3RoO1xuICAgIGNvdW50ICs9IHRoaXMuZ2V0QXV0aG9yKCkubGVuZ3RoO1xuICAgIHRoaXMuZ2V0Q29udGVudCgpLmZvckVhY2goKGNvbnRlbnQpID0+IHtcbiAgICAgIGNvdW50ICs9IGNvbnRlbnQubGVuZ3RoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5leHBvcnQgY2xhc3MgRHJhZnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBhdXRob3I6IHN0cmluZyxcbiAgICBwcml2YXRlIGNvbnRlbnQ6IHN0cmluZ1tdXG4gICkge31cblxuICBnZXRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgZ2V0QXV0aG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIHByaW50KGRpc3BsYXk6IERpc3BsYXkpIHtcbiAgICBkaXNwbGF5LnRpdGxlKHRoaXMpO1xuICAgIGRpc3BsYXkuYXV0aG9yKHRoaXMpO1xuICAgIGRpc3BsYXkuY29udGVudCh0aGlzKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBEcmFmdCB9IGZyb20gXCIuL2RyYWZ0XCI7XG5pbXBvcnQgeyBTaW1wbGVEaXNwbGF5IH0gZnJvbSBcIi4vc2ltcGxlLWRpc3BsYXlcIjtcbmltcG9ydCB7IENhcHRpb25EaXNwbGF5IH0gZnJvbSBcIi4vY2FwdGlvbi1kaXNwbGF5XCI7XG5pbXBvcnQgeyBDaGFyYWN0ZXJzQ291bnQgfSBmcm9tIFwiLi9jaGFyYWN0ZXJzLWNvdW50XCI7XG5cbmNvbnNvbGUubG9nKFwiQnJpZGdlIFBhdHRlcm4hIVwiKTtcblxuY29uc3QgdGl0bGUgPSBcIkRlc2lnbiBQYXR0ZXJuXCI7XG5jb25zdCBhdXRob3IgPSBcIkp1blwiO1xuY29uc3QgY29udGVudCA9IFtcIkJyaWRnZSBQYXR0ZXJuXCIsIFwiQWRhcHRlciBQYXR0ZXJuXCIsIFwiQ29tcG9zaXRlIFBhdHRlcm5cIl07XG5cbi8vIGNvbnN0IGRyYWZ0ID0gbmV3IERyYWZ0KHRpdGxlLCBhdXRob3IsIGNvbnRlbnQpO1xuY29uc3QgZHJhZnQgPSBuZXcgQ2hhcmFjdGVyc0NvdW50KHRpdGxlLCBhdXRob3IsIGNvbnRlbnQpO1xuXG5jb25zdCBkaXNwbGF5ID0gbmV3IENhcHRpb25EaXNwbGF5KCk7XG5kcmFmdC5wcmludChkaXNwbGF5KTtcblxuY29uc29sZS5sb2coYHRvdGFsIGNoYXJhY3RlcnMgOiAke2RyYWZ0LmdldENoYXJhY3RlcnNDb3VudCgpfWApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==