import httpMocks from "node-mocks-http";
import { isAuth } from "../auth.js";
import { faker } from "@faker-js/faker";
import jwt from "jsonwebtoken";
import * as userRepository from "../../data/auth.js";

jest.mock("jsonwebtoken");
jest.mock("../../data/auth.js");

describe("Auth Middleware", () => {
  it("returns 401 for the request without Authorization header", () => {
    // Given
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/tweets",
    });
    const response = httpMocks.createResponse();
    const next = jest.fn();

    // When
    isAuth(request, response, next);

    //Then
    expect(response.statusCode).toBe(401);
    expect(response._getJSONData()).toEqual({
      message: "Authentication Error",
    });
    expect(next).not.toBeCalled();
  });

  it("returns 401 for the request with unsupported Authorization header", () => {
    // Given
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/tweets",
      headers: {
        Authorization: "Basic",
      },
    });
    const response = httpMocks.createResponse();
    const next = jest.fn();

    // When
    isAuth(request, response, next);

    //Then
    expect(response.statusCode).toBe(401);
    expect(response._getJSONData()).toEqual({
      message: "Authentication Error",
    });
    expect(next).not.toBeCalled();
  });


  it("returns 401 for the request with invalid JWT", async () => {
    // Given
    const token = faker.string.alphanumeric(128);
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/tweets",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    jwt.verify = jest.fn((token, secretKey, callback) => {
      callback(new Error("Invalid Token"), undefined);
    });

    const response = httpMocks.createResponse();
    const next = jest.fn();
    // When
    await isAuth(request, response, next);

    //Then
    expect(response.statusCode).toBe(401);
    expect(response._getJSONData()).toEqual({
      message: "Authentication Error",
    });
    expect(next).not.toBeCalled();
  });

  it("returns 401 when cannot find a user by id from JWT", async () => {
    // Given
    const token = faker.string.alphanumeric(128);
    const userId = faker.string.alphanumeric(32);

    const request = httpMocks.createRequest({
      method: "GET",
      url: "/tweets",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    jwt.verify = jest.fn((token, secretKey, callback) => {
      callback(undefined, { id : userId});
    });

    const response = httpMocks.createResponse();
    const next = jest.fn();
    userRepository.findById = jest.fn((id) => undefined);
    // When
    await isAuth(request, response, next);

    //Then
    expect(response.statusCode).toBe(401);
    expect(response._getJSONData()).toEqual({
      message: "Authentication Error",
    });
    expect(next).not.toBeCalled();
  });

  it('passes a request with valid Authorization header with token', async () => {
// Given
    const token = faker.string.alphanumeric(128);
    const userId = faker.string.alphanumeric(32);

    const request = httpMocks.createRequest({
      method: "GET",
      url: "/tweets",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    jwt.verify = jest.fn((token, secretKey, callback) => {
      callback(undefined, { id : userId});
    });

    const response = httpMocks.createResponse();
    const next = jest.fn();
    userRepository.findById = jest.fn((id) =>  Promise.resolve({ id }));

    // When
    await isAuth(request, response, next);

    //Then
    expect(request).toMatchObject({
      userId,
      token,
    });
    expect(response.statusCode).toBe(200);
    expect(next).toBeCalled();
  });
});
