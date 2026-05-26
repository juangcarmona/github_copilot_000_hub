---
layout: default
section: Indexing & Embeddings
---

# How Indexing and Embeddings Work (1/2)

<div class="grid grid-cols-2 gap-8">

<div class="leading-snug">

## The Retrieval Pipeline

```
Your code files
    ↓
Chunked into segments (~100-200 lines)
    ↓
Each chunk → embedding vector
    ↓
Stored in local index
    ↓
Query → embedding → similarity search
    ↓
Top-K relevant chunks → context window
```

</div>

<div class="leading-snug">

## What Makes a Good Chunk

- **Self-contained** — one function, one class, one concept
- **Well-named** — file name adds semantic signal
- **Typed** — interfaces provide structural context
- **Documented** — JSDoc/XML doc adds retrievable text

## What Makes a Bad Chunk

- Mixed concerns in one file
- 2000 lines of unrelated code
- Generic names (`data`, `item`, `result`)
- No comments or type information

</div>

</div>

<!--
This demystifies the mechanism.

Teams often wonder "why does Copilot sometimes give bad answers about my code?"

The answer is often: retrieval returned the wrong chunks because
files are too large, poorly named, or mix unrelated concerns.

The fix is structural: break files apart, name them well, keep them focused.
-->
