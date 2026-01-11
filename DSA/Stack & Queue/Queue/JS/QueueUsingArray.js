class CustomQueue {
    constructor(capacity) {
        this.capacity = capacity;  // Maximum size of the queue
        this.items = new Array(capacity);  // Fixed-size array
        this.front = 0;  // Index of the front element
        this.rear = -1;  // Index of the rear element
        this.size = 0;  // Current size of the queue
    }

    // Check if the queue is full
    isFull() {
        return this.size === this.capacity;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Add an element to the queue
    enqueue(element) {
        if (this.isFull()) {
            console.log("Queue is full");
            return;
        }
        this.rear++;  // Increment rear index
        this.items[this.rear] = element;
        this.size++;
        console.log(`${element} enqueued to queue`);
    }

    // Remove an element from the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        const removedElement = this.items[this.front];
        this.front++;  // Increment front index
        this.size--;
        return removedElement;
    }

    // Get the front element
    getFront() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.items[this.front];
    }

    // Get the rear element
    getRear() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.items[this.rear];
    }

    // Display the queue
    displayQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        console.log("Queue:", this.items.slice(this.front, this.rear + 1).join(" "));
    }
}

// Usage
const queue = new CustomQueue(5);

// Enqueue elements
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

// Display the queue
queue.displayQueue();  // Output: Queue: 10 20 30 40 50

// Dequeue elements
console.log("Dequeued:", queue.dequeue());  // Output: Dequeued: 10
queue.displayQueue();  // Output: Queue: 20 30 40 50

// Get front and rear elements
console.log("Front:", queue.getFront());  // Output: Front: 20
console.log("Rear:", queue.getRear());    // Output: Rear: 50

// Try to enqueue another element
queue.enqueue(60);  // Output: Queue is full
