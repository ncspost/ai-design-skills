---
name: create-refine-skills
description: Create new Claude skills or refine existing ones based on workflow analysis, team feedback, and repeated task patterns. Use when a new reusable skill is needed or an existing skill isn't performing well.
allowed-tools: Read, Grep, Glob, Edit, Write, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-create-pages, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-update-page
argument-hint: [skill to create/refine and the problem it should solve]
---

# Create & Refine Skills

Build new Claude skills or improve existing ones to automate recurring design workflow tasks.

## Process

### Creating a New Skill
1. **Identify the need** — From `$ARGUMENTS`, understand what task needs to be automated
2. **Define scope** — What should the skill do? What should it NOT do?
3. **Research tools** — Identify which MCP tools the skill needs access to
4. **Draft the skill** — Write the SKILL.md following the standard format
5. **Test** — Run the skill with a real example and iterate
6. **Document** — Log the new skill in Notion

### Refining an Existing Skill
1. **Gather feedback** — Identify what's not working from `$ARGUMENTS`
2. **Read the current skill** — Review the existing SKILL.md
3. **Diagnose issues** — Is the problem in the process, output format, or rules?
4. **Update** — Make targeted improvements
5. **Test** — Verify the refinement improves the outcome
6. **Document** — Note the changes in Notion

## Skill Quality Checklist

A good skill has:
- [ ] **Clear trigger** — The `description` makes it obvious when to use it
- [ ] **Scoped tools** — Only the MCP tools it actually needs are listed
- [ ] **Useful argument-hint** — Tells the user what input to provide
- [ ] **Step-by-step process** — Numbered steps that are easy to follow
- [ ] **Defined output** — A clear output format so results are consistent
- [ ] **Guardrails** — Rules that prevent common mistakes
- [ ] **Right scope** — Does one thing well, doesn't try to do too much

## Skill Format Template

```yaml
---
name: skill-name
description: [What it does]. Use when [trigger condition].
allowed-tools: [Only tools this skill needs]
argument-hint: [What input the user provides]
---
```

```markdown
# Skill Title

[One-line description of what this skill does.]

## Process

1. **[Step name]** — [What to do], using [which tool]
2. **[Step name]** — [What to do]

## [Domain-Specific Section]
[Frameworks, checklists, or criteria relevant to this skill]

## Output Format
[Structured template for consistent output]

## Rules
- [Guardrail 1]
- [Guardrail 2]
```

## Output Format

```markdown
# Skill [Created/Refined]: [Name]

## Change Summary
- **Action**: [Created new / Refined existing]
- **Reason**: [Why this was needed]
- **Key changes**: [What was added/modified]

## File
- `path/to/SKILL.md`

## Testing
- **Test input**: [What was used to test]
- **Result**: [Pass/needs more iteration]
- **Notes**: [Observations from testing]
```

## Rules

- Skills should do one thing well — split complex workflows into multiple skills
- Every skill must be testable with a real example before shipping
- Allowed-tools should be minimal — don't grant access to tools the skill doesn't use
- The description field is critical — it's how the system decides when to suggest the skill
- Process steps should reference specific tools by name
- Rules should prevent the most common mistakes, not be an exhaustive list
- Document skills in Notion so the team knows what's available
