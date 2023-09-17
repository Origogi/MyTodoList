export abstract class Unit {
    protected constructor(private name : string) {
    }

    getName() : string {
        return this.name;
    }

    abstract getSize() : number;
}