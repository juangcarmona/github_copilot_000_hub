---
layout: two-cols-header
section: Coding Agent
---

# Coding Agent Workflow

::left::

## The Workflow

**1. Create or assign an issue** — describe the task clearly: acceptance criteria, constraints, scope. The issue IS the prompt.

**2. Assign to @copilot** — the agent picks up the issue, creates a branch, and starts working.

**3. Review the plan** — before any changes are made, Copilot posts a plan as a comment. Approve, adjust, or redirect before it executes.

**4. Review the PR** — Copilot opens a PR when done. Review the diff like any other PR. Use the Code Review Agent for large changes.

**5. Iterate or merge** — leave comments on the PR to request changes. @copilot will respond and update.

::right::

## What to Assign

**Good candidates:**
- Well-defined, scoped tasks (add a field, fix a bug, add tests)
- Repetitive changes across many files
- Documentation generation
- Dependency upgrades

**Keep human-in-the-loop:**
- Architecture decisions
- Security-sensitive changes
- Tasks touching business-critical logic

## The File Infrastructure

Agent profiles live in `.github/copilot/agents/`.
Each profile extends instruction files from 201 — same hierarchy, additional tools and scope.

```
.github/
  copilot-instructions.md     ← always loaded
  copilot/agents/
    reviewer.agent.md         ← security-focused agent
    documenter.agent.md       ← documentation agent
```

<!--
This absorbs the content from 103/coding-agent.md and reframes it as a workflow.

Key insight: the Coding Agent is a workflow tool, not a magic button.
The quality of the issue determines the quality of the PR.

Security protections: Copilot cannot push directly to protected branches.
PRs always require human approval. The human is never removed from the loop.
-->
