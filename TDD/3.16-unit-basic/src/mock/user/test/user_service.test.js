const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client');

describe('UserService - Test', () => {

  // let userService;
  // let userClient;
  //
  // beforeEach(() => {
  //   userClient = new StubUserClient();
  //   userService = new UserService(userClient);
  // });
  //
  // it('should login', async () => {
  //   await userService.login('id', 'password');
  //   expect(userService.isLogedIn).toBeTruthy();
  // });

  const login = jest.fn(async () => 'success');

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('calls login() on UserClient when tries to login ', async () => {
    await userService.login('id', 'password');
    expect(login).toHaveBeenCalledTimes(1);
  });

  it('should not call login() on UserClient again if already log in', async () => {
    await userService.login('id', 'password');
    await userService.login('id', 'password');

    expect(login).toHaveBeenCalledTimes(1);
  });

});
