import express from 'express';
import { body } from 'express-validator';

const app = express();

app.use(express.json());

app.post('/users', body('name').isLength({ min: 2 }), (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

app.get('/:email', (req, res) => {
  res.send('💌');
});

app.listen(8080);
