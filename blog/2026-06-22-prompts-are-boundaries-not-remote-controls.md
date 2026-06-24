---
title: Prompts Are Boundaries, Not Remote Controls
description: Strong AI models do not just need better instructions. They need clearer boundaries.
slug: prompts-are-boundaries-not-remote-controls
tags: [ai-workflow, judgment]
---

When models were weaker, a prompt usually felt like teaching. You spelled out the task step by step, listed the commands in order, and hoped the model could follow along without losing the thread. The skill was patience and precision: say more, say it more carefully, and you got a better result.

That is no longer the most important problem.

<!-- truncate -->

With stronger models, the failure mode changes shape. The model understands your words. It moves quickly. It produces something clean and plausible. And it can still do the wrong job — not because it misread the instruction, but because the instruction itself was underspecified at the boundary. A capable model will faithfully execute a flawed request faster and more convincingly than a junior teammate ever could. Speed stops being the constraint. Clarity about what counts as the task becomes the constraint.

That is why I've started thinking of prompts less as remote controls and more as boundary documents. A remote control assumes you are steering every move in real time: do this, now this, now this. A boundary document assumes the other side is competent and self-directed, and your job is to define the edges of the work so that competence is pointed in the right direction.

## A commit boundary problem

A while ago I was using an AI coding assistant to help me clean up a small personal project repository before committing. Nothing dramatic — just end-of-session housekeeping. But the working tree had two completely different kinds of changes sitting in it at the same time.

The first set was a record of a decision I had already made and acted on. It was settled history: this is what I concluded, this is what I did, here's the reasoning so future-me can reconstruct it.

The second set was the opposite. It was a contingency plan I had not acted on — a set of conditions and triggers describing what I might do later, under circumstances that had not happened yet. It was deliberately provisional. Its whole value depended on staying clearly marked as "not yet real."

To the file system, these looked the same: edited files, ready to stage. My instinct was to type the most natural prompt in the world — "commit everything" — and move on.

I stopped, because I realized the model would do exactly that, and do it well. It would write a tidy, reasonable-sounding commit message, bundle both kinds of change into a single commit, and leave me with a history that quietly lied. Three months later, looking back, I would not be able to tell which part was a settled decision and which part was a hypothetical I never executed. The two things have opposite meanings, and a single commit would have flattened them into one.

The model was not going to make a coding mistake. There was no bug to catch. The risk was entirely about boundaries — about what belongs together and what must stay separate — and that is precisely the kind of judgment a vague prompt hands off by accident.

The fix was not a smarter prompt. It was a boundary.

The instruction that actually worked was not longer or more clever. It was a boundary instead of a command. Roughly: look at the changes; these are two unrelated kinds of work; separate them; keep the settled decision in one commit and the unexecuted plan in another; do not mix them; and do not touch anything you are unsure about — show me first.

Notice what that does. It does not micromanage the steps. It does not tell the model which files to git add in what order. It trusts the model to handle the mechanics — which it is genuinely good at — while reserving for me the one thing I actually cared about: the semantic line between "done" and "maybe later."

That experience generalized into a small checklist I now use almost reflexively. A good prompt, for a capable model, should answer four questions:

1. What is the goal? Not the steps — the outcome that would make this a success.
2. What is inside the task boundary? What is this change actually about?
3. What is explicitly out of scope? What should the model not touch, bundle in, or assume?
4. How will the result be checked? What does "verified" mean before I accept it?

None of this is about writing longer prompts. If anything, the prompts get shorter, because I stop narrating mechanics the model already knows. What I add is clarity about responsibility — where its autonomy ends and my judgment begins.

## Why this matters beyond one commit

The commit story is small on purpose. But the same pattern shows up everywhere once you start using strong models for real work. The model refactors confidently across a boundary you did not mean to cross. It "fixes" something that was intentional. It merges two concerns because nothing told it they were different. Each time, the model is being helpful and fast, and each time the gap is a boundary the human never made explicit.

This is also why I do not think the answer is "trust the model more" or "trust it less." It is to change what the human contributes. The scarce input is no longer step-by-step instruction. It is the boundary: the goal, the scope, the explicit out-of-scope, and the acceptance check. Around that, I lean on the same habits — checkpoints to preserve state, review, and explicit constraints written down rather than held in my head.

Sometimes that review comes from a second model that does not share the first model's assumptions. Sometimes it comes from a test, a diff, or a checklist. The point is the same: speed is useful only when the boundary is visible enough to verify.

AI is already fast. The engineering problem now is making that speed safe enough to rely on in real work. That does not come from better remote-control instructions. It comes from drawing the boundaries clearly — and the prompt is simply the first place those boundaries get written down.
