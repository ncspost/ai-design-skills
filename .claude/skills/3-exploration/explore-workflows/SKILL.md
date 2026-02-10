---
name: explore-workflows
description: Explore and map multi-step user workflows on the Pencil canvas, visualising the sequence of screens and decision points a user moves through. Use when designing flows that span multiple screens or states.
allowed-tools: mcp__pencil__batch_design, mcp__pencil__snapshot_layout, mcp__pencil__get_editor_state, mcp__pencil__open_document, mcp__pencil__batch_get, mcp__pencil__find_empty_space_on_canvas, mcp__Figma__get_design_context, mcp__Figma__get_metadata
argument-hint: [workflow name and key steps or user goal]
---

# Explore Workflows

Map out multi-step user workflows to understand the full journey before designing individual screens.

## Process

1. **Define the workflow** — Identify the user goal and entry/exit points from `$ARGUMENTS`
2. **List all steps** — Enumerate every screen, decision point, and state transition
3. **Check existing designs** — Use Figma tools to review any current implementations
4. **Map the flow** — Use `batch_design` to create a connected flow diagram on the Pencil canvas
5. **Identify branches** — Map happy path, error paths, and edge cases
6. **Annotate decisions** — Label each decision point with the conditions that determine the path
7. **Validate layout** — Use `snapshot_layout` to ensure the flow reads clearly

## Flow Elements

- **Entry point** — How the user arrives at this flow
- **Screens** — Each distinct view the user sees
- **Decision points** — Where the flow branches based on user action or system state
- **Actions** — What the user does at each step
- **Transitions** — How the user moves between screens (navigation, redirect, modal)
- **Exit points** — Where the user ends up after completing (or abandoning) the flow
- **Error states** — What happens when something goes wrong

## Output Format

Create the flow on the canvas with connected frames, then provide:

```markdown
# Workflow: [Name]

## User Goal
[What the user is trying to accomplish]

## Flow Summary
1. [Step] → [Step] → [Decision Point]
   - If [condition]: → [Step]
   - If [condition]: → [Step]

## Screens Identified
| # | Screen | Purpose | Key Actions |
|---|--------|---------|-------------|
| 1 | [Name] | [Why this screen exists] | [What user can do] |

## Decision Points
| # | Decision | Conditions | Paths |
|---|----------|-----------|-------|
| 1 | [Decision] | [What determines the path] | [Path A, Path B] |

## Edge Cases & Error Paths
- [Scenario]: [How the flow handles it]

## Open Questions
- [Unresolved workflow decisions]
```

## Rules

- Always map the happy path first, then layer in error and edge cases
- Every screen must have a clear purpose — if you can't articulate why it exists, it may not be needed
- Decision points should be explicit about what determines the branch
- Include "back" and "escape" paths — users don't always move forward
- Keep the flow readable — use consistent left-to-right or top-to-bottom direction
- Note where the flow connects to other workflows in the product
