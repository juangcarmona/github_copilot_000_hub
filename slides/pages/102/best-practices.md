---
layout: two-cols-header
section: Best Practices
---

# The Prompt Engineering Loop

::left::

## Draft
State the task precisely. Include:
- What you want the code to do
- The input and output shapes
- Constraints and non-negotiables
- A concrete example if available

## Evaluate
Read the output critically:
- Does it match your intent?
- Are there implicit assumptions?
- Does it handle edge cases?

::right::

## Refine
Iterate on what's wrong, not what's right:
- Correct a specific failure: *"This doesn't handle null input"*
- Add missing context: *"Use the same error handling pattern as `#file:base-repo.ts`"*
- Constrain the scope: *"Only change the validation function, nothing else"*

## Validate
Always run it. Always review it:
- Tests pass
- Edge cases handled
- No unintended side effects

<div class="mt-4 text-sm opacity-70">One loop iteration is often enough. More than three means the context needs restructuring, not more prompting.</div>

<!--
This replaces the 5-bullet list with a process model.

The insight: prompting is iterative engineering, not one-shot incantation.
The loop is: draft → evaluate → refine → validate.

Show before/after prompts to demonstrate how refinement improves output quality.
-->