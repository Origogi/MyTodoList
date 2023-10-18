import { MazeFactory } from "./maze-factory";
import { Direction } from "../direction";
import { Maze } from "../maze";

export class MazeGame {
  createMaze(factory: MazeFactory) : Maze {
    const maze = factory.makeMaze();

    const room1 = factory.makeRoom(1);
    const room2 = factory.makeRoom(2);
    const door = factory.makeDoor(room1, room2);

    maze.addRoom(room1);
    maze.addRoom(room2);

    room1.setSide(Direction.North, factory.makeWall());
    room1.setSide(Direction.East, door);
    room1.setSide(Direction.South, factory.makeWall());
    room1.setSide(Direction.West, factory.makeWall());

    room2.setSide(Direction.North, factory.makeWall());
    room2.setSide(Direction.East, factory.makeWall());
    room2.setSide(Direction.South, factory.makeWall());
    room2.setSide(Direction.West, door);

    return maze;
  }
}