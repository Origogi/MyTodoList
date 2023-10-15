import { Prototype } from "./prototype";
import { Shape } from "./shape";

export class Point implements Prototype, Shape {
  constructor(private x: number, private y: number) {}

  setX(v: number) {
    this.x = v;
  }

  setY(v: number) {
    this.y = v;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  copy(): this {
    const result = new Point(this.x, this.y);
    return result as this;
  }

  draw(canvas: HTMLCanvasElement): this {
    const context = canvas.getContext("2d");

    if (context === null) {
      throw new Error("context is null");
    }

    context.beginPath();
    context.arc(this.x, this.y, 4, 0, 2 * Math.PI);
    context.fill();

    return this;
  }

  moveOffset(dx: number, dy: number): this {
    this.x += dx;
    this.y += dy;

    return this;
  }
}
