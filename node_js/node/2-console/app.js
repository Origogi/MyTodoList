console.log('hello world');

console.clear();
console.log('log');
console.info('info');
console.warn('warn');
console.error('error');

console.assert(2 === 3, 'not same!');

const people = {
    name: 'kim',
    age: 20,
}

console.table(people);

console.time('measure');
for (var i = 0;i<100;i++) {

}
console.timeEnd('measure');