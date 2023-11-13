import { Images, $ } from "./chapter18.js";
import { each, go } from "fxjs";

console.log(document.querySelector("body"));

go(
  Images.fetch(),
  Images.tmpl,
  $.el,
  $.append($.qs("body")),
  $.findAll(".remove"),
  $.on("click", (e) => go(e.currentTarget, $.closest(".image"), $.remove))
);
