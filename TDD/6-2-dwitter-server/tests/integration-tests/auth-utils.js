import {faker} from '@faker-js/faker';

export function makeValidUser() {
  return {
    name: faker.internet.displayName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}


export async function createNewUserAccount(request) {
  const userDetails = makeValidUser();

  const prepareUserResponse = await request.post("/auth/signup", userDetails);

  return {
    ...userDetails,
    jwt: prepareUserResponse.data.token,
  };
}