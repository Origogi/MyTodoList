import Animal from "./animal";

export class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  sound(): void {
    console.log(`${this.name} meows`);
  }
}