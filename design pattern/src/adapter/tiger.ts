export class Tiger {
  constructor(private readonly name: string) {}

  roar() {
    console.log(`${this.name} roars`);
  }

  getName (): string {
    return this.name;
  }
}
