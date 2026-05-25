---
layout: list
section: Agent Mode
---

# Agent Mode: High Cost, High Leverage

- `Architect first` Define goals, constraints, architecture, and boundaries before asking for code
- `Be specific` Describe inputs, outputs, patterns, and naming conventions — not just the intent
- `Break it down` Split complex tasks into smaller focused prompts, one function or unit at a time
- `One strong prompt` One well-structured prompt beats five corrective turns
- `Always validate` Treat output like code from a junior dev — review every line before committing

<!--
Agent mode is not a magic button.
Used badly, it burns AI credits — each internal step is a separate model invocation.
Used well, it turns one premium interaction into a large amount of implemented work.

Best practices:
- Use meaningful names: CalculateInvoiceTotal > DoWork. Copilot reads your names as context.
- Provide context through code: open relevant files, import libraries, show examples.
- Don't ask for an entire complex feature in one go — break it down.
- Use test-first development with Copilot: write tests alongside implementation.
- Never blindly commit Copilot output. Always review, run, and validate.

-->