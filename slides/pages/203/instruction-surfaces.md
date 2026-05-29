---
layout: two-cols-header
section: Instruction Surfaces
---

# Every Surface Copilot Reads

::left::

## The Instruction Map

```
your-repo/
├── README.md                          ← project overview, always loaded
├── .github/
│   ├── copilot-instructions.md        ← repo-wide rules
│   ├── instructions/
│   │   ├── backend.instructions.md    ← path: src/api/**
│   │   ├── frontend.instructions.md   ← path: src/web/**
│   │   └── tests.instructions.md      ← path: **/*.test.*
│   ├── prompts/
│   │   ├── review.prompt.md           ← invoked explicitly
│   │   └── onboarding.prompt.md
│   ├── copilot/agents/
│   │   ├── security-reviewer.agent.md ← agent profiles
│   │   └── documenter.agent.md
│   ├── PULL_REQUEST_TEMPLATE.md       ← PR context for agents
│   └── ISSUE_TEMPLATE/                ← issue templates for Coding Agent
├── .vscode/
│   ├── settings.json                  ← editor-level settings
│   └── mcp.json                       ← MCP server configuration (→ 301)
└── docs/adr/
    └── 0001-use-repository-pattern.md ← ADRs as context (→ adr slide)
```

::right::

## Priority Order

Copilot composes these layers. Each adds to the previous - nothing is replaced.

1. **Repo-wide** (`copilot-instructions.md`) - always active
2. **Path-specific** (`*.instructions.md`) - active for matched files
3. **Agent profile** - active for that agent's session
4. **Prompt file** - active when explicitly invoked

## What to Put Where

| Content | Location |
|---|---|
| Stack, language, conventions | `copilot-instructions.md` |
| Framework rules by area | `instructions/*.instructions.md` |
| Repeated workflows | `prompts/*.prompt.md` |
| Specialized behaviors | `copilot/agents/*.agent.md` |
| Architecture decisions | `docs/adr/` + referenced in instructions |

<!--
The instruction map makes it concrete.
Teams should be able to open their repo and build this structure deliberately.

Key message: this is not configuration. These are engineering artifacts.
They belong in version control, reviewed in PRs, updated as the codebase evolves.

mcp.json is introduced here briefly; it gets full treatment in Module 301.
-->
