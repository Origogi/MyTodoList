/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/command/box-command.ts":
/*!************************************!*\
  !*** ./src/command/box-command.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxCommand: () => (/* binding */ BoxCommand)
/* harmony export */ });
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ "./src/command/draw.ts");
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

var BoxCommand = /** @class */ (function (_super) {
    __extends(BoxCommand, _super);
    function BoxCommand(canvas, x, y, width, height) {
        var _this = _super.call(this, canvas) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    BoxCommand.prototype.run = function () {
        var context = this.canvas.getContext("2d");
        if (!context) {
            return;
        }
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.strokeColor;
        context.fill();
        context.stroke();
    };
    return BoxCommand;
}(_draw__WEBPACK_IMPORTED_MODULE_0__.Draw));



/***/ }),

/***/ "./src/command/circle-command.ts":
/*!***************************************!*\
  !*** ./src/command/circle-command.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CircleCommand: () => (/* binding */ CircleCommand)
/* harmony export */ });
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ "./src/command/draw.ts");
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

var CircleCommand = /** @class */ (function (_super) {
    __extends(CircleCommand, _super);
    function CircleCommand(canvas, x, y, radius) {
        var _this = _super.call(this, canvas) || this;
        _this.x = x;
        _this.y = y;
        _this.radius = radius;
        return _this;
    }
    CircleCommand.prototype.run = function () {
        var context = this.canvas.getContext("2d");
        if (!context) {
            return;
        }
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.strokeColor;
        context.fill();
        context.stroke();
    };
    return CircleCommand;
}(_draw__WEBPACK_IMPORTED_MODULE_0__.Draw));



/***/ }),

/***/ "./src/command/clear-command.ts":
/*!**************************************!*\
  !*** ./src/command/clear-command.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearCommand: () => (/* binding */ ClearCommand)
/* harmony export */ });
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ "./src/command/draw.ts");
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

var ClearCommand = /** @class */ (function (_super) {
    __extends(ClearCommand, _super);
    function ClearCommand(canvas) {
        return _super.call(this, canvas) || this;
    }
    ClearCommand.prototype.run = function () {
        var context = this.canvas.getContext("2d");
        if (!context) {
            return;
        }
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return ClearCommand;
}(_draw__WEBPACK_IMPORTED_MODULE_0__.Draw));



/***/ }),

/***/ "./src/command/draw.ts":
/*!*****************************!*\
  !*** ./src/command/draw.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Draw: () => (/* binding */ Draw)
/* harmony export */ });
var Draw = /** @class */ (function () {
    function Draw(canvas, fillColor, strokeColor) {
        if (fillColor === void 0) { fillColor = "#ffffff"; }
        if (strokeColor === void 0) { strokeColor = "#000000"; }
        this.canvas = canvas;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
    }
    Draw.prototype.setFillColor = function (color) {
        this.fillColor = color;
        return this;
    };
    Draw.prototype.setStrokeColor = function (color) {
        this.strokeColor = color;
        return this;
    };
    return Draw;
}());



/***/ }),

/***/ "./src/command/play-command.ts":
/*!*************************************!*\
  !*** ./src/command/play-command.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayCommand: () => (/* binding */ PlayCommand)
/* harmony export */ });
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ "./src/command/draw.ts");
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

var PlayCommand = /** @class */ (function (_super) {
    __extends(PlayCommand, _super);
    function PlayCommand(canvas) {
        var _this = _super.call(this, canvas) || this;
        _this.commands = new Array();
        _this.playIndex = 0;
        return _this;
    }
    PlayCommand.prototype.addCommand = function (command) {
        this.commands.push(command);
    };
    PlayCommand.prototype.run = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.playIndex >= _this.commands.length) {
                _this.playIndex = 0;
                return;
            }
            var command = _this.commands[_this.playIndex];
            command.run();
            _this.playIndex++;
            _this.run();
        }, 1000);
    };
    return PlayCommand;
}(_draw__WEBPACK_IMPORTED_MODULE_0__.Draw));



/***/ }),

/***/ "./src/command/text-command.ts":
/*!*************************************!*\
  !*** ./src/command/text-command.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextCommand: () => (/* binding */ TextCommand)
/* harmony export */ });
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ "./src/command/draw.ts");
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

var TextCommand = /** @class */ (function (_super) {
    __extends(TextCommand, _super);
    function TextCommand(canvas, x, y, size, text) {
        var _this = _super.call(this, canvas) || this;
        _this.x = x;
        _this.y = y;
        _this.size = size;
        _this.text = text;
        return _this;
    }
    TextCommand.prototype.run = function () {
        var context = this.canvas.getContext("2d");
        if (!context) {
            return;
        }
        context.font = "".concat(this.size, "px arial");
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.strokeColor;
        context.fillText(this.text, this.x, this.y);
        context.strokeText(this.text, this.x, this.y);
    };
    return TextCommand;
}(_draw__WEBPACK_IMPORTED_MODULE_0__.Draw));



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
/*!******************************!*\
  !*** ./src/command/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clear_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear-command */ "./src/command/clear-command.ts");
/* harmony import */ var _circle_command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle-command */ "./src/command/circle-command.ts");
/* harmony import */ var _text_command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-command */ "./src/command/text-command.ts");
/* harmony import */ var _box_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./box-command */ "./src/command/box-command.ts");
/* harmony import */ var _play_command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./play-command */ "./src/command/play-command.ts");





console.log("Command");
var domCanvas = document.querySelector("canvas");
var domPlay = document.querySelector(".play");
var domDraw = document.querySelector(".draw");
var cmdClear = new _clear_command__WEBPACK_IMPORTED_MODULE_0__.ClearCommand(domCanvas);
var cmdCircle = new _circle_command__WEBPACK_IMPORTED_MODULE_1__.CircleCommand(domCanvas, 50, 150, 40);
cmdCircle.setFillColor("#ee4040").setStrokeColor("#ee4040");
var cmdText = new _text_command__WEBPACK_IMPORTED_MODULE_2__.TextCommand(domCanvas, 200, 200, 40, "Hello World");
cmdText.setStrokeColor("#458de5");
var cmdCircle2 = new _circle_command__WEBPACK_IMPORTED_MODULE_1__.CircleCommand(domCanvas, 355, 240, 30);
cmdCircle2.setFillColor("#ff884d").setStrokeColor("#ff884d");
var cmdBox = new _box_command__WEBPACK_IMPORTED_MODULE_3__.BoxCommand(domCanvas, 40, 165, 320, 65);
cmdBox.setFillColor("#4dc4ff").setStrokeColor("#4dc4ff");
domDraw.addEventListener("click", function () {
    cmdClear.run();
    cmdCircle.run();
    cmdCircle2.run();
    cmdBox.run();
    cmdText.run();
});
var cmdPlay = new _play_command__WEBPACK_IMPORTED_MODULE_4__.PlayCommand(domCanvas);
cmdPlay.addCommand(cmdClear);
cmdPlay.addCommand(cmdCircle);
cmdPlay.addCommand(cmdCircle2);
cmdPlay.addCommand(cmdBox);
cmdPlay.addCommand(cmdText);
domPlay.addEventListener("click", function () {
    console.log("play");
    cmdPlay.run();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvY29tbWFuZC9ib3gtY29tbWFuZC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9jb21tYW5kL2NpcmNsZS1jb21tYW5kLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2NvbW1hbmQvY2xlYXItY29tbWFuZC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9jb21tYW5kL2RyYXcudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvY29tbWFuZC9wbGF5LWNvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvY29tbWFuZC90ZXh0LWNvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9jb21tYW5kL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyYXcgfSBmcm9tIFwiLi9kcmF3XCI7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcIi4vY29tbWFuZFwiO1xuXG5leHBvcnQgY2xhc3MgQm94Q29tbWFuZCBleHRlbmRzIERyYXcgaW1wbGVtZW50cyBDb21tYW5kIHtcbiAgY29uc3RydWN0b3IoXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICBwcml2YXRlIHg6IG51bWJlcixcbiAgICBwcml2YXRlIHk6IG51bWJlcixcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlclxuICApIHtcbiAgICBzdXBlcihjYW52YXMpO1xuICB9XG5cbiAgcnVuKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZUNvbG9yO1xuXG4gICAgY29udGV4dC5maWxsKCk7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRHJhdyB9IGZyb20gXCIuL2RyYXdcIjtcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi9jb21tYW5kXCI7XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGVDb21tYW5kIGV4dGVuZHMgRHJhdyBpbXBsZW1lbnRzIENvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIHByaXZhdGUgeDogbnVtYmVyLFxuICAgIHByaXZhdGUgeTogbnVtYmVyLFxuICAgIHByaXZhdGUgcmFkaXVzOiBudW1iZXJcbiAgKSB7XG4gICAgc3VwZXIoY2FudmFzKTtcbiAgfVxuXG4gIHJ1bigpOiB2b2lkIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VDb2xvcjtcblxuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgRHJhdyB9IGZyb20gXCIuL2RyYXdcIjtcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi9jb21tYW5kXCI7XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNvbW1hbmQgZXh0ZW5kcyBEcmF3IGltcGxlbWVudHMgQ29tbWFuZCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBzdXBlcihjYW52YXMpO1xuICB9XG5cbiAgcnVuKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH1cbn1cbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEcmF3IHtcbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIHByb3RlY3RlZCBmaWxsQ29sb3IgPSBcIiNmZmZmZmZcIixcbiAgICBwcm90ZWN0ZWQgc3Ryb2tlQ29sb3IgPSBcIiMwMDAwMDBcIlxuICApIHt9XG5cbiAgc2V0RmlsbENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3Ryb2tlQ29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuc3Ryb2tlQ29sb3IgPSBjb2xvcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgRHJhdyB9IGZyb20gXCIuL2RyYXdcIjtcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi9jb21tYW5kXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5Q29tbWFuZCBleHRlbmRzIERyYXcgaW1wbGVtZW50cyBDb21tYW5kIHtcbiAgcHJpdmF0ZSBjb21tYW5kcyA9IG5ldyBBcnJheTxDb21tYW5kPigpO1xuXG4gIHByaXZhdGUgcGxheUluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgc3VwZXIoY2FudmFzKTtcbiAgfVxuXG4gIGFkZENvbW1hbmQoY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuICAgIHRoaXMuY29tbWFuZHMucHVzaChjb21tYW5kKTtcbiAgfVxuXG4gIHJ1bigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBsYXlJbmRleCA+PSB0aGlzLmNvbW1hbmRzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnBsYXlJbmRleCA9IDA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuY29tbWFuZHNbdGhpcy5wbGF5SW5kZXhdO1xuICAgICAgY29tbWFuZC5ydW4oKTtcblxuICAgICAgdGhpcy5wbGF5SW5kZXgrKztcblxuICAgICAgdGhpcy5ydW4oKVxuICAgIH0sIDEwMDApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEcmF3IH0gZnJvbSBcIi4vZHJhd1wiO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCIuL2NvbW1hbmRcIjtcblxuZXhwb3J0IGNsYXNzIFRleHRDb21tYW5kIGV4dGVuZHMgRHJhdyBpbXBsZW1lbnRzIENvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIHByaXZhdGUgeDogbnVtYmVyLFxuICAgIHByaXZhdGUgeTogbnVtYmVyLFxuICAgIHByaXZhdGUgc2l6ZTogbnVtYmVyLFxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKGNhbnZhcyk7XG4gIH1cblxuICBydW4oKTogdm9pZCB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmZvbnQgPSBgJHt0aGlzLnNpemV9cHggYXJpYWxgO1xuICAgIGNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZUNvbG9yO1xuXG4gICAgY29udGV4dC5maWxsVGV4dCh0aGlzLnRleHQsIHRoaXMueCwgdGhpcy55KTtcbiAgICBjb250ZXh0LnN0cm9rZVRleHQodGhpcy50ZXh0LCB0aGlzLngsIHRoaXMueSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ2xlYXJDb21tYW5kIH0gZnJvbSBcIi4vY2xlYXItY29tbWFuZFwiO1xuaW1wb3J0IHsgQ2lyY2xlQ29tbWFuZCB9IGZyb20gXCIuL2NpcmNsZS1jb21tYW5kXCI7XG5pbXBvcnQgeyBUZXh0Q29tbWFuZCB9IGZyb20gXCIuL3RleHQtY29tbWFuZFwiO1xuaW1wb3J0IHsgQm94Q29tbWFuZCB9IGZyb20gXCIuL2JveC1jb21tYW5kXCI7XG5pbXBvcnQgeyBQbGF5Q29tbWFuZCB9IGZyb20gXCIuL3BsYXktY29tbWFuZFwiO1xuXG5jb25zb2xlLmxvZyhcIkNvbW1hbmRcIik7XG5cbmNvbnN0IGRvbUNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5jb25zdCBkb21QbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5XCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgZG9tRHJhdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhd1wiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuY29uc3QgY21kQ2xlYXIgPSBuZXcgQ2xlYXJDb21tYW5kKGRvbUNhbnZhcyk7XG5cbmNvbnN0IGNtZENpcmNsZSA9IG5ldyBDaXJjbGVDb21tYW5kKGRvbUNhbnZhcywgNTAsIDE1MCwgNDApO1xuY21kQ2lyY2xlLnNldEZpbGxDb2xvcihcIiNlZTQwNDBcIikuc2V0U3Ryb2tlQ29sb3IoXCIjZWU0MDQwXCIpO1xuXG5jb25zdCBjbWRUZXh0ID0gbmV3IFRleHRDb21tYW5kKGRvbUNhbnZhcywgMjAwLCAyMDAsIDQwLCBcIkhlbGxvIFdvcmxkXCIpO1xuY21kVGV4dC5zZXRTdHJva2VDb2xvcihcIiM0NThkZTVcIik7XG5cbmNvbnN0IGNtZENpcmNsZTIgPSBuZXcgQ2lyY2xlQ29tbWFuZChkb21DYW52YXMsIDM1NSwgMjQwLCAzMCk7XG5jbWRDaXJjbGUyLnNldEZpbGxDb2xvcihcIiNmZjg4NGRcIikuc2V0U3Ryb2tlQ29sb3IoXCIjZmY4ODRkXCIpO1xuXG5jb25zdCBjbWRCb3ggPSBuZXcgQm94Q29tbWFuZChkb21DYW52YXMsIDQwLCAxNjUsIDMyMCwgNjUpO1xuY21kQm94LnNldEZpbGxDb2xvcihcIiM0ZGM0ZmZcIikuc2V0U3Ryb2tlQ29sb3IoXCIjNGRjNGZmXCIpO1xuXG5kb21EcmF3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNtZENsZWFyLnJ1bigpO1xuICBjbWRDaXJjbGUucnVuKCk7XG4gIGNtZENpcmNsZTIucnVuKCk7XG4gIGNtZEJveC5ydW4oKTtcblxuICBjbWRUZXh0LnJ1bigpO1xufSk7XG5cbmNvbnN0IGNtZFBsYXkgPSBuZXcgUGxheUNvbW1hbmQoZG9tQ2FudmFzKTtcbmNtZFBsYXkuYWRkQ29tbWFuZChjbWRDbGVhcik7XG5jbWRQbGF5LmFkZENvbW1hbmQoY21kQ2lyY2xlKTtcbmNtZFBsYXkuYWRkQ29tbWFuZChjbWRDaXJjbGUyKTtcbmNtZFBsYXkuYWRkQ29tbWFuZChjbWRCb3gpO1xuY21kUGxheS5hZGRDb21tYW5kKGNtZFRleHQpO1xuXG5kb21QbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJwbGF5XCIpO1xuICBjbWRQbGF5LnJ1bigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=