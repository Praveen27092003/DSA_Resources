class Node {
  constructor(data) {
    this.data = data; // Data to store in the node
    this.next = null; // Next pointer to the next node
  }
}

class Stack {
  constructor() {
    this.top = null; // The top of the stack is initially null
  }

  // Push operation
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top; // Set new node's next pointer to the current top
    this.top = newNode; // Update the top to the new node
    console.log(`Pushed: ${data}`);
  }

  // Pop operation
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }

    const poppedData = this.top.data; // Get the data from the top node
    this.top = this.top.next; // Update the top pointer to the next node
    console.log(`Popped: ${poppedData}`);
    return poppedData;
  }

  // Peek operation
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }

    console.log(`Top: ${this.top.data}`);
    return this.top.data; // Return the data at the top
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === null; // If top is null, the stack is empty
  }

  // Display the current stack elements
  display() {
    let current = this.top;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log("Stack elements:", elements);
  }
}

// Example Usage
const stack = new Stack();

// Perform stack operations
stack.push(10);
stack.push(20);
stack.push(30);

stack.display();
stack.peek();

stack.pop();
stack.display();
stack.peek();
stack.pop();
stack.display();
stack.pop();
stack.display();
