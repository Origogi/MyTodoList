import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
import 'express-async-errors'

const app = express();

app.use(express.json());  // REST Api, JSON 형태로 데이터 주고 받음
app.use(express.urlencoded({ extended : false })); // HTML Form -> Body
app.use(express.static('public')); // 정적 파일 제공

app.get('/file', (req, res) =>{
    fs.readFile('/file1.txt', (err, data) => {
        if (err) {
            res.sendStatus(404);
        }
    });
});

app.get('/file1', (req, res) => {
    try {
        const data = fs.readFileSync('/file1.txt');
        res.send(data);
    } catch (e) {
        res.sendStatus(404);
    }
});

app.get('/file2', async (req, res) =>  {
    return fsAsync
       .readFile('/file2.txt')
       .then(data => res.send(data))

});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);