import { UiFactory } from "./ui-factory";
import { FlatUiFactory } from "./flat-ui-factory";
import { ThreeDUiFactory } from "./3d-ui-factory";

console.log("Abstract Factory");

let factory : UiFactory;

const flatMode = false;

factory = flatMode ? new FlatUiFactory() : new ThreeDUiFactory();

const domButton = document.querySelector(".button") as HTMLElement;
const domCheckbox = document.querySelector(".checkbox") as HTMLElement;
const domTextEdit = document.querySelector(".textedit") as HTMLElement;

factory.createButton(domButton, "Button");
factory.createCheckBox(domCheckbox, "Checkbox", true);
factory.createTextEdit(domTextEdit, "Design Pattern");