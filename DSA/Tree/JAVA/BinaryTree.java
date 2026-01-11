import java.util.LinkedList;
import java.util.Queue;

class Node {
    int value;
    Node left, right;

    public Node(int value) {
        this.value = value;
        left = right = null;
    }
}

class BinaryTree {
    Node root;

    // In-order traversal
    void inOrder(Node node) {
        if (node != null) {
            inOrder(node.left);
            System.out.println(node.value);
            inOrder(node.right);
        }
    }

    // Pre-order traversal
    void preOrder(Node node) {
        if (node != null) {
            System.out.println(node.value);
            preOrder(node.left);
            preOrder(node.right);
        }
    }

    // Post-order traversal
    void postOrder(Node node) {
        if (node != null) {
            postOrder(node.left);
            postOrder(node.right);
            System.out.println(node.value);
        }
    }

    // Level-order traversal
    void levelOrder() {
        if (root == null) return;
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            Node node = queue.poll();
            System.out.println(node.value);
            if (node.left != null) queue.add(node.left);
            if (node.right != null) queue.add(node.right);
        }
    }

    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(5);

        System.out.println("In-order Traversal:");
        tree.inOrder(tree.root);

        System.out.println("Pre-order Traversal:");
        tree.preOrder(tree.root);

        System.out.println("Post-order Traversal:");
        tree.postOrder(tree.root);

        System.out.println("Level-order Traversal:");
        tree.levelOrder();
    }
}
