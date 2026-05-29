---
layout: default
section: Workspace Indexing
---

# Workspace Indexing (1/2)

<div class="grid grid-cols-2 gap-8 mt-4">

<div class="leading-snug">

## How Copilot Finds Relevant Code

When you ask Copilot a question in Chat, it doesn't read your entire codebase. It uses **workspace indexing** to find relevant files.

The workspace index:
- Breaks files into chunks
- Creates embeddings (vector representations)
- Retrieves the most relevant chunks per query

**Your repository structure determines retrieval quality.**

</div>

<div>

<img src="/203/workspace-index-status.png" class="w-full object-contain rounded shadow" />

<div class="mt-3 text-sm opacity-70">
VS Code shows workspace indexing status - indexed repos get better Chat results.
</div>

</div>

</div>

<!--
Workspace indexing is the mechanism behind "Copilot understands my codebase."

If your files are well-structured and well-named, the embeddings are precise
and retrieval returns exactly what's needed.

If your repo is a mess of giant files with generic names, retrieval returns noise.
The AI then generates from noisy context - producing lower quality output.
-->
