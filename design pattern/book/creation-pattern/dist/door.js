"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Door = void 0;
const map_site_1 = require("./map-site");
class Door extends map_site_1.MapSite {
    constructor(_room1, _room2, _isOpen = false) {
        super();
        this._room1 = _room1;
        this._room2 = _room2;
        this._isOpen = _isOpen;
    }
    enter() { }
    otherSideFrom(room) {
        return room === this._room1 ? this._room2 : this._room1;
    }
}
exports.Door = Door;
//# sourceMappingURL=door.js.map