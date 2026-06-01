---
layout: two-cols-header
section: Agent Entrypoints
---

# `mcp.json` as Team Infrastructure

::left::

## What It Does

`.vscode/mcp.json` or `.github/mcp.json` defines which external tools agents can use.

```json
{
  "servers": {
    "github": { "type": "github" },
    "playwright": { "command": "npx @playwright/mcp" }
  }
}
```

::right::

## Why It Matters

- Tool access becomes explicit and versioned
- The team shares the same agent tool surface
- MCP changes can be reviewed like infrastructure changes

<div class="mt-4 text-sm opacity-70">
Commit it. Share it. Review it like infrastructure.
</div>

<!--
This slide isolates the MCP idea from the onboarding slide.

The goal is not MCP depth.
The goal is to frame MCP configuration as shared team infrastructure.
-->