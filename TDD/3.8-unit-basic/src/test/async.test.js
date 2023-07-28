const fetchProduct = require("../async.js");

describe("Async", () => {
  it("async test", (done) => {
    fetchProduct().then((product) => {
      expect(product).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  it('async -return ', () => {
    return fetchProduct().then((product) => {
      expect(product).toEqual({ item: "Milk", price: 200 });
    });
  });

  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it('async - resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({ item: "Milk", price: 200 });
  });

  it('async - rejects', () => {
    return expect(fetchProduct('error')).rejects.toEqual('network error');
  });
});
