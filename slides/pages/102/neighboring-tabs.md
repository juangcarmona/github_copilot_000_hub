---
layout: default
section: Context
---

# Neighboring Tabs

<div class="grid grid-cols-2 gap-8">
<div class="leading-snug">

Open files are **implicit context**. Copilot reads them even when you don't attach them explicitly.

**What to keep open**

- Interface or type definitions your code implements
- Related utility or service files
- A representative test file
- Relevant config (tsconfig, package.json)

**What to close**

- Stale docs that contradict current code
- Old versions of refactored modules
- Unrelated large files that crowd context

<div class="text-sm opacity-70">Same prompt + different open tabs = different suggestions.</div>

</div>
<div>

<img src="/102/neighboring-tabs.png" class="w-full object-contain rounded shadow" />

</div>
</div>

<!--
This is one of the simplest and most effective context management techniques.

The image shows how Copilot uses open tabs as additional context signals.
Facilitators can demo: same prompt, different tabs open → different output.
-->