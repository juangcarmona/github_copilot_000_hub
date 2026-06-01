---
layout: two-cols-header
section: Instruction Surfaces
---

# Every Surface Copilot Reads

::left::

## The Instruction Map

```
your-repo/
├── README.md
├── .github/
│   ├── copilot-instructions.md
│   ├── instructions/  (path-specific rules)
│   ├── prompts/       (invoked workflows)
│   ├── copilot/agents/ (agent profiles)
│   └── PULL_REQUEST_TEMPLATE.md
├── .vscode/ (mcp.json for agent tools)
└── docs/adr/ (architecture decisions)
```


## Priority Order

Layers compose: later layers add to earlier ones.

1. **Repo-wide** — `copilot-instructions.md`
2. **Path-specific** — `*.instructions.md`
3. **Agent profile** — agent-scoped rules
4. **Prompt file** — explicit invocation

::right::
## What to Put Where

| Content | Location |
|---|---|
| Stack & conventions | `copilot-instructions.md` |
| Area rules | `instructions/*.instructions.md` |
| Workflows | `prompts/*.prompt.md` |
| Agent profiles | `copilot/agents/*.agent.md` |
| ADRs & specs | `docs/adr/` |

<div class="mt-4 text-sm opacity-70">
Make these artifacts visible in the repo: version them, review them, and reference ADRs/specs where relevant.
</div>
