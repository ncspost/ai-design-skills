---
name: audit-components-detect-redundancy
description: Audit the design system component library for redundant, overlapping, or underused components, identifying consolidation opportunities. Use during periodic design system health checks.
allowed-tools: Read, Grep, Glob, mcp__Figma__get_design_context, mcp__Figma__get_metadata, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_code_connect_map, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_design_context
argument-hint: [component library path or Figma file to audit]
---

# Audit Components & Detect Redundancy

Identify redundant, overlapping, and underused components in the design system.

## Process

1. **Inventory components** — List all components from `$ARGUMENTS` using Figma and Code Connect tools
2. **Map overlap** — Find components that serve similar purposes
3. **Check usage** — Identify components that are rarely or never used
4. **Assess variants** — Find components with too many or too few variants
5. **Identify gaps** — Note common patterns built custom instead of using the system
6. **Recommend actions** — Suggest merges, deprecations, and additions

## Audit Dimensions

### Redundancy
- Components with overlapping functionality (e.g., Card and Panel doing the same thing)
- Multiple button styles that could be variants of one component
- Custom one-off components that duplicate system components
- Utility components with near-identical APIs

### Usage
- Components used in 0-1 places (candidates for deprecation)
- Components used everywhere but never via the design system (detached instances)
- Variants that are never used
- Components used incorrectly (wrong variant for the context)

### Completeness
- Common patterns built ad-hoc instead of using system components
- Missing variants for common use cases
- Components that don't cover all required states
- Gaps in the component hierarchy (primitives without compositions, or vice versa)

### Quality
- Components with inconsistent prop APIs
- Components missing accessibility features
- Components with outdated styling (not using current tokens)
- Components without documentation or Storybook stories

## Output Format

```markdown
# Component Audit: [Library]

## Summary
- **Total components**: [Count]
- **Redundant groups**: [Count]
- **Underused (< 3 instances)**: [Count]
- **Missing documentation**: [Count]

## Redundancy Groups
| Group | Components | Overlap | Recommendation |
|-------|-----------|---------|---------------|
| 1 | [Comp A, Comp B] | [What overlaps] | [Merge into X / Deprecate Y] |

## Underused Components
| Component | Usage Count | Last Used | Recommendation |
|----------|------------|-----------|---------------|
| [Comp] | [Count] | [Date] | [Deprecate / Promote / Keep] |

## Missing Components
| Pattern | Current Approach | Times Seen | Recommendation |
|---------|-----------------|-----------|---------------|
| [Pattern] | [How it's built today] | [Frequency] | [Create component / Compose from existing] |

## Quality Issues
| Component | Issue | Severity | Fix |
|----------|-------|----------|-----|
| [Comp] | [Issue] | [High/Med/Low] | [What to fix] |

## Recommendations
1. [Highest-impact consolidation]
2. [Most needed new component]
3. [Quality fixes to prioritise]
```

## Rules

- Every audit finding must include a specific recommendation (merge, deprecate, add, fix)
- Check both the design file components AND the code components — they may differ
- Usage data trumps opinions — a component you think is redundant might be heavily used
- Before recommending deprecation, check if a component serves a unique accessibility purpose
- Group related findings — "merge these 3 buttons into 1" is more useful than 3 separate findings
- Include the effort to execute each recommendation
