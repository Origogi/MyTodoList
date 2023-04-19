{
  type SuccessState = {
    result: 'success';
  };

  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      throw new Error('No network');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      try {
        this.client.tryConnect();
      } catch (e) {
        console.log('catched');
      }
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
      this.userService.login();
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
