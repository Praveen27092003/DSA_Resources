import java.util.Arrays;

class FrogJump {
    
    // Approach 1: Recursion + Memoization
    public static int minCostMemoization(int index, int[] heights, int[] dp) {
        if (index == 0) return 0; // Base case

        if (dp[index] != -1) return dp[index]; // If already computed, return it

        // Cost of jumping from previous stone (1 step)
        int oneStep = Math.abs(heights[index] - heights[index - 1]) + minCostMemoization(index - 1, heights, dp);

        // Cost of jumping from two stones before (2 steps), if possible
        int twoStep = Integer.MAX_VALUE;
        if (index > 1) {
            twoStep = Math.abs(heights[index] - heights[index - 2]) + minCostMemoization(index - 2, heights, dp);
        }

        // Store and return the minimum cost
        return dp[index] = Math.min(oneStep, twoStep);
    }

    public static int solveMemoization(int[] heights) {
        int n = heights.length;
        int[] dp = new int[n];
        Arrays.fill(dp, -1);
        return minCostMemoization(n - 1, heights, dp);
    }

    // Approach 2: Tabulation (Bottom-Up DP)
    public static int minCostTabulation(int[] heights) {
        int n = heights.length;
        int[] dp = new int[n];
        dp[0] = 0;

        for (int i = 1; i < n; i++) {
            int oneStep = Math.abs(heights[i] - heights[i - 1]) + dp[i - 1];
            int twoStep = (i > 1) ? Math.abs(heights[i] - heights[i - 2]) + dp[i - 2] : Integer.MAX_VALUE;
            dp[i] = Math.min(oneStep, twoStep);
        }

        return dp[n - 1];
    }

    // Approach 3: Optimized Space (O(1) Space)
    public static int minCostOptimized(int[] heights) {
        int n = heights.length;
        int prev1 = 0, prev2 = 0;

        for (int i = 1; i < n; i++) {
            int oneStep = Math.abs(heights[i] - heights[i - 1]) + prev1;
            int twoStep = (i > 1) ? Math.abs(heights[i] - heights[i - 2]) + prev2 : Integer.MAX_VALUE;
            int curr = Math.min(oneStep, twoStep);
            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }

    public static void main(String[] args) {
        int[] heights = {10, 30, 40, 20}; // Example input

        System.out.println("Minimum Energy (Memoization): " + solveMemoization(heights));
        System.out.println("Minimum Energy (Tabulation): " + minCostTabulation(heights));
        System.out.println("Minimum Energy (Optimized Space): " + minCostOptimized(heights));
    }
}
