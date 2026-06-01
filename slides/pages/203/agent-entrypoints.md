---
layout: two-cols-header
section: Agent Entrypoints
---

# Designing for Autonomous Entry

::left::

## A Self-Describing Repository

An agent arriving at your repository for the first time should be able to orient itself from the repo structure alone.

**Issue templates** shape agent-assigned work:
```
.github/ISSUE_TEMPLATE/
├── feature.md
├── bug.md
└── tech-debt.md
```

- acceptance criteria
- affected areas
- constraints and test requirements

**PR templates** keep review context consistent:
```
.github/PULL_REQUEST_TEMPLATE.md
```
Include changes made, testing done, and ADRs referenced.

::right::

## Agent Profile as Onboarding

An agent profile is a documented, invokable expert.

```markdown
---
name: onboarder
description: Guides understanding of this repository
tools: [read_file, search]
---

When invoked, read:
1. README.md for project overview
2. .github/copilot-instructions.md for conventions
3. docs/adr/ for architectural decisions
4. docs/specs/ for current feature context
```

<div class="mt-6 text-sm opacity-70">
The goal: make entry into the repository explicit, repeatable, and reviewable.
</div>

<!--
The goal: a repository that any agent - or new developer - can navigate without a tour.

The pattern: make implicit knowledge explicit through structured files.
Issue templates, PR templates, and agent profiles are the onboarding surface.
-->
