import { Aggregator } from "./aggregator";
import { Item } from "./item";
import { ArrayIterator } from "./array-iterator";
import { Iterator } from "./iterator";

export class Array implements Aggregator<Item> {
  constructor(private items: Item[]) {}

  public getItem(index: number): Item {
    return this.items[index];
  }

  public get count(): number {
    return this.items.length;
  }

  iterator(): Iterator<Item> {
    return new ArrayIterator(this.items);
  }
}
