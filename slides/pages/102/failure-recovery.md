---
layout: two-cols-header
section: Recovery
---

# When Copilot Gets It Wrong

::left::

## Diagnose First

**Hallucination** — generated code references APIs, functions, or types that don't exist.
→ Attach the actual API file or type definition. Add a concrete example.

**Context gap** — output is generic rather than project-specific.
→ Use `#file`, `#codebase`, or paste a representative snippet. Copilot only reasons about what it sees.

**Scope creep** — more was changed than asked.
→ Ask for smaller, targeted changes. Specify exactly which lines or function to touch.

::right::

## Recover Systematically

**Conflicting output** — two suggestions contradict each other.
→ Restart the conversation. Long context accumulates contradictions.

**Repetitive bad results** — same wrong pattern repeats.
→ Explicitly state what NOT to do: *"Do not use callbacks, use async/await."*

**Confident wrong answer** — Copilot states something incorrect with authority.
→ Validate with documentation, tests, or a second opinion. Never skip validation.

<div class="mt-4 text-sm opacity-70">The workflow: problem → diagnose root cause → targeted mitigation → validate the fix</div>

<!--
This is not a list of failure modes — it's a diagnostic workflow.
The pattern is always: understand WHY it went wrong, then apply the right recovery.

Key message: AI failures are usually context failures, not model failures.
Fixing the context fixes the output.
-->
