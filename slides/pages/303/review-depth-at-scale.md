---
layout: default
section: Agent Governance
---

# AI Review Changes the Bottleneck

<div class="grid grid-cols-2 gap-6 mt-4">
<div class="leading-snug text-sm">

AI increases the volume and speed of change.
Reviewer capacity does not scale automatically.

**AI handles:**
- First-pass mechanical checks
- Style, formatting, obvious issues
- Missing tests or docs

**Humans retain ownership of:**
- Logic and algorithmic correctness
- Architectural fit
- Business correctness
- Production risk and rollout safety

Approval criteria must be **explicit** - not implied.

</div>
<div class="text-sm">

## Metrics to Watch

- PRs approved without comments
- Substantive comment rate per PR
- Review time relative to PR size
- Rework volume after review
- Bug escape rate to production

**Warning sign:** review gets faster but less substantive.
Quality risk is increasing silently.

</div>
</div>

<!--
AI review is not just a feature. It changes the review operating model.

When AI generates more code, PR volume increases.
If reviewer capacity stays the same and review time drops,
that is not an efficiency gain - it is a risk indicator.

AI review should reduce noise, not replace judgment.
The standard for meaningful human review must be maintained explicitly.
-->
