---
layout: two-cols-header
section: Testing
---

# Generated Test Workflow

::left::

## Generate

Use `/tests` or describe what you need:

```
Generate xUnit tests for TicketService.CancelTicket.
Cover: valid cancellation, already cancelled,
past event, refund eligibility, null input.
```

Then run immediately. Expect red first.

## Iterate

```
Add a test for concurrent cancellation.
Add a test for inputs with whitespace-only fields.
```

::right::

## Review every assertion

For each generated test, ask:
> If I break the implementation, does this test catch it?

```csharp
// ❌ Asserts nothing
var result = service.Cancel(id);
Assert.NotNull(result);

// ✅ Asserts behavior
Assert.Equal(CancelResult.Refunded, result.Status);
Assert.True(result.RefundAmount > 0);
```

<div class="mt-4 text-sm opacity-70">Copilot optimizes for "passes" — not for "catches bugs". You own the assertion quality.</div>

<!--
Merged from test-generation.md and setup-tests.md.

The setup-tests screenshot moved to fix-test-failure.md which is already demo-focused.
This slide is the operational workflow — describe, generate, run red, iterate, verify assertions.

The right column assertion contrast is the single most important teaching point.
A test that can't catch a regression is not a test.
-->
