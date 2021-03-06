"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(22);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//     1
//     /\
//    2  3
//   /\   \
//  4 5    6


// -------------------- breadth first print ----------------------

const breadthFirstPrint = (root) => {
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    console.log(curr);
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
};

console.log(breadthFirstPrint(a));
