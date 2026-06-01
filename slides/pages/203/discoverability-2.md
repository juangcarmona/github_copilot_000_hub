---
layout: default
section: Discoverability
---

# Repository Discoverability (2/2)

## Anti-Patterns That Kill Discoverability

- **Implicit knowledge** — conventions kept in people's heads (e.g., "/legacy/ is current"). AI can't infer this.
- **Configuration elsewhere** — settings in external wikis are invisible to Copilot.
- **Convention by memory** — unspoken rules ("validators live with services") don't surface in retrieval.

<div class="mt-4 text-sm opacity-70">
**The fix:** Make implicit knowledge explicit in the repo: README, ADRs, instruction files, or small guiding docs.

</div>

<!--
Part 2 of the discoverability slide - focuses on anti-patterns.

These three anti-patterns are the most common sources
of "why doesn't Copilot understand my project?"

The fix is always the same: write it down in the repository.
-->
