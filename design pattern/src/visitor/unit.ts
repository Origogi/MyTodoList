import { Visitor } from "./visitor";

export interface Unit {
    accept(visitor : Visitor): void
}