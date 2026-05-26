---
layout: default
section: Economics
---

# Context Size Is Cost

```mermaid
graph TD
    A[Open Files & References] -->|input tokens| C[Total Request Cost]
    B[Conversation History] -->|input tokens| C
    D[Generated Output] -->|output tokens| C
    C --> E[Credits Consumed]
    
    style A fill:#fef3c7
    style B fill:#fef3c7
    style D fill:#dbeafe
    style E fill:#fee2e2
```

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

**What inflates context:**
- Many open files without relevance
- Long conversations without restarting
- Entire repositories as references
- Verbose previous outputs accumulating

</div>
<div>

**Practical controls:**
- Start fresh sessions for new tasks
- Close irrelevant files before prompting
- Use `.github/copilot-instructions.md` to encode context once
- Prefer Plan mode → then Agent mode

</div>
</div>

<!--
Engineers rarely think about token volume.
But context engineering is cost engineering at scale.
A team of 50 developers with poor context hygiene can consume 3-5x more credits than one with good practices.
-->
