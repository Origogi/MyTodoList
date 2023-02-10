function biggestPurchaseBestCustomers(customers) {
  var bestCustomers = filter(customers, function (customer) {
    return customer.purchases.length > 3;
  });

  var biggerPurchases = map(bestCustomers, function (customer) {
    return maxKey(customer.purchases, { total: 0 }, function (purchase) {
      return purchase.total;
    });
  });

  return biggerPurchases;
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
