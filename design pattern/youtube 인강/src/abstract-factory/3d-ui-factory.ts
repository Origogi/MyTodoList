import { UiFactory } from "./ui-factory";
import { Button } from "./button";
import { TextEdit } from "./text-edit";
import { ThreeDButton } from "./3d-button";
import { ThreeDCheckbox } from "./3d-check-box";
import { ThreeDTextEdit } from "./3d-text-edit";

export class ThreeDUiFactory extends UiFactory {
  createButton(dom: HTMLElement, caption: string): Button {
    return new ThreeDButton(dom, caption);
  }

  createCheckBox(dom: HTMLElement, label: string, checked: boolean) {
    return new ThreeDCheckbox(dom, label, checked);
  }

  createTextEdit(dom: HTMLElement, text: string): TextEdit {
    return new ThreeDTextEdit(dom, text);
  }
}
