---
layout: two-cols-header
section: Techniques
---

# Divide and Conquer

### Staged AI-assisted engineering: one decision at a time

::left::

## Why It Works

- Fits within context limits
- Allows iterative validation at each step
- Reduces hallucination surface area
- Each step can be verified before the next begins

## The Pattern

Instead of one big prompt, structure work as a pipeline:

1. **Audit** — understand what exists and where
2. **Design** — define the target before touching code
3. **Implement** — build one focused module
4. **Migrate** — update consumers one at a time
5. **Verify** — check for remaining references

::right::

## Applied Example: Pricing Consolidation

```
// Step 1: Audit
List all places in this codebase where ticket prices
are calculated. Note which file, which function,
and what each calculation includes.

// Step 2: Design
Define the signature for priceService.js
Do not write the implementation yet.

// Step 3: Implement
Write calculatePrice() in priceService.js
based on the agreed design.

// Step 4: Migrate (one at a time)
Update BookingForm.jsx to import from priceService.js.
Keep the existing UI unchanged.

// Step 5: Verify
Search for remaining imports of pricing.js
or priceCalculator.js and list them.
```

<!--
This reframes "split big tasks" as a methodology for AI-assisted migration.

The audit step is critical: Copilot cannot reliably audit a codebase in one pass
if it contains competing implementations. Do the audit first, validate it, then proceed.

The design step prevents "hallucinated implementations" — if you agree on the signature first,
the implementation has a target to conform to.

This pattern is proto-orchestration: it's not agents or Spec Kit — it's sequential prompting
with validation gates. 202 and 302 extend this further.
-->