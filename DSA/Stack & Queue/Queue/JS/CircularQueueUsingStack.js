class CircularQueue {
  constructor(size) {
    this.queue = new Array(size); // Create an array of fixed size
    this.size = size;
    this.front = -1; // Points to the front of the queue
    this.rear = -1;  // Points to the rear of the queue
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === -1;
  }

  // Check if the queue is full
  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  // Add an element to the queue
  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full!");
      return false;
    }
    if (this.isEmpty()) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
    return true;
  }

  // Remove an element from the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return null;
    }
    const value = this.queue[this.front];
    if (this.front === this.rear) {
      // Reset queue when it becomes empty
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return value;
  }

  // Get the front element of the queue
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return null;
    }
    return this.queue[this.front];
  }

  // Display the queue elements
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return;
    }
    let i = this.front;
    let result = [];
    while (true) {
      result.push(this.queue[i]);
      if (i === this.rear) break;
      i = (i + 1) % this.size;
    }
    console.log("Queue:", result.join(" "));
  }

// ANOTHER METHOD
// Display the queue elements

display() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return;
    }
    let i = this.front;
    let output = [];

    while (i != this.rear) {
      output.push(this.arr[i]);
      i = (i + 1) % this.size;
    }
    output.push(this.arr[i]); // Add the last element
    console.log("QUEUE ELEMENTS ARE:", output.join(" "));
  }
}

// Example usage
const cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50); // Queue is now full
cq.display();

cq.dequeue(); // Remove 10
cq.dequeue(); // Remove 20
cq.display();

cq.enqueue(60); // Add 60
cq.enqueue(70); // Add 70
cq.display();
