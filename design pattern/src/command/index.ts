import { ClearCommand } from "./clear-command";
import { CircleCommand } from "./circle-command";
import { TextCommand } from "./text-command";
import { BoxCommand } from "./box-command";
import { PlayCommand } from "./play-command";

console.log("Command");

const domCanvas = document.querySelector("canvas") as HTMLCanvasElement;
const domPlay = document.querySelector(".play") as HTMLButtonElement;
const domDraw = document.querySelector(".draw") as HTMLButtonElement;

const cmdClear = new ClearCommand(domCanvas);

const cmdCircle = new CircleCommand(domCanvas, 50, 150, 40);
cmdCircle.setFillColor("#ee4040").setStrokeColor("#ee4040");

const cmdText = new TextCommand(domCanvas, 200, 200, 40, "Hello World");
cmdText.setStrokeColor("#458de5");

const cmdCircle2 = new CircleCommand(domCanvas, 355, 240, 30);
cmdCircle2.setFillColor("#ff884d").setStrokeColor("#ff884d");

const cmdBox = new BoxCommand(domCanvas, 40, 165, 320, 65);
cmdBox.setFillColor("#4dc4ff").setStrokeColor("#4dc4ff");

domDraw.addEventListener("click", () => {
  cmdClear.run();
  cmdCircle.run();
  cmdCircle2.run();
  cmdBox.run();

  cmdText.run();
});

const cmdPlay = new PlayCommand(domCanvas);
cmdPlay.addCommand(cmdClear);
cmdPlay.addCommand(cmdCircle);
cmdPlay.addCommand(cmdCircle2);
cmdPlay.addCommand(cmdBox);
cmdPlay.addCommand(cmdText);

domPlay.addEventListener("click", () => {
    console.log("play");
  cmdPlay.run();
});
