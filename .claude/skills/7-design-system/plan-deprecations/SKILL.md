---
name: plan-deprecations
description: Plan and communicate component deprecations in the design system, including migration paths, timelines, and team notifications. Use when a component needs to be retired in favour of a replacement.
allowed-tools: Read, Grep, Glob, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_issue, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_document, mcp__07bc7ee9-cc70-4371-92d2-9b3338dcd3e0__slack_send_message, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-search
argument-hint: [component to deprecate and its replacement]
---

# Plan Deprecations

Create a structured deprecation plan that migrates teams smoothly from old to new components.

## Process

1. **Identify what to deprecate** — From `$ARGUMENTS`, confirm the component and its replacement
2. **Audit usage** — Search the codebase for all instances of the deprecated component
3. **Define migration path** — Document exactly how to replace old with new
4. **Set timeline** — Establish deprecation phases with dates
5. **Communicate** — Notify teams via Slack and document in Linear/Notion
6. **Track progress** — Monitor migration completion

## Deprecation Phases

### Phase 1: Announce (Week 1)
- Document the deprecation reason and replacement
- Add deprecation warnings to the component (code + docs)
- Notify teams via Slack
- Create Linear issues for each team's migration work

### Phase 2: Migrate (Weeks 2-6)
- Support teams in migrating to the replacement
- Provide code examples and migration scripts
- Track migration progress
- Address edge cases that don't map cleanly

### Phase 3: Enforce (Week 7+)
- Lint rules to prevent new usage of deprecated component
- Final sweep for remaining instances
- Update design files to remove deprecated component

### Phase 4: Remove (After full migration)
- Remove the component from the codebase
- Remove from design files
- Update documentation
- Archive related Storybook stories

## Migration Documentation

For each deprecation, provide:
- **Before/After code examples** for every common usage pattern
- **Prop mapping table** showing old prop → new prop
- **Edge cases** where the replacement doesn't work identically
- **Breaking changes** that require logic changes, not just find-replace

## Output Format

```markdown
# Deprecation Plan: [Component]

## Overview
- **Deprecated**: [Component name and version]
- **Replacement**: [New component name]
- **Reason**: [Why deprecating]
- **Timeline**: [Start date → removal date]

## Usage Audit
- **Total instances**: [Count]
- **Files affected**: [Count]
- **Teams affected**: [List]

## Migration Guide

### Basic Usage
**Before:**
```tsx
<OldComponent prop="value" />
```
**After:**
```tsx
<NewComponent newProp="value" />
```

### Prop Mapping
| Old Prop | New Prop | Notes |
|----------|----------|-------|
| [old] | [new] | [Any difference in behaviour] |

### Edge Cases
- [Case where migration isn't straightforward]

## Timeline
| Phase | Date | Action | Status |
|-------|------|--------|--------|
| Announce | [Date] | Notify teams, add warnings | [Pending] |
| Migrate | [Date range] | Teams migrate instances | [Pending] |
| Enforce | [Date] | Lint rules, block new usage | [Pending] |
| Remove | [Date] | Delete from codebase | [Pending] |

## Communication
- [ ] Slack announcement sent
- [ ] Linear issues created per team
- [ ] Documentation updated
- [ ] Storybook marked as deprecated

## Progress
| Team | Instances | Migrated | Remaining |
|------|----------|----------|-----------|
| [Team] | [Count] | [Count] | [Count] |
```

## Rules

- Never deprecate without a clear, documented replacement
- Give teams at least 4 weeks to migrate before enforcement
- Provide before/after code examples for every usage pattern
- Add console warnings to the deprecated component so developers notice
- Track migration per team so nobody gets left behind
- Don't remove until 100% migration is verified
- Keep the deprecated component working (just warned) during the migration period
- Archive, don't delete, the old Storybook stories for historical reference
