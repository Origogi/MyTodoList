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

function cookAndEatArray(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    cook(item);
    eat(item);
  }
}

function cleanArray() {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    washDish(item);
    dryDish(item);
    putAway(item);
  }
}
