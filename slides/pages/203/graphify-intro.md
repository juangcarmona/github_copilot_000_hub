---
layout: two-cols-header
section: Graphify
---

# Graphify - Repository Knowledge Graphs

::left::

## Beyond Flat Indexing

Standard workspace indexing treats files as independent chunks. But code has **relationships**:
- Module A imports Module B
- Service X depends on Interface Y
- Test Z covers Function W

**Graphify** builds a knowledge graph of your repository:
- Nodes = files, functions, classes, concepts
- Edges = imports, calls, references, dependencies
- Communities = clusters of related code

## Why It Matters for AI-Readiness

A knowledge graph reveals:
- **God nodes** - files everything depends on (risk)
- **Orphan clusters** - disconnected code (dead code?)
- **Missing links** - undocumented dependencies
- **Community structure** - actual vs intended architecture

::right::

## Installation

<img src="/203/graphify-install-1.png" class="rounded shadow-lg" style="max-height: 340px;" />

<div class="mt-2 text-sm opacity-70">
Install the Graphify skill from the VS Code Copilot skills marketplace.
</div>

<!--
Graphify represents the next evolution beyond flat file indexing.

By understanding relationships between code elements,
it provides structural insights that help teams:
1. Identify architectural problems
2. Understand dependency flows
3. Find dead code and orphaned modules
4. Validate that actual architecture matches intended architecture

This is directly relevant to AI-readiness because
well-structured codebases produce better knowledge graphs,
and knowledge graphs reveal structural problems that hurt AI.
-->
