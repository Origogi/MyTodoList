import { Iterator } from './iterator';
import { Item } from "./item";


export class ArrayIterator implements Iterator<Item> {

    private _index : number = -1;
    constructor(private item : Item[]) {
    }

    current(): Item {
        return this.item[this._index];
    }

    next(): boolean {
        this._index++;
        return this._index < this.item.length;
    }




}