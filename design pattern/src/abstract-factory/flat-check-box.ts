import { Checkbox } from "./check-box";

export class FlatCheckbox extends Checkbox {
  constructor(dom: HTMLElement, label: string, checked: boolean) {
    super(dom, label, checked);
    this.render();
  }

  render(): void {
    this.dom.innerHTML = `
            <label>
                ${this.label}
                <input type="checkbox" ${this.checked ? "checked" : ""}>
                <span></span>
            </label>`;
    this.dom.classList.add("flat-checkbox");
  }
}
