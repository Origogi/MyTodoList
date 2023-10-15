import { Direction } from "./direction";
import { MapSite } from "./map-site";

abstract class Room extends MapSite {
    private _roomNumber: number;
    private _sides: MapSite[];

    constructor(roomNumber: number) {
        super();
        this._roomNumber = roomNumber;
        this._sides = new Array<MapSite>(4);
    }

    public getRoomNumber(): number {
        return this._roomNumber;
    }

    public setSide(direction: Direction, mapSite: MapSite): void {
        this._sides[direction] = mapSite;
    }

    public getSide(direction: Direction): MapSite {
        return this._sides[direction];
    }

    public enter(): void {
        console.log("You have entered room " + this._roomNumber);
    }
}