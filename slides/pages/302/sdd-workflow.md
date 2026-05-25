---
layout: two-cols-header
section: SDD Workflow
---

# The Spec-Driven Workflow

::left::

## Thinking Before Building

```
Constitution          "What are our non-negotiables?"
      ↓                Principles, quality standards,
                       architectural constraints.

Specify               "What are we building and why?"
      ↓                User outcomes, acceptance criteria,
                       scope boundaries. No tech decisions yet.

Plan                  "How will we build it?"
      ↓                Stack, architecture, component breakdown.
                       First point where technical choices appear.

Tasks                 "What are the implementable units?"
      ↓                Scoped, testable, independently reviewable.
                       Each task connects back to a spec requirement.

Implement             "Build one task at a time."
                       Each implementation step validates against tasks.
                       Each task validates against the spec.
```

::right::

## Why the Order Matters

**Specify before Plan** prevents architecture-first thinking, where technical choices drive requirements instead of serving them.

**Plan before Tasks** prevents task-level chaos, where developers implement disconnected pieces without shared architectural intent.

**Tasks before Implement** prevents scope creep and makes AI output verifiable: every generated code artifact has a task it belongs to.

## With Copilot

```
/speckit.constitution  →  Set the foundation
/speckit.specify       →  Describe the feature
/speckit.clarify       →  Ask the agent to find gaps
/speckit.plan          →  Technical approach
/speckit.tasks         →  Break into implementable units
[implement task by task with Copilot]
```

The prompts are tools. The thinking is yours.

<!--
This merges constitution-specify and plan-tasks-implement into a connected narrative.

The key message: the value is NOT the slash commands.
The value is the discipline of separating thinking from building.

Copilot makes implementation fast. SDD ensures you're implementing the right thing.
-->
