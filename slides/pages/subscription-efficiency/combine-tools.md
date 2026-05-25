---
layout: two-cols-header
section: Governance
---

# Governing AI Across Tools and Teams

::left::

## The Multi-Tool Reality

Most enterprise teams use more than Copilot:
- Copilot (GitHub)
- Azure AI services
- Internal AI tooling
- Personal AI tools (often unauthorized)

Governance must cover the whole landscape, not just the licensed tools.

## Data Security (Non-Negotiable)

- Corporate and client code → only organization-approved tools
- External AI tools must NEVER receive confidential, client, or personal data
- Thinking and exploration can happen externally — code and data cannot
- When uncertain: check with your security contact

::right::

## Heterogeneous Ecosystem Challenges

**Legacy + modern stacks** (.NET, COBOL, React, Power Platform)
→ Governance policies must apply consistently across stacks.
A policy covering only TypeScript developers is incomplete.

**Multiple teams, multiple tools**
→ Centralize approved tool lists. Decentralize team-level instruction files.

**Regulated industries**
→ AI tool selection may be subject to GDPR, HIPAA, or SOC 2.
Governance must integrate with existing compliance programs.

## Practical Governance

1. Publish an approved AI tools list by data classification
2. Include AI tool policy in developer onboarding
3. Add reminders to instruction files and PR templates
4. Review periodically — the tooling landscape changes fast

<!--
This reframes combine-tools.md from workflow pattern to governance.

The workflow angle lives in Module 102/divide-and-conquer.
What belongs here: governing across a heterogeneous tool ecosystem.
-->

<!--
Copilot excels inside the IDE, but its value multiplies when combined with other AI tools.
The key insight: exploration generates prompts quickly and burns AI credits.
If you do the thinking outside Copilot (other tools, local models), you arrive at the IDE with clear intent.
Then Copilot Agent can implement efficiently in one or two well-structured sessions.

Data policy reminders:
- Always follow your organization's policies on which tools are approved for corporate and client data.
- External tools must NOT receive confidential, client, or personal data.
- When in doubt, check with your team or security contact.

TODO: show PTX workflow in practice — planning outside, executing inside
-->
