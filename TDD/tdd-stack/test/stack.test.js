const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("should create an empty stack", () => {
    expect(stack.size()).toBe(0);
  });

  it("allow to push items", () => {
    stack.push("first");
    expect(stack.size()).toBe(1);
    stack.push("second");
    expect(stack.size()).toBe(2);
  });

  describe("pop", () => {
    it("throws an error if stack is empty", () => {
      expect(() => stack.pop()).toThrow("Stack is empty");
    });

    it("returns last item from stack and removed", () => {
      stack.push("first");
      stack.push("second");
      expect(stack.pop()).toBe("second");
      expect(stack.size()).toBe(1);
      expect(stack.pop()).toBe("first");
      expect(stack.size()).toBe(0);
    });

    describe("peek", () => {
      it("throws an error if stack is empty", () => {
        expect(() => stack.peek()).toThrow("Stack is empty");
      });

      it('returns the last pushed item but item do not remove', () => {

        stack.push('first');
        stack.push('second');
        expect(stack.peek()).toBe('second');
        expect(stack.size()).toBe(2);
      });
    });
  });
});
