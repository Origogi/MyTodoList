import { Item } from "./item";

export abstract class Decorator extends Item {
  protected constructor(protected targetItem: Item) {
    super();
  }
}
