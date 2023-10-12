import { Unit } from "./unit";
import { Visitor } from "./visitor";

export class ItemList implements Unit {
  private list = new Array<Unit>();

  add(unit: Unit) {
    this.list.push(unit);
  }

  accept(visitor: Visitor): void {
    this.list.forEach((unit) => unit.accept(visitor));
  }
}
