import { TextEdit } from "./text-edit";

export class ThreeDTextEdit extends TextEdit {
    constructor(dom : HTMLElement, text : string) {
        super(dom, text);
        this.render();
    }

    render() {
        this.dom.innerHTML = `
            <input value="${this.text}">`;
        this.dom.classList.add("threeD-input");
    }
}