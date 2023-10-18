"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BombedMazeFactory = void 0;
const maze_factory_1 = require("./maze-factory");
const door_1 = require("../door");
const maze_1 = require("../maze");
const bombed_wall_1 = require("../bombed-wall");
const bombed_room_1 = require("../bombed-room");
class BombedMazeFactory extends maze_factory_1.MazeFactory {
    makeDoor(room1, room2) {
        return new door_1.Door(room1, room2);
    }
    makeMaze() {
        return new maze_1.Maze();
    }
    makeRoom(roomNumber) {
        return new bombed_room_1.BombedRoom(roomNumber, true);
    }
    makeWall() {
        return new bombed_wall_1.BombedWall();
    }
}
exports.BombedMazeFactory = BombedMazeFactory;
//# sourceMappingURL=bombed-maze-factory.js.map