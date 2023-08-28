import { startServer, stopServer } from "../../app.js";
import axios from "axios";
import { sequelize } from "../../db/database.js";
import { faker } from "@faker-js/faker";

describe("Auth APIs", () => {
  let server;
  let request;

  beforeAll(() => {
    server = startServer();
    request = axios.create({
      baseURL: 'http://localhost:8080',
      validateStatus: null,
    });
  });

  afterAll(async () => {
    await sequelize.close();
    await stopServer(server);
  });

  describe("POST /auth/signup", () => {
    it("return 201 and authorization token when user details are valid", async () => {
      const user = {
        name: faker.person.fullName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      };

      const response = await request.post("/auth/signup", user);

      expect(response.status).toBe(201);
      expect(response.data.token.length).toBeGreaterThan(0);
    });
  });
});
