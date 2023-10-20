import { Shape } from "./shape";
import { Manipulator } from "./manipulator";
import { TextView } from "./text-view";
import { Point } from "./point";

// Shape 를

export class TextShape extends Shape {
  constructor(private textView: TextView) {
    super();
  }

  boundingBox(bottomLeft: Point, topRight: Point): void {
    const bottom = this.textView.getOrigin().y;
    const left = this.textView.getOrigin().x;
    const width = this.textView.getExtent().width;
    const height = this.textView.getExtent().height;

    bottomLeft = new Point(bottom.val, left.val);
    topRight = new Point(bottom.val + height.val, left.val + width.val);
  }

  createManipulator(): Manipulator {
    return new TextManipulator(this);
  }
}


class TextManipulator extends Manipulator {
  constructor(private textShape: TextShape) {
    super();
  }
}