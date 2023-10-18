import { MazeBuilder } from "./maze-builder";
import { Maze } from "../maze";
import { Room } from "../room";
import { Direction } from "../direction";
import { Wall } from "../wall";
import { Door } from "../door";

export class StandardMazeBuilder extends MazeBuilder {
  private _currentMaze: Maze | null = null;

  buildDoor(roomNumber1: number, roomNumber2: number): void {
    const room1 = this._currentMaze?.roomNo(roomNumber1);
    const room2 = this._currentMaze?.roomNo(roomNumber2);

    if (room1 && room2) {
      const door = new Door(room1, room2);
      room1.setSide(this.commonWall(room1, room2), door);
      room2.setSide(this.commonWall(room2, room1), door);
    }
  }

  buildMaze(): void {
    this._currentMaze = new Maze();
  }

  buildRoom(roomNumber: number): void {
    if (!this._currentMaze?.roomNo(roomNumber)) {
      const newRoom = new Room(roomNumber);
      newRoom.setSide(Direction.North, new Wall());
      newRoom.setSide(Direction.South, new Wall());
      newRoom.setSide(Direction.East, new Wall());
      newRoom.setSide(Direction.West, new Wall());
      this._currentMaze?.addRoom(newRoom);
    }
  }

  commonWall(room1: Room, room2: Room): Direction {
    if (room1.getRoomNumber() === room2.getRoomNumber()) {
      throw new Error("Rooms are the same");
    }

    if (room1.getRoomNumber() < room2.getRoomNumber()) {
      return Direction.East;
    }
    return Direction.West;
  }

  getMaze(): Maze {
    if (this._currentMaze === null) {
      throw new Error("Maze not built");
    }
    return this._currentMaze;
  }
}
