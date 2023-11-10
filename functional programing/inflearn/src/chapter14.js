const _ = require("fxjs");
const L = require("fxjs/Lazy");


_.go(
  _.range(10),
  _.map((a) => {
    console.log(a);
    return a;
  }),
  _.take(3),
  _.each(console.log)
);

_.go(
  L.range(10),
  L.map(_.delay(500)),
  L.map( _ => new Date()),
  L.filter(a => a % 2),
  L.take(3),
  _.each(console.log)
)