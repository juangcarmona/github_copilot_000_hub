---
layout: two-cols-header
section: Coding Agent
---

# Coding Agent: Issue → PR

::left::

## The Workflow

**1. Create or assign an issue** — the issue IS the prompt. Clear acceptance criteria, constraints, scope.

**2. Assign to @copilot** — creates a branch and starts working on GitHub infrastructure.

**3. Review the plan** — Copilot posts a plan comment. Approve, adjust, or redirect.

**4. Review the PR** — opens a PR when done. Review the diff like any colleague's code.

**5. Iterate or merge** — leave PR comments to request changes. @copilot responds and updates.

::right::

## From VS Code

Start locally → hand off to cloud:

1. Plan agent clarifies requirements
2. Session type dropdown → **Cloud**
3. Full context transfers
4. Cloud agent executes, opens PR

## Limitations

Cloud agents **cannot**:
- Access VS Code built-in tools
- Use local runtime context (test failures, selections)
- Access local MCP servers

Cloud agents **can**:
- Use cloud-configured MCP servers
- Work across entire repositories
- Collaborate via PR comments

<!--
The coding agent workflow hasn't changed fundamentally,
but the VS Code integration now allows seamless handoff from local planning.
The key addition: you can plan locally and delegate to cloud.
-->
