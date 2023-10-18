import { Door } from "./door";
import { Room } from "./room";

export class DoorNeedSpell extends Door {
  constructor(room1: Room, room2: Room) {
    super(room1, room2);
  }
}
