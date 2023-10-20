import { MazeBuilder } from "./maze-builder";
import { Maze } from "../maze";

export class CountingMazeBuilder extends MazeBuilder {
  private _doors: number = 0;
  private _rooms: number = 0;

  buildDoor(roomNumber1: number, roomNumber2: number): void {
    this._doors++;
  }

  buildMaze(): void {}

  buildRoom(roomNumber: number): void {
    this._rooms++;
  }

  getMaze(): Maze {
    return new Maze();
  }

  getCounts(): { doors: number; rooms: number } {
    return { doors: this._doors, rooms: this._rooms };
  }
}
