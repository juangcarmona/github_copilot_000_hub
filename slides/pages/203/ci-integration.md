---
layout: two-cols-header
section: CI Integration
---

# AI in the CI/CD Pipeline

::left::

## Automated Code Review on PRs

Run Copilot Code Review automatically on pull requests:

```yaml
# .github/workflows/copilot-review.yml
on:
  pull_request:
    types: [opened, ready_for_review]

jobs:
  copilot-review:
    uses: github/copilot-code-review-action@v1
    with:
      instructions: .github/copilot-instructions.md
```

Copilot reads your instruction files as review criteria. Team conventions become automated gates.
::right::

## Quality Gates from Instructions

Instruction files turn generic review into project-specific review:

```markdown
# .github/instructions/tests.instructions.md
All public methods must have tests.
Test files must follow the Arrange-Act-Assert pattern.
Do not commit tests that only assert the code runs.
```

When the Code Review Agent applies these instructions, it enforces your standards on every PR.



<!--
The key insight: instruction files are not just for interactive use.
They are the specification for automated quality enforcement.

When CI applies your instructions, your standards become continuous review criteria.
-->
