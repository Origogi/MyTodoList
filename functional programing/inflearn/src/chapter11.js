const _ = require('fxjs');
const L = require('fxjs/Lazy');

const users = [
  { id : 1, name : 'AA, age : 36'},
  { id : 2, name : 'BB, age : 32'},
  { id : 3, name : 'CC, age : 37'},
  { id : 4, name : 'DD, age : 31'},
  { id : 5, name : 'EE, age : 30'},
  { id : 6, name : 'FF, age : 29'},
  { id : 7, name : 'GG, age : 28'},
];

_.indexBy = (f, iter) => _.reduce((obj, a) => (obj[f(a)] = a, obj), {}, iter);

console.log(_.indexBy(u => u.id, users));
