"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountingMazeBuilder = void 0;
const maze_builder_1 = require("./maze-builder");
const maze_1 = require("../maze");
class CountingMazeBuilder extends maze_builder_1.MazeBuilder {
    constructor() {
        super(...arguments);
        this._doors = 0;
        this._rooms = 0;
    }
    buildDoor(roomNumber1, roomNumber2) {
        this._doors++;
    }
    buildMaze() {
    }
    buildRoom(roomNumber) {
        this._rooms++;
    }
    getMaze() {
        return new maze_1.Maze();
    }
    getCounts() {
        return { doors: this._doors, rooms: this._rooms };
    }
}
exports.CountingMazeBuilder = CountingMazeBuilder;
//# sourceMappingURL=counting-maze-builder.js.map