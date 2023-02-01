function incrementQuantityByName(cart, name) {
    var item = cart[name];
    var quantity = item['quantity'];
    var newQuantity = quantity + 1;
    var newItem = objectSet(item, 'quantity', newQuantity);
    return newItem;
}

function incrementSizesByName(cart, name) {
    var item = cart[name];
    var size = item['size'];
    var newSize = size + 1;
    var newItem = objectSet(item, 'size', newSize);
    return newItem;
}

function incrementFieldByName(cart, name, field) {
    var item = cart[name];
    var value = item[field];
    var value = value + 1;
    var newItem = objectSet(item, field, value);
    var newCart = objectSet(cart, name, newItem);
    return newCart;
}
