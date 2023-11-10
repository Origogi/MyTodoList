import {Images} from './chapter18.js';
import {go} from 'fxjs';

go(
  Images.fetch(),
  Images.tmpl,
  console.log
)