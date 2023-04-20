console.log(this);

function simpleFunc() {
  console.log(this);
}

window.simpleFunc();

class Counter {
  count = 1;
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();
const caller = counter.increase;
caller();
