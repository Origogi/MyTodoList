const _ = require("fxjs");
const L = require("fxjs/Lazy");

class Model {
  constructor(attrs = {}) {
    this._attrs = attrs;
  }

  get(k) {
    return this._attrs[k];
  }

  set(k, v) {
    this._attrs[k] = v;
    return this;
  }
}

class Collection {
  constructor(models = []) {
    this._models = models;
  }

  at(idx) {
    return this._models[idx];
  }

  add(model) {
    this._models.push(model);
    return this;
  }

  *[Symbol.iterator]() {
    yield* this._models;
  }
}

const coll = new Collection();
coll.add(new Model({ id: 1, name: "AA" }));
coll.add(new Model({ id: 2, name: "BB" }));
coll.add(new Model({ id: 3, name: "CC" }));

console.log(coll);

console.log(coll.at(1));

_.go(coll, _.each(console.log));


const add = (a, b) => a + b;
const addAll = _.reduce(add);

class Product extends Model {}

class Products extends Collection {
  getPrices() {
    return _.map(p => p.get("price"), this);
  }

  totalPrice() {
    return addAll(this.getPrices());
  }
}

const products = new Products();
products.add(new Product({ id: 1, price: 10000 }));
console.log(products.totalPrice());
products.add(new Product({ id: 2, price: 25000 }));
console.log(products.totalPrice());
products.add(new Product({ id: 3, price: 35000 }));
console.log(products.totalPrice());
