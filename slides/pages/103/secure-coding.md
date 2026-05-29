---
layout: default
section: Security
---

# Security Review Workflow

<div class="grid grid-cols-[1fr_1.2fr] gap-6">
<div>

## The Loop

```
Generate code
     ↓
Ask: "Is this vulnerable?"
     ↓
Scan (GHAS / CodeQL)
     ↓
Remediate findings
     ↓
Re-scan - clean? → Commit
```

## Ask while coding

- *"Is this vulnerable to SQL injection?"*
- *"Does this validate and sanitize input?"*
- *"Are there authorization bypass paths?"*

</div>
<div>

<img src="/103/secure-coding.png" class="rounded shadow-lg" style="max-height: 340px;" />

<div class="mt-2 text-sm opacity-70">

Copilot reasons about vulnerabilities in context.
Use GHAS to validate what it misses.

</div>

</div>
</div>

<!--
Simplified security slide focused on the workflow loop with the visual.

The detailed detection capabilities and GHAS integration are in security-detection.md.

Key change from previous version: this is a workflow, not a feature description.
Focus on how to use security tools in the development workflow.

Lab exercises:
- Exercise 1 (Spot the Vulnerability): systematic security audit of DatabaseHelper.cs,
  AuthMiddleware.cs, CryptoHelper.cs, and Controllers/. At least 8 vulnerabilities.
- Exercise 5 (Secure the Endpoint): apply the loop to fix vulnerabilities from Exercise 1.
-->