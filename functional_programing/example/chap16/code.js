function add_item_to_cart(item) {
  cart = add_item(cart, item);
  calc_cart_total();
}

function calc_cart_total(cart, callback) {
  var total = 0;

  cost_ajax(cart, function (cost) {
    total += cost;
    shipping_ajax(cart, function (shipping) {
      total += shipping;
      callback(total);
    });
  });
}

var queue_items = [];
var working = false;

function runNext() {
  if (working) {
    return;
  }

  if (queue_items.length === 0) {
    return;
  }

  working = true;
  var cart = queue_items.shift();
  calc_cart_total(cart, function (total) {
    update_total_dom(total);
    working = false;
    runNext();
  });
}

function update_total_queue(cart) {
  queue_items.push(cart);
  setTimeout(runNext, 0);
}
