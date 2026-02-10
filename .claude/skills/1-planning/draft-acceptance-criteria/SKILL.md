---
name: draft-acceptance-criteria
description: Draft detailed acceptance criteria for design tasks and attach them to existing Linear issues. Use when design issues need clear definitions of done before work begins.
allowed-tools: Read, Grep, Glob, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_issue, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__update_issue
argument-hint: [Linear issue ID or feature description]
---

# Draft Acceptance Criteria

Write precise, testable acceptance criteria for design work.

## Process

1. **Read the issue** — Fetch the Linear issue or feature description from `$ARGUMENTS`
2. **Identify all scenarios** — Happy path, error states, edge cases, empty states
3. **Write criteria** — One criterion per distinct behaviour using Given/When/Then
4. **Categorize** — Group by functional, visual, accessibility, and responsive
5. **Update the issue** — Attach criteria to the Linear issue

## Acceptance Criteria Categories

### Functional
- Core user interactions work as specified
- Error handling and validation behaviour
- Data loading and empty states

### Visual
- Matches design specs (spacing, typography, colour)
- Animations and transitions behave correctly
- Dark mode / theme support if applicable

### Accessibility
- Keyboard navigation works for all interactions
- Screen reader announces state changes
- Colour contrast meets WCAG AA (4.5:1 text, 3:1 UI)
- Focus management is logical and visible

### Responsive
- Layout adapts correctly at defined breakpoints
- Touch targets are minimum 44x44px on mobile
- No horizontal scroll on any supported viewport

## Output Format

```markdown
## Acceptance Criteria

### Functional
- [ ] Given [context], when [action], then [result]

### Visual
- [ ] Given [context], when [action], then [result]

### Accessibility
- [ ] Given [context], when [action], then [result]

### Responsive
- [ ] Given [context], when [action], then [result]
```

## Rules

- Every criterion must be independently verifiable
- Use specific values, not vague terms ("the button turns blue #2563EB", not "the button changes colour")
- Include both positive and negative test cases
- Limit to 15-20 criteria per issue — split the issue if more are needed
