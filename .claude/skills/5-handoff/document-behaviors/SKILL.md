---
name: document-behaviors
description: Document interactive behaviours, state transitions, and business logic for a feature so developers understand the dynamic aspects that static designs don't capture. Use when designs involve complex interactions.
allowed-tools: Read, Grep, Glob, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__update_issue, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_document, mcp__07bc7ee9-cc70-4371-92d2-9b3338dcd3e0__slack_send_message, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-search
argument-hint: [feature name with complex interactions to document]
---

# Document Behaviours

Capture the dynamic aspects of a design — interactions, transitions, business rules, and state logic — that static mockups can't convey.

## Process

1. **Identify interactions** — From `$ARGUMENTS`, list every interactive behaviour in the feature
2. **Map state transitions** — Define what triggers each state change
3. **Document business rules** — Capture conditional logic and validation
4. **Specify edge cases** — What happens in unusual scenarios
5. **Create documentation** — Write a Linear document or update existing issues
6. **Share with team** — Send to relevant Slack channel if needed

## Behaviour Categories

### User Interactions
- Click/tap actions and their results
- Keyboard shortcuts and navigation
- Drag and drop behaviour
- Scroll interactions (infinite scroll, sticky headers, parallax)
- Form interactions (validation timing, auto-save, dirty state)

### State Transitions
- What triggers each state change
- What the transition looks like (instant, animated, loading)
- What happens if the transition fails
- How to return to the previous state

### Business Rules
- Validation rules (when and how fields are validated)
- Permission logic (who can see/do what)
- Conditional visibility (what shows/hides based on data)
- Calculation logic (derived values, totals, estimates)

### System Behaviours
- Auto-save frequency and conflict resolution
- Real-time updates (what refreshes and how often)
- Offline behaviour (what works, what doesn't)
- Notifications (what triggers them, where they appear)

## Output Format

```markdown
# Behaviour Documentation: [Feature]

## Interaction Map
| # | Trigger | Action | Result | Error Case |
|---|---------|--------|--------|-----------|
| 1 | [User action] | [System response] | [End state] | [What if it fails] |

## State Machine
```
[State A] --[trigger]--> [State B] --[trigger]--> [State C]
                                    --[error]---> [State A]
```

## Business Rules
| # | Rule | Condition | Behaviour | Priority |
|---|------|-----------|-----------|----------|
| 1 | [Rule name] | [When this is true] | [This happens] | [If rules conflict] |

## Validation Rules
| Field | Rule | Timing | Error Message |
|-------|------|--------|--------------|
| [Field] | [Rule] | [On blur/submit/real-time] | [Message] |

## Keyboard Shortcuts
| Key | Action | Context |
|-----|--------|---------|
| [Key combo] | [What it does] | [Where it works] |

## Open Questions
- [Behaviour that needs product decision]
```

## Rules

- Focus on behaviours that static designs cannot convey
- Every interaction must specify both the happy path and the error path
- Validation timing matters — document whether it's real-time, on blur, or on submit
- State transitions should be unambiguous — every state must have a clear entry and exit
- Include keyboard navigation for every interactive element
- Note any behaviours that differ between desktop and mobile
- Keep documentation close to the tickets — link directly from Linear issues
