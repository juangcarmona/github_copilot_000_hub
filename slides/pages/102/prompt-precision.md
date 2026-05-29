---
layout: two-cols-header
section: Prompt Precision
---

# Precision Is Context

::left::

## Names as Signals

Copilot reads your code. Vague names produce vague completions:

```ts
// ❌ Generic - Copilot guesses intent
function process(data) { ... }

// ✅ Precise - Copilot understands domain
function validateShippingAddress(
  address: Address
): ValidationResult { ... }
```

Well-named types, variables, and files are implicit prompts.

::right::

## Explicit Constraints

State what you want AND what you don't:

- *"Returns a JSON object with `name`, `email`, `role` fields"*
- *"Throws if input is null or empty"*
- *"Use `reduce`, not a for loop"*
- *"Must handle arrays up to 10,000 elements"*
- *"Do not use external dependencies"*

## Format Contracts

- *"Takes an array of strings, returns the first palindrome found or null"*
- *"Accepts ISO 8601 date strings, returns a Unix timestamp"*

<!--
This slide absorbs the core message from 101/code-quality-basics:
names and specifications are context signals, not just style choices.

The connection: code quality → context quality → AI output quality.
A well-named, well-typed codebase is a better Copilot partner.
-->