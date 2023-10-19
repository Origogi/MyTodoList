import { MazeFactory } from "../abstract-factory/maze-factory";
import { Maze } from "../maze";
import { Wall } from "../wall";
import { Room } from "../room";
import { Door } from "../door";

export class MazePrototypeFactory extends MazeFactory {
  constructor(
    private _prototypeMaze: Maze,
    private _prototypeWall: Wall,
    private _prototypeRoom: Room,
    private _prototypeDoor: Door
  ) {
    super();
  }

  makeDoor(room1: Room, room2: Room): Door {
    const door = this._prototypeDoor.clone();
    door.initialize(room1, room2);
    return door;
  }

  makeMaze(): Maze {
    return this._prototypeMaze.clone();
  }

  makeRoom(roomNumber: number): Room {
      return this._prototypeRoom.clone();
  }

  makeWall(): Wall {
    return this._prototypeWall.clone();
  }
}
