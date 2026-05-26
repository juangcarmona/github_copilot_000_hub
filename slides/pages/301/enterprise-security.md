---
layout: default
section: Security
---

# Enterprise Security Controls

Organizations can enforce AI security policies across all developers.

<div class="text-sm">

| Policy | Effect |
|---|---|
| `ChatAgentMode` | Disable agent mode entirely |
| `ChatMCP` | Restrict to curated registry or disable MCP |
| `McpGalleryServiceUrl` | Point to private MCP registry |
| `ChatToolsAutoApprove` | Disable Bypass/Autopilot modes |
| `ChatToolsEligibleForAutoApproval` | Force manual approval for specific tools |
| `ChatToolsTerminalEnableAutoApprove` | Disable terminal auto-approval |

</div>

## Defense in Depth

```mermaid
flowchart TB
  ORG["Org Policy<br/>(what's allowed)"] --> TRUST["Trust Boundaries<br/>(what's trusted)"]
  TRUST --> APPROVE["Approval Flow<br/>(what's reviewed)"]
  APPROVE --> SANDBOX["Sandboxing<br/>(what's contained)"]
  SANDBOX --> AUDIT["Hooks & Audit<br/>(what's logged)"]
```

Each layer operates independently. Compromise of one doesn't bypass the others.

<!--
Enterprise slide.
The message: you can adopt MCP without losing security control.
Policies are applied via device management (Intune, JAMF, etc.)
This enables progressive rollout: start restrictive, widen as trust builds.
-->
