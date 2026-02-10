---
name: identify-dependencies-risks
description: Identify dependencies, risks, and blockers for a design project by analyzing Linear issues, Slack discussions, and project context. Use when planning a new feature to surface potential problems early.
allowed-tools: Read, Grep, Glob, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__list_issues, mcp__a5bcb7d4-0872-4722-af4e-8c5f8d4516ee__list_projects, mcp__07bc7ee9-cc70-4371-92d2-9b3338dcd3e0__slack_search_public
argument-hint: [feature name or project area]
---

# Identify Dependencies & Risks

Surface dependencies, risks, and potential blockers before design work begins.

## Process

1. **Scope the analysis** — Identify the feature area from `$ARGUMENTS`
2. **Check Linear** — Search for related issues, blockers, and in-progress work
3. **Check Slack** — Find relevant discussions about technical constraints or concerns
4. **Map dependencies** — Identify what must happen before, during, and after this work
5. **Assess risks** — Rate each risk by likelihood and impact
6. **Propose mitigations** — Suggest how to reduce or eliminate each risk

## Dependency Types

- **Design dependencies** — Other design work that must complete first
- **Technical dependencies** — APIs, infrastructure, or code that must exist
- **Content dependencies** — Copy, assets, or data that must be provided
- **External dependencies** — Third-party services, approvals, or legal review
- **Knowledge dependencies** — Research or decisions that must be made

## Risk Assessment Matrix

| Likelihood / Impact | Low Impact | Medium Impact | High Impact |
|---------------------|-----------|--------------|------------|
| **Likely** | Monitor | Mitigate | Block |
| **Possible** | Accept | Monitor | Mitigate |
| **Unlikely** | Accept | Accept | Monitor |

## Output Format

```markdown
# Risk & Dependency Report: [Feature]

## Dependencies
| Dependency | Type | Owner | Status | Blocks |
|-----------|------|-------|--------|--------|
| [Dep] | [Type] | [Who] | [Status] | [What it blocks] |

## Risks
| Risk | Likelihood | Impact | Rating | Mitigation |
|------|-----------|--------|--------|------------|
| [Risk] | [L/M/H] | [L/M/H] | [Accept/Monitor/Mitigate/Block] | [Action] |

## Recommended Sequence
1. [First thing to unblock]
2. [Next step]

## Open Questions
- [Question that needs an answer before proceeding]
```

## Rules

- Always check for in-flight work that could conflict
- Flag any assumption that hasn't been validated
- Include timeline risks, not just technical risks
- Recommend a specific sequence for addressing blockers
