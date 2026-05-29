---
layout: two-cols-header
section: Spec Kit
---

# Spec Kit - Installation and Setup

### GitHub's open-source toolkit for Spec-Driven Development

::left::

## Installation

```bash
# Install the CLI
uv tool install specify-cli \
  --from git+https://github.com/github/spec-kit.git

# Initialize in existing project
specify init . --ai copilot

# Check installed tools
specify check
```

Installation adds prompt files to `.github/prompts/` that integrate with Copilot Chat directly.

::right::

## What Gets Installed

| Prompt File | Purpose |
|---|---|
| `/speckit.constitution` | Set non-negotiable standards |
| `/speckit.specify` | Describe what and why |
| `/speckit.clarify` | Find gaps in the spec |
| `/speckit.plan` | Define technical approach |
| `/speckit.tasks` | Break into implementable units |

<div class="mt-6 text-sm opacity-70">

Each prompt enforces one step of the workflow. Order matters - you can't skip ahead.

</div>

<!--
Spec Kit is a practical toolkit, not a heavy methodology.

The prompt files it installs make the workflow accessible directly from Copilot Chat.
The key value: it enforces the order (think first, build second) through tooling.

Teams can customize each prompt to match their conventions.
-->