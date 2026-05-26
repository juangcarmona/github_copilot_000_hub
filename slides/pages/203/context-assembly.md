---
layout: default
section: Context Assembly
---

# How Copilot Assembles Context

<img src="/203/context-assembly.png" class="mx-auto rounded shadow-lg" style="max-height: 440px;" />

<div class="mt-4 text-center text-sm opacity-70">
Every Copilot interaction assembles context from multiple sources. Your repository structure determines what reaches the model.
</div>

<!--
This diagram shows the context assembly pipeline:
- Open files contribute directly
- Workspace index provides retrieval results
- Instruction files add behavioral rules
- The assembled context determines output quality

Teams that structure repos for discoverability
get better context assembly automatically.
-->
