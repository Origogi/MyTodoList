import { Facade } from "./facade";

console.log("facade");

const facade = new Facade();

const domInput = document.querySelector("input");
const domButton = document.querySelector("button");
const domResult = document.querySelector(".result");

if (domButton && domInput && domResult) {
  domButton.addEventListener("click", () => {
    const name = domInput.value;

    facade.queryName(
      name,
      () => {
        domInput.value = "loading...";
        domButton.disabled = true;
      },
      () => {
        domInput.value = name;
        domButton.disabled = false;
      },
      domResult
    );
  });
}
