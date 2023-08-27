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

      it("should send an event to a websocket server", async () => {
        tweetRepository.create = jest.fn((text, userId) => ({
          text,
          userId,
        }));

        await tweetController.createTweet(request, response);

        expect(mockedSocket.emit).toHaveBeenCalledWith("tweets", {
          text: newTweet,
          userId: authorId,
        });
      });
    });

    describe("updateTweet", () => {
      let tweetId;
      let updatedText;
      let request;
      let response;
      let authorId;

      beforeEach(() => {
        tweetId = faker.string.alphanumeric(16);
        updatedText = faker.word.words(3);
        authorId = faker.string.alphanumeric(16);
        request = httpMocks.createRequest({
          params: {
            id: tweetId,
          },
          body: {
            text: updatedText,
          },
          userId: authorId,
        });
        response = httpMocks.createResponse();
      });

      it("updates the repository and return 200", async () => {
        tweetRepository.getById = jest.fn(() => ({
          userId: authorId,
        }));
        tweetRepository.update = jest.fn(() => ({
          text: updatedText,
          userId: authorId,
        }));

        await tweetController.updateTweet(request, response);

        expect(response._getStatusCode()).toBe(200);
        expect(response._getJSONData()).toStrictEqual({
          text: updatedText,
          userId: authorId,
        });
        expect(tweetRepository.update).toHaveBeenCalledWith(
          tweetId,
          updatedText
        );
      });

      it("returns 403 and should not update repository if tweet does not belong ", async () => {
        tweetRepository.getById = jest.fn(() => ({
          text: faker.word.words(3),
          userId: faker.string.alphanumeric(16),
        }));

        tweetRepository.update = jest.fn();

        await tweetController.updateTweet(request, response);
        expect(response._getStatusCode()).toBe(403);
      });

      it("returns 404 and should not update the repository if the tweet does not exist", async () => {
        tweetRepository.getById = jest.fn(() => undefined);
        tweetRepository.update = jest.fn();

        await tweetController.updateTweet(request, response);
        expect(response._getStatusCode()).toBe(404);
        expect(response._getJSONData()).toMatchObject({
          message: `Tweet not found: ${tweetId}`,
        });
      });
    });
  });

  describe("deleteTweet", () => {
    let tweetId;
    let request;
    let response;
    let authorId;
    beforeEach(() => {
      tweetId = faker.string.alphanumeric(16);
      authorId = faker.string.alphanumeric(16);
      request = httpMocks.createRequest({
        params: {
          id: tweetId,
        },
        userId: authorId,
      });
      response = httpMocks.createResponse();
    });

    it("deletes the tweet and return 204", async () => {
      tweetRepository.getById = jest.fn(() => ({
        userId: authorId,
      }));
      tweetRepository.remove = jest.fn();

      await tweetController.deleteTweet(request, response);

      expect(response._getStatusCode()).toBe(204);
      expect(tweetRepository.remove).toHaveBeenCalledWith(tweetId);
    });

    it("returns 403 and should not delete the repository if tweet does not belong to the user", async () => {
      tweetRepository.getById = jest.fn(() => ({
        userId: faker.string.alphanumeric(16),
      }));
      tweetRepository.remove = jest.fn();

      await tweetController.deleteTweet(request, response);

      expect(response._getStatusCode()).toBe(403);
      expect(tweetRepository.remove).not.toHaveBeenCalled();
    });

    it("returns 404 and should not delete the repository if the tweet does not exist", async () => {
      tweetRepository.getById = jest.fn(() => undefined);
      tweetRepository.remove = jest.fn();

      await tweetController.deleteTweet(request, response);

      expect(response._getStatusCode()).toBe(404);
      expect(response._getJSONData()).toMatchObject({
        message: `Tweet not found: ${tweetId}`,
      });
      expect(tweetRepository.remove).not.toHaveBeenCalled();
    });
  });
});
