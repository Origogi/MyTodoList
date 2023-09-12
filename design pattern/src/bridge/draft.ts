import { Display } from "./display";

export class Draft {
  constructor(
    private title: string,
    private author: string,
    private content: string[]
  ) {}

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getContent(): string[] {
    return this.content;
  }

  print(display: Display) {
    display.title(this);
    display.author(this);
    display.content(this);
  }
}
