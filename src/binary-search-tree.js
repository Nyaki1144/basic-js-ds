const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.isRoot = null;
  }

  root() {
    return this.isRoot;
  }

  add(data) {
    this.isRoot = addWithin(this.isRoot, data);
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.isRoot, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data
        ? searchWithin(node.left, data)
        : searchWithin(node.right, data);
    }
  }

  find(data) {
    let current = this.isRoot;

    while (current.data !== data) {

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    
    return current;


    // return findWithin(this.isRoot, data);

    // function findWithin(node, data) {
    //   if (node === null) {
    //     return null;
    //   } else if (data < node.data) {
    //     return this.findWithin(node.left, data);
    //   } else if (data > node.data) {
    //     return this.findWithin(node.right, data);
    //   } else {
    //     return node;
    //   }
    // }
  }

  remove(data) {
    this.isRoot = removeNode(this.isRoot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.isRoot) {
      return;
    }

    let node = this.isRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.isRoot) {
      return;
    }

    let node = this.isRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
