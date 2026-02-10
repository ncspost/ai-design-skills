---
name: identify-design-debt
description: Identify and catalogue design debt across the product — inconsistencies, outdated patterns, accessibility gaps, and technical shortcuts that degrade the user experience over time. Use during periodic product health reviews.
allowed-tools: Read, Grep, Glob, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_issue, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__list_issues, mcp__07bc7ee9-cc70-4371-92d2-9b3338dcd3e0__slack_search_public
argument-hint: [product area or component library to audit for design debt]
---

# Identify Design Debt

Surface and catalogue design debt that has accumulated across the product.

## Process

1. **Define scope** — From `$ARGUMENTS`, determine the product area to audit
2. **Audit patterns** — Search for inconsistencies across the codebase and design files
3. **Check complaints** — Search Slack and Linear for user/team complaints about UI issues
4. **Categorise debt** — Group by type and severity
5. **Estimate impact** — Assess user impact and cost to fix
6. **Log in Linear** — Create issues for the highest-priority debt items

## Design Debt Categories

### Pattern Inconsistencies
- Same action handled differently across the product
- Multiple components doing the same job
- Inconsistent spacing, colour, or typography usage
- Navigation patterns that vary between sections

### Outdated Patterns
- Components using old design system versions
- Patterns that no longer match brand guidelines
- Interactions that don't meet current accessibility standards
- Layouts that don't work on modern screen sizes

### Accessibility Gaps
- Components that were never audited for accessibility
- Missing keyboard navigation
- Insufficient colour contrast
- Missing ARIA attributes or screen reader support

### Technical Shortcuts
- Hardcoded values instead of design tokens
- Detached or overridden design system components
- Inline styles instead of shared styles
- Components that bypass the design system entirely

### Content Debt
- Inconsistent terminology across features
- Outdated help text or documentation
- Missing empty states, error messages, or loading states
- Placeholder text that was never replaced

## Output Format

```markdown
# Design Debt Audit: [Product Area]

## Summary
- **Total debt items**: [Count]
- **Critical**: [Count] | **Major**: [Count] | **Minor**: [Count]
- **Estimated effort to resolve**: [T-shirt sizes]

## Debt Inventory
| # | Item | Category | Severity | Scope | Effort | User Impact |
|---|------|----------|----------|-------|--------|------------|
| 1 | [Issue] | [Category] | [Crit/Maj/Min] | [How widespread] | [S/M/L] | [Description] |

## Top Priority Items
### 1. [Debt Item]
- **Problem**: [What's wrong]
- **Impact**: [How it affects users]
- **Fix approach**: [How to resolve]
- **Effort**: [Estimate]

## Quick Wins (Low Effort, High Impact)
1. [Item that can be fixed quickly]

## Recommendations
- [Strategic approach to paying down design debt]

## Linear Issues Created
- [Issue IDs for tracked debt items]
```

## Rules

- Design debt is not always bad — some shortcuts were reasonable trade-offs at the time
- Focus on debt that impacts users, not just aesthetic preferences
- Include the cost of NOT fixing each item (what gets worse over time)
- Quick wins should be tackled immediately; larger items should be scheduled
- Track design debt alongside technical debt — they often compound each other
- Don't just catalogue — create Linear issues so debt gets scheduled into sprints
- Revisit the debt inventory quarterly to update priorities
