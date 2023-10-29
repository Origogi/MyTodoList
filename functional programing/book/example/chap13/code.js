function biggestPurchaseBestCustomers(customers) {
  var bestCustomers = selectBestCustomers(customers);
  var biggerPurchases = getBiggestPurchases(bestCustomers);
  return biggerPurchases;
}

function selectBestCustomers(customers) {
  return filter(customers, function (customer) {
    return customer.purchases.length > 3;
  });
}

function getBiggestPurchases(customers) {
  return map(customers, getBiggestPurchase);
}

function getBiggestPurchase(customer) {
  return maxKey(customer.purchases, { total: 0 }, function (purchase) {
    return purchase.total;
  });
}

function maxKey(array, init, f) {
  return reduce(array, init, function (biggestSoFar, elelment) {
    if (f(biggestSoFar) > f(elelment)) {
      return biggestSoFar;
    } else {
      elelment;
    }
  });
}
