# Build plan — full lesson ordering (source of truth for composition constraint)

Each lesson's hard-composition problem may compose THIS lesson's pattern + any pattern from LOWER-numbered lessons only. Never a higher-numbered one.

| # | Lesson | Pattern | Babbar topic |
|---|--------|---------|--------------|
| 01 | solving-framework-upsir | UPSIR process + signal→pattern | Part 0 — DONE |
| 02 | two-pointers | Two pointers (all flavors) | Arrays/Strings/LL — DONE |
| 03 | sliding-window | Sliding window (fixed + variable) | Arrays/Strings |
| 04 | prefix-sum | Prefix sum / difference array | Arrays/Matrix |
| 05 | hashing-patterns | Hashing: freq maps, seen-sets, grouping | Arrays/Strings |
| 06 | intervals | Interval patterns, sort+sweep, merge | Arrays |
| 07 | cyclic-inplace-array | Index-as-hash, Dutch flag, rotation | Arrays |
| 08 | linked-list-manipulation | Reversal, merge, reorder, dummy node | Linked Lists |
| 09 | matrix-traversal | Spiral, layer rotation, boundary | Matrix |
| 10 | binary-search | Binary search classic + on answer | Searching/Sorting |
| 11 | sorting-as-tool | Custom comparators, sort-then-greedy | Searching/Sorting |
| 12 | quickselect | Quickselect / kth element | Searching/Sorting |
| 13 | bit-manipulation | XOR tricks, bitmask subsets, set bits | Bit Manipulation |
| 14 | recursion-templates | Recursion skeleton: do/recurse/undo | Backtracking base |
| 15 | backtracking | Subsets/perms/combos/constraint grids | Backtracking |
| 16 | tree-dfs | Tree DFS top-down vs bottom-up | Binary Trees |
| 17 | tree-bfs | Level-order / views / zigzag | Binary Trees |
| 18 | bst-patterns | Inorder=sorted, validate, kth, range | BST |
| 19 | trie-patterns | Prefix search, word dict, XOR-on-trie | Trie |
| 20 | graph-modeling | Recognizing a problem IS a graph | Graphs |
| 21 | graph-bfs-dfs | Components, flood fill, matrix-as-graph | Graphs |
| 22 | topological-sort | Ordering under dependencies | Graphs |
| 23 | shortest-path | BFS/Dijkstra/0-1 BFS, when which | Graphs |
| 24 | union-find | DSU: connectivity, cycle, Kruskal | Graphs |
| 25 | mst-advanced | Prim/Kruskal, bridges/articulation | Graphs |
| 26 | dp-recognition | DP recipe, memo→tabulation | DP |
| 27 | dp-1d | Climbing stairs, house robber, decode | DP |
| 28 | dp-knapsack | 0/1, unbounded, subset-sum, coin change | DP |
| 29 | dp-grid | Unique paths, min path sum, obstacles | DP |
| 30 | dp-string | LCS, edit distance, palindromic subseq | DP |
| 31 | dp-interval | Matrix-chain, burst balloons, partition | DP |
| 32 | dp-tree-bitmask | DP on trees, DP with bitmask | DP |
| 33 | monotonic-stack-queue | Next greater/smaller, histogram, window max | Stacks/Queues |
| 34 | stack-parsing-design | Valid parens, expr eval, min-stack, LRU | Stacks/Queues |
| 35 | heap-patterns | Top-K, merge-K, median stream, greedy+heap | Heap |
| 36 | meet-in-the-middle | Split input, enumerate halves, combine by closest/exact/≤ | Part 7 — advanced |

Part 7 (interleaving/mock) is not a lesson file — it's an ongoing mode handled in chat. Lesson 36+ are advanced composition techniques added on request.

## Style contract every lesson file MUST follow
- Self-contained HTML, `<link rel="stylesheet" href="../assets/course.css">`, `<script src="../assets/quiz.js"></script>`.
- Structure: title/intro → spaced retrieval of EARLIER patterns (quiz, no UPSIR narration) → first-principles derivation from brute force (brute force → spot waste → insight = pattern) → "when to use & why" in COMPLETE SENTENCES (no cryptic fragment tables) → Python template → ≥10 practice problems (name + difficulty + real LeetCode URL, PROBLEMS ONLY no solutions) → hard composition problem(s) composing ONLY patterns from lessons ≤ this number, shown in a <details> with the decomposition → ask-teacher reminder → embedded `#refcard` reference card → lesson-nav.
- Python. First-principles, not memorization. Do NOT explain UPSIR.
- Verify LeetCode problem URLs are real (slug matches the canonical problem).
