import express from "express";
import 'express-async-errors';

const tweets = [{
    id: '1',
    text: 'Hello Origogi!',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url: "https://pbs.twimg.com/profile_images/1377594486683955203/LWhdzk2f_400x400.jpg"
}];

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.query);
    const userName = req.query.username;
    const data = userName ?
        tweets.filter(t => t.username === userName) :
        tweets;

    res.status(200).json(data);
});

// GET /tweets
// GET /tweets?username=:username
// GET /tweets/:id
// POST /tweets
// PUT /tweets/:id
// DELETE /tweets/:id


export default router;