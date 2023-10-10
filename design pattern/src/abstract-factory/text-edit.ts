export abstract class TextEdit {
  protected constructor(protected dom: HTMLElement, protected text: string) {}

  abstract render(): void;
}
