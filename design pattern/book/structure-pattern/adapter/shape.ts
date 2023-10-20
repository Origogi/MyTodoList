import { Manipulator } from "./manipulator";
import { Point } from "./point";

export abstract class Shape {
  abstract boundingBox(bottomLeft: Point, topRight: Point): void;

  abstract createManipulator(): Manipulator;
}
