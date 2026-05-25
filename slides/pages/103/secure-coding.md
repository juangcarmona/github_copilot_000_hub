---
layout: two-cols-header
section: Security
---

# Security Review Workflow

::left::

## Review During Generation

Ask directly while coding:
- *"Is this code vulnerable to SQL injection?"*
- *"Does this endpoint validate and sanitize input?"*
- *"Are there paths where user data reaches the filesystem?"*

Copilot can reason about vulnerabilities in context. Ask it to check as you write.

## GHAS Integration

Use Copilot to act on scanning results:
- *"How do I fix this CodeQL alert?"*
- *"Explain this secret scanning finding and remediation"*
- Write custom CodeQL queries: *"Generate a CodeQL query to find all SQL string concatenations"*

::right::

## The Security Review Loop

**1. Generate** — write the code.

**2. Ask** — prompt Copilot to review for OWASP Top 10 patterns.

**3. Scan** — run GHAS / CodeQL / secret scanning on the branch.

**4. Remediate** — use Chat to understand findings and generate fixes.

**5. Validate** — re-run scans. Don't commit until clean.

<div class="mt-4 text-sm opacity-70">Defense in depth: Copilot filters catch patterns during generation. GHAS catches what reaches the repo. Human review catches logic issues. All three are needed.</div>

<!--
Key change from the previous version: this is a workflow, not a feature description.
The "built-in protections" section was removed — that's covered in 101/how-copilot-works.md.

Focus on how to use security tools in the development workflow, not what protections exist.
-->