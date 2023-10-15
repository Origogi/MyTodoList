import { Builder } from "./builder";
import { Data } from "./data";

export class PlainTextBuilder extends Builder {
  constructor(data: Data) {
    super(data);
  }

  head() {
    return "";
  }

  body() {
    return `Name : ${this.data.name} Age : ${this.data.age}\n`;
  }

  foot() {
    return "";
  }
}
