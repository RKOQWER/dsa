# Curriculum — Pattern-Driven DSA for SDE Interviews

> **Read this and tell me if we're on the right track before I build lessons.**

## The core insight behind this curriculum

You told me: *you already know the algorithms, but you freeze on unseen LeetCode medium/hard.* That is a **pattern-recognition and process** problem, not a knowledge problem. So this curriculum is **not** organized as "Chapter 1: Arrays, Chapter 2: Linked Lists" (re-teaching what you know). It is organized around **patterns** — the reusable techniques that LeetCode problems are secretly built from — plus an explicit **solving process** you run on every cold problem.

The Love Babbar 15 topics are the *coverage map* (so we hit every area). The patterns are the *transfer engine* (so you can solve problems you've never seen). Every pattern module pulls its practice problems from the relevant Babbar topics **and** from LeetCode medium/hard in those areas.

---

## Three design principles this curriculum commits to

These come directly from what you told me about how you learn and where you get stuck. Every lesson obeys all three.

### 1. First-principles derivation, not pattern memorization
A lesson never just *names* a pattern and hands you a template. It shows **how a person who already knows the data structures and algorithms (you) can invent the pattern from scratch** by reasoning about the problem's structure. The arc is always:

> brute force → "what's wasteful here?" → the insight that removes the waste → *and that insight IS the pattern.*

The goal is that on a cold problem you **re-derive** the right approach from the problem's properties, instead of trying to recall "which of my 34 patterns is this." Memorized patterns fade; a derivation habit does not. This is the real fix for freezing on unseen problems.

### 2. LeetCode **Hard** is the target, not just medium
Hards are your stated main bottleneck. So every pattern module pushes all the way through to hard-level problems — mediums are the warm-up, hards are the point. Hard problems are usually **two patterns composed** (e.g. binary-search-on-answer *inside* a greedy feasibility check, or DP *on top of* a graph). A dedicated thread teaches **how to decompose a hard into the simpler patterns it's built from** — the exact skill that makes hards tractable.

### 3. Built to survive forgetting
You forget patterns you don't practice for a while — so retention is engineered in, not left to chance:
- **Spaced retrieval**: each session opens with 2-3 quick recall prompts on patterns from *earlier* sessions (not the current one), timed to resurface things right as they'd start fading.
- **Reference cards** are the durable artifact: compressed enough that a 2-minute re-read fully reloads a pattern you haven't touched in weeks.
- **Derivation over recall** (principle 1) is itself the strongest anti-forgetting tool — you can rebuild a forgotten pattern from fundamentals you won't forget.
- **Interleaving** (Part 7): mixing patterns in practice forces the retrieval that builds durable, not illusory, mastery.

---

## Part 0 — The Solving Framework (taught first, used forever)

Before any pattern, one lesson on the **repeatable process** for attacking a cold problem. This is the single most important module for your gap.

- **UPSIR loop**: Understand → Probe for signals → Select pattern → dry-run on a tiny Input → code → Review/test → optimize.
- **Signal → pattern cheat sheet**: a lookup you internalize ("sorted array" → binary search / two pointers; "subarray/substring + optimize" → sliding window; "next greater/smaller" → monotonic stack; "number of ways / min-max over choices" → DP; etc.).
- **How to dry-run and find your own bug** before writing code.
- This becomes a permanent reference doc you'll reuse in every later lesson.

---

## Part 1 — Linear-structure patterns (Arrays, Strings, Matrix, Linked List)

Babbar topics covered: **Arrays (40), Strings (49), Matrix (11), Linked Lists (36)**.

1. **Two Pointers** — opposite ends, same direction, fast/slow. (pair sums, dedup, palindrome, cycle detection, LL middle)
2. **Sliding Window** — fixed & variable size. (longest/shortest substring, subarray sums, min window)
3. **Prefix Sum / Difference Array** — range queries, subarray-sum-equals-k, 2D prefix on matrix.
4. **Hashing patterns** — frequency maps, seen-sets, grouping, anagram keys.
5. **Interval patterns** — sort-by-start, merge, overlap counting, sweep line.
6. **Cyclic / in-place array tricks** — index-as-hash, Dutch national flag, rotation.
7. **Linked List manipulation** — reversal patterns, merge, reorder, dummy-node technique.
8. **Matrix traversal** — spiral, layer rotation, boundary, 2D-as-graph setup.

---

## Part 2 — Search, sort & the "binary search on answer" family

Babbar topics: **Searching & Sorting (35)**, plus **Bit Manipulation (11)**.

9. **Binary search — classic + on answer space** (the big interview unlock: "min/max feasible value" problems like Koko, Book Allocation, Ship Packages).
10. **Sorting as a preprocessing tool** — custom comparators, why/when sorting unlocks greedy or two-pointer.
11. **Quickselect / Kth-element** — partition-based selection.
12. **Bit manipulation patterns** — XOR tricks, subsets via bitmask, set-bit counting, power-of-two.

---

## Part 3 — Recursion-driven patterns (Backtracking, Trees, BST, Trie)

Babbar topics: **Backtracking (16), Binary Trees (40), BST (23), Trie (10)**.

13. **Recursion templates** — the "do / recurse / undo" skeleton; returning vs. accumulating.
14. **Backtracking** — subsets, permutations, combinations, constraint problems (N-Queens, Sudoku, word search) via one unified template.
15. **Tree DFS patterns** — top-down vs bottom-up, "return info up the tree" (diameter, LCA, balanced, path sums).
16. **Tree BFS / level-order** — views, zig-zag, width, right-side.
17. **BST-specific patterns** — inorder = sorted, validation, kth element, range operations.
18. **Trie patterns** — prefix search, word dictionaries, XOR-max-on-trie.

---

## Part 4 — Graph patterns

Babbar topic: **Graphs (45)**.

19. **Graph modeling** — recognizing a problem *is* a graph (grids, states, dependencies).
20. **BFS/DFS traversal patterns** — connected components, flood fill, matrix-as-graph.
21. **Topological sort** — ordering under dependencies (course schedule family).
22. **Shortest path** — BFS (unweighted), Dijkstra, 0-1 BFS, when to use which.
23. **Union-Find (DSU)** — connectivity, cycle detection, Kruskal.
24. **MST & advanced** — Prim/Kruskal, bridges/articulation (lighter touch).

---

## Part 5 — Dynamic Programming (the biggest interview filter)

Babbar topic: **DP (60)** — the largest section, taught as recognizable DP *families* rather than 60 isolated problems.

25. **DP recognition + the recipe** — spotting "optimal substructure + overlapping subproblems"; memo → tabulation conversion.
26. **1D DP** — climbing stairs, house robber, decode ways, word break.
27. **Knapsack family** — 0/1, unbounded, subset-sum, partition, coin change.
28. **Grid DP** — unique paths, min path sum, with obstacles.
29. **String DP** — LCS, edit distance, palindromic subseq, regex/wildcard match.
30. **Interval / partition DP** — matrix-chain, burst balloons, palindrome partitioning.
31. **DP on trees & DP with bitmask** — (lighter touch, interview-relevant subset).
32. **Subsequence-optimization DP (LIS family)** — longest increasing subsequence, longest string chain, largest divisible subset, max-length pair chain, Russian doll envelopes; state = best answer *ending at* index i, transition scans all earlier j.

---

## Part 6 — Stack, Queue & Heap patterns

Babbar topics: **Stacks & Queues (34), Heap (18)**.

33. **Monotonic stack/queue** — next greater/smaller, histogram, sliding-window-max, stock span.
34. **Stack for parsing/simulation** — valid parens, expression eval, min-stack, LRU design.
35. **Heap patterns** — top-K, merge-K, median of stream, "schedule/greedy with a heap."

---

## Part 6b — Advanced tree follow-ups (the "now do it without..." questions)

These are the second-step questions interviewers ask after you give the clean recursive answer to a tree problem. Taught as an appendix to Part 3's tree lessons (15-17) rather than inserted among them.

36. **Iterative traversal with an explicit stack** — pre/in/postorder without recursion; the pausable BST iterator.
37. **Morris traversal & in-place tree tricks** — O(1)-space inorder via threading; flatten-to-list, next-right pointers.
38. **Tree construction & serialization** — rebuild from preorder+inorder; serialize/deserialize codec, duplicate-subtree identity.

---

## Part 7 — Interleaved mastery & mock mode

The real test of transfer. No new patterns — instead:

- **Mixed cold-problem sets** (interleaving): I give you LeetCode mediums/hards *without telling you the pattern*, you run UPSIR and derive the pattern yourself. This is the exercise that fixes your specific gap.
- **Hard decomposition drills**: pure focus on LeetCode **hards** — practicing breaking each one into the 2+ simpler patterns it composes. Directly targets your main bottleneck.
- **Spaced review** of earlier patterns (resurfacing on a forgetting-curve schedule).
- **Timed mock problems** with feedback on your approach, not just the answer.

---

## How each lesson will work (given your gap)

Because you know the algorithms, lessons spend **near-zero time on "what the algorithm is"** and maximum time on derivation, recognition, and transfer. Every lesson follows this shape:

1. **Spaced warm-up** — 2-3 retrieval prompts on *earlier* patterns (anti-forgetting), before any new content.
2. **First-principles derivation** — we take one problem, write the obvious brute force, find what's wasteful, and *derive* the pattern as the fix. You watch the pattern get invented, not announced.
3. **The signals** — having derived it, we name what in a problem statement would make you reach for it again.
4. **A template** you can reproduce from memory (becomes a reference card).
5. **Cold practice — through hard** — 2-4 problems (Babbar + LeetCode medium **and hard**) where *you* decide the pattern and justify it from first principles; I give immediate feedback on your *approach*, not just correctness.
6. **A "trap" problem** that looks like the pattern but isn't — to sharpen discrimination.
7. **A hard problem that composes this pattern with a prior one** — training the decomposition skill that unlocks hards.

Each lesson is short (fits working memory), produces a reusable reference card, and interleaves retrieval of earlier patterns.

---

## Reference docs this will produce (reused across lessons)

- **Signal → Pattern lookup table** (the master cheat sheet).
- **Pattern template cards** (one compact card per pattern: trigger, *first-principles derivation in one line*, template code, complexity, classic problems). Designed so a 2-min re-read reloads a forgotten pattern.
- **Hard-decomposition playbook** — how to break a LeetCode hard into composed patterns.
- **Glossary** of terms used consistently.
- **The UPSIR solving checklist**.

---

## Proposed sequencing (order I'd teach in)

Part 0 → Part 1 → Part 2 → Part 6 (stack/heap pair naturally with arrays) → Part 3 → Part 4 → Part 5 → Part 7 interleaving throughout.

DP (Part 5) is deliberately late — it leans on recursion (Part 3) and is where most interview failures happen, so we hit it once your recursion/pattern muscle is warm.

---

### Status: approved ✅

You've approved the pattern-driven approach and the three design principles (first-principles derivation, hard-level targeting, forgetting-resistant retention). Next step: **Lesson 1 = Part 0, the UPSIR solving framework + signal→pattern cheat sheet.**

Still useful to know (tell me anytime): preferred **session length** (e.g. 20 vs 45 min) so I size lessons right. Default assumption: ~30 min focused sessions.
