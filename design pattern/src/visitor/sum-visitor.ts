import { Unit } from "./unit";
import { Visitor } from "./visitor";
import { Item } from "./item";

export class SumVisitor implements Visitor {
  private sum = 0;

  visit(unit: Unit) {
    if (unit instanceof Item) {
      this.sum += unit.getValue();
    } else {
      unit.accept(this);
    }
  }

  getSum() {
    return this.sum;
  }
}
