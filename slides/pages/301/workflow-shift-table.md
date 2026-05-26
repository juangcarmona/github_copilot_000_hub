---
layout: default
section: Workflow Shift
---

# What Changes — Before vs After MCP

| Capability | Without MCP | With MCP |
|---|---|---|
| **Context** | Open files only | Any connected system |
| **Actions** | Edit code, run terminal | Create PRs, trigger builds, fetch specs |
| **Validation** | Manual | Agent runs tests, checks CI |
| **Workflow** | One step at a time | Multi-step orchestration |

<br/>

The shift is not "more features." It's a different **operating model**:

- The agent reads requirements from the source of truth (issue tracker)
- The agent validates its own work (test runner, CI)
- The agent delivers results to the collaboration layer (PRs)
- You review and approve — not manually execute

<!--
This is the companion slide to the diagram.
The table makes the shift concrete and measurable.
The bottom bullets frame this as an operating model change, not a feature addition.
-->
