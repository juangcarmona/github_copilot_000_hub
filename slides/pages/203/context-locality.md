---
layout: two-cols-header
section: Context Locality
---

# Context Locality

::left::

## The Principle

Place types, tests, and docs near the code they describe — Copilot uses the open editor and nearby files to assemble context. Distant types, tests, or docs may be omitted from retrieval.

**High locality** (good):
```
src/orders/
├── order.types.ts
├── order.service.ts
├── order.service.test.ts
└── order.README.md
```

**Low locality** (bad):
```
src/types/all-types.ts
src/orders/order.service.ts
test/unit/orders/...
docs/orders.md
```

::right::

## What Locality Buys You


**Type-aware completions** — implementations that match interfaces.

**Test-informed generation** — tests near code provide expected behavior examples.

**Documentation as context** — inline docs clarify business rules.

**Consistent patterns** — nearby code shapes suggestions.

## Naming as Signal

Vague names produce vague suggestions; precise names yield precise suggestions. File and symbol names act as implicit prompts for Copilot.

<!--
This absorbs the key message from 101/code-quality-basics and reframes it architecturally.

The insight: these aren't just style preferences. They are context engineering decisions.
A well-named, well-structured, co-located codebase is a better AI partner.
-->
