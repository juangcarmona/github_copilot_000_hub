---
layout: default
section: Security
---

# Agent Sandboxing

OS-level isolation that restricts what agent-executed processes can access — regardless of approval.

```mermaid
flowchart LR
  subgraph Sandbox["Sandboxed Environment"]
    CMD["Agent Command"]
    FS["Allowed Paths Only"]
    NET["Allowed Domains Only"]
  end
  subgraph Blocked["Kernel-Level Deny"]
    B1["~/.ssh/"]
    B2["~/.aws/"]
    B3["*.malicious.com"]
  end
  CMD --> FS
  CMD --> NET
  CMD -.-x B1
  CMD -.-x B2
  CMD -.-x B3
```

**Key insight:** sandboxing shifts from "ask before doing" to "can't do even if approved."

**When sandboxing is enabled, tool calls are auto-approved** — because they physically cannot escape the sandbox.

<!--
This is the strongest protection available.
Currently macOS and Linux (WSL2 on Windows).
This is what enables safe Autopilot usage.
-->
