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

  const breadth = (queue, depth, widths) => {

    if (queue.length === 1) return widths;

    const head = queue[0];
    const tail = queue.slice(1);

    if (head === WIDTH_END) {
      widths[depth + 1] = 0;
      return breadth(tail.concat([WIDTH_END]), depth + 1, widths);
    }

    widths[depth] += 1;
    return breadth(tail.concat(...head.children), depth, widths);
  }

  return breadth([root, WIDTH_END], 0, [0]);
}

module.exports = levelWidth;
