---
name: generate-opportunity-solution-trees
description: Generate an Opportunity Solution Tree from research insights, mapping outcomes to opportunities to potential solutions. Use when translating research findings into a structured exploration framework.
allowed-tools: Read, Grep, Glob, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-create-pages, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_document
argument-hint: [desired outcome and research insights source]
---

# Generate Opportunity Solution Trees

Create an Opportunity Solution Tree (OST) to structure the path from desired outcome to testable solutions.

## Process

1. **Define the outcome** — Clarify the measurable product outcome from `$ARGUMENTS`
2. **Map opportunities** — From research insights, identify user opportunities (needs, pain points, desires)
3. **Generate solutions** — Brainstorm 2-3 potential solutions per opportunity
4. **Identify experiments** — Define how to test each solution cheaply
5. **Document the tree** — Create a structured Notion page and Linear document

## OST Structure

```
Desired Outcome
├── Opportunity 1 (user need/pain point)
│   ├── Solution 1a
│   │   └── Experiment: [How to test]
│   ├── Solution 1b
│   │   └── Experiment: [How to test]
├── Opportunity 2
│   ├── Solution 2a
│   │   └── Experiment: [How to test]
```

## Opportunity Quality Criteria

Good opportunities are:
- Stated as user needs, not features ("needs to quickly find past orders" not "add a search bar")
- Supported by research evidence
- Distinct from each other (not overlapping)
- Sized appropriately (not so broad they're meaningless)

## Output Format

```markdown
# Opportunity Solution Tree: [Outcome]

## Desired Outcome
[Measurable outcome statement]

## Opportunities
### O1: [Opportunity Name]
**Evidence**: [Research backing]
**Impact potential**: High/Medium/Low

#### Solutions
- **S1a**: [Solution] → Experiment: [Test approach]
- **S1b**: [Solution] → Experiment: [Test approach]

### O2: [Opportunity Name]
[Same structure]

## Prioritization
| Opportunity | Impact | Confidence | Effort | Priority |
|------------|--------|-----------|--------|----------|
| O1 | [H/M/L] | [H/M/L] | [H/M/L] | [Rank] |

## Recommended Starting Point
[Which opportunity-solution pair to explore first and why]
```

## Rules

- The outcome must be measurable — avoid vague goals
- Opportunities come from research, not assumptions
- Each opportunity should have at least 2 different solution approaches
- Experiments should be the cheapest way to learn, not full implementations
- Revisit and update the tree as new evidence emerges
