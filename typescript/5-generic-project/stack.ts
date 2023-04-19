interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  get size(): number {
    return this._size;
  }

  private head?: StackNode<T>;

  pop(): T {
    if (!this.head) {
      throw Error("Stack is empty");
    }
    const pop = this.head;
    this.head = pop.next;
    return pop.value;
  }

  push(value: T): void {
    this.head = {
      value: value,
      next: this.head,
    };
    this._size++;
  }
}

const myStack = new StackImpl<string>();
myStack.push("a");
myStack.push("b");
myStack.push("c");

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

const myStackNumber = new StackImpl<number>();
myStackNumber.push(1);
myStackNumber.push(2);
myStackNumber.push(3);

console.log(myStackNumber.pop());
console.log(myStackNumber.pop());
console.log(myStackNumber.pop());
