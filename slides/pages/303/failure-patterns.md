---
layout: default
section: Sustainability
---

# Common AI SDLC Failure Patterns

<div class="grid grid-cols-5 gap-3 mt-6 text-xs">

<div class="rounded-xl border border-red-200 p-3 bg-red-50">
<div class="font-bold text-sm mb-2">Tool-First Rollout</div>
<p><strong>Symptom:</strong> Licenses distributed before any workflow standards exist.</p>
<p class="mt-2"><strong>Consequence:</strong> Fragmented usage, inconsistent quality, data policy gaps.</p>
</div>

<div class="rounded-xl border border-orange-200 p-3 bg-orange-50">
<div class="font-bold text-sm mb-2">Measuring Without Baselines</div>
<p><strong>Symptom:</strong> Dashboards show AI usage, but no pre-AI data to compare against.</p>
<p class="mt-2"><strong>Consequence:</strong> Impact cannot be measured. Storytelling replaces evidence.</p>
</div>

<div class="rounded-xl border border-yellow-200 p-3 bg-yellow-50">
<div class="font-bold text-sm mb-2">Productivity Theater</div>
<p><strong>Symptom:</strong> More PRs, more code, more tickets closed.</p>
<p class="mt-2"><strong>Consequence:</strong> Review depth, defect rate, and maintainability degrade silently.</p>
</div>

<div class="rounded-xl border border-purple-200 p-3 bg-purple-50">
<div class="font-bold text-sm mb-2">Governance After Incident</div>
<p><strong>Symptom:</strong> No data policy until something leaks or breaks.</p>
<p class="mt-2"><strong>Consequence:</strong> Reactive controls are more disruptive than proactive ones.</p>
</div>

<div class="rounded-xl border border-blue-200 p-3 bg-blue-50">
<div class="font-bold text-sm mb-2">One-Size Adoption</div>
<p><strong>Symptom:</strong> Same AI workflow imposed on all teams, all phases, all risk levels.</p>
<p class="mt-2"><strong>Consequence:</strong> High-risk phases get under-governed. Low-risk phases get over-controlled.</p>
</div>

</div>

<!--
These are not edge cases. They are the normal failure modes when organizations scale access
faster than operating discipline.

Each failure pattern has a corresponding fix:
- Tool-first → standards-first
- No baselines → baseline before scale
- Productivity theater → measure outcomes, not activity
- Governance after incident → lightweight guardrails from day one
- One-size adoption → phase-specific controls

The good news: all of them are preventable with deliberate rollout design.
-->
