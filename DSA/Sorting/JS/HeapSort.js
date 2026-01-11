// Heap Sort Implementation
function heapSort(arr) {
    let n = arr.length;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Swap the current root with the end element
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

// Heapify function to maintain heap property
function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // Left child index
    let right = 2 * i + 2; // Right child index

    // If the left child is larger than the root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If the right child is larger than the largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If the largest is not the root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Example usage
let array = [12, 11, 13, 5, 6, 7];
console.log("Original array:", array);
let sortedArray = heapSort(array);
console.log("Sorted array:", sortedArray);
