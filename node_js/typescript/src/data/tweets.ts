type Tweets = {
    id: string;
    text: string;
    createdAt: Date;
    name: string;
    username: string;
    url?: string;
}

const tweets : Tweets[] = [

    {
        id: '1',
        text: 'Hello World',
        createdAt: new Date(),
        name: 'John Doe',
        username: 'johndoe',
        url: 'https://twitter.com/johndoe'
    }
];

export async function getAll() : Promise<Tweets[]> {
    return tweets;
}