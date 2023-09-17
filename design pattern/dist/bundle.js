/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/composite/file.ts":
/*!*******************************!*\
  !*** ./src/composite/file.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   File: () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit */ "./src/composite/unit.ts");
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

var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(name, size) {
        var _this = _super.call(this, name) || this;
        _this.size = size;
        _this.size = size;
        return _this;
    }
    File.prototype.getSize = function () {
        return this.size;
    };
    return File;
}(_unit__WEBPACK_IMPORTED_MODULE_0__.Unit));



/***/ }),

/***/ "./src/composite/folder.ts":
/*!*********************************!*\
  !*** ./src/composite/folder.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Folder: () => (/* binding */ Folder)
/* harmony export */ });
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit */ "./src/composite/unit.ts");
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

var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder(name) {
        var _this = _super.call(this, name) || this;
        _this.units = [];
        return _this;
    }
    Folder.prototype.add = function (unit) {
        this.units.push(unit);
    };
    Folder.prototype.getSize = function () {
        return this.units.reduce(function (acc, item) { return item.getSize() + acc; }, 0);
    };
    Folder.prototype.createUnit = function (unit, dom) {
        var domUnit = document.createElement("div");
        domUnit.classList.add("unit");
        domUnit.innerHTML = "<div>\n        <span>".concat(unit.getName(), "</span>\n        <span>").concat(unit.getSize(), "</span>\n        </div>");
        dom.append(domUnit);
        return domUnit;
    };
    Folder.prototype.list = function (dom) {
        var _this = this;
        var domUnit = this.createUnit(this, dom);
        var bFolder = this instanceof Folder;
        if (bFolder) {
            domUnit.classList.add("folder");
            this.units.forEach(function (unit) {
                if (unit instanceof Folder) {
                    unit.list(domUnit);
                }
                else {
                    _this.createUnit(unit, domUnit);
                }
            });
        }
    };
    return Folder;
}(_unit__WEBPACK_IMPORTED_MODULE_0__.Unit));



/***/ }),

/***/ "./src/composite/unit.ts":
/*!*******************************!*\
  !*** ./src/composite/unit.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Unit: () => (/* binding */ Unit)
/* harmony export */ });
var Unit = /** @class */ (function () {
    function Unit(name) {
        this.name = name;
    }
    Unit.prototype.getName = function () {
        return this.name;
    };
    return Unit;
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
/*!********************************!*\
  !*** ./src/composite/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder */ "./src/composite/folder.ts");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file */ "./src/composite/file.ts");


console.log("composite!!");
var root = new _folder__WEBPACK_IMPORTED_MODULE_0__.Folder("root");
root.add(new _file__WEBPACK_IMPORTED_MODULE_1__.File("a.txt", 10));
root.add(new _file__WEBPACK_IMPORTED_MODULE_1__.File("b.txt", 20));
var folder1 = new _folder__WEBPACK_IMPORTED_MODULE_0__.Folder("sub1");
folder1.add(new _file__WEBPACK_IMPORTED_MODULE_1__.File("c.txt", 30));
folder1.add(new _file__WEBPACK_IMPORTED_MODULE_1__.File("d.txt", 40));
var folder2 = new _folder__WEBPACK_IMPORTED_MODULE_0__.Folder("sub2");
folder2.add(new _file__WEBPACK_IMPORTED_MODULE_1__.File("e.txt", 50));
folder2.add(new _file__WEBPACK_IMPORTED_MODULE_1__.File("f.txt", 60));
folder1.add(folder2);
root.add(folder1);
var folder3 = new _folder__WEBPACK_IMPORTED_MODULE_0__.Folder("sub3");
folder3.add(new _file__WEBPACK_IMPORTED_MODULE_1__.File("g.txt", 70));
folder3.add(new _file__WEBPACK_IMPORTED_MODULE_1__.File("h.txt", 80));
root.add(folder3);
var dom = document.querySelector('#list');
if (dom) {
    root.list(dom);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsSUFBSSx1Q0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSx1Q0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRW5DLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbEIsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU1QyxJQUFJLEdBQUcsRUFBRTtJQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9jb21wb3NpdGUvZmlsZS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9jb21wb3NpdGUvZm9sZGVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2NvbXBvc2l0ZS91bml0LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvY29tcG9zaXRlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVuaXQgfSBmcm9tIFwiLi91bml0XCI7XG5cbmV4cG9ydCBjbGFzcyBGaWxlIGV4dGVuZHMgVW5pdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSA6IHN0cmluZywgcHJpdmF0ZSByZWFkb25seSBzaXplIDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIH1cblxuICAgIGdldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XG4gICAgfVxufSIsImltcG9ydCB7IFVuaXQgfSBmcm9tIFwiLi91bml0XCI7XG5cbmV4cG9ydCBjbGFzcyBGb2xkZXIgZXh0ZW5kcyBVbml0IHtcbiAgcHJpdmF0ZSB1bml0czogQXJyYXk8VW5pdD4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgfVxuXG4gIGFkZCh1bml0OiBVbml0KSB7XG4gICAgdGhpcy51bml0cy5wdXNoKHVuaXQpO1xuICB9XG5cbiAgZ2V0U2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnVuaXRzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBpdGVtLmdldFNpemUoKSArIGFjYywgMCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVVuaXQodW5pdDogVW5pdCwgZG9tOiBFbGVtZW50KSB7XG4gICAgY29uc3QgZG9tVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9tVW5pdC5jbGFzc0xpc3QuYWRkKFwidW5pdFwiKTtcblxuICAgIGRvbVVuaXQuaW5uZXJIVE1MID0gYDxkaXY+XG4gICAgICAgIDxzcGFuPiR7dW5pdC5nZXROYW1lKCl9PC9zcGFuPlxuICAgICAgICA8c3Bhbj4ke3VuaXQuZ2V0U2l6ZSgpfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+YDtcblxuICAgIGRvbS5hcHBlbmQoZG9tVW5pdCk7XG4gICAgcmV0dXJuIGRvbVVuaXQ7XG4gIH1cblxuICBsaXN0KGRvbTogRWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tVW5pdCA9IHRoaXMuY3JlYXRlVW5pdCh0aGlzLCBkb20pO1xuXG4gICAgICBjb25zdCBiRm9sZGVyID0gdGhpcyBpbnN0YW5jZW9mIEZvbGRlcjtcblxuICAgICAgaWYgKGJGb2xkZXIpIHtcbiAgICAgICAgICBkb21Vbml0LmNsYXNzTGlzdC5hZGQoXCJmb2xkZXJcIik7XG4gICAgICAgICAgdGhpcy51bml0cy5mb3JFYWNoKCh1bml0KSA9PiB7XG4gICAgICAgICAgICAgaWYgKHVuaXQgaW5zdGFuY2VvZiBGb2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgdW5pdC5saXN0KGRvbVVuaXQpO1xuICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVW5pdCh1bml0LCBkb21Vbml0KTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuXG4gIH1cbn1cbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVbml0IHtcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSBuYW1lIDogc3RyaW5nKSB7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIDogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRTaXplKCkgOiBudW1iZXI7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBGb2xkZXIgfSBmcm9tIFwiLi9mb2xkZXJcIjtcbmltcG9ydCB7IEZpbGUgfSBmcm9tIFwiLi9maWxlXCI7XG5cbmNvbnNvbGUubG9nKFwiY29tcG9zaXRlISFcIik7XG5cbmNvbnN0IHJvb3QgPSBuZXcgRm9sZGVyKFwicm9vdFwiKTtcblxucm9vdC5hZGQobmV3IEZpbGUoXCJhLnR4dFwiLCAxMCkpO1xucm9vdC5hZGQobmV3IEZpbGUoXCJiLnR4dFwiLCAyMCkpO1xuXG5jb25zdCBmb2xkZXIxID0gbmV3IEZvbGRlcihcInN1YjFcIik7XG5mb2xkZXIxLmFkZChuZXcgRmlsZShcImMudHh0XCIsIDMwKSk7XG5mb2xkZXIxLmFkZChuZXcgRmlsZShcImQudHh0XCIsIDQwKSk7XG5cbmNvbnN0IGZvbGRlcjIgPSBuZXcgRm9sZGVyKFwic3ViMlwiKTtcbmZvbGRlcjIuYWRkKG5ldyBGaWxlKFwiZS50eHRcIiwgNTApKTtcbmZvbGRlcjIuYWRkKG5ldyBGaWxlKFwiZi50eHRcIiwgNjApKTtcblxuZm9sZGVyMS5hZGQoZm9sZGVyMik7XG5yb290LmFkZChmb2xkZXIxKTtcblxuXG5jb25zdCBmb2xkZXIzID0gbmV3IEZvbGRlcihcInN1YjNcIik7XG5mb2xkZXIzLmFkZChuZXcgRmlsZShcImcudHh0XCIsIDcwKSk7XG5mb2xkZXIzLmFkZChuZXcgRmlsZShcImgudHh0XCIsIDgwKSk7XG5cbnJvb3QuYWRkKGZvbGRlcjMpO1xuXG5jb25zdCBkb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdCcpO1xuXG5pZiAoZG9tKSB7XG4gIHJvb3QubGlzdChkb20pO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=