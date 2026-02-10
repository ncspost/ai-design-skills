---
name: decompose-requirements
description: Break down a feature request or product brief into structured, actionable design requirements with clear scope. Use when a feature brief needs to be turned into specific design tasks and Linear issues.
allowed-tools: Read, Grep, Glob, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_issue, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_document, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-search, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-fetch
argument-hint: [feature brief or Notion page URL]
---

# Decompose Requirements

Break a high-level feature request into scoped, actionable design requirements.

## Process

1. **Read the brief** — Fetch and analyze the feature request from `$ARGUMENTS`
2. **Identify user goals** — What is the user trying to accomplish?
3. **Extract functional requirements** — What must the design enable?
4. **Extract non-functional requirements** — Performance, accessibility, responsive needs
5. **Define scope boundaries** — What is explicitly in/out of scope
6. **Create Linear issues** — One issue per distinct design task

## Decomposition Framework

For each requirement, capture:
- **What**: The specific capability or behaviour
- **Who**: Which user type or persona
- **Why**: The underlying need or job-to-be-done
- **Constraints**: Technical, business, or design system limitations
- **Dependencies**: What must exist or be decided first

## Output Format

```markdown
# Requirements: [Feature Name]

## User Goals
1. [Goal with rationale]

## Functional Requirements
| ID | Requirement | Priority | Dependencies |
|----|-------------|----------|--------------|
| FR-1 | [Description] | Must/Should/Could | [Deps] |

## Non-Functional Requirements
- Accessibility: [Specific needs]
- Responsive: [Breakpoint considerations]
- Performance: [Load/interaction targets]

## Scope
- **In scope**: [List]
- **Out of scope**: [List]
- **Deferred**: [List with rationale]
```

## Rules

- Every requirement must be testable — if you can't verify it, refine it
- Flag ambiguous language ("fast", "intuitive", "modern") and propose concrete criteria
- Group requirements by user flow, not by technical component
- Limit to 8-12 requirements per feature to keep scope manageable
