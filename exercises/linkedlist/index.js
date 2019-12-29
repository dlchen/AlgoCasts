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

  removeLast() {
    if (this.size() <= 1) return this.clear();

    let curr = this.head;
    while (curr && curr.next && curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }
}

module.exports = { Node, LinkedList };
