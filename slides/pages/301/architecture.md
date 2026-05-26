---
layout: default
section: Architecture
---

# MCP Architecture — Operational View

How tools flow from configuration to execution in your development environment.

```mermaid
flowchart LR
  subgraph Config["Configuration"]
    J[".vscode/mcp.json"]
    U["User mcp.json"]
  end
  subgraph Runtime["VS Code Runtime"]
    D["Discovery & Trust"]
    C["MCP Client"]
    A["Agent Loop"]
  end
  subgraph Servers["MCP Servers"]
    S1["Local (stdio)<br/>Same machine"]
    S2["Remote (HTTP)<br/>Cloud / shared"]
  end
  subgraph Targets["External Systems"]
    T1["APIs"]
    T2["Databases"]
    T3["CI/CD"]
    T4["Issue Trackers"]
  end
  J --> D
  U --> D
  D -->|"trust gate"| C
  C --> S1
  C --> S2
  A <-->|"tool calls"| C
  S1 --> T1
  S1 --> T2
  S2 --> T3
  S2 --> T4
```

| Transport | Runs | Use case | Example |
|---|---|---|---|
| **stdio** | Your machine | Personal tools, fast local access | Playwright, file-based servers |
| **HTTP** | Remote/cloud | Team infrastructure, shared services | GitHub, Azure DevOps |

<!--
This replaces the protocol-focused architecture slide with an operational one.
The flow: config → trust → client → server → external system.
The key gate is trust — nothing runs without explicit consent.
Local servers are simpler (no auth needed). Remote servers need OAuth/token auth.
-->