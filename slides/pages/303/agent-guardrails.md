---
layout: default
section: Agent Governance
---

# Human-in-the-Loop: Architectural Guarantees

<div class="grid grid-cols-2 gap-6 mt-6">
<div>

**Copilot agents cannot:**
- Merge PRs without human approval
- Push directly to protected branches
- Bypass required reviews or status checks
- Access secrets without explicit grant

These are not optional safeguards — they are platform constraints.

</div>
<div>

**When consumption is unexpected:**
1. Are assigned tasks well-defined?
2. Are instruction files high quality?
3. Was Plan mode used before Agent mode?
4. Is large context included unnecessarily?

Vague instructions → retries → cost.

</div>
</div>

<div class="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-200 text-sm">

**Security baseline:** Enable agent sandboxing, restrict file edits to workspace, keep auto-approval scoped to the session. Review all file edits before accepting.

</div>

<!--
Agent governance is about bounded autonomy.
The platform provides hard constraints.
The organization provides soft governance (policies, instructions, budgets).
-->
