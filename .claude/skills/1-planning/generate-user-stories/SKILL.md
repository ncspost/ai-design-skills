---
name: generate-user-stories
description: Generate well-structured user stories from feature requirements and create them as Linear issues. Use when requirements need to be expressed as user stories for the team to work from.
allowed-tools: Read, Grep, Glob, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_issue
argument-hint: [feature name or requirements document]
---

# Generate User Stories

Transform feature requirements into clear, actionable user stories in Linear.

## Process

1. **Review requirements** — Read the decomposed requirements from `$ARGUMENTS`
2. **Identify personas** — Determine which user types are involved
3. **Write stories** — One story per distinct user need, following the standard format
4. **Add acceptance criteria** — Define "done" for each story
5. **Create in Linear** — Post each story as an issue with full description

## Story Format

```
As a [specific user type],
I want to [concrete action],
so that [measurable outcome].
```

## Acceptance Criteria Format

```
Given [precondition],
When [action],
Then [expected result].
```

## Quality Checklist

Each story must be:
- **Independent** — Can be designed and built without other stories
- **Negotiable** — Describes the need, not the solution
- **Valuable** — Delivers clear user value
- **Estimable** — Small enough to reason about effort
- **Small** — Completable within one design cycle
- **Testable** — Has clear pass/fail acceptance criteria

## Output

For each story, create a Linear issue with:
- Title: Short, action-oriented summary
- Description: Full user story with acceptance criteria
- Labels: Relevant design phase labels

## Rules

- Write from the user's perspective, never the system's
- Avoid technical implementation language in the story itself
- Include 2-5 acceptance criteria per story
- If a story has more than 5 acceptance criteria, split it
- Group related stories and note dependencies between them
