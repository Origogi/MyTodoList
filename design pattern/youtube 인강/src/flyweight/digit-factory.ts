import { Digit } from "./digit";

export class DigitFactory {
  private pool: Array<Digit | null> = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  getDigit(n : number) {
    if (!this.pool[n]) {
      this.pool[n] = new Digit(`./data/${n}.json`);
    }

    return this.pool[n];
  }

}
