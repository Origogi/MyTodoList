const _ = require('fxjs');
const f = x => x + 10;
const g = x => x - 5;
const fg = x => f(g(x));

console.log(fg(10));

_.go(
  10,
  fg,
  console.log
);

_.go(
  [10],
  _.map(fg),
  _.each(console.log)
)