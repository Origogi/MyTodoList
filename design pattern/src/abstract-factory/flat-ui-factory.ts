import { UiFactory } from "./ui-factory";
import { Button } from "./button";
import { TextEdit } from "./text-edit";
import { FlatButton } from "./flat-button";
import { FlatCheckbox } from "./flat-check-box";
import { FlatTextEdit } from "./flat-text-edit";

export class FlatUiFactory extends UiFactory {
  createButton(dom: HTMLElement, caption: string): Button {
    return new FlatButton(dom, caption);
  }

  createCheckBox(dom: HTMLElement, label: string, checked: boolean) {
    return new FlatCheckbox(dom, label, checked);
  }

  createTextEdit(dom: HTMLElement, text: string): TextEdit {
    return new FlatTextEdit(dom, text);
  }
}
