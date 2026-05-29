---
layout: default
section: Discoverability
---

# Repository Discoverability (2/2)

## Anti-Patterns That Kill Discoverability

**Implicit knowledge:**
```
"Oh, you need to know that /legacy/ is actually
the current code and /src/ is the migration."
```
AI will never know this unless you write it down.

**Configuration elsewhere:**
```
"The real settings are in our internal wiki."
```
Copilot only reads your repository.

**Convention by memory:**
```
"We always put validators in the same file
as the service. Everyone knows that."
```
If it's not visible in structure, it doesn't exist for AI.

<div class="mt-4 text-sm opacity-70">

**The fix:** Make implicit knowledge explicit. If a human needs a tour, an AI needs a document.

</div>

<!--
Part 2 of the discoverability slide - focuses on anti-patterns.

These three anti-patterns are the most common sources
of "why doesn't Copilot understand my project?"

The fix is always the same: write it down in the repository.
-->
