import { Checkbox } from "./check-box";

export class ThreeDCheckbox extends Checkbox {
  constructor(dom: HTMLElement, label: string, checked: boolean) {
    super(dom, label, checked);
    this.render();
  }

  render(): void {
    this.dom.innerHTML = `
            <label>CheckBox
                <input type="checkbox" ${this.checked ? "checked" : ""}>
                <div class="box"></div>
                <div class="line"></div>
            </label>`;

    this.dom.classList.add("threeD-checkbox");
  }
}
