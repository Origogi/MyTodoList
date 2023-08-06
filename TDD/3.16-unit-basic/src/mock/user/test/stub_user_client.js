class StubUserClient {
  async login(id, password) {
    return Promise.resolve({ id, password });
  }
}

module.exports = StubUserClient;
