---
layout: default
section: Rollout
---

# Phased Rollout Pattern

```mermaid
graph LR
    A[Phase 1<br/>Pilot] --> B[Phase 2<br/>Expand] --> C[Phase 3<br/>Govern] --> D[Phase 4<br/>Operationalize]
    
    style A fill:#dbeafe
    style B fill:#d1fae5
    style C fill:#fef3c7
    style D fill:#ede9fe
```

<div class="grid grid-cols-4 gap-3 mt-6 text-sm">

<div class="p-3 rounded border border-blue-200 bg-blue-50">
<strong>Pilot</strong><br/>
5-15 developers<br/>
Measure adoption<br/>
Identify friction<br/>
No governance yet
</div>

<div class="p-3 rounded border border-green-200 bg-green-50">
<strong>Expand</strong><br/>
Team-level rollout<br/>
Add instruction files<br/>
Establish conventions<br/>
First usage reviews
</div>

<div class="p-3 rounded border border-yellow-200 bg-yellow-50">
<strong>Govern</strong><br/>
Org-wide policies<br/>
Budget controls<br/>
Data handling rules<br/>
Approved tool list
</div>

<div class="p-3 rounded border border-purple-200 bg-purple-50">
<strong>Operationalize</strong><br/>
Usage dashboards<br/>
Workflow standards<br/>
Agent governance<br/>
Continuous optimization
</div>

</div>

<!--
Do not roll out to everyone simultaneously.
Pilot, learn, iterate, expand.
Each phase adds governance proportional to scale.
-->
