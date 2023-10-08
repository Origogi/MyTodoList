export abstract class Draw {
  protected constructor(
    protected canvas: HTMLCanvasElement,
    protected fillColor = "#ffffff",
    protected strokeColor = "#000000"
  ) {}

  setFillColor(color: string) {
    this.fillColor = color;
    return this;
  }

  setStrokeColor(color: string) {
    this.strokeColor = color;
    return this;
  }
}
