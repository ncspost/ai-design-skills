---
name: generate-storybook-stories
description: Generate Storybook stories for components based on design specs, covering all variants, states, and edge cases. Use when building or updating component documentation alongside implementation.
allowed-tools: Read, Grep, Glob, Edit, Write, mcp__Figma__get_design_context, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_code_connect_map
argument-hint: [component name or path to generate stories for]
---

# Generate Storybook Stories

Create comprehensive Storybook stories that document every variant and state of a component.

## Process

1. **Identify the component** — From `$ARGUMENTS`, find the component source file
2. **Extract the API** — Read the component's props, variants, and types
3. **Check Code Connect** — Use `get_code_connect_map` to verify Figma-to-code mappings
4. **Map stories** — Plan stories for every variant, state, and edge case
5. **Write stories** — Generate the Storybook story file
6. **Verify coverage** — Ensure every prop value and state combination is covered

## Story Categories

### Default
- The component in its most common configuration

### Variants
- One story per visual variant (size, colour, style)
- Variant combinations that are commonly used together

### States
- Default, hover, focus, active, disabled, loading, error
- Interactive states (selected, expanded, checked)

### Content
- Minimal content (shortest possible)
- Maximal content (longest text, most items)
- With/without optional elements (icons, badges, descriptions)
- Truncation behaviour

### Composition
- Component used within common parent layouts
- With other components it typically appears alongside

## Story File Structure

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentName } from './ComponentName'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  argTypes: {
    // Document each prop's control type
  },
}

export default meta
type Story = StoryObj<typeof ComponentName>

export const Default: Story = {
  args: {
    // Default props
  },
}

export const Variants: Story = { /* ... */ }
export const States: Story = { /* ... */ }
export const EdgeCases: Story = { /* ... */ }
```

## Output Format

```markdown
# Storybook Stories: [Component]

## Stories Created
| Story | What It Shows | Props |
|-------|-------------|-------|
| Default | [Description] | [Key props] |
| [Variant] | [Description] | [Key props] |

## File
- `path/to/ComponentName.stories.tsx`

## Coverage
- Variants covered: [X/Y]
- States covered: [X/Y]
- Edge cases: [List]
```

The primary output is the story file itself, written to the codebase.

## Rules

- Every prop value should appear in at least one story
- Include edge cases: long text, empty content, many items
- Use `autodocs` tag to generate prop documentation automatically
- Organise stories by the component's location in the design system hierarchy
- Add play functions for interactive states where applicable
- Match story names to design system variant names for easy cross-reference
- Include a "Playground" story with all controls enabled for experimentation
