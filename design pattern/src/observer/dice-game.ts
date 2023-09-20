import { Player } from "./player";

export abstract class DiceGame {
  protected _players: Player[] = [];

  addPlayer(player: Player): void {
    this._players.push(player);
  }

  abstract play(): number;
}
