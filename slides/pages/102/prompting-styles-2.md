---
layout: two-cols-header
section: Techniques
---

# Prompting Styles: Refactor & Plan

### Match prompt structure to task type

::left::

## Refactoring

```text
"Refactor calculateTotal() to use reduce
instead of a for loop. Keep the same
function signature and return value.
Don't change any other functions."
```

**Focus:** target transformation, unchanged boundaries, scope limits.

::right::

## Planning

```text
"I need to add real-time notifications.
What are the architectural options?
Consider: WebSockets, SSE, polling.
List tradeoffs for each. Don't write code."
```

**Focus:** options, tradeoffs, no implementation yet.

<!--
Refactoring: define the transformation (before → after + boundaries)
Planning: request analysis (options + tradeoffs + no code)

Key insight: planning prompts explicitly say "don't write code" —
this prevents the model from jumping to implementation before design is agreed.
-->
