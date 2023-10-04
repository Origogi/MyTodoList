/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/prototype/group.ts":
/*!********************************!*\
  !*** ./src/prototype/group.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Group: () => (/* binding */ Group)
/* harmony export */ });
var Group = /** @class */ (function () {
    function Group() {
        this.shapes = new Array();
    }
    Group.prototype.add = function (shape) {
        this.shapes.push(shape.copy());
        return this;
    };
    Group.prototype.copy = function () {
        var result = new Group();
        this.shapes.forEach(function (shape) {
            result.add(shape);
        });
        return result;
    };
    Group.prototype.draw = function (canvas) {
        this.shapes.forEach(function (shape) {
            shape.draw(canvas);
        });
        return this;
    };
    Group.prototype.moveOffset = function (dx, dy) {
        this.shapes.forEach(function (shape) {
            shape.moveOffset(dx, dy);
        });
        return this;
    };
    return Group;
}());



/***/ }),

/***/ "./src/prototype/line.ts":
/*!*******************************!*\
  !*** ./src/prototype/line.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Line: () => (/* binding */ Line)
/* harmony export */ });
var Line = /** @class */ (function () {
    function Line(pt1, pt2) {
        this.pt1 = pt1.copy();
        this.pt2 = pt2.copy();
    }
    Line.prototype.setPt1 = function (pt) {
        this.pt1 = pt.copy();
    };
    Line.prototype.setPt2 = function (pt) {
        this.pt2 = pt.copy();
    };
    Line.prototype.getPt1 = function () {
        return this.pt1;
    };
    Line.prototype.getPt2 = function () {
        return this.pt2;
    };
    Line.prototype.copy = function () {
        var result = new Line(this.pt1, this.pt2);
        return result;
    };
    Line.prototype.draw = function (canvas) {
        var context = canvas.getContext("2d");
        if (context === null) {
            throw new Error("context is null");
        }
        context.moveTo(this.pt1.getX(), this.pt1.getY());
        context.lineTo(this.pt2.getX(), this.pt2.getY());
        context.stroke();
        return this;
    };
    Line.prototype.moveOffset = function (dx, dy) {
        this.pt1.moveOffset(dx, dy);
        this.pt2.moveOffset(dx, dy);
        return this;
    };
    return Line;
}());



/***/ }),

/***/ "./src/prototype/point.ts":
/*!********************************!*\
  !*** ./src/prototype/point.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Point: () => (/* binding */ Point)
/* harmony export */ });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (v) {
        this.x = v;
    };
    Point.prototype.setY = function (v) {
        this.y = v;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.copy = function () {
        var result = new Point(this.x, this.y);
        return result;
    };
    Point.prototype.draw = function (canvas) {
        var context = canvas.getContext("2d");
        if (context === null) {
            throw new Error("context is null");
        }
        context.beginPath();
        context.arc(this.x, this.y, 4, 0, 2 * Math.PI);
        context.fill();
        return this;
    };
    Point.prototype.moveOffset = function (dx, dy) {
        this.x += dx;
        this.y += dy;
        return this;
    };
    return Point;
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
  !*** ./src/prototype/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./src/prototype/point.ts");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ "./src/prototype/line.ts");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group */ "./src/prototype/group.ts");



console.log("prototype");
var domCanvas = document.querySelector("canvas");
var pt1 = new _point__WEBPACK_IMPORTED_MODULE_0__.Point(100, 100);
var pt2 = new _point__WEBPACK_IMPORTED_MODULE_0__.Point(200, 100);
var line1 = new _line__WEBPACK_IMPORTED_MODULE_1__.Line(pt1, pt2);
line1.draw(domCanvas);
var pt3 = new _point__WEBPACK_IMPORTED_MODULE_0__.Point(200, 200);
var pt4 = new _point__WEBPACK_IMPORTED_MODULE_0__.Point(100, 200);
var line2 = new _line__WEBPACK_IMPORTED_MODULE_1__.Line(pt2, pt3);
var line3 = new _line__WEBPACK_IMPORTED_MODULE_1__.Line(pt3, pt4);
var line4 = new _line__WEBPACK_IMPORTED_MODULE_1__.Line(pt4, pt1);
var rect = new _group__WEBPACK_IMPORTED_MODULE_2__.Group();
rect.add(line1).add(line2).add(line3).add(line4);
rect.draw(domCanvas);
var rect2 = rect.copy();
rect2.moveOffset(100, 100);
rect2.draw(domCanvas);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXRCLElBQU0sR0FBRyxHQUFHLElBQUkseUNBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDaEMsSUFBTSxHQUFHLEdBQUcsSUFBSSx5Q0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUVoQyxJQUFNLEtBQUssR0FBRyxJQUFJLHVDQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksdUNBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSx1Q0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUVqQyxJQUFNLElBQUksR0FBRyxJQUFJLHlDQUFLLEVBQUUsQ0FBQztBQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFckIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzFCLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9wcm90b3R5cGUvZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvcHJvdG90eXBlL2xpbmUudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvcHJvdG90eXBlL3BvaW50LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvcHJvdG90eXBlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3RvdHlwZSB9IGZyb20gXCIuL3Byb3RvdHlwZVwiO1xuaW1wb3J0IHsgU2hhcGUgfSBmcm9tIFwiLi9zaGFwZVwiO1xuXG5leHBvcnQgY2xhc3MgR3JvdXAgaW1wbGVtZW50cyBQcm90b3R5cGUsIFNoYXBlIHtcbiAgcHJpdmF0ZSBzaGFwZXMgPSBuZXcgQXJyYXk8U2hhcGUgfCBQcm90b3R5cGU+KCk7XG5cbiAgYWRkKHNoYXBlOiBTaGFwZSB8IFByb3RvdHlwZSkge1xuICAgIHRoaXMuc2hhcGVzLnB1c2goKHNoYXBlIGFzIFByb3RvdHlwZSkuY29weSgpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvcHkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEdyb3VwKCk7XG4gICAgdGhpcy5zaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgIHJlc3VsdC5hZGQoc2hhcGUgYXMgUHJvdG90eXBlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0IGFzIHRoaXM7XG4gIH1cblxuICBkcmF3KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB0aGlzIHtcbiAgICB0aGlzLnNoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xuICAgICAgKHNoYXBlIGFzIFNoYXBlKS5kcmF3KGNhbnZhcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtb3ZlT2Zmc2V0KGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnNoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xuICAgICAgKHNoYXBlIGFzIFNoYXBlKS5tb3ZlT2Zmc2V0KGR4LCBkeSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNoYXBlIH0gZnJvbSBcIi4vc2hhcGVcIjtcbmltcG9ydCB7IFByb3RvdHlwZSB9IGZyb20gXCIuL3Byb3RvdHlwZVwiO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi9wb2ludFwiO1xuXG5leHBvcnQgY2xhc3MgTGluZSBpbXBsZW1lbnRzIFNoYXBlLCBQcm90b3R5cGUge1xuICBwcml2YXRlIHB0MTogUG9pbnQ7XG4gIHByaXZhdGUgcHQyOiBQb2ludDtcblxuICBjb25zdHJ1Y3RvcihwdDE6IFBvaW50LCBwdDI6IFBvaW50KSB7XG4gICAgdGhpcy5wdDEgPSBwdDEuY29weSgpO1xuICAgIHRoaXMucHQyID0gcHQyLmNvcHkoKTtcbiAgfVxuXG4gIHNldFB0MShwdDogUG9pbnQpIHtcbiAgICB0aGlzLnB0MSA9IHB0LmNvcHkoKTtcbiAgfVxuXG4gIHNldFB0MihwdDogUG9pbnQpIHtcbiAgICB0aGlzLnB0MiA9IHB0LmNvcHkoKTtcbiAgfVxuXG4gIGdldFB0MSgpIHtcbiAgICByZXR1cm4gdGhpcy5wdDE7XG4gIH1cblxuICBnZXRQdDIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHQyO1xuICB9XG5cbiAgY29weSgpOiB0aGlzIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTGluZSh0aGlzLnB0MSwgdGhpcy5wdDIpO1xuICAgIHJldHVybiByZXN1bHQgYXMgdGhpcztcbiAgfVxuXG4gIGRyYXcoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHRoaXMge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgaWYgKGNvbnRleHQgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNvbnRleHQgaXMgbnVsbFwiKTtcbiAgICB9XG5cbiAgICBjb250ZXh0Lm1vdmVUbyh0aGlzLnB0MS5nZXRYKCksIHRoaXMucHQxLmdldFkoKSk7XG4gICAgY29udGV4dC5saW5lVG8odGhpcy5wdDIuZ2V0WCgpLCB0aGlzLnB0Mi5nZXRZKCkpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1vdmVPZmZzZXQoZHg6IG51bWJlciwgZHk6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMucHQxLm1vdmVPZmZzZXQoZHgsIGR5KTtcbiAgICB0aGlzLnB0Mi5tb3ZlT2Zmc2V0KGR4LCBkeSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgUHJvdG90eXBlIH0gZnJvbSBcIi4vcHJvdG90eXBlXCI7XG5pbXBvcnQgeyBTaGFwZSB9IGZyb20gXCIuL3NoYXBlXCI7XG5cbmV4cG9ydCBjbGFzcyBQb2ludCBpbXBsZW1lbnRzIFByb3RvdHlwZSwgU2hhcGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHg6IG51bWJlciwgcHJpdmF0ZSB5OiBudW1iZXIpIHt9XG5cbiAgc2V0WCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLnggPSB2O1xuICB9XG5cbiAgc2V0WSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLnkgPSB2O1xuICB9XG5cbiAgZ2V0WCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLng7XG4gIH1cblxuICBnZXRZKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMueTtcbiAgfVxuXG4gIGNvcHkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcbiAgICByZXR1cm4gcmVzdWx0IGFzIHRoaXM7XG4gIH1cblxuICBkcmF3KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB0aGlzIHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGlmIChjb250ZXh0ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb250ZXh0IGlzIG51bGxcIik7XG4gICAgfVxuXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyh0aGlzLngsIHRoaXMueSwgNCwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtb3ZlT2Zmc2V0KGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnggKz0gZHg7XG4gICAgdGhpcy55ICs9IGR5O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi9wb2ludFwiO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gXCIuL2xpbmVcIjtcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcIi4vZ3JvdXBcIjtcblxuY29uc29sZS5sb2coXCJwcm90b3R5cGVcIik7XG5cbmNvbnN0IGRvbUNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbmNvbnN0IHB0MSA9IG5ldyBQb2ludCgxMDAsIDEwMCk7XG5cbmNvbnN0IHB0MiA9IG5ldyBQb2ludCgyMDAsIDEwMCk7XG5cbmNvbnN0IGxpbmUxID0gbmV3IExpbmUocHQxLCBwdDIpO1xubGluZTEuZHJhdyhkb21DYW52YXMpO1xuXG5jb25zdCBwdDMgPSBuZXcgUG9pbnQoMjAwLCAyMDApO1xuY29uc3QgcHQ0ID0gbmV3IFBvaW50KDEwMCwgMjAwKTtcblxuY29uc3QgbGluZTIgPSBuZXcgTGluZShwdDIsIHB0Myk7XG5jb25zdCBsaW5lMyA9IG5ldyBMaW5lKHB0MywgcHQ0KTtcbmNvbnN0IGxpbmU0ID0gbmV3IExpbmUocHQ0LCBwdDEpO1xuXG5jb25zdCByZWN0ID0gbmV3IEdyb3VwKCk7XG5yZWN0LmFkZChsaW5lMSkuYWRkKGxpbmUyKS5hZGQobGluZTMpLmFkZChsaW5lNCk7XG5yZWN0LmRyYXcoZG9tQ2FudmFzKTtcblxuY29uc3QgcmVjdDIgPSByZWN0LmNvcHkoKTtcbnJlY3QyLm1vdmVPZmZzZXQoMTAwLCAxMDApO1xucmVjdDIuZHJhdyhkb21DYW52YXMpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==