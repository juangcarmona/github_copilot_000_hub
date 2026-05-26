---
layout: default
section: Techniques
---

# Divide and Conquer

### Staged AI-assisted engineering: one decision at a time

<div class="grid grid-cols-2 gap-8">
<div class="leading-snug">

**Why It Works**

- Fits within context limits
- Allows iterative validation at each step
- Reduces hallucination surface area
- Each step can be verified before the next begins

</div>
<div class="leading-snug">

**The Pattern**

Instead of one big prompt, structure work as a pipeline:

1. **Audit** — understand what exists and where
2. **Design** — define the target before touching code
3. **Implement** — build one focused module
4. **Migrate** — update consumers one at a time
5. **Verify** — check for remaining references

</div>
</div>

<!--
This reframes "split big tasks" as a methodology for AI-assisted migration.

The audit step is critical: Copilot cannot reliably audit a codebase in one pass
if it contains competing implementations. Do the audit first, validate it, then proceed.

The design step prevents "hallucinated implementations" — if you agree on the signature first,
the implementation has a target to conform to.

This pattern is proto-orchestration: it's not agents or Spec Kit — it's sequential prompting
with validation gates. 202 and 302 extend this further.
-->