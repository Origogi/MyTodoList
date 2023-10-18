"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const map_site_1 = require("./map-site");
class Room extends map_site_1.MapSite {
    constructor(roomNumber) {
        super();
        this._roomNumber = roomNumber;
        this._sides = new Array(4);
    }
    getRoomNumber() {
        return this._roomNumber;
    }
    setSide(direction, mapSite) {
        this._sides[direction] = mapSite;
    }
    getSide(direction) {
        return this._sides[direction];
    }
    enter() {
        console.log("You have entered room " + this._roomNumber);
    }
}
exports.Room = Room;
//# sourceMappingURL=room.js.map