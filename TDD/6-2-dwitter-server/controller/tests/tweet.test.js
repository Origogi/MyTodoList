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
    tweetController = new TweetController(tweetRepository, mockedSocket);
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

    describe("getTweet", () => {
      let tweetId;
      let request;
      let response;

      beforeEach(() => {
        tweetId = faker.string.alphanumeric(16);
        request = httpMocks.createRequest({
          params: {
            id: tweetId,
          },
        });
        response = httpMocks.createResponse();
      });

      it("returns the tweet if tweet exists", async () => {
        const aTweet = {
          text: faker.word.words(3),
        };
        tweetRepository.getById = jest.fn(() => aTweet);

        await tweetController.getTweet(request, response);

        expect(response._getStatusCode()).toBe(200);
        expect(tweetRepository.getById).toHaveBeenCalledWith(tweetId);
        expect(response._getJSONData()).toStrictEqual(aTweet);
      });

      it("returns 404 if tweet does not exist", async () => {
        tweetRepository.getById = jest.fn(() => undefined);

        await tweetController.getTweet(request, response);

        expect(response._getStatusCode()).toBe(404);
        expect(tweetRepository.getById).toHaveBeenCalledWith(tweetId);
        expect(tweetRepository.getById).toHaveBeenCalled();
      });
    });

    describe("createTweet", () => {
      let newTweet;
      let authorId;
      let request;
      let response;

      beforeEach(() => {
        newTweet = faker.word.words(3);
        authorId = faker.string.alphanumeric(16);
        request = httpMocks.createRequest({
          body: {
            text: newTweet,
          },
          userId: authorId,
        });
        response = httpMocks.createResponse();
      });

      it("returns 201 with created tweet object including userId", async () => {
        tweetRepository.create = jest.fn((text, userId) => ({
          text,
          userId,
        }));

        await tweetController.createTweet(request, response);

        expect(response._getStatusCode()).toBe(201);
        expect(response._getJSONData()).toStrictEqual({
          text: newTweet,
          userId: authorId,
        });
        expect(tweetRepository.create).toHaveBeenCalledWith(newTweet, authorId);
      });
    });
  });
});
