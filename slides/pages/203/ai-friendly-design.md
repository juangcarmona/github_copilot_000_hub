---
layout: default
section: AI-Friendly Design
---

# AI-Friendly Repository Design Principles

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
| **Scoped documentation** | `README.md` per module |

</div>

</div>

<div>

## The 80/20 of AI-Readiness

These five changes cover 80% of the improvement:

1. **Name files after what they contain**
   - not `index.ts`, `utils.ts`, `helpers.ts`

2. **Keep files under 200 lines**
   - large files produce unfocused embeddings

3. **Delete dead code**
   - it pollutes retrieval results

4. **Add `copilot-instructions.md`**
   - 10 minutes of work, permanent benefit

5. **Add `ARCHITECTURE.md`**
   - system map for agents and developers

</div>

</div>

<div class="mt-4 text-sm opacity-70">
AI-friendly design is good engineering design made explicit. There's no AI-specific magic — just clarity, consistency, and discoverability.
</div>

<!--
This is the practical action slide.

Teams don't need to refactor everything.
The 80/20 list gives them five concrete actions
they can start today with immediate AI quality improvement.

The principle list is the reference for longer-term investment.
-->
