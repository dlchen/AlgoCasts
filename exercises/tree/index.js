// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    this.children = this.children.filter(c => c.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(callback) {

    const queue = [];
    queue.push(this.root);
    while (queue[0]) {
      const curr = queue.shift();
      callback(curr);
      curr.children.forEach(node => queue.push(node))
    }
  }

  traverseDF(callback) {

    const loop = (node) => {

      if (!node) return;
      callback(node);
      
      node.children.forEach(node => loop(node));
    }

    loop(this.root);
  }
}

module.exports = { Tree, Node };
