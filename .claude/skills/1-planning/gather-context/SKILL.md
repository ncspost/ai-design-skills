---
name: context-gathering
description: Gather context from Slack, Notion, and Mintlify to build a comprehensive understanding of a design problem before planning begins. Use when starting a new design project, kicking off a feature, or needing background on an existing product area.
allowed-tools: Read, Grep, Glob, mcp__07bc7ee9-cc70-4371-92d2-9b3338dcd3e0__slack_search_public, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-search, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-fetch
argument-hint: [feature or product area to research]
---

# Context Gathering

Collect and synthesize relevant context from across the product ecosystem to inform design planning.

## Process

1. **Identify the scope** — Confirm the feature or product area from `$ARGUMENTS`
2. **Search Slack** — Find recent discussions, decisions, and feedback related to the topic
3. **Search Notion** — Locate existing specs, briefs, strategy docs, and prior design decisions
4. **Search documentation** — Check published docs for current state and gaps
5. **Synthesize** — Combine findings into a structured context brief

## What to Look For

- Prior art and existing decisions
- Stakeholder opinions and constraints mentioned in discussions
- Related feature requests or bug reports
- Current documentation coverage and gaps
- Technical constraints or dependencies mentioned by engineering

## Output Format

```markdown
# Context Brief: [Feature/Area]

## Summary
[2-3 sentence overview of what was found]

## Key Decisions Already Made
- [Decision 1 — source link]
- [Decision 2 — source link]

## Open Questions
- [Question that needs resolution]

## Stakeholder Input
- [Who said what, with source]

## Related Resources
- [Links to relevant docs, threads, specs]

## Gaps Identified
- [What's missing or unclear]
```

## Rules

- Always cite sources with links to original Slack threads, Notion pages, or docs
- Flag any conflicting information found across sources
- Note the recency of each source — older context may be outdated
- Keep the brief under 500 words — this is a starting point, not a deep dive
