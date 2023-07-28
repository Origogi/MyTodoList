const fetchProduct = require("../async.js");

describe("Async", () => {
  it("async test", (done) => {
    fetchProduct().then((product) => {
      expect(product).toEqual({ item: "Milk", price: 100 });
      done();
    });
  });
});
