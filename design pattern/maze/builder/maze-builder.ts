import { Maze } from "../maze";

export abstract class MazeBuilder {
    abstract buildMaze(): void;
    abstract buildRoom(roomNumber: number): void;
    abstract buildDoor(roomNumber1: number, roomNumber2: number): void;
    abstract getMaze() : Maze;
}
