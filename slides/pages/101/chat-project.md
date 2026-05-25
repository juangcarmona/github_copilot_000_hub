---
layout: two-cols-header
section: Chat
---

# Understanding an Unfamiliar Codebase

::left::

## Discover
`@workspace what are the main modules and how do they relate?`
`#codebase where is authentication handled?`
`#git summarize what changed in the last 10 commits`

## Analyze
`#file:order-service.ts explain the state transitions`
`@workspace how does the payment flow reach the database?`
`#file:reducer.js #file:init.js how are these files related?`

::right::

## Document
`write a README section for this module`
`generate an architecture overview for @workspace`
`add JSDoc comments to this file`

## Practical tips
- Start wide (`@workspace`), then narrow (`#file`)
- Attach exactly what Copilot needs — no more, no less
- Ask for diagrams or summaries when exploring unfamiliar domains
- Use `#git` to understand *why* code is the way it is

<!--
This workflow applies on day one of joining a new team, starting a new codebase, or inheriting legacy code.

Key progression: discover structure → analyze behavior → document findings.

Note: the same context strategy applies to COBOL/Power Platform/legacy code — the prompts are the same, the value is higher because documentation is scarce.

TODO: lab — explore a provided codebase using only Chat
-->