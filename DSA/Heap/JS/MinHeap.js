class MinHeap {
  constructor() {
    this.data = [];
  }

  // Get the parent index of a given node
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Get the left child index of a given node
  getLeftIndex(index) {
    return 2 * index + 1;
  }

  // Get the right child index of a given node
  getRightIndex(index) {
    return 2 * index + 2;
  }

  // Get the value of the parent node
  Parent(index) {
    return this.data[this.getParentIndex(index)];
  }

  // Get the value of the left child node
  Left(index) {
    return this.data[this.getLeftIndex(index)];
  }

  // Get the value of the right child node
  Right(index) {
    return this.data[this.getRightIndex(index)];
  }

  // Check if a node has a parent
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  // Check if a node has a left child
  hasLeft(index) {
    return this.getLeftIndex(index) < this.data.length;
  }

  // Check if a node has a right child
  hasRight(index) {
    return this.getRightIndex(index) < this.data.length;
  }

  // Swap two nodes in the heap
  swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }

  // Insert a value into the heap
  insert(value) {
    this.data.push(value);
    this.heapifyUp();
    console.log("Inserted successfully:", this.data);
  }

  // Heapify up to maintain the heap property after insertion
  heapifyUp() {
    let index = this.data.length - 1;
    while (
      this.hasParent(index) &&
      this.data[index] < this.Parent(index)
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  // Delete the root node (minimum value)
  delete() {
    if (this.data.length === 0) return null;
    if (this.data.length === 1) return this.data.pop();

    const root = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown();
    console.log("Deleted successfully:", root);
    return root;
  }

  // Heapify down to maintain the heap property after deletion
  heapifyDown() {
    let index = 0;
    const length = this.data.length;

    while (true) {
      let smallest = index;
      const left = this.getLeftIndex(index);
      const right = this.getRightIndex(index);

      if (left < length && this.data[left] < this.data[smallest]) {
        smallest = left;
      }

      if (right < length && this.data[right] < this.data[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }
  }

  // Print the heap data
  printHeap() {
    console.log("Heap:", this.data);
  }
}

// Example Usage
const heap = new MinHeap();
heap.insert(10); // Heap: [10]
heap.insert(2);  // Heap: [2, 10]
heap.insert(3);  // Heap: [2, 10, 3]
heap.insert(7);  // Heap: [2, 7, 3, 10]
heap.insert(9);  // Heap: [2, 7, 3, 10, 9]
heap.insert(4);  // Heap: [2, 7, 3, 10, 9, 4]
heap.insert(0);  // Heap: [0, 2, 3, 7, 9, 4, 10]

heap.printHeap(); // Output: Heap: [0, 2, 3, 7, 9, 4, 10]

heap.delete();    // Deletes 0. Output: Deleted successfully: 0
heap.printHeap(); // Output: Heap: [2, 7, 3, 10, 9, 4]

console.log(heap.hasLeft(0));  // true (Root node has a left child)
console.log(heap.hasRight(1)); // true (Node at index 1 has a right child)

heap.insert(10); // Heap: [2, 7, 3, 10, 9, 4, 10]
heap.printHeap();
