import axios from "axios";
import { startServer, stopServer } from "../../app.js";
import { sequelize } from "../../db/database.js";
import {createNewUserAccount, makeValidUser} from './auth-utils.js';

describe("Auth APIs", () => {
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
      const user = await createNewUserAccount(request);

      const res = await request.post("/auth/login", {
        username: user.username,
        password: user.password,
      });

      expect(res.status).toBe(200);
      expect(res.data.token.length).toBeGreaterThan(0);
    });

    it("returns 401 when password is incorrect", async () => {
      const user = await createNewUserAccount(request);
      const wrongPassword = user.password + "wrong";

      const res = await request.post("/auth/login", {
        username: user.username,
        password: wrongPassword,
      });

      expect(res.status).toBe(401);
      expect(res.data.message).toBe("Invalid user or password");
    });

    it("returns 401 when username is not found", async () => {
      const user = await createNewUserAccount(request);

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
      const user = await createNewUserAccount(request);

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
});
