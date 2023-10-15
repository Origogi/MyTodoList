import { Tiger } from "./tiger";
import Animal from "./animal";

export class TigerAdapter extends Animal {
  constructor(private readonly tiger: Tiger) {
    super(tiger.getName());
  }

  sound() {
    this.tiger.roar();
  }
}
