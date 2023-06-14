

export function createTweet(text, name, username) {
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username,
        url: "https://pbs.twimg.com/profile_images/1377594486683955203/LWhdzk2f_400x400.jpg"
    };
    tweets = [tweet, ...tweets];
    return tweet;
}

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

export function getAll() {
    return tweets;
}

export function getAllByUsername(username) {
    return tweets.filter(t => t.username === username);
}

export function getById(id) {
    return tweets.find(t => t.id === id);
}

export function remove(id) {
    const deletedTweets = tweets.filter(t => t.id !== id);

    if (deletedTweets.length !== tweets.length) {
        tweets = deletedTweets;
        return true;
    }

    return false;
}

export function update(id, text) {
    const tweet = tweets.find(t => t.id === id);
    if (tweet) {
        tweet.text = text;
    }
    return tweet;
}