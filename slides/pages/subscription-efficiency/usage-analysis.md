---
layout: two-cols-header
section: Usage Analysis
---

# Reading and Acting on Usage Data

::left::

## Signals Worth Exploring

| Signal | What It Tells You |
|---|---|
| **Total requests** | Interactive usage level across the org |
| **Frontier %** | Share of premium reasoning model usage |
| **% Auto mode** | Manual vs. automatic model selection habits |
| **AI usage level** | Relative usage — outliers in both directions |
| **Billed requests** | Requests beyond included quota |

<div class="mt-4 text-sm opacity-70">

Read usage data as adoption and workflow signals — not as productivity scores.

</div>

::right::

## When to Have a Conversation

**Low usage** — may indicate adoption friction, not low value.
→ *"What kinds of tasks are you using Copilot for most?"*

**Low frontier + low Auto** — always picking lightweight models manually.
→ Suggest Auto mode as the default. It selects the right model for the task.

**Very high frontier usage** — premium models for everything.
→ Reserve reasoning models for architecture, hard debugging, large-scale analysis.
→ Coding and lightweight models handle implementation efficiently.

**Unusual spikes** — agent workflows or code review on large PRs.
→ Review workflow design, not individual behavior.

<div class="mt-4 text-sm opacity-70">Context always matters. The conversation starts with curiosity, not judgment.</div>

<!--
This merges report-guide + report-alarms into one actionable slide.

Two layers:
1. What the signals mean (table)
2. What to do when you see each pattern (conversation starters)

The framing throughout: usage data is operational intelligence, not surveillance.
-->
