import { Maze } from "../maze";
import { Wall } from "../wall";
import { Room } from "../room";
import { Door } from "../door";

export abstract class MazeFactory {
    abstract makeMaze() : Maze;
    abstract makeWall() : Wall;
    abstract makeRoom(roomNumber: number) : Room;
    abstract makeDoor(room1: Room, room2: Room) : Door;
}