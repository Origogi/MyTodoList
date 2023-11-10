const _ = require('fxjs');
const {Images} = require('./chapter18');

_.go(
  Images.fetch(),
  Images.tmpl,
  console.log
)