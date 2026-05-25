---
layout: table
section: Monthly Report
---

# Reading the Usage Report

| Column | Meaning | Watch out |
|---|---|---|
| **Total req.** | Interactive Copilot usage | Low usage may indicate low adoption |
| **Frontier %** | Manual use of frontier models | High % may indicate expensive defaults |
| **% Auto** | Requests served via Auto mode | Low % may indicate poor model selection habits |
| **AI usage** | Org-wide tertile (BELOW AVG / AVG / ABOVE AVG) | `BELOW AVG` is worth a conversation |
| **Min** | Lowest individual usage at that level | ⚠️ < 50 → someone is barely using Copilot |
| **Billed req.** | Requests charged above included quota | Signals heavy frontier use burning the pool |

<!--
This report is transitional and internal.

Managers should not read it as:
- productivity score
- performance ranking
- pressure mechanism

Read it as:
- adoption signal
- workflow signal
- model-selection signal
- cost-awareness signal

Start conversations with curiosity:
"what kind of work drove this pattern?"
-->
