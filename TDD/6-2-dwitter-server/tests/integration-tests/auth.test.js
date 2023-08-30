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
