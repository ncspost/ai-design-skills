---
name: compare-design-fidelity
description: Compare the implemented UI against the original Figma design, identifying pixel-level differences in layout, spacing, colour, and typography. Use when verifying that the build matches the approved design.
allowed-tools: mcp__Figma__get_screenshot, mcp__Figma__get_design_context, mcp__Figma__get_metadata, Read, Grep, Glob
argument-hint: [Figma URL of the approved design and URL or path of the implementation]
---

# Compare Design Fidelity

Verify that the implemented UI matches the approved design by identifying visual discrepancies.

## Process

1. **Capture the design** — Take screenshots of the Figma design from `$ARGUMENTS`
2. **Capture the implementation** — Screenshot or review the built UI
3. **Compare systematically** — Check each dimension below
4. **Document discrepancies** — Log every deviation with severity
5. **Categorise** — Separate intentional adaptations from bugs

## Comparison Dimensions

### Layout & Structure
- Element positioning matches design
- Grid/flex alignment is correct
- Content hierarchy is preserved
- Responsive breakpoints match design specs

### Spacing
- Padding within components
- Margins between elements
- Gap spacing in lists/grids
- Overall page margins

### Typography
- Font family, size, weight, line height
- Text colour and opacity
- Truncation and wrapping behaviour
- Text alignment

### Colour & Visual
- Background colours match tokens
- Border colours and widths
- Shadow values
- Icon sizes and colours
- Image aspect ratios and cropping

### Interactive States
- Hover states match design
- Focus states are visible and correct
- Active/pressed states
- Disabled states

## Output Format

```markdown
# Fidelity Check: [Feature]

## Summary
- **Discrepancies found**: [Count]
- **Critical**: [Count] | **Minor**: [Count] | **Intentional**: [Count]
- **Overall fidelity**: [High/Medium/Low]

## Discrepancies
| # | Element | Category | Design | Implementation | Severity | Screenshot |
|---|---------|----------|--------|---------------|----------|-----------|
| 1 | [Element] | [Spacing/Color/Type/Layout] | [Expected] | [Actual] | [Critical/Minor] | [Reference] |

## Intentional Deviations
- [Deviation]: [Reason it was changed from design]

## Passed Checks
- [Dimensions that match perfectly]

## Fix Priority
1. [Most impactful fix]
2. [Next priority]
```

## Rules

- Compare against the latest approved design, not earlier iterations
- Use exact values (px, hex codes) not approximations
- A 1-2px difference in spacing is minor; a missing state is critical
- Some deviations may be intentional (responsive adaptations, dynamic content) — verify before logging as bugs
- Check at multiple viewport widths if responsive designs were specified
- Include both the design screenshot and implementation screenshot for each discrepancy
- Focus on user-visible differences, not implementation details
