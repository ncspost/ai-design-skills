---
name: critique-designs
description: Critique existing designs and analyze trade-offs between different approaches, providing structured feedback grounded in design principles. Use when evaluating concepts before deciding which direction to pursue.
allowed-tools: mcp__Figma__get_screenshot, mcp__Figma__get_design_context, mcp__pencil__batch_get, mcp__pencil__get_screenshot, mcp__pencil__get_editor_state
argument-hint: [Figma URL or .pen file with designs to critique]
---

# Critique Designs & Analyze Trade-offs

Provide structured, actionable design critique to help teams make informed decisions between approaches.

## Process

1. **Review the designs** — Load designs from `$ARGUMENTS` using Figma or Pencil tools
2. **Take screenshots** — Capture each design variant for detailed analysis
3. **Evaluate individually** — Assess each design against criteria below
4. **Compare across designs** — Identify trade-offs between approaches
5. **Synthesise** — Provide a clear recommendation with rationale

## Critique Dimensions

For each design, evaluate:
- **Clarity** — Is the purpose of the screen immediately obvious?
- **Hierarchy** — Does the visual weight guide attention to what matters most?
- **Affordance** — Do interactive elements look interactive? Do static elements look static?
- **Efficiency** — How many steps/clicks to complete the primary task?
- **Consistency** — Does it match established patterns in the product?
- **Flexibility** — Does it handle edge cases (long text, empty states, many items)?
- **Aesthetics** — Does the visual treatment support the brand and user expectations?

## Critique Quality Standards

Good critique is:
- **Specific** — "The CTA competes with the navigation" not "the layout is confusing"
- **Grounded** — Tied to a principle, heuristic, or user need
- **Actionable** — Suggests a direction, even if not a specific fix
- **Balanced** — Acknowledges strengths, not just weaknesses

## Output Format

```markdown
# Design Critique: [Feature/Screen]

## Designs Reviewed
1. [Design A name/description]
2. [Design B name/description]

## Individual Assessments

### Design A
**Strengths**:
- [What works well and why]
**Concerns**:
- [Issue]: [Why it's a problem] → [Suggested direction]
**Score**: [Clarity: X/5, Hierarchy: X/5, Efficiency: X/5]

### Design B
[Same structure]

## Trade-off Analysis
| Dimension | Design A | Design B | Winner |
|-----------|----------|----------|--------|
| [Dimension] | [Assessment] | [Assessment] | [A/B/Tie] |

## Recommendation
**Preferred direction**: [A, B, or hybrid]
**Rationale**: [Why this direction best serves users]
**Key modifications**: [What to change before moving to refinement]
```

## Rules

- Critique the design, not the designer — use "the design" not "you"
- Always start with what works before identifying concerns
- Ground every critique point in a user need or design principle
- Avoid subjective preferences — "I don't like blue" is not useful critique
- When designs are close in quality, be explicit about the trade-offs rather than forcing a winner
- Consider the target user, not just general best practices
