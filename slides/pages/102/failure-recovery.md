---
layout: two-cols-header
section: Recovery
---

# When Copilot Gets It Wrong

::left::

## Diagnose First

**Amplified ambiguity** — Copilot didn't invent a problem. It amplified one already present in the repository. Stale docs, old component names, competing data formats, duplicated utilities, partial migrations — all of these are context signals. Copilot follows them.
→ Remove misleading context. Close stale tabs. Attach the authoritative file.

**Hallucination** — generated code references APIs, functions, or types that don't exist.
→ Attach the actual API file or type definition. Add a concrete example of the existing surface.

**Context gap** — output is generic rather than project-specific.
→ Use `#file`, `#codebase`, or paste a representative snippet. Copilot only reasons about what it sees.

**Scope creep** — more was changed than asked.
→ Ask for smaller, targeted changes. Specify exactly which function to touch.

::right::

## Recover Systematically

**Conflicting output** — two suggestions contradict each other.
→ Restart the conversation. Long context accumulates contradictions.

**Repetitive bad results** — same wrong pattern repeats.
→ Explicitly state what NOT to do: *"Do not use callbacks, use async/await."*

**Confident wrong answer** — Copilot states something incorrect with authority.
→ Validate with documentation, tests, or a second opinion. Never skip validation.

<div class="mt-4 text-sm opacity-70">Most prompt failures are context failures. Copilot amplifies what it sees — if the repository contains two versions of the truth, open tabs decide which one Copilot believes.</div>

<!--
Key reframe: hallucination is not just "Copilot inventing things out of nowhere".
In an ambiguous codebase, Copilot amplifies the ambiguity that already exists.

The festival booking codebase has:
- stale documentation (api-spec.md references field names matching neither data file)
- old component names in component-guide.md (ShowCard, PerformerList, OrderForm)
- competing data formats (festivals.json vs events.json)
- duplicated pricing utilities (pricing.js vs priceCalculator.js)
- partial migrations (EventCard still exists alongside FestivalCard)

When Copilot generates code using eventName instead of name, it's following the open api-spec.md tab.
That's not hallucination. That's context amplification. The fix is context management.

The workflow: problem → diagnose root cause → targeted mitigation → validate the fix
-->

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
