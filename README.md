# GitHub Copilot Zero-to-Hero Crash Course

Practical workshop to go from zero to hero with GitHub Copilot.
Focus: real engineering workflows, not just features.

## What is in each deck

- `000` - Orientation: workshop map, agentic shift, workflow economics, and rules. Audience: all. Time: 20-30 min.
- `101` - Foundations: what Copilot is, how it works, chat/autocomplete, limits and trust. Audience: beginners. Time: 60-90 min.
- `102` - Prompting: context control, prompt precision, few-shot patterns, iterative refinement. Audience: beginner-intermediate. Time: 45-75 min.
- `103` - AI workflow quality: testing, review, validation, and security checks. Audience: engineers. Time: 45-60 min.
- `201` - Instructions: custom instructions, hierarchy, conflicts, and governance. Audience: teams and tech leads. Time: 45-60 min.
- `202` - Agents: ask vs agent mode, autonomy, approvals, and workflow automation. Audience: intermediate-advanced. Time: 60-90 min.
- `203` - AI-ready repos: structure, naming, discoverability, indexing, and repo maturity. Audience: maintainers and architects. Time: 45-75 min.
- `301` - MCP and orchestration: tools, integrations, trust boundaries, and secure usage. Audience: advanced users. Time: 60-90 min.
- `302` - Spec-driven development: spec-first planning, implementation flow, drift prevention. Audience: leads and delivery teams. Time: 45-75 min.
- `303` - AI-SDLC: maturity model, governance, metrics, and operating model at scale. Audience: managers, architects, tech leads. Time: 45-60 min.

## Template setup hint

Create your own repository directly from this template repository. Just click the "Use this template" button at the top of the page.

## Quick start

```powershell
pnpm install
cd slides
```

## Launch each deck

Run these commands from `slides/`:

```powershell
pnpm copilot-000
pnpm copilot-101
pnpm copilot-102
pnpm copilot-103
pnpm copilot-201
pnpm copilot-202
pnpm copilot-203
pnpm copilot-301
pnpm copilot-302
pnpm copilot-303
```

Optional deck:

```powershell
pnpm subscription-efficiency
```

## Export slides

From `slides/`:

```powershell
pnpm export
```

## Extra resources

- `extra/` - supporting notes on AI-SDLC, MCP, hooks, extensions, CLI, and agentic workflows.
- `CLIENT_CHECKLIST.md` - practical checklist for delivery/readiness.
- `AGENDA.md` - workshop timeline and flow.
- `FALLBACK_PLAN.md` - backup plan if demos fail.

## Suggested learning path

`000 -> 101 -> 102 -> 103 -> 201 -> 202 -> 203 -> 301 -> 302 -> 303`
