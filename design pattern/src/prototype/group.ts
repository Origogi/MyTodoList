import { Prototype } from "./prototype";
import { Shape } from "./shape";

export class Group implements Prototype, Shape {
  private shapes = new Array<Shape | Prototype>();

  add(shape: Shape | Prototype) {
    this.shapes.push((shape as Prototype).copy());
    return this;
  }

  copy(): this {
    const result = new Group();
    this.shapes.forEach((shape) => {
      result.add(shape as Prototype);
    });
    return result as this;
  }

  draw(canvas: HTMLCanvasElement): this {
    this.shapes.forEach((shape) => {
      (shape as Shape).draw(canvas);
    });
    return this;
  }

  moveOffset(dx: number, dy: number): this {
    this.shapes.forEach((shape) => {
      (shape as Shape).moveOffset(dx, dy);
    });
    return this;
  }
}
