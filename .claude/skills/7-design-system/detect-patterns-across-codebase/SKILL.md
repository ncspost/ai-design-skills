---
name: detect-patterns-across-codebase
description: Detect recurring UI patterns across the codebase that could be promoted to shared design system components, identifying opportunities to reduce duplication and improve consistency. Use when the codebase has grown and patterns have emerged organically.
allowed-tools: Read, Grep, Glob, mcp__Figma__get_design_context, mcp__Figma__get_metadata, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_code_connect_map, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_design_context
argument-hint: [codebase path or pattern type to search for]
---

# Detect Patterns Across Codebase

Find recurring UI patterns in the codebase that should be promoted to the design system.

## Process

1. **Define search scope** — From `$ARGUMENTS`, determine what to scan
2. **Scan for patterns** — Search the codebase for similar component structures
3. **Cluster similarities** — Group code that implements the same pattern
4. **Compare to design system** — Check if the pattern already exists as a component
5. **Assess promotion** — Evaluate whether the pattern should become a shared component
6. **Recommend** — Propose which patterns to promote and how

## Detection Methods

### Structural Patterns
- Similar JSX/HTML structures repeated across files
- Common layout compositions (header + content + footer, sidebar + main)
- Repeated form patterns (label + input + error + help text)
- Card-like containers with similar internal structures

### Style Patterns
- Common colour + spacing + typography combinations
- Repeated responsive breakpoint logic
- Similar hover/focus/active state implementations
- Shared animation patterns

### Behavioural Patterns
- Similar state management logic (open/close, expand/collapse)
- Common data fetching and loading patterns
- Repeated form validation approaches
- Similar error handling and retry logic

### Copy-Paste Indicators
- Nearly identical code blocks across files
- "Borrowed" components (copied and slightly modified)
- Inline styles that replicate design system tokens
- Utility classes applied in the same combination repeatedly

## Promotion Criteria

A pattern should be promoted to the design system when:
- It appears in **3+ places** across the codebase
- It serves a **common, recurring need** (not a one-off layout)
- It can be **parameterised** with props/variants to cover variations
- It would **reduce code** and **improve consistency** if shared
- It's **stable enough** that the API won't change frequently

## Output Format

```markdown
# Pattern Detection: [Scope]

## Patterns Found
| # | Pattern | Occurrences | Files | Already in DS? | Promotion? |
|---|---------|------------|-------|---------------|-----------|
| 1 | [Pattern name] | [Count] | [File list] | [Yes/No/Partial] | [Promote/Extend/Skip] |

## Patterns to Promote

### [Pattern Name]
- **Description**: [What the pattern does]
- **Found in**: [List of files]
- **Variations**: [How instances differ]
- **Proposed component API**:
  ```typescript
  interface [ComponentName]Props {
    // Suggested props based on observed variations
  }
  ```
- **Effort**: [S/M/L]
- **Impact**: [How many files would be simplified]

## Patterns to Extend
- [Existing DS component] → Add [variant/prop] to cover [pattern]

## Skip (Not Ready for Promotion)
- [Pattern]: [Why not yet — too volatile, too niche, etc.]

## Recommendations
1. [Highest-impact pattern to promote]
```

## Rules

- 3+ occurrences is the minimum threshold for promotion consideration
- Patterns must be genuinely similar, not just superficially alike
- Include the proposed component API so the team can evaluate the abstraction
- Check both the design system and the codebase — sometimes the pattern exists in one but not the other
- Don't promote patterns that are still evolving — wait for stability
- Consider the maintenance cost of a new component, not just the creation cost
- Patterns that handle accessibility well in one place should be promoted so all instances benefit
