class Node {
    int data;
    Node left, right;

    public Node(int data) {
        this.data = data;
        this.left = this.right = null;
    }
}

class BinarySearchTree {
    private Node root;

    public BinarySearchTree() {
        this.root = null;
    }

    // Insert a new node
    public void insert(int data) {
        root = insertNode(root, data);
    }

    private Node insertNode(Node node, int data) {
        if (node == null) {
            return new Node(data);
        }
        if (data < node.data) {
            node.left = insertNode(node.left, data);
        } else {
            node.right = insertNode(node.right, data);
        }
        return node;
    }

    // Search for a node
    public boolean search(int data) {
        return searchNode(root, data);
    }

    private boolean searchNode(Node node, int data) {
        if (node == null) return false;
        if (data < node.data) return searchNode(node.left, data);
        else if (data > node.data) return searchNode(node.right, data);
        else return true;
    }

    // Find the minimum value
    public int min() {
        Node minNode = minNode(root);
        return (minNode != null) ? minNode.data : -1;
    }

    private Node minNode(Node node) {
        if (node == null) return null;
        while (node.left != null) {
            node = node.left;
        }
        return node;
    }

    // Find the maximum value
    public int max() {
        Node maxNode = maxNode(root);
        return (maxNode != null) ? maxNode.data : -1;
    }

    private Node maxNode(Node node) {
        if (node == null) return null;
        while (node.right != null) {
            node = node.right;
        }
        return node;
    }

    // In-order traversal (left -> root -> right)
    public void inorder() {
        inorderTraversal(root);
        System.out.println();
    }

    private void inorderTraversal(Node node) {
        if (node != null) {
            inorderTraversal(node.left);
            System.out.print(node.data + " ");
            inorderTraversal(node.right);
        }
    }

    // Delete a node
    public void delete(int data) {
        root = deleteNode(root, data);
    }

    private Node deleteNode(Node node, int data) {
        if (node == null) {
            return null;
        }

        if (data < node.data) {
            node.left = deleteNode(node.left, data);
        } else if (data > node.data) {
            node.right = deleteNode(node.right, data);
        } else {
            // Case 1: No child
            if (node.left == null && node.right == null) {
                return null;
            }
            // Case 2: One child (right)
            if (node.left == null) {
                return node.right;
            }
            // Case 2: One child (left)
            if (node.right == null) {
                return node.left;
            }
            // Case 3: Two children
            Node minRight = minNode(node.right); // Get min node from right subtree
            node.data = minRight.data; // Replace node's value with min value from right subtree
            node.right = deleteNode(node.right, minRight.data); // Delete min node from right subtree
        }

        return node;
    }
}

// Example usage
public class Main {
    public static void main(String[] args) {
        BinarySearchTree bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(20);
        bst.insert(5);
        bst.insert(15);
        bst.insert(30);

        System.out.print("Before Deletion: ");
        bst.inorder(); // Output: 5 10 15 20 30

        bst.delete(20);

        System.out.print("After Deletion: ");
        bst.inorder(); // Output: 5 10 15 30

        System.out.println("Min: " + bst.min()); // Output: 5
        System.out.println("Max: " + bst.max()); // Output: 30
        System.out.println("Search 15: " + bst.search(15)); // Output: true
        System.out.println("Search 20: " + bst.search(20)); // Output: false
    }
}
