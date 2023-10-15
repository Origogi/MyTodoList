import { Expression } from "./expression";
import { Context } from "./context";

export abstract class CommandExpression implements Expression {
  protected constructor(protected keyword: string) {}

  abstract parse(context: Context): boolean;
  abstract run(): boolean;
  abstract getDescription(): string;
}
