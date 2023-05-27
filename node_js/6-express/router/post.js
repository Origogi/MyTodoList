import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET: /posts');
});

router.get('/:id', (req, res) => {
    res.send(`GET: /posts/${req.params.id}`);
});

router.post('/id', (req, res) => {
    res.send('POST: /posts/:id');
});

export default router;
