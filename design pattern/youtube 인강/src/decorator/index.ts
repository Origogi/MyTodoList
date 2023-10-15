import { Strings } from "./strings";
import { SideDecorator } from "./side-decorator";
import { BoxDecorator } from "./box-decorator";
import { LineNumberDecorator } from "./line-number-decorator";

console.log("Decorator Pattern!!");

const strs = new Strings();

strs.add("Design Patterns");
strs.add("Elements of Reusable Object-Oriented Software");
strs.add(
  "Software patterns have revolutionized the way we think about how software is designed, built, and documented."
);
strs.add(
  "This book is the first volume of a two-volume work describing a proven object-oriented design process."
);

const d1 = new SideDecorator(strs, "*");
const d2 = new BoxDecorator(strs);
const d3 = new LineNumberDecorator(strs);

const domPre = document.querySelector("pre");

if (domPre) {
  // strs.print(domPre);
  // d1.print(domPre);
  // d2.print(domPre);
  d3.print(domPre);
}
