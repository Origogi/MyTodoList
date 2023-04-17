{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };


  interface CoffeeMaker {
      makeCoffee(shots : number) : CoffeeCup
  }
  // public
  // private
  // protected
  class CoffeeMachine implements CoffeeMaker{
    private static BEANS_GRAM_PER_SHOT = 7; // class level
    private coffeeBeans: number = 0; // instance level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number) {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);

      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat() {
      console.log("heating up!");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots}..`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // const maker = CoffeeMachine.makeMachine(12);
  // maker.fillCoffeeBeans(34);
  // const coffee = maker.makeCoffee(2);
  // console.log(maker);
  // console.log(coffee);
    const coffeeMaker : CoffeeMaker = CoffeeMachine.makeMachine(32);
}
