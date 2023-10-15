import { Player } from "./player";

export abstract class State {
  protected constructor(protected player: Player) {}

  abstract standUp(): void;

  abstract sitDown(): void;

  abstract walk(): void;

  abstract run(): void;

  abstract getDescription(): string;
}
