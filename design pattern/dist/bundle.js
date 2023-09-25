/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/memento/blind-man.ts":
/*!**********************************!*\
  !*** ./src/memento/blind-man.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlindMan: () => (/* binding */ BlindMan),
/* harmony export */   Memento: () => (/* binding */ Memento),
/* harmony export */   allActions: () => (/* binding */ allActions)
/* harmony export */ });
var allActions = ['up', 'down', 'left', 'right'];
var Memento = /** @class */ (function () {
    function Memento(_x, _y, actions) {
        this._x = _x;
        this._y = _y;
        this._actions = [];
        this._actions = structuredClone(actions);
    }
    Object.defineProperty(Memento.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Memento.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Memento.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    return Memento;
}());

var BlindMan = /** @class */ (function () {
    function BlindMan(currentX, currentY, targetX, targetY) {
        this.currentX = currentX;
        this.currentY = currentY;
        this.targetX = targetX;
        this.targetY = targetY;
        this.actions = new Array();
    }
    BlindMan.prototype.walk = function (action) {
        this.actions.push(action);
        switch (action) {
            case "up":
                this.currentY++;
                break;
            case "down":
                this.currentY--;
                break;
            case "left":
                this.currentX--;
                break;
            case "right":
                this.currentX++;
                break;
        }
        return Math.sqrt(Math.pow(this.currentX - this.targetX, 2) +
            Math.pow(this.currentY - this.targetY, 2));
    };
    BlindMan.prototype.createMemento = function () {
        return new Memento(this.currentX, this.currentY, this.actions);
    };
    BlindMan.prototype.restoreMemento = function (memento) {
        this.currentX = memento.x;
        this.currentY = memento.y;
        this.actions = memento.actions;
    };
    BlindMan.prototype.resultPath = function () {
        return this.actions.join(" -> ");
    };
    return BlindMan;
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
/*!******************************!*\
  !*** ./src/memento/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blind_man__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blind-man */ "./src/memento/blind-man.ts");

var memento;
console.log("Hello Memento");
var blindMan = new _blind_man__WEBPACK_IMPORTED_MODULE_0__.BlindMan(0, 0, 10, 10);
var minDistance = Number.MAX_SAFE_INTEGER;
while (true) {
    var action = _blind_man__WEBPACK_IMPORTED_MODULE_0__.allActions[Math.floor(Math.random() * 4)];
    var distance = blindMan.walk(action);
    console.log(" distance: ".concat(distance));
    if (distance === 0.0) {
        console.log("도착");
        break;
    }
    if (minDistance > distance) {
        minDistance = distance;
        memento = blindMan.createMemento();
    }
    else {
        if (memento !== undefined) {
            console.log("restore");
            blindMan.restoreMemento(memento);
        }
    }
}
console.log(blindMan.resultPath());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvbWVtZW50by9ibGluZC1tYW4udHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9tZW1lbnRvL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhbGxBY3Rpb25zID0gWyd1cCcsICdkb3duJywgJ2xlZnQnLCAncmlnaHQnXSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIEFjdGlvblR1cGxlID0gdHlwZW9mIGFsbEFjdGlvbnM7IC8vIHJlYWRvbmx5IFsnaGVhcnRzJywgJ2RpYW1vbmRzJywgJ3NwYWRlcycsICdjbHVicyddXG5leHBvcnQgdHlwZSBBY3Rpb24gPSBBY3Rpb25UdXBsZVtudW1iZXJdOyAgLy8gXCJoZWFydHNcIiB8IFwiZGlhbW9uZHNcIiB8IFwic3BhZGVzXCIgfCBcImNsdWJzXCJcblxuXG5leHBvcnQgY2xhc3MgTWVtZW50byB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2FjdGlvbnM6IEFjdGlvbltdID0gW107XG5cbiAgZ2V0IGFjdGlvbnMoKTogQWN0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfeDogbnVtYmVyLCBwcml2YXRlIF95OiBudW1iZXIsIGFjdGlvbnM6IEFjdGlvbltdKSB7XG4gICAgdGhpcy5fYWN0aW9ucyA9IHN0cnVjdHVyZWRDbG9uZShhY3Rpb25zKTtcbiAgfVxuXG4gIGdldCB4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3g7XG4gIH1cblxuICBnZXQgeSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCbGluZE1hbiB7XG4gIHByaXZhdGUgYWN0aW9ucyA9IG5ldyBBcnJheTxBY3Rpb24+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjdXJyZW50WDogbnVtYmVyLFxuICAgIHByaXZhdGUgY3VycmVudFk6IG51bWJlcixcbiAgICBwcml2YXRlIHRhcmdldFg6IG51bWJlcixcbiAgICBwcml2YXRlIHRhcmdldFk6IG51bWJlclxuICApIHt9XG5cbiAgd2FsayhhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgIHRoaXMuY3VycmVudFkrKztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICB0aGlzLmN1cnJlbnRZLS07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgdGhpcy5jdXJyZW50WC0tO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICB0aGlzLmN1cnJlbnRYKys7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyh0aGlzLmN1cnJlbnRYIC0gdGhpcy50YXJnZXRYLCAyKSArXG4gICAgICAgIE1hdGgucG93KHRoaXMuY3VycmVudFkgLSB0aGlzLnRhcmdldFksIDIpXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZU1lbWVudG8oKTogTWVtZW50byB7XG4gICAgcmV0dXJuIG5ldyBNZW1lbnRvKHRoaXMuY3VycmVudFgsIHRoaXMuY3VycmVudFksIHRoaXMuYWN0aW9ucyk7XG4gIH1cblxuICByZXN0b3JlTWVtZW50byhtZW1lbnRvOiBNZW1lbnRvKSB7XG4gICAgdGhpcy5jdXJyZW50WCA9IG1lbWVudG8ueDtcbiAgICB0aGlzLmN1cnJlbnRZID0gbWVtZW50by55O1xuICAgIHRoaXMuYWN0aW9ucyA9IG1lbWVudG8uYWN0aW9ucztcbiAgfVxuXG4gIHJlc3VsdFBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zLmpvaW4oXCIgLT4gXCIpO1xuICB9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgQmxpbmRNYW4sXG4gIEFjdGlvbixcbiAgTWVtZW50byxcbiAgQWN0aW9uVHVwbGUsXG4gIGFsbEFjdGlvbnMsXG59IGZyb20gXCIuL2JsaW5kLW1hblwiO1xuXG5sZXQgbWVtZW50bzogTWVtZW50byB8IHVuZGVmaW5lZDtcbmNvbnNvbGUubG9nKFwiSGVsbG8gTWVtZW50b1wiKTtcblxuY29uc3QgYmxpbmRNYW4gPSBuZXcgQmxpbmRNYW4oMCwgMCwgMTAsIDEwKTtcbmxldCBtaW5EaXN0YW5jZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuXG53aGlsZSAodHJ1ZSkge1xuICBjb25zdCBhY3Rpb246IEFjdGlvbiA9IGFsbEFjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xuICBjb25zdCBkaXN0YW5jZSA9IGJsaW5kTWFuLndhbGsoYWN0aW9uKTtcblxuICBjb25zb2xlLmxvZyhgIGRpc3RhbmNlOiAke2Rpc3RhbmNlfWApO1xuXG4gIGlmIChkaXN0YW5jZSA9PT0gMC4wKSB7XG4gICAgY29uc29sZS5sb2coXCLrj4TssKlcIik7XG4gICAgYnJlYWs7XG4gIH1cblxuICBpZiAobWluRGlzdGFuY2UgPiBkaXN0YW5jZSkge1xuICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgbWVtZW50byA9IGJsaW5kTWFuLmNyZWF0ZU1lbWVudG8oKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAobWVtZW50byAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc3RvcmVcIik7XG4gICAgICBibGluZE1hbi5yZXN0b3JlTWVtZW50byhtZW1lbnRvKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc29sZS5sb2coYmxpbmRNYW4ucmVzdWx0UGF0aCgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=