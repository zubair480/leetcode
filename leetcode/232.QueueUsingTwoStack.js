// 232.Queue using two Stack

class Queue {
  constructor() {
    this.popStack = [];
    this.pushStack = [];
  }
  push(val) {
    this.pushStack.push(val);
  }
  pop() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }
  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack[this.pushStack.length - 1];
  }
  empty() {
    return !this.pushStack.length && !this.popStack.length;
  }
}
