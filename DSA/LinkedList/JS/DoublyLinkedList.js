class Node {
    constructor(data) {
        this.data = data;         // Data of the node
        this.prev = null;         // Pointer to the previous node
        this.next = null;         // Pointer to the next node
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;         // Points to the first node
        this.tail = null;         // Points to the last node
    }

    // Add a node at the end
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {         // If the list is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Add a node at the beginning
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {         // If the list is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Print the list from head to tail
    printForward() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log("Forward:", result.join(" -> "));
    }

    // Print the list from tail to head
    printBackward() {
        let current = this.tail;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.prev;
        }
        console.log("Backward:", result.join(" -> "));
    }

  // Insert a node at a specific position
    insertAtPosition(data, position) {
        const newNode = new Node(data);

        if (position === 1) { // Insert at the head
            if (!this.head) { // List is empty
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
            return;
        }

        let current = this.head;
        let count = 1;

        // Traverse the list to find the position
        while (current && count < position - 1) {
            current = current.next;
            count++;
        }

        if (!current) { // Position is out of bounds
            console.log("Position is out of bounds.");
            return;
        }

        // Insert the new node
        newNode.next = current.next;
        newNode.prev = current;

        if (current.next) {
            current.next.prev = newNode;
        } else {
            // If inserting at the end, update the tail
            this.tail = newNode;
        }

        current.next = newNode;
    }


    // Delete a node with a specific value
    delete(data) {
        if (!this.head) return;   // List is empty

        let current = this.head;

        while (current) {
            if (current.data === data) {
                if (current.prev) current.prev.next = current.next;
                if (current.next) current.next.prev = current.prev;

                if (current === this.head) this.head = current.next; // Update head
                if (current === this.tail) this.tail = current.prev; // Update tail

                return;
            }
            current = current.next;
        }
    }
}

// Example usage
const dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.prepend(5);

dll.printForward();   // Output: Forward: 5 -> 10 -> 20 -> 30
dll.printBackward();  // Output: Backward: 30 -> 20 -> 10 -> 5
dll.insertAtPosition(15, 2); // Insert 15 at position 2

dll.delete(20);
dll.printForward();   // Output: Forward: 5 -> 10 -> 30
dll.printBackward();  // Output: Backward: 30 -> 10 -> 5
