class StubProductClient {
  async fetchItems() {
    return [
      { item: 'Milk', price: 200, available: true },
      { item: 'Water', price: 100, available: false },
    ];
  }
}

module.exports = StubProductClient;