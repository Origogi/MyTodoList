/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template/article.ts":
/*!*********************************!*\
  !*** ./src/template/article.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Article = /** @class */ (function () {
    function Article(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    return Article;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);


/***/ }),

/***/ "./src/template/display-article-template.ts":
/*!**************************************************!*\
  !*** ./src/template/display-article-template.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DisplayArticleTemplate = /** @class */ (function () {
    function DisplayArticleTemplate(article) {
        var _this = this;
        this.article = article;
        // 재정의 불가능
        this.displayHtml = function () {
            return "\n            <div class=\"article\">\n                ".concat(_this.titleHtml(), "\n                ").concat(_this.contentHtml(), "\n                ").concat(_this.footerHtml(), "\n            </div>\n        ");
        };
    }
    return DisplayArticleTemplate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayArticleTemplate);


/***/ }),

/***/ "./src/template/editable-display-article.ts":
/*!**************************************************!*\
  !*** ./src/template/editable-display-article.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_article_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-article-template */ "./src/template/display-article-template.ts");
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

var EditableDisplayArticle = /** @class */ (function (_super) {
    __extends(EditableDisplayArticle, _super);
    function EditableDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    EditableDisplayArticle.prototype.titleHtml = function () {
        return "<div><span>\uC81C\uBAA9</span><input value=\"".concat(this.article.title, "\"></div>");
    };
    EditableDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.content.map(function (item) { return "".concat(item, "\n"); });
        return "<span>\uB0B4\uC6A9</span><br/><textarea cols=\"50\" rows=\"5\">".concat(items.join(""), "</textarea>");
    };
    EditableDisplayArticle.prototype.footerHtml = function () {
        return "<h3>".concat(this.article.footer, "</h3>");
    };
    return EditableDisplayArticle;
}(_display_article_template__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableDisplayArticle);


/***/ }),

/***/ "./src/template/simple-display-article.ts":
/*!************************************************!*\
  !*** ./src/template/simple-display-article.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_article_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-article-template */ "./src/template/display-article-template.ts");
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

var SimpleDisplayArticle = /** @class */ (function (_super) {
    __extends(SimpleDisplayArticle, _super);
    function SimpleDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    SimpleDisplayArticle.prototype.titleHtml = function () {
        return "<h1>".concat(this.article.title, "</h1>");
    };
    SimpleDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.content.map(function (content) { return "<li>".concat(content, "</li>"); }).join("");
        return "<ul>".concat(items, "</ul>");
    };
    SimpleDisplayArticle.prototype.footerHtml = function () {
        return "<h3>".concat(this.article.footer, "</h3>");
    };
    return SimpleDisplayArticle;
}(_display_article_template__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDisplayArticle);


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
  !*** ./src/template/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article */ "./src/template/article.ts");
/* harmony import */ var _simple_display_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-display-article */ "./src/template/simple-display-article.ts");
/* harmony import */ var _editable_display_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editable-display-article */ "./src/template/editable-display-article.ts");
var _a;



console.log("Template Pattern!!");
var article = new _article__WEBPACK_IMPORTED_MODULE_0__["default"]("Design Pattern", [
    "Template Method Pattern",
    "Strategy Pattern",
    "Observer Pattern",
    "Factory Method Pattern",
], "Gof Design Pattern");
var display = new _simple_display_article__WEBPACK_IMPORTED_MODULE_1__["default"](article);
var element = document.querySelector(".content");
if (element) {
    element.innerHTML = display.displayHtml();
}
(_a = document.querySelector(".edit-mode")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    if (e.target.checked) {
        display = new _editable_display_article__WEBPACK_IMPORTED_MODULE_2__["default"](article);
    }
    else {
        display = new _simple_display_article__WEBPACK_IMPORTED_MODULE_1__["default"](article);
    }
    if (element) {
        element.innerHTML = display.displayHtml();
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxHQUFHLElBQUksZ0RBQU8sQ0FDekIsZ0JBQWdCLEVBQ2hCO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsd0JBQXdCO0NBQ3pCLEVBQ0Qsb0JBQW9CLENBQ3JCLENBQUM7QUFFRixJQUFJLE9BQU8sR0FBMkIsSUFBSSwrREFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUV4RSxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5ELElBQUksT0FBTyxFQUFFO0lBQ1gsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7Q0FDM0M7QUFFRCxjQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQywwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDO0lBQ2hFLElBQXVCLENBQUMsQ0FBQyxNQUFPLENBQUMsT0FBTyxFQUFFO1FBQ3hDLE9BQU8sR0FBRyxJQUFJLGlFQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQy9DO1NBQU07UUFDTCxPQUFPLEdBQUcsSUFBSSwrREFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM3QztJQUVELElBQUksT0FBTyxFQUFFO1FBQ1gsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDM0M7QUFDSCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3RlbXBsYXRlL2FydGljbGUudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvdGVtcGxhdGUvZGlzcGxheS1hcnRpY2xlLXRlbXBsYXRlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3RlbXBsYXRlL2VkaXRhYmxlLWRpc3BsYXktYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy90ZW1wbGF0ZS9zaW1wbGUtZGlzcGxheS1hcnRpY2xlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvdGVtcGxhdGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aWNsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlYWRvbmx5IHRpdGxlOiBzdHJpbmcsXG4gICAgcmVhZG9ubHkgY29udGVudDogc3RyaW5nW10sXG4gICAgcmVhZG9ubHkgZm9vdGVyOiBzdHJpbmdcbiAgKSB7fVxufVxuIiwiaW1wb3J0IEFydGljbGUgZnJvbSBcIi4vYXJ0aWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIHtcbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcnRpY2xlOiBBcnRpY2xlKSB7fVxuXG4gIC8vIOyerOygleydmCDrtojqsIDriqVcbiAgcHVibGljIHJlYWRvbmx5IGRpc3BsYXlIdG1sID0gKCkgPT4ge1xuICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZVwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy50aXRsZUh0bWwoKX1cbiAgICAgICAgICAgICAgICAke3RoaXMuY29udGVudEh0bWwoKX1cbiAgICAgICAgICAgICAgICAke3RoaXMuZm9vdGVySHRtbCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gIH07XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHRpdGxlSHRtbCgpOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNvbnRlbnRIdG1sKCk6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZm9vdGVySHRtbCgpOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgRGlzcGxheUFydGljbGVUZW1wbGF0ZSBmcm9tIFwiLi9kaXNwbGF5LWFydGljbGUtdGVtcGxhdGVcIjtcbmltcG9ydCBBcnRpY2xlIGZyb20gXCIuL2FydGljbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSBleHRlbmRzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xuICBjb25zdHJ1Y3RvcihhcnRpY2xlOiBBcnRpY2xlKSB7XG4gICAgc3VwZXIoYXJ0aWNsZSk7XG4gIH1cblxuICB0aXRsZUh0bWwoKSB7XG4gICAgcmV0dXJuIGA8ZGl2PjxzcGFuPuygnOuqqTwvc3Bhbj48aW5wdXQgdmFsdWU9XCIke3RoaXMuYXJ0aWNsZS50aXRsZX1cIj48L2Rpdj5gO1xuICB9XG5cbiAgY29udGVudEh0bWwoKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmFydGljbGUuY29udGVudC5tYXAoKGl0ZW0pID0+IGAke2l0ZW19XFxuYCk7XG4gICAgcmV0dXJuIGA8c3Bhbj7rgrTsmqk8L3NwYW4+PGJyLz48dGV4dGFyZWEgY29scz1cIjUwXCIgcm93cz1cIjVcIj4ke2l0ZW1zLmpvaW4oXG4gICAgICBcIlwiXG4gICAgKX08L3RleHRhcmVhPmA7XG4gIH1cblxuICBmb290ZXJIdG1sKCkge1xuICAgIHJldHVybiBgPGgzPiR7dGhpcy5hcnRpY2xlLmZvb3Rlcn08L2gzPmA7XG4gIH1cbn1cbiIsImltcG9ydCBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIGZyb20gXCIuL2Rpc3BsYXktYXJ0aWNsZS10ZW1wbGF0ZVwiO1xuaW1wb3J0IEFydGljbGUgZnJvbSBcIi4vYXJ0aWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVEaXNwbGF5QXJ0aWNsZSBleHRlbmRzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKGFydGljbGUgOiBBcnRpY2xlKSB7XG4gICAgICAgIHN1cGVyKGFydGljbGUpO1xuICAgIH1cblxuXG4gICAgdGl0bGVIdG1sKCkge1xuICAgICAgICByZXR1cm4gYDxoMT4ke3RoaXMuYXJ0aWNsZS50aXRsZX08L2gxPmA7XG4gICAgfVxuICAgIGNvbnRlbnRIdG1sKCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuYXJ0aWNsZS5jb250ZW50Lm1hcCgoY29udGVudCkgPT4gYDxsaT4ke2NvbnRlbnR9PC9saT5gKS5qb2luKFwiXCIpO1xuICAgICAgICByZXR1cm4gYDx1bD4ke2l0ZW1zfTwvdWw+YDtcbiAgICB9XG4gICAgZm9vdGVySHRtbCgpIHtcbiAgICAgICAgcmV0dXJuIGA8aDM+JHt0aGlzLmFydGljbGUuZm9vdGVyfTwvaDM+YDtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9hcnRpY2xlXCI7XG5pbXBvcnQgU2ltcGxlRGlzcGxheUFydGljbGUgZnJvbSBcIi4vc2ltcGxlLWRpc3BsYXktYXJ0aWNsZVwiO1xuaW1wb3J0IERpc3BsYXlBcnRpY2xlVGVtcGxhdGUgZnJvbSBcIi4vZGlzcGxheS1hcnRpY2xlLXRlbXBsYXRlXCI7XG5pbXBvcnQgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSBmcm9tIFwiLi9lZGl0YWJsZS1kaXNwbGF5LWFydGljbGVcIjtcblxuY29uc29sZS5sb2coXCJUZW1wbGF0ZSBQYXR0ZXJuISFcIik7XG5cbmNvbnN0IGFydGljbGUgPSBuZXcgQXJ0aWNsZShcbiAgXCJEZXNpZ24gUGF0dGVyblwiLFxuICBbXG4gICAgXCJUZW1wbGF0ZSBNZXRob2QgUGF0dGVyblwiLFxuICAgIFwiU3RyYXRlZ3kgUGF0dGVyblwiLFxuICAgIFwiT2JzZXJ2ZXIgUGF0dGVyblwiLFxuICAgIFwiRmFjdG9yeSBNZXRob2QgUGF0dGVyblwiLFxuICBdLFxuICBcIkdvZiBEZXNpZ24gUGF0dGVyblwiXG4pO1xuXG5sZXQgZGlzcGxheTogRGlzcGxheUFydGljbGVUZW1wbGF0ZSA9IG5ldyBTaW1wbGVEaXNwbGF5QXJ0aWNsZShhcnRpY2xlKTtcblxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuaWYgKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBkaXNwbGF5LmRpc3BsYXlIdG1sKCk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1tb2RlXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKCg8SFRNTElucHV0RWxlbWVudD5lLnRhcmdldCkuY2hlY2tlZCkge1xuICAgIGRpc3BsYXkgPSBuZXcgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZShhcnRpY2xlKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5ID0gbmV3IFNpbXBsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGRpc3BsYXkuZGlzcGxheUh0bWwoKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=