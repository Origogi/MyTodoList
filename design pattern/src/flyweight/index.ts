import { DigitFactory } from "./digit-factory";
import { Number } from "./number";

console.log('flyweight!!');

const factory = new DigitFactory();

const domTarget = document.querySelector('#tmp');

let value = 21222;

setInterval(() => {
const number = new Number(factory, value);
    number.put(domTarget!);
    value++;
}, 500);