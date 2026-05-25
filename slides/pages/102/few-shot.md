---
layout: two-cols-header
section: Techniques
---

# Few-Shot Prompting

### Provide multiple examples to teach the expected behavior

::left::

## When to Use

- Complex logic with specific patterns
- Unfamiliar libraries or APIs
- Multiple input/output format variations
- Domain-specific conventions

Include 2–5 examples in your comments, then specify the new task.

::right::

## Example

```go
// Write a Go function that finds all dates
// in a string. Dates can be formatted like:
// * 05/02/24
// * 05/02/2024
// * 5/2/24
// * 05-02-24
//
// Example:
// findDates("dentist on 11/14/2023 
//   and book club on 12-1-23")
// Returns: ["11/14/2023", "12-1-23"]
```

The examples teach the pattern. Copilot generalizes.

<!--
Few-shot is the most powerful prompting technique for complex tasks.

The examples act as a contract: "this is what I expect."
Copilot learns the pattern and applies it to new inputs.

Rule of thumb: if zero-shot doesn't work, add one example. If one isn't enough, add 2-3 more.
-->