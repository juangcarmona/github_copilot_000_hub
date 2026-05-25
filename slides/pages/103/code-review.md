---
layout: two-cols-header
section: Code Review
---

# PR Review Workflow

::left::

## When to Use the Code Review Agent

Use it on PRs where automated analysis adds real value:
- Large changes touching multiple files
- Unfamiliar codebases or languages
- Security-sensitive code paths
- Complex refactoring where regressions are subtle

Do NOT use it on:
- Trivial formatting-only changes
- Automated dependency updates
- Simple documentation edits

::right::

## The Review Workflow

**1. Assign to PR** — request a Copilot review or configure auto-review on PR creation.

**2. Control scope** — add a review comment to focus: *"Focus on the payment processing changes, not the UI layer."*

**3. Triage findings** — distinguish blocking issues from suggestions. Not all findings need action.

**4. Iterate on findings** — use Chat to understand a finding: *"Why is this flagged? How do I fix it correctly?"*

**5. Resolve or document** — either fix the issue or document why it's acceptable.

<div class="mt-4 text-sm opacity-70">Review cost scales with PR size. Large PRs cost more. Break large PRs where possible.</div>

<!--
The key framing: treat the Code Review Agent like a senior reviewer.
Don't send them trivial PRs. Reserve it for meaningful changes.

Iteration on findings is important — the agent can explain its own feedback when asked.
-->