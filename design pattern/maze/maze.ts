import { Room } from "./room";

export class Maze {
  constructor(private _rooms: Room[] = []) {}

  addRoom(room: Room): void {
    this._rooms.push(room);
  }

  roomNo(number: number): Room | null {
    const room = this._rooms.find((room) => room.getRoomNumber() === number);

    if (room === undefined) {
      return null;
    }
    return room;
  }

  clone(): Maze {
    return new Maze(this._rooms);
  }
}
