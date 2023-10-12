import { Expression } from "./expression";
import { Context } from "./context";
import { CommandListExpression } from "./command-list-expression";

export class BeginExpression implements Expression {
  private expression: CommandListExpression = new CommandListExpression();

  getDescription(): string {
    return `BEGIN ${this.expression.getDescription()}`;
  }

  parse(context: Context): boolean {
    if (BeginExpression.checkValidKeyword(context.getCurrentKeyword())) {
      context.readNextKeyword();
      this.expression = new CommandListExpression();
      return this.expression.parse(context);
    } else {
      return false;
    }
  }

  run(): boolean {
    return this.expression.run();
  }

  static checkValidKeyword(keyword: string | null): boolean {
    return keyword === "BEGIN";
  }
}
