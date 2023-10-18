import { MazeFactory } from "./maze-factory";
import { Room } from "../room";
import { Door } from "../door";
import { Maze } from "../maze";
import { Wall } from "../wall";
import { BombedWall } from "../bombed-wall";
import { BombedRoom } from "../bombed-room";

export class BombedMazeFactory extends MazeFactory {
    makeDoor(room1: Room, room2: Room): Door {
        return new Door(room1, room2) ;
    }

    makeMaze(): Maze {
        return new Maze();
    }

    makeRoom(roomNumber: number): Room {
        return new BombedRoom(roomNumber, true);
    }

    makeWall(): Wall {
        return new BombedWall();
    }

}