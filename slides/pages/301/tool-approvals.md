---
layout: default
section: Security
---

# Tool Invocation Approvals

Every MCP tool call shows a confirmation dialog before execution.

<div class="flex justify-center mt-2">
  <img src="/301/mcp-tool-confirmation.png" class="rounded shadow-lg max-h-60" />
</div>

<div class="text-sm mt-2">

| Scope | Duration | Use when |
|---|---|---|
| **Once** | Single invocation | Unknown tools, first use |
| **Session** | Current chat session | Iterating on a task |
| **Workspace** | This project always | Trusted project tools |
| **User** | All projects always | Personal infrastructure |

</div>

**Rule:** Start narrow, widen only when you understand the tool's behavior.

<!--
This is where the rubber meets the road.
Attendees will see this dialog every time a tool runs (unless they've pre-approved).
The key message: review the parameters, not just the tool name.
A "read file" tool with a path to /etc/passwd is very different from reading src/index.ts.
-->
