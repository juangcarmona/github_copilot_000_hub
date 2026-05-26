---
layout: default
section: Orchestration
---

# MCP as Integration Layer

MCP doesn't give Copilot a list of commands. It gives Copilot **capabilities** it can sequence autonomously.

<div class="leading-snug">

**The shift:**
- **Before MCP:** Copilot answers questions about your code.
- **With MCP:** Copilot can read your tickets, run your tests, open your PRs, and query your APIs.

**The `mcp.json` file** — your team's configuration is a repo artifact:

```json
// .vscode/mcp.json (commit this)
{
  "servers": {
    "github": { "type": "http", "url": "https://api.githubcopilot.com/mcp" },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@microsoft/mcp-server-playwright"]
    }
  }
}
```

</div>

Commit `.vscode/mcp.json`. When a developer opens the repo, their Copilot has the same tools as everyone else's.

<!--
This replaces "how to pick tools in chat" with the orchestration framing.

Key message: mcp.json is team infrastructure, not a personal config.
It should be committed, reviewed, and maintained like any other config file.
-->