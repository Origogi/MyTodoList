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
  return update(object, "quantity", function (value) {
    return value * 10;
  });
}

function incrementSize(item) {
  var options = item.options;
  var size = options.size;
  var newSize = size + 1;
  var newOptions = objectSet(options, "size", newSize);
  var newItem = objectSet(item, "options", newOptions);

  return newItem;
}

function updateOption(item, option, modify) {
  return update(item, "options", function (options) {
    return update(options, option, modify);
  });
}

function update2(item, key1, key2, modify) {
  return update(item, key1, function (options) {
    return update(options, key2, modify);
  });
}

function incrementSize2(item) {
  return update2(item, "options", "size", function (size) {
    return size + 1;
  });
}

function nestedUpdate(object, keys, modify) {
  if (keys.length === 0) {
    return modify(object);
  }
  var key1 = keys[0];
  var restOfKeys = keys.slice(1);

  return update(object, key1, function (value1) {
    return nestedUpdate(value1, restOfKeys, modify);
  });
}

function incrementsSizeByName(cart, name) {
  return nestedUpdate(cart, [name, "options", "size"], function (size) {
    return size + 1;
  });
}
