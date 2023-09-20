import { DiceGame } from "./dice-game";

export class FareDiceGame extends DiceGame {
  play(): number {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    this._players.forEach((player) => player.update(diceNumber));
    return diceNumber;
  }
}
