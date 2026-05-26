---
layout: two-cols-header
section: Techniques
---

# Ambiguity Reduction

### Ambiguous prompts force Copilot to guess

::left::

## Ambiguous

```text
"Add a test"
```

Questions:

* Unit or integration?
* Which function?
* Which edge case?

## Disambiguated

```text
"Add a unit test for calculateDiscount().
Verify it returns null when the cart is empty."
```

One target. One behavior.

::right::

## The Ambiguity Test

Before sending a prompt, ask:

> “Could two senior engineers interpret this differently?”

If yes:

* name the target
* describe the behavior
* add the constraint

## The Insight

> Ambiguity creates branching interpretations.

The model picks one.
Not always the one you wanted.


