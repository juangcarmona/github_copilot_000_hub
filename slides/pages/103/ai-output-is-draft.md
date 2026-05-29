---
layout: default
section: Workflow
---

# AI Output is Draft Code

<div class="grid grid-cols-2 gap-8 mt-4">
<div class="leading-snug">

## What this means operationally

Every Copilot output - inline, chat, agent - is a **draft**.

It requires the same steps as any code change:

- Read the diff
- Verify APIs exist
- Run tests
- Check behavior, not just syntax
- Review before committing

</div>
<div class="leading-snug">

## The autonomy tradeoff

The more autonomous the interaction, the larger the diff to review.

| Mode | Output scope | Review effort |
|------|-------------|---------------|
| Autocomplete | A few lines | Low |
| Chat | A function/file | Medium |
| Agent | Multiple files | High |

</div>
</div>

<div class="mt-4 text-sm opacity-70">Compilation is a syntax check. The workflow on the next slide is the verification check.</div>

<!--
One framing slide for the whole module - not a philosophy lecture.

The trust idea is collapsed into operational steps: read, verify, run, check, review.
The autonomy table is practical: more autonomy = more review, not more trust.

This replaces trust-boundaries.md which was too abstract.
-->
