---
name: suggest-responsive-adaptations
description: Suggest how a design should adapt across breakpoints (mobile, tablet, desktop), identifying layout changes, content priority shifts, and interaction model differences. Use when a desktop design needs to work on smaller screens.
allowed-tools: mcp__pencil__batch_design, mcp__pencil__snapshot_layout, mcp__pencil__get_editor_state, mcp__pencil__open_document, mcp__pencil__batch_get, mcp__pencil__find_empty_space_on_canvas, mcp__Figma__get_design_context
argument-hint: [Figma URL or .pen file with desktop design to adapt]
---

# Suggest Responsive Adaptations

Define how a design adapts across screen sizes, ensuring the experience works on every device.

## Process

1. **Review the desktop design** — Load from `$ARGUMENTS` using Figma or Pencil tools
2. **Inventory all elements** — List every component and content block
3. **Prioritise content** — Rank elements by importance for smaller screens
4. **Define breakpoints** — Map adaptations for each target breakpoint
5. **Generate mobile layouts** — Use `batch_design` to create responsive variants on the canvas
6. **Validate** — Use `snapshot_layout` to verify adaptations work

## Breakpoint Strategy

| Breakpoint | Width | Target |
|-----------|-------|--------|
| Mobile | 375px | Phone (portrait) |
| Tablet | 768px | Tablet (portrait) |
| Desktop | 1280px | Laptop/desktop |
| Wide | 1440px+ | Large monitors |

## Adaptation Patterns

### Layout Changes
- Multi-column → single column (stack)
- Side-by-side → tabs or accordion
- Grid → vertical list
- Fixed sidebar → bottom sheet or drawer

### Content Priority
- What gets hidden on mobile? (Progressive disclosure)
- What changes position? (Reordering for thumb reach)
- What changes format? (Table → cards, chart → summary)
- What gets deferred? ("Show more" or separate page)

### Interaction Changes
- Hover → long-press or tap-to-reveal
- Right-click → action sheet
- Drag-and-drop → swipe actions or edit mode
- Multi-select → selection mode toggle
- Tooltips → inline help text

### Navigation Changes
- Horizontal nav → hamburger or bottom tabs
- Breadcrumbs → back button
- Sidebar nav → drawer or bottom sheet

## Output Format

```markdown
# Responsive Adaptations: [Feature]

## Content Priority
| Element | Desktop | Tablet | Mobile | Notes |
|---------|---------|--------|--------|-------|
| [Element] | Visible | Visible | Hidden → "More" | [Rationale] |

## Breakpoint Adaptations
### Mobile (375px)
- **Layout**: [How layout changes]
- **Navigation**: [How nav adapts]
- **Key interactions**: [What changes]
- **Hidden/deferred**: [What moves behind progressive disclosure]

### Tablet (768px)
[Same structure]

## Interaction Adaptations
| Desktop Pattern | Mobile Alternative | Rationale |
|----------------|-------------------|-----------|
| [Pattern] | [Alternative] | [Why] |

## Designs Created
- [List of responsive variant frames on the canvas]
```

## Rules

- Mobile is not a smaller desktop — rethink the interaction model, don't just shrink
- Every element hidden on mobile needs an alternative way to access it
- Touch targets must be at least 44x44px on mobile
- Consider thumb reach zones — primary actions should be in the bottom half of the screen
- Test with real content — layouts that work with "Lorem" may break with real data
- Navigation changes must maintain the user's sense of location
