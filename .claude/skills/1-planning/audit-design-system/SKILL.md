---
name: audit-design-system
description: Audit the existing design system to identify available components, patterns, and gaps relevant to a planned feature. Use when starting design work to understand what can be reused versus what needs to be created.
allowed-tools: Read, Grep, Glob, mcp__Figma__get_metadata, mcp__Figma__get_design_context, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_metadata, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_design_context
argument-hint: [feature area or component type needed]
---

# Audit Design System

Inventory existing design system components and identify gaps for a planned feature.

## Process

1. **Define needs** — Based on `$ARGUMENTS`, list the UI patterns the feature will require
2. **Inventory existing components** — Search Storybook and Figma for relevant components
3. **Assess coverage** — Map needed patterns to available components
4. **Identify gaps** — Flag patterns that don't exist or need modification
5. **Recommend approach** — Reuse, extend, or create for each need

## Assessment Categories

For each needed UI pattern, classify as:
- **Reuse** — Existing component works as-is
- **Extend** — Existing component needs a new variant or prop
- **Compose** — Can be built from existing primitives
- **Create** — Needs a new component from scratch

## Output Format

```markdown
# Design System Audit: [Feature]

## Components Needed
| Pattern | Existing Component | Status | Action |
|---------|-------------------|--------|--------|
| [Pattern] | [Component name or "None"] | Reuse/Extend/Compose/Create | [Details] |

## Available & Reusable
- [Component]: [How it maps to the need]

## Gaps to Fill
- [Missing pattern]: [Why it's needed, suggested approach]

## Token Coverage
- Colours: [Covered/Gaps]
- Typography: [Covered/Gaps]
- Spacing: [Covered/Gaps]

## Recommendations
1. [Prioritized action item]
```

## Rules

- Always check both Figma and Storybook — they may be out of sync
- Note version mismatches between design and code components
- Flag any component that exists in design but not in code (or vice versa)
- Recommend composition over creation when possible
- Include token/variable coverage, not just component coverage
