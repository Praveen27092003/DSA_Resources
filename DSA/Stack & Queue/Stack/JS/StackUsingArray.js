class Stack {
  constructor() {
    this.stack = new Array(100); // Predefined maximum size stack (you can set the size dynamically)
    this.top = -1; // Indicates the index of the top; -1 means the stack is empty
  }

  // Push operation
  push(item) {
    if (this.top === this.stack.length - 1) {
      console.log("Stack Overflow");
      return;
    }
    this.top++;
    this.stack[this.top] = item;
    console.log(`Pushed: ${item}`);
  }

  // Pop operation
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty. Cannot pop.");
      return;
    }
    const removedItem = this.stack[this.top];
    this.top--;
    console.log(`Popped: ${removedItem}`);
    return removedItem;
  }

  // Top operation (peek at the top using pointer)
  topPointer() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
      return;
    }
    console.log(`Top item: ${this.stack[this.top]}`);
    return this.stack[this.top];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === -1;
  }

  // Check the size of the stack
  size() {
    return this.top + 1;
  }

  // Display the stack
  display() {
    console.log("Stack:", this.stack.slice(0, this.top + 1));
  }
}



const myStack = new Stack();

// Push elements
myStack.push(10);
myStack.push(20);
myStack.push(30);

// Peek at the top item
myStack.topPointer(); // Should return 30

// Pop elements
myStack.pop(); // Removes 30
myStack.pop(); // Removes 20

// Display current stack state
myStack.display();

// Check if the stack is empty
console.log("Is the stack empty?", myStack.isEmpty());
