import { Item } from "./item";

export class Strings extends Item {
  private data = new Array<string>();

  constructor() {
    super();
  }

  add(str: string) {
    this.data.push(str);
  }

  getLength(index: number): number {
    return this.data[index].length;
  }

  getLinesCount(): number {
    return this.data.length;
  }

  getMaxLength(): number {
    return this.data.reduce((a, b) => (a.length > b.length ? a : b)).length;
  }

  getString(index: number): string {
    return this.data[index];
  }
}
