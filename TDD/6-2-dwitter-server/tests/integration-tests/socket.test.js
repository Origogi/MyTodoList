import axios from "axios";
import { startServer, stopServer } from "../../app.js";
import { io as SocketClient } from "socket.io-client";
import { createNewUserAccount } from "./auth-utils.js";
import {faker} from '@faker-js/faker';

describe("Socket", () => {
  let server;
  let request;
  let clientSocket;

  beforeAll(async () => {
    server = await startServer();
    const baseUrl = `http://localhost:${server.address().port}`;
    request = axios.create({
      baseURL: baseUrl,
      validateStatus: null,
    });
  });

  afterAll(async () => {
    await stopServer(server);
  });

  beforeEach(async () => {
    clientSocket = new SocketClient(
      `http://localhost:${server.address().port}`
    );
  });

  afterEach(async () => {
    clientSocket.disconnect();
  });

  it("does not accept a connection without authorization token", (done) => {
    clientSocket.on("connect_error", () => {
      done();
    });

    clientSocket.on("connect", () => {
      done(new Error("Accepted a connection without authorization token"));
    });

    clientSocket.connect();
  });

  it("accepts a connection with authorization token", async () => {
    const user = await createNewUserAccount(request);

    clientSocket.auth = (cb) => cb({ token: user.jwt });

    const socketPromise = new Promise((resolve, reject) => {
      clientSocket.on("connect", () => {
        resolve("success");
      });
      clientSocket.on("connect_error", () => {
        reject(
          new Error("Server was expected to accept the connection but did not")
        );
      });
    });

    clientSocket.connect();
    await expect(socketPromise).resolves.toEqual("success");
  });

  it('emits "tweet" event when a new tweet is created', async () => {
    const user = await createNewUserAccount(request);
    clientSocket.auth = (cb) => cb({ token: user.jwt });

    const text = faker.string.alphanumeric(10);

    clientSocket.on("connect", async () => {
      await request.post(
        "/tweets",
        { text },
        { headers: { Authorization: `Bearer ${user.jwt}` } }
      );
    });

    const socketPromise = new Promise((resolve) => {
      clientSocket.on("tweets", (tweet) => resolve(tweet));
    });

    clientSocket.connect();

    await expect(socketPromise).resolves.toMatchObject({
      name: user.name,
      username: user.username,
      text,
    });
  });
});
