/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factorymethod/bow.ts":
/*!**********************************!*\
  !*** ./src/factorymethod/bow.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bow: () => (/* binding */ Bow)
/* harmony export */ });
var Bow = /** @class */ (function () {
    function Bow() {
    }
    Bow.prototype.use = function () {
        return "활을 사용하였다. 적에게 40의 데미지를 주었다.";
    };
    return Bow;
}());



/***/ }),

/***/ "./src/factorymethod/factory.ts":
/*!**************************************!*\
  !*** ./src/factorymethod/factory.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Factory: () => (/* binding */ Factory)
/* harmony export */ });
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.create = function (type) {
        var isCreatable = this.isCreatable(type);
        if (isCreatable) {
            var item = this.createItem(type);
            this.postProcessItem(type);
            return item;
        }
        return null;
    };
    return Factory;
}());



/***/ }),

/***/ "./src/factorymethod/item-factory.ts":
/*!*******************************************!*\
  !*** ./src/factorymethod/item-factory.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemFactory: () => (/* binding */ ItemFactory)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factorymethod/factory.ts");
/* harmony import */ var _shield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shield */ "./src/factorymethod/shield.ts");
/* harmony import */ var _sword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sword */ "./src/factorymethod/sword.ts");
/* harmony import */ var _bow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bow */ "./src/factorymethod/bow.ts");
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




var ItemCounter = /** @class */ (function () {
    function ItemCounter(_maxCount) {
        this._maxCount = _maxCount;
        this.count = 0;
    }
    ItemCounter.prototype.isCreatable = function () {
        return this.count < this._maxCount;
    };
    ItemCounter.prototype.getCount = function () {
        return this.count;
    };
    ItemCounter.prototype.increase = function () {
        if (this.isCreatable()) {
            this.count++;
        }
    };
    return ItemCounter;
}());
var ItemFactory = /** @class */ (function (_super) {
    __extends(ItemFactory, _super);
    function ItemFactory() {
        var _this = _super.call(this) || this;
        _this.repository = new Map();
        _this.repository.set("sword", new ItemCounter(3));
        _this.repository.set("shield", new ItemCounter(5));
        _this.repository.set("bow", new ItemCounter(2));
        return _this;
    }
    ItemFactory.prototype.createItem = function (name) {
        switch (name) {
            case "sword":
                return new _sword__WEBPACK_IMPORTED_MODULE_2__.Sword();
            case "shield":
                return new _shield__WEBPACK_IMPORTED_MODULE_1__.Shield();
            case "bow":
                return new _bow__WEBPACK_IMPORTED_MODULE_3__.Bow();
        }
    };
    ItemFactory.prototype.isCreatable = function (name) {
        var itemCounter = this.repository.get(name);
        return itemCounter.isCreatable();
    };
    ItemFactory.prototype.postProcessItem = function (item) {
        var itemCounter = this.repository.get(item);
        itemCounter.increase();
    };
    return ItemFactory;
}(_factory__WEBPACK_IMPORTED_MODULE_0__.Factory));



/***/ }),

/***/ "./src/factorymethod/shield.ts":
/*!*************************************!*\
  !*** ./src/factorymethod/shield.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Shield: () => (/* binding */ Shield)
/* harmony export */ });
var Shield = /** @class */ (function () {
    function Shield() {
    }
    Shield.prototype.use = function () {
        return '방패를 사용하였다. 적의 공격을 막았다.';
    };
    return Shield;
}());



/***/ }),

/***/ "./src/factorymethod/sword.ts":
/*!************************************!*\
  !*** ./src/factorymethod/sword.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sword: () => (/* binding */ Sword)
/* harmony export */ });
var Sword = /** @class */ (function () {
    function Sword() {
    }
    Sword.prototype.use = function () {
        return '칼을 사용하였다. 적에게 10의 데미지를 주었다.';
    };
    return Sword;
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
/*!************************************!*\
  !*** ./src/factorymethod/index.ts ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-factory */ "./src/factorymethod/item-factory.ts");

console.log("factory method!!");
var factory = new _item_factory__WEBPACK_IMPORTED_MODULE_0__.ItemFactory();
var docOutput = document.querySelector("textarea");
var buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    return button.addEventListener("click", function (event) {
        var itemName = event.target.innerText;
        var item = factory.create(itemName);
        if (item) {
            docOutput.value += "\n".concat(item.use());
        }
        else {
            docOutput.value += "\n\uC544\uC774\uD15C ".concat(itemName, "\uC740(\uB294) \uB354 \uC774\uC0C1 \uC0DD\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
        }
        docOutput.scrollTop = docOutput.scrollHeight;
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsUUFBUSwyRkFBdUIsQ0FBQztTQUM3RDtRQUVELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztJQUMvQyxDQUFDLENBQUM7QUFaRixDQVlFLENBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2ZhY3RvcnltZXRob2QvYm93LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2ZhY3RvcnltZXRob2QvZmFjdG9yeS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9mYWN0b3J5bWV0aG9kL2l0ZW0tZmFjdG9yeS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9mYWN0b3J5bWV0aG9kL3NoaWVsZC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9mYWN0b3J5bWV0aG9kL3N3b3JkLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmFjdG9yeW1ldGhvZC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5leHBvcnQgY2xhc3MgQm93IGltcGxlbWVudHMgSXRlbSB7XG4gICAgdXNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIu2ZnOydhCDsgqzsmqntlZjsmIDri6QuIOyggeyXkOqyjCA0MOydmCDrjbDrr7jsp4Drpbwg7KO87JeI64ukLlwiO1xuICAgIH1cblxufSIsImltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCB0eXBlIEl0ZW1UeXBlID0gXCJzd29yZFwiIHwgXCJzaGllbGRcIiB8IFwiYm93XCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWN0b3J5IHtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUl0ZW0odHlwZTogSXRlbVR5cGUpOiBJdGVtO1xuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpc0NyZWF0YWJsZSh0eXBlOiBJdGVtVHlwZSk6IGJvb2xlYW47XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHBvc3RQcm9jZXNzSXRlbSh0eXBlOiBJdGVtVHlwZSk6IHZvaWQ7XG5cbiAgY3JlYXRlKHR5cGU6IEl0ZW1UeXBlKTogSXRlbSB8IG51bGwge1xuICAgIGNvbnN0IGlzQ3JlYXRhYmxlID0gdGhpcy5pc0NyZWF0YWJsZSh0eXBlKTtcblxuICAgIGlmIChpc0NyZWF0YWJsZSkge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY3JlYXRlSXRlbSh0eXBlKTtcbiAgICAgIHRoaXMucG9zdFByb2Nlc3NJdGVtKHR5cGUpO1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBGYWN0b3J5LCBJdGVtVHlwZSB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBTaGllbGQgfSBmcm9tIFwiLi9zaGllbGRcIjtcbmltcG9ydCB7IFN3b3JkIH0gZnJvbSBcIi4vc3dvcmRcIjtcbmltcG9ydCB7IEJvdyB9IGZyb20gXCIuL2Jvd1wiO1xuXG5jbGFzcyBJdGVtQ291bnRlciB7XG4gIHByaXZhdGUgY291bnQ6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWF4Q291bnQ6IG51bWJlcikge31cblxuICBwdWJsaWMgaXNDcmVhdGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY291bnQgPCB0aGlzLl9tYXhDb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG5cbiAgcHVibGljIGluY3JlYXNlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQ3JlYXRhYmxlKCkpIHtcbiAgICAgIHRoaXMuY291bnQrKztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEl0ZW1GYWN0b3J5IGV4dGVuZHMgRmFjdG9yeSB7XG4gIHByaXZhdGUgcmVwb3NpdG9yeSA9IG5ldyBNYXA8SXRlbVR5cGUsIEl0ZW1Db3VudGVyPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlcG9zaXRvcnkuc2V0KFwic3dvcmRcIiwgbmV3IEl0ZW1Db3VudGVyKDMpKTtcbiAgICB0aGlzLnJlcG9zaXRvcnkuc2V0KFwic2hpZWxkXCIsIG5ldyBJdGVtQ291bnRlcig1KSk7XG4gICAgdGhpcy5yZXBvc2l0b3J5LnNldChcImJvd1wiLCBuZXcgSXRlbUNvdW50ZXIoMikpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW0obmFtZTogSXRlbVR5cGUpOiBJdGVtIHtcbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgXCJzd29yZFwiOlxuICAgICAgICByZXR1cm4gbmV3IFN3b3JkKCk7XG4gICAgICBjYXNlIFwic2hpZWxkXCI6XG4gICAgICAgIHJldHVybiBuZXcgU2hpZWxkKCk7XG4gICAgICBjYXNlIFwiYm93XCI6XG4gICAgICAgIHJldHVybiBuZXcgQm93KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGlzQ3JlYXRhYmxlKG5hbWU6IEl0ZW1UeXBlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXRlbUNvdW50ZXIgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0KG5hbWUpITtcblxuICAgIHJldHVybiBpdGVtQ291bnRlci5pc0NyZWF0YWJsZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBvc3RQcm9jZXNzSXRlbShpdGVtOiBJdGVtVHlwZSk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW1Db3VudGVyID0gdGhpcy5yZXBvc2l0b3J5LmdldChpdGVtKSE7XG5cbiAgICBpdGVtQ291bnRlci5pbmNyZWFzZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5leHBvcnQgY2xhc3MgU2hpZWxkIGltcGxlbWVudHMgSXRlbSB7XG4gICAgdXNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAn67Cp7Yyo66W8IOyCrOyaqe2VmOyYgOuLpC4g7KCB7J2YIOqzteqyqeydhCDrp4nslZjri6QuJztcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5leHBvcnQgY2xhc3MgU3dvcmQgaW1wbGVtZW50cyBJdGVtIHtcbiAgICB1c2UoKSB7XG4gICAgICAgIHJldHVybiAn7Lm87J2EIOyCrOyaqe2VmOyYgOuLpC4g7KCB7JeQ6rKMIDEw7J2YIOuNsOuvuOyngOulvCDso7zsl4jri6QuJztcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJdGVtRmFjdG9yeSB9IGZyb20gXCIuL2l0ZW0tZmFjdG9yeVwiO1xuaW1wb3J0IHsgSXRlbVR5cGUgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XG5cbmNvbnNvbGUubG9nKFwiZmFjdG9yeSBtZXRob2QhIVwiKTtcblxuY29uc3QgZmFjdG9yeSA9IG5ldyBJdGVtRmFjdG9yeSgpO1xuXG5jb25zdCBkb2NPdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIikhO1xuXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcblxuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgaXRlbU5hbWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KS5pbm5lclRleHQ7XG5cbiAgICBjb25zdCBpdGVtID0gZmFjdG9yeS5jcmVhdGUoaXRlbU5hbWUgYXMgSXRlbVR5cGUpO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGRvY091dHB1dC52YWx1ZSArPSBgXFxuJHtpdGVtLnVzZSgpfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY091dHB1dC52YWx1ZSArPSBgXFxu7JWE7J207YWcICR7aXRlbU5hbWV97J2AKOuKlCkg642UIOydtOyDgSDsg53shLHtlaAg7IiYIOyXhuyKteuLiOuLpC5gO1xuICAgIH1cblxuICAgIGRvY091dHB1dC5zY3JvbGxUb3AgPSBkb2NPdXRwdXQuc2Nyb2xsSGVpZ2h0O1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==