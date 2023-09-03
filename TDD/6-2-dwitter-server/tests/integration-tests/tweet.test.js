import axios from "axios";
import { startServer, stopServer } from "../../app.js";
import { sequelize } from "../../db/database.js";
import { faker } from "@faker-js/faker";
import {createNewUserAccount} from './auth-utils.js';

describe("Tweet APIs", () => {
  let server;
  let request;
  beforeAll(async () => {
    server = await startServer();
    request = axios.create({
      baseURL: `http://localhost:${server.address().port}`,
      validateStatus: null,
    });
  });

  afterAll(async () => {
    // await sequelize.drop();
    await stopServer(server);
  });

  describe("POST to /tweets", () => {
    it("returns 201 and the created tweet when a tweet text is 3 characters or more", async () => {
      const text = faker.string.alphanumeric(3);
      const user = await createNewUserAccount(request);

      const res = await request.post(
        "/tweets",
        {
          text,
        },
        {
          headers: { Authorization: `Bearer ${user.jwt}` },
        }
      );

      expect(res.status).toBe(201);
      expect(res.data).toMatchObject({
        name: user.name,
        username: user.username,
        text,
      });
    });

    it("returns 400 when tweet text is less than 3 characters", async () => {
      const text = faker.string.alphanumeric(2);
      const user = await createNewUserAccount(request);

      const res = await request.post(
        "/tweets",
        {
          text,
        },
        {
          headers: { Authorization: `Bearer ${user.jwt}` },
        }
      );

      expect(res.status).toBe(400);
      expect(res.data.message).toBe("text should be at least 3 characters");
    });
  });

  describe("GET to /tweets", () => {
    it("returns all tweets when username is not specified in the query", async () => {
      const text = faker.string.alphanumeric(3);

      const user1 = await createNewUserAccount(request);
      const user2 = await createNewUserAccount(request);

      const user1Headers = { Authorization: `Bearer ${user1.jwt}` };
      const user2Headers = { Authorization: `Bearer ${user2.jwt}` };

      await request.post("/tweets", { text }, { headers: user1Headers });
      await request.post("/tweets", { text }, { headers: user2Headers });

      const res = await request.get("/tweets", { headers: user1Headers });

      expect(res.status).toBe(200);
      expect(res.data.length).toBeGreaterThanOrEqual(2);
    });

    it("returns only tweets of the given user when username is specified in the query", async () => {
      const text = faker.string.alphanumeric(3);

      const user1 = await createNewUserAccount(request);
      const user2 = await createNewUserAccount(request);

      const user1Headers = { Authorization: `Bearer ${user1.jwt}` };
      const user2Headers = { Authorization: `Bearer ${user2.jwt}` };

      await request.post("/tweets", { text }, { headers: user1Headers });
      await request.post("/tweets", { text }, { headers: user2Headers });

      const res = await request.get("/tweets", {
        headers: user1Headers,
        param: {
          username: user1.username,
        },
      });

      expect(res.status).toBe(200);
      expect(res.data.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("GET to /tweets/:id", () => {
    it("returns 404 when tweet id does not exist", async () => {
      const user = await createNewUserAccount(request);

      const res = await request.get("/tweets/1234567890", {
        headers: { Authorization: `Bearer ${user.jwt}` },
      });

      expect(res.status).toBe(404);
    });

    it("returns 200 and the tweet object when tweet id exists", async () => {
      const text = faker.string.alphanumeric(3);

      const user1 = await createNewUserAccount(request);
      const user1Headers = { Authorization: `Bearer ${user1.jwt}` };

      const createdTweet = await request.post(
        "/tweets",
        { text },
        { headers: user1Headers }
      );

      const res = await request.get(`/tweets/${createdTweet.data.id}`, {
        headers: user1Headers,
      });

      expect(res.status).toBe(200);
      expect(res.data.text).toBe(text);
    });
  });

  describe("PUT to /tweets/:id", () => {
    it("returns 404 when tweet id does not exist", async () => {
      const user = await createNewUserAccount(request);
      const text = faker.string.alphanumeric(3);

      const res = await request.put(
        "/tweets/1234567890",
        { text: text },
        { headers: { Authorization: `Bearer ${user.jwt}` } }
      );

      expect(res.status).toBe(404);
    });

    it("returns 200 and updated tweet when tweet id exists and the tweet belongs to the user", async () => {
      const text = faker.string.alphanumeric(3);
      const updatedText = faker.string.alphanumeric(3);
      const user = await createNewUserAccount(request);

      const createdTweet = await request.post(
        "/tweets",
        {
          text,
        },
        {
          headers: { Authorization: `Bearer ${user.jwt}` },
        }
      );

      const res = await request.put(
        `/tweets/${createdTweet.data.id}`,
        { text: updatedText },
        {
          headers: { Authorization: `Bearer ${user.jwt}` },
        }
      );

      expect(res.status).toBe(200);
      expect(res.data.text).toBe(updatedText);
    });

    it("returns 403 when tweet id exists but the tweet does not belong to the user", async () => {
      const text = faker.string.alphanumeric(3);
      const updatedText = faker.string.alphanumeric(3);
      const user1 = await createNewUserAccount(request);
      const user2 = await createNewUserAccount(request);

      const createdTweet = await request.post(
        "/tweets",
        {
          text,
        },
        {
          headers: { Authorization: `Bearer ${user1.jwt}` },
        }
      );

      const res = await request.put(
        `/tweets/${createdTweet.data.id}`,
        { text: updatedText },
        {
          headers: { Authorization: `Bearer ${user2.jwt}` },
        }
      );

      expect(res.status).toBe(403);
    });
  });

  describe("DELETE to /tweets/:id", () => {
    it("returns 404 when tweet id does not exist", async () => {
      const user = await createNewUserAccount(request);

      const res = await request.delete(`/tweets/1234567890`, {
        headers: { Authorization: `Bearer ${user.jwt}` },
      });

      expect(res.status).toBe(404);
    });

    it("returns 403 when tweet id exists but the tweet does not belong to the user", async () => {
      const user1 = await createNewUserAccount(request);
      const user2 = await createNewUserAccount(request);

      const createdTweet = await request.post(
        "/tweets",
        { text: faker.string.alphanumeric(3) },
        { headers: { Authorization: `Bearer ${user1.jwt}` } }
      );

      const res = await request.delete(`/tweets/${createdTweet.data.id}`, {
        headers: { Authorization: `Bearer ${user2.jwt}` },
      });

      expect(res.status).toBe(403);
    });

    it("returns 204 and the tweet should be deleted when tweet id exists and the tweet belongs to the user", async () => {
      const user = await createNewUserAccount(request);

      const createdTweet = await request.post(
        "/tweets",
        { text: faker.string.alphanumeric(3) },
        { headers: { Authorization: `Bearer ${user.jwt}` } }
      );

      const deleteTweet = await request.delete(
        `/tweets/${createdTweet.data.id}`,
        {
          headers: { Authorization: `Bearer ${user.jwt}` },
        }
      );

      expect(deleteTweet.status).toBe(204);

      const res = await request.delete(`/tweets/${createdTweet.data.id}`, {
        headers: { Authorization: `Bearer ${user.jwt}` },
      });

      expect(res.status).toBe(404);
    });
  });
});
