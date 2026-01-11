function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Estimate the position using interpolation formula
        const pos = low + Math.floor(
            ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
        );

        // Check if the element is found
        if (arr[pos] === target) {
            return pos;
        }

        // If target is larger, target is in the upper part
        if (arr[pos] < target) {
            low = pos + 1;
        } 
        // If target is smaller, target is in the lower part
        else {
            high = pos - 1;
        }
    }

    return -1; // Element not found
}

// Example usage
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target = 50;

const result = interpolationSearch(sortedArray, target);
console.log(result !== -1 ? `Element found at index ${result}` : "Element not found");
