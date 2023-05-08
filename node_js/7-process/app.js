const process = require('process');

console.log(process.env);

setTimeout(() => {
    console.log('setTimeout');
}, 0);

process.nextTick(() => {
    console.log('nextTick');
});

for (let i = 0; i < 100; i++) {
    console.log('for loop')
}
