import { Factory, ItemType } from "./factory";
import { Item } from "./item";
import { Shield } from "./shield";
import { Sword } from "./sword";
import { Bow } from "./bow";

class ItemCounter {
  private count: number = 0;

  constructor(private _maxCount: number) {}

  public isCreatable() {
    return this.count < this._maxCount;
  }

  public getCount(): number {
    return this.count;
  }

  public increase(): void {
    if (this.isCreatable()) {
      this.count++;
    }
  }
}

export class ItemFactory extends Factory {
  private repository = new Map<ItemType, ItemCounter>();

  constructor() {
    super();

    this.repository.set("sword", new ItemCounter(3));
    this.repository.set("shield", new ItemCounter(5));
    this.repository.set("bow", new ItemCounter(2));
  }

  protected createItem(name: ItemType): Item {
    switch (name) {
      case "sword":
        return new Sword();
      case "shield":
        return new Shield();
      case "bow":
        return new Bow();
    }
  }

  protected isCreatable(name: ItemType): boolean {
    const itemCounter = this.repository.get(name)!;

    return itemCounter.isCreatable();
  }

  protected postProcessItem(item: ItemType): void {
    const itemCounter = this.repository.get(item)!;

    itemCounter.increase();
  }
}
