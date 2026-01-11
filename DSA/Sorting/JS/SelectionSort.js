function selectionSort(arr) {
    let n = arr.length;

    // Outer loop for each element in the array
    for (let i = 0; i < n - 1; i++) {
        // Assume the first unsorted element is the smallest
        let minIndex = i;

        // Inner loop to find the smallest element in the unsorted part of the array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update the index of the smallest element
            }
        }

        // Swap the smallest element with the first unsorted element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Example usage
const array = [64, 25, 12, 22, 11];
console.log("Sorted array:", selectionSort(array));
