import java.util.Arrays;

public class BinarySearchExample {
    public static void main(String[] args) {
        int[] numbers = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20};
        int target = 10;

        // Perform binary search
        int result = binarySearch(numbers, target);

        if (result == -1) {
            System.out.println("Element not found.");
        } else {
            System.out.println("Element found at index: " + result);
        }
    }

    // Binary search implementation
    public static int binarySearch(int[] array, int target) {
        int left = 0;
        int right = array.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2; // Avoids overflow for large indexes

            // Check if the target is at mid
            if (array[mid] == target) {
                return mid;
            }

            // If the target is greater, ignore the left half
            if (array[mid] < target) {
                left = mid + 1;
            }
            // If the target is smaller, ignore the right half
            else {
                right = mid - 1;
            }
        }

        // Target not found
        return -1;
    }
}
