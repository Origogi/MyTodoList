import { LoopSumStrategy } from "./loop-sum-strategy";
import { SumPrinter } from "./sum-printer";
import { GaussSumStrategy } from "./gauss-sum-strategy";

console.log('Strategy Pattern!!');
const printer = new SumPrinter();

const dom1 = document.createElement('h1');
document.body.appendChild(dom1);

const dom2 = document.createElement('h1');
document.body.appendChild(dom2);

printer.print(100, new LoopSumStrategy(), dom1);
printer.print(200, new GaussSumStrategy(), dom2);