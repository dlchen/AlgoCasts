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

  _transferAll(target, source) {
    const next = source.pop();
    if (!next) return;
    target.push(next);
    this._transferAll(target, source);
  }

  add(x) {
    this.stack_a.push(x);
  }

  peek() {
    this._transferAll(this.stack_b, this.stack_a);
    const first = this.stack_b.peek();
    this._transferAll(this.stack_a, this.stack_b);
    return first;
  }

  remove() {
    this._transferAll(this.stack_b, this.stack_a);
    const first = this.stack_b.pop();
    this._transferAll(this.stack_a, this.stack_b);
    return first;
  }
}

module.exports = Queue;
