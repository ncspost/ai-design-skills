---
name: translate-design-to-code
description: Translate a Figma design into production-ready code using design system components and Code Connect mappings. Use when moving from approved designs to implementation.
allowed-tools: Read, Grep, Glob, Edit, Write, mcp__Figma__get_design_context, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_code_connect_map, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_design_context, mcp__pencil__batch_get, mcp__pencil__search_all_unique_properties
argument-hint: [Figma URL of the design to implement]
---

# Translate Design to Code

Convert an approved design into production code using existing design system components.

## Process

1. **Load the design** — Get the design from `$ARGUMENTS` using Figma's `get_design_context`
2. **Map to components** — Use `get_code_connect_map` to find existing code components for each design element
3. **Extract properties** — Use `search_all_unique_properties` to get colours, spacing, typography
4. **Plan the implementation** — Determine component hierarchy and data flow
5. **Write the code** — Build the UI using mapped components and design tokens
6. **Verify** — Compare the output against the design

## Translation Priority

1. **Layout structure** — Grid, flex, spacing, responsive breakpoints
2. **Component mapping** — Design system components with correct props/variants
3. **Typography** — Font sizes, weights, line heights, colours
4. **Spacing** — Padding, margins, gaps using design tokens
5. **Colour** — Background, text, border colours using semantic tokens
6. **States** — Hover, focus, active, disabled, loading
7. **Motion** — Transitions and animations per spec

## Output Format

```markdown
# Implementation: [Feature]

## Component Mapping
| Design Element | Code Component | Props/Variants | Notes |
|---------------|---------------|---------------|-------|
| [Element] | `<ComponentName />` | variant="x" size="y" | [Notes] |

## New Components Needed
- [Component]: [Why it can't be built from existing pieces]

## Design Tokens Used
| Token | Value | Usage |
|-------|-------|-------|
| [Token name] | [Value] | [Where it's used] |

## Files Created/Modified
- `path/to/file.tsx` — [What this file contains]
```

The primary output is the code itself, written to the appropriate files.

## Rules

- Always use Code Connect mappings before writing custom components
- Use design tokens instead of hardcoded values (colours, spacing, typography)
- Match the design system's component API — don't fight the abstraction
- Include all states (hover, focus, disabled, loading) even if not shown in the design
- Write semantic HTML — use correct heading levels, landmarks, and ARIA attributes
- Test responsive behaviour matches the design spec
- If a design element doesn't map to an existing component, flag it before building custom
