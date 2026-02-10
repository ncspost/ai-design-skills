---
name: generate-insights
description: Synthesize research findings from multiple sources into structured design insights and recommendations. Use after gathering feedback and competitive analysis to crystallize findings into actionable direction.
allowed-tools: Read, Grep, Glob, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-create-pages, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-search
argument-hint: [research topic or Notion page with raw findings]
---

# Generate Insights

Transform raw research data into structured, actionable design insights.

## Process

1. **Gather inputs** — Collect all research from `$ARGUMENTS` (feedback synthesis, competitive analysis, usage data)
2. **Identify themes** — Cluster related findings into 3-5 major themes
3. **Form insights** — Translate each theme into an insight statement
4. **Validate** — Check each insight against multiple data points
5. **Prioritize** — Rank insights by potential design impact
6. **Document** — Create a Notion page with structured findings

## Insight Quality Test

A good insight must be:
- **Grounded** — Supported by at least 2 data points from different sources
- **Specific** — Describes a particular user behaviour or need, not a generality
- **Actionable** — Suggests a design direction, even if not a specific solution
- **Surprising** — Reveals something not already obvious to the team

## Insight Format

```
[User segment] [behaviour/need] because [underlying reason],
which means [design implication].
```

Example: "Power users batch-edit items using keyboard shortcuts because switching to the mouse breaks their flow, which means we should design the new feature with keyboard-first interactions."

## Output Format

```markdown
# Research Insights: [Topic]

## Key Insights
### Insight 1: [Title]
**Statement**: [Full insight statement]
**Evidence**: [Data points supporting this]
**Design implication**: [What this means for the design]
**Confidence**: High/Medium/Low

### Insight 2: [Title]
[Same structure]

## Themes Map
[How insights relate to each other]

## What We Still Don't Know
- [Knowledge gap that needs further research]

## Recommended Next Steps
1. [Action with rationale]
```

## Rules

- Never present a single data point as an insight — triangulate from multiple sources
- Separate observations (what happened) from insights (what it means)
- Include confidence levels so stakeholders can calibrate decisions
- Flag assumptions embedded in each insight
- Keep to 3-5 insights — more dilutes focus
