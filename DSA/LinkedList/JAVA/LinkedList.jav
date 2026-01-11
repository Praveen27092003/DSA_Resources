class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    private Node head;
    
   public LinkedList() {
        this.head = null; // Initializing head to null
    }
    // Add a node at the end
    public void append(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }

        Node current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Add a node at the beginning
    public void prepend(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }

    // Delete a node by value
    public void delete(int data) {
        if (head == null) return;
        if (head.data == data) {
            head = head.next;
            return;
        }

        Node current = head;
        while (current.next != null && current.next.data != data) {
            current = current.next;
        }

        if (current.next != null) {
            current.next = current.next.next;
        }
    }

    // Search for a node by value
    public Node search(int data) {
        Node current = head;
        while (current != null) {
            if (current.data == data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // Get the length of the linked list
    public int getLength() {
        int count = 0;
        Node current = head;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Reverse the linked list
    public void reverse() {
        Node previous = null;
        Node current = head;

        while (current != null) {
            Node next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        head = previous;
    }

    // Get the middle node
    public Node getMiddle() {
        if (head == null) return null;

        Node slow = head;
        Node fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    // Get the nth node from the end
    public Node getNthFromEnd(int n) {
        if (head == null || n <= 0) return null;

        Node main = head;
        Node ref = head;

        for (int i = 0; i < n; i++) {
            if (ref == null) return null;
            ref = ref.next;
        }

        while (ref != null) {
            main = main.next;
            ref = ref.next;
        }
        return main;
    }

    // Detect if the linked list has a cycle
    public boolean hasCycle() {
        if (head == null) return false;

        Node slow = head;
        Node fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }
        }
        return false;
    }

    // Print the linked list
    public void print() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
}

public class Main {
    public static void main(String[] args) {
        LinkedList list = new LinkedList();

        // Append elements
        list.append(10);
        list.append(20);
        list.append(30);
        list.append(40);
        list.append(50);
        list.print(); // Output: 10 -> 20 -> 30 -> 40 -> 50 -> null

        // Get the middle node
        Node middle = list.getMiddle();
        System.out.println("Middle Node: " + (middle != null ? middle.data : "List is empty")); // Output: 30

        // Get the nth node from the end
        Node nthNode = list.getNthFromEnd(2);
        System.out.println("2nd Node from End: " + (nthNode != null ? nthNode.data : "Invalid position")); // Output: 40

        // Detect cycle before creating one
        System.out.println("Has Cycle: " + list.hasCycle()); // Output: false

        // Create a cycle manually for testing
        list.head.next.next.next.next.next = list.head.next;
        System.out.println("Has Cycle: " + list.hasCycle()); // Output: true
    }
}
