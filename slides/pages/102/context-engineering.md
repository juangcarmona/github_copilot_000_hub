---
layout: default
section: Context Engineering
---

# Context Engineering Workflow

<div class="grid grid-cols-2 gap-8">
<div class="leading-snug">

The model can only reason about what it sees. Context engineering is the practice of **curating what the model sees**.

**The Three Steps**

1. **Curate project context** — instruction files, architecture docs, conventions
2. **Generate plan** — structured implementation plan from curated context
3. **Generate code** — implementation grounded in plan + guidelines

> Most prompt failures are context failures.

The developers who get consistently good output don't write "better prompts" — they manage what the model sees.

</div>
<div>

<img src="/102/context-engineering-workflow.png" class="w-full object-contain rounded shadow" />

</div>
</div>

<!--
This slide introduces context engineering as a systematic workflow, not a one-shot technique.

The image shows the three-step flow: curate → plan → implement.
This connects forward to 203 (AI-ready repos) and 302 (spec-driven development).
-->
