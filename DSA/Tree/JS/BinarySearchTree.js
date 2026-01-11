class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Search for a node
  search(data) {
    return this.searchNode(this.root, data);
  }

  searchNode(node, data) {
    if (node === null) return false;
    if (data < node.data) return this.searchNode(node.left, data);
    else if (data > node.data) return this.searchNode(node.right, data);
    else return true;
  }

  // Find the minimum value
  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    if (node === null) return null;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  // Find the maximum value
  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    if (node === null) return null;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }

  // In-order traversal (left -> root -> right)
  inorder() {
    const result = [];
    this.inorderTraversal(this.root, result);
    return result;
  }

  inorderTraversal(node, result) {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.data);
      this.inorderTraversal(node.right, result);
    }
  }

  // Delete a node
  delete(data) {
    this.root = this.deleteNode(this.root, data);
  }

  deleteNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.deleteNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.deleteNode(node.right, data);
    } else {
      // Case 1: No child
      if (node.left === null && node.right === null) {
        return null;
      }
      // Case 2: One child (right)
      if (node.left === null) {
        return node.right;
      }
      // Case 2: One child (left)
      if (node.right === null) {
        return node.left;
      }
      // Case 3: Two children
      const minRight = this.minNode(node.right); // Get min node from right subtree
      node.data = minRight; // Replace node's value with min value from right subtree
      node.right = this.deleteNode(node.right, minRight); // Delete min node from right subtree
    }

    return node;
  }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(5);
bst.insert(15);
bst.insert(30);

console.log("Before Deletion:", bst.inorder()); // [5, 10, 15, 20, 30]

bst.delete(20);

console.log("After Deletion:", bst.inorder()); // [5, 10, 15, 30]
console.log("Min:", bst.min()); // 5
console.log("Max:", bst.max()); // 30
console.log("Search 15:", bst.search(15)); // true
console.log("Search 20:", bst.search(20)); // false
