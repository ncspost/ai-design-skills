---
name: generate-automated-fixes
description: Generate code fixes for QA issues found during design fidelity checks, accessibility audits, and edge case verification. Use when QA findings need quick resolution without a full development cycle.
allowed-tools: Read, Grep, Glob, Edit, Write, mcp__Figma__get_design_context, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_code_connect_map
argument-hint: [QA report or list of issues to fix]
---

# Generate Automated Fixes

Quickly generate code fixes for QA issues, focusing on visual fidelity, accessibility, and edge case handling.

## Process

1. **Review QA findings** — Parse the issue list from `$ARGUMENTS`
2. **Prioritise fixes** — Critical and high-severity issues first
3. **Locate code** — Find the relevant components and files
4. **Generate fixes** — Write minimal, targeted code changes
5. **Verify** — Check that fixes don't introduce new issues
6. **Document changes** — Note what was changed and why

## Fix Categories

### Visual Fidelity Fixes
- Spacing adjustments (padding, margin, gap corrections)
- Colour token updates (replace hardcoded with tokens, fix wrong tokens)
- Typography corrections (font size, weight, line height)
- Layout fixes (alignment, wrapping, overflow)

### Accessibility Fixes
- Add missing ARIA attributes
- Fix heading hierarchy
- Add visible focus states
- Associate labels with form inputs
- Add alt text to images
- Fix colour contrast issues

### Edge Case Fixes
- Add empty state handling
- Add loading state components
- Add error boundary and fallback UI
- Fix truncation/overflow for long content
- Add null/undefined guards

### State Handling Fixes
- Add missing hover/focus/active states
- Fix disabled state appearance
- Add loading spinner during async operations
- Handle error state display

## Output Format

```markdown
# QA Fixes: [Feature]

## Fixes Applied
| # | Issue | File | Change | Lines |
|---|-------|------|--------|-------|
| 1 | [QA issue description] | [file path] | [What was changed] | [Line numbers] |

## Fix Details

### Fix 1: [Issue Title]
- **QA Finding**: [Original issue]
- **Root Cause**: [Why it was wrong]
- **Change**: [What was modified]
- **Risk**: [Low/Medium — chance of side effects]

## Remaining Issues
- [Issues that need manual intervention or product decisions]

## Regression Check
- [ ] Existing tests still pass
- [ ] No visual regressions introduced
- [ ] Fix doesn't affect other components
```

The primary output is the code changes themselves, applied to the relevant files.

## Rules

- Make minimal changes — fix the issue without refactoring surrounding code
- One fix per issue — don't bundle unrelated changes
- Use design tokens, not hardcoded values, even in quick fixes
- Check that fixes don't break other variants of the same component
- If a fix requires a product decision (e.g., how to handle an edge case), flag it instead of guessing
- Test the fix at all breakpoints if it involves layout or spacing
- Accessibility fixes are never "nice to have" — treat them as required
- Include a brief comment in the code if the fix addresses a non-obvious edge case
