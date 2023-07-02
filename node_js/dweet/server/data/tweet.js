import * as userRepository from "../data/auth.js";

let tweets = [
  {
    id: "1",
    text: "Hello Bob!",
    createdAt: new Date().toString(),
    userId: "1",
  },
];

export async function create(text, userId) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date().toString(),
    userId,
  };
  tweets = [tweet, ...tweets];
  console.log(`Created ${tweets.length}`);

  return tweet;
}

export async function getAll() {

  return Promise.all(
    tweets.map(async (tweet) => {
      const user = await userRepository.findById(tweet.userId);
      console.log(user);
      return {
        ...tweet,
        username : user.username,
        name : user.name,
        url : user.url,
      };
    })
  );
}

export async function getAllByUsername(username) {
  return getAll().then((tweets) =>
    tweets.filter((tweet) => tweet.username === username)
  );
}

export async function getById(id) {
  const found = tweets.find((tweet) => tweet.id === id);

  if (!found) {
    return null;
  }

  const { username, name, url } = await userRepository.findById(found.userId);
  return { ...found, username, name, url };
}

export async function remove(id) {
  const deletedTweets = tweets.filter((t) => t.id !== id);

  if (deletedTweets.length !== tweets.length) {
    tweets = deletedTweets;

    console.log(`Deleted ${tweets.length}`);
    return true;
  }

  return false;
}

export async function update(id, text) {
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}
