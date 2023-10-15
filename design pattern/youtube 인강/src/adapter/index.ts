import Animal from "./animal";
import { Dog } from "./dog";
import { Cat } from "./cat";
import { Tiger } from "./tiger";
import { TigerAdapter } from "./tiger-adapter";

console.log("Adapter Pattern!!");

const list =  Array<Animal>();

list.push(new Dog("Shiba"));
list.push(new Dog("Siberian Husky"));
list.push(new Cat("Persian"));
list.push(new TigerAdapter(new Tiger("Tiger")));

list.forEach((animal) => {
    animal.sound();
});