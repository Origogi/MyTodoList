const _ = require("fxjs");
const L = require("fxjs/Lazy");

_.go(
  [1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0],
  _.takeWhile((a) => a),
  _.each(console.log)
);

_.go(
  [1,2,3,4,5,6,7,8,0,0,0],
  _.takeUntil(a => !a),
  _.each(console.log)
)
