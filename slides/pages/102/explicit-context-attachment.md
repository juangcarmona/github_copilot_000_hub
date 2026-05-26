---
layout: default
section: Context Engineering
---

# Attach Context Explicitly

<div class="grid grid-cols-2 gap-8">
<div class="leading-snug">

Don't hope Copilot finds the right file. **Tell it.**

**#-mentions**

Type `#` in chat to attach specific context:

- `#file:auth.ts` — a specific file
- `#folder:src/services` — a directory
- `#symbol:UserService` — a class or function
- `#codebase` — let VS Code search relevant files
- `#git` — recent source control changes

**When to use explicit attachment**

- Questions about **specific** code
- You need the **current** one
- Relevant file is not open in a tab



</div>
<div>

### Explicit > implicit. 
### Always.
### &nbsp;
<img src="/102/copilot-chat-view-attach-context.png" class="w-full object-contain rounded shadow" />

</div>
</div>

<!--
The image shows the attach context picker in VS Code Chat.

This is the most direct way to improve Copilot output: give it exactly what it needs.
Automatic context gathering works, but explicit attachment removes ambiguity.
-->
