function radixSort(arr) {
    if (arr.length === 0) return [];

    const max = Math.max(...arr);
    const maxDigits = Math.floor(Math.log10(max)) + 1;

    let divisor = 1;

    for (let i = 0; i < maxDigits; i++) {
        const buckets = Array.from({ length: 10 }, () => []);

        for (const num of arr) {
            const digit = Math.floor((num / divisor) % 10);
            buckets[digit].push(num);
        }

        arr = [].concat(...buckets);
        divisor *= 10;
    }

    return arr;
}

// Example Usage
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Sorted Array:", radixSort(arr));
