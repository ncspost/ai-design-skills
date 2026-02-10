---
name: match-patterns-to-design-system
description: Map design concepts to existing design system components and patterns, identifying what can be reused and what needs to be created. Use when moving from exploration to implementation to maximise reuse.
allowed-tools: Read, Grep, Glob, mcp__Figma__get_design_context, mcp__Figma__get_metadata, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_code_connect_map, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_design_context
argument-hint: [Figma URL or feature description to match against design system]
---

# Match Patterns to Design System

Audit a design concept against the existing design system to maximise component reuse and identify gaps.

## Process

1. **Review the design** — Load the design from `$ARGUMENTS` using Figma tools
2. **Inventory UI elements** — List every distinct component, pattern, and token used
3. **Audit the design system** — Use Code Connect and Figma tools to find existing components
4. **Map matches** — For each UI element, identify the closest design system match
5. **Flag gaps** — Note elements that have no design system equivalent
6. **Recommend approach** — For gaps, recommend reuse, extend, or create new

## Matching Categories

For each UI element, classify as:
- **Direct match** — An existing component covers this exactly
- **Near match** — An existing component can be used with minor prop changes or variants
- **Needs extension** — An existing component needs a new variant or configuration
- **New component** — No existing component fits; a new one is needed
- **Composition** — Can be built by combining existing components

## Output Format

```markdown
# Design System Mapping: [Feature]

## Component Inventory
| # | UI Element | DS Component | Match Type | Notes |
|---|-----------|-------------|-----------|-------|
| 1 | [Element in design] | [DS component name] | Direct/Near/Extend/New/Composition | [Details] |

## Direct Matches (Ready to Use)
- [Component]: Use as-is with [props/variant]

## Near Matches (Minor Adjustments)
- [Component]: Needs [what adjustment] to work

## Extensions Needed
- [Component]: Add [new variant/prop] to support [use case]

## New Components Required
- [Component name]: [Why existing components don't work]
  - **Suggested approach**: [Build from scratch / compose from existing]
  - **Reusable?**: [Would this be useful elsewhere?]

## Design Token Coverage
| Token Type | Coverage | Gaps |
|-----------|----------|------|
| Colours | [X/Y used exist] | [Missing tokens] |
| Typography | [X/Y used exist] | [Missing styles] |
| Spacing | [Consistent?] | [Deviations] |

## Recommendations
1. [Highest priority action]
```

## Rules

- Always check the design system before proposing new components
- Prefer composition of existing components over creating new ones
- When extending a component, consider if the extension benefits the whole system
- Flag any design token deviations (custom colours, non-standard spacing)
- Note where the design intentionally deviates from the system and why
- Include Code Connect references so developers know exactly which components to use
