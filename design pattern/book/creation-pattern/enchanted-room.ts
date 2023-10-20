import { Room } from "./room";
import { Spell } from "./spell";

export class EnchantedRoom extends Room {
  constructor(roomNumber: number, private _spell: Spell) {
    super(roomNumber);
  }

  enter() {
    console.log("You have entered room " + this.getRoomNumber() + " and it's enchanted");
  }
}
