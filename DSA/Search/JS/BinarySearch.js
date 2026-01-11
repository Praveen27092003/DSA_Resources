function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return mid; // Return the index if the target is found
        } else if (array[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return -1; // Return -1 if the target is not found
}

// Example usage:
const sortedArray = [10, 20, 30, 40, 50];
const target = 30;

const result = binarySearch(sortedArray, target);
if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found");
}
