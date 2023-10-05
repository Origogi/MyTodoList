/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/facade/cache.ts":
/*!*****************************!*\
  !*** ./src/facade/cache.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cache: () => (/* binding */ Cache)
/* harmony export */ });
var Cache = /** @class */ (function () {
    function Cache() {
        this.cache = new Map();
    }
    Cache.prototype.get = function (name) {
        console.log(this.cache);
        return this.cache.get(name);
    };
    Cache.prototype.put = function (row) {
        this.cache.set(row.name, row);
    };
    return Cache;
}());



/***/ }),

/***/ "./src/facade/dbms.ts":
/*!****************************!*\
  !*** ./src/facade/dbms.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DBMS: () => (/* binding */ DBMS)
/* harmony export */ });
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row */ "./src/facade/row.ts");

var DBMS = /** @class */ (function () {
    function DBMS() {
        this.db = new Map();
        this.db.set("john", new _row__WEBPACK_IMPORTED_MODULE_0__.Row("john", "1990-01-01", "john@gmail.com"));
        this.db.set("jane", new _row__WEBPACK_IMPORTED_MODULE_0__.Row("jane", "1990-01-02", "jane@gmail.com"));
        this.db.set("joe", new _row__WEBPACK_IMPORTED_MODULE_0__.Row("joe", "1990-01-03", "joe@gmail.com"));
    }
    DBMS.prototype.query = function (name, callback) {
        var _this = this;
        setTimeout(function () {
            var row = _this.db.get(name);
            callback(row);
        }, 1000);
    };
    return DBMS;
}());



/***/ }),

/***/ "./src/facade/facade.ts":
/*!******************************!*\
  !*** ./src/facade/facade.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Facade: () => (/* binding */ Facade)
/* harmony export */ });
/* harmony import */ var _dbms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dbms */ "./src/facade/dbms.ts");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ "./src/facade/cache.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ "./src/facade/message.ts");



var Facade = /** @class */ (function () {
    function Facade() {
        this.dbms = new _dbms__WEBPACK_IMPORTED_MODULE_0__.DBMS();
        this.cache = new _cache__WEBPACK_IMPORTED_MODULE_1__.Cache();
    }
    Facade.prototype.queryName = function (name, onBeforeQuery, onAfterQuery, domOutput) {
        var _this = this;
        var row = this.cache.get(name);
        console.log(row);
        if (!row) {
            onBeforeQuery();
            this.dbms.query(name, function (row) {
                onAfterQuery();
                if (row) {
                    _this.cache.put(row);
                }
                var message = new _message__WEBPACK_IMPORTED_MODULE_2__.Message(row);
                message.print(domOutput);
            });
        }
        else {
            var message = new _message__WEBPACK_IMPORTED_MODULE_2__.Message(row);
            message.print(domOutput);
        }
    };
    return Facade;
}());



/***/ }),

/***/ "./src/facade/message.ts":
/*!*******************************!*\
  !*** ./src/facade/message.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Message: () => (/* binding */ Message)
/* harmony export */ });
var Message = /** @class */ (function () {
    function Message(row) {
        this.row = row;
    }
    Message.prototype.print = function (dom) {
        var domLayout = document.createElement("div");
        domLayout.classList.add("layout");
        if (this.row) {
            domLayout.innerHTML = "\n                <div class=\"name\">".concat(this.row.name, "</div>\n                <div class=\"birthday\">").concat(this.row.birthday, "</div>\n                <div class=\"email\">").concat(this.row.email, "</div>\n            ");
        }
        else {
            domLayout.innerHTML = "NO RESULT";
        }
        dom.append(domLayout);
    };
    return Message;
}());



/***/ }),

/***/ "./src/facade/row.ts":
/*!***************************!*\
  !*** ./src/facade/row.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Row: () => (/* binding */ Row)
/* harmony export */ });
var Row = /** @class */ (function () {
    function Row(_name, _birthday, _email) {
        this._name = _name;
        this._birthday = _birthday;
        this._email = _email;
    }
    Object.defineProperty(Row.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Row.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Row.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    return Row;
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
  !*** ./src/facade/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facade */ "./src/facade/facade.ts");

console.log("facade");
var facade = new _facade__WEBPACK_IMPORTED_MODULE_0__.Facade();
var domInput = document.querySelector("input");
var domButton = document.querySelector("button");
var domResult = document.querySelector(".result");
if (domButton && domInput && domResult) {
    domButton.addEventListener("click", function () {
        var name = domInput.value;
        facade.queryName(name, function () {
            domInput.value = "loading...";
            domButton.disabled = true;
        }, function () {
            domInput.value = name;
            domButton.disabled = false;
        }, domResult);
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtDO0FBRWxDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFdEIsSUFBTSxNQUFNLEdBQUcsSUFBSSwyQ0FBTSxFQUFFLENBQUM7QUFFNUIsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqRCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25ELElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFcEQsSUFBSSxTQUFTLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtJQUN0QyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQ2xDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFFNUIsTUFBTSxDQUFDLFNBQVMsQ0FDZCxJQUFJLEVBQ0o7WUFDRSxRQUFRLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztZQUM5QixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDLEVBQ0Q7WUFDRSxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN0QixTQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLEVBQ0QsU0FBUyxDQUNWLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmFjYWRlL2NhY2hlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2ZhY2FkZS9kYm1zLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2ZhY2FkZS9mYWNhZGUudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmFjYWRlL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmFjYWRlL3Jvdy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2ZhY2FkZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi9yb3dcIjtcblxuZXhwb3J0IGNsYXNzIENhY2hlIHtcbiAgcHJpdmF0ZSBjYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBSb3c+KCk7XG5cbiAgZ2V0KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY2FjaGUpO1xuICAgIHJldHVybiB0aGlzLmNhY2hlLmdldChuYW1lKTtcbiAgfVxuXG4gIHB1dChyb3c6IFJvdykge1xuICAgIHRoaXMuY2FjaGUuc2V0KHJvdy5uYW1lLCByb3cpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi9yb3dcIjtcblxuZXhwb3J0IGNsYXNzIERCTVMge1xuICBwcml2YXRlIGRiID0gbmV3IE1hcDxzdHJpbmcsIFJvdz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRiLnNldChcImpvaG5cIiwgbmV3IFJvdyhcImpvaG5cIiwgXCIxOTkwLTAxLTAxXCIsIFwiam9obkBnbWFpbC5jb21cIikpO1xuICAgIHRoaXMuZGIuc2V0KFwiamFuZVwiLCBuZXcgUm93KFwiamFuZVwiLCBcIjE5OTAtMDEtMDJcIiwgXCJqYW5lQGdtYWlsLmNvbVwiKSk7XG4gICAgdGhpcy5kYi5zZXQoXCJqb2VcIiwgbmV3IFJvdyhcImpvZVwiLCBcIjE5OTAtMDEtMDNcIiwgXCJqb2VAZ21haWwuY29tXCIpKTtcbiAgfVxuXG4gIHF1ZXJ5KG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChyb3c6IFJvdyB8IHVuZGVmaW5lZCkgPT4gdm9pZCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gdGhpcy5kYi5nZXQobmFtZSk7XG5cbiAgICAgIGNhbGxiYWNrKHJvdyk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERCTVMgfSBmcm9tIFwiLi9kYm1zXCI7XG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCIuL2NhY2hlXCI7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuXG5leHBvcnQgY2xhc3MgRmFjYWRlIHtcbiAgcHJpdmF0ZSBkYm1zID0gbmV3IERCTVMoKTtcbiAgcHJpdmF0ZSBjYWNoZSA9IG5ldyBDYWNoZSgpO1xuXG4gIHF1ZXJ5TmFtZShcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgb25CZWZvcmVRdWVyeTogKCkgPT4gdm9pZCxcbiAgICBvbkFmdGVyUXVlcnk6ICgpID0+IHZvaWQsXG4gICAgZG9tT3V0cHV0OiBFbGVtZW50XG4gICkge1xuICAgIGNvbnN0IHJvdyA9IHRoaXMuY2FjaGUuZ2V0KG5hbWUpO1xuXG4gICAgY29uc29sZS5sb2cocm93KTtcblxuICAgIGlmICghcm93KSB7XG4gICAgICBvbkJlZm9yZVF1ZXJ5KCk7XG5cbiAgICAgIHRoaXMuZGJtcy5xdWVyeShuYW1lLCAocm93KSA9PiB7XG4gICAgICAgIG9uQWZ0ZXJRdWVyeSgpO1xuICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgdGhpcy5jYWNoZS5wdXQocm93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShyb3cpO1xuICAgICAgICBtZXNzYWdlLnByaW50KGRvbU91dHB1dCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKHJvdyk7XG4gICAgICBtZXNzYWdlLnByaW50KGRvbU91dHB1dCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi9yb3dcIjtcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdzogUm93IHwgdW5kZWZpbmVkKSB7fVxuXG4gIHByaW50KGRvbTogRWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBkb21MYXlvdXQuY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcblxuICAgIGlmICh0aGlzLnJvdykge1xuICAgICAgZG9tTGF5b3V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7dGhpcy5yb3cubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmlydGhkYXlcIj4ke3RoaXMucm93LmJpcnRoZGF5fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbWFpbFwiPiR7dGhpcy5yb3cuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21MYXlvdXQuaW5uZXJIVE1MID0gYE5PIFJFU1VMVGA7XG4gICAgfVxuXG4gICAgZG9tLmFwcGVuZChkb21MYXlvdXQpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUm93IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2JpcnRoZGF5OiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfZW1haWw6IHN0cmluZ1xuICApIHt9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBnZXQgYmlydGhkYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JpcnRoZGF5O1xuICB9XG5cbiAgZ2V0IGVtYWlsKCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBGYWNhZGUgfSBmcm9tIFwiLi9mYWNhZGVcIjtcblxuY29uc29sZS5sb2coXCJmYWNhZGVcIik7XG5cbmNvbnN0IGZhY2FkZSA9IG5ldyBGYWNhZGUoKTtcblxuY29uc3QgZG9tSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5jb25zdCBkb21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuY29uc3QgZG9tUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG5cbmlmIChkb21CdXR0b24gJiYgZG9tSW5wdXQgJiYgZG9tUmVzdWx0KSB7XG4gIGRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb21JbnB1dC52YWx1ZTtcblxuICAgIGZhY2FkZS5xdWVyeU5hbWUoXG4gICAgICBuYW1lLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBkb21JbnB1dC52YWx1ZSA9IFwibG9hZGluZy4uLlwiO1xuICAgICAgICBkb21CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgZG9tSW5wdXQudmFsdWUgPSBuYW1lO1xuICAgICAgICBkb21CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBkb21SZXN1bHRcbiAgICApO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==