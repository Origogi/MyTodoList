"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const maze_game_1 = require("./abstract-factory/maze-game");
const enchanted_maze_factory_1 = require("./abstract-factory/enchanted-maze-factory");
console.log("Maze Game");
// const countingMazeBuilder = new CountingMazeBuilder();
// createMaze(countingMazeBuilder);
//
// console.log(countingMazeBuilder.getCounts());
// const mazeFactory = new BombedMazeFactory();
const mazeFactory = new enchanted_maze_factory_1.EnchantedMazeFactory();
const mazeGame = new maze_game_1.MazeGame();
const maze = mazeGame.createMaze(mazeFactory);
console.log(maze);
(_a = maze.roomNo(1)) === null || _a === void 0 ? void 0 : _a.enter();
//
// function createMaze(): Maze {
//   const maze = new Maze();
//
//   const r1 = new Room(1);
//   const r2 = new Room(2);
//
//   const theDoor = new Door(r1, r2);
//
//   maze.addRoom(r1);
//   maze.addRoom(r2);
//
//   r1.setSide(Direction.North, new Wall());
//   r1.setSide(Direction.East, theDoor);
//   r1.setSide(Direction.West, new Wall());
//   r1.setSide(Direction.South, new Wall());
//
//   r2.setSide(Direction.North, new Wall());
//   r2.setSide(Direction.East, new Wall());
//   r2.setSide(Direction.West, theDoor);
//   r2.setSide(Direction.South, new Wall());
//
//   return maze;
// }
//# sourceMappingURL=index.js.map