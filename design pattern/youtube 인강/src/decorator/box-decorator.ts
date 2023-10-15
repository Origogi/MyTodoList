import { Decorator } from "./decorator";
import { Item } from "./item";

export class BoxDecorator extends Decorator {
  constructor(targetItem: Item) {
    super(targetItem);
  }

  getLength(index: number): number {
    return this.targetItem.getLength(index) + 2;
  }

  getLinesCount(): number {
    return this.targetItem.getLinesCount() + 2;
  }

  getMaxLength(): number {
    return this.targetItem.getMaxLength() + 2;
  }

  getString(index: number): string {
    if (index === 0 || index === this.getLinesCount() - 1) {
      return `+${"-".repeat(this.targetItem.getMaxLength())}+`;
    } else {
      return `<span>|</span>${this.targetItem.getString(index - 1)}${" ".repeat(
        this.getMaxLength() - this.getLength(index - 1)
      )}<span>|</span>`;
    }
  }
}
