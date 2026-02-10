---
name: facilitate-retrospectives
description: Facilitate design retrospectives by gathering feedback, identifying patterns, and producing structured action items. Use at the end of a sprint, project, or design phase to capture learnings.
allowed-tools: mcp__07bc7ee9-cc70-4371-92d2-9b3338dcd3e0__slack_create_canvas, mcp__07bc7ee9-cc70-4371-92d2-9b3338dcd3e0__slack_send_message, mcp__12a0bdf2-908a-4f15-a52b-6cb37e85ca94__notion-create-pages
argument-hint: [project or sprint to retrospect on]
---

# Facilitate Retrospectives

Run a structured design retrospective to capture learnings and drive improvement.

## Process

1. **Set context** — From `$ARGUMENTS`, identify what's being retrospected
2. **Gather input** — Collect feedback via Slack canvas or direct conversation
3. **Cluster themes** — Group feedback into patterns
4. **Identify actions** — Convert themes into specific, assignable action items
5. **Document** — Create a Notion page with the retrospective output
6. **Share** — Post summary to Slack

## Retrospective Frameworks

### Start / Stop / Continue
- **Start doing**: Things we should try next time
- **Stop doing**: Things that didn't work or are wasteful
- **Continue doing**: Things that worked well

### 4Ls (Liked, Learned, Lacked, Longed For)
- **Liked**: What went well
- **Learned**: New insights gained
- **Lacked**: What was missing
- **Longed for**: What we wish we had

### Timeline Review
- Walk through the project chronologically
- At each phase, note what went well and what didn't
- Identify where problems originated vs. where they surfaced

## Key Questions

- What part of the process felt smooth? What felt like friction?
- Where did miscommunication happen? How could it have been prevented?
- What would we do differently if we started over?
- What tools, templates, or skills would have helped?
- Were any decisions made too early? Too late?
- Did we validate the right assumptions?
- Was the handoff quality good enough for developers?

## Output Format

```markdown
# Retrospective: [Project/Sprint]

## Context
- **Period**: [Date range]
- **Team**: [Who was involved]
- **Scope**: [What was shipped]

## Summary
[2-3 sentence overview of the retrospective]

## What Worked Well
- [Positive pattern 1]
- [Positive pattern 2]

## What Didn't Work
- [Problem 1]: [Impact and root cause]
- [Problem 2]: [Impact and root cause]

## Key Learnings
1. [Insight that changes how we work]
2. [Insight about the product or users]

## Action Items
| # | Action | Owner | Due | Addresses |
|---|--------|-------|-----|----------|
| 1 | [Specific action] | [Person] | [Date] | [Which problem] |

## Process Changes
- [Change to adopt going forward]

## Metrics Impact
- [How this retrospective connects to tracked metrics]
```

## Rules

- Every action item must have an owner and a due date — unowned actions don't happen
- Limit to 3-5 action items — too many means nothing gets done
- Focus on systemic improvements, not blaming individuals
- Action items should be specific: "Create a handoff checklist template" not "improve handoffs"
- Review previous retrospective actions first — did we follow through?
- Balance the positive with the negative — celebrate wins, don't just fix problems
- Share the output with the full team, not just attendees
- Track action item completion in subsequent retrospectives
