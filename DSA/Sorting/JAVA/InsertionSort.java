public class InsertionSort {

    // Method to perform Insertion Sort on an array
    public static void insertionSort(int[] arr) {
        int n = arr.length;

        // Iterate through the array
        for (int i = 1; i < n; i++) {
            // Store the current element
            int key = arr[i];
            int j = i - 1;

            // Shift elements of the sorted segment to the right
            // to make room for the key
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            // Place the key in its correct position
            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        // Example usage
        int[] array = {64, 25, 12, 22, 11};

        // Print original array
        System.out.println("Original array:");
        for (int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Call insertionSort method
        insertionSort(array);

        // Print sorted array
        System.out.println("Sorted array:");
        for (int num : array) {
            System.out.print(num + " ");
        }
    }
}
