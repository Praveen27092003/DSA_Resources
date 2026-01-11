public class SelectionSort {

    // Method to perform Selection Sort on an array
    public static void selectionSort(int[] arr) {
        int n = arr.length;

        // Outer loop for each element in the array
        for (int i = 0; i < n - 1; i++) {
            // Assume the first unsorted element is the smallest
            int minIndex = i;

            // Inner loop to find the smallest element in the unsorted part of the array
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j; // Update the index of the smallest element
                }
            }

            // Swap the smallest element with the first unsorted element
            if (minIndex != i) {
                int temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
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

        // Call selectionSort method
        selectionSort(array);

        // Print sorted array
        System.out.println("Sorted array:");
        for (int num : array) {
            System.out.print(num + " ");
        }
    }
}
