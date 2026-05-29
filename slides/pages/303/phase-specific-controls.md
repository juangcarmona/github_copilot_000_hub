---
layout: default
section: Governance
---

# AI Governance by SDLC Phase

<div class="text-xs mt-4">

| Phase | AI Use | Main Risk | Guardrail |
|---|---|---|---|
| **Requirements** | Draft stories, PRDs, acceptance criteria | Vague requirements polished into confident nonsense | Stakeholder validation before sign-off |
| **Code** | Generation, refactoring, migration | Plausible but incorrect implementation | Tests + architectural constraints |
| **Review** | First-pass review and comment generation | Reviewer fatigue → rubber-stamping | Explicit human approval required |
| **Test** | Test generation, edge case suggestions | Shallow happy-path coverage only | Enforce coverage of edge cases and failure paths |
| **CI/CD** | Pipeline edits, config generation | Unsafe automation changes | Protected branches + required status checks |
| **Operate** | Incident summaries, log analysis | Missing context or leaking sensitive data | Data classification + audit trail |
| **Postmortem** | Draft RCA and action items | Blame-free process replaced by shallow summaries | Human-owned final RCA |

</div>

<!--
AI governance cannot be one-size-fits-all.
Each phase introduces different risk patterns.

The guardrails listed here are starting points, not complete controls.
Each organization must define the specific thresholds and validation steps that match their risk profile.

Key principle: govern the risk, not just the tool.
Same model, very different risk depending on where in the SDLC it operates.
-->
