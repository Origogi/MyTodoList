function add_item_to_cart(item) {
  cart = add_item(cart, item);
  update_total_queue(cart);
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

function Queue(worker) {
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
    var item = queue_items.shift();

    worker(item.data, function (val) {
      working = false;
      setTimeout(item.callback, 0, val);
      runNext();
    });
  }

  return function (data, callback) {
    queue_items.push({ data: data, callback: callback || function () {} });
    setTimeout(runNext, 0);
  };
}

function DroppingQueue(max, worker) {
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
    var item = queue_items.shift();

    worker(item.data, function (val) {
      working = false;
      setTimeout(item.callback, 0, val);
      runNext();
    });
  }

  return function (data, callback) {
    queue_items.push({ data: data, callback: callback || function () {} });
    while (queue_items.length > max) {
      queue_items.shift();
    }

    setTimeout(runNext, 0);
  };
}

function calc_cart_worker(cart, done) {
  calc_cart_total(cart, function (total) {
    update_total_dom(total);
    done();
  });
}

var update_total_queue = Queue(calc_cart_worker);
