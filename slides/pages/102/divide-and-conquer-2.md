---
layout: default
section: Techniques
---

# Divide and Conquer (2/2)

### Applied Example: Pricing Consolidation

```text
// Step 1: Audit
List all places in this codebase where ticket prices are calculated.
Note which file, which function, and what each calculation includes.

// Step 2: Design
Define the signature for priceService.js. Do not implement yet.

// Step 3: Implement
Write calculatePrice() in priceService.js based on the agreed design.

// Step 4: Migrate (one at a time)
Update BookingForm.jsx to import from priceService.js.
Keep the existing UI unchanged.

// Step 5: Verify
Search for remaining imports of pricing.js or priceCalculator.js.
```

<div class="mt-3 text-sm opacity-70">Each step produces a verifiable artifact before you move to the next.</div>

<!--
The applied example shows divide-and-conquer for a pricing consolidation migration.

Each step is a separate prompt. Validate the output of each before continuing.
This prevents cascading hallucinations and allows course-correction at each gate.
-->
