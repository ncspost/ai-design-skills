# AI Design Skills

Structured skills for AI design workflows—planning, research, exploration, refinement, handoff, QA, design system, and continuous improvement.

**[Browse the Marketplace](https://nkkko.github.io/ai-design-skills/)**

## Install

Clone the repo and use the install script to copy skills into `~/.claude/skills`:

```bash
# Install all 48 skills
git clone https://github.com/nkkko/ai-design-skills.git
cd ai-design-skills
./scripts/install.sh --all

# Install specific skills
./scripts/install.sh gather-context analyze-competitors

# List available skills
./scripts/install.sh --list
```

Override the target directory with `CLAUDE_SKILLS_DIR`:

```bash
CLAUDE_SKILLS_DIR=~/my-skills ./scripts/install.sh --all
```

## Structure

Skills live in `.claude/skills/` and follow **verb-noun** naming. Categories:

1. **Planning** — gather context, audit design system, decompose requirements, identify dependencies & risks, draft acceptance criteria, generate user stories
2. **Research** — analyze competitors, identify assumptions, audit current UX, generate insights, generate opportunity solution trees, synthesize user feedback
3. **Exploration** — critique designs, draft copy, explore layouts, generate rapid concepts, match patterns to design system, explore workflows
4. **Refinement** — check design consistency, generate copy for all states, ideate micro-interactions, identify edge cases, review accessibility, suggest responsive adaptations
5. **Handoff** — break down dev tasks, document behaviours, extract design tokens, generate component specs, generate Storybook stories, translate design to code
6. **QA** — analyze visual regressions, audit accessibility, compare design fidelity, generate automated fixes, generate QA checklists, verify edge cases
7. **Design System** — assess & migrate shadcn updates, audit components & detect redundancy, detect patterns across codebase, generate & maintain documentation, manage design tokens, plan deprecations
8. **Continuous Improvement** — create & refine skills, identify design debt, facilitate retrospectives, improve templates & automation, track & report metrics, analyze workflow patterns

## Usage

Use with Claude (or compatible agents) that load skills from this directory. Each skill has a `SKILL.md` with name, description, allowed tools, and instructions.

## Development

```bash
# Regenerate the skills registry
npm run build:manifest

# Run the preview website locally
cd website && npm run dev
```
