function quickSort(arr) {
    // Base case: If the array has 0 or 1 element, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Step 1: Choose the pivot (we use the last element here)
    const pivot = arr[arr.length - 1];

    // Step 2: Partition the array into two sub-arrays
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements smaller than the pivot
        } else {
            right.push(arr[i]); // Elements greater than or equal to the pivot
        }
    }

    // Step 3: Recursively sort the left and right sub-arrays, then combine
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const arr = [10, 7, 8, 9, 1, 5];
console.log("Original Array:", arr);

const sortedArray = quickSort(arr);
console.log("Sorted Array:", sortedArray);
