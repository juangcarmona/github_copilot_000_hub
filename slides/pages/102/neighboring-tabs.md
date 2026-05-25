---
layout: statement
section: Context
---

# Neighboring Tabs

### Keep relevant files open — Copilot uses them as context.

Related files (interfaces, types, utilities, configs) improve suggestion quality significantly.

> Prompt quality matters, but context quality decides what Copilot **believes**.

<!--
This is one of the simplest and most effective prompt engineering techniques.

Copilot reads open tabs as additional context.
If you're working on a service, keep the interface, the types, and a test file open.

The difference in suggestion quality can be dramatic.

---

**LIVE DEMO — facilitator note**

Use the same prompt twice on BookingForm.jsx:
1. With pricing.js, priceCalculator.js, and the stale api-spec.md all open
2. With only priceService.js and ticketTypes.json open

Show that the same prompt produces different field names, different function calls,
and different import paths.

Point: "Good prompt + bad context loses to decent prompt + good context."

Do NOT turn this into an exercise. Keep it as a 3-minute facilitator demo.
-->