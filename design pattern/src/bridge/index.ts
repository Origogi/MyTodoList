import { Draft } from "./draft";
import { SimpleDisplay } from "./simple-display";
import { CaptionDisplay } from "./caption-display";
import { CharactersCount } from "./characters-count";

console.log("Bridge Pattern!!");

const title = "Design Pattern";
const author = "Jun";
const content = ["Bridge Pattern", "Adapter Pattern", "Composite Pattern"];

// const draft = new Draft(title, author, content);
const draft = new CharactersCount(title, author, content);

const display = new CaptionDisplay();
draft.print(display);

console.log(`total characters : ${draft.getCharactersCount()}`);