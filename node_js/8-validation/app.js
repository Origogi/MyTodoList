import express from 'express';
import { body, param, validationResult } from 'express-validator';

const app = express();

app.use(express.json());

const validate = (req, res, next) => {
  const error = validationResult(req);
  if (error.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: error.array()[0].msg });
}

app.post(
  '/users',
  [
    body('name').isLength({ min: 2 }).withMessage('이름은 두 글자 이상만'),
    body('age').isInt().withMessage('숫자만 입력해'),
    body('email').isEmail().withMessage('이메일 형식이 아니야'),
    validate
  ],
  (req, res) => {
    console.log(req.body);
    res.sendStatus(201);
  },
);

app.get(
  '/:email',
  param('email').isEmail().withMessage('이메일 형식이 아니야'),
  validate,

  (req, res) => {
    res.send('💌');
  },
);

app.listen(8080);
