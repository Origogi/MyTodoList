/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/state/player.ts":
/*!*****************************!*\
  !*** ./src/state/player.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _stand_up_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stand-up-state */ "./src/state/stand-up-state.ts");

var Player = /** @class */ (function () {
    function Player(dom) {
        this.dom = dom;
        this.speed = 0;
        this.state = new _stand_up_state__WEBPACK_IMPORTED_MODULE_0__.StandUpState(this);
    }
    Player.prototype.getSpeed = function () {
        return this.speed;
    };
    Player.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Player.prototype.talk = function (msg) {
        this.dom.innerText = msg;
    };
    Player.prototype.setState = function (state) {
        this.state = state;
    };
    Player.prototype.getState = function () {
        return this.state;
    };
    return Player;
}());



/***/ }),

/***/ "./src/state/run-state.ts":
/*!********************************!*\
  !*** ./src/state/run-state.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RunState: () => (/* binding */ RunState)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state/state.ts");
/* harmony import */ var _stand_up_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stand-up-state */ "./src/state/stand-up-state.ts");
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


var RunState = /** @class */ (function (_super) {
    __extends(RunState, _super);
    function RunState(player) {
        return _super.call(this, player) || this;
    }
    RunState.prototype.getDescription = function () {
        return "I am running";
    };
    RunState.prototype.run = function () {
        this.player.setSpeed(this.player.getSpeed() + 2);
        this.player.talk("I am running faster");
    };
    RunState.prototype.sitDown = function () {
        this.player.setSpeed(0);
        this.player.setState(new _stand_up_state__WEBPACK_IMPORTED_MODULE_1__.StandUpState(this.player));
        this.player.talk("It is impossible to run while sitting down, so I am standing up");
    };
    RunState.prototype.standUp = function () {
        this.player.setSpeed(0);
        this.player.setState(new _stand_up_state__WEBPACK_IMPORTED_MODULE_1__.StandUpState(this.player));
        this.player.talk("I am standing up");
    };
    RunState.prototype.walk = function () {
        this.player.setState(new _stand_up_state__WEBPACK_IMPORTED_MODULE_1__.StandUpState(this.player));
        this.player.talk("I am walking");
        this.player.setSpeed(8);
    };
    return RunState;
}(_state__WEBPACK_IMPORTED_MODULE_0__.State));



/***/ }),

/***/ "./src/state/sit-down-state.ts":
/*!*************************************!*\
  !*** ./src/state/sit-down-state.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SitDownState: () => (/* binding */ SitDownState)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state/state.ts");
/* harmony import */ var _stand_up_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stand-up-state */ "./src/state/stand-up-state.ts");
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


var SitDownState = /** @class */ (function (_super) {
    __extends(SitDownState, _super);
    function SitDownState(player) {
        return _super.call(this, player) || this;
    }
    SitDownState.prototype.getDescription = function () {
        return "I am sitting down";
    };
    SitDownState.prototype.run = function () {
        this.player.setState(new _stand_up_state__WEBPACK_IMPORTED_MODULE_1__.StandUpState(this.player));
        this.player.talk("It is impossible to run while sitting down, so I am standing up");
    };
    SitDownState.prototype.sitDown = function () {
        this.player.talk("I am sitting down already");
    };
    SitDownState.prototype.standUp = function () {
        this.player.setState(new _stand_up_state__WEBPACK_IMPORTED_MODULE_1__.StandUpState(this.player));
        this.player.talk("I am standing up");
    };
    SitDownState.prototype.walk = function () {
        this.player.setState(new _stand_up_state__WEBPACK_IMPORTED_MODULE_1__.StandUpState(this.player));
        this.player.talk("I am standing up");
    };
    return SitDownState;
}(_state__WEBPACK_IMPORTED_MODULE_0__.State));



/***/ }),

/***/ "./src/state/stand-up-state.ts":
/*!*************************************!*\
  !*** ./src/state/stand-up-state.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StandUpState: () => (/* binding */ StandUpState)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state/state.ts");
/* harmony import */ var _sit_down_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sit-down-state */ "./src/state/sit-down-state.ts");
/* harmony import */ var _walk_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./walk-state */ "./src/state/walk-state.ts");
/* harmony import */ var _run_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./run-state */ "./src/state/run-state.ts");
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




var StandUpState = /** @class */ (function (_super) {
    __extends(StandUpState, _super);
    function StandUpState(player) {
        return _super.call(this, player) || this;
    }
    StandUpState.prototype.getDescription = function () {
        return "I am standing up";
    };
    StandUpState.prototype.run = function () {
        this.player.setSpeed(12);
        this.player.setState(new _run_state__WEBPACK_IMPORTED_MODULE_3__.RunState(this.player));
        this.player.talk("I am running");
    };
    StandUpState.prototype.sitDown = function () {
        this.player.setState(new _sit_down_state__WEBPACK_IMPORTED_MODULE_1__.SitDownState(this.player));
        this.player.talk("I am sitting down");
    };
    StandUpState.prototype.standUp = function () {
        this.player.talk("I am standing up already");
    };
    StandUpState.prototype.walk = function () {
        this.player.setSpeed(8);
        this.player.setState(new _walk_state__WEBPACK_IMPORTED_MODULE_2__.WalkState(this.player));
        this.player.talk("I am walking");
    };
    return StandUpState;
}(_state__WEBPACK_IMPORTED_MODULE_0__.State));



/***/ }),

/***/ "./src/state/state.ts":
/*!****************************!*\
  !*** ./src/state/state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
var State = /** @class */ (function () {
    function State(player) {
        this.player = player;
    }
    return State;
}());



/***/ }),

/***/ "./src/state/walk-state.ts":
/*!*********************************!*\
  !*** ./src/state/walk-state.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalkState: () => (/* binding */ WalkState)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state/state.ts");
/* harmony import */ var _stand_up_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stand-up-state */ "./src/state/stand-up-state.ts");
/* harmony import */ var _run_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./run-state */ "./src/state/run-state.ts");
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



var WalkState = /** @class */ (function (_super) {
    __extends(WalkState, _super);
    function WalkState(player) {
        return _super.call(this, player) || this;
    }
    WalkState.prototype.getDescription = function () {
        return "I am walking";
    };
    WalkState.prototype.run = function () {
        this.player.setSpeed(20);
        this.player.setState(new _run_state__WEBPACK_IMPORTED_MODULE_2__.RunState(this.player));
        this.player.talk("I am running");
    };
    WalkState.prototype.sitDown = function () {
        this.player.setSpeed(0);
        this.player.setState(new _stand_up_state__WEBPACK_IMPORTED_MODULE_1__.StandUpState(this.player));
        this.player.talk("It is impossible to walk while sitting down, so I am standing up");
    };
    WalkState.prototype.standUp = function () {
        this.player.setSpeed(0);
        this.player.setState(new _stand_up_state__WEBPACK_IMPORTED_MODULE_1__.StandUpState(this.player));
        this.player.talk("I am standing up");
    };
    WalkState.prototype.walk = function () {
        this.player.talk("I am walking already");
    };
    return WalkState;
}(_state__WEBPACK_IMPORTED_MODULE_0__.State));



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
/*!****************************!*\
  !*** ./src/state/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/state/player.ts");

console.log("State");
var domTalk = document.querySelector(".talk");
var domStand = document.querySelector(".stand");
var domSit = document.querySelector(".sit");
var domWalk = document.querySelector(".walk");
var domRun = document.querySelector(".run");
var player = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(domTalk);
function putDescription() {
    var domDescription = document.querySelector(".description");
    domDescription.innerText = "".concat(player
        .getState()
        .getDescription(), " with speed ").concat(player.getSpeed());
}
putDescription();
domStand.addEventListener("click", function () {
    player.getState().standUp();
    putDescription();
});
domSit.addEventListener("click", function () {
    player.getState().sitDown();
    putDescription();
});
domWalk.addEventListener("click", function () {
    player.getState().walk();
    putDescription();
});
domRun.addEventListener("click", function () {
    player.getState().run();
    putDescription();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ3pCLGNBQWMsRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUMvQixNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEIsY0FBYyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9zdGF0ZS9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvc3RhdGUvcnVuLXN0YXRlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3N0YXRlL3NpdC1kb3duLXN0YXRlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3N0YXRlL3N0YW5kLXVwLXN0YXRlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3N0YXRlL3N0YXRlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3N0YXRlL3dhbGstc3RhdGUudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9zdGF0ZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBTdGFuZFVwU3RhdGUgfSBmcm9tIFwiLi9zdGFuZC11cC1zdGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbTogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnN0YXRlID0gbmV3IFN0YW5kVXBTdGF0ZSh0aGlzKTtcbiAgfVxuXG4gIGdldFNwZWVkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3BlZWQ7XG4gIH1cblxuICBzZXRTcGVlZChzcGVlZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICB9XG5cblxuICB0YWxrKG1zZzogc3RyaW5nKSB7XG4gICAgdGhpcy5kb20uaW5uZXJUZXh0ID0gbXNnO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGU6IFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgZ2V0U3RhdGUoKTogU3RhdGUge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IFN0YW5kVXBTdGF0ZSB9IGZyb20gXCIuL3N0YW5kLXVwLXN0YXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBSdW5TdGF0ZSBleHRlbmRzIFN0YXRlIHtcbiAgY29uc3RydWN0b3IocGxheWVyOiBQbGF5ZXIpIHtcbiAgICBzdXBlcihwbGF5ZXIpO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJJIGFtIHJ1bm5pbmdcIjtcbiAgfVxuXG4gIHJ1bigpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5zZXRTcGVlZCh0aGlzLnBsYXllci5nZXRTcGVlZCgpICsgMik7XG4gICAgdGhpcy5wbGF5ZXIudGFsayhcIkkgYW0gcnVubmluZyBmYXN0ZXJcIik7XG4gIH1cblxuICBzaXREb3duKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnNldFNwZWVkKDApO1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBTdGFuZFVwU3RhdGUodGhpcy5wbGF5ZXIpKTtcbiAgICB0aGlzLnBsYXllci50YWxrKFxuICAgICAgXCJJdCBpcyBpbXBvc3NpYmxlIHRvIHJ1biB3aGlsZSBzaXR0aW5nIGRvd24sIHNvIEkgYW0gc3RhbmRpbmcgdXBcIlxuICAgICk7XG4gIH1cblxuICBzdGFuZFVwKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnNldFNwZWVkKDApO1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBTdGFuZFVwU3RhdGUodGhpcy5wbGF5ZXIpKTtcbiAgICB0aGlzLnBsYXllci50YWxrKFwiSSBhbSBzdGFuZGluZyB1cFwiKTtcbiAgfVxuXG4gIHdhbGsoKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFN0YW5kVXBTdGF0ZSh0aGlzLnBsYXllcikpO1xuICAgIHRoaXMucGxheWVyLnRhbGsoXCJJIGFtIHdhbGtpbmdcIik7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3BlZWQoOCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgU3RhbmRVcFN0YXRlIH0gZnJvbSBcIi4vc3RhbmQtdXAtc3RhdGVcIjtcblxuZXhwb3J0IGNsYXNzIFNpdERvd25TdGF0ZSBleHRlbmRzIFN0YXRlIHtcbiAgY29uc3RydWN0b3IocGxheWVyOiBQbGF5ZXIpIHtcbiAgICBzdXBlcihwbGF5ZXIpO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJJIGFtIHNpdHRpbmcgZG93blwiO1xuICB9XG5cbiAgcnVuKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBTdGFuZFVwU3RhdGUodGhpcy5wbGF5ZXIpKTtcbiAgICB0aGlzLnBsYXllci50YWxrKFxuICAgICAgXCJJdCBpcyBpbXBvc3NpYmxlIHRvIHJ1biB3aGlsZSBzaXR0aW5nIGRvd24sIHNvIEkgYW0gc3RhbmRpbmcgdXBcIlxuICAgICk7XG4gIH1cblxuICBzaXREb3duKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnRhbGsoXCJJIGFtIHNpdHRpbmcgZG93biBhbHJlYWR5XCIpO1xuICB9XG5cbiAgc3RhbmRVcCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgU3RhbmRVcFN0YXRlKHRoaXMucGxheWVyKSk7XG4gICAgdGhpcy5wbGF5ZXIudGFsayhcIkkgYW0gc3RhbmRpbmcgdXBcIik7XG4gIH1cblxuICB3YWxrKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBTdGFuZFVwU3RhdGUodGhpcy5wbGF5ZXIpKTtcbiAgICB0aGlzLnBsYXllci50YWxrKFxuICAgICAgXCJJIGFtIHN0YW5kaW5nIHVwXCJcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IFNpdERvd25TdGF0ZSB9IGZyb20gXCIuL3NpdC1kb3duLXN0YXRlXCI7XG5pbXBvcnQgeyBXYWxrU3RhdGUgfSBmcm9tIFwiLi93YWxrLXN0YXRlXCI7XG5pbXBvcnQgeyBSdW5TdGF0ZSB9IGZyb20gXCIuL3J1bi1zdGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgU3RhbmRVcFN0YXRlIGV4dGVuZHMgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllcikge1xuICAgIHN1cGVyKHBsYXllcik7XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkkgYW0gc3RhbmRpbmcgdXBcIjtcbiAgfVxuXG4gIHJ1bigpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5zZXRTcGVlZCgxMik7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFJ1blN0YXRlKHRoaXMucGxheWVyKSk7XG4gICAgdGhpcy5wbGF5ZXIudGFsayhcIkkgYW0gcnVubmluZ1wiKTtcbiAgfVxuXG4gIHNpdERvd24oKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFNpdERvd25TdGF0ZSh0aGlzLnBsYXllcikpO1xuICAgIHRoaXMucGxheWVyLnRhbGsoXCJJIGFtIHNpdHRpbmcgZG93blwiKTtcbiAgfVxuXG4gIHN0YW5kVXAoKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIudGFsayhcIkkgYW0gc3RhbmRpbmcgdXAgYWxyZWFkeVwiKTtcbiAgfVxuXG4gIHdhbGsoKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3BlZWQoOCk7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFdhbGtTdGF0ZSh0aGlzLnBsYXllcikpO1xuICAgIHRoaXMucGxheWVyLnRhbGsoXCJJIGFtIHdhbGtpbmdcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RhdGUge1xuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIHBsYXllcjogUGxheWVyKSB7fVxuXG4gIGFic3RyYWN0IHN0YW5kVXAoKTogdm9pZDtcblxuICBhYnN0cmFjdCBzaXREb3duKCk6IHZvaWQ7XG5cbiAgYWJzdHJhY3Qgd2FsaygpOiB2b2lkO1xuXG4gIGFic3RyYWN0IHJ1bigpOiB2b2lkO1xuXG4gIGFic3RyYWN0IGdldERlc2NyaXB0aW9uKCk6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgU3RhbmRVcFN0YXRlIH0gZnJvbSBcIi4vc3RhbmQtdXAtc3RhdGVcIjtcbmltcG9ydCB7IFJ1blN0YXRlIH0gZnJvbSBcIi4vcnVuLXN0YXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBXYWxrU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyKSB7XG4gICAgc3VwZXIocGxheWVyKTtcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiSSBhbSB3YWxraW5nXCI7XG4gIH1cblxuICBydW4oKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3BlZWQoMjApO1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBSdW5TdGF0ZSh0aGlzLnBsYXllcikpO1xuICAgIHRoaXMucGxheWVyLnRhbGsoXCJJIGFtIHJ1bm5pbmdcIik7XG4gIH1cblxuICBzaXREb3duKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnNldFNwZWVkKDApO1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBTdGFuZFVwU3RhdGUodGhpcy5wbGF5ZXIpKTtcbiAgICB0aGlzLnBsYXllci50YWxrKFxuICAgICAgXCJJdCBpcyBpbXBvc3NpYmxlIHRvIHdhbGsgd2hpbGUgc2l0dGluZyBkb3duLCBzbyBJIGFtIHN0YW5kaW5nIHVwXCJcbiAgICApO1xuICB9XG5cbiAgc3RhbmRVcCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5zZXRTcGVlZCgwKTtcbiAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgU3RhbmRVcFN0YXRlKHRoaXMucGxheWVyKSk7XG4gICAgdGhpcy5wbGF5ZXIudGFsayhcIkkgYW0gc3RhbmRpbmcgdXBcIik7XG4gIH1cblxuICB3YWxrKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnRhbGsoXCJJIGFtIHdhbGtpbmcgYWxyZWFkeVwiKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc29sZS5sb2coXCJTdGF0ZVwiKTtcblxuY29uc3QgZG9tVGFsayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFsa1wiKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGRvbVN0YW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFuZFwiKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGRvbVNpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2l0XCIpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgZG9tV2FsayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2Fsa1wiKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGRvbVJ1biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucnVuXCIpIGFzIEhUTUxFbGVtZW50O1xuXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKGRvbVRhbGspO1xuXG5mdW5jdGlvbiBwdXREZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBkb21EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgZG9tRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYCR7cGxheWVyXG4gICAgLmdldFN0YXRlKClcbiAgICAuZ2V0RGVzY3JpcHRpb24oKX0gd2l0aCBzcGVlZCAke3BsYXllci5nZXRTcGVlZCgpfWA7XG59XG5cbnB1dERlc2NyaXB0aW9uKCk7XG5cbmRvbVN0YW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHBsYXllci5nZXRTdGF0ZSgpLnN0YW5kVXAoKTtcbiAgcHV0RGVzY3JpcHRpb24oKTtcbn0pO1xuZG9tU2l0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHBsYXllci5nZXRTdGF0ZSgpLnNpdERvd24oKTtcbiAgcHV0RGVzY3JpcHRpb24oKTtcbn0pO1xuZG9tV2Fsay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwbGF5ZXIuZ2V0U3RhdGUoKS53YWxrKCk7XG4gIHB1dERlc2NyaXB0aW9uKCk7XG59KTtcbmRvbVJ1bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwbGF5ZXIuZ2V0U3RhdGUoKS5ydW4oKTtcbiAgcHV0RGVzY3JpcHRpb24oKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9