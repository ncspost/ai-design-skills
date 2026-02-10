---
name: identify-edge-cases
description: Systematically identify edge cases, error states, and boundary conditions for a design, ensuring every scenario is accounted for. Use when a design direction has been chosen and needs to be stress-tested before handoff.
allowed-tools: mcp__Figma__get_design_context, mcp__Figma__get_screenshot, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_comment, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__get_issue
argument-hint: [Figma URL or feature description to analyze]
---

# Identify Edge Cases & States

Stress-test a design by systematically surfacing every edge case, error state, and boundary condition.

## Process

1. **Review the design** — Load the design from `$ARGUMENTS` and take screenshots
2. **Map all states** — Identify every possible state for each component and screen
3. **Apply edge case categories** — Walk through each category below
4. **Assess impact** — Rate how likely each edge case is and how severe the impact
5. **Document** — Log edge cases as comments on the relevant Linear issue

## Edge Case Categories

### Data Extremes
- **Empty** — No data, first-time user, nothing to show
- **Minimal** — Only 1 item, shortest possible text
- **Maximal** — 1000+ items, very long text, many selections
- **Special characters** — Emoji, RTL text, HTML entities, unicode

### User States
- **New user** — No history, no preferences set
- **Power user** — Custom settings, many items, complex setup
- **Returning user** — Stale data, changed context since last visit
- **Multi-device** — Started on mobile, continuing on desktop

### Network & System
- **Slow connection** — What shows during loading?
- **Offline** — What happens with no connection?
- **Error** — API failure, timeout, permission denied
- **Partial failure** — Some data loads, some doesn't

### Permissions & Access
- **No permission** — User can see but not interact
- **Expired session** — Mid-action logout
- **Shared view** — Different users see different things

### Timing
- **Concurrent edits** — Two users editing simultaneously
- **Stale data** — Data changed since page loaded
- **Rate limiting** — User clicks too fast, submits too many

## Output Format

```markdown
# Edge Cases: [Feature]

## States Inventory
| Screen/Component | States Identified | Currently Designed? |
|-----------------|-------------------|-------------------|
| [Component] | [List of states] | [Yes/Partial/No] |

## Edge Cases Found
| # | Category | Scenario | Likelihood | Severity | Current Handling | Recommendation |
|---|----------|----------|-----------|----------|-----------------|----------------|
| 1 | [Category] | [Specific scenario] | [H/M/L] | [H/M/L] | [Designed/Missing] | [How to handle] |

## Missing Designs Needed
1. [State that needs a design] — [Why it matters]

## Priority Actions
1. [Most critical edge case to address]
```

## Rules

- Every interactive element has at least 4 states: default, hover, active, disabled
- Every data-dependent view needs: loading, empty, error, and populated states
- Think about what happens before, during, and after every action
- Consider what happens when users do things in an unexpected order
- Don't just list edge cases — propose how each should be handled
- Focus on likely AND severe cases first; rare AND minor cases last
