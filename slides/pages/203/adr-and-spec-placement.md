---
layout: two-cols-header
section: ADRs & Specs
---

# ADRs as AI Context

::left::

## Why ADRs Matter

Copilot does not know why your architecture looks the way it does unless that decision is written down.

A good ADR records:
- What was decided
- Why it was decided
- What alternatives were rejected

When Copilot reads ADRs first, it is more likely to follow architectural intent instead of re-suggesting rejected patterns.

## Placement

```
docs/
└── adr/
    ├── 0001-use-repository-pattern.md
    ├── 0002-no-direct-db-access-from-api.md
    └── 0003-event-sourcing-for-orders.md
```



::right::

## The Key Practice

Do not assume agents will discover ADRs by browsing.

- Point to ADRs from `copilot-instructions.md`
- Reference them in prompts or agent profiles
- Keep ADR titles specific and stable

<div class="mt-6 text-sm opacity-70">
ADRs answer: why is this codebase shaped this way?
</div>

Reference ADRs from instruction files:
```markdown
# .github/copilot-instructions.md
See docs/adr/ for architectural decisions.
Always follow ADR-0002 for data access patterns.
```
<!--
ADRs deserve their own slide because the core lesson is architectural intent.

Keep the message narrow:
- ADRs explain why
- agents need explicit references
- placement should be obvious
-->
