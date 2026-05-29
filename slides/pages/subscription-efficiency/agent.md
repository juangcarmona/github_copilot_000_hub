---
layout: two-cols-header
section: Agent Governance
---

# Governing Agent Mode at Scale

::left::

## Why Agent Mode Needs Governance

Agent mode is a cost multiplier. Each internal step is a separate model invocation.

**The governance levers:**
- Seat-level agent mode availability
- Model selection policies (which models can be used for agents)
- PR review requirements (agents cannot merge without human approval)
- Branch protection rules (agents cannot push to protected branches)

## Capacity Planning

Agent sessions are non-deterministic in length. Budget for variance:
- Set organization-wide credit alerts
- Review agent usage separately from interactive usage
- Define expected patterns per team/role

::right::

## Human-in-the-Loop Requirements

Copilot agents cannot:
- Merge PRs without human approval
- Push directly to protected branches
- Bypass required reviews or status checks

These are architectural guarantees, not optional safeguards.

## When Consumption Is Unexpected

1. Are assigned tasks well-defined?
2. Are instruction files high quality? (Vague instructions generate retries)
3. Was Plan mode used before Agent mode?
4. Is large context included unnecessarily?

<!--
This reframes agent.md from best practices (owned by Module 202) to governance and cost control.

Agent best practices live in Module 202.
This slide covers what engineering managers and tech leads need to govern agent usage.
-->

<!--
Agent mode is not a magic button.
Used badly, it burns AI credits - each internal step is a separate model invocation.
Used well, it turns one premium interaction into a large amount of implemented work.

Best practices:
- Use meaningful names: CalculateInvoiceTotal > DoWork. Copilot reads your names as context.
- Provide context through code: open relevant files, import libraries, show examples.
- Don't ask for an entire complex feature in one go - break it down.
- Use test-first development with Copilot: write tests alongside implementation.
- Never blindly commit Copilot output. Always review, run, and validate.

-->