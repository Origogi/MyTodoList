import { Player } from "./player";

export class NBettingPlayer extends Player {
  constructor(name: string, private winningNumbers: number[]) {
    super(name);
  }

  update(diceNumber: number): void {
    this._winning = this.winningNumbers.includes(diceNumber);
  }
}
