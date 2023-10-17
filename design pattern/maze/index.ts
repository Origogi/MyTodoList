import { Maze } from "./maze";
import { Room } from "./room";
import { Door } from "./door";
import { Wall } from "./wall";
import { Direction } from "./direction";

console.log("Maze Game");

function createMaze(): Maze {
  const maze = new Maze();

  const r1 = new Room(1);
  const r2 = new Room(2);

  const theDoor = new Door(r1, r2);

  maze.addRoom(r1);
  maze.addRoom(r2);

  r1.setSide(Direction.North, new Wall());
  r1.setSide(Direction.East, theDoor);
  r1.setSide(Direction.West, new Wall());
  r1.setSide(Direction.South, new Wall());

  r2.setSide(Direction.North, new Wall());
  r2.setSide(Direction.East, new Wall());
  r2.setSide(Direction.West, theDoor);
  r2.setSide(Direction.South, new Wall());

  return maze;
}
