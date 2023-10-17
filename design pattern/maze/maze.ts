import { Room } from "./room";

export class Maze {
  private _rooms: Room[] = [];

  constructor() {}

  addRoom(room: Room): void {
    this._rooms.push(room);
  }

  roomNo(number: number): Room | undefined {
    return this._rooms.find((room) => room.getRoomNumber() === number);
  }
}
