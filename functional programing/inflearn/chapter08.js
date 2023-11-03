const L = require('fxjs');
const _ = require('fxjs/Strict');
const g1 = (function* (stop) {
  let i = -1;
  while (++i < stop) {
    yield i;
  }
});

console.log([...g1(3)]);

console.log([...L.take(2, g1(10))]);
_.each(console.log, g1(10))

_.go(
  g1(10),
  L.take(5),
  _.reduce((a, b) => a + b),
  console.log
)


