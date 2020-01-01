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

  const WIDTH_END = 'WIDTH_END';
  const queue = [root, WIDTH_END];
  const counters = [0];

  while (queue.length > 1) {
    const curr = queue.shift();
    if (curr === WIDTH_END) {
      counters.push(0);
      queue.push(WIDTH_END);
    } else {
      counters[counters.length - 1]++;
      queue.push(...curr.children);
    }
  }

  return counters;
}

module.exports = levelWidth;
