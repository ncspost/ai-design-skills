---
name: draft-copy-content
description: Draft UI copy and content for a feature, including headings, labels, descriptions, empty states, error messages, and onboarding text. Use when designs need real copy instead of placeholder text.
allowed-tools: Read, Grep, Glob, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__update_issue, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__get_issue, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__create_comment
argument-hint: [feature name and context about the audience/tone]
---

# Draft Copy & Content

Write clear, consistent UI copy that guides users through the experience.

## Process

1. **Understand context** — Review the feature, audience, and brand voice from `$ARGUMENTS`
2. **Map copy needs** — Identify every piece of text the UI requires
3. **Draft copy** — Write each piece following the content principles below
4. **Review for consistency** — Check tone, terminology, and patterns across all copy
5. **Log in Linear** — Attach copy to the relevant issue or add as a comment

## Copy Categories

- **Headings & titles** — Page titles, section headers, modal titles
- **Labels** — Form labels, button text, navigation items, tab names
- **Descriptions** — Helper text, tooltips, feature explanations
- **Actions** — Button labels, link text, CTAs
- **Feedback** — Success messages, error messages, loading states
- **Empty states** — What to show when there's no data
- **Onboarding** — First-run guidance, tooltips, walkthrough text

## Content Principles

- **Clear over clever** — Users scan, they don't read. Say it plainly.
- **Concise** — Every word must earn its place. Cut ruthlessly.
- **Actionable** — Tell users what to do, not just what happened.
- **Consistent** — Same action = same word everywhere (don't mix "delete" and "remove")
- **Human** — Write like a helpful colleague, not a legal document or a robot.

## Output Format

```markdown
# UI Copy: [Feature]

## Voice & Tone
- **Voice**: [Brand voice characteristics]
- **Tone for this context**: [Appropriate tone, e.g., reassuring, encouraging, neutral]

## Copy Inventory
### Page/Screen: [Name]
| Element | Copy | Notes |
|---------|------|-------|
| Page title | [Copy] | [Rationale if needed] |
| CTA button | [Copy] | [Verb + noun pattern] |
| Helper text | [Copy] | |
| Empty state heading | [Copy] | |
| Empty state body | [Copy] | |
| Error message | [Copy] | [When this appears] |

### Terminology Decisions
| Concept | Term Used | Alternatives Rejected | Reason |
|---------|----------|----------------------|--------|
| [Concept] | [Chosen term] | [Other options] | [Why this one] |

## Pattern Notes
- [Patterns established, e.g., "All destructive actions use 'Delete [noun]' format"]
```

## Rules

- Never write placeholder copy like "Lorem ipsum" or "Click here" — every string should be production-ready
- Button labels should start with a verb: "Save changes", "Create project", "Send invite"
- Error messages must explain what went wrong AND how to fix it
- Keep button text under 3 words where possible
- Use sentence case for everything except proper nouns and acronyms
- Test copy at extreme lengths — what happens if a name is 50 characters?
- Avoid jargon unless the audience expects it
