import { Row } from "./row";

export class DBMS {
  private db = new Map<string, Row>();

  constructor() {
    this.db.set("john", new Row("john", "1990-01-01", "john@gmail.com"));
    this.db.set("jane", new Row("jane", "1990-01-02", "jane@gmail.com"));
    this.db.set("joe", new Row("joe", "1990-01-03", "joe@gmail.com"));
  }

  query(name: string, callback: (row: Row | undefined) => void) {
    setTimeout(() => {
      const row = this.db.get(name);

      callback(row);
    }, 1000);
  }
}
