import { Item } from "./item";

export type ItemType = "sword" | "shield" | "bow";

export abstract class Factory {
  protected abstract createItem(type: ItemType): Item;

  protected abstract isCreatable(type: ItemType): boolean;

  protected abstract postProcessItem(type: ItemType): void;

  create(type: ItemType): Item | null {
    const isCreatable = this.isCreatable(type);

    if (isCreatable) {
      const item = this.createItem(type);
      this.postProcessItem(type);
      return item;
    }
    return null;
  }
}
