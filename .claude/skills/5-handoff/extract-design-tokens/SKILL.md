---
name: extract-design-tokens
description: Extract design tokens from Figma designs and .pen files, generating structured token files for colours, typography, spacing, and shadows. Use when syncing design decisions to the codebase token system.
allowed-tools: Read, Grep, Glob, Edit, Write, mcp__Figma__get_variable_defs, mcp__pencil__get_variables, mcp__pencil__search_all_unique_properties, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_variable_defs
argument-hint: [Figma URL or .pen file to extract tokens from]
---

# Extract Design Tokens

Extract and structure design tokens from design files into code-ready formats.

## Process

1. **Load source** — Get the design from `$ARGUMENTS`
2. **Extract variables** — Use `get_variable_defs` (Figma) or `get_variables` (Pencil)
3. **Search for unique values** — Use `search_all_unique_properties` to find all used values
4. **Categorise tokens** — Group by type (colour, typography, spacing, etc.)
5. **Map to existing tokens** — Compare against current token system in the codebase
6. **Generate token files** — Output in the project's token format (CSS vars, JSON, TS)
7. **Flag gaps** — Note new tokens needed and unused tokens to deprecate

## Token Categories

### Colour
- **Primitive**: Raw colour values (blue-500, gray-200)
- **Semantic**: Purpose-based aliases (text-primary, bg-surface, border-error)
- **Component**: Component-specific tokens (button-bg, input-border)

### Typography
- Font family, size, weight, line-height, letter-spacing
- Grouped as type styles (heading-lg, body-sm, label-md)

### Spacing
- Base unit and scale (4, 8, 12, 16, 24, 32, 48, 64)
- Named tokens (space-xs, space-sm, space-md, space-lg)

### Borders & Shadows
- Border width, radius, colour
- Shadow elevation levels (shadow-sm, shadow-md, shadow-lg)

### Motion
- Duration tokens (duration-fast, duration-normal)
- Easing curves (ease-in, ease-out, ease-in-out)

## Output Format

```markdown
# Design Tokens: [Source]

## Token Summary
| Category | Existing | New | Changed | Deprecated |
|----------|---------|-----|---------|-----------|
| Colour | [X] | [Y] | [Z] | [W] |
| Typography | [X] | [Y] | [Z] | [W] |
| Spacing | [X] | [Y] | [Z] | [W] |

## New Tokens
| Token Name | Value | Category | Usage |
|-----------|-------|----------|-------|
| [name] | [value] | [category] | [where it's used] |

## Changed Tokens
| Token Name | Old Value | New Value | Impact |
|-----------|----------|----------|--------|
| [name] | [old] | [new] | [components affected] |

## Tokens by Theme
| Token | Light | Dark |
|-------|-------|------|
| [name] | [value] | [value] |

## Files Generated
- `path/to/tokens.css` or `.json` or `.ts`
```

The primary output is the token file(s), written to the codebase.

## Rules

- Always use the project's existing token naming convention
- Semantic tokens should reference primitive tokens, not raw values
- Check for theme support (light/dark) and extract both values
- Flag any hardcoded values in the design that should be tokens
- Include token descriptions/comments explaining the intended use
- Compare new tokens against the existing system to prevent duplicates
- Document any tokens that exist in code but not in the design (potential deprecation)
