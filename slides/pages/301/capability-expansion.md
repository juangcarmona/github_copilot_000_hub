---
layout: default
section: Workflow Shift
---

# Capability Expansion Pattern

Each MCP server adds a capability domain. Combined, they form an operational surface.

```mermaid
flowchart LR
  subgraph Core["Copilot Core"]
    AG["Agent"]
  end
  subgraph Planning["Planning"]
    GH["GitHub<br/>Issues & PRs"]
    ADO["Azure DevOps<br/>Work Items"]
  end
  subgraph Verification["Verification"]
    PW["Playwright<br/>E2E Tests"]
    PM["Postman<br/>API Contracts"]
  end
  subgraph Design["Design"]
    FG["Figma<br/>Components"]
  end
  subgraph Ops["Operations"]
    DB["Database<br/>Queries"]
    CI["CI/CD<br/>Pipelines"]
  end
  AG --> GH
  AG --> ADO
  AG --> PW
  AG --> PM
  AG --> FG
  AG --> DB
  AG --> CI
```

**The pattern:** each server handles one capability domain. The agent sequences them into workflows.

- **Planning:** read the ticket, understand requirements
- **Implementation:** generate code, apply patterns
- **Verification:** run tests, validate contracts
- **Delivery:** open PR, link to issue, trigger CI

<!--
This frames MCP servers not as "plugins" but as capability domains.
The agent orchestrates across domains to deliver complete workflows.
This is the agentic shift: from "AI writes code" to "AI drives delivery."
-->
