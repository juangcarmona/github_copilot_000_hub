---
layout: default
section: Worktree Isolation
---

# Worktree Isolation

<div class="grid grid-cols-2 gap-8 mt-4">
<div class="leading-snug">

## The Problem

Agent edits your workspace directly → conflicts with your active work.

## The Solution

**Git worktrees** - the agent works in a separate checkout of your repo.

<div class="text-sm">

| Mode | Behavior |
|---|---|
| **Worktree** | Separate folder, auto-approves tools, no conflicts |
| **Workspace** | Direct edits, manual approvals, real-time visibility |

</div>

## After the agent finishes

- Review changes in diff view
- Apply, merge, or discard
- Create PR from worktree branch

<div class="mt-2 text-sm opacity-70">

Worktree isolation = safe autonomy. The agent can't break your working state.

</div>

</div>
<div>
<img src="/202/git-worktree-source-control-v2.png" class="w-full object-contain rounded shadow" />
</div>
</div>

<!--
Worktree isolation is what makes "bypass approvals" safe for CLI sessions.
The agent operates on a copy - your main workspace is untouched.
This is the key enabler for parallel agent sessions.
-->
