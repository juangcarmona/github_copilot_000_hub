---
layout: default
section: Indexing & Embeddings
---

# How Indexing and Embeddings Work (2/2)

## File Size vs Retrieval Quality

<div class="grid grid-cols-2 gap-8 mt-4">

<div>

```
┌─────────────────────────────────────┐
│  File: utils.ts (2400 lines)        │
│  ┌───────────────────────────────┐  │
│  │ chunk 1: date formatting      │  │
│  │ chunk 2: string helpers       │  │
│  │ chunk 3: array utilities      │  │
│  │ chunk 4: order validation     │  │
│  │ chunk 5: logging wrappers     │  │
│  │ chunk 6: more date stuff      │  │
│  │ chunk 7: payment formatting   │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

Retrieval returns noisy, mixed chunks.

</div>

<div>

```
┌──────────────────────────┐
│ File: order.validator.ts │
│ (45 lines, focused)      │
│ Only order validation    │
└──────────────────────────┘
```

Retrieval returns exactly what's needed.

<div class="mt-6 font-bold">

Smaller, focused files = precise retrieval = better AI output.

</div>

</div>

</div>

<!--
Part 2 - the visual comparison of file size vs retrieval quality.

This is the most intuitive way to understand why "break up big files" matters:
it's not just about readability - it's about what the AI retrieves as context.
-->
