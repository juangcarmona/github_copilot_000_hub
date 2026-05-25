---
layout: two-cols-header
section: Architecture
---

# MCP Architecture Deep Dive

::left::

## Transport Layer

| Transport | Use Case |
|---|---|
| **stdio** | Local servers, same machine |
| **Streamable HTTP** | Remote servers, cloud-hosted |

## Data Layer (JSON-RPC 2.0)

- **Lifecycle**: initialize, negotiate, close
- **Server features**: tools, resources, prompts
- **Client features**: LLM calls, user input, logs
- **Utilities**: notifications, progress tracking

::right::

```mermaid
graph TB
  subgraph Host["MCP Host (IDE)"]
    LLM["Copilot"]
  end
  subgraph Clients["MCP Clients"]
    C1["Client 1"]
    C2["Client 2"]
  end
  subgraph Servers["MCP Servers"]
    S1["Local (stdio)"]
    S2["Remote (HTTP)"]
  end
  LLM --> C1
  LLM --> C2
  C1 --> S1
  C2 --> S2
```

## SDK Ecosystem

Tier 1: TypeScript, Python, Java, C#

Tier 2: Go, Kotlin, Swift

<!--
For most use cases, TypeScript or Python SDKs are the fastest path to a working server.

Local (stdio) servers are simplest — no network configuration needed.
Remote (HTTP) servers are needed for shared team infrastructure.
-->