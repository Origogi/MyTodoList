import { Display } from "./display";
import { Draft } from "./draft";

export class SimpleDisplay implements Display {
  title(draft: Draft): void {
    console.log(`${draft.getTitle()}`);
  }

  author(draft: Draft) {
    console.log(`${draft.getAuthor()}`);
  }

  content(draft: Draft) {
    draft.getContent().forEach((content) => {
      console.log(`${content}`);
    });
  }
}
