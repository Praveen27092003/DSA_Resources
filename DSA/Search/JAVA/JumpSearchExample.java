public class JumpSearchExample {
    public static void main(String[] args) {
        int[] sortedArray = {2, 4, 6, 8, 10, 12, 14, 16, 18};
        int target = 16;

        // Perform jump search
        int result = jumpSearch(sortedArray, target);

        if (result != -1) {
            System.out.println("Element found at index: " + result);
        } else {
            System.out.println("Element not found");
        }
    }

    // Jump search implementation
    public static int jumpSearch(int[] arr, int target) {
        int n = arr.length;
        int step = (int) Math.floor(Math.sqrt(n)); // Define block size
        int prev = 0;

        // Jump ahead in blocks to locate the potential block
        while (arr[Math.min(step, n) - 1] < target) {
            prev = step;
            step += (int) Math.floor(Math.sqrt(n));
            if (prev >= n) {
                return -1; // Target not found
            }
        }

        // Linear search in the identified block
        for (int i = prev; i < Math.min(step, n); i++) {
            if (arr[i] == target) {
                return i; // Element found, return index
            }
        }

        return -1; // Element not found
    }
}
