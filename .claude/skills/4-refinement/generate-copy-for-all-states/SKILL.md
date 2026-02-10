---
name: generate-copy-for-all-states
description: Generate UI copy for every state of a feature — loading, empty, error, success, partial, and edge cases. Use after edge case identification to ensure every state has clear, helpful copy.
allowed-tools: Read, Grep, Glob, mcp__pencil__batch_design, mcp__pencil__batch_get, mcp__pencil__get_editor_state
argument-hint: [feature name and list of states needing copy]
---

# Generate Copy for All States

Write copy for every state a user might encounter, ensuring no screen is left with missing or placeholder text.

## Process

1. **Map all states** — From `$ARGUMENTS`, list every state that needs copy
2. **Review existing copy** — Check what's already been written for the happy path
3. **Draft state copy** — Write copy for each state following the patterns below
4. **Apply to canvas** — Use `batch_design` to update text in the Pencil file if applicable
5. **Cross-check consistency** — Ensure tone, terminology, and patterns are consistent

## State Copy Patterns

### Loading States
- Brief, informative: "Loading your projects..."
- Set expectations: "This may take a moment for large teams"
- Progressive: Show partial content with skeleton states

### Empty States
- Explain what will appear: "Your notifications will appear here"
- Guide the next action: "Create your first project to get started"
- Don't blame the user: "No results found" not "You haven't created anything"

### Error States
- Say what happened: "We couldn't save your changes"
- Say why (if known): "The file is too large (max 10MB)"
- Say what to do: "Try reducing the file size or choose a different format"
- Never: "An error occurred" with no further guidance

### Success States
- Confirm the action: "Project created successfully"
- Guide next steps: "You can now invite team members"
- Be proportional: Big action = celebration, small action = subtle confirmation

### Partial States
- Explain the limitation: "Showing 50 of 2,340 results"
- Offer the path to more: "Load more" or "Refine your search"

### Permission States
- Explain what they can't do: "You need editor access to make changes"
- Explain how to get access: "Ask [owner name] for permission"

## Output Format

```markdown
# State Copy: [Feature]

## Copy Matrix
| Screen | State | Heading | Body | Action | Notes |
|--------|-------|---------|------|--------|-------|
| [Screen] | Default | [Copy] | [Copy] | [Button text] | |
| [Screen] | Loading | — | [Copy] | — | [Skeleton/spinner] |
| [Screen] | Empty | [Copy] | [Copy] | [CTA text] | |
| [Screen] | Error | [Copy] | [Copy] | [Retry text] | [When shown] |
| [Screen] | Success | [Copy] | [Copy] | [Next action] | |

## Consistency Notes
- Terminology: [Decisions made, e.g., "Always use 'project' not 'workspace'"]
- Tone shifts: [How tone changes by state, e.g., "Errors are calm and helpful"]
```

## Rules

- Every state must have copy — no screen should ever show a blank or broken layout
- Error messages always include: what happened + what to do about it
- Empty states always include: what this area is for + how to populate it
- Success messages always confirm the specific action taken
- Loading copy should set expectations when the wait might be long
- Keep all state copy under 2 sentences where possible
- Use the same terminology established in the happy-path copy
