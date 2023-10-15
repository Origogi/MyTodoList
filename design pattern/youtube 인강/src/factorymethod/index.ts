import { ItemFactory } from "./item-factory";
import { ItemType } from "./factory";

console.log("factory method!!");

const factory = new ItemFactory();

const docOutput = document.querySelector("textarea")!;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    const itemName = (event.target as HTMLButtonElement).innerText;

    const item = factory.create(itemName as ItemType);

    if (item) {
      docOutput.value += `\n${item.use()}`;
    } else {
      docOutput.value += `\n아이템 ${itemName}은(는) 더 이상 생성할 수 없습니다.`;
    }

    docOutput.scrollTop = docOutput.scrollHeight;
  })
);
