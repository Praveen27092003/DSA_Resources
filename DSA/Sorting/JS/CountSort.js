const arr = [4, 2, 2, 8, 3, 3, 1];

function countingSort(arr) { 
    let max = Math.max(...arr);
    
    let count = new Array(max + 1).fill(0);
    
    // Step 1: Count the occurrences of each element
    for (let no of arr) {
        count[no]++;
    }
    
    // Step 2: Modify the count array to store cumulative sums
    for (let i = 1; i < max + 1; i++) {
        count[i] = count[i] + count[i - 1];
    }
    
    // Step 3: Build the output array
    let output = new Array(arr.length);
    
    // Traverse the input array in reverse to maintain stability
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        output[count[temp] - 1] = temp;
        count[temp]--;
    }
    
    return output;
}

const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
