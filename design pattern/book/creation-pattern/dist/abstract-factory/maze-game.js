"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MazeGame = void 0;
const direction_1 = require("../direction");
class MazeGame {
    createMaze(factory) {
        const maze = factory.makeMaze();
        const room1 = factory.makeRoom(1);
        const room2 = factory.makeRoom(2);
        const door = factory.makeDoor(room1, room2);
        maze.addRoom(room1);
        maze.addRoom(room2);
        room1.setSide(direction_1.Direction.North, factory.makeWall());
        room1.setSide(direction_1.Direction.East, door);
        room1.setSide(direction_1.Direction.South, factory.makeWall());
        room1.setSide(direction_1.Direction.West, factory.makeWall());
        room2.setSide(direction_1.Direction.North, factory.makeWall());
        room2.setSide(direction_1.Direction.East, factory.makeWall());
        room2.setSide(direction_1.Direction.South, factory.makeWall());
        room2.setSide(direction_1.Direction.West, door);
        return maze;
    }
}
exports.MazeGame = MazeGame;
//# sourceMappingURL=maze-game.js.map