---
name: explore-layouts
description: Explore different layout compositions for a specific screen or component on the Pencil canvas, testing how content and UI elements can be arranged. Use when you need to compare spatial arrangements before committing to a structure.
allowed-tools: mcp__pencil__batch_design, mcp__pencil__find_empty_space_on_canvas, mcp__pencil__get_editor_state, mcp__pencil__open_document, mcp__pencil__batch_get, mcp__pencil__snapshot_layout, mcp__pencil__get_guidelines, mcp__Figma__get_design_context, mcp__Figma__get_metadata
argument-hint: [screen name, content elements to arrange, and any constraints]
---

# Explore Layouts

Systematically explore different layout compositions to find the optimal arrangement for a screen or component.

## Process

1. **Inventory content** — List all elements that need to appear from `$ARGUMENTS`
2. **Identify constraints** — Viewport size, responsive requirements, content volume
3. **Review existing patterns** — Check Figma for current layouts using `get_design_context`
4. **Get guidelines** — Use `get_guidelines` for layout rules
5. **Generate variations** — Create 3-4 layout options using `batch_design`, varying:
   - Grid structure (1-col, 2-col, asymmetric, masonry)
   - Content grouping and hierarchy
   - Whitespace distribution
   - Fixed vs. scrollable regions
6. **Validate layouts** — Use `snapshot_layout` to check alignment and spacing
7. **Compare and annotate** — Label each with pros/cons

## Layout Patterns to Explore

- **Single column** — Simple, scannable, mobile-friendly
- **Two column (equal)** — Side-by-side comparison, dual focus
- **Two column (asymmetric)** — Main content + sidebar, navigation + detail
- **Grid** — Multiple items of equal weight, dashboards, galleries
- **Split screen** — Two distinct contexts, onboarding flows
- **Stacked sections** — Long-scroll pages, landing pages
- **Fixed + scrollable** — Header/sidebar stays, content scrolls

## Output Format

Place layout variations on the canvas with labels, then provide:

```markdown
# Layout Exploration: [Screen Name]

## Content Elements
- [Element 1]: [Purpose and approximate size]
- [Element 2]: [Purpose and approximate size]

## Constraints
- Viewport: [Desktop/tablet/mobile]
- [Other constraints]

## Layouts Explored
### Layout A: [Name]
- **Structure**: [Grid description]
- **Pros**: [Benefits]
- **Cons**: [Drawbacks]

### Layout B: [Name]
[Same structure]

## Recommendation
[Which layout best serves the content and user needs, and why]
```

## Rules

- Start with content, not containers — understand what needs to be shown before deciding how to arrange it
- Test with realistic content lengths — layouts that work with placeholder text may break with real data
- Consider the reading pattern — F-pattern for text-heavy, Z-pattern for marketing, direct for task-focused
- Every layout must accommodate the most important user action without scrolling
- Check that layouts degrade gracefully to narrower viewports
- Don't over-constrain — leave room for content to breathe
