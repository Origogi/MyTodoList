function biggestPurchaseBestCustomers(customers) {
  var bestCustomers = filter(customers, isGoodCustomer); 
  var biggestPurchases = map(bestCustomers, getBiggestPurchases);
  return biggestPurchases;
}

function isGoodCustomer(customer) {
  return customer.purchase.length > 3;
}

function getBiggestPurchases(customer) {
  return maxKey(customer.purchases, {total : 0}, getPurchaseTotal);
}

function getPurchaseTotal(purchase) {
  return purchase.total;
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