const _ = require('fxjs');
const L = require('fxjs/Lazy');

const obj2 = { a : 1, b : 2, c : 3, d : 4, e : 5 };

const pick = (keys, obj) => _.go(
  obj,
  L.entries,
  L.filter(([k, _]) => keys.includes(k)),
  _.map(Object.assign),
);

console.log(pick(['a', 'b', '1'], obj2));