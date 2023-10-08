export class Data {
  constructor(private _name: string, private _age: number) {}

  set name(v: string) {
    this._name = v;
  }

  set age(v: number) {
    this._age = v;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
}
