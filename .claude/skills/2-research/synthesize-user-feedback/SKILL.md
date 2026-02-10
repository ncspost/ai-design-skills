---
name: synthesize-user-feedback
description: Synthesize user feedback from Slack channels and Linear issues into actionable design insights. Use when you need to understand what users are saying about a feature area before designing solutions.
allowed-tools: Read, Grep, Glob, mcp__07bc7ee9-cc70-4371-92d2-9b3338dcd3e0__slack_search_public, mcp__07bc7ee9-cc70-4371-92d2-9b3338dcd3e0__slack_read_channel, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__list_issues, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__list_comments
argument-hint: [feature area or product surface]
---

# Synthesize User Feedback

Collect and synthesize user feedback from multiple sources into structured design insights.

## Process

1. **Define the scope** — Identify the feature area from `$ARGUMENTS`
2. **Search Slack** — Find user-reported issues, feature requests, and sentiment in relevant channels
3. **Search Linear** — Pull bug reports, feature requests, and user-facing issues
4. **Categorize feedback** — Group by theme, severity, and frequency
5. **Extract patterns** — Identify recurring pain points and unmet needs
6. **Synthesize insights** — Translate raw feedback into design-actionable insights

## Categorization Framework

### By Type
- **Pain point** — Something that frustrates users today
- **Feature request** — Something users explicitly ask for
- **Workaround** — A behaviour indicating a design gap
- **Praise** — Something working well (protect in redesigns)

### By Frequency
- **Recurring** — Multiple users, multiple occasions
- **Emerging** — Recently appearing, trending upward
- **Isolated** — Single user or one-off mention

## Output Format

```markdown
# Feedback Synthesis: [Feature Area]

## Top Insights
1. [Insight with evidence count] — [X mentions across Y sources]
2. [Insight] — [Evidence]

## Pain Points (by frequency)
| Pain Point | Frequency | Severity | Example Quote | Source |
|-----------|-----------|----------|---------------|--------|
| [Issue] | [Count] | [H/M/L] | "[Quote]" | [Link] |

## Feature Requests
| Request | Frequency | Aligns With |
|---------|-----------|-------------|
| [Request] | [Count] | [Product goal or OKR] |

## Positive Signals (Protect These)
- [What's working well]

## Recommended Focus Areas
1. [Area with rationale]
```

## Rules

- Quantify everything — "users are frustrated" is not an insight; "12 users reported X in the last month" is
- Distinguish between what users say they want and what their behaviour indicates they need
- Always note the timeframe of the feedback
- Flag any feedback that contradicts other feedback
- Preserve original quotes for stakeholder communication
