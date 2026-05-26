---
layout: two-cols-header
section: Techniques
---

# Prompt Decomposition

### Complex tasks work better as small prompts

::left::

## Too Broad

```text
"Create a REST API with authentication,
validation, tests, and Azure deployment"
```

Too many goals at once:

* structure
* security
* infrastructure
* testing

## Decomposed

1. Create the data models
2. Add the API routes
3. Add validation
4. Add authentication
5. Write tests

::right::

## Why It Works

* Smaller context per step
* Easier to validate
* Easier to correct mistakes
* Failures stay isolated

## Rule of Thumb

> One prompt, one responsibility.

