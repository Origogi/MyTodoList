import { SumStrategy } from "./sum-strategy";

export class GaussSumStrategy implements SumStrategy {
  get(n: number): number {
    return (n * (n + 1)) / 2;
  }
}
