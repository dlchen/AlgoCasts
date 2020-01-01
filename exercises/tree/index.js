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

    // const queue = [this.root];
    // while (queue[0]) {
    //   const curr = queue.shift();
    //   callback(curr);
    //   queue.push(...curr.children)
    // }

    const loop = (queue) => {

      if (!queue.length) return;

      const head = queue[0];
      const tail = queue.slice(1);
      callback(head);
      loop(tail.concat(...head.children));
    }

    loop([this.root])
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
