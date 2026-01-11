function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Outer loop for all passes
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Inner loop for comparing elements
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no elements were swapped, the array is sorted
        if (!swapped) break;
    }
    return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array));
