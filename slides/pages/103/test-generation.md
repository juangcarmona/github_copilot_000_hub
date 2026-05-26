---
layout: two-cols-header
section: Testing
---

# TDD Workflow with Copilot

::left::

## The Loop

**1. Read** — understand the code before prompting.

**2. Generate tests** — `/tests` or describe scenarios:
```
Generate tests for TicketService.CancelTicket.
Cover: valid cancellation, already cancelled,
past event, refund eligibility, null ticket.
```

**3. Review assertions** — does each test assert meaningful behavior?

**4. Run** — expect red first. Then implement.

**5. Iterate** — *"Add edge case for concurrent cancellation"*

::right::

## The Critical Question

For every generated test, ask:

> If I break the implementation, does this test catch it?

If the answer is no — the test protects nothing.

## Quick reference

| Command | Use case |
|---------|----------|
| `/tests` | Generate test file for current code |
| `/tests using xUnit` | Framework-specific generation |
| `/fixTestFailure` | Diagnose why a test fails |
| Natural language | Describe specific scenarios |

<div class="mt-4 text-sm opacity-70">Copilot accelerates test writing. You still own test quality.</div>

<!--
Simplified version focused on the workflow loop.
Detailed content on fake green tests, fix-test-failure, and setup are in dedicated slides.

The most important step: reviewing assertion logic. Copilot often generates "fake green tests" —
tests that pass without validating behavior. They protect nothing.

Lab exercises:
- Exercise 2 (Fix the Flaky Test): identify fake-green and time-dependent tests
- Exercise 6 (Regression Analysis): build a proper regression test suite
-->