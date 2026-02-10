#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const SKILLS_DIR = path.join(__dirname, "..", ".claude", "skills");
const OUTPUT_ROOT = path.join(__dirname, "..", "registry.json");
const OUTPUT_WEBSITE = path.join(
  __dirname,
  "..",
  "website",
  "public",
  "registry.json"
);

const CATEGORY_MAP = {
  "1-planning": "Planning",
  "2-research": "Research",
  "3-exploration": "Exploration",
  "4-refinement": "Refinement",
  "5-handoff": "Handoff",
  "6-qa": "QA",
  "7-design-system": "Design System",
  "8-continuous-improvement": "Continuous Improvement",
};

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    fm[key] = value;
  }
  return fm;
}

function getDisplayTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function buildManifest() {
  const skills = [];

  const categories = fs
    .readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  for (const cat of categories) {
    const catPath = path.join(SKILLS_DIR, cat.name);
    const categoryName = CATEGORY_MAP[cat.name] || cat.name;
    const orderMatch = cat.name.match(/^(\d+)-/);
    const categoryOrder = orderMatch ? parseInt(orderMatch[1], 10) : 99;

    const skillDirs = fs
      .readdirSync(catPath, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .sort((a, b) => a.name.localeCompare(b.name));

    for (const skill of skillDirs) {
      const skillMd = path.join(catPath, skill.name, "SKILL.md");
      if (!fs.existsSync(skillMd)) continue;

      const content = fs.readFileSync(skillMd, "utf-8");
      const fm = parseFrontmatter(content);
      const title = getDisplayTitle(content);

      skills.push({
        id: skill.name,
        name: title || fm.name || skill.name,
        description: fm.description || "",
        category: categoryName,
        categoryOrder,
        path: `.claude/skills/${cat.name}/${skill.name}`,
      });
    }
  }

  return skills;
}

const skills = buildManifest();
const registry = { generatedAt: new Date().toISOString(), skills };
const json = JSON.stringify(registry, null, 2);

fs.writeFileSync(OUTPUT_ROOT, json);
console.log(`Wrote ${skills.length} skills to ${OUTPUT_ROOT}`);

// Copy to website/public/ if the directory exists
const websitePublic = path.dirname(OUTPUT_WEBSITE);
if (fs.existsSync(websitePublic)) {
  fs.writeFileSync(OUTPUT_WEBSITE, json);
  console.log(`Copied to ${OUTPUT_WEBSITE}`);
}
