---
layout: default
section: Testing
---

# Diagnosing Test Failures

<img src="/103/copilot-chat-fix-test-failure.png" class="mx-auto rounded shadow-lg" style="max-height: 420px;" />

<div class="mt-4 text-sm opacity-70">

Use `/fixTestFailure` to diagnose failures. But validate: is the test wrong, or is the code wrong?

</div>

<!--
This screenshot shows the /fixTestFailure workflow in Copilot Chat.

Critical teaching point: when a test fails after AI-generated code, there are TWO possibilities:
1. The code is wrong and needs to be fixed
2. The test is wrong and needs to be fixed

Copilot will cheerfully "fix" either one. Your job is to decide which is actually broken.

A common anti-pattern: asking Copilot to fix a failing test, and it changes the assertion
to match the (broken) implementation. The test now passes. The bug remains.

Exercise 2 in the lab intentionally sets up this scenario.
-->
