var shopping_cart = [];
var shopping_cart_total = [];

function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);

  var total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(total);
  update_tax_dom(total);

  shopping_cart = black_friday_promotion_safe(shopping_cart);
}

function black_friday_promotion_safe(cart) {
  var cart_copy = deep_copy(cart);
  black_friday_promotion(cart_copy);
  return deep_copy(cart_copy);
}

function black_friday_promotion(cart) {
  /* Legacy code */
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
    var item = button.item;

    var hasFreeShipping = gets_free_shipping_with_item(cart, item);

    set_free_shipping_icon(button, hasFreeShipping);
  }
}

function set_free_shipping_icon(button, isShown) {
  if (isShown) {
    button.show_free_shipping_icon();
  } else {
    button.hide_free_shipping_icon();
  }
}

function gets_free_shipping_with_item(cart, item) {
  var new_cart = add_item(cart, item);
  return gets_free_shipping(new_cart);
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

function remove_item_by_name(cart, name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      idx = i;
    }
  }

  if (idx !== null) {
    return removeItems(cart, idx, 1);
  }

  return cart;
}

function removeItems(array, idx, count) {
  var copy = array.slice();
  copy.splice(idx, count);
  return copy;
}

function setPriceByName(cart, name, price) {
  var cartCopy = cart.slice();

  for (var i = 0; i < cartCopy.length; i++) {
    if (cartCopy[i].name === name) {
      cartCopy = setPrice(cartCopy[i], price);
    }
  }
  return cartCopy;
}

function setQuantityByName(cart, name, quantity) {
  var copyCart = cart.slice();
  for (var i = 0; i < copyCart.length; i++) {
    if (cartCopy[i].name === name) {
      copyCart[i] = objectSet(copyCart[i], 'quantity', quantity);
    }
  }
  return copyCart;
}

function payrollCalc(employees) {
  return payrollChecks;
}

function payrollCalcSafe(employees) {
  var copy = deep_copy(employees);
  payrollCalc(copy);
  return deep_copy(copy);
}
