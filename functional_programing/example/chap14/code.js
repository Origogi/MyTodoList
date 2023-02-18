function update(object, key, modify) {
  var value = object[key];
  var newValue = modify(value);
  var newObject = objectSet(object, key, newValue);
  return newObject;
}

function incrementField(object, key) {
  return update(object, key, function (value) {
    return value + 1;
  });
}


function halveField(object, key) {
  return update(object, key, function (value) {
    return value / 2;
  });
}

function tenXQuantity(object) {
  return update(object, 'quantity', function (value) {
    return value * 10;
  });
}