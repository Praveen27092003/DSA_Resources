// Define a Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // Points to the next node
    }
}

// Define a Queue class
class Queue {
    constructor() {
        this.front = null; // Points to the front node
        this.rear = null;  // Points to the rear node
        this.size = 0;     // Tracks the size of the queue
    }

    // Enqueue: Add an element to the end of the queue
    enqueue(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.front = this.rear = newNode; // Both front and rear point to the new node
        } else {
            this.rear.next = newNode; // Link the new node to the current rear
            this.rear = newNode;     // Update the rear to the new node
        }
        this.size++;
        console.log(`${value} enqueued`);
    }

    // Dequeue: Remove an element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }

        const dequeuedValue = this.front.value; // Get the front value
        this.front = this.front.next;          // Move the front to the next node

        // If the queue becomes empty, set rear to null
        if (!this.front) {
            this.rear = null;
        }

        this.size--;
        console.log(`${dequeuedValue} dequeued`);
        return dequeuedValue;
    }

    // Peek: Get the front element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.front.value;
    }

    // IsEmpty: Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Size: Get the size of the queue
    getSize() {
        return this.size;
    }

    // Display: Print all elements in the queue
    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let current = this.front;
        const elements = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log("Queue:", elements.join(" -> "));
    }
}

// Example usage:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.display(); // Output: Queue: 10 -> 20 -> 30

console.log("Front element:", queue.peek()); // Output: Front element: 10

queue.dequeue(); // Output: 10 dequeued
queue.display(); // Output: Queue: 20 -> 30

console.log("Queue size:", queue.getSize()); // Output: Queue size: 2
console.log("Is queue empty?", queue.isEmpty()); // Output: Is queue empty? false

queue.dequeue();
queue.dequeue();
queue.dequeue(); // Output: Queue is empty
queue.display(); // Output: Queue is empty
