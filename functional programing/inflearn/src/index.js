import { Images, $, Ui } from "./chapter18.js";
import {map, go, tap, each} from 'fxjs';
import * as L from "fxjs/Lazy";
import * as C from "fxjs/Concurrency";

go(
  Images.fetch(),
  Images.tmpl,
  $.el,
  $.append($.qs("body")),
  tap(
    $.findAll("img"),
    L.map(
      (img) =>
        new Promise((resolve) => {
          img.onload = () => resolve(img);
          img.src = img.getAttribute("lazy-src");
        })
    ),
    C.takeAll,
    each(
      $.addClass('fade-in'),
    )
  ),
  $.findAll(".remove"),
  $.on("click", async ({ currentTarget }) => {
    if (await Ui.confirm("정말 삭제하시겠습니까?")) {
      await Ui.alert("삭제되었습니다.");
      go(currentTarget, $.closest(".image"), $.remove);
    }
  })
);
