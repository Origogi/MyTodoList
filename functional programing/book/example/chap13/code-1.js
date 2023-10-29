function biggestPurchaseBestCustomers(customers) {
  var bestCustomers = filter(customers, isGoodCustomer);
  var biggestPurchases = map(bestCustomers, getBiggestPurchases);
  return biggestPurchases;
}

function isGoodCustomer(customer) {
  return customer.purchase.length > 3;
}

function getBiggestPurchases(customer) {
  return maxKey(customer.purchases, { total: 0 }, getPurchaseTotal);
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

var firstTimers = filter(customers, isFirstTimer);
var firstTimerEmails = map(firstTimers, getCustomerEmail);

function isFirstTimer(customer) {
  return customer.purchase.length === 1;
}

function getCustomerEmail(customer) {
  return customer.email;
}

function bigSpenders(customers) {
  var withBigPurchases = filter(customers, hasBigPurchase);
  var with2OrMorePurchases = filter(withBigPurchases, has2OrMorePurchases);
  return with2OrMorePurchases;
}

function hasBigPurchase(customer) {
  return filter(customer.purchase, isBigPurchase).length > 0;
}

function isBigPurchase(purchase) {
  return purchase.total > 100;
}

function has2OrMorePurchases(customer) {
  return customer.purchase.length >= 2;
}

function average(numbers) {
  return reduce(numbers, 0, plus) / numbers.length;
}

function plus(a, b) {
  return a + b;
}


var answer = [];
var window = 5;