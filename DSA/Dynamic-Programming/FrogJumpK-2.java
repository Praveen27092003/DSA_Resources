import java.util.Arrays;

public class FrogJumpK {

    // 1️⃣ Recursion (Brute Force) - O(K^N) Time Complexity (TLE for large N)
    public static int frogJumpRecursion(int index, int k, int[] heights) {
        if (index == 0) return 0; // Base case

        int minCost = Integer.MAX_VALUE;
        for (int j = 1; j <= k; j++) {
            if (index - j >= 0) {
                int cost = frogJumpRecursion(index - j, k, heights) + Math.abs(heights[index] - heights[index - j]);
                minCost = Math.min(minCost, cost);
            }
        }
        return minCost;
    }

    // 2️⃣ Recursion + Memoization (Top-Down DP) - O(N*K) Time Complexity
    public static int frogJumpMemo(int index, int k, int[] heights, int[] dp) {
        if (index == 0) return 0; // Base case
        if (dp[index] != -1) return dp[index]; // Return cached result

        int minCost = Integer.MAX_VALUE;
        for (int j = 1; j <= k; j++) {
            if (index - j >= 0) {
                int cost = frogJumpMemo(index - j, k, heights, dp) + Math.abs(heights[index] - heights[index - j]);
                minCost = Math.min(minCost, cost);
            }
        }
        return dp[index] = minCost;
    }

    // 3️⃣ Tabulation (Bottom-Up DP) - O(N*K) Time Complexity
    public static int frogJumpTabulation(int n, int k, int[] heights) {
        int[] dp = new int[n];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0; // Base case

        for (int i = 1; i < n; i++) {
            for (int j = 1; j <= k; j++) {
                if (i - j >= 0) {
                    dp[i] = Math.min(dp[i], dp[i - j] + Math.abs(heights[i] - heights[i - j]));
                }
            }
        }
        return dp[n - 1];
    }

    // 4️⃣ Space Optimized (Best Approach) - O(N*K) Time Complexity, O(1) Space
    public static int frogJumpOptimized(int n, int k, int[] heights) {
        int[] dp = new int[n];
        dp[0] = 0; // Base case

        for (int i = 1; i < n; i++) {
            dp[i] = Integer.MAX_VALUE;
            for (int j = 1; j <= k; j++) {
                if (i - j >= 0) {
                    dp[i] = Math.min(dp[i], dp[i - j] + Math.abs(heights[i] - heights[i - j]));
                }
            }
        }
        return dp[n - 1];
    }

    public static void main(String[] args) {
        int[] heights = {10, 30, 40, 50, 20};
        int k = 3;
        int n = heights.length;

        System.out.println("1️⃣ Recursion (TLE for large N): " + frogJumpRecursion(n - 1, k, heights));

        int[] dp = new int[n];
        Arrays.fill(dp, -1);
        System.out.println("2️⃣ Memoization (Optimized Recursion): " + frogJumpMemo(n - 1, k, heights, dp));

        System.out.println("3️⃣ Tabulation (Bottom-Up DP): " + frogJumpTabulation(n, k, heights));

        System.out.println("4️⃣ Space Optimized DP (Best): " + frogJumpOptimized(n, k, heights));
    }
}
