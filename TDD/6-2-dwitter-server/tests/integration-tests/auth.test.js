import axios from "axios";
import { startServer, stopServer } from "../../app.js";
import { sequelize } from "../../db/database.js";
import { faker } from "@faker-js/faker";

describe("Auth APIs", () => {
  let server;
  let request;
  beforeAll(async () => {
    server = await startServer();
    request = axios.create({
      baseURL: "http://localhost:8080",
      validateStatus: null,
    });
  });

  afterAll(async () => {
    await sequelize.drop();
    await stopServer(server);
  });

  describe("POST to /auth/signup", () => {
    it("returns 201 and auth token when user details are valid", async () => {
      const user = makeValidUser();

      const res = await request.post("/auth/signup", user);

      expect(res.status).toBe(201);
      expect(res.data.token.length).toBeGreaterThan(0);
    });

    it("returns 409 when username is already exists", async () => {
      const user = makeValidUser();

      let res = await request.post("/auth/signup", user);

      expect(res.status).toBe(201);
      expect(res.data.token.length).toBeGreaterThan(0);

      res = await request.post("/auth/signup", user);
      expect(res.status).toBe(409);
      expect(res.data.message).toBe(`${user.username} already exists`);
    });

    it("returns 400 when password is too short", async () => {
      const user = {
        ...makeValidUser(),
        password: "1234",
      };

      let res = await request.post("/auth/signup", user);

      expect(res.status).toBe(400);
      expect(res.data.message).toBe(`password should be at least 5 characters`);
    });

    test.each([
      {
        missingFieldName: "name",
        expectedMessage: "name is missing",
      },
      {
        missingFieldName: "username",
        expectedMessage: "username should be at least 5 characters",
      },
      {
        missingFieldName: "password",
        expectedMessage: "password should be at least 5 characters",
      },
    ])(
      `returns 400 when $missingFieldName field is missing`,
      async ({ missingFieldName, expectedMessage }) => {
        const user = makeValidUser();
        delete user[missingFieldName];

        const res = await request.post("/auth/signup", user);

        expect(res.status).toBe(400);
        expect(res.data.message).toBe(expectedMessage);
      }
    );
  });

  describe("POST to /auth/login", () => {
    it("returns 200 and auth token when username and password are valid", async () => {
      const user = await createNewUserAccount();

      const res = await request.post("/auth/login", {
        username: user.username,
        password: user.password,
      });

      expect(res.status).toBe(200);
      expect(res.data.token.length).toBeGreaterThan(0);
    });

    it("returns 401 when password is incorrect", async () => {
      const user = await createNewUserAccount();
      const wrongPassword = user.password + "wrong";

      const res = await request.post("/auth/login", {
        username: user.username,
        password: wrongPassword,
      });

      expect(res.status).toBe(401);
      expect(res.data.message).toBe("Invalid user or password");
    });

    it("returns 401 when username is not found", async () => {
      const user = await createNewUserAccount();

      const wrongUsername = user.username + "wrong";

      const res = await request.post("/auth/login", {
        username: wrongUsername,
        password: user.password,
      });

      expect(res.status).toBe(401);
      expect(res.data.message).toBe("Invalid user or password");
    });
  });

  describe("GET to /auth/me", () => {
    it("returns user details when valid token is present in Authorization header", async () => {
      const user = await createNewUserAccount();

      const res = await request.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });

      expect(res.status).toBe(200);
      expect(res.data).toMatchObject({
        username: user.username,
        token: user.jwt,
      });
    });
  });

  async function createNewUserAccount() {
    const userDetails = makeValidUser();

    const prepareUserResponse = await request.post("/auth/signup", userDetails);

    return {
      ...userDetails,
      jwt: prepareUserResponse.data.token,
    };
  }

  describe("Tweets APIs", () => {
    describe("POST to /tweets", () => {
      it("returns 201 and the created tweet when a tweet text is 3 characters or more", async () => {
        const text = faker.string.alphanumeric(3);
        const user = await createNewUserAccount();

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
        const user = await createNewUserAccount();

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

        const user1 = await createNewUserAccount();
        const user2 = await createNewUserAccount();

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

        const user1 = await createNewUserAccount();
        const user2 = await createNewUserAccount();

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
        const user = await createNewUserAccount();

        const res = await request.get("/tweets/1234567890", {
          headers: { Authorization: `Bearer ${user.jwt}` },
        });

        expect(res.status).toBe(404);
      });

      it("returns 200 and the tweet object when tweet id exists", async () => {
        const text = faker.string.alphanumeric(3);

        const user1 = await createNewUserAccount();
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
        const user = await createNewUserAccount();
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
        const user = await createNewUserAccount();

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
        const user1 = await createNewUserAccount();
        const user2 = await createNewUserAccount();

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
        const user = await createNewUserAccount();

        const res = await request.delete(`/tweets/1234567890`, {
          headers: { Authorization: `Bearer ${user.jwt}` },
        });

        expect(res.status).toBe(404);
      });

      it("returns 403 when tweet id exists but the tweet does not belong to the user", async () => {
        const user1 = await createNewUserAccount();
        const user2 = await createNewUserAccount();

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
        const user = await createNewUserAccount();

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
});

function makeValidUser() {
  return {
    name: faker.internet.displayName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
