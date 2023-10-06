import { Car } from "./car";
import { CarBuilder } from "./car-builder";

console.log("Builder-1");

const car1 = new Car("V8", true, "red", true, true);
car1.print();

const car2 = new CarBuilder()
  .setColor("red")
  .setEngine("V7")
  .setAEB(true)
  .build();
car2?.print();
