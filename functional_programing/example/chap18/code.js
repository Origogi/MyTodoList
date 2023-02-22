function ValueCell(initialValue) {
  var currentValue = initialValue;

  var watchers = [];

  return {
    val: function () {
      return currentValue;
    },
    update: function (f) {
      var oldValue = currentValue;
      var newValue = f(oldValue);

      if (oldValue !== newValue) {
        currentValue = newValue;

        forEach(watchers, function (watcher) {
          watcher(newValue);
        });
      }
    },
    addWatcher: function (f) {
      watchers.push(f);
    },
  };
}

function FormulaCell(upstreamCell, f) {
  var myCell = ValueCell(f(upstreamCell.val()));

  upstreamCell.addWatcher(function (newUpStreamValue) {
    myCell.update(function (currentValue) {
      return f(newUpStreamValue);
    });
  });

  return {
    val: myCell.val,
    addWatcher: myCell.addWatcher,
  };
}

var shopping_cart = ValueCell([]);

function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);

  shopping_cart.update(function (cart) {
    return add_item(cart, item);
  });
  var total = calc_cart_total(shopping_cart.val());
  set_cart_total_dom(total);
  update_tax_dom(total);
}

shopping_cart.addWatcher(update_shipping_icons);
