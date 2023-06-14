import express from "express";
import 'express-async-errors';

let tweets = [{
    id: '1',
    text: 'Hello Bob!',
    createdAt: new Date(),
    name: 'Bob',
    username: 'bob',
    url: "https://pbs.twimg.com/profile_images/1377594486683955203/LWhdzk2f_400x400.jpg"
}, {
    id: '2',
    text: 'Hello Origogi!',
    createdAt: new Date(),
    name: 'Origogi',
    username: 'origogi',
    url: "https://pbs.twimg.com/profile_images/1377594486683955203/LWhdzk2f_400x400.jpg"
}];

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
    const userName = req.query.username;
    console.log(userName);

    const data = userName ?
        tweets.filter(t => t.username === userName) :
        tweets;

    res.status(200).json(data);
});

// GET /tweets/:id
router.get('/:id', (req, res, next) => {
    const param = req.params.id;
    if (param) {
        const data = tweets.find(t => t.id === param);
        if (data) {
            res.status(200).json(data);
            return;
        }
    }
    res.status(404).json({ message: `Tweet id(${param}) not found` });
});

// POST /tweets
router.post('/', (req, res, next) => {
    const { text, name, username } = req.body;
    const tweet = {
        id: Date.now().toString(),
        createdAt: new Date(),
        text,
        name,
        username,
    }
    tweets = [tweet, ...tweets];
    res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put('/:id', (req, res, next) => {
    const id = req.params.id ?? '';

    const tweet = tweets.find(t => t.id === id);

   if (tweet) {
        tweet.text = req.body.text;
        res.status(200).json(tweet);
   } else {
        res.status(404).json({ message: `Tweet id(${id}) not found` });
   }
});

// DELETE /tweets/:id

router.delete('/:id', (req, res, next) => {
    const param = req.params.id;
    if (param) {
        const filteredTweets = tweets.filter(t => t.id !== param);
        if (filteredTweets.length !== tweets.length) {
            tweets = filteredTweets;
            res.sendStatus(204);
        } else {
            res.status(404).json({ message: `Tweet id(${param}) not found` });
        }
    }
});


export default router;