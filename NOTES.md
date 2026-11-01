# Teaching Notes & Preferences

Preferences the user has expressed about how they want to be taught DSA.

## Hard rules for every lesson

1. **First-principles derivation, never pattern-dumping.** Do not just name a pattern and give a template. Show how someone who knows the DS&A fundamentals can *invent* the pattern by reasoning from the problem: brute force → spot the waste → the insight that removes it → that insight IS the pattern. Goal: user re-derives approaches on cold problems rather than recalling memorized patterns.

2. **LeetCode HARD is the target.** Hards are the user's stated main bottleneck. Every pattern must push through to hard-level problems. Teach explicitly that hards = composition of 2+ simpler patterns, and drill the decomposition skill.

3. **Engineer for retention / anti-forgetting.** User forgets patterns without practice. Every session opens with spaced retrieval of EARLIER patterns. Reference cards must be re-readable in ~2 min to fully reload a pattern. Interleave in practice.

4. **No cryptic fragments — write complete, self-explaining sentences.** The user strongly dislikes terse two-column "signal → flavor" tables with clue-like fragments ("Opposite ends, converge inward") that assume you already know the answer and ask you to just remember it. Every signal/when-to-use entry must be a full sentence that explains WHAT you see, WHAT you do, and WHY it works — enough that the user can *judge* the mapping, not memorize a flashcard. Prose or explained bullets over fragment tables. (Raised 2026-10-29 on Lesson 2's signals table.)

5. **At least 10 practice problems per lesson**, spanning easy → medium → hard, including genuine hards. Give the problems as a list (name + difficulty + LeetCode URL) — PROBLEMS ONLY, no solutions. The user solves them and will ask if stuck. Do not pre-explain how to solve the practice problems.

6. **Hard-composition problems may only compose ALREADY-TAUGHT patterns.** In Lesson N, the hard problem(s) may use the current pattern plus any patterns from Lessons 1..N-1, but must NEVER require a pattern from a later lesson. This is a strict ordering constraint — honor the curriculum sequence. If a great hard needs a not-yet-taught pattern, pick a different hard.

7. **Do not explain UPSIR anymore.** The user has mastered the UPSIR solving method and will apply it himself. Don't add UPSIR scaffolding/warm-up framing to lessons or re-explain the steps. (Spaced retrieval of earlier *patterns* is still good; just don't narrate the UPSIR process.)

## Other

- Language: **Python**.
- **One self-contained file per lesson.** Each `lessons/NNNN-*.html` embeds its own reference card at the bottom (an `#refcard` section). Do NOT create separate `reference/*.html` files — the user wants everything for a lesson in that lesson's single file. (Set 2026-10-29; the old separate reference cards were merged in and the `reference/` dir deleted.)
- Approach: organize by pattern, not Babbar topic order (user approved).
- Default session length assumption: ~30 min (confirm/adjust with user).
- User already knows algorithms/data structures — do NOT re-explain what an algorithm *is*; spend time on derivation, recognition, and transfer.
