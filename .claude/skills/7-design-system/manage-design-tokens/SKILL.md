---
name: manage-design-tokens
description: Manage design tokens across design files and code — adding, updating, deprecating, and syncing tokens between Figma, .pen files, and the codebase. Use when tokens need to change or when design-code token drift is detected.
allowed-tools: Read, Grep, Glob, Edit, Write, mcp__Figma__get_variable_defs, mcp__pencil__get_variables, mcp__pencil__set_variables, mcp__6fb02be0-ae07-425b-895e-a3f4a6313ad5__get_variable_defs
argument-hint: [token change to make or sync direction]
---

# Manage Design Tokens

Add, update, deprecate, and sync design tokens across design tools and codebase.

## Process

1. **Understand the change** — From `$ARGUMENTS`, determine what token operation is needed
2. **Audit current state** — Pull tokens from Figma, Pencil, and code
3. **Identify drift** — Compare tokens across all sources to find mismatches
4. **Execute change** — Apply the token change across all relevant systems
5. **Verify sync** — Confirm all sources now match
6. **Document** — Log the change and rationale

## Token Operations

### Add New Token
1. Define the token name following naming conventions
2. Set the value for all themes (light, dark)
3. Add to design files (Figma variables, Pencil variables)
4. Add to code (CSS variables, JS/TS token files)
5. Document the token's purpose and usage

### Update Existing Token
1. Identify all places the token is used
2. Assess the impact of the change
3. Update the value in design files
4. Update the value in code
5. Verify no unintended visual changes

### Deprecate Token
1. Identify the replacement token
2. Find all usages of the deprecated token
3. Migrate usages to the replacement
4. Mark as deprecated with migration timeline
5. Remove after migration period

### Sync Tokens
1. Pull tokens from all sources
2. Diff to find mismatches
3. Determine source of truth
4. Update out-of-sync sources
5. Verify visual consistency

## Token Naming Convention

```
{category}-{property}-{variant}-{state}

Examples:
color-bg-primary
color-bg-primary-hover
color-text-secondary
space-padding-md
font-size-heading-lg
shadow-elevation-md
border-radius-sm
```

## Output Format

```markdown
# Token Management: [Operation]

## Change Summary
| Token | Previous Value | New Value | Themes Affected |
|-------|--------------|----------|----------------|
| [name] | [old] | [new] | [light/dark/both] |

## Impact Analysis
- **Components affected**: [List]
- **Pages affected**: [List]
- **Visual change**: [Description]

## Sync Status
| Source | Status | Action Taken |
|--------|--------|-------------|
| Figma | [In sync/Updated/N/A] | [What was done] |
| Pencil | [In sync/Updated/N/A] | [What was done] |
| Code | [In sync/Updated/N/A] | [What was done] |

## Migration (for deprecations)
| Deprecated Token | Replacement | Usages to Migrate | Status |
|-----------------|------------|-------------------|--------|
| [old-token] | [new-token] | [count] | [Complete/In progress] |

## Verification
- [ ] Design file tokens match code tokens
- [ ] All themes are consistent
- [ ] No hardcoded values override the token
- [ ] Visual output matches expectations
```

## Rules

- Tokens should always flow from a single source of truth — don't let design and code diverge
- Every token must have values for all supported themes
- Token names must follow the established naming convention
- Before updating a widely-used token, assess the blast radius
- Deprecated tokens should have a clear migration path and timeline
- Never delete a token without migrating all usages first
- Document why a token was added or changed, not just what changed
- Semantic tokens should reference primitive tokens, not raw values
