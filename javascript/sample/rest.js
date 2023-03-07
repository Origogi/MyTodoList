function validateCharacterCount(max, ...items) {
    return items.every(item => item.length < max);
}

console.log(validateCharacterCount(10, 'hello', ));
console.log(validateCharacterCount(10, 'hello', 'world'));
console.log(validateCharacterCount(10, 'hello', 'world', 'this is a long string'));

const queue = ['stop', 'collaborate', 'listen'];

const [first, ...remaining] = queue;

console.log(first);
console.log(remaining);