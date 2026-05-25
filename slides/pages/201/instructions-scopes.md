---
layout: two-cols-header
section: Custom Instructions
---

# Custom Instructions — Scopes

::left::

## Repository-Wide

`.github/copilot-instructions.md`

Applies to all Copilot requests in the repository.

- Coding standards and conventions
- Project architecture overview
- Technology stack and versions
- Common patterns to follow

## Agent Instructions

`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`

Similar to repo-wide, but not all features support them.

::right::

## Path-Specific

`.github/instructions/NAME.instructions.md`

Applies only to files matching a glob pattern.

```yaml
---
applyTo: "src/components/**/*.tsx"
---
Use React functional components.
Always use TypeScript strict mode.
Follow the naming convention: PascalCase.
```

Use path-specific instructions to avoid overloading repo-wide instructions with details that only apply to certain files or directories.

<!--
The scope hierarchy:
1. Repo-wide → every interaction
2. Path-specific → matched files only
3. Agent → agent-level behavior

Start with repo-wide, then add path-specific as your codebase grows.
-->