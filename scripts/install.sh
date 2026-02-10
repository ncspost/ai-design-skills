#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/$(git -C "$(dirname "$0")/.." remote get-url origin 2>/dev/null | sed 's|.*github.com[:/]||;s|\.git$||' || echo 'your-org/ai-design-skills')"
TARGET_DIR="${CLAUDE_SKILLS_DIR:-$HOME/.claude/skills}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

usage() {
  cat <<EOF
Usage: $(basename "$0") [--all] [skill-id ...]

Install AI design skills to $TARGET_DIR

Options:
  --all           Install all skills
  --list          List available skills
  --help, -h      Show this help

Examples:
  $(basename "$0") --all
  $(basename "$0") gather-context analyze-competitors
  $(basename "$0") --list

Environment:
  CLAUDE_SKILLS_DIR   Override target directory (default: ~/.claude/skills)
EOF
  exit 0
}

is_inside_repo() {
  [ -d "$REPO_ROOT/.claude/skills" ]
}

list_skills() {
  if is_inside_repo; then
    find "$REPO_ROOT/.claude/skills" -mindepth 2 -maxdepth 2 -type d | while read -r dir; do
      skill_id="$(basename "$dir")"
      category="$(basename "$(dirname "$dir")")"
      echo "  $skill_id  ($category)"
    done | sort
  else
    echo "Run --list from inside the repository, or clone it first."
    exit 1
  fi
}

install_skill() {
  local skill_id="$1"
  local found=0

  for category_dir in "$REPO_ROOT/.claude/skills"/*/; do
    local skill_dir="$category_dir$skill_id"
    if [ -d "$skill_dir" ]; then
      local category
      category="$(basename "$category_dir")"
      local dest="$TARGET_DIR/$category/$skill_id"
      mkdir -p "$dest"
      cp -R "$skill_dir"/* "$dest"/
      echo "  Installed $skill_id -> $dest"
      found=1
      break
    fi
  done

  if [ "$found" -eq 0 ]; then
    echo "  Warning: skill '$skill_id' not found, skipping"
  fi
}

install_all() {
  for category_dir in "$REPO_ROOT/.claude/skills"/*/; do
    for skill_dir in "$category_dir"*/; do
      [ -d "$skill_dir" ] || continue
      local skill_id
      skill_id="$(basename "$skill_dir")"
      local category
      category="$(basename "$category_dir")"
      local dest="$TARGET_DIR/$category/$skill_id"
      mkdir -p "$dest"
      cp -R "$skill_dir"/* "$dest"/
      echo "  Installed $skill_id ($category)"
    done
  done
}

# --- Main ---

if [ $# -eq 0 ]; then
  usage
fi

if ! is_inside_repo; then
  echo "Cloning repository..."
  TMPDIR="$(mktemp -d)"
  git clone --depth 1 "$REPO_URL" "$TMPDIR/ai-design-skills"
  REPO_ROOT="$TMPDIR/ai-design-skills"
fi

mkdir -p "$TARGET_DIR"

case "${1:-}" in
  --help|-h) usage ;;
  --list) list_skills ;;
  --all)
    echo "Installing all skills to $TARGET_DIR..."
    install_all
    echo "Done! All skills installed."
    ;;
  *)
    echo "Installing selected skills to $TARGET_DIR..."
    for skill_id in "$@"; do
      install_skill "$skill_id"
    done
    echo "Done!"
    ;;
esac
