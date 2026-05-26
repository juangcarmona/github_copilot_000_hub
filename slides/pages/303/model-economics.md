---
layout: default
section: Economics
---

# Model Tiers and Cost Impact

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="rounded-xl border border-red-200 p-4 bg-red-50">
<h2 class="text-lg font-bold text-red-700 mb-2">Reasoning</h2>
<p class="text-sm mb-2">Claude Opus, Codex, o3</p>
<ul class="text-sm leading-6">
<li>Architecture decisions</li>
<li>Complex debugging</li>
<li>Large-scale analysis</li>
<li>System design</li>
</ul>
<p class="mt-3 text-xs font-semibold text-red-600">Highest credit cost per request</p>
</div>

<div class="rounded-xl border border-yellow-200 p-4 bg-yellow-50">
<h2 class="text-lg font-bold text-yellow-700 mb-2">Coding</h2>
<p class="text-sm mb-2">Claude Sonnet, Gemini Pro</p>
<ul class="text-sm leading-6">
<li>Implementation</li>
<li>Refactoring</li>
<li>Test generation</li>
<li>Code review</li>
</ul>
<p class="mt-3 text-xs font-semibold text-yellow-600">Medium credit cost per request</p>
</div>

<div class="rounded-xl border border-green-200 p-4 bg-green-50">
<h2 class="text-lg font-bold text-green-700 mb-2">Lightweight</h2>
<p class="text-sm mb-2">Haiku, GPT-4o mini</p>
<ul class="text-sm leading-6">
<li>Quick edits</li>
<li>Boilerplate</li>
<li>Formatting</li>
<li>Fast iteration</li>
</ul>
<p class="mt-3 text-xs font-semibold text-green-600">Lowest credit cost per request</p>
</div>

</div>

<div class="mt-6 text-center text-sm opacity-70">

One reasoning prompt that saves five coding retries is a win. Ten reasoning prompts for boilerplate is pure overhead.

</div>

<!--
The tiers are illustrative. Check GitHub's current pricing docs for exact numbers.
The matching principle is what matters: right model for right task.
-->
