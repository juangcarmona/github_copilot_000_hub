---
layout: default
section: Interaction Models
---

# Choosing the Right Interaction Model

| Task | Model | When |
|---|---|---|
| Explain / explore / learn | **Ask** | Quick questions, no code changes needed |
| Generate, fix, or refactor a function | **Chat** | Targeted change, you stay in control |
| Plan a complex feature before building | **Plan** | Multi-step task, review the strategy first |
| Autonomous multi-file implementation | **Agent** | Well-defined task, you review the PR |
| Delegate from an active agent session | **Subagent** | Isolate a complex sub-task without polluting context |
| Async task from GitHub issue | **Coding Agent** | Assign to @copilot, review when done |

<div class="mt-6 text-sm opacity-70">

**The rule:** start with the simplest interaction model that can complete the task. Escalate only when scope genuinely requires it. Complexity scales cost and review burden.

</div>

<!--
This merges ask-vs-agent and plan-and-subagents into a unified decision framework.

The table replaces abstract descriptions with task-driven guidance.
The audience question is always: "what mode should I use for this?"
This answers it directly.
-->