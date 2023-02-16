function sampleCode(array, window) {
  var answer = [];
  for (var i = 0; i < array.length; i++) {
    var sum = 0;
    var count = 0;

    for (var w = 0; w < window; w++) {
      var idx = i + w;
      if (idx < array.length) {
        sum += array[idx];
        count += 1;
      }
    }
    answer.push(sum / count);
  }

  return answer;
}

function sampleCode2(array, window) {
  var answer = [];

  var indices = range(0, array.length);

  var answer = map(indices, function (i) {
    var subarray = array.slice(i, i + window);
    return average(subarray);
  });

  return answer;
}

function range(start, end) {
  var ret = [];
  for (var i = start; i < end; i++) {
    ret.push(i);
  }
  return ret;
}

function average(array) {
  return sum(array) / array.length;
}

function sum(array) {
  return reduce(array, 0, function (e, acc) {
    return acc + e;
  });
}

function forEach(array, f) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    f(item);
  }
}

function map(array, f) {
  var newArray = [];
  forEach(array, function (element) {
    newArray.push(f(element));
  });
  return newArray;
}

function reduce(array, init, f) {
  var result = init;
  for (var i = 0; i < array.length; i++) {
    result = f(array[i], result);
  }
  return result;
}

const input = [1, 2, 3, 4, 5];
const window = 5;

console.log(sampleCode(input, window));
console.log(sampleCode2(input, window));

function shoesAndSocksInventoryBefore(products) {
  var inventory = 0;
  for (var p = 0; p < products.length; p++) {
    var product = products[p];

    if (product.type === 'shoes' || product.type === 'socks') {
      inventory += product.numberInventory;
    }
  }
  return inventory;
}

function shoesAndSocksInventory(products) {
  var shoesAndSocks = filter(products, function (product) {
    return product.type === 'shoes' || product.type === 'socks';
  });

  var inventories = map(shoesAndSocks, function (product) {
    return product.numberInventory;
  });

  return reduce(inventories, 0, plus);
}

var shoppingCart = reduce(itemAdded, {}, addOne);

function addOne(cart, item) {
  if (!cart[item]) {
    return add_item(cart, {
      name: item,
      qunatity: 1,
      price: priceLookup(item),
    });
  } else {
    var qunatity = cart[item].qunatity;
    return setFieldByName(cart, item, 'qunatity', qunatity + 1);
  }
}
