import { Point } from "./point";
import { Line } from "./line";
import { Group } from "./group";

console.log("prototype");

const domCanvas = document.querySelector("canvas") as HTMLCanvasElement;

const pt1 = new Point(100, 100);

const pt2 = new Point(200, 100);

const line1 = new Line(pt1, pt2);
line1.draw(domCanvas);

const pt3 = new Point(200, 200);
const pt4 = new Point(100, 200);

const line2 = new Line(pt2, pt3);
const line3 = new Line(pt3, pt4);
const line4 = new Line(pt4, pt1);

const rect = new Group();
rect.add(line1).add(line2).add(line3).add(line4);
rect.draw(domCanvas);

const rect2 = rect.copy();
rect2.moveOffset(100, 100);
rect2.draw(domCanvas);