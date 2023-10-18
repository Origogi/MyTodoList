import { MazeFactory } from "./maze-factory";
import { Door } from "../door";
import { Maze } from "../maze";
import { Room } from "../room";
import { Wall } from "../wall";
import { EnchantedRoom } from "../enchanted-room";
import { DoorNeedSpell } from "../door-need-spell";
import { Spell } from "../spell";

export class EnchantedMazeFactory extends MazeFactory {
  makeDoor(room1: Room, room2: Room): Door {
    return new DoorNeedSpell(room1, room2);
  }

  makeMaze(): Maze {
    return new Maze();
  }

  makeRoom(roomNumber: number): Room {
    return new EnchantedRoom(roomNumber, this.castSpell());
  }

  makeWall(): Wall {
    return new Wall();
  }

  private castSpell() {
    return new Spell();
  }
}
