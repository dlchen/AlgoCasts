// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {

  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {

    const loop = (node) => {

      if (data <= node.data) {
        if (node.left) {
          return loop(node.left);
        } else {
          return node.left = new Node(data);
        }
      }

      if (data > node.data) {
        if (node.right) {
          return loop(node.right);
        } else {
          return node.right = new Node(data);
        }
      }
    }

    loop(this);
  }
}

module.exports = Node;
