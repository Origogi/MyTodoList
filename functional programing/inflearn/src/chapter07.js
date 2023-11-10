const _ = require("fxjs");
const L = require("fxjs/Lazy");

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

console.log(Object.keys(obj1));

L.values = function* (obj) {
  for (const k in obj) {
    yield obj[k];
  }
};

_.go(
  obj1,
  Object.values,
  _.map((a) => a + 10),
  _.reduce((a, b) => a + b),
  console.log
);

L.entries = function* (obj) {
  for (const k in obj) {
    yield [k, obj[k]];
  }
};

_.go(
  obj1,
  L.entries,
  L.filter(([_, v]) => v % 2),
  L.map(([k, v]) => ({ [k]: v })),
  _.reduce(Object.assign),
  console.log
);

console.log('keys');

L.keys = function* (obj) {
  for (const k in obj) {
    yield k;
  }
}

_.go(
  obj1,
  L.keys,
  _.each(console.log)

);