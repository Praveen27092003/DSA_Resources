public class InterpolationSearchExample {
    public static void main(String[] args) {
        int[] sortedArray = {10, 20, 30, 40, 50, 60, 70, 80, 90};
        int target = 50;

        // Perform interpolation search
        int result = interpolationSearch(sortedArray, target);

        if (result != -1) {
            System.out.println("Element found at index: " + result);
        } else {
            System.out.println("Element not found");
        }
    }

    // Interpolation search implementation
    public static int interpolationSearch(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;

        while (low <= high && target >= arr[low] && target <= arr[high]) {
            // Estimate the position using interpolation formula
            int pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]);

            // Check if the element is found
            if (arr[pos] == target) {
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
}
