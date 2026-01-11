class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // Pointer to the next node
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Starting point of the linked list
  }

  // Add a node at the end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Add a node at the beginning
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Delete a node by value
  delete(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Search for a node by value
  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Get the length of the linked list
  getLength() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Reverse the linked list
  reverse() {
    let previous = null;
    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  // Get the middle node
  getMiddle() {
    if (!this.head) return null;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next; // Move slow pointer by one step
      fast = fast.next.next; // Move fast pointer by two steps
    }

    return slow; // Slow pointer points to the middle
  }

  // Get the nth node from the end
  getNthFromEnd(n) {
    if (!this.head || n <= 0) return null;

    let main = this.head;
    let ref = this.head;

    // Move ref pointer n steps ahead
    for (let i = 0; i < n; i++) {
      if (!ref) return null; // If n is greater than the length of the list
      ref = ref.next;
    }

    // Move both pointers one step at a time until ref reaches the end
    while (ref) {
      main = main.next;
      ref = ref.next;
    }

    return main; // Main pointer points to the nth node from the end
  }

  // Detect if the linked list has a cycle
  hasCycle() {
    if (!this.head) return false;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true; // Cycle detected
      }
    }

    return false; // No cycle
  }

  // Print the linked list
  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result + 'null');
  }
}





const list = new LinkedList();

// Append elements
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.print(); // Output: 10 -> 20 -> 30 -> 40 -> 50 -> null

// Get the middle node
const middle = list.getMiddle();
console.log(`Middle Node: ${middle ? middle.data : "List is empty"}`); // Output: Middle Node: 30

// Get the nth node from the end
const nthNode = list.getNthFromEnd(2);
console.log(`2nd Node from End: ${nthNode ? nthNode.data : "Invalid position"}`); // Output: 2nd Node from End: 40

// Detect if the list has a cycle
console.log(`Has Cycle: ${list.hasCycle()}`); // Output: Has Cycle: false

// Create a cycle for testing
list.head.next.next.next.next.next = list.head.next; // Creates a cycle
console.log(`Has Cycle: ${list.hasCycle()}`); // Output: Has Cycle: true

