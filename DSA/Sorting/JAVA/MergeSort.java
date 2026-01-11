import java.util.Arrays;

class MergeSort {

    // Merge Sort function
    public static int[] mergeSort(int[] arr) {
        // Base case: If array has one or no elements, it is already sorted
        if (arr.length <= 1) {
            return arr;
        }

        // Step 1: Divide the array into two halves
        int mid = arr.length / 2;
        int[] left = Arrays.copyOfRange(arr, 0, mid);
        int[] right = Arrays.copyOfRange(arr, mid, arr.length);

        // Step 2: Recursively sort the two halves
        int[] sortedLeft = mergeSort(left);
        int[] sortedRight = mergeSort(right);

        // Step 3: Merge the two sorted halves
        return merge(sortedLeft, sortedRight);
    }

    // Merge function
    public static int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int i = 0, j = 0, k = 0;

        // Step 1: Compare elements and merge
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result[k++] = left[i++];
            } else {
                result[k++] = right[j++];
            }
        }

        // Step 2: Add remaining elements from the left array
        while (i < left.length) {
            result[k++] = left[i++];
        }

        // Step 3: Add remaining elements from the right array
        while (j < right.length) {
            result[k++] = right[j++];
        }

        return result;
    }

    // Main function to test merge sort
    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        System.out.println("Original Array: " + Arrays.toString(arr));

        int[] sortedArray = mergeSort(arr);
        System.out.println("Sorted Array: " + Arrays.toString(sortedArray));
    }
}
