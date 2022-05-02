const { NotImplementedError } = require('../extensions/index.js');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */


function removeKFromList(l, k) {
  // if (!l) {
  //   return null;
  // }

  // if (k < l.value) {
  //   node.left = removeKFromList(l, data);
  //   return node;
  // } else {
  //   if (!node.left && !node.right) {
  //     return null;
  //   }

  //   if (!node.left) {
  //     node = node.right;
  //     return node;
  //   }

  //   if (!node.right) {
  //     node = node.left;
  //     return node;
  //   }

  //   let minFromRight = node.right;
  //   while (minFromRight.left) {
  //     minFromRight = minFromRight.left;
  //   }

  //   node.data = minFromRight.data;
  //   node.right = removeNode(node.right, minFromRight.data);
  //   return node;
  // }
}

module.exports = {
  removeKFromList,
};