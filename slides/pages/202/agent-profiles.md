---
layout: two-cols-header
section: Custom Agents
---

# Custom Agent Profiles in Action

::left::

## Documentation Agent

**File:** `.github/copilot/agents/documenter.agent.md`

**Invoked:** `@documenter generate API docs for the new endpoints`

**What it does:** Reads the OpenAPI spec and route handlers, generates structured Markdown documentation, creates a PR against the `docs/` branch.

---

## Security Review Agent

**File:** `.github/copilot/agents/security-reviewer.agent.md`

**Invoked:** Automatically triggered on PRs touching `src/auth/**`

**What it does:** Checks for injection patterns, hardcoded values, overly broad permissions, missing input validation. Posts findings as inline PR comments.

::right::

## Onboarding Agent

**File:** `.github/copilot/agents/onboarder.agent.md`

**Invoked:** `@onboarder help me understand the payment module`

**What it does:** Reads architecture ADRs, README, and relevant instruction files. Produces a structured onboarding guide scoped to the requested area.

---

## Profile Structure

```markdown
---
name: documenter
description: Generates structured API documentation
tools: [read_file, create_file, create_pull_request]
---

You are a documentation specialist...
apply-to: src/api/**
```

<!--
Show the profile AND how it's invoked AND what it produces.
Not just the format spec — the actual workflow.

Profiles live in `.github/copilot/agents/` (check docs for exact path — may vary).
They extend the instruction hierarchy from 201 — same patterns, additional autonomy.
-->