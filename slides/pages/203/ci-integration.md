---
layout: two-cols-header
section: CI Integration
---

# AI in the CI/CD Pipeline

::left::

## Automated Code Review on PRs

Configure Copilot Code Review to run automatically on pull requests:

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

## Quality Gates with Instruction Context

Instruction files make quality gates specific to your project:

```markdown
# .github/instructions/tests.instructions.md
All public methods must have tests.
Test files must follow the Arrange-Act-Assert pattern.
Do not commit tests that only assert the code runs.
```

When the Code Review Agent applies these instructions, it enforces your standards on every PR.

::right::

## Security Scanning Integration

```yaml
# Run CodeQL on every PR
- uses: github/codeql-action/analyze@v3
  with:
    languages: ['csharp', 'javascript']

# Secret scanning is always on at the org level
# Configure custom patterns in .github/secret_scanning.yml
```

Use Chat to act on findings:
- *"Explain this CodeQL alert"*
- *"Generate a fix for CVE-2024-XXXX in this dependency"*

## Living Documentation

Automate documentation updates as code changes:

```yaml
# On merge to main: regenerate API docs
- run: gh copilot suggest "regenerate OpenAPI spec from route handlers"
```

Docs that fall behind are not docs - they're misinformation.

<!--
The key insight: instruction files are not just for interactive use.
They are the specification for automated quality enforcement.

When your CI pipeline applies your instructions, your standards are enforced continuously,
not just when a developer remembers to ask Copilot.
-->
