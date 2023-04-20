function CoffeeMachine(beans) {
  this.beans = beans;
  // this.makeCoffee = (shot) => {
  //   console.log('making...');
  // };
}

// Prototype level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log(`making... ${shots}`);
};

const machine1 = new CoffeeMachine(20);
const machine2 = new CoffeeMachine(10);

machine2.makeCoffee(3);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

const latteMachine = new LatteMachine(30);
