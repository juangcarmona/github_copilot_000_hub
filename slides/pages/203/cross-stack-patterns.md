---
layout: two-cols-header
section: Cross-Stack Patterns
---

# AI-Ready Repositories Across Stacks

::left::

## Modern Monorepos
Scoped instructions by workspace:
```
.github/instructions/
├── api.instructions.md      ← applies to packages/api/**
├── web.instructions.md      ← applies to packages/web/**
└── shared.instructions.md   ← applies to packages/shared/**
```
Each workspace gets tailored AI behavior without duplication.

## .NET / C# Projects
Type system and XML docs are strong context signals:
```csharp
/// <summary>
/// Processes an order and returns the transaction ID.
/// Throws <see cref="PaymentException"/> if declined.
/// </summary>
public async Task<string> ProcessOrder(Order order) { }
```
`.github/copilot-instructions.md` should reference the solution structure and NuGet conventions.

::right::

## Legacy & COBOL Systems

Documentation-poor systems need instruction files to fill the gap:
```markdown
# .github/copilot-instructions.md
This system is a COBOL batch processing application.
Core business logic is in src/COBOL/. Do not suggest
rewrites - suggest incremental modernization.
Characterization tests must be written before any
refactoring (see docs/legacy-validation-strategy.md).
```

The `why-ai-ready` argument applies most strongly here: Copilot has no implicit knowledge of legacy systems. Explicit instructions are not optional.

## Power Platform

Custom connectors and Power Automate flows can reference:
- API specs as context for connector generation
- Governance rules in instruction files
- Dataverse schema docs for model-driven guidance

<div class="mt-4 text-sm opacity-70">The AI-ready patterns are the same across stacks. The investment pays higher dividends where documentation is scarce.</div>

<!--
This slide broadens the module beyond TypeScript/React examples.

Key message: the patterns are universal. The urgency is higher for legacy and heterogeneous stacks,
because those teams benefit most from explicit instruction files compensating for missing documentation.

This directly serves the mixed-audience workshop requirement.
-->
