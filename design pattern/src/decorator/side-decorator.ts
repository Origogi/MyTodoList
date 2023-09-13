import { Item } from "./item";
import { Decorator } from "./decorator";

export class SideDecorator extends Decorator {
  constructor(targetItem: Item, private ch: string) {
      super(targetItem);
  }

  getLength(index: number): number {
    return this.targetItem.getLength(index) + this.ch.length * 2;
  }

  getLinesCount(): number {
    return this.targetItem.getLinesCount();
  }

  getMaxLength(): number {
    return this.targetItem.getMaxLength() + this.ch.length * 2;
  }

  getString(index: number): string {
    return `<span>${this.ch}</span>${this.targetItem.getString(index)}<span>${
      this.ch
    }</span>`;
  }
}
