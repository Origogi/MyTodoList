import * as tweetRepository from "../data/tweet.js";

export async function getTweets(req, res) {
  const userName = req.query.username;

  const data = await (userName
    ? tweetRepository.getAllByUsername(userName)
    : tweetRepository.getAll());

  res.status(200).json(data);
}

export async function getTweet(req, res) {
  const id = req.params.id;
  const tweet = await tweetRepository.getById(id);

  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({
      message: `Tweet id(${id} is not found`,
    });
  }
}

export async function createTweet(req, res) {
  const { text } = req.body;
  console.log(`user id : ${req.userId}`);
  const tweet = await tweetRepository.create(text, req.userId);
  res.status(201).json(tweet);
}

export async function updateTweet(req, res) {
  const id = req.params.id ?? "";
  const text = req.body.text ?? "";
  const tweet = await tweetRepository.update(id, text);

  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({
      message: `Tweet id(${id}) not found`,
    });
  }
}

export async function deleteTweet(req, res) {
  const id = req.params.id ?? "";
  await tweetRepository.remove(id);
  res.sendStatus(204);
}
