import { Draw } from "./draw";
import { Command } from "./command";

export class ClearCommand extends Draw implements Command {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  run(): void {
    const context = this.canvas.getContext("2d");
    if (!context) {
      return;
    }

    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
