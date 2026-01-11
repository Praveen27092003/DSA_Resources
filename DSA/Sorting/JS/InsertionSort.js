const array = [64, 25, 12, 22, 11];

let n = array.length

for(let i =1; i<n; i++){
    
    for(let j = i; j> 0; j--){
        if(array[j] < array[j - 1]){
            [array[j], array[j - 1]] = [array[j - 1], array[j]]
        } else {
            break
        }
    }
    
}

console.log(array)

//ANOTHER METHOD

function insertionSort(arr) {
    let n = arr.length;

    // Iterate through the array
    for (let i = 1; i < n; i++) {
        // Store the current element
        let key = arr[i];
        let j = i - 1;

        // Shift elements of the sorted segment to the right
        // to make room for the key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the key in its correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage
const arra = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", insertionSort(arra));
