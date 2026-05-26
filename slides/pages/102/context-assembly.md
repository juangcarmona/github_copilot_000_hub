---
layout: list
section: Context Engineering
---

# What Copilot Actually Sees

Every response is generated from what fits in the **context window**:

- `System instructions` Built-in behavior rules
- `Custom instructions` Your .github/copilot-instructions.md — always loaded
- `User message` The current prompt you're sending
- `Conversation history` Earlier messages in this session
- `Implicit context` Active file, selection, visible errors, git state
- `Explicit references` Files, symbols, and URLs you attach with #-mentions
- `Tool outputs` Results from searches, terminal, and file reads

<div class="mt-6 text-sm opacity-70">

Everything outside the context window is **invisible** to the model.
Referencing a specific file with `#file` always beats hoping the model "knows" about it.

</div>

<!--
This slide gives attendees a concrete mental model of context layers.

Key insight: the model has zero memory between sessions and no access to files
it hasn't been explicitly given. Context is everything.

This sets up the next slides on explicit attachment and neighboring tabs.
-->
