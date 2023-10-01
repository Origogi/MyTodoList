/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chain-of-responsibility/domain-handler.ts":
/*!*******************************************************!*\
  !*** ./src/chain-of-responsibility/domain-handler.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomainHandler: () => (/* binding */ DomainHandler)
/* harmony export */ });
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ "./src/chain-of-responsibility/handler.ts");
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

var DomainHandler = /** @class */ (function (_super) {
    __extends(DomainHandler, _super);
    function DomainHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DomainHandler.prototype.process = function (url) {
        var startIndex = url.indexOf("://");
        var lastIndex = url.lastIndexOf(":");
        if (startIndex === -1) {
            if (lastIndex === -1) {
                this.displayResult("Domain", url);
            }
            else {
                this.displayResult("Domain", url.substring(0, lastIndex));
            }
        }
        else if (startIndex !== lastIndex) {
            this.displayResult("Domain", url.substring(startIndex + 3, lastIndex));
        }
        else if (startIndex === lastIndex) {
            this.displayResult("Domain", url.substring(startIndex + 3));
        }
        else {
            this.displayResult("Domain", "Unknown");
        }
    };
    return DomainHandler;
}(_handler__WEBPACK_IMPORTED_MODULE_0__.Handler));



/***/ }),

/***/ "./src/chain-of-responsibility/handler.ts":
/*!************************************************!*\
  !*** ./src/chain-of-responsibility/handler.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Handler: () => (/* binding */ Handler)
/* harmony export */ });
var Handler = /** @class */ (function () {
    function Handler() {
        this.nextHandler = null;
    }
    Handler.prototype.setNextHandler = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    Handler.prototype.run = function (url, chainCount) {
        if (chainCount === void 0) { chainCount = 0; }
        if (chainCount === 0) {
            var domTarget = document.querySelector(".result");
            if (domTarget) {
                domTarget.innerHTML = "";
            }
        }
        this.process(url);
        if (this.nextHandler) {
            this.nextHandler.run(url, chainCount + 1);
        }
    };
    Handler.prototype.displayResult = function (title, content) {
        var domLayout = document.createElement("div");
        var domTitle = document.createElement("div");
        var domContent = document.createElement("div");
        domLayout.append(domTitle, domContent);
        domLayout.classList.add("layout");
        domTitle.classList.add("title");
        domContent.classList.add("content");
        domTitle.innerText = title;
        domContent.innerText = content;
        var domTarget = document.querySelector(".result");
        if (!domTarget) {
            return;
        }
        domTarget === null || domTarget === void 0 ? void 0 : domTarget.append(domLayout);
    };
    return Handler;
}());



/***/ }),

/***/ "./src/chain-of-responsibility/port-handler.ts":
/*!*****************************************************!*\
  !*** ./src/chain-of-responsibility/port-handler.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortHandler: () => (/* binding */ PortHandler)
/* harmony export */ });
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ "./src/chain-of-responsibility/handler.ts");
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

var PortHandler = /** @class */ (function (_super) {
    __extends(PortHandler, _super);
    function PortHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortHandler.prototype.process = function (url) {
        var index = url.lastIndexOf(":");
        if (index !== -1) {
            var strPort = url.substring(index + 1);
            if (!isNaN(Number(strPort))) {
                this.displayResult("Port", strPort);
                return;
            }
        }
        this.displayResult("Port", "Unknown");
    };
    return PortHandler;
}(_handler__WEBPACK_IMPORTED_MODULE_0__.Handler));



/***/ }),

/***/ "./src/chain-of-responsibility/protocol-handler.ts":
/*!*********************************************************!*\
  !*** ./src/chain-of-responsibility/protocol-handler.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtocolHandler: () => (/* binding */ ProtocolHandler)
/* harmony export */ });
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ "./src/chain-of-responsibility/handler.ts");
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

var ProtocolHandler = /** @class */ (function (_super) {
    __extends(ProtocolHandler, _super);
    function ProtocolHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProtocolHandler.prototype.process = function (url) {
        var index = url.indexOf("://");
        if (index === -1) {
            this.displayResult("Protocol", "Unknown");
        }
        else {
            this.displayResult("Protocol", url.substring(0, index));
        }
    };
    return ProtocolHandler;
}(_handler__WEBPACK_IMPORTED_MODULE_0__.Handler));



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
/*!**********************************************!*\
  !*** ./src/chain-of-responsibility/index.ts ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _protocol_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protocol-handler */ "./src/chain-of-responsibility/protocol-handler.ts");
/* harmony import */ var _port_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./port-handler */ "./src/chain-of-responsibility/port-handler.ts");
/* harmony import */ var _domain_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain-handler */ "./src/chain-of-responsibility/domain-handler.ts");



console.log("chain-of-responsiblity");
var handler1 = new _protocol_handler__WEBPACK_IMPORTED_MODULE_0__.ProtocolHandler();
var handler2 = new _port_handler__WEBPACK_IMPORTED_MODULE_1__.PortHandler();
var handler3 = new _domain_handler__WEBPACK_IMPORTED_MODULE_2__.DomainHandler();
handler1.setNextHandler(handler2).setNextHandler(handler3);
var domInput = document.querySelector("#url");
var domBtn = document.querySelector("#btn");
domBtn.addEventListener("click", function () {
    var url = domInput.value;
    handler1.run(url);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDM0IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2NoYWluLW9mLXJlc3BvbnNpYmlsaXR5L2RvbWFpbi1oYW5kbGVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2NoYWluLW9mLXJlc3BvbnNpYmlsaXR5L2hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvY2hhaW4tb2YtcmVzcG9uc2liaWxpdHkvcG9ydC1oYW5kbGVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2NoYWluLW9mLXJlc3BvbnNpYmlsaXR5L3Byb3RvY29sLWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9jaGFpbi1vZi1yZXNwb25zaWJpbGl0eS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYW5kbGVyIH0gZnJvbSBcIi4vaGFuZGxlclwiO1xuXG5leHBvcnQgY2xhc3MgRG9tYWluSGFuZGxlciBleHRlbmRzIEhhbmRsZXIge1xuICBwcm90ZWN0ZWQgcHJvY2Vzcyh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB1cmwuaW5kZXhPZihcIjovL1wiKTtcbiAgICBjb25zdCBsYXN0SW5kZXggPSB1cmwubGFzdEluZGV4T2YoXCI6XCIpO1xuXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IC0xKSB7XG4gICAgICBpZiAobGFzdEluZGV4ID09PSAtMSkge1xuICAgICAgICB0aGlzLmRpc3BsYXlSZXN1bHQoXCJEb21haW5cIiwgdXJsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzcGxheVJlc3VsdChcIkRvbWFpblwiLCB1cmwuc3Vic3RyaW5nKDAsIGxhc3RJbmRleCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RhcnRJbmRleCAhPT0gbGFzdEluZGV4KSB7XG4gICAgICAgIHRoaXMuZGlzcGxheVJlc3VsdChcIkRvbWFpblwiLCB1cmwuc3Vic3RyaW5nKHN0YXJ0SW5kZXggKyAzLCBsYXN0SW5kZXgpKTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0SW5kZXggPT09IGxhc3RJbmRleCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlSZXN1bHQoXCJEb21haW5cIiwgdXJsLnN1YnN0cmluZyhzdGFydEluZGV4ICsgMykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlSZXN1bHQoXCJEb21haW5cIiwgXCJVbmtub3duXCIpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEhhbmRsZXIge1xuICBwcm90ZWN0ZWQgbmV4dEhhbmRsZXI6IEhhbmRsZXIgfCBudWxsID0gbnVsbDtcblxuICBzZXROZXh0SGFuZGxlcihoYW5kbGVyOiBIYW5kbGVyKTogSGFuZGxlciB7XG4gICAgdGhpcy5uZXh0SGFuZGxlciA9IGhhbmRsZXI7XG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcHJvY2Vzcyh1cmw6IHN0cmluZyk6IHZvaWQ7XG5cbiAgcnVuKHVybDogc3RyaW5nLCBjaGFpbkNvdW50OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgaWYgKGNoYWluQ291bnQgPT09IDApIHtcbiAgICAgIGNvbnN0IGRvbVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0XCIpO1xuICAgICAgaWYgKGRvbVRhcmdldCkge1xuICAgICAgICBkb21UYXJnZXQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnByb2Nlc3ModXJsKTtcbiAgICBpZiAodGhpcy5uZXh0SGFuZGxlcikge1xuICAgICAgdGhpcy5uZXh0SGFuZGxlci5ydW4odXJsLCBjaGFpbkNvdW50ICsgMSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGRpc3BsYXlSZXN1bHQodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XG4gICAgY29uc3QgZG9tTGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkb21UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZG9tQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBkb21MYXlvdXQuYXBwZW5kKGRvbVRpdGxlLCBkb21Db250ZW50KTtcblxuICAgIGRvbUxheW91dC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgIGRvbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBkb21Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXG4gICAgZG9tVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgZG9tQ29udGVudC5pbm5lclRleHQgPSBjb250ZW50O1xuXG4gICAgY29uc3QgZG9tVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG5cbiAgICBpZiAoIWRvbVRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRvbVRhcmdldD8uYXBwZW5kKGRvbUxheW91dCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhhbmRsZXIgfSBmcm9tIFwiLi9oYW5kbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBQb3J0SGFuZGxlciBleHRlbmRzIEhhbmRsZXIge1xuICBwcm90ZWN0ZWQgcHJvY2Vzcyh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdXJsLmxhc3RJbmRleE9mKFwiOlwiKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBzdHJQb3J0ID0gdXJsLnN1YnN0cmluZyhpbmRleCArIDEpO1xuXG4gICAgICBpZiAoIWlzTmFOKE51bWJlcihzdHJQb3J0KSkpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KFwiUG9ydFwiLCBzdHJQb3J0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZGlzcGxheVJlc3VsdChcIlBvcnRcIiwgXCJVbmtub3duXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIYW5kbGVyIH0gZnJvbSBcIi4vaGFuZGxlclwiO1xuXG5leHBvcnQgY2xhc3MgUHJvdG9jb2xIYW5kbGVyIGV4dGVuZHMgSGFuZGxlciB7XG4gIHByb3RlY3RlZCBwcm9jZXNzKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB1cmwuaW5kZXhPZihcIjovL1wiKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLmRpc3BsYXlSZXN1bHQoXCJQcm90b2NvbFwiLCBcIlVua25vd25cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheVJlc3VsdChcIlByb3RvY29sXCIsIHVybC5zdWJzdHJpbmcoMCwgaW5kZXgpKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUHJvdG9jb2xIYW5kbGVyIH0gZnJvbSBcIi4vcHJvdG9jb2wtaGFuZGxlclwiO1xuaW1wb3J0IHsgUG9ydEhhbmRsZXIgfSBmcm9tIFwiLi9wb3J0LWhhbmRsZXJcIjtcbmltcG9ydCB7IERvbWFpbkhhbmRsZXIgfSBmcm9tIFwiLi9kb21haW4taGFuZGxlclwiO1xuXG5jb25zb2xlLmxvZyhcImNoYWluLW9mLXJlc3BvbnNpYmxpdHlcIik7XG5cbmNvbnN0IGhhbmRsZXIxID0gbmV3IFByb3RvY29sSGFuZGxlcigpO1xuY29uc3QgaGFuZGxlcjIgPSBuZXcgUG9ydEhhbmRsZXIoKTtcbmNvbnN0IGhhbmRsZXIzID0gbmV3IERvbWFpbkhhbmRsZXIoKTtcblxuaGFuZGxlcjEuc2V0TmV4dEhhbmRsZXIoaGFuZGxlcjIpLnNldE5leHRIYW5kbGVyKGhhbmRsZXIzKTtcblxuY29uc3QgZG9tSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VybFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XG5jb25zdCBkb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0blwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICBjb25zdCB1cmwgPSBkb21JbnB1dC52YWx1ZTtcbiAgIGhhbmRsZXIxLnJ1bih1cmwpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9