// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {

  const loop = (slow, fast) => {

    if (!fast.next || !fast.next.next) {
      return false;
    }

    const nextSlow = slow.next;
    const nextFast = fast.next.next;

    if (nextFast === nextSlow) return true;
  
    return loop(nextSlow, nextFast);
  };

  return loop(list.head, list.head);
}

module.exports = circular;
