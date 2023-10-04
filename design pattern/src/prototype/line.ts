import { Shape } from "./shape";
import { Prototype } from "./prototype";
import { Point } from "./point";

export class Line implements Shape, Prototype {
  private pt1: Point;
  private pt2: Point;

  constructor(pt1: Point, pt2: Point) {
    this.pt1 = pt1.copy();
    this.pt2 = pt2.copy();
  }

  setPt1(pt: Point) {
    this.pt1 = pt.copy();
  }

  setPt2(pt: Point) {
    this.pt2 = pt.copy();
  }

  getPt1() {
    return this.pt1;
  }

  getPt2() {
    return this.pt2;
  }

  copy(): this {
    const result = new Line(this.pt1, this.pt2);
    return result as this;
  }

  draw(canvas: HTMLCanvasElement): this {
    const context = canvas.getContext("2d");

    if (context === null) {
      throw new Error("context is null");
    }

    context.moveTo(this.pt1.getX(), this.pt1.getY());
    context.lineTo(this.pt2.getX(), this.pt2.getY());
    context.stroke();

    return this;
  }

  moveOffset(dx: number, dy: number): this {
    this.pt1.moveOffset(dx, dy);
    this.pt2.moveOffset(dx, dy);

    return this;
  }
}
