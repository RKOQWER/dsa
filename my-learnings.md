The confusion comes from a hidden property of states. You can master this entirely by looking at what information determines the answer to a subproblem.
Here is the general rule derived from first principles.

The Universal Rule

You only re-initialize the cache if the answer for a specific coordinate (i, j) depends on the path you took to get there.
To decide whether to reuse or clear your cache, ask yourself this single question:
"If two completely different paths arrive at the exact same coordinate (i, j), will their remaining choices and answers be identical?"
• YES \(\rightarrow \) Reuse the cache. The state is globally absolute.
• NO \(\rightarrow \) You cannot use a simple cache (or you need a new state variable). The state is path-dependent.

Group 1: Reuse the Cache (Absolute States)

In these problems, the grid or string represents a fixed world. The future choices you make from a cell depend only on the remaining boundaries of that world.
• Why it works: In Maximal Square, if you stand at (3, 4), the largest square you can build from that point depends entirely on the matrix values to the right and bottom of (3, 4). It does not matter if you reached (3, 4) by starting at (0, 0) or (2, 2). The future terrain is identical.
• Examples: Maximal Square, Unique Paths, Longest Common Subsequence, Minimum Path Sum.
• Action: Keep a single cache outside all loops. Compute a cell once, and reuse it forever.

Group 2: When Cache Invalidation or Extension is Needed (Path-Dependent States)

You likely encountered problems where a choice made before reaching a state changes the rules for the rest of the problem.
• The Trap: If you pass through a cell and "pick up an item," "spend a key," or "toggled a state" (like allowed to buy/sell a stock), arriving at (i, j) with a key is not the same as arriving at (i, j) without a key.
• Why a simple cache fails: If your cache only tracks dp[i][j], a path that arrived with a key will overwrite the cache. A subsequent path arriving without a key will read that cached answer and cheat, using a key it doesn't possess.

The Logical Choice: Clear the Cache vs. Add a Dimension

When facing path-dependence, you have two design options:
1. Clear the cache between independent runs: If you are running completely separate queries on changing constraints where past actions reset.
2. Add a State Variable (The Real DP Way): Instead of clearing a 2D cache, expand your state definition to capture the restriction. For example, change dp[i][j] to dp[i][j][has_key]. Now, arriving at (3, 4) with a key checks a completely different slot than arriving without a key. Both paths can now safely share the exact same global cache!

How to Derive This on Your Own

If you ever get confused during an interview, sketch a tiny example with two paths meeting at a middle node:
text
Path A: (0,0) ---> (1,1) ---> (2,2) [Arrives with 5 steps left]
Path B: (0,2) ---------------> (2,2) [Arrives with 2 steps left]
Use code with caution.
Look at node (2,2). Ask yourself: Does the future care about the past?
• If the problem tracks remaining steps, the future does care. A simple dp[i][j] cache will break because Path A and Path B have different resource constraints. You must either track steps in your DP state (dp[i][j][steps_left]) or clear/isolate the data if evaluating independent constraints.
• If the problem just asks for the largest square or path sum from (2,2) to the end of a fixed board, the past doesn't matter. Reuse the cache globally.
Does this "does the future care about the past" test help you instantly see why Maximal Square falls into the absolute category? If you want, we can trace a specific path-dependent problem like Best Time to Buy and Sell Stock to see how adding a state variable avoids cache clearing entirely.

