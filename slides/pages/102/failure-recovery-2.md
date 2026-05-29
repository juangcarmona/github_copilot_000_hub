---
layout: default
section: Recovery
---

# When Copilot Gets It Wrong (2/2)

## Recover Systematically

**Conflicting output** - two suggestions contradict each other.
→ Restart the conversation. Long context accumulates contradictions.

**Repetitive bad results** - same wrong pattern repeats.
→ Explicitly state what NOT to do: *"Do not use callbacks, use async/await."*

**Confident wrong answer** - Copilot states something incorrect with authority.
→ Validate with documentation, tests, or a second opinion. Never skip validation.

<div class="mt-6 text-sm opacity-70">Most prompt failures are context failures. Copilot amplifies what it sees - if the repository contains two versions of the truth, open tabs decide which one Copilot believes.</div>

<!--
This is not a list of failure modes - it's a diagnostic workflow.
The pattern is always: understand WHY it went wrong, then apply the right recovery.

Key message: AI failures are usually context failures, not model failures.
Fixing the context fixes the output.
-->
