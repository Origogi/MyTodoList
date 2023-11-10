const _ = require('fxjs/Strict');
const L = require('fxjs/Lazy');

const m = new Map();
m.set("a", 1);
m.set("b", 2);
m.set("c", 3);

console.log([...m.entries()]);
console.log([...m.keys()]);
console.log([...m.values()]);

_.go(
 m,
 L.filter(([k, v]) => v % 2),
  // _.takeAll,
  entries => new Map(entries),
  console.log
)