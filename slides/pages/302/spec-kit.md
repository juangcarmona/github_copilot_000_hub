---
layout: two-cols-header
section: Spec Kit
---

# Spec Kit

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

## The 5 Steps

| Step | What You Define |
|---|---|
| **Constitution** | Principles and quality standards |
| **Specify** | What to build and why (outcomes, not tech) |
| **Plan** | Stack, architecture, technical approach |
| **Tasks** | Scoped, testable implementation units |
| **Implement** | Build task by task with Copilot |

<div class="mt-6 text-sm opacity-70">

Spec Kit provides the tooling scaffold. The next slide shows the thinking behind each step.

</div>

<!--
Spec Kit is a practical toolkit, not a heavy methodology.

The prompt files it installs make the workflow accessible directly from Copilot Chat.
The key value: it enforces the order (think first, build second) through tooling.
-->
| **Implement** | Build task by task |

<!--
Spec Kit turns the SDD methodology into a repeatable workflow.

Each step builds on the previous one:
Constitution → Specify → Plan → Tasks → Implement

The spec is the north star. Everything references it.
-->