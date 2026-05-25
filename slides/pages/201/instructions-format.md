---
layout: two-cols-header
section: Custom Instructions
---

# Writing Effective Instructions

::left::

## Format

Optional YAML frontmatter:

| Field | Purpose |
|---|---|
| `description` | Short description for UI |
| `name` | Display name (defaults to filename) |
| `applyTo` | Glob pattern for auto-apply |

Body: plain Markdown with guidelines.

Reference tools: `#tool:<tool-name>`

::right::

## Best Practices

- Keep instructions short and self-contained
- Provide a project overview and goals
- Include folder structure highlights
- Specify coding standards and conventions
- List tools, libraries, and versions
- Don't overload — split into path-specific files

## Example Structure

```markdown
# Project: MyApp
React 18 + TypeScript 5.4 + Vite

## Conventions
- Functional components only
- Use `zod` for validation
- Tests with Vitest
```

<!--
The most common mistake: writing instructions that are too long or too detailed.

Instructions should be the "house rules" — not a full specification.
If you need task-specific guidance, use prompt files instead.

References:
- https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions
- https://github.com/github/awesome-copilot/blob/main/docs/README.instructions.md
-->