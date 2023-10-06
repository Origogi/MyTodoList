/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/builder-1/car-builder.ts":
/*!**************************************!*\
  !*** ./src/builder-1/car-builder.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarBuilder: () => (/* binding */ CarBuilder)
/* harmony export */ });
/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ "./src/builder-1/car.ts");

var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.engine = "";
        this.airbag = false;
        this.color = "";
        this.cameraSensor = false;
        this.AEB = false;
    }
    CarBuilder.prototype.setEngine = function (v) {
        this.engine = v;
        return this;
    };
    CarBuilder.prototype.setAirbag = function (v) {
        this.airbag = v;
        return this;
    };
    CarBuilder.prototype.setColor = function (v) {
        this.color = v;
        return this;
    };
    CarBuilder.prototype.setCameraSensor = function (v) {
        this.cameraSensor = v;
        return this;
    };
    CarBuilder.prototype.setAEB = function (v) {
        this.AEB = v;
        return this;
    };
    CarBuilder.prototype.build = function () {
        if (!this.engine) {
            return null;
        }
        if (!this.color) {
            return null;
        }
        if (!this.AEB) {
            return null;
        }
        return new _car__WEBPACK_IMPORTED_MODULE_0__.Car(this.engine, this.airbag, this.color, this.cameraSensor, this.AEB);
    };
    return CarBuilder;
}());



/***/ }),

/***/ "./src/builder-1/car.ts":
/*!******************************!*\
  !*** ./src/builder-1/car.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Car: () => (/* binding */ Car)
/* harmony export */ });
var Car = /** @class */ (function () {
    function Car(engine, airbag, color, cameraSensor, AEB) {
        this.engine = engine;
        this.airbag = airbag;
        this.color = color;
        this.cameraSensor = cameraSensor;
        this.AEB = AEB;
    }
    Car.prototype.print = function () {
        console.table(this);
    };
    Car.prototype.setEngine = function (v) {
        this.engine = v;
        return this;
    };
    Car.prototype.setAirbag = function (v) {
        this.airbag = v;
        return this;
    };
    Car.prototype.setColor = function (v) {
        this.color = v;
        return this;
    };
    Car.prototype.setCameraSensor = function (v) {
        this.cameraSensor = v;
        return this;
    };
    Car.prototype.setAEB = function (v) {
        this.AEB = v;
        return this;
    };
    Car.prototype.build = function () {
        if (!this.engine) {
            return null;
        }
        if (!this.color) {
            return null;
        }
        if (!this.AEB) {
            return null;
        }
        return new Car(this.engine, this.airbag, this.color, this.cameraSensor, this.AEB);
    };
    return Car;
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
  !*** ./src/builder-1/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ "./src/builder-1/car.ts");
/* harmony import */ var _car_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-builder */ "./src/builder-1/car-builder.ts");


console.log("Builder-1");
var car1 = new _car__WEBPACK_IMPORTED_MODULE_0__.Car("V8", true, "red", true, true);
car1.print();
var car2 = new _car_builder__WEBPACK_IMPORTED_MODULE_1__.CarBuilder()
    .setColor("red")
    .setEngine("V7")
    .setAEB(true)
    .build();
car2 === null || car2 === void 0 ? void 0 : car2.print();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUU1QjtJQUFBO1FBQ1UsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsUUFBRyxHQUFZLEtBQUssQ0FBQztJQWdEL0IsQ0FBQztJQTlDQyw4QkFBUyxHQUFULFVBQVUsQ0FBUztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCw4QkFBUyxHQUFULFVBQVUsQ0FBVTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCw2QkFBUSxHQUFSLFVBQVMsQ0FBUztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELG9DQUFlLEdBQWYsVUFBZ0IsQ0FBVTtRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sQ0FBVTtRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUkscUNBQUcsQ0FDWixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsR0FBRyxDQUNULENBQUM7SUFDSixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkREO0lBQ0UsYUFDVSxNQUFjLEVBQ2QsTUFBZSxFQUNmLEtBQWEsRUFDYixZQUFxQixFQUNyQixHQUFZO1FBSlosV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsaUJBQVksR0FBWixZQUFZLENBQVM7UUFDckIsUUFBRyxHQUFILEdBQUcsQ0FBUztJQUNuQixDQUFDO0lBRUosbUJBQUssR0FBTDtRQUNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELHVCQUFTLEdBQVQsVUFBVSxDQUFTO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHVCQUFTLEdBQVQsVUFBVSxDQUFVO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNCQUFRLEdBQVIsVUFBUyxDQUFTO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsNkJBQWUsR0FBZixVQUFnQixDQUFVO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELG9CQUFNLEdBQU4sVUFBTyxDQUFVO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxtQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxHQUFHLENBQ1osSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQzNERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNlO0FBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFekIsSUFBTSxJQUFJLEdBQUcsSUFBSSxxQ0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFYixJQUFNLElBQUksR0FBRyxJQUFJLG9EQUFVLEVBQUU7S0FDMUIsUUFBUSxDQUFDLEtBQUssQ0FBQztLQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDZixNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ1osS0FBSyxFQUFFLENBQUM7QUFDWCxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9idWlsZGVyLTEvY2FyLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYnVpbGRlci0xL2Nhci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2J1aWxkZXItMS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9jYXJcIjtcblxuZXhwb3J0IGNsYXNzIENhckJ1aWxkZXIge1xuICBwcml2YXRlIGVuZ2luZTogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSBhaXJiYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBjb2xvcjogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSBjYW1lcmFTZW5zb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBBRUI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBzZXRFbmdpbmUodjogc3RyaW5nKSB7XG4gICAgdGhpcy5lbmdpbmUgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QWlyYmFnKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFpcmJhZyA9IHY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRDb2xvcih2OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbG9yID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldENhbWVyYVNlbnNvcih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5jYW1lcmFTZW5zb3IgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QUVCKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLkFFQiA9IHY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBidWlsZCgpIHtcbiAgICBpZiAoIXRoaXMuZW5naW5lKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY29sb3IpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5BRUIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQ2FyKFxuICAgICAgdGhpcy5lbmdpbmUsXG4gICAgICB0aGlzLmFpcmJhZyxcbiAgICAgIHRoaXMuY29sb3IsXG4gICAgICB0aGlzLmNhbWVyYVNlbnNvcixcbiAgICAgIHRoaXMuQUVCXG4gICAgKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENhciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZW5naW5lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBhaXJiYWc6IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBjb2xvcjogc3RyaW5nLFxuICAgIHByaXZhdGUgY2FtZXJhU2Vuc29yOiBib29sZWFuLFxuICAgIHByaXZhdGUgQUVCOiBib29sZWFuXG4gICkge31cblxuICBwcmludCgpIHtcbiAgICBjb25zb2xlLnRhYmxlKHRoaXMpO1xuICB9XG5cbiAgc2V0RW5naW5lKHY6IHN0cmluZykge1xuICAgIHRoaXMuZW5naW5lID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEFpcmJhZyh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5haXJiYWcgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Q29sb3Iodjogc3RyaW5nKSB7XG4gICAgdGhpcy5jb2xvciA9IHY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRDYW1lcmFTZW5zb3IodjogYm9vbGVhbikge1xuICAgIHRoaXMuY2FtZXJhU2Vuc29yID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEFFQih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5BRUIgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnVpbGQoKSB7XG4gICAgaWYgKCF0aGlzLmVuZ2luZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNvbG9yKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuQUVCKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IENhcihcbiAgICAgIHRoaXMuZW5naW5lLFxuICAgICAgdGhpcy5haXJiYWcsXG4gICAgICB0aGlzLmNvbG9yLFxuICAgICAgdGhpcy5jYW1lcmFTZW5zb3IsXG4gICAgICB0aGlzLkFFQlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4vY2FyXCI7XG5pbXBvcnQgeyBDYXJCdWlsZGVyIH0gZnJvbSBcIi4vY2FyLWJ1aWxkZXJcIjtcblxuY29uc29sZS5sb2coXCJCdWlsZGVyLTFcIik7XG5cbmNvbnN0IGNhcjEgPSBuZXcgQ2FyKFwiVjhcIiwgdHJ1ZSwgXCJyZWRcIiwgdHJ1ZSwgdHJ1ZSk7XG5jYXIxLnByaW50KCk7XG5cbmNvbnN0IGNhcjIgPSBuZXcgQ2FyQnVpbGRlcigpXG4gIC5zZXRDb2xvcihcInJlZFwiKVxuICAuc2V0RW5naW5lKFwiVjdcIilcbiAgLnNldEFFQih0cnVlKVxuICAuYnVpbGQoKTtcbmNhcjI/LnByaW50KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=