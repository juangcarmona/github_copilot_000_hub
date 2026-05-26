---
layout: default
section: Graphify Analysis
---

# Graphify — First Run Analysis

<img src="/203/graphify-first-run-1.png" class="mx-auto rounded shadow-lg" style="max-height: 380px;" />

<div class="mt-4">

<div class="text-sm">

## What You Get

| Output | Purpose |
|---|---|
| **Node count** | How many code entities exist |
| **Edge count** | How connected the codebase is |
| **Communities** | Clusters of related code (should map to your modules) |
| **God nodes** | High-dependency files that need attention |
| **Audit report** | Structural findings with recommendations |

</div>

</div>

<div class="mt-2 text-sm opacity-70">
If communities don't match your intended architecture, your repo has structural drift.
</div>

<!--
The first run reveals the actual structure of your codebase —
not what you think it looks like, but what it actually looks like.

Teams frequently discover:
- "Utility" files that are actually god objects
- Modules that are more connected than intended
- Dead clusters no one references
- Implicit dependencies that should be explicit
-->
