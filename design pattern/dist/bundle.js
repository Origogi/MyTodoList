/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mediator/cool-aircorn.ts":
/*!**************************************!*\
  !*** ./src/mediator/cool-aircorn.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoolAircorn: () => (/* binding */ CoolAircorn)
/* harmony export */ });
/* harmony import */ var _participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./participant */ "./src/mediator/participant.ts");
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

var CoolAircorn = /** @class */ (function (_super) {
    __extends(CoolAircorn, _super);
    function CoolAircorn(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this._isOff = false;
        return _this;
    }
    CoolAircorn.prototype.displayState = function (dom) {
        dom.innerText = this._isOff ? "에어콘 off" : "에어콘 on";
        if (this._isOff) {
            dom.classList.remove("hilighting");
        }
        else {
            dom.classList.add("hilighting");
        }
    };
    CoolAircorn.prototype.on = function () {
        if (!this._isOff) {
            return;
        }
        this._isOff = false;
        this.mediator.participantChanged(this);
    };
    CoolAircorn.prototype.off = function () {
        if (this._isOff) {
            return;
        }
        this._isOff = true;
        this.mediator.participantChanged(this);
    };
    Object.defineProperty(CoolAircorn.prototype, "isOff", {
        get: function () {
            return this._isOff;
        },
        enumerable: false,
        configurable: true
    });
    return CoolAircorn;
}(_participant__WEBPACK_IMPORTED_MODULE_0__.Participant));



/***/ }),

/***/ "./src/mediator/door.ts":
/*!******************************!*\
  !*** ./src/mediator/door.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Door: () => (/* binding */ Door)
/* harmony export */ });
/* harmony import */ var _participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./participant */ "./src/mediator/participant.ts");
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

var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this._isClosed = false;
        return _this;
    }
    Door.prototype.displayState = function (dom) {
        dom.innerText = this._isClosed ? "문 close" : "문 open";
        if (this._isClosed) {
            dom.classList.remove("hilighting");
        }
        else {
            dom.classList.add("hilighting");
        }
    };
    Door.prototype.open = function () {
        if (!this._isClosed) {
            return;
        }
        this._isClosed = false;
        this.mediator.participantChanged(this);
    };
    Door.prototype.close = function () {
        if (this._isClosed) {
            return;
        }
        this._isClosed = true;
        this.mediator.participantChanged(this);
    };
    Object.defineProperty(Door.prototype, "isClosed", {
        get: function () {
            return this._isClosed;
        },
        enumerable: false,
        configurable: true
    });
    return Door;
}(_participant__WEBPACK_IMPORTED_MODULE_0__.Participant));



/***/ }),

/***/ "./src/mediator/heat-boiler.ts":
/*!*************************************!*\
  !*** ./src/mediator/heat-boiler.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeatBoiler: () => (/* binding */ HeatBoiler)
/* harmony export */ });
/* harmony import */ var _participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./participant */ "./src/mediator/participant.ts");
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

var HeatBoiler = /** @class */ (function (_super) {
    __extends(HeatBoiler, _super);
    function HeatBoiler(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this._isOff = false;
        return _this;
    }
    HeatBoiler.prototype.displayState = function (dom) {
        dom.innerText = this._isOff ? "보일러 off" : "보일러 on";
        if (this._isOff) {
            dom.classList.remove("hilighting");
        }
        else {
            dom.classList.add("hilighting");
        }
    };
    HeatBoiler.prototype.on = function () {
        if (!this._isOff) {
            return;
        }
        this._isOff = false;
        this.mediator.participantChanged(this);
    };
    HeatBoiler.prototype.off = function () {
        if (this._isOff) {
            return;
        }
        this._isOff = true;
        this.mediator.participantChanged(this);
    };
    Object.defineProperty(HeatBoiler.prototype, "isOff", {
        get: function () {
            return this._isOff;
        },
        enumerable: false,
        configurable: true
    });
    return HeatBoiler;
}(_participant__WEBPACK_IMPORTED_MODULE_0__.Participant));



/***/ }),

/***/ "./src/mediator/participant.ts":
/*!*************************************!*\
  !*** ./src/mediator/participant.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Participant: () => (/* binding */ Participant)
/* harmony export */ });
var Participant = /** @class */ (function () {
    function Participant(mediator) {
        this.mediator = mediator;
    }
    return Participant;
}());



/***/ }),

/***/ "./src/mediator/smart-home.ts":
/*!************************************!*\
  !*** ./src/mediator/smart-home.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartHome: () => (/* binding */ SmartHome)
/* harmony export */ });
/* harmony import */ var _door__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./door */ "./src/mediator/door.ts");
/* harmony import */ var _heat_boiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heat-boiler */ "./src/mediator/heat-boiler.ts");
/* harmony import */ var _cool_aircorn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cool-aircorn */ "./src/mediator/cool-aircorn.ts");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./window */ "./src/mediator/window.ts");




var SmartHome = /** @class */ (function () {
    function SmartHome() {
        this.door = new _door__WEBPACK_IMPORTED_MODULE_0__.Door(this);
        this.heatBoiler = new _heat_boiler__WEBPACK_IMPORTED_MODULE_1__.HeatBoiler(this);
        this.coolAircorn = new _cool_aircorn__WEBPACK_IMPORTED_MODULE_2__.CoolAircorn(this);
        this.window = new _window__WEBPACK_IMPORTED_MODULE_3__.Window(this);
    }
    SmartHome.prototype.participantChanged = function (participant) {
        console.log("participantChanged");
        console.log(participant instanceof _door__WEBPACK_IMPORTED_MODULE_0__.Door);
        if (participant instanceof _door__WEBPACK_IMPORTED_MODULE_0__.Door) {
            if (!participant.isClosed) {
                this.heatBoiler.off();
                this.coolAircorn.off();
            }
        }
        else if (participant instanceof _window__WEBPACK_IMPORTED_MODULE_3__.Window) {
            if (!participant.isClosed) {
                this.heatBoiler.off();
                this.coolAircorn.off();
            }
        }
        else if (participant instanceof _cool_aircorn__WEBPACK_IMPORTED_MODULE_2__.CoolAircorn) {
            if (!participant.isOff) {
                this.heatBoiler.off();
                this.window.close();
                this.door.close();
            }
        }
        else if (participant instanceof _heat_boiler__WEBPACK_IMPORTED_MODULE_1__.HeatBoiler) {
            if (!participant.isOff) {
                this.coolAircorn.off();
                this.window.close();
                this.door.close();
            }
        }
        this.display();
    };
    SmartHome.prototype.display = function () {
        var domDoor = document.querySelector(".door");
        var domWindow = document.querySelector(".window");
        var domHeatBoiler = document.querySelector(".heatboiler");
        var domCoolAircorn = document.querySelector(".coolaircorn");
        this.door.displayState(domDoor);
        this.window.displayState(domWindow);
        this.heatBoiler.displayState(domHeatBoiler);
        this.coolAircorn.displayState(domCoolAircorn);
    };
    SmartHome.prototype.install = function () {
        var _this = this;
        var domDoor = document.querySelector(".door");
        var domWindow = document.querySelector(".window");
        var domHeatBoiler = document.querySelector(".heatboiler");
        var domCoolAircorn = document.querySelector(".coolaircorn");
        domDoor.addEventListener("click", function () {
            if (_this.door.isClosed) {
                _this.door.open();
            }
            else {
                _this.door.close();
            }
        });
        domWindow.addEventListener("click", function () {
            if (_this.window.isClosed) {
                _this.window.open();
            }
            else {
                _this.window.close();
            }
        });
        domHeatBoiler.addEventListener("click", function () {
            if (_this.heatBoiler.isOff) {
                _this.heatBoiler.on();
            }
            else {
                _this.heatBoiler.off();
            }
        });
        domCoolAircorn.addEventListener("click", function () {
            if (_this.coolAircorn.isOff) {
                _this.coolAircorn.on();
            }
            else {
                _this.coolAircorn.off();
            }
        });
        this.display();
    };
    return SmartHome;
}());



/***/ }),

/***/ "./src/mediator/window.ts":
/*!********************************!*\
  !*** ./src/mediator/window.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Window: () => (/* binding */ Window)
/* harmony export */ });
/* harmony import */ var _participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./participant */ "./src/mediator/participant.ts");
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

var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    function Window(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this._isClosed = false;
        return _this;
    }
    Window.prototype.displayState = function (dom) {
        dom.innerText = this._isClosed ? "창문 close" : "창문 open";
        if (this._isClosed) {
            dom.classList.remove("hilighting");
        }
        else {
            dom.classList.add("hilighting");
        }
    };
    Window.prototype.open = function () {
        if (!this._isClosed) {
            return;
        }
        this._isClosed = false;
        this.mediator.participantChanged(this);
    };
    Window.prototype.close = function () {
        if (this._isClosed) {
            return;
        }
        this._isClosed = true;
        this.mediator.participantChanged(this);
    };
    Object.defineProperty(Window.prototype, "isClosed", {
        get: function () {
            return this._isClosed;
        },
        enumerable: false,
        configurable: true
    });
    return Window;
}(_participant__WEBPACK_IMPORTED_MODULE_0__.Participant));



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
  !*** ./src/mediator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _smart_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-home */ "./src/mediator/smart-home.ts");

console.log('mediator');
var smartHome = new _smart_home__WEBPACK_IMPORTED_MODULE_0__.SmartHome();
smartHome.install();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ055QztBQUV6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXhCLElBQU0sU0FBUyxHQUFHLElBQUksa0RBQVMsRUFBRSxDQUFDO0FBRWxDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL21lZGlhdG9yL2Nvb2wtYWlyY29ybi50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9tZWRpYXRvci9kb29yLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL21lZGlhdG9yL2hlYXQtYm9pbGVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL21lZGlhdG9yL3BhcnRpY2lwYW50LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL21lZGlhdG9yL3NtYXJ0LWhvbWUudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvbWVkaWF0b3Ivd2luZG93LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvbWVkaWF0b3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFydGljaXBhbnQgfSBmcm9tIFwiLi9wYXJ0aWNpcGFudFwiO1xuaW1wb3J0IHsgTWVkaWF0b3IgfSBmcm9tIFwiLi9tZWRpYXRvclwiO1xuXG5leHBvcnQgY2xhc3MgQ29vbEFpcmNvcm4gZXh0ZW5kcyBQYXJ0aWNpcGFudCB7XG4gIHByaXZhdGUgX2lzT2ZmID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IobWVkaWF0b3I6IE1lZGlhdG9yKSB7XG4gICAgc3VwZXIobWVkaWF0b3IpO1xuICB9XG5cbiAgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBkb20uaW5uZXJUZXh0ID0gdGhpcy5faXNPZmYgPyBcIuyXkOyWtOy9mCBvZmZcIiA6IFwi7JeQ7Ja07L2YIG9uXCI7XG5cbiAgICBpZiAodGhpcy5faXNPZmYpIHtcbiAgICAgIGRvbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlsaWdodGluZ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLmNsYXNzTGlzdC5hZGQoXCJoaWxpZ2h0aW5nXCIpO1xuICAgIH1cbiAgfVxuXG4gIG9uKCkge1xuICAgIGlmICghdGhpcy5faXNPZmYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pc09mZiA9IGZhbHNlO1xuICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgb2ZmKCkge1xuICAgIGlmICh0aGlzLl9pc09mZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2lzT2ZmID0gdHJ1ZTtcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKTtcbiAgfVxuXG4gIGdldCBpc09mZigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNPZmY7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnRpY2lwYW50IH0gZnJvbSBcIi4vcGFydGljaXBhbnRcIjtcbmltcG9ydCB7IE1lZGlhdG9yIH0gZnJvbSBcIi4vbWVkaWF0b3JcIjtcblxuZXhwb3J0IGNsYXNzIERvb3IgZXh0ZW5kcyBQYXJ0aWNpcGFudCB7XG4gIHByaXZhdGUgX2lzQ2xvc2VkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IobWVkaWF0b3I6IE1lZGlhdG9yKSB7XG4gICAgc3VwZXIobWVkaWF0b3IpO1xuICB9XG5cbiAgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBkb20uaW5uZXJUZXh0ID0gdGhpcy5faXNDbG9zZWQgPyBcIuusuCBjbG9zZVwiIDogXCLrrLggb3BlblwiO1xuXG4gICAgaWYgKHRoaXMuX2lzQ2xvc2VkKSB7XG4gICAgICBkb20uY2xhc3NMaXN0LnJlbW92ZShcImhpbGlnaHRpbmdcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbS5jbGFzc0xpc3QuYWRkKFwiaGlsaWdodGluZ1wiKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGlmICghdGhpcy5faXNDbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pc0Nsb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX2lzQ2xvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faXNDbG9zZWQgPSB0cnVlO1xuICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgZ2V0IGlzQ2xvc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0Nsb3NlZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFydGljaXBhbnQgfSBmcm9tIFwiLi9wYXJ0aWNpcGFudFwiO1xuaW1wb3J0IHsgTWVkaWF0b3IgfSBmcm9tIFwiLi9tZWRpYXRvclwiO1xuXG5leHBvcnQgY2xhc3MgSGVhdEJvaWxlciBleHRlbmRzIFBhcnRpY2lwYW50IHtcbiAgcHJpdmF0ZSBfaXNPZmYgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcbiAgICBzdXBlcihtZWRpYXRvcik7XG4gIH1cblxuICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGRvbS5pbm5lclRleHQgPSB0aGlzLl9pc09mZiA/IFwi67O07J2865+sIG9mZlwiIDogXCLrs7Tsnbzrn6wgb25cIjtcblxuICAgIGlmICh0aGlzLl9pc09mZikge1xuICAgICAgZG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWxpZ2h0aW5nXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb20uY2xhc3NMaXN0LmFkZChcImhpbGlnaHRpbmdcIik7XG4gICAgfVxuICB9XG5cbiAgb24oKSB7XG4gICAgaWYgKCF0aGlzLl9pc09mZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2lzT2ZmID0gZmFsc2U7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBvZmYoKSB7XG4gICAgaWYgKHRoaXMuX2lzT2ZmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faXNPZmYgPSB0cnVlO1xuICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgZ2V0IGlzT2ZmKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc09mZjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWVkaWF0b3IgfSBmcm9tIFwiLi9tZWRpYXRvclwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGFydGljaXBhbnQge1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbWVkaWF0b3I6IE1lZGlhdG9yKSB7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZGlzcGxheVN0YXRlKGRvbSA6IEhUTUxFbGVtZW50KSA6IHZvaWQ7XG5cbn0iLCJpbXBvcnQgeyBNZWRpYXRvciB9IGZyb20gXCIuL21lZGlhdG9yXCI7XG5pbXBvcnQgeyBQYXJ0aWNpcGFudCB9IGZyb20gXCIuL3BhcnRpY2lwYW50XCI7XG5pbXBvcnQgeyBEb29yIH0gZnJvbSBcIi4vZG9vclwiO1xuaW1wb3J0IHsgSGVhdEJvaWxlciB9IGZyb20gXCIuL2hlYXQtYm9pbGVyXCI7XG5pbXBvcnQgeyBDb29sQWlyY29ybiB9IGZyb20gXCIuL2Nvb2wtYWlyY29yblwiO1xuaW1wb3J0IHsgV2luZG93IH0gZnJvbSBcIi4vd2luZG93XCI7XG5cbmV4cG9ydCBjbGFzcyBTbWFydEhvbWUgaW1wbGVtZW50cyBNZWRpYXRvciB7XG4gIHByaXZhdGUgZG9vciA9IG5ldyBEb29yKHRoaXMpO1xuICBwcml2YXRlIGhlYXRCb2lsZXIgPSBuZXcgSGVhdEJvaWxlcih0aGlzKTtcbiAgcHJpdmF0ZSBjb29sQWlyY29ybiA9IG5ldyBDb29sQWlyY29ybih0aGlzKTtcbiAgcHJpdmF0ZSB3aW5kb3cgPSBuZXcgV2luZG93KHRoaXMpO1xuXG4gIHBhcnRpY2lwYW50Q2hhbmdlZChwYXJ0aWNpcGFudDogUGFydGljaXBhbnQpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicGFydGljaXBhbnRDaGFuZ2VkXCIpO1xuICAgICAgY29uc29sZS5sb2cocGFydGljaXBhbnQgaW5zdGFuY2VvZiBEb29yKTtcblxuICAgIGlmIChwYXJ0aWNpcGFudCBpbnN0YW5jZW9mIERvb3IpIHtcbiAgICAgIGlmICghcGFydGljaXBhbnQuaXNDbG9zZWQpIHtcbiAgICAgICAgdGhpcy5oZWF0Qm9pbGVyLm9mZigpO1xuICAgICAgICB0aGlzLmNvb2xBaXJjb3JuLm9mZigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFydGljaXBhbnQgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICAgIGlmICghcGFydGljaXBhbnQuaXNDbG9zZWQpIHtcbiAgICAgICAgdGhpcy5oZWF0Qm9pbGVyLm9mZigpO1xuICAgICAgICB0aGlzLmNvb2xBaXJjb3JuLm9mZigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFydGljaXBhbnQgaW5zdGFuY2VvZiBDb29sQWlyY29ybikge1xuICAgICAgaWYgKCFwYXJ0aWNpcGFudC5pc09mZikge1xuICAgICAgICB0aGlzLmhlYXRCb2lsZXIub2ZmKCk7XG4gICAgICAgIHRoaXMud2luZG93LmNsb3NlKCk7XG4gICAgICAgIHRoaXMuZG9vci5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFydGljaXBhbnQgaW5zdGFuY2VvZiBIZWF0Qm9pbGVyKSB7XG4gICAgICBpZiAoIXBhcnRpY2lwYW50LmlzT2ZmKSB7XG4gICAgICAgIHRoaXMuY29vbEFpcmNvcm4ub2ZmKCk7XG4gICAgICAgIHRoaXMud2luZG93LmNsb3NlKCk7XG4gICAgICAgIHRoaXMuZG9vci5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRpc3BsYXkoKTtcbiAgfVxuXG4gIGRpc3BsYXkoKSB7XG4gICAgY29uc3QgZG9tRG9vciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG9vclwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb21XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRvd1wiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb21IZWF0Qm9pbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWF0Ym9pbGVyXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGRvbUNvb2xBaXJjb3JuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmNvb2xhaXJjb3JuXCJcbiAgICApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgdGhpcy5kb29yLmRpc3BsYXlTdGF0ZShkb21Eb29yKTtcbiAgICB0aGlzLndpbmRvdy5kaXNwbGF5U3RhdGUoZG9tV2luZG93KTtcbiAgICB0aGlzLmhlYXRCb2lsZXIuZGlzcGxheVN0YXRlKGRvbUhlYXRCb2lsZXIpO1xuICAgIHRoaXMuY29vbEFpcmNvcm4uZGlzcGxheVN0YXRlKGRvbUNvb2xBaXJjb3JuKTtcbiAgfVxuXG4gIGluc3RhbGwoKSB7XG4gICAgY29uc3QgZG9tRG9vciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG9vclwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb21XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRvd1wiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb21IZWF0Qm9pbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWF0Ym9pbGVyXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGRvbUNvb2xBaXJjb3JuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmNvb2xhaXJjb3JuXCJcbiAgICApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgZG9tRG9vci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZG9vci5pc0Nsb3NlZCkge1xuICAgICAgICB0aGlzLmRvb3Iub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kb29yLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb21XaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLndpbmRvdy5pc0Nsb3NlZCkge1xuICAgICAgICB0aGlzLndpbmRvdy5vcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndpbmRvdy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9tSGVhdEJvaWxlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaGVhdEJvaWxlci5pc09mZikge1xuICAgICAgICB0aGlzLmhlYXRCb2lsZXIub24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGVhdEJvaWxlci5vZmYoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvbUNvb2xBaXJjb3JuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jb29sQWlyY29ybi5pc09mZikge1xuICAgICAgICB0aGlzLmNvb2xBaXJjb3JuLm9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvb2xBaXJjb3JuLm9mZigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kaXNwbGF5KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnRpY2lwYW50IH0gZnJvbSBcIi4vcGFydGljaXBhbnRcIjtcbmltcG9ydCB7IE1lZGlhdG9yIH0gZnJvbSBcIi4vbWVkaWF0b3JcIjtcblxuZXhwb3J0IGNsYXNzIFdpbmRvdyBleHRlbmRzIFBhcnRpY2lwYW50IHtcbiAgcHJpdmF0ZSBfaXNDbG9zZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcbiAgICBzdXBlcihtZWRpYXRvcik7XG4gIH1cblxuICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGRvbS5pbm5lclRleHQgPSB0aGlzLl9pc0Nsb3NlZCA/IFwi7LC966y4IGNsb3NlXCIgOiBcIuywveusuCBvcGVuXCI7XG5cbiAgICBpZiAodGhpcy5faXNDbG9zZWQpIHtcbiAgICAgIGRvbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlsaWdodGluZ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLmNsYXNzTGlzdC5hZGQoXCJoaWxpZ2h0aW5nXCIpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgaWYgKCF0aGlzLl9pc0Nsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2lzQ2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5faXNDbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pc0Nsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBnZXQgaXNDbG9zZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQ2xvc2VkO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFNtYXJ0SG9tZSB9IGZyb20gXCIuL3NtYXJ0LWhvbWVcIjtcblxuY29uc29sZS5sb2coJ21lZGlhdG9yJyk7XG5cbmNvbnN0IHNtYXJ0SG9tZSA9IG5ldyBTbWFydEhvbWUoKTtcblxuc21hcnRIb21lLmluc3RhbGwoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==