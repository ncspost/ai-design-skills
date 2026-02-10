---
name: audit-current-ux
description: Audit the current UX state of a product area by analyzing existing Figma designs and identifying usability issues, inconsistencies, and improvement opportunities. Use when you need to understand the baseline experience before redesigning.
allowed-tools: Read, Grep, Glob, mcp__Figma__get_design_context, mcp__Figma__get_metadata, mcp__Figma__get_screenshot
argument-hint: [Figma URL or product area to audit]
---

# Audit Current UX State

Evaluate the existing user experience to establish a baseline and identify improvement opportunities.

## Process

1. **Identify the scope** — Determine the product area or flow from `$ARGUMENTS`
2. **Map the current flow** — Document each step users take today
3. **Evaluate each step** — Apply heuristic analysis
4. **Identify issues** — Categorize by severity and type
5. **Document findings** — Create a structured audit report

## Heuristic Checklist

For each screen/step, evaluate:
- **Visibility of system status** — Does the user know what's happening?
- **Match with mental models** — Does it work how users expect?
- **User control** — Can users undo, go back, escape?
- **Consistency** — Does it match the rest of the product?
- **Error prevention** — Does the design prevent mistakes?
- **Recognition over recall** — Are options visible, not hidden?
- **Flexibility** — Does it serve both novice and expert users?
- **Aesthetic minimalism** — Is there unnecessary visual noise?
- **Error recovery** — Can users fix mistakes easily?
- **Help** — Is guidance available when needed?

## Issue Severity

- **Critical** — Prevents task completion
- **Major** — Causes significant confusion or frustration
- **Minor** — Noticeable but doesn't block the user
- **Enhancement** — Opportunity to improve a working experience

## Output Format

```markdown
# UX Audit: [Product Area]

## Flow Map
[Step-by-step flow with screen references]

## Issues Found
| # | Screen | Issue | Heuristic | Severity | Recommendation |
|---|--------|-------|-----------|----------|----------------|
| 1 | [Screen] | [Issue] | [Which heuristic] | [Severity] | [Fix suggestion] |

## Strengths (Preserve These)
- [What's working well]

## Top Recommendations
1. [Highest-impact improvement]
2. [Next priority]

## Baseline Metrics
- Steps to complete task: [Count]
- Decision points: [Count]
- Potential error states: [Count]
```

## Rules

- Audit the experience, not the visual design (that comes later)
- Note what works well, not just problems
- Base severity on user impact, not personal preference
- Take screenshots of every key state for reference
- Compare against both heuristics and the product's own patterns
