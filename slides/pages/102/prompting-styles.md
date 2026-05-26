---
layout: two-cols-header
section: Techniques
---

# Prompting Styles: Generate & Debug

### Match prompt structure to task type

::left::

## Generation

```text
"Create a TypeScript function that calculates
ticket price including early-bird discount.
Input: { basePrice, purchaseDate, eventDate }.
Output: { finalPrice, discountApplied }."
```

**Focus:** inputs, outputs, constraints, examples.

::right::

## Debugging

```text
"This function throws 'Cannot read property
of undefined' on line 42 when tickets array
is empty. The expected behavior is returning
an empty result set. Fix only this function."
```

**Focus:** observed behavior, expected behavior, scope.

<!--
Each task type has a natural prompt structure.

Generation: shape the output (inputs + outputs + constraints)
Debugging: describe the gap (observed vs expected + scope)

Mismatch between task type and prompt style is a common failure mode.
-->
