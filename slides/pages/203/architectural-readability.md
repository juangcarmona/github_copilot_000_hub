---
layout: two-cols-header
section: Architectural Readability
---

# Architectural Readability

::left::

## The Architecture Must Be Readable From the File Tree

```
festival-checkin/
├── README.md
├── ARCHITECTURE.md         ← system map
├── src/
│   ├── api/                ← HTTP layer
│   │   ├── routes/
│   │   └── middleware/
│   ├── domain/             ← business logic
│   │   ├── checkin/
│   │   └── validation/
│   └── infrastructure/     ← persistence, external
│       ├── database/
│       └── notifications/
├── docs/
│   └── adr/
└── tests/
    ├── unit/
    └── integration/
```

A new agent reading this tree immediately knows:
- The layered architecture
- Where to add new features
- Where tests go
- Where decisions are documented

::right::

## ARCHITECTURE.md

A single file that maps the system for both humans and AI:

```markdown
# Architecture

## Layers
- api/ - HTTP handlers, no business logic
- domain/ - pure business rules, no I/O
- infrastructure/ - database, external APIs

## Rules
- domain/ never imports from api/ or infrastructure/
- All external calls go through infrastructure/
- api/ only calls domain/ services

## Key Decisions
- See docs/adr/0001-layered-architecture.md
- See docs/adr/0003-no-orm.md
```

**Impact:** When Copilot reads this file, it generates code that respects layer boundaries without being told per-prompt.

<!--
ARCHITECTURE.md is the most underutilized AI-readiness file.

It's not about documentation for documentation's sake.
It's a machine-readable map of your system's constraints.

An agent that reads ARCHITECTURE.md before generating code
will respect boundaries that would otherwise require
extensive instruction files to enforce.
-->
