import { SumStrategy } from "./sum-strategy";

export class SumPrinter {
    print(n : number, strategy : SumStrategy, domOutput : Element) {
        const value = strategy.get(n);

        domOutput.innerHTML = `The sum of 1 to ${n} is ${value}`;
    }
}