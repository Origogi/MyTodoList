import Animal from "./animal";

export class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  sound(): void {
    console.log(`${this.name} barks`);
  }
}
