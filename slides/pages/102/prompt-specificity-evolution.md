---
layout: two-cols-header
section: Techniques
---

# Prompt Specificity

### Better prompts remove decisions from the model

::left::

## Vague

```text
"Add validation"
```

Copilot must guess:

* Which field?
* Which rules?
* Which response?

## Specific

```text
"Add email validation to registerUser().
Reject emails without @ or domain.
Return:
{ valid: false, error: 'Invalid email' }"
```

Clear target. Clear behavior. Clear output.

::right::

## Specificity Checklist

Before sending a prompt:

* What file/function am I targeting?
* What are the inputs and outputs?
* What happens on error?
* What patterns should I follow or avoid?
* What should the final behavior look like?

## The Insight

> Every missing detail becomes a model decision.



