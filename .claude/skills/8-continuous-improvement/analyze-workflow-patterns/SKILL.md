---
name: analyze-workflow-patterns
description: Analyze workflow patterns across completed projects and sprints to identify bottlenecks, inefficiencies, and improvement opportunities in the design-to-dev process. Use when conducting periodic process reviews.
allowed-tools: mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__list_issues, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__list_projects, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__get_issue, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-search
argument-hint: [time period or project to analyze]
---

# Analyze Workflow Patterns

Identify patterns, bottlenecks, and improvement opportunities in the design-to-dev workflow.

## Process

1. **Define scope** — From `$ARGUMENTS`, set the time period or project to analyze
2. **Gather data** — Pull issues from Linear and documents from Notion
3. **Map the workflow** — Trace how work moved through phases
4. **Identify patterns** — Look for recurring bottlenecks, delays, and friction points
5. **Quantify impact** — Estimate time lost or quality impact for each pattern
6. **Recommend improvements** — Suggest specific process changes

## Analysis Dimensions

### Cycle Time
- How long from design start to dev handoff?
- How long from handoff to implementation complete?
- How long from QA start to release?
- Where do tickets spend the most time?

### Handoff Quality
- How many QA issues relate to unclear specs?
- How often do developers ask clarifying questions?
- What percentage of designs need revision after handoff?
- Are edge cases consistently covered?

### Rework Patterns
- What types of changes come back most often?
- At what phase are problems typically caught?
- How much rework could have been prevented by catching issues earlier?

### Communication
- Where do misunderstandings happen most?
- Are design decisions documented for future reference?
- Do retrospective actions get implemented?

### Tool Efficiency
- Are the right tools being used for each phase?
- Are there manual steps that could be automated?
- Is context getting lost between tools?

## Output Format

```markdown
# Workflow Analysis: [Period/Project]

## Key Metrics
| Metric | Value | Trend | Target |
|--------|-------|-------|--------|
| Avg cycle time (design → release) | [X days] | [Up/Down/Flat] | [Goal] |
| Handoff revision rate | [X%] | [Trend] | [Goal] |
| QA issue density | [X per feature] | [Trend] | [Goal] |

## Bottlenecks Identified
| # | Bottleneck | Phase | Impact | Frequency | Root Cause |
|---|-----------|-------|--------|-----------|-----------|
| 1 | [Bottleneck] | [Phase] | [Time/Quality impact] | [How often] | [Why it happens] |

## Patterns
### Positive (Keep Doing)
- [Pattern that works well]

### Negative (Address)
- [Pattern causing problems]

## Recommendations
| # | Recommendation | Addresses | Effort | Impact |
|---|---------------|----------|--------|--------|
| 1 | [Specific change] | [Which bottleneck] | [Low/Med/High] | [Low/Med/High] |

## Quick Wins
1. [Low-effort, high-impact improvement]
```

## Rules

- Use data, not opinions — ground every finding in measurable patterns
- Look at multiple projects/sprints to identify trends, not just one-off incidents
- Separate systemic issues from one-time problems
- Recommendations must be specific and actionable, not vague process suggestions
- Include positive patterns to reinforce — don't only focus on problems
- Prioritise recommendations by effort-to-impact ratio
