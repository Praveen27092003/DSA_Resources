function mergeSort(arr) {
    // Base case: If array has one or no element, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Step 1: Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Step 2: Recursively sort the two halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Step 3: Merge the two sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let i = 0; // Pointer for the left array
    let j = 0; // Pointer for the right array

    // Step 1: Compare elements and merge
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Step 2: Add remaining elements from the left array
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Step 3: Add remaining elements from the right array
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", arr);

const sortedArray = mergeSort(arr);
console.log("Sorted Array:", sortedArray);
