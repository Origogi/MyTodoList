type Video = {
  title: string;
  author: string;
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P]; // for...in
};

type VideoOptional = Optional<Video>;

const test: VideoOptional = {
  title: 'hello',
};

const readOnlyTest : ReadOnly<Video> = {
    title : 'test',
    author : 'origogi'
}

// readOnlyTest.title = 'tte' // Compile error
