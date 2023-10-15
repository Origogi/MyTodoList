import { ProtocolHandler } from "./protocol-handler";
import { PortHandler } from "./port-handler";
import { DomainHandler } from "./domain-handler";

console.log("chain-of-responsiblity");

const handler1 = new ProtocolHandler();
const handler2 = new PortHandler();
const handler3 = new DomainHandler();

handler1.setNextHandler(handler2).setNextHandler(handler3);

const domInput = document.querySelector("#url") as HTMLInputElement
const domBtn = document.querySelector("#btn") as HTMLButtonElement;

domBtn.addEventListener("click", () => {
   const url = domInput.value;
   handler1.run(url);
});