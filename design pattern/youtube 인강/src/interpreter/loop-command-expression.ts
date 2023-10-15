import { CommandExpression } from "./command-expression";
import { Context } from "./context";
import { CommandListExpression } from "./command-list-expression";

export class LoopCommandExpression extends CommandExpression {
  private loopCount: number = 0;
  private expression: CommandListExpression = new CommandListExpression();

  constructor(keyword: string) {
    super(keyword);
  }

  getDescription(): string {
    return `LOOP(${this.loopCount}) ${this.expression.getDescription()}`;
  }

  parse(context: Context): boolean {
    if (!LoopCommandExpression.checkValidKeyword(context.getCurrentKeyword())) {
      return false;
    }
    const countKeyword = context.readNextKeyword();

    if (countKeyword === null) {
      return false;
    }
    const count = parseInt(countKeyword);

    if (isNaN(count)) {
      return false;
    }

    this.loopCount = count;
    this.expression = new CommandListExpression();

    if (!context.readNextKeyword()) {
      return false;
    }

    return this.expression.parse(context);
  }

  run(): boolean {
    for (let i = 0; i < this.loopCount; i++) {
      if (!this.expression.run()) {
        return false;
      }
    }

    return true;
  }

  static checkValidKeyword(keyword: string | null): boolean {
    return keyword === "LOOP";
  }
}
