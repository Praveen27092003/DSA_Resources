class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularQueue {
  constructor() {
    this.front = null; // Points to the front of the queue
    this.rear = null;  // Points to the rear of the queue
    this.size = 0;     // Tracks the number of elements in the queue
  }

  // Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Enqueue (Add an element to the queue)
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      newNode.next = newNode; // Point to itself, forming a circle
    } else {
      newNode.next = this.front; // Point the new node to the front
      this.rear.next = newNode;  // Update the rear node to point to the new node
      this.rear = newNode;       // Update rear to the new node
    }
    this.size++;
  }

  // Dequeue (Remove an element from the queue)
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return null;
    }
    const value = this.front.value;
    if (this.front === this.rear) {
      // Only one element in the queue
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next; // Move front to the next node
      this.rear.next = this.front;  // Update rear to point to the new front
    }
    this.size--;
    return value;
  }

  // Peek (Get the front element of the queue)
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return null;
    }
    return this.front.value;
  }

  // Display the queue elements
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return;
    }
    let current = this.front;
    const result = [];
    do {
      result.push(current.value);
      current = current.next;
    } while (current !== this.front); // Stop when we circle back to the front
    console.log("QUEUE ELEMENTS ARE:", result.join(" "));
  }
}

// Example usage
const cq = new CircularQueue();
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.display(); // QUEUE ELEMENTS ARE: 10 20 30 40

cq.dequeue(); // Remove 10
cq.dequeue(); // Remove 20
cq.display(); // QUEUE ELEMENTS ARE: 30 40

cq.enqueue(50);
cq.enqueue(60);
cq.display(); // QUEUE ELEMENTS ARE: 30 40 50 60

console.log("Front Element:", cq.peek()); // Front Element: 30
