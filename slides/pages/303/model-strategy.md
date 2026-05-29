---
layout: default
section: Model Strategy
---

# Match Model to Task

<div class="grid grid-cols-2 gap-6 mt-4">
<div class="leading-snug">

<div class="text-sm">

| Tier | Examples | Best For |
|---|---|---|
| Reasoning | Claude Opus, Codex | Architecture, deep analysis |
| Coding | Sonnet, Gemini Pro | Implementation, tests |
| Lightweight | Haiku, GPT mini | Quick edits, boilerplate |

</div>

**Auto mode** selects automatically - best default.

**The Matching Principle:**
- Planning a service? → Reasoning model
- Implementing it? → Coding model
- Iterating on fixes? → Lightweight model

**Governance Signal:**
High frontier % → *"What tasks drive premium usage?"*

</div>
<div>

<img src="/303/model-dropdown-change-model-v2.png" class="w-full object-contain rounded shadow" />

</div>
</div>

<!--
This merges model-economics + token-economics + model-strategy into one slide.

Pricing evolves - check GitHub's current model pricing docs for exact numbers.
The tiers are illustrative; the matching principle is stable.
-->

<!--
This is the single most actionable recommendation.
- Use reasoning models (Claude Opus, Codex, etc.) only for the thinking phase: architecture decisions, planning, understanding large codebases, debugging tricky issues.
- Switch to coding models (Sonnet, Gemini Pro) for the doing phase: writing code, tests, refactoring. These are excellent at code generation and cost significantly less.
- Use lightweight models (Haiku, GPT mini) for quick iterations: simple completions, boilerplate, formatting, small edits. Minimal credit impact.
One reasoning prompt that saves five coding retries is a win. But ten reasoning prompts for boilerplate is pure overhead.
-->
