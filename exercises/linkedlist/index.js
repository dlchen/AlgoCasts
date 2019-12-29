// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    const getSize = (curr, count) => {
      if (!curr) return count;
      return getSize(curr.next, count + 1);
    };

    return getSize(this.head, 0);
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let curr = this.head;
    while (curr && curr.next) {
      curr = curr.next;
    }
    return curr;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.size() <= 1) return this.clear();
    this.head = this.head.next;
  }

  removeLast() {
    if (this.size() <= 1) return this.clear();

    let curr = this.head;
    while (curr && curr.next && curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }

  insertLast(data) {
    if (this.size() === 0) return this.insertFirst(data);
    const last = this.getLast();
    last.next = new Node(data);
  }

  getAt(index) {

    const iterate = (curr, i) => {
      if (!curr || i === index) return curr;
      return iterate(curr.next, i + 1);
    }

    return iterate(this.head, 0);
  }

  // removeAt(index) {

  // }
}

module.exports = { Node, LinkedList };
