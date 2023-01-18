var shopping_cart = [];
var shopping_cart_total = [];

function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  
  var total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(total);
  update_tax_dom(total);
}

function add_item(cart, name, price) {
  var new_cart = cart.slice();
  new_cart.push({
    name: name,
    price: price,
  });
  return new_cart;
}

function update_shipping_icons(cart) {
  var buy_buttons = get_buy_buttons_dom();

  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    var new_cart = add_item(cart, item.name, item.price);

    if (gets_free_shipping(new_cart) >= 20) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}

function update_tax_dom(total) {
  set_tax_dom(calc_tax(total));
}

function calc_tax(amount) {
  return amount * 0.1;
}

function calc_total(cart) {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    shopping_cart_total += item.price;
  }
  return total;
}
