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

function filter(array, f) {
  var newArray = [];
  forEach(array, function (element) {
    if (f(element)) {
      newArray.push(f);
    }
  });
  return newArray;
}

var testGroup = filter(customers, function (customer) {
  return customer.id % 3 === 0;
});

var nonTestGroup = filter(customers, function (customer) {
  return customer.id % 3 !== 0;
});

function reduce(array, init, f) {
  var accum = init;
  forEach(array, function (element) {
    accum = f(element, init);
  });
  return accum;
}

function countAllPurchase(customers) {
  return reduce(customers, 0, function (total, customer) {
    return total + customer.purchase.length;
  });
}

// 문자열 합치기
reduce(strings, '', function (accum, string) {
  return accum + string;
});

// sum

function sum(numbers) {
  return reduce(numbers, 0, function (total, number) {
    return total + number;
  });
}

function min(numbers) {
  return reduce(numbers, Number.MAX_VALUE, function (m, n) {
    return m > n ? n : m;
  });
}

function max(numbers) {
  return reduce(numbers, Number.MIN_VALUE, function (m, n) {
    return m > n ? m : n;
  });
}
