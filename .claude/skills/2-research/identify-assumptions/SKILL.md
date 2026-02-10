---
name: identify-assumptions
description: Identify and prioritize assumptions embedded in design plans, then propose lightweight experiments to validate the riskiest ones. Use when a design direction has been chosen but key assumptions haven't been tested.
allowed-tools: Read, Grep, Glob, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_issue, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-update-page
argument-hint: [feature plan or OST to analyze]
---

# Identify & Prioritize Assumptions

Surface hidden assumptions in a design plan and prioritize them for validation.

## Process

1. **Review the plan** — Read the feature plan or OST from `$ARGUMENTS`
2. **Extract assumptions** — Identify every unstated belief the plan relies on
3. **Categorize** — Group by type (user, business, technical, design)
4. **Prioritize** — Rank by risk (what happens if this assumption is wrong?)
5. **Design experiments** — Propose fast, cheap ways to test the riskiest assumptions
6. **Log in Linear** — Create issues for experiments that need to run

## Assumption Categories

- **User assumptions** — "Users will understand this interaction", "Users need this feature"
- **Business assumptions** — "This aligns with our strategy", "The ROI justifies the effort"
- **Technical assumptions** — "The API can support this", "Performance will be acceptable"
- **Design assumptions** — "This pattern will work at scale", "The design system supports this"

## Prioritization Matrix

Plot each assumption on:
- **X-axis**: How much evidence do we have? (None → Strong)
- **Y-axis**: How critical is this to success? (Nice-to-have → Foundational)

High-criticality + low-evidence = **test first**.

## Output Format

```markdown
# Assumption Map: [Feature]

## Assumptions Identified
| # | Assumption | Category | Criticality | Evidence | Priority |
|---|-----------|----------|-------------|----------|----------|
| A1 | [Assumption] | [User/Biz/Tech/Design] | [H/M/L] | [None/Weak/Strong] | [Test/Monitor/Accept] |

## Top Risks (Test These First)
### A1: [Assumption]
- **If wrong**: [Consequence]
- **Experiment**: [Cheapest way to test]
- **Success signal**: [What validates the assumption]
- **Timeline**: [How long to test]

## Safe Assumptions (Proceed)
- [Assumptions with strong evidence]

## Recommendations
1. [Prioritized action]
```

## Rules

- Every plan has assumptions — if you find fewer than 5, look harder
- The most dangerous assumptions are the ones nobody questions
- Experiments should take days, not weeks
- "We'll just ask users" is not always the best experiment — consider behavioural tests
- Update the assumption map as experiments run
