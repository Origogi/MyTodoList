import { Row } from "./row";

export class Cache {
  private cache = new Map<string, Row>();

  get(name: string) {
    console.log(this.cache);
    return this.cache.get(name);
  }

  put(row: Row) {
    this.cache.set(row.name, row);
  }
}
