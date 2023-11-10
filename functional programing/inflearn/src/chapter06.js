const _ = require("fxjs");
const L = require("fxjs/Lazy");
const {go} = require('fxjs');

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

const user = _.find((u) => u.name === "bb", users);

_.each(
  console.log,
  L.take(
    1,
    L.filter((u) => u.name === "bb", users),
  )
);

_.go(
  users,
  L.filter((u) => u.name === 'zzbb'),
  L.take(1),
  L.map(u => u.age),
  _.each(console.log)
)

