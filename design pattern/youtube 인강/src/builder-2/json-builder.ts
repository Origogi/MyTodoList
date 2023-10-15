import { Builder } from "./builder";
import { Data } from "./data";

export class JsonBuilder extends Builder {
  constructor(data: Data) {
    super(data);
  }

  head(): string {
    return "{";
  }

  body(): string {
    return `name : ${this.data.name}, age : ${this.data.age}`;
  }

  foot(): string {
    return "}";
  }
}
