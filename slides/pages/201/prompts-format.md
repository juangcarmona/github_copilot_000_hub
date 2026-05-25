---
layout: two-cols-header
section: Prompt Files
---

# Prompt Files — Format

### `.prompt.md` files in `.github/prompts/`

::left::

## Header (YAML Frontmatter)

| Field | Description |
|---|---|
| `description` | Short prompt description |
| `name` | Command name after `/` |
| `argument-hint` | Placeholder hint in chat |
| `agent` | Runner: `ask` / `agent` / `plan` |
| `model` | Model override |
| `tools` | Allowed tools/toolsets |

::right::

## Body

Markdown instructions with dynamic variables:

| Variable | Resolves To |
|---|---|
| `${workspaceFolder}` | Workspace root path |
| `${selection}` | Current code selection |
| `${file}` | Current file path |
| `${fileBasename}` | Current file name |
| `${input:var}` | User input prompt |

Reference tools: `#tool:<tool-name>`

Link workspace files with relative Markdown links.

<!--
Prompt files combine the structure of instructions with the flexibility of dynamic input.

They're ideal for tasks you repeat often:
- Scaffolding components
- Running code reviews
- Planning implementations
- Writing documentation

References:
- https://code.visualstudio.com/docs/copilot/customization/prompt-files
- https://github.com/github/awesome-copilot/blob/main/docs/README.prompts.md
-->