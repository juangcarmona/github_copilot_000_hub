---
layout: two-cols-header
section: Chat
---

# Implementing a Change

::left::

## Generate
`write a function that validates email addresses`
`@workspace add form validation similar to the signup page`
`generate a C# class for this TypeScript interface`

Accept: copy to clipboard · insert at cursor · create new file

## Fix
`/fix` — Copilot proposes a targeted fix for selected code
`why does this throw a NullReferenceException?`
`add error handling following the existing pattern in this file`

::right::

## Test
`/tests` — generate unit tests for selected code
`/tests using xUnit` · `/tests ensure it rejects null inputs`
`/fixTestFailure` — diagnose and fix a failing test

## Refactor
`how would you simplify this?`
`translate this function to idiomatic C#`
`extract this block into a named function`

<div class="mt-4 text-sm opacity-70">Each step is independent — or chain them in a single session.</div>

<!--
The workflow: generate → fix → test → refactor.
Each step stands alone or flows into the next.

This is the fundamental coding loop with Copilot Chat.
Module 103 builds on this loop for quality engineering (TDD, code review, security review).

TODO: live demo — implement a small feature using this full loop in one Chat session
-->