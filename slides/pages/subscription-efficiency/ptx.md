---
layout: two-cols-header
section: Governance
---

# Data Policy in AI Workflows

::left::

## What Goes Where

| Data Type | Approved Copilot | External AI Tools |
|---|---|---|
| Public code | ✅ | Check org policy |
| Internal source code | ✅ | ⚠️ Usually not permitted |
| Client data / PII | ✅ with controls | ❌ Never |
| Architecture diagrams | ✅ | Check org policy |
| Security configurations | ✅ with controls | ❌ Never |

## Copilot Data Handling

Copilot for Business and Enterprise:
- Prompts are not used to train models
- No data is retained after the session
- Customer data stays within the tenant

::right::

## Enterprise Policy Requirements

Every AI rollout needs a data handling policy:

1. **Which tools are approved?** Define the list by data classification.
2. **What data can flow into AI tools?** Set explicit data-type rules.
3. **What happens when policy is unclear?** Define the escalation path.
4. **How are violations handled?** Policy without consequences is guidance.

## Make Policies Visible Where Developers Work

- Add data handling rules to `.github/copilot-instructions.md`
- Include in onboarding agent profiles
- Reference in PR templates for security-sensitive changes

<!--
This reframes ptx.md from workflow methodology to data governance.

The workflow discipline (plan before executing) is covered in Module 102/divide-and-conquer.
What belongs in 303: the governance layer — data handling, approved tools, policy.
-->



<!--
PTX: 
separate exploration, planning, and execution.

Planning first reduces retries, rework, and uncontrolled consumption.
-->