class Node {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.head = null; // Head of the linked list
    }

    // Enqueue an element based on its priority
    enqueue(element, priority) {
        const newNode = new Node(element, priority);

        // If the queue is empty or the new node has higher priority than the head
        if (!this.head || this.head.priority > priority) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        // Traverse the list to find the correct position
        let current = this.head;
        while (current.next && current.next.priority <= priority) {
            current = current.next;
        }

        // Insert the new node
        newNode.next = current.next;
        current.next = newNode;
    }

    // Dequeue the element with the highest priority
    dequeue() {
        if (!this.head) {
            throw new Error("Priority Queue is empty");
        }

        const highestPriorityNode = this.head;
        this.head = this.head.next; // Move the head to the next node
        return highestPriorityNode;
    }

    // Peek at the element with the highest priority without removing it
    peek() {
        if (!this.head) {
            throw new Error("Priority Queue is empty");
        }
        return this.head;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.head === null;
    }

    // Get the size of the queue
    size() {
        let count = 0;
        let current = this.head;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }

    // Print the queue (for debugging purposes)
    printQueue() {
        let current = this.head;
        const result = [];

        while (current) {
            result.push(`{ element: ${current.element}, priority: ${current.priority} }`);
            current = current.next;
        }

        console.log(result.join(" -> "));
    }
}
