---
layout: default
section: Discoverability
---

# Repository Discoverability (1/2)

<div class="leading-snug">

## What "Discoverable" Means for AI

A discoverable repository is one where an agent (or new developer) can answer these questions from structure alone:

1. **What does this project do?** → `README.md`
2. **What are the conventions?** → `copilot-instructions.md`
3. **What was decided and why?** → `docs/adr/`
4. **Where is the code for X?** → predictable folder structure
5. **How do I run this?** → `SETUP.md` or `Makefile`

## Discoverability Checklist

```markdown
✓ README.md explains purpose in first paragraph
✓ Folder names match domain concepts
✓ No hidden configuration (everything in repo)
✓ Entry points are obvious (main, index, Program)
✓ Tests mirror source structure
✓ No dead code confusing retrieval
```

</div>

<!--
Discoverability is the bridge between good code and AI-effective code.

Code can be well-written but undiscoverable:
- Good logic buried in unexpected locations
- Conventions that exist only in team memory
- Architecture that requires oral tradition to understand

The fix: externalize knowledge into files that AI can read.
-->
