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

## Do NOT skip review

Copilot generates tests that pass trivially:
```ts
// ❌ Tests that it doesn't throw — not that it's correct
expect(() => validate(null)).not.toThrow();

// ✅ Tests the actual contract
expect(validate(null)).toBe(false);
```

<!--
The TDD workflow: read → generate tests → review assertions → run → iterate on edge cases.

The most important step: reviewing assertion logic. Copilot often generates tests that pass without validating behavior.

Test generation is also the best entry point for legacy code validation — see legacy-validation.md.
-->