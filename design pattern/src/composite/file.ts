import { Unit } from "./unit";

export class File extends Unit {
    constructor(name : string, private readonly size : number) {
        super(name);
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}