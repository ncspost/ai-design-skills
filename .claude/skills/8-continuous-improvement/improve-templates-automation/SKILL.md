---
name: improve-templates-automation
description: Identify opportunities to create templates, automate repetitive steps, and streamline recurring design workflow tasks. Use when the same type of work keeps requiring the same manual setup.
allowed-tools: Read, Grep, Glob, Edit, Write, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__list_issues, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-update-page
argument-hint: [workflow area to analyze for template/automation opportunities]
---

# Improve Templates & Automation

Find and build templates and automations that eliminate repetitive manual work in the design workflow.

## Process

1. **Identify repetition** — From `$ARGUMENTS`, analyze which tasks are done repeatedly
2. **Audit current templates** — Check what templates and automations already exist
3. **Prioritise opportunities** — Rank by frequency x time-saved
4. **Build templates** — Create reusable templates for high-impact areas
5. **Set up automations** — Configure automated workflows where possible
6. **Document** — Update Notion with new templates and their usage instructions

## Template Opportunities

### Linear Issue Templates
- Bug report template with required fields
- Feature request template with design context
- QA checklist template per feature type
- Sprint retrospective template

### Design File Templates
- New feature canvas layout (Pencil)
- Component spec page structure
- Responsive design artboard set
- User flow diagram template

### Documentation Templates
- Design handoff document structure
- Accessibility audit report format
- Competitive analysis framework
- Research insight synthesis

### Code Templates
- New component file structure
- Storybook story boilerplate
- Design token file format
- Test file structure for visual regression

## Automation Opportunities

### Ticket Workflows
- Auto-create QA checklist when ticket moves to "In Review"
- Auto-link design tickets to implementation tickets
- Auto-notify designers when implementation is ready for review

### Design-to-Code
- Auto-extract tokens when design file is updated
- Auto-generate component props from Figma variants
- Auto-update Storybook when component code changes

### Reporting
- Auto-generate sprint design metrics
- Auto-compile QA issue summaries
- Auto-track design system coverage

## Output Format

```markdown
# Template & Automation Improvements

## Current State
- Templates in use: [Count]
- Automated workflows: [Count]
- Manual repetitive tasks identified: [Count]

## Opportunities
| # | Opportunity | Type | Frequency | Time Saved | Effort to Build |
|---|-----------|------|-----------|-----------|----------------|
| 1 | [Opportunity] | [Template/Automation] | [Per sprint/week] | [Estimated] | [Low/Med/High] |

## Templates Created
1. [Template name]: [Where it lives, how to use it]

## Automations Configured
1. [Automation name]: [Trigger → Action]

## Recommendations
1. [Next template or automation to build]
```

## Rules

- Only automate tasks that are truly repetitive — at least weekly occurrence
- Templates should be flexible enough to adapt, not so rigid they slow people down
- Automations must have clear triggers and predictable outcomes
- Always include a way to override or skip automations
- Document how to use every template — an unused template saves no time
- Measure time saved to justify the effort of building automations
- Start with templates (low effort) before building automations (higher effort)
