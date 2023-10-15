import { Expression } from "./expression";
import { Context } from "./context";
import { CommandExpression } from "./command-expression";
import { LoopCommandExpression } from "./loop-command-expression";
import { ActionCommandExpression } from "./action-command-expression";

export class CommandListExpression implements Expression {
  private commands = new Array<CommandExpression>();

  getDescription(): string {
    return `{ ${this.commands
      .map((command) => command.getDescription())
      .join(" ")} }`;
  }

  parse(context: Context): boolean {
    while (true) {
      const currentKeyword = context.getCurrentKeyword();

      if (currentKeyword === null) {
        return false;
      } else if (currentKeyword === "END") {
        context.readNextKeyword();
        break;
      } else {
        let command: CommandExpression | null = null;

        if (LoopCommandExpression.checkValidKeyword(currentKeyword)) {
          command = new LoopCommandExpression(currentKeyword);
        } else if (ActionCommandExpression.checkValidKeyword(currentKeyword)) {
          command = new ActionCommandExpression(currentKeyword);
        }

        if (command !== null) {
          if (command.parse(context)) {
            this.commands.push(command);
          } else {
            console.log(command);
            console.log("parse error 1");
            return false;
          }
        } else {
          console.log("parse error 2");

          return false;
        }
      }
    }

    return true;
  }

  run(): boolean {
    for (let i = 0; i < this.commands.length; i++) {
      const isOk = this.commands[i].run();

      if (!isOk) {
        return false;
      }
    }
    return true;
  }
}
