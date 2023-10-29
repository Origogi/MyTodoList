function isInCart(cart, name) {
  return indexOfItem(cart, name) !== null;
}

function setPriceByName(cart, name, price) {
  var i = indexOfItem(cart, name);

  if (i !== null) {
    return arraySet(cartCopy, i, setPrice(cartCopy[i], price));
  }
  return cartCopy;
}

function arraySet(array, idx, value) {
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}

function indexOfItem(cart, name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      return i;
    }
  }
  return null;
}
