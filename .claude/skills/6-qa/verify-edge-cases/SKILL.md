---
name: verify-edge-cases
description: Verify that all identified edge cases from the design phase are properly handled in the implementation, testing boundary conditions and unusual states. Use during QA to ensure edge case coverage.
allowed-tools: Read, Grep, Glob, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__list_issues, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__get_issue, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_code_connect_map
argument-hint: [feature name or Linear issue with edge case documentation]
---

# Verify Edge Cases

Systematically verify that every edge case identified during design is handled correctly in the implementation.

## Process

1. **Gather edge cases** — Retrieve the edge case list from `$ARGUMENTS` or related Linear issues
2. **Map to code** — For each edge case, identify the relevant code path
3. **Verify handling** — Check that the code handles each case as designed
4. **Test boundaries** — Push values to their limits
5. **Document results** — Report which edge cases pass and which fail

## Verification Categories

### Data Boundaries
- [ ] Empty state renders correctly (0 items)
- [ ] Single item state works (1 item)
- [ ] Maximum items handled (pagination, truncation, performance)
- [ ] Very long text truncates/wraps as designed
- [ ] Special characters display correctly (emoji, unicode, HTML entities)
- [ ] Null/undefined values don't crash the UI

### User States
- [ ] New user (no data, no preferences) sees appropriate onboarding
- [ ] Returning user sees their data preserved
- [ ] Logged-out user sees correct restricted state
- [ ] User with no permissions sees read-only state
- [ ] User mid-action who loses session sees error recovery

### Timing & Concurrency
- [ ] Double-click prevention works on submit buttons
- [ ] Rapid navigation doesn't break state
- [ ] Stale data is detected and refreshed
- [ ] Long-running operations show progress
- [ ] Timeout scenarios display appropriate messaging

### Network Conditions
- [ ] Slow connection shows loading states
- [ ] Failed requests show error messages with retry option
- [ ] Partial data loading degrades gracefully
- [ ] Offline state is communicated clearly

### Input Validation
- [ ] Required field validation fires at correct timing
- [ ] Min/max constraints are enforced
- [ ] Invalid input shows clear error messages
- [ ] Copy-paste input is validated
- [ ] Form can be submitted with keyboard (Enter key)

## Output Format

```markdown
# Edge Case Verification: [Feature]

## Summary
- **Total edge cases**: [Count]
- **Passed**: [Count] | **Failed**: [Count] | **Not Testable**: [Count]

## Results
| # | Edge Case | Expected Behaviour | Actual Behaviour | Status | Notes |
|---|----------|-------------------|-----------------|--------|-------|
| 1 | [Case] | [What should happen] | [What actually happens] | [Pass/Fail] | [Details] |

## Failed Cases
### [Edge Case Name]
- **Expected**: [Designed behaviour]
- **Actual**: [What happens instead]
- **Severity**: [Critical/Major/Minor]
- **Code location**: [File and line]
- **Suggested fix**: [How to resolve]

## Not Testable
- [Case]: [Why it can't be tested and what alternative verification is needed]

## Coverage Gap
- [Edge cases that were never identified in design but found during QA]
```

## Rules

- Every edge case from the design phase must be verified — don't skip "unlikely" cases
- Test with actual boundary values, not just "some big number"
- Failed edge cases should include the specific code location for quick developer fixes
- Note new edge cases discovered during testing that weren't in the original list
- Separate functional failures (crashes, wrong data) from visual failures (layout breaks)
- Include the steps to reproduce for every failed case
- Mark cases as "not testable" only if there's genuinely no way to simulate the condition
