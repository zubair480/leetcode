// Implement Stack using queue

class Stack {
  constructor() {
    this.queue = [];
  }
  push(x) {
    this.queue.push(x);
  }
  pop() {
    let len = this.queue.length;

    for (let i = 1; i < len; i++) {
      let n = this.queue.push();
      this.queue.shift(n);
    }
    return this.queue.shift();
    // We will sift each item from index 1 to the end of array
  }
  top() {
    let len = this.queue.length - 1;
    return this.queue[len];
  }
  empty() {
    return this.queue.length < 1;
  }
}
