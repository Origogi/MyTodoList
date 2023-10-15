import { Draw } from "./draw";
import { Command } from "./command";

export class PlayCommand extends Draw implements Command {
  private commands = new Array<Command>();

  private playIndex = 0;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  addCommand(command: Command): void {
    this.commands.push(command);
  }

  run() {
    setTimeout(() => {
      if (this.playIndex >= this.commands.length) {
        this.playIndex = 0;
        return;
      }

      const command = this.commands[this.playIndex];
      command.run();

      this.playIndex++;

      this.run()
    }, 1000);
  }
}
