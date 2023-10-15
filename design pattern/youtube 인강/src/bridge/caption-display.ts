import { Display } from "./display";
import { Draft } from "./draft";

export class CaptionDisplay implements Display {
  author(draft: Draft): void {
    console.log(`Author: ${draft.getAuthor()}`);
  }

  content(draft: Draft): void {
    console.log(`Content: `);
    draft.getContent().forEach((content) => {
      console.log(`    ${content}`);
    });
  }

  title(draft: Draft): void {
    console.log(`Title: ${draft.getTitle()}`);
  }
}
