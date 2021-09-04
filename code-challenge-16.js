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


// -------------------- Find Max Value ----------------------

function findMax(node) {
  if (node == null) return 0;

  let res = node.value;
  let lres = findMax(node.left);
  let rres = findMax(node.right);

  if (lres > res) res = lres;
  if (rres > res) res = rres;
  return res;
}

console.log(findMax(a))