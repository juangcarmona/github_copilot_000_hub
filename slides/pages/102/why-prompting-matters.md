---
layout: two-cols-header
section: Fundamentals
---

# From 101 to 102

::left::

## What changed?

**Module 101** — make Copilot generate code.
Simple, isolated files. Obvious context. Autocomplete.

**Module 102** — make Copilot follow the right version of the codebase.
Competing data formats. Duplicated utilities. Stale docs. Partial migrations.

The skill is not only writing better prompts.
It's controlling what Copilot sees.

::right::

## What is Prompt Engineering?

Designing prompts that help Copilot understand your intent — and ensuring the surrounding context supports that intent.

<div class="text-sm">

| Technique | Approach |
|---|---|
| Neighboring Tabs | Context through open files |
| Zero-Shot | Direct instruction, no examples |
| One-Shot | One example to set the pattern |
| Few-Shot | Multiple examples to teach behavior |
| Divide and Conquer | Break into sequential reasoning |

</div>

<!--
This replaces the generic "what/why/how" framing with an explicit 101→102 bridge.

The key insight: 102 is not just "better prompts" — it's learning to manage context in a codebase
that contains competing truths.

The booking frontend has two data formats, two pricing modules, two state hooks, two API clients,
stale docs that reference components that no longer exist by those names.

In that environment, prompt wording matters less than which files are open.
-->