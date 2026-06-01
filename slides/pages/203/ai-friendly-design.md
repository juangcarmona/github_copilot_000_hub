---
layout: default
section: AI-Friendly Design
---

### AI-Friendly Repository Design Principles

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

## Structure for Machines

<div class="text-sm">

| Principle | Implementation |
|---|---|
| **One concept per file** | `order.service.ts`, not `services.ts` |
| **Domain-first folders** | `src/orders/`, not `src/services/` |
| **Predictable naming** | `{domain}.{layer}.ts` everywhere |
| **Explicit entry points** | `README.md`, `ARCHITECTURE.md` |
| **Co-located tests** | `*.test.ts` next to `*.ts` |

</div>

</div>

<div>

## The 80/20 of AI-Readiness

These four changes cover most of the improvement:

1. **Name files after what they contain**
   - avoid `index.ts`, `utils.ts`, `helpers.ts`

2. **Keep files under 200 lines**
   - large files produce noisy retrieval

3. **Delete dead code**

4. **Add core context files**
   - `copilot-instructions.md` and `ARCHITECTURE.md`

</div>

</div>

<div class="mt-4 text-sm opacity-70">
AI-friendly design is good engineering design made explicit: clarity, consistency, and discoverability.
</div>

<!--
This is the practical action slide.

Teams don't need to refactor everything.
The 80/20 list gives them five concrete actions
they can start today with immediate AI quality improvement.

The principle list is the reference for longer-term investment.
-->
