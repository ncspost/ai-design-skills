---
name: audit-accessibility-qa
description: Audit the implemented UI for accessibility compliance, testing keyboard navigation, screen reader output, colour contrast, and WCAG conformance. Use when verifying accessibility of the built product.
allowed-tools: Read, Grep, Glob, mcp__Figma__get_design_context, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_code_connect_map
argument-hint: [component path or URL to audit for accessibility]
---

# Audit Accessibility (QA)

Test the implemented UI for accessibility compliance, going beyond design review to verify the actual code and rendered output.

## Process

1. **Identify scope** — Determine what to audit from `$ARGUMENTS`
2. **Code review** — Check HTML semantics, ARIA attributes, and component code
3. **Keyboard audit** — Test every interaction with keyboard only
4. **Screen reader audit** — Verify announcements and reading order
5. **Visual audit** — Check contrast, sizing, and motion
6. **Document findings** — Create a structured accessibility report

## Audit Categories

### Semantic HTML
- [ ] Correct heading hierarchy (no skipped levels)
- [ ] Landmark regions (main, nav, aside, footer)
- [ ] Lists use `<ul>/<ol>/<li>` not styled divs
- [ ] Tables have proper `<thead>`, `<th>`, and scope attributes
- [ ] Forms have `<label>` elements associated with inputs
- [ ] Buttons use `<button>`, links use `<a>` with href

### ARIA
- [ ] ARIA roles are correct and necessary (don't add ARIA to semantic elements)
- [ ] `aria-label` or `aria-labelledby` on interactive elements without visible text
- [ ] `aria-expanded`, `aria-selected`, `aria-checked` for stateful controls
- [ ] `aria-live` regions for dynamic content updates
- [ ] `aria-describedby` for supplementary help text
- [ ] No redundant ARIA (e.g., `role="button"` on `<button>`)

### Keyboard Navigation
- [ ] All interactive elements are reachable via Tab
- [ ] Tab order follows visual/logical order
- [ ] Focus is visible on every interactive element
- [ ] Escape closes modals/dropdowns and returns focus
- [ ] Arrow keys work in menus, tabs, and lists
- [ ] Enter/Space activate buttons and links

### Colour & Contrast
- [ ] Text meets 4.5:1 contrast (AA) or 7:1 (AAA)
- [ ] UI components meet 3:1 contrast
- [ ] Focus indicators meet 3:1 contrast
- [ ] Information not conveyed by colour alone

### Screen Reader
- [ ] Page has a descriptive `<title>`
- [ ] Images have meaningful alt text (or `alt=""` for decorative)
- [ ] Dynamic updates are announced (toast notifications, inline errors)
- [ ] Reading order matches visual order

## Output Format

```markdown
# Accessibility Audit: [Feature]

## Summary
- **Issues found**: [Count]
- **Critical (A)**: [Count] | **Serious (AA)**: [Count] | **Minor (AAA)**: [Count]
- **WCAG conformance**: [A / AA / AAA / Non-conformant]

## Issues
| # | Category | Issue | WCAG | Severity | Element | Fix |
|---|----------|-------|------|----------|---------|-----|
| 1 | [Category] | [Issue] | [Criterion] | [A/AA/AAA] | [Selector/path] | [How to fix] |

## Keyboard Navigation Map
| Action | Keys | Works? | Notes |
|--------|------|--------|-------|
| [Action] | [Key combo] | [Yes/No] | [Issues] |

## Screen Reader Output
| Context | Expected Announcement | Actual Announcement | Pass? |
|---------|---------------------|--------------------| ------|
| [Context] | [Expected] | [Actual] | [Yes/No] |

## Passed Checks
- [What's already accessible]

## Fix Priority
1. [Critical fix - blocks users]
2. [Serious fix - degrades experience]
```

## Rules

- Test with actual assistive technology behaviour, not just code inspection
- WCAG A issues are blockers — these must be fixed before release
- Every interactive element must be keyboard accessible — no exceptions
- ARIA is a last resort — use semantic HTML first
- Check that focus management works after dynamic content changes (modals, toasts, inline edits)
- Verify that `prefers-reduced-motion` is respected
- Include the specific HTML selector or component path for each issue so developers can locate it
