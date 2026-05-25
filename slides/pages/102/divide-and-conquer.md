---
layout: two-cols-header
section: Techniques
---

# Divide and Conquer

### Split large tasks into manageable steps

::left::

## Why It Works

- Fits within context limits
- Allows iterative refinement
- Reduces errors and hallucinations
- Each step can be validated independently

## The Principle

Instead of one giant prompt, break work into sequential steps.
Execute each step, validate, then proceed.

::right::

## Example: Word Search Puzzle

Instead of:
```javascript
// Generate a complete word search puzzle
```

Break into steps:
```javascript
// Step 1: Write a function to generate 
//   a 10x10 grid of random letters.
//
// Step 2: Write a function to find all words 
//   in a grid, given a list of valid words.
//
// Step 3: Write a function that generates a 
//   grid containing at least 10 words.
//
// Step 4: Update to print the grid 
//   and 10 random words from the list.
```

<!--
This is the single most important technique for complex tasks.

One big prompt → hallucinations, context overflow, poor results.
Sequential steps → validated, incremental, reliable output.

This principle scales from chat prompts to agent workflows.
-->