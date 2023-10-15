import { Draft } from "./draft";

export interface Display {
    title(draft : Draft): void;
    author(draft : Draft): void;
    content(draft : Draft): void;
}