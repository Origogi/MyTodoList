const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");

const a = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const b = { a: 1, b: 2, c: 3 };

const object1 = (entries) =>
  _.go(
    entries,
    L.map(([k, v]) => ({ [k]: v })),
    _.reduce(Object.assign)
  );

const object2 = (entries) =>
  _.reduce((obj, [k, v]) => ((obj[k] = v), obj), {}, entries);

console.log(object1(a));
console.log(object2(a));


const m = new Map();
m.set("a", 1);
m.set("b", 2);
m.set("c", 3);

console.log(object1(m));

const mapObject = (f, obj )=> _.go(
  obj,
  L.entries,
  L.map(([k, v]) => [k, f(v)]),
  object1
);

console.log(mapObject(a => a + 10, b));