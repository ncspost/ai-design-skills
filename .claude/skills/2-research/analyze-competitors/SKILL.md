---
name: analyze-competitors
description: Analyze competitor products and industry benchmarks for a specific feature area, documenting patterns and opportunities. Use when exploring how others solve similar design problems before starting exploration.
allowed-tools: Read, Grep, Glob, WebSearch, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-create-pages
argument-hint: [feature area and competitor names]
---

# Analyze Competitors & Benchmark

Research how competitors and industry leaders approach a specific design problem.

## Process

1. **Define scope** — Identify the feature area and competitors from `$ARGUMENTS`
2. **Research competitors** — Search for how 3-5 competitors handle this feature
3. **Identify patterns** — Document common approaches across products
4. **Find differentiators** — Note unique or innovative approaches
5. **Assess strengths/weaknesses** — Evaluate each approach against user needs
6. **Document in Notion** — Create a structured comparison page

## Analysis Dimensions

For each competitor, evaluate:
- **Information architecture** — How is content organized?
- **Interaction model** — How do users accomplish the task?
- **Visual treatment** — How is hierarchy and emphasis communicated?
- **Edge case handling** — How are errors, empty states, and limits handled?
- **Accessibility** — Is the experience inclusive?
- **Mobile adaptation** — How does it work on smaller screens?

## Output Format

```markdown
# Competitive Analysis: [Feature Area]

## Competitors Reviewed
1. [Product A] — [Brief description of their approach]
2. [Product B] — [Brief description]

## Pattern Matrix
| Dimension | Product A | Product B | Product C | Opportunity |
|-----------|----------|----------|----------|-------------|
| [Dimension] | [Approach] | [Approach] | [Approach] | [Gap/Opportunity] |

## Common Patterns
- [Pattern seen across 3+ products]

## Unique Approaches Worth Considering
- [Product]: [What they do differently and why it works]

## Anti-Patterns to Avoid
- [Common mistake seen in competitors]

## Opportunities for Differentiation
1. [Opportunity with rationale]
```

## Rules

- Focus on design patterns and UX, not feature lists
- Include screenshots or descriptions of key interactions
- Note what each competitor does well AND poorly
- Always tie findings back to your users' specific needs
- Document at least one opportunity that no competitor addresses
