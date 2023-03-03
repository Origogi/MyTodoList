const capital = name => name[0].toUpperCase() + name.slice(1);

capital('hello world'); // Hello world

const greeting = (first, last) => `Hello ${first} ${last}`;

console.log(greeting('John', 'Doe'));
