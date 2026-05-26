---
layout: default
section: Governance
---

# Data Policy in AI Workflows (1/2)

<div class="text-sm">

| Data Type | Approved Copilot | External AI Tools |
|---|---|---|
| Public code | ✅ | Check org policy |
| Internal source code | ✅ | ⚠️ Usually not permitted |
| Client data / PII | ✅ with controls | ❌ Never |
| Architecture diagrams | ✅ | Check org policy |
| Security configurations | ✅ with controls | ❌ Never |

</div>

<div class="mt-4">

**Copilot for Business and Enterprise:**
- Prompts are not used to train models
- No data is retained after the session
- Customer data stays within the tenant

</div>

<!--
This reframes ptx.md from workflow methodology to data governance.

The workflow discipline (plan before executing) is covered in Module 102/divide-and-conquer.
What belongs in 303: the governance layer — data handling, approved tools, policy.
-->
