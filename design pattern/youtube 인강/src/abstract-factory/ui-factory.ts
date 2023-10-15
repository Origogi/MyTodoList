import { Button } from "./button";
import { TextEdit } from "./text-edit";
import { Checkbox } from "./check-box";

export abstract class UiFactory {
  abstract createCheckBox(
    dom: HTMLElement,
    label: string,
    checked: boolean
  ): Checkbox;

  abstract createButton(dom: HTMLElement, caption: string): Button;

  abstract createTextEdit(dom: HTMLElement, text: string): TextEdit;
}
