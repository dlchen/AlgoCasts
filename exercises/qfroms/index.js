// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

  constructor() {
    this.stack_a = new Stack();
    this.stack_b = new Stack();
  }

  add(x) {
    // move all elem from a to b
    // push x onto b
    // move all elem from b to a
    const transferAll = (target, source) => {
      const next = source.pop();
      if (!next) return;
      target.push(next);
      transferAll(target, source);
    }

    transferAll(this.stack_b, this.stack_a);
    this.stack_b.push(x);
    transferAll(this.stack_a, this.stack_b);
  }

  peek() {
    return this.stack_a.peek();
  }

  remove() {
    return this.stack_a.pop();
  }
}

module.exports = Queue;
