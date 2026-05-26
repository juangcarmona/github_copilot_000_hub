---
layout: default
section: Economics
---

# What Drives AI Credit Consumption

```mermaid
flowchart LR
    A[Model Tier] --> D[Credits Used]
    B[Context Size] --> D
    C[Output Length] --> D
    E[Conversation Turns] --> D
    F[Agent Steps] --> D
```

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

**High-cost patterns:**
- Long agent sessions with large context
- Frontier models for routine tasks
- Unfocused conversations without clear intent
- Vague instructions causing retries

</div>
<div>

**Low-cost patterns:**
- Autocomplete (zero credits)
- Short, well-scoped prompts
- Lightweight models for iteration
- Plan mode before Agent mode

</div>
</div>

<!--
Credits scale with: model tier × (input tokens + output tokens).
Agent mode multiplies this by the number of internal steps.
Context engineering is cost engineering.
-->
