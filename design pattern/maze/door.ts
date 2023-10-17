import { MapSite } from "./map-site";
import { Room } from "./room";

export class Door extends MapSite {
  constructor(
    private _room1: Room,
    private _room2: Room,
    private _isOpen: boolean = false
  ) {
    super();
  }

  enter(): void {}

  otherSideFrom(room: Room): Room {
    return room === this._room1 ? this._room2 : this._room1;
  }
}
