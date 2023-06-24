const bcrypt = require('bcrypt');

const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, 10);
console.log(hashed);

const result = bcrypt.compareSync('abcd124', hashed);
console.log(result);