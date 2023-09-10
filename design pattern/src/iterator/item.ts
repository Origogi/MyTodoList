export class Item {
    private readonly _name : string;
    private readonly _cost : number;

    constructor(name : string, cost : number) {
        this._name = name;
        this._cost = cost;
    }

    get name() : string {
        return this._name;
    }

    get cost() : number {
        return this._cost;
    }
}