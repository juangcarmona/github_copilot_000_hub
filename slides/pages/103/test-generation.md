---
layout: two-cols-header
section: Testing
---

# TDD Workflow with Copilot

::left::

## The Loop

**1. Read** — understand the code or requirement before prompting.

**2. Generate tests** — `/tests` · `/tests using xUnit` · or describe test scenarios naturally:
```
Generate tests for an email validation function.
Cover: valid addresses, missing @, missing domain, empty string, null input.
```

**3. Review assertions** — read each assertion. Does it test meaningful behavior or just that the code runs?

::right::

**4. Run** — all tests must pass before proceeding. Use `/fixTestFailure` to diagnose failures.

**5. Iterate on edge cases** — *"Add a test for inputs longer than 254 characters"* / *"Add a test for international domain names"*

## Watch for Fake Green Tests

Copilot generates tests that pass trivially:
```csharp
// ❌ Tests that it doesn't throw — not that it's correct
var result = Record.Exception(() => validate(null));
Assert.Null(result);

// ✅ Tests the actual contract
Assert.False(validate(null));
```

<!--
The TDD workflow: read → generate tests → review assertions → run → iterate on edge cases.

The most important step: reviewing assertion logic. Copilot often generates "fake green tests" —
tests that pass without validating behavior. They protect nothing.

Lab exercises:
- Exercise 2 (Fix the Flaky Test): identify fake-green and time-dependent tests in RefundsControllerTests.cs and DateHelperTests.cs
- Exercise 6 (Regression Analysis): build a proper regression test suite for the scenarios Exercise 2 exposes

Test generation is also the best entry point for legacy code validation — see legacy-validation.md.
-->