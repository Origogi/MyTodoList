"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnchantedRoom = void 0;
const room_1 = require("./room");
class EnchantedRoom extends room_1.Room {
    constructor(roomNumber, _spell) {
        super(roomNumber);
        this._spell = _spell;
    }
    enter() {
        console.log("You have entered room " + this.getRoomNumber() + " and it's enchanted");
    }
}
exports.EnchantedRoom = EnchantedRoom;
//# sourceMappingURL=enchanted-room.js.map