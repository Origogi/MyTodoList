function incrementQuantityByName(cart, name) {
  var item = cart[name];
  var quantity = item['quantity'];
  var newQuantity = quantity + 1;
  var newItem = objectSet(item, 'quantity', newQuantity);
  return newItem;
}

function incrementSizesByName(cart, name) {
  var item = cart[name];
  var size = item['size'];
  var newSize = size + 1;
  var newItem = objectSet(item, 'size', newSize);
  return newItem;
}

function incrementFieldByName(cart, name, field) {
  if (field !== 'size' && field !== 'quantity') {
    throw 'This item field cannot be incremented : ' + "'" + field + "'";
  }

  var item = cart[name];
  var value = item[field];
  var value = value + 1;
  var newItem = objectSet(item, field, value);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function forEach(array, f) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    f(item);
  }
}

function cookAndEat(food) {
  cook(food);
  eat(food);
}

function clean(dish) {
  washDish(dish);
  dryDish(dish);
  putAway(dish);
}

forEach(foods, function (food) {
  cook(food);
  eat(food);
});

forEach(dishes, function (dish) {
  washDish(dish);
  dryDish(dish);
  putAway(dish);
});

function withArrayCopy(array, modify) {
  var copy = array.slice();
  modify(copy);
  return copy;
}

function arraySet(array, idx, value) {
  return withArrayCopy(array, function (copy) {
    copy[idx] = value;
  });
}

function push(array, elem) {
  return withArrayCopy(array, function (copy) {
    copy.push(elem);
  });
}

function drop_last(array) {
  return withArrayCopy(array, function (copy) {
    copy.pop();
  });
}

function drop_first(array) {
  return withArrayCopy(array, function (copy) {
    copy.shift();
  });
}

function objectSet(object, key, value) {
  return withObjectCopy(object, function (copy) {
    copy[key] = value;
  });
}

function objectDelete(object, key) {
  return withObjectCopy(object, function (copy) {
    delete copy[key];
  });
}

function withObjectCopy(object, modify) {
  var copy = Object.assign({}, object);
  modify(copy);
  return copy;
}

function fetchProductWithLogging(productId) {
  try {
    fetchProductNoLogging(productId);
  } catch (error) {
    logToSnapError(error);
  }
}

function wrapLogging(f) {
  return function (arg) {
    try {
      f(arg);
    } catch (error) {
      logToSnapError();
    }
  };
}

var saveUserDataWithLogging = wrapLogging(saveUserDataNoLogging);

function wrapIgnoreErrors(f) {
  return function(a1, a2, a3) {
    try {
      f(a1, a2, a3);
    } catch (error){
      return null;
    }
  }
}

function makeAdder() {
  return function(value) {
    return value + 1;
  }
}