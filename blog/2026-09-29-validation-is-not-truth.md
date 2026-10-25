---
title: Validation Is Not Truth
description: A handoff file can pass every structural check and still describe a state that no longer exists.
slug: validation-is-not-truth
tags: [ai-workflow, building]
---

When Codex went down on Sept 25, one piece of advice I saw was simple: keep a second coding agent on standby. If one fails, the other reads the progress file and carries on.

I do run two agents. But that setup can have a quiet single point of failure: both agents read the same handoff file.

<!-- truncate -->

Reliability engineers call this a common-mode failure. Two different engines will still stop together if they burn the same contaminated fuel. Diversity protects you from a shared design flaw, not from a shared bad input.

I've seen that input go bad.

While building Handoff Reader, a small tool for passing project state between AI sessions, I committed one phase of work. Tests passed. The handoff file passed its validator: all seven sections present, in the right order.

A post-commit review found that it still described the pre-commit state. It referenced an old HEAD and told the next agent to wait for a commit that had already happened.

If I had switched agents at that moment, the new one could have trusted it and waited for something that was already done.

The validator checked the document against itself. It never asked the repository.

So before an agent resumes from a handoff, check the handoff against reality: the current HEAD, the working tree, the test results.

Validation is not truth.

---

*Originally posted on [LinkedIn](https://www.linkedin.com/posts/zjzsu2000_when-codex-went-down-on-sept-25-one-piece-share-7510770818293899267-Lw1r) on Sept 29, 2026.*
