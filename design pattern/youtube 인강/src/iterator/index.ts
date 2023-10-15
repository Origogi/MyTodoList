import { Item } from './item';
import { Array } from './array';

console.log('Iterator Pattern');

const items = [
  new Item('빼빼로', 400),
  new Item('새우깡', 100),
  new Item('쿠쿠다스', 400),
  new Item('포카칩', 500),
];

const array = new Array(items);

const iterator = array.iterator();

while (iterator.next()) {
  const item = iterator.current();

  const domItem = document.createElement('div');
  domItem.innerText = `${item.name} : ${item.cost}`;
  document.body.appendChild(domItem);
}
