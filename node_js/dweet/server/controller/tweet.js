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
  const tweet = await tweetRepository.getById(id);

  if (!tweet) {
    res.status(404).json({
      message: `Tweet id(${id}) not found`,
    });
    return;
  }

  if (tweet.userId !== req.userId) {
    res.status(403).json({
      message: `Unauthorized to update the tweet`,
    });
    return;
  }

  const updated = await tweetRepository.update(id, text);

  if (!updated) {
    res.status(404).json({
      message: `Tweet id(${id}) not found`,
    });
  } else {
    res.status(200).json(updated);
  }
}

export async function deleteTweet(req, res) {
  const id = req.params.id ?? "";

  const tweet = await tweetRepository.getById(id);

  if (!tweet) {
    return res.status(404).json({
      message: `Tweet id(${id}) not found`,
    });
  }

  if (tweet.userId !== req.userId) {
    return res.status(403).json({
      message: `Unauthorized to delete the tweet`,
    });
  }

  await tweetRepository.remove(id);
  res.sendStatus(204);
}
