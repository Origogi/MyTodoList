interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  get size(): number {
    return this._size;
  }

  private head?: StackNode;

  pop(): string {
    if (!this.head) {
      throw Error("Stack is empty");
    }
    const pop = this.head;
    this.head = pop.next;
    return pop.value;
  }

  push(value: string): void {
    this.head = {
      value,
      next: this.head,
    };
    this._size++;
  }
}

const myStack = new StackImpl();
myStack.push("a");
myStack.push("b");
myStack.push("c");

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
