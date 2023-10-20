import { Coord } from "./coord";

export class TextView {
  constructor(
    private width: Coord,
    private height: Coord,
    private x: Coord,
    private y: Coord
  ) {}

  getOrigin() {
    return { x: this.x, y: this.y };
  }

  getExtent() {
    return { width: this.width, height: this.height };
  }

  isEmpty(): boolean {
    return (
      this.x === null ||
      this.y === null ||
      this.width === null ||
      this.height === null
    );
  }
}
