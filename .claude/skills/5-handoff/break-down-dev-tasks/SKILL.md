---
name: break-down-dev-tasks
description: Break down a design into granular development tasks and create Linear tickets with clear acceptance criteria. Use when handing off an approved design to the engineering team.
allowed-tools: mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_issue, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_comment, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__get_issue, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__list_issues
argument-hint: [feature name and Figma URL for reference]
---

# Break Down Dev Tasks & Write Tickets

Decompose a design into well-scoped development tasks with clear acceptance criteria.

## Process

1. **Review the design** — Understand the full scope from `$ARGUMENTS`
2. **Identify work streams** — Group tasks by type (API, components, integration, polish)
3. **Define task boundaries** — Each task should be independently shippable
4. **Write tickets** — Create Linear issues with description, AC, and design references
5. **Set dependencies** — Link tasks that must happen in sequence
6. **Estimate complexity** — Add rough size indicators

## Task Breakdown Strategy

### Layer 1: Foundation
- Data model / API changes
- New design tokens or theme updates
- Shared utility functions

### Layer 2: Components
- New components (build from spec)
- Component modifications (add variants/props)
- Component composition (combining existing)

### Layer 3: Features
- Screen/page implementation
- Business logic and state management
- Data fetching and caching

### Layer 4: Polish
- Animations and transitions
- Loading states and skeletons
- Error handling and edge cases
- Responsive adaptations
- Accessibility testing

## Ticket Template

Each Linear issue should include:

```markdown
## Context
[Why this work is needed, link to design]

## Scope
[Specific deliverable for this ticket]

## Acceptance Criteria
- [ ] [Testable criterion 1]
- [ ] [Testable criterion 2]
- [ ] [Testable criterion 3]

## Design Reference
[Figma link to specific frame]

## Technical Notes
[Implementation hints, component to use, API endpoint]

## Out of Scope
[What this ticket does NOT cover]
```

## Output Format

```markdown
# Dev Breakdown: [Feature]

## Task Overview
| # | Task | Type | Dependencies | Estimate | Priority |
|---|------|------|-------------|----------|----------|
| 1 | [Task] | [Foundation/Component/Feature/Polish] | [None or task #] | [S/M/L] | [P0-P3] |

## Tickets Created
1. [Linear issue ID]: [Title]
2. [Linear issue ID]: [Title]

## Dependency Graph
[Task 1] → [Task 2] → [Task 4]
[Task 3] → [Task 4]

## Suggested Implementation Order
1. [Task] — [Why first]
2. [Task] — [Why next]
```

## Rules

- Each ticket should be completable in 1-3 days — if larger, break it down further
- Acceptance criteria must be testable, not subjective ("button is blue" not "button looks good")
- Include the Figma link to the specific frame, not just the file
- Note what's out of scope to prevent scope creep
- Foundation tasks come before feature tasks
- Always include accessibility and responsive as explicit tasks, not afterthoughts
- Link related tickets with blocking/blocked relationships in Linear
