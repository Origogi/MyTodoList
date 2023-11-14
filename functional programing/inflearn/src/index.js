import { Images, $, Ui } from "./chapter18.js";
import { map, go, tap, each, groupBy, values } from "fxjs";

go(
  Images.fetch(),
  Images.tmpl,
  $.el,
  $.append($.qs("body")),
  Images.loader(4),
  $.findAll(".remove"),
  $.on("click", async ({ currentTarget }) => {
    if (await Ui.confirm("정말 삭제하시겠습니까?")) {
      await Ui.alert("삭제되었습니다.");
      go(currentTarget, $.closest(".image"), $.remove);
    }
  })
);
