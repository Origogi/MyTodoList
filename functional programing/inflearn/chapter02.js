const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");

const users = [
  {
    name: "aa",
    age: 30,
  },
  {
    name: "bb",
    age: 20,
  },
  {
    name: "cc",
    age: 10,
  },
  {
    name: "dd",
    age: 40,
  },
];

console.log(_.reduce((total, user) => total + user.age, 0, users));

const add = (a, b) => a + b;
const ages = L.map((user) => user.age);

console.log(_.reduce(add, ages(users)));

console.log(
  _.reduce((total, u) => (u.age >= 30 ? total : total + u.age), 0, users)
);

console.log(
  _.reduce(
    add,
    0,
    _.map(
      (u) => u.age,
      _.filter((u) => u.age < 30, users)
    )
  )
);
