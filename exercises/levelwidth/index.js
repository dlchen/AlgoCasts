// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {

  let curr = root ? [root] : [];
  let next = [];
  const counters = [];

  while (curr.length || next.length) {
    counters.push(curr.length);
    curr.forEach(node => next.push(...node.children));
    curr = next
    next = [];
  }

  return counters;
}

module.exports = levelWidth;
