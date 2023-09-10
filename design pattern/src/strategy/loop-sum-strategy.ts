import { SumStrategy } from "./sum-strategy";

export class LoopSumStrategy implements SumStrategy {
  get(n : number) : number {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
}
