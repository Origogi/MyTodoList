const jwt = require('jsonwebtoken');
const {decode} = require('jsonwebtoken');

const secret = 'dfdfe3df3dfdfxxdfdcgbrfrd';

const token = jwt.sign({
    id: 'tony.origogi',
    isAdmin: true,
}, secret, {
    expiresIn: 2,  // expire in 2 seconds
});

setTimeout(() => {
    jwt.verify(token, secret, (error, decode) => {
        console.log(error, decode);
    });
},3000);



console.log(token);