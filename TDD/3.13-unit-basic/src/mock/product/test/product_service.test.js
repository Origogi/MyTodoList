const ProductService = require("../product_service.js");
const StubProductClient = require("./stub_product_client.js");

describe("ProductService - Stub!", () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("should return available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", price: 200, available: true }]);
  });
});
