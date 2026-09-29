---
title: Projects
description: Projects by Jie Zou, including Handoff Reader and AI-assisted engineering workflows.
---

# Projects

## Handoff Reader

**Featured · OpenAI Build Week submission · Building in public**

Reliable, evidence-grounded handoffs between AI coding sessions.

Handoff Reader turns live repository state into portable, validated handoffs for the next AI coding session. It collects Git evidence, project checkpoints, and repository metadata, then validates freshness and consistency before the handoff is used.

### Highlights

- Provider-neutral AI workflow
- Evidence-grounded repository snapshots
- Freshness and consistency validation
- Fail-closed evidence collection
- 69 automated tests

### Tech

Python, CLI, Git, JSON, Markdown, Codex, GPT-5.6, Claude Code

### Links

- [Build notes: Writing / building tag](/writing/tags/building)
- [Devpost](https://devpost.com/software/handoff-reader)
- [GitHub](https://github.com/zjzsu2000/handoff-reader)
- [Demo](https://youtu.be/LfG8cb-LElw)

---

## Controlled AI-Assisted Engineering Workflow

**Independent · In active use**

A staged workflow with separate planner, builder, and independent read-only reviewer roles for AI-assisted engineering.

Sessions share context through repository artifacts — diffs, tests, specs, checkpoints, review packets, and findings — with automated verification before human approval.

### Principles

- Explicit stop conditions at each stage
- Separation of observation from execution
- Separate human authorization for implementation, commit, push, and irreversible actions
- Cross-model review: builder and reviewer do not share assumptions

### Tech

Claude Code, Codex, Git, repository-grounded validation
