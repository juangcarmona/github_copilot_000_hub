---
layout: two-cols-header
section: ADRs & Specs
---

# ADRs and Specs as AI Context

::left::

## Why Architecture Decisions Need to Be Discoverable

Copilot doesn't know WHY your code is structured the way it is - unless you tell it.

An ADR (Architecture Decision Record) explains:
- What was decided
- Why it was decided
- What alternatives were rejected

When Copilot reads this before generating code, it respects architectural intent instead of suggesting alternatives you've already rejected.

## Placement

```
docs/
└── adr/
    ├── 0001-use-repository-pattern.md
    ├── 0002-no-direct-db-access-from-api.md
    └── 0003-event-sourcing-for-orders.md
```

Reference ADRs from your instruction files:
```markdown
# .github/copilot-instructions.md
See docs/adr/ for architectural decisions.
Always follow ADR-0002 for data access patterns.
```

::right::

## Specs as Executable Intent

Spec files (feature specs, API contracts, acceptance criteria) give Copilot:
- The expected behavior before implementation
- The test cases to generate
- The interface to respect

**Placement:**
```
docs/
└── specs/
    ├── payment-flow.spec.md
    └── user-registration.spec.md
```

**In practice:**
```
#file:docs/specs/payment-flow.spec.md
Implement the payment processing service
according to this specification.
```

## Agent Discoverability

Agents can read ADRs and specs if they are referenced in the agent profile or in `copilot-instructions.md`. Make the reference explicit - agents don't browse the filesystem speculatively.

<!--
ADRs and specs are the highest-leverage documentation investment for AI-readiness.

They answer questions Copilot would otherwise guess at:
- Why does the code look like this?
- What behavior is expected?
- What constraints must be respected?
-->
