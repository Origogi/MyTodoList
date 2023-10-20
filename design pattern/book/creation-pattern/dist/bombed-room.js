"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BombedRoom = void 0;
const room_1 = require("./room");
class BombedRoom extends room_1.Room {
    constructor(roomNumber, _bomb) {
        super(roomNumber);
        this._bomb = _bomb;
    }
    enter() {
        console.log("You have entered room " + this.getRoomNumber() + " and it's bombed");
    }
}
exports.BombedRoom = BombedRoom;
//# sourceMappingURL=bombed-room.js.map