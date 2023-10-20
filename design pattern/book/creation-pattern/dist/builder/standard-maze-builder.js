"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardMazeBuilder = void 0;
const maze_builder_1 = require("./maze-builder");
const maze_1 = require("../maze");
const room_1 = require("../room");
const direction_1 = require("../direction");
const wall_1 = require("../wall");
const door_1 = require("../door");
class StandardMazeBuilder extends maze_builder_1.MazeBuilder {
    constructor() {
        super(...arguments);
        this._currentMaze = null;
    }
    buildDoor(roomNumber1, roomNumber2) {
        var _a, _b;
        const room1 = (_a = this._currentMaze) === null || _a === void 0 ? void 0 : _a.roomNo(roomNumber1);
        const room2 = (_b = this._currentMaze) === null || _b === void 0 ? void 0 : _b.roomNo(roomNumber2);
        if (room1 && room2) {
            const door = new door_1.Door(room1, room2);
            room1.setSide(this.commonWall(room1, room2), door);
            room2.setSide(this.commonWall(room2, room1), door);
        }
    }
    buildMaze() {
        this._currentMaze = new maze_1.Maze();
    }
    buildRoom(roomNumber) {
        var _a, _b;
        if (!((_a = this._currentMaze) === null || _a === void 0 ? void 0 : _a.roomNo(roomNumber))) {
            const newRoom = new room_1.Room(roomNumber);
            newRoom.setSide(direction_1.Direction.North, new wall_1.Wall());
            newRoom.setSide(direction_1.Direction.South, new wall_1.Wall());
            newRoom.setSide(direction_1.Direction.East, new wall_1.Wall());
            newRoom.setSide(direction_1.Direction.West, new wall_1.Wall());
            (_b = this._currentMaze) === null || _b === void 0 ? void 0 : _b.addRoom(newRoom);
        }
    }
    commonWall(room1, room2) {
        if (room1.getRoomNumber() === room2.getRoomNumber()) {
            throw new Error("Rooms are the same");
        }
        if (room1.getRoomNumber() < room2.getRoomNumber()) {
            return direction_1.Direction.East;
        }
        return direction_1.Direction.West;
    }
    getMaze() {
        if (this._currentMaze === null) {
            throw new Error("Maze not built");
        }
        return this._currentMaze;
    }
}
exports.StandardMazeBuilder = StandardMazeBuilder;
//# sourceMappingURL=standard-maze-builder.js.map