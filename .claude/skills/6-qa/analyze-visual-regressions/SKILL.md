---
name: analyze-visual-regressions
description: Analyze visual regression test results, identifying meaningful changes from noise, and documenting which regressions need fixes vs. which are expected changes. Use when visual regression tests flag differences that need triage.
allowed-tools: mcp__Figma__get_screenshot, mcp__Figma__get_design_context, Read, Grep, Glob
argument-hint: [path to regression test results or component to analyze]
---

# Analyze Visual Regressions

Triage visual regression test results, separating meaningful regressions from expected changes and noise.

## Process

1. **Gather results** — Load regression test output from `$ARGUMENTS`
2. **Categorise each diff** — Classify as regression, expected change, or noise
3. **Assess severity** — Rate the user impact of each regression
4. **Trace cause** — Identify what likely caused each regression
5. **Document** — Create a structured triage report

## Diff Categories

### Regression (Fix Required)
- Unintended layout shifts
- Colour or typography changes not in any ticket
- Missing elements or broken states
- Alignment issues introduced by code changes

### Expected Change (Approve Baseline)
- Changes matching a design ticket that was just shipped
- Design system token updates applied globally
- Content changes (copy updates, new data)
- Intentional refactors

### Noise (Ignore)
- Sub-pixel rendering differences between environments
- Anti-aliasing variations
- Dynamic content (timestamps, avatars, random data)
- Animation frame timing differences

## Severity Assessment

- **Critical** — Visible to all users, significantly degrades the experience
- **Major** — Noticeable on common paths, looks broken
- **Minor** — Subtle difference, most users won't notice
- **Cosmetic** — Only visible in side-by-side comparison

## Output Format

```markdown
# Visual Regression Triage: [Component/Feature]

## Summary
- **Total diffs**: [Count]
- **Regressions**: [Count] | **Expected**: [Count] | **Noise**: [Count]

## Regressions (Fix Required)
| # | Component | Change | Severity | Likely Cause | Fix |
|---|----------|--------|----------|-------------|-----|
| 1 | [Component] | [What changed] | [Critical/Major/Minor] | [Probable cause] | [Suggested fix] |

## Expected Changes (Approve Baseline)
| # | Component | Change | Related Ticket |
|---|----------|--------|---------------|
| 1 | [Component] | [What changed] | [Ticket reference] |

## Noise (No Action)
- [Description of false positives and why they can be ignored]

## Recommendations
1. [Priority fix]
2. [Baseline updates to approve]
```

## Rules

- Triage every diff — don't skip any, even if they look minor
- Always trace regressions to a likely cause (recent PR, dependency update, token change)
- Expected changes need a ticket reference — if there's no ticket, it's a regression
- Update baselines promptly for expected changes to avoid noise accumulation
- Consider whether a regression affects multiple components (design token change) or just one
- Sub-pixel differences (1px off) are usually noise unless they cause visible layout shifts
