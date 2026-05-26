---
layout: default
section: Model Strategy
---

# Thinking Effort: Precision Control

<div class="grid grid-cols-2 gap-6 mt-4">
<div class="leading-snug">

Not all tasks need maximum reasoning depth.

**Thinking effort levels:**
- **High** — architecture, complex debugging
- **Medium** — implementation, code review
- **Low** — quick completions, formatting

**Why it matters for cost:**
- Higher effort = more internal reasoning tokens
- Most tasks don't need deep reasoning
- Auto mode handles this well

**Governance action:**
- Set org-level default thinking effort
- Let developers override per task
- Monitor patterns in usage reports

</div>
<div>

<img src="/303/thinking-effort-submenu.png" class="w-full object-contain rounded shadow" />

</div>
</div>

<!--
Thinking effort is a fine-grained cost lever.
It's the difference between "think carefully about this architecture" and "just format this JSON".
-->
