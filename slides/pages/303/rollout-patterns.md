---
layout: default
section: Rollout
---

# Phased Rollout Pattern

```mermaid
graph LR
    A[Phase 1<br/>Pilot] --> B[Phase 2<br/>Expand] --> C[Phase 3<br/>Standardize] --> D[Phase 4<br/>Operationalize]
    
    style A fill:#dbeafe
    style B fill:#d1fae5
    style C fill:#fef3c7
    style D fill:#ede9fe
```

<div class="grid grid-cols-4 gap-3 mt-6 text-sm">

<div class="p-3 rounded border border-blue-200 bg-blue-50">
<strong>Pilot</strong><br/>
5–15 developers<br/>
Measure adoption and friction<br/>
Define approved tools and data rules<br/>
Capture baseline metrics
</div>

<div class="p-3 rounded border border-green-200 bg-green-50">
<strong>Expand</strong><br/>
Team-level rollout<br/>
Instruction files in repos<br/>
First reusable prompts and agents<br/>
First usage reviews
</div>

<div class="p-3 rounded border border-yellow-200 bg-yellow-50">
<strong>Standardize</strong><br/>
Shared practices and conventions<br/>
Review expectations defined<br/>
Model strategy established<br/>
Quality metrics tracked
</div>

<div class="p-3 rounded border border-purple-200 bg-purple-50">
<strong>Operationalize</strong><br/>
Usage dashboards live<br/>
Budget controls active<br/>
Policy review cadence<br/>
Continuous optimization
</div>

</div>

<!--
Governance does not start after expansion. It starts small and deepens with each phase.

Pilot phase must already include:
- approved tool list
- basic data handling rules
- baseline metrics capture

Do not wait until you have 100 developers using AI to define how it should be used.
By then, shadow practices are already established and hard to change.
-->

