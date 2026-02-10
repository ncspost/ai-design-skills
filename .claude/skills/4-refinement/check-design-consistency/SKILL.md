---
name: check-design-consistency
description: Check a design for consistency against the design system and established product patterns, flagging deviations in spacing, colour, typography, and component usage. Use before handoff to catch inconsistencies.
allowed-tools: mcp__Figma__get_variable_defs, mcp__Figma__get_design_context, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_code_connect_map, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_design_context
argument-hint: [Figma URL to check for consistency]
---

# Check Design Consistency

Audit a design for consistency with the design system and product-wide patterns.

## Process

1. **Load the design** — Get the design from `$ARGUMENTS` using Figma tools
2. **Extract tokens** — Use `get_variable_defs` to get the design system tokens
3. **Check Code Connect** — Use `get_code_connect_map` to verify component mappings
4. **Run consistency checks** — Evaluate against each dimension below
5. **Document deviations** — Log every inconsistency with severity and recommendation

## Consistency Dimensions

### Spacing
- Consistent use of spacing scale (4px, 8px, 12px, 16px, 24px, 32px, etc.)
- Same padding within similar components
- Consistent gaps between elements of the same type
- Margins follow established page layout patterns

### Typography
- Only design system type styles used (no custom font sizes or weights)
- Heading hierarchy is consistent across pages
- Line heights match the type scale
- Truncation and wrapping behaviour is consistent

### Colour
- Only design system colour tokens used (no hex overrides)
- Semantic colour usage is correct (error = red, success = green, etc.)
- Hover/active states use consistent colour transformations
- Dark mode tokens are properly applied (if applicable)

### Components
- Standard components are used instead of detached or custom versions
- Component variants are used correctly (not overridden with hacks)
- Consistent component sizing across similar contexts
- Icons from the same icon set with consistent sizing

### Interaction Patterns
- Similar actions use the same interaction pattern across the product
- Modal vs. inline editing is consistent for similar operations
- Confirmation patterns are consistent (dialog vs. undo vs. inline)
- Navigation patterns match the rest of the product

## Output Format

```markdown
# Consistency Check: [Feature]

## Summary
- **Deviations found**: [Count]
- **Critical**: [Count] | **Minor**: [Count] | **Intentional**: [Count]

## Deviations
| # | Category | Element | Expected | Actual | Severity | Fix |
|---|----------|---------|----------|--------|----------|-----|
| 1 | Spacing | [Element] | [Token/value] | [What's used] | [Critical/Minor] | [How to fix] |

## Token Coverage
| Token Type | Used | From System | Custom | Coverage |
|-----------|------|------------|--------|----------|
| Colours | [X] | [Y] | [Z] | [%] |
| Typography | [X] | [Y] | [Z] | [%] |
| Spacing | [X] | [Y] | [Z] | [%] |

## Intentional Deviations
- [Deviation]: [Justification for why this is intentional]

## Recommendations
1. [Highest priority consistency fix]
```

## Rules

- Not every deviation is a bug — some may be intentional. Ask before "fixing" them.
- Check against the design system tokens, not just visual similarity
- Consistency across the feature is important, but consistency with the rest of the product is more important
- Prioritise consistency fixes that affect the most screens or components
- Include Code Connect references so developers can verify component usage
- Flag components that have been detached from the design system
