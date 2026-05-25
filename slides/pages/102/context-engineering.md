---
layout: two-cols-header
section: Context Engineering
---

# How Context Reaches Copilot

::left::

## What Copilot Sees

Every Copilot response is shaped by what fits in the context window:

- **Open files** — active editor tabs signal relevance
- **Selection** — highlighted code is included explicitly
- **Attached references** — `#file`, `#codebase`, `#git`
- **Instruction files** — `.github/copilot-instructions.md` is always loaded
- **Conversation history** — earlier exchanges remain visible

## Context Window Limits

Context windows are finite. When they fill:

- Earlier conversation turns are dropped
- Large files crowd out other signals
- Precision degrades silently

::right::

## Maximizing Context Quality

**Relevance over volume** — attach the right files, not all files.

**Close irrelevant tabs** — open files signal context even when not attached.

**Use instruction files** — repo-wide conventions don't need to be repeated in every prompt.

**Split long sessions** — start fresh when context has drifted. `/clear` resets the window.

**Name things precisely** — variable names, function names, and file names are part of the context signal. Vague names produce vague completions.

<div class="mt-4 text-sm opacity-70">Context quality → output quality. This is the primary variable you control.</div>

<!--
This is a bridge slide — 102 teaches you to craft prompts; 203 teaches you to architect a repo so that context is always available.

Key insight: most prompt failures are not prompt failures. They are context failures.

The developers who get consistently good Copilot output manage their context deliberately.
-->
