import { Images, $, Ui } from "./chapter18.js";
import { each, go } from "fxjs";

go(
  Images.fetch(),
  Images.tmpl,
  $.el,
  $.append($.qs("body")),
  $.findAll(".remove"),
  $.on("click", async ({ currentTarget }) => {
    if (await Ui.confirm("정말 삭제하시겠습니까?")) {
      await Ui.alert("삭제되었습니다.");
      go(currentTarget, $.closest(".image"), $.remove);
    }
  })
);
