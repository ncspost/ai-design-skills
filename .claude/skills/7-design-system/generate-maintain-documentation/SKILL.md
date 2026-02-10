---
name: generate-maintain-documentation
description: Generate and maintain design system documentation — component usage guidelines, design principles, pattern libraries, and decision logs. Use when documentation is missing, outdated, or needs standardising.
allowed-tools: Read, Grep, Glob, Edit, Write, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-create-pages, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-update-page, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-search, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_code_connect_map
argument-hint: [component or area to document]
---

# Generate & Maintain Documentation

Create and update design system documentation to keep it accurate, comprehensive, and useful.

## Process

1. **Identify gaps** — From `$ARGUMENTS`, determine what needs documentation
2. **Gather source material** — Read component code, Figma designs, and existing docs
3. **Check Code Connect** — Verify code-to-design mappings are accurate
4. **Write documentation** — Follow the standard structure below
5. **Publish** — Create or update Notion pages
6. **Cross-reference** — Ensure links between related docs are current

## Documentation Types

### Component Documentation
- What the component is and when to use it
- Props/API reference with examples
- Visual variants and states
- Do/don't usage guidelines
- Accessibility requirements
- Code examples

### Pattern Documentation
- What problem the pattern solves
- When to use this pattern vs. alternatives
- Example implementations
- Edge cases and variations

### Foundation Documentation
- Design tokens (colour, spacing, typography, shadows)
- Grid and layout system
- Iconography guidelines
- Motion and animation principles

### Process Documentation
- How to contribute to the design system
- Review and approval process
- Versioning and release notes
- Migration guides for breaking changes

## Component Doc Template

```markdown
# [Component Name]

## Overview
[1-2 sentence description of what this component is]

## When to Use
- [Use case 1]
- [Use case 2]

## When NOT to Use
- [Anti-pattern — use [Alternative] instead]

## Variants
| Variant | Description | Use When |
|---------|------------|----------|
| [Name] | [Description] | [Guidance] |

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| [prop] | [type] | [default] | [description] |

## Examples
[Code examples for common use cases]

## Accessibility
- [Keyboard behaviour]
- [ARIA attributes]
- [Screen reader announcements]

## Do / Don't
- Do: [Correct usage]
- Don't: [Common mistake]

## Related Components
- [ComponentA] — [When to use that instead]
```

## Output Format

```markdown
# Documentation Update: [Area]

## Pages Created
| Page | Type | Link |
|------|------|------|
| [Page title] | [Component/Pattern/Foundation] | [Notion URL] |

## Pages Updated
| Page | Changes | Reason |
|------|---------|--------|
| [Page title] | [What changed] | [Why] |

## Coverage
- Components documented: [X/Y]
- Patterns documented: [X/Y]
- Foundations documented: [X/Y]

## Still Missing
- [Documentation gaps remaining]
```

## Rules

- Documentation must be accurate — wrong docs are worse than no docs
- Every component must have "When to Use" and "When NOT to Use" sections
- Include real code examples, not just prop tables
- Keep docs close to the code — update docs when components change
- Use consistent structure across all component docs
- Include links to Figma designs and Storybook stories
- Review docs quarterly and remove or update stale content
- Docs should answer "should I use this?" not just "how do I use this?"
