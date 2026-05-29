---
layout: default
section: Reviewing Changes
---

# Reviewing Agent Changes

<div class="grid grid-cols-2 gap-8 mt-4">
<div class="leading-snug">

## Changes panel (Agents window)

- **Files tab** - full workspace file explorer
- **Changes tab** - files added, modified, deleted

## Review workflow

1. Select file → opens diff view
2. Click inside an edit → **Add Feedback**
3. Agent adjusts based on your inline comments

## After review

<div class="text-sm">

| Action | Effect |
|---|---|
| **Commit** | Apply to workspace (folder isolation) |
| **Merge** | Merge worktree branch, optional PR |
| **Checkout** | Pull cloud session branch locally |
| **Discard** | Remove unwanted edits |

</div>

<div class="mt-2 text-sm opacity-70">

Treat agent output like a colleague's PR - review the diff, not the promise.

</div>

</div>
<div>
<img src="/202/agent-file-changes-v2.png" class="w-full object-contain rounded shadow" />
</div>
</div>

<!--
The review workflow is the same regardless of agent surface.
You always see diffs. You always choose what to keep.
The agent NEVER pushes to protected branches directly.
-->
