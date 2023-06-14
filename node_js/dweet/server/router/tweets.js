import express from "express";
import 'express-async-errors';
import * as tweetRepository from '../data/tweet.js';

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
    const userName = req.query.username;
    console.log(userName);

    const data = userName ?
        tweetRepository.getAllByUsername(userName) :
        tweetRepository.getAll();

    res.status(200).json(data);
});

// GET /tweets/:id
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if (id) {
        const data = tweetRepository.getById(id);
        if (data) {
            res.status(200).json(data);
            return;
        }
    }
    res.status(404).json({ message: `Tweet id(${id}) not found` });
});

// POST /tweets
router.post('/', (req, res, next) => {
    const { text, name, username } = req.body;
    const tweet = tweetRepository.createTweet(text, name, username);
    res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put('/:id', (req, res, next) => {
    const id = req.params.id ?? '';

    const tweet = tweetRepository.update(id, req.body.text);

   if (tweet) {
        tweet.text = req.body.text;
        res.status(200).json(tweet);
   } else {
        res.status(404).json({ message: `Tweet id(${id}) not found` });
   }
});

// DELETE /tweets/:id

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    if (id) {
        if (tweetRepository.remove(id)) {
            res.sendStatus(204);
        } else {
            res.status(404).json({ message: `Tweet id(${id}) not found` });
        }
    }
});


export default router;