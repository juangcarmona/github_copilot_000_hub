---
layout: two-cols-header
section: Model Strategy
---

# Match Model to Task

::left::

## Model Tiers

| Tier | Examples | Best For | Cost |
|---|---|---|---|
| Reasoning | Claude Opus, Codex | Architecture, deep analysis, hard debugging | High |
| Coding | Claude Sonnet, Gemini Pro | Implementation, refactoring, tests | Medium |
| Lightweight | Haiku, GPT mini | Quick edits, boilerplate, iteration | Low |

**Auto mode** selects the model automatically. It's the best default for most developers.

## Context Drives Cost

Within a tier, consumption scales with:
- Context window size (open files, references)
- Conversation length (older turns still count)
- Output length (verbose responses cost more)

::right::

## The Matching Principle

Using a reasoning model for boilerplate is like sending your architect to write documentation.

**Right-size the model:**
- Planning a new service? → Reasoning model
- Implementing the planned service? → Coding model
- Iterating on small fixes? → Lightweight model

## Governance Implication

Org-level visibility into frontier model usage % indicates whether teams are right-sizing or defaulting to the most powerful option for everything.

This is a **coaching conversation**: *"What kinds of tasks are driving the premium model usage?"*

<!--
This merges model-economics + token-economics + model-strategy into one slide.

Pricing evolves — check GitHub's current model pricing docs for exact numbers.
The tiers are illustrative; the matching principle is stable.
-->

<!--
This is the single most actionable recommendation.
- Use reasoning models (Claude Opus, Codex, etc.) only for the thinking phase: architecture decisions, planning, understanding large codebases, debugging tricky issues.
- Switch to coding models (Sonnet, Gemini Pro) for the doing phase: writing code, tests, refactoring. These are excellent at code generation and cost significantly less.
- Use lightweight models (Haiku, GPT mini) for quick iterations: simple completions, boilerplate, formatting, small edits. Minimal credit impact.
One reasoning prompt that saves five coding retries is a win. But ten reasoning prompts for boilerplate is pure overhead.
-->
