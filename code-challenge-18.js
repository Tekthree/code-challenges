"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(3);
// const d = new Node(4);
// const e = new Node(5);
// const f = new Node(6);
// const g = new Node(7);
// const h = new Node(8);
// const i = new Node(9)

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const z = new Node("z");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.right = g;
// f.right = h;
// g.right = i;

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.right = g;
f.right = h;
h.right = z;

//          1a
//         /\
//        2b  3c
//        /\   \
//      4d 5e   6f
//          \     \
//           8g    7h
//                  \
//                  9z


function fBTree(root) {

  let newTree = new Node(root.index);
  newTree.root = new Node(root.value, root.index);
  let curr = root;
  let res = newTree.root;

  let newArr = [];
  let newArrTwo = [];
  newArr.unshift(curr);
  newArrTwo.unshift(res);

  while (newArr.length > 0) {
    curr = newArr.pop();
    res = newArrTwo.pop();

    if (curr.value % 3 === 0 && curr.value % 5 ) {
      res.value = 'FizzBuzz 🥤';
    }
    else if (curr.value % 5 === 0) {
      res.value = 'Buzz ✂';
    }
    else if (curr.value % 3 === 0) {
      res.value = 'Fizz 🍾';
    }
    else {
      res.value = curr.value.toString();
    }

    while (newArr.length > 0) {
      const curr = newArr.shift();
      console.log(curr);
      if (curr.left !== null) {
        newArrTwo.push(curr.left);
      }
      if (curr.right !== null) {
        newArrTwo.push(curr.right);
      }
    }

  }

  return newTree;
}

console.log(fBTree(a))


