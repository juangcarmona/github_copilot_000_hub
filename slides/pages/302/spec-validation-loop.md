---
layout: two-cols-header
section: Spec Validation
---

# Specs Enable Automated Validation

::left::

## The Validation Loop

```
Spec
  ↓
  Define acceptance criteria
  and expected behaviors
  ↓
Implementation
  ↓
  Build against the spec.
  Each task has defined scope.
  ↓
Test against spec
  ↓
  Generate tests from spec criteria:
  "Write tests that validate these
   acceptance criteria from the spec"
  ↓
Iterate
  ↓
  Failing test = spec deviation.
  Fix implementation, not the test.
```

::right::

## From Spec to Tests

Spec criteria become test cases directly:

```markdown
# Spec: User registration
Acceptance criteria:
- Email must be validated on submission
- Password must be at least 12 characters
- Duplicate emails must return a 409 response
- Successful registration sends a confirmation email
```

```
/tests Generate tests for the user registration
endpoint that validate all acceptance criteria
in #file:docs/specs/user-registration.spec.md
```

## Connecting 302 Back to 103

The spec-driven loop is the TDD loop (Module 103), elevated to the feature level:
- Module 103: tests validate functions
- Module 302: specs validate features

Both enforce the same discipline: define expected behavior before implementing it.

<!--
This slide makes the connection between 302 and 103 explicit.

Key insight: SDD is not a different process. It's the same validation discipline applied at a higher level of abstraction.

The spec is the feature-level equivalent of the test. Copilot generates both.
-->
