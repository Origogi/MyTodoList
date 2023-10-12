import { Unit } from "./unit";
import { Visitor } from "./visitor";

export class Item implements Unit {
  constructor(private value: number) {}

  accept(visitor: Visitor): void {
      visitor.visit(this);
  }

  getValue() {
    return this.value;
  }
}
