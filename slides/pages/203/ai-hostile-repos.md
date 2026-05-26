---
layout: comparison
section: AI-Hostile Repositories
beforeTitle: AI-Hostile
afterTitle: AI-Friendly
---

# AI-Hostile vs AI-Friendly Repositories

::before::

```
src/
├── utils.js              ← 2400 lines, everything
├── helpers.js            ← overlaps with utils.js
├── types.ts              ← all types, all domains
├── index.js              ← 800-line god file
├── stuff/
│   ├── thing1.js
│   └── thing2.js
└── old/
    └── utils-backup.js   ← which is current?
```

**Symptoms:**
- Copilot suggests code that already exists elsewhere
- Completions reference wrong types
- Agents can't find relevant files
- Chat answers contradict the codebase

::after::

```
src/
├── orders/
│   ├── order.types.ts
│   ├── order.service.ts
│   ├── order.service.test.ts
│   └── README.md
├── payments/
│   ├── payment.types.ts
│   ├── payment.processor.ts
│   ├── payment.processor.test.ts
│   └── README.md
└── shared/
    └── money.ts          ← one clear utility
```

**Outcomes:**
- Copilot infers intent from folder context
- Types are discoverable and scoped
- Agents navigate by convention
- Completions match domain boundaries

<!--
This slide establishes the anti-pattern first.

AI-hostile repositories share traits:
- God files that mix concerns
- Ambiguous naming that confuses embeddings
- Duplicated logic that creates contradictory context
- Missing boundaries that prevent scoped reasoning

The fix is structural, not tooling.
-->
