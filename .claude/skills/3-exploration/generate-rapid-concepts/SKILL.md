---
name: generate-rapid-concepts
description: Generate multiple rapid design concepts for a feature using the Pencil canvas, exploring different visual directions and layout approaches. Use when you need to quickly explore the solution space before committing to a direction.
allowed-tools: mcp__pencil__batch_design, mcp__pencil__get_style_guide, mcp__pencil__get_style_guide_tags, mcp__pencil__get_editor_state, mcp__pencil__open_document, mcp__pencil__get_guidelines, mcp__pencil__batch_get, mcp__pencil__find_empty_space_on_canvas
argument-hint: [feature description and number of concepts to generate]
---

# Generate Rapid Concepts

Quickly produce multiple distinct design concepts on the Pencil canvas to explore the solution space.

## Process

1. **Parse the brief** — Extract the feature requirements and constraints from `$ARGUMENTS`
2. **Get style direction** — Use `get_style_guide_tags` then `get_style_guide` to establish a visual direction
3. **Get design guidelines** — Use `get_guidelines` for relevant topic (landing-page, design-system, etc.)
4. **Set up canvas** — Open or create a `.pen` file with `open_document` and use `find_empty_space_on_canvas` to position concepts
5. **Generate concepts** — Create 3+ distinct layout approaches using `batch_design`, each exploring a different:
   - Information hierarchy
   - Layout structure
   - Interaction model
6. **Label each concept** — Add a title and brief rationale to each variant
7. **Screenshot for review** — Capture each concept for comparison

## Concept Variation Strategies

- **Layout**: Vertical stack vs. grid vs. sidebar vs. split-screen
- **Hierarchy**: Hero-first vs. action-first vs. content-first
- **Density**: Spacious/editorial vs. compact/data-dense
- **Navigation**: Tabs vs. accordion vs. progressive disclosure
- **Interaction**: Form-based vs. direct manipulation vs. conversational

## Output Format

Each concept on the canvas should include:
- A label frame with concept name (e.g., "Concept A: Action-First")
- The design itself at a consistent viewport width
- A brief text note explaining the rationale

After generating, provide a summary:

```markdown
# Rapid Concepts: [Feature]

## Concepts Generated
1. **Concept A: [Name]** — [Rationale, e.g., "Prioritises the primary CTA above the fold"]
2. **Concept B: [Name]** — [Rationale]
3. **Concept C: [Name]** — [Rationale]

## Key Differences
| Aspect | Concept A | Concept B | Concept C |
|--------|----------|----------|----------|
| Layout | [Approach] | [Approach] | [Approach] |
| Focus | [What's prioritised] | [What's prioritised] | [What's prioritised] |

## Recommendation
[Which concept(s) to develop further and why]
```

## Rules

- Generate at least 3 concepts — fewer doesn't explore the space enough
- Each concept must be meaningfully different, not just colour or spacing tweaks
- Keep concepts at wireframe/lo-fi level — polish comes later in Refinement
- Use consistent viewport widths so concepts are comparable
- Label everything clearly so stakeholders can reference specific concepts
- Time-box each concept — speed matters more than perfection at this stage
