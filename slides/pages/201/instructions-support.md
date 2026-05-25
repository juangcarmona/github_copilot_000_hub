---
layout: two-cols-header
section: Custom Instructions
---

# Where to Start

::left::

## Start Here: One File

Create `.github/copilot-instructions.md` in your repository.

This is the most impactful first step. It applies to every Chat interaction in VS Code, GitHub.com, and the Coding Agent.

**Minimum useful content:**
```markdown
## Stack
This is a .NET 8 API with React frontend.
Use C# 12 patterns. TypeScript for all frontend code.

## Conventions
- Use async/await throughout, no callbacks
- Repository pattern for data access
- Never hardcode credentials or connection strings

## Testing
xUnit for backend. Vitest for frontend.
All public methods must have tests.
```

::right::

## Then Expand by Path

Once the repo-wide file is in place, add path-specific instructions for subsystems:

```
.github/instructions/
  backend.instructions.md   (applies to src/api/**)
  frontend.instructions.md  (applies to src/web/**)
  tests.instructions.md     (applies to **/*.test.*)
```

Each file adds rules scoped to that folder. Copilot composes them automatically.

## Prompt Files for Repeated Workflows

Create `.github/prompts/review.prompt.md` for your team's code review workflow.
Invoke it with `@workspace /review` in Chat.

<div class="mt-4 text-sm opacity-70">Platform support note: VS Code has the broadest scope support. GitHub.com and Visual Studio coverage evolves — check docs for latest.</div>

<!--
This replaces the support matrix with actionable guidance.

The question teams always ask: "Where do I start?"
Answer: one file, `.github/copilot-instructions.md`. Then expand.

Show the actual file path and minimum viable content. Make it concrete.
-->