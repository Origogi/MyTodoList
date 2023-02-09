function biggestPurchaseBestCustomers(customers) {
  var bestCustomers = filter(customers, function (customer) {
    return customer.purchases.length > 3;
  });
}
