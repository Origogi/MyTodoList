const _ = require('fxjs');

const split = _.curry((sep, str) => str.split(sep));

const queryToObjects = _.pipe(
  split('&'),
  _.map(split('=')),
  _.map(([k, v]) => ({ [k]: v })),
  _.reduce(_.merge)
);

console.log(queryToObjects('a=1&b=2&c=3'));


