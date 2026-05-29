---
layout: default
section: How It Works
---

# What Copilot Can See

<div class="grid grid-cols-2 gap-6">

<div class="leading-snug">

## Implicit (automatic)

- **Active file** — always included in Ask mode
- **Current selection** — highlighted code goes in first
- **Visible errors** — diagnostics from the editor
- **Git state** — recent changes and diffs

## Explicit (you control)

- `#file:auth.ts` — attach a specific file
- `#codebase` — search the workspace index
- `#selection` — current highlighted code
- `#git` — recent commit history

</div>

<div>

<img src="/101/copilot-chat-view-workspace-file-tree.png" class="w-full object-contain rounded shadow" />

</div>

</div>

<div class="mt-4 text-sm opacity-70">

Rule of thumb: start wide (`#codebase`), then narrow to specific files.

</div>

<div class="mt-4 text-sm">
  <strong>Live Demo:</strong> <a href="https://ashy-dune-0b4215a0f.7.azurestaticapps.net/" target="_blank">Token Optimization</a>
  <ul>
    <li>Prompts are only part of the real context.</li>
    <li>Chat history, instructions, and tools also consume tokens.</li>
    <li>Focused context improves quality and latency.</li>
  </ul>
</div>

<!--
Beginners often wonder why Copilot "doesn't know" about a file.
Answer: because it wasn't in the context window.

Key insight: Copilot doesn't read your whole project by default.
You must either reference files explicitly or rely on workspace indexing.
-->
