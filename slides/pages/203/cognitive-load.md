---
layout: two-cols-header
section: Cognitive Load
---

# Repository Cognitive Load (1/2)

::left::

## For Humans AND AI

Cognitive load isn't just a developer experience problem - it directly impacts AI effectiveness.

**High cognitive load repositories:**
- Deep nesting (5+ levels)
- Inconsistent patterns per folder
- Mixed responsibilities in single files
- Undocumented implicit conventions
- Circular dependencies

::right::

## Impact on Copilot

- More tokens spent on irrelevant context
- Suggestions that violate hidden conventions
- Agents that get lost navigating the repo
- Chat that provides contradictory guidance

## The Rule of Three

If navigating to relevant code requires more than **3 hops**, the structure is too deep for both humans and AI.

```
src/orders/order.service.ts       ← 2 hops ✓
src/core/base/abstract/service.ts ← 4 hops ✗
```

<!--
This connects developer experience research to AI effectiveness.

The same principles that reduce cognitive load for developers
also reduce ambiguity for AI systems.

A repo that is hard for a new developer to understand
is equally hard for Copilot to reason about.
-->
