---
layout: default
section: Repository Drift
---

# Repository Drift (2/2)

## Detecting Drift — Automated

- Graphify community analysis vs intended modules
- Architecture tests (ArchUnit, NetArchTest)
- Dependency analysis in CI

## Correcting Drift

<div class="text-sm">

| Action | Effort | Impact |
|---|---|---|
| Update instruction files | Low | Immediate |
| Move misplaced files | Medium | Structural |
| Add ARCHITECTURE.md | Low | AI + human clarity |
| Run Graphify audit | Low | Visibility |
| Architecture tests in CI | Medium | Prevents future drift |

</div>

<div class="mt-6 text-sm opacity-70">

Drift detection should be continuous — not a one-time cleanup effort. Add architecture tests to CI to prevent regression.

</div>

<!--
Part 2 of repository drift — focuses on detection and correction.

The table gives concrete actions with effort/impact ratings
so teams can prioritize their drift correction work.
-->
