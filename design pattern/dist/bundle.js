/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/observer/dice-game.ts":
/*!***********************************!*\
  !*** ./src/observer/dice-game.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiceGame: () => (/* binding */ DiceGame)
/* harmony export */ });
var DiceGame = /** @class */ (function () {
    function DiceGame() {
        this._players = [];
    }
    DiceGame.prototype.addPlayer = function (player) {
        this._players.push(player);
    };
    return DiceGame;
}());



/***/ }),

/***/ "./src/observer/even-betting-player.ts":
/*!*********************************************!*\
  !*** ./src/observer/even-betting-player.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/observer/player.ts");
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

var EvenBettingPlayer = /** @class */ (function (_super) {
    __extends(EvenBettingPlayer, _super);
    function EvenBettingPlayer(name) {
        return _super.call(this, name) || this;
    }
    EvenBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = diceNumber % 2 === 0;
    };
    return EvenBettingPlayer;
}(_player__WEBPACK_IMPORTED_MODULE_0__.Player));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EvenBettingPlayer);


/***/ }),

/***/ "./src/observer/fare-dice-game.ts":
/*!****************************************!*\
  !*** ./src/observer/fare-dice-game.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FareDiceGame: () => (/* binding */ FareDiceGame)
/* harmony export */ });
/* harmony import */ var _dice_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice-game */ "./src/observer/dice-game.ts");
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

var FareDiceGame = /** @class */ (function (_super) {
    __extends(FareDiceGame, _super);
    function FareDiceGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FareDiceGame.prototype.play = function () {
        var diceNumber = Math.floor(Math.random() * 6) + 1;
        this._players.forEach(function (player) { return player.update(diceNumber); });
        return diceNumber;
    };
    return FareDiceGame;
}(_dice_game__WEBPACK_IMPORTED_MODULE_0__.DiceGame));



/***/ }),

/***/ "./src/observer/n-betting-player.ts":
/*!******************************************!*\
  !*** ./src/observer/n-betting-player.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NBettingPlayer: () => (/* binding */ NBettingPlayer)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/observer/player.ts");
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

var NBettingPlayer = /** @class */ (function (_super) {
    __extends(NBettingPlayer, _super);
    function NBettingPlayer(name, winningNumbers) {
        var _this = _super.call(this, name) || this;
        _this.winningNumbers = winningNumbers;
        return _this;
    }
    NBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = this.winningNumbers.includes(diceNumber);
    };
    return NBettingPlayer;
}(_player__WEBPACK_IMPORTED_MODULE_0__.Player));



/***/ }),

/***/ "./src/observer/odd-betting-player.ts":
/*!********************************************!*\
  !*** ./src/observer/odd-betting-player.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/observer/player.ts");
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

var OddBettingPlayer = /** @class */ (function (_super) {
    __extends(OddBettingPlayer, _super);
    function OddBettingPlayer(name) {
        return _super.call(this, name) || this;
    }
    OddBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = diceNumber % 2 === 1;
    };
    return OddBettingPlayer;
}(_player__WEBPACK_IMPORTED_MODULE_0__.Player));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OddBettingPlayer);


/***/ }),

/***/ "./src/observer/player.ts":
/*!********************************!*\
  !*** ./src/observer/player.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
var Player = /** @class */ (function () {
    function Player(_name) {
        this._name = _name;
        this._winning = false;
    }
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "winning", {
        get: function () {
            return this._winning;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
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
  !*** ./src/observer/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fare_dice_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fare-dice-game */ "./src/observer/fare-dice-game.ts");
/* harmony import */ var _odd_betting_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./odd-betting-player */ "./src/observer/odd-betting-player.ts");
/* harmony import */ var _even_betting_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./even-betting-player */ "./src/observer/even-betting-player.ts");
/* harmony import */ var _n_betting_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./n-betting-player */ "./src/observer/n-betting-player.ts");
var _a;




console.log("observer pattern!!");
var diceGame = new _fare_dice_game__WEBPACK_IMPORTED_MODULE_0__.FareDiceGame();
var players = [
    new _odd_betting_player__WEBPACK_IMPORTED_MODULE_1__["default"]("Alice"),
    new _even_betting_player__WEBPACK_IMPORTED_MODULE_2__["default"]("Bob"),
    new _n_betting_player__WEBPACK_IMPORTED_MODULE_3__.NBettingPlayer("Charlie", [3, 4, 5]),
];
players.forEach(function (player) { return diceGame.addPlayer(player); });
function updateBoard() {
    var domPlayers = document.querySelector(".players");
    if (!domPlayers) {
        return;
    }
    domPlayers.innerHTML = "";
    players.forEach(function (player) {
        var domPlayer = document.createElement("div");
        domPlayer.innerText = player.name;
        if (player.winning) {
            domPlayer.classList.add("win");
        }
        domPlayers.append(domPlayer);
    });
}
updateBoard();
(_a = document.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var diceNumber = diceGame.play();
    var domDice = document.querySelector(".dice");
    if (!domDice) {
        return;
    }
    domDice.innerHTML = diceNumber.toString();
    updateBoard();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQzFELElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVuQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWhELElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixPQUFPO0tBQ1I7SUFFRCxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUUxQyxXQUFXLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL2RpY2UtZ2FtZS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9vYnNlcnZlci9ldmVuLWJldHRpbmctcGxheWVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL2ZhcmUtZGljZS1nYW1lLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL24tYmV0dGluZy1wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvb2JzZXJ2ZXIvb2RkLWJldHRpbmctcGxheWVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL3BsYXllci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGljZUdhbWUge1xuICBwcm90ZWN0ZWQgX3BsYXllcnM6IFBsYXllcltdID0gW107XG5cbiAgYWRkUGxheWVyKHBsYXllcjogUGxheWVyKTogdm9pZCB7XG4gICAgdGhpcy5fcGxheWVycy5wdXNoKHBsYXllcik7XG4gIH1cblxuICBhYnN0cmFjdCBwbGF5KCk6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVuQmV0dGluZ1BsYXllciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG5cbiAgdXBkYXRlKGRpY2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3dpbm5pbmcgPSBkaWNlTnVtYmVyICUgMiA9PT0gMDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGljZUdhbWUgfSBmcm9tIFwiLi9kaWNlLWdhbWVcIjtcblxuZXhwb3J0IGNsYXNzIEZhcmVEaWNlR2FtZSBleHRlbmRzIERpY2VHYW1lIHtcbiAgcGxheSgpOiBudW1iZXIge1xuICAgIGNvbnN0IGRpY2VOdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XG4gICAgdGhpcy5fcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHBsYXllci51cGRhdGUoZGljZU51bWJlcikpO1xuICAgIHJldHVybiBkaWNlTnVtYmVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIE5CZXR0aW5nUGxheWVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwcml2YXRlIHdpbm5pbmdOdW1iZXJzOiBudW1iZXJbXSkge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG5cbiAgdXBkYXRlKGRpY2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3dpbm5pbmcgPSB0aGlzLndpbm5pbmdOdW1iZXJzLmluY2x1ZGVzKGRpY2VOdW1iZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2RkQmV0dGluZ1BsYXllciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG5cbiAgdXBkYXRlKGRpY2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3dpbm5pbmcgPSBkaWNlTnVtYmVyICUgMiA9PT0gMTtcbiAgfVxufVxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBsYXllciB7XG4gIHByb3RlY3RlZCBfd2lubmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYW1lOiBzdHJpbmcpIHt9XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIGdldCB3aW5uaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl93aW5uaW5nO1xuICB9XG5cbiAgYWJzdHJhY3QgdXBkYXRlKGRpY2VOdW1iZXI6IG51bWJlcik6IHZvaWQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEZhcmVEaWNlR2FtZSB9IGZyb20gXCIuL2ZhcmUtZGljZS1nYW1lXCI7XG5pbXBvcnQgT2RkQmV0dGluZ1BsYXllciBmcm9tIFwiLi9vZGQtYmV0dGluZy1wbGF5ZXJcIjtcbmltcG9ydCBFdmVuQmV0dGluZ1BsYXllciBmcm9tIFwiLi9ldmVuLWJldHRpbmctcGxheWVyXCI7XG5pbXBvcnQgeyBOQmV0dGluZ1BsYXllciB9IGZyb20gXCIuL24tYmV0dGluZy1wbGF5ZXJcIjtcblxuY29uc29sZS5sb2coXCJvYnNlcnZlciBwYXR0ZXJuISFcIik7XG5cbmNvbnN0IGRpY2VHYW1lID0gbmV3IEZhcmVEaWNlR2FtZSgpO1xuXG5jb25zdCBwbGF5ZXJzID0gW1xuICBuZXcgT2RkQmV0dGluZ1BsYXllcihcIkFsaWNlXCIpLFxuICBuZXcgRXZlbkJldHRpbmdQbGF5ZXIoXCJCb2JcIiksXG4gIG5ldyBOQmV0dGluZ1BsYXllcihcIkNoYXJsaWVcIiwgWzMsIDQsIDVdKSxcbl07XG5cbnBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiBkaWNlR2FtZS5hZGRQbGF5ZXIocGxheWVyKSk7XG5cbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkKCkge1xuICBjb25zdCBkb21QbGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJzXCIpO1xuXG4gIGlmICghZG9tUGxheWVycykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRvbVBsYXllcnMuaW5uZXJIVE1MID0gXCJcIjtcbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBkb21QbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvbVBsYXllci5pbm5lclRleHQgPSBwbGF5ZXIubmFtZTtcblxuICAgIGlmIChwbGF5ZXIud2lubmluZykge1xuICAgICAgZG9tUGxheWVyLmNsYXNzTGlzdC5hZGQoXCJ3aW5cIik7XG4gICAgfVxuXG4gICAgZG9tUGxheWVycy5hcHBlbmQoZG9tUGxheWVyKTtcbiAgfSk7XG59XG5cbnVwZGF0ZUJvYXJkKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGRpY2VOdW1iZXIgPSBkaWNlR2FtZS5wbGF5KCk7XG5cbiAgY29uc3QgZG9tRGljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGljZVwiKTtcblxuICBpZiAoIWRvbURpY2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkb21EaWNlLmlubmVySFRNTCA9IGRpY2VOdW1iZXIudG9TdHJpbmcoKTtcblxuICB1cGRhdGVCb2FyZCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=