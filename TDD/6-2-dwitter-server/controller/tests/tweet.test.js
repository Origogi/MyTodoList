import { faker } from "@faker-js/faker";
import { TweetController } from "../tweet.js";
import httpMocks from "node-mocks-http";

describe("TweetController", () => {
  let tweetController;
  let tweetRepository;
  let mockedSocket;

  beforeEach(() => {
    tweetRepository = {};
    mockedSocket = { emit: jest.fn() };
    tweetController = new TweetController(tweetRepository, () => mockedSocket);
  });

  describe("getTweets", () => {
    it("returns all tweets when username is not provided", async () => {
      const request = httpMocks.createRequest();
      const response = httpMocks.createResponse();
      const allTweets = [
        {
          text: faker.word.words(3),
        },
        {
          text: faker.word.words(3),
        },
        {
          text: faker.word.words(3),
        },
      ];
      tweetRepository.getAll = () => allTweets;

      await tweetController.getTweets(request, response);

      expect(response._getStatusCode()).toBe(200);
      expect(response._getJSONData()).toStrictEqual(allTweets);
    });
  });

  it("returns tweets for the given user when username is provided", async () => {
    const request = httpMocks.createRequest({
      query: {
        username: faker.internet.userName(),
      },
    });
    const response = httpMocks.createResponse();
    const userTweets = [
      {
        text: faker.word.words(3),
      },
      {
        text: faker.word.words(3),
      },
      {
        text: faker.word.words(3),
      },
    ];
    tweetRepository.getAllByUsername = jest.fn(() => userTweets);

    await tweetController.getTweets(request, response);

    expect(response._getStatusCode()).toBe(200);
    expect(response._getJSONData()).toStrictEqual(userTweets);
    expect(tweetRepository.getAllByUsername).toHaveBeenCalledWith(
      request.query.username
    );
  });
});
