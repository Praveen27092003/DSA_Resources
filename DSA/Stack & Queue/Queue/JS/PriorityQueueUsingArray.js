class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    // Enqueue an element based on its priority
    enqueue(element, priority) {
        const newNode = { element, priority };
        let added = false;

        // Insert the new node at the correct position
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].priority > priority) {
                this.queue.splice(i, 0, newNode);
                added = true;
                break;
            }
        }

        // If not added, push to the end (lowest priority)
        if (!added) {
            this.queue.push(newNode);
        }
    }

    // Dequeue the element with the highest priority
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Priority Queue is empty");
        }
        return this.queue.shift(); // Remove the first element (highest priority)
    }

    // Peek at the element with the highest priority without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Priority Queue is empty");
        }
        return this.queue[0]; // First element has the highest priority
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.queue.length;
    }

    // Print the queue (for debugging purposes)
    printQueue() {
        console.log(this.queue.map(node => `{ element: ${node.element}, priority: ${node.priority} }`).join(" -> "));
    }
}
