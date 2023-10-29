var mailing_list = [];

function add_contact(mail_list, new_email) {
  return add_array_last(mail_list, new_email);
}

function add_array_last(array, elem) {
  var new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

function submit_form_handler(event) {
  var form = event.target;
  var email = form.elements['email'].value;
  mailing_list = add_contact(mailing_list, email);
}

function arraySet(array, idx, value) {
  var copyArray = array.slice();
  copyArray[idx] = value;
  return copyArray;
}

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function setPrice(item, new_price) {
  return objectSet(item, 'price', new_price);
}

function objectDelete(object, key) {
  var copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}
