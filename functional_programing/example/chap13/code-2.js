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

// const input = [1, 2, 3, 4, 5];
// const window = 5;

// console.log(sampleCode(input, window));
// console.log(sampleCode2(input, window));

function shoesAndSocksInventoryBefore(products) {
  var inventory = 0;
  for (var p = 0; p < products.length; p++) {
    var product = products[p];

    if (product.type === "shoes" || product.type === "socks") {
      inventory += product.numberInventory;
    }
  }
  return inventory;
}

function shoesAndSocksInventory(products) {
  var shoesAndSocks = filter(products, function (product) {
    return product.type === "shoes" || product.type === "socks";
  });

  var inventories = map(shoesAndSocks, function (product) {
    return product.numberInventory;
  });

  return reduce(inventories, 0, plus);
}

itemAdded = ["shirt", "shoes", "socks", "hat", "shirt"];

var shoppingCart = reduce(itemAdded, {}, function (cart, itemOp) {
  var op = itemOp[0];
  var item = itemOp[1];
  if (op === "add") {
    return addOne(cart, item);
  }
  if (op === "remove") {
    return removeOne(cart, item);
  }
});

console.log(shoppingCart);

function addOne(cart, item) {
  if (!cart[item]) {
    return add_item(cart, {
      name: item,
      qunatity: 1,
      price: priceLookup(item),
    });
  } else {
    var qunatity = cart[item].qunatity;
    return setFieldByName(cart, item, "qunatity", qunatity + 1);
  }
}

function removeOne(cart, item) {
  if (!cart[item]) {
    return cart;
  } else {
    var qunatity = cart[item].qunatity;
    if (qunatity === 1) {
      return remove_item_by_name(cart, item);
    } else {
      return setFieldByName(cart, item, "qunatity", qunatity - 1);
    }
  }
}


var employeeNames = [];

var recommendations = map(employeeNames, function (name) {
  return {
    name: name,
    position: recommendPostition(name),
  };
});

var evaluations = map(recommendations, function (rec) {
  return objectSet(rec, "score", scorePlayer(rec.name, rec.position));
});

var best = sortBy(employeeNames, function(a, b) {
  return a.score - b.score;
});

var worst = reverse(best);

var roster = reduce(best, {}, function (roster, eval) {
  var position = eval.position;
  if (roster[position]) {
    return roster;
  }
  return objectSet(roster, position, eval.name);
});
