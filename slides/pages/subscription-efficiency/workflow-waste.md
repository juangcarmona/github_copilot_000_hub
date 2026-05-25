---
layout: comparison
section: Efficiency
beforeTitle: Waste
afterTitle: Better Usage
---

# Same Subscription. Very Different Outcomes.

::before::

- Use Opus (~$25/M)  to generate boilerplate
- Accept suggestions without understanding them
- Default to reasoning models for everything
- Launch Agent with no architecture or constraints
- Run code review on every trivial PR
- Blind retries and prompt thrashing

https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing

::after::

- Use Haiku (~$5/M) or Raptor mini (~$2/M) for quick edits and boilerplate
- Be specific: describe inputs, outputs, and expected patterns
- Match model tier to task complexity
- Feed Agent real architecture, then let it execute
- Always validate output before committing
- Review selectively: large PRs, unfamiliar code, security

<!--
This slide should feel uncomfortable.
The waste is not theoretical; it's everyday misuse.
A developer using Opus for everything at 3x is consuming 9x more quota than someone using Haiku for quick tasks.
That's the difference between running out mid-month and having capacity all month.
-->