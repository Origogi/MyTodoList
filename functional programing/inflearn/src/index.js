import {Images, $} from './chapter18.js';
import {go} from 'fxjs';

console.log(document.querySelector('body'))

go(
  Images.fetch(),
  Images.tmpl,
  $.el,
  $.append($.qs('body')),

  console.log
)