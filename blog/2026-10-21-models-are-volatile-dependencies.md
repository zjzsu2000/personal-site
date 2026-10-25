---
title: Models Are Volatile Dependencies
description: Any fixed model-routing table can go stale within a week. Keep the state another agent needs outside any single platform.
slug: models-are-volatile-dependencies
tags: [ai-workflow]
---

On Sept 28, I burned through a 5-hour GPT-6 Astra allowance in under 40 minutes.

On Sept 29, OpenAI announced GPT-6.1 Sol: by its own numbers, close to Astra on agentic coding and computer use, at about a fifth of the token price. The next day, Google announced Gemini 4 Argon at a similar introductory price. That same week, OpenAI postponed the next Astra release after internal safety testing.

<!-- truncate -->

Looking back at that week, the specific numbers matter less than the pattern. Any fixed table of "this model does X, that model does Y" can go stale within a week.

That makes model choice more of a routing decision than an architecture decision. I'd let the cheaper model take most of the work and keep the expensive one for escalations. That is the main path, not the backup.

The harder question is what sits around the model. At DevDay, OpenAI announced almost as much platform as model: sign-in, agents, workspaces, execution environments. I read that as value capture moving up the stack.

Today, if Codex goes down, it's just an outage. But once handoffs, state and evidence all live inside one platform, switching models stops being a tool swap and becomes a migration of your whole working system.

Disaster recovery protects you from an event. Lock-in has no event. There is no outage day, only the day you notice you can't leave.

So my rule is simple: use the platform's compute, but don't keep the only copy of your working memory there. State should be exportable. Another agent should be able to read the current goal, what's done, what remains, and the evidence behind those conclusions.

And the test is simple too: if this platform disappeared tomorrow, could I hand the current task to another agent and keep going?

Models are volatile dependencies. Workflow is the stable layer.

---

*Originally posted on [LinkedIn](https://www.linkedin.com/posts/zjzsu2000_on-sept-28-i-burned-through-a-5-hour-gpt-share-7518758299249500160-pHIv) on Oct 21, 2026.*
