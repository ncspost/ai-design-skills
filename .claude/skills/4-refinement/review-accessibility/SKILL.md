---
name: review-accessibility
description: Review a design for accessibility compliance, checking colour contrast, touch targets, screen reader compatibility, and WCAG guidelines. Use when preparing designs for refinement or handoff.
allowed-tools: mcp__Figma__get_design_context, mcp__Figma__get_variable_defs, mcp__Figma__get_screenshot, mcp__Figma__get_metadata
argument-hint: [Figma URL or design to review for accessibility]
---

# Review Accessibility

Evaluate a design against accessibility standards to ensure the experience is inclusive.

## Process

1. **Load the design** — Get the design from `$ARGUMENTS` using Figma tools
2. **Extract variables** — Use `get_variable_defs` to review colour tokens and spacing
3. **Run checks** — Evaluate against each category below
4. **Document issues** — Log findings with severity and fix suggestions
5. **Verify fixes** — Re-check after changes are made

## Accessibility Checklist

### Colour & Contrast
- [ ] Text meets WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text)
- [ ] UI components meet 3:1 contrast against backgrounds
- [ ] Information is not conveyed by colour alone (use icons, patterns, or labels too)
- [ ] Links are distinguishable from surrounding text without relying on colour

### Typography
- [ ] Base font size is at least 16px
- [ ] Line height is at least 1.5x font size for body text
- [ ] Text can be resized up to 200% without loss of content
- [ ] No text is embedded in images

### Interactive Elements
- [ ] Touch targets are at least 44x44px (mobile) or 24x24px (desktop)
- [ ] Clickable areas have adequate spacing between them
- [ ] Focus states are visible and distinct
- [ ] Tab order follows a logical reading sequence

### Structure & Semantics
- [ ] Heading hierarchy is logical (H1 → H2 → H3, no skipping)
- [ ] Form fields have visible labels (not just placeholders)
- [ ] Required fields are clearly indicated
- [ ] Error messages are associated with their fields

### Motion & Interaction
- [ ] Animations can be disabled (respect prefers-reduced-motion)
- [ ] No content flashes more than 3 times per second
- [ ] Time-limited interactions have extensions or alternatives
- [ ] Drag-and-drop has keyboard alternatives

## Output Format

```markdown
# Accessibility Review: [Feature]

## Summary
- **Issues found**: [Count]
- **Critical**: [Count] | **Major**: [Count] | **Minor**: [Count]
- **WCAG level targeted**: AA / AAA

## Issues
| # | Category | Issue | WCAG Criterion | Severity | Fix |
|---|----------|-------|---------------|----------|-----|
| 1 | [Category] | [Specific issue] | [e.g., 1.4.3] | [Critical/Major/Minor] | [How to fix] |

## Colour Contrast Results
| Element | Foreground | Background | Ratio | Pass/Fail | Needed |
|---------|-----------|-----------|-------|-----------|--------|
| [Element] | [Hex] | [Hex] | [X:1] | [Pass/Fail] | [4.5:1 or 3:1] |

## Passed Checks
- [What's already accessible]

## Recommendations
1. [Priority fix]
```

## Rules

- WCAG AA is the minimum standard — flag anything below it
- Check both light and dark modes if applicable
- Don't assume screen reader behaviour — check semantic structure
- Consider keyboard-only navigation through every flow
- Accessibility is not optional — every issue needs a fix, not just documentation
- Test with realistic content, not short placeholder text
