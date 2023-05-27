import express from 'express';
const app = express();


app.get('/', (req, res, next) => {
    console.log('first');
    next();
}, (req, res) => {
    console.log('first2');
});

app.get('/', (req, res) => {
    console.log('second');
});

app.listen(8080);