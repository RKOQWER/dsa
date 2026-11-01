# Learner's real failure mode: "where is the brute force BELOW the pattern?" (+ pattern interference)

Across the Lesson-1 reps (Koko, Number of Islands), the user's mechanical DS&A knowledge is solid and their U/P steps are frequently correct. On Number of Islands they correctly identified "DFS / connected components" in P, then stalled in S.

**Corrected root cause (user clarified):** the stall was NOT mainly pattern interference. The user believed UPSIR's "state a brute force, then remove the waste" means *every* problem must have a slower, non-pattern brute force sitting beneath the chosen pattern - and they froze because for Number of Islands there is no such thing (the correct traversal, DFS/BFS flood fill, IS the baseline; there's no dumber version to optimize). They were hunting for a layer that doesn't exist.

**The teaching fix that landed:** distinguish two problem kinds in step S -
- **Optimization** ("min/max/longest/best") → brute force differs from pattern; state slow version, find waste, waste reveals the pattern (Koko: try every k → binary search).
- **Enumeration / traversal** ("count/find/list all") → no slower baseline; the correct traversal *is* the answer. Step S collapses - brute force and chosen pattern are the same sentence. Just make it concrete.
Number of Islands is the traversal kind. (Aside taught: Union-Find is an *alternative pattern* for it, not a dumber brute force.)

**Secondary (still real):** mild pattern interference - Koko's "grow a window / minimize a value" frame bled into the Islands attempt.

**Implications for teaching:**
- Teach the optimization-vs-traversal classification explicitly as the FIRST move in step S. This is the user's biggest unlock so far and should be folded into the UPSIR reference card and Lesson 1.
- Keep reinforcing the step-S discriminator question for interference: "Does THIS problem actually have a value to optimize / a window to grow? If not, drop that frame and re-read P."
- Interleaving practice (mixing patterns) is especially important for this user - it directly trains resistance to interference.
- Build confidence: the user repeatedly underrates themselves ("maybe I only solved it because I'd seen it"), despite demonstrably deriving patterns from first principles. Call out their correct derivations explicitly.
- Minor: tighten vocabulary - user conflated "minimize k" with "minimize the maximum" (both → binary search on answer, but distinct signals).
- Step-U habit to drill: an "odd" sentence in a problem usually defines the feasibility function (the Koko ceil-division clause) - decode it, don't skip it.
