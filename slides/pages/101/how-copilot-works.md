---
layout: default
section: Foundations
---

# How Copilot Fulfills a Request

<div class="mt-4">

```mermaid {scale: 0.75}
flowchart LR
    A[Your Code + Context] --> B[Pre-model Filters]
    B --> C[LLM Inference]
    C --> D[Post-model Filters]
    D --> E[Suggestions in IDE]

    B -.- B1[Toxic content check]
    B -.- B2[Prompt injection guard]
    D -.- D1[Code quality check]
    D -.- D2[Security vulnerability scan]
    D -.- D3[Public code matching]
```

</div>

<!--
What happens when Copilot processes a request:

1. Context assembly — Copilot gathers context from open tabs, current file, and chat history.
2. Pre-model filters — checks for toxic language, relevance, and prompt injection attempts.
3. LLM inference — the model generates suggestions, then deletes the prompt.
4. Post-model filters — code quality review, security scan (SQL injection, path injection), and optional public code matching.
5. Developer decides — accept, modify, or reject each suggestion.

Important: your code is never used to train the model. Data is encrypted in transit and at rest.
-->