---
layout: two-cols-header
section: Agent Entrypoints
---

# Designing for Autonomous Entry

::left::

## A Self-Describing Repository

An agent arriving at your repository for the first time should be able to orient itself from the repo structure alone.

**Issue templates** - structured prompts for agent-assigned tasks:
```
.github/ISSUE_TEMPLATE/
├── feature.md          ← includes: acceptance criteria, affected areas
├── bug.md              ← includes: reproduction steps, expected behavior
└── tech-debt.md        ← includes: scope constraints, test requirements
```

Well-structured issues produce well-structured PRs.

**PR templates** - consistent review context:
```
.github/PULL_REQUEST_TEMPLATE.md
```
Include: changes made, testing done, ADRs referenced, areas of concern.

::right::

## Agent Profile as Onboarding

An agent profile is a documented, invokable expert:

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

Then answer the developer's question with specific
file and line references.
```

## `mcp.json` as Infrastructure

`.vscode/mcp.json` (or `.github/mcp.json`) defines which external tools are available to agents:
```json
{
  "servers": {
    "github": { "type": "github" },
    "playwright": { "command": "npx @playwright/mcp" }
  }
}
```

Commit it. Share it. It's team infrastructure.

<!--
The goal: a repository that any agent - or new developer - can navigate without a tour.

The pattern: make implicit knowledge explicit through structured files.
Issue templates, PR templates, agent profiles, and mcp.json are the agent's API surface.
-->
