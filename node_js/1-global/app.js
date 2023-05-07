const fs = require('fs');

console.log(global);

global.hello = () => {
    console.log('hello');
}

global.hello();
hello();

//counting

function a() {
    console.count('a function');
}

a();
a();

function a1() {
    b1();
}

function b1() {
    c1();
}

function c1() {
    console.trace();
}


a1();
