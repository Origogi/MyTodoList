import { Images, $, Ui } from "./chapter18.js";
import { go } from "fxjs";

go(
  Images.fetch(),
  Images.tmpl,
  $.el,
  $.append($.qs("body")),
  Images.loader(4),
  Ui.remover(
    ".remove",
    ".image",
    () => console.log("before remove"),
    () => console.log("after remove")
  )
);
