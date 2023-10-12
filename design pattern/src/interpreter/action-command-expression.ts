import { CommandExpression } from "./command-expression";
import { Context } from "./context";

export class ActionCommandExpression extends CommandExpression {
    constructor(keyword: string) {
        super(keyword);
    }

    getDescription(): string {
        return this.keyword;
    }

    parse(context: Context): boolean {
        if (!ActionCommandExpression.checkValidKeyword(context.getCurrentKeyword())) {
            return false;
        }

        return context.readNextKeyword() !== null;
    }

    run(): boolean {
        console.log(`CMD ${this.keyword}`);
        return true;
    }

    static checkValidKeyword(keyword: string | null): boolean {
        return ["FRONT", "BACK", "LEFT", "RIGHT"].includes(keyword ?? "");
    }
}