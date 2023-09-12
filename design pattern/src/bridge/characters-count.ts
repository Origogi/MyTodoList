import { Draft } from "./draft";

export class CharactersCount extends Draft {
  constructor(title: string, author: string, content: string[]) {
    super(title, author, content);
  }

  getCharactersCount(): number {
    let count = 0;

    count += this.getTitle().length;
    count += this.getAuthor().length;
    this.getContent().forEach((content) => {
      count += content.length;
    });

    return count;
  }
}
