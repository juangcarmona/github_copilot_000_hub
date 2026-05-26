---
layout: default
section: Workspace Indexing
---

# Workspace Indexing (2/2)

<div class="grid grid-cols-2 gap-8 mt-4">

<div class="leading-snug">

## What Helps Indexing

- Focused files (one concept each)
- Descriptive file names
- Clear module boundaries
- Inline documentation at key points

## What Hurts Indexing

- Giant multi-purpose files
- Generic names (`utils.ts`, `helpers.js`)
- Dead code mixed with live code
- Binary files without description

</div>

<div class="leading-snug">

## Quick Wins

| Change | Effect on Indexing |
|---|---|
| Rename `utils.ts` → `date.formatter.ts` | Precise embedding |
| Split 1000-line file | Focused chunks |
| Delete dead code | Less noise |
| Add JSDoc to exports | Richer text signal |

</div>

</div>

<!--
Part 2 of workspace indexing — practical guidance on what helps and hurts.

These are the immediate actions teams can take to improve
how well Copilot retrieves relevant code from their workspace.
-->
