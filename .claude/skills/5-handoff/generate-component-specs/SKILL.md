---
name: generate-component-specs
description: Generate detailed component specifications from a design, including props, variants, tokens, and behaviour documentation for developer handoff. Use when developers need a clear spec to implement a component.
allowed-tools: mcp__Figma__get_design_context, mcp__Figma__get_variable_defs, mcp__pencil__batch_get, mcp__pencil__get_variables, mcp__pencil__get_editor_state
argument-hint: [Figma URL or component name to spec]
---

# Generate Component Specs

Create comprehensive component specifications that give developers everything they need to build accurately.

## Process

1. **Load the component** — Get the design from `$ARGUMENTS` using Figma or Pencil tools
2. **Extract structure** — Identify the component's anatomy (parts, slots, children)
3. **Define props** — List every configurable property with types and defaults
4. **Document variants** — Capture every visual variant and state
5. **Extract tokens** — Use `get_variable_defs` or `get_variables` for design tokens
6. **Specify behaviour** — Document interactions, transitions, and edge cases

## Spec Sections

### Anatomy
- Name and describe each part of the component
- Identify which parts are required vs. optional
- Note slots where content can be injected

### Props/API
- Property name, type, default value
- Required vs. optional
- Accepted values (for enums)
- Description of what each prop controls

### Variants
- Visual variants (size, colour, style)
- State variants (default, hover, active, disabled, loading, error)
- Content variants (with icon, without icon, truncated, etc.)

### Tokens
- Colour tokens mapped to component parts
- Spacing tokens (padding, margins, gaps)
- Typography tokens (font size, weight, line height)
- Border/shadow tokens

## Output Format

```markdown
# Component Spec: [Component Name]

## Anatomy
```
[ComponentName]
├── Container (wrapper)
│   ├── Icon (optional)
│   ├── Label (required)
│   └── Description (optional)
└── Actions (optional)
```

## Props
| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| variant | "primary" \| "secondary" \| "ghost" | "primary" | No | Visual style variant |
| size | "sm" \| "md" \| "lg" | "md" | No | Component size |
| disabled | boolean | false | No | Disables interaction |

## Visual Variants
| Variant | Description | Use When |
|---------|------------|----------|
| primary | [Description] | [Guidance] |

## States
| State | Visual Changes | Token Overrides |
|-------|---------------|----------------|
| Default | [Description] | — |
| Hover | [Changes] | [Tokens] |
| Active | [Changes] | [Tokens] |
| Disabled | [Changes] | [Tokens] |

## Design Tokens
| Part | Property | Token | Value |
|------|----------|-------|-------|
| Container | background | [token-name] | [value] |
| Label | font-size | [token-name] | [value] |

## Spacing
| Property | Token | Value |
|----------|-------|-------|
| Padding | [token] | [value] |
| Gap | [token] | [value] |

## Behaviour
- [Interaction descriptions]
- [Keyboard navigation]
- [Accessibility requirements]

## Usage Guidelines
- **Do**: [Correct usage]
- **Don't**: [Common misuse]
```

## Rules

- Every prop must have a type, default, and description
- Every state must be visually documented, not just named
- Use design tokens, not raw values — specs should reference the token system
- Include keyboard interaction requirements (Tab, Enter, Escape, Arrow keys)
- Note accessibility requirements (ARIA role, labels, announcements)
- Include "do/don't" usage guidelines to prevent misuse
- Specs should be detailed enough that a developer can build without asking questions
