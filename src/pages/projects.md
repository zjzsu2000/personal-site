---
title: Projects
description: Projects by Jie Zou, including Handoff Reader.
---

# Projects

## Handoff Reader

**Active · Building in public**

A local-first CLI for turning a project into a fixed-schema handoff package that another AI session can pick up without re-explaining the work.

### Problem

AI-assisted projects often lose continuity when work moves between sessions, tools, or models. The next session needs the current goal, state, completed work, next steps, boundaries, and open questions, but that context is usually scattered across chat history, git state, notes, and memory.

### Approach

Handoff Reader points at one local repository and produces two things:

- a fixed seven-section `HANDOFF.md`
- a paste-ready bootstrap block for a new AI session

The first version stays deliberately small: CLI-first, local-first, single-repo, no cloud sync, no accounts, no vector database, and no online playground.

### Status

MVP in progress. The project is being built in public with explicit boundaries, checkpoints, and cross-model review.

### Links

- GitHub repo: coming soon
- [Build notes: Writing / building tag](/writing/tags/building)
- Demo: planned
