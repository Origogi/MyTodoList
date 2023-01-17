var shopping_cart = [];
var shopping_cart_total = [];

function add_item_to_cart(name, price) {
  shopping_cart.push({
    name: name,
    price: price,
  });

  calc_cart_total();
}

function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();

  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;

    if (item.price + shopping_cart_total >= 20) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

function update_tax_dom() {
    set_tax_dom(shopping_cart_total * 0.1);
}

function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

function calc_total(cart) {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    shopping_cart_total += item.price;
  }
  return total;
}
