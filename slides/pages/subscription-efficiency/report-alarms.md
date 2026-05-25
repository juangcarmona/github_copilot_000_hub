---
layout: comparison
section: Monthly Report
beforeTitle: Red Flags
afterTitle: What to Do
---

# When to Act with Your Team

::before::

- **Low usage** — < 50 req/month → barely using interactive Copilot
- **Low frontier** — < 10% frontier and < 10% Auto → always picking light models manually
- **Frontier > 90% with billed req.** — frontier for everything, draining the shared pool

::after::

- Start with curiosity, not pressure — understand the context first
- *"What tasks are you using Copilot for most this month?"*
- Suggest **Auto mode** as the default choice
- Reserve frontier models for architecture, hard debugging, and large refactors
- Lightweight models (Haiku, GPT mini) for quick edits and boilerplate

<!--
The goal is NOT to push usage for its own sake.
A developer with 30 requests may be in a design sprint. A developer at 100% frontier may have a legitimately hard feature.
Context always matters — the conversation starts with curiosity.
-->
