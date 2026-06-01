---
layout: two-cols-header
section: ADRs & Specs
---

# Specs as Executable Intent

::left::

## What Specs Give Copilot

Spec files tell Copilot what to build before implementation starts.

- Expected behavior
- Acceptance criteria
- Interface or API contract
- Test cases worth generating

## Placement

```
docs/
└── specs/
    ├── payment-flow.spec.md
    └── user-registration.spec.md
```

::right::

## In Practice

```markdown
#file:docs/specs/payment-flow.spec.md
Implement the payment processing service
according to this specification.
```

## Discoverability Rule

Agents use specs reliably when you reference them from:

- `copilot-instructions.md`
- prompt files
- agent profiles

<div class="mt-4 text-sm opacity-70">
Specs answer: what should this feature do?
</div>

<!--
This follows the ADR slide as the complementary concept.

ADRs explain why.
Specs explain what.
Both need explicit discoverability.
-->