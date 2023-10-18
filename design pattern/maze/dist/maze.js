"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maze = void 0;
class Maze {
    constructor() {
        this._rooms = [];
    }
    addRoom(room) {
        this._rooms.push(room);
    }
    roomNo(number) {
        const room = this._rooms.find((room) => room.getRoomNumber() === number);
        if (room === undefined) {
            return null;
        }
        return room;
    }
}
exports.Maze = Maze;
//# sourceMappingURL=maze.js.map