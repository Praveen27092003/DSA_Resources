class MaxHeap {
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
      this.data[index] > this.Parent(index)
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  // Delete the root node (maximum value)
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
      let largest = index;
      const left = this.getLeftIndex(index);
      const right = this.getRightIndex(index);

      if (left < length && this.data[left] > this.data[largest]) {
        largest = left;
      }

      if (right < length && this.data[right] > this.data[largest]) {
        largest = right;
      }

      if (largest === index) break;

      this.swap(index, largest);
      index = largest;
    }
  }

  // Print the heap data
  printHeap() {
    console.log("Heap:", this.data);
  }
}

// Example Usage
const maxHeap = new MaxHeap();
maxHeap.insert(10); // Heap: [10]
maxHeap.insert(2);  // Heap: [10, 2]
maxHeap.insert(3);  // Heap: [10, 2, 3]
maxHeap.insert(7);  // Heap: [10, 7, 3, 2]
maxHeap.insert(9);  // Heap: [10, 9, 3, 2, 7]
maxHeap.insert(4);  // Heap: [10, 9, 4, 2, 7, 3]
maxHeap.insert(0);  // Heap: [10, 9, 4, 2, 7, 3, 0]

maxHeap.printHeap(); // Output: Heap: [10, 9, 4, 2, 7, 3, 0]

maxHeap.delete();    // Deletes 10. Output: Deleted successfully: 10
maxHeap.printHeap(); // Output: Heap: [9, 7, 4, 2, 0, 3]

console.log(maxHeap.hasLeft(0));  // true (Root node has a left child)
console.log(maxHeap.hasRight(1)); // true (Node at index 1 has a right child)

maxHeap.insert(12); // Heap: [12, 9, 4, 7, 0, 3, 2]
maxHeap.printHeap();
