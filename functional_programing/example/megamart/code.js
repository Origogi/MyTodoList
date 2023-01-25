var shopping_cart = [];
var shopping_cart_total = [];

function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);

  var total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(total);
  update_tax_dom(total);
}

function make_cart_item(name, price) {
  return {
    name: name,
    price: price,
  };
}

function add_item(cart, item) {
  return add_element_last(cart, item);
}

function add_element_last(array, elem) {
  var new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

function update_shipping_icons(cart) {
  var buy_buttons = get_buy_buttons_dom();

  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var new_cart = add_item(cart, make_cart_item('shoes', 3.45));

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
