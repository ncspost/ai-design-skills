---
name: assess-migrate-shadcn-updates
description: Assess new shadcn/ui releases for relevant updates, breaking changes, and new components, then plan and execute migration. Use when shadcn/ui publishes updates that may affect the design system.
allowed-tools: Read, Grep, Glob, Edit, Write, WebSearch, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_issue
argument-hint: [shadcn/ui version or component to assess]
---

# Assess & Migrate shadcn Updates

Evaluate shadcn/ui updates for relevance and impact, then plan and execute migrations.

## Process

1. **Check for updates** — From `$ARGUMENTS`, search for the latest shadcn/ui changes
2. **Review changelog** — Search the web for release notes and breaking changes
3. **Assess relevance** — Determine which updates affect your design system
4. **Impact analysis** — Identify components that need to change
5. **Plan migration** — Create a step-by-step migration plan
6. **Execute** — Apply updates to the codebase
7. **Create tickets** — Log migration tasks in Linear for anything that can't be auto-fixed

## Assessment Categories

### New Components
- Does the new component fill a gap in our design system?
- Does it replace a custom component we built?
- Does it align with our design patterns and token system?
- What customisation does it need to fit our brand?

### Updated Components
- What changed in the component API?
- Are there breaking changes to props, variants, or behaviour?
- Do our customisations still work with the update?
- Does the update improve accessibility or performance?

### Breaking Changes
- Which of our components are affected?
- What's the migration path?
- Can it be automated or does it need manual intervention?
- What's the testing burden?

### Token/Style Changes
- Have default styles or CSS variables changed?
- Do changes conflict with our design token overrides?
- Will the update change the visual appearance of existing components?

## Output Format

```markdown
# shadcn/ui Assessment: [Version/Update]

## Summary
- **New components**: [Count relevant]
- **Updated components**: [Count relevant]
- **Breaking changes**: [Count affecting us]
- **Recommended action**: [Update now / Plan migration / Skip]

## New Components
| Component | Relevant? | Gap Filled | Customisation Needed | Action |
|----------|----------|-----------|---------------------|--------|
| [Comp] | [Yes/No] | [What it replaces] | [What to customise] | [Adopt/Skip] |

## Updated Components
| Component | Change | Impact | Breaking? | Migration |
|----------|--------|--------|----------|-----------|
| [Comp] | [What changed] | [Our components affected] | [Yes/No] | [Steps] |

## Breaking Changes
| Change | Affected Files | Migration Steps | Effort |
|--------|---------------|----------------|--------|
| [Change] | [Files] | [Steps] | [S/M/L] |

## Migration Plan
1. [Step 1] — [What to do]
2. [Step 2] — [What to do]

## Risk Assessment
- **Confidence**: [High/Medium/Low]
- **Rollback plan**: [How to revert if issues arise]

## Linear Issues Created
- [Issue IDs for migration tasks]
```

## Rules

- Don't update blindly — always review the changelog first
- Check your custom overrides against the new version before merging
- Test every affected component after update, including edge cases
- Create a branch for the migration and get it reviewed before merging
- If a breaking change affects many components, create separate tickets per component
- Keep a record of our customisations so future migrations can check against them
- Run visual regression tests after any component update
- New shadcn components should be wrapped in our design system layer, not used directly
