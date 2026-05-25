---
layout: two-cols-header
section: Orchestration
---

# Orchestration Patterns

::left::

## MCP as Integration Layer

MCP doesn't give Copilot a list of commands. It gives Copilot **capabilities** it can sequence autonomously.

The shift:
- **Before MCP:** Copilot answers questions about your code.
- **With MCP:** Copilot can read your tickets, run your tests, open your PRs, and query your APIs.

## The `mcp.json` File

Your team's MCP configuration is a repo artifact:
```json
// .vscode/mcp.json (commit this)
{
  "servers": {
    "github": { "type": "github" },
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp"]
    }
  }
}
```

Commit `.vscode/mcp.json`. When a developer opens the repo, their Copilot has the same tools as everyone else's.

::right::

## Scoping Tools to Agents

In prompt files and agent profiles, restrict which tools are available:

```yaml
# .github/prompts/run-tests.prompt.md
---
tools: [playwright/*]
---
Run the full test suite and report failures
with file and line references.
```

This prevents agents from taking unintended actions outside their scope.

## Tool Approval Model

- By default: Copilot asks before invoking MCP tools
- You can configure auto-approval for trusted tools in low-risk scenarios
- Review tool invocations in the Chat audit trail

<div class="mt-4 text-sm opacity-70">The agent orchestrates. MCP tools execute. You review and approve.</div>

<!--
This replaces "how to pick tools in chat" with the orchestration framing.

Key message: mcp.json is team infrastructure, not a personal config.
It should be committed, reviewed, and maintained like any other config file.

The scoping pattern (tools: in agent profiles) is important for safety in autonomous workflows.
-->

The key security principle: always review tool invocations.
In Chat, Copilot asks for approval.
In Coding Agent, tools can run autonomously if configured — be careful.
-->