---
name: ideate-micro-interactions
description: Ideate micro-interactions and animation specifications for a feature, defining motion timing, easing, and purpose for key transitions. Use when refining the feel of an experience beyond static screens.
allowed-tools: Read, Grep, Glob, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__update_issue, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__get_issue, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_comment
argument-hint: [feature or interaction to add motion to]
---

# Ideate Micro-interactions & Animations

Define purposeful micro-interactions that enhance usability and delight without adding unnecessary motion.

## Process

1. **Identify interaction points** — From `$ARGUMENTS`, list every moment where motion could add value
2. **Classify purpose** — Determine why each animation exists (feedback, orientation, delight)
3. **Specify motion** — Define timing, easing, and properties for each interaction
4. **Document** — Write animation specs and attach to Linear issues

## Animation Purpose Categories

### Functional (must-have)
- **Feedback** — Confirm an action was received (button press, toggle switch)
- **Orientation** — Show where something came from or went to (page transitions, modals)
- **Status** — Communicate system state (loading, progress, success/error)
- **Guidance** — Direct attention to what matters (onboarding highlights, new indicators)

### Delightful (nice-to-have)
- **Personality** — Reinforce brand feel (illustration animations, empty state animations)
- **Polish** — Subtle refinements (hover states, scroll effects)

## Motion Specification Format

For each interaction, define:
- **Trigger**: What initiates the animation
- **Property**: What changes (opacity, transform, colour, etc.)
- **Duration**: How long (use 150-300ms for UI, 300-500ms for transitions)
- **Easing**: The timing curve (ease-out for entrances, ease-in for exits)
- **Delay**: If it should wait (stagger for lists)

## Output Format

```markdown
# Micro-interactions: [Feature]

## Animation Inventory
| # | Interaction | Purpose | Priority |
|---|------------|---------|----------|
| 1 | [Interaction] | [Feedback/Orientation/Status/Guidance/Delight] | [Must/Should/Could] |

## Specifications

### 1. [Interaction Name]
- **Trigger**: [User action or system event]
- **Elements**: [What animates]
- **Motion**:
  - Property: [opacity, translateY, scale, etc.]
  - From → To: [start value → end value]
  - Duration: [Xms]
  - Easing: [ease-out, ease-in-out, spring, etc.]
  - Delay: [Xms or stagger Xms]
- **Reduced motion**: [Fallback for prefers-reduced-motion]
- **CSS/code hint**: [Suggested implementation approach]

## Motion Tokens
| Token | Value | Usage |
|-------|-------|-------|
| duration-fast | 150ms | Micro-feedback (hover, press) |
| duration-normal | 250ms | UI transitions (toggle, expand) |
| duration-slow | 400ms | Page transitions, modals |
| easing-default | cubic-bezier(0.4, 0, 0.2, 1) | General purpose |
| easing-enter | cubic-bezier(0, 0, 0.2, 1) | Elements entering |
| easing-exit | cubic-bezier(0.4, 0, 1, 1) | Elements leaving |

## Accessibility
- All animations respect `prefers-reduced-motion`
- No animation is the only way to understand state changes
- Reduced motion alternatives: [Describe fallbacks]
```

## Rules

- Every animation must have a purpose — remove any that are purely decorative with no functional benefit
- Keep durations short: 150-300ms for UI feedback, 300-500ms for page transitions
- Always define a `prefers-reduced-motion` fallback (usually instant/no animation)
- Entrance animations should use ease-out; exit animations should use ease-in
- Stagger list animations by 30-50ms per item, capped at 5-8 items
- Don't animate layout properties (width, height, top, left) — use transform and opacity for performance
- Motion should feel natural — elements should move in the direction they came from
