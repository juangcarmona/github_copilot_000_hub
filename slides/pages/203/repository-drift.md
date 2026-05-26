---
layout: default
section: Repository Drift
---

# Repository Drift (1/2)

## What Is Repository Drift?

The gap between your **intended architecture** and your **actual codebase**.

```
Intended:                              Actual (6 months later):
  orders/ → only order logic             orders/ → imports payment internals
  payments/ → only payment logic         payments/ → has order validation logic
  shared/ → truly shared utilities       shared/ → 47 files, half unused
```

## Why Drift Hurts AI

- **Embeddings become noisy** — retrieval returns wrong context
- **Naming loses meaning** — `orders/` contains non-order code
- **Instructions become stale** — rules reference outdated structure
- **Agents navigate incorrectly** — file paths don't match expectations

## Manual Signals

- "Copilot keeps suggesting imports from the wrong module"
- "Chat references files I deleted months ago"
- "The coding agent puts code in unexpected places"

<!--
Drift is the silent killer of AI-ready repositories.

A repo can start perfectly structured and gradually
lose its AI-friendliness through organic growth.

The key insight: drift detection should be continuous,
not a one-time cleanup effort.
-->
