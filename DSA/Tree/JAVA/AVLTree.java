// Node class
class Node {
    int data, height;
    Node left, right;

    public Node(int data) {
        this.data = data;
        this.height = 1; // Initial height is 1
        this.left = this.right = null;
    }
}

// AVL Tree class
class AVLTree {
    private Node root;

    public AVLTree() {
        this.root = null;
    }

    // Get height of a node
    private int height(Node node) {
        return (node == null) ? 0 : node.height;
    }

    // Get balance factor
    private int getBalance(Node node) {
        return (node == null) ? 0 : height(node.left) - height(node.right);
    }

    // Right rotate
    private Node rightRotate(Node y) {
        Node x = y.left;
        Node T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = Math.max(height(y.left), height(y.right)) + 1;
        x.height = Math.max(height(x.left), height(x.right)) + 1;

        return x;
    }

    // Left rotate
    private Node leftRotate(Node x) {
        Node y = x.right;
        Node T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = Math.max(height(x.left), height(x.right)) + 1;
        y.height = Math.max(height(y.left), height(y.right)) + 1;

        return y;
    }

    // Insert a node
    public void insert(int data) {
        root = insertNode(root, data);
    }

    private Node insertNode(Node node, int data) {
        if (node == null) return new Node(data);

        if (data < node.data)
            node.left = insertNode(node.left, data);
        else if (data > node.data)
            node.right = insertNode(node.right, data);
        else
            return node; // Duplicates not allowed

        // Update height
        node.height = 1 + Math.max(height(node.left), height(node.right));

        // Get balance and rotate if necessary
        int balance = getBalance(node);

        // LL case
        if (balance > 1 && data < node.left.data)
            return rightRotate(node);
        // RR case
        if (balance < -1 && data > node.right.data)
            return leftRotate(node);
        // LR case
        if (balance > 1 && data > node.left.data) {
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }
        // RL case
        if (balance < -1 && data < node.right.data) {
            node.right = rightRotate(node.right);
            return leftRotate(node);
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
        while (node.left != null) node = node.left;
        return node;
    }

    // Find the maximum value
    public int max() {
        Node maxNode = maxNode(root);
        return (maxNode != null) ? maxNode.data : -1;
    }

    private Node maxNode(Node node) {
        if (node == null) return null;
        while (node.right != null) node = node.right;
        return node;
    }

    // Inorder traversal (left -> root -> right)
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
        if (node == null) return null;

        if (data < node.data)
            node.left = deleteNode(node.left, data);
        else if (data > node.data)
            node.right = deleteNode(node.right, data);
        else {
            // Case 1: No child
            if (node.left == null && node.right == null) {
                return null;
            }
            // Case 2: One child (right)
            if (node.left == null) return node.right;
            // Case 2: One child (left)
            if (node.right == null) return node.left;
            // Case 3: Two children
            Node minRight = minNode(node.right);
            node.data = minRight.data;
            node.right = deleteNode(node.right, minRight.data);
        }

        // Update height
        node.height = Math.max(height(node.left), height(node.right)) + 1;

        // Get balance and rotate if necessary
        int balance = getBalance(node);

        if (balance > 1 && getBalance(node.left) >= 0)
            return rightRotate(node);

        if (balance > 1 && getBalance(node.left) < 0) {
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }

        if (balance < -1 && getBalance(node.right) <= 0)
            return leftRotate(node);

        if (balance < -1 && getBalance(node.right) > 0) {
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }

        return node;
    }
}

// Example usage
public class Main {
    public static void main(String[] args) {
        AVLTree avl = new AVLTree();
        avl.insert(10);
        avl.insert(20);
        avl.insert(5);
        avl.insert(15);
        avl.insert(30);

        System.out.print("Before Deletion: ");
        avl.inorder(); // Output: 5 10 15 20 30

        avl.delete(20);

        System.out.print("After Deletion: ");
        avl.inorder(); // Output: 5 10 15 30

        System.out.println("Min: " + avl.min()); // Output: 5
        System.out.println("Max: " + avl.max()); // Output: 30
        System.out.println("Search 15: " + avl.search(15)); // Output: true
        System.out.println("Search 20: " + avl.search(20)); // Output: false
    }
}
