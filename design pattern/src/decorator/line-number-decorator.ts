import { Item } from "./item";
import { Decorator } from "./decorator";

export class LineNumberDecorator extends Decorator {
  constructor(targetItem: Item) {
    super(targetItem);
  }

  getLength(index: number) {
    return this.targetItem.getLength(index) + 6;
  }

  getLinesCount() {
    return this.targetItem.getLinesCount();
  }

  getMaxLength() {
    return this.targetItem.getMaxLength() + 6;
  }

  getString(index: number) {
    return `<span>${index
      .toString()
      .padStart(4, "0")}: </span>${this.targetItem.getString(index)}`;
  }
}
