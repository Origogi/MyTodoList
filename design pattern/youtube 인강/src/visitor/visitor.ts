import { Unit } from "./unit";

export interface Visitor {
    visit(unit : Unit): void
}