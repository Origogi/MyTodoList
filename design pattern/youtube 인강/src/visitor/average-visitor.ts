import { Visitor } from "./visitor";
import { Unit } from "./unit";
import { Item } from "./item";

export class AverageVisitor implements Visitor {
  private sum = 0;
  private count = 0;

  visit(unit: Unit): void {
    if (unit instanceof Item) {
      this.sum += unit.getValue();
      this.count++;
    } else {
      unit.accept(this);
    }
  }

  getValue() {
    return this.sum / this.count;
  }
}
