import { Mediator } from "./mediator";

export abstract class Participant {
    protected constructor(protected mediator: Mediator) {
    }

    abstract displayState(dom : HTMLElement) : void;

}