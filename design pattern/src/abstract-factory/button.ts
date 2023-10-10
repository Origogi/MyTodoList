export abstract class Button {
  protected constructor(
    protected dom: HTMLElement,
    protected caption: string
  ) {}

  abstract render(): void;
}
