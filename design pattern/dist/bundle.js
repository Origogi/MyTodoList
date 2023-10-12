/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/interpreter/action-command-expression.ts":
/*!******************************************************!*\
  !*** ./src/interpreter/action-command-expression.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionCommandExpression: () => (/* binding */ ActionCommandExpression)
/* harmony export */ });
/* harmony import */ var _command_expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command-expression */ "./src/interpreter/command-expression.ts");
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

var ActionCommandExpression = /** @class */ (function (_super) {
    __extends(ActionCommandExpression, _super);
    function ActionCommandExpression(keyword) {
        return _super.call(this, keyword) || this;
    }
    ActionCommandExpression.prototype.getDescription = function () {
        return this.keyword;
    };
    ActionCommandExpression.prototype.parse = function (context) {
        if (!ActionCommandExpression.checkValidKeyword(context.getCurrentKeyword())) {
            return false;
        }
        return context.readNextKeyword() !== null;
    };
    ActionCommandExpression.prototype.run = function () {
        console.log("CMD ".concat(this.keyword));
        return true;
    };
    ActionCommandExpression.checkValidKeyword = function (keyword) {
        return ["FRONT", "BACK", "LEFT", "RIGHT"].includes(keyword !== null && keyword !== void 0 ? keyword : "");
    };
    return ActionCommandExpression;
}(_command_expression__WEBPACK_IMPORTED_MODULE_0__.CommandExpression));



/***/ }),

/***/ "./src/interpreter/begin-expression.ts":
/*!*********************************************!*\
  !*** ./src/interpreter/begin-expression.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BeginExpression: () => (/* binding */ BeginExpression)
/* harmony export */ });
/* harmony import */ var _command_list_expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command-list-expression */ "./src/interpreter/command-list-expression.ts");

var BeginExpression = /** @class */ (function () {
    function BeginExpression() {
        this.expression = new _command_list_expression__WEBPACK_IMPORTED_MODULE_0__.CommandListExpression();
    }
    BeginExpression.prototype.getDescription = function () {
        return "BEGIN ".concat(this.expression.getDescription());
    };
    BeginExpression.prototype.parse = function (context) {
        if (BeginExpression.checkValidKeyword(context.getCurrentKeyword())) {
            context.readNextKeyword();
            this.expression = new _command_list_expression__WEBPACK_IMPORTED_MODULE_0__.CommandListExpression();
            return this.expression.parse(context);
        }
        else {
            return false;
        }
    };
    BeginExpression.prototype.run = function () {
        return this.expression.run();
    };
    BeginExpression.checkValidKeyword = function (keyword) {
        return keyword === "BEGIN";
    };
    return BeginExpression;
}());



/***/ }),

/***/ "./src/interpreter/command-expression.ts":
/*!***********************************************!*\
  !*** ./src/interpreter/command-expression.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommandExpression: () => (/* binding */ CommandExpression)
/* harmony export */ });
var CommandExpression = /** @class */ (function () {
    function CommandExpression(keyword) {
        this.keyword = keyword;
    }
    return CommandExpression;
}());



/***/ }),

/***/ "./src/interpreter/command-list-expression.ts":
/*!****************************************************!*\
  !*** ./src/interpreter/command-list-expression.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommandListExpression: () => (/* binding */ CommandListExpression)
/* harmony export */ });
/* harmony import */ var _loop_command_expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loop-command-expression */ "./src/interpreter/loop-command-expression.ts");
/* harmony import */ var _action_command_expression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-command-expression */ "./src/interpreter/action-command-expression.ts");


var CommandListExpression = /** @class */ (function () {
    function CommandListExpression() {
        this.commands = new Array();
    }
    CommandListExpression.prototype.getDescription = function () {
        return "{ ".concat(this.commands
            .map(function (command) { return command.getDescription(); })
            .join(" "), " }");
    };
    CommandListExpression.prototype.parse = function (context) {
        while (true) {
            var currentKeyword = context.getCurrentKeyword();
            if (currentKeyword === null) {
                return false;
            }
            else if (currentKeyword === "END") {
                context.readNextKeyword();
                break;
            }
            else {
                var command = null;
                if (_loop_command_expression__WEBPACK_IMPORTED_MODULE_0__.LoopCommandExpression.checkValidKeyword(currentKeyword)) {
                    command = new _loop_command_expression__WEBPACK_IMPORTED_MODULE_0__.LoopCommandExpression(currentKeyword);
                }
                else if (_action_command_expression__WEBPACK_IMPORTED_MODULE_1__.ActionCommandExpression.checkValidKeyword(currentKeyword)) {
                    command = new _action_command_expression__WEBPACK_IMPORTED_MODULE_1__.ActionCommandExpression(currentKeyword);
                }
                if (command !== null) {
                    if (command.parse(context)) {
                        this.commands.push(command);
                    }
                    else {
                        console.log(command);
                        console.log("parse error 1");
                        return false;
                    }
                }
                else {
                    console.log("parse error 2");
                    return false;
                }
            }
        }
        return true;
    };
    CommandListExpression.prototype.run = function () {
        for (var i = 0; i < this.commands.length; i++) {
            var isOk = this.commands[i].run();
            if (!isOk) {
                return false;
            }
        }
        return true;
    };
    return CommandListExpression;
}());



/***/ }),

/***/ "./src/interpreter/context.ts":
/*!************************************!*\
  !*** ./src/interpreter/context.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* binding */ Context)
/* harmony export */ });
var Context = /** @class */ (function () {
    function Context(script) {
        this.keywords = script.split(" ");
        this.currentIndex = 0;
    }
    Context.prototype.readNextKeyword = function () {
        this.currentIndex++;
        return this.getCurrentKeyword();
    };
    Context.prototype.getCurrentKeyword = function () {
        if (this.keywords.length > this.currentIndex) {
            return this.keywords[this.currentIndex];
        }
        else {
            return null;
        }
    };
    return Context;
}());



/***/ }),

/***/ "./src/interpreter/loop-command-expression.ts":
/*!****************************************************!*\
  !*** ./src/interpreter/loop-command-expression.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoopCommandExpression: () => (/* binding */ LoopCommandExpression)
/* harmony export */ });
/* harmony import */ var _command_expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command-expression */ "./src/interpreter/command-expression.ts");
/* harmony import */ var _command_list_expression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./command-list-expression */ "./src/interpreter/command-list-expression.ts");
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


var LoopCommandExpression = /** @class */ (function (_super) {
    __extends(LoopCommandExpression, _super);
    function LoopCommandExpression(keyword) {
        var _this = _super.call(this, keyword) || this;
        _this.loopCount = 0;
        _this.expression = new _command_list_expression__WEBPACK_IMPORTED_MODULE_1__.CommandListExpression();
        return _this;
    }
    LoopCommandExpression.prototype.getDescription = function () {
        return "LOOP(".concat(this.loopCount, ") ").concat(this.expression.getDescription());
    };
    LoopCommandExpression.prototype.parse = function (context) {
        if (!LoopCommandExpression.checkValidKeyword(context.getCurrentKeyword())) {
            return false;
        }
        var countKeyword = context.readNextKeyword();
        if (countKeyword === null) {
            return false;
        }
        var count = parseInt(countKeyword);
        if (isNaN(count)) {
            return false;
        }
        this.loopCount = count;
        this.expression = new _command_list_expression__WEBPACK_IMPORTED_MODULE_1__.CommandListExpression();
        if (!context.readNextKeyword()) {
            return false;
        }
        return this.expression.parse(context);
    };
    LoopCommandExpression.prototype.run = function () {
        for (var i = 0; i < this.loopCount; i++) {
            if (!this.expression.run()) {
                return false;
            }
        }
        return true;
    };
    LoopCommandExpression.checkValidKeyword = function (keyword) {
        return keyword === "LOOP";
    };
    return LoopCommandExpression;
}(_command_expression__WEBPACK_IMPORTED_MODULE_0__.CommandExpression));



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
/*!**********************************!*\
  !*** ./src/interpreter/index.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/interpreter/context.ts");
/* harmony import */ var _begin_expression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./begin-expression */ "./src/interpreter/begin-expression.ts");


console.log("Interpreter");
var script = "BEGIN FRONT LOOP 3 LOOP 2 RIGHT FRONT END LOOP 3 LEFT END BACK RIGHT END BACK END";
var context = new _context__WEBPACK_IMPORTED_MODULE_0__.Context(script);
var expression = new _begin_expression__WEBPACK_IMPORTED_MODULE_1__.BeginExpression();
if (expression.parse(context)) {
    console.log(expression.getDescription());
    expression.run();
}
else {
    console.log("ERROR");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNpQjtBQUVyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRTNCLElBQU0sTUFBTSxHQUNOLG1GQUFtRixDQUFDO0FBRTFGLElBQU0sT0FBTyxHQUFHLElBQUksNkNBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVwQyxJQUFNLFVBQVUsR0FBRyxJQUFJLDhEQUFlLEVBQUUsQ0FBQztBQUV6QyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN2QyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7Q0FDcEI7S0FBTTtJQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9pbnRlcnByZXRlci9hY3Rpb24tY29tbWFuZC1leHByZXNzaW9uLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2ludGVycHJldGVyL2JlZ2luLWV4cHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvaW50ZXJwcmV0ZXIvY29tbWFuZC1leHByZXNzaW9uLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2ludGVycHJldGVyL2NvbW1hbmQtbGlzdC1leHByZXNzaW9uLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2ludGVycHJldGVyL2NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvaW50ZXJwcmV0ZXIvbG9vcC1jb21tYW5kLWV4cHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9pbnRlcnByZXRlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kRXhwcmVzc2lvbiB9IGZyb20gXCIuL2NvbW1hbmQtZXhwcmVzc2lvblwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRcIjtcblxuZXhwb3J0IGNsYXNzIEFjdGlvbkNvbW1hbmRFeHByZXNzaW9uIGV4dGVuZHMgQ29tbWFuZEV4cHJlc3Npb24ge1xuICAgIGNvbnN0cnVjdG9yKGtleXdvcmQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcihrZXl3b3JkKTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5rZXl3b3JkO1xuICAgIH1cblxuICAgIHBhcnNlKGNvbnRleHQ6IENvbnRleHQpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFBY3Rpb25Db21tYW5kRXhwcmVzc2lvbi5jaGVja1ZhbGlkS2V5d29yZChjb250ZXh0LmdldEN1cnJlbnRLZXl3b3JkKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29udGV4dC5yZWFkTmV4dEtleXdvcmQoKSAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBydW4oKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDTUQgJHt0aGlzLmtleXdvcmR9YCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBjaGVja1ZhbGlkS2V5d29yZChrZXl3b3JkOiBzdHJpbmcgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBbXCJGUk9OVFwiLCBcIkJBQ0tcIiwgXCJMRUZUXCIsIFwiUklHSFRcIl0uaW5jbHVkZXMoa2V5d29yZCA/PyBcIlwiKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gXCIuL2V4cHJlc3Npb25cIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBDb21tYW5kTGlzdEV4cHJlc3Npb24gfSBmcm9tIFwiLi9jb21tYW5kLWxpc3QtZXhwcmVzc2lvblwiO1xuXG5leHBvcnQgY2xhc3MgQmVnaW5FeHByZXNzaW9uIGltcGxlbWVudHMgRXhwcmVzc2lvbiB7XG4gIHByaXZhdGUgZXhwcmVzc2lvbjogQ29tbWFuZExpc3RFeHByZXNzaW9uID0gbmV3IENvbW1hbmRMaXN0RXhwcmVzc2lvbigpO1xuXG4gIGdldERlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBCRUdJTiAke3RoaXMuZXhwcmVzc2lvbi5nZXREZXNjcmlwdGlvbigpfWA7XG4gIH1cblxuICBwYXJzZShjb250ZXh0OiBDb250ZXh0KTogYm9vbGVhbiB7XG4gICAgaWYgKEJlZ2luRXhwcmVzc2lvbi5jaGVja1ZhbGlkS2V5d29yZChjb250ZXh0LmdldEN1cnJlbnRLZXl3b3JkKCkpKSB7XG4gICAgICBjb250ZXh0LnJlYWROZXh0S2V5d29yZCgpO1xuICAgICAgdGhpcy5leHByZXNzaW9uID0gbmV3IENvbW1hbmRMaXN0RXhwcmVzc2lvbigpO1xuICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbi5wYXJzZShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJ1bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uLnJ1bigpO1xuICB9XG5cbiAgc3RhdGljIGNoZWNrVmFsaWRLZXl3b3JkKGtleXdvcmQ6IHN0cmluZyB8IG51bGwpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5d29yZCA9PT0gXCJCRUdJTlwiO1xuICB9XG59XG4iLCJpbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSBcIi4vZXhwcmVzc2lvblwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbW1hbmRFeHByZXNzaW9uIGltcGxlbWVudHMgRXhwcmVzc2lvbiB7XG4gIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQga2V5d29yZDogc3RyaW5nKSB7fVxuXG4gIGFic3RyYWN0IHBhcnNlKGNvbnRleHQ6IENvbnRleHQpOiBib29sZWFuO1xuICBhYnN0cmFjdCBydW4oKTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgZ2V0RGVzY3JpcHRpb24oKTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gXCIuL2V4cHJlc3Npb25cIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBDb21tYW5kRXhwcmVzc2lvbiB9IGZyb20gXCIuL2NvbW1hbmQtZXhwcmVzc2lvblwiO1xuaW1wb3J0IHsgTG9vcENvbW1hbmRFeHByZXNzaW9uIH0gZnJvbSBcIi4vbG9vcC1jb21tYW5kLWV4cHJlc3Npb25cIjtcbmltcG9ydCB7IEFjdGlvbkNvbW1hbmRFeHByZXNzaW9uIH0gZnJvbSBcIi4vYWN0aW9uLWNvbW1hbmQtZXhwcmVzc2lvblwiO1xuXG5leHBvcnQgY2xhc3MgQ29tbWFuZExpc3RFeHByZXNzaW9uIGltcGxlbWVudHMgRXhwcmVzc2lvbiB7XG4gIHByaXZhdGUgY29tbWFuZHMgPSBuZXcgQXJyYXk8Q29tbWFuZEV4cHJlc3Npb24+KCk7XG5cbiAgZ2V0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYHsgJHt0aGlzLmNvbW1hbmRzXG4gICAgICAubWFwKChjb21tYW5kKSA9PiBjb21tYW5kLmdldERlc2NyaXB0aW9uKCkpXG4gICAgICAuam9pbihcIiBcIil9IH1gO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dDogQ29udGV4dCk6IGJvb2xlYW4ge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb25zdCBjdXJyZW50S2V5d29yZCA9IGNvbnRleHQuZ2V0Q3VycmVudEtleXdvcmQoKTtcblxuICAgICAgaWYgKGN1cnJlbnRLZXl3b3JkID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudEtleXdvcmQgPT09IFwiRU5EXCIpIHtcbiAgICAgICAgY29udGV4dC5yZWFkTmV4dEtleXdvcmQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY29tbWFuZDogQ29tbWFuZEV4cHJlc3Npb24gfCBudWxsID0gbnVsbDtcblxuICAgICAgICBpZiAoTG9vcENvbW1hbmRFeHByZXNzaW9uLmNoZWNrVmFsaWRLZXl3b3JkKGN1cnJlbnRLZXl3b3JkKSkge1xuICAgICAgICAgIGNvbW1hbmQgPSBuZXcgTG9vcENvbW1hbmRFeHByZXNzaW9uKGN1cnJlbnRLZXl3b3JkKTtcbiAgICAgICAgfSBlbHNlIGlmIChBY3Rpb25Db21tYW5kRXhwcmVzc2lvbi5jaGVja1ZhbGlkS2V5d29yZChjdXJyZW50S2V5d29yZCkpIHtcbiAgICAgICAgICBjb21tYW5kID0gbmV3IEFjdGlvbkNvbW1hbmRFeHByZXNzaW9uKGN1cnJlbnRLZXl3b3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21tYW5kICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGNvbW1hbmQucGFyc2UoY29udGV4dCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMucHVzaChjb21tYW5kKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29tbWFuZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBhcnNlIGVycm9yIDFcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFyc2UgZXJyb3IgMlwiKTtcblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcnVuKCk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb21tYW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXNPayA9IHRoaXMuY29tbWFuZHNbaV0ucnVuKCk7XG5cbiAgICAgIGlmICghaXNPaykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29udGV4dCB7XG4gIHByaXZhdGUgcmVhZG9ubHkga2V5d29yZHM6IHN0cmluZ1tdO1xuICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHNjcmlwdDogc3RyaW5nKSB7XG4gICAgdGhpcy5rZXl3b3JkcyA9IHNjcmlwdC5zcGxpdChcIiBcIik7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICB9XG5cbiAgcmVhZE5leHRLZXl3b3JkKCkge1xuICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudEtleXdvcmQoKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRLZXl3b3JkKCkge1xuICAgIGlmICh0aGlzLmtleXdvcmRzLmxlbmd0aCA+IHRoaXMuY3VycmVudEluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5rZXl3b3Jkc1t0aGlzLmN1cnJlbnRJbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbWFuZEV4cHJlc3Npb24gfSBmcm9tIFwiLi9jb21tYW5kLWV4cHJlc3Npb25cIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBDb21tYW5kTGlzdEV4cHJlc3Npb24gfSBmcm9tIFwiLi9jb21tYW5kLWxpc3QtZXhwcmVzc2lvblwiO1xuXG5leHBvcnQgY2xhc3MgTG9vcENvbW1hbmRFeHByZXNzaW9uIGV4dGVuZHMgQ29tbWFuZEV4cHJlc3Npb24ge1xuICBwcml2YXRlIGxvb3BDb3VudDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBleHByZXNzaW9uOiBDb21tYW5kTGlzdEV4cHJlc3Npb24gPSBuZXcgQ29tbWFuZExpc3RFeHByZXNzaW9uKCk7XG5cbiAgY29uc3RydWN0b3Ioa2V5d29yZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoa2V5d29yZCk7XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgTE9PUCgke3RoaXMubG9vcENvdW50fSkgJHt0aGlzLmV4cHJlc3Npb24uZ2V0RGVzY3JpcHRpb24oKX1gO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dDogQ29udGV4dCk6IGJvb2xlYW4ge1xuICAgIGlmICghTG9vcENvbW1hbmRFeHByZXNzaW9uLmNoZWNrVmFsaWRLZXl3b3JkKGNvbnRleHQuZ2V0Q3VycmVudEtleXdvcmQoKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgY291bnRLZXl3b3JkID0gY29udGV4dC5yZWFkTmV4dEtleXdvcmQoKTtcblxuICAgIGlmIChjb3VudEtleXdvcmQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgY291bnQgPSBwYXJzZUludChjb3VudEtleXdvcmQpO1xuXG4gICAgaWYgKGlzTmFOKGNvdW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMubG9vcENvdW50ID0gY291bnQ7XG4gICAgdGhpcy5leHByZXNzaW9uID0gbmV3IENvbW1hbmRMaXN0RXhwcmVzc2lvbigpO1xuXG4gICAgaWYgKCFjb250ZXh0LnJlYWROZXh0S2V5d29yZCgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbi5wYXJzZShjb250ZXh0KTtcbiAgfVxuXG4gIHJ1bigpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG9vcENvdW50OyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5leHByZXNzaW9uLnJ1bigpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBjaGVja1ZhbGlkS2V5d29yZChrZXl3b3JkOiBzdHJpbmcgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGtleXdvcmQgPT09IFwiTE9PUFwiO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBCZWdpbkV4cHJlc3Npb24gfSBmcm9tIFwiLi9iZWdpbi1leHByZXNzaW9uXCI7XG5cbmNvbnNvbGUubG9nKFwiSW50ZXJwcmV0ZXJcIik7XG5cbmNvbnN0IHNjcmlwdFxuICAgID0gXCJCRUdJTiBGUk9OVCBMT09QIDMgTE9PUCAyIFJJR0hUIEZST05UIEVORCBMT09QIDMgTEVGVCBFTkQgQkFDSyBSSUdIVCBFTkQgQkFDSyBFTkRcIjtcblxuY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KHNjcmlwdCk7XG5cbmNvbnN0IGV4cHJlc3Npb24gPSBuZXcgQmVnaW5FeHByZXNzaW9uKCk7XG5cbmlmIChleHByZXNzaW9uLnBhcnNlKGNvbnRleHQpKSB7XG4gIGNvbnNvbGUubG9nKGV4cHJlc3Npb24uZ2V0RGVzY3JpcHRpb24oKSk7XG4gICAgZXhwcmVzc2lvbi5ydW4oKTtcbn0gZWxzZSB7XG4gIGNvbnNvbGUubG9nKFwiRVJST1JcIik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9