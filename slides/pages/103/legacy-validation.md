---
layout: two-cols-header
section: Legacy Validation
---

# Validating AI-Assisted Legacy Refactoring

::left::

## The Problem

AI-assisted refactoring of legacy code carries unique risk:
- No existing tests to catch regressions
- Implicit behavior embedded in old code
- Domain knowledge locked in non-obvious patterns
- Changes that look correct but alter semantics

## Characterization Tests First

Before refactoring, capture actual behavior:

```
Generate characterization tests for this function.
Do not change the behavior — capture exactly what it currently does,
including edge cases and any outputs that look like bugs.
```

These tests become your safety net.

::right::

## The Incremental Validation Strategy

**1. Freeze behavior** — generate characterization tests for the code to change.

**2. Refactor incrementally** — change one concern at a time. Don't refactor everything at once.

**3. Assert preservation** — run characterization tests after each step. Any failure is a regression.

**4. Improve forward** — once behavior is preserved, add new tests for the improved version.

**5. Document the change** — use Chat to generate a summary of what changed and why.

<div class="mt-4 text-sm opacity-70">This pattern applies to .NET, COBOL migrations, Power Automate flows, and any system where existing behavior must be preserved.</div>

<!--
This slide is specifically for teams working with legacy codebases — which is most enterprise teams.

The characterization test pattern was established by Michael Feathers in "Working Effectively with Legacy Code".
Copilot accelerates the characterization test generation dramatically.

The discipline is: never refactor without tests. Copilot makes that easy; the strategy makes it safe.
-->
