function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const target = 30;

const result = linearSearch(numbers, target);
if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found");
}
