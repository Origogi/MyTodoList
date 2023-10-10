export abstract class Checkbox {
  protected constructor(
    protected dom: HTMLElement,
    protected label: string,
    protected checked: boolean
  ) {}

    abstract render(): void;
}
