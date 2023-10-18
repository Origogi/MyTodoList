import { Room } from "./room";

export class BombedRoom extends Room {
  constructor(roomNumber: number, private _bomb: boolean) {
    super(roomNumber);
  }

  enter() {
    console.log("You have entered room " + this.getRoomNumber() + " and it's bombed");
  }
}
