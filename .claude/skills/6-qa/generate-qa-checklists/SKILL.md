---
name: generate-qa-checklists
description: Generate comprehensive QA checklists for a feature covering functional, visual, accessibility, and cross-browser testing. Use when preparing for a QA pass before release.
allowed-tools: mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__list_issues, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_comment, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__get_issue
argument-hint: [feature name or Linear issue to generate QA checklist for]
---

# Generate QA Checklists

Create thorough QA checklists that ensure nothing is missed during testing.

## Process

1. **Gather context** — From `$ARGUMENTS`, understand the feature scope and acceptance criteria
2. **Review tickets** — Check Linear issues for requirements and edge cases
3. **Generate checklist** — Cover every test category below
4. **Attach to issue** — Post the checklist as a comment on the relevant Linear issue
5. **Track completion** — Each item should be checkable as pass/fail

## Checklist Categories

### Functional Testing
- Happy path works end-to-end
- All form validations trigger correctly
- Error handling works as specified
- Data persists after refresh
- Undo/redo works where applicable
- Loading states appear during async operations

### Visual Testing
- Matches approved Figma design
- Consistent with rest of application
- No visual glitches or layout shifts
- Images and icons render correctly
- Animations are smooth (no jank)

### Cross-Browser
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Responsive
- Desktop (1440px, 1280px)
- Tablet (768px)
- Mobile (375px)
- No horizontal scroll at any breakpoint
- Touch targets are adequate on mobile

### Accessibility
- Keyboard navigation works
- Screen reader announces correctly
- Colour contrast passes
- Focus states are visible
- No accessibility regressions

### Edge Cases
- Empty states display correctly
- Maximum data volume handles gracefully
- Special characters in text inputs
- Rapid repeated actions (double-click, spam submit)
- Browser back/forward navigation

### Performance
- Page loads within acceptable time
- No memory leaks on repeated navigation
- Images are optimised
- No unnecessary network requests

## Output Format

```markdown
# QA Checklist: [Feature]

## Pre-Testing Setup
- [ ] Test data is prepared
- [ ] Test accounts are available
- [ ] Feature flag is enabled (if applicable)

## Functional
- [ ] [Test case 1 — specific, testable action]
- [ ] [Test case 2]

## Visual
- [ ] [Visual check 1]

## Cross-Browser
- [ ] Chrome: [Specific checks]
- [ ] Safari: [Specific checks]
- [ ] Firefox: [Specific checks]

## Responsive
- [ ] Mobile (375px): [Specific checks]
- [ ] Tablet (768px): [Specific checks]

## Accessibility
- [ ] [A11y check 1]

## Edge Cases
- [ ] [Edge case 1]

## Performance
- [ ] [Performance check 1]

## Sign-off
- [ ] Design review passed
- [ ] Accessibility review passed
- [ ] Product review passed
```

## Rules

- Every checklist item must be specific and testable — "works correctly" is too vague
- Include both what to test AND expected result: "Clicking Save → shows success toast"
- Tailor the checklist to the feature — don't use a generic template unchanged
- Include setup steps (test data, accounts, feature flags)
- Cross-browser testing should focus on known problem areas, not test everything everywhere
- Edge cases from the design phase should all appear here
- Attach the checklist to the Linear issue so progress is tracked alongside the ticket
