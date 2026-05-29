---
layout: two-cols-header
section: Context Locality
---

# Context Locality

::left::

## The Principle

Place types, interfaces, tests, and documentation **near the code they describe**.

Copilot discovers context from what it can see in the open editor and nearby files. If the type is far from the implementation, Copilot may not find it.

**High locality:**
```
src/orders/
├── order.types.ts        ← interfaces next to code
├── order.service.ts      ← implementation
├── order.service.test.ts ← tests beside the code
└── order.README.md       ← documentation inline
```

**Low locality:**
```
src/types/all-types.ts    ← all types in one file
src/orders/order.service.ts
test/unit/orders/...      ← tests far away
docs/orders.md            ← docs disconnected
```

::right::

## What Locality Buys You

**Type-aware completions** - Copilot uses interfaces to generate implementations that match the contract.

**Test-informed generation** - tests near the code teach Copilot your expected behavior patterns.

**Documentation as context** - inline docs explain business rules that types can't express.

**Consistent patterns** - Copilot mirrors what it sees. Nearby code shapes nearby suggestions.

## Naming as Signal

Vague names produce vague suggestions. Precise names produce precise suggestions.

The names in your codebase are implicit prompts that run before every interaction.

<!--
This absorbs the key message from 101/code-quality-basics and reframes it architecturally.

The insight: these aren't just style preferences. They are context engineering decisions.
A well-named, well-structured, co-located codebase is a better AI partner.
-->
