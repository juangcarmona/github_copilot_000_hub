---
layout: two-cols-header
section: Orchestration
---

# Orchestration Scenarios

::left::

## Issue → Implementation → Tests

```
GitHub MCP         → Read issue #142
                      "Add rate limiting to /api/orders"

Copilot Agent      → Analyze existing middleware patterns
                      Implement rate limiting middleware
                      Apply to the route

Playwright MCP     → Run integration tests
                      Verify rate limiting behavior

GitHub MCP         → Open PR with implementation
                      Link to issue #142
```

End-to-end: from GitHub issue to reviewed PR, with tests.

::right::

## API Spec → Client → Tests

```
Postman MCP        → Fetch current /payments API spec

Copilot Agent      → Generate TypeScript client
                      Match existing client patterns
                      Add error handling

Playwright MCP     → Run end-to-end payment flow
                      Validate client against live API

GitHub MCP         → Open PR
```

## Design → Frontend Component

```
Figma MCP          → Read Button component spec
                      Extract design tokens

Copilot Agent      → Generate React component
                      Apply token variables
                      Match existing component patterns

Playwright MCP     → Screenshot for visual review
```

<div class="mt-4 text-sm opacity-70">The pattern: each server handles one capability. Copilot orchestrates the sequence.</div>

<!--
These are real scenarios, not theoretical ones.
Show the flow explicitly — input source → agent work → verification → output.

Each scenario has a clear trigger, a clear output, and a clear validation step.
This is the agentic shift in practice: not "Copilot writes code", but "Copilot drives a workflow".
-->
