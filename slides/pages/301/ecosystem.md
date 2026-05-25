---
layout: two-cols-header
section: MCP Ecosystem
---

# The MCP Ecosystem

::left::

## Key Servers (with Workflow Use Cases)

**GitHub** — `@modelcontextprotocol/server-github`
Read issues, create PRs, query code search. Enables fully GitHub-integrated agent workflows.

**Playwright** — `@playwright/mcp`
Browser automation and testing. Run end-to-end tests, capture screenshots, validate UI changes.

**Postman** — `@postman/mcp`
Fetch API specifications, import collections, generate client code from live API contracts.

**Azure DevOps** — `@microsoft/mcp-server-azure-devops`
Query work items, trigger pipelines, read build results, create branches from tasks.

**Figma** — `@figma/mcp`
Read design files, extract component specs, generate frontend code from design tokens.

::right::

## Where to Find More

- [modelcontextprotocol.io/servers](https://modelcontextprotocol.io/servers) — official registry
- GitHub Marketplace — community servers
- npm — search `@mcp-server`

## Building Custom Servers

When no existing server fits, build one:
- TypeScript SDK: `@modelcontextprotocol/sdk`
- Python SDK: `mcp` package
- Use for: internal APIs, legacy systems, proprietary tools

A custom MCP server is how you connect COBOL-era systems, internal databases, or any tool not yet in the ecosystem.

<div class="mt-4 text-sm opacity-70">Servers communicate via stdio or HTTP. Architecture details in the next slide.</div>

<!--
This merges key-servers + other-servers into a workflow-oriented overview.

The pattern: each server is presented with its workflow use case, not its feature list.
The ecosystem is large and growing — don't enumerate, point to the registry.

Custom servers are the key extensibility point for enterprise and legacy integrations.
-->
