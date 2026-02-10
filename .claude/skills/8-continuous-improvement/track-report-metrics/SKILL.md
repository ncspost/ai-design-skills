---
name: track-report-metrics
description: Track and report on design process metrics — cycle time, quality scores, design system coverage, accessibility compliance, and team velocity. Use when generating periodic reports for stakeholders.
allowed-tools: mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__list_issues, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__list_projects, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__get_issue, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-create-pages
argument-hint: [time period and metrics to report on]
---

# Track & Report Metrics

Generate design process metrics reports to measure team health and improvement over time.

## Process

1. **Define period** — From `$ARGUMENTS`, set the reporting time range
2. **Pull data** — Gather metrics from Linear (issues, projects) and other sources
3. **Calculate metrics** — Compute values for each tracked metric
4. **Compare trends** — Show change from previous period
5. **Interpret** — Add context and narrative to the numbers
6. **Publish** — Create a Notion page with the report

## Metric Categories

### Process Metrics
- **Design cycle time** — Avg time from design start to handoff
- **Implementation cycle time** — Avg time from handoff to dev complete
- **QA pass rate** — % of features passing QA on first review
- **Revision rate** — Avg number of design revisions before approval
- **Handoff quality score** — QA issues per feature attributed to unclear handoff

### Quality Metrics
- **Design fidelity score** — Avg match between design and implementation
- **Accessibility compliance** — % of components meeting WCAG AA
- **Design system coverage** — % of UI built with design system components
- **Design debt trend** — Number of debt items (growing or shrinking)

### Team Metrics
- **Features delivered** — Count of features shipped
- **Skills utilised** — Which Claude skills were used and how often
- **Automation savings** — Estimated time saved by templates and automations
- **Blockers** — Number and type of blockers encountered

## Output Format

```markdown
# Design Metrics Report: [Period]

## Executive Summary
[2-3 sentence overview of the period's performance]

## Key Metrics
| Metric | This Period | Last Period | Trend | Target |
|--------|-----------|------------|-------|--------|
| Design cycle time | [X days] | [Y days] | [+/-Z%] | [Goal] |
| QA pass rate | [X%] | [Y%] | [+/-Z%] | [Goal] |
| DS coverage | [X%] | [Y%] | [+/-Z%] | [Goal] |

## Highlights
- [Biggest win this period]
- [Notable improvement]

## Concerns
- [Metric trending in wrong direction]
- [Area needing attention]

## Detailed Breakdown

### Process Metrics
[Charts/tables for each metric with trend analysis]

### Quality Metrics
[Charts/tables for each metric with trend analysis]

## Recommendations
1. [Action to maintain positive trends]
2. [Action to address concerns]

## Data Sources
- Linear: [Issues queried, date range]
- Notion: [Pages referenced]
```

## Rules

- Report the same metrics consistently each period so trends are visible
- Always include the previous period for comparison
- Raw numbers without context are meaningless — add narrative interpretation
- Don't cherry-pick metrics that look good — include the full picture
- Highlight both wins and concerns with equal emphasis
- Include recommendations tied to specific metrics
- Set targets collaboratively with the team, not arbitrarily
- Keep the executive summary to 3 sentences max
