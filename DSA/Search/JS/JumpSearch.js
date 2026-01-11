function jumpSearch(arr, target) {
    let n = arr.length;
    let end = Math.floor(Math.sqrt(n)); // Define block size
    let start = 0; // Start of the current block

    // Jump ahead in blocks to locate the potential block
    while (start < n && arr[Math.min(end, n) - 1] < target) {
        start = step;
        end += Math.floor(Math.sqrt(n));
        if (start >= n) {
            return -1; // Target not found
        }
    }

    // Linear search in the identified block
    for (let i = start; i < Math.min(end, n); i++) {
        if (arr[i] === target) {
            return i; // Element found, return index
        }
    }

    return -1; // Element not found
}

// Example usage
const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18];
const target = 16;

const result = jumpSearch(sortedArray, target);
console.log(result !== -1 ? `Element found at index ${result}` : "Element not found");
