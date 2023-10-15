import { Context } from "./context";

export interface Expression {
    parse(context: Context): boolean;
    run(): boolean;
    getDescription() : string;
}