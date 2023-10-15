export class Row {
  constructor(
    private _name: string,
    private _birthday: string,
    private _email: string
  ) {}

  get name() {
    return this._name;
  }

  get birthday() {
    return this._birthday;
  }

  get email() {
    return this._email;
  }
}
