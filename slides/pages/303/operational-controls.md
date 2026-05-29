---
layout: default
section: Controls
---

# Operational Controls Checklist

<div class="grid grid-cols-2 gap-6 mt-2 text-sm">
<div class="leading-snug">

## Budget & Cost

| Control | Scope |
|---|---|
| Organization credit cap | Org |
| Budget alerts at thresholds | Org |
| Per-team allocation visibility | Team |
| Model tier usage monitoring | Org |

## Access & Policy

| Control | Scope |
|---|---|
| Agent mode availability | Seat |
| Approved AI tool list by data class | Org |
| Data classification rules | Org |
| Exception process for unapproved tools | Org |
| Policy review cadence | Org |
| MCP server trust policies | Team |

</div>
<div class="leading-snug">

## Quality & Safety

| Control | Scope |
|---|---|
| Branch protection rules | Repo |
| PR review requirements | Repo |
| Human approval criteria for AI changes | Repo |
| Review quality metrics | Team |
| Agent sandboxing | Workspace |
| File edit auto-approval | Session |

## Visibility & Audit

| Control | Scope |
|---|---|
| Baseline delivery metrics | Team |
| Usage reports per member | Org |
| Agent session logs | Individual |
| Model selection patterns | Org |
| Billed vs included tracking | Org |

</div>
</div>

<!--
This is the operational controls inventory.
Not all controls apply to every organization.
Start with budget + access, add quality + visibility as maturity increases.

New additions vs initial version:
- Exception process: teams need a safe path for edge cases without bypassing everything
- Policy review cadence: controls that are never updated become stale and ignored
- Human approval criteria: explicit approval rules prevent rubber-stamping
- Review quality metrics: complement usage metrics with output quality signals
- Baseline delivery metrics: pre-conditions for meaningful AI impact measurement
-->

