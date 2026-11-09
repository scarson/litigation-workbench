---
name: argument-review
description: "Adversarial review of counsel’s own position: preserve the original, write a separate steelman, seek an independent opponent’s critique, and show which objections changed the revision. Use for testing a case theory or proposed term through both sides’ arguments."
---

Work toward the decision counsel names. Establish the side, audience, forum, posture, cutoff and permitted materials. For a partial record, identify the gap and proceed as far as the available sources allow. Use record IDs and locators a lawyer can reopen. Attribute a stipulation or admission to its actual speaker and scope. Keep a hypothetical concession, a proposed offer, and an agreed fact distinct.

## Before and after the steelman

Honor a narrower assignment. If counsel asks for just one objection or a quick single-pass read, return that review directly and leave the independent stage for a request that calls for it.

1. **Original.** Reproduce the assigned language verbatim, with its draft version and paragraph if available. For a long draft, quote the assigned passage and identify its scope. If counsel supplies only a question, write a short starting argument labeled “working baseline drafted by agent.” Keep that text visible through the final answer.
2. **Steelman.** Write a second, complete, usable version of the strongest argument for counsel’s position. Preserve the client’s objective. Strength may come from narrowing a claim, acknowledging adverse text, or proposing a different remedy. Identify each material change and its supporting pinpoint or explicit assumption. If the requested conclusion cannot be supported, explain the limit and give the strongest supportable alternative. Freeze both versions before inviting review.

## Commission a fresh adversarial review

Delegate to one independent subagent in the approved matter environment. Request GPT-6 Astra (`gpt-6-astra`) or GPT-6.1 Sol (`gpt-6.1-sol`) and explicitly request `xhigh` reasoning for either. Prefer a different model from the drafter when both are available. Use a fresh context without inherited deliberation when supported (for a tool exposing `fork_turns`, select `none`). Give it the two frozen texts, the permitted originals or approved excerpts and locators, and the assignment below. Omit your edit rationale, expected objections and preferred outcome. Respect counsel’s source and sharing limits for the reviewer as well. Never send the case to the public debate site.

Read [the reviewer brief](references/reviewer-brief.md). Fill it in with a concrete adverse role and a question specific to the decision. Send that brief to the agent. Wait for its report before resolving findings. Record what the runtime confirms about the reviewer, model and effort, identifying settings known only from the request. If neither named model at xhigh can be invoked, the agent fails to return, or matter permissions prevent delegation, complete the original and steelman and give counsel a self-contained handoff. Put both actual frozen texts inside the handoff, list the permitted originals to reattach or include the permitted excerpts, and specify Astra or Sol at xhigh in a fresh approved chat. Someone pasting the handoff should need no access to the drafting conversation. State the actual status. If an independent agent returned findings but its settings are unconfirmed, show the findings with that qualification. Keep any self-critique distinctly attributed.

## Deliver the review record

Return these together in the answer or requested editable file:

- The **original**, the **steelman**, and the material changes between them.
- The **review assignment actually sent** (with the source list and access limits), the review status, and the **reviewer’s returned findings in their own words**, with stable IDs. A long return can go in a labeled appendix to the same deliverable. Keep counsel’s materials in the matter workspace. Document the exchange of work products, findings and supporting reasons.
- **Disposition by finding.** Reopen the decisive passage yourself. For each ID give *adopt*, *decline*, or *open*, with a pinpoint or gap, why it matters, and the resulting wording or next action. Keep adverse findings visible even when declined. Mark an unopened exhibit or an unverified legal premise. For a disputed legal rule, route the exact proposition to the brief audit or case-treatment workflow if appropriate.
- **Proposed position for counsel.** Write the full revised passage separately. Mark recommendations as proposed, identify any decision reserved to the client, and end with the single fact, authority, or instruction most likely to change the recommendation. When independent review is pending, label the position provisional. On a new exhibit or corrected authority, retain the prior versions, reopen affected findings and issue a dated revision.
