import httpMocks from "node-mocks-http";
import { faker } from "@faker-js/faker";
import { validate } from "../validator.js";
import * as validator from "express-validator";

jest.mock("express-validator");

describe("Validator Middleware", () => {
  it("calls next if there are no validation errors", () => {
    const request = httpMocks.createRequest({});
    const response = httpMocks.createResponse();
    const next = jest.fn();
    validator.validationResult = jest.fn(() => ({ isEmpty: () => true }));
    validate(request, response, next);
    expect(next).toBeCalled();
  });

  it("returns 400 next if there are validation errors", () => {
    const request = httpMocks.createRequest({});
    const response = httpMocks.createResponse();
    const errorMsg = faker.word.words(3);
    const next = jest.fn();
    validator.validationResult = jest.fn(() => ({
      isEmpty: () => false,
      array: () => [{ msg: errorMsg }],
    }));
    validate(request, response, next);
    expect(next).not.toBeCalled();
    expect(response.statusCode).toBe(400);
    expect(response._getJSONData()).toEqual({ message: errorMsg });
  });
});
