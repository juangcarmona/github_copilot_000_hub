---
layout: default
section: Platform
---

# AI Platform Enablement

<div class="mt-4 text-base opacity-80">
The platform team's job: make AI productive AND governable for every engineering team.
</div>

```mermaid
graph TD
    subgraph Platform Layer
        A[Instruction Files<br/>Repository-level] 
        B[Custom Agents<br/>Reusable workflows]
        C[MCP Servers<br/>Operational context]
        D[Governance Policies<br/>Org-level controls]
    end
    
    subgraph Teams
        E[Team A]
        F[Team B]
        G[Team C]
    end
    
    A --> E
    A --> F
    A --> G
    B --> E
    B --> F
    C --> F
    C --> G
    D --> E
    D --> F
    D --> G
```

<div class="mt-4 text-sm">

**Platform provides:** shared agents, instruction templates, model policies, budget guardrails, MCP integrations.  
**Teams own:** their instruction files, domain agents, workflow design, model selection for their tasks.

</div>

<!--
Centralize governance. Decentralize execution.
The platform enables. Teams deliver.
-->
