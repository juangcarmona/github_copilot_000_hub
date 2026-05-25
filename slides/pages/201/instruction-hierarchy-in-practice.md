---
layout: two-cols-header
section: Instruction Hierarchy
---

# Instruction Layers in Practice

::left::

## The File Map

```
your-repo/
├── .github/
│   ├── copilot-instructions.md      ← repo-wide
│   ├── instructions/
│   │   ├── backend.instructions.md  ← path-specific
│   │   ├── frontend.instructions.md ← path-specific
│   │   └── tests.instructions.md    ← path-specific
│   ├── prompts/
│   │   ├── review.prompt.md         ← reusable prompt
│   │   └── onboarding.prompt.md     ← reusable prompt
│   └── copilot/
│       └── agents/                  ← agent profiles (→ 202)
└── .vscode/
    └── settings.json                ← editor-level settings
```

::right::

## How They Stack

**Repo-wide** (`.github/copilot-instructions.md`)
→ Applied to every interaction in the repo.
Use for: language, conventions, architecture rules, security standards.

**Path-specific** (`.github/instructions/*.instructions.md`)
→ Applied only when Copilot is working in matched paths.
Use for: framework rules, test conventions, domain-specific patterns.

**Prompt files** (`.github/prompts/*.prompt.md`)
→ Reusable prompts invoked explicitly.
Use for: repeated workflows (code review, PR summary, onboarding).

<div class="mt-4 text-sm opacity-70">Lower layers add to, not replace, higher layers. All active layers are composed together.</div>

<!--
This is the most important operational slide in Module 201.

The file map makes it concrete — show the actual paths.
Teams should be able to open their repo and know exactly where to create each file.

Key message: instruction files are first-class repo artifacts. They belong in version control, reviewed like code.
-->
